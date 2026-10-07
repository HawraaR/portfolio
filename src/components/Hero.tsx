import { ArrowUpRight, Sparkles, Mail } from "lucide-react";
import { PortfolioData } from "@/data/portfolioData";
import { BioWidget } from "./BioWidget";
import { Stats } from "./Stats";

interface HeroProps {
  heroData: PortfolioData["hero"];
}

export function Hero({ heroData }: HeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-20">
      {/* Left Column: Headline, Subhead & CTAs */}
      <div className="lg:col-span-7 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8EFE9] text-[#2D5A39] border border-[#C8DEC9] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{heroData.badgeText}</span>
        </div>

        {/* Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1917] leading-[1.15] tracking-tight">
          {heroData.headline}{" "}
          <em className="italic text-[#8C3A2B] font-serif font-normal">
            {heroData.headlineEmphasis}
          </em>{" "}
          {heroData.subheadline}
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="bg-[#8C3A2B] hover:bg-[#732E22] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="bg-white border border-[#EAE5D9] hover:border-[#D8D1C2] text-[#1C1917] px-6 py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-2xs"
          >
            <span>Direct Contact</span>
            <Mail className="w-4 h-4 text-[#78716C]" />
          </a>
        </div>

        {/* Key Stats Bar */}
        <Stats stats={heroData.stats} />
      </div>

      {/* Right Column: Bio Widget Card */}
      <div className="lg:col-span-5">
        <BioWidget bio={heroData.bioWidget} />
      </div>
    </section>
  );
}