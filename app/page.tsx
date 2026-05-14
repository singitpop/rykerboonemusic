import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlbumShowcase from "@/components/AlbumShowcase";
import StorySection from "@/components/StorySection";
import BehindTheMusic from "@/components/BehindTheMusic";
import ShopPreview from "@/components/ShopPreview";
import FanPortal from "@/components/FanPortal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AlbumShowcase />
      <StorySection />
      <BehindTheMusic />
      <ShopPreview />
      <FanPortal />
      <Footer />
    </main>
  );
}
