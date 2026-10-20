import React from "react";
import {
  Trophy,
  Swords,
  Crown,
  Bot,
  Radio,
  Activity,
  Zap,
  Flame,
  Target,
  Cpu,
  Wifi,
} from "lucide-react";

export function QuickStats() {
  const statSlotConfigs = [
    {
      code: "SYS.01 // BOUNTY",
      badge: "CASH REWARDS",
      value: "₹91K+",
      valueDetail: "₹91,000+",
      label: "TOTAL PRIZE POOL",
      accentColor: "#FFAA00",
      accentGlow: "rgba(255,170,0,0.35)",
      bgGradient: "bg-[#181120]",
      borderBevel: "border-t-[#5A3C15] border-l-[#5A3C15] border-r-[#0A070D] border-b-[#0A070D]",
      topRail: "bg-gradient-to-r from-[#FFE285] via-[#FFAA00] to-[#8F5500]",
      badgeClass: "bg-[#FFAA00]/20 text-[#FFAA00] border-[#FFAA00] shadow-[2px_2px_0px_#000]",
      icon: Trophy,
      subtext: "100% ESCROW GUARANTEED",
      tags: ["₹25K Top Bounty", "Instant Payout", "Mega Arena"],
      meterLabel: "XP BOUNTY LEVEL",
      meterPercent: 91,
      meterColor: "bg-[#FFAA00]",
    },
    {
      code: "SYS.02 // COMBAT",
      badge: "OFFICIAL ARENAS",
      value: "5 ARENAS",
      valueDetail: "5 BATTLEGROUNDS",
      label: "COMBAT ARENAS",
      accentColor: "#FF5555",
      accentGlow: "rgba(255,85,85,0.35)",
      bgGradient: "bg-[#1D1016]",
      borderBevel: "border-t-[#5A1C24] border-l-[#5A1C24] border-r-[#0A070D] border-b-[#0A070D]",
      topRail: "bg-gradient-to-r from-[#FFA6A6] via-[#FF5555] to-[#8B0000]",
      badgeClass: "bg-[#FF5555]/20 text-[#FF5555] border-[#FF5555] shadow-[2px_2px_0px_#000]",
      icon: Swords,
      subtext: "STEEL HAZARDS & TRAPS",
      tags: ["Robo War", "Death Race", "Sumo", "Soccer", "Line Follower"],
      meterLabel: "ARENA HAZARD INDEX",
      meterPercent: 100,
      meterColor: "bg-[#FF5555]",
    },
    {
      code: "SYS.03 // PODIUM",
      badge: "GUARANTEED AWARDS",
      value: "15 SQUADS",
      valueDetail: "15 PODIUM TIERS",
      label: "PODIUM WINNERS",
      accentColor: "#55FFFF",
      accentGlow: "rgba(85,255,255,0.35)",
      bgGradient: "bg-[#0E1724]",
      borderBevel: "border-t-[#183B52] border-l-[#183B52] border-r-[#0A070D] border-b-[#0A070D]",
      topRail: "bg-gradient-to-r from-[#A6FFFF] via-[#55FFFF] to-[#008B8B]",
      badgeClass: "bg-[#55FFFF]/20 text-[#55FFFF] border-[#55FFFF] shadow-[2px_2px_0px_#000]",
      icon: Crown,
      subtext: "CASH & CHAMPIONSHIP TROPHIES",
      tags: ["1st, 2nd & 3rd Tiers", "Official Mementos"],
      meterLabel: "RECOGNITION QUOTA",
      meterPercent: 85,
      meterColor: "bg-[#55FFFF]",
    },
    {
      code: "SYS.04 // FLEET",
      badge: "COMPETITORS",
      value: "50+ BOTS",
      valueDetail: "50+ WAR MACHINES",
      label: "COMBAT ROBOTICS FLEET",
      accentColor: "#55FF55",
      accentGlow: "rgba(85,255,85,0.35)",
      bgGradient: "bg-[#101C14]",
      borderBevel: "border-t-[#1D4E28] border-l-[#1D4E28] border-r-[#0A070D] border-b-[#0A070D]",
      topRail: "bg-gradient-to-r from-[#9EFF9E] via-[#55FF55] to-[#1B801B]",
      badgeClass: "bg-[#55FF55]/20 text-[#55FF55] border-[#55FF55] shadow-[2px_2px_0px_#000]",
      icon: Bot,
      subtext: "REGISTERED WAR MACHINES",
      tags: ["8KG Combat Class", "Autonomous", "Pilots"],
      meterLabel: "FLEET READINESS",
      meterPercent: 95,
      meterColor: "bg-[#55FF55]",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#0B0612] text-white border-b-4 border-black overflow-hidden select-none">
      {/* Background Cybernetic Dot Matrix & Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-30 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Cyber/Minecraft Circuit Accent Scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.8)_51%)] [background-size:100%_4px]" />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] bg-[#FFAA00]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] bg-[#FF5555]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-[#55FFFF]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Telemetry Header Bar (Enhanced Minecraft Obsidian Slab) */}
        <div className="bg-[#140E1B] border-4 border-t-[#3C2A47] border-l-[#3C2A47] border-r-[#050308] border-b-[#050308] shadow-[6px_6px_0px_#000] p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left Title with Pulsing Radar and Minecraft Styling */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 bg-black border-2 border-t-[#55FF55] border-l-[#55FF55] border-r-[#1B801B] border-b-[#1B801B] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] relative">
              <Radio className="w-5 h-5 text-[#55FF55] animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#55FF55] animate-ping" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-sans sm:font-minecraft font-black sm:font-normal text-base sm:text-xl lg:text-2xl text-white uppercase tracking-wider sm:[text-shadow:_2px_2px_0_#000]">
                  ARENA TELEMETRY &amp; COMBAT SPECS
                </h2>
                <span className="font-mono sm:font-minecraft font-bold text-[10px] sm:text-xs text-[#FFAA00] bg-black px-2 py-0.5 border border-[#FFAA00] shadow-[1px_1px_0px_#000]">
                  EDITION X
                </span>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#AAAAAA] tracking-wide mt-0.5">
                ROBOSPRANO &apos;26 // LIVE CHAMPIONSHIP METRICS &amp; PIT TELEMETRY
              </p>
            </div>
          </div>

          {/* Right Status Badges */}
          <div className="flex items-center gap-2.5 flex-wrap self-stretch sm:self-auto justify-between sm:justify-end">
            {/* Live Frequency / Ping */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black border-2 border-[#333333] font-mono text-[11px] text-[#55FFFF] shadow-[2px_2px_0px_#000]">
              <Wifi className="w-3.5 h-3.5 text-[#55FFFF] animate-pulse" />
              <span>12ms LIVE</span>
            </div>

            {/* Operational Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border-2 border-t-[#2E6B34] border-l-[#2E6B34] border-r-[#0F2812] border-b-[#0F2812] text-[#55FF55] font-minecraft text-xs tracking-wide shadow-[3px_3px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-pulse" />
              <span>SYS.STATUS: OPERATIONAL</span>
            </div>
          </div>
        </div>

        {/* 4 Robotics HUD Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {statSlotConfigs.map((config) => {
            const Icon = config.icon;

            return (
              <div
                key={config.code}
                className={`relative ${config.bgGradient} border-4 ${config.borderBevel} shadow-[6px_6px_0px_#000] hover:-translate-y-2 transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between group overflow-hidden`}
                style={{
                  boxShadow: "6px 6px 0px #000000",
                }}
              >
                {/* Top Colored Energy Rail */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${config.topRail}`} />

                {/* Cyber Corner Aiming Reticles */}
                <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-white/20 group-hover:border-white/80 transition-colors pointer-events-none" />
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-white/20 group-hover:border-white/80 transition-colors pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-white/20 group-hover:border-white/80 transition-colors pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-white/20 group-hover:border-white/80 transition-colors pointer-events-none" />

                <div>
                  {/* Top Header: Code & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span className="font-mono text-[10px] sm:text-xs font-black tracking-wider text-[#8E8798] group-hover:text-white transition-colors">
                      {config.code}
                    </span>
                    <span
                      className={`font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border ${config.badgeClass}`}
                    >
                      {config.badge}
                    </span>
                  </div>

                  {/* Icon + Primary Number */}
                  <div className="flex items-center gap-3.5 my-3">
                    {/* Minecraft Inset Slot for Icon */}
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-black border-2 flex items-center justify-center shrink-0 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-200"
                      style={{ borderColor: config.accentColor }}
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2px]"
                        style={{ color: config.accentColor }}
                      />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="font-mono sm:font-minecraft font-black sm:font-normal text-2xl xs:text-3xl sm:text-3xl lg:text-4xl tracking-tight leading-none sm:[text-shadow:_2px_2px_0_#000]"
                        style={{ color: config.accentColor }}
                      >
                        {config.value}
                      </div>
                      <span className="font-mono text-[10px] text-[#888888] font-bold block mt-1 tracking-wider uppercase">
                        {config.valueDetail}
                      </span>
                    </div>
                  </div>

                  {/* Primary Label */}
                  <div className="font-sans sm:font-minecraft font-bold sm:font-normal text-xs sm:text-sm uppercase tracking-wide text-white mt-3 sm:[text-shadow:_1px_1px_0_#000]">
                    {config.label}
                  </div>

                  {/* Quick Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                    {config.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[9px] sm:text-[10px] bg-black/60 text-white/80 px-2 py-0.5 border border-white/10 shadow-[1px_1px_0px_#000]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Telemetry Progress Bar / Micro Gauge */}
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-between font-mono text-[9px] text-[#777777]">
                      <span>{config.meterLabel}</span>
                      <span style={{ color: config.accentColor }}>{config.meterPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black border border-white/20 p-px">
                      <div
                        className={`h-full ${config.meterColor} transition-all duration-500`}
                        style={{ width: `${config.meterPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Status Line */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#777777] pt-3.5 mt-4 border-t border-white/10 uppercase tracking-wider">
                  <span className="truncate pr-2">{config.subtext}</span>
                  <span
                    className="font-black flex items-center gap-1 shrink-0"
                    style={{ color: config.accentColor }}
                  >
                    <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
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
