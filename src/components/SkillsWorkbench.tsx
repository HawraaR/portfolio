import { SkillCategory } from "@/data/portfolioData";
import { Terminal } from "lucide-react";

interface SkillsWorkbenchProps {
  categories: SkillCategory[];
}

export function SkillsWorkbench({ categories }: SkillsWorkbenchProps) {
  return (
    <div className="bg-white border border-[#EAE5D9] rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#D8D1C2] transition-all duration-300 space-y-5">
      <div className="flex items-center gap-3 pb-3.5 border-b border-[#EAE5D9]">
        <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] text-[#8C3A2B] flex items-center justify-center border border-[#8C3A2B]/10 shrink-0">
          <Terminal className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1917] tracking-tight">
            The Engineering Workbench
          </h3>
          <p className="text-xs text-[#78716C]">
            Core technologies, frameworks, and system architectures I build with.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((category, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="text-[11px] font-mono font-semibold text-[#78716C] tracking-wider uppercase">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="bg-[#F8F6F0] hover:bg-white text-[#1C1917] border border-[#EAE5D9] hover:border-[#D8D1C2] px-2.5 py-1 rounded-md text-[11px] font-medium transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}