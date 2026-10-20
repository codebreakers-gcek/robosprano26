/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Swords,
  Cpu,
  ShieldCheck,
  Flame,
  Zap,
  MapPin,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Bot,
  Building2,
  ChevronRight,
} from "lucide-react";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

/* ========================================================================= */
/* CRISP MINECRAFT PIXEL ART ICONS                                           */
/* ========================================================================= */

function PixelDiamond({ size = 16 }: { size?: number }) {
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

function PixelGoldIngot({ size = 16 }: { size?: number }) {
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

function PixelRedstone({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="6" y="2" width="4" height="2" fill="#FF5555" />
      <rect x="4" y="4" width="8" height="8" fill="#FF2222" />
      <rect x="6" y="6" width="4" height="4" fill="#FFAAAA" />
      <rect x="2" y="6" width="2" height="4" fill="#990000" />
      <rect x="12" y="6" width="2" height="4" fill="#990000" />
      <rect x="6" y="12" width="4" height="2" fill="#660000" />
    </svg>
  );
}

export function CodeBreakersSpotlight() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "combat",
      title: "COMBAT BOT FORGE",
      badge: "HEAVY METAL",
      badgeColor: "bg-[#FF5555]/20 text-[#FF5555] border-[#FF5555]",
      accentColor: "#FF5555",
      glow: "hover:shadow-[0_0_25px_rgba(255,85,85,0.35)]",
      borderActive: "border-t-[#FF5555] border-l-[#FF5555]",
      icon: Flame,
      summary: "Steel chassis fabrication, weapon gearing & high-torque drive kinematics.",
      stats: "8KG COMBAT CLASS",
    },
    {
      id: "autonomous",
      title: "AUTONOMOUS PID LAB",
      badge: "SENSORS & CODE",
      badgeColor: "bg-[#55FFFF]/20 text-[#55FFFF] border-[#55FFFF]",
      accentColor: "#55FFFF",
      glow: "hover:shadow-[0_0_25px_rgba(85,255,255,0.35)]",
      borderActive: "border-t-[#55FFFF] border-l-[#55FFFF]",
      icon: Cpu,
      summary: "Microcontroller logic, multi-channel IR arrays, encoder telemetry & motor PWM tuning.",
      stats: "SUB-MILLISECOND RESPONSE",
    },
    {
      id: "scrutineering",
      title: "ARENA SCRUTINEERING",
      badge: "SAFETY PROTOCOL",
      badgeColor: "bg-[#55FF55]/20 text-[#55FF55] border-[#55FF55]",
      accentColor: "#55FF55",
      glow: "hover:shadow-[0_0_25px_rgba(85,255,85,0.35)]",
      borderActive: "border-t-[#55FF55] border-l-[#55FF55]",
      icon: ShieldCheck,
      summary: "Fail-safe cutoff verification, battery voltage compliance & battle cage integrity.",
      stats: "100% PILOT SAFETY COMPLIANT",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 border-b-4 border-black overflow-hidden bg-[#0A0710] text-white select-none">
      {/* Background Ambience: Nether Embers & Subtle Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/minecraft/sponsor_bg.png"
          alt="Kilobots Foundry Background"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(#472754 1px, transparent 1px), linear-gradient(90deg, #472754 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#55FF55]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FFAA00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ========================================================================= */}
        {/* 1. TOP MINECRAFT BOSS TAG & COMMAND DECK HEADER                           */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b-2 border-white/10 pb-4 sm:pb-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#55FF55] border border-black animate-pulse shadow-[0_0_10px_#55FF55] shrink-0" />
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-black uppercase text-[#55FF55] tracking-wider [text-shadow:_1px_1px_0_#000]">
                COMMAND DECK // KILOBOTS ROBOTICS SOCIETY
              </span>
              <span className="hidden sm:inline text-neutral-600">/</span>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-neutral-400 uppercase hidden sm:inline">
                ESTD. 2019
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#FFAA00]/20 text-[#FFAA00] border-2 border-[#FFAA00] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000]">
              ★ STATE ACCREDITED
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#55FF55]/20 text-[#55FF55] border-2 border-[#55FF55] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000]">
              50+ ACTIVE COMBAT PILOTS
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN BIFURCATED FOUNDRY & CITADEL WORKSTATION                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* ======================================================================= */}
          {/* LEFT WING: KILOBOTS ROBOTICS FOUNDRY (8 COLS)                          */}
          {/* ======================================================================= */}
          <div className="lg:col-span-8 bg-[#140E1E] border-4 border-t-[#3E2954] border-l-[#3E2954] border-r-[#07050A] border-b-[#07050A] shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] p-4 xs:p-6 sm:p-8 flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden">
            {/* Top Glowing Edge Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#55FF55] via-[#FFAA00] to-[#55FFFF]" />

            <div className="space-y-5 sm:space-y-6">
              {/* Kilobots Club Title Block with Mascot Insignia */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 bg-[#1D142C] border-3 border-t-[#5B3E7A] border-l-[#5B3E7A] border-r-[#07050A] border-b-[#07050A] p-2 shrink-0 shadow-[4px_4px_0px_#000] flex items-center justify-center">
                    <Image
                      src="/kilobot.png"
                      alt="Kilobots Robotics Club Logo"
                      width={64}
                      height={64}
                      priority
                      className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(85,255,85,0.5)]"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-[#55FF55] border border-black shadow-[1px_1px_0px_#000]" />
                  </div>

                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 font-mono text-[9px] xs:text-[10px] sm:text-xs font-black uppercase text-[#FFAA00] [text-shadow:_1px_1px_0_#000]">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      OFFICIAL HOST ROBOTICS SOCIETY
                    </div>
                    <h3 className="font-black text-xl xs:text-2xl sm:text-4xl text-white uppercase tracking-tight leading-tight [text-shadow:_2px_2px_0_#000] break-words">
                      KILOBOTS <span className="text-[#55FF55]">//</span> GCEK
                    </h3>
                    <p className="font-mono text-[10px] xs:text-xs text-neutral-400 font-bold uppercase tracking-wider truncate">
                      Government College of Engineering Kalahandi
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end gap-1">
                  <span className="font-mono text-[10px] uppercase text-neutral-500 font-bold">
                    FOUNDRY REPOSITORY
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#55FFFF] px-2 py-0.5 bg-black/60 border border-[#55FFFF]/40">
                      5 COMBAT ARENAS
                    </span>
                    <span className="font-mono text-xs font-black text-[#FFAA00] px-2 py-0.5 bg-black/60 border border-[#FFAA00]/40">
                      ₹91,000 BOUNTY
                    </span>
                  </div>
                </div>
              </div>

              {/* Bold Manifesto */}
              <div className="bg-[#1C132B] border-3 border-t-[#302148] border-l-[#302148] border-r-[#0A070F] border-b-[#0A070F] p-4 sm:p-5 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] space-y-2">
                <h4 className="font-black text-base sm:text-lg text-white uppercase tracking-tight flex items-center gap-2">
                  <Swords className="w-4 h-4 text-[#FF5555] shrink-0" />
                  <span>FORGING WESTERN ODISHA&apos;S COMPETITIVE ROBOTICS CULTURE</span>
                </h4>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#D0C4DC] leading-relaxed">
                  Kilobots is the premier student-led robotics and hardware combat society of Government College of Engineering Kalahandi. As engineers who mill steel frames, wire custom H-bridge circuits, and tune PID algorithms for high-stakes battlegrounds, we created <span className="text-[#FFAA00] font-black">ROBOSPRANO &apos;26</span> to give robotics pilots nationwide a premier tournament battleground.
                </p>
              </div>

              {/* 3 Interactive Foundry Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isActive = activeTab === idx;
                  return (
                    <div
                      key={pillar.id}
                      onClick={() => {
                        playButtonClickSound();
                        setActiveTab(idx);
                      }}
                      className={`bg-[#181126] border-3 p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-3 cursor-pointer transition-all duration-200 relative group overflow-hidden ${
                        pillar.glow
                      } ${
                        isActive
                          ? `${pillar.borderActive} bg-[#211636] -translate-y-1`
                          : "border-t-[#3E2954] border-l-[#3E2954] border-r-[#07050A] border-b-[#07050A] hover:-translate-y-0.5"
                      }`}
                    >
                      {/* Top Accent Strip */}
                      <div
                        className="h-1 w-full absolute top-0 inset-x-0"
                        style={{ backgroundColor: pillar.accentColor }}
                      />

                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between">
                          <Icon
                            className="w-5 h-5 stroke-[2.5px]"
                            style={{ color: pillar.accentColor }}
                          />
                          <span
                            className={`font-mono text-[9px] font-black uppercase px-2 py-0.5 border shadow-[1px_1px_0px_#000] ${pillar.badgeColor}`}
                          >
                            {pillar.badge}
                          </span>
                        </div>

                        <div className="font-black text-sm uppercase text-white tracking-tight">
                          {pillar.title}
                        </div>

                        <p className="font-mono text-[11px] font-bold text-[#B3A4C5] leading-relaxed">
                          {pillar.summary}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 font-mono text-[10px] font-black uppercase text-[#E0E0E0] flex items-center justify-between">
                        <span>{pillar.stats}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="pt-4 border-t-2 border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-black text-[#55FF55] flex items-center gap-1 shrink-0">
                  <Zap className="w-3.5 h-3.5 fill-current shrink-0" />
                  KILOBOTS FLEET:
                </span>
                <span className="text-[#CCCCCC] font-bold text-[11px] xs:text-xs">
                  Robo War • Death Race • Robo Sumo • Robo Soccer • Line Follower
                </span>
              </div>

              <Link
                href="/events"
                onClick={() => playButtonClickSound()}
                className="font-black text-xs text-[#FFAA00] hover:text-[#FFE285] inline-flex items-center gap-1 uppercase tracking-wider underline cursor-pointer shrink-0"
              >
                <span>VIEW ARENA SPECIFICATIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT WING: GCEK HOST CITADEL & CAMPUS TERMINAL (4 COLS)               */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 bg-[#1B1428] border-4 border-t-[#6D491F] border-l-[#6D491F] border-r-[#07050A] border-b-[#07050A] shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] p-4 xs:p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Top Golden Brass Ingot Rail */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FFE285] via-[#FFAA00] to-[#8F5500]" />

            <div className="space-y-4 sm:space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 font-mono text-[9px] xs:text-[10px] font-black uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#FFAA00] text-black border-2 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] shadow-[2px_2px_0px_#000]">
                  <Building2 className="w-3.5 h-3.5" />
                  HOST CAMPUS &amp; VENUE
                </div>
                <PixelGoldIngot size={18} />
              </div>

              {/* Institution Title */}
              <div className="space-y-1">
                <h4 className="font-black text-lg xs:text-xl sm:text-2xl text-white uppercase leading-snug tracking-tight [text-shadow:_2px_2px_0_#000] break-words">
                  GOVERNMENT COLLEGE OF ENGINEERING KALAHANDI
                </h4>
                <div className="inline-block font-mono text-[11px] xs:text-xs font-black text-[#FFAA00] tracking-wide">
                  STATE GOVERNMENT PREMIER TECH INSTITUTION
                </div>
              </div>

              {/* Campus Address & Specs Matrix */}
              <div className="space-y-2.5 font-mono text-xs">
                {/* Location */}
                <div className="p-3 bg-[#130E1C] border border-t-[#2C1D3B] border-l-[#2C1D3B] border-r-[#07050A] border-b-[#07050A] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#55FF55] font-black uppercase text-[11px]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>CAMPUS GROUND:</span>
                  </div>
                  <p className="text-[#CCCCCC] font-bold leading-relaxed text-[11px]">
                    Kandha Bando Pala, Po: Risigaon, Bhawanipatna, Kalahandi, Odisha - 766003
                  </p>
                </div>

                {/* Facilities Matrix */}
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 bg-[#130E1C] border border-t-[#2C1D3B] border-l-[#2C1D3B] border-r-[#07050A] border-b-[#07050A] flex items-center justify-between shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                    <span className="text-[#AAAAAA] font-bold">MAIN ARENA:</span>
                    <span className="font-black text-white">CENTRAL COMBAT CAGE</span>
                  </div>

                  <div className="p-2 bg-[#130E1C] border border-t-[#2C1D3B] border-l-[#2C1D3B] border-r-[#07050A] border-b-[#07050A] flex items-center justify-between shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                    <span className="text-[#AAAAAA] font-bold">TRANSIT:</span>
                    <span className="font-black text-[#55FFFF]">KESINGA (35KM) / SHUTTLES</span>
                  </div>

                  <div className="p-2 bg-[#130E1C] border border-t-[#2C1D3B] border-l-[#2C1D3B] border-r-[#07050A] border-b-[#07050A] flex items-center justify-between shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                    <span className="text-[#AAAAAA] font-bold">HOSPITALITY:</span>
                    <span className="font-black text-[#FFAA00]">STUDENT HOSTELS &amp; MESS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Action Buttons */}
            <div className="space-y-3 pt-2">
              <Link
                href="/about"
                onClick={() => playButtonClickSound()}
                className="w-full h-12 bg-[#5B8731] hover:bg-[#689B37] text-white font-mono font-black text-xs uppercase tracking-wider border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>EXPLORE KILOBOTS ODYSSEY</span>
                <ArrowRight className="w-4 h-4 stroke-[3px]" />
              </Link>

              <Link
                href="/contact"
                onClick={() => playButtonClickSound()}
                className="w-full h-11 bg-[#2C1F3D] hover:bg-[#3B2A52] text-white font-mono font-black text-xs uppercase tracking-wider border-3 border-t-[#533B73] border-l-[#533B73] border-r-[#100B17] border-b-[#100B17] shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#55FFFF]" />
                <span>VENUE &amp; REACHING GCEK</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
