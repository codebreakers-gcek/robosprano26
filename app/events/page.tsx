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
  MapPin,
  Clock,
  Trophy,
} from "lucide-react";
import { ROBOTICS_EVENTS } from "@/data/roboticsEvents";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";
// import { IgitBanNotice } from "@/components/common/IgitBanNotice";

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
    <div className="min-h-screen relative overflow-hidden text-black selection:bg-[#5DB329] selection:text-white bg-[#F0F8FF]">
      {/* Full-Height Background Layer with Daylight Sky Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-25">
        <Image
          src="/minecraft/minecraft_2.webp"
          alt="Robosprano Events Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#F0F8FF]/30" />
      </div>

      <div className="relative z-10">
        {/* Top Hero Banner */}
        <section className="relative pt-12 sm:pt-16 pb-10 sm:pb-14 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 font-minecraft text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1.5  text-[#B45309]">
              <PixelChest size={18} />
              <span>KILOBOTS GCEK // 5 OFFICIAL ARENA CHESTS</span>
              <PixelXPOrb size={14} />
            </div>

            <h1 className="font-minecraft font-black text-3xl sm:text-5xl md:text-6xl text-black uppercase tracking-wider leading-tight">
              CHAMPIONSHIP{" "}
              <span className="inline-block bg-[#FFAA00] text-black px-3.5 py-1 border-4 border-black shadow-[4px_4px_0px_#000] -rotate-1">
                ARENAS
              </span>
            </h1>

            <p className="font-mono text-xs sm:text-base font-bold text-slate-800 max-w-2xl mx-auto leading-relaxed">
              Unlock all 5 combat and autonomous arenas at Robosprano &apos;26. Inspect arena dimensions, rulebooks, prize pools, and claim your team registration.
            </p>

            {/* Quick Stats Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs font-black tracking-wide">
              <span className="bg-white text-black px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
                ₹91,000 TOTAL BOUNTY
              </span>
              <span className="bg-[#FFAA00] text-black px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
                15 PODIUM TROPHIES
              </span>
              <span className="bg-[#5DB329] text-white px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
                NOVEMBER 05 - 06, 2026
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Area: Search & Filters */}
        <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Prominent IGIT Sarang Ban Notice */}
          {/* <IgitBanNotice variant="banner" /> */}

          {/* Tournament 2-Day Match Schedule & Official Venue Roster Guide */}
          <div className="bg-white border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0px_#000]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b-2 border-black/20 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#FEF3C7] border-2 border-black flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#B45309]" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-sm sm:text-base text-black uppercase tracking-wider">
                    TOURNAMENT MATCH PROGRESSION &amp; OFFICIAL VENUES
                  </h3>
                  <p className="font-mono text-[11px] text-slate-600 font-bold">
                    Official 2-Day Stage Schedule // GCE Kalahandi Campus
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E0F2FE] border border-black font-mono text-xs text-[#0284C7] font-black shadow-[2px_2px_0px_#000]">
                <span>2-DAY CHAMPIONSHIP</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              {/* Day 1 Schedule */}
              <div className="bg-[#FEFCE8] border-2 border-black p-3.5 space-y-2 shadow-[2px_2px_0px_#000]">
                <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
                  <span className="font-sans text-xs sm:text-sm text-[#B45309] font-black uppercase tracking-wide">
                    ⚡ DAY 1 // NOV 05, 2026
                  </span>
                  <span className="bg-[#FEF3C7] text-[#B45309] px-2 py-0.5 text-[10px] font-black border border-black">
                    QUALIFYING STAGE
                  </span>
                </div>
                <p className="text-black font-bold">
                  Qualifying rounds take place for every arena:
                </p>
                <ul className="space-y-1 text-slate-700 font-semibold">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#15803D]">✔</span> Death Race (Qualifiers)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#15803D]">✔</span> Robo Sumo (Qualifiers)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#15803D]">✔</span> Robo Soccer (Qualifiers)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#15803D]">✔</span> Line Follower (Qualifiers)
                  </li>
                </ul>
                <div className="p-2 bg-[#FEF2F2] border border-[#DC2626] text-[#DC2626] text-[11px] font-black">
                  ⚠️ ROBO WAR EXCEPTION: No Robo War matches on Day 1.
                </div>
              </div>

              {/* Day 2 Schedule */}
              <div className="bg-[#F0FDF4] border-2 border-black p-3.5 space-y-2 shadow-[2px_2px_0px_#000]">
                <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
                  <span className="font-sans text-xs sm:text-sm text-[#0284C7] font-black uppercase tracking-wide">
                    🏆 DAY 2 // NOV 06, 2026
                  </span>
                  <span className="bg-[#DCFCE7] text-[#15803D] px-2 py-0.5 text-[10px] font-black border border-black">
                    FINALS &amp; ROBO WAR
                  </span>
                </div>
                <p className="text-black font-bold">
                  All championship finals &amp; full Robo War showdown:
                </p>
                <ul className="space-y-1 text-slate-700 font-semibold">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#0284C7]">★</span> All Arena Final Matches (Death Race, Sumo, Soccer, Line Follower)
                  </li>
                  <li className="flex items-center gap-1.5 text-black font-black bg-[#FEF3C7] p-1 border border-black">
                    <span className="text-[#B45309]">⚔️</span> ROBO WAR (Prelims, Semis &amp; Grand Finals)
                  </li>
                  <li className="flex items-center gap-1.5 text-[#15803D] font-black">
                    <span>🎖️</span> Grand Award Ceremony &amp; ₹91,000 Cash Distribution
                  </li>
                </ul>
              </div>
            </div>

            {/* Official Venues Bar */}
            <div className="mt-4 pt-3 border-t border-black/20 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 border border-black">
                <MapPin className="w-4 h-4 text-[#B45309] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">
                    Line Follower Arena Venue:
                  </span>
                  <span className="text-black font-black">Seminar Hall, GCE Kalahandi</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 border border-black">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">
                    Robo War, Race, Sumo &amp; Soccer Venue:
                  </span>
                  <span className="text-black font-black">Open Air Theatre, GCE Kalahandi</span>
                </div>
              </div>
            </div>
          </div>

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

                      {/* Venue & Schedule Chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs font-bold pt-1">
                        <div className="flex items-center gap-1.5 p-2 bg-[#E2E2E2] border border-[#999999] text-neutral-900 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#C00000] shrink-0" />
                          <span className="truncate">{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-1.5 p-2 bg-[#E2E2E2] border border-[#999999] text-neutral-900 truncate">
                          <Clock className="w-3.5 h-3.5 text-[#006600] shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* 4. LOOT PRIZE PODIUM STRIP (High-Contrast Daylight Style) */}
                    <div className="bg-[#FEF3C7] border-2 border-black p-3 px-4 flex items-center justify-between shadow-[2px_2px_0px_#000]">
                      <div className="flex items-center gap-2 text-[#0284C7]">
                        <PixelDiamond size={18} />
                        <span className="font-mono font-black text-xs sm:text-sm tracking-wide">
                          TOTAL: {event.prizePool}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#B45309]">
                        <PixelGoldIngot size={18} />
                        <span className="font-mono font-black text-xs sm:text-sm tracking-wide">
                          1ST: {event.bountyBreakdown.first}
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
