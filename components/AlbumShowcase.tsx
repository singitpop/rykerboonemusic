"use client";

import Image from "next/image";
import Link from "next/link";

interface AlbumItem {
  title: string;
  tagline: string;
  image: string;
  description: string;
  link: string;
  releaseDate: string;
  status?: string;
}

const albums: AlbumItem[] = [
  {
    title: "Boots in the Autumn Dust",
    tagline: "The Full Length Album",
    image: "/images/boots in the autumn dust - album.jpg",
    description: "Deep, authentic Nashville soul rooted in blue-collar pride and lost love.",
    link: "/music/boots-in-the-autumn-dust",
    releaseDate: "2026-06-01T00:00:00"
  },
  {
    title: "Golden Hour State of Mind",
    tagline: "Official Studio Album",
    image: "/images/golden hour state of mind - album.png",
    description: "A sunset-drenched collection of country-pop stories, celebrating life, love, and the good times.",
    link: "/music/golden-hour-state-of-mind",
    releaseDate: "2026-07-27T00:00:00"
  },
  {
    title: "September Turns Gold",
    tagline: "The Barn & Festival Sessions",
    image: "/images/september turns gold - album.png",
    description: "A cinematic journey through heartland storytelling and modern country grit.",
    link: "/music/september-turns-gold",
    releaseDate: "2026-08-01T00:00:00"
  },
  {
    title: "When The Lights Go Gold",
    tagline: "Modern Country Pop",
    image: "/images/when the lights go gold - album.png",
    description: "A cinematic modern country pop album built for cold-night drives and neon reflections.",
    link: "/music/when-the-lights-go-gold",
    releaseDate: "2026-10-01T00:00:00"
  },
  {
    title: "Christmas All Year Long",
    tagline: "Country Holiday Collection",
    image: "/images/christmas-all-year-long-album.png",
    description: "A heartwarming collection of country holiday songs, blending festive steel strings, acoustic warmth, and cozy cabin stories.",
    link: "/music/christmas-all-year-long",
    releaseDate: "2026-11-27T00:00:00"
  },
  {
    title: "The Way You Love Me",
    tagline: "Official Studio Album",
    image: "/images/the-way-you-love-me-album.png",
    description: "A soulful, heartfelt country-pop album exploring deep personal growth, family values, and the power of love.",
    link: "/music/the-way-you-love-me",
    releaseDate: "2027-01-22T00:00:00"
  },
  {
    title: "Our Love Our Forever – Country Wedding Edition",
    tagline: "Country Wedding Edition",
    image: "/images/our love our forever - album.png",
    description: "A high-energy, modern Nashville pop-country wedding album driven by polished 130 BPM country-pop production, upbeat rhythms, and celebratory wedding energy.",
    link: "/music/our-love-our-forever",
    releaseDate: "2027-02-12T00:00:00"
  },
  {
    title: "Backroads in Bloom",
    tagline: "Spring Americana Journey",
    image: "/images/backroads-in-bloom-album.png",
    description: "A fresh spring Americana record celebrating new beginnings, roadside wildflowers, and the open country highways.",
    link: "/music/backroads-in-bloom",
    releaseDate: "2027-03-20T00:00:00"
  },
  {
    title: "Wide Open Roads",
    tagline: "Official Studio Album",
    image: "/images/wide open roads - album.jpg",
    description: "An energetic Nashville country-pop journey built for open highways and clear blue skies.",
    link: "/music/wide-open-roads",
    releaseDate: "2027-04-23T00:00:00"
  }
];

export default function AlbumShowcase() {
  const getBadgeStatus = (album: typeof albums[0]) => {
    const releaseDate = new Date(album.releaseDate);
    const now = new Date();
    
    if (now >= releaseDate) {
      return null;
    }
    
    if (releaseDate.getMonth() === now.getMonth() && releaseDate.getFullYear() === now.getFullYear()) {
      return "COMING SOON";
    }
    
    if (album.status === "IN THE STUDIO") {
      return "IN THE STUDIO";
    }
    
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = months[releaseDate.getMonth()];
    const day = releaseDate.getDate();
    const year = releaseDate.getFullYear();
    
    if (day === 1) {
      return `COMING ${month} ${year}`;
    }
    return `COMING ${month} ${day} ${year}`;
  };

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
        {albums.map((album, index) => {
          const statusBadge = getBadgeStatus(album);
          return (
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
                  {statusBadge && (
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
                      {statusBadge}
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
                   {!statusBadge ? (
                     <button style={{
                        background: 'var(--accent-gold)',
                        color: 'black',
                        padding: '1rem 2rem',
                        fontWeight: '900',
                        letterSpacing: '0.2em',
                        fontSize: '0.7rem',
                        cursor: 'pointer'
                     }}>
                        VIEW ALBUM
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
                        COMING SOON
                     </button>
                   )}
                </div>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
