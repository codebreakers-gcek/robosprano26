import React from "react";
import { ABOUT_DATA } from "@/data/about";
import {
  ExternalLink,
  Bot,
  GraduationCap,
  Wrench,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function ClubMilestones() {
  const { club, institution } = ABOUT_DATA;

  return (
    <div className="space-y-8">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-2.5">
          <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#16A34A] stroke-[2.5px]" />
          <h3 className="font-mono font-black text-base sm:text-xl uppercase tracking-tight text-black">
            ORGANIZED BY KILOBOTS &amp; GCEK CAMPUS
          </h3>
        </div>
        <span className="font-mono text-[11px] font-bold text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 border border-[#B45309] hidden sm:inline-block">
          OFFICIAL HOST BODIES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: Kilobots Society */}
        <div className="bg-white border-3 border-black p-6 sm:p-8 shadow-[5px_5px_0px_#000] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
              <div className="w-12 h-12 bg-[#F1F5F9] border-2 border-black p-1.5 flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
                <img
                  src="/kilobot.png"
                  alt="Kilobots Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[#16A34A] block">
                  ROBOTICS SOCIETY
                </span>
                <h4 className="font-mono font-black text-lg sm:text-xl text-black uppercase leading-tight">
                  {club.name} GCEK
                </h4>
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
              {club.bio}
            </p>

            {/* Society highlights */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B45309]">
                <Wrench className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
                <span>Hands-on Combat Arena &amp; Rover Prototyping</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0284C7]">
                <Zap className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>Western Odisha&apos;s Leading Hardware &amp; Robotics Hub</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#16A34A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                <span>Organizers of All 10 ROBOSPRANO Championships</span>
              </div>
            </div>
          </div>

          <a
            href={club.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase w-full py-3 bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black shadow-[3px_3px_0px_#000] active:translate-y-0.5 transition-all"
          >
            <span>VISIT KILOBOTS &amp; GCEK PORTAL</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
          </a>
        </div>

        {/* Card 2: Campus Info */}
        <div className="bg-white border-3 border-black p-6 sm:p-8 shadow-[5px_5px_0px_#000] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
              <div className="w-12 h-12 bg-[#FEF3C7] border-2 border-black p-2 flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
                <GraduationCap className="w-7 h-7 text-[#B45309]" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[#B45309] block">
                  HOST CAMPUS &amp; VENUE
                </span>
                <h4 className="font-mono font-black text-base sm:text-lg text-black uppercase leading-tight">
                  GOVT. COLLEGE OF ENGINEERING KALAHANDI
                </h4>
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
              {institution.description}
            </p>

            <div className="bg-[#F1F5F9] p-3.5 border-2 border-black">
              <span className="font-mono text-[11px] font-bold text-slate-500 block">
                LOCATION //
              </span>
              <span className="font-mono text-xs font-black text-black">
                {institution.location}
              </span>
            </div>
          </div>

          <a
            href={institution.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase w-full py-3 bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[3px_3px_0px_#000] active:translate-y-0.5 transition-all font-bold"
          >
            <span>INSTITUTE WEBSITE (GCEK BHAWANIPATNA)</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
          </a>
        </div>
      </div>

      {/* Arena Participant Amenities Bar */}
      <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_#000] space-y-4">
        <div className="font-mono text-xs sm:text-sm font-black uppercase text-black flex items-center gap-2 border-b-2 border-slate-200 pb-2">
          <Wrench className="w-4 h-4 text-[#16A34A]" />
          <span>OFFICIAL ARENA AMENITIES &amp; PILOT SUPPORT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {club.amenities.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border-2 border-black p-4 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.06)]"
            >
              <h5 className="font-mono font-black text-xs sm:text-sm uppercase text-black mb-1.5">
                {item.title}
              </h5>
              <p className="font-mono text-xs font-bold text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
