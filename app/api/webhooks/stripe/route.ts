import { NextResponse } from "next/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy", {
    apiVersion: "2026-05-27.dahlia", // Adjust to the latest or installed version
  });
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  // Handle successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;

    if (userId) {
      try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(userId, {
          publicMetadata: {
            rykerTier: "premium",
          },
        });
        console.log(`Successfully upgraded user ${userId} to Ryker Premium`);
      } catch (err) {
        console.error("Failed to update user metadata in Clerk:", err);
        return NextResponse.json({ error: "Clerk Update Error" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
