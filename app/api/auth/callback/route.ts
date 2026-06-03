import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.CLERK_SECRET_KEY || "fallback_secret_key";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    try {
        const payload = jwt.verify(token, SECRET_KEY) as any;
        
        // Prepare the session cookie data
        const sessionData = {
            userId: payload.userId,
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            tier: payload.tier,
            rykerTier: payload.rykerTier,
            rykerBanned: payload.rykerBanned,
            role: payload.role
        };

        const res = NextResponse.redirect(new URL("/club", req.url));
        
        // Set the secure cookie
        res.cookies.set("ryker_session", JSON.stringify(sessionData), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 30 // 30 days
        });

        return res;
    } catch (error) {
        console.error("Auth bridge token verification failed:", error);
        return NextResponse.redirect(new URL("/?error=auth_failed", req.url));
    }
}
