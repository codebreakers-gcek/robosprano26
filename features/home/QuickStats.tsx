import React from "react";
import { EVENT_DATA } from "@/data/event";
import { Trophy, Swords, Crown, Bot, Radio, Activity, Zap } from "lucide-react";

export function QuickStats() {
  const statSlotConfigs = [
    {
      code: "SYS.01 // BOUNTY",
      glowColor: "#FFAA00",
      accentBorder: "border-[#FFAA00]",
      badgeBg: "bg-[#FFAA00]/15 text-[#FFAA00] border-[#FFAA00]/50",
      accentColor: "text-[#FFAA00]",
      cardBg: "bg-[#181120]",
      topLine: "bg-[#FFAA00]",
      icon: Trophy,
      subtext: "100% ESCROW GUARANTEED",
    },
    {
      code: "SYS.02 // COMBAT",
      glowColor: "#FF5555",
      accentBorder: "border-[#FF5555]",
      badgeBg: "bg-[#FF5555]/15 text-[#FF5555] border-[#FF5555]/50",
      accentColor: "text-[#FF5555]",
      cardBg: "bg-[#1D1016]",
      topLine: "bg-[#FF5555]",
      icon: Swords,
      subtext: "OFFICIAL BATTLE GROUNDS",
    },
    {
      code: "SYS.03 // PODIUM",
      glowColor: "#55FFFF",
      accentBorder: "border-[#55FFFF]",
      badgeBg: "bg-[#55FFFF]/15 text-[#55FFFF] border-[#55FFFF]/50",
      accentColor: "text-[#55FFFF]",
      cardBg: "bg-[#101824]",
      topLine: "bg-[#55FFFF]",
      icon: Crown,
      subtext: "CASH & TROPHIES REWARDED",
    },
    {
      code: "SYS.04 // FLEET",
      glowColor: "#FF8800",
      accentBorder: "border-[#FF8800]",
      badgeBg: "bg-[#FF8800]/15 text-[#FF8800] border-[#FF8800]/50",
      accentColor: "text-[#FF8800]",
      cardBg: "bg-[#1C141E]",
      topLine: "bg-[#FF8800]",
      icon: Bot,
      subtext: "REGISTERED WAR MACHINES",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#0B0711] text-white border-b-4 border-black overflow-hidden">
      {/* Background Cybernetic Dot Matrix & Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FFAA00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#FF5555]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Telemetry Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 pb-4 border-b-2 border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border-2 border-[#FFAA00] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
              <Radio className="w-4 h-4 text-[#FFAA00] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-black text-sm sm:text-base text-white uppercase tracking-wider">
                  ARENA TELEMETRY &amp; COMBAT SPECS
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#FFAA00] animate-ping" />
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-neutral-400 block tracking-wide">
                ROBOSPRANO &apos;26 // LIVE CHAMPIONSHIP METRICS
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/90 border-2 border-t-[#3C2A47] border-l-[#3C2A47] border-r-[#000] border-b-[#000] text-[#FFAA00] font-mono text-[11px] sm:text-xs font-bold shadow-[2px_2px_0px_#000]">
            <Activity className="w-3.5 h-3.5 text-[#FFAA00] shrink-0" />
            <span>SYS.STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* 4 Robotics HUD Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EVENT_DATA.stats.map((stat, i) => {
            const config = statSlotConfigs[i % statSlotConfigs.length];
            const Icon = config.icon;

            return (
              <div
                key={stat.label}
                className={`relative ${config.cardBg} border-3 border-black shadow-[5px_5px_0px_#000] hover:shadow-[7px_7px_0px_${config.glowColor}] hover:-translate-y-1.5 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Top Colored Energy Rail */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${config.topLine}`} />

                {/* 4 Corner Robotic Aiming Reticles */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-white/20 group-hover:border-white/60 transition-colors" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-white/20 group-hover:border-white/60 transition-colors" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-white/20 group-hover:border-white/60 transition-colors" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-white/20 group-hover:border-white/60 transition-colors" />

                {/* Card Header: Module Code & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                    <span className="font-mono text-[10px] font-bold text-neutral-400 tracking-wider">
                      {config.code}
                    </span>
                    <span
                      className={`font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border ${config.badgeBg} shadow-[1px_1px_0px_#000]`}
                    >
                      {stat.change}
                    </span>
                  </div>

                  {/* Icon + Number Row */}
                  <div className="flex items-center gap-3 my-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 border-2 border-black flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8)] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.accentColor} stroke-[2.2px]`} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-sans font-black text-2xl xs:text-3xl sm:text-4xl lg:text-[2.6rem] tracking-tight leading-none text-white drop-shadow-[2px_2px_0px_#000]">
                        {stat.value}
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-200 mt-2">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Telemetry Status Line */}
                <div className="w-full flex items-center justify-between text-[9px] font-mono text-neutral-500 pt-3 mt-4 border-t border-white/10 uppercase tracking-wider">
                  <span>{config.subtext}</span>
                  <span className={`${config.accentColor} font-bold flex items-center gap-1`}>
                    <Zap className="w-3 h-3 fill-current shrink-0" />
                    LIVE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

