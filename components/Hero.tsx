"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroAlbum {
  title: string;
  tagline: string;
  image: string;
  description: string;
  link: string;
  releaseDate: string;
  singles: string[];
}

const heroAlbums: HeroAlbum[] = [
  {
    title: "Boots in the Autumn Dust",
    tagline: "The Full Length Album",
    image: "/images/boots in the autumn dust - album.jpg",
    description: "Deep, authentic Nashville soul rooted in blue-collar pride and lost love.",
    link: "/music/boots-in-the-autumn-dust",
    releaseDate: "2026-06-01T00:00:00",
    singles: ["Honky Tonk Sundown", "Dust Kicking Rhythm", "Sunburnt Memories"]
  },
  {
    title: "Golden Hour State of Mind",
    tagline: "Official Studio Album",
    image: "/images/golden hour state of mind - album.png",
    description: "A sunset-drenched collection of country-pop stories, celebrating life, love, and the good times.",
    link: "/music/golden-hour-state-of-mind",
    releaseDate: "2026-07-27T00:00:00",
    singles: ["Backroad Paradise", "Cold Beer And Carolina Blue", "Fireworks In July", "One More Sunset", "Small Town Skyline", "Golden Hour State Of Mind"]
  },
  {
    title: "September Turns Gold",
    tagline: "The Barn & Festival Sessions",
    image: "/images/september turns gold - album.png",
    description: "A rustic acoustic-led journey through heartland storytelling and modern country grit.",
    link: "/music/september-turns-gold",
    releaseDate: "2026-08-01T00:00:00",
    singles: ["September Turns Gold", "Highway On Fire", "Southern Steel"]
  },
  {
    title: "When The Lights Go Gold",
    tagline: "Modern Country Pop",
    image: "/images/when the lights go gold - album.png",
    description: "A cinematic modern country pop album built for cold-night drives and neon reflections.",
    link: "/music/when-the-lights-go-gold",
    releaseDate: "2026-10-01T00:00:00",
    singles: ["Friday Again", "Blue Flame", "When The Lights Go Gold", "Too Close To Midnight"]
  },
  {
    title: "Christmas All Year Long",
    tagline: "Country Holiday Collection",
    image: "/images/christmas-all-year-long-album.png",
    description: "A heartwarming collection of country holiday songs, blending festive steel strings and cozy cabin stories.",
    link: "/music/christmas-all-year-long",
    releaseDate: "2026-11-27T00:00:00",
    singles: ["Where We Belong", "Beneath the Lights", "Santa's Got a Pickup Truck", "Christmas All Year Long"]
  },
  {
    title: "The Way You Love Me",
    tagline: "Official Studio Album",
    image: "/images/the-way-you-love-me-album.png",
    description: "A soulful, heartfelt country-pop album exploring deep personal growth, family values, and the power of love.",
    link: "/music/the-way-you-love-me",
    releaseDate: "2027-01-22T00:00:00",
    singles: ["Still Makes Me Nervous", "The Way You Love Me", "Every Little Thing", "Front Seat"]
  },
  {
    title: "Our Love Our Forever",
    tagline: "Country Wedding Edition",
    image: "/images/our love our forever - album.png",
    description: "A high-energy, modern Nashville pop-country wedding album driven by upbeat rhythms and celebratory energy.",
    link: "/music/our-love-our-forever",
    releaseDate: "2027-02-12T00:00:00",
    singles: ["Here Comes the Light", "I Choose You", "Two Roads One Heart"]
  },
  {
    title: "Backroads in Bloom",
    tagline: "Spring Americana Journey",
    image: "/images/backroads-in-bloom-album.png",
    description: "A fresh spring Americana record celebrating new beginnings, roadside wildflowers, and open highways.",
    link: "/music/backroads-in-bloom",
    releaseDate: "2027-03-20T00:00:00",
    singles: ["Spring Came Early", "Nobody Since You", "Better Than We Were", "Easy As Breathing"]
  },
  {
    title: "Wide Open Roads",
    tagline: "Official Studio Album",
    image: "/images/wide open roads - album.jpg",
    description: "An energetic Nashville country-pop journey built for open highways and clear blue skies.",
    link: "/music/wide-open-roads",
    releaseDate: "2027-04-23T00:00:00",
    singles: ["Wide Open Roads", "Backroad Run", "Tailgate Sunset"]
  }
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Defaults to "Golden Hour State of Mind" (Out Today!)

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeAlbum = heroAlbums[activeIndex];

  const getReleaseStatus = (releaseDateStr: string) => {
    const releaseDate = new Date(releaseDateStr);
    const now = new Date();
    
    // Normalize dates to midnight to check for "Released today"
    const releaseDateMidnight = new Date(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());
    const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (nowMidnight.getTime() === releaseDateMidnight.getTime()) {
      return "NEW ALBUM OUT NOW";
    } else if (nowMidnight > releaseDateMidnight) {
      return "RELEASED";
    } else {
      return "COMING SOON";
    }
  };

  const getTimelineLabel = (dateStr: string) => {
    const date = new Date(dateStr);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = months[date.getMonth()];
    const y = date.getFullYear().toString().substring(2);
    return `${m} '${y}`;
  };

  const formatDateLabel = (dateStr: string) => {
    const date = new Date(dateStr);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = months[date.getMonth()];
    const d = date.getDate();
    const y = date.getFullYear();
    return `${m} ${d}, ${y}`;
  };

  const status = getReleaseStatus(activeAlbum.releaseDate);

  return (
    <section className="hero-section" style={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: '#0a0a0a',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'stretch'
    }}>
      {/* Left Content Column */}
      <div className="hero-left" style={{
        padding: '0 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#000000',
        position: 'relative',
        zIndex: 2
      }}>
        <div 
          className={mounted ? "animate-fade-in" : ""} 
          style={{ 
            opacity: mounted ? 1 : 0, 
            transition: 'opacity 1s ease',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div className="hero-logo-wrapper" style={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <Image 
              src="/images/boone-master-logo.png" 
              alt="Ryker Boone Master Logo" 
              width={1000} 
              height={1000} 
              priority
              style={{ 
                objectFit: 'contain', 
                width: '100%',
                height: 'auto',
                maxWidth: '900px',
                mixBlendMode: 'screen',
                filter: 'contrast(1.3) brightness(1.1)',
                maskImage: 'radial-gradient(circle, black 60%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 90%)'
              }} 
            />
          </div>
          
          <div className="hero-text-wrapper" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span className="subtitle" style={{ 
              letterSpacing: '0.6em', 
              fontSize: '0.8rem',
              color: 'var(--accent-gold)'
            }}>MODERN COUNTRY MUSIC</span>
            
            <p className="tagline" style={{ 
              fontSize: '1.6rem',
              opacity: 0.9,
              fontStyle: 'italic',
              color: 'var(--text-secondary)'
            }}>
              Real Songs. Real Stories. Real Life.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            marginTop: '5.5rem',
            position: 'relative',
            zIndex: 50
          }}>
            <Link href="/music" style={{ display: 'inline-block', position: 'relative', zIndex: 60 }}>
              <button style={{
                background: 'var(--accent-gold)',
                color: 'black',
                padding: '1.2rem 3rem',
                fontWeight: '900',
                letterSpacing: '0.2em',
                fontSize: '0.8rem',
                boxShadow: '0 20px 40px rgba(226, 179, 90, 0.15)',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}>
                LATEST RELEASES
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Interactive Release Showcase & Timeline */}
      <div className="hero-right" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Glassmorphism Timeline Widget */}
        <div className="timeline-container">
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            borderBottom: '1px solid rgba(226, 179, 90, 0.15)', 
            paddingBottom: '1rem',
            width: '100%' 
          }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
              RELEASE TIMELINE & DISCOGRAPHY
            </span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>
              SELECT TO VIEW
            </span>
          </div>

          {/* Showcase Panel */}
          <div className="timeline-showcase">
            {/* Album Cover */}
            <div className="timeline-cover-wrapper">
              <Image 
                src={activeAlbum.image} 
                alt={activeAlbum.title} 
                fill 
                sizes="(max-width: 1024px) 180px, 220px"
                priority
                style={{ objectFit: 'cover' }} 
              />
            </div>

            {/* Album details */}
            <div className="timeline-info">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className={`timeline-status-badge ${status === "NEW ALBUM OUT NOW" ? "new" : status === "RELEASED" ? "released" : "upcoming"}`}>
                  {status}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                  {formatDateLabel(activeAlbum.releaseDate)}
                </span>
              </div>

              <h3 className="timeline-title">{activeAlbum.title}</h3>
              <p className="timeline-desc">{activeAlbum.description}</p>

              {/* Singles Box */}
              <div className="timeline-singles-box">
                <span className="timeline-singles-title">KEY SINGLES & TRACKS</span>
                <div className="timeline-singles-list">
                  {activeAlbum.singles.map((single, i) => (
                    <div key={i} className="timeline-single-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-gold)" style={{ flexShrink: 0 }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="timeline-single-name">{single}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div style={{ marginTop: '0.5rem' }}>
                <Link href={activeAlbum.link} style={{ display: 'inline-block' }}>
                  <button style={{
                    background: status === "NEW ALBUM OUT NOW" || status === "RELEASED" ? 'var(--accent-gold)' : 'transparent',
                    color: status === "NEW ALBUM OUT NOW" || status === "RELEASED" ? 'black' : 'var(--accent-gold)',
                    border: status === "NEW ALBUM OUT NOW" || status === "RELEASED" ? 'none' : '1px solid var(--accent-gold)',
                    padding: '0.8rem 2.2rem',
                    fontWeight: '900',
                    letterSpacing: '0.15em',
                    fontSize: '0.7rem',
                    borderRadius: '4px',
                    transition: 'var(--transition-smooth)',
                    boxShadow: status === "NEW ALBUM OUT NOW" ? '0 10px 25px rgba(226, 179, 90, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "NEW ALBUM OUT NOW" && status !== "RELEASED") {
                      e.currentTarget.style.background = 'rgba(226, 179, 90, 0.08)';
                    } else {
                      e.currentTarget.style.filter = 'brightness(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "NEW ALBUM OUT NOW" && status !== "RELEASED") {
                      e.currentTarget.style.background = 'transparent';
                    } else {
                      e.currentTarget.style.filter = 'none';
                    }
                  }}
                  >
                    {status === "NEW ALBUM OUT NOW" || status === "RELEASED" ? "LISTEN NOW" : "PRE-SAVE ALBUM"}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Timeline Node Selector */}
          <div className="timeline-nav-wrapper">
            {/* Horizontal Line background */}
            <div className="timeline-line">
              <div 
                className="timeline-progress" 
                style={{ width: `${(activeIndex / (heroAlbums.length - 1)) * 100}%` }}
              />
            </div>

            {/* List of clickable release node circles */}
            <div className="timeline-nodes">
              {heroAlbums.map((album, idx) => {
                const isActive = idx === activeIndex;
                const label = getTimelineLabel(album.releaseDate);

                return (
                  <div 
                    key={idx} 
                    className={`timeline-node ${isActive ? "active" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className="timeline-dot" />
                    <span className="timeline-node-label">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

