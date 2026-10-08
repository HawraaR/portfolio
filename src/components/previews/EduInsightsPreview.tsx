import { BarChart2, CheckCircle } from "lucide-react";

export function EduInsightsPreview() {
  return (
    <div className="bg-[#F8F6F0] border border-[#EAE5D9] rounded-xl p-3 space-y-2 text-xs">
      <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#EAE5D9] shadow-2xs">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-3.5 h-3.5 text-[#8C3A2B]" />
          <span className="font-semibold text-[#1C1917] text-[11px]">Live Lecture Engagement</span>
        </div>
        <span className="text-[9px] font-mono bg-[#E8EFE9] text-[#2D5A39] border border-[#C8DEC9] px-2 py-0.5 rounded font-semibold tracking-wide">
          LIVE POLL
        </span>
      </div>

      <div className="bg-white p-2.5 rounded-lg border border-[#EAE5D9] space-y-1.5">
        <div className="flex justify-between text-[10px]">
          <span className="text-[#57534E]">Comprehension Score</span>
          <span className="font-semibold text-[#1C1917]">91.8% Positive</span>
        </div>
        <div className="w-full bg-[#F8F6F0] rounded-full h-1.5 overflow-hidden border border-[#EAE5D9]">
          <div className="bg-[#8C3A2B] h-1.5 rounded-full w-[91.8%]" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#78716C] pt-0.5">
          <CheckCircle className="w-3 h-3 text-[#2D5A39] shrink-0" />
          <span>48/52 Students answered instant feedback</span>
        </div>
      </div>
    </div>
  );
}