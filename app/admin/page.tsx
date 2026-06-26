import React from "react";
import { getRykerSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminMessaging from "./AdminMessaging";
import AdminUserList from "./AdminUserList";
import AdminAnalytics from "./AdminAnalytics";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getRykerSession();

  // Strict role-based protection
  if (!session || !["LABEL", "ADMIN"].includes(session.role.toUpperCase())) {
    redirect("/club");
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--background-dark)",
      color: "white",
      padding: "120px 2rem 4rem",
      fontFamily: "var(--font-inter)",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
          <div>
            <h1 style={{ 
              fontFamily: "var(--font-playfair)", 
              fontSize: "3rem", 
              color: "var(--accent-gold)",
              margin: "0 0 0.5rem 0"
            }}>
              Label Control Center
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "1.1rem" }}>
              Manage users and broadcast messages to the Fan Portal.
            </p>
          </div>
          <Link href="/club">
            <button style={{
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", padding: "0.8rem 1.5rem", borderRadius: "30px", cursor: "pointer"
            }}>
              Back to App
            </button>
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          
          {/* Analytics Section */}
          <section style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(226,179,90,0.2)",
            borderRadius: "24px", padding: "2rem"
          }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--accent-gold)" }}>
              Site Analytics & Visitor Traffic
            </h2>
            <AdminAnalytics />
          </section>

          {/* Messaging Section */}
          <section style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(226,179,90,0.2)",
            borderRadius: "24px", padding: "2rem"
          }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--accent-gold)" }}>
              Broadcast to Fans
            </h2>
            <AdminMessaging />
          </section>

          {/* User Management Section */}
          <section style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(226,179,90,0.2)",
            borderRadius: "24px", padding: "2rem"
          }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--accent-gold)" }}>
              User Directory
            </h2>
            <AdminUserList />
          </section>

        </div>
      </div>
    </div>
  );
}
