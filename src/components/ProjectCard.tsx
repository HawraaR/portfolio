import { ProjectCard as ProjectCardType } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

import { TutoriumPreview } from "./previews/TutoriumPreview";
import { EduInsightsPreview } from "./previews/EduInsightsPreview";
import { CriticalCarePreview } from "./previews/CriticalCarePreview";
import { TaskMinderPreview } from "./previews/TaskMinderPreview";

interface ProjectCardProps {
  project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Map preview type to corresponding preview UI
  const renderPreview = () => {
    switch (project.preview.type) {
      case "tutorium":
        return <TutoriumPreview />;
      case "eduinsights":
        return <EduInsightsPreview />;
      case "criticalcare":
        return <CriticalCarePreview />;
      case "taskminder":
        return <TaskMinderPreview />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border border-[#EAE5D9] rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#D8D1C2] transition-all duration-300 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        {/* Monospace Metadata Tag */}
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#F8F6F0] text-[#78716C] border border-[#EAE5D9] text-[10px] font-mono tracking-wider uppercase font-medium">
            {project.badge}
          </span>
        </div>

        {/* Title + Italic Subhead */}
        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917] tracking-tight">
          {project.title}{" "}
          <em className="italic font-serif text-[#8C3A2B] font-normal">
            — {project.italicSubhead}
          </em>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-[11px] bg-[#F8F6F0] text-[#78716C] px-2 py-0.5 rounded-md border border-[#EAE5D9] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Embedded Mini UI Preview Component */}
        <div className="pt-1">
          {renderPreview()}
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-3 border-t border-[#EAE5D9] flex items-center justify-between text-xs font-medium">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#78716C] hover:text-[#1C1917] hover:underline inline-flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View Code</span>
          </a>
        ) : <div />}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C3A2B] hover:text-[#732E22] hover:underline inline-flex items-center gap-1.5 transition-colors font-medium"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : null}
      </div>
    </div>
  );
}