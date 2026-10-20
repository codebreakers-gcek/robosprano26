import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/features/home/HeroSection";
import { QuickStats } from "@/features/home/QuickStats";
import { HomeEventsShowcase } from "@/features/home/HomeEventsShowcase";
import { PrizePoolBanner } from "@/features/home/PrizePoolBanner";
import { SponsorsTeaser } from "@/features/home/SponsorsTeaser";
import { CodeBreakersSpotlight } from "@/features/home/CodeBreakersSpotlight";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";
import { MinecraftBlockMarquee } from "@/components/layout/MinecraftBlockMarquee";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowRight, Terminal, Users, Swords, Bot } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Includes integrated Minecraft wallpaper Marquee) */}
      <HeroSection />

      {/* 2. Event High-Impact Numbers / Arena Telemetry */}
      <ScrollReveal>
        <QuickStats />
      </ScrollReveal>

      {/* 3. Featured Robotics Arenas / Events Cards */}
      <ScrollReveal>
        <HomeEventsShowcase />
      </ScrollReveal>

      {/* 4. Prize Pool Breakdown */}
      <ScrollReveal>
        <PrizePoolBanner />
      </ScrollReveal>

      {/* Marquee Separator between Prize Pool and Kilobots // GCEK Information */}
      <div className="relative bg-[#E2E8F0] overflow-hidden py-2 border-y-4 border-black z-20">
        <MarqueeBanner
          items={[
            "PATRON GUILD",
            "OFFICIAL SPONSORS",
            "POWERED BY INDUSTRY LEADERS",
            "ROBOTICS HARDWARE PARTNERS",
            "ROBOSPRANO '26",
            "KILOBOTS GCEK",
            "GCEK KALAHANDI",
          ]}
          bg="black"
          glass={true}
          speed="normal"
          angle="rotate-[1deg] sm:rotate-[0.85deg]"
        />

        {/* Minecraft Block Divider Marquee */}
        <MinecraftBlockMarquee speed="normal" />
      </div>

      {/* 7. CodeBreakers Club & GCEK Spotlight */}
      <ScrollReveal>
        <CodeBreakersSpotlight />
      </ScrollReveal>

      {/* 8. Final Call to Action with Minecraft Character Art */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-b from-[#EBF5FF] via-[#F0FDF4] to-[#DCFCE7] border-b-4 border-black text-center relative overflow-hidden text-black">
          {/* Left Side Minecraft Coder at Desk */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] md:w-[55%] lg:w-[48%] pointer-events-none select-none z-0 overflow-hidden opacity-30">
            <Image
              src="/minecraft/robo_desk.webp"
              alt="Minecraft Coder at Desk"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-left sm:object-left-center"
            />
            {/* Horizontal gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0FDF4]/70 to-[#F0FDF4] via-60%" />
            {/* Subtle vertical fade for small mobile viewports */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F0FDF4]/60 to-[#F0FDF4] sm:hidden" />
          </div>

          {/* Warm Ambient Accents */}
          <div className="absolute -top-16 right-1/4 w-72 h-72 bg-[#FFAA00]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#3898EC]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Desktop Right Side Squad Mascot (Full Side Height) */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[380px] xl:w-[480px] 2xl:w-[540px] pointer-events-none select-none z-10 drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
            <div className="relative w-full h-full">
              <Image
                src="/minecraft/team_3.webp"
                alt="Minecraft Squad Pass Mascot - Steve, Alex & Saddle Pig"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1280px) 380px, 540px"
              />
              <div className="absolute top-6 xl:top-8 right-6 xl:right-10 bg-[#FFAA00] text-black border-3 border-black font-mono text-xs xl:text-sm font-black uppercase px-3.5 py-1 shadow-neo rotate-2 flex items-center gap-1.5">
                <Bot className="w-4 h-4" /> BATTLE READY SQUAD
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            {/* Mobile Mascot Badge */}
            <div className="flex flex-col items-center gap-2 lg:hidden">
              <div className="relative w-36 h-36 xs:w-44 xs:h-44 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                <Image
                  src="/minecraft/team_3.webp"
                  alt="Minecraft Squad Pass Mascot"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-xs font-black uppercase px-3 py-1 bg-[#FFAA00] text-black border-2 border-black shadow-neo-sm inline-flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> 2-5 MEMBERS SQUAD
              </span>
            </div>

            <span className="font-mono text-xs font-black uppercase px-3.5 py-1.5 bg-[#FFAA00] text-black border-2 border-black shadow-[2px_2px_0px_#000] inline-flex items-center gap-2 flex-wrap">
              <span>★ ROBOSPRANO &apos;26 REGISTRATION LIVE</span>
              <span>➔</span>
              <span>5 COMBAT ARENAS // ₹91,000 TOTAL BOUNTY POOL</span>
            </span>

            <h2 className="font-black text-4xl sm:text-6xl text-black uppercase tracking-tight leading-tight">
              FORGE YOUR MACHINE. <br />
              <span className="bg-[#FFAA00] text-black px-3.5 py-1 border-4 border-black shadow-[4px_4px_0px_#000] inline-block rotate-[-1deg] mt-2">
                CLAIM THE ARENA GLORY
              </span>
            </h2>

            <p className="text-base sm:text-xl font-bold text-slate-800 max-w-2xl mx-auto leading-relaxed">
              Odisha&apos;s premier robotics championship hosted by Kilobots GCEK. 5 high-voltage arenas: Robo War, Death Race, Robo Sumo, Robo Soccer, and Line Follower with ₹91,000 in cash prizes. Build, clash, and dominate the combat ground.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events"
                className="w-full sm:w-auto h-14 px-10 bg-[#5DB329] hover:bg-[#4EA022] text-white font-mono font-black text-base uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-y-[-2px] active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Swords className="w-5 h-5 shrink-0" />
                <span>REGISTER YOUR BOT</span>
                <ArrowRight className="w-5 h-5 stroke-[3px]" />
              </Link>

              <Link
                href="/events"
                className="w-full sm:w-auto h-14 px-8 bg-white hover:bg-slate-100 text-black font-mono font-black text-base uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-y-[-2px] active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Terminal className="w-5 h-5 stroke-[3px]" />
                <span>EXPLORE ALL 5 ARENAS</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
