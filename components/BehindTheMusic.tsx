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
            aspectRatio: '1/1', 
            borderRadius: '12px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Image 
              src="/images/boots-facebook-ad.png" 
              alt="Boots in the Autumn Dust Promo" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
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
                  borderLeft: track.badge ? '3px solid var(--accent-gold)' : '3px solid transparent',
                  background: activeTrack === track.id 
                    ? 'rgba(226, 179, 90, 0.08)' 
                    : track.badge 
                      ? 'rgba(226, 179, 90, 0.03)' 
                      : 'transparent',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: track.badge ? '1px solid var(--accent-gold)' : '1px solid rgba(226, 179, 90, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontSize: '0.6rem',
                  background: track.badge ? 'rgba(226, 179, 90, 0.1)' : 'transparent'
                }}>
                  {activeTrack === track.id ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : track.id}
                </div>
                <span style={{ 
                  color: activeTrack === track.id ? 'var(--accent-gold)' : 'white', 
                  fontWeight: track.badge ? '700' : '500', 
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
