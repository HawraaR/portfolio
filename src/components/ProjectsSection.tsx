import { ProjectCard as ProjectCardType } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: ProjectCardType[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="pt-5 sm:pt-7 pb-8 sm:pb-10 border-t border-[#EAE5D9]">
      {/* Section Title Header */}
      <div className="max-w-2xl mb-5 sm:mb-7 space-y-2.5">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#78716C] uppercase">
          <span className="text-[#8C3A2B] font-bold text-sm">—</span>
          <span className="text-[#1C1917] font-semibold">Featured Work</span>
          <span className="text-[#D8D1C2]">/</span>
          <span>Selected Projects</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight">
          Crafted with{" "}
          <em className="italic text-[#8C3A2B] font-serif font-normal">
            Code
          </em>
        </h2>
        <p className="text-sm text-[#57534E] leading-relaxed">
          A selection of production-ready web and mobile applications, built with a strong focus on clean architecture, intuitive user experience, and scalability.
        </p>
      </div>

      {/* 2x2 Grid of Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}