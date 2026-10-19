"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Bot,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { ROBOTICS_EVENTS } from "@/data/roboticsEvents";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* CRISP MINECRAFT PIXEL ART ICONS (16x16 Crisp SVGs)                        */
/* ========================================================================= */

function PixelDiamond({ size = 18 }: { size?: number }) {
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

function PixelChest({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[2px_2px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Outer black edge */}
      <rect width="16" height="16" fill="#1C1208" />
      {/* Oak chest lid */}
      <rect x="1" y="1" width="14" height="4" fill="#B37839" />
      <rect x="2" y="2" width="12" height="2" fill="#865324" />
      {/* Dividing seam */}
      <rect x="1" y="5" width="14" height="1" fill="#1C1208" />
      {/* Oak chest base */}
      <rect x="1" y="6" width="14" height="9" fill="#865324" />
      <rect x="2" y="7" width="12" height="7" fill="#6A401A" />
      {/* Iron latch lock */}
      <rect x="7" y="4" width="2" height="4" fill="#E0E0E0" />
      <rect x="7" y="5" width="2" height="2" fill="#555555" />
    </svg>
  );
}


function PixelGoldIngot({ size = 18 }: { size?: number }) {
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

/* Authentic 3D Minecraft Chest Iron Latch */
function MinecraftChestLatch() {
  return (
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">
      {/* Upper hinge plate on chest lid */}
      <div className="w-4 h-2 bg-[#A0A0A0] border-2 border-b-0 border-black flex justify-center">
        <div className="w-1.5 h-1 bg-[#FFFFFF]" />
      </div>
      {/* Lower latch body on chest base with key catch */}
      <div className="w-8 h-7 bg-[#C6C6C6] border-2 border-black border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] flex flex-col items-center justify-center relative">
        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white" />
        <div className="w-2.5 h-3 bg-[#111111] border border-[#373737]" />
      </div>
    </div>
  );
}

/* Category styling using Minecraft original formatting colors */
function getCategoryBadge(category: string, eventId?: string) {
  const cat = (category || "").toUpperCase();
  const id = (eventId || "").toLowerCase();

  if (cat.includes("COMBAT") || id.includes("war")) {
    return {
      bg: "bg-[#FF5555]",
      border: "border-t-[#FFAAAA] border-l-[#FFAAAA] border-r-[#AA0000] border-b-[#AA0000]",
      text: "text-black",
      label: "COMBAT",
    };
  }
  if (cat.includes("RACING") || cat.includes("RACE") || id.includes("race")) {
    return {
      bg: "bg-[#FFAA00]",
      border: "border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500]",
      text: "text-black",
      label: "RACING",
    };
  }
  if (cat.includes("DOHYO") || cat.includes("SUMO") || id.includes("sumo")) {
    return {
      bg: "bg-[#55FFFF]",
      border: "border-t-[#AAFFFF] border-l-[#AAFFFF] border-r-[#008888] border-b-[#008888]",
      text: "text-black",
      label: "DOHYO",
    };
  }
  if (cat.includes("AGILITY") || cat.includes("SOCCER") || id.includes("soccer")) {
    return {
      bg: "bg-[#55FF55]",
      border: "border-t-[#AAFFAA] border-l-[#AAFFAA] border-r-[#008800] border-b-[#008800]",
      text: "text-black",
      label: "AGILITY",
    };
  }
  return {
    bg: "bg-[#AA00AA]",
    border: "border-t-[#FFAAFF] border-l-[#FFAAFF] border-r-[#550055] border-b-[#550055]",
    text: "text-white",
    label: "AUTONOMOUS",
  };
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["ALL", "COMBAT", "RACING", "DOHYO", "AGILITY", "AUTONOMOUS"];

  const filteredEvents = ROBOTICS_EVENTS.filter((event) => {
    const cat = event.category.toLowerCase();
    const id = event.id.toLowerCase();

    const matchesCategory =
      selectedCategory === "ALL" ||
      (selectedCategory === "COMBAT" && (cat.includes("combat") || id.includes("war") || id.includes("sumo"))) ||
      (selectedCategory === "RACING" && (cat.includes("racing") || id.includes("race"))) ||
      (selectedCategory === "DOHYO" && (cat.includes("dohyo") || id.includes("sumo"))) ||
      (selectedCategory === "AGILITY" && (cat.includes("agility") || id.includes("soccer"))) ||
      (selectedCategory === "AUTONOMOUS" && (cat.includes("autonomous") || id.includes("line")));

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q) ||
      event.category.toLowerCase().includes(q) ||
      event.tagline.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-[#55FF55] selection:text-black">
      {/* Full-Height Background Layer with Black Overlay reduced to 10% */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/minecraft/sponsor_bg.png"
          alt="Robosprano Events Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* 10% subtle dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10">
        {/* Top Hero Banner */}
        <section className="relative pt-12 sm:pt-16 pb-10 sm:pb-14 border-b-4 border-black overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1.5 bg-[#1C1208] text-[#55FF55] border-3 border-t-[#3C2A47] border-l-[#3C2A47] border-r-[#000000] border-b-[#000000] shadow-[3px_3px_0px_#000]">
              <PixelChest size={18} />
              <span>KILOBOTS GCEK // 5 OFFICIAL ARENA CHESTS</span>
              <PixelXPOrb size={14} />
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight [text-shadow:_3px_3px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">
              CHAMPIONSHIP{" "}
              <span className="inline-block bg-[#FFAA00] text-black px-3.5 py-1 border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[4px_4px_0px_#000] -rotate-1 [text-shadow:none]">
                ARENAS
              </span>
            </h1>

            <p className="font-mono text-xs sm:text-base font-bold text-[#FFFFFF] max-w-2xl mx-auto leading-relaxed [text-shadow:_1px_1px_2px_#000]">
              Unlock all 5 state-level combat and autonomous arenas at Robosprano &apos;26. Inspect arena dimensions, rulebooks, prize pools, and claim your team registration.
            </p>

            {/* Quick Stats Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs font-black tracking-wide">
              <span className="bg-[#C6C6C6] text-black px-3.5 py-1.5 border-3 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] shadow-[2px_2px_0px_#000]">
                ₹91,000 TOTAL BOUNTY
              </span>
              <span className="bg-[#FFAA00] text-black px-3.5 py-1.5 border-3 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[2px_2px_0px_#000]">
                15 PODIUM TROPHIES
              </span>
              <span className="bg-[#5B8731] text-white px-3.5 py-1.5 border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000]">
                OCTOBER 17 - 18, 2026
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Area: Search & Filters */}
        <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b-3 border-black pb-6 bg-[#C6C6C6]/95 border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] p-3 sm:p-4 shadow-[4px_4px_0px_#000]">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    playButtonClickSound();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 text-xs font-sans font-black uppercase tracking-wider border-3 shadow-[2px_2px_0px_#000] transition-all cursor-pointer active:translate-y-0.5 ${
                    selectedCategory === cat
                      ? "bg-[#5B8731] text-white border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] [text-shadow:_1px_1px_0_#000]"
                      : "bg-[#707070] hover:bg-[#808080] text-[#E0E0E0] hover:text-[#FFFFA0] border-t-[#9E9E9E] border-l-[#9E9E9E] border-r-[#383838] border-b-[#383838] [text-shadow:_1px_1px_0_#000]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* High-Contrast Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
              <input
                type="text"
                placeholder="SEARCH ARENAS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#EBEBEB] border-3 border-t-[#373737] border-l-[#373737] border-r-[#FFFFFF] border-b-[#FFFFFF] text-xs font-mono font-bold text-black placeholder:text-neutral-600 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.25)] focus:outline-none focus:bg-white transition-colors uppercase"
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PURE MINECRAFT CHEST CARDS (2 PER ROW, CINEMATIC IMAGE, HIGH READABILITY) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {filteredEvents.map((event) => {
              const badge = getCategoryBadge(event.category, event.id);

              return (
                <div
                  key={event.id}
                  className="bg-[#865324] border-4 border-t-[#B37839] border-l-[#9C6532] border-r-[#4E2F13] border-b-[#2C1808] shadow-[10px_10px_0px_#000] flex flex-col justify-between hover:-translate-y-2 hover:shadow-[14px_14px_0px_#000] transition-all duration-200 relative group overflow-visible"
                >
                  {/* 4 Authentic Minecraft Chest Iron Corner Rivet Brackets */}
                  <div className="absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-[#3A3A3A] border border-black z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#D8D8D8]" />
                  </div>
                  <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#3A3A3A] border border-black z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#D8D8D8]" />
                  </div>
                  <div className="absolute bottom-0.5 left-0.5 w-3.5 h-3.5 bg-[#3A3A3A] border border-black z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#D8D8D8]" />
                  </div>
                  <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#3A3A3A] border border-black z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#D8D8D8]" />
                  </div>

                  {/* 1. TOP CHEST LID & EXPANSIVE CINEMATIC ARENA DISPLAY */}
                  <div className="relative p-3 bg-[#865324]">
                    {/* Arena Display framed like a Minecraft Painting - Large Visualizer */}
                    <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-[#1C1208] border-3 border-t-[#3D230E] border-l-[#3D230E] border-r-[#9C6532] border-b-[#9C6532] shadow-[inset_2px_2px_6px_#000]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center "
                      />

                      {/* Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/60 pointer-events-none" />

                      {/* Top Badges (High Readability Name Tag Style) */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                        {/* Left Badge: ROBOSPRANO */}
                        <div className="bg-[#100D09]/95 text-[#55FF55] font-mono font-black text-xs sm:text-sm uppercase px-3 py-1.5 border-2 border-t-[#3A2E44] border-l-[#3A2E44] border-r-[#000] border-b-[#000] shadow-[2px_2px_0px_#000] flex items-center gap-1.5 [text-shadow:_1px_1px_0_#000] tracking-wider">
                          <Bot className="w-4 h-4 text-[#55FF55]" />
                          <span>{event.badge}</span>
                        </div>

                        {/* Right Badge: DATE */}
                        <div className="bg-[#100D09]/95 text-[#FFAA00] font-mono font-black text-xs sm:text-sm uppercase px-3 py-1.5 border-2 border-t-[#3A2E44] border-l-[#3A2E44] border-r-[#000] border-b-[#000] shadow-[2px_2px_0px_#000] flex items-center gap-1.5 [text-shadow:_1px_1px_0_#000] tracking-wider">
                          <Calendar className="w-4 h-4 text-[#FFAA00]" />
                          <span>{event.date}</span>
                        </div>
                      </div>

                      {/* Minecraft Tooltip Loot Tag at Bottom Right - Crisp & Legible */}
                      <div className="absolute bottom-3 right-3 bg-[#100010] border-2 border-black border-t-[#28007F] border-l-[#28007F] text-[#55FFFF] px-3.5 py-1.5 font-mono font-black text-xs sm:text-sm tracking-wide shadow-[3px_3px_0px_#000] flex items-center gap-2 z-10 [text-shadow:_1px_1px_0_#000]">
                        <PixelDiamond size={16} />
                        <span>BOUNTY: {event.prizePool}</span>
                      </div>
                    </div>

                    {/* Centered 3D Minecraft Chest Iron Latch */}
                    <MinecraftChestLatch />
                  </div>

                  {/* 2. CHEST DIVIDING SEAM (Splits Chest Lid from Base) */}
                  <div className="w-full h-3.5 bg-[#1C1208] border-y-2 border-black flex items-center justify-between px-3 relative z-10">
                    <div className="w-2.5 h-1.5 bg-[#373737]" />
                    <div className="w-2.5 h-1.5 bg-[#373737]" />
                  </div>

                  {/* 3. CHEST BODY: ORIGINAL MINECRAFT STONE GUI (#C6C6C6) */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#C6C6C6] border-3 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] m-2.5 mt-2.5 space-y-4 text-black shadow-[inset_1px_1px_2px_rgba(0,0,0,0.15)]">
                    {/* Header: Event Title & Category */}
                    <div className="space-y-2 pt-0.5">
                      <div className="flex flex-wrap items-center justify-between gap-2.5">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-minecraft font-black text-neutral-950 uppercase tracking-wider">
                          {event.title}
                        </h3>
                        <span
                          className={`font-mono text-xs sm:text-sm uppercase px-3 py-1 border-2 shadow-[2px_2px_0px_#000] font-black tracking-wider ${badge.bg} ${badge.border} ${badge.text}`}
                        >
                          {badge.label}
                        </span>
                      </div>

                      {/* Sunken Separator */}
                      <div className="w-full h-1 bg-[#8B8B8B] border-t border-[#373737] border-b border-[#FFFFFF]" />

                      {/* Description - Generous & High Contrast */}
                      <p className="text-sm sm:text-base font-sans text-neutral-900 leading-relaxed font-bold line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    {/* 4. LOOT PRIZE PODIUM STRIP (High-Contrast Tooltip Style) */}
                    <div className="bg-[#100010] border-2 border-black border-t-[#28007F] border-l-[#28007F] p-3 px-4 flex items-center justify-between shadow-[2px_2px_0px_#000]">
                      <div className="flex items-center gap-2 text-[#55FFFF] [text-shadow:_1px_1px_0_#000]">
                        <PixelDiamond size={18} />
                        <span className="font-mono font-black text-xs sm:text-sm tracking-wide">
                          TOTAL BOUNTY: {event.prizePool}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#FFAA00] [text-shadow:_1px_1px_0_#000]">
                        <PixelGoldIngot size={18} />
                        <span className="font-mono font-black text-xs sm:text-sm tracking-wide">
                          1ST PLACE: {event.bountyBreakdown.first}
                        </span>
                      </div>
                    </div>

                    {/* 5. ORIGINAL MINECRAFT IN-GAME GREEN MENU BUTTON */}
                    <Link
                      href={`/events/${event.slug}`}
                      onClick={() => playButtonClickSound()}
                      className="w-full py-3.5 sm:py-4 bg-[#5B8731] hover:bg-[#689B37] text-white hover:text-[#FFFFA0] font-sans font-black text-sm sm:text-base uppercase tracking-wider border-4 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] active:border-t-[#2C4813] active:border-l-[#2C4813] active:border-r-[#85B745] active:border-b-[#85B745] shadow-[4px_4px_0px_#000] [text-shadow:_1px_1px_0_#1D310C] flex items-center justify-center gap-2 cursor-pointer active:translate-y-1 transition-all text-center"
                    >
                      <PixelChest size={20} />
                      <span>OPEN ARENA CHEST</span>
                      <ChevronRight className="w-5 h-5 stroke-[3px]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state if search returns nothing */}
          {filteredEvents.length === 0 && (
            <div className="py-16 text-center space-y-3 bg-[#C6C6C6] border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] p-8 shadow-[6px_6px_0px_#000] text-black">
              <Bot className="w-10 h-10 text-neutral-700 mx-auto" />
              <h4 className="font-minecraft text-lg text-black">NO ARENAS FOUND</h4>
              <p className="font-mono text-xs text-neutral-800">
                TRY ADJUSTING YOUR SEARCH QUERY OR SWITCHING CATEGORIES.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
