"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRykerSession } from "@/components/AuthProvider";

const PLATFORM_URL = process.env.NEXT_PUBLIC_APP_URL || "https://club.singitpop.com";

export default function Navbar() {
  const { session, isLoaded } = useRykerSession();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [currentOrigin, setCurrentOrigin] = useState("http://localhost:3001");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeActive = pathname === "/";
  const isMusicActive = pathname === "/music" || pathname.startsWith("/music/");
  const isStoryActive = pathname === "/about";

  return (
    <nav className="nav-container" style={{
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
        <Link href="/" className="boone-logo-container">
          <Image 
            src="/images/boone-master-logo.png" 
            alt="Ryker Boone Logo" 
            width={160} 
            height={80} 
            style={{ 
              objectFit: 'contain',
              mixBlendMode: 'screen'
            }}
          />
        </Link>
        <div className="nav-links" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <Link 
            href="/" 
            className="nav-link" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: isHomeActive ? 'var(--accent-gold)' : 'var(--text-secondary)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </Link>
          <Link 
            href="/music" 
            className="nav-link"
            style={{ color: isMusicActive ? 'var(--accent-gold)' : 'var(--text-secondary)' }}
          >
            Music
          </Link>
          <Link 
            href="/about" 
            className="nav-link"
            style={{ color: isStoryActive ? 'var(--accent-gold)' : 'var(--text-secondary)' }}
          >
            Our Story
          </Link>
          <Link href="/store" className="nav-link">Store</Link>
          {isLoaded && session ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
                Hi, {session.firstName || 'Member'}
              </span>
              <form action="/api/auth/signout" method="POST">
                <input type="hidden" name="redirectUrl" value="/" />
                <button 
                  type="submit"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '0.7rem 1.5rem',
                    fontSize: '0.65rem',
                    fontWeight: '900',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                >
                  Sign Out
                </button>
              </form>
              <Link href="/club">
                <button style={{
                  background: 'var(--accent-gold)',
                  color: 'black',
                  padding: '0.7rem 1.5rem',
                  border: 'none',
                  fontSize: '0.65rem',
                  fontWeight: '900',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}>
                  Lounge
                </button>
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a href={`${PLATFORM_URL}/api/auth-bridge?return_url=${typeof window !== 'undefined' ? encodeURIComponent(`${window.location.origin}/api/auth/callback`) : ''}`}>
                <button style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.7rem 1.5rem',
                  fontSize: '0.65rem',
                  fontWeight: '900',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}>
                  Sign In
                </button>
              </a>
              <Link href="/club">
                <button style={{
                  background: 'var(--accent-gold)',
                  color: 'black',
                  padding: '0.7rem 1.5rem',
                  border: 'none',
                  fontSize: '0.65rem',
                  fontWeight: '900',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}>
                  Join Club Ryker
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="nav-spacer">{/* Empty column to keep links away from the face */}</div>
    </nav>
  );
}
