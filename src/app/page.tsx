import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#57534E]">
      <Navbar name={portfolioData.hero.bioWidget.name} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero heroData={portfolioData.hero} />
      </main>
    </div>
  );
}