import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
