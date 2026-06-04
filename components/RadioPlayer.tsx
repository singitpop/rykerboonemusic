"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import KaraokeLyrics from "./KaraokeLyrics";

// A flat list of all tracks we can stream from the vault
const ALL_TRACKS = [
  // When The Lights Go Gold
  { album: "lights-gold", track: "01", title: "Friday Again", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "02", title: "Midnight Motion", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "03", title: "Cold Smoke", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "04", title: "Blue Flame", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "05", title: "When The Lights Go Gold", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "06", title: "Kiss Me Like That", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "07", title: "Midnight Static", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "08", title: "White Line Weather", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "09", title: "Too Close To Midnight", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "10", title: "What We Were", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "11", title: "Stay Till Sunday", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },
  { album: "lights-gold", track: "12", title: "One More Summer", albumName: "When The Lights Go Gold", cover: "/images/when the lights go gold - album.png" },

  // Boots in the Autumn Dust
  { album: "boots-autumn", track: "01", title: "Honky Tonk Sundown", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "02", title: "August Heatwave", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "03", title: "Barefoot on the Backroad", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "04", title: "Neon Barn Nights", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "05", title: "Sweet Tea and Blue Jeans", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "06", title: "Dust Kicking Rhythm", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "07", title: "Sunburnt Memories", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "08", title: "Tailgate Turn Up", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "09", title: "Riverbank Two Step", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "10", title: "Fireflies and Front Porches", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "11", title: "Whiskey Weather", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },
  { album: "boots-autumn", track: "12", title: "Last Dance in the Dirt", albumName: "Boots in the Autumn Dust", cover: "/images/boots in the autumn dust - album.jpg" },

  // September Turns Gold
  { album: "september-gold", track: "01", title: "Whiskey In The Headlights", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "02", title: "Dust On The Blacktop", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "03", title: "Neon County Line", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "04", title: "Midnight Gravel", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "05", title: "September Turns Gold", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "06", title: "One More Round", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "07", title: "Backroad Heartbeat", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "08", title: "Highway On Fire", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "09", title: "Southern Steel", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "10", title: "Last Call Eyes", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "11", title: "Bootleg Midnight", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "12", title: "Back To Gold", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },
  { album: "september-gold", track: "13", title: "September Turns Gold Remix Live", albumName: "September Turns Gold", cover: "/images/september turns gold - album.png" },

  // Our Love Our Forever
  { album: "love-forever", track: "01", title: "Here Comes the Light", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "02", title: "I Choose You", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "03", title: "Two Roads One Heart", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "04", title: "Bound to You", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "05", title: "Now and Always", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "06", title: "First and Always", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "07", title: "Before I Knew Your Name", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "08", title: "Like Home", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "09", title: "Forever Starts With You", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "10", title: "Hold This Moment", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "11", title: "One Lifetime More", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" },
  { album: "love-forever", track: "12", title: "The Last Song We’ll Ever Need", albumName: "Our Love Our Forever", cover: "/images/our love our forever - album.png" }
];

export default function RadioPlayer() {
  const [playlist, setPlaylist] = useState<typeof ALL_TRACKS>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize a shuffled playlist on mount
  useEffect(() => {
    const shuffled = [...ALL_TRACKS].sort(() => Math.random() - 0.5);
    setPlaylist(shuffled);
  }, []);

  const currentTrack = playlist[currentIndex];

  useEffect(() => {
    if (audioRef.current && playlist.length > 0) {
      const currentTrack = playlist[currentIndex];
      // Force the player to stream the WAV format instead of the default MP3
      const streamUrl = `/api/vault/stream?album=${currentTrack.album}&track=${currentTrack.track}&format=wav`;
      
      // Only set source if it's different to avoid reloading
      if (!audioRef.current.src.includes(`track=${currentTrack.track}`)) {
        audioRef.current.src = streamUrl;
        audioRef.current.load();
        
        // Auto-play next track if we were already playing
        // Except for the very first initialization
        if (currentIndex > 0 || isPlaying) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(err => console.error("Auto-play failed:", err));
        }
      }
    }
  }, [currentIndex, currentTrack, playlist, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error(e));
    }
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const skipPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  const onEnded = () => {
    skipNext();
  };

  if (!currentTrack) return null;

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(226,179,90,0.2)",
      borderRadius: "24px",
      padding: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
    }}>
      
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Main View Area */}
      {showLyrics ? (
        <KaraokeLyrics trackTitle={currentTrack.title} progress={progress} />
      ) : (
        <div style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid rgba(226,179,90,0.5)",
          boxShadow: "0 0 30px rgba(226,179,90,0.2)",
          animation: isPlaying ? "spin 20s linear infinite" : "none",
          marginBottom: "2rem",
          position: "relative"
        }}>
          <Image 
            src={currentTrack.cover}
            alt="Album Cover"
            fill
            style={{ objectFit: "cover" }}
            sizes="300px"
          />
          {/* Vinyl Center Hole */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30px", height: "30px",
            background: "#111",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.1)"
          }}></div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0 2rem", marginBottom: "2rem" }}>
        <button 
          onClick={() => setShowLyrics(!showLyrics)}
          style={{
            background: "none",
            border: "1px solid rgba(226,179,90,0.4)",
            color: showLyrics ? "var(--accent-gold)" : "rgba(255,255,255,0.6)",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "0.8rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "all 0.2s"
          }}
        >
          {showLyrics ? "Show Vinyl" : "Karaoke Mode"}
        </button>

        <div style={{ textAlign: "right" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 0.2rem 0" }}>
            {currentTrack.title}
          </h2>
          <p style={{ color: "var(--accent-gold)", margin: 0, fontSize: "0.9rem" }}>
            {currentTrack.albumName}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginBottom: "2rem", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "var(--accent-gold)", transition: "width 0.1s linear" }} />
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <button onClick={skipPrev} style={{
          background: "none", border: "none", color: "white", fontSize: "2rem", cursor: "pointer", opacity: 0.7
        }} onMouseEnter={e => e.currentTarget.style.opacity="1"} onMouseLeave={e => e.currentTarget.style.opacity="0.7"}>
          ⏮
        </button>

        <button onClick={togglePlay} style={{
          background: "var(--accent-gold)", color: "black", border: "none",
          width: "60px", height: "60px", borderRadius: "50%",
          fontSize: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 5px 15px rgba(226,179,90,0.3)"
        }}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button onClick={skipNext} style={{
          background: "none", border: "none", color: "white", fontSize: "2rem", cursor: "pointer", opacity: 0.7
        }} onMouseEnter={e => e.currentTarget.style.opacity="1"} onMouseLeave={e => e.currentTarget.style.opacity="0.7"}>
          ⏭
        </button>
      </div>

    </div>
  );
}
