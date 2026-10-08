import { Activity, BookOpen } from "lucide-react";

export function CriticalCarePreview() {
  return (
    <div className="bg-[#F8F6F0] border border-[#EAE5D9] rounded-xl p-3 space-y-2 text-xs">
      <div className="bg-white p-2.5 rounded-lg border border-[#EAE5D9] shadow-2xs space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#8C3A2B]" />
            <span className="font-semibold text-[#1C1917] text-[11px]">ICU Hemodynamics Module</span>
          </div>
          <span className="text-[10px] font-medium bg-[#E8EFE9] text-[#2D5A39] px-2 py-0.5 rounded-full">
            75% Done
          </span>
        </div>
        <div className="w-full bg-[#F8F6F0] rounded-full h-1.5 overflow-hidden">
          <div className="bg-[#8C3A2B] h-1.5 rounded-full w-[75%]" />
        </div>
      </div>

      <div className="bg-white p-2.5 rounded-lg border border-[#EAE5D9] flex items-center justify-between text-[10px] sm:text-[11px] text-[#57534E]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-[#78716C]" />
          <span>Clinical Case Review #4</span>
        </div>
        <span className="text-[#8C3A2B] font-medium">12 Questions</span>
      </div>
    </div>
  );
}