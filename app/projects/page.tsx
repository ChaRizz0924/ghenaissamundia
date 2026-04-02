import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectGrid from "@/components/features/projects/ProjectGrid";

export default function Projects() {
  return (
    <>
        <Navbar />
        <SectionHeader title="Projects" subtitle="A showcase of my work and contributions." />
        <ProjectGrid />
        <Footer />
    </>
  );
}