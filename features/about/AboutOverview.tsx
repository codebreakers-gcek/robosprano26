import React from "react";
import Link from "next/link";
import { ABOUT_DATA } from "@/data/about";
import {
  Compass,
  Trophy,
  Swords,
  Shield,
  Zap,
  ArrowRight,
  Flame,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function AboutOverview() {
  const { hero, decadeLegacy, whatsNew, callToAction } = ABOUT_DATA;

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Header Banner & Title */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto px-2">
        <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-3.5 py-1.5 bg-black text-[#55FF55] border-2 border-[#55FF55] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000]">
          <Compass className="w-4 h-4 text-[#55FF55]" /> {hero.badge}
        </span>

        <h1 className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight [text-shadow:_3px_3px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">
          {hero.title} //{" "}
          <span className="inline-block bg-[#FFAA00] text-black px-3 py-0.5 border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[4px_4px_0px_#000] -rotate-1 [text-shadow:none]">
            {hero.edition}
          </span>
        </h1>

        <div className="bg-[#1B1B1B]/95 backdrop-blur-md border-3 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] px-5 sm:px-8 py-3 shadow-[5px_5px_0px_#000]">
          <p className="text-sm sm:text-base md:text-lg font-black text-[#55FFFF] font-mono [text-shadow:_1px_1px_0_#000]">
            {hero.tagline}
          </p>
        </div>
      </div>

      {/* 2. Key Metric Blocks (Minecraft Stone Insets) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {hero.stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#2B2B2B]/95 backdrop-blur-sm border-3 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] p-4 sm:p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between"
          >
            <div className="font-mono text-[10px] sm:text-xs font-black uppercase text-[#FFAA00] tracking-wider [text-shadow:_1px_1px_0_#000]">
              {stat.label}
            </div>
            <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-black text-white my-1 [text-shadow:_2px_2px_0_#000]">
              {stat.value}
            </div>
            <div className="font-mono text-[11px] sm:text-xs font-bold text-[#AAAAAA]">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* 3. The 10-Edition Decade Legacy (Minecraft Stone GUI Slab) */}
      <div className="bg-[#C6C6C6] border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] shadow-[8px_8px_0px_#000] p-6 sm:p-10 space-y-6">
        <div className="border-b-3 border-[#8B8B8B] pb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase bg-[#5B8731] text-white px-3.5 py-1.5 border-2 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000]">
            <Trophy className="w-4 h-4 text-[#FFAA00]" /> A DECADE OF INNOVATION
          </span>
          <span className="font-mono text-xs font-black text-[#2A2A2A] uppercase tracking-wide">
            OFFICIAL KILOBOTS RETROSPECTIVE
          </span>
        </div>

        <div className="space-y-4 text-sm sm:text-base font-mono font-bold text-[#141414] leading-relaxed">
          {decadeLegacy.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t-3 border-[#8B8B8B]">
          {decadeLegacy.highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-[#8B8B8B] border-3 border-t-[#373737] border-l-[#373737] border-r-[#DBDBDB] border-b-[#DBDBDB] p-5 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                <div
                  className="font-mono font-black text-sm sm:text-base uppercase mb-2 [text-shadow:_1px_1px_0_#000]"
                  style={{ color: h.accent }}
                >
                  {h.title}
                </div>
                <p className="font-mono text-xs font-bold text-white leading-relaxed [text-shadow:_1px_1px_0_#000]">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. WHAT'S NEW THIS YEAR? — ROBO WAR DEBUT (Obsidian / Redstone Battle Slab) */}
      <div className="relative bg-[#1A1110] border-4 border-t-[#FF5555] border-l-[#FF5555] border-r-[#550000] border-b-[#550000] shadow-[8px_8px_0px_#000] p-6 sm:p-10 space-y-6 overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF5555]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#552222] pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black uppercase bg-[#FF5555] text-white px-3 py-1 border-2 border-t-[#FFA6A6] border-l-[#FFA6A6] border-r-[#8B0000] border-b-[#8B0000] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              {whatsNew.tag}
            </span>
            <span className="font-mono text-xs font-bold text-[#FFAA00] [text-shadow:_1px_1px_0_#000] hidden sm:inline">
              // 10TH EDITION EXCLUSIVE
            </span>
          </div>

          <Link
            href={`/events/${whatsNew.featuredEventSlug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#55FFFF] hover:underline [text-shadow:_1px_1px_0_#000]"
          >
            <span>ARENA PROTOCOL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="relative z-10 space-y-4">
          <h2 className="font-black text-2xl xs:text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight [text-shadow:_2px_2px_0_#000]">
            WHAT&apos;S NEW THIS YEAR?{" "}
            <span className="text-[#FF5555]">[ROBO WAR]</span>
          </h2>

          <div className="bg-[#2B1515] border-3 border-t-[#180A0A] border-l-[#180A0A] border-r-[#552525] border-b-[#552525] p-5 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.8)] space-y-3">
            <p className="font-mono text-sm sm:text-base font-bold text-[#FFAA00] leading-relaxed [text-shadow:_1px_1px_0_#000]">
              {whatsNew.lead}
            </p>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#EAEAEA] leading-relaxed">
              {whatsNew.body}
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {whatsNew.specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-[#261515] border-2 border-t-[#4A2020] border-l-[#4A2020] border-r-[#150A0A] border-b-[#150A0A] px-4 py-3 flex items-center gap-3"
              >
                <Swords className="w-4 h-4 text-[#FF5555] shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-bold text-white [text-shadow:_1px_1px_0_#000]">
                  {spec}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Link
              href={`/events/${whatsNew.featuredEventSlug}`}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-6 py-3 bg-[#FF5555] hover:bg-[#FF6E6E] text-white border-3 border-t-[#FFA6A6] border-l-[#FFA6A6] border-r-[#8B0000] border-b-[#8B0000] shadow-[4px_4px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all"
            >
              <Swords className="w-4 h-4" />
              <span>EXPLORE ROBO WAR ARENA DETAILS &amp; RULES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. NOW IT'S YOUR TURN TO BE PART OF THE LEGACY! (Call to Action Arena) */}
      <div className="bg-[#C6C6C6] border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] shadow-[8px_8px_0px_#000] p-6 sm:p-10 space-y-6">
        <div className="border-b-3 border-[#8B8B8B] pb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFAA00]" />
          <h3 className="font-mono font-black text-xl sm:text-2xl text-black uppercase tracking-tight">
            {callToAction.headline}
          </h3>
        </div>

        <div className="space-y-4 text-sm sm:text-base font-mono font-bold text-[#141414] leading-relaxed">
          {callToAction.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Minecraft Legendary Motto Block */}
        <div className="bg-[#1B1B1B] border-4 border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0D0D0D] border-b-[#0D0D0D] p-6 sm:p-8 text-center space-y-3 shadow-[6px_6px_0px_#000]">
          <div className="font-mono font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#55FF55] tracking-wider uppercase [text-shadow:_2px_2px_0_#000]">
            {callToAction.motto}
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-[#FFAA00] [text-shadow:_1px_1px_0_#000]">
            {callToAction.subMotto}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 font-mono text-sm font-black uppercase px-6 py-3.5 bg-[#5B8731] hover:bg-[#689B37] text-white border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[4px_4px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 transition-all text-center"
          >
            <span>VIEW ALL 5 BATTLE ARENAS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 font-mono text-sm font-black uppercase px-6 py-3.5 bg-[#FFAA00] hover:bg-[#FFB726] text-black border-3 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[4px_4px_0px_#000] active:translate-y-0.5 transition-all text-center"
          >
            <span>REGISTER YOUR SQUAD</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
