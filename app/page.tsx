import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

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
