"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";
import { RYKER_ALBUM_LINKS } from "@/data/streamingLinks";

export default function WhenTheLightsGoGoldPage() {
  const { session, isLoaded } = useRykerSession();
  const isLabel = isLoaded && session && (
    session.tier === 'LABEL' ||
    session.tier === 'ADMIN' ||
    session.tier === 'LIFETIME' ||
    session.rykerTier === 'PREMIUM'
  );

  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string; isLocked?: boolean; isLabelAccess?: boolean } | null>(null);

  const RELEASE_DATE = new Date("2026-10-01T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    setSelectedTrackLyrics({
      title: track.title,
      lyrics: "Lyrics are temporarily unavailable to protect copyright and intellectual property.",
      isLocked: false
    });
  };

  const tracks = [
    { id: "01", title: "Friday Again", duration: "2:44", badge: "SINGLE" },
    { id: "02", title: "Midnight Motion", duration: "3:03" },
    { id: "03", title: "Cold Smoke", duration: "3:08", badge: "SINGLE" },
    { id: "04", title: "Blue Flame", duration: "3:23", badge: "SINGLE" },
    { id: "05", title: "When The Lights Go Gold", duration: "2:59", badge: "SINGLE" },
    { id: "06", title: "Kiss Me Like That", duration: "3:14" },
    { id: "07", title: "Midnight Static", duration: "3:08" },
    { id: "08", title: "White Line Weather", duration: "3:14", badge: "SINGLE" },
    { id: "09", title: "Too Close To Midnight", duration: "3:04" },
    { id: "10", title: "What We Were", duration: "3:36" },
    { id: "11", title: "Stay Till Sunday", duration: "2:59" },
    { id: "12", title: "One More Summer", duration: "3:03", badge: "SINGLE" }
  ];

  const singles = [
    {
      title: "Friday Again",
      image: "/images/friday again - single.png",
      tagline: "Lead Single",
      description: "An upbeat country-pop driving track capturing the anticipation of the weekend and small-town escape."
    },
    {
      title: "Blue Flame",
      image: "/images/blue flame - single.png",
      tagline: "Second Single",
      description: "A dark, moody ballad with clean guitar hooks, subtle pedal steel, and deep low-end textures."
    },
    {
      title: "When The Lights Go Gold",
      image: "/images/when the lights go gold - single.png",
      tagline: "Title Track Single",
      description: "A sweeping, neon-lit country anthem celebrating late-night memories, dashboard glow, and romance."
    },
    {
      title: "Too Close To Midnight",
      image: "/images/too close to midnight - single.png",
      tagline: "Radio Single",
      description: "An emotionally controlled vocal performance framed by acoustic pulses and a rich commercial hook."
    },
    {
      title: "One More Summer",
      image: "/images/one more summer - single.png",
      tagline: "Nostalgic Single",
      description: "A warm, melodic summer-themed crossover track that balances small-town imagery with pop-country rhythm."
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
              src="/images/when the lights go gold - album.png" 
              alt="When The Lights Go Gold Album Cover" 
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
              IN THE STUDIO
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
              Modern Country Pop
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              WHEN THE LIGHTS <span style={{ color: 'var(--accent-gold)' }}>GO GOLD</span>
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
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>OCTOBER 2026</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>IN THE STUDIO</strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              A cinematic modern country pop album built for cold-night drives, neon reflections, winter romance, and emotional late-night memories. Blending polished studio production with catchy crossover hooks, When The Lights Go Gold lives between modern country and atmospheric pop — combining rhythmic acoustic guitars, smooth electric textures, deep low-end movement, layered harmonies, and emotionally controlled vocals into a sleek radio-ready sound.
            </p>

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

      {/* Tracklist & Creative Pillars Showcase */}
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
            <span className="subtitle">Promotional Singles</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>OFFICIAL <span style={{ color: 'var(--accent-gold)' }}>SINGLES</span></h2>
            
            <div style={{ display: 'grid', gap: '3rem' }}>
              {singles.map((single, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.01)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid rgba(226, 179, 90, 0.1)'
                  }}>
                    <Image 
                      src={single.image} 
                      alt={single.title} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <span style={{ 
                      color: 'var(--accent-gold)', 
                      fontSize: '0.65rem', 
                      fontWeight: '900', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>
                      {single.tagline}
                    </span>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-playfair)' }}>
                      {single.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.5' }}>
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
              WHEN THE LIGHTS GO GOLD
            </span>
            {selectedTrackLyrics.isLabelAccess && (
              <span style={{
                fontSize: '0.55rem',
                fontWeight: '900',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                background: 'rgba(226, 179, 90, 0.15)',
                color: 'var(--accent-gold)',
                border: '1px solid rgba(226, 179, 90, 0.4)',
                padding: '0.3rem 0.8rem',
                borderRadius: '30px',
                marginBottom: '0.75rem'
              }}>
                ◆ Label Access
              </span>
            )}
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

            {selectedTrackLyrics.isLocked ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                margin: '2rem 0'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(226, 179, 90, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Pre-Release Lock
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  maxWidth: '380px',
                  margin: 0
                }}>
                  {selectedTrackLyrics.lyrics}
                </p>
              </div>
            ) : (
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
            )}

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

const lyricsData: Record<string, string> = {};
