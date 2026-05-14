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
      padding: scrolled ? '1.5rem 4rem' : '2.5rem 4rem',
      background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: scrolled ? '1px solid rgba(226, 179, 90, 0.1)' : '1px solid transparent'
    }}>
      <div style={{ 
        fontFamily: 'var(--font-playfair)', 
        fontSize: '1.5rem', 
        fontWeight: '900',
        letterSpacing: '0.1em',
        color: 'var(--text-primary)'
      }}>
        RYKER <span style={{ color: 'var(--accent-gold)' }}>BOONE</span>
      </div>

      <div style={{ display: 'flex', gap: '3.5rem', alignItems: 'center' }}>
        <Link href="#music" className="nav-link">Music</Link>
        <Link href="/about" className="nav-link">Our Story</Link>
        <Link href="#shop" className="nav-link">Store</Link>
        <button style={{
          background: 'var(--accent-gold)',
          color: 'black',
          padding: '0.8rem 1.8rem',
          fontSize: '0.7rem',
          fontWeight: '900',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          transition: 'var(--transition-smooth)'
        }}>
          Join Club Ryker
        </button>
      </div>
    </nav>
  );
}
