"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: "APPAREL" | "ACCESSORIES";
  description: string;
  details: string[];
  sizes?: string[];
}

const products: Product[] = [
  {
    id: "guitar-strap",
    name: "Ryker Boone - Premium Leather Guitar Strap",
    price: "£34.99",
    image: "/images/consistent/merch_ryker_guitar_strap.png",
    category: "ACCESSORIES",
    description: "Hand-crafted premium distressed leather guitar strap, adjusted for durability and comfort during long stage sets.",
    details: ["100% genuine full-grain distressed leather", "Adjustable length (42\" to 56\")", "Debossed interlocking gold BOONE logo", "Hand-finished stitching"]
  },
  {
    id: "tote-bag",
    name: "Joyce Boone - Canvas Logo Tote Bag",
    price: "£18.67",
    image: "/images/consistent/merch_joyce_tote.png",
    category: "ACCESSORIES",
    description: "Heavyweight organic canvas tote featuring the classic gold interlocking Boone logo. Perfect for daily essentials.",
    details: ["100% organic cotton canvas", "Reinforced shoulder straps", "Gold screen-printed logo", "Interior accessories pocket"]
  },
  {
    id: "youth-tee",
    name: "Graham Boone - Youth Gold Logo Tee",
    price: "£14.99",
    image: "/images/consistent/merch_graham_tee.png",
    category: "APPAREL",
    description: "Super-soft youth crewneck tee in rich gold, featuring the iconic Boone stamp logo on the chest.",
    details: ["100% ring-spun combed cotton", "Lightweight and breathable (150 GSM)", "Unisex youth fit", "Gold-on-black logo stamp"],
    sizes: ["S (Y8-10)", "M (Y10-12)", "L (Y12-14)", "XL (Y14-16)"]
  },
  {
    id: "camp-blanket",
    name: "The Boone Family - Embroidered Camp Blanket",
    price: "£39.99",
    image: "/images/consistent/merch_family_blanket.png",
    category: "ACCESSORIES",
    description: "Cozy wool-blend outdoor camp blanket with hand-finished embroidered borders. Ideal for chilly nights.",
    details: ["50% wool, 50% soft acrylic blend", "Generous size (60\" x 70\")", "Heavy cuffed stitching", "Interlocking BOONE embroidery in corner"]
  },
  {
    id: "trucker-hat",
    name: "Ryker Boone - Trucker Hat",
    price: "£18.67",
    image: "/images/consistent/merch_ryker_trucker_hat.png",
    category: "ACCESSORIES",
    description: "Classic retro trucker style cap with mesh backing and gold Boone logo patch.",
    details: ["Premium mesh back panels for ventilation", "Adjustable snapback closure", "Embroidered front gold logo patch", "Structured low-profile front"]
  },
  {
    id: "youth-hoodie",
    name: "Graham Boone - Youth Gold Logo Hoodie",
    price: "£29.99",
    image: "/images/consistent/merch_graham_hoodie.png",
    category: "APPAREL",
    description: "Warm, fleece-lined pullover youth hoodie with gold interlocking logo print. Extremely durable.",
    details: ["80% cotton, 20% polyester blend fleece", "Front pouch pocket", "Double-needle hood stitching", "Ribbed cuffs and waistband"],
    sizes: ["S (Y8-10)", "M (Y10-12)", "L (Y12-14)", "XL (Y14-16)"]
  },
  {
    id: "studio-beanie",
    name: "Joyce Boone - Studio Beanie",
    price: "£18.67",
    image: "/images/consistent/merch_joyce_beanie.png",
    category: "APPAREL",
    description: "Premium ribbed cuffed beanie in matching signature grey. Est. 2024 detailing.",
    details: ["100% soft-touch acrylic knit", "Warm dual-layer ribbed cuff", "Corrected 'EST. 2024' black woven label", "One size fits most"]
  }
];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "APPAREL" | "ACCESSORIES">("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const openDrawer = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes ? product.sizes[0] : "");
  };

  const closeDrawer = () => {
    setSelectedProduct(null);
  };

  return (
    <main style={{ background: '#050505', color: 'white', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Store Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', paddingLeft: '8%', paddingRight: '8%', background: 'linear-gradient(to bottom, #0a0a0a, #050505)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Ryker Boone Official Store
          </span>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            THE FAMILY <span style={{ color: 'var(--accent-gold)' }}>COLLECTION</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontSize: '1rem' }}>
            Premium apparel and accessories designed in Nashville, modeled by the Boone family. Crafted for durability and authentic country lifestyle.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
          {(["ALL", "APPAREL", "ACCESSORIES"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: 'transparent',
                border: 'none',
                color: selectedCategory === category ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.25em',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
            >
              {category}
              {selectedCategory === category && (
                <div style={{
                  position: 'absolute',
                  bottom: '-1.1rem',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--accent-gold)'
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => openDrawer(product)}
              style={{ 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid rgba(255,255,255,0.03)',
                borderRadius: '16px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(226, 179, 90, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
              }}
            >
              <div style={{ 
                position: 'relative', 
                aspectRatio: '1', 
                borderRadius: '8px', 
                overflow: 'hidden',
                marginBottom: '1.5rem',
                background: 'rgba(0,0,0,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  left: '1rem', 
                  background: 'rgba(10,10,10,0.85)', 
                  padding: '0.4rem 0.8rem', 
                  fontSize: '0.55rem', 
                  fontWeight: '900', 
                  letterSpacing: '0.15em',
                  color: 'var(--accent-gold)',
                  borderRadius: '3px'
                }}>
                  {product.category}
                </div>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'white', fontFamily: 'var(--font-playfair)', minHeight: '2.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {product.name}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '900', fontSize: '1.1rem' }}>
                  {product.price}
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                  Quick Buy
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-out Drawer */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={closeDrawer}
        >
          <div style={{
            width: '100%',
            maxWidth: '500px',
            height: '100%',
            background: '#0d0d0d',
            borderLeft: '1px solid rgba(226, 179, 90, 0.15)',
            padding: '3rem 2.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeDrawer}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            {/* Product Details inside Drawer */}
            <div style={{ position: 'relative', aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
              <Image src={selectedProduct.image} alt={selectedProduct.name} fill style={{ objectFit: 'cover' }} />
            </div>

            <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              {selectedProduct.category}
            </span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white', lineHeight: '1.2' }}>
              {selectedProduct.name}
            </h2>
            <div style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>
              {selectedProduct.price}
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem', marginBottom: '2rem' }}>
              {selectedProduct.description}
            </p>

            {/* Sizes */}
            {selectedProduct.sizes && (
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                  Select Size
                </span>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        background: selectedSize === size ? 'var(--accent-gold)' : 'rgba(255,255,255,0.02)',
                        color: selectedSize === size ? 'black' : 'white',
                        border: selectedSize === size ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Details Bullet List */}
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Product Features
              </span>
              <ul style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                {selectedProduct.details.map((detail, index) => (
                  <li key={index} style={{ marginBottom: '0.25rem' }}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Buy Action */}
            <div style={{ marginTop: 'auto' }}>
              <Link href="https://shop.rykerboonemusic.website" target="_blank">
                <button style={{
                  width: '100%',
                  background: 'var(--accent-gold)',
                  color: 'black',
                  padding: '1.2rem',
                  fontSize: '0.8rem',
                  fontWeight: '900',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
                >
                  SECURE CHECKOUT VIA STRIPE
                </button>
              </Link>
              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                Fulfilled by SingIt Pop Official Merchandising Partner
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
