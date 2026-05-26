"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SeptemberAlbumPage() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string } | null>(null);

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    const lyrics = lyricsData[track.title] || "Lyrics not found.";
    setSelectedTrackLyrics({ title: track.title, lyrics });
  };

  const tracks = [
    { id: "01", title: "Whiskey In The Headlights", duration: "3:38" },
    { id: "02", title: "Dust On The Blacktop", duration: "3:47" },
    { id: "03", title: "Neon County Line", duration: "4:02" },
    { id: "04", title: "Midnight Gravel", duration: "3:25" },
    { id: "05", title: "September Turns Gold", duration: "3:58", badge: "SINGLE" },
    { id: "06", title: "One More Round", duration: "3:15" },
    { id: "07", title: "Backroad Heartbeat", duration: "3:50" },
    { id: "08", title: "Highway On Fire", duration: "4:10", badge: "SINGLE" },
    { id: "09", title: "Southern Steel", duration: "4:32", badge: "SINGLE" },
    { id: "10", title: "Last Call Eyes", duration: "3:44" },
    { id: "11", title: "Bootleg Midnight", duration: "4:15" },
    { id: "12", title: "Back To Gold", duration: "4:50" },
    { id: "13", title: "September Turns Gold (Slow Remix Live)", duration: "5:12", badge: "BONUS" }
  ];

  const singles = [
    {
      title: "September Turns Gold",
      image: "/images/september turns gold - single.jpg",
      tagline: "Title Track Single",
      description: "A sweeping, acoustic-driven track describing the bittersweet transition of seasons and lost love in rural Tennessee."
    },
    {
      title: "Highway On Fire",
      image: "/images/highway on fire - single.jpg",
      tagline: "Second Single",
      description: "A fast-paced, high-octane road anthem featuring blazing electric guitars and a driving rhythm section."
    },
    {
      title: "Southern Steel",
      image: "/images/southern steel - single.jpg",
      tagline: "Latest Single",
      description: "A beautiful, steel guitar-drenched ballad celebrating Southern heritage, blue-collar pride, and resilience."
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
              src="/images/september turns gold - album.png" 
              alt="September Turns Gold Cover" 
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
              COMING SOON
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
              The Barn & Festival Sessions
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              SEPTEMBER TURNS <span style={{ color: 'var(--accent-gold)' }}>GOLD</span>
            </h1>
            
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingBottom: '1rem'
            }}>
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>AUGUST 2026</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>PRE-SAVE</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              'September Turns Gold' is a cinematic journey through heartland storytelling and modern country grit. The highly anticipated sophomore album represents a massive step forward in Ryker's evolution as a songwriter. The first 12 tracks were recorded in his barn studio with his backing group, capturing the raw energy of his band and the sweet cry of Southern steel. Track 13 was recorded Live at the Autumn Lights Country Music Festival.
            </p>

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

      {/* Tracklist & Singles Showcase */}
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

          {/* Right: Featured Singles */}
          <div>
            <span className="subtitle">Promotional Singles</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>RELEASED <span style={{ color: 'var(--accent-gold)' }}>SINGLES</span></h2>
            
            <div style={{ display: 'grid', gap: '3rem' }}>
              {singles.map((single, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.01)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid rgba(226, 179, 90, 0.1)'
                  }}>
                    <Image 
                      src={single.image} 
                      alt={single.title} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <span style={{ 
                      color: 'var(--accent-gold)', 
                      fontSize: '0.65rem', 
                      fontWeight: '900', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>
                      {single.tagline}
                    </span>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-playfair)' }}>
                      {single.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.5' }}>
                      {single.description}
                    </p>
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
              background: 'rgba(15, 15, 15, 0.95)',
              border: '1px solid rgba(226, 179, 90, 0.3)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              width: '100%',
              maxWidth: '550px',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
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
              SEPTEMBER TURNS GOLD
            </span>
            <h3 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', 
              fontWeight: 'bold', 
              fontFamily: 'var(--font-playfair)', 
              color: 'white',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              {selectedTrackLyrics.title}
            </h3>

            <div style={{ 
              width: '100%',
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: '1.05rem', 
              lineHeight: '1.8', 
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontFamily: 'inherit',
              paddingRight: '0.5rem'
            }}>
              {selectedTrackLyrics.lyrics}
            </div>

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
  "September Turns Gold": `Old boots resting by the screen door
Dust still clinging from July
Fields are leaning toward the sunrise
Amber colors fill the sky
When September turns to gold
When the green becomes a fire
Cool winds rolling through these roads
And the stars climb even higher
Friday lights across the valley
Bonfires burning on the hill
Old friends laughing through the darkness
Like they always always will
Leaves may fall but roots stay planted
Time may bend but not erase
Every season leaves its lesson
Every road recalls a place
When September turns to gold
When the green becomes a fire
Cool winds rolling through these roads
And the stars climb even higher`,

  "Neon County Line": `Neon shines on a two lane road
Chrome lights up where the blacktop rolls
Cool night air through an open door
One more mile, then a little more
Neon lights and county lines
Running strong through southern nights
Every turn feels smooth and right
Keep it moving side by side
White lines cut through fields of stone
Every road feels close to home
Small town stars in a midnight sky
Moving fast as the miles go by
Neon lights and county lines
Running strong through southern nights
Every turn feels smooth and right
Keep it moving side by side
Moon hangs low above the trees
Cool wind rides the autumn breeze
Every mile keeps pulling strong
Right here is where we belong
Neon lights and county lines
Running strong through southern nights
Every turn feels smooth and right
Keep it moving side by side`,

  "Dust On The Blacktop": `Sun drops low on the painted lines
Chrome lights flash as the highway shines
Cool air moves through an open ride
Long road calling from side to side
Dust on the blacktop rolls
Fire in these country souls
Every mile takes control
Keep it moving, never slow
Small town lights in a midnight glow
Backroad signs where the tall pines grow
Every turn feels smooth and right
Running strong through the southern night
Dust on the blacktop rolls
Fire in these country souls
Every mile takes control
Keep it moving, never slow
Moon rides high above the lane
Cold wind cuts through fields of grain
Every road keeps pulling strong
Right here is where we belong
Dust on the blacktop rolls
Fire in these country souls
Every mile takes control
Keep it moving, never slow`,

  "Whiskey In The Headlights": `Headlights cut through the midnight haze
Chrome shines bright through the smoky glaze
Cold night rolls on a painted line
One more turn and the stars align
Whiskey in the headlights glows
Down these roads where the wild wind blows
Every mile keeps burning bright
Running strong through the southern night
White lines run through fields of stone
Every road feels close to home
Engine hum with a steady sound
Heartbeat locked when the wheels roll round
Whiskey in the headlights glows
Down these roads where the wild wind blows
Every mile keeps burning bright
Running strong through the southern night
Moon hangs low above the pines
Cool air moves through county lines
Every road keeps pulling strong
Right here is where we belong
Whiskey in the headlights glows
Down these roads where the wild wind blows
Every mile keeps burning bright
Running strong through the southern night`,

  "Midnight Gravel": `Moon rides low on a midnight trail
Chrome cuts through where the shadows sail
Cold wind runs through an open lane
Blacktop shines after evening rain
Midnight gravel, sparks that fly
Rolling hard beneath the sky
Every mile feels strong and true
Every road comes back to you
White lines fade where the pine trees stand
Long road curves through open land
Engine hum with a steady sound
Heartbeats lock when the wheels roll round
Midnight gravel, sparks that fly
Rolling hard beneath the sky
Every mile feels strong and true
Every road comes back to you
Cool air falls across the field
Some things break and some things heal
Every turn, every sign
Keeps this rhythm locked in time
Midnight gravel, sparks that fly
Rolling hard beneath the sky
Every mile feels strong and true
Every road comes back to you`,

  "Backroad Heartbeat": `Tail lights glow on a county bend
Cool night rolls where the fences end
Long road runs through fields of green
Like every mile knows what I mean
Backroad heartbeat, strong and slow
Through the dust where the wild winds blow
Every turn feels right on time
Step for step and line for line
Moonlight falls on the gravel lane
Summer heat meets autumn rain
Every sign and every light
Pulls me deeper through the night
Backroad heartbeat, strong and slow
Through the dust where the wild winds blow
Every turn feels right on time
Step for step and line for line
Cold air moves through open fields
Some roads break and some roads heal
Every mile, every sign
Keeps this rhythm locked in time
Backroad heartbeat, strong and slow
Through the dust where the wild winds blow
Every turn feels right on time
Step for step and line for line`,

  "Highway On Fire": `Sun drops low on a painted lane
Chrome lights flash through the cooling rain
Long road runs where the pine trees stand
Wide open sky across the land
Highway on fire, burning bright
Rolling hard through the southern night
Every mile feels strong and right
Keep it moving till morning light
White lines cut through fields of stone
Every road still feels like home
Cold air moves through an open ride
Steady wheels and a clear night sky
Highway on fire, burning bright
Rolling hard through the southern night
Every mile feels strong and right
Keep it moving till morning light
Moon hangs low above the trees
Cool wind rides the autumn breeze
Every turn, every sign
Keeps this rhythm locked in time
Highway on fire, burning bright
Rolling hard through the southern night
Every mile feels strong and right
Keep it moving till morning light`,

  "Southern Steel": `Chrome shines bright on a midnight lane
Cold stars burn through the autumn rain
Long roads run where the pine trees lean
Small town lights cut sharp and clean
Southern steel, strong and true
Running fast like I always do
Every mile, every wheel
Built to last, southern steel
White lines glow on the blacktop roll
Cool night air and a steady soul
Every turn feels smooth and right
Rolling strong through the southern night
Southern steel, strong and true
Running fast like I always do
Every mile, every wheel
Built to last, southern steel
Moon rides low above the field
Some roads break and some roads heal
Every sign, every line
Keeps this rhythm locked in time
Southern steel, strong and true
Running fast like I always do
Every mile, every wheel
Built to last, southern steel`,

  "One More Round": `Low cut dress and a whiskey smile
Been watching you for a little while
Slow move, baby, take your time
You got yours and I got mine
One more round, one more song
One more place where we belong
One slow turn, one slow spin
Pull me close and pull me in
Boot heels slide on hardwood lines
Your hand fits easy locked in mine
No fast words, no big scene
Just you and me somewhere between
One more round, one more song
One more place where we belong
One slow turn, one slow spin
Pull me close and pull me in
Last call light, still burning low
Neither one of us wants to go
Clock says late, heart says stay
Let the night fade slow this way
One more round, one more song
One more place where we belong
One slow turn, one slow spin
Pull me close and pull me in`,

  "Bootleg Midnight": `Blacktop shines in a silver glow
Tail lights fade where the pine winds blow
Cold night air on a county line
One more look and you’re looking mine
Bootleg midnight, smooth and slow
Whiskey fire in a neon glow
One more turn, one more line
You got yours and I got mine
Low cut smile and a sideways glance
Pulled me in with a slow two-step chance
No fast talk and no big show
Just that look saying nice and slow
Bootleg midnight, smooth and slow
Whiskey fire in a neon glow
One more turn, one more line
You got yours and I got mine
Clock runs late but nobody cares
Smoke and shadows everywhere
One more song before we go
Take it easy, take it slow
Bootleg midnight, smooth and slow
Whiskey fire in a neon glow
One more turn, one more line
You got yours and I got mine`,

  "Last Call Eyes": `Low light falls on your dark blue jeans
One slow smile says what it means
No fast words, no alibis
Just that fire in your last call eyes
Last call eyes, burning low
Pull me in and don’t let go
One slow touch, one deep breath
Got me closer with every step
Midnight moves in silver smoke
Every look feels soft and close
No wrong turn and no disguise
Just that spark in your midnight eyes
Last call eyes, burning low
Pull me in and don’t let go
One slow touch, one deep breath
Got me closer with every step
Clock runs late but time stands still
You lean close and the room goes still
No looking back, no asking why
Just me and you beneath tonight
Last call eyes, burning low
Pull me in and don’t let go
One slow touch, one deep breath
Got me closer with every step`,

  "Back To Gold": `Long roads wind through autumn trees
Cold night rides on a southern breeze
Every mile and every sign
Led me back here one more time
Back to gold, back to home
Back to roads I've always known
Every turn, every mile
Brings me back with every smile
Moon rides high on a county line
Silver stars in a sky so wide
Every road that pulled me far
Still points back to where you are
Back to gold, back to home
Back to roads I've always known
Every turn, every mile
Brings me back with every smile
Seasons change but roots stay strong
Some roads fade but not for long
Every mile, every road
Always leads me back to gold
Back to gold, back to home
Back to roads I've always known
Every turn, every mile
Brings me back with every smile`,

  "September Turns Gold (Slow Remix Live)": `Old boots resting by the screen door
Dust still clinging from July
Fields are leaning toward the sunrise
Amber colors fill the sky
When September turns to gold
When the green becomes a fire
Cool winds rolling through these roads
And the stars climb even higher
Friday lights across the valley
Bonfires burning on the hill
Old friends laughing through the darkness
Like they always always will
Leaves may fall but roots stay planted
Time may bend but not erase
Every season leaves its lesson
Every road recalls a place
When September turns to gold
When the green becomes a fire
Cool winds rolling through these roads
And the stars climb even higher`
};
