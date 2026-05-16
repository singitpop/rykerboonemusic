'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
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
        }}>Terms of Service</h1>
        
        <section style={{ marginBottom: '3rem' }}>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Last Updated: May 2026</p>
          <p>Welcome to the official digital home of Ryker Boone. By accessing this website, you agree to comply with the following terms and conditions.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>1. Intellectual Property</h2>
          <p>All content, including music, images, and the official Ryker Boone logo, is the exclusive property of Ryker Boone Music. Unauthorized reproduction or distribution is strictly prohibited.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>2. Store & Merchandising</h2>
          <p>All purchases made through the official storefront are subject to the shipping and returns policies of our fulfillment partners. We strive for excellence in every order.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>3. Club Ryker</h2>
          <p>Membership in Club Ryker grants access to exclusive content. Abuse of these privileges or sharing of gated content may lead to account termination.</p>
        </section>

        <footer style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <Link href="/" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>← Return to Home</Link>
        </footer>
      </div>
    </main>
  );
}
