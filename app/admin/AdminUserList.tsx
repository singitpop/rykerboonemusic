"use client";

import React, { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: number;
  metadata: {
    role?: string;
    rykerTier?: string;
    tier?: string;
    rykerBanned?: boolean;
  };
}

export default function AdminUserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        }
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleAction = async (userId: string, action: string, tier?: string) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, action, tier }),
      });
      if (res.ok) {
        // Refetch users to update the UI
        const usersRes = await fetch("/api/admin/users");
        if (usersRes.ok) {
          const data = await usersRes.json();
          setUsers(data);
        }
      }
    } catch (err) {
      console.error("Action failed", err);
    }
  };

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
            <th style={{ padding: "1rem", color: "rgba(255,255,255,0.7)" }}>Name</th>
            <th style={{ padding: "1rem", color: "rgba(255,255,255,0.7)" }}>Email</th>
            <th style={{ padding: "1rem", color: "rgba(255,255,255,0.7)" }}>Joined</th>
            <th style={{ padding: "1rem", color: "rgba(255,255,255,0.7)" }}>Role</th>
            <th style={{ padding: "1rem", color: "rgba(255,255,255,0.7)" }}>Ryker Tier</th>
            <th style={{ padding: "1rem", color: "rgba(255,255,255,0.7)", textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <td style={{ padding: "1rem" }}>{user.firstName} {user.lastName}</td>
              <td style={{ padding: "1rem" }}>{user.email}</td>
              <td style={{ padding: "1rem" }}>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td style={{ padding: "1rem" }}>
                <span style={{
                  background: user.metadata?.role === "label" ? "var(--accent-gold)" : "rgba(255,255,255,0.1)",
                  color: user.metadata?.role === "label" ? "black" : "white",
                  padding: "0.2rem 0.5rem", borderRadius: "12px", fontSize: "0.8rem", fontWeight: "bold"
                }}>
                  {user.metadata?.role || "fan"}
                </span>
              </td>
              <td style={{ padding: "1rem" }}>
                {user.metadata?.rykerBanned ? (
                  <span style={{
                    background: "rgba(239, 68, 68, 0.2)",
                    color: "#ef4444",
                    padding: "0.2rem 0.5rem", borderRadius: "12px", fontSize: "0.8rem", fontWeight: "bold", marginRight: "0.5rem"
                  }}>
                    BANNED
                  </span>
                ) : (
                  <span style={{
                    background: (user.metadata?.rykerTier || user.metadata?.tier) === "premium" ? "rgba(0,255,0,0.2)" : "rgba(255,255,255,0.1)",
                    color: (user.metadata?.rykerTier || user.metadata?.tier) === "premium" ? "#4f4" : "white",
                    padding: "0.2rem 0.5rem", borderRadius: "12px", fontSize: "0.8rem", fontWeight: "bold"
                  }}>
                    {(user.metadata?.rykerTier || user.metadata?.tier || "free").toUpperCase()}
                  </span>
                )}
              </td>
              <td style={{ padding: "1rem", textAlign: "right", display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                {(user.metadata?.rykerTier || user.metadata?.tier) !== "premium" ? (
                  <button 
                    onClick={() => handleAction(user.id, "set_ryker_tier", "PREMIUM")}
                    style={{ background: "rgba(226,179,90,0.2)", border: "1px solid var(--accent-gold)", color: "var(--accent-gold)", padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.7rem", cursor: "pointer", fontWeight: "bold" }}
                  >
                    Upgrade
                  </button>
                ) : (
                  <button 
                    onClick={() => handleAction(user.id, "set_ryker_tier", "FREE")}
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.7rem", cursor: "pointer", fontWeight: "bold" }}
                  >
                    Downgrade
                  </button>
                )}
                
                <button 
                  onClick={() => handleAction(user.id, "toggle_ryker_ban")}
                  style={{ background: user.metadata?.rykerBanned ? "rgba(0,255,0,0.1)" : "rgba(239, 68, 68, 0.1)", border: user.metadata?.rykerBanned ? "1px solid rgba(0,255,0,0.3)" : "1px solid rgba(239, 68, 68, 0.3)", color: user.metadata?.rykerBanned ? "#4f4" : "#ef4444", padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.7rem", cursor: "pointer", fontWeight: "bold" }}
                >
                  {user.metadata?.rykerBanned ? "Unban" : "Ban"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
