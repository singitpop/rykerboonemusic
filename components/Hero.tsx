"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {/* Right Image Column */}
      <div className="hero-right" style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/ryker_looking_left.png"
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
