"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Swords,
  IndianRupee,
  Users,
  Calendar,
} from "lucide-react";
import { EVENT_DATA } from "@/data/event";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* STATS BAR DATA                                                             */
/* ========================================================================= */

const STATS_BAR = [
  {
    icon: IndianRupee,
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
/* HERO SECTION COMPONENT                                                     */
/* ========================================================================= */

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] sm:min-h-[calc(100dvh-5rem)] flex flex-col border-b-4 border-black bg-[#EBF5FF] text-black">
        {/* ====== BACKGROUND LAYER (Daylight Stadium & Sky) ====== */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/landing/image.png"
            alt="Robosprano Arena Background"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center opacity-50"
          />
        </div>

        {/* ====== MAIN CONTENT AREA (CENTERED) ====== */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center justify-center">
            {/* ====== CENTERED CONTENT ====== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full flex flex-col items-center text-center relative z-10"
            >
              {/* Club Presents Tag & GCEK Logo */}
              <motion.div variants={itemVariants} className="mb-2 sm:mb-4 flex flex-col items-center">
                {/* ========================================================================= */}
                {/* GCEK COLLEGE LOGO                                                         */}
                {/* RESIZE GUIDE: Modify the w-* and h-* classes below to adjust size anytime */}
                {/* (e.g. w-16 h-16, w-20 h-20, w-24 h-24, w-28 h-28, etc.)                  */}
                {/* ========================================================================= */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                  <Image
                    src="/gcek_logo.png"
                    alt="Government College of Engineering Kalahandi Logo"
                    fill
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    className="object-contain"
                    priority
                  />
                </div>

                <span className="font-minecraft text-[11px] sm:text-sm md:text-base tracking-[0.25em] uppercase text-slate-950 font-extrabold [text-shadow:_1px_1px_0_#FFF]">
                  Government College of Engineering Kalahandi
                </span>
                <span className="font-minecraft text-[11px] sm:text-sm md:text-base tracking-[0.25em] uppercase text-slate-950 font-extrabold [text-shadow:_1px_1px_0_#FFF]">
                  &amp;
                </span>
                <span className="font-minecraft text-[11px] sm:text-sm md:text-base tracking-[0.25em] uppercase text-slate-950 font-extrabold [text-shadow:_1px_1px_0_#FFF]">
                  Kilobots the robotics society of GCE Kalahandi
                </span>
                <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-1.5">
                  <div className="w-8 sm:w-16 h-[3px] bg-[#0084FF] shadow-[1px_1px_0px_#000]" />
                  <span className="font-minecraft text-xs sm:text-sm tracking-[0.2em] uppercase text-black font-black px-2.5 py-0.5 bg-white/90 border border-black shadow-[2px_2px_0px_#000]">
                    PRESENTS
                  </span>
                  <div className="w-8 sm:w-16 h-[3px] bg-[#0084FF] shadow-[1px_1px_0px_#000]" />
                </div>
              </motion.div>

              {/* MAIN TITLE: ROBOSPRANO 2K26 (CENTERED, MINECRAFT RADIANT GOLD & EMERALD) */}
              <motion.div
                variants={itemVariants}
                className="mb-4 sm:mb-5 overflow-visible relative z-20 text-center w-full"
              >
                <h1 className="font-minecraftt leading-[0.85] select-none overflow-visible whitespace-nowrap text-center">
                  <span className="inline-block text-5xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFD000] to-[#E67E00] [filter:drop-shadow(3px_3px_0_#000)_drop-shadow(-1px_-1px_0_#000)_drop-shadow(0_6px_0_#5A2D00)] sm:[filter:drop-shadow(5px_5px_0_#000)_drop-shadow(-2px_-2px_0_#000)_drop-shadow(0_10px_0_#5A2D00)]">
                    ROBOSPRANO
                  </span>
                  <br />
                  <span className="inline-block text-5xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#22C55E] to-[#15803D] [filter:drop-shadow(3px_3px_0_#000)_drop-shadow(-1px_-1px_0_#000)_drop-shadow(0_6px_0_#064E3B)] sm:[filter:drop-shadow(5px_5px_0_#000)_drop-shadow(-2px_-2px_0_#000)_drop-shadow(0_10px_0_#064E3B)]">
                    2K26
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle Badge */}
              <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
                <span className="font-minecraft text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase text-black font-extrabold bg-white/95 px-4 sm:px-6 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000] inline-block">
                  ROBOTICS CHAMPIONSHIP
                </span>
              </motion.div>

              {/* Tagline Highlight Banner */}
              <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
                <div className="inline-block bg-[#FFAA00] px-4 sm:px-6 py-2 sm:py-2.5 text-black font-minecraft text-xs sm:text-sm md:text-base font-black tracking-[0.18em] sm:tracking-[0.22em] uppercase select-none border-2 border-black shadow-[4px_4px_0px_#000]">
                  {EVENT_DATA.tagline}
                </div>
              </motion.div>

              {/* Description Text */}
              <motion.div
                variants={itemVariants}
                className="mb-6 sm:mb-8 max-w-xl mx-auto"
              >
                <p className="font-sans text-sm sm:text-base md:text-lg text-neutral-950 font-bold leading-relaxed">
                  5 thrilling arenas. Build, compete, and <span className="bg-black text-yellow-500 px-1 py-0.5 selection:bg-amber-600">prove your machine</span> on the battlefield.
                </p>
              </motion.div>

              {/* CTA BUTTONS (CENTERED) */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
              >
                {/* Primary CTA: Register Your Bot */}
                <Link
                  href="/register"
                  onClick={() => playButtonClickSound()}
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-[#5DB329] hover:bg-[#6CBF35] text-white font-sans font-black text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap border-2 border-t-[#8CE249] border-l-[#8CE249] border-r-[#337A17] border-b-[#337A17] [text-shadow:_1px_1px_0_#2C4813]"
                >
                  <Swords className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  <span>REGISTER YOUR BOT</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3px]" />
                </Link>

                {/* Secondary CTA: View Prize Pool */}
                <Link
                  href="#prize-pool"
                  onClick={() => playButtonClickSound()}
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-white hover:bg-slate-100 text-black font-sans font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706] shrink-0" />
                  <span>VIEW PRIZE POOL (₹91K)</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5px] text-black" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ====== BOTTOM STATS BAR ====== */}
        <div className="relative z-20 w-full mt-auto">
          <div className="bg-white/95 backdrop-blur-md border-t-4 border-black shadow-[0_-4px_16px_rgba(0,0,0,0.06)] text-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x-2 divide-black/10">
                {STATS_BAR.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-3 sm:px-6 group"
                    >
                      {/* Icon container */}
                      <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#E0F2FE] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0084FF]" />
                      </div>

                      {/* Value + Label */}
                      <div className="min-w-0">
                        <div className="font-minecraft text-base sm:text-lg md:text-xl text-black font-bold leading-none tracking-wider">
                          {stat.value}
                        </div>
                        <div className="font-minecraft text-[9px] sm:text-[10px] text-neutral-600 tracking-[0.15em] uppercase mt-1 font-bold">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ====== SCROLLING TICKER MARQUEE ====== */}
        <div className="w-full relative z-20 overflow-hidden">
          <MarqueeBanner
            items={[
              "ROBOSPRANO '26",
              "HOSTED BY KILOBOTS GCEK",
              "₹91,000 TOTAL CASH POOL",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "ROBO WAR (₹25K)",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "DEATH RACE (₹18K)",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "ROBO SUMO (₹18K)",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "ROBO SOCCER (₹15K)",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "LINE FOLLOWER (₹15K)",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "ROBOTICS CHAMPIONSHIP",
              // "IGIT SARANG TEAMS ARE NOT ALLOWED TO PARTICIPATE",
              "GCEK KALAHANDI",
              "CLAIM BOT REGISTRATION NOW",
            ]}
          />
        </div>
      </section>
    </>
  );
}
