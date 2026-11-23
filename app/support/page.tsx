"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FEATURED_SPOTLIGHT,
  PROMOTIONAL_RELEASES,
  hasVerifiedStreamingLinks,
  type FeaturedReleaseItem,
} from "@/data/featuredReleases";
import { RYKER_ARTIST_LINKS } from "@/data/streamingLinks";

interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdownParts(targetDateStr: string, nowMs: number): CountdownParts | null {
  const diff = new Date(targetDateStr).getTime() - nowMs;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function formatIcsDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function buildGoogleCalendarUrl(item: FeaturedReleaseItem): string {
  const start = new Date(item.releaseDate);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const dates = `${formatIcsDate(start)}/${formatIcsDate(end)}`;
  const text = `Ryker Boone — ${item.title} (Release Day)`;
  const details = `${item.title} (${item.type}) by Ryker Boone releases on ${item.displayDate} via ${item.label}.\n\n${item.summary}\n\nVisit https://www.rykerboone.com/support on release day to stream.`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text,
    dates,
    details,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadIcsReminder(item: FeaturedReleaseItem): void {
  const start = new Date(item.releaseDate);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const dtStamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const escapedSummary = item.summary.replace(/\n/g, "\\n").replace(/,/g, "\\,");

  const icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ryker Boone Music//Featured Releases//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${item.id}-release@rykerboone.com`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART;VALUE=DATE:${formatIcsDate(start)}`,
    `DTEND;VALUE=DATE:${formatIcsDate(end)}`,
    `SUMMARY:Ryker Boone — ${item.title} (Release Day)`,
    `DESCRIPTION:${escapedSummary}\\n\\nVisit https://www.rykerboone.com/support on release day to stream.`,
    "BEGIN:VALARM",
    "TRIGGER:-PT0M",
    "ACTION:DISPLAY",
    `DESCRIPTION:Ryker Boone — ${item.title} is out today!`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsLines], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ryker-boone-${item.id}-reminder.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function StreamingButtons({
  item,
  compact = false,
}: {
  item: FeaturedReleaseItem;
  compact?: boolean;
}) {
  const padding = compact ? "0.65rem 1.1rem" : "0.85rem 1.5rem";
  const fontSize = compact ? "0.7rem" : "0.75rem";

  const platforms = [
    {
      label: "Spotify",
      href: item.streamingLinks.spotify,
      bg: "#1DB954",
      color: "#000",
    },
    {
      label: "Apple Music",
      href: item.streamingLinks.appleMusic,
      bg: "rgba(255, 255, 255, 0.08)",
      color: "#f5f0e1",
    },
    {
      label: "Amazon Music",
      href: item.streamingLinks.amazonMusic,
      bg: "rgba(255, 255, 255, 0.08)",
      color: "#f5f0e1",
    },
    {
      label: "YouTube",
      href: item.streamingLinks.youtube,
      bg: "rgba(255, 255, 255, 0.08)",
      color: "#f5f0e1",
    },
  ].filter((p) => Boolean(p.href));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      {item.linkShareUrl && item.linkShareUrl !== "#" && (
        <a
          href={item.linkShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--accent-gold)",
            color: "#050505",
            border: "1px solid var(--accent-gold)",
            padding,
            borderRadius: "6px",
            fontSize,
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            boxShadow: "0 8px 20px rgba(226, 179, 90, 0.22)",
            transition: "transform 0.2s ease, filter 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.filter = "brightness(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.filter = "none";
          }}
        >
          Listen Now (All Platforms)
        </a>
      )}
      {platforms.map((platform) => (
        <a
          key={platform.label}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: platform.bg,
            color: platform.color,
            border:
              platform.bg === "#1DB954"
                ? "1px solid #1DB954"
                : "1px solid rgba(226, 179, 90, 0.25)",
            padding,
            borderRadius: "6px",
            fontSize,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            transition: "transform 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {platform.label}
        </a>
      ))}
    </div>
  );
}

function RemindMeControls({
  item,
  accent = "gold",
  compact = false,
}: {
  item: FeaturedReleaseItem;
  accent?: "gold" | "frequency";
  compact?: boolean;
}) {
  const isFrequency = accent === "frequency";
  const padding = compact ? "0.65rem 1.05rem" : "0.9rem 1.5rem";
  const fontSize = compact ? "0.68rem" : "0.75rem";

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
      <a
        href={buildGoogleCalendarUrl(item)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: isFrequency
            ? "linear-gradient(135deg, var(--accent-gold) 0%, #f0c975 100%)"
            : "var(--accent-gold)",
          color: "#050505",
          padding,
          borderRadius: "6px",
          fontSize,
          fontWeight: 900,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          boxShadow: isFrequency
            ? "0 8px 25px rgba(34, 211, 238, 0.16)"
            : "0 8px 20px rgba(226, 179, 90, 0.18)",
          transition: "transform 0.2s ease, filter 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.filter = "brightness(1.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.filter = "none";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Add to Calendar (Google)
      </a>

      <button
        type="button"
        onClick={() => downloadIcsReminder(item)}
        style={{
          background: isFrequency
            ? "rgba(34, 211, 238, 0.08)"
            : "rgba(226, 179, 90, 0.06)",
          color: isFrequency ? "#67e8f9" : "var(--accent-gold)",
          border: isFrequency
            ? "1px solid rgba(34, 211, 238, 0.35)"
            : "1px solid rgba(226, 179, 90, 0.35)",
          padding,
          borderRadius: "6px",
          fontSize,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "transform 0.2s ease, background 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.background = isFrequency
            ? "rgba(34, 211, 238, 0.15)"
            : "rgba(226, 179, 90, 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = isFrequency
            ? "rgba(34, 211, 238, 0.08)"
            : "rgba(226, 179, 90, 0.06)";
        }}
      >
        Apple / Outlook (.ics)
      </button>
    </div>
  );
}

export default function FeaturedReleasesPage() {
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    setNowMs(Date.now());
    const interval = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const spotlight = FEATURED_SPOTLIGHT;
  const spotlightCountdown =
    nowMs !== null ? getCountdownParts(spotlight.releaseDate, nowMs) : null;
  const isSpotlightReleased =
    nowMs !== null && nowMs >= new Date(spotlight.releaseDate).getTime();
  const spotlightHasVerifiedLinks = hasVerifiedStreamingLinks(spotlight);
  const isSpotlightLive = isSpotlightReleased && spotlightHasVerifiedLinks;

  return (
    <main style={{ background: "#050505", color: "#f5f0e1", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO SPOTLIGHT — NOTHING BUT THE FREQUENCY */}
      <section
        style={{
          padding: "10.5rem 8% 5.5rem",
          background:
            "radial-gradient(circle at 18% 22%, rgba(34, 211, 238, 0.09), transparent 42%), radial-gradient(circle at 82% 28%, rgba(232, 121, 249, 0.08), transparent 44%), linear-gradient(to bottom, #0b0b0d, #050505)",
          borderBottom: "1px solid rgba(226, 179, 90, 0.12)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span
              style={{
                color: "var(--accent-gold)",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                fontWeight: 800,
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Featured Releases
            </span>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 1.02,
                margin: 0,
              }}
            >
              SPOTLIGHT <span style={{ color: "var(--accent-gold)" }}>RELEASE</span>
            </h1>
          </div>

          <div
            className="split-layout"
            style={{
              gridTemplateColumns: "minmax(280px, 460px) 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left: Dedicated Single Artwork */}
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                borderRadius: "14px",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at 30% 25%, rgba(34, 211, 238, 0.18), transparent 55%), radial-gradient(circle at 75% 75%, rgba(232, 121, 249, 0.18), transparent 55%), #0c0c10",
                border: "1px solid rgba(34, 211, 238, 0.28)",
                boxShadow:
                  "0 30px 70px rgba(0, 0, 0, 0.7), 0 0 40px rgba(34, 211, 238, 0.08), 0 0 60px rgba(232, 121, 249, 0.06)",
              }}
            >
              {spotlight.artwork ? (
                <Image
                  src={spotlight.artwork}
                  alt={`${spotlight.title} — Official Single Artwork`}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2.5rem",
                    textAlign: "center",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      height: "48px",
                    }}
                    aria-hidden="true"
                  >
                    {[18, 34, 24, 46, 30, 42, 22, 38, 28, 44, 20, 32, 16].map((h, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: "4px",
                          height: `${h}px`,
                          borderRadius: "999px",
                          background:
                            idx % 3 === 0
                              ? "#22d3ee"
                              : idx % 3 === 1
                              ? "#e879f9"
                              : "var(--accent-gold)",
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      color: "#67e8f9",
                      fontWeight: 800,
                    }}
                  >
                    Official Single Artwork
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: 1.15,
                      color: "#f5f0e1",
                    }}
                  >
                    {spotlight.title}
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(245, 240, 225, 0.55)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Dedicated single cover art coming shortly
                  </span>
                </div>
              )}

              {/* Dynamic Status Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: isSpotlightLive
                    ? "var(--accent-gold)"
                    : "rgba(5, 5, 8, 0.88)",
                  color: isSpotlightLive ? "#050505" : "#67e8f9",
                  border: isSpotlightLive
                    ? "1px solid var(--accent-gold)"
                    : "1px solid rgba(34, 211, 238, 0.5)",
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.68rem",
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                  borderRadius: "4px",
                  zIndex: 10,
                  backdropFilter: "blur(8px)",
                }}
              >
                {isSpotlightLive ? "OUT NOW" : "COMING SOON"}
              </div>
            </div>

            {/* Right: Spotlight Details, Countdown / Streaming */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontWeight: 800,
                    color: "#67e8f9",
                    background: "rgba(34, 211, 238, 0.1)",
                    border: "1px solid rgba(34, 211, 238, 0.3)",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "999px",
                  }}
                >
                  {spotlight.subtitle || spotlight.type}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#f0abfc",
                    background: "rgba(232, 121, 249, 0.08)",
                    border: "1px solid rgba(232, 121, 249, 0.28)",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "999px",
                  }}
                >
                  {spotlight.genre}
                </span>
              </div>

              <div>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 800,
                    lineHeight: 1.05,
                    margin: "0 0 0.75rem",
                    color: "#f5f0e1",
                  }}
                >
                  {spotlight.title}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    fontSize: "0.82rem",
                    color: "rgba(245, 240, 225, 0.7)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>
                    Release Date:{" "}
                    <strong style={{ color: "var(--accent-gold)" }}>
                      {spotlight.displayDate}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>{spotlight.label}</span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "rgba(245, 240, 225, 0.9)",
                  margin: 0,
                }}
              >
                {spotlight.summary}
              </p>

              {spotlight.extendedCopy?.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: "rgba(245, 240, 225, 0.72)",
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Countdown (before release) OR Streaming Links (after release) */}
              {!isSpotlightReleased ? (
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34, 211, 238, 0.06) 0%, rgba(16, 16, 20, 0.9) 50%, rgba(232, 121, 249, 0.06) 100%)",
                    border: "1px solid rgba(34, 211, 238, 0.22)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "var(--accent-gold)",
                        fontWeight: 900,
                      }}
                    >
                      Release Countdown — {spotlight.displayDate}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(245, 240, 225, 0.55)",
                      }}
                    >
                      Releasing on major streaming platforms
                    </span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, minmax(60px, 1fr))",
                      gap: "0.75rem",
                    }}
                  >
                    {[
                      { label: "Days", value: spotlightCountdown?.days ?? "--" },
                      { label: "Hours", value: spotlightCountdown?.hours ?? "--" },
                      { label: "Mins", value: spotlightCountdown?.minutes ?? "--" },
                      { label: "Secs", value: spotlightCountdown?.seconds ?? "--" },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        style={{
                          background: "rgba(5, 5, 8, 0.75)",
                          border: "1px solid rgba(255, 255, 255, 0.07)",
                          borderRadius: "8px",
                          padding: "0.9rem 0.5rem",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                            fontWeight: 900,
                            color: "#f5f0e1",
                            fontVariantNumeric: "tabular-nums",
                            lineHeight: 1.1,
                          }}
                        >
                          {typeof unit.value === "number"
                            ? String(unit.value).padStart(2, "0")
                            : unit.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.62rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#67e8f9",
                            marginTop: "0.35rem",
                            fontWeight: 700,
                          }}
                        >
                          {unit.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "rgba(245, 240, 225, 0.7)",
                        margin: "0 0 0.85rem",
                      }}
                    >
                      Set a free calendar reminder so you don&apos;t miss release day:
                    </p>
                    <RemindMeControls item={spotlight} accent="frequency" />
                  </div>
                </div>
              ) : spotlightHasVerifiedLinks ? (
                <div
                  style={{
                    background: "rgba(226, 179, 90, 0.05)",
                    border: "1px solid rgba(226, 179, 90, 0.28)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--accent-gold)",
                      fontWeight: 900,
                    }}
                  >
                    Out Now — Stream &quot;{spotlight.title}&quot;
                  </span>
                  <StreamingButtons item={spotlight} />
                </div>
              ) : (
                <div
                  style={{
                    background: "rgba(226, 179, 90, 0.05)",
                    border: "1px solid rgba(226, 179, 90, 0.28)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--accent-gold)",
                      fontWeight: 900,
                    }}
                  >
                    Coming Soon — {spotlight.displayDate}
                  </span>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(245, 240, 225, 0.78)",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    Streaming links will appear here as soon as the release goes live across
                    platforms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RELEASES GRID (DATA-DRIVEN) */}
      <section style={{ padding: "6rem 8%", background: "#050505" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="subtitle" style={{ marginBottom: "0.75rem" }}>
              Upcoming &amp; Spotlight Catalogue
            </span>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 1rem",
              }}
            >
              FEATURED <span style={{ color: "var(--accent-gold)" }}>ALBUMS</span>
            </h2>
            <p
              style={{
                color: "rgba(245, 240, 225, 0.68)",
                maxWidth: "680px",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              Leading up to the 4 December 2026 dual album drop alongside our festive holiday
              release — save release dates to your calendar or stream as soon as each record lands.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {PROMOTIONAL_RELEASES.map((release) => {
              const isReleased =
                nowMs !== null && nowMs >= new Date(release.releaseDate).getTime();
              const countdown =
                nowMs !== null ? getCountdownParts(release.releaseDate, nowMs) : null;

              return (
                <article
                  key={release.id}
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(226, 179, 90, 0.16)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Cover Art */}
                  <div
                    className="reveal-img"
                    style={{
                      position: "relative",
                      aspectRatio: "1 / 1",
                      background: "#121212",
                    }}
                  >
                    {release.artwork && (
                      <Image
                        src={release.artwork}
                        alt={release.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: isReleased
                          ? "var(--accent-gold)"
                          : "rgba(10, 10, 10, 0.88)",
                        color: isReleased ? "#050505" : "var(--accent-gold)",
                        border: "1px solid var(--accent-gold)",
                        padding: "0.35rem 0.75rem",
                        fontSize: "0.62rem",
                        fontWeight: 900,
                        letterSpacing: "0.2em",
                        borderRadius: "4px",
                        zIndex: 10,
                      }}
                    >
                      {isReleased ? "OUT NOW" : "COMING SOON"}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div
                    style={{
                      padding: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      flexGrow: 1,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.65rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--accent-gold)",
                            fontWeight: 800,
                          }}
                        >
                          {release.tagline}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            color: "rgba(245, 240, 225, 0.6)",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {release.displayDate}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.45rem",
                          color: "#f5f0e1",
                          margin: 0,
                          lineHeight: 1.15,
                        }}
                      >
                        {release.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "rgba(245, 240, 225, 0.75)",
                        margin: 0,
                      }}
                    >
                      {release.summary}
                    </p>

                    {release.featuredTracks && release.featuredTracks.length > 0 && (
                      <div
                        style={{
                          background: "rgba(226, 179, 90, 0.03)",
                          border: "1px solid rgba(226, 179, 90, 0.12)",
                          borderRadius: "8px",
                          padding: "0.9rem 1rem",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.62rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--accent-gold)",
                            fontWeight: 900,
                            marginBottom: "0.5rem",
                          }}
                        >
                          Featured Tracks
                        </span>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.45rem",
                            margin: 0,
                            padding: 0,
                            listStyle: "none",
                            textAlign: "left",
                          }}
                        >
                          {release.featuredTracks.map((track) => (
                            <li
                              key={track}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.55rem",
                                fontSize: "0.82rem",
                                lineHeight: 1.4,
                                color: "rgba(245, 240, 225, 0.88)",
                                textAlign: "left",
                              }}
                            >
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="var(--accent-gold)"
                                style={{ flexShrink: 0, opacity: 0.85 }}
                                aria-hidden="true"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              <span>{track}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Card Footer: Countdown + Remind Me (before release) OR Streaming (after release) */}
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.85rem",
                      }}
                    >
                      {!isReleased ? (
                        <>
                          {countdown && (
                            <div
                              style={{
                                fontSize: "0.72rem",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "rgba(245, 240, 225, 0.68)",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              Releases in{" "}
                              <strong style={{ color: "var(--accent-gold)" }}>
                                {countdown.days}d {String(countdown.hours).padStart(2, "0")}h{" "}
                                {String(countdown.minutes).padStart(2, "0")}m
                              </strong>
                            </div>
                          )}
                          <RemindMeControls item={release} accent="gold" compact />
                        </>
                      ) : (
                        <>
                          {hasVerifiedStreamingLinks(release) ? (
                            <StreamingButtons item={release} compact />
                          ) : (
                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "rgba(245, 240, 225, 0.65)",
                              }}
                            >
                              Out Now — streaming links coming shortly
                            </span>
                          )}
                          {release.albumPageLink && (
                            <Link
                              href={release.albumPageLink}
                              style={{
                                fontSize: "0.72rem",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fontWeight: 800,
                                color: "var(--accent-gold)",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                              }}
                            >
                              View Album Details →
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOLLOW & EXPLORE CATALOGUE CTA */}
      <section style={{ padding: "2rem 8% 8rem", background: "#050505" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3.25rem 2.5rem",
            background: "linear-gradient(135deg, #0c0c0c 0%, #08080a 100%)",
            border: "1px solid rgba(226, 179, 90, 0.22)",
            borderRadius: "16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              color: "var(--accent-gold)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            Stay Tuned In
          </span>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#f5f0e1",
              margin: 0,
            }}
          >
            Follow Ryker Boone on Streaming Platforms
          </h3>
          <p
            style={{
              maxWidth: "620px",
              color: "rgba(245, 240, 225, 0.7)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Follow Ryker Boone&apos;s official artist profile to get notified the moment new singles
            and albums go live, or explore already-released records in the full discography.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="/music"
              style={{
                background: "var(--accent-gold)",
                color: "#050505",
                padding: "0.95rem 2rem",
                fontWeight: 900,
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderRadius: "6px",
              }}
            >
              Browse Full Discography
            </Link>
            {[
              { label: "Spotify", href: RYKER_ARTIST_LINKS.spotify },
              { label: "Apple Music", href: RYKER_ARTIST_LINKS.appleMusic },
              { label: "Amazon Music", href: RYKER_ARTIST_LINKS.amazonMusic },
              { label: "YouTube", href: RYKER_ARTIST_LINKS.youtube },
            ].map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  color: "#f5f0e1",
                  border: "1px solid rgba(226, 179, 90, 0.25)",
                  padding: "0.95rem 1.5rem",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  borderRadius: "6px",
                }}
              >
                {platform.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
