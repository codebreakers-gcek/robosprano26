"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Swords,
  DollarSign,
  Users,
  Calendar,
  X,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { EVENT_DATA } from "@/data/event";
import { ROBOTICS_EVENTS } from "@/data/roboticsEvents";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* ARENA EVENT CONFIG (maps display names to event slugs for click actions)   */
/* ========================================================================= */

const ARENA_EVENTS = [
  { name: "ROBO WAR", slug: "robo-war" },
  { name: "DEATH RACE", slug: "death-race" },
  { name: "ROBO SUMO", slug: "robo-sumo" },
  { name: "ROBO SOCCER", slug: "robo-soccer" },
  { name: "LINE FOLLOWER", slug: "line-follower" },
];


/* ========================================================================= */
/* STATS BAR DATA                                                             */
/* ========================================================================= */

const STATS_BAR = [
  {
    icon: DollarSign,
    value: "₹91,000",
    label: "TOTAL CASH POOL",
  },
  {
    icon: Swords,
    value: "5",
    label: "ARENAS",
  },
  {
    icon: Users,
    value: "100+",
    label: "TEAMS EXPECTED",
  },
  {
    icon: Calendar,
    value: EVENT_DATA.displayDates?.split("-")[0]?.trim().replace("NOVEMBER ", "NOV ") || "NOV 2026",
    label: "GCE KALAHANDI",
  },
];

/* ========================================================================= */
/* EVENT INFO POPUP COMPONENT                                                 */
/* ========================================================================= */

function EventInfoPopup({
  event,
  onClose,
}: {
  event: (typeof ROBOTICS_EVENTS)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Popup Card — Minecraft GUI Dialogue Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#1E1E1E] border-4 border-t-[#555555] border-l-[#555555] border-r-black border-b-black shadow-[8px_8px_0px_#000] text-white select-none overflow-hidden"
      >
        {/* Top Minecraft Header Bar */}
        <div className="bg-black/90 p-3 sm:p-3.5 border-b-4 border-black flex items-center justify-between">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] border-2 border-t-[#444] border-l-[#444] border-r-black border-b-black text-[11px] text-[#55FF55] font-minecraft uppercase tracking-wider shadow-[1px_1px_0px_#000]">
            <Swords className="w-3.5 h-3.5 text-[#55FF55]" />
            <span>{event.badge}</span>
          </div>

          {/* Minecraft Stone Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 bg-[#3A3A3A] hover:bg-[#4A4A4A] active:bg-[#252525] border-2 border-t-[#666666] border-l-[#666666] border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-[#666666] active:border-b-[#666666] shadow-[2px_2px_0px_#000] active:shadow-none flex items-center justify-center text-white cursor-pointer transition-all"
            aria-label="Close"
          >
            <X className="w-4 h-4 stroke-[3px]" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
          {/* Event Title & Tagline */}
          <div>
            <h3 className="font-minecraft text-xl sm:text-2xl text-white uppercase tracking-wider [text-shadow:_2px_2px_0_#000] leading-tight">
              {event.title}
            </h3>
            <p className="font-minecraft text-xs sm:text-sm text-[#55FF55] [text-shadow:_1px_1px_0_#000] mt-1">
              {event.tagline}
            </p>
          </div>

          {/* Event Details Grid — Minecraft Inset Slot Panels */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            <div className="bg-[#141414] border-2 border-t-black border-l-black border-r-[#444] border-b-[#444] p-2.5 sm:p-3 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] uppercase font-minecraft mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#55FF55]" />
                <span>DATE</span>
              </div>
              <span className="font-minecraft text-xs text-white [text-shadow:_1px_1px_0_#000] block">{event.date}</span>
            </div>

            <div className="bg-[#141414] border-2 border-t-black border-l-black border-r-[#444] border-b-[#444] p-2.5 sm:p-3 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] uppercase font-minecraft mb-1">
                <Clock className="w-3.5 h-3.5 text-[#55FF55]" />
                <span>TIME</span>
              </div>
              <span className="font-minecraft text-xs text-white [text-shadow:_1px_1px_0_#000] block">{event.time}</span>
            </div>

            <div className="bg-[#141414] border-2 border-t-black border-l-black border-r-[#444] border-b-[#444] p-2.5 sm:p-3 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] uppercase font-minecraft mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#55FF55]" />
                <span>VENUE</span>
              </div>
              <span className="font-minecraft text-xs text-white [text-shadow:_1px_1px_0_#000] block truncate">{event.venue}</span>
            </div>

            <div className="bg-[#141414] border-2 border-t-black border-l-black border-r-[#444] border-b-[#444] p-2.5 sm:p-3 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] uppercase font-minecraft mb-1">
                <Trophy className="w-3.5 h-3.5 text-[#FFAA00]" />
                <span>PRIZE POOL</span>
              </div>
              <span className="font-minecraft text-xs text-[#FFAA00] [text-shadow:_1px_1px_0_#000] font-black block">{event.prizePool}</span>
            </div>
          </div>

          {/* Team Size & Fee Badges */}
          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1 bg-black border-2 border-t-[#444] border-l-[#444] border-r-black border-b-black text-[#55FF55] font-minecraft text-xs [text-shadow:_1px_1px_0_#000] shadow-[1px_1px_0px_#000]">
              {event.teamSize}
            </span>
            <span className="px-3 py-1 bg-black border-2 border-t-[#444] border-l-[#444] border-r-black border-b-black text-[#FFAA00] font-minecraft text-xs [text-shadow:_1px_1px_0_#000] shadow-[1px_1px_0px_#000]">
              Fee: {event.fee}
            </span>
          </div>

          {/* Prize Breakdown — Minecraft Inset Panel */}
          {event.prizes && event.prizes.length > 0 && (
            <div className="bg-[#141414] border-2 border-t-black border-l-black border-r-[#333] border-b-[#333] p-3 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.9)]">
              <span className="text-[10px] uppercase font-minecraft tracking-wider text-neutral-400 block mb-2 [text-shadow:_1px_1px_0_#000]">
                PRIZE DISTRIBUTION
              </span>
              <div className="space-y-1.5">
                {event.prizes.map((prize, idx) => (
                  <div key={idx} className="font-minecraft text-xs text-neutral-200 [text-shadow:_1px_1px_0_#000] flex items-center gap-2">
                    <span
                      className={`w-2 h-2 shrink-0 border border-black shadow-[1px_1px_0_#000] ${idx === 0
                          ? "bg-[#55FF55]"
                          : idx === 1
                            ? "bg-[#AAAAAA]"
                            : "bg-[#FFAA00]"
                        }`}
                    />
                    <span>{prize}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="bg-black/60 p-3 border-2 border-t-black border-l-black border-r-[#333] border-b-[#333] shadow-[inset_1px_1px_0px_#000]">
            <p className="font-sans text-xs text-neutral-300 leading-relaxed line-clamp-3">
              {event.description}
            </p>
          </div>

          {/* Action Buttons — Minecraft Beveled Buttons */}
          <div className="flex items-center gap-3 pt-1">
            <Link
              href={`/events/${event.slug}`}
              onClick={() => {
                playButtonClickSound();
                onClose();
              }}
              className="flex-1 h-11 bg-[#3A3A3A] hover:bg-[#4A4A4A] active:bg-[#252525] border-3 border-t-[#666666] border-l-[#666666] border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-[#666666] active:border-b-[#666666] text-white font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000] active:shadow-none active:translate-y-0.5 transition-all cursor-pointer [text-shadow:_1px_1px_0_#000]"
            >
              <span>VIEW FULL DETAILS</span>
              <ChevronRight className="w-4 h-4 text-[#55FF55]" />
            </Link>

            <Link
              href="/events"
              onClick={() => {
                playButtonClickSound();
                onClose();
              }}
              className="flex-1 h-11 bg-[#FFAA00] hover:bg-[#FFB726] active:bg-[#D98E00] border-3 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] active:border-t-[#8F5500] active:border-l-[#8F5500] active:border-r-[#FFE285] active:border-b-[#FFE285] text-black font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000] active:shadow-none active:translate-y-0.5 transition-all cursor-pointer font-black"
            >
              <span>REGISTER</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ========================================================================= */
/* HERO SECTION COMPONENT                                                     */
/* ========================================================================= */

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof ROBOTICS_EVENTS)[number] | null
  >(null);

  const handleEventClick = useCallback(
    (slug: string) => {
      playButtonClickSound();
      const event = ROBOTICS_EVENTS.find((e) => e.id === slug || e.slug === slug);
      if (event) {
        setSelectedEvent(event);
      }
    },
    []
  );

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const slideInRight: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] sm:min-h-[calc(100dvh-5rem)] flex flex-col border-b-4 border-black bg-[#0A0A0A] text-white">
        {/* ====== BACKGROUND LAYER ====== */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/landing/landing_bg.png"
            alt="Robosprano Arena Background"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          {/* Dark vignette overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        </div>

        {/* ====== ROBOT BACK-GLOW LAYER (Strictly z-[0] BEHIND robot) ====== */}
        <div className="absolute right-[-4%] sm:right-[-2%] lg:right-[1%] xl:right-[4%] 2xl:right-[6%] bottom-[75px] sm:bottom-[80px] lg:bottom-[70px] xl:bottom-[80px] z-[0] pointer-events-none select-none hidden md:block w-[58vw] max-w-[850px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1250px] h-[82vh] lg:h-[88vh] xl:h-[93vh]">
          <div className="relative w-full h-full">
            <div className="absolute top-[18%] right-[15%] w-[65%] h-[60%] bg-[#FF5500]/12 rounded-full blur-[120px]" />
          </div>
        </div>

        {/* ====== ROBOT IMAGE (Desktop & tablet at z-[3]) ====== */}
        {/* Sized MASSIVE and commanding to match Reference UI */}
        <div className="absolute right-[-4%] sm:right-[-2%] lg:right-[1%] xl:right-[4%] 2xl:right-[6%] bottom-[75px] sm:bottom-[80px] lg:bottom-[70px] xl:bottom-[80px] z-[3] pointer-events-none select-none hidden md:block w-[58vw] max-w-[850px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1250px] h-[82vh] lg:h-[88vh] xl:h-[93vh]">
          <div className="relative w-full h-full">
            <Image
              src="/landing/robot-cropped.png"
              alt="Combat Robot"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 80vw"
              className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>

        {/* ====== ROBOT IMAGE (Mobile, centered below content) ====== */}
        <div className="md:hidden absolute bottom-[140px] sm:bottom-[160px] left-0 right-0 z-[1] pointer-events-none select-none flex justify-center">
          <div className="relative w-[300px] h-[320px] sm:w-[360px] sm:h-[380px]">
            <Image
              src="/landing/robot-cropped.png"
              alt="Combat Robot"
              fill
              sizes="360px"
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-40"
            />
          </div>
        </div>

        {/* ====== MAIN CONTENT AREA ====== */}
        <div className="flex-1 flex flex-col justify-center relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full py-8 sm:py-12 lg:py-16">
            <div className="flex items-start justify-between gap-6 lg:gap-10">
              {/* ====== LEFT COLUMN: Main content ====== */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 min-w-0 max-w-2xl flex flex-col relative z-10"
              >
                {/* Club Presents Tag */}
                <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
                  <span className="font-minecraft text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 [text-shadow:_1px_1px_0_#000]">
                    KILOBOTS ROBOTICS CLUB / GCEK
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 sm:w-12 h-[2px] bg-[#FF6600]" />
                    <span className="font-minecraft text-xs sm:text-sm tracking-[0.15em] uppercase text-white/90 [text-shadow:_1px_1px_0_#000]">
                      PRESENTS
                    </span>
                  </div>
                </motion.div>

                {/* MAIN TITLE: ROBOSPRANO '26 */}
                {/* overflow-visible + high z-index so title is never clipped by siblings */}
                <motion.div
                  variants={itemVariants}
                  className="mb-3 sm:mb-4 overflow-visible relative z-20"
                >
                  <h1 className="font-minecraftt leading-[0.85] select-none overflow-visible whitespace-nowrap">
                    <span className="inline-block text-5xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFE0B2] to-[#FF8C00] [filter:drop-shadow(3px_3px_0_#000)_drop-shadow(-1px_-1px_0_#000)_drop-shadow(0_6px_0_#5A2D00)] sm:[filter:drop-shadow(4px_4px_0_#000)_drop-shadow(-2px_-2px_0_#000)_drop-shadow(0_8px_0_#5A2D00)]">
                      ROBOSPRANO
                    </span>
                    <br />
                    <span className="inline-block text-5xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#10B981] to-[#047857] [filter:drop-shadow(3px_3px_0_#000)_drop-shadow(-1px_-1px_0_#000)_drop-shadow(0_6px_0_#064e3b)] sm:[filter:drop-shadow(4px_4px_0_#000)_drop-shadow(-2px_-2px_0_#000)_drop-shadow(0_8px_0_#064e3b)]">
                      &apos;26
                    </span>
                  </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
                  <span className="font-minecraft text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase text-neutral-300 [text-shadow:_1px_1px_0_#000]">
                    STATE ROBOTICS CHAMPIONSHIP
                  </span>
                </motion.div>

                {/* Tagline: STEEL • SPEED • DESTRUCTION • GLORY with Golden-Yellow Highlight Banner */}
                <motion.div variants={itemVariants} className="mb-5 sm:mb-7">
                  <div className="inline-block bg-[#F5CB44] px-3.5 sm:px-4 py-1.5 sm:py-2 text-black font-minecraft text-xs sm:text-sm md:text-base font-black tracking-[0.18em] sm:tracking-[0.22em] uppercase select-none shadow-[0_4px_16px_rgba(245,203,68,0.35)]">
                    {EVENT_DATA.tagline}
                  </div>
                </motion.div>

                {/* Description Text */}
                <motion.div
                  variants={itemVariants}
                  className="mb-6 sm:mb-8 max-w-lg"
                >
                  <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed [text-shadow:_1px_1px_2px_#000]">
                    5 thrilling arenas. Build, compete, and prove your machine on
                    the battlefield.
                  </p>
                </motion.div>

                {/* CTA BUTTONS (Matching Reference UI) */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
                >
                  {/* Primary CTA: Register Your Bot */}
                  <Link
                    href="/events"
                    onClick={() => playButtonClickSound()}
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-gradient-to-r from-[#FF5500] via-[#FF6600] to-[#FF7700] hover:brightness-110 text-white font-sans font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(255,85,0,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap border-t border-orange-300/40"
                  >
                    <Swords className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                    <span>REGISTER YOUR BOT</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3px]" />
                  </Link>

                  {/* Secondary CTA: View Prize Pool */}
                  <Link
                    href="#prize-pool"
                    onClick={() => playButtonClickSound()}
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-black/60 hover:bg-black/80 text-white font-sans font-black text-xs sm:text-sm uppercase tracking-wider border border-[#FF6600]/80 hover:border-[#FF7700] shadow-[0_0_15px_rgba(255,102,0,0.2)] hover:shadow-[0_0_25px_rgba(255,102,0,0.4)] flex items-center justify-center gap-2.5 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFAA00] shrink-0" />
                    <span>VIEW PRIZE POOL (₹91K)</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5px] text-[#FFAA00]" />
                  </Link>
                </motion.div>

                {/* Mobile Arena Chips */}
                <motion.div
                  variants={itemVariants}
                  className="lg:hidden mt-6 flex flex-wrap gap-2"
                >
                  <span className="w-full font-minecraft text-[10px] text-emerald-400 tracking-wider uppercase">
                    ARENAS (TAP FOR DETAILS):
                  </span>
                  {ARENA_EVENTS.map((event) => (
                    <button
                      key={event.slug}
                      type="button"
                      onClick={() => handleEventClick(event.slug)}
                      className="px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white font-minecraft text-[10px] tracking-wide hover:border-emerald-400/60 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400" />
                      <span>{event.name}</span>
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ====== MINECRAFT STYLED ARENA EVENTS HUD (Shifted to Far Right & Top) ====== */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex flex-col absolute right-3 sm:right-4 lg:right-6 xl:right-8 top-4 sm:top-5 lg:top-6 xl:top-7 z-30 pointer-events-auto"
        >
          <div className="bg-[#1A1A1A]/95 border-4 border-t-[#555555] border-l-[#555555] border-r-black border-b-black p-3 sm:p-3.5 shadow-[4px_4px_0px_#000] w-[210px] xl:w-[225px] select-none">
            {/* Minecraft Header */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b-2 border-[#333333]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#55FF55] border border-black shadow-[1px_1px_0px_#000] animate-pulse" />
                <span className="font-minecraft text-xs xl:text-sm tracking-widest text-[#55FF55] uppercase [text-shadow:_1px_1px_0_#000]">
                  ARENAS
                </span>
              </div>
              <span className="font-minecraft text-[9px] text-[#FFAA00] bg-black px-1.5 py-0.5 border border-[#444] shadow-[1px_1px_0px_#000]">
                5 EVENTS
              </span>
            </div>

            {/* Arena Events List — Classic Minecraft Beveled Stone Buttons */}
            <div className="flex flex-col gap-1.5">
              {ARENA_EVENTS.map((event) => (
                <button
                  key={event.slug}
                  type="button"
                  onClick={() => handleEventClick(event.slug)}
                  className="w-full px-2.5 py-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] active:bg-[#222222] border-2 border-t-[#666666] border-l-[#666666] border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-[#666666] active:border-b-[#666666] shadow-[2px_2px_0px_#000] active:shadow-none active:translate-y-0.5 transition-all flex items-center justify-between group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    {/* Minecraft Pixel Bullet Cube */}
                    <span className="w-2 h-2 bg-[#55FF55] group-hover:bg-[#FFAA00] border border-black shadow-[1px_1px_0px_#000] shrink-0 transition-colors" />
                    <span className="font-minecraft text-[11px] xl:text-xs tracking-wider uppercase text-white group-hover:text-[#FFAA00] [text-shadow:_1px_1px_0_#000] transition-colors whitespace-nowrap">
                      {event.name}
                    </span>
                  </div>
                  <span className="font-minecraft text-[10px] text-neutral-400 group-hover:text-[#FFAA00] group-hover:translate-x-0.5 transition-all">
                    ►
                  </span>
                </button>
              ))}
            </div>

            {/* Minecraft Footer */}
            <div className="pt-2 mt-2 border-t-2 border-[#333333] flex items-center justify-between text-[9px] font-minecraft">
              <span className="text-[#FFAA00] flex items-center gap-1 [text-shadow:_1px_1px_0_#000]">
                <Trophy className="w-3 h-3 text-[#FFAA00]" />
                <span>₹91K</span>
              </span>
              <span className="text-neutral-400 tracking-wider [text-shadow:_1px_1px_0_#000]">
                TAP FOR SPECS
              </span>
            </div>
          </div>
        </motion.div>

        {/* ====== BOTTOM STATS BAR ====== */}
        <div className="relative z-20 w-full mt-auto">
          {/* Glowing top border line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6600] to-transparent" />

          <div className="bg-gradient-to-r from-black/90 via-[#0D0D0D]/95 to-black/90 backdrop-blur-md border-t border-[#FF6600]/30">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#FF6600]/20">
                {STATS_BAR.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-3 sm:px-6 group"
                    >
                      {/* Icon container */}
                      <div className="w-9 h-9 sm:w-11 sm:h-11 bg-black/60 border-2 border-[#FF6600]/40 group-hover:border-[#FF6600] flex items-center justify-center shrink-0 transition-colors shadow-[0_0_12px_rgba(255,102,0,0.15)]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600]" />
                      </div>

                      {/* Value + Label */}
                      <div className="min-w-0">
                        <div className="font-minecraft text-base sm:text-lg md:text-xl text-white leading-none [text-shadow:_1px_1px_0_#000] tracking-wider">
                          {stat.value}
                        </div>
                        <div className="font-minecraft text-[9px] sm:text-[10px] text-neutral-500 tracking-[0.15em] uppercase mt-1">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom orange accent line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-[#FF6600]/0 via-[#FF6600]/60 to-[#FF6600]/0" />
        </div>

        {/* ====== SCROLLING TICKER MARQUEE ====== */}
        <div className="w-full relative z-20 overflow-hidden">
          <MarqueeBanner
            items={[
              "ROBOSPRANO '26",
              "HOSTED BY KILOBOTS GCEK",
              "₹91,000 TOTAL CASH POOL",
              "ROBO WAR (₹25K)",
              "DEATH RACE (₹18K)",
              "ROBO SUMO (₹18K)",
              "ROBO SOCCER (₹15K)",
              "LINE FOLLOWER (₹15K)",
              "STATE ROBOTICS CHAMPIONSHIP",
              "GCEK KALAHANDI",
              "CLAIM BOT REGISTRATION NOW",
            ]}
            bg="orange"
            glass={true}
            speed="normal"
            bended={true}
          />
        </div>
      </section>

      {/* ====== EVENT INFO POPUP (Portal-level, outside section) ====== */}
      <AnimatePresence>
        {selectedEvent && (
          <EventInfoPopup
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
