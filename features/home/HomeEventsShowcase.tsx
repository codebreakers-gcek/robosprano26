"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ROBOTICS_EVENTS } from "@/data/roboticsEvents";
import {
  Swords,
  Trophy,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  Bot,
  Zap,
  Sparkles,
} from "lucide-react";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* CRISP MINECRAFT PIXEL ART ICONS (16x16 Crisp SVGs)                        */
/* ========================================================================= */

function PixelDiamond({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="5" y="2" width="6" height="2" fill="#55FFFF" />
      <rect x="3" y="4" width="10" height="2" fill="#55FFFF" />
      <rect x="2" y="6" width="12" height="4" fill="#00AAAA" />
      <rect x="4" y="6" width="4" height="2" fill="#55FFFF" />
      <rect x="5" y="4" width="2" height="2" fill="#FFFFFF" />
      <rect x="4" y="10" width="8" height="2" fill="#008888" />
      <rect x="6" y="12" width="4" height="2" fill="#004444" />
      <rect x="7" y="14" width="2" height="1" fill="#002222" />
    </svg>
  );
}

function PixelEmerald({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="5" y="2" width="6" height="2" fill="#55FF55" />
      <rect x="3" y="4" width="10" height="2" fill="#55FF55" />
      <rect x="2" y="6" width="12" height="4" fill="#1B801B" />
      <rect x="4" y="6" width="4" height="2" fill="#55FF55" />
      <rect x="5" y="4" width="2" height="2" fill="#FFFFFF" />
      <rect x="4" y="10" width="8" height="2" fill="#145A14" />
      <rect x="6" y="12" width="4" height="2" fill="#0D3A0D" />
      <rect x="7" y="14" width="2" height="1" fill="#061D06" />
    </svg>
  );
}

function PixelGoldIngot({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="3" y="5" width="10" height="6" fill="#FFAA00" />
      <rect x="4" y="4" width="8" height="2" fill="#FFE285" />
      <rect x="5" y="5" width="4" height="1" fill="#FFFFFF" />
      <rect x="3" y="11" width="10" height="2" fill="#8F5500" />
      <rect x="12" y="6" width="2" height="5" fill="#C47300" />
    </svg>
  );
}

interface EventThemeConfig {
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  cardBorder: string;
  glow: string;
  icon: typeof Swords;
}

const EVENT_THEMES: Record<string, EventThemeConfig> = {
  "robo-war": {
    accentColor: "#FF5555",
    badgeBg: "bg-[#FF5555]/20",
    badgeText: "text-[#FF5555]",
    badgeBorder: "border-[#FF5555]",
    cardBorder: "border-t-[#FF5555]/60 hover:border-[#FF5555]",
    glow: "hover:shadow-[0_0_25px_rgba(255,85,85,0.3)]",
    icon: Swords,
  },
  "death-race": {
    accentColor: "#FFAA00",
    badgeBg: "bg-[#FFAA00]/20",
    badgeText: "text-[#FFAA00]",
    badgeBorder: "border-[#FFAA00]",
    cardBorder: "border-t-[#FFAA00]/60 hover:border-[#FFAA00]",
    glow: "hover:shadow-[0_0_25px_rgba(255,170,0,0.3)]",
    icon: Trophy,
  },
  "robo-sumo": {
    accentColor: "#55FFFF",
    badgeBg: "bg-[#55FFFF]/20",
    badgeText: "text-[#55FFFF]",
    badgeBorder: "border-[#55FFFF]",
    cardBorder: "border-t-[#55FFFF]/60 hover:border-[#55FFFF]",
    glow: "hover:shadow-[0_0_25px_rgba(85,255,255,0.3)]",
    icon: Bot,
  },
  "robo-soccer": {
    accentColor: "#55FF55",
    badgeBg: "bg-[#55FF55]/20",
    badgeText: "text-[#55FF55]",
    badgeBorder: "border-[#55FF55]",
    cardBorder: "border-t-[#55FF55]/60 hover:border-[#55FF55]",
    glow: "hover:shadow-[0_0_25px_rgba(85,255,85,0.3)]",
    icon: Zap,
  },
  "line-follower": {
    accentColor: "#D070FF",
    badgeBg: "bg-[#D070FF]/20",
    badgeText: "text-[#D070FF]",
    badgeBorder: "border-[#D070FF]",
    cardBorder: "border-t-[#D070FF]/60 hover:border-[#D070FF]",
    glow: "hover:shadow-[0_0_25px_rgba(208,112,255,0.3)]",
    icon: Sparkles,
  },
};

export function HomeEventsShowcase() {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <section
      id="events-showcase"
      className="relative py-16 sm:py-20 bg-[#F0FDF4] border-b-4 border-black text-black overflow-hidden select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ========================================================================= */}
        {/* SECTION HEADER: TITLE & SUBHEADER                                         */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          {/* Minecraft Boss Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-4 py-1.5 bg-[#5DB329] text-white border-2 border-black shadow-[3px_3px_0px_#000]">
            <Swords className="w-4 h-4 text-white" />
            <span>ROBOSPRANO &apos;26 // 5 BATTLE ARENAS</span>
            <Swords className="w-4 h-4 text-white" />
          </div>

          {/* Minecraft Headline */}
          <h2 className="font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-tight [text-shadow:_2px_2px_0_#CBD5E1]">
            FEATURED{" "}
            <span className="inline-block bg-[#FFAA00] text-black px-2.5 sm:px-3 py-0.5 border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] -rotate-1 [text-shadow:none]">
              ARENAS
            </span>
          </h2>

          <div className="bg-white/95 border-3 border-black px-4 sm:px-6 py-2.5 shadow-[4px_4px_0px_#000]">
            <p className="text-xs sm:text-sm md:text-base font-bold text-neutral-800 font-mono leading-relaxed">
              5 high-octane robotics battlegrounds at GCEK. Choose your track, build your bot, and compete for ₹91,000+ in guaranteed bounties.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EVENTS CARDS GRID (5 EVENTS)                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROBOTICS_EVENTS.map((event, index) => {
            const theme = EVENT_THEMES[event.id] || {
              accentColor: "#FFAA00",
              badgeBg: "bg-[#FEF3C7]",
              badgeText: "text-[#B45309]",
              badgeBorder: "border-black",
              cardBorder: "border-black",
              glow: "",
              icon: Bot,
            };
            const ThemeIcon = theme.icon;
            const isHovered = hoveredEvent === event.id;

            return (
              <div
                key={event.id}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                className={`bg-white border-4 border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                  isHovered ? "translate-y-[-4px]" : ""
                }`}
              >
                {/* Top Glowing Color Accent Bar */}
                <div
                  className="h-2 w-full transition-all duration-300"
                  style={{ backgroundColor: theme.accentColor }}
                />

                {/* 1. ARENA IMAGE VISUALIZER */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 border-b-3 border-black">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 bg-white text-black border-2 border-black shadow-[2px_2px_0px_#000]"
                    >
                      <ThemeIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>{event.category}</span>
                    </span>
                  </div>

                  {/* Prize Loot Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-black uppercase px-2.5 py-1 bg-[#E0F2FE] text-[#0284C7] border-2 border-black shadow-[2px_2px_0px_#000]">
                      <PixelDiamond size={14} />
                      <span>{event.prizePool}</span>
                    </span>
                  </div>

                  {/* Bottom Day / Schedule Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono font-bold bg-white/95 px-2 py-1 border border-black shadow-[1px_1px_0_#000] z-10">
                    <span className="flex items-center gap-1 text-[#B45309]">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="text-neutral-700">{event.date.split(",")[0]}</span>
                  </div>
                </div>

                {/* 2. CARD CONTENT BODY */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Event Name */}
                    <h3 className="font-black text-xl sm:text-2xl text-black uppercase tracking-tight leading-tight group-hover:text-[#0084FF] transition-colors">
                      {event.title}
                    </h3>

                    {/* Tagline */}
                    <p className="font-mono text-xs font-bold text-neutral-600 leading-relaxed line-clamp-2">
                      {event.tagline}
                    </p>
                  </div>

                  {/* Metadata Chips Slot */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t-2 border-black/10 font-mono text-[11px]">
                    {/* Team Size */}
                    <div className="p-2 bg-[#F8FAFC] border-2 border-black flex items-center gap-1.5 shadow-[1px_1px_0px_#000]">
                      <Users className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span className="font-bold text-neutral-900 truncate">
                        {event.teamSize}
                      </span>
                    </div>

                    {/* Entry Fee */}
                    <div className="p-2 bg-[#FEF3C7] border-2 border-black flex items-center gap-1.5 shadow-[1px_1px_0px_#000]">
                      <PixelGoldIngot size={14} />
                      <span className="font-black text-[#92400E] truncate">
                        {event.fee}
                      </span>
                    </div>
                  </div>

                  {/* Venue Location */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-700 px-1 font-bold truncate">
                    <MapPin className="w-3 h-3 text-[#DC2626] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  {/* 3. DUAL ACTION BUTTONS */}
                  <div className="pt-2 flex items-center gap-2">
                    {/* View Rules / Specs */}
                    <Link
                      href={`/events/${event.slug}`}
                      onClick={() => playButtonClickSound()}
                      className="flex-1 py-2 px-3 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <span>SPECS</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                    </Link>

                    {/* Register Form */}
                    <a
                      href={event.enrollLink || "https://forms.google.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playButtonClickSound()}
                      className="py-2 px-3.5 bg-[#5DB329] hover:bg-[#6CBF35] text-white border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all cursor-pointer shrink-0 [text-shadow:_1px_1px_0_#2C4813]"
                    >
                      <span>REGISTER</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5px]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6TH CARD: TOURNAMENT SUMMARY & ALL ARENAS HUB */}
          <div className="bg-[#FEFCE8] border-4 border-black shadow-[6px_6px_0px_#000] p-4 xs:p-6 flex flex-col justify-between space-y-5 sm:space-y-6 relative group overflow-hidden text-black">
            {/* Top Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase px-2.5 py-1 bg-[#FFAA00] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FULL SCHEDULE &amp; RULEBOOK</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl text-black uppercase tracking-tight leading-tight">
                EXPLORE ALL{" "}
                <span className="text-[#16A34A]">5 ARENAS</span>
              </h3>

              <p className="font-mono text-xs font-bold text-neutral-700 leading-relaxed">
                Review complete technical rulebooks, dimensional restrictions, battery voltage thresholds, dohyo ring guidelines, and penalty structures.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between p-2 bg-white border-2 border-black shadow-[1px_1px_0_#000]">
                <span className="text-neutral-600 font-bold">TOTAL BOUNTY:</span>
                <span className="font-black text-[#0284C7]">₹91,000 CASH</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white border-2 border-black shadow-[1px_1px_0_#000]">
                <span className="text-neutral-600 font-bold">DATES:</span>
                <span className="font-black text-[#B45309]">NOV 05–06, 2026</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white border-2 border-black shadow-[1px_1px_0_#000]">
                <span className="text-neutral-600 font-bold">VENUE:</span>
                <span className="font-black text-black">GCEK CAMPUS</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/events"
              onClick={() => playButtonClickSound()}
              className="w-full py-3 bg-[#0084FF] hover:bg-[#0070DE] text-white border-3 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>BROWSE ALL EVENTS</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
