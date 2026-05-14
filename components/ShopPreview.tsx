"use client";

import Image from "next/image";

const products = [
  {
    name: "Boots in the Autumn Dust: Collector's Vinyl",
    price: "£29.99",
    image: "/images/boots-cover-v3.jpg",
    category: "VINYL"
  },
  {
    name: "Nashville Sessions: Official Digital Artbook",
    price: "£14.99",
    image: "/images/artist-fence.png",
    category: "DIGITAL"
  },
  {
    name: "The Story: Signature Collection Tee",
    price: "£24.99",
    image: "/images/ryker-profile-hero-final.jpg",
    category: "APPAREL"
  }
];

export default function ShopPreview() {
  return (
    <section id="shop" style={{ padding: '10rem 8%', background: '#0a0a0a' }}>
      <div style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <span className="subtitle">Official Collection</span>
          <h2 className="section-title">THE ARTIST <br /> <span style={{ color: 'var(--accent-gold)' }}>LIBRARY</span></h2>
        </div>
        <button style={{
          border: '1px solid rgba(226, 179, 90, 0.3)',
          color: 'var(--accent-gold)',
          padding: '0.8rem 2rem',
          fontSize: '0.7rem',
          fontWeight: '900',
          letterSpacing: '0.2em',
          transition: 'all 0.3s ease'
        }}>
          VIEW ALL PRODUCTS
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {products.map((product, i) => (
          <div key={i} className="product-card" style={{ 
            background: 'rgba(255,255,255,0.01)', 
            border: '1px solid rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '1.5rem',
            transition: 'transform 0.4s ease'
          }}>
            <div style={{ 
              position: 'relative', 
              aspectRatio: '1', 
              borderRadius: '8px', 
              overflow: 'hidden',
              marginBottom: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                left: '1rem', 
                background: 'rgba(10,10,10,0.8)', 
                padding: '0.3rem 0.6rem', 
                fontSize: '0.55rem', 
                fontWeight: '900', 
                letterSpacing: '0.1em',
                color: 'var(--accent-gold)',
                borderRadius: '2px'
              }}>
                {product.category}
              </div>
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>{product.name}</h3>
            <div style={{ color: 'var(--accent-gold)', fontWeight: '900', fontSize: '0.9rem' }}>{product.price}</div>
            
            <button style={{
              width: '100%',
              marginTop: '1.5rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              padding: '0.8rem',
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              transition: 'all 0.3s ease'
            }}>
              ADD TO BAG
            </button>
          </div>
        ))}
      </div>
      
      {/* Featured Callout */}
      <div style={{ 
        marginTop: '8rem', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        padding: '5rem',
        background: 'rgba(226, 179, 90, 0.02)',
        borderRadius: '24px',
        border: '1px solid rgba(226, 179, 90, 0.05)'
      }}>
        <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
           <Image src="/images/boots-promo-full.jpg" alt="Artbook Preview" fill style={{ objectFit: 'cover' }} />
        </div>
        <div>
           <span className="subtitle">Coming August 2026</span>
           <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
             Southern Steel: <br /> The Limited Edition
           </h3>
           <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
             The definitive collection. Includes high-fidelity vinyl, signed art prints, and exclusive digital commentary from the Nashville sessions.
           </p>
           <button className="btn-primary">PRE-ORDER NOW</button>
        </div>
      </div>
    </section>
  );
}
