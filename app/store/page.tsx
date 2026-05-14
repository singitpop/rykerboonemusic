import Navbar from "@/components/Navbar";
import ShopPreview from "@/components/ShopPreview";
import Footer from "@/components/Footer";

export default function StorePage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <ShopPreview />
      </div>
      <Footer />
    </main>
  );
}
