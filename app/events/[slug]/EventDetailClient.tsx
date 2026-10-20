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
      const shareText = `${event.title} | ROBOSPRANO 2K26
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
            title: `${event.title} | ROBOSPRANO 2K26`,
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
    <div className="min-h-screen bg-[#F0F8FF] text-black pt-20 sm:pt-24 pb-16 relative overflow-hidden">
      {/* Full-Height Atmospheric Minecraft Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-25">
        <Image
          src="/minecraft/1.webp"
          alt="Robosprano Arena World Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Daylight Sky Tint Overlay */}
        <div className="absolute inset-0 bg-[#F0F8FF]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 space-y-4 sm:space-y-8">
        {/* ========================================================================= */}
        {/* DESKTOP NAVIGATION CONTROLS: MOVED OUTSIDE AND ABOVE THE IMAGE           */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center justify-between mb-4">
          <Link
            href="/events"
            onClick={() => playButtonClickSound()}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] active:translate-y-0.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Arenas</span>
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] active:translate-y-0.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer"
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
                  className="absolute right-0 mt-2 w-72 bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-3 z-50 text-black"
                >
                  <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b-2 border-black/20">
                    <PixelCompass size={16} />
                    <span className="text-xs font-black text-black uppercase tracking-wider">
                      Share Arena Details
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyAllToClipboard}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-black text-xs font-bold border border-black transition-colors cursor-pointer"
                  >
                    <span className="truncate mr-2">
                      {copied && copiedItem === "all"
                        ? "Copied to Clipboard!"
                        : "Copy Event Brief"}
                    </span>
                    {copied && copiedItem === "all" ? (
                      <Check className="w-4 h-4 text-[#15803D] shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. HERO BANNER: MINECRAFT PICTURE FRAME VIEWPORT                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative border-4 border-black shadow-[6px_6px_0px_#000] bg-white overflow-hidden"
        >
          {/* Decorative Corner Pixel Blocks */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-[#FFAA00] border border-black z-20" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#FFAA00] border border-black z-20" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-[#FFAA00] border border-black z-20" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#FFAA00] border border-black z-20" />

          {/* Banner Image Container: On mobile kept untouched, on desktop exact 16:9 full fit */}
          <div className="relative h-[48vh] sm:h-[55vh] md:h-auto md:aspect-[16/9] w-full bg-slate-100 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover md:aspect-[16/9]"
            />
            {/* Soft dark gradient at bottom only to make title text pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent md:from-black/60 md:via-transparent" />
          </div>

          {/* Mobile Only Navigation Controls (Inside Image - untouched for mobile) */}
          <div className="md:hidden absolute top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 flex items-center justify-between z-30">
            <Link
              href="/events"
              onClick={() => playButtonClickSound()}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-black px-3 sm:px-4 py-2 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Back to Arenas</span>
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-black px-3 sm:px-4 py-2 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer"
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
                    className="absolute right-0 mt-2 w-72 bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-3 z-40 text-black"
                  >
                    <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b-2 border-black/20">
                      <PixelCompass size={16} />
                      <span className="text-xs font-black text-black uppercase tracking-wider">
                        Share Arena Details
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={copyAllToClipboard}
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-black text-xs font-bold border border-black transition-colors cursor-pointer"
                    >
                      <span className="truncate mr-2">
                        {copied && copiedItem === "all"
                          ? "Copied to Clipboard!"
                          : "Copy Event Brief"}
                      </span>
                      {copied && copiedItem === "all" ? (
                        <Check className="w-4 h-4 text-[#15803D] shrink-0" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-500 shrink-0" />
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
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black text-[#B45309] px-3 py-1 shadow-[2px_2px_0px_#000] text-xs font-black uppercase tracking-wider">
                <PixelXPOrb size={13} />
                <span>{event.badge || "ROBOSPRANO '26 ARENA"}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-800">{event.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-[2px_2px_0px_#000]">
                {event.title}
              </h1>

              {/* Tagline */}
              {event.tagline && (
                <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed font-semibold drop-shadow-[1px_1px_0px_#000]">
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
              className="bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-7 relative text-black"
            >
              {/* Corner Pixel Block */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#FFAA00] border border-black" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#FFAA00] border border-black" />

              <div className="flex items-center gap-3 pb-3 mb-4 border-b-2 border-black/20">
                <div className="w-8 h-8 bg-[#FEF3C7] border-2 border-black flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-[#B45309]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                    About the Event
                  </h2>
                  <span className="text-[10px] text-slate-600 uppercase font-bold">
                    Championship Directive &amp; Objective
                  </span>
                </div>
              </div>

              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold">
                {event.description}
              </p>
            </motion.div>

            {/* Panel 2: Bot Specifications (if present) */}
            {event.botSpecifications && event.botSpecifications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-7 relative text-black"
              >
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#3898EC] border border-black" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#3898EC] border border-black" />

                <div className="flex items-center gap-3 pb-3 mb-5 border-b-2 border-black/20">
                  <div className="w-8 h-8 bg-[#E0F2FE] border-2 border-black flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                      Bot Specifications
                    </h2>
                    <span className="text-[10px] text-[#0284C7] uppercase font-bold">
                      Engineering, Dimensions &amp; Voltage Limits
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {event.botSpecifications.map((specification, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-[#F8FAFC] border border-black p-3 hover:bg-[#EBF5FF] transition-colors"
                    >
                      {/* Minecraft Pixel Bullet */}
                      <div className="w-5 h-5 bg-[#E0F2FE] border border-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000]">
                        <span className="w-1.5 h-1.5 bg-[#0284C7] rotate-45" />
                      </div>
                      <span className="text-slate-800 text-xs sm:text-sm leading-relaxed font-bold">
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
                className="bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-7 relative text-black"
              >
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#DC2626] border border-black" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#DC2626] border border-black" />

                <div className="flex items-center gap-3 pb-3 mb-5 border-b-2 border-black/20">
                  <div className="w-8 h-8 bg-[#FEE2E2] border-2 border-black flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                      Rules &amp; Guidelines
                    </h2>
                    <span className="text-[10px] text-[#DC2626] uppercase font-bold">
                      Official Tournament Protocol &amp; Referee Regulations
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-[#F8FAFC] border border-black p-3 hover:bg-[#FEFCE8] transition-colors"
                    >
                      {/* Minecraft Pixel Bullet */}
                      <div className="w-5 h-5 bg-[#FEF3C7] border border-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000]">
                        <span className="w-1.5 h-1.5 bg-[#B45309] rotate-45" />
                      </div>
                      <span className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
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
              className="bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-6 relative text-black"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#FFAA00] border border-black" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#FFAA00] border border-black" />

              <div className="flex items-center gap-2.5 pb-3 mb-5 border-b-2 border-black/20">
                <PixelChest size={22} />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                    Arena Telemetry &amp; Info
                  </h3>
                  <span className="text-[10px] text-[#B45309] uppercase font-bold">
                    Schedule &amp; Entry Spec
                  </span>
                </div>
              </div>

              {/* Inventory Slots List */}
              <div className="space-y-3.5">
                {/* Date & Time */}
                <div className="flex items-center gap-3 p-2 bg-[#F8FAFC] border border-black">
                  <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                    <Calendar className="w-4 h-4 text-[#B45309]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">
                      Date &amp; Schedule
                    </span>
                    <span className="text-xs sm:text-sm text-black font-black block truncate">
                      {event.date}
                    </span>
                    <span className="text-[11px] text-slate-600 font-bold block">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* 2-Day Match Progression Box */}
                {event.scheduleDetails && (
                  <div className="p-3 bg-[#FEFCE8] border-2 border-black space-y-2 shadow-[2px_2px_0px_#000]">
                    <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-1.5">
                      <span className="text-[11px] text-[#B45309] uppercase font-bold tracking-wider font-sans flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B45309]" />
                        2-DAY MATCH SCHEDULE
                      </span>
                      <span className="font-mono text-[9px] bg-white text-[#B45309] px-1.5 py-0.5 border border-black font-black">
                        {event.id === "robo-war" ? "DAY 2 ONLY" : "DAY 1 & 2"}
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="flex items-start justify-between gap-2 p-1.5 bg-white border border-black/20">
                        <span className="text-[#B45309] font-bold shrink-0">
                          DAY 1 (NOV 05):
                        </span>
                        <span className="text-right text-slate-700 font-semibold">
                          {event.scheduleDetails.day1}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2 p-1.5 bg-white border border-black/20">
                        <span className="text-[#15803D] font-bold shrink-0">
                          DAY 2 (NOV 06):
                        </span>
                        <span className="text-right text-[#15803D] font-black">
                          {event.scheduleDetails.day2}
                        </span>
                      </div>
                    </div>

                    {event.scheduleDetails.stageNote && (
                      <p className="text-[10px] font-mono text-slate-600 italic pt-0.5 font-medium">
                        • {event.scheduleDetails.stageNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Venue */}
                <div className="flex items-center gap-3 p-2 bg-[#F8FAFC] border border-black">
                  <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                    <MapPin className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">
                      Battlefield Venue
                    </span>
                    <span className="text-xs sm:text-sm text-black font-black block truncate">
                      {event.venue || event.location}
                    </span>
                  </div>
                </div>

                {/* Team Size */}
                <div className="flex items-center gap-3 p-2 bg-[#F8FAFC] border border-black">
                  <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                    <Users className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">
                      Squad Size
                    </span>
                    <span className="text-xs sm:text-sm text-black font-black block">
                      {event.teamSize}
                    </span>
                  </div>
                </div>

                {/* Registration Fee */}
                {event.fee && (
                  <div className="flex items-center gap-3 p-2 bg-[#F8FAFC] border border-black">
                    <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                      <IndianRupee className="w-4 h-4 text-[#15803D]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">
                        Team Registration Fee
                      </span>
                      <span className="text-xs sm:text-sm text-[#15803D] font-black block">
                        {event.fee}
                      </span>
                    </div>
                  </div>
                )}

                {/* Prize Pool */}
                {event.prizePool && (
                  <div className="flex items-center gap-3 p-2 bg-[#DCFCE7] border-2 border-black shadow-[2px_2px_0px_#000]">
                    <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                      <Trophy className="w-4 h-4 text-[#15803D]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#15803D] uppercase font-black block">
                        Total Arena Cash Pool
                      </span>
                      <span className="text-base sm:text-lg text-black font-black block">
                        {event.prizePool}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bounty Breakdown / Podium Payout Slots (if present) */}
              {event.bountyBreakdown && (
                <div className="mt-5 pt-4 border-t border-black/20 space-y-2.5">
                  <span className="text-[10px] text-slate-600 uppercase font-bold tracking-wider block">
                    Podium Loot Breakdown:
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {/* 1st Place */}
                    <div className="bg-[#E0F2FE] border-2 border-black p-2 shadow-[1px_1px_0px_#000]">
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#0284C7]">
                        <PixelDiamond size={13} />
                        <span>1ST</span>
                      </div>
                      <span className="text-xs font-black text-[#0284C7] block mt-1">
                        {event.bountyBreakdown.first}
                      </span>
                    </div>

                    {/* 2nd Place */}
                    <div className="bg-[#FEF3C7] border-2 border-black p-2 shadow-[1px_1px_0px_#000]">
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#B45309]">
                        <PixelGoldIngot size={13} />
                        <span>2ND</span>
                      </div>
                      <span className="text-xs font-black text-[#B45309] block mt-1">
                        {event.bountyBreakdown.second}
                      </span>
                    </div>

                    {/* 3rd Place */}
                    <div className="bg-[#F1F5F9] border-2 border-black p-2 shadow-[1px_1px_0px_#000]">
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#334155]">
                        <PixelIronIngot size={13} />
                        <span>3RD</span>
                      </div>
                      <span className="text-xs font-black text-[#334155] block mt-1">
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
                    className="w-full bg-white hover:bg-slate-100 text-black font-bold uppercase tracking-wider border-3 border-black py-3.5 px-4 shadow-[3px_3px_0px_#000] flex items-center justify-center gap-2 active:translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer group"
                  >
                    <BookOpen className="w-4 h-4 text-[#0284C7] group-hover:scale-110 transition-transform" />
                    <span>Official Rulebook</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-black ml-0.5" />
                  </a>
                )}

                {event.closed ? (
                  <button
                    type="button"
                    disabled
                    className="w-full bg-slate-200 text-slate-500 py-3.5 px-4 border-2 border-slate-400 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-not-allowed select-none"
                  >
                    Registrations Closed
                  </button>
                ) : (
                  <a
                    href={event.enrollLink || "https://forms.google.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playButtonClickSound()}
                    className="w-full bg-[#5DB329] hover:bg-[#4EA022] text-white font-black uppercase tracking-wider border-4 border-black py-3.5 px-4 shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 active:translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer"
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
                className="bg-white border-3 border-black shadow-[4px_4px_0px_#000] p-5 sm:p-6 relative text-black"
              >
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#0284C7] border border-black" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#0284C7] border border-black" />

                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b-2 border-black/20">
                  <div className="w-7 h-7 bg-[#E0F2FE] border border-black flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black tracking-tight">
                      Coordinators
                    </h3>
                    <span className="text-[10px] text-[#0284C7] uppercase font-bold">
                      Official Tournament Contacts
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {Object.entries(event.contact).map(([name, phone]) => (
                    <div
                      key={name}
                      className="p-2.5 bg-[#F8FAFC] border border-black hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-xs text-black font-bold block leading-tight">
                        {name}
                      </span>
                      <a
                        href={`tel:${phone}`}
                        className="text-[11px] text-[#B45309] font-black hover:underline inline-block mt-0.5"
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
