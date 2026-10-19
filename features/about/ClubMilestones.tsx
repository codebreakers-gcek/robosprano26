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
      <div className="flex items-center justify-between bg-[#1B1B1B]/90 backdrop-blur-sm px-4 py-2.5 border-3 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-2.5">
          <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#55FF55] stroke-[2.5px]" />
          <h3 className="font-mono font-black text-base sm:text-xl uppercase tracking-tight text-white [text-shadow:_2px_2px_0_#000]">
            ORGANIZED BY KILOBOTS &amp; GCEK CAMPUS
          </h3>
        </div>
        <span className="font-mono text-[11px] font-bold text-[#FFAA00] hidden sm:inline-block [text-shadow:_1px_1px_0_#000]">
          OFFICIAL HOST BODIES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: Kilobots Society */}
        <div className="bg-[#1B1B1B]/95 backdrop-blur-md border-4 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] p-6 sm:p-8 shadow-[6px_6px_0px_#000] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-[#333333] pb-4">
              <div className="w-12 h-12 bg-[#2B2B2B] border-2 border-t-[#151515] border-l-[#151515] border-r-[#4F4F4F] border-b-[#4F4F4F] p-1.5 flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)] overflow-hidden shrink-0">
                <img
                  src="/kilobot.png"
                  alt="Kilobots Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[#55FF55] block [text-shadow:_1px_1px_0_#000]">
                  ROBOTICS SOCIETY
                </span>
                <h4 className="font-mono font-black text-lg sm:text-xl text-white uppercase leading-tight [text-shadow:_1px_1px_0_#000]">
                  {club.name} GCEK
                </h4>
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm font-bold text-[#CCCCCC] leading-relaxed">
              {club.bio}
            </p>

            {/* Society highlights */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FFAA00]">
                <Wrench className="w-3.5 h-3.5 text-[#FFAA00] shrink-0" />
                <span>Hands-on Combat Arena &amp; Rover Prototyping</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#55FFFF]">
                <Zap className="w-3.5 h-3.5 text-[#55FFFF] shrink-0" />
                <span>Western Odisha&apos;s Leading Hardware &amp; Robotics Hub</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#55FF55]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#55FF55] shrink-0" />
                <span>Organizers of All 10 ROBOSPRANO Championships</span>
              </div>
            </div>
          </div>

          <a
            href={club.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase w-full py-3 bg-[#5B8731] hover:bg-[#689B37] text-white border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all"
          >
            <span>VISIT KILOBOTS &amp; GCEK PORTAL</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
          </a>
        </div>

        {/* Card 2: Campus Info */}
        <div className="bg-[#1B1B1B]/95 backdrop-blur-md border-4 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] p-6 sm:p-8 shadow-[6px_6px_0px_#000] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-[#333333] pb-4">
              <div className="w-12 h-12 bg-[#2B2B2B] border-2 border-t-[#151515] border-l-[#151515] border-r-[#4F4F4F] border-b-[#4F4F4F] p-2 flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)] overflow-hidden shrink-0">
                <GraduationCap className="w-7 h-7 text-[#FFAA00]" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[#FFAA00] block [text-shadow:_1px_1px_0_#000]">
                  HOST CAMPUS &amp; VENUE
                </span>
                <h4 className="font-mono font-black text-base sm:text-lg text-white uppercase leading-tight [text-shadow:_1px_1px_0_#000]">
                  GOVT. COLLEGE OF ENGINEERING KALAHANDI
                </h4>
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm font-bold text-[#CCCCCC] leading-relaxed">
              {institution.description}
            </p>

            <div className="bg-[#2B2B2B] p-3 border-2 border-t-[#151515] border-l-[#151515] border-r-[#4F4F4F] border-b-[#4F4F4F]">
              <span className="font-mono text-[11px] font-bold text-[#AAAAAA] block">
                LOCATION //
              </span>
              <span className="font-mono text-xs font-black text-white">
                {institution.location}
              </span>
            </div>
          </div>

          <a
            href={institution.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase w-full py-3 bg-[#707070] hover:bg-[#808080] text-white border-3 border-t-[#9E9E9E] border-l-[#9E9E9E] border-r-[#383838] border-b-[#383838] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all"
          >
            <span>INSTITUTE WEBSITE (GCEK BHAWANIPATNA)</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
          </a>
        </div>
      </div>

      {/* Arena Participant Amenities Bar */}
      <div className="bg-[#C6C6C6] border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] p-6 shadow-[6px_6px_0px_#000] space-y-4">
        <div className="font-mono text-xs sm:text-sm font-black uppercase text-black flex items-center gap-2 border-b-2 border-[#8B8B8B] pb-2">
          <Wrench className="w-4 h-4 text-[#5B8731]" />
          <span>OFFICIAL ARENA AMENITIES &amp; PILOT SUPPORT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {club.amenities.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#8B8B8B] border-3 border-t-[#373737] border-l-[#373737] border-r-[#DBDBDB] border-b-[#DBDBDB] p-4 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)]"
            >
              <h5 className="font-mono font-black text-xs sm:text-sm uppercase text-white mb-1.5 [text-shadow:_1px_1px_0_#000]">
                {item.title}
              </h5>
              <p className="font-mono text-xs font-bold text-white/90 leading-relaxed [text-shadow:_1px_1px_0_#000]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
