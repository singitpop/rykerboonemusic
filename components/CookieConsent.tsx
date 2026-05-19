"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay presentation slightly for premium entrance feel
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      id="cookie-consent-popup"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        maxWidth: '420px',
        width: 'calc(100% - 4rem)',
        background: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(226, 179, 90, 0.25)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(226, 179, 90, 0.05)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        animation: 'slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        transform: 'translateY(50px)',
        opacity: 0
      }}
    >
      {/* Styles Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-up-fade {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}} />

      <div>
        <h4 style={{
          color: 'var(--accent-gold)',
          fontFamily: 'var(--font-playfair)',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '0.75rem',
          letterSpacing: '0.05em'
        }}>
          Cookie Preferences
        </h4>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.85rem',
          lineHeight: '1.6'
        }}>
          We use cookies to personalize your experience, analyze site usage, and deliver exclusive merchandise and tour announcements. See our{" "}
          <Link href="/legal/cookies" style={{ 
            color: 'var(--accent-gold)', 
            textDecoration: 'underline',
            transition: 'color 0.3s ease'
          }}>
            Cookie Policy
          </Link> for details.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        width: '100%'
      }}>
        <button 
          onClick={handleDecline}
          style={{
            flex: 1,
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'white',
            padding: '0.8rem 0',
            fontSize: '0.75rem',
            fontWeight: '800',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'white';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          DECLINE
        </button>
        <button 
          onClick={handleAccept}
          style={{
            flex: 1,
            background: 'var(--accent-gold)',
            border: '1px solid var(--accent-gold)',
            color: 'black',
            padding: '0.8rem 0',
            fontSize: '0.75rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '4px',
            boxShadow: '0 8px 16px rgba(226, 179, 90, 0.15)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f5c66b';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(226, 179, 90, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-gold)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(226, 179, 90, 0.15)';
          }}
        >
          ACCEPT ALL
        </button>
      </div>
    </div>
  );
}
