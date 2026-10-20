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
      accentColor: "#D97706",
      accentGlow: "rgba(217,119,6,0.2)",
      bgGradient: "bg-[#FEFCE8]",
      borderBevel: "border-black",
      topRail: "bg-[#D97706]",
      badgeClass: "bg-[#FEF3C7] text-[#B45309] border-black shadow-[1px_1px_0px_#000]",
      icon: Trophy,
      subtext: "100% ESCROW GUARANTEED",
      tags: ["₹25K Top Bounty", "Instant Payout", "5 Arenas"],
      meterLabel: "XP BOUNTY LEVEL",
      meterPercent: 91,
      meterColor: "bg-[#D97706]",
    },
    {
      code: "SYS.02 // COMBAT",
      badge: "OFFICIAL ARENAS",
      value: "5 ARENAS",
      valueDetail: "5 BATTLEGROUNDS",
      label: "COMBAT ARENAS",
      accentColor: "#DC2626",
      accentGlow: "rgba(220,38,38,0.2)",
      bgGradient: "bg-[#FEF2F2]",
      borderBevel: "border-black",
      topRail: "bg-[#DC2626]",
      badgeClass: "bg-[#FEE2E2] text-[#DC2626] border-black shadow-[1px_1px_0px_#000]",
      icon: Swords,
      subtext: "STEEL HAZARDS & TRAPS",
      tags: ["Robo War", "Death Race", "Sumo", "Soccer", "Line Follower"],
      meterLabel: "ARENA HAZARD INDEX",
      meterPercent: 100,
      meterColor: "bg-[#DC2626]",
    },
    {
      code: "SYS.03 // PODIUM",
      badge: "GUARANTEED AWARDS",
      value: "15 SQUADS",
      valueDetail: "15 PODIUM TIERS",
      label: "PODIUM WINNERS",
      accentColor: "#0284C7",
      accentGlow: "rgba(2,132,199,0.2)",
      bgGradient: "bg-[#F0F9FF]",
      borderBevel: "border-black",
      topRail: "bg-[#0284C7]",
      badgeClass: "bg-[#E0F2FE] text-[#0284C7] border-black shadow-[1px_1px_0px_#000]",
      icon: Crown,
      subtext: "CASH & CHAMPIONSHIP TROPHIES",
      tags: ["1st, 2nd & 3rd Tiers", "Official Mementos"],
      meterLabel: "RECOGNITION QUOTA",
      meterPercent: 85,
      meterColor: "bg-[#0284C7]",
    },
    {
      code: "SYS.04 // FLEET",
      badge: "COMPETITORS",
      value: "50+ BOTS",
      valueDetail: "50+ WAR MACHINES",
      label: "COMBAT ROBOTICS FLEET",
      accentColor: "#16A34A",
      accentGlow: "rgba(22,163,74,0.2)",
      bgGradient: "bg-[#F0FDF4]",
      borderBevel: "border-black",
      topRail: "bg-[#16A34A]",
      badgeClass: "bg-[#DCFCE7] text-[#16A34A] border-black shadow-[1px_1px_0px_#000]",
      icon: Bot,
      subtext: "REGISTERED WAR MACHINES",
      tags: ["8KG Combat Class", "Autonomous", "Pilots"],
      meterLabel: "FLEET READINESS",
      meterPercent: 95,
      meterColor: "bg-[#16A34A]",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#F8FAFC] text-black border-b-4 border-black overflow-hidden select-none">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Telemetry Header Bar */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-black">
          {/* Left Title */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 bg-[#5DB329] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] relative">
              <Radio className="w-5 h-5 text-white animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-ping" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-sans sm:font-minecraft font-black sm:font-bold text-base sm:text-xl lg:text-2xl text-black uppercase tracking-wider">
                  ARENA TELEMETRY &amp; COMBAT SPECS
                </h2>
                <span className="font-mono sm:font-minecraft font-bold text-[10px] sm:text-xs text-black bg-[#FEF3C7] px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
                  EDITION X
                </span>
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-600 tracking-wide mt-0.5 font-bold">
                ROBOSPRANO &apos;26 // LIVE CHAMPIONSHIP METRICS &amp; PIT TELEMETRY
              </p>
            </div>
          </div>

          {/* Right Status Badges */}
          <div className="flex items-center gap-2.5 flex-wrap self-stretch sm:self-auto justify-between sm:justify-end">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black font-mono text-[11px] text-[#0284C7] shadow-[2px_2px_0px_#000] font-bold">
              <Wifi className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
              <span>12ms LIVE</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#5DB329] border-2 border-black text-white font-minecraft text-xs tracking-wide shadow-[3px_3px_0px_#000] font-bold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
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
                className={`relative ${config.bgGradient} border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-2 transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Top Colored Energy Rail */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${config.topRail}`} />

                <div>
                  {/* Top Header: Code & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span className="font-mono text-[10px] sm:text-xs font-black tracking-wider text-neutral-600">
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
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] group-hover:scale-110 transition-transform duration-200"
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2px]"
                        style={{ color: config.accentColor }}
                      />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="font-mono sm:font-minecraft font-black text-2xl xs:text-3xl sm:text-3xl lg:text-4xl tracking-tight leading-none"
                        style={{ color: config.accentColor }}
                      >
                        {config.value}
                      </div>
                      <span className="font-mono text-[10px] text-neutral-600 font-bold block mt-1 tracking-wider uppercase">
                        {config.valueDetail}
                      </span>
                    </div>
                  </div>

                  {/* Primary Label */}
                  <div className="font-sans sm:font-minecraft font-bold text-xs sm:text-sm uppercase tracking-wide text-neutral-900 mt-3">
                    {config.label}
                  </div>

                  {/* Quick Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-black/10">
                    {config.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[9px] sm:text-[10px] bg-white text-neutral-900 font-bold px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Telemetry Progress Bar */}
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-between font-mono text-[9px] text-neutral-600 font-bold">
                      <span>{config.meterLabel}</span>
                      <span style={{ color: config.accentColor }}>{config.meterPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-white border-2 border-black p-px shadow-[inset_1px_1px_0px_#000]">
                      <div
                        className={`h-full ${config.meterColor} transition-all duration-500`}
                        style={{ width: `${config.meterPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Status Line */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-neutral-600 pt-3.5 mt-4 border-t border-black/10 uppercase tracking-wider font-bold">
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
