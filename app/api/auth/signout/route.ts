import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { searchParams } = new URL(req.url);
    const redirectUrl = searchParams.get("redirectUrl") || "/";

    const res = NextResponse.redirect(new URL(redirectUrl, req.url));
    res.cookies.delete("ryker_session");
    
    return res;
}
