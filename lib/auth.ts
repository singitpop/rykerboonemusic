import { currentUser } from "@clerk/nextjs/server";

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
    try {
        const user = await currentUser();
        if (!user) return null;

        const metadata = user.publicMetadata || {};
        
        return {
            userId: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            tier: (metadata.tier as string) || "free",
            rykerTier: (metadata.rykerTier as string) || "free",
            rykerBanned: !!metadata.rykerBanned,
            role: (metadata.role as string) || "fan"
        };
    } catch (error) {
        console.error("Error fetching native Clerk session:", error);
        return null;
    }
}
