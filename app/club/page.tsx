import Navbar from "@/components/Navbar";
import FanPortal from "@/components/FanPortal";
import Footer from "@/components/Footer";

export default function ClubPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <FanPortal />
      </div>
      <Footer />
    </main>
  );
}
