"use client";

import React, { useState, useEffect } from "react";

interface Message {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

export default function AdminMessaging() {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (err) {
      console.error("Failed to load messages", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handlePost = async () => {
    if (!content.trim()) return;
    setIsPosting(true);
    try {
      const res = await fetch("/api/admin/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (res.ok) {
        setContent("");
        await fetchMessages();
      } else {
        alert("Failed to post message.");
      }
    } catch (err) {
      console.error("Failed to post:", err);
      alert("Error posting message.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write an update, advice, or project announcement..."
          style={{
            width: "100%", height: "150px", padding: "1rem", borderRadius: "12px",
            background: "rgba(0,0,0,0.5)", color: "white", border: "1px solid rgba(255,255,255,0.2)",
            fontFamily: "var(--font-inter)", fontSize: "1rem", resize: "vertical"
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button
            onClick={handlePost}
            disabled={isPosting || !content.trim()}
            style={{
              background: "var(--accent-gold)", color: "black", border: "none",
              padding: "0.8rem 2rem", borderRadius: "8px", fontWeight: "bold",
              cursor: (isPosting || !content.trim()) ? "not-allowed" : "pointer",
              opacity: (isPosting || !content.trim()) ? 0.5 : 1
            }}
          >
            {isPosting ? "Posting..." : "Post Message"}
          </button>
        </div>
      </div>

      <div>
        <h3 style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>Recent Broadcasts</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : messages.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.5)" }}>No messages sent yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "8px" }}>
                <p style={{ margin: "0 0 0.5rem 0", whiteSpace: "pre-wrap" }}>{msg.content}</p>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", display: "flex", justifyContent: "space-between" }}>
                  <span>By {msg.author}</span>
                  <span>{new Date(msg.createdAt).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
