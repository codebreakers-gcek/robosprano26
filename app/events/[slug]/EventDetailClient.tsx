"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Users,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Share2,
  Phone,
  Trophy,
  IndianRupee,
  Check,
  Copy,
  ShieldAlert,
  Wrench,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RoboticsEvent } from "@/data/roboticsEvents";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";
import { IgitBanNotice } from "@/components/common/IgitBanNotice";

/* ========================================================================= */
/* CRISP MINECRAFT PIXEL ART ICONS (16x16 SVGs)                              */
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
      <rect x="4" y="5" width="8" height="2" fill="#FFE285" />
      <rect x="3" y="7" width="10" height="4" fill="#FFAA00" />
      <rect x="4" y="11" width="8" height="2" fill="#8F5500" />
      <rect x="5" y="6" width="2" height="1" fill="#FFFFFF" />
      <rect x="4" y="8" width="8" height="2" fill="#FFC83D" />
    </svg>
  );
}

function PixelIronIngot({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="4" y="5" width="8" height="2" fill="#FFFFFF" />
      <rect x="3" y="7" width="10" height="4" fill="#D8D8D8" />
      <rect x="4" y="11" width="8" height="2" fill="#7A7A7A" />
      <rect x="5" y="6" width="2" height="1" fill="#FFFFFF" />
      <rect x="4" y="8" width="8" height="2" fill="#E8E8E8" />
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
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect width="16" height="16" fill="#1C140A" />
      <rect x="1" y="1" width="14" height="14" fill="#865324" />
      <rect x="2" y="2" width="12" height="4" fill="#B37839" />
      <rect x="2" y="7" width="12" height="7" fill="#6A401A" />
      <rect x="1" y="6" width="14" height="1" fill="#1C140A" />
      <rect x="7" y="5" width="2" height="3" fill="#EAEAEA" />
      <rect x="7" y="6" width="2" height="1" fill="#555555" />
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

function PixelSword({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect x="12" y="2" width="2" height="2" fill="#FF5555" />
      <rect x="10" y="4" width="2" height="2" fill="#FF5555" />
      <rect x="8" y="6" width="2" height="2" fill="#FF5555" />
      <rect x="6" y="8" width="2" height="2" fill="#880000" />
      <rect x="4" y="10" width="2" height="2" fill="#8F5500" />
      <rect x="5" y="9" width="1" height="1" fill="#FFE285" />
      <rect x="3" y="11" width="1" height="1" fill="#FFE285" />
      <rect x="2" y="12" width="2" height="2" fill="#5A3A00" />
    </svg>
  );
}

function PixelCompass({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      className="inline-block shrink-0 drop-shadow-[1px_1px_0px_#000]"
      style={{ shapeRendering: "crispEdges" }}
    >
      <rect width="16" height="16" fill="#1C1820" />
      <rect x="1" y="1" width="14" height="14" fill="#6A5A7A" />
      <rect x="2" y="2" width="12" height="12" fill="#16121E" />
      <rect x="7" y="3" width="2" height="4" fill="#FF5555" />
      <rect x="7" y="9" width="2" height="4" fill="#55FFFF" />
      <rect x="7" y="7" width="2" height="2" fill="#FFFFFF" />
    </svg>
  );
}

/* Accent color mapping for arena theme */
const ARENA_THEME_COLORS: Record<
  string,
  { border: string; glow: string; text: string; bg: string }
> = {
  "robo-war": {
    border: "border-[#FF5555]",
    glow: "rgba(255,85,85,0.3)",
    text: "text-[#FF5555]",
    bg: "bg-[#FF5555]",
  },
  "death-race": {
    border: "border-[#FFAA00]",
    glow: "rgba(255,170,0,0.3)",
    text: "text-[#FFAA00]",
    bg: "bg-[#FFAA00]",
  },
  "robo-sumo": {
    border: "border-[#55FFFF]",
    glow: "rgba(85,255,255,0.3)",
    text: "text-[#55FFFF]",
    bg: "bg-[#55FFFF]",
  },
  "robo-soccer": {
    border: "border-[#55FF55]",
    glow: "rgba(85,255,85,0.3)",
    text: "text-[#55FF55]",
    bg: "bg-[#55FF55]",
  },
  "line-follower": {
    border: "border-[#D070FF]",
    glow: "rgba(208,112,255,0.3)",
    text: "text-[#D070FF]",
    bg: "bg-[#D070FF]",
  },
};

const RULEBOOK_LINKS: Record<string, string> = {
  "robo-war":
    "https://drive.google.com/file/d/1sWoyAjd07I1xehwY7btkiMenfIwPJLOQ/view?usp=drive_link",
  "robo-soccer":
    "https://drive.google.com/file/d/1YNEOn_6B_fKO2H0EzC7BiUadAnvNiQv2/view?usp=drive_link",
  "line-follower":
    "https://drive.google.com/file/d/1t708JdtaIpauDPU89-3fahkwPTH42jn5/view?usp=drive_link",
  "death-race":
    "https://drive.google.com/file/d/1_DNeLOhgv_WeAL_lRfmZ9-gHQLQEfEc9/view?usp=drive_link",
  "robo-sumo":
    "https://drive.google.com/file/d/10Kqmce2RujmoarFWeAzi6ozfG8sUxs3I/view?usp=drive_link",
};

interface EventDetailClientProps {
  event: RoboticsEvent;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<null | {
    url: string;
    caption: string;
  }>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedItem, setCopiedItem] = useState("");

  const rulebookUrl =
    event.rulebookLink ||
    RULEBOOK_LINKS[event.slug] ||
    RULEBOOK_LINKS[event.id];

  const theme = ARENA_THEME_COLORS[event.slug] ||
    ARENA_THEME_COLORS[event.id] || {
      border: "border-[#FFAA00]",
      glow: "rgba(255,170,0,0.3)",
      text: "text-[#FFAA00]",
      bg: "bg-[#FFAA00]",
    };

  const handleShare = () => {
    playButtonClickSound();
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const copyAllToClipboard = async () => {
    try {
      const shareText = `${event.title} | Robosprano 2026
${event.description}
${event.date} at ${event.time}
Venue: ${event.venue || event.location}
Team Size: ${event.teamSize}
${event.fee ? `Entry Fee: ${event.fee}` : ""}
${event.prizePool ? `Prize Pool: ${event.prizePool}` : ""}
View Details: ${window.location.href}`;

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setCopiedItem("all");
      setTimeout(() => {
        setCopied(false);
        setCopiedItem("");
      }, 2000);

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile && navigator.share) {
        try {
          await navigator.share({
            title: `${event.title} | Robosprano 2026`,
            text: shareText,
          });
        } catch {
          // User dismissed share dialog
        }
      }
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0812] text-white pt-20 sm:pt-24 pb-16 relative overflow-hidden">
      {/* Full-Height Atmospheric Minecraft Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/minecraft/1.webp"
          alt="Robosprano Arena World Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Atmospheric Minecraft Dark Tint & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0812]/90 via-[#0C0812]/60 to-[#0C0812]/95" />
        {/* Subtle Minecraft Block Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 space-y-4 sm:space-y-8">
        {/* ========================================================================= */}
        {/* 1. HERO BANNER: MINECRAFT PICTURE FRAME VIEWPORT                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative border-4 border-black shadow-[6px_6px_0px_#000] bg-[#140E18] overflow-hidden"
        >
          {/* Decorative Corner Pixel Blocks */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-[#FFAA00] z-20" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-[#FFAA00] z-20" />
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#FFAA00] z-20" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#FFAA00] z-20" />

          {/* Banner Image Container */}
          <div className="relative h-[48vh] sm:h-[55vh] md:h-[60vh] w-full bg-[#18111B]">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {/* Minecraft Obsidian Vignette Gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0812]/80 via-transparent to-[#0C0812]/80" />
          </div>

          {/* Top Minecraft GUI Navigation Controls */}
          <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 flex items-center justify-between z-30">
            <Link
              href="/events"
              onClick={() => playButtonClickSound()}
              className="inline-flex items-center gap-2 bg-[#201628] hover:bg-[#2C1F38] text-white px-3 sm:px-4 py-2 border-2 border-t-[#4E3760] border-l-[#4E3760] border-r-black border-b-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Back to Arenas</span>
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-[#201628] hover:bg-[#2C1F38] text-white px-3 sm:px-4 py-2 border-2 border-t-[#4E3760] border-l-[#4E3760] border-r-black border-b-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 stroke-[2.5]" />
                <span>Share</span>
              </button>

              {/* Minecraft GUI Share Dropdown */}
              <AnimatePresence>
                {isShareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    className="absolute right-0 mt-2 w-72 bg-[#1B1222] border-3 border-black shadow-[4px_4px_0px_#000] p-3 z-40"
                  >
                    <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-neutral-800">
                      <PixelCompass size={16} />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Share Arena Details
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={copyAllToClipboard}
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-black/60 hover:bg-black text-white text-xs font-semibold border border-neutral-700 transition-colors cursor-pointer"
                    >
                      <span className="truncate mr-2">
                        {copied && copiedItem === "all"
                          ? "Copied to Clipboard!"
                          : "Copy Event Brief"}
                      </span>
                      {copied && copiedItem === "all" ? (
                        <Check className="w-4 h-4 text-[#55FF55] shrink-0" />
                      ) : (
                        <Copy className="w-4 h-4 text-neutral-400 shrink-0" />
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Hero Overlay: Title, Tagline, Boss Tag */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-7 md:p-10 z-20">
            <div className="space-y-2 sm:space-y-3">
              {/* Boss / Arena Level Tag */}
              <div className="inline-flex items-center gap-2 bg-[#120A17] border-2 border-[#FFAA00] text-[#FFAA00] px-3 py-1 shadow-[2px_2px_0px_#000] text-xs font-bold uppercase tracking-wider">
                <PixelXPOrb size={13} />
                <span>{event.badge || "ROBOSPRANO '26 ARENA"}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-white/80">{event.category}</span>
              </div>

              {/* Title (Preserved fonts) */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-[2px_2px_0px_#000]">
                {event.title}
              </h1>

              {/* Tagline */}
              {event.tagline && (
                <p className="text-neutral-300 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
                  {event.tagline}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MAIN CONTENT GRID: 2 COLUMNS LEFT, 1 COLUMN SIDEBAR RIGHT              */}
        {/* ========================================================================= */}
        {/* Prominent IGIT Sarang Ban Notice */}
        <IgitBanNotice variant="banner" className="mb-6 sm:mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: About, Bot Specs, Rules & Guidelines, Gallery              */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Panel 1: About the Arena */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#160E1C] border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-7 relative"
            >
              {/* Corner Pixel Block */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#FFAA00]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FFAA00]" />

              <div className="flex items-center gap-3 pb-3 mb-4 border-b-2 border-neutral-800">
                <div className="w-8 h-8 bg-black border-2 border-[#FFAA00] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-[#FFAA00]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    About the Event
                  </h2>
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold">
                    Championship Directive &amp; Objective
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                {event.description}
              </p>
            </motion.div>

            {/* Panel 2: Bot Specifications (if present) */}
            {event.botSpecifications && event.botSpecifications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#160E1C] border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-7 relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#55FFFF]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#55FFFF]" />

                <div className="flex items-center gap-3 pb-3 mb-5 border-b-2 border-neutral-800">
                  <div className="w-8 h-8 bg-black border-2 border-[#55FFFF] flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4 text-[#55FFFF]" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Bot Specifications
                    </h2>
                    <span className="text-[10px] text-[#55FFFF] uppercase font-semibold">
                      Engineering, Dimensions &amp; Voltage Limits
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {event.botSpecifications.map((specification, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-black/40 border border-neutral-800 p-3 hover:border-[#55FFFF]/40 transition-colors"
                    >
                      {/* Minecraft Pixel Bullet */}
                      <div className="w-5 h-5 bg-black border border-[#55FFFF] flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000]">
                        <span className="w-1.5 h-1.5 bg-[#55FFFF] rotate-45" />
                      </div>
                      <span className="text-neutral-200 text-xs sm:text-sm leading-relaxed font-medium">
                        {specification}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Panel 3: Rules & Tournament Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-[#160E1C] border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-7 relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF5555]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF5555]" />

                <div className="flex items-center gap-3 pb-3 mb-5 border-b-2 border-neutral-800">
                  <div className="w-8 h-8 bg-black border-2 border-[#FF5555] flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-4 h-4 text-[#FF5555]" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Rules &amp; Guidelines
                    </h2>
                    <span className="text-[10px] text-[#FF5555] uppercase font-semibold">
                      Official Tournament Protocol &amp; Referee Regulations
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-black/40 border border-neutral-800 p-3 hover:border-[#FF5555]/40 transition-colors"
                    >
                      {/* Minecraft Pixel Bullet */}
                      <div className="w-5 h-5 bg-black border border-[#FFAA00] flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000]">
                        <span className="w-1.5 h-1.5 bg-[#FFAA00] rotate-45" />
                      </div>
                      <span className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT SIDEBAR: Loot Chest, Details, Podiums, Contact, Register CTA       */}
          {/* ----------------------------------------------------------------------- */}
          <div className="space-y-6 sm:space-y-8">
            {/* Sidebar Card 1: Event Quest Brief */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-[#160E1C] border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-6 relative"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#FFAA00]" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#FFAA00]" />

              <div className="flex items-center gap-2.5 pb-3 mb-5 border-b-2 border-neutral-800">
                <PixelChest size={22} />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Arena Telemetry &amp; Info
                  </h3>
                  <span className="text-[10px] text-[#FFAA00] uppercase font-semibold">
                    Schedule &amp; Entry Spec
                  </span>
                </div>
              </div>

              {/* Inventory Slots List */}
              <div className="space-y-3.5">
                {/* Date & Time */}
                <div className="flex items-center gap-3 p-2 bg-black/50 border border-neutral-800">
                  <div className="w-10 h-10 bg-black border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black flex items-center justify-center shrink-0 shadow-[inset_1px_1px_2px_#000]">
                    <Calendar className="w-4 h-4 text-[#FFAA00]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                      Date &amp; Schedule
                    </span>
                    <span className="text-xs sm:text-sm text-white font-bold block truncate">
                      {event.date}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-medium block">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* 2-Day Match Progression Box */}
                {event.scheduleDetails && (
                  <div className="p-3 bg-black/70 border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black space-y-2">
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
                      <span className="text-[11px] text-[#FFAA00] uppercase font-bold tracking-wider font-sans flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FFAA00]" />
                        2-DAY MATCH SCHEDULE
                      </span>
                      <span className="font-mono text-[9px] bg-[#FFAA00]/20 text-[#FFAA00] px-1.5 py-0.5 border border-[#FFAA00]/50 font-black">
                        {event.id === "robo-war" ? "DAY 2 ONLY" : "DAY 1 & 2"}
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="flex items-start justify-between gap-2 p-1.5 bg-[#140E1B] border border-white/5">
                        <span className="text-[#FFAA00] font-bold shrink-0">
                          DAY 1 (NOV 05):
                        </span>
                        <span className="text-right text-neutral-200 font-medium">
                          {event.scheduleDetails.day1}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2 p-1.5 bg-[#140E1B] border border-white/5">
                        <span className="text-[#55FF55] font-bold shrink-0">
                          DAY 2 (NOV 06):
                        </span>
                        <span className="text-right text-[#55FF55] font-bold">
                          {event.scheduleDetails.day2}
                        </span>
                      </div>
                    </div>

                    {event.scheduleDetails.stageNote && (
                      <p className="text-[10px] font-mono text-neutral-400 italic pt-0.5">
                        • {event.scheduleDetails.stageNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Venue */}
                <div className="flex items-center gap-3 p-2 bg-black/50 border border-neutral-800">
                  <div className="w-10 h-10 bg-black border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black flex items-center justify-center shrink-0 shadow-[inset_1px_1px_2px_#000]">
                    <MapPin className="w-4 h-4 text-[#FF5555]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                      Battlefield Venue
                    </span>
                    <span className="text-xs sm:text-sm text-white font-bold block truncate">
                      {event.venue || event.location}
                    </span>
                  </div>
                </div>

                {/* Team Size */}
                <div className="flex items-center gap-3 p-2 bg-black/50 border border-neutral-800">
                  <div className="w-10 h-10 bg-black border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black flex items-center justify-center shrink-0 shadow-[inset_1px_1px_2px_#000]">
                    <Users className="w-4 h-4 text-[#55FFFF]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                      Squad Size
                    </span>
                    <span className="text-xs sm:text-sm text-white font-bold block">
                      {event.teamSize}
                    </span>
                  </div>
                </div>

                {/* Registration Fee */}
                {event.fee && (
                  <div className="flex items-center gap-3 p-2 bg-black/50 border border-neutral-800">
                    <div className="w-10 h-10 bg-black border-2 border-t-[#3A2A48] border-l-[#3A2A48] border-r-black border-b-black flex items-center justify-center shrink-0 shadow-[inset_1px_1px_2px_#000]">
                      <IndianRupee className="w-4 h-4 text-[#55FF55]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                        Team Registration Fee
                      </span>
                      <span className="text-xs sm:text-sm text-[#55FF55] font-bold block">
                        {event.fee}
                      </span>
                    </div>
                  </div>
                )}

                {/* Prize Pool */}
                {event.prizePool && (
                  <div className="flex items-center gap-3 p-2 bg-black/70 border-2 border-[#FFAA00]/40 shadow-[0_0_12px_rgba(255,170,0,0.15)]">
                    <div className="w-10 h-10 bg-black border-2 border-[#FFAA00] flex items-center justify-center shrink-0 shadow-[inset_1px_1px_2px_#000]">
                      <Trophy className="w-4 h-4 text-[#FFAA00]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#FFAA00] uppercase font-bold block">
                        Total Arena Cash Pool
                      </span>
                      <span className="text-base sm:text-lg text-white font-black block">
                        {event.prizePool}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bounty Breakdown / Podium Payout Slots (if present) */}
              {event.bountyBreakdown && (
                <div className="mt-5 pt-4 border-t border-neutral-800 space-y-2.5">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block">
                    Podium Loot Breakdown:
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {/* 1st Place */}
                    <div className="bg-black/80 border border-t-[#55FFFF] border-l-[#55FFFF] border-r-[#008888] border-b-[#008888] p-2 shadow-[1px_1px_0px_#000]">
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#55FFFF]">
                        <PixelDiamond size={13} />
                        <span>1ST</span>
                      </div>
                      <span className="text-xs font-black text-[#55FFFF] block mt-1">
                        {event.bountyBreakdown.first}
                      </span>
                    </div>

                    {/* 2nd Place */}
                    <div className="bg-black/80 border border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] p-2 shadow-[1px_1px_0px_#000]">
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#FFAA00]">
                        <PixelGoldIngot size={13} />
                        <span>2ND</span>
                      </div>
                      <span className="text-xs font-black text-[#FFAA00] block mt-1">
                        {event.bountyBreakdown.second}
                      </span>
                    </div>

                    {/* 3rd Place */}
                    <div className="bg-black/80 border border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#666666] border-b-[#666666] p-2 shadow-[1px_1px_0px_#000]">
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#E0E0E0]">
                        <PixelIronIngot size={13} />
                        <span>3RD</span>
                      </div>
                      <span className="text-xs font-black text-[#E0E0E0] block mt-1">
                        {event.bountyBreakdown.third}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons: Rulebook & Register CTAs */}
              <div className="mt-6 space-y-3">
                {rulebookUrl && (
                  <a
                    href={rulebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playButtonClickSound()}
                    className="w-full bg-[#1F1827] hover:bg-[#2C2238] active:bg-[#160F1E] text-white hover:text-[#55FFFF] font-bold uppercase tracking-wider border-3 border-t-[#4E3963] border-l-[#4E3963] border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-[#4E3963] active:border-b-[#4E3963] py-3.5 px-4 shadow-[3px_3px_0px_#000] flex items-center justify-center gap-2 active:translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer group"
                  >
                    <BookOpen className="w-4 h-4 text-[#55FFFF] group-hover:scale-110 transition-transform" />
                    <span>Official Rulebook</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#55FFFF] ml-0.5" />
                  </a>
                )}

                {event.closed ? (
                  <button
                    type="button"
                    disabled
                    className="w-full bg-[#2A2332] text-neutral-500 py-3.5 px-4 border-2 border-neutral-700 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-not-allowed select-none"
                  >
                    Registrations Closed
                  </button>
                ) : (
                  <a
                    href={event.enrollLink || "https://forms.google.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playButtonClickSound()}
                    className="w-full bg-[#FFAA00] hover:bg-[#FFB726] active:bg-[#D98E00] text-black font-black uppercase tracking-wider border-4 border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] active:border-t-[#8F5500] active:border-l-[#8F5500] active:border-r-[#FFE285] active:border-b-[#FFE285] py-3.5 px-4 shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 active:translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Deploy Bot &amp; Register</span>
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  </a>
                )}

                {/* IGIT Sarang Ban Notice for Registration */}
                <IgitBanNotice variant="sidebar" className="mt-4" />
              </div>
            </motion.div>

            {/* Sidebar Card 2: Tournament Pit Coordinators */}
            {event.contact && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#160E1C] border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-6 relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#55FFFF]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#55FFFF]" />

                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b-2 border-neutral-800">
                  <div className="w-7 h-7 bg-black border border-[#55FFFF] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#55FFFF]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Coordinators
                    </h3>
                    <span className="text-[10px] text-[#55FFFF] uppercase font-semibold">
                      Official Tournament Contacts
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {Object.entries(event.contact).map(([name, phone]) => (
                    <div
                      key={name}
                      className="p-2.5 bg-black/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                      <span className="text-xs text-white font-semibold block leading-tight">
                        {name}
                      </span>
                      <a
                        href={`tel:${phone}`}
                        className="text-[11px] text-[#FFAA00] font-bold hover:underline inline-block mt-0.5"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIGHTBOX MODAL FOR GALLERY IMAGES (Minecraft Styled)                      */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full bg-[#18111B] border-4 border-black shadow-[8px_8px_0px_#000] p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    onClick={() => {
                      playButtonClickSound();
                      setSelectedImage(null);
                    }}
                    className="w-8 h-8 bg-black border-2 border-neutral-600 hover:border-white text-white font-bold flex items-center justify-center cursor-pointer text-xs"
                  >
                    ✕
                  </button>
                </div>

                <div className="aspect-video relative overflow-hidden border-2 border-black bg-black">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-white font-bold text-sm">
                    {selectedImage.caption}
                  </p>
                  <span className="text-xs text-[#FFAA00] uppercase font-semibold">
                    Robosprano &apos;26 Recon
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
