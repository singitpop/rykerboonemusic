"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
      { id: "01", title: "Friday Again", duration: "2:44" },
      { id: "02", title: "Midnight Motion", duration: "3:03" },
      { id: "03", title: "Cold Smoke", duration: "3:08" },
      { id: "04", title: "Blue Flame", duration: "3:23" },
      { id: "05", title: "When The Lights Go Gold", duration: "2:59" },
      { id: "06", title: "Kiss Me Like That", duration: "3:14" },
      { id: "07", title: "Midnight Static", duration: "3:08" },
      { id: "08", title: "White Line Weather", duration: "3:14" },
      { id: "09", title: "Too Close To Midnight", duration: "3:04" },
      { id: "10", title: "What We Were", duration: "3:36" },
      { id: "11", title: "Stay Till Sunday", duration: "2:59" },
      { id: "12", title: "One More Summer", duration: "3:03" }
    ]
  },
  {
    id: "boots-autumn",
    title: "Boots in the Autumn Dust",
    year: "2026",
    cover: "/images/boots in the autumn dust - album.jpg",
    tracks: [
      { id: "01", title: "Honky Tonk Sundown", duration: "3:42" },
      { id: "02", title: "August Heatwave", duration: "4:05" },
      { id: "03", title: "Barefoot on the Backroad", duration: "3:18" },
      { id: "04", title: "Neon Barn Nights", duration: "3:55" },
      { id: "05", title: "Sweet Tea and Blue Jeans", duration: "3:29" },
      { id: "06", title: "Dust Kicking Rhythm", duration: "3:12" },
      { id: "07", title: "Sunburnt Memories", duration: "4:21" },
      { id: "08", title: "Tailgate Turn Up", duration: "3:34" },
      { id: "09", title: "Riverbank Two Step", duration: "2:58" },
      { id: "10", title: "Fireflies and Front Porches", duration: "3:50" },
      { id: "11", title: "Whiskey Weather", duration: "4:12" },
      { id: "12", title: "Last Dance in the Dirt", duration: "4:45" }
    ]
  },
  {
    id: "september-gold",
    title: "September Turns Gold",
    year: "2026",
    cover: "/images/september turns gold - album.png",
    tracks: [
      { id: "01", title: "Whiskey In The Headlights", duration: "3:38" },
      { id: "02", title: "Dust On The Blacktop", duration: "3:47" },
      { id: "03", title: "Neon County Line", duration: "4:02" },
      { id: "04", title: "Midnight Gravel", duration: "3:25" },
      { id: "05", title: "September Turns Gold", duration: "3:58" },
      { id: "06", title: "One More Round", duration: "3:15" },
      { id: "07", title: "Backroad Heartbeat", duration: "3:50" },
      { id: "08", title: "Highway On Fire", duration: "4:10" },
      { id: "09", title: "Southern Steel", duration: "4:32" },
      { id: "10", title: "Last Call Eyes", duration: "3:44" },
      { id: "11", title: "Bootleg Midnight", duration: "4:15" },
      { id: "12", title: "Back To Gold", duration: "4:50" },
      { id: "13", title: "September Turns Gold (Slow Remix Live)", duration: "5:12" }
    ]
  },
  {
    id: "love-forever",
    title: "Our Love Our Forever",
    year: "2027",
    cover: "/images/our love our forever - album.png",
    tracks: [
      { id: "01", title: "Here Comes the Light", duration: "3:45" },
      { id: "02", title: "I Choose You", duration: "3:28" },
      { id: "03", title: "Two Roads One Heart", duration: "4:02" },
      { id: "04", title: "Bound to You", duration: "3:15" },
      { id: "05", title: "Now and Always", duration: "3:52" },
      { id: "06", title: "First and Always", duration: "3:34" },
      { id: "07", title: "Before I Knew Your Name", duration: "4:10" },
      { id: "08", title: "Like Home", duration: "3:22" },
      { id: "09", title: "Forever Starts With You", duration: "3:48" },
      { id: "10", title: "Hold This Moment", duration: "4:15" },
      { id: "11", title: "One Lifetime More", duration: "3:55" },
      { id: "12", title: "The Last Song We’ll Ever Need", duration: "4:28" },
      { id: "13", title: "Here Comes the Light (Wedding Remix)", duration: "3:58" },
      { id: "14", title: "I Choose You (Wedding Remix)", duration: "3:35" },
      { id: "15", title: "Two Roads One Heart (Wedding Remix)", duration: "4:12" },
      { id: "16", title: "Bound to You (Wedding Remix)", duration: "3:20" },
      { id: "17", title: "Before I Knew Your Name (Wedding Remix)", duration: "4:24" }
    ]
  }
];

export default function FanPortal() {
  const [isVip, setIsVip] = useState<boolean>(false);
  const [selectedAlbum, setSelectedAlbum] = useState<Album>(albumsData[0]);
  const [currentTrack, setCurrentTrack] = useState<Track>(albumsData[0].tracks[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [durationSec, setDurationSec] = useState<number>(180);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [lockedModal, setLockedModal] = useState<boolean>(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Parse duration string MM:SS to seconds
  const getTrackDurationSeconds = (durStr: string) => {
    const parts = durStr.split(":");
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  };

  useEffect(() => {
    // Reset player states when changing track
    setIsPlaying(false);
    setProgress(0);
    setCurrentTimeSec(0);
    setDurationSec(getTrackDurationSeconds(currentTrack.duration));
    if (timerRef.current) clearInterval(timerRef.current);
  }, [currentTrack]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTimeSec((prev) => {
          const nextVal = prev + 1;
          const trackLimit = isVip ? durationSec : 30; // 30s limit for non-VIP
          
          if (nextVal >= trackLimit) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            if (!isVip) {
              setLockedModal(true); // Open upgrade trigger
            }
            return trackLimit;
          }
          setProgress((nextVal / durationSec) * 100);
          return nextVal;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isVip, durationSec]);

  const handlePlayPause = () => {
    if (currentTimeSec >= (isVip ? durationSec : 30)) {
      // Replay from start
      setCurrentTimeSec(0);
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
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
    if (!isVip) {
      setLockedModal(true);
      return;
    }
    // Mock high-res download
    const element = document.createElement("a");
    const file = new Blob(["mock high-res audio data"], { type: "audio/wav" });
    element.href = URL.createObjectURL(file);
    element.download = `${trackTitle} - Ryker Boone (Lossless Studio Master).wav`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section style={{ padding: "4rem 8% 8rem", background: "#050505", position: "relative" }}>
      
      {/* Dev Mode Role Toggle Badge */}
      <div style={{
        position: "fixed",
        top: "100px",
        right: "20px",
        background: "rgba(226, 179, 90, 0.15)",
        border: "1px solid var(--accent-gold)",
        borderRadius: "30px",
        padding: "0.5rem 1.25rem",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}>
        <span style={{ fontSize: "0.6rem", fontWeight: "900", color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Test Role:
        </span>
        <button
          onClick={() => {
            setIsVip(!isVip);
            setLockedModal(false);
          }}
          style={{
            background: isVip ? "var(--accent-gold)" : "rgba(255,255,255,0.05)",
            color: isVip ? "black" : "white",
            border: "none",
            borderRadius: "20px",
            padding: "0.3rem 0.8rem",
            fontSize: "0.65rem",
            fontWeight: "900",
            cursor: "pointer",
            letterSpacing: "0.05em",
            transition: "all 0.3s"
          }}
        >
          {isVip ? "VIP MEMBER" : "FREE FAN"}
        </button>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ color: "var(--accent-gold)", fontSize: "0.75rem", fontWeight: "900", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Club Ryker Vault
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "1rem", marginBottom: "1rem" }}>
            VIP VAULT <span style={{ color: "var(--accent-gold)" }}>LISTENING LOUNGE</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem", lineHeight: "1.8" }}>
            {isVip 
              ? "Welcome back VIP! Enjoy unlimited full-length lossless streaming and high-fidelity studio WAV downloads of all unreleased recordings." 
              : "Get a sneak peek into Ryker's locked vaults. Standard members get 30-second previews. Upgrade to VIP to unlock lossless playback and full downloads."
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

          {/* Right Column: Custom Interactive Waveform Player */}
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
                <span style={{ color: "var(--accent-gold)", fontSize: "0.6rem", fontWeight: "900", letterSpacing: "0.2em", textTransform: "uppercase", background: "rgba(226,179,90,0.08)", padding: "0.3rem 0.7rem", borderRadius: "4px" }}>
                  {isVip ? "VIP Vault Unlocked" : "30s Preview Mode"}
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
            
            <style jsx global>{`
              @keyframes jitter {
                0% { transform: scaleY(1); }
                100% { transform: scaleY(0.6); }
              }
            `}</style>

            {/* Play Timeline */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
              <span>{formatTime(currentTimeSec)}</span>
              <span style={{ color: !isVip ? "var(--accent-gold)" : "var(--text-secondary)" }}>
                {isVip ? formatTime(durationSec) : "Locked at 0:30"}
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
                    border: isVip ? "1px solid var(--accent-gold)" : "1px solid rgba(255,255,255,0.1)",
                    background: isVip ? "rgba(226,179,90,0.08)" : "transparent",
                    color: isVip ? "var(--accent-gold)" : "rgba(255,255,255,0.3)",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: "900",
                    letterSpacing: "0.1em",
                    cursor: isVip ? "pointer" : "not-allowed",
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

                {!isVip && (
                  <Link href="https://shop.rykerboonemusic.website/membership" target="_blank">
                    <button style={{
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
                      UPGRADE TO VIP
                    </button>
                  </Link>
                )}
              </div>

            </div>
          </div>
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
                You've listened to the 30-second preview of this unreleased track. Upgrade to VIP Club today for £6.99/mo to unlock full streaming.
              </p>
            </div>
            <Link href="https://shop.rykerboonemusic.website/membership" target="_blank">
              <button style={{
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
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
