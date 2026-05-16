'use client';

import React from 'react';
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <main style={{ 
      backgroundColor: '#00', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '8rem 2rem',
      fontFamily: 'var(--font-sans)',
      lineHeight: '1.8'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          color: 'var(--accent-gold)', 
          marginBottom: '2rem',
          letterSpacing: '0.1em'
        }}>Cookie Policy</h1>
        
        <section style={{ marginBottom: '3rem' }}>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Last Updated: May 2026</p>
          <p>Ryker Boone Music uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By using our site, you consent to our use of cookies.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>What are Cookies?</h2>
          <p>Cookies are small text files stored on your device that help websites remember your preferences and provide a smoother experience.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Types of Cookies We Use</h2>
          <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem' }}>
            <li><strong>Essential Cookies:</strong> Necessary for the site to function, including security and storefront features.</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with the site so we can improve the layout and speed.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure the effectiveness of our campaigns.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Managing Cookies</h2>
          <p>You can adjust your cookie settings through your browser at any time. Please note that disabling essential cookies may affect the functionality of the storefront.</p>
        </section>

        <footer style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <Link href="/" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>← Return to Home</Link>
        </footer>
      </div>
    </main>
  );
}
