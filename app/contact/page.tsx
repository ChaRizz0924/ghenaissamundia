import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import ContactHero from "@/components/features/contact/ContactHero";
import ContactGrid from "@/components/features/contact/ContactGrid";
import SectionHeader from "@/components/common/SectionHeader";



export default function Contact() {
  return (
    <>
        <Navbar />
        <ContactHero />
        <SectionHeader title="Get in Touch" subtitle="More ways to connect with me. Let's be friends and talk business wih me!" />
        <ContactGrid />
        <Footer />
    </>
  );
}