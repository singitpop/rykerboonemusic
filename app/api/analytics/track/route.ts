import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "singitpop-music";

export async function POST(request: NextRequest) {
  try {
    const { path, visitorId, referrer, isNewSession } = await request.json();

    if (!path || !visitorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const now = new Date();
    const dateStr = now.toISOString().split("T")[0]; // YYYY-MM-DD
    const timestamp = now.getTime();
    const randomId = Math.random().toString(36).substring(2, 10);
    const key = `ryker/analytics/raw/${dateStr}/${timestamp}_${randomId}.json`;

    const eventData = {
      timestamp: now.toISOString(),
      path,
      visitorId,
      referrer: referrer || "direct",
      isNewSession: !!isNewSession,
    };

    const putCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: JSON.stringify(eventData),
      ContentType: "application/json",
    });

    await s3Client.send(putCommand);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error writing tracking event to S3:", error);
    // Return 200/success even on error so client side tracker doesn't cause user visible errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 200 });
  }
}
