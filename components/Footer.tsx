"use client";

import Link from "next/link";

import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ 
      padding: '8rem 8% 4rem', 
      background: '#050505', 
      borderTop: '1px solid rgba(226, 179, 90, 0.05)' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
        gap: '4rem',
        marginBottom: '6rem'
      }}>
        <div>
          <div className="boone-logo-container" style={{ alignItems: 'flex-start', marginBottom: '2rem' }}>
            <Image 
              src="/images/boone-master-logo.png" 
              alt="Ryker Boone Logo" 
              width={200} 
              height={100} 
              style={{ 
                objectFit: 'contain',
                mixBlendMode: 'screen',
                marginLeft: '-10px' 
              }}
            />
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem' }}>
            Real Songs. Real Stories. <br />
            Forged in the heart of Nashville.
          </p>
        </div>

        <div>
          <h5 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Navigation</h5>
          <ul style={{ display: 'grid', gap: '1rem', fontSize: '0.9rem' }}>
            <li><Link href="#music" style={{ color: 'var(--text-secondary)' }}>Music</Link></li>
            <li><Link href="#story" style={{ color: 'var(--text-secondary)' }}>Our Story</Link></li>
            <li><Link href="#shop" style={{ color: 'var(--text-secondary)' }}>Shop</Link></li>
            <li><Link href="/about" style={{ color: 'var(--text-secondary)' }}>Artist Library</Link></li>
          </ul>
        </div>

        <div>
          <h5 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Social</h5>
          <ul style={{ display: 'grid', gap: '1rem', fontSize: '0.9rem' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Instagram</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }}>YouTube</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Spotify</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Apple Music</a></li>
          </ul>
        </div>

        <div>
          <h5 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Newsletter</h5>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Join the fan club for early access to exclusive releases and vinyl drops.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input type="email" placeholder="Email" style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(226, 179, 90, 0.2)',
              padding: '0.8rem 1.2rem',
              color: 'white',
              fontSize: '0.8rem',
              width: '100%'
            }} />
            <button style={{ background: 'var(--accent-gold)', color: 'black', padding: '0 1.5rem', fontWeight: '900' }}>→</button>
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingTop: '3rem', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        color: 'var(--text-secondary)',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <span>© 2026 RYKER BOONE MUSIC. ALL RIGHTS RESERVED.</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/legal/privacy">PRIVACY POLICY</Link>
          <Link href="/legal/cookies">COOKIE POLICY</Link>
          <Link href="/legal/terms">TERMS OF SERVICE</Link>
        </div>
        <span>DESIGNED BY SINGIT POP</span>
      </div>
    </footer>
  );
}
