"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { LYRICS_DATA } from "@/data/lyrics";

export default function KaraokeLyrics({ trackTitle, progress, currentTime = 0 }: { trackTitle: string; progress: number, currentTime?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const parsedLyrics = useMemo(() => {
    const rawText = LYRICS_DATA[trackTitle] || "Instrumental / Lyrics unavailable";
    const rawLines = rawText.split('\n').filter(line => line.trim().length > 0);
    
    // Check if lines have LRC timestamps like [01:23.45]
    const lrcRegex = /^\[(\d{2}):(\d{2}(?:\.\d{2})?)\]/;
    let hasTimestamps = false;
    
    const parsed = rawLines.map((line, idx) => {
      const match = line.match(lrcRegex);
      if (match) {
        hasTimestamps = true;
        const minutes = parseInt(match[1], 10);
        const seconds = parseFloat(match[2]);
        const timeInSeconds = (minutes * 60) + seconds;
        const text = line.replace(lrcRegex, '').trim();
        return { time: timeInSeconds, text, isLrc: true };
      }
      return { time: 0, text: line, isLrc: false };
    });
    
    return { lines: parsed, hasTimestamps };
  }, [trackTitle]);

  const activeIndex = useMemo(() => {
    const { lines, hasTimestamps } = parsedLyrics;
    
    if (lines.length === 0) return 0;

    if (hasTimestamps) {
      // Find the last line whose timestamp is <= currentTime
      let active = 0;
      for (let i = 0; i < lines.length; i++) {
        if (currentTime >= lines[i].time) {
          active = i;
        } else {
          break; // Stop since lines are chronological
        }
      }
      return active;
    } else {
      // Assume lyrics happen roughly between 12% and 90% of the song
      const startOffset = 12;
      const endOffset = 10;
      
      let normalizedProgress = 0;
      if (progress <= startOffset) {
        normalizedProgress = 0;
      } else if (progress >= (100 - endOffset)) {
        normalizedProgress = 100;
      } else {
        normalizedProgress = ((progress - startOffset) / (100 - startOffset - endOffset)) * 100;
      }

      return Math.min(
        Math.max(0, Math.floor((normalizedProgress / 100) * lines.length)),
        lines.length - 1
      );
    }
  }, [parsedLyrics, progress, currentTime]);

  useEffect(() => {
    if (containerRef.current) {
      const activeEl = containerRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        // Scroll the active element into the center of the container
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeIndex]);

  return (
    <div 
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "400px",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        position: "relative",
        maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage: "-webkit-linear-gradient(top, transparent, black 20%, black 80%, transparent)"
      }}
    >
      <div ref={containerRef} style={{ padding: "180px 0" }}>
        {parsedLyrics.lines.map((line, idx) => (
          <div 
            key={idx}
            style={{
              padding: "0.8rem 2rem",
              fontSize: idx === activeIndex ? "1.8rem" : "1.2rem",
              fontWeight: idx === activeIndex ? "900" : "500",
              color: idx === activeIndex ? "var(--accent-gold)" : "rgba(255,255,255,0.3)",
              textAlign: "center",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: idx === activeIndex ? "scale(1.1) translateY(0)" : "scale(1) translateY(0)",
              textShadow: idx === activeIndex ? "0 0 20px rgba(226,179,90,0.4)" : "none",
              fontFamily: "var(--font-playfair)"
            }}
          >
            {line.text}
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
