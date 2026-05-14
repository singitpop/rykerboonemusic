"use client";

import Image from "next/image";

export default function QuadMontagePoster() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '24px', 
      overflow: 'hidden', 
      boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
      border: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      background: '#0a0a0a'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gridTemplateRows: '1fr 1fr', 
        gap: '2px',
        aspectRatio: '16/9'
      }}>
        <div style={{ position: 'relative' }}>
          <Image src="/images/montage-1.jpg" alt="Autumn Lights" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Image src="/images/montage-2.jpg" alt="Studio Session" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Image src="/images/montage-3.jpg" alt="Stage Performance" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Image src="/images/montage-4.jpg" alt="Campfire Sessions" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
      
      {/* Editorial Overlay */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        padding: '3rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}>
        <div>
          <h3 style={{ 
            fontSize: '2.5rem', 
            fontFamily: 'var(--font-playfair)', 
            fontWeight: '900', 
            margin: 0, 
            color: 'white',
            textTransform: 'uppercase'
          }}>
            THE NASHVILLE <br /> <span style={{ color: 'var(--accent-gold)' }}>CHRONICLE</span>
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
            Official Press Archive — 2026
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            border: '1px solid var(--accent-gold)', 
            color: 'var(--accent-gold)',
            fontSize: '0.6rem',
            fontWeight: 'bold',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            borderRadius: '100px'
          }}>
            AUTHENTICATED
          </span>
        </div>
      </div>
    </div>
  );
}
