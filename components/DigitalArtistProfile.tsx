"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  BOONE_CHRONICLES_STORY_EVENTS, 
  REAL_PROJECT_EVENTS,
  VISUAL_JOURNEY_STEPS 
} from "@/data/booneChronicles";

export default function DigitalArtistProfile() {
  const [timelineMode, setTimelineMode] = useState<'story' | 'realWorld'>('story');

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#0a0a0a',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
      border: '1px solid rgba(255,255,255,0.05)',
      color: '#f5f0e1'
    }}>
      {/* 1. TOP HEADER SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: '600px' }}>
        <div style={{ position: 'relative' }}>
          <Image 
            src="/images/ryker_facing_right.png" 
            alt="Ryker Boone Portrait" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 80%, #0a0a0a 100%)' }}></div>
        </div>
        
        <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="boone-logo-container" style={{ alignItems: 'flex-start', margin: '0 0 2rem' }}>
            <Image 
              src="/images/boone-master-logo.png" 
              alt="Ryker Boone Master Logo" 
              width={300} 
              height={150} 
              style={{ objectFit: 'contain', mixBlendMode: 'screen', marginLeft: '-15px' }}
            />
          </div>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', fontWeight: '900', marginBottom: '2.5rem' }}>
            COUNTRY. AMERICANA. REAL STORIES.
          </div>
          
          {/* SECTION 2: INTRODUCE THE CHARACTER */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              THE STORY
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
              Ryker Boone is a fictional country recording artist and the central character of The Boone Chronicles — an evolving story-world built around modern country music, small-town America, family, love, loss and second chances.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
              Within The Boone Chronicles, Ryker comes from Columbia, Tennessee. His story follows the road from working-class beginnings and small Nashville stages through marriage, fatherhood, devastating loss and eventually the discovery that life can begin again.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              The songs form the soundtrack to that world, with albums, singles, imagery and films revealing different parts of the Boone story.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'rgba(245,240,225,0.6)', fontStyle: 'italic', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem', margin: 0 }}>
              Ryker&apos;s visual world carries a strong modern western identity: black cowboy hats, worn denim, leather jackets, dusty roads, Tennessee landscapes, old trucks, ranch life and golden-hour Americana.
            </p>
          </div>

          {/* SECTION 3: PROFILE INFORMATION */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
            {[
              { label: 'GENRE', val: 'Country / Americana' },
              { label: 'CHARACTER ORIGIN', val: 'Columbia, Tennessee' },
              { label: 'RYKER BOONE PROJECT ESTABLISHED', val: '2024' },
              { label: 'STORY TIMELINE', val: '2010 – Present' },
              { label: 'DEBUT ALBUM', val: 'Boots in the Autumn Dust' },
              { label: 'RECORD LABEL', val: 'SINGITPOP RECORDS' }
            ].map((fact, i) => (
              <div key={i}>
                <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em' }}>{fact.label}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'white' }}>{fact.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. CHRONOLOGICAL VISUAL STRIP (SECTION 10 PREVIEW) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(8, 1fr)', 
        gap: '1px', 
        background: 'rgba(255,255,255,0.05)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {VISUAL_JOURNEY_STEPS.map((step, i) => (
          <div key={i} style={{ aspectRatio: '1', position: 'relative', overflow: 'hidden' }}>
            <Image src={step.image} alt={step.title} fill style={{ objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              padding: '0.4rem 0.25rem',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.55rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.05em', display: 'block' }}>
                {step.step} {step.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. INSIGHTS GRID (SECTION 11: MUSICAL STYLE & THEMES) */}
      <div style={{ padding: '6rem 4rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem' }}>
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              THE ROOTS &amp; BACKSTORY
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
              Growing up in Columbia, Tennessee, Ryker&apos;s songs reflect blue-collar pride, family loyalty, and the classic struggle of chasing big-city dreams while keeping one foot firmly planted in the soil. His early years playing small bars, weathering profound loss, and raising his son Graham gave his music the grit and vulnerability that defines him today.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              MUSICAL STYLE &amp; THEMES
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem' }}>
              Ryker Boone&apos;s catalogue blends modern country-pop production with acoustic rhythms, electric guitar, bass, live-style drums and carefully used traditional country textures including fiddle, steel guitar, banjo and mandolin.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
              The songs move between summer energy, relationships, family, heartbreak, small-town life, open roads and reflective storytelling — creating the musical soundtrack to the Boone Chronicles.
            </p>
          </div>
        </div>

        <div>
          <div style={{
            background: 'rgba(226, 179, 90, 0.03)',
            border: '1px solid rgba(226, 179, 90, 0.1)',
            padding: '2.5rem',
            borderRadius: '16px'
          }}>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              THE SIGNATURE SOUND
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
              At the center of Ryker Boone&apos;s sound is a carefully crafted sonic identity:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                "Modern country-pop production dynamics",
                "Emotionally grounded storytelling",
                "Groove-driven acoustic rhythm guitar",
                "Punchy but controlled live drums",
                "Rich baritone vocals with authentic warmth",
                "Twin fiddle, steel guitar, banjo & mandolin textures",
                "Summer anthems balanced with fireside ballads"
              ].map((item, idx) => (
                <li key={idx} style={{ 
                  fontSize: '0.85rem', 
                  color: 'rgba(255,255,255,0.8)', 
                  marginBottom: '0.75rem', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.75rem' 
                }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', lineHeight: '1', marginTop: '-2px' }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. DUAL TIMELINE ARCHIVE (SECTIONS 7 & 8) */}
      <div style={{ 
        padding: '6rem 4rem', 
        background: 'rgba(255,255,255,0.02)', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
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
            Two Separate Timelines
          </span>
          <h3 style={{ 
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', 
            color: 'white', 
            fontWeight: '900',
            letterSpacing: '-0.02em', 
            textTransform: 'uppercase', 
            margin: '0 0 1rem' 
          }}>
            {timelineMode === 'story' ? 'THE BOONE CHRONICLES STORY TIMELINE' : 'BEHIND THE MUSIC'}
          </h3>
          <p style={{ 
            color: 'rgba(245, 240, 225, 0.65)', 
            fontSize: '0.9rem', 
            maxWidth: '720px', 
            margin: '0 auto 2.5rem',
            lineHeight: '1.6' 
          }}>
            {timelineMode === 'story' 
              ? "Events below form part of the fictional Boone Chronicles narrative." 
              : "THE RYKER BOONE RECORDING PROJECT — Beyond the fictional Boone Chronicles is the real creative project behind the music. Ryker Boone was established as a recording-artist project in 2024, combining original country music, visual storytelling, artwork, lyric films and an expanding connected catalogue."}
          </p>

          {/* Interactive Navigation Toggle Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(0,0,0,0.6)',
            padding: '0.35rem',
            borderRadius: '50px',
            border: '1px solid rgba(226, 179, 90, 0.25)',
            gap: '0.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setTimelineMode('story')}
              style={{
                background: timelineMode === 'story' ? 'var(--accent-gold)' : 'transparent',
                color: timelineMode === 'story' ? '#0a0a0a' : 'rgba(255,255,255,0.7)',
                border: 'none',
                padding: '0.75rem 1.75rem',
                borderRadius: '40px',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              1. The Boone Chronicles (Story Timeline)
            </button>
            <button
              onClick={() => setTimelineMode('realWorld')}
              style={{
                background: timelineMode === 'realWorld' ? 'var(--accent-gold)' : 'transparent',
                color: timelineMode === 'realWorld' ? '#0a0a0a' : 'rgba(255,255,255,0.7)',
                border: 'none',
                padding: '0.75rem 1.75rem',
                borderRadius: '40px',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              2. Real Project History (EST. 2024)
            </button>
          </div>
        </div>

        {/* Informational Sub-Banner based on Active Mode */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto 3rem',
          background: timelineMode === 'story' 
            ? 'linear-gradient(90deg, rgba(226, 179, 90, 0.08) 0%, rgba(10,10,10,0.6) 100%)' 
            : 'linear-gradient(90deg, rgba(74, 144, 226, 0.08) 0%, rgba(10,10,10,0.6) 100%)',
          border: `1px solid ${timelineMode === 'story' ? 'rgba(226, 179, 90, 0.2)' : 'rgba(74, 144, 226, 0.3)'}`,
          borderRadius: '12px',
          padding: '1.25rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span style={{ 
              display: 'inline-block',
              fontSize: '0.65rem', 
              fontWeight: '900', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase', 
              color: timelineMode === 'story' ? 'var(--accent-gold)' : '#70b5ff',
              marginBottom: '0.25rem'
            }}>
              {timelineMode === 'story' 
                ? '★ Fictional Story-World & Character Arc (2010 – 2027)' 
                : '✓ Real-World Project History & Verified Provenance (EST. 2024 – Present)'}
            </span>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>
              {timelineMode === 'story' 
                ? "Events below form part of the fictional Boone Chronicles narrative — from Columbia acoustic sets to ranch life, grief, fatherhood, and his 2027 wedding with Kate."
                : "Milestones are categorized by status: VERIFIED (completed release/production events), CURRENT (active release information), and PLANNED (future project pipeline confirmed by creator, not completed achievements)."}
            </p>
          </div>
          <span style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '0.4rem 0.9rem',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: 'white',
            whiteSpace: 'nowrap'
          }}>
            {timelineMode === 'story' ? `${BOONE_CHRONICLES_STORY_EVENTS.length} Story Milestones` : `${REAL_PROJECT_EVENTS.length} Project Milestones`}
          </span>
        </div>
        
        {/* Timeline Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {(timelineMode === 'story' ? BOONE_CHRONICLES_STORY_EVENTS : REAL_PROJECT_EVENTS).map((item, i) => {
            const isPlanned = item.status === 'PLANNED';
            const isCurrent = item.status === 'CURRENT';
            const isVerified = item.status === 'VERIFIED';
            
            const cardBorder = timelineMode === 'story'
              ? '1px solid rgba(226, 179, 90, 0.15)'
              : isCurrent
                ? '1px solid rgba(226, 179, 90, 0.4)'
                : isPlanned
                  ? '1px dashed rgba(160, 160, 220, 0.3)'
                  : '1px solid rgba(74, 144, 226, 0.25)';

            const badgeBg = isPlanned
              ? 'rgba(160, 160, 220, 0.1)'
              : isCurrent
                ? 'rgba(226, 179, 90, 0.15)'
                : isVerified
                  ? 'rgba(74, 226, 150, 0.12)'
                  : 'rgba(226, 179, 90, 0.1)';

            const badgeColor = isPlanned
              ? '#b0b5ff'
              : isCurrent
                ? 'var(--accent-gold)'
                : isVerified
                  ? '#6ee7b7'
                  : 'var(--accent-gold)';

            return (
              <div key={i} style={{ 
                padding: '1.75rem', 
                border: cardBorder, 
                borderRadius: '12px',
                background: isPlanned ? 'rgba(12, 12, 18, 0.5)' : 'rgba(0,0,0,0.4)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ 
                      color: timelineMode === 'story' ? 'var(--accent-gold)' : isPlanned ? '#b0b5ff' : '#70b5ff', 
                      fontWeight: '900', 
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em' 
                    }}>
                      {item.year}
                    </span>
                    <span style={{ 
                      fontSize: '0.62rem', 
                      color: badgeColor,
                      background: badgeBg,
                      border: `1px solid ${badgeColor}33`,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '10px',
                      textTransform: 'uppercase', 
                      fontWeight: 'bold',
                      letterSpacing: '0.08em' 
                    }}>
                      {item.status ? `${item.status}` : (item.badge || 'Event')}
                    </span>
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                {item.source && (
                  <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                    Source: {item.source}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. FOOTER QUOTE & FAMILY */}
      <div style={{ 
        padding: '6rem 4rem', 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', fontSize: '1.2rem' }}>
          &ldquo;I write songs about the people like me and the places that raised me. If it&apos;s real, it&apos;s worth singing.&rdquo;
          <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.7rem', textTransform: 'uppercase', fontStyle: 'normal', letterSpacing: '0.2em', color: 'var(--accent-gold)' }}>— Ryker Boone</span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '2px solid var(--accent-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <Image src="/images/consistent/family_campfire_jam.png" alt="Ryker's Family" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>HIS FAMILY</h4>
            <p style={{ fontSize: '0.75rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>
              In loving memory of his late wife, Joyce, Graham&apos;s mother. Today, Ryker and his fiancée Kate are raising Graham together with their miniature dachshund Penny on their Tennessee ranch, getting married in January 2027.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h4 style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>CONNECT</h4>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', opacity: 0.7 }}>
             {['FB', 'IG', 'X', 'YT', 'TK'].map(social => (
                <div key={social} style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' }}>{social}</div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
