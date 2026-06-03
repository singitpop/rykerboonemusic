"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignInPage() {
  return (
    <main style={{ background: "#050505", minHeight: "100vh", color: "white" }}>
      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 2rem 4rem",
          background: "radial-gradient(ellipse at 50% 20%, rgba(226,179,90,0.06) 0%, transparent 60%)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              color: "var(--accent-gold)",
              fontSize: "0.7rem",
              fontWeight: "900",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Ryker Boone — Official
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "900",
              color: "white",
              margin: 0,
              marginBottom: "0.75rem",
            }}
          >
            LABEL ACCESS
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.9rem",
              maxWidth: "380px",
              lineHeight: "1.6",
              margin: "0 auto",
            }}
          >
            Sign in with your SingIt Pop label account to unlock all content,
            including pre-release lyrics and full-quality vault access.
          </p>
        </div>

        {/* Clerk SignIn — inherits your singitpop.club account */}
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            /* Override Clerk's default white background */
          }}
        >
          <a href={`https://club.singitpop.com/api/auth-bridge?return_url=${typeof window !== 'undefined' ? encodeURIComponent(`${window.location.origin}/api/auth/callback`) : ''}`}>
            <button style={{
              width: "100%", padding: "1.5rem", borderRadius: "8px",
              background: "var(--accent-gold)", color: "black",
              border: "none", fontWeight: "900", cursor: "pointer",
              fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase",
              boxShadow: "0 10px 30px rgba(226,179,90,0.3)",
              transition: "transform 0.2s"
            }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              Sign In via Singitpop
            </button>
          </a>
        </div>

        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.2)",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          This shares the same account as SingIt Pop — no separate registration needed.
        </p>
      </section>

      <Footer />
    </main>
  );
}
