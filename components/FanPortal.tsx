"use client";

import Image from "next/image";

export default function FanPortal() {
  return (
    <section id="portal" style={{ 
      padding: '10rem 8%', 
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Abstract Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(226, 179, 90, 0.05) 0%, transparent 70%)',
        zIndex: 1
      }}></div>

      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center'
      }}>
        <div>
          <span className="subtitle">Inner Circle</span>
          <h2 className="section-title">JOIN <br /> <span style={{ color: 'var(--accent-gold)' }}>CLUB RYKER</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Get exclusive early access to new music, behind-the-scenes content from the Nashville sessions, and first pick of limited edition merchandise. The journey is better together.
          </p>
          
          <div style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '1rem 1.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none',
                  borderRadius: '4px'
                }}
              />
              <button style={{
                background: 'var(--accent-gold)',
                color: 'black',
                padding: '0 2.5rem',
                fontWeight: '900',
                letterSpacing: '0.1em',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                borderRadius: '4px'
              }}>
                JOIN NOW
              </button>
            </div>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
              By joining, you agree to receive official updates and marketing from Ryker Boone.
            </p>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            aspectRatio: '1',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <Image 
              src="/images/ryker-profile-hero-final.jpg" 
              alt="Ryker Boone Fan Club" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Floating Card */}
          <div style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '-2rem',
            background: 'rgba(15,15,15,0.95)',
            backdropFilter: 'blur(20px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(226, 179, 90, 0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            zIndex: 10
          }}>
            <div style={{ color: 'var(--accent-gold)', fontSize: '0.6rem', fontWeight: '900', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>VIP ACCESS</div>
            <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'var(--font-playfair)' }}>Early Listen: September Turns Gold</div>
          </div>
        </div>
      </div>
    </section>
  );
}
