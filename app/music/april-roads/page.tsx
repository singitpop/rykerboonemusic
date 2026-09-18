"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";
import { RYKER_ARTIST_LINKS } from "@/data/streamingLinks";

export default function AprilRoadsAlbumPage() {
  const { session, isLoaded } = useRykerSession();
  const isLabel = isLoaded && session && (
    session.tier === 'LABEL' ||
    session.tier === 'ADMIN' ||
    session.tier === 'LIFETIME' ||
    session.rykerTier === 'PREMIUM'
  );

  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string; isLocked?: boolean; isLabelAccess?: boolean } | null>(null);

  const RELEASE_DATE = new Date("2027-04-02T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    setSelectedTrackLyrics({
      title: track.title,
      lyrics: "Lyrics are temporarily unavailable to protect copyright and intellectual property.",
      isLocked: false
    });
  };

  const tracks = [
    { id: "01", title: "April Roads", duration: "3:35", badge: "SINGLE" },
    { id: "02", title: "Sunflower Highway", duration: "3:48" },
    { id: "03", title: "Golden Prairie Sunset", duration: "4:02", badge: "SINGLE" },
    { id: "04", title: "Where the Fenceline Ends", duration: "3:24" },
    { id: "05", title: "Springtime in Tennessee", duration: "3:52", badge: "SINGLE" },
    { id: "06", title: "Dust Behind the Wheels", duration: "3:18" },
    { id: "07", title: "Wildflowers by the Creek", duration: "3:44" },
    { id: "08", title: "Rolling Hill Horizon", duration: "4:10", badge: "SINGLE" },
    { id: "09", title: "Gravel Road Gospel", duration: "3:30" },
    { id: "10", title: "Clear Sky Mornings", duration: "3:56" },
    { id: "11", title: "Chasing the Golden Hour", duration: "4:15" },
    { id: "12", title: "Until the Road Runs Out", duration: "4:28" }
  ];

  const singles = [
    {
      title: "April Roads",
      image: "/images/april-roads-album.jpg",
      tagline: "Title Track Single",
      description: "An evocative, driving heartland acoustic anthem celebrating freedom, fresh starts, and the promise of open roads."
    },
    {
      title: "Golden Prairie Sunset",
      image: "/images/april-roads-album.jpg",
      tagline: "Sunset Anthem",
      description: "Warm pedal steel guitar and rich acoustic strumming paint an unforgettable sunset across the Tennessee hills."
    },
    {
      title: "Springtime in Tennessee",
      image: "/images/april-roads-album.jpg",
      tagline: "Heartland Single",
      description: "A lively country-pop celebration of home, blooming fencelines, and the arrival of warm spring weather."
    },
    {
      title: "Rolling Hill Horizon",
      image: "/images/april-roads-album.jpg",
      tagline: "Acoustic Single",
      description: "A tender, reflective ballad highlighting Ryker's signature warm baritone and intricate fingerpicked guitar."
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
              src="/images/april-roads-album.jpg" 
              alt="April Roads Album Cover" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
            {new Date() < RELEASE_DATE && (
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
            )}
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
              Spring Heartland Collection
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              APRIL <span style={{ color: 'var(--accent-gold)' }}>ROADS</span>
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
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>2 APRIL 2027</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGITPOP RECORDS</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>PRE-SAVE</strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              *April Roads* is a sun-drenched spring Americana journey through rolling green hills, winding country dirt roads, and golden Tennessee sunsets. Pairing organic acoustic guitars, soaring fiddle, and pedal steel textures with Ryker Boone&apos;s warm whiskey baritone, this 12-track album celebrates renewal, heartland freedom, and the adventures waiting just over the next rise.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a 
                href={RYKER_ARTIST_LINKS.spotify}
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
                  justifyContent: 'center',
                  borderRadius: '2px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
              >
                LISTEN ON SPOTIFY
              </a>
              <a 
                href={RYKER_ARTIST_LINKS.appleMusic}
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
                  justifyContent: 'center',
                  borderRadius: '2px'
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
                href={RYKER_ARTIST_LINKS.amazonMusic}
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
                  justifyContent: 'center',
                  borderRadius: '2px'
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
            <div style={{ display: 'grid', gap: '0.25rem' }}>
              {tracks.map((track) => (
                <div 
                  key={track.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '0.9rem 1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.02)',
                    borderLeft: track.badge ? '3px solid var(--accent-gold)' : '3px solid transparent',
                    background: track.badge ? 'rgba(226, 179, 90, 0.03)' : 'transparent',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: 'var(--accent-gold)'
                  }}>
                    {track.id}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ 
                        fontWeight: '600', 
                        fontSize: '0.95rem',
                        color: 'white'
                      }}>
                        {track.title}
                      </span>
                      {track.badge && (
                        <span style={{
                          fontSize: '0.55rem',
                          background: 'var(--accent-gold)',
                          color: 'black',
                          padding: '0.1rem 0.4rem',
                          fontWeight: '900',
                          letterSpacing: '0.05em',
                          borderRadius: '2px'
                        }}>
                          {track.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-secondary)',
                    fontVariantNumeric: 'tabular-nums' 
                  }}>
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Singles Showcase */}
          <div>
            <span className="subtitle">Featured Releases</span>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>KEY <span style={{ color: 'var(--accent-gold)' }}>SINGLES</span></h2>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {singles.map((single, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    alignItems: 'center'
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    flexShrink: 0,
                    borderRadius: '4px',
                    overflow: 'hidden'
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
                      fontSize: '0.65rem', 
                      color: 'var(--accent-gold)', 
                      fontWeight: 'bold', 
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}>
                      {single.tagline}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', margin: '0.2rem 0 0.4rem', fontFamily: 'var(--font-playfair)' }}>
                      {single.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                      {single.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
