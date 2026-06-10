"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRykerSession } from "@/components/AuthProvider";

export default function OurLoveOurForeverPage() {
  const { session, isLoaded } = useRykerSession();
  const isPremium = isLoaded && session && (
    session.rykerTier === 'PREMIUM' ||
    session.rykerTier === 'VIP' ||
    ['PREMIUM', 'VIP', 'INSIDER', 'LABEL', 'ADMIN'].includes(session.tier)
  );

  const isLabel = isLoaded && session && (
    session.tier === 'LABEL' ||
    session.tier === 'ADMIN' ||
    session.tier === 'LIFETIME' ||
    session.rykerTier === 'PREMIUM'
  );

  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string; isLocked?: boolean; isLabelAccess?: boolean } | null>(null);

  const RELEASE_DATE = new Date("2027-02-12T00:00:00");

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    const isReleased = new Date() >= RELEASE_DATE;
    const isSingle = track.badge === "SINGLE";

    // Label/admin users bypass the date lock and see all lyrics immediately
    if (isLabel) {
      const lyrics = lyricsData[track.title] || "Lyrics not found.";
      setSelectedTrackLyrics({ title: track.title, lyrics, isLocked: false, isLabelAccess: true });
    } else if (!isReleased && !isSingle) {
      setSelectedTrackLyrics({
        title: track.title,
        lyrics: "Lyrics for this track will be released when the album drops on February 12, 2027.",
        isLocked: true
      });
    } else {
      const lyrics = lyricsData[track.title] || "Lyrics not found.";
      setSelectedTrackLyrics({ title: track.title, lyrics, isLocked: false });
    }
  };

  const tracks = [
    { id: "01", title: "Here Comes the Light", duration: "3:45" },
    { id: "02", title: "I Choose You", duration: "3:28" },
    { id: "03", title: "Two Roads One Heart", duration: "4:02" },
    { id: "04", title: "Bound to You", duration: "3:15" },
    { id: "05", title: "Now and Always", duration: "3:52" },
    { id: "06", title: "First and Always", duration: "3:34" },
    { id: "07", title: "Before I Knew Your Name", duration: "4:10" },
    { id: "08", title: "Like Home", duration: "3:22" },
    { id: "09", title: "Forever Starts With You", duration: "3:48" },
    { id: "10", title: "Hold This Moment", duration: "4:15" },
    { id: "11", title: "One Lifetime More", duration: "3:55" },
    { id: "12", title: "The Last Song We’ll Ever Need", duration: "4:28" },
    { id: "13", title: "Here Comes the Light (Wedding Remix)", duration: "3:58", badge: "WEDDING REMIX" },
    { id: "14", title: "I Choose You (Wedding Remix)", duration: "3:35", badge: "WEDDING REMIX" },
    { id: "15", title: "Two Roads One Heart (Wedding Remix)", duration: "4:12", badge: "WEDDING REMIX" },
    { id: "16", title: "Bound to You (Wedding Remix)", duration: "3:20", badge: "WEDDING REMIX" },
    { id: "17", title: "Before I Knew Your Name (Wedding Remix)", duration: "4:24", badge: "WEDDING REMIX" }
  ];

  const creativePillars = [
    {
      title: "The Love Story",
      description: "Sweeping country love songs and authentic lyrics describing deep devotion, dedication, and the beautiful journey of two roads merging into one heart.",
      tags: ["Devotion", "Heartland Romance", "Timeless Vows", "Acoustic Warmth"]
    },
    {
      title: "Wedding Remixes",
      description: "Custom reimagined acoustic and ceremony-ready versions of key tracks, crafted specifically for first dances, aisle walks, and reception celebrations.",
      tags: ["First Dance", "Ceremony Ready", "Acoustic Strings", "Romantic Tempo"]
    },
    {
      title: "Organic Instrumentation",
      description: "A lush, emotional musical palette featuring soft acoustic guitars, gentle grand piano, soaring pedal steel, and warm fiddle textures.",
      tags: ["Pedal Steel", "Grand Piano", "Rich Harmonies", "Warm Baritone"]
    }
  ];

  return (
    <main style={{ background: '#050505', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero section */}
      <section style={{ padding: '8rem 8% 4rem', background: 'linear-gradient(to bottom, #0a0a0a, #050505)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            href="/music" 
            style={{ 
              color: 'var(--accent-gold)', 
              textDecoration: 'none', 
              fontSize: '0.8rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.1em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← BACK TO DISCOGRAPHY
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left: Album cover */}
          <div style={{
            position: 'relative',
            aspectRatio: '1/1',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            border: '1px solid rgba(226, 179, 90, 0.2)'
          }}>
            <Image 
              src="/images/our love our forever - album.png" 
              alt="Our Love Our Forever Album Cover" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'var(--accent-gold)',
              color: 'black',
              padding: '0.5rem 1rem',
              fontSize: '0.7rem',
              fontWeight: '900',
              letterSpacing: '0.2em',
              borderRadius: '4px',
              zIndex: 10,
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}>
              IN THE STUDIO
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <span style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '0.75rem', 
              fontWeight: '900', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Country Wedding Edition
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              OUR LOVE <span style={{ color: 'var(--accent-gold)' }}>OUR FOREVER</span>
            </h1>
            
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>12 FEBRUARY 2027</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>PRE-SAVE</strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>DIGITAL</strong></div>
            </div>

            <div style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <p>
                Our Love Our Forever– Country Wedding Edition is a high-energy modern Nashville pop-country wedding album built around love, commitment, celebration, and the excitement of a wedding day — all driven by polished 130 BPM country-pop production. Rather than slow ballads, the first 12 tracks deliver upbeat country rhythms, line-dancing energy, radio-ready hooks, and cinematic wedding storytelling designed for receptions, dance floors, road trips, and unforgettable wedding nights.
              </p>
              <p>
                Led by Ryker Boone’s rich country vocals and modern Nashville production, the album blends driving acoustic guitars, punchy country drums, polished electric guitar hooks, rhythmic banjo textures, layered harmonies, and uplifting choruses inspired by contemporary country-pop arrangements and emotionally progressive song structures.
              </p>
              <div>
                <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>The album flows like a full wedding celebration:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
                  <li>the anticipation of seeing the bride walk down the aisle,</li>
                  <li>choosing forever together,</li>
                  <li>celebrating two lives becoming one,</li>
                  <li>dancing through the reception,</li>
                  <li>and ending with timeless vows that feel made for a lifetime.</li>
                </ul>
              </div>
              <p>
                Tracks like “Now and Always,” “Like Home,” “Forever Starts With You,” “Hold This Moment,” “One Lifetime More,” and “The Last Song We’ll Ever Need” lean heavily into upbeat line-dancing country-pop with studio-clean production, infectious choruses, and energetic Nashville-style instrumentation built for wedding parties and country dance floors.
              </p>
              <p>
                The final five tracks reimagine the biggest songs as cinematic Wedding Remixes, transforming them into larger-than-life celebration anthems under the <strong>Wedding Remix Collection</strong>.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button style={{
                background: 'var(--accent-gold)',
                color: 'black',
                padding: '1rem 2.5rem',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
              >
                PRE-SAVE ON SPOTIFY
              </button>
              <button style={{
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'white';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'transparent';
              }}
              >
                PRE-ADD ON APPLE MUSIC
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracklist & Creative Pillars Showcase */}
      <section style={{ padding: '6rem 8% 8rem', background: '#050505' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem'
        }}>
          {/* Left: Tracklist */}
          <div>
            <span className="subtitle">Official Release</span>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>THE <span style={{ color: 'var(--accent-gold)' }}>TRACKLIST</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '2.5rem', letterSpacing: '0.05em' }}>
              CLICK ANY TRACK TO VIEW LYRICS
            </p>
            
            <div style={{
              background: 'linear-gradient(to right, rgba(226, 179, 90, 0.1), rgba(0, 0, 0, 0))',
              borderLeft: '4px solid var(--accent-gold)',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 8px 8px 0',
              marginBottom: '2rem',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>🎵</span>
              <span style={{ color: 'var(--text-primary)', lineHeight: '1.5' }}>
                Want to listen? 30-second previews and high-res Premium downloads are available.{' '}
                <Link href="/club" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>
                  Play 30s Preview in Vault
                </Link>
              </span>
            </div>
            
            <div style={{ display: 'grid', gap: '0.25rem' }}>
              {tracks.map((track) => (
                <div 
                  key={track.id}
                  onMouseEnter={() => setActiveTrack(track.id)}
                  onMouseLeave={() => setActiveTrack(null)}
                  onClick={() => handleTrackClick(track)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '0.9rem 1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.02)',
                    borderLeft: track.badge ? '3px solid var(--accent-gold)' : '3px solid transparent',
                    background: activeTrack === track.id 
                      ? 'rgba(226, 179, 90, 0.08)' 
                      : track.badge 
                        ? 'rgba(226, 179, 90, 0.03)' 
                        : 'transparent',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: track.badge ? '1px solid var(--accent-gold)' : '1px solid rgba(226, 179, 90, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    fontSize: '0.65rem',
                    background: track.badge ? 'rgba(226, 179, 90, 0.1)' : 'transparent'
                  }}>
                    {activeTrack === track.id ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : track.id}
                  </div>
                  <span style={{ 
                    color: activeTrack === track.id ? 'var(--accent-gold)' : 'white', 
                    fontWeight: track.badge ? '700' : '500',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease' 
                  }}>
                    {track.title}
                  </span>
                  {track.badge && (
                    <span style={{
                      fontSize: '0.5rem',
                      background: 'var(--accent-gold)',
                      color: 'black',
                      padding: '0.2rem 0.5rem',
                      fontWeight: '900',
                      borderRadius: '2px',
                      marginLeft: '0.5rem',
                      letterSpacing: '0.05em'
                    }}>
                      {track.badge}
                    </span>
                  )}
                  <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Creative Directions */}
          <div>
            <span className="subtitle">Creative Vision</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>PROJECT <span style={{ color: 'var(--accent-gold)' }}>PILLARS</span></h2>
            
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              {creativePillars.map((pillar, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.01)',
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', fontFamily: 'var(--font-playfair)' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {pillar.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.6rem',
                        border: '1px solid rgba(226, 179, 90, 0.3)',
                        color: 'var(--accent-gold)',
                        padding: '0.3rem 0.7rem',
                        fontWeight: '700',
                        borderRadius: '30px',
                        letterSpacing: '0.05em',
                        background: 'rgba(226, 179, 90, 0.02)'
                      }}>
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics Modal */}
      {selectedTrackLyrics && (
        <div 
          onClick={() => setSelectedTrackLyrics(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(10, 10, 10, 0.97)',
              border: '1px solid rgba(226, 179, 90, 0.2)',
              borderRadius: '16px',
              padding: '3.5rem 3rem',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <button 
              onClick={() => setSelectedTrackLyrics(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                lineHeight: '1',
                padding: '0.2rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              &times;
            </button>

            <span style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '0.65rem', 
              fontWeight: '900', 
              letterSpacing: '0.25em', 
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              OUR LOVE OUR FOREVER
            </span>
            {selectedTrackLyrics.isLabelAccess && (
              <span style={{
                fontSize: '0.55rem',
                fontWeight: '900',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                background: 'rgba(226, 179, 90, 0.15)',
                color: 'var(--accent-gold)',
                border: '1px solid rgba(226, 179, 90, 0.4)',
                padding: '0.3rem 0.8rem',
                borderRadius: '30px',
                marginBottom: '0.75rem'
              }}>
                ◆ Label Access
              </span>
            )}
            <h3 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.25rem)', 
              fontWeight: '900', 
              fontFamily: 'var(--font-playfair)', 
              color: 'white',
              textAlign: 'center',
              textTransform: 'uppercase',
              lineHeight: '1.1',
              letterSpacing: '0.02em',
              marginBottom: '2.5rem'
            }}>
              {selectedTrackLyrics.title}
            </h3>

            {selectedTrackLyrics.isLocked ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                margin: '2rem 0'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(226, 179, 90, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Pre-Release Lock
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  maxWidth: '380px',
                  margin: 0
                }}>
                  {selectedTrackLyrics.lyrics}
                </p>
              </div>
            ) : (
              <div style={{ 
                width: '100%',
                color: 'rgba(255, 255, 255, 0.88)', 
                fontSize: '1.1rem', 
                lineHeight: '2.0', 
                textAlign: 'center',
                whiteSpace: 'pre-line',
                fontFamily: 'inherit',
                letterSpacing: '0.01em'
              }}>
                {selectedTrackLyrics.lyrics}
              </div>
            )}

            <div style={{ 
              marginTop: '2.5rem', 
              fontSize: '0.75rem', 
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.05em' 
            }}>
              Click outside or close to exit
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

const lyricsData: Record<string, string> = {
  "Here Comes the Light": `All the world slows down to see
The way you walk, so gracefully
In your eyes, a quiet flame
Every step, you write your name

Here comes the light, dressed in white
Hearts are still, the stars align
Time unfolds, a sacred sign
Here you come, love divine

Softest veil, the morning bloom
Fills the aisle with sweet perfume
You’re the dream the heavens drew
Every path has led to you

Here comes the light, dressed in white
Moments held in golden time
Glowing bright, so purely mine
Here you come, love divine

Every tear, every prayer
Led us gently to this air
Now the world begins anew
And it starts with you

Here comes the light, dressed in white
Breathe it in, this is our sign
Every heart begins to shine
Here you come, love divine`,

  "I Choose You": `With no script, no rehearsed line
I stand with open hands and time
All I am, I give to you
In every silence, every truth

I choose you, in calm or storm
When the days are light or worn
Through every change, in every hue
No matter what, I’ll choose you

We’ve seen shadows, danced in light
We’ve held hope through sleepless nights
You know my soul, I’ve seen yours too
Forever starts in “I do”

I choose you, each morning sun
When the road is just begun
And when we’re gray, and skies aren’t blue
Through all of time, I’ll choose you

Let this vow be more than sound
Let it hold when life spins 'round
For all my breath and all my years
You’ll never walk alone, my dear

I choose you, through rise and fall
When we stumble, when we stall
From this day and always true
My heart will wake and choose you`,

  "Two Roads One Heart": `I was chasing down these county lines
Running fast trying to buy more time
Then you showed up and changed my view
Now every road leads back to you

Two roads, one heart, one dream tonight
Two souls moving side by side
Every mile brought me to you
Now forever feels brand new

Every small-town light feels gold
Every hand I hold feels home
With your smile lighting up the dark
You became my favorite part

Two roads, one heart, one song to sing
One love wrapped around everything
Every turn just feels so right
With you here tonight

Different roads brought us this far
Now we’re dancing underneath the stars

Two roads, one heart, one life to live
Every day more love to give
Every sunset, every view
Feels like home with you`,

  "Bound to You": `I’ve loved you in a thousand ways
In quiet nights and golden days
The world can shift, the stars can move
But I will still be bound to you

Bound to you, like breath to air
Like echoes in an answered prayer
No ending line, no need to prove
I will always be bound to you

When silence falls and years drift wide
You’ll still be my home inside
No matter where this life may lead
You are the vow, the root, the seed

Bound to you, through joy and flame
Through every loss, through every gain
The stars may fade, the skies turn blue
But I’ll remain, bound to you

Every prayer and every mile
Led me straight into your smile
Bound to you, and always will
When the world goes quiet, I’m here still
In every lifetime shining through
I will be bound to you`,

  "Now and Always": `Boots on the floor and your hand in mine
Neon lights and small-town signs
Every road led me to you
Tonight feels brand new

Now and always, side by side
Spinning slow beneath these lights
Every heartbeat pulls me close
You’re my heart, you’re my home

Your smile shines like summer rain
Makes this whole world fade away
Every step feels right somehow
Standing here with you now

Now and always, you and me
Right where we were meant to be
Every moment feels so true
I’ll keep choosing you

No looking back, no lonely nights
Just your love and these warm lights

Now and always, this is us
Built on love and endless trust
Every mile and every view
Feels like home with you`,

  "First and Always": `You walked in and stole the night
Everything just felt so right
Every road led straight to you
Like a dream finally coming true

You’ll be my first and always
My sunrise through the days
Every mile, every road
Leads me back to your soul

Every laugh lights up the dark
Like a fire inside my heart
Every kiss feels just brand new
Every song comes back to you

You’ll be my first and always
The rhythm my heart plays
Every turn, every chance
Starts and ends in this dance

Through every season rolling by
You’ll still be right by my side
You’ll be my first and always
My blue sky through the rain
Every dream I’m dreaming of
Starts with your sweet love`,

  "Before I Knew Your Name": `I used to walk with questions wide
Wondering who would walk beside
Then suddenly, there you were
And the world began to stir

Before I knew your name, I felt the flame
The kind that never plays a game
You were the echo in my dreams
The missing lyric to my theme
I didn’t know your face, your frame
But I loved you, before I knew your name

I spoke your name before we met
Though I hadn't found the words just yet
Like something written in the stars
That pulled me straight into your arms

Before I knew your name, I knew your eyes
They’ve lived a hundred quiet skies
The way you smile, the way you move
Felt like the love I always knew
No need for fate, no need for fame
I loved you, before I knew your name

And now we’re here, not by chance
It’s always been this slow romance
I waited years, and now you’re here
The answer I was meant to hear

Before I knew your name, I felt your light
It carried me through every night
The part of me I couldn’t claim
Came alive, when you said my name`,

  "Like Home": `I spent years chasing open roads
Trying hard to carry hope
Then you smiled and I finally knew
Home was always you

You feel like home on a Friday night
Like porch swing stars and soft moonlight
No matter where this road may go
I’m already home

Every little thing feels right
With your hand wrapped close in mine
Every mile just leads me back
To the love we have

You feel like home every time
Like summer fields and county lights
Every heartbeat lets me know
I’m already home

Your arms feel safe like Tennessee skies
Forever living in your eyes
You feel like home when you smile
Like easy love that lasts a lifetime
No matter where this road may go
I’m already home`,

  "Forever Starts With You": `Friday night and the stars shine bright
Your white dress glowing in the lights
Every road led me right here
Now forever feels so near

Forever starts with you tonight
Under all these neon lights
Every heartbeat feels so true
Forever starts with you

Every prayer brought me this way
To your arms where I wanna stay
Every dream feels real somehow
Standing here with you now

Forever starts with you tonight
Everything just feels so right
Every dance and every view
Feels like home with you

Every mile and every town
Led us here and slowed us down
Forever starts with you tonight
Like the sunrise breaking light
Every moment feels brand new
Forever starts with you`,

  "Hold This Moment": `Every mile led me tonight
Right into these county lights
Every heartbeat says it’s true
I found forever here with you

Hold this moment, don’t let go
Spin me slow and pull me close
Every light and every song
Feels like where we belong

Blue jeans dancing across the floor
Your hand pulling me in more
Every smile feels brand new
Tonight belongs to me and you

Hold this moment, heart to heart
Like we never have to part
Every dance and every view
Feels like home with you

Tonight the whole world fades away
It’s just us in this moment today

Hold this moment, close tonight
Everything just feels so right
Every road and every dream
Led your heart to me`,

  "One Lifetime More": `Sunday mornings and coffee cups
Little things that fill us up
Every laugh keeps pulling me
Closer than I’ve ever been

If I could live this all once more
I’d still walk through your front door
Every mile, every shore
I’d still want one lifetime more

Every sunset feels brand new
Every road leads back to you
Every dream feels right tonight
Standing here by your side

If I could write this story twice
I’d still choose this simple life
Every day worth waiting for
I’d still want one lifetime more

You’re my reason, you’re my song
Right where my heart belongs
If tomorrow starts again
I’d still take your hand again
Every kiss worth waiting for
I’d still want one lifetime more`,

  "The Last Song We’ll Ever Need": `Last slow dance, closing time
Still your hand fits right in mine
Every song led us right here
Now forever feels so clear

This is the last song we’ll ever need
Just your heart beating next to me
Every dream and every view
Leads me back to you

Every road brought us tonight
Under all these county lights
Every moment feels so true
Standing close to you

This is the last song we’ll ever need
Everything feels complete
Every mile and every dream
Led your heart to me

When the lights all fade away
I’ll still choose you every day
This is the last song we’ll ever need
Like a perfect melody
Every heartbeat feels brand new
Every road leads back to you`,

  "Here Comes the Light (Wedding Remix)": `All the world slows down to see
The way you walk, so gracefully
In your eyes, a quiet flame
Every step, you write your name

Here comes the light, dressed in white
Hearts are still, the stars align
Time unfolds, a sacred sign
Here you come, love divine

Softest veil, the morning bloom
Fills the aisle with sweet perfume
You’re the dream the heavens drew
Every path has led to you

Here comes the light, dressed in white
Moments held in golden time
Glowing bright, so purely mine
Here you come, love divine

Every tear, every prayer
Led us gently to this air
Now the world begins anew
And it starts with you

Here comes the light, dressed in white
Breathe it in, this is our sign
Every heart begins to shine
Here you come, love divine`,

  "I Choose You (Wedding Remix)": `With no script, no rehearsed line
I stand with open hands and time
All I am, I give to you
In every silence, every truth

I choose you, in calm or storm
When the days are light or worn
Through every change, in every hue
No matter what, I’ll choose you

We’ve seen shadows, danced in light
We’ve held hope through sleepless nights
You know my soul, I’ve seen yours too
Forever starts in “I do”

I choose you, each morning sun
When the road is just begun
And when we’re gray, and skies aren’t blue
Through all of time, I’ll choose you

Let this vow be more than sound
Let it hold when life spins 'round
For all my breath and all my years
You’ll never walk alone, my dear

I choose you, through rise and fall
When we stumble, when we stall
From this day and always true
My heart will wake and choose you`,

  "Two Roads One Heart (Wedding Remix)": `I walked through years I couldn’t name
Chasing echoes, chasing flame
I searched the world but lost my way
Till your light found me that day

Two roads, one heart
From miles apart to where we are
Every turn, a work of art
Meant to be, two roads, one heart

You showed me love could still begin
In quiet moments, deep within
You built a place where I belong
With every word, you made me strong

Two roads, one heart
No force can pull this bond apart
Through the storms and through the dark
We remain, two roads, one heart

If time rewinds,
I’d still find you
In every life,
I’d choose us too
We are the path that love drew true

Two roads, one heart
We wrote this map with every start
Through every joy and every scar
We are one, two roads, one heart`,

  "Bound to You (Wedding Remix)": `I’ve loved you in a thousand ways
In quiet nights and golden days
The world can shift, the stars can move
But I will still be bound to you

Bound to you, like breath to air
Like echoes in an answered prayer
No ending line, no need to prove
I will always be bound to you

When silence falls and years drift wide
You’ll still be my home inside
No matter where this life may lead
You are the vow, the root, the seed

Bound to you, through joy and flame
Through every loss, through every gain
The stars may fade, the skies turn blue
But I’ll remain, bound to you

Not just in rings or sacred lines
But in the way you look in mine
Forever’s not a dream, it’s true
It’s every breath I give to you

Bound to you, and always will
When the world goes quiet, I’m here still
In every lifetime shining through
I will be bound to you`,

  "Before I Knew Your Name (Wedding Remix)": `I used to walk with questions wide
Wondering who would walk beside
Then suddenly, there you were
And the world began to stir

Before I knew your name, I felt the flame
The kind that never plays a game
You were the echo in my dreams
The missing lyric to my theme
I didn’t know your face, your frame
But I loved you, before I knew your name

I spoke your name before we met
Though I hadn't found the words just yet
Like something written in the stars
That pulled me straight into your arms

Before I knew your name, I knew your eyes
They’ve lived a hundred quiet skies
The way you smile, the way you move
Felt like the love I always knew
No need for fate, no need for fame
I loved you, before I knew your name

And now we’re here, not by chance
It’s always been this slow romance
I waited years, and now you’re here
The answer I was meant to hear

Before I knew your name, I felt your light
It carried me through every night
The part of me I couldn’t claim
Came alive, when you said my name`
};
