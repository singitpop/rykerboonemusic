"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";
import { RYKER_ALBUM_LINKS } from "@/data/streamingLinks";

export default function BackroadsInBloomPage() {
  const { session, isLoaded } = useRykerSession();
  const isPremium = isLoaded && session && (
    session.rykerTier === 'PREMIUM' ||
    session.rykerTier === 'VIP' ||
    ['PREMIUM', 'VIP', 'INSIDER', 'LABEL', 'ADMIN'].includes(session.tier)
  );
  
  const isLabel = isLoaded && session && (
    session.tier === 'LABEL' ||
    session.tier === 'ADMIN' ||
    session.tier === 'LIFETIME' ||
    session.rykerTier === 'PREMIUM'
  );

  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string; isLocked?: boolean; isLabelAccess?: boolean } | null>(null);

  const RELEASE_DATE = new Date("2027-03-20T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    setSelectedTrackLyrics({
      title: track.title,
      lyrics: "Lyrics are temporarily unavailable to protect copyright and intellectual property.",
      isLocked: false
    });
  };

  const tracks = [
    { id: "01", title: "Spring Came Early", duration: "3:28", badge: "SINGLE" },
    { id: "02", title: "Backroads in Bloom", duration: "3:45" },
    { id: "03", title: "Friday Night Fireflies", duration: "3:12" },
    { id: "04", title: "Polaroids on the Dashboard", duration: "3:55" },
    { id: "05", title: "Nobody Since You", duration: "3:34", badge: "SINGLE" },
    { id: "06", title: "Right Where We Left Off", duration: "3:40" },
    { id: "07", title: "One More Time Around", duration: "3:18" },
    { id: "08", title: "Better Than We Were", duration: "3:29", badge: "SINGLE" },
    { id: "09", title: "Easy As Breathing", duration: "3:15", badge: "SINGLE" },
    { id: "10", title: "Front Porch Lights", duration: "4:02" },
    { id: "11", title: "When It's You", duration: "3:50" },
    { id: "12", title: "A Hundred Summers", duration: "4:12" }
  ];

  const singles = [
    {
      title: "Spring Came Early",
      image: "/images/spring-came-early-single.png",
      tagline: "Lead Single",
      description: "A vibrant country-Americana acoustic anthem welcoming the warm sunshine and early blossoms of spring."
    },
    {
      title: "Nobody Since You",
      image: "/images/nobody-since-you-single.png",
      tagline: "Acoustic Crossover",
      description: "A tender, nostalgic look at a love that remains unmatched, driving rhythm and rich harmonies."
    },
    {
      title: "Better Than We Were",
      image: "/images/better-than-we-were-single.png",
      tagline: "Heartland Track",
      description: "A storytelling masterpiece celebrating personal recovery, country values, and growing stronger together."
    },
    {
      title: "Easy As Breathing",
      image: "/images/easy-as-breathing-single.png",
      tagline: "Radio Single",
      description: "An upbeat summer-ready single detailing how natural true love is, driven by bright guitars and fiddles."
    }
  ];

  return (
    <main style={{ background: '#050505', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero section */}
      <section style={{ padding: '8rem 8% 4rem', background: 'linear-gradient(to bottom, #0a0a0a, #050505)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            href="/music" 
            style={{ 
              color: 'var(--accent-gold)', 
              textDecoration: 'none', 
              fontSize: '0.8rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.1em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← BACK TO DISCOGRAPHY
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left: Album cover */}
          <div style={{
            position: 'relative',
            aspectRatio: '1/1',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            border: '1px solid rgba(226, 179, 90, 0.2)'
          }}>
            <Image 
              src="/images/backroads-in-bloom-album.png" 
              alt="Backroads in Bloom Album Cover" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'var(--accent-gold)',
              color: 'black',
              padding: '0.5rem 1rem',
              fontSize: '0.7rem',
              fontWeight: '900',
              letterSpacing: '0.2em',
              borderRadius: '4px',
              zIndex: 10,
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}>
              COMING SOON
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <span style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '0.75rem', 
              fontWeight: '900', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Spring Americana Journey
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              BACKROADS <span style={{ color: 'var(--accent-gold)' }}>IN BLOOM</span>
            </h1>
            
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>20 MARCH 2027</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>PRE-SAVE</strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL & Lossless WAV</strong></div>
            </div>

            <div style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <p>
                *Backroads in Bloom* is a fresh spring Americana journey, charting themes of growth, personal recovery, new beginnings, and the freedom of the open road. Following a cold country winter, the album bursts into life with driving acoustic guitars, soaring twin fiddles, bright telecaster lines, and Ryker Boone's signature deep baritone vocals.
              </p>
              <p>
                Recorded entirely in Columbia, Tennessee, the record captures a vibrant, live-room pickers vibe, providing the perfect soundtrack for scenic drives, front-porch listening, and sunlit spring afternoons.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button style={{
                background: 'var(--accent-gold)',
                color: 'black',
                padding: '1rem 2.5rem',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
              >
                PRE-SAVE ON SPOTIFY
              </button>
              <button style={{
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'white';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'transparent';
              }}
              >
                PRE-ADD ON APPLE MUSIC
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracklist & Singles Showcase */}
      <section style={{ padding: '6rem 8% 8rem', background: '#050505' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem'
        }}>
          {/* Left: Tracklist */}
          <div>
            <span className="subtitle">Official Release</span>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>THE <span style={{ color: 'var(--accent-gold)' }}>TRACKLIST</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '2.5rem', letterSpacing: '0.05em' }}>
              CLICK ANY TRACK TO VIEW LYRICS
            </p>
            
            <div style={{
              background: 'linear-gradient(to right, rgba(226, 179, 90, 0.1), rgba(0, 0, 0, 0))',
              borderLeft: '4px solid var(--accent-gold)',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 8px 8px 0',
              marginBottom: '2rem',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>🎵</span>
              <span style={{ color: 'var(--text-primary)', lineHeight: '1.5' }}>
                Want to listen? Join as a free Fan to hear 30-second previews, or become a VIP Member for just £2.99 to listen to all albums and future releases in full.{' '}
                <Link href="/club" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>
                  Join Now
                </Link>
              </span>
            </div>
            
            <div style={{ display: 'grid', gap: '0.25rem' }}>
              {tracks.map((track) => (
                <div 
                  key={track.id}
                  onMouseEnter={() => setActiveTrack(track.id)}
                  onMouseLeave={() => setActiveTrack(null)}
                  onClick={() => handleTrackClick(track)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '0.9rem 1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.02)',
                    borderLeft: track.badge ? '3px solid var(--accent-gold)' : '3px solid transparent',
                    background: activeTrack === track.id 
                      ? 'rgba(226, 179, 90, 0.08)' 
                      : track.badge 
                        ? 'rgba(226, 179, 90, 0.03)' 
                        : 'transparent',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: track.badge ? '1px solid var(--accent-gold)' : '1px solid rgba(226, 179, 90, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    fontSize: '0.65rem',
                    background: track.badge ? 'rgba(226, 179, 90, 0.1)' : 'transparent'
                  }}>
                    {activeTrack === track.id ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : track.id}
                  </div>
                  <span style={{ 
                    color: activeTrack === track.id ? 'var(--accent-gold)' : 'white', 
                    fontWeight: track.badge ? '700' : '500',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease' 
                  }}>
                    {track.title}
                  </span>
                  {track.badge && (
                    <span style={{
                      fontSize: '0.5rem',
                      background: 'var(--accent-gold)',
                      color: 'black',
                      padding: '0.2rem 0.5rem',
                      fontWeight: '900',
                      borderRadius: '2px',
                      marginLeft: '0.5rem',
                      letterSpacing: '0.05em'
                    }}>
                      {track.badge}
                    </span>
                  )}
                  <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured Singles */}
          <div>
            <span className="subtitle">Featured Releases</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>ALBUM <span style={{ color: 'var(--accent-gold)' }}>SINGLES</span></h2>
            
            <div style={{ display: 'grid', gap: '3rem' }}>
              {singles.map((single, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.01)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid rgba(226, 179, 90, 0.2)'
                  }}>
                    <Image 
                      src={single.image} 
                      alt={single.title} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <span style={{
                      color: 'var(--accent-gold)',
                      fontSize: '0.6rem',
                      fontWeight: '900',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>{single.tagline}</span>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-playfair)' }}>
                      {single.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                      {single.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics Modal */}
      {selectedTrackLyrics && (
        <div 
          onClick={() => setSelectedTrackLyrics(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(10, 10, 10, 0.97)',
              border: '1px solid rgba(226, 179, 90, 0.2)',
              borderRadius: '16px',
              padding: '3.5rem 3rem',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <button 
              onClick={() => setSelectedTrackLyrics(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                lineHeight: '1',
                padding: '0.2rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              &times;
            </button>

            <span style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '0.65rem', 
              fontWeight: '900', 
              letterSpacing: '0.25em', 
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              BACKROADS IN BLOOM
            </span>
            <h3 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.25rem)', 
              fontWeight: '900', 
              fontFamily: 'var(--font-playfair)', 
              color: 'white',
              textAlign: 'center',
              textTransform: 'uppercase',
              lineHeight: '1.1',
              letterSpacing: '0.02em',
              marginBottom: '2.5rem'
            }}>
              {selectedTrackLyrics.title}
            </h3>

            <div style={{ 
              width: '100%',
              color: 'rgba(255, 255, 255, 0.88)', 
              fontSize: '1.1rem', 
              lineHeight: '2.0', 
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontFamily: 'inherit',
              letterSpacing: '0.01em'
            }}>
              {selectedTrackLyrics.lyrics}
            </div>

            <div style={{ 
              marginTop: '2.5rem', 
              fontSize: '0.75rem', 
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.05em' 
            }}>
              Click outside or close to exit
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
