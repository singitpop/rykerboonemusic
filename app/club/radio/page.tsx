import React from "react";
import RadioPlayer from "@/components/RadioPlayer";
import { getRykerSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function RadioPage() {
  const session = await getRykerSession();

  if (!session) {
    redirect("/sign-in");
  }

  const isPremium =
    (session.rykerTier || "").toUpperCase() === "PREMIUM" ||
    (session.rykerTier || "").toUpperCase() === "VIP" ||
    ["PREMIUM", "VIP", "INSIDER", "LABEL", "ADMIN"].includes(
      (session.tier || "").toUpperCase()
    ) ||
    ["LABEL", "ADMIN"].includes((session.role || "").toUpperCase());

  if (!isPremium) {
    redirect("/club");
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #111, #000)",
      color: "white",
      padding: "120px 2rem 4rem",
      fontFamily: "var(--font-inter)",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
          <div>
            <h1 style={{ 
              fontFamily: "var(--font-playfair)", 
              fontSize: "3rem", 
              color: "var(--accent-gold)",
              margin: "0 0 0.5rem 0"
            }}>
              Premium Radio
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "1.1rem" }}>
              Continuous, ad-free streaming of the entire Ryker Boone catalog.
            </p>
          </div>
          <Link href="/club">
            <button style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              Back to Club
            </button>
          </Link>
        </div>

        <RadioPlayer />

      </div>
    </div>
  );
}
