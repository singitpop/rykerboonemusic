"use client";

import React, { useMemo } from "react";
import { LYRICS_DATA } from "@/data/lyrics";

export default function KaraokeLyrics({ trackTitle }: { trackTitle: string }) {
  const parsedLyrics = useMemo(() => {
    const rawText = LYRICS_DATA[trackTitle] || "Instrumental / Lyrics unavailable";
    const rawLines = rawText.split('\n').filter(line => line.trim().length > 0);
    
    // Check if lines have LRC timestamps like [01:23.45] and strip them
    const lrcRegex = /^\[(\d{2}):(\d{2}(?:\.\d{2})?)\]/;
    
    return rawLines.map(line => {
      const match = line.match(lrcRegex);
      if (match) {
        return line.replace(lrcRegex, '').trim();
      }
      return line;
    });
  }, [trackTitle]);

  return (
    <div style={{
      width: "100%",
      flex: 1,
      marginTop: "2rem",
      background: "rgba(0,0,0,0.2)",
      borderRadius: "16px",
      overflowY: "auto", // Allow manual scrolling
      position: "relative",
      maxHeight: "350px", // Keep it contained
      scrollbarWidth: "thin",
      scrollbarColor: "var(--accent-gold) rgba(0,0,0,0.2)"
    }}>
      <div style={{ padding: "2rem 0" }}>
        {parsedLyrics.map((lineText, idx) => (
          <div 
            key={idx}
            style={{
              padding: "0.5rem 2rem",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              fontFamily: "var(--font-playfair)"
            }}
          >
            {lineText}
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
