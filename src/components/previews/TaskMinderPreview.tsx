import { CheckSquare, Square } from "lucide-react";

export function TaskMinderPreview() {
  return (
    <div className="bg-[#F8F6F0] border border-[#EAE5D9] rounded-xl p-3 space-y-1.5 text-xs">
      <div className="bg-white p-2 rounded-lg border border-[#EAE5D9] flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <CheckSquare className="w-3.5 h-3.5 text-[#8C3A2B]" />
          <span className="line-through text-[#78716C] text-[11px]">SQLite Local Migration Setup</span>
        </div>
        <span className="text-[9px] bg-[#E8EFE9] text-[#2D5A39] px-2 py-0.5 rounded font-mono">
          Completed
        </span>
      </div>

      <div className="bg-white p-2 rounded-lg border border-[#EAE5D9] flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2 text-[#1C1917] font-medium">
          <Square className="w-3.5 h-3.5 text-[#78716C]" />
          <span className="text-[11px]">Android Studio APK Deployment</span>
        </div>
        <span className="text-[9px] bg-[#F8ECE9] text-[#8C3A2B] border border-[#8C3A2B]/20 px-2 py-0.5 rounded font-mono font-medium">
          High Priority
        </span>
      </div>
    </div>
  );
}