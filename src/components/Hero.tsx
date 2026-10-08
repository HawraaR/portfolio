import { ArrowUpRight, Mail } from "lucide-react";
import { PortfolioData } from "@/data/portfolioData";
import { BioWidget } from "./BioWidget";
import { Stats } from "./Stats";

interface HeroProps {
  heroData: PortfolioData["hero"];
  projectsCount?: number;
}

export function Hero({ heroData, projectsCount }: HeroProps) {
  const dynamicStats = heroData.stats.map((stat) => {
    if (stat.label.includes("PROJECT") && typeof projectsCount === "number") {
      return {
        ...stat,
        value: `${projectsCount} Projects`,
      };
    }
    return stat;
  });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 sm:pt-8 lg:pt-10 pb-5 sm:pb-7">
      {/* Left Column: Headline, Subhead & CTAs */}
      <div className="lg:col-span-7 space-y-8">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#78716C] uppercase">
          <span className="text-[#8C3A2B] font-bold text-sm">—</span>
          <span className="text-[#1C1917] font-semibold">Full-Stack & Mobile</span>
          <span className="text-[#D8D1C2]">/</span>
          <span>Beirut, LB</span>
        </div>

        {/* Serif Headline & Subhead with Clear Hierarchy */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1917] leading-[1.15] tracking-tight">
            {heroData.headline}{" "}
            <em className="italic text-[#8C3A2B] font-serif font-normal">
              {heroData.headlineEmphasis}
            </em>{" "}
            {heroData.headlineEnd || "web & mobile solutions."}
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl font-normal">
            {heroData.subheadline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#projects"
            className="bg-[#8C3A2B] hover:bg-[#732E22] active:scale-[0.98] text-white px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="bg-white border border-[#EAE5D9] hover:border-[#D8D1C2] hover:bg-[#FAF8F5] active:scale-[0.98] text-[#1C1917] px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 shadow-2xs"
          >
            <span>Direct Contact</span>
            <Mail className="w-4 h-4 text-[#78716C]" />
          </a>
        </div>

        {/* Key Stats Bar */}
        <Stats stats={dynamicStats} />
      </div>

      {/* Right Column: Bio Widget Card */}
      <div className="lg:col-span-5">
        <BioWidget bio={heroData.bioWidget} />
      </div>
    </section>
  );
}