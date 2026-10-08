import { Calendar, Clock, Star, CheckCircle2 } from "lucide-react";

export function TutoriumPreview() {
  return (
    <div className="bg-[#F8F6F0] border border-[#EAE5D9] rounded-xl p-3 space-y-2 font-sans text-xs">
      <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#EAE5D9] shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#E8EFE9] text-[#2D5A39] font-semibold flex items-center justify-center font-serif text-[11px]">
            LU
          </div>
          <div>
            <div className="font-semibold text-[#1C1917] text-[11px]">Peer Tutor: CS-301</div>
            <div className="text-[10px] text-[#78716C] flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" /> 4.9 (24 sessions)
            </div>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-[#2D5A39] bg-[#E8EFE9] px-2 py-0.5 rounded-full">
          $15/hr
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="bg-white p-2 rounded-lg border border-[#EAE5D9] flex items-center gap-1.5 text-[#57534E]">
          <Calendar className="w-3 h-3 text-[#8C3A2B]" />
          <span>Today, 4:00 PM</span>
        </div>
        <div className="bg-white p-2 rounded-lg border border-[#EAE5D9] flex items-center gap-1.5 text-[#57534E]">
          <Clock className="w-3 h-3 text-[#8C3A2B]" />
          <span>60 Min Session</span>
        </div>
      </div>

      <div className="bg-[#E8EFE9]/60 border border-[#C8DEC9] text-[#2D5A39] p-2 rounded-lg flex items-center gap-2 text-[10px]">
        <CheckCircle2 className="w-3 h-3 shrink-0" />
        <span>Booking Confirmed — Slot reserved in calendar</span>
      </div>
    </div>
  );
}