import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkspaceSection } from "@/components/WorkspaceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#57534E]">
      <Navbar name={portfolioData.hero.bioWidget.name} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero
          heroData={portfolioData.hero}
          projectsCount={portfolioData.projects.length}
        />
        <ProjectsSection projects={portfolioData.projects} />
        <WorkspaceSection
          skills={portfolioData.skills}
          bookshelf={portfolioData.bookshelf}
        />
        <ContactSection contactData={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.hero.bioWidget.name} />
    </div>
  );
}