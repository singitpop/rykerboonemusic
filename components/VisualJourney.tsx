"use client";

import Image from "next/image";
import { VISUAL_JOURNEY_STEPS } from "@/data/booneChronicles";

export default function VisualJourney() {
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
          Chronological Visual Canon
        </span>
        <h3 style={{ 
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', 
          fontWeight: '900', 
          color: '#f5f0e1', 
          textTransform: 'uppercase', 
          letterSpacing: '-0.02em', 
          margin: 0 
        }}>
          Visual Journey Across the Eras
        </h3>
        <p style={{ color: 'rgba(245, 240, 225, 0.65)', fontSize: '0.9rem', maxWidth: '640px', margin: '1rem auto 0', lineHeight: '1.6' }}>
          Follow the visual arc of The Boone Chronicles — from early Columbia roots to quiet cabin porch years, fatherhood through the valley, the arrival of Penny, and the road ahead to 2027.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '2rem'
      }}>
        {VISUAL_JOURNEY_STEPS.map((step) => (
          <div 
            key={step.step}
            style={{
              background: 'rgba(18, 18, 18, 0.8)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(226, 179, 90, 0.15)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
          >
            {/* Image Container */}
            <div style={{ 
              position: 'relative', 
              aspectRatio: '1', 
              width: '100%', 
              background: '#0d0d0d',
              overflow: 'hidden'
            }}>
              <Image 
                src={step.image} 
                alt={step.title} 
                fill 
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(5, 5, 5, 0.85)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(226, 179, 90, 0.3)',
                borderRadius: '30px',
                padding: '0.35rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                zIndex: 2
              }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.1em' }}>
                  {step.step}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {step.tag}
                </span>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.75)',
                borderRadius: '4px',
                padding: '0.2rem 0.6rem',
                fontSize: '0.65rem',
                color: 'var(--accent-gold)',
                fontWeight: 'bold',
                letterSpacing: '0.05em'
              }}>
                {step.era}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ 
                  fontSize: '1.05rem', 
                  fontWeight: '800', 
                  textTransform: 'uppercase', 
                  color: 'white', 
                  margin: '0 0 0.35rem',
                  letterSpacing: '0.02em'
                }}>
                  {step.title}
                </h4>
                <span style={{ 
                  display: 'block', 
                  fontSize: '0.7rem', 
                  color: 'var(--accent-gold)', 
                  fontWeight: 'bold', 
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em'
                }}>
                  {step.subtitle}
                </span>
                <p style={{ color: 'rgba(245, 240, 225, 0.7)', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
