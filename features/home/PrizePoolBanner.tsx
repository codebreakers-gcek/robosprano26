"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* CRISP MINECRAFT PIXEL ART ICONS (16x16 SVG - Pixel-Perfect)               */
/* ========================================================================= */

function PixelDiamond({ size = 20 }: { size?: number }) {
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

function PixelGoldIngot({ size = 20 }: { size?: number }) {
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

function PixelIronIngot({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="3" y="5" width="10" height="6" fill="#D8D8D8" />
      <rect x="4" y="4" width="8" height="2" fill="#FFFFFF" />
      <rect x="5" y="5" width="4" height="1" fill="#FFFFFF" />
      <rect x="3" y="11" width="10" height="2" fill="#6E6E6E" />
      <rect x="12" y="6" width="2" height="5" fill="#999999" />
    </svg>
  );
}

function PixelNetherite({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="3" y="5" width="10" height="6" fill="#3D383C" />
      <rect x="4" y="4" width="8" height="2" fill="#5F575E" />
      <rect x="5" y="5" width="3" height="1" fill="#8A7E89" />
      <rect x="3" y="11" width="10" height="2" fill="#1C181B" />
      <rect x="12" y="6" width="2" height="5" fill="#2A2429" />
    </svg>
  );
}

function PixelChest({ size = 24 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[2px_2px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect width="16" height="16" fill="#1C140A" />
      <rect x="1" y="1" width="14" height="14" fill="#865324" />
      <rect x="2" y="2" width="12" height="4" fill="#B37839" />
      <rect x="2" y="7" width="12" height="7" fill="#6A401A" />
      <rect x="1" y="6" width="14" height="1" fill="#1C140A" />
      <rect x="7" y="5" width="2" height="3" fill="#EAEAEA" />
      <rect x="7" y="6" width="2" height="1" fill="#555555" />
    </svg>
  );
}

function PixelSword({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="12" y="2" width="2" height="2" fill="#FF5555" />
      <rect x="10" y="4" width="2" height="2" fill="#FF5555" />
      <rect x="8" y="6" width="2" height="2" fill="#FF5555" />
      <rect x="6" y="8" width="2" height="2" fill="#880000" />
      <rect x="4" y="10" width="2" height="2" fill="#8F5500" />
      <rect x="5" y="9" width="1" height="1" fill="#FFE285" />
      <rect x="3" y="11" width="1" height="1" fill="#FFE285" />
      <rect x="2" y="12" width="2" height="2" fill="#5A3A00" />
    </svg>
  );
}

function PixelMinecart({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="2" y="7" width="12" height="6" fill="#888888" />
      <rect x="3" y="6" width="10" height="2" fill="#AAAAAA" />
      <rect x="4" y="8" width="8" height="2" fill="#FFAA00" />
      <rect x="1" y="13" width="14" height="2" fill="#444444" />
      <rect x="3" y="14" width="2" height="1" fill="#FFE285" />
      <rect x="11" y="14" width="2" height="1" fill="#FFE285" />
    </svg>
  );
}

function PixelAnvil({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="2" y="3" width="12" height="3" fill="#6A7A8A" />
      <rect x="3" y="2" width="10" height="1" fill="#9FB0C0" />
      <rect x="6" y="6" width="4" height="4" fill="#4A5666" />
      <rect x="3" y="10" width="10" height="3" fill="#6A7A8A" />
      <rect x="2" y="13" width="12" height="1" fill="#303A45" />
    </svg>
  );
}

function PixelFireCharge({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="4" y="4" width="8" height="8" fill="#55FF55" />
      <rect x="5" y="3" width="6" height="1" fill="#9EFF9E" />
      <rect x="5" y="12" width="6" height="1" fill="#008800" />
      <rect x="6" y="6" width="4" height="4" fill="#FFFFFF" />
    </svg>
  );
}

function PixelCompass({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="4" y="3" width="8" height="10" fill="#55FFFF" />
      <rect x="3" y="4" width="10" height="8" fill="#00AAAA" />
      <rect x="5" y="5" width="6" height="6" fill="#003333" />
      <rect x="7" y="6" width="2" height="2" fill="#FF5555" />
      <rect x="8" y="8" width="1" height="2" fill="#FFFFFF" />
    </svg>
  );
}

function PixelXPOrb({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 animate-pulse"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="6" y="4" width="4" height="8" fill="#55FF55" />
      <rect x="4" y="6" width="8" height="4" fill="#80FF20" />
      <rect x="7" y="7" width="2" height="2" fill="#FFFFFF" />
    </svg>
  );
}

/* ========================================================================= */
/* DATA SPECIFICATION - ACCORDING TO USER'S EXACT REFERENCE TABLE            */
/* ========================================================================= */

interface ArenaBountyData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  icon: React.ReactNode;
  themeStyle: {
    cardBg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accentGlow: string;
  };
  first: string;
  second: string;
  third: string;
  total: string;
  highlight?: boolean;
}

const ARENA_BOUNTIES: ArenaBountyData[] = [
  {
    id: "death-race",
    name: "Death Race",
    category: "SPEED & OBSTACLE CIRCUIT",
    tagline: "High-octane obstacle terrain, ramps, loops, and time-attack sprints.",
    icon: <PixelMinecart size={22} />,
    themeStyle: {
      cardBg: "bg-[#251A0A]",
      border: "border-[#FFAA00]",
      badgeBg: "bg-[#FFAA00]/20",
      badgeText: "text-[#FFAA00]",
      accentGlow: "shadow-[0_0_15px_rgba(255,170,0,0.2)]",
    },
    first: "₹8k",
    second: "₹6k",
    third: "₹4k",
    total: "₹18,000",
  },
  {
    id: "robo-sumo",
    name: "Robo Sumo",
    category: "DOHYO RING PUSH-OUT",
    tagline: "High-torque bot wrestling to shove opponents out of the circular ring.",
    icon: <PixelAnvil size={22} />,
    themeStyle: {
      cardBg: "bg-[#18202A]",
      border: "border-[#8FB2D4]",
      badgeBg: "bg-[#8FB2D4]/20",
      badgeText: "text-[#8FB2D4]",
      accentGlow: "shadow-[0_0_15px_rgba(143,178,212,0.2)]",
    },
    first: "₹8k",
    second: "₹6k",
    third: "₹4k",
    total: "₹18,000",
  },
  {
    id: "robo-soccer",
    name: "Robo Soccer",
    category: "BALL STRIKER ARENA",
    tagline: "High-agility autonomous and RC soccer bots competing on turf pitch.",
    icon: <PixelFireCharge size={22} />,
    themeStyle: {
      cardBg: "bg-[#0E2214]",
      border: "border-[#55FF55]",
      badgeBg: "bg-[#55FF55]/20",
      badgeText: "text-[#55FF55]",
      accentGlow: "shadow-[0_0_15px_rgba(85,255,85,0.2)]",
    },
    first: "₹7k",
    second: "₹5k",
    third: "₹3k",
    total: "₹15,000",
  },
  {
    id: "line-follower",
    name: "Line Follower",
    category: "AUTONOMOUS PID TRACING",
    tagline: "High-precision IR sensor array path tracing across tricky curves.",
    icon: <PixelCompass size={22} />,
    themeStyle: {
      cardBg: "bg-[#0F2228]",
      border: "border-[#55FFFF]",
      badgeBg: "bg-[#55FFFF]/20",
      badgeText: "text-[#55FFFF]",
      accentGlow: "shadow-[0_0_15px_rgba(85,255,255,0.2)]",
    },
    first: "₹7k",
    second: "₹5k",
    third: "₹3k",
    total: "₹15,000",
  },
  {
    id: "robo-war",
    name: "Robo War",
    category: "HEAVYWEIGHT FULL COMBAT",
    tagline: "The main-event cage match: spinning blades, flippers, and steel carnage.",
    icon: <PixelSword size={22} />,
    themeStyle: {
      cardBg: "bg-[#281010]",
      border: "border-[#FF5555]",
      badgeBg: "bg-[#FF5555]/20",
      badgeText: "text-[#FF5555]",
      accentGlow: "shadow-[0_0_20px_rgba(255,85,85,0.35)]",
    },
    first: "₹12k",
    second: "₹8k",
    third: "₹5k",
    total: "₹25,000",
    highlight: true,
  },
];

export function PrizePoolBanner() {
  const [hoveredArena, setHoveredArena] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"table" | "cards">("table");

  return (
    <section id="prize-pool" className="relative py-12 sm:py-24 border-b-4 border-black overflow-hidden bg-[#100C12] text-white select-none">
      {/* Minecraft Background with Vignette & Dimmer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/minecraft/sponsor_bg.png"
          alt="Minecraft Nether & Dungeons"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ========================================================================= */}
        {/* 1. TOP MINECRAFT BOSS BAR & LEVEL 91 XP HUD                               */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Minecraft Boss Tag */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 font-mono sm:font-minecraft font-bold sm:font-normal text-[11px] sm:text-sm uppercase px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[#18111B] text-[#FFAA00] border-2 border-[#FFAA00] shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000] sm:[text-shadow:_1px_1px_0_#000]">
            <PixelXPOrb size={14} />
            <span>ROBOSPRANO &apos;26 // CHAMPIONSHIP BOUNTIES</span>
            <PixelXPOrb size={14} />
          </div>

          {/* Minecraft 3D Headline */}
          <h2 className="font-minecraft text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight [text-shadow:_2px_2px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000] sm:[text-shadow:_3px_3px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">
            ARENA{" "}
            <span className="inline-block bg-[#FFAA00] text-black px-2.5 sm:px-3.5 py-0.5 sm:py-1 border-2 sm:border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] -rotate-1 [text-shadow:none]">
              PRIZE POOL
            </span>
          </h2>

          {/* Minecraft Experience Bar: ₹91,000 with Level 91 Number */}
          <div className="w-full max-w-md pt-1 flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-between w-full px-1 font-mono sm:font-minecraft font-bold sm:font-normal text-[11px] sm:text-xs">
              <span className="text-[#55FF55] sm:[text-shadow:_1px_1px_0_#000]">
                LEVEL 91 UNLOCKED
              </span>
              <span className="text-[#FFAA00] sm:[text-shadow:_1px_1px_0_#000]">
                ₹91,000 TOTAL REWARDS
              </span>
            </div>

            {/* Glowing Segmented XP Bar */}
            <div className="relative w-full flex flex-col items-center">
              <div className="w-full h-3.5 bg-black border-2 border-t-[#373737] border-l-[#373737] border-r-[#8B8B8B] border-b-[#8B8B8B] p-0.5 shadow-[inset_1px_1px_3px_#000]">
                <div className="w-full h-full bg-gradient-to-r from-[#55FF55] via-[#A8FF55] to-[#55FF55] shadow-[0_0_12px_#55FF55]" />
              </div>

              {/* Minecraft Level Number in Neon Lime */}
              <div className="font-minecraft text-xl sm:text-2xl font-bold text-[#80FF20] [text-shadow:2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_0_0_8px_#55FF55] -mt-1 select-none">
                91
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm font-bold text-[#CCCCCC] max-w-xl [text-shadow:_1px_1px_0_#000] leading-relaxed pt-1 px-1">
              Construct, wire, and deploy your combat bots across 5 high-voltage arenas. Win direct cash bounties, championship trophies, and verified state credentials.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CORE MASTER LOOT MATRIX (DARK OBSIDIAN MINECRAFT STYLE)                */}
        {/* ========================================================================= */}
        <div className="relative bg-[#1A121F] border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000] p-2.5 sm:p-7">
          {/* Decorative Corner Pixel Blocks */}
          <div className="absolute -top-2 -left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FFAA00] border-2 border-black" />
          <div className="absolute -top-2 -right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FFAA00] border-2 border-black" />
          <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FFAA00] border-2 border-black" />
          <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FFAA00] border-2 border-black" />

          {/* Matrix Header Banner */}
          <div className="bg-[#261A2D] border-2 sm:border-[3px] border-t-[#4A3258] border-l-[#4A3258] border-r-[#0D0910] border-b-[#0D0910] p-2.5 sm:p-4 mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-[inset_1px_1px_3px_#000]">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black border-2 border-[#FFAA00] flex items-center justify-center shrink-0">
                <PixelChest size={20} />
              </div>
              <div>
                <h3 className="font-sans sm:font-minecraft font-black sm:font-normal text-xs sm:text-base text-white uppercase tracking-wider">
                  ARENA CASH MATRIX // PODIUM PAYOUTS
                </h3>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-400 block font-medium">
                  Distributed immediately to 15 squads at the Robosprano &apos;26 Grand Finale
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2">
              {/* Mobile View Switcher */}
              <div className="sm:hidden flex items-center bg-black/80 border border-neutral-700 p-0.5 shadow-[1px_1px_0px_#000]">
                <button
                  type="button"
                  onClick={() => {
                    playButtonClickSound();
                    setMobileView("table");
                  }}
                  className={`px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider transition-all ${mobileView === "table"
                      ? "bg-[#FFAA00] text-black border border-[#FFE285] shadow-[1px_1px_0px_#000]"
                      : "text-neutral-400 hover:text-white"
                    }`}
                >
                  TABLE
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playButtonClickSound();
                    setMobileView("cards");
                  }}
                  className={`px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider transition-all ${mobileView === "cards"
                      ? "bg-[#FFAA00] text-black border border-[#FFE285] shadow-[1px_1px_0px_#000]"
                      : "text-neutral-400 hover:text-white"
                    }`}
                >
                  CARDS
                </button>
              </div>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 bg-black/60 border border-[#55FF55]/40 text-[#55FF55] font-mono sm:font-minecraft font-bold text-[11px] sm:text-xs shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#55FF55] rotate-45" />
                <span>TOTAL: ₹91,000</span>
              </div>
            </div>
          </div>

          {/* 1. Responsive Obsidian Matrix Table (Default & Desktop View) */}
          <div
            className={`overflow-x-auto -mx-1 sm:mx-0 scrollbar-thin scrollbar-thumb-[#FFAA00]/40 scrollbar-track-black/40 ${mobileView === "cards" ? "hidden sm:block" : "block"
              }`}
          >
            <table className="w-full text-left border-collapse font-sans sm:font-minecraft table-fixed sm:table-auto min-w-[300px]">
              <colgroup className="sm:hidden">
                <col className="w-[30%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[19%]" />
              </colgroup>
              <thead>
                <tr className="bg-[#0E0A12] text-white border-b-2 sm:border-b-3 border-black font-sans sm:font-minecraft font-black sm:font-normal text-[11px] sm:text-sm uppercase tracking-wider">
                  <th className="py-2.5 px-2 sm:py-3 sm:px-6 border-r border-neutral-800 sm:border-r-2 text-left">
                    EVENT
                  </th>
                  <th className="py-2.5 px-0.5 sm:py-3 sm:px-6 border-r border-neutral-800 sm:border-r-2 text-center">
                    <div className="inline-flex items-center justify-center gap-1 text-[#55FFFF]">
                      <PixelDiamond size={13} />
                      <span>1ST</span>
                    </div>
                  </th>
                  <th className="py-2.5 px-0.5 sm:py-3 sm:px-6 border-r border-neutral-800 sm:border-r-2 text-center">
                    <div className="inline-flex items-center justify-center gap-1 text-[#FFAA00]">
                      <PixelGoldIngot size={13} />
                      <span>2ND</span>
                    </div>
                  </th>
                  <th className="py-2.5 px-0.5 sm:py-3 sm:px-6 border-r border-neutral-800 sm:border-r-2 text-center">
                    <div className="inline-flex items-center justify-center gap-1 text-[#E0E0E0]">
                      <PixelIronIngot size={13} />
                      <span>3RD</span>
                    </div>
                  </th>
                  <th className="py-2.5 px-1 sm:py-3 sm:px-6 text-right text-[#55FF55]">
                    TOTAL
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y border-b border-neutral-800 sm:divide-y-2 divide-neutral-900 text-sm">
                {ARENA_BOUNTIES.map((arena) => (
                  <tr
                    key={arena.id}
                    onMouseEnter={() => setHoveredArena(arena.id)}
                    onMouseLeave={() => setHoveredArena(null)}
                    className={`transition-colors duration-150 ${arena.highlight
                        ? "bg-[#2A1010]/90 hover:bg-[#381616]"
                        : hoveredArena === arena.id
                          ? "bg-[#251A2C]"
                          : "bg-[#140E18] hover:bg-[#1D1424]"
                      }`}
                  >
                    {/* Event Name & Category */}
                    <td className="py-2 px-1.5 sm:py-3.5 sm:px-6 border-r border-neutral-900 sm:border-r-2">
                      <div className="min-w-0">
                        <span className="font-sans sm:font-minecraft font-black sm:font-normal text-xs sm:text-lg text-white uppercase tracking-tight block leading-tight truncate sm:whitespace-normal">
                          {arena.name}
                        </span>
                        <span className="font-mono font-medium text-[8px] xs:text-[9px] sm:text-[10px] text-neutral-400 block truncate leading-tight mt-0.5">
                          {arena.category}
                        </span>
                      </div>
                    </td>

                    {/* 1st Prize */}
                    <td className="py-2 px-0.5 sm:py-3.5 sm:px-6 border-r border-neutral-900 sm:border-r-2 text-center">
                      <span className="inline-block px-1.5 py-0.5 sm:px-3 sm:py-1 bg-black text-[#55FFFF] font-mono sm:font-minecraft font-black text-xs sm:text-base border border-t-[#55FFFF] border-l-[#55FFFF] border-r-[#008888] border-b-[#008888] sm:border-2 shadow-[1px_1px_0px_#000] sm:shadow-[2px_2px_0px_#000] sm:[text-shadow:_1px_1px_0_#000] whitespace-nowrap">
                        {arena.first}
                      </span>
                    </td>

                    {/* 2nd Prize */}
                    <td className="py-2 px-0.5 sm:py-3.5 sm:px-6 border-r border-neutral-900 sm:border-r-2 text-center">
                      <span className="inline-block px-1.5 py-0.5 sm:px-3 sm:py-1 bg-black text-[#FFAA00] font-mono sm:font-minecraft font-black text-xs sm:text-base border border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] sm:border-2 shadow-[1px_1px_0px_#000] sm:shadow-[2px_2px_0px_#000] sm:[text-shadow:_1px_1px_0_#000] whitespace-nowrap">
                        {arena.second}
                      </span>
                    </td>

                    {/* 3rd Prize */}
                    <td className="py-2 px-0.5 sm:py-3.5 sm:px-6 border-r border-neutral-900 sm:border-r-2 text-center">
                      <span className="inline-block px-1.5 py-0.5 sm:px-3 sm:py-1 bg-black text-[#E0E0E0] font-mono sm:font-minecraft font-black text-xs sm:text-base border border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#666666] border-b-[#666666] sm:border-2 shadow-[1px_1px_0px_#000] sm:shadow-[2px_2px_0px_#000] sm:[text-shadow:_1px_1px_0_#000] whitespace-nowrap">
                        {arena.third}
                      </span>
                    </td>

                    {/* Total */}
                    <td className="py-2 px-1 sm:py-3.5 sm:px-6 text-right">
                      <span className="font-mono sm:font-minecraft font-black text-xs sm:text-base text-[#55FF55] bg-black px-1.5 py-0.5 sm:px-3 sm:py-1 border border-[#55FF55]/60 sm:border-2 shadow-[1px_1px_0px_#000] sm:shadow-[2px_2px_0px_#000] inline-block whitespace-nowrap">
                        <span className="xs:hidden">{arena.total.replace(",000", "k")}</span>
                        <span className="hidden xs:inline">{arena.total}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Master Summary Footer */}
              <tfoot>
                {/* Mobile tfoot */}
                <tr className="bg-[#0A070D] text-white border-t-2 border-black sm:hidden">
                  <td
                    colSpan={3}
                    className="py-2.5 px-2 font-sans font-black text-xs uppercase tracking-wider text-[#FFAA00]"
                  >
                    <div className="flex items-center gap-1.5">
                      <PixelXPOrb size={13} />
                      <span>TOTAL POOL:</span>
                    </div>
                  </td>
                  <td
                    colSpan={2}
                    className="py-2.5 px-1.5 text-right font-mono font-black text-sm text-[#55FF55] whitespace-nowrap"
                  >
                    ₹91,000
                  </td>
                </tr>

                {/* Desktop tfoot */}
                <tr className="hidden sm:table-row bg-[#0A070D] text-white border-t-3 border-black font-minecraft">
                  <td
                    colSpan={4}
                    className="py-4 px-6 font-bold text-base uppercase tracking-wider text-[#FFAA00]"
                  >
                    <div className="flex items-center gap-2">
                      <PixelXPOrb size={18} />
                      <span>CUMULATIVE ROBOTICS BOUNTY DISTRIBUTED:</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-2xl text-[#55FF55] [text-shadow:_1px_1px_0_#000]">
                    ₹91,000
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* 2. Mobile Cards View (Optional alternative tab on mobile) */}
          <div className={`sm:hidden space-y-3 ${mobileView === "cards" ? "block" : "hidden"}`}>
            {ARENA_BOUNTIES.map((arena) => (
              <div
                key={arena.id}
                className={`p-3 border-2 ${arena.highlight
                    ? "bg-[#281010] border-[#FF5555] shadow-[0_0_12px_rgba(255,85,85,0.25)]"
                    : "bg-[#140E18] border-neutral-800"
                  }`}
              >
                {/* Card Header: Icon + Name + Category + Total */}
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black/70 border border-neutral-700 flex items-center justify-center shrink-0">
                      {arena.icon}
                    </div>
                    <div>
                      <h4 className="font-sans sm:font-minecraft font-black sm:font-normal text-sm text-white uppercase tracking-tight">
                        {arena.name}
                      </h4>
                      <span className="font-mono text-[9px] text-neutral-400 block font-medium">
                        {arena.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-[8px] text-neutral-400 block uppercase font-bold">ARENA POOL</span>
                    <span className="font-mono sm:font-minecraft text-xs text-[#55FF55] bg-black px-2 py-0.5 border border-[#55FF55]/60 inline-block font-black">
                      {arena.total}
                    </span>
                  </div>
                </div>

                {/* Card Tagline */}
                <p className="font-mono text-[10px] text-neutral-300 py-2 leading-relaxed">
                  {arena.tagline}
                </p>

                {/* Podium Grid (1st, 2nd, 3rd) */}
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <div className="bg-black/70 border border-t-[#55FFFF] border-l-[#55FFFF] border-r-[#008888] border-b-[#008888] p-1.5 text-center shadow-[1px_1px_0px_#000]">
                    <div className="inline-flex items-center justify-center gap-1 text-[#55FFFF] text-[10px] font-sans sm:font-minecraft font-bold">
                      <PixelDiamond size={12} />
                      <span>1ST</span>
                    </div>
                    <div className="font-mono sm:font-minecraft text-xs font-black text-[#55FFFF] mt-0.5">
                      {arena.first}
                    </div>
                  </div>

                  <div className="bg-black/70 border border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] p-1.5 text-center shadow-[1px_1px_0px_#000]">
                    <div className="inline-flex items-center justify-center gap-1 text-[#FFAA00] text-[10px] font-sans sm:font-minecraft font-bold">
                      <PixelGoldIngot size={12} />
                      <span>2ND</span>
                    </div>
                    <div className="font-mono sm:font-minecraft text-xs font-black text-[#FFAA00] mt-0.5">
                      {arena.second}
                    </div>
                  </div>

                  <div className="bg-black/70 border border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#666666] border-b-[#666666] p-1.5 text-center shadow-[1px_1px_0px_#000]">
                    <div className="inline-flex items-center justify-center gap-1 text-[#E0E0E0] text-[10px] font-sans sm:font-minecraft font-bold">
                      <PixelIronIngot size={12} />
                      <span>3RD</span>
                    </div>
                    <div className="font-mono sm:font-minecraft text-xs font-black text-[#E0E0E0] mt-0.5">
                      {arena.third}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Cumulative Total Card Footer */}
            <div className="bg-[#0A070D] border-2 border-black p-2.5 flex items-center justify-between shadow-[2px_2px_0px_#000]">
              <div className="flex items-center gap-1.5 font-sans sm:font-minecraft font-bold text-xs text-[#FFAA00]">
                <PixelXPOrb size={14} />
                <span>TOTAL REWARDS POOL:</span>
              </div>
              <span className="font-mono sm:font-minecraft font-black text-sm text-[#55FF55]">
                ₹91,000
              </span>
            </div>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* 4. UNIVERSAL PARTICIPANT LOOT CHEST WITH MINECRAFT ARTWORK                */}
        {/* ========================================================================= */}
        <div className="bg-[#1F1424] border-4 border-black p-5 sm:p-7 shadow-[8px_8px_0px_#000] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Minecraft Character Group Art Banner */}
          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative shrink-0">
              <Image
                src="/minecraft/wondering.webp"
                alt="Minecraft Adventurers"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-[#55FF55] font-sans sm:font-minecraft font-bold text-xs uppercase mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>UNIVERSAL PARTICIPANT REWARDS</span>
              </div>
              <h3 className="font-sans sm:font-minecraft font-black sm:font-normal text-xl sm:text-2xl text-white uppercase tracking-tight">
                CERTIFICATES, SWAG KITS &amp; MENTORSHIP
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                Every team deploying a bot in the arenas receives state-certified participation credentials, official Robosprano kit badges, and direct technical jury feedback.
              </p>
            </div>
          </div>

          <Link
            href="/events"
            onClick={() => playButtonClickSound()}
            className="w-full lg:w-auto bg-[#FFAA00] hover:bg-[#FFB726] text-black font-sans sm:font-minecraft font-black sm:font-normal text-xs sm:text-sm uppercase tracking-wider border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] active:border-t-[#8F5500] active:border-l-[#8F5500] active:border-r-[#FFE285] active:border-b-[#FFE285] px-7 py-3.5 shadow-[4px_4px_0px_#000] transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer active:translate-y-1 relative z-10"
          >
            <span>CLAIM YOUR BOT SLOT</span>
            <ArrowRight className="w-4 h-4 stroke-[3px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
