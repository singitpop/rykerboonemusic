"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";
import { RYKER_ALBUM_LINKS } from "@/data/streamingLinks";

export default function OurLoveOurForeverPage() {
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

  const RELEASE_DATE = new Date("2027-02-12T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    setSelectedTrackLyrics({
      title: track.title,
      lyrics: "Lyrics are temporarily unavailable to protect copyright and intellectual property.",
      isLocked: false
    });
  };

  const tracks = [
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
    { id: "13", title: "Here Comes the Light (Wedding Remix)", duration: "3:58", badge: "WEDDING REMIX" },
    { id: "14", title: "I Choose You (Wedding Remix)", duration: "3:35", badge: "WEDDING REMIX" },
    { id: "15", title: "Two Roads One Heart (Wedding Remix)", duration: "4:12", badge: "WEDDING REMIX" },
    { id: "16", title: "Bound to You (Wedding Remix)", duration: "3:20", badge: "WEDDING REMIX" },
    { id: "17", title: "Before I Knew Your Name (Wedding Remix)", duration: "4:24", badge: "WEDDING REMIX" }
  ];

  const creativePillars = [
    {
      title: "The Love Story",
      description: "Sweeping country love songs and authentic lyrics describing deep devotion, dedication, and the beautiful journey of two roads merging into one heart.",
      tags: ["Devotion", "Heartland Romance", "Timeless Vows", "Acoustic Warmth"]
    },
    {
      title: "Wedding Remixes",
      description: "Custom reimagined acoustic and ceremony-ready versions of key tracks, crafted specifically for first dances, aisle walks, and reception celebrations.",
      tags: ["First Dance", "Ceremony Ready", "Acoustic Strings", "Romantic Tempo"]
    },
    {
      title: "Organic Instrumentation",
      description: "A lush, emotional musical palette featuring soft acoustic guitars, gentle grand piano, soaring pedal steel, and warm fiddle textures.",
      tags: ["Pedal Steel", "Grand Piano", "Rich Harmonies", "Warm Baritone"]
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
              src="/images/our love our forever - album.png" 
              alt="Our Love Our Forever Album Cover" 
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
              Country Wedding Edition
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              OUR LOVE <span style={{ color: 'var(--accent-gold)' }}>OUR FOREVER</span>
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
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>12 FEBRUARY 2027</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>PRE-SAVE</strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL</strong></div>
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
                Our Love Our Forever– Country Wedding Edition is a high-energy modern Nashville pop-country wedding album built around love, commitment, celebration, and the excitement of a wedding day — all driven by polished 130 BPM country-pop production. Rather than slow ballads, the first 12 tracks deliver upbeat country rhythms, line-dancing energy, radio-ready hooks, and cinematic wedding storytelling designed for receptions, dance floors, road trips, and unforgettable wedding nights.
              </p>
              <p>
                Led by Ryker Boone’s rich country vocals and modern Nashville production, the album blends driving acoustic guitars, punchy country drums, polished electric guitar hooks, rhythmic banjo textures, layered harmonies, and uplifting choruses inspired by contemporary country-pop arrangements and emotionally progressive song structures.
              </p>
              <div>
                <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>The album flows like a full wedding celebration:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
                  <li>the anticipation of seeing the bride walk down the aisle,</li>
                  <li>choosing forever together,</li>
                  <li>celebrating two lives becoming one,</li>
                  <li>dancing through the reception,</li>
                  <li>and ending with timeless vows that feel made for a lifetime.</li>
                </ul>
              </div>
              <p>
                Tracks like “Now and Always,” “Like Home,” “Forever Starts With You,” “Hold This Moment,” “One Lifetime More,” and “The Last Song We’ll Ever Need” lean heavily into upbeat line-dancing country-pop with studio-clean production, infectious choruses, and energetic Nashville-style instrumentation built for wedding parties and country dance floors.
              </p>
              <p>
                The final five tracks reimagine the biggest songs as cinematic Wedding Remixes, transforming them into larger-than-life celebration anthems under the <strong>Wedding Remix Collection</strong>.
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

          {/* Right: Creative Directions */}
          <div>
            <span className="subtitle">Creative Vision</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>PROJECT <span style={{ color: 'var(--accent-gold)' }}>PILLARS</span></h2>
            
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              {creativePillars.map((pillar, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.01)',
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', fontFamily: 'var(--font-playfair)' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {pillar.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.6rem',
                        border: '1px solid rgba(226, 179, 90, 0.3)',
                        color: 'var(--accent-gold)',
                        padding: '0.3rem 0.7rem',
                        fontWeight: '700',
                        borderRadius: '30px',
                        letterSpacing: '0.05em',
                        background: 'rgba(226, 179, 90, 0.02)'
                      }}>
                        {tag.toUpperCase()}
                      </span>
                    ))}
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
              OUR LOVE OUR FOREVER
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
