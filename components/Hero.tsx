"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section style={{
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
      <div style={{
        padding: '0 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #151515 100%)',
        position: 'relative',
        zIndex: 2
      }}>
        <div 
          className={mounted ? "animate-fade-in" : ""} 
          style={{ 
            opacity: mounted ? 1 : 0, 
            transition: 'opacity 1s ease',
            width: '100%'
          }}
        >
          <span className="subtitle" style={{ letterSpacing: '0.6em', fontSize: '0.7rem' }}>Modern Country Artist</span>
          <h1 className="section-title" style={{ 
            fontSize: 'clamp(5rem, 12vw, 10rem)', 
            color: 'var(--text-primary)',
            margin: '2rem 0',
            lineHeight: '0.85'
          }}>
            RYKER <br />
            <span style={{ color: 'var(--accent-gold)' }}>BOONE</span>
          </h1>
          
          <p className="tagline" style={{ 
            marginTop: '2rem', 
            fontSize: '1.8rem',
            opacity: 0.8 
          }}>
            Real Songs. Real Stories. Real Life.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            marginTop: '4rem'
          }}>
            <button style={{
              background: 'var(--accent-gold)',
              color: 'black',
              padding: '1.2rem 3rem',
              fontWeight: '900',
              letterSpacing: '0.2em',
              fontSize: '0.8rem',
              boxShadow: '0 20px 40px rgba(226, 179, 90, 0.15)',
              transition: 'var(--transition-smooth)'
            }}>
              LATEST RELEASES
            </button>
          </div>
        </div>

      </div>

      {/* Right Image Column */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/ryker-hero-v2.png"
          alt="Ryker Boone Portrait"
          fill
          priority
          style={{ 
            objectFit: 'cover',
            filter: 'contrast(1.05) brightness(1.15)',
            zIndex: 1
          }}
        />
        {/* Subtle Gradient to blend with left column */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 20%)',
          zIndex: 2
        }}></div>
      </div>
    </section>
  );
}
