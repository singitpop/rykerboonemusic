import { cookies } from "next/headers";

export interface RykerSession {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    tier: string;
    rykerTier: string;
    rykerBanned: boolean;
    role: string;
}

export async function getRykerSession(): Promise<RykerSession | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("ryker_session");

    if (!sessionCookie || !sessionCookie.value) {
        return null;
    }

    try {
        const session = JSON.parse(sessionCookie.value) as RykerSession;
        return session;
    } catch (e) {
        return null;
    }
}
