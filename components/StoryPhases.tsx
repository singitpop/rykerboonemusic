"use client";

import { STORY_PHASES } from "@/data/booneChronicles";

export default function StoryPhases() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ 
          color: 'var(--accent-gold)', 
          fontSize: '0.65rem', 
          letterSpacing: '0.35em', 
          fontWeight: '900', 
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.75rem'
        }}>
          Narrative Structure
        </span>
        <h3 style={{ 
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', 
          fontWeight: '900', 
          color: '#f5f0e1', 
          textTransform: 'uppercase', 
          letterSpacing: '-0.02em', 
          margin: 0 
        }}>
          The Four Narrative Phases
        </h3>
        <p style={{ color: 'rgba(245, 240, 225, 0.65)', fontSize: '0.9rem', maxWidth: '640px', margin: '1rem auto 0', lineHeight: '1.6' }}>
          The Boone Chronicles unfolds in four visually and emotionally distinct story-world chapters, tracing Ryker&apos;s journey through love, heartbreaking loss, and quiet redemption.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {STORY_PHASES.map((phase) => (
          <div 
            key={phase.id}
            style={{
              background: 'linear-gradient(180deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%)',
              borderRadius: '16px',
              padding: '2.25rem 2rem',
              border: '1px solid rgba(226, 179, 90, 0.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ 
                  color: 'var(--accent-gold)', 
                  fontWeight: '900', 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.2em' 
                }}>
                  {phase.roman}
                </span>
                <span style={{ 
                  background: 'rgba(226, 179, 90, 0.1)', 
                  color: 'var(--accent-gold)', 
                  border: '1px solid rgba(226, 179, 90, 0.3)',
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '20px', 
                  fontSize: '0.7rem', 
                  fontWeight: 'bold' 
                }}>
                  {phase.period}
                </span>
              </div>

              <h4 style={{ 
                fontSize: '1.35rem', 
                fontWeight: '900', 
                color: 'white', 
                textTransform: 'uppercase', 
                margin: '0 0 1rem',
                letterSpacing: '0.02em',
                fontFamily: 'var(--font-playfair)'
              }}>
                {phase.title}
              </h4>

              <p style={{ color: 'rgba(245, 240, 225, 0.75)', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                {phase.summary}
              </p>

              {/* Emotional Centre if present */}
              {phase.emotionalCentre && (
                <div style={{ 
                  background: 'rgba(0,0,0,0.4)', 
                  borderLeft: '2px solid var(--accent-gold)', 
                  padding: '0.75rem 1rem', 
                  marginBottom: '1.5rem',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <span style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Emotional Center
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', textTransform: 'capitalize' }}>
                    {phase.emotionalCentre}
                  </span>
                </div>
              )}

              {/* Story Highlights */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Key Story-World Milestones
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {phase.events.slice(0, 4).map((evt, idx) => (
                    <li key={idx} style={{ 
                      fontSize: '0.78rem', 
                      color: 'rgba(255,255,255,0.7)', 
                      marginBottom: '0.5rem', 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.6rem' 
                    }}>
                      <span style={{ color: 'var(--accent-gold)', lineHeight: '1.2' }}>•</span>
                      <span>{evt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Atmosphere */}
            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.06)', 
              paddingTop: '1.25rem', 
              marginTop: 'auto' 
            }}>
              <span style={{ 
                display: 'block', 
                color: 'var(--accent-gold)', 
                fontSize: '0.62rem', 
                fontWeight: '900', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                marginBottom: '0.35rem' 
              }}>
                Visual Atmosphere
              </span>
              <p style={{ 
                margin: 0, 
                fontSize: '0.75rem', 
                color: 'rgba(245, 240, 225, 0.55)', 
                fontStyle: 'italic', 
                lineHeight: '1.5' 
              }}>
                {phase.visualAtmosphere}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
