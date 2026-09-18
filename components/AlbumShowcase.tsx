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
    description: "Modern country storytelling rooted in blue-collar pride, open roads, love and loss.",
    link: "/music/boots-in-the-autumn-dust",
    releaseDate: "2026-06-03T00:00:00"
  },
  {
    title: "Golden Hour State of Mind",
    tagline: "Official Studio Album",
    image: "/images/golden hour state of mind - album.png",
    description: "A sunset-drenched collection of country-pop stories, celebrating life, love, and the good times.",
    link: "/music/golden-hour-state-of-mind",
    releaseDate: "2026-07-28T00:00:00"
  },
  {
    title: "September Turns Gold",
    tagline: "The Barn & Festival Sessions",
    image: "/images/september turns gold - album.png",
    description: "A cinematic journey through heartland storytelling and modern country grit.",
    link: "/music/september-turns-gold",
    releaseDate: "2026-08-07T00:00:00"
  },
  {
    title: "September Roads",
    tagline: "Official Studio Album",
    image: "/images/september roads - album v2.jpg",
    description: "A sunset-drenched heartland country album driven by stories of open roads, county lines, and small-town autumn nights.",
    link: "/music/september-roads",
    releaseDate: "2026-09-04T00:00:00"
  },
  {
    title: "When The Lights Go Gold",
    tagline: "Modern Country Pop",
    image: "/images/when the lights go gold - album.png",
    description: "A cinematic modern country pop album built for cold-night drives and neon reflections.",
    link: "/music/when-the-lights-go-gold",
    releaseDate: "2026-10-02T00:00:00"
  },
  {
    title: "Christmas All Year Long",
    tagline: "Country Holiday Collection",
    image: "/images/christmas-all-year-long-album.jpg",
    description: "A heartwarming collection of country holiday songs, blending festive steel strings, acoustic warmth, and cozy cabin stories.",
    link: "/music/christmas-all-year-long",
    releaseDate: "2026-11-27T00:00:00"
  },
  {
    title: "The Way You Love Me",
    tagline: "Official Studio Album",
    image: "/images/the-way-you-love-me-album.jpg",
    description: "A soulful, heartfelt country-pop album exploring deep personal growth, family values, and the power of love.",
    link: "/music/the-way-you-love-me",
    releaseDate: "2027-01-22T00:00:00"
  },
  {
    title: "Our Love Our Forever",
    tagline: "Country Wedding Edition",
    image: "/images/our-love-our-forever-album.jpg",
    description: "A high-energy, modern Nashville pop-country wedding album driven by polished 130 BPM country-pop production, upbeat rhythms, and celebratory wedding energy.",
    link: "/music/our-love-our-forever",
    releaseDate: "2027-02-12T00:00:00"
  },
  {
    title: "Backroads In Bloom",
    tagline: "Spring Americana Journey",
    image: "/images/backroads-in-bloom-album.jpg",
    description: "A fresh spring Americana record celebrating new beginnings, roadside wildflowers, and the open country highways.",
    link: "/music/backroads-in-bloom",
    releaseDate: "2027-03-20T00:00:00"
  },
  {
    title: "April Roads",
    tagline: "Spring Heartland Collection",
    image: "/images/april-roads-album.jpg",
    description: "An evocative spring heartland journey through winding country roads, rolling green hills, and golden sunsets.",
    link: "/music/april-roads",
    releaseDate: "2027-04-02T00:00:00"
  },
  {
    title: "Wide Open Roads",
    tagline: "Official Studio Album",
    image: "/images/wide-open-roads-album.jpg",
    description: "An energetic Nashville country-pop journey built for open highways, old trucks, and clear blue skies.",
    link: "/music/wide-open-roads",
    releaseDate: "2027-04-23T00:00:00"
  },
  {
    title: "Forever Starts",
    tagline: "Official Studio Album",
    image: "/images/forever-starts-album.jpg",
    description: "A landmark country album celebrating new chapters, lifelong devotion, and the dawn of a lasting future together under the summer skies.",
    link: "/music/forever-starts",
    releaseDate: "2027-06-04T00:00:00"
  }
];

const formatReleaseDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default function AlbumShowcase() {
  const now = new Date();
  
  // Sort albums chronologically
  const sortedAlbums = [...albums].sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
  
  // Display all albums in the discography showcase
  const visibleAlbums = sortedAlbums;

  const isAlbumReleased = (album: AlbumItem) => {
    return now >= new Date(album.releaseDate);
  };

  const getBadgeStatus = (album: AlbumItem) => {
    const releaseDate = new Date(album.releaseDate);
    
    if (now >= releaseDate) {
      const released = albums
        .filter(a => new Date(a.releaseDate) <= now)
        .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        
      if (released.length > 0 && released[0].title === album.title) {
        return "LATEST RELEASE";
      }
      return null;
    }
    
    return "COMING SOON";
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
        {visibleAlbums.map((album, index) => {
          const statusBadge = getBadgeStatus(album);
          const released = isAlbumReleased(album);

          const cardContent = (
            <div style={{
              position: 'relative',
              cursor: released ? 'pointer' : 'default'
            }}>
              <div className="reveal-img" style={{ 
                aspectRatio: '1/1', 
                borderRadius: '12px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
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
                  background: 'linear-gradient(to top, rgba(10,10,10,0.5), transparent 40%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} className="hover-overlay">
                  {released ? (
                    <button style={{
                      background: 'var(--accent-gold)',
                      color: 'black',
                      padding: '1rem 2.25rem',
                      fontWeight: '900',
                      letterSpacing: '0.2em',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      border: 'none',
                      borderRadius: '4px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                    }}>
                      VIEW ALBUM
                    </button>
                  ) : (
                    <div style={{
                      background: 'rgba(10, 10, 10, 0.85)',
                      border: '1px solid var(--accent-gold)',
                      color: 'var(--accent-gold)',
                      padding: '0.9rem 2rem',
                      fontWeight: '900',
                      letterSpacing: '0.2em',
                      fontSize: '0.75rem',
                      borderRadius: '4px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                      userSelect: 'none',
                      textTransform: 'uppercase'
                    }}>
                      COMING SOON
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-playfair)', 
                  fontSize: '1.25rem', 
                  color: '#f5f0e1', 
                  margin: 0, 
                  fontWeight: 'bold', 
                  letterSpacing: '0.02em' 
                }}>
                  {album.title}
                </h3>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--accent-gold)', 
                  letterSpacing: '0.12em', 
                  textTransform: 'uppercase', 
                  fontWeight: 'bold' 
                }}>
                  {formatReleaseDate(album.releaseDate)}
                </span>
              </div>
            </div>
          );

          return released ? (
            <Link key={index} href={album.link} style={{ textDecoration: 'none', display: 'block' }}>
              {cardContent}
            </Link>
          ) : (
            <div key={index} style={{ textDecoration: 'none', display: 'block' }}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
