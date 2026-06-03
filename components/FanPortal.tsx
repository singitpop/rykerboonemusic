"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRykerSession } from "@/components/AuthProvider";

const PLATFORM_URL = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_PLATFORM_URL || "https://club.singitpop.com";

interface Track {
  id: string;
  title: string;
  duration: string;
  file?: string;
}

interface Album {
  id: string;
  title: string;
  year: string;
  cover: string;
  tracks: Track[];
}

const albumsData: Album[] = [
  {
    id: "lights-gold",
    title: "When the Lights Go Gold",
    year: "2026",
    cover: "/images/when the lights go gold - album.png",
    tracks: [
      { id: "01", title: "Friday Again", duration: "2:44", file: "Friday Again" },
      { id: "02", title: "Midnight Motion", duration: "3:03", file: "Midnight Motion" },
      { id: "03", title: "Cold Smoke", duration: "3:08", file: "Cold Smoke" },
      { id: "04", title: "Blue Flame", duration: "3:23", file: "Blue Flame" },
      { id: "05", title: "When The Lights Go Gold", duration: "2:59", file: "When The Lights Go Gold" },
      { id: "06", title: "Kiss Me Like That", duration: "3:14", file: "Kiss Me Like That" },
      { id: "07", title: "Midnight Static", duration: "3:08", file: "Midnight Static" },
      { id: "08", title: "White Line Weather", duration: "3:14", file: "White Line Weather" },
      { id: "09", title: "Too Close To Midnight", duration: "3:04", file: "Too Close To Midnight" },
      { id: "10", title: "What We Were", duration: "3:36", file: "What We Were" },
      { id: "11", title: "Stay Till Sunday", duration: "2:59", file: "Stay Till Sunday" },
      { id: "12", title: "One More Summer", duration: "3:03", file: "One More Summer" }
    ]
  },
  {
    id: "boots-autumn",
    title: "Boots in the Autumn Dust",
    year: "2026",
    cover: "/images/boots in the autumn dust - album.jpg",
    tracks: [
      { id: "01", title: "Honky Tonk Sundown", duration: "3:42", file: "Honky Tonk Sundown" },
      { id: "02", title: "August Heatwave", duration: "4:05", file: "August Heatwave" },
      { id: "03", title: "Barefoot on the Backroad", duration: "3:18", file: "Barefoot on the Backroad" },
      { id: "04", title: "Neon Barn Nights", duration: "3:55", file: "Neon Barn Nights" },
      { id: "05", title: "Sweet Tea and Blue Jeans", duration: "3:29", file: "Sweet Tea and Blue Jeans" },
      { id: "06", title: "Dust Kicking Rhythm", duration: "3:12", file: "Dust Kicking Rhythm" },
      { id: "07", title: "Sunburnt Memories", duration: "4:21", file: "Sunburnt Memories" },
      { id: "08", title: "Tailgate Turn Up", duration: "3:34", file: "Tailgate Turn Up" },
      { id: "09", title: "Riverbank Two Step", duration: "2:58", file: "Riverbank Two Step" },
      { id: "10", title: "Fireflies and Front Porches", duration: "3:50", file: "Fireflies and Front Porches" },
      { id: "11", title: "Whiskey Weather", duration: "4:12", file: "Whiskey Weather" },
      { id: "12", title: "Last Dance in the Dirt", duration: "4:45", file: "Last Dance in the Dirt" }
    ]
  },
  {
    id: "september-gold",
    title: "September Turns Gold",
    year: "2026",
    cover: "/images/september turns gold - album.png",
    tracks: [
      { id: "01", title: "Whiskey In The Headlights", duration: "3:38", file: "Whiskey In The Headlights" },
      { id: "02", title: "Dust On The Blacktop", duration: "3:47", file: "Dust On The Blacktop" },
      { id: "03", title: "Neon County Line", duration: "4:02", file: "Neon County Line" },
      { id: "04", title: "Midnight Gravel", duration: "3:25", file: "Midnight Gravel" },
      { id: "05", title: "September Turns Gold", duration: "3:58", file: "September Turns Gold" },
      { id: "06", title: "One More Round", duration: "3:15", file: "One More Round" },
      { id: "07", title: "Backroad Heartbeat", duration: "3:50", file: "Backroad Heartbeat" },
      { id: "08", title: "Highway On Fire", duration: "4:10", file: "Highway On Fire" },
      { id: "09", title: "Southern Steel", duration: "4:32", file: "Southern Steel" },
      { id: "10", title: "Last Call Eyes", duration: "3:44", file: "Last Call Eyes" },
      { id: "11", title: "Bootleg Midnight", duration: "4:15", file: "Bootleg Midnight" },
      { id: "12", title: "Back To Gold", duration: "4:50", file: "Back To Gold" },
      { id: "13", title: "September Turns Gold (Slow Remix Live)", duration: "5:12", file: "September Turns Gold Remix Live" }
    ]
  },
  {
    id: "love-forever",
    title: "Our Love Our Forever",
    year: "2027",
    cover: "/images/our love our forever - album.png",
    tracks: [
      { id: "01", title: "Here Comes the Light", duration: "3:45", file: "Here Comes the Light" },
      { id: "02", title: "I Choose You", duration: "3:28", file: "I Choose You" },
      { id: "03", title: "Two Roads One Heart", duration: "4:02", file: "Two Roads One Heart" },
      { id: "04", title: "Bound to You", duration: "3:15", file: "Bound to You" },
      { id: "05", title: "Now and Always", duration: "3:52", file: "Now and Always" },
      { id: "06", title: "First and Always", duration: "3:34", file: "First and Always" },
      { id: "07", title: "Before I Knew Your Name", duration: "4:10", file: "Before I Knew Your Name" },
      { id: "08", title: "Like Home", duration: "3:22", file: "Like Home" },
      { id: "09", title: "Forever Starts With You", duration: "3:48", file: "Forever Starts With You" },
      { id: "10", title: "Hold This Moment", duration: "4:15", file: "Hold This Moment" },
      { id: "11", title: "One Lifetime More", duration: "3:55", file: "One Lifetime More" },
      { id: "12", title: "The Last Song We’ll Ever Need", duration: "4:28", file: "The Last Song We’ll Ever Need" },
      { id: "13", title: "Here Comes the Light (Wedding Remix)", duration: "3:58", file: "Here Comes the Light Wedding Version" },
      { id: "14", title: "I Choose You (Wedding Remix)", duration: "3:35", file: "I Choose You Wedding Version" },
      { id: "15", title: "Two Roads One Heart (Wedding Remix)", duration: "4:12", file: "Two Roads One Heart Wedding Version" },
      { id: "16", title: "Bound to You (Wedding Remix)", duration: "3:20", file: "Bound to You Wedding Version" },
      { id: "17", title: "Before I Knew Your Name (Wedding Remix)", duration: "4:24", file: "Before I Knew Your Name Wedding Version" }
    ]
  }
];

export default function FanPortal() {
  const { session, isLoaded } = useRykerSession();
  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isBanned = isLoaded && session && session.rykerBanned === true;
  const isPremium = isLoaded && session && (
    session.rykerTier === 'PREMIUM' ||
    session.rykerTier === 'VIP' ||
    ['PREMIUM', 'VIP', 'INSIDER', 'LABEL', 'ADMIN'].includes(session.tier)
  );

  const [selectedAlbum, setSelectedAlbum] = useState<Album>(albumsData[0]);
  const [currentTrack, setCurrentTrack] = useState<Track>(albumsData[0].tracks[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [durationSec, setDurationSec] = useState<number>(180);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [lockedModal, setLockedModal] = useState<boolean>(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState<boolean>(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Parse duration string MM:SS to seconds
  const getTrackDurationSeconds = (durStr: string) => {
    const parts = durStr.split(":");
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const curTime = audioRef.current.currentTime;
    const limit = isPremium ? durationSec : 30;

    if (curTime >= limit) {
      audioRef.current.pause();
      audioRef.current.currentTime = limit;
      setIsPlaying(false);
      if (!isPremium) {
        setLockedModal(true);
      }
      setCurrentTimeSec(limit);
      setProgress((limit / durationSec) * 100);
    } else {
      setCurrentTimeSec(curTime);
      setProgress((curTime / durationSec) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    const audioDuration = audioRef.current.duration;
    if (audioDuration && !isNaN(audioDuration)) {
      setDurationSec(audioDuration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
    setCurrentTimeSec(durationSec);
  };

  // Switch source whenever currentTrack or selectedAlbum changes
  useEffect(() => {
    if (mounted && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
      setCurrentTimeSec(0);
      setDurationSec(getTrackDurationSeconds(currentTrack.duration));
      
      const streamUrl = `/api/vault/stream?album=${selectedAlbum.id}&track=${currentTrack.id}&format=mp3`;
      audioRef.current.src = streamUrl;
      audioRef.current.load();
    }
  }, [currentTrack, selectedAlbum, mounted]);

  const handlePlayPause = () => {
    if (!audioRef.current || isBanned) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const limit = isPremium ? durationSec : 30;
      if (audioRef.current.currentTime >= limit) {
        audioRef.current.currentTime = 0;
      }
      if (audioRef.current.currentTime >= durationSec) {
        audioRef.current.currentTime = 0;
      }
      
      audioRef.current.play().catch(err => {
        console.error("Audio playback failed:", err);
      });
      setIsPlaying(true);
    }
  };

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
  };

  const handleAlbumSelect = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentTrack(album.tracks[0]);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const triggerDownload = (trackTitle: string) => {
    if (!isPremium) {
      setLockedModal(true);
      return;
    }
    // Stream endpoint with format=wav and download=true to trigger S3 attachment download
    const downloadUrl = `/api/vault/stream?album=${selectedAlbum.id}&track=${currentTrack.id}&format=wav&download=true`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <section style={{ padding: "4rem 8% 8rem", background: "#050505", position: "relative" }}>
      <audio
        ref={audioRef}
        src={`/api/vault/stream?album=${selectedAlbum.id}&track=${currentTrack.id}&format=mp3`}
        style={{ display: "none" }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      
      {/* Clerk Account Status Badge */}
      {isLoaded && (
        <div style={{
          position: "fixed",
          top: "100px",
          right: "20px",
          background: "rgba(10, 10, 10, 0.8)",
          border: isBanned 
            ? "1px solid #ef4444" 
            : isPremium 
              ? "1px solid var(--accent-gold)" 
              : "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "0.5rem 1.25rem",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <span style={{ fontSize: "0.6rem", fontWeight: "900", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Role:
          </span>
          <span
            style={{
              background: isBanned 
                ? "rgba(239, 68, 68, 0.15)" 
                : isPremium 
                  ? "rgba(226, 179, 90, 0.15)" 
                  : "rgba(255,255,255,0.05)",
              color: isBanned 
                ? "#ef4444" 
                : isPremium 
                  ? "var(--accent-gold)" 
                  : "white",
              borderRadius: "20px",
              padding: "0.3rem 0.8rem",
              fontSize: "0.65rem",
              fontWeight: "900",
              letterSpacing: "0.05em",
            }}
          >
            {!session ? "GUEST" : isBanned ? "BANNED" : isPremium ? "PREMIUM MEMBER" : "FREE FAN"}
          </span>
        </div>
      )}

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ color: "var(--accent-gold)", fontSize: "0.75rem", fontWeight: "900", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Club Ryker Vault
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "1rem", marginBottom: "1rem" }}>
            PREMIUM VAULT <span style={{ color: "var(--accent-gold)" }}>LISTENING LOUNGE</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem", lineHeight: "1.8" }}>
            {isPremium 
              ? "Welcome back! Enjoy unlimited full-length lossless streaming and high-fidelity studio WAV downloads of all unreleased recordings." 
              : "Get a sneak peek into Ryker's locked vaults. Standard members get 30-second previews. Upgrade to Premium to unlock lossless playback and full downloads."
            }
          </p>
        </div>

        {/* Vault Main Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "4rem", alignItems: "start" }}>
          
          {/* Left Column: Album Selector & Tracklist */}
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: "900", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                Select Album Vault
              </span>
              <div style={{ display: "grid", gap: "1rem" }}>
                {albumsData.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => handleAlbumSelect(album)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      padding: "1rem",
                      background: selectedAlbum.id === album.id ? "rgba(226,179,90,0.04)" : "rgba(255,255,255,0.01)",
                      border: selectedAlbum.id === album.id ? "1px solid var(--accent-gold)" : "1px solid rgba(255,255,255,0.03)",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                  >
                    <div style={{ position: "relative", width: "50px", height: "50px", borderRadius: "6px", overflow: "hidden" }}>
                      <Image src={album.cover} alt={album.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.9rem", fontWeight: "bold", color: selectedAlbum.id === album.id ? "var(--accent-gold)" : "white", margin: 0 }}>
                        {album.title}
                      </h4>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                        {album.year} • {album.tracks.length} Tracks
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span style={{ fontSize: "0.65rem", fontWeight: "900", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                Tracks In Vault
              </span>
              <div style={{ display: "grid", gap: "0.5rem", maxHeight: "350px", overflowY: "auto", paddingRight: "0.5rem" }}>
                {selectedAlbum.tracks.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => handleTrackSelect(track)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.8rem 1.2rem",
                      background: currentTrack.id === track.id ? "rgba(255,255,255,0.03)" : "transparent",
                      border: "1px solid transparent",
                      borderColor: currentTrack.id === track.id ? "rgba(226,179,90,0.15)" : "transparent",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)" }}>{track.id}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600", color: currentTrack.id === track.id ? "var(--accent-gold)" : "white" }}>
                        {track.title}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Waveform Player / Banned overlay */}
          {isBanned ? (
            <div style={{
              background: "rgba(239, 68, 68, 0.03)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "24px",
              padding: "4rem 3rem",
              textAlign: "center",
              boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
            }}>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "1.5rem" }}>⚠️</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", fontFamily: "var(--font-playfair)", color: "#ef4444", marginBottom: "1rem" }}>
                ACCESS SUSPENDED
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.8", maxWidth: "450px", margin: "0 auto 2rem" }}>
                Your access to the Club Ryker Listening Vault has been suspended by administration. If you believe this is an error, please contact support.
              </p>
            </div>
          ) : (
            <div style={{
              background: "rgba(255,255,255,0.01)",
              border: "1px solid rgba(255,255,255,0.03)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
            }}>
              
              {/* Player Cover and Title */}
              <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", marginBottom: "3rem" }}>
                <div style={{ position: "relative", width: "140px", height: "140px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 15px 30px rgba(0,0,0,0.6)" }}>
                  <Image src={selectedAlbum.cover} alt={selectedAlbum.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <span style={{ color: "var(--accent-gold)", fontSize: "0.6rem", fontWeight: "900", letterSpacing: "0.2em", textTransform: "uppercase", background: "rgba(226, 179, 90, 0.08)", padding: "0.3rem 0.7rem", borderRadius: "4px" }}>
                    {isPremium ? "Premium Vault Unlocked" : "30s Preview Mode"}
                  </span>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", fontFamily: "var(--font-playfair)", marginTop: "1rem", marginBottom: "0.5rem" }}>
                    {currentTrack.title}
                  </h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {selectedAlbum.title} ({selectedAlbum.year})
                  </span>
                </div>
              </div>

              {/* Custom Fake Animated Waveform Visualizer */}
              <div style={{ height: "80px", background: "rgba(0,0,0,0.2)", borderRadius: "12px", display: "flex", alignItems: "center", gap: "3px", padding: "0 1.5rem", marginBottom: "2rem", overflow: "hidden" }}>
                {Array.from({ length: 45 }).map((_, idx) => {
                  const heightPercentage = 20 + Math.abs(Math.sin(idx * 0.4)) * 60;
                  const isActive = (idx / 45) * 100 <= progress;
                  
                  // Add animated jitter if playing
                  const animationStyle = isPlaying 
                    ? { animation: `jitter 1.2s ease-in-out infinite alternate`, animationDelay: `${idx * 0.05}s` } 
                    : {};

                  return (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        height: `${heightPercentage}%`,
                        background: isActive 
                          ? "var(--accent-gold)" 
                          : "rgba(255,255,255,0.08)",
                        borderRadius: "2px",
                        transition: "background 0.3s ease",
                        ...animationStyle
                      }}
                    />
                  );
                })}
              </div>
              
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes jitter {
                  0% { transform: scaleY(1); }
                  100% { transform: scaleY(0.6); }
                }
              `}} />

              {/* Play Timeline */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                <span>{formatTime(currentTimeSec)}</span>
                <span style={{ color: !isPremium ? "var(--accent-gold)" : "var(--text-secondary)" }}>
                  {isPremium ? formatTime(durationSec) : "Locked at 0:30"}
                </span>
              </div>

              {/* Player Controls Panel */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
                
                {/* Playback Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                  <button
                    onClick={handlePlayPause}
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "var(--accent-gold)",
                      color: "black",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 10px 25px rgba(226,179,90,0.3)",
                      transition: "transform 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    {isPlaying ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "4px" }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Action Buttons: Download WAV / Upgrade */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    onClick={() => triggerDownload(currentTrack.title)}
                    style={{
                      border: isPremium ? "1px solid var(--accent-gold)" : "1px solid rgba(255,255,255,0.1)",
                      background: isPremium ? "rgba(226,179,90,0.08)" : "transparent",
                      color: isPremium ? "var(--accent-gold)" : "rgba(255,255,255,0.3)",
                      padding: "0.8rem 1.5rem",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: "900",
                      letterSpacing: "0.1em",
                      cursor: isPremium ? "pointer" : "not-allowed",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    DOWNLOAD WAV
                  </button>

                  {!isPremium && (
                    <button 
                      onClick={() => setShowUpgradeModal(true)}
                      style={{
                        background: "var(--accent-gold)",
                        color: "black",
                        border: "none",
                        padding: "0.8rem 1.5rem",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: "900",
                        letterSpacing: "0.1em",
                        cursor: "pointer",
                        boxShadow: "0 10px 20px rgba(226,179,90,0.2)"
                      }}>
                      UPGRADE TO PREMIUM
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Upgrade Callout Popup Panel */}
        {lockedModal && (
          <div style={{
            marginTop: "4rem",
            padding: "3rem",
            background: "linear-gradient(to right, rgba(226, 179, 90, 0.08), rgba(0,0,0,0))",
            border: "1px solid rgba(226, 179, 90, 0.15)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem"
          }}>
            <div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                Preview Time Expired
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>
                You've listened to the 30-second preview of this unreleased track. Upgrade to Premium Club today for £2.99/mo to unlock full streaming.
              </p>
            </div>
            <button 
              onClick={() => setShowUpgradeModal(true)}
              style={{
                background: "var(--accent-gold)",
                color: "black",
                border: "none",
                padding: "1rem 2rem",
                fontSize: "0.75rem",
                fontWeight: "900",
                letterSpacing: "0.15em",
                borderRadius: "4px",
                textTransform: "uppercase",
                cursor: "pointer"
              }}>
              UNLOCK ALL VAULTS NOW
            </button>
          </div>
        )}

        {/* Global Upsell Modal */}
        {showUpgradeModal && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              background: "#111",
              border: "1px solid rgba(226, 179, 90, 0.3)",
              borderRadius: "24px",
              padding: "3rem",
              maxWidth: "800px",
              width: "100%",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}>
              <button 
                onClick={() => setShowUpgradeModal(false)}
                style={{
                  position: "absolute", top: "1.5rem", right: "1.5rem",
                  background: "transparent", border: "none",
                  color: "white", fontSize: "1.5rem", cursor: "pointer"
                }}
              >
                ✕
              </button>
              
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>
                  Unlock Your Premium Experience
                </h3>
                <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
                  Choose the plan that's right for you. Get access to the Ryker Boone Vault, or unlock everything across the entire Singitpop label.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {/* Option 1: Ryker Only */}
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "16px", padding: "2rem",
                  display: "flex", flexDirection: "column"
                }}>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Club Ryker Premium</h4>
                  <span style={{ fontSize: "2rem", fontWeight: "bold", color: "white", marginBottom: "1.5rem" }}>
                    £2.99 <span style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>/mo</span>
                  </span>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", color: "var(--text-secondary)", fontSize: "0.9rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <li>✓ Full-length lossless streaming</li>
                    <li>✓ Unlimited high-fidelity WAV downloads</li>
                    <li>✓ Unreleased Ryker Vault tracks</li>
                  </ul>
                  {session ? (
                    <Link 
                      href={`${PLATFORM_URL}/checkout?priceId=${process.env.NEXT_PUBLIC_STRIPE_PRICE_RYKER_PREMIUM || 'price_1TcAjVGBBlYIBJlovmtIAIng'}&returnUrl=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                      style={{ width: "100%" }}
                    >
                      <button style={{
                        width: "100%", padding: "1rem", borderRadius: "8px",
                        background: "rgba(255,255,255,0.1)", color: "white",
                        border: "none", fontWeight: "bold", cursor: "pointer",
                        transition: "background 0.2s"
                      }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                        Select Ryker Premium
                      </button>
                    </Link>
                  ) : (
                    <a href={`${PLATFORM_URL}/api/auth-bridge?return_url=${typeof window !== 'undefined' ? encodeURIComponent(`${window.location.origin}/api/auth/callback`) : ''}`}>
                      <button style={{
                        width: "100%", padding: "1rem", borderRadius: "8px",
                        background: "rgba(255,255,255,0.1)", color: "white",
                        border: "none", fontWeight: "bold", cursor: "pointer",
                        transition: "background 0.2s"
                      }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                        Select Ryker Premium
                      </button>
                    </a>
                  )}
                </div>

                {/* Option 2: Singitpop (Upsell) */}
                <div style={{
                  background: "rgba(226,179,90,0.05)",
                  border: "1px solid var(--accent-gold)",
                  borderRadius: "16px", padding: "2rem",
                  display: "flex", flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(226,179,90,0.1)"
                }}>
                  <div style={{
                    position: "absolute", top: "-12px", right: "2rem",
                    background: "var(--accent-gold)", color: "black",
                    padding: "4px 12px", borderRadius: "12px",
                    fontSize: "0.7rem", fontWeight: "900", letterSpacing: "0.05em"
                  }}>
                    BEST VALUE
                  </div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--accent-gold)", marginBottom: "0.5rem" }}>Singitpop Premium</h4>
                  <span style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent-gold)", marginBottom: "1.5rem" }}>
                    £3.99 <span style={{ fontSize: "1rem", color: "rgba(226,179,90,0.6)" }}>/mo</span>
                  </span>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", color: "white", fontSize: "0.9rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <li>✓ <strong>Includes all Club Ryker features</strong></li>
                    <li>✓ Unlocked vaults for <strong>all Singitpop artists</strong></li>
                    <li>✓ Unlimited high-fidelity WAV downloads</li>
                    <li>✓ Exclusive access to limited edition merch</li>
                  </ul>
                  {session ? (
                    <Link 
                      href={`${PLATFORM_URL}/checkout?priceId=${process.env.NEXT_PUBLIC_STRIPE_PRICE_SINGITPOP_PREMIUM || 'price_1Tduh9GBBlYIBJlobC9RRqKV'}&returnUrl=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                      style={{ width: "100%" }}
                    >
                      <button style={{
                        width: "100%", padding: "1rem", borderRadius: "8px",
                        background: "var(--accent-gold)", color: "black",
                        border: "none", fontWeight: "bold", cursor: "pointer",
                        boxShadow: "0 5px 15px rgba(226,179,90,0.3)",
                        transition: "transform 0.2s"
                      }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                        Select Singitpop Premium
                      </button>
                    </Link>
                  ) : (
                    <a href={`${PLATFORM_URL}/api/auth-bridge?return_url=${typeof window !== 'undefined' ? encodeURIComponent(`${window.location.origin}/api/auth/callback`) : ''}`}>
                      <button style={{
                        width: "100%", padding: "1rem", borderRadius: "8px",
                        background: "var(--accent-gold)", color: "black",
                        border: "none", fontWeight: "bold", cursor: "pointer",
                        boxShadow: "0 5px 15px rgba(226,179,90,0.3)",
                        transition: "transform 0.2s"
                      }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                        Select Singitpop Premium
                      </button>
                    </a>
                  )}
                </div>
              </div>

              {/* Sign In Link for existing Singitpop Members */}
              {!session && (
                <div style={{ textAlign: "center", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Already have a Singitpop account?{" "}
                    <Link href="/sign-in">
                      <span style={{ color: "var(--accent-gold)", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}>
                        Sign in here
                      </span>
                    </Link>
                  </p>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
