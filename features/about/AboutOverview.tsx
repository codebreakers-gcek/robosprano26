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
        <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-3.5 py-1.5 bg-[#5DB329] text-white border-2 border-black shadow-[3px_3px_0px_#000]">
          <Compass className="w-4 h-4 text-white" /> {hero.badge}
        </span>

        <h1 className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-tight">
          {hero.title} //{" "}
          <span className="inline-block bg-[#FFAA00] text-black px-3 py-0.5 border-4 border-black shadow-[4px_4px_0px_#000] -rotate-1">
            {hero.edition}
          </span>
        </h1>

        <div className="bg-white border-3 border-black px-5 sm:px-8 py-3.5 shadow-[5px_5px_0px_#000]">
          <p className="text-sm sm:text-base md:text-lg font-black text-black font-mono">
            {hero.tagline}
          </p>
        </div>
      </div>

      {/* 2. Key Metric Blocks (Minecraft Light Stone Insets) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {hero.stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border-3 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between"
          >
            <div className="font-mono text-[10px] sm:text-xs font-black uppercase text-[#B45309] tracking-wider">
              {stat.label}
            </div>
            <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-black text-black my-1">
              {stat.value}
            </div>
            <div className="font-mono text-[11px] sm:text-xs font-bold text-slate-600">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* 3. The 10-Edition Decade Legacy (Minecraft Light Stone Slab) */}
      <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-6 sm:p-10 space-y-6">
        <div className="border-b-3 border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase bg-[#5DB329] text-white px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Trophy className="w-4 h-4 text-white" /> A DECADE OF INNOVATION
          </span>
          <span className="font-mono text-xs font-black text-slate-700 uppercase tracking-wide">
            OFFICIAL KILOBOTS RETROSPECTIVE
          </span>
        </div>

        <div className="space-y-4 text-sm sm:text-base font-mono font-bold text-slate-800 leading-relaxed">
          {decadeLegacy.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t-3 border-slate-200">
          {decadeLegacy.highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-[#F1F5F9] border-2 border-black p-5 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.08)] flex flex-col justify-between"
            >
              <div>
                <div
                  className="font-mono font-black text-sm sm:text-base uppercase mb-2"
                  style={{ color: "#0F172A" }}
                >
                  {h.title}
                </div>
                <p className="font-mono text-xs font-bold text-slate-700 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. WHAT'S NEW THIS YEAR? — ROBO WAR DEBUT (Daylight Redstone TNT Slab) */}
      <div className="relative bg-[#FEF2F2] border-4 border-black shadow-[6px_6px_0px_#000] p-6 sm:p-10 space-y-6 overflow-hidden">
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-red-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black uppercase bg-[#DC2626] text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              {whatsNew.tag}
            </span>
            <span className="font-mono text-xs font-bold text-[#DC2626] hidden sm:inline">
              // 10TH EDITION EXCLUSIVE
            </span>
          </div>

          <Link
            href={`/events/${whatsNew.featuredEventSlug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#0284C7] hover:underline"
          >
            <span>ARENA PROTOCOL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="relative z-10 space-y-4">
          <h2 className="font-black text-2xl xs:text-3xl sm:text-4xl text-black uppercase tracking-tight leading-tight">
            WHAT&apos;S NEW THIS YEAR?{" "}
            <span className="text-[#DC2626]">[ROBO WAR]</span>
          </h2>

          <div className="bg-white border-3 border-black p-5 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.06)] space-y-3">
            <p className="font-mono text-sm sm:text-base font-bold text-[#B45309] leading-relaxed">
              {whatsNew.lead}
            </p>
            <p className="font-mono text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
              {whatsNew.body}
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {whatsNew.specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-black px-4 py-3 flex items-center gap-3 shadow-[2px_2px_0px_#000]"
              >
                <Swords className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-bold text-black">
                  {spec}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Link
              href={`/events/${whatsNew.featuredEventSlug}`}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white border-3 border-black shadow-[4px_4px_0px_#000] active:translate-y-0.5 transition-all"
            >
              <Swords className="w-4 h-4" />
              <span>EXPLORE ROBO WAR ARENA DETAILS &amp; RULES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. NOW IT'S YOUR TURN TO BE PART OF THE LEGACY! (Call to Action Arena) */}
      <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-6 sm:p-10 space-y-6">
        <div className="border-b-3 border-slate-200 pb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFAA00]" />
          <h3 className="font-mono font-black text-xl sm:text-2xl text-black uppercase tracking-tight">
            {callToAction.headline}
          </h3>
        </div>

        <div className="space-y-4 text-sm sm:text-base font-mono font-bold text-slate-800 leading-relaxed">
          {callToAction.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Minecraft Legendary Motto Block */}
        <div className="bg-[#F0FDF4] border-3 border-black p-6 sm:p-8 text-center space-y-3 shadow-[4px_4px_0px_#000]">
          <div className="font-mono font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#16A34A] tracking-wider uppercase">
            {callToAction.motto}
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-[#B45309]">
            {callToAction.subMotto}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 font-mono text-sm font-black uppercase px-6 py-3.5 bg-[#5DB329] hover:bg-[#689B37] text-white border-3 border-black shadow-[4px_4px_0px_#000] active:translate-y-0.5 transition-all text-center"
          >
            <span>VIEW ALL 5 BATTLE ARENAS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 font-mono text-sm font-black uppercase px-6 py-3.5 bg-[#FFAA00] hover:bg-[#FFB726] text-black border-3 border-black shadow-[4px_4px_0px_#000] active:translate-y-0.5 transition-all text-center"
          >
            <span>REGISTER YOUR SQUAD</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
