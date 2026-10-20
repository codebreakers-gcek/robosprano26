"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Coins,
  Search,
  Bot,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { RoboticsEvent } from "@/data/roboticsEvents";
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
  if (cat.includes("SOCCER") || cat.includes("AGILITY") || id.includes("soccer")) {
    return {
      bg: "bg-[#55FF55]",
      border: "border-t-[#AAFFAA] border-l-[#AAFFAA] border-r-[#00AA00] border-b-[#00AA00]",
      text: "text-black",
      label: "SOCCER",
    };
  }
  return {
    bg: "bg-[#AA00AA]",
    border: "border-t-[#FF55FF] border-l-[#FF55FF] border-r-[#550055] border-b-[#550055]",
    text: "text-white",
    label: "AUTONOMOUS",
  };
}

interface RegisterClientProps {
  events: RoboticsEvent[];
}

export function RegisterClient({ events }: RegisterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "ALL", label: "ALL ARENAS" },
    { id: "combat", label: "ROBO WAR" },
    { id: "racing", label: "ROBO RACE" },
    { id: "dohyo", label: "ROBO SUMO" },
    { id: "agility", label: "ROBO SOCCER" },
    { id: "autonomous", label: "LINE FOLLOWER" },
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory =
        selectedCategory === "ALL" ||
        event.category.toLowerCase() === selectedCategory.toLowerCase() ||
        event.id.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.tagline.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [events, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0C0810] text-white pt-24 pb-20 relative selection:bg-[#FFAA00] selection:text-black">
      {/* Minecraft Arena Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/minecraft/1.webp"
          alt="Arena Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 font-minecraft text-[11px] sm:text-xs uppercase px-3.5 py-1.5 bg-[#1B1422] text-[#55FF55] border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black shadow-[2px_2px_0px_#000]">
            <PixelXPOrb size={14} />
            <span>OFFICIAL ENTRY PORTAL // ROBOSPRANO &apos;26</span>
            <PixelXPOrb size={14} />
          </div>

          {/* Massive 3D Title */}
          <h1 className="font-minecraft text-3xl min-[360px]:text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C0] via-[#FFAA00] to-[#C47300] [filter:drop-shadow(3px_3px_0_#000)_drop-shadow(-1px_-1px_0_#000)_drop-shadow(0_5px_0_#5A3500)] select-none leading-none">
            ARENA REGISTRATION
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Choose your combat division, register your roster via the official Google Form, or view event specifications for arena dimensions and rules.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2 max-w-3xl mx-auto">
            <div className="bg-[#1B1422]/90 border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black p-2.5 sm:p-3 text-center shadow-[3px_3px_0px_#000]">
              <span className="block text-[10px] sm:text-xs font-mono text-neutral-400 uppercase">Total Bounty</span>
              <span className="block font-minecraft text-sm sm:text-lg text-[#FFAA00] font-bold">₹91,000</span>
            </div>
            <div className="bg-[#1B1422]/90 border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black p-2.5 sm:p-3 text-center shadow-[3px_3px_0px_#000]">
              <span className="block text-[10px] sm:text-xs font-mono text-neutral-400 uppercase">Arena Events</span>
              <span className="block font-minecraft text-sm sm:text-lg text-[#55FFFF] font-bold">5 DIVISIONS</span>
            </div>
            <div className="bg-[#1B1422]/90 border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black p-2.5 sm:p-3 text-center shadow-[3px_3px_0px_#000]">
              <span className="block text-[10px] sm:text-xs font-mono text-neutral-400 uppercase">Tournament Dates</span>
              <span className="block font-minecraft text-sm sm:text-lg text-[#55FF55] font-bold">NOV 05–06</span>
            </div>
            <div className="bg-[#1B1422]/90 border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black p-2.5 sm:p-3 text-center shadow-[3px_3px_0px_#000]">
              <span className="block text-[10px] sm:text-xs font-mono text-neutral-400 uppercase">Host Venue</span>
              <span className="block font-minecraft text-sm sm:text-lg text-[#FF5555] font-bold">GCEK KALAHANDI</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FILTER BAR & SEARCH                                                       */}
        {/* ========================================================================= */}
        <div className="mb-8 sm:mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      playButtonClickSound(0.2);
                      setSelectedCategory(cat.id);
                    }}
                    className={`px-3 py-2 text-[11px] sm:text-xs font-minecraft uppercase whitespace-nowrap cursor-pointer transition-all border-2 shadow-[2px_2px_0px_#000] active:translate-y-0.5 ${
                      isActive
                        ? "bg-[#FFAA00] text-black border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] font-black"
                        : "bg-[#1B1422] text-neutral-300 hover:text-white border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black hover:bg-[#2A1F36]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="SEARCH ARENA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#1B1422] border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black text-xs font-mono text-white placeholder:text-neutral-500 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)] focus:outline-none focus:border-[#FFAA00] uppercase"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ARENA REGISTRATION CARDS (CLEAN, NO CLUTTER, DIRECT ACTIONS)              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredEvents.map((event) => {
            const badge = getCategoryBadge(event.category, event.id);

            return (
              <div
                key={event.id}
                className="bg-[#170F1E] border-3 border-t-[#3E2B4B] border-l-[#3E2B4B] border-r-black border-b-black shadow-[6px_6px_0px_#000] flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 relative group"
              >
                {/* 4 Corner Rivets */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-[#3A3A3A] border border-black z-20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#888888]" />
                </div>
                <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#3A3A3A] border border-black z-20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#888888]" />
                </div>

                <div>
                  {/* Banner Image Preview */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black border-b-2 border-black">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#170F1E] via-black/40 to-black/20 pointer-events-none" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`font-mono text-[10px] sm:text-xs uppercase px-2.5 py-0.5 border-2 shadow-[2px_2px_0px_#000] font-black tracking-wider ${badge.bg} ${badge.border} ${badge.text}`}
                      >
                        {badge.label}
                      </span>
                    </div>

                    {/* Bounty Ribbon */}
                    <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1.5 bg-black/85 backdrop-blur-xs px-2.5 py-1 border border-[#FFAA00]/50 shadow-[2px_2px_0px_#000]">
                      <PixelDiamond size={15} />
                      <span className="font-minecraft text-xs text-[#55FFFF] font-bold">
                        {event.prizePool} BOUNTY
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-4 sm:p-5 space-y-3.5">
                    {/* Event Title */}
                    <div>
                      <h3 className="font-minecraft text-xl sm:text-2xl text-white font-black uppercase tracking-wide group-hover:text-[#FFAA00] transition-colors leading-tight">
                        {event.title}
                      </h3>
                      {/* One-Liner Tagline (Concise pitch, NOT detailed rules/specs) */}
                      <p className="font-mono text-xs text-neutral-300 mt-1.5 leading-relaxed line-clamp-2">
                        {event.tagline}
                      </p>
                    </div>

                    {/* Clean Spec Grid: Essential Registration Information */}
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
                      {/* Registration Fee */}
                      <div className="bg-[#100916] p-2 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 block uppercase flex items-center gap-1">
                          <Coins className="w-3 h-3 text-[#FFAA00]" />
                          Entry Fee
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-white block mt-0.5">
                          {event.fee}
                        </span>
                      </div>

                      {/* Team Size */}
                      <div className="bg-[#100916] p-2 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 block uppercase flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#55FF55]" />
                          Team Size
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-white block mt-0.5">
                          {event.teamSize}
                        </span>
                      </div>

                      {/* Tournament Date */}
                      <div className="bg-[#100916] p-2 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 block uppercase flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#55FFFF]" />
                          Date &amp; Time
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-neutral-200 block mt-0.5 truncate">
                          {event.time} • {event.date.split(",")[1]?.trim() || "Nov 2026"}
                        </span>
                      </div>

                      {/* Venue */}
                      <div className="bg-[#100916] p-2 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 block uppercase flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#FF5555]" />
                          Arena Venue
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-neutral-200 block mt-0.5 truncate">
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dual Action CTA Buttons (Fixed to Bottom) */}
                <div className="p-4 sm:p-5 pt-0 space-y-2">
                  {/* Primary CTA: Register Now (Direct Google Form Link) */}
                  {event.closed ? (
                    <button
                      type="button"
                      disabled
                      className="w-full h-11 bg-neutral-800 text-neutral-500 font-minecraft text-xs uppercase tracking-wider border-2 border-neutral-700 flex items-center justify-center gap-2 cursor-not-allowed select-none"
                    >
                      <span>REGISTRATIONS CLOSED</span>
                    </button>
                  ) : (
                    <a
                      href={event.enrollLink || "https://forms.google.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playButtonClickSound(0.4)}
                      className="w-full h-11 bg-gradient-to-r from-[#FF5500] via-[#FF6600] to-[#FF7700] hover:brightness-110 text-white font-minecraft text-xs uppercase tracking-wider border-2 border-t-[#FFA066] border-l-[#FFA066] border-r-[#8F2F00] border-b-[#8F2F00] shadow-[3px_3px_0px_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer transition-all font-black"
                    >
                      <span>REGISTER NOW</span>
                      <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
                    </a>
                  )}

                  {/* Secondary CTA: View Details (Redirects to /events/[slug]) */}
                  <Link
                    href={`/events/${event.slug}`}
                    onClick={() => playButtonClickSound(0.25)}
                    className="w-full h-9 bg-[#24172E] hover:bg-[#322040] text-neutral-200 hover:text-white font-minecraft text-[11px] uppercase tracking-wider border-2 border-t-[#452D59] border-l-[#452D59] border-r-black border-b-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>VIEW EVENT DETAILS</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFAA00]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-[#170F1E] border-3 border-t-[#3E2B4B] border-l-[#3E2B4B] border-r-black border-b-black p-8 shadow-[6px_6px_0px_#000] text-white max-w-xl mx-auto">
            <Bot className="w-10 h-10 text-neutral-500 mx-auto" />
            <h4 className="font-minecraft text-lg text-[#FFAA00]">NO MATCHING ARENAS</h4>
            <p className="font-mono text-xs text-neutral-400">
              No tournament division matched your query. Clear your search or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="mt-2 px-4 py-2 bg-[#FFAA00] text-black font-minecraft text-xs uppercase font-bold"
            >
              SHOW ALL ARENAS
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* REGISTRATION GUIDELINES & DISPATCH BRIEFING                               */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 bg-[#170F1E] border-3 border-t-[#3E2B4B] border-l-[#3E2B4B] border-r-black border-b-black p-5 sm:p-7 shadow-[6px_6px_0px_#000]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#2A1F36] border-2 border-[#FFAA00] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#FFAA00]" />
              </div>
              <div>
                <h3 className="font-minecraft text-base sm:text-lg text-white uppercase">
                  REGISTRATION INSTRUCTIONS &amp; PROTOCOL
                </h3>
                <p className="font-mono text-xs text-neutral-400">
                  Quick rules for all team captains submitting official entry forms.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => playButtonClickSound(0.25)}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#55FFFF] hover:underline"
            >
              <span>Need help? Contact Coordinators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#55FF55] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Inter-College Teams:</span>
                Students from different colleges or semesters may form combined rosters.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#55FF55] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">ID Verification:</span>
                Every registered member must bring valid institutional photo ID cards on event day.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#55FF55] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Pit Confirmation:</span>
                Slot allocations and technical inspection schedule will be sent via WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
