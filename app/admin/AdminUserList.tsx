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
                <span style={{
                  background: (user.metadata?.rykerTier || user.metadata?.tier) === "premium" ? "rgba(0,255,0,0.2)" : "rgba(255,255,255,0.1)",
                  color: (user.metadata?.rykerTier || user.metadata?.tier) === "premium" ? "#4f4" : "white",
                  padding: "0.2rem 0.5rem", borderRadius: "12px", fontSize: "0.8rem", fontWeight: "bold"
                }}>
                  {(user.metadata?.rykerTier || user.metadata?.tier || "free").toUpperCase()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
