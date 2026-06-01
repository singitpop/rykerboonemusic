"use client";

import Image from "next/image";

export default function DigitalArtistProfile() {
  const highlights = [
    { year: '2010', event: 'Begins performing acoustic sets in local bars across Columbia, Tennessee.' },
    { year: '2012', event: 'Moves to Nashville to pursue songwriting full-time.' },
    { year: '2013', event: 'Works in the steel industry to support his young family.' },
    { year: '2014', event: 'Starts writing again with attention to his new songs.' },
    { year: '2016', event: 'First Nashville gig; noticed by future wife, Joyce.' },
    { year: '2018', event: 'Ryker and Joyce Get Married.' },
    { year: '2019', event: 'Graham is born; touring increases with family support.' },
    { year: '2024', event: 'Finishes debut album and gains regional attention.' },
    { year: '2025', event: 'Invited to Autumn Lights Festival; signs with Indie Label.' },
    { year: '2026', event: 'Releases "Boots in the Autumn Dust".' },
    { year: '2026', event: 'Second album "September Turns Gold" announced.' }
  ];

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
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', fontWeight: '900', marginBottom: '3rem' }}>
            COUNTRY. AMERICANA. REAL STORIES.
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>THE STORY</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              Originally from Columbia, Tennessee, Ryker Boone is a modern country artist with a rugged southern edge and cinematic outlaw charm. He blends the soul of classic country storytelling with polished modern country production, creating music that feels both radio-ready and deeply personal.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
              Visually, he carries a strong western identity: black cowboy hat, worn denim, leather jackets, dusty roads, autumn sunsets, old trucks, and small-town Americana. His image captures the feeling of a lone traveler caught between nostalgia and freedom.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { label: 'GENRE', val: 'Country, Americana' },
              { label: 'ORIGIN', val: 'Columbia, Tennessee' },
              { label: 'DEBUT', val: 'Boots in the Autumn Dust' },
              { label: 'ERA', val: '2010 - Present' }
            ].map((fact, i) => (
              <div key={i}>
                <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em' }}>{fact.label}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{fact.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. GALLERY STRIP */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '1px', 
        background: 'rgba(255,255,255,0.05)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {[
          '/images/consistent/ryker_writing_lyrics.png',
          '/images/consistent/family_campfire_jam.png',
          '/images/consistent/ryker_singing_grit.png',
          '/images/ryker_joyce_bettie_porch.png'
        ].map((img, i) => (
          <div key={i} style={{ aspectRatio: '1', position: 'relative', overflow: 'hidden' }}>
            <Image src={img} alt={`Ryker Gallery ${i}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* 3. INSIGHTS GRID (REBALANCED) */}
      <div style={{ padding: '6rem 4rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem' }}>
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>THE ROOTS & BACKSTORY</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
              Growing up in Columbia, Tennessee, Ryker's songs reflect blue-collar pride, family loyalty, and the classic struggle of chasing big-city dreams while keeping one foot firmly planted in the soil. His early years playing small bars and working the local industry gave his music the grit and authenticity that defines him today.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>MUSICAL STYLE & THEMES</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
              Boone's catalog blends traditional country instrumentation—warm steel guitars, fiddle, and acoustic rhythms—with the punchy production dynamics of modern Nashville. Lyrically, he emphasizes emotional vulnerability, real lived experiences, and the nostalgia of rural American life.
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
            <h3 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>THE SIGNATURE SOUND</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
              At the center of Ryker Boone’s sound is a carefully crafted sonic identity:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                "Modern country pop hooks",
                "Groove-driven acoustic rhythm guitar",
                "Punchy but controlled live drums",
                "Emotional male vocals with warm grit",
                "Line-dance inspired rhythms",
                "Cinematic Americana textures",
                "Reflective storytelling mixed with summer energy"
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

      {/* 4. THE CHRONICLE (FULL WIDTH TIMELINE TO FIX THE GAP) */}
      <div style={{ 
        padding: '6rem 4rem', 
        background: 'rgba(255,255,255,0.02)', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '4rem', textAlign: 'center' }}>
          — THE CAREER CHRONICLE —
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {highlights.map((item, i) => (
            <div key={i} style={{ 
              padding: '1.5rem', 
              border: '1px solid rgba(226, 179, 90, 0.1)', 
              borderRadius: '8px',
              background: 'rgba(0,0,0,0.2)'
            }}>
              <span style={{ color: 'var(--accent-gold)', fontWeight: '900', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>{item.year}</span>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5', margin: 0 }}>{item.event}</p>
            </div>
          ))}
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
          "I write songs about the people like me and the places that raised me. If it's real, it's worth singing."
          <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.7rem', textTransform: 'uppercase', fontStyle: 'normal', letterSpacing: '0.2em', color: 'var(--accent-gold)' }}>— Ryker Boone</span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '2px solid var(--accent-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <Image src="/images/ryker_family_quiet_time.png" alt="Ryker's Family" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>HIS FAMILY</h4>
            <p style={{ fontSize: '0.75rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>
              Ryker's wife, Joyce, is his rock. Together they're raising their son, Graham, in Columbia, Tennessee in a home rooted in love and music.
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
