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
      className="relative py-16 sm:py-20 bg-[#0C0810] border-b-4 border-black text-white overflow-hidden select-none"
    >
      {/* Background Pixel Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(#251833 1px, transparent 1px), linear-gradient(90deg, #251833 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5555]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#55FFFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ========================================================================= */}
        {/* SECTION HEADER: TITLE & SUBHEADER                                         */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          {/* Minecraft Boss Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-4 py-1.5 bg-[#18111B] text-[#55FF55] border-2 border-[#55FF55] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000]">
            <Swords className="w-4 h-4 text-[#55FF55]" />
            <span>ROBOSPRANO &apos;26 // 5 BATTLE ARENAS</span>
            <Swords className="w-4 h-4 text-[#55FF55]" />
          </div>

          {/* Minecraft 3D Headline */}
          <h2 className="font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight [text-shadow:_3px_3px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">
            FEATURED{" "}
            <span className="inline-block bg-[#FFAA00] text-black px-2.5 sm:px-3 py-0.5 border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] -rotate-1 [text-shadow:none]">
              ARENAS
            </span>
          </h2>

          <div className="bg-[#1B1B1B]/90 backdrop-blur-sm border-3 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] px-4 sm:px-6 py-2.5 shadow-[4px_4px_0px_#000]">
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#EAEAEA] font-mono leading-relaxed">
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
              badgeBg: "bg-[#FFAA00]/20",
              badgeText: "text-[#FFAA00]",
              badgeBorder: "border-[#FFAA00]",
              cardBorder: "border-t-[#FFAA00]/60",
              glow: "hover:shadow-[0_0_20px_rgba(255,170,0,0.3)]",
              icon: Bot,
            };
            const ThemeIcon = theme.icon;
            const isHovered = hoveredEvent === event.id;

            return (
              <div
                key={event.id}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                className={`bg-[#15101C] border-4 border-t-[#3A2A47] border-l-[#3A2A47] border-r-[#0A070D] border-b-[#0A070D] shadow-[6px_6px_0px_#000] flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${theme.glow} ${
                  isHovered ? "translate-y-[-4px]" : ""
                }`}
              >
                {/* Top Glowing Color Accent Bar */}
                <div
                  className="h-1.5 w-full transition-all duration-300"
                  style={{ backgroundColor: theme.accentColor }}
                />

                {/* 1. ARENA IMAGE VISUALIZER */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#100C14] border-b-3 border-black">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15101C] via-black/40 to-black/60 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 border-2 shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
                    >
                      <ThemeIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>{event.category}</span>
                    </span>
                  </div>

                  {/* Prize Loot Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-black uppercase px-2.5 py-1 bg-black/90 text-[#55FFFF] border-2 border-[#55FFFF] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000]">
                      <PixelDiamond size={14} />
                      <span>{event.prizePool}</span>
                    </span>
                  </div>

                  {/* Bottom Day / Schedule Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono font-bold text-[#EAEAEA] [text-shadow:_1px_1px_0_#000] z-10">
                    <span className="flex items-center gap-1 text-[#FFAA00]">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="text-[#AAAAAA]">{event.date.split(",")[0]}</span>
                  </div>
                </div>

                {/* 2. CARD CONTENT BODY */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Event Name */}
                    <h3 className="font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight [text-shadow:_1px_1px_0_#000] group-hover:text-[#FFAA00] transition-colors">
                      {event.title}
                    </h3>

                    {/* Tagline */}
                    <p className="font-mono text-xs font-bold text-[#BBBBBB] leading-relaxed line-clamp-2">
                      {event.tagline}
                    </p>
                  </div>

                  {/* Metadata Chips Slot */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t-2 border-white/10 font-mono text-[11px]">
                    {/* Team Size */}
                    <div className="p-2 bg-[#20182A] border border-t-[#3C2D4F] border-l-[#3C2D4F] border-r-[#0D0912] border-b-[#0D0912] flex items-center gap-1.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                      <Users className="w-3.5 h-3.5 text-[#55FF55] shrink-0" />
                      <span className="font-bold text-[#D0D0D0] truncate">
                        {event.teamSize}
                      </span>
                    </div>

                    {/* Entry Fee */}
                    <div className="p-2 bg-[#20182A] border border-t-[#3C2D4F] border-l-[#3C2D4F] border-r-[#0D0912] border-b-[#0D0D12] flex items-center gap-1.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                      <PixelGoldIngot size={14} />
                      <span className="font-black text-[#FFAA00] truncate">
                        {event.fee}
                      </span>
                    </div>
                  </div>

                  {/* Venue Location */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#999999] px-1 truncate">
                    <MapPin className="w-3 h-3 text-[#FF5555] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  {/* 3. DUAL ACTION BUTTONS (Minecraft 3D Buttons) */}
                  <div className="pt-2 flex items-center gap-2">
                    {/* View Rules / Specs */}
                    <Link
                      href={`/events/${event.slug}`}
                      onClick={() => playButtonClickSound()}
                      className="flex-1 py-2 px-3 bg-[#707070] hover:bg-[#808080] text-white border-3 border-t-[#9E9E9E] border-l-[#9E9E9E] border-r-[#383838] border-b-[#383838] font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all cursor-pointer"
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
                      className="py-2 px-3.5 bg-[#5B8731] hover:bg-[#689B37] text-white border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all cursor-pointer shrink-0"
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
          <div className="bg-[#1C1224] border-4 border-t-[#5A3C74] border-l-[#5A3C74] border-r-[#0A070D] border-b-[#0A070D] shadow-[6px_6px_0px_#000] p-4 xs:p-6 flex flex-col justify-between space-y-5 sm:space-y-6 relative group overflow-hidden">
            {/* Top Glowing Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase px-2.5 py-1 bg-[#FFAA00]/20 text-[#FFAA00] border-2 border-[#FFAA00] shadow-[2px_2px_0px_#000]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FULL SCHEDULE &amp; RULEBOOK</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight [text-shadow:_2px_2px_0_#000]">
                EXPLORE ALL{" "}
                <span className="text-[#55FF55]">5 ARENAS</span>
              </h3>

              <p className="font-mono text-xs font-bold text-[#CCCCCC] leading-relaxed">
                Review complete technical rulebooks, dimensional restrictions, battery voltage thresholds, dohyo ring guidelines, and penalty structures.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between p-2 bg-[#281A34] border border-t-[#4A3260] border-l-[#4A3260] border-r-[#100A15] border-b-[#100A15] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                <span className="text-[#AAAAAA]">TOTAL BOUNTY:</span>
                <span className="font-black text-[#55FFFF]">₹91,000 CASH</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#281A34] border border-t-[#4A3260] border-l-[#4A3260] border-r-[#100A15] border-b-[#100A15] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                <span className="text-[#AAAAAA]">DATES:</span>
                <span className="font-black text-[#FFAA00]">NOV 05–06, 2026</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#281A34] border border-t-[#4A3260] border-l-[#4A3260] border-r-[#100A15] border-b-[#100A15] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                <span className="text-[#AAAAAA]">VENUE:</span>
                <span className="font-black text-white">GCEK CAMPUS, BHAWANIPATNA</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/events"
              onClick={() => playButtonClickSound()}
              className="w-full py-3 bg-[#5B8731] hover:bg-[#689B37] text-white border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all cursor-pointer"
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
