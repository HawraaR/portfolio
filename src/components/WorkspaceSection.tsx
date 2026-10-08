import { PortfolioData } from "@/data/portfolioData";
import { SkillsWorkbench } from "./SkillsWorkbench";
import { Bookshelf } from "./Bookshelf";

interface WorkspaceSectionProps {
  skills: PortfolioData["skills"];
  bookshelf: PortfolioData["bookshelf"];
}

export function WorkspaceSection({ skills, bookshelf }: WorkspaceSectionProps) {
  return (
    <section
      id="workspace"
      className="pt-5 sm:pt-7 pb-10 sm:pb-12 border-t border-[#EAE5D9]"
    >
      {/* Section Title Header */}
      <div className="max-w-2xl mb-5 sm:mb-7 space-y-2.5">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#78716C] uppercase">
          <span className="text-[#8C3A2B] font-bold text-sm">—</span>
          <span className="text-[#1C1917] font-semibold">Workspace</span>
          <span className="text-[#D8D1C2]">/</span>
          <span>Tools & Philosophy</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight">
          Inside My{" "}
          <em className="italic text-[#8C3A2B] font-serif font-normal">
            Workspace
          </em>
        </h2>
        <p className="text-sm text-[#57534E] leading-relaxed">
          The software stacks I build with daily, paired with reading materials
          that shape my approach to engineering and software architecture.
        </p>
      </div>

      {/* 12-Column Grid: 2/3 (col-span-8) for Skills, 1/3 (col-span-4) for Bookshelf */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        <div className="lg:col-span-8">
          <SkillsWorkbench categories={skills} />
        </div>
        <div className="lg:col-span-4">
          <Bookshelf bookshelfData={bookshelf} />
        </div>
      </div>
    </section>
  );
}
