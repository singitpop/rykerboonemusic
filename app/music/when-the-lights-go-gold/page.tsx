"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WhenTheLightsGoGoldPage() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string } | null>(null);

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    const lyrics = lyricsData[track.title] || "Lyrics not found.";
    setSelectedTrackLyrics({ title: track.title, lyrics });
  };

  const tracks = [
    { id: "01", title: "Friday Again", duration: "2:44", badge: "SINGLE" },
    { id: "02", title: "Midnight Motion", duration: "3:03" },
    { id: "03", title: "Cold Smoke", duration: "3:08", badge: "SINGLE" },
    { id: "04", title: "Blue Flame", duration: "3:23", badge: "SINGLE" },
    { id: "05", title: "When The Lights Go Gold", duration: "2:59", badge: "SINGLE" },
    { id: "06", title: "Kiss Me Like That", duration: "3:14" },
    { id: "07", title: "Midnight Static", duration: "3:08" },
    { id: "08", title: "White Line Weather", duration: "3:14", badge: "SINGLE" },
    { id: "09", title: "Too Close To Midnight", duration: "3:04" },
    { id: "10", title: "What We Were", duration: "3:36" },
    { id: "11", title: "Stay Till Sunday", duration: "2:59" },
    { id: "12", title: "One More Summer", duration: "3:03", badge: "SINGLE" }
  ];

  const singles = [
    {
      title: "Friday Again",
      image: "/images/friday again - single.png",
      tagline: "Lead Single",
      description: "An upbeat country-pop driving track capturing the anticipation of the weekend and small-town escape."
    },
    {
      title: "Blue Flame",
      image: "/images/blue flame - single.png",
      tagline: "Second Single",
      description: "A dark, moody ballad with clean guitar hooks, subtle pedal steel, and deep low-end textures."
    },
    {
      title: "When The Lights Go Gold",
      image: "/images/when the lights go gold - single.png",
      tagline: "Title Track Single",
      description: "A sweeping, neon-lit country anthem celebrating late-night memories, dashboard glow, and romance."
    },
    {
      title: "Too Close To Midnight",
      image: "/images/too close to midnight - single.png",
      tagline: "Radio Single",
      description: "An emotionally controlled vocal performance framed by acoustic pulses and a rich commercial hook."
    },
    {
      title: "One More Summer",
      image: "/images/one more summer - single.png",
      tagline: "Nostalgic Single",
      description: "A warm, melodic summer-themed crossover track that balances small-town imagery with pop-country rhythm."
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
              src="/images/when the lights go gold - album.png" 
              alt="When The Lights Go Gold Album Cover" 
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
              Modern Country Pop
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              WHEN THE LIGHTS <span style={{ color: 'var(--accent-gold)' }}>GO GOLD</span>
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
              <div>RELEASE DATE: <strong style={{ color: 'white' }}>OCTOBER 2026</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>STATUS: <strong style={{ color: 'var(--accent-gold)' }}>IN THE STUDIO</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              A cinematic modern country pop album built for cold-night drives, neon reflections, winter romance, and emotional late-night memories. Blending polished studio production with catchy crossover hooks, When The Lights Go Gold lives between modern country and atmospheric pop — combining rhythmic acoustic guitars, smooth electric textures, deep low-end movement, layered harmonies, and emotionally controlled vocals into a sleek radio-ready sound.
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
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>OFFICIAL <span style={{ color: 'var(--accent-gold)' }}>SINGLES</span></h2>
            
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
              WHEN THE LIGHTS GO GOLD
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
  "Friday Again": `Sunset fading on a Friday town
Black Silverado windows rolled down
Your blue eyes glowing in the dashboard light
Looking like trouble in the neon night
Here we go getting Friday again
One more shot and we’re crossing lines again
Your hand on mine and the speakers low
Two hearts burning in the midnight glow
Cold beer dripping from your fingertips
Cherry red smile and a midnight kiss
Slow song playing while you move real close
Girl you hit me harder than the Tennessee cold
Here we go getting Friday again
Little bit lost and falling fast again
Your boots tap time while the headlights roll
Running full speed with nowhere to go
Every weekend feels the same with you
One more night turns into déjà vu
Here we go getting Friday again
One more fire we can’t put out again
Moonlight shining on your skin tonight
Girl you make the dark feel alive`,

  "Midnight Motion": `Blue lights shining on your golden hair
Cold night moving like we disappeared
Your hand sliding slow across my skin
Every second pulling me back in
Midnight motion, moving close to you
Heartbeat racing every time you move
One more touch and the room turns gold
Burning alive in the midnight glow
Your black boots tapping by the passenger side
City lights dancing in your blue eyes
Lipstick kiss with the windows down
Lost together while the world spins round
Midnight motion, holding onto me
Slow fire burning underneath the seat
One more song and we lose control
Running wild in the midnight glow
Your name hits like a summer storm
Every night keeps pulling me on
Midnight motion, stay here tonight
Moonlight falling in your silver eyes
One more chance before the sky unfolds
Forever starts in the midnight glow`,

  "Cold Smoke": `Long week gone and the sun dipped low
Tail lights dancing on the edge of town roads
That blue flame buzz from the dashboard glow
Everybody chasing what they can’t hold
Cold smoke hanging under white lights
Red dirt spinning on a Friday night
Hearts beat heavy when the bass hits low
Whole town moving in the cold smoke glow
Cheap cologne and a flannel sleeve
Her blue eyes burning back at me
Windshield fog with the heat turned high
Kissing like we got one night alive
Cold smoke hanging under white lights
Blue jean shadows moving all night
Boots hit hard when the kick drum rolls
Small-town living in the cold smoke glow
First frost falling on the hood tonight
Still chasing that feeling underneath these lights
Cold smoke hanging under white lights
One more memory burning all night
Hands up high while the speakers blow
We come alive in the cold smoke glow`,

  "Blue Flame": `Blue lights shining on the hood tonight
Cold wind moving through the dashboard light
Your boots up high while the tires roll slow
Whole world fading past the window glow
Blue flame burning in the midnight dark
Two hearts running like a stolen spark
Hands locked tight while the backroads roll
Little bit reckless, little outta control
Gas station coffee and your flannel sleeve
Red lips laughing in the passenger seat
FM static and a county road sign
Kissing like forever was a real thing tonight
Blue flame burning underneath these lights
Cold air falling while the stars ignite
One more dance while the speakers blow
Living wide awake in the blue flame glow
Some nights stay with you after they’re gone
Like your favorite line in an old country song
Blue flame burning in the midnight haze
Still feel your touch in the heat it made
One more mile before the night moves on
Blue flame living long after it’s gone`,

  "When The Lights Go Gold": `Cold night falling on the boulevard
Blue lights shining off your parked car
Your hand wrapped slow around my sleeve
Like you already knew you’d never leave
When the lights go gold tonight
Everything feels so alive
One more kiss in the neon glow
Holding onto what we can’t let go
Lipstick stain on the coffee cup
Dashboard dreams while the sun comes up
Every mile pulling me closer still
Every touch giving me that thrill
When the lights go gold again
Your blue eyes pull me back in
One more dance while the city slows
Burning alive in the afterglow
Every road led me back to you
Like midnight skies always find the moon
When the lights go gold tonight
Two hearts burning in the satellite sky
One last memory before the night unfolds
Forever starts when the lights go gold`,

  "Kiss Me Like That": `Your red lips hit like Tennessee fire
Blue jean heartbeat taking me higher
Slow hands sliding underneath my coat
Girl you got me hanging on every word you spoke
Kiss me like that and the world slows down
Moonlight spinning when you come around
One more touch and I lose control
You got your name written on my soul
Cold night air and your perfume smoke
One look from you and I’m coming undone
Dashboard glow in your blue eyes shine
Got me falling hard every single time
Kiss me like that with your hand in mine
Late night burning like a neon sign
One more move and I’m gone again
Girl you pull me in like the wind
Every little thing about you feels right
Like a slow song burning all night
Kiss me like that and don’t let go
Midnight moving soft and slow
One more chance before the morning light
Love me like this all night tonight`,

  "Midnight Static": `Snow clouds hanging over exit signs
Your silhouette in the dashboard light
FM buzzing through the midnight air
That old song hit like you were still there
Midnight static running through my veins
Cold white lines and a little heartbreak
Your name echo through the speakers low
Like a ghost riding shotgun through the snow
Truck stop coffee and the heater glow
Counting mile markers through the falling snow
Your leather jacket still across the seat
Every mile makes you harder to leave
Midnight static underneath the stars
Broken signals and beat-up hearts
Cold smoke drifting while the highway rolls
Trying not to let your memory go
Some songs stay long after the night ends
Turning old flames into old regrets
Midnight static filling up the dark
Still hear your voice underneath the sparks
One more turn before the morning breaks
Still lost inside that midnight static haze`,

  "White Line Weather": `Snowfall drifting past the county signs
Cold black river and the power lines
Heater running while your hand held mine
White line weather on a Friday night
White line weather and your blue jean eyes
Cold wind blowing while the sparks still fly
One more mile till the sunrise glows
Running wild through the falling snow
Truck stop coffee and a faded map
Your red lipstick on my cigarette pack
FM buzzing with a slow heartbreak
Two hearts burning on an interstate
White line weather underneath these lights
Small-town dreams running all night
Cold smoke hanging while the tires roll
Trying not to let this moment go
Some roads change but the feeling stays
Like your shadow in the dashboard haze
White line weather and a midnight sky
Still chasing sparks in your blue flame eyes
One more turn before the morning breaks
Living fast through the white line haze`,

  "Too Close To Midnight": `Black boots stepping through the neon light
Blue eyes shining in the Friday night
Cherry lips leaning close to mine
Slow burn moving through my mind
Too close to midnight, too close to you
One more drink and I’m coming unglued
Your touch hits like Tennessee gold
Heartbeats racing while the night rolls slow
Cold air drifting through the Chevrolet
Your red lipstick got me wide awake
Dashboard glow on your perfect smile
Girl you make losing worth the while
Too close to midnight, too close to fire
Your kiss pulling me higher and higher
One more song and I lose control
Burning alive in the midnight glow
Every move got me falling fast
Like this night was built to last
Too close to midnight, too close to gone
Still chasing you when the lights come on
One more touch and I lose my mind
Girl you got me every time`,

  "What We Were": `Phone lights glowing on the kitchen floor
Your blue dress hanging by the bedroom door
Last night’s whiskey still on my breath
You moved on but I ain’t there yet
What we were still runs through my mind
Like a slow burn I can’t leave behind
Every little memory hits that spark
Still see your shadow in the dark
Cold air drifting through the Chevrolet
Your name sitting on my old playlist
Half these nights still feel the same
Every song still says your name
What we were still feels so real
Like your hand still holding the wheel
Late night driving with nowhere to go
Still getting lost in what we were before
Some things fade and some things stay
You still hit me like yesterday
What we were still burns like gold
Even now when the nights get cold
One last memory I can’t outrun
Still chasing shadows of what we were`,

  "Stay Till Sunday": `You walked in wearing downtown black
Blue jean eyes and a backwards cap
Slow bass line and a neon glow
You pulled me close and moved real slow
Stay till Sunday, don’t say goodbye
Moonlight falling in your blue eyes
One more kiss before the night is gone
Hold me close till the morning comes
Cold air drifting through the parking lot
Your hand in mine still burning hot
Dashboard lights on an empty road
Two hearts racing with nowhere to go
Stay till Sunday, don’t let go
Midnight moving real soft and slow
One more touch underneath these lights
Stay right here with me tonight
Your red lips and that midnight smile
Got me lost for a little while
Stay till Sunday, stay all night
Nothing else ever feels this right
One more song before the sky turns gold
Stay with me till the night gets old`,

  "One More Summer": `Your blue eyes shining in the dashboard light
Cold air moving through the Friday night
Red lips leaning close against my face
Every heartbeat speeding up the pace
One more summer in your arms tonight
One more memory burning bright
One more kiss before the night moves on
Holding onto what we almost lost
Silver moon hanging over county roads
Your hand tracing circles on my coat
FM playing songs we used to know
Two hearts drifting slow through the glow
One more summer underneath these stars
One more second right here where we are
One more touch before the morning light
Loving you like it’s July tonight
Every time your shadow crosses mine
Feels like summer frozen in time
One more summer before the sky turns gold
One more fire burning through the cold
One last dance before the night is gone
Holding onto you till the dawn`
};
