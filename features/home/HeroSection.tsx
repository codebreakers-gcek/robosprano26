"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Trophy,
  Swords,
  Bot,
} from "lucide-react";
import { EVENT_DATA } from "@/data/event";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* CRISP MINECRAFT PIXEL ART ICONS (16x16 SVG - Crisp Edges)                 */
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

const ARENA_CHIPS = [
  {
    name: "ROBO WAR",
    bounty: "₹25K",
    category: "HEAVY COMBAT",
    color: "text-[#FF5555]",
    border: "border-[#FF5555]",
    bg: "bg-[#251010]/90",
  },
  {
    name: "DEATH RACE",
    bounty: "₹18K",
    category: "SPEED & OBSTACLES",
    color: "text-[#FFAA00]",
    border: "border-[#FFAA00]",
    bg: "bg-[#251A0A]/90",
  },
  {
    name: "ROBO SUMO",
    bounty: "₹18K",
    category: "DOHYO RING",
    color: "text-[#8FB2D4]",
    border: "border-[#8FB2D4]",
    bg: "bg-[#18202A]/90",
  },
  {
    name: "ROBO SOCCER",
    bounty: "₹15K",
    category: "RC BALL STRIKER",
    color: "text-[#55FF55]",
    border: "border-[#55FF55]",
    bg: "bg-[#0E2214]/90",
  },
  {
    name: "LINE FOLLOWER",
    bounty: "₹15K",
    category: "PID AUTONOMOUS",
    color: "text-[#55FFFF]",
    border: "border-[#55FFFF]",
    bg: "bg-[#0F2228]/90",
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-[100dvh] sm:min-h-[calc(100dvh-5rem)] flex flex-col justify-between items-center pt-8 pb-0 sm:pt-14 sm:pb-0 border-b-4 border-black touch-pan-y bg-[#0C0810] text-white">
      {/* Minecraft Theme Responsive Background Layer with Dark Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/minecraft/1.webp"
          alt="Kilobots Minecraft Arena"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0810] via-transparent to-[#0C0810]" />
      </div>

      {/* Floating Minecraft Stickers (Desktop) */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -10, rotate: -3 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-6 left-4 sm:left-10 hidden xl:block select-none pointer-events-none z-20"
      >
        <div className="bg-[#1A121F] text-[#FFAA00] font-minecraft text-xs uppercase px-3.5 py-2 border-3 border-[#FFAA00] shadow-[4px_4px_0px_#000] flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#FFAA00] shrink-0" />
          <span>KILOBOTS ROBOTICS CLUB // GCEK</span>
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -10, rotate: 3 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute top-10 right-4 sm:right-10 hidden xl:block select-none pointer-events-none z-20"
      >
        <div className="bg-[#1A121F] text-[#55FF55] font-minecraft text-xs uppercase px-3.5 py-2 border-3 border-[#55FF55] shadow-[4px_4px_0px_#000] flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#55FF55] shrink-0" />
          <span>₹91,000 TOTAL BOUNTY POOL</span>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full"
      >
        {/* Top Identification Badge: Kilobots Robotics Club */}
        <motion.div variants={itemVariants} className="w-full flex items-center justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center justify-center">
            <span className="inline-flex items-center gap-2.5 font-minecraft text-xs sm:text-sm uppercase px-4 py-2 bg-[#1B1422] text-white border-3 border-t-[#3A2A48] border-l-[#3A2A48] border-r-[#000000] border-b-[#000000] shadow-[3px_3px_0px_#000]">
              <div className="w-6 h-6 sm:w-7 sm:h-7 p-0.5 flex items-center justify-center shrink-0">
                <Image
                  src="/cblogo.png"
                  alt="Kilobots GCEK Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="flex items-center gap-1.5 text-[#55FF55] [text-shadow:_1px_1px_0_#000]">
                <span>ORGANISED BY KILOBOTS // GCEK KALAHANDI</span>
              </span>
            </span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3D MINECRAFT TITLE LOGO: ROBOSPRANO '26                                  */}
        {/* ========================================================================= */}
        <motion.div variants={itemVariants} className="relative inline-flex flex-col items-center justify-center mb-4 sm:mb-5 max-w-full">
          <h1 className="sr-only">ROBOSPRANO &apos;26</h1>

          <div className="relative inline-block select-none px-2">
            {/* Massive 3D Minecraft Typography */}
            <div className="font-minecraft text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[6.5rem] tracking-widest uppercase leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C0] via-[#FFAA00] to-[#C47300] [filter:drop-shadow(4px_4px_0_#000)_drop-shadow(-2px_-2px_0_#000)_drop-shadow(0_8px_0_#5A3500)] select-none">
              ROBOSPRANO
            </div>

            {/* Floating '26 Badge */}
            <div className="absolute right-0 sm:-right-4 bottom-0 translate-y-[20%] sm:translate-y-[25%] select-none z-10">
              <span className="font-minecraft text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold bg-[#55FF55] text-black px-3 py-1 border-3 sm:border-4 border-t-[#9EFF9E] border-l-[#9EFF9E] border-r-[#1B801B] border-b-[#1B801B] shadow-[4px_4px_0px_#000] -rotate-6 inline-block [text-shadow:_1px_1px_0_#FFF]">
                &apos;26
              </span>
            </div>
          </div>

          {/* Subtitle Badge */}
          <div className="mt-3 sm:mt-4">
            <span className="font-minecraft text-[11px] sm:text-xs md:text-sm font-bold text-[#55FFFF] bg-[#0E1E28] px-3.5 py-1 border-2 border-[#55FFFF]/60 shadow-[2px_2px_0px_#000] uppercase tracking-wider inline-flex items-center gap-1.5">
              <PixelXPOrb size={14} />
              <span>KILOBOTS STATE ROBOTICS CHAMPIONSHIP</span>
              <PixelXPOrb size={14} />
            </span>
          </div>
        </motion.div>

        {/* Tagline Banner */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto my-2 px-2 flex flex-col items-center gap-2">
          <div className="inline-block bg-[#FFAA00] text-black font-minecraft text-xs xs:text-sm sm:text-base md:text-lg uppercase px-4 py-1.5 border-3 border-black shadow-[3px_3px_0px_#000] -rotate-1">
            &ldquo;{EVENT_DATA.tagline}&rdquo;
          </div>
        </motion.div>

        {/* The 5 Official Arenas Hotbar Chips */}
        <motion.div variants={itemVariants} className="max-w-5xl mx-auto my-3 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
            {ARENA_CHIPS.map((chip) => (
              <div
                key={chip.name}
                className={`${chip.bg} border-2 ${chip.border} p-2 text-center shadow-[3px_3px_0px_#000] flex flex-col items-center justify-center`}
              >
                <span className="text-white font-minecraft text-xs sm:text-sm font-bold block">
                  {chip.name}
                </span>
                <span className={`${chip.color} font-minecraft text-sm sm:text-base font-black`}>
                  {chip.bounty}
                </span>
                <span className="font-mono text-[9px] text-neutral-400 uppercase mt-0.5">
                  {chip.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Introduction Panel */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto my-2 sm:my-3 px-2">
          <div className="bg-[#1A121F]/90 backdrop-blur-sm border-3 border-t-[#3C2A47] border-l-[#3C2A47] border-r-[#0D0812] border-b-[#0D0812] p-3.5 sm:p-4 shadow-[4px_4px_0px_#000] text-center">
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#EAEAEA] font-mono leading-relaxed">
              {EVENT_DATA.shortDescription}
            </p>
          </div>
        </motion.div>

        {/* Event Date & Location Chips */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 my-3 sm:my-4 px-2"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B1422] text-white border-3 border-t-[#3C2A47] border-l-[#3C2A47] border-r-[#000000] border-b-[#000000] px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-[3px_3px_0px_#000] font-minecraft text-xs sm:text-sm">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFAA00]" />
            <span>{EVENT_DATA.displayDates}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#1B1422] text-white border-3 border-t-[#3C2A47] border-l-[#3C2A47] border-r-[#000000] border-b-[#000000] px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-[3px_3px_0px_#000] font-minecraft text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55FF55]" />
            <span>{EVENT_DATA.location.venue}, {EVENT_DATA.location.city}</span>
          </div>
        </motion.div>


        {/* Primary Call-to-Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 px-2"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            whileTap={shouldReduceMotion ? {} : { y: 1 }}
            transition={{ duration: 0.12 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/register"
              onClick={() => playButtonClickSound()}
              className="w-full sm:w-auto h-13 sm:h-14 px-7 sm:px-9 bg-[#5B8731] hover:bg-[#689B37] text-white font-minecraft text-sm sm:text-base uppercase tracking-wider border-4 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] active:border-t-[#2C4813] active:border-l-[#2C4813] active:border-r-[#85B745] active:border-b-[#85B745] shadow-[4px_4px_0px_#000] [text-shadow:_1px_1px_0_#000] flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              <Swords className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span>REGISTER YOUR BOT</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3px]" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            whileTap={shouldReduceMotion ? {} : { y: 1 }}
            transition={{ duration: 0.12 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#prize-pool"
              onClick={() => playButtonClickSound()}
              className="w-full sm:w-auto h-13 sm:h-14 px-6 sm:px-8 bg-[#FFAA00] hover:bg-[#FFB72B] text-black font-minecraft text-sm sm:text-base uppercase tracking-wider border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] active:border-t-[#8F5500] active:border-l-[#8F5500] active:border-r-[#FFE285] active:border-b-[#FFE285] shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
              <span>VIEW PRIZE POOL (₹91K)</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scrolling Ticker Marquee with Kilobots & Robotics Arena Keywords */}
      <div className="w-full relative z-20 mt-8 overflow-hidden">
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
          bg="secondary"
          speed="normal"
          bended
        />
      </div>
    </section>
  );
}
