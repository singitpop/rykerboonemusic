import React from "react";
import RadioPlayer from "@/components/RadioPlayer";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function RadioPage() {
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
              Ryker Boone Radio
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "1.1rem" }}>
              Continuous, ad-free streaming of the entire Ryker Boone catalog.
            </p>
          </div>
          <Link href="/music">
            <button style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}>
              Back to Music
            </button>
          </Link>
        </div>

        <RadioPlayer />

      </div>
    </div>
  );
}
