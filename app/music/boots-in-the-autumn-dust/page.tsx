"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BootsAlbumPage() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [selectedTrackLyrics, setSelectedTrackLyrics] = useState<{ title: string; lyrics: string } | null>(null);

  const handleTrackClick = (track: { id: string; title: string; duration: string; badge?: string }) => {
    const lyrics = lyricsData[track.title] || "Lyrics not found.";
    setSelectedTrackLyrics({ title: track.title, lyrics });
  };

  const tracks = [
    { id: "01", title: "Honky Tonk Sundown", duration: "3:42", badge: "SINGLE" },
    { id: "02", title: "August Heatwave", duration: "4:05" },
    { id: "03", title: "Barefoot on the Backroad", duration: "3:18" },
    { id: "04", title: "Neon Barn Nights", duration: "3:55" },
    { id: "05", title: "Sweet Tea and Blue Jeans", duration: "3:29" },
    { id: "06", title: "Dust Kicking Rhythm", duration: "3:12", badge: "SINGLE" },
    { id: "07", title: "Sunburnt Memories", duration: "4:21", badge: "SINGLE" },
    { id: "08", title: "Tailgate Turn Up", duration: "3:34" },
    { id: "09", title: "Riverbank Two Step", duration: "2:58" },
    { id: "10", title: "Fireflies and Front Porches", duration: "3:50" },
    { id: "11", title: "Whiskey Weather", duration: "4:12" },
    { id: "12", title: "Last Dance in the Dirt", duration: "4:45" }
  ];

  const singles = [
    {
      title: "Honky Tonk Sundown",
      image: "/images/Honky Tonk Sundown - single.jpg",
      tagline: "Lead Single",
      description: "A high-energy honky-tonk anthem featuring Ryker's signature grit and classic twin fiddle hooks."
    },
    {
      title: "Dust Kicking Rhythm",
      image: "/images/dust kicking rhythm - single.jpg",
      tagline: "Second Single",
      description: "Driving percussion and a dirty telecaster riff that keeps the boots moving and dust flying."
    },
    {
      title: "Sunburnt Memories",
      image: "/images/sunburnt memories - single.jpg",
      tagline: "Summer Single",
      description: "A nostalgic, acoustic-led mid-tempo track looking back at summer nights on the Duck River."
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
              src="/images/boots in the autumn dust - album.jpg" 
              alt="Boots in the Autumn Dust Cover" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
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
              Official Studio Album
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 'bold', 
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              BOOTS IN THE <span style={{ color: 'var(--accent-gold)' }}>AUTUMN DUST</span>
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
              <div>RELEASED: <strong style={{ color: 'white' }}>JUNE 2026</strong></div>
              <div>LABEL: <strong style={{ color: 'white' }}><a href="https://www.singitpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>SINGIT POP</a></strong></div>
              <div>FORMATS: <strong style={{ color: 'white' }}>VINYL, CD, DIGITAL</strong></div>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              fontSize: '0.95rem',
              marginBottom: '2.5rem'
            }}>
              Deep, authentic Nashville soul rooted in blue-collar pride and lost love. Recorded at the historic Blackbird Studio in Nashville, this album captures the true essence of heartland country storytelling. With raw guitar licks, soaring steel guitar, and Ryker's warm whiskey baritone, it chronicles the struggles and triumphs of working-class American life.
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
                LISTEN ON SPOTIFY
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
                APPLE MUSIC
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
              BOOTS IN THE AUTUMN DUST
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
  "Honky Tonk Sundown": `Sun dips low on a neon sign
Boots hit wood right on time
Dust off the day, step inside
That rhythm pulls you to the line
Honky tonk sundown, lights go gold
Two-step rhythm, smooth and bold
Slide and turn, let it roll
Feel that groove down in your soul
Hat tipped low, hands swing wide
Boot to boot in a side by slide
Every move locked in tight
We don’t miss when the beat feels right
Honky tonk sundown, feel that sway
Heels and toes in a clean two step way
Round and back, don’t slow down
We move steady through sundown
Break it down, just move in time
Watch it flow in a steady line
Hold that beat, take it slow
Let the rhythm guide the flow
Honky tonk sundown, lights go gold
Two step rhythm, smooth and bold
Slide and turn, let it roll
Feel that groove down in your soul`,

  "August Heatwave": `Sun beating down on a gravel road
Dust in the air where the wild wind blows
Radio loud from a tailgate truck
Whole town rolling in, fired up
August heatwave, feel it rise
Boots hit steady under open skies
Stomp that beat, keep in time
We go all night till morning light
Sun goes down but the heat stays on
Neon lights start coming on
Everybody moving in a straight-line groove
Step to the left, now slide right through
August heatwave, feel that sound
Heartbeat steady with the ground
Turn it up, let the moment take
We come alive in the heatwave
Slow it down, feel the air
Every step brings us there
Hold that beat, don’t let go
Let it move, let it flow
August heatwave, feel it rise
Boots hit steady under open skies
Stomp that beat, keep in time
We go all night till morning light`,

  "Barefoot on the Backroad": `Barefoot running down a dirt road lane
Warm night air with a hint of rain
Radio playing that summer sound
No destination, just driving around
Barefoot on the backroad tonight
Step real easy, feel just right
Side to side in a slow groove flow
Let that rhythm take control
Fireflies lighting up the trees
Cool wind blowing through the breeze
Every move got a laid-back sway
We just ride that rhythm wave
Barefoot on the backroad tonight
Hands swing loose in the fading light
Slide real smooth, don’t rush the beat
Let it roll through your feet
Slow it down, feel the ground
Every step got a softer sound
Hold that vibe, don’t let go
Let it drift, let it flow
Barefoot on the backroad tonight
Step real easy, feel just right
Side to side in a slow groove flow
Let that rhythm take control`,

  "Neon Barn Nights": `Neon lights on a wooden wall
Boots hit hard when the night time calls
Dust kicks up as the beat rolls low
Every step in a steady flow
Neon barn nights, light it up
Stomp in time, keep it locked
Clap that beat, feel that drive
We move strong, we come alive
String lights glow on a worn wood floor
Every step hits more and more
Turn it quick, then slide in line
Everything locked into time
Neon barn nights, feel that heat
Boots strike steady with every beat
Turn and step, don’t slow down
We hold rhythm through this town
Break it down, just kick and step
Hold that groove with no regret
When it lifts, we move it clean
Every step sharp and seen
Neon barn nights, light it up
Stomp in time, keep it locked
Clap that beat, feel that drive
We move strong, we come alive`,

  "Sweet Tea and Blue Jeans": `Sweet tea cold in a simple cup
Blue jeans worn but they fit just right
Boots move easy on a wooden floor
That rhythm keeps pulling for more
Sweet tea and blue jeans tonight
Two step smooth under soft light
Clap in time, let it flow
Feel that rhythm nice and slow
Easy steps as we turn around
Every move fits the sound
Nothing rushed, just take your time
Let it fall into the line
Sweet tea and blue jeans tonight
Feel that groove, keep it light
Step and slide, stay in time
Let it move through every line
Hold it close, don’t let it break
Every move you gently make
When it lifts, we follow through
Let the rhythm carry you
Sweet tea and blue jeans tonight
Two step smooth under soft light
Clap in time, let it flow
Feel that rhythm nice and slow`,

  "Dust Kicking Rhythm": `Boots hit down on a dirt packed line
Dust lifts up every step in time
Kick and step, let the rhythm land
Feel that weight when you hit the ground
Dust kicking rhythm, strong and low
Steady beat that you can follow
Step in time, let it ride
Feel that motion side to side
Turn it slow, then bring it back
Every step stays on the track
Hands stay loose, body flows
Let that steady rhythm go
Dust kicking rhythm, hold that pace
Feel it move in every space
Step and turn, stay in line
Keep it locked into the time
Break it down, just move and breathe
Let it settle underneath
When it lifts, we rise again
Right back into the line again
Dust kicking rhythm, strong and low
Steady beat that you can follow
Step in time, let it ride
Feel that motion side to side`,

  "Sunburnt Memories": `Sunburnt skin and a fading tan
Long days gone but I still can
Hear that rhythm in the air
Like those nights still waiting there
Sunburnt memories, hold on tight
Moving slow in the fading light
Clap in time, let it stay
We don’t let it fade away
Old dirt roads and a quiet song
Feels like we been here all along
Every step holds something new
Every moment coming through
Sunburnt memories, feel that sound
Every step brings it back around
Step and sway, don’t let go
Keep that rhythm moving slow
Take it in, don’t rush the night
Hold that moment, hold it tight
When it lifts, we stay in line
Moving with that steady time
Sunburnt memories, hold on tight
Moving slow in the fading light
Clap in time, let it stay
We don’t let it fade away`,

  "Tailgate Turn Up": `Truck lights glow in the evening air
Bass rolls low, steady and clear
Boots hit gravel right on time
Feel that rhythm lock in line
Tailgate turn up, feel that drive
Steady beat keeps it alive
Step in time, keep it smooth
Lock it in with that groove
Simple moves but they feel right
Every step fits the night
Turn it out, bring it back
Everything stays on track
Tailgate turn up, hold that pace
Feel it move through the space
Clap in time, keep it tight
Let it carry through the night
Break it down, keep it clean
Every move sharp and seen
When it lifts, ride the flow
Keep it tight, don’t lose control
Tailgate turn up, feel that drive
Steady beat keeps it alive
Step in time, keep it smooth
Lock it in with that groove`,

  "Riverbank Two Step": `Down by the water where the cool wind blows
Boots move easy in a steady flow
Moonlight falling on a slow back beat
Feel that rhythm under your feet
Riverbank two step, nice and slow
Slide that line, let it flow
Clap in time, feel that sway
We ride that groove till break of day
Step in close, then ease back out
Turn it smooth, no rush about
Every move falls into place
Easy rhythm, steady pace
Riverbank two step, feel that glide
Side to side in a smooth ride
Clap in time, keep it low
Let that rhythm guide the flow
Hold that line, don’t break away
Let it move in a natural way
When it lifts, we stay in time
Locked into that steady line
Riverbank two step, nice and slow
Slide that line, let it flow
Clap in time, feel that sway
We ride that groove till break of day`,

  "Fireflies and Front Porches": `Fireflies glow in the midnight air
Old wood creaks from a rocking chair
Boots tap steady on a worn-out floor
That rhythm pulls you in once more
Fireflies and front porches move
Shuffle step in a steady groove
Clap in time, keep it tight
We stay in motion through the night
Step and turn with an easy feel
Every move stays smooth and real
Cool night breeze but the beat stays strong
Keeps you moving right along
Fireflies and front porches flow
Pick it up, don’t take it slow
Clap in time, lock it in
Let that rhythm pull you in
Hold that step, keep control
Let it ride but keep it whole
When it lifts, we stay aligned
Every step right on time
Fireflies and front porches move
Shuffle step in a steady groove
Clap in time, keep it tight
We stay in motion through the night`,

  "Whiskey Weather": `Whiskey glass in a quiet hand
Late night drifting like we planned
Neon fading in the dark
Just you and me and a lonely spark
Whiskey weather, slow and low
No need to rush, just let it go
Hold me close, don’t say a word
In this silence, we are heard
Summer nights turning into fall
Echoes fading down the hall
Every moment lingers on
Like a memory not quite gone
Whiskey weather, take your time
Let it settle in your mind
No loud lights, no crowded room
Just us here in the quiet bloom
Stay right here, don’t move away
Let this feeling gently stay
When it’s gone, we’ll still know
What we felt in this slow glow
Whiskey weather, slow and low
No need to rush, just let it go
Hold me close, don’t say a word
In this silence, we are heard`,

  "Last Dance in the Dirt": `Night winds down but the beat stays on
Fading lights but we’re not gone
Boots still moving in the dust
Holding onto what we trust
Last dance in the dirt tonight
Step in close, hold it right
Clap in time, feel that ground
One more turn before it winds down
Every step got a story now
Every move shows us how
All the nights led to this
One more moment we won’t miss
Last dance in the dirt, stay near
Feel it all while it’s still here
Step and turn, don’t let go
Let that final rhythm flow
Slow it down, then bring it back
Every step still on the track
When it lifts, we rise again
Like we did back then
Last dance in the dirt tonight
Step in close, hold it right
Clap in time, feel that ground
One more turn before it winds down`
};
