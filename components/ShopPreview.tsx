"use client";

import Image from "next/image";
import Link from "next/link";

const lookbookItems = [
  {
    title: "The Gold Record Collection",
    subtitle: "Stage Aesthetics",
    description: "Premium black & gold Stage Hoodies, Sherpa blankets, beanies, and custom accessories.",
    image: "/images/consistent/merch_family_group.png",
    cta: "SHOP GOLD RECORD",
    link: "https://shop.rykerboone.com/collections/the-gold-record-collection"
  },
  {
    title: "The Backroad Collection",
    subtitle: "Rugged Vibe",
    description: "Stealth activewear, sports bras, crop hoodies, beanies, and custom aprons.",
    image: "/images/consistent/merch_workout.png",
    cta: "SHOP ACTIVEWEAR",
    link: "https://shop.rykerboone.com/collections/the-backroad-collection"
  },
  {
    title: "The Honky Tonk Collection",
    subtitle: "Concert Gear",
    description: "Bella+Canvas supersoft t-shirts, tote bags, snapback trucker hats, and classic merch.",
    image: "/images/consistent/merch_joyce_shopping.png",
    cta: "SHOP TEES & TOTES",
    link: "https://shop.rykerboone.com/collections/the-honky-tonk-collection"
  },
  {
    title: "Home & Kitchen",
    subtitle: "Graham's Home Collection",
    description: "Custom rocks glasses, double-sided glossy ceramic mugs, and cozy cabin blankets.",
    image: "/images/consistent/merch_family_cozy.png",
    cta: "SHOP HOME & DECOR",
    link: "https://shop.rykerboone.com/collections/grahams-youth-home-collection"
  },
  {
    title: "Graham's Kids Collection",
    subtitle: "Youth Apparel",
    description: "Bella+Canvas premium youth tees and Gildan heavyweight youth hoodies built child-safe.",
    image: "/images/consistent/merch_graham_playing.png",
    cta: "SHOP KIDS APPAREL",
    link: "https://shop.rykerboone.com/collections/grahams-youth-home-collection"
  }
];

export default function ShopPreview() {
  return (
    <section id="shop" style={{ padding: '8rem 8%', background: '#0a0a0a' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .lookbook-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        .lookbook-grid-secondary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 3rem;
        }
        .lookbook-card {
          position: relative;
          aspect-ratio: 4/5;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(226, 179, 90, 0.05);
          background: #0d0d0d;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          display: block;
        }
        .lookbook-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .lookbook-card:hover .lookbook-image-wrapper {
          transform: scale(1.05);
        }
        .lookbook-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 3rem 2rem 2.5rem;
          background: linear-gradient(to top, rgba(5, 5, 5, 0.95) 0%, rgba(5, 5, 5, 0.5) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 65%;
        }
        .lookbook-tag {
          color: var(--accent-gold);
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .lookbook-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .lookbook-desc {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          max-width: 90%;
        }
        .lookbook-btn {
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          padding: 0.8rem 1.5rem;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          background: transparent;
          transition: all 0.3s ease;
          align-self: flex-start;
          text-transform: uppercase;
        }
        .lookbook-card:hover .lookbook-btn {
          background: var(--accent-gold);
          color: black;
        }
        @media (max-width: 992px) {
          .lookbook-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .lookbook-grid-secondary {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 2rem;
          }
          .lookbook-card {
            aspect-ratio: 1;
          }
          .lookbook-title {
            font-size: 1.5rem;
          }
        }
      `}} />

      <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <span className="subtitle">Official Catalog</span>
          <h2 className="section-title">LIFESTYLE <br /> <span style={{ color: 'var(--accent-gold)' }}>LOOKBOOK</span></h2>
        </div>
        <Link href="https://shop.rykerboone.com" target="_blank" rel="noopener noreferrer">
          <button style={{
            border: '1px solid rgba(226, 179, 90, 0.3)',
            color: 'var(--accent-gold)',
            padding: '0.8rem 2rem',
            fontSize: '0.7rem',
            fontWeight: '900',
            letterSpacing: '0.2em',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-gold)';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent-gold)';
          }}
          >
            VISIT FOURTHWALL STORE →
          </button>
        </Link>
      </div>

      {/* Main Grid: 2 Premium Collections */}
      <div className="lookbook-grid">
        {lookbookItems.slice(0, 2).map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="lookbook-card">
            <div className="lookbook-image-wrapper">
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="lookbook-overlay">
              <span className="lookbook-tag">{item.subtitle}</span>
              <h3 className="lookbook-title">{item.title}</h3>
              <p className="lookbook-desc">{item.description}</p>
              <button className="lookbook-btn">{item.cta}</button>
            </div>
          </a>
        ))}
      </div>

      {/* Secondary Grid: 3 Supporting Collections */}
      <div className="lookbook-grid-secondary">
        {lookbookItems.slice(2).map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="lookbook-card">
            <div className="lookbook-image-wrapper">
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="lookbook-overlay">
              <span className="lookbook-tag">{item.subtitle}</span>
              <h3 className="lookbook-title" style={{ fontSize: '1.4rem' }}>{item.title}</h3>
              <p className="lookbook-desc" style={{ fontSize: '0.8rem' }}>{item.description}</p>
              <button className="lookbook-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.6rem' }}>{item.cta}</button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
