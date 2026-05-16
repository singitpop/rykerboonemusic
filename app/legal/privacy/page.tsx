'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main style={{ 
      backgroundColor: '#000', 
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
        }}>Privacy Policy</h1>
        
        <section style={{ marginBottom: '3rem' }}>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Last Updated: May 2026</p>
          <p>Your privacy is of the utmost importance to Ryker Boone Music. This policy outlines how we collect, use, and protect your personal information when you visit our official site and storefront.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, and shipping details when you join Club Ryker or make a purchase from our official store. We also collect anonymous usage data to improve your experience.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>2. How We Use Your Data</h2>
          <p>Your data is used to process orders, deliver exclusive content, and keep you updated on the latest releases and tour dates. We never sell your data to third parties.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>3. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. You can manage your preferences through your Club Ryker account or by contacting us directly.</p>
        </section>

        <footer style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <Link href="/" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>← Return to Home</Link>
        </footer>
      </div>
    </main>
  );
}
