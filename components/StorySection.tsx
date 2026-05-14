"use client";

import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" style={{ background: '#0e0e0e', padding: '10rem 8%' }}>
      <div className="split-layout">
        <div className="reveal-img" style={{ 
          aspectRatio: '1', 
          borderRadius: '12px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)'
        }}>
          <Image 
            src="/images/southern-steel-v3.png" 
            alt="Ryker Boone Southern Steel" 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div style={{ paddingLeft: '2rem' }}>
          <span className="subtitle" style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>THE NEXT CHAPTER — COMING AUGUST 2026</span>
          <h2 className="section-title">SOUTHERN <br /> <span style={{ color: 'var(--accent-gold)' }}>STEEL</span></h2>
          
          <div style={{ 
            marginTop: '3rem', 
            color: 'var(--text-secondary)', 
            lineHeight: '1.8',
            fontSize: '1.1rem',
            maxWidth: '90%'
          }}>
            <p style={{ marginBottom: '2rem' }}>
              "Southern Steel" isn't just a track—it's an anthem. Ryker Boone is the sound of grit, steel, and Southern soul. This upcoming project, launching August 2026, tells the stories of hard work, loyalty, love, and the relentless pursuit of something more.
            </p>
            <p style={{ marginBottom: '3rem' }}>
              Forged in Nashville and ready for the world this September, *Southern Steel* bridges tradition and truth—honoring where Ryker comes from while blazing a new trail for modern country.
            </p>

            <button style={{
              background: 'transparent',
              border: '1px solid var(--accent-gold)',
              color: 'var(--accent-gold)',
              padding: '1rem 2rem',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: '900',
              marginBottom: '3.5rem'
            }}>
              Join the Fan Club for Early Access
            </button>
            
            <div style={{ 
              padding: '2.5rem', 
              borderLeft: '2px solid var(--accent-gold)', 
              background: 'rgba(255,255,255,0.02)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.4rem'
            }}>
              "Every scar has a story, and every song has a reason. We built this on Southern Steel."
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '4rem', 
        marginTop: '10rem',
        alignItems: 'start'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="subtitle">The Man Behind the Music</span>
          <h2 className="section-title" style={{ fontSize: '3rem' }}>ROOTS & <br /> <span style={{ color: 'var(--accent-gold)' }}>FAMILY</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', lineHeight: '1.8' }}>
            Ryker Boone was raised in a small town outside Willow Creek, Tennessee. His dad worked construction, his mom taught school, and their house was always filled with classic country, rock, and the sounds of real life. He picked up a guitar at 12 and never put it down. 
          </p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', lineHeight: '1.8' }}>
            By 18 he was playing local bars, writing songs that weren't just about life—they were about living it. Today, his music is still built on that same truth and grit. When he's not on the road, you'll find him at home with his wife, his son, and his loyal dog, Betty. He's not here for the fame; he's here for the music, the fans, and the road that never stops calling.
          </p>
          <div style={{ marginTop: '2rem', fontFamily: 'var(--font-playfair)', color: 'var(--accent-gold)', fontSize: '1.2rem', fontStyle: 'italic' }}>
            This isn't just his story. It's yours too.
          </div>
        </div>

        {/* Photo Collage */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="reveal-img" style={{ 
              aspectRatio: '1', 
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image 
                src="/images/family-jessie-betty.jpg" 
                alt="Ryker, Jessie, and Betty" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="reveal-img" style={{ 
              aspectRatio: '1', 
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image 
                src="/images/ryker-betty.png" 
                alt="Ryker and his dog Betty" 
                fill 
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="reveal-img" style={{ 
              aspectRatio: '1', 
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image 
                src="/images/family-1.png" 
                alt="Ryker Boone Family" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="reveal-img" style={{ 
              aspectRatio: '1', 
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image 
                src="/images/ryker-boy.png" 
                alt="Ryker as a boy with guitar" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
