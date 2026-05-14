"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '1rem 4rem' : '2rem 4rem',
      background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'center',
      borderBottom: scrolled ? '1px solid rgba(226, 179, 90, 0.1)' : '1px solid transparent'
    }}>
      <div style={{ 
        fontFamily: 'var(--font-playfair)', 
        fontSize: '1.5rem', 
        fontWeight: '900',
        letterSpacing: '0.1em',
        color: 'var(--text-primary)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <div>
          RYKER <span style={{ color: 'var(--accent-gold)' }}>BOONE</span>
        </div>

        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <Link href="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </Link>
          <Link href="/music" className="nav-link">Music</Link>
          <Link href="/about" className="nav-link">Our Story</Link>
          <Link href="/store" className="nav-link">Store</Link>
          <Link href="/club">
            <button style={{
              background: 'var(--accent-gold)',
              color: 'black',
              padding: '0.7rem 1.5rem',
              fontSize: '0.65rem',
              fontWeight: '900',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'var(--transition-smooth)'
            }}>
              Join Club Ryker
            </button>
          </Link>
        </div>
      </div>
      <div>{/* Empty column to keep links away from the face */}</div>
    </nav>
  );
}
