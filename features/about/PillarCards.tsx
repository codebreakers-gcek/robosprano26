import React from "react";
import { ABOUT_DATA } from "@/data/about";
import { Layers } from "lucide-react";

export function PillarCards() {
  const badgeColors: Record<string, string> = {
    "1": "bg-[#FFAA00] text-black border-black",
    "2": "bg-[#5DB329] text-white border-black",
    "3": "bg-[#0284C7] text-white border-black",
    "4": "bg-[#DC2626] text-white border-black",
  };

  return (
    <div className="space-y-8">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFAA00] stroke-[2.5px]" />
          <h3 className="font-mono font-black text-base sm:text-xl uppercase tracking-tight text-black">
            CORE OPPORTUNITY PILLARS
          </h3>
        </div>
        <span className="font-mono text-[11px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 border border-[#0284C7] hidden sm:inline-block">
          4 DISTINCT VALUE DOMAINS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {ABOUT_DATA.pillars.map((pillar) => {
          const badgeClass =
            badgeColors[pillar.number] ||
            "bg-[#FFAA00] text-black border-black";

          return (
            <div
              key={pillar.number}
              className="bg-white border-3 border-black p-6 sm:p-8 shadow-[5px_5px_0px_#000] hover:translate-y-[-2px] transition-all duration-150 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
                  {/* Number Badge (Minecraft Light Inset Slot) */}
                  <span className="font-mono text-xl sm:text-2xl font-black bg-[#E0F2FE] text-[#0284C7] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                    0{pillar.number}
                  </span>
                  <span
                    className={`font-mono text-xs font-black uppercase px-2.5 py-0.5 border-2 shadow-[2px_2px_0px_#000] ${badgeClass}`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-mono font-black text-xl sm:text-2xl text-black uppercase tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <div className="font-mono text-xs font-black uppercase text-slate-600 mb-4">
                  // {pillar.subtitle}
                </div>

                {/* Description Inset Slot */}
                <div className="p-4 bg-[#F8FAFC] border-2 border-black shadow-[inset_1px_1px_3px_rgba(0,0,0,0.06)]">
                  <p className="font-mono text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-slate-200 font-mono text-[11px] font-black uppercase text-slate-700 flex items-center justify-between">
                <span>COMPETE WITH KILOBOTS SQUAD</span>
                <span className="text-[#16A34A] font-black">[ARENA READY]</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
