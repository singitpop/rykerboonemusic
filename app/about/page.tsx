import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalArtistProfile from "@/components/DigitalArtistProfile";

export default function ArtistLibrary() {
  const backstoryImages = [
    {
      src: "/images/ryker_as_boy.png",
      title: "Heartland Roots",
      desc: "Young Ryker practicing on a small acoustic guitar in Columbia, Tennessee."
    },
    {
      src: "/images/ryker_writing_lyrics.png",
      title: "Cabin Sessions",
      desc: "Writing early song lyrics at a rustic wooden table by natural window light."
    },
    {
      src: "/images/ryker_playing_bar.png",
      title: "Local Stage Days",
      desc: "Honing his voice in intimate country bars around Nashville."
    },
    {
      src: "/images/ryker_joyce_bettie_porch.png",
      title: "Wife Joyce & Bettie",
      desc: "Quiet twilight moments on the cabin porch with Joyce and their dog Bettie."
    },
    {
      src: "/images/ryker_family_quiet_time.png",
      title: "Cabin Quiet Time",
      desc: "Unwinding together in the family log cabin living room."
    },
    {
      src: "/images/ryker_riding_poppy.png",
      title: "Riding Poppy",
      desc: "Ryker and his son Graham riding their chestnut horse Poppy."
    },
    {
      src: "/images/family_ranch_garden.png",
      title: "Harvesting the Garden",
      desc: "Ryker, Joyce, and Graham picking fresh vegetables on their ranch."
    },
    {
      src: "/images/family_ranch_picnic.png",
      title: "Family Sunday Picnic",
      desc: "Relaxing under a giant oak tree in the open ranch fields."
    },
    {
      src: "/images/family_fishing_grandpas_lake.png",
      title: "Sunset Fishing",
      desc: "Sitting on the wooden dock fishing at Grandpa's lake."
    },
    {
      src: "/images/tailgate_singing.png",
      title: "Tailgate Songs",
      desc: "Singing acoustic favorites from the open tailgate of the vintage truck."
    },
    {
      src: "/images/ryker_singing_grit.png",
      title: "Live With Grit",
      desc: "Performing with raw emotion and power under the festival spotlights."
    },
    {
      src: "/images/ryker_on_the_road_hat.png",
      title: "The Open Road",
      desc: "Heading to the next show with Bettie and his signature guitar case."
    }
  ];

  const merchImages = [
    {
      src: "/images/batch2_ryker_leather_jacket_1779118415106.png",
      model: "Ryker Boone",
      product: "Signature Leather Jacket"
    },
    {
      src: "/images/batch2_ryker_stage_tshirt_1779118354686.png",
      model: "Ryker Boone",
      product: "Gold Logo Stage Tee"
    },
    {
      src: "/images/batch2_joyce_tote_coffee_1779118374787.png",
      model: "Joyce Boone",
      product: "Canvas Logo Tote Bag"
    },
    {
      src: "/images/batch2_joyce_beanie_winter_1779118458699.png",
      model: "Joyce Boone",
      product: "Winter Knitted Beanie"
    },
    {
      src: "/images/desktop_batch1_graham_cap_1779116175883.png",
      model: "Graham Boone",
      product: "Gold Logo Youth Cap"
    },
    {
      src: "/images/batch2_graham_dog_bandana_1779118396108.png",
      model: "Graham & Bettie",
      product: "Gold Interlocking Bandana"
    },
    {
      src: "/images/batch2_family_guitar_case_1779116194704.png",
      model: "The Boone Family",
      product: "Premium Leather Travel Bag"
    },
    {
      src: "/images/batch2_family_camp_chairs_1779118437525.png",
      model: "The Boone Family",
      product: "Signature Canvas Camp Chairs"
    }
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
        padding: '12rem 2rem 5rem', 
        textAlign: 'center', 
        background: 'linear-gradient(to bottom, #0a0a0a, #050505)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ color: 'var(--accent-gold)', letterSpacing: '0.8em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', marginBottom: '1.5rem' }}>Digital Documentary</span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '900', letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: '0.95', margin: 0 }}>
            THE BOONE <br />
            <span style={{ color: 'var(--accent-gold)' }}>CHRONICLES</span>
          </h1>
          <p style={{ marginTop: '2rem', color: 'rgba(245, 240, 225, 0.6)', maxWidth: '650px', margin: '2rem auto 0', lineHeight: '1.7', fontSize: '1rem' }}>
            Explore the authentic, visual journey of Ryker Boone's life—from Columbia, Tennessee roots to Nashville stages, family ranch days, and life on the road.
          </p>
        </div>
      </section>

      {/* 2. MAIN ARTIST PROFILE FACTS */}
      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <DigitalArtistProfile />
        </div>
      </section>

      {/* 3. VISUAL LIFE CHAPTERS (Q1: IMAGE FIRST NARRATIVE) */}
      <section style={{ padding: '8rem 2rem', background: '#080808', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>A Life in Pictures</h2>
            <p style={{ fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>The Storytelling Archive</p>
            <div style={{ width: '60px', height: '2px', background: 'var(--accent-gold)', margin: '1.5rem auto 0' }}></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
            gap: '3rem 2.5rem' 
          }}>
            {backstoryImages.map((img, i) => (
              <div key={i}>
                <div style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  aspectRatio: '1',
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                  position: 'relative'
                }}>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    background: 'rgba(5, 5, 5, 0.85)',
                    padding: '0.4rem 1rem',
                    borderRadius: '30px',
                    border: '1px solid rgba(226, 179, 90, 0.3)',
                    color: 'var(--accent-gold)',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    {`Chapter 0${i + 1}`}
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#f5f0e1', margin: '0 0 0.5rem' }}>{img.title}</h3>
                  <p style={{ color: 'rgba(245, 240, 225, 0.65)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAMILY MERCH SHOWCASE (Q2: NO STORE CTAs) */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>Official Gear Lookbook</h2>
            <p style={{ fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>The Family Collection</p>
            <div style={{ width: '60px', height: '2px', background: 'var(--accent-gold)', margin: '1.5rem auto 0' }}></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {merchImages.map((img, i) => (
              <div key={i}>
                <div style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  aspectRatio: '1',
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.5)'
                }}>
                  <img 
                    src={img.src} 
                    alt={`${img.model} wearing ${img.product}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>{img.model}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#f5f0e1' }}>{img.product}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DISCOGRAPHY ART */}
      <section style={{ padding: '6rem 2rem 8rem', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Official Discography</h2>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap' }}>
            {albums.map((album, i) => (
              <div key={i} style={{ width: '380px' }}>
                <div style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  aspectRatio: '1',
                  background: '#121212'
                }}>
                  <img src={album.src} alt={album.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ marginTop: '1.75rem', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOWNLOAD CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.03)', background: '#080808' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>Professional Press Kits</h3>
          <p style={{ color: 'rgba(245, 240, 225, 0.55)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: '1.6' }}>For booking, promotional materials, or high-resolution official assets, please reach out to our representatives.</p>
          <button style={{
            background: 'var(--accent-gold)',
            color: 'black',
            padding: '1.1rem 2.8rem',
            fontWeight: '900',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(226, 179, 90, 0.15)'
          }}>
            Contact Media Relations
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
