"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function SupportPage() {
  return (
    <main style={{ background: '#050505', color: '#f5f0e1', minHeight: '100vh' }}>
      <Navbar />
      
      {/* HERO HEADER */}
      <section style={{ 
        padding: '12rem 2rem 5rem', 
        textAlign: 'center', 
        background: 'linear-gradient(to bottom, #0a0a0a, #050505)' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: 'var(--accent-gold)', letterSpacing: '0.8em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', marginBottom: '1.5rem' }}>Crowdfunding</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: '0.95', margin: 0 }}>
            HELP BUILD THE <br />
            <span style={{ color: 'var(--accent-gold)' }}>NEXT CHAPTER</span>
          </h1>
        </div>
      </section>

      {/* STORY AND LINKS */}
      <section style={{ padding: '4rem 2rem 8rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem', color: 'rgba(245, 240, 225, 0.85)' }}>
            <p>Hello friends,</p>
            
            <p>If you've listened to my music, followed my journey, or shared one of my songs with someone you care about, thank you.</p>
            
            <p>Every song I've released started with a simple dream: to tell honest stories through country music and connect with people who see a little bit of their own lives in those stories.</p>
            
            <p>Over the past year, we've built something special together.</p>
            
            <p>From the release of <em>Boots In The Autumn Dust</em> to the upcoming <em>When September Turns Gold</em>, you've supported every step of this journey. What began as a handful of songs has grown into a community of listeners who believe in real music, real stories, and real connections.</p>
            
            <p>Now it's time to take the next step.</p>
            
            <p>In 2027, I'm planning my biggest year yet.</p>
            
            <p>Your support will help fund:</p>
            
            <ul style={{ listStyleType: 'none', padding: '0 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(245, 240, 225, 0.9)' }}>
              <li>🎙️ Professional studio recording sessions</li>
              <li>🎸 Session musicians and instrumental performances</li>
              <li>🎛️ Mixing and mastering of new singles and albums</li>
              <li>🎥 Music videos and visual storytelling projects</li>
              <li>📸 Professional photography and promotional content</li>
              <li>🎤 Live performances and festival appearances</li>
              <li>🚐 Travel and touring expenses</li>
              <li>🎵 Songwriting and production development</li>
              <li>💿 Physical CD and vinyl production</li>
              <li>👕 New merchandise and fan experiences</li>
              <li>📱 Marketing and promotion to help the music reach new listeners around the world</li>
            </ul>
            
            <p>Every contribution, no matter the size, helps bring these projects to life.</p>
            
            <p>This isn't about chasing fame.</p>
            
            <p>It's about creating music that matters.</p>
            
            <p>It's about telling stories that connect people.</p>
            
            <p>It's about proving that independent country music can still thrive through hard work, passion, and community.</p>
            
            <p>When you support this campaign, you're not simply funding an artist.</p>
            
            <p>You're becoming part of the story.</p>
            
            <p>You'll be helping create the next songs, albums, videos, and memories that we'll all share together.</p>
            
            <p>I promise to continue working as hard as I can to make music that makes you proud to be part of this journey.</p>
            
            <p>Thank you for believing in me.</p>
            
            <p>Thank you for listening.</p>
            
            <p>And thank you for helping write the next chapter.</p>
            
            <p>See you down the road.</p>
            
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#f5f0e1', margin: '0 0 0.5rem 0' }}>— Ryker Boone</p>
              <p style={{ color: 'var(--accent-gold)', fontStyle: 'italic', margin: 0 }}>Real Songs. Real Stories.</p>
            </div>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            padding: '3rem', 
            background: '#0a0a0a', 
            border: '1px solid rgba(226, 179, 90, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f5f0e1', margin: 0 }}>
              Choose Your Platform
            </h3>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a 
                href="https://gofund.me/69d29c295" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: '#00B964', // GoFundMe green
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 20px rgba(0, 185, 100, 0.2)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Support on GoFundMe
              </a>
              
              <a 
                href="https://www.justgiving.com/crowdfunding/rykerboonemusic" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: '#AD29B6', // JustGiving purple
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 20px rgba(173, 41, 182, 0.2)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Support on JustGiving
              </a>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
