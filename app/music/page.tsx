import Navbar from "@/components/Navbar";
import AlbumShowcase from "@/components/AlbumShowcase";
import BehindTheMusic from "@/components/BehindTheMusic";
import Footer from "@/components/Footer";

export default function MusicPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <AlbumShowcase />
        <BehindTheMusic />
      </div>
      <Footer />
    </main>
  );
}
