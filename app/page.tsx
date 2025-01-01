import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import { AboutMeSection } from "@/components/AboutMeSection";

export default function Home() {
  return (
    <main className="max-w-[2000px] mx-auto">
      <Navbar />
      <Hero />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
