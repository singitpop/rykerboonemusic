"use client";

import Image from "next/image";
import Link from "next/link";

const albums = [
  {
    title: "Boots in the Autumn Dust",
    tagline: "The Full Length Album",
    image: "/images/boots-cover-v3.png",
    description: "Deep, authentic Nashville soul rooted in blue-collar pride and lost love.",
    link: "/music/boots-in-the-autumn-dust"
  },
  {
    title: "September Turns Gold",
    tagline: "The Nashville Studio Sessions",
    image: "/images/september-cover-v2.png",
    description: "A cinematic journey through heartland storytelling and modern country grit.",
    link: "/music/september-turns-gold",
    status: "COMING SOON"
  }
];

export default function AlbumShowcase() {
  return (
    <section id="music" style={{ padding: '10rem 8%', background: '#0a0a0a' }}>
      <div style={{ marginBottom: '6rem' }}>
        <span className="subtitle">Discography</span>
        <h2 className="section-title">THE <span style={{ color: 'var(--accent-gold)' }}>ALBUMS</span></h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
        gap: '4rem' 
      }}>
        {albums.map((album, index) => (
          <Link key={index} href={album.link} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              position: 'relative',
              cursor: 'pointer'
            }}>
              <div className="reveal-img" style={{ 
                aspectRatio: '1/1', 
                borderRadius: '12px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <Image 
                  src={album.image} 
                  alt={album.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                {album.status === 'COMING SOON' && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--accent-gold)',
                    color: 'black',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.65rem',
                    fontWeight: '900',
                    letterSpacing: '0.2em',
                    borderRadius: '4px',
                    zIndex: 10
                  }}>
                    COMING SOON
                  </div>
                )}
                 <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.4), transparent 40%)',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} className="hover-overlay">
                   {album.status !== 'COMING SOON' ? (
                     <button style={{
                        background: 'var(--accent-gold)',
                        color: 'black',
                        padding: '1rem 2rem',
                        fontWeight: '900',
                        letterSpacing: '0.2em',
                        fontSize: '0.7rem',
                        cursor: 'pointer'
                     }}>
                        STREAM NOW
                     </button>
                   ) : (
                     <button style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        padding: '1rem 2rem',
                        fontWeight: '900',
                        letterSpacing: '0.2em',
                        fontSize: '0.7rem',
                        cursor: 'pointer'
                     }}>
                        PREVIEW TRACKS
                     </button>
                   )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
