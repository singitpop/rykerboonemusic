"use client";

import { MUSIC_STORY_CONNECTIONS } from "@/data/booneChronicles";

export default function MusicStoryConnections() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ 
          color: 'var(--accent-gold)', 
          fontSize: '0.65rem', 
          letterSpacing: '0.35em', 
          fontWeight: '900', 
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.75rem'
        }}>
          Narrative Soundtrack
        </span>
        <h3 style={{ 
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', 
          fontWeight: '900', 
          color: '#f5f0e1', 
          textTransform: 'uppercase', 
          letterSpacing: '-0.02em', 
          margin: 0 
        }}>
          Story &amp; Music Connections
        </h3>
        <p style={{ color: 'rgba(245, 240, 225, 0.65)', fontSize: '0.9rem', maxWidth: '640px', margin: '1rem auto 0', lineHeight: '1.6' }}>
          Albums and individual tracks serve as the soundtrack to the Boone Chronicles, giving musical voice to specific narrative moments, memories, and chapters.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {MUSIC_STORY_CONNECTIONS.map((conn, idx) => (
          <div 
            key={idx}
            style={{
              background: 'rgba(15, 15, 15, 0.9)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(226, 179, 90, 0.2)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ 
                display: 'inline-block',
                background: 'rgba(226, 179, 90, 0.1)', 
                color: 'var(--accent-gold)', 
                border: '1px solid rgba(226, 179, 90, 0.3)',
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px', 
                fontSize: '0.65rem', 
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem'
              }}>
                {conn.connectionType}
              </div>

              <h4 style={{ 
                color: 'white', 
                fontSize: '1.15rem', 
                fontWeight: 'bold', 
                margin: '0 0 0.5rem',
                fontFamily: 'var(--font-playfair)'
              }}>
                {conn.storyElement}
              </h4>

              <p style={{ color: 'rgba(245, 240, 225, 0.6)', fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {conn.storyContext}
              </p>
            </div>

            <div style={{ 
              background: 'rgba(0,0,0,0.5)', 
              padding: '1.25rem', 
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Connected Release
              </span>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                {conn.connectedMusic}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                <span>{conn.album}</span>
                <span>{conn.releaseDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
