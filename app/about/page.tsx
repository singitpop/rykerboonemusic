import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalArtistProfile from "@/components/DigitalArtistProfile";
import QuadMontagePoster from "@/components/QuadMontagePoster";

export default function ArtistLibrary() {
  const posters = [
    { src: "/images/ryker-quotes-poster.jpg", title: "Quotes & Philosophy", year: "2026" },
    { src: "/images/boots-promo-full.jpg", title: "Boots in the Autumn Dust Promo", year: "2026" }
  ];

  const gallery = [
    { src: "/images/ryker-grit-performance.jpg", title: "The Sound of Grit", category: "Performance" },
    { src: "/images/nashville-nights-live.jpg", title: "Nashville Nights", category: "Performance" },
    { src: "/images/heartland-roots-final.jpg", title: "Heartland Roots", category: "Lifestyle" },
    { src: "/images/family-porch-quiet.jpg", title: "The Quiet Moments", category: "Home" },
    { src: "/images/family-sunday-picnic.jpg", title: "Family Sunday", category: "Personal" },
    { src: "/images/ryker-son-horse.jpg", title: "Ryker & Son", category: "Personal" }
  ];

  const albums = [
    { src: "/images/boots-cover-v3.jpg", title: "Boots in the Autumn Dust" },
    { src: "/images/september-cover-v2.jpg", title: "September Turns Gold" }
  ];

  return (
    <main style={{ background: '#050505', color: '#f5f0e1', minHeight: '100vh' }}>
      <Navbar />
      
      {/* 1. HERO HEADER */}
      <section style={{ 
        padding: '12rem 2rem 6rem', 
        textAlign: 'center', 
        background: 'linear-gradient(to bottom, #0a0a0a, #050505)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ color: 'var(--accent-gold)', letterSpacing: '0.8em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', marginBottom: '1.5rem' }}>Digital Press Archive</span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: '900', letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: '0.9', margin: 0 }}>
            THE ARTIST <br />
            <span style={{ color: 'var(--accent-gold)' }}>LIBRARY</span>
          </h1>
          <p style={{ marginTop: '2rem', color: 'rgba(245, 240, 225, 0.5)', maxWidth: '600px', margin: '2rem auto 0', lineHeight: '1.6' }}>
            A curated collection of official photography, press assets, and personal moments. Forged in Nashville, shared with the world.
          </p>
        </div>
      </section>

      {/* 2. OFFICIAL COLLECTIONS (THE MAIN CONTENT) */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* HD SHARP COMPONENT FOR MAIN PROFILE */}
          <DigitalArtistProfile />

          {/* SECONDARY POSTERS */}
          {posters.map((poster, i) => (
            <div key={i}>
              <div style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.4s ease'
              }}>
                <img src={poster.src} alt={poster.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{poster.title}</span>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 'bold' }}>{poster.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LIFESTYLE MASONRY GRID */}
      <section style={{ padding: '8rem 2rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>The Nashville Sessions</h2>
            <p style={{ fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Life Behind the Lens</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {gallery.map((img, i) => (
              <div key={i}>
                <div style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  aspectRatio: '1',
                  background: '#151515',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                  />
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{img.category}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DISCOGRAPHY ART */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Discography</h2>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {albums.map((album, i) => (
              <div key={i} style={{ width: '400px' }}>
                <div style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <img src={album.src} alt={album.title} style={{ width: '100%', height: 'auto' }} />
                </div>
                <p style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Professional Assets</h3>
          <p style={{ color: 'rgba(245, 240, 225, 0.5)', marginBottom: '2rem' }}>Looking for high-resolution press photos or official logos for media use?</p>
          <button style={{
            background: 'var(--accent-gold)',
            color: 'black',
            padding: '1rem 2.5rem',
            fontWeight: '900',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
            Contact Media Relations
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
