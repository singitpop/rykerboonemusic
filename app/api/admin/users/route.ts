import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { getRykerSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getRykerSession();
    if (!session || !["LABEL", "ADMIN"].includes(session.role.toUpperCase())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clerkClient();
    const userList = await client.users.getUserList({
      limit: 100, // Adjust as needed
      orderBy: "-created_at"
    });

    const users = userList.data.map((user) => ({
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress || "No email",
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      metadata: user.publicMetadata,
    }));

    return NextResponse.json(users);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
