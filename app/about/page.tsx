import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import SectionHeader from "@/components/common/SectionHeader";
import AboutSection from "@/components/features/about/AboutSection";

export default function About() {
  return (
    <>
        <Navbar />
        <SectionHeader title="My Story" subtitle="Learn more about my background, skills, and experiences." />
        <AboutSection />
        <Footer />
    </>
  );
}