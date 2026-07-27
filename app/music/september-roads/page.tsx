"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";
import { RYKER_ALBUM_LINKS } from "@/data/streamingLinks";

export default function SeptemberRoadsAlbumPage() {
  const { session, isLoaded } = useRykerSession();
  const isLabel = isLoaded && session && (
    session.tier === 'LABEL' ||
    session.tier === 'ADMIN' ||
    session.tier === 'LIFETIME' ||
    session.rykerTier === 'PREMIUM'
  );

  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string; isLocked?: boolean; isLabelAccess?: boolean } | null>(null);

  const RELEASE_DATE = new Date("2026-09-26T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    setSelectedTrackLyrics({
      title: track.title,
      lyrics: "Lyrics are temporarily unavailable to protect copyright and intellectual property.",
      isLocked: false
    });
  };

  const tracks = [
    { id: "01", title: "September Roads", duration: "3:28", badge: "SINGLE" },
    { id: "02", title: "Friday Night Lights", duration: "3:14", badge: "SINGLE" },
    { id: "03", title: "Wide Open", duration: "3:42", badge: "SINGLE" },
    { id: "04", title: "Harvest Sunset", duration: "3:35", badge: "SINGLE" },
    { id: "05", title: "Cornfield Kisses", duration: "3:08", badge: "SINGLE" },
    { id: "06", title: "Small Town September", duration: "3:51", badge: "SINGLE" },
    { id: "07", title: "Windows Down", duration: "3:19", badge: "SINGLE" },
    { id: "08", title: "Bonfire Nights", duration: "3:30" },
    { id: "09", title: "One Last Summer", duration: "3:45", badge: "SINGLE" },
    { id: "10", title: "County Line", duration: "3:24", badge: "SINGLE" },
    { id: "11", title: "October Skies", duration: "4:02" },
    { id: "12", title: "Home Again", duration: "3:12" },
    { id: "13", title: "Autumn Always Comes", duration: "3:57", badge: "SINGLE" }
  ];

  const singles = [
    {
      title: "September Roads",
      image: "/images/september roads - album v2.jpg",
      tagline: "Lead Single",
      description: "A driving, high-energy country-pop anthem about embarking on a journey through the changing seasons."
    },
    {
      title: "Friday Night Lights",
      image: "/images/september roads - album v2.jpg",
      tagline: "Second Single",
      description: "A nostalgic stadium-sized country rock track capturing the electricity of high school football and young love."
    },
    {
      title: "Wide Open",
      image: "/images/september roads - album v2.jpg",
      tagline: "Third Single",
      description: "A soaring highway anthem celebrating the thrill of the open road and endless possibilities."
    },
    {
      title: "Harvest Sunset",
      image: "/images/september roads - album v2.jpg",
      tagline: "Fourth Single",
      description: "A warm, steel-guitar-laced ballad about finding peace in the simple beauty of a rural autumn evening."
    },
    {
      title: "Cornfield Kisses",
      image: "/images/september roads - album v2.jpg",
      tagline: "Fifth Single",
      description: "An upbeat, playful country love song filled with acoustic hooks and sweet memories."
    },
    {
      title: "Small Town September",
      image: "/images/september roads - album v2.jpg",
      tagline: "Sixth Single",
      description: "A heartfelt storytelling track that captures the changing leaves and warm communities of the heartland."
    },
    {
      title: "Windows Down",
      image: "/images/september roads - album v2.jpg",
      tagline: "Seventh Single",
      description: "A breezy, care-free country track celebrating sunset drives and late-night highway breezes."
    },
    {
      title: "One Last Summer",
      image: "/images/september roads - album v2.jpg",
      tagline: "Eighth Single",
      description: "A wistful acoustic ballad holding onto the final days of warm weather and transient memories."
    },
    {
      title: "County Line",
      image: "/images/september roads - album v2.jpg",
      tagline: "Ninth Single",
      description: "A powerful heartland country track about crossing borders, leaving home, and chasing dreams."
    },
    {
      title: "Autumn Always Comes",
      image: "/images/september roads - album v2.jpg",
      tagline: "Latest Single",
      description: "A cinematic, emotional ballad about the inevitability of change, reflection, and new beginnings."
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
              src="/images/september roads - album v2.jpg" 
              alt="September Roads Cover" 
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
              Official Studio Album
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              SEPTEMBER <span style={{ color: 'var(--accent-gold)' }}>ROADS</span>
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
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>SEPTEMBER 26, 2026</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>PRE-SAVE</strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              'September Roads' is a sunset-drenched heartland country album driven by stories of open roads, county lines, and small-town autumn nights. Blending standard acoustic warmth with classic electric country drive, Ryker Boone crafts a resonant and expansive collection of tales capturing the sweet transition from summer heat to crisp autumn skies.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a 
                href={RYKER_ALBUM_LINKS.septemberRoads?.spotify || "#"}
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
                PRE-SAVE ON SPOTIFY
              </a>
              <a 
                href={RYKER_ALBUM_LINKS.septemberRoads?.appleMusic || "#"}
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
                    border: track.badge ? '1px solid var(--accent-gold)' : '1px solid rgba(226, 179, 90, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    fontSize: '0.65rem',
                    background: track.badge ? 'rgba(226, 179, 90, 0.1)' : 'transparent'
                  }}>
                    {track.id}
                  </div>
                  <span style={{ 
                    color: 'white', 
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
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>RELEASED <span style={{ color: 'var(--accent-gold)' }}>SINGLES</span></h2>
            
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

      <Footer />
    </main>
  );
}
