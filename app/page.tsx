import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import HeroSection from "@/components/features/home/HeroSection";
import CredentialSection from "@/components/features/home/CredentialSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CredentialSection />
      <Footer />
    </div>
  );
}
