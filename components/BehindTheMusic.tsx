"use client";

import Image from "next/image";
import { useState } from "react";

export default function BehindTheMusic() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  const tracks = [
    { id: "01", title: "Honky Tonk Sundown", badge: "NEW SINGLE" },
    { id: "02", title: "August Heatwave" },
    { id: "03", title: "Barefoot on the Backroad" },
    { id: "04", title: "Neon Barn Nights" },
    { id: "05", title: "Sweet Tea and Blue Jeans" },
    { id: "06", title: "Dust Kicking Rhythm", badge: "NEW SINGLE" },
    { id: "07", title: "Sunburnt Memories", badge: "NEW SINGLE" },
    { id: "08", title: "Tailgate Turn Up" },
    { id: "09", title: "Riverbank Two Step" },
    { id: "10", title: "Fireflies and Front Porches" },
    { id: "11", title: "Whiskey Weather" },
    { id: "12", title: "Last Dance in the Dirt" }
  ];

  return (
    <section id="music-preview" style={{ padding: '10rem 8%', background: '#050505' }}>
      <div className="split-layout">
        <div style={{ order: 2 }}>
          <div className="reveal-img" style={{ 
            aspectRatio: '1', 
            borderRadius: '12px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Image 
              src="/images/boots-promo-full.jpg" 
              alt="Boots in the Autumn Dust Full Promo" 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '3rem'
            }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.3em', marginBottom: '1rem' }}>OFFICIAL RELEASE</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', fontFamily: 'var(--font-playfair)' }}>Boots in the Autumn Dust</h3>
            </div>
          </div>
        </div>

        <div style={{ order: 1 }}>
          <span className="subtitle">The Tracklist</span>
          <h2 className="section-title">THE SOUND OF <br /> <span style={{ color: 'var(--accent-gold)' }}>AUTUMN DUST</span></h2>
          
          <div style={{ 
            marginTop: '3rem', 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '0.5rem'
          }}>
            {tracks.map((track) => (
              <div 
                key={track.id} 
                onMouseEnter={() => setActiveTrack(track.id)}
                onMouseLeave={() => setActiveTrack(null)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem', 
                  padding: '1rem 1.5rem', 
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                  background: activeTrack === track.id ? 'rgba(226, 179, 90, 0.05)' : 'transparent',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(226, 179, 90, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontSize: '0.6rem'
                }}>
                  {activeTrack === track.id ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : track.id}
                </div>
                <span style={{ color: activeTrack === track.id ? 'var(--accent-gold)' : 'white', fontWeight: '500', transition: 'color 0.3s ease' }}>
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
                    marginLeft: 'auto',
                    letterSpacing: '0.05em'
                  }}>
                    {track.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem' }}>
            <button style={{
              background: 'var(--accent-gold)',
              color: 'black',
              padding: '1rem 2.5rem',
              fontSize: '0.75rem',
              fontWeight: '900',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              LISTEN ON SPOTIFY
            </button>
            <button style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '1rem 2.5rem',
              fontSize: '0.75rem',
              fontWeight: '900',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              APPLE MUSIC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
