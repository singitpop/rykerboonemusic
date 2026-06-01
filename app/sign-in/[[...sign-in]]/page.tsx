"use client";

import { SignIn } from "@clerk/nextjs";
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
          <SignIn
            routing="hash"
            fallbackRedirectUrl="/club"
            appearance={{
              variables: {
                colorPrimary: "#e2b35a",
                colorBackground: "#0f0f0f",
                colorText: "#ffffff",
                colorInputBackground: "#1a1a1a",
                colorInputText: "#ffffff",
                borderRadius: "8px",
              },
              elements: {
                card: {
                  background: "rgba(15,15,15,0.98)",
                  border: "1px solid rgba(226,179,90,0.2)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
                },
                headerTitle: {
                  color: "#ffffff",
                  fontFamily: "var(--font-playfair)",
                },
                headerSubtitle: {
                  color: "rgba(255,255,255,0.5)",
                },
                socialButtonsBlockButton: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                },
                dividerLine: {
                  background: "rgba(255,255,255,0.08)",
                },
                dividerText: {
                  color: "rgba(255,255,255,0.3)",
                },
                formFieldLabel: {
                  color: "rgba(255,255,255,0.6)",
                },
                footerActionLink: {
                  color: "#e2b35a",
                },
              },
            }}
          />
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
