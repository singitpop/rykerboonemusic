import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { getRykerSession } from "@/lib/auth";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "singitpop-music";
const SUMMARY_KEY = "ryker/analytics/summary.json";
const RAW_PREFIX = "ryker/analytics/raw/";

interface AnalyticsSummary {
  lastUpdated: string;
  totals: {
    pageViews: number;
    uniqueVisitors: number;
  };
  uniqueVisitorIds: string[];
  daily: {
    [date: string]: {
      pageViews: number;
      uniqueVisitors: number;
      visitorIds: string[];
    };
  };
  pages: { [path: string]: number };
  referrers: { [referrer: string]: number };
}

export async function GET() {
  try {
    // 1. Authorize: Only Label or Admin can fetch stats
    const session = await getRykerSession();
    if (!session || !["LABEL", "ADMIN"].includes(session.role.toUpperCase())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Fetch existing summary.json
    let summary: AnalyticsSummary = {
      lastUpdated: new Date().toISOString(),
      totals: { pageViews: 0, uniqueVisitors: 0 },
      uniqueVisitorIds: [],
      daily: {},
      pages: {},
      referrers: {},
    };

    try {
      const getSummaryCmd = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: SUMMARY_KEY,
      });
      const response = await s3Client.send(getSummaryCmd);
      const summaryStr = await response.Body?.transformToString();
      if (summaryStr) {
        summary = JSON.parse(summaryStr);
      }
    } catch (e: unknown) {
      if (e && typeof e === "object" && "name" in e && e.name !== "NoSuchKey") {
        console.error("Error reading analytics summary:", e);
      }
    }

    // Ensure all required fields exist (in case of legacy/corrupted summary format)
    if (!summary.totals) summary.totals = { pageViews: 0, uniqueVisitors: 0 };
    if (!summary.uniqueVisitorIds) summary.uniqueVisitorIds = [];
    if (!summary.daily) summary.daily = {};
    if (!summary.pages) summary.pages = {};
    if (!summary.referrers) summary.referrers = {};

    // 3. List raw page view event files
    const listCmd = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: RAW_PREFIX,
      MaxKeys: 1000, // Fetch up to 1000 raw events at a time
    });

    const listResponse = await s3Client.send(listCmd);
    const contents = listResponse.Contents || [];

    // Filter out directories/folders and only get files
    const eventKeys = contents
      .map((item) => item.Key)
      .filter((key): key is string => !!key && key !== RAW_PREFIX);

    if (eventKeys.length > 0) {
      const uniqueAllVisitors = new Set<string>(summary.uniqueVisitorIds);
      const keysToDelete: string[] = [];

      // 4. Fetch and aggregate each event
      for (const key of eventKeys) {
        try {
          const getEventCmd = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
          });
          const eventResponse = await s3Client.send(getEventCmd);
          const eventStr = await eventResponse.Body?.transformToString();
          if (eventStr) {
            const event = JSON.parse(eventStr);
            const { path, visitorId, referrer, timestamp } = event;

            if (!path || !visitorId) continue;

            const dateStr = timestamp ? timestamp.split("T")[0] : new Date().toISOString().split("T")[0];

            // Update Totals
            summary.totals.pageViews += 1;
            uniqueAllVisitors.add(visitorId);

            // Update Daily Breakdown
            if (!summary.daily[dateStr]) {
              summary.daily[dateStr] = { pageViews: 0, uniqueVisitors: 0, visitorIds: [] };
            }
            summary.daily[dateStr].pageViews += 1;
            const dailyVisitorSet = new Set(summary.daily[dateStr].visitorIds || []);
            dailyVisitorSet.add(visitorId);
            summary.daily[dateStr].visitorIds = Array.from(dailyVisitorSet);
            summary.daily[dateStr].uniqueVisitors = dailyVisitorSet.size;

            // Update Pages Breakdown
            // Clean path slightly (remove trailing slash unless it's just /)
            const cleanPath = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
            summary.pages[cleanPath] = (summary.pages[cleanPath] || 0) + 1;

            // Update Referrers Breakdown
            // Normalize referrer to keep hostnames
            let cleanReferrer = "direct";
            if (referrer && referrer !== "direct") {
              try {
                const url = new URL(referrer);
                cleanReferrer = url.hostname;
              } catch {
                cleanReferrer = referrer;
              }
            }
            summary.referrers[cleanReferrer] = (summary.referrers[cleanReferrer] || 0) + 1;

            keysToDelete.push(key);
          }
        } catch (eventErr) {
          console.error(`Failed to process analytics event ${key}:`, eventErr);
        }
      }

      // Convert Set back to array for summary serialization
      summary.uniqueVisitorIds = Array.from(uniqueAllVisitors);
      summary.totals.uniqueVisitors = uniqueAllVisitors.size;
      summary.lastUpdated = new Date().toISOString();

      // 5. Save updated summary.json back to S3
      const putSummaryCmd = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: SUMMARY_KEY,
        Body: JSON.stringify(summary),
        ContentType: "application/json",
      });
      await s3Client.send(putSummaryCmd);

      // 6. Delete processed raw events
      // S3 delete objects limit is 1000 per request, keysToDelete matches that limit
      if (keysToDelete.length > 0) {
        const deleteCmd = new DeleteObjectsCommand({
          Bucket: BUCKET_NAME,
          Delete: {
            Objects: keysToDelete.map((key) => ({ Key: key })),
            Quiet: true,
          },
        });
        await s3Client.send(deleteCmd);
      }
    }

    // 7. Format clean response (omit uniqueVisitorIds array and visitorIds arrays in daily to optimize response payload size)
    const cleanDaily: { [date: string]: { pageViews: number; uniqueVisitors: number } } = {};
    Object.keys(summary.daily).forEach((date) => {
      cleanDaily[date] = {
        pageViews: summary.daily[date].pageViews,
        uniqueVisitors: summary.daily[date].uniqueVisitors,
      };
    });

    const responsePayload = {
      lastUpdated: summary.lastUpdated,
      totals: summary.totals,
      daily: cleanDaily,
      pages: summary.pages,
      referrers: summary.referrers,
    };

    return NextResponse.json(responsePayload);
  } catch (error: unknown) {
    console.error("Error in admin analytics route:", error);
    return NextResponse.json({ error: "Failed to load/compile analytics" }, { status: 500 });
  }
}
