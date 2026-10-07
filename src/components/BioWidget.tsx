import { MapPin, Code2, ExternalLink } from "lucide-react";
import { PortfolioData } from "@/data/portfolioData";

interface BioWidgetProps {
  bio: PortfolioData["hero"]["bioWidget"];
}

export function BioWidget({ bio }: BioWidgetProps) {
  return (
    <div className="bg-white border border-[#EAE5D9] rounded-2xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
      {/* Mock Window Controls */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE5D9]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EAE5D9]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#EAE5D9]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#EAE5D9]" />
        </div>
        <div className="text-xs text-[#78716C] font-mono bg-[#F8F6F0] px-3 py-1 rounded-md border border-[#EAE5D9]">
          hawraa.dev/about
        </div>
      </div>

      {/* Bio Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-[#F8ECE9] text-[#8C3A2B] font-serif text-xl font-bold flex items-center justify-center border border-[#8C3A2B]/20 shrink-0">
          HR
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#1C1917]">
            {bio.name}
          </h3>
          <p className="text-xs text-[#78716C]">
            {bio.role}
          </p>
        </div>
      </div>

      {/* Details List */}
      <div className="space-y-3.5 text-xs text-[#57534E]">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-[#8C3A2B] shrink-0" />
          <span>{bio.location}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
          <span className="font-medium text-[#2D5A39]">
            {bio.status}
          </span>
        </div>

        <div className="flex items-start gap-2.5 pt-2 border-t border-[#EAE5D9]/60">
          <Code2 className="w-4 h-4 text-[#78716C] shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            <strong className="text-[#1C1917] font-medium">Recent Focus:</strong>{" "}
            {bio.recentFocus}
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between text-xs text-[#78716C]">
        <span>Full-Stack & Mobile</span>
        <a href="#contact" className="inline-flex items-center gap-1 font-medium text-[#8C3A2B] hover:underline">
          View Resume <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}