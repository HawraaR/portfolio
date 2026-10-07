import { KeyStat } from "@/data/portfolioData";

interface StatsProps {
  stats: KeyStat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#EAE5D9]">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-1">
          <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
            {stat.value}
          </div>
          <div className="text-[11px] sm:text-xs font-semibold text-[#78716C] tracking-wider uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}