"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalArtistProfile from "@/components/DigitalArtistProfile";
import { useState } from "react";

export default function ArtistLibrary() {
  const backstoryImages = [
    {
      src: "/images/consistent/young-ryker-roots.jpg",
      title: "Heartland Roots",
      desc: "Young Ryker practicing on a small acoustic guitar in Columbia, Tennessee."
    },
    {
      src: "/images/consistent/ryker_teaching_graham.png",
      title: "Teaching Graham",
      desc: "Teaching his son Graham how to form chords on his first junior acoustic guitar."
    },
    {
      src: "/images/consistent/family_chopping_wood.png",
      title: "Autumn Harvest",
      desc: "Ryker and Graham stacking firewood outside their cabin in late autumn."
    },
    {
      src: "/images/consistent/ryker_playing_bar.png",
      title: "Local Stage Days",
      desc: "Honing his voice in intimate country bars around Nashville."
    },
    {
      src: "/images/ryker_joyce_bettie_porch.png",
      title: "Wife Joyce & Bettie",
      desc: "Quiet twilight moments on the cabin porch with Joyce and their dog Bettie."
    },
    {
      src: "/images/consistent/ryker_family_quiet_time.png",
      title: "Cabin Quiet Time",
      desc: "Unwinding together in the family log cabin living room."
    },
    {
      src: "/images/consistent/ryker_riding_poppy.png",
      title: "Riding Poppy",
      desc: "Ryker and his son Graham riding their chestnut horse Poppy."
    },
    {
      src: "/images/consistent/family_ranch_garden.png",
      title: "Harvesting the Garden",
      desc: "Ryker, Joyce, and Graham picking fresh vegetables on their ranch."
    },
    {
      src: "/images/consistent/family_ranch_picnic.png",
      title: "Family Sunday Picnic",
      desc: "Relaxing under a giant oak tree in the open ranch fields."
    },
    {
      src: "/images/consistent/family_fishing_grandpas_lake.png",
      title: "Sunset Fishing",
      desc: "Sitting on the wooden dock fishing at Grandpa's lake."
    },
    {
      src: "/images/consistent/tailgate_singing.png",
      title: "Tailgate Songs",
      desc: "Singing acoustic favorites from the open tailgate of the vintage truck."
    },
    {
      src: "/images/consistent/ryker_singing_grit.png",
      title: "Live With Grit",
      desc: "Performing with raw emotion and power under the festival spotlights."
    },
    {
      src: "/images/consistent/ryker_on_the_road_hat.png",
      title: "The Open Road",
      desc: "Heading to the next show with Bettie and his signature guitar case."
    },
    {
      src: "/images/consistent/family_chapel_singing.png",
      title: "Chapel Harmony",
      desc: "Singing together around the upright piano in a local rural Tennessee chapel."
    },
    {
      src: "/images/consistent/artist-signing.jpg",
      title: "Signing the Contract",
      desc: "Signing his official contract with record label SINGIT POP."
    },
    {
      src: "/images/consistent/ryker_recording_studio.png",
      title: "Nashville Echoes",
      desc: "Recording his debut tracks in a professional Nashville studio."
    },
    {
      src: "/images/consistent/ryker_homecoming_concert.png",
      title: "Homecoming Lights",
      desc: "Performing an acoustic set for local friends and family in Columbia."
    },
    {
      src: "/images/consistent/merch_family_cozy.png",
      title: "Morning Deck Coffee",
      desc: "Quiet early hours talking and laughing with Joyce over warm mugs of coffee."
    },
    {
      src: "/images/consistent/ryker_grooming_horse.png",
      title: "Ranch Horse Grooming",
      desc: "Working side by side with Graham brushing down their chestnut horse, Poppy, in the stables."
    },
    {
      src: "/images/consistent/family_campfire_jam.png",
      title: "Campfire Jam",
      desc: "Gathered around the warm fire pit at twilight, sharing stories and songs under the stars."
    }
  ];

  const merchImages = [
    {
      src: "/images/consistent/merch_hat_beanie.png",
      model: "Ryker & Joyce Boone",
      product: "Ryker Boone - Signature Trucker Hat & Joyce Boone - Cozy Logo Knit Beanie"
    },
    {
      src: "/images/consistent/merch_workout.png",
      model: "Ryker & Joyce Boone",
      product: "Midnight Motion Activewear"
    },
    {
      src: "/images/consistent/merch_joyce_shopping.png",
      model: "Joyce Boone",
      product: "Canvas Logo Tote Bag"
    },
    {
      src: "/images/consistent/merch_joyce tote_black.png",
      model: "Joyce Boone",
      product: "Black Canvas Logo Tote Bag"
    },
    {
      src: "/images/consistent/merch_graham_playing.png",
      model: "Graham Boone",
      product: "Youth Gold Logo Tee"
    },
    {
      src: "/images/consistent/merch_family_group.png",
      model: "The Boone Family",
      product: "Coordinated Family Hoodies"
    },
    {
      src: "/images/consistent/merch_family_blanket.png",
      model: "Joyce Boone",
      product: "Embroidered Camp Blanket"
    },
    {
      src: "/images/consistent/merch_family_cozy.png",
      model: "Ryker & Joyce Boone",
      product: "Signature Ceramic Mugs"
    }
  ];

  const albums = [
    { src: "/images/boots in the autumn dust - album.jpg", title: "Boots in the Autumn Dust" },
    { src: "/images/september turns gold - album.png", title: "September Turns Gold" },
    { src: "/images/when the lights go gold - album.png", title: "When The Lights Go Gold" },
    { src: "/images/christmas-all-year-long-album.png", title: "Christmas All Year Long" },
    { src: "/images/the-way-you-love-me-album.png", title: "The Way You Love Me" },
    { src: "/images/our love our forever - album.png", title: "Our Love Our Forever" },
    { src: "/images/backroads-in-bloom-album.png", title: "Backroads in Bloom" }
  ];

  const pressKits = [
    {
      title: "Boots in the Autumn Dust",
      cover: "/images/boots in the autumn dust - album.jpg",
      releaseDate: "June 2026",
      label: "SINGIT POP",
      genre: "Americana / Heartland Country",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE BRINGS AUTHENTIC HEARTLAND SOUL IN NEW STUDIO ALBUM 'BOOTS IN THE AUTUMN DUST'",
      leadParagraph: "NASHVILLE, TN – JUNE 2026 – Critically acclaimed singer-songwriter Ryker Boone has officially released his highly anticipated debut studio album, 'Boots in the Autumn Dust', via independent record label SINGIT POP.",
      bodyText: "Recorded at the historic Blackbird Studio in Nashville, this album represents a raw and authentic country narrative, celebrating blue-collar pride, resilience, and personal struggles. Fusing warm acoustic arrangements, Twin Nashville fiddles, driving telecasters, and Ryker's deep baritone vocals, the project captures the true spirit of small-town America.",
      quote: "\"I wanted to make something that feels real. These songs are written about working-class pride and the challenges we face on a daily basis. Blackbird Studio gave us the perfect space to capture that organic, live-room energy.\" — Ryker Boone",
      tracklist: [
        { title: "Honky Tonk Sundown", duration: "3:42" },
        { title: "August Heatwave", duration: "4:05" },
        { title: "Barefoot on the Backroad", duration: "3:18" },
        { title: "Neon Barn Nights", duration: "3:55" },
        { title: "Sweet Tea and Blue Jeans", duration: "3:29" },
        { title: "Dust Kicking Rhythm", duration: "3:12" },
        { title: "Sunburnt Memories", duration: "4:21" },
        { title: "Tailgate Turn Up", duration: "3:34" },
        { title: "Riverbank Two Step", duration: "2:58" },
        { title: "Fireflies and Front Porches", duration: "3:50" },
        { title: "Whiskey Weather", duration: "4:12" },
        { title: "Last Dance in the Dirt", duration: "4:45" }
      ],
      singles: ["Honky Tonk Sundown", "Dust Kicking Rhythm", "Sunburnt Memories"],
      pressPhotos: [
        { src: "/images/press/boots_press_1.png", title: "Ryker Boone - Heartland Stable (Official Press Photo)" },
        { src: "/images/press/boots_press_2.png", title: "Ryker Boone - Vintage Tailgate (Official Press Photo)" },
        { src: "/images/press/boots_press_3.png", title: "Ryker Boone - Raw Portrait (Official Press Photo)" }
      ]
    },
    {
      title: "September Turns Gold",
      cover: "/images/september turns gold - album.png",
      releaseDate: "August 2026",
      label: "SINGIT POP",
      genre: "Rustic Country / Heartland Folk",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE REFLECTS ON TIMELESS HARVESTS AND LOST LOVE IN SOPHOMORE ALBUM 'SEPTEMBER TURNS GOLD'",
      leadParagraph: "NASHVILLE, TN – AUGUST 2026 – Country sensation Ryker Boone returns with his rustic, acoustic-led sophomore album, 'September Turns Gold', detailing seasons of transition and romance in rural Tennessee.",
      bodyText: "Recorded entirely in a historic timber-frame barn in Columbia, Tennessee, the record bridges the gap between front-porch picking and high-energy festival stages. Defining acoustic warmth, soaring pedal steel solos, and intimate stories of blue-collar endurance, the project showcases Boone's signature songwriting depth.",
      quote: "\"This album is all about transitions. It's about how the seasons change, and how we change with them. We kept the recordings warm and close to the wood to capture that rustic Tennessee twilight feel.\" — Ryker Boone",
      tracklist: [
        { title: "Whiskey In The Headlights", duration: "3:38" },
        { title: "Dust On The Blacktop", duration: "3:47" },
        { title: "Neon County Line", duration: "4:02" },
        { title: "Midnight Gravel", duration: "3:25" },
        { title: "September Turns Gold", duration: "3:58" },
        { title: "One More Round", duration: "3:15" },
        { title: "Backroad Heartbeat", duration: "3:50" },
        { title: "Highway On Fire", duration: "4:10" },
        { title: "Southern Steel", duration: "4:32" },
        { title: "Last Call Eyes", duration: "3:44" },
        { title: "Bootleg Midnight", duration: "4:15" },
        { title: "Back To Gold", duration: "4:50" },
        { title: "September Turns Gold (Slow Remix Live)", duration: "5:12" }
      ],
      singles: ["September Turns Gold", "Highway On Fire", "Southern Steel"],
      pressPhotos: [
        { src: "/images/press/september_press_1.png", title: "Ryker Boone - Barn Session (Official Press Photo)" },
        { src: "/images/press/september_press_2.png", title: "Ryker Boone - Twilight Wheat Field (Official Press Photo)" },
        { src: "/images/press/september_press_3.png", title: "Ryker Boone - Cabin Porch Tuning (Official Press Photo)" }
      ]
    },
    {
      title: "When The Lights Go Gold",
      cover: "/images/when the lights go gold - album.png",
      releaseDate: "October 2026",
      label: "SINGIT POP",
      genre: "Modern Country Pop",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE MERGES NEON GLOW AND ROOT-LEVEL TRADITION IN 'WHEN THE LIGHTS GO GOLD'",
      leadParagraph: "NASHVILLE, TN – OCTOBER 2026 – Ryker Boone has officially released his chart-bound third studio album, 'When The Lights Go Gold', showcasing an upbeat country-pop drive and commercial-crossover sound.",
      bodyText: "Recorded with a polished modern edge, this record balances traditional heartland country elements with driving pop rhythms, clean radio-ready hooks, and dark, atmospheric ballads. From weekend party anthems like 'Friday Again' to deep, emotional low-end tracks like 'Blue Flame', Boone captures the late-night magic of local highways and summer nostalgia.",
      quote: "\"We wanted to bring in more tempo and energy on this one—reflecting those hot summer festival nights and neon dashboards. It's country pop with a heartbeat and real dirt on the tires.\" — Ryker Boone",
      tracklist: [
        { title: "Friday Again", duration: "2:44" },
        { title: "Midnight Motion", duration: "3:03" },
        { title: "Cold Smoke", duration: "3:08" },
        { title: "Blue Flame", duration: "3:23" },
        { title: "When The Lights Go Gold", duration: "2:59" },
        { title: "Kiss Me Like That", duration: "3:14" },
        { title: "Midnight Static", duration: "3:08" },
        { title: "White Line Weather", duration: "3:14" },
        { title: "Too Close To Midnight", duration: "3:04" },
        { title: "What We Were", duration: "3:36" },
        { title: "Stay Till Sunday", duration: "2:59" },
        { title: "One More Summer", duration: "3:03" }
      ],
      singles: ["Friday Again", "Blue Flame", "When The Lights Go Gold", "Too Close To Midnight", "One More Summer"],
      pressPhotos: [
        { src: "/images/press/lights_press_1.png", title: "Ryker Boone - Festival Spotlight Performance (Official Press Photo)" },
        { src: "/images/press/lights_press_2.png", title: "Ryker Boone - The Dusty Boot Diner (Official Press Photo)" },
        { src: "/images/press/lights_press_3.png", title: "Ryker Boone - Late Night Drive (Official Press Photo)" }
      ]
    },
    {
      title: "Christmas All Year Long",
      cover: "/images/christmas-all-year-long-album.png",
      releaseDate: "November 2026",
      label: "SINGIT POP",
      genre: "Country Holiday / Festive Americana",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE DELIVERS COZY HOLIDAY WARMTH IN NEW ALBUM 'CHRISTMAS ALL YEAR LONG'",
      leadParagraph: "NASHVILLE, TN – NOVEMBER 2026 – Acclaimed country storyteller Ryker Boone has officially released his heartwarming studio holiday album, 'Christmas All Year Long', via independent record label SINGIT POP.",
      bodyText: "Blending festive steel strings, acoustic warmth, and intimate cabin stories, the album captures the true spirit of the holidays in the heartland. Recorded live in Columbia, Tennessee, the project ranges from energetic seasonal line-dance tracks to tender fireside ballads.",
      quote: "\"Christmas has always been about family and coming home. I wanted to record an album that brings that exact feeling of walking through a snowy ranch or gathering around a warm stone fireplace. It's country music wrapped up in holiday gold.\" — Ryker Boone",
      tracklist: [
        { title: "Where We Belong", duration: "3:32" },
        { title: "Beneath the Lights", duration: "3:45" },
        { title: "Sleigh Ride Saturday Night", duration: "3:18" },
        { title: "Wrapped Up in Red", duration: "3:55" },
        { title: "Highway Home for the Holidays", duration: "3:40" },
        { title: "One More Round of Mistletoe", duration: "3:28" },
        { title: "Midnight Church Bells", duration: "4:12" },
        { title: "Santa's Got a Pickup Truck", duration: "3:15" },
        { title: "Grandpa's Old Christmas Tree", duration: "4:02" },
        { title: "Snow on the Dance Floor", duration: "3:34" },
        { title: "Christmas All Year Long", duration: "3:50" },
        { title: "Christmas Ain't Over Yet", duration: "3:48" }
      ],
      singles: ["Where We Belong", "Beneath the Lights", "Santa's Got a Pickup Truck", "Christmas All Year Long"],
      pressPhotos: [
        { src: "/images/press/christmas_press_1.png", title: "Ryker Boone - Cozy fireside guitar jam (Official Press Photo)" },
        { src: "/images/press/christmas_press_2.png", title: "Ryker Boone - Log cabin winter portrait (Official Press Photo)" },
        { src: "/images/press/christmas_press_3.png", title: "Ryker Boone - Vintage holiday green truck (Official Press Photo)" }
      ]
    },
    {
      title: "The Way You Love Me",
      cover: "/images/the-way-you-love-me-album.png",
      releaseDate: "January 2027",
      label: "SINGIT POP",
      genre: "Heartland Country / Country-Pop",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE BRINGS DEEP DEVOTION AND SOULFUL COUNTRY STORYTELLING IN NEW ALBUM 'THE WAY YOU LOVE ME'",
      leadParagraph: "NASHVILLE, TN – JANUARY 2027 – Heartland country artist Ryker Boone has officially released his highly anticipated studio album, 'The Way You Love Me', via independent record label SINGIT POP.",
      bodyText: "Focusing on themes of personal devotion, growth, and warm domestic reflection, this record combines acoustic guitars, sweeping steel strings, and rich baritone vocals. Recorded in Columbia, Tennessee, the album delivers a live-session country-pop vibe built for cold nights and long highways.",
      quote: "\"This record is all about the quiet, solid foundations of everyday partnership and love. We captured a live pickers groove in the studio, and I think that raw, honest energy shines through in every track.\" — Ryker Boone",
      tracklist: [
        { title: "Still Makes Me Nervous", duration: "3:44" },
        { title: "The Way You Love Me", duration: "3:52" },
        { title: "Saturday Morning Kind of Love", duration: "4:01" },
        { title: "Every Little Thing", duration: "3:34" },
        { title: "First Name Basis", duration: "3:23" },
        { title: "Someday Starts Tonight", duration: "3:39" },
        { title: "Even on the Hard Days", duration: "4:18" },
        { title: "Best Part of My Day", duration: "3:29" },
        { title: "No Doubt About It", duration: "3:43" },
        { title: "I'd Do It All Again", duration: "4:04" },
        { title: "Home in Your Heart", duration: "3:49" },
        { title: "Joyce", duration: "4:32" },
        { title: "Front Seat", duration: "3:34" }
      ],
      singles: ["Still Makes Me Nervous", "The Way You Love Me", "Every Little Thing", "Front Seat"],
      pressPhotos: [
        { src: "/images/still-makes-me-nervous-single.jpg", title: "Ryker Boone - Lead Single Studio Portrait (Official Press Photo)" },
        { src: "/images/the-way-you-love-me-single.jpg", title: "Ryker Boone - Title Track Session (Official Press Photo)" },
        { src: "/images/every-little-thing-single.jpg", title: "Ryker Boone - Radio Single Cover (Official Press Photo)" }
      ]
    },
    {
      title: "Our Love Our Forever",
      cover: "/images/our love our forever - album.png",
      releaseDate: "February 2027",
      label: "SINGIT POP",
      genre: "Romantic Americana / Wedding Edition",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE CELEBRATES ENDURING DEVOTION IN POWERFUL TRIBUTE ALBUM 'OUR LOVE OUR FOREVER'",
      leadParagraph: "NASHVILLE, TN – FEBRUARY 2027 – Dedicated to love, dedication, and lifelong commitment, country artist Ryker Boone has released his romantic masterwork, 'Our Love Our Forever'.",
      bodyText: "Written as a direct tribute to his wife Joyce, the album features sweeping string sections, warm grand piano chords, and tender acoustic guitars. In a special bonus addition for fans worldwide, the album contains five custom ceremony-ready Wedding Remixes reimagined specifically for first dances, aisle walks, and reception celebrations.",
      quote: "\"This album is my love letter to Joyce. It's about finding that one person you want to walk down the road with forever. We also recorded special acoustic wedding versions so fans can make these tracks part of their own special days.\" — Ryker Boone",
      tracklist: [
        { title: "Here Comes the Light", duration: "3:45" },
        { title: "I Choose You", duration: "3:28" },
        { title: "Two Roads One Heart", duration: "4:02" },
        { title: "Bound to You", duration: "3:15" },
        { title: "Now and Always", duration: "3:52" },
        { title: "First and Always", duration: "3:34" },
        { title: "Before I Knew Your Name", duration: "4:10" },
        { title: "Like Home", duration: "3:22" },
        { title: "Forever Starts With You", duration: "3:48" },
        { title: "Hold This Moment", duration: "4:15" },
        { title: "One Lifetime More", duration: "3:55" },
        { title: "The Last Song We’ll Ever Need", duration: "4:28" },
        { title: "Here Comes the Light (Wedding Remix)", duration: "3:58" },
        { title: "I Choose You (Wedding Remix)", duration: "3:35" },
        { title: "Two Roads One Heart (Wedding Remix)", duration: "4:12" },
        { title: "Bound to You (Wedding Remix)", duration: "3:20" },
        { title: "Before I Knew Your Name (Wedding Remix)", duration: "4:24" }
      ],
      singles: ["Here Comes the Light", "I Choose You", "Two Roads One Heart"],
      pressPhotos: [
        { src: "/images/press/love_press_1.png", title: "Ryker Boone - Chapel Piano Session (Official Press Photo)" },
        { src: "/images/press/love_press_2.png", title: "Ryker Boone - Ranch Sunset Oak (Official Press Photo)" },
        { src: "/images/press/love_press_3.png", title: "Ryker Boone - Cozy Fireside Jam (Official Press Photo)" }
      ]
    },
    {
      title: "Backroads in Bloom",
      cover: "/images/backroads-in-bloom-album.png",
      releaseDate: "March 2027",
      label: "SINGIT POP",
      genre: "Spring Americana / Heartland Country",
      formats: "Digital Streaming & Lossless WAV",
      headline: "RYKER BOONE CELEBRATES NEW BEGINNINGS AND COUNTRY HIGHWAYS IN ALBUM 'BACKROADS IN BLOOM'",
      leadParagraph: "NASHVILLE, TN – MARCH 2027 – Heartland country artist Ryker Boone has officially released his highly anticipated spring Americana album, 'Backroads in Bloom', via independent record label SINGIT POP.",
      bodyText: "Focusing on themes of growth, recovery, and the freedom of the open road, this record combines acoustic warmth, driving percussion, and rich baritone harmonies. Fusing twin fiddles and telecasters, the album provides a perfect soundscape for warm spring road trips and local backroad reflections.",
      quote: "\"This album is about the change of seasons—specifically how things grow back after a long, cold winter. It's about finding hope on those dusty backroads, and seeing the wildflowers bloom where you least expect it.\" — Ryker Boone",
      tracklist: [
        { title: "Spring Came Early", duration: "3:28" },
        { title: "Backroads in Bloom", duration: "3:45" },
        { title: "Friday Night Fireflies", duration: "3:12" },
        { title: "Polaroids on the Dashboard", duration: "3:55" },
        { title: "Nobody Since You", duration: "3:34" },
        { title: "Right Where We Left Off", duration: "3:40" },
        { title: "One More Time Around", duration: "3:18" },
        { title: "Better Than We Were", duration: "3:29" },
        { title: "Easy As Breathing", duration: "3:15" },
        { title: "Front Porch Lights", duration: "4:02" },
        { title: "When It's You", duration: "3:50" },
        { title: "A Hundred Summers", duration: "4:12" }
      ],
      singles: ["Spring Came Early", "Nobody Since You", "Better Than We Were", "Easy As Breathing"],
      pressPhotos: [
        { src: "/images/press/backroads_press_1.png", title: "Ryker Boone - Spring Wildflower Meadow (Official Press Photo)" },
        { src: "/images/press/backroads_press_2.png", title: "Ryker Boone - split-rail backroad fence (Official Press Photo)" },
        { src: "/images/press/backroads_press_3.png", title: "Ryker Boone - Country General Store (Official Press Photo)" }
      ]
    }
  ];

  const [selectedKit, setSelectedKit] = useState<any>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [hoveredKitIndex, setHoveredKitIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const copyToClipboard = () => {
    if (!selectedKit) return;
    const text = `FOR IMMEDIATE RELEASE\n\n${selectedKit.headline}\n\n${selectedKit.leadParagraph}\n\n${selectedKit.bodyText}\n\n${selectedKit.quote}\n\nOfficial Tracklist:\n${selectedKit.tracklist.map((t: any, i: number) => `${i+1}. ${t.title} (${t.duration})`).join("\n")}\n\nContact: media@singitpop.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPressText = () => {
    if (!selectedKit) return;
    const text = `FOR IMMEDIATE RELEASE\n\n${selectedKit.headline}\n\n${selectedKit.leadParagraph}\n\n${selectedKit.bodyText}\n\n${selectedKit.quote}\n\nOfficial Tracklist:\n${selectedKit.tracklist.map((t: any, i: number) => `${i+1}. ${t.title} (${t.duration})`).join("\n")}\n\nContact: media@singitpop.com`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedKit.title.toLowerCase().replace(/\s+/g, '-')}-press-release.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#f5f0e1', display: 'block' }}>
                      {img.product.includes(' & ') ? (
                        img.product.split(' & ').map((part, idx) => (
                          <span key={idx} style={{ display: 'block', marginTop: idx > 0 ? '0.15rem' : 0 }}>
                            {idx > 0 ? '& ' : ''}{part}
                          </span>
                        ))
                      ) : (
                        img.product
                      )}
                    </span>
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
      <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.03)', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Professional Press Kits
            </h3>
            <p style={{ color: 'rgba(245, 240, 225, 0.55)', maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Select an album to access high-resolution covers, official press release copy, metadata, and promotional materials.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}>
            {pressKits.map((kit, i) => (
              <div 
                key={i} 
                onClick={() => { setSelectedKit(kit); setActivePhotoIndex(0); }}
                onMouseEnter={() => setHoveredKitIndex(i)}
                onMouseLeave={() => setHoveredKitIndex(null)}
                style={{ 
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '1',
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderColor: hoveredKitIndex === i ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
                  position: 'relative',
                  transform: hoveredKitIndex === i ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                }}>
                  <img 
                    src={kit.cover} 
                    alt={kit.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(5, 5, 5, 0.85)',
                    opacity: hoveredKitIndex === i ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }}>
                    <span style={{ 
                      color: 'var(--accent-gold)', 
                      fontSize: '0.65rem', 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase', 
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      display: 'block'
                    }}>
                      Official Press Kit
                    </span>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
                      {kit.title}
                    </h4>
                    <button style={{
                      background: 'var(--accent-gold)',
                      color: 'black',
                      border: 'none',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      fontWeight: '900',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer'
                    }}>
                      Access Press Kit
                    </button>
                  </div>
                </div>
                <h4 style={{ 
                  marginTop: '1.25rem', 
                  textAlign: 'center', 
                  fontSize: '0.85rem', 
                  fontWeight: 'bold', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em' 
                }}>
                  {kit.title}
                </h4>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(245, 240, 225, 0.45)', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Are you a representative from a media or booking outlet?
            </p>
            <a href="mailto:media@singitpop.com">
              <button style={{
                background: 'transparent',
                color: 'var(--accent-gold)',
                border: '1px solid var(--accent-gold)',
                padding: '0.9rem 2.2rem',
                fontWeight: '900',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(226, 179, 90, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              >
                Contact Media Relations
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Press Kit Modal Overlay */}
      {selectedKit && (
        <div 
          onClick={() => { setSelectedKit(null); setCopied(false); }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(12px)',
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
              background: 'rgba(10, 10, 10, 0.98)',
              border: '1px solid rgba(226, 179, 90, 0.25)',
              borderRadius: '20px',
              padding: '3.5rem 3rem',
              width: '100%',
              maxWidth: '1000px',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
              display: 'grid',
              gridTemplateColumns: '1fr 1.8fr',
              gap: '3.5rem'
            }}
          >
            <button 
              onClick={() => { setSelectedKit(null); setCopied(false); }}
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
                transition: 'color 0.2s',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              &times;
            </button>

            {/* Left Column: Cover & Key Metadata */}
            <div>
              <div style={{
                position: 'relative',
                aspectRatio: '1',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(226, 179, 90, 0.2)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.7)',
                marginBottom: '2rem'
              }}>
                <img 
                  src={selectedKit.cover} 
                  alt={selectedKit.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Album Title</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{selectedKit.title}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Release Date</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{selectedKit.releaseDate}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Label</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{selectedKit.label}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Genre / Style</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{selectedKit.genre}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Formats</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{selectedKit.formats}</span>
                </div>
              </div>

              {/* Promotional Press Photos Slider */}
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Official Press Photos
                </span>
                
                {/* Active Photo Container */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '1.5',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 179, 90, 0.2)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
                  background: '#111',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={selectedKit.pressPhotos[activePhotoIndex].src} 
                    alt={selectedKit.pressPhotos[activePhotoIndex].title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {/* Left Arrow */}
                  <button 
                    onClick={() => setActivePhotoIndex((prev) => (prev === 0 ? selectedKit.pressPhotos.length - 1 : prev - 1))}
                    style={{
                      position: 'absolute',
                      left: '0.5rem',
                      background: 'rgba(0,0,0,0.7)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      transition: 'all 0.2s',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-gold)';
                      e.currentTarget.style.color = 'var(--accent-gold)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    ‹
                  </button>

                  {/* Right Arrow */}
                  <button 
                    onClick={() => setActivePhotoIndex((prev) => (prev === selectedKit.pressPhotos.length - 1 ? 0 : prev + 1))}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      background: 'rgba(0,0,0,0.7)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      transition: 'all 0.2s',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-gold)';
                      e.currentTarget.style.color = 'var(--accent-gold)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    ›
                  </button>

                  {/* Indicators Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    display: 'flex',
                    gap: '0.4rem',
                    zIndex: 2
                  }}>
                    {selectedKit.pressPhotos.map((_: any, idx: number) => (
                      <div 
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: activePhotoIndex === idx ? 'var(--accent-gold)' : 'rgba(255,255,255,0.4)',
                          cursor: 'pointer',
                          transition: 'background 0.2s'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Photo Title */}
                <span style={{ fontSize: '0.7rem', color: 'rgba(245,240,225,0.45)', fontStyle: 'italic', display: 'block', marginBottom: '0.75rem', lineHeight: '1.4', minHeight: '2rem' }}>
                  Photo {activePhotoIndex + 1} of {selectedKit.pressPhotos.length}: {selectedKit.pressPhotos[activePhotoIndex].title}
                </span>

                {/* Download active photo */}
                <a 
                  href={selectedKit.pressPhotos[activePhotoIndex].src} 
                  download={`${selectedKit.title.toLowerCase().replace(/\s+/g, '-')}-promo-${activePhotoIndex + 1}.png`}
                  style={{ textDecoration: 'none' }}
                >
                  <button 
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--accent-gold)',
                      padding: '0.6rem 1rem',
                      fontSize: '0.65rem',
                      fontWeight: 'bold',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    📥 Download Active Photo
                  </button>
                </a>
              </div>


              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <button 
                  onClick={downloadPressText}
                  style={{
                    background: 'var(--accent-gold)',
                    color: 'black',
                    padding: '0.8rem 1.5rem',
                    fontSize: '0.7rem',
                    fontWeight: '900',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
                >
                  📥 Download Press Text
                </button>
                
                <a 
                  href={selectedKit.cover} 
                  download={`${selectedKit.title.toLowerCase().replace(/\s+/g, '-')}-cover.jpg`}
                  style={{ textDecoration: 'none' }}
                >
                  <button 
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      padding: '0.8rem 1.5rem',
                      fontSize: '0.7rem',
                      fontWeight: '900',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.borderColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    🖼️ Download Hi-Res Cover
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column: Press Release Copy Document */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '3.5rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                paddingBottom: '1rem',
                marginBottom: '2rem'
              }}>
                <span style={{ 
                  color: 'var(--accent-gold)', 
                  fontWeight: 'bold', 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.15em' 
                }}>
                  FOR IMMEDIATE RELEASE
                </span>
                
                <button 
                  onClick={copyToClipboard}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--accent-gold)' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {copied ? '✓ Copied to Clipboard' : '📋 Copy Release'}
                </button>
              </div>

              <div style={{ display: 'grid', gap: '1.5rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: '1.8' }}>
                <h2 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '900', 
                  color: 'white', 
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-playfair)' 
                }}>
                  {selectedKit.headline}
                </h2>
                
                <p style={{ fontWeight: 'bold', color: 'white' }}>
                  {selectedKit.leadParagraph}
                </p>

                <p>{selectedKit.bodyText}</p>

                <blockquote style={{ 
                  borderLeft: '3px solid var(--accent-gold)', 
                  paddingLeft: '1.5rem', 
                  margin: '1.5rem 0',
                  fontStyle: 'italic',
                  color: '#f5f0e1'
                }}>
                  {selectedKit.quote}
                </blockquote>

                {/* Tracklist in PR */}
                <div>
                  <h4 style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                    Official Tracklist:
                  </h4>
                  <div style={{ display: 'grid', gap: '0.4rem', background: 'rgba(255,255,255,0.01)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.02)' }}>
                    {selectedKit.tracklist.map((track: any, idx: number) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                        <span>{idx + 1}. {track.title}</span>
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedKit.singles.length > 0 && (
                  <div>
                    <h4 style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                      Promotional Singles:
                    </h4>
                    <p style={{ fontSize: '0.85rem' }}>
                      {selectedKit.singles.join(', ')}
                    </p>
                  </div>
                )}

                <div style={{ 
                  marginTop: '2rem', 
                  paddingTop: '2.5rem', 
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.4)',
                  textAlign: 'center'
                }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>Media & Press Contact: <strong>media@singitpop.com</strong></p>
                  <p style={{ margin: 0 }}>Management & Booking: <strong>booking@singitpop.com</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
