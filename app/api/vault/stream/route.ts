import { NextRequest, NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getRykerSession } from "@/lib/auth";

// Initialize S3 client with bypass options to avoid checksum calculation
// which causes signature mismatch errors (403) on some browsers/mobile OS.
const s3Client = new S3Client({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED",
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "singitpop-music";

// Explicit mappings of album ID -> S3 folder name
const albumFolders: Record<string, string> = {
  "lights-gold": "when-the-lights-go-gold",
  "boots-autumn": "boots-in-the-autumn-dust",
  "september-gold": "september-turns-gold",
  "love-forever": "our-love-our-forever",
  "backroads-bloom": "backroads-in-bloom",
  "christmas-year": "christmas-all-year-long",
};

// Explicit mappings of track indices -> S3 file base names
const trackFiles: Record<string, Record<string, string>> = {
  "lights-gold": {
    "01": "Friday Again",
    "02": "Midnight Motion",
    "03": "Cold Smoke",
    "04": "Blue Flame",
    "05": "When The Lights Go Gold",
    "06": "Kiss Me Like That",
    "07": "Midnight Static",
    "08": "White Line Weather",
    "09": "Too Close To Midnight",
    "10": "What We Were",
    "11": "Stay Till Sunday",
    "12": "One More Summer",
  },
  "boots-autumn": {
    "01": "Honky Tonk Sundown",
    "02": "August Heatwave",
    "03": "Barefoot on the Backroad",
    "04": "Neon Barn Nights",
    "05": "Sweet Tea and Blue Jeans",
    "06": "Dust Kicking Rhythm",
    "07": "Sunburnt Memories",
    "08": "Tailgate Turn Up",
    "09": "Riverbank Two Step",
    "10": "Fireflies and Front Porches",
    "11": "Whiskey Weather",
    "12": "Last Dance in the Dirt",
  },
  "september-gold": {
    "01": "Whiskey In The Headlights",
    "02": "Dust On The Blacktop",
    "03": "Neon County Line",
    "04": "Midnight Gravel",
    "05": "September Turns Gold",
    "06": "One More Round",
    "07": "Backroad Heartbeat",
    "08": "Highway On Fire",
    "09": "Southern Steel",
    "10": "Last Call Eyes",
    "11": "Bootleg Midnight",
    "12": "Back To Gold",
    "13": "September Turns Gold Remix Live",
  },
  "love-forever": {
    "01": "Here Comes the Light",
    "02": "I Choose You",
    "03": "Two Roads One Heart",
    "04": "Bound to You",
    "05": "Now and Always",
    "06": "First and Always",
    "07": "Before I Knew Your Name",
    "08": "Like Home",
    "09": "Forever Starts With You",
    "10": "Hold This Moment",
    "11": "One Lifetime More",
    "12": "The Last Song We’ll Ever Need",
    "13": "Here Comes the Light Wedding Version",
    "14": "I Choose You Wedding Version",
    "15": "Two Roads One Heart Wedding Version",
    "16": "Bound to You Wedding Version",
    "17": "Before I Knew Your Name Wedding Version",
  },
  "backroads-bloom": {
    "01": "Spring Came Early",
    "02": "Backroads in Bloom",
    "03": "Friday Night Fireflies",
    "04": "Polaroids on the Dashboard",
    "05": "Nobody Since You",
    "06": "Right Where We Left Off",
    "07": "One More Time Around",
    "08": "Better Than We Were",
    "09": "Easy As Breathing",
    "10": "Front Porch Lights",
    "11": "When It's You",
    "12": "A Hundred Summers",
  },
  "christmas-year": {
    "01": "Where We Belong",
    "02": "Beneath the Lights",
    "03": "Sleigh Ride Saturday Night",
    "04": "Wrapped Up in Red",
    "05": "Highway Home for the Holidays",
    "06": "One More Round of Mistletoe",
    "07": "Midnight Church Bells",
    "08": "Santa's Got a Pickup Truck",
    "09": "Grandpa's Old Christmas Tree",
    "10": "Snow on the Dance Floor",
    "11": "Christmas All Year Long",
    "12": "Christmas Ain't Over Yet",
  },
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");
    const album = searchParams.get("album");
    const track = searchParams.get("track");
    const format = searchParams.get("format") || "mp3"; // mp3 or wav
    const download = searchParams.get("download") === "true";

    if (!key && (!album || !track)) {
      return NextResponse.json(
        { error: "Missing parameters 'album', 'track' or 'key'" },
        { status: 400 }
      );
    }

    // 1. Block downloads
    if (download) {
      return NextResponse.json(
        { error: "Downloads are no longer supported on this platform" },
        { status: 403 }
      );
    }

    // 2. Block direct S3 key requests (e.g. ringtones/zips)
    if (key) {
      return NextResponse.json(
        { error: "Direct key downloads are disabled" },
        { status: 403 }
      );
    }

    const fileExt = format.toLowerCase() === "wav" ? "wav" : "mp3";

    const folder = albumFolders[album!];
    const trackDict = trackFiles[album!];

    if (!folder || !trackDict) {
      return NextResponse.json(
        { error: "Invalid album ID" },
        { status: 400 }
      );
    }

    const fileBaseName = trackDict[track!];
    if (!fileBaseName) {
      return NextResponse.json(
        { error: "Invalid track ID" },
        { status: 400 }
      );
    }

    const s3Key = `albums/${folder}/${fileBaseName}.${fileExt}`;

    console.log(`[Vault API] Generating signed URL for key: ${s3Key}`);

    // If downloading, format the filename nicely for saving
    const safeFilename = `${fileBaseName}.${fileExt}`.replace(/[^a-zA-Z0-9.-]/g, "_");

    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Key,
      ResponseContentDisposition: download
        ? `attachment; filename="${safeFilename}"`
        : undefined,
    });

    // Generate signed URL (expires in 1 hour)
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // Redirect to the signed S3 URL
    return NextResponse.redirect(signedUrl, { status: 302 });
  } catch (err: any) {
    console.error("[Vault API] Route handler failed:", err.message || err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
