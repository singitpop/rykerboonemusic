import { NextRequest, NextResponse } from "next/server";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getRykerSession } from "@/lib/auth";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "singitpop-music";
const MESSAGES_KEY = "ryker/admin/messages.json";

export async function GET(request: NextRequest) {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: MESSAGES_KEY,
    });
    const response = await s3Client.send(command);
    const bodyStr = await response.Body?.transformToString();
    const messages = bodyStr ? JSON.parse(bodyStr) : [];
    return NextResponse.json(messages);
  } catch (error: any) {
    if (error.name === "NoSuchKey") {
      return NextResponse.json([]); // No messages yet
    }
    console.error("Error fetching messages from S3:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Only LABEL role can post messages
    const session = await getRykerSession();
    if (!session || session.role.toUpperCase() !== "LABEL") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { content } = await request.json();
    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    // Fetch existing messages first
    let messages = [];
    try {
      const getCommand = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: MESSAGES_KEY,
      });
      const getResponse = await s3Client.send(getCommand);
      const bodyStr = await getResponse.Body?.transformToString();
      if (bodyStr) {
        messages = JSON.parse(bodyStr);
      }
    } catch (e: any) {
      if (e.name !== "NoSuchKey") throw e;
    }

    // Add new message
    const newMessage = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
      author: session.firstName + " " + session.lastName,
    };
    messages.unshift(newMessage); // put newest first

    // Save back to S3
    const putCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: MESSAGES_KEY,
      Body: JSON.stringify(messages),
      ContentType: "application/json",
    });
    await s3Client.send(putCommand);

    return NextResponse.json({ success: true, message: newMessage });
  } catch (error: any) {
    console.error("Error posting message to S3:", error);
    return NextResponse.json({ error: "Failed to post message" }, { status: 500 });
  }
}
