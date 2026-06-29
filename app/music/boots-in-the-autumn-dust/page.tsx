"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";
import { RYKER_ALBUM_LINKS } from "@/data/streamingLinks";

export default function BootsAlbumPage() {
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

  const RELEASE_DATE = new Date("2026-06-01T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    setSelectedTrackLyrics({
      title: track.title,
      lyrics: "Lyrics are temporarily unavailable to protect copyright and intellectual property.",
      isLocked: false
    });
  };

  const tracks = [
    { id: "01", title: "Honky Tonk Sundown", duration: "3:42", badge: "SINGLE" },
    { id: "02", title: "August Heatwave", duration: "4:05" },
    { id: "03", title: "Barefoot on the Backroad", duration: "3:18" },
    { id: "04", title: "Neon Barn Nights", duration: "3:55" },
    { id: "05", title: "Sweet Tea and Blue Jeans", duration: "3:29" },
    { id: "06", title: "Dust Kicking Rhythm", duration: "3:12", badge: "SINGLE" },
    { id: "07", title: "Sunburnt Memories", duration: "4:21", badge: "SINGLE" },
    { id: "08", title: "Tailgate Turn Up", duration: "3:34" },
    { id: "09", title: "Riverbank Two Step", duration: "2:58" },
    { id: "10", title: "Fireflies and Front Porches", duration: "3:50" },
    { id: "11", title: "Whiskey Weather", duration: "4:12" },
    { id: "12", title: "Last Dance in the Dirt", duration: "4:45" }
  ];

  const singles = [
    {
      title: "Honky Tonk Sundown",
      image: "/images/Honky Tonk Sundown - single.jpg",
      tagline: "Lead Single",
      description: "A high-energy honky-tonk anthem featuring Ryker's signature grit and classic twin fiddle hooks."
    },
    {
      title: "Dust Kicking Rhythm",
      image: "/images/dust kicking rhythm - single.jpg",
      tagline: "Second Single",
      description: "Driving percussion and a dirty telecaster riff that keeps the boots moving and dust flying."
    },
    {
      title: "Sunburnt Memories",
      image: "/images/sunburnt memories - single.jpg",
      tagline: "Summer Single",
      description: "A nostalgic, acoustic-led mid-tempo track looking back at summer nights on the Duck River."
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
              src="/images/boots in the autumn dust - album.jpg" 
              alt="Boots in the Autumn Dust Cover" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
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
              Official Studio Album
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              BOOTS IN THE <span style={{ color: 'var(--accent-gold)' }}>AUTUMN DUST</span>
            </h1>
            
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingBottom: '1rem'
            }}>
              <div>RELEASED: <strong style={{ color: 'white' }}>JUNE 2026</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              Deep, authentic Nashville soul rooted in blue-collar pride and lost love. Recorded at the historic Blackbird Studio in Nashville, this album captures the true essence of heartland country storytelling. With raw guitar licks, soaring steel guitar, and Ryker's warm whiskey baritone, it chronicles the struggles and triumphs of working-class American life.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a 
                href={RYKER_ALBUM_LINKS.bootsInTheAutumnDust.spotify}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--accent-gold)',
                  color: 'black',
                  padding: '1rem 2.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '900',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
              >
                LISTEN ON SPOTIFY
              </a>
              <a 
                href={RYKER_ALBUM_LINKS.bootsInTheAutumnDust.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '900',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                APPLE MUSIC
              </a>
              <a 
                href={RYKER_ALBUM_LINKS.bootsInTheAutumnDust.amazonMusic}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '900',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                AMAZON MUSIC
              </a>
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
              BOOTS IN THE AUTUMN DUST
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
