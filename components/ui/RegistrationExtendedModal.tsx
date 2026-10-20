"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  CheckCircle2,
  Rocket,
  Sparkles,
  Clock,
} from "lucide-react";
import { EVENT_DATA } from "@/data/event";
import { playButtonClickSound } from "./MinecraftSoundEffects";

interface RegistrationExtendedModalProps {
  /** Override previous deadline display (optional) */
  previousDeadline?: string;
  /** Override new deadline display */
  newDeadline?: string;
  /** Target ISO date for countdown calculation */
  deadlineISO?: string;
  /** Custom heading */
  heading?: string;
  /** Custom subheading */
  subheading?: string;
  /** Force open state (controlled mode) */
  isOpen?: boolean;
  /** Callback on close */
  onClose?: () => void;
  /** Disable automatic pop-up */
  disableAutoOpen?: boolean;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function RegistrationExtendedModal({
  previousDeadline = EVENT_DATA.registrationExtended?.previousDeadline || "26th Sept, 2026",
  newDeadline = EVENT_DATA.registrationExtended?.newDeadline || "28th Sept, 2026",
  deadlineISO = EVENT_DATA.registrationExtended?.deadlineISO || "2026-09-28T14:00:00+05:30",
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  disableAutoOpen = false,
}: RegistrationExtendedModalProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const [isOpenState, setIsOpenState] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : isOpenState;

  // Real-time Countdown Calculator
  useEffect(() => {
    setMounted(true);
    const targetTime = new Date(deadlineISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isExpired: false,
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [deadlineISO]);

  // Initial Auto-Open on Page Load (with session storage memory)
  useEffect(() => {
    if (disableAutoOpen || isControlled) return;

    try {
      const dismissed = sessionStorage.getItem("robosprano_reg_extended_modal_seen");
      if (dismissed === "true") {
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    const timer = setTimeout(() => {
      setIsOpenState(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [disableAutoOpen, isControlled]);

  const handleClose = useCallback(() => {
    playButtonClickSound(0.4);
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setIsOpenState(false);
      try {
        sessionStorage.setItem("robosprano_reg_extended_modal_seen", "true");
      } catch {
        // ignore
      }
    }
  }, [isControlled, controlledOnClose]);

  const handleOpen = useCallback(() => {
    playButtonClickSound(0.4);
    setIsOpenState(true);
  }, []);

  const handleRegisterClick = useCallback(() => {
    playButtonClickSound(0.5);
    handleClose();
    router.push("/events");
  }, [handleClose, router]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock background body scroll and pause Lenis when modal is open
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.stop();
    }

    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const activeLenis = (window as any).__lenis;
      if (activeLenis) {
        activeLenis.start();
      }
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [isOpen]);

  // Detect footer intersection to hide the floating badge smoothly when reaching the footer
  const [hideNearFooter, setHideNearFooter] = useState(false);

  useEffect(() => {
    const handleFooterScroll = () => {
      const footer = document.getElementById("main-footer") || document.querySelector("footer");
      if (!footer) {
        setHideNearFooter(false);
        return;
      }
      const footerRect = footer.getBoundingClientRect();
      // Hide when footer top approaches the bottom viewport area
      if (footerRect.top <= window.innerHeight - 30) {
        setHideNearFooter(true);
      } else {
        setHideNearFooter(false);
      }
    };

    window.addEventListener("scroll", handleFooterScroll, { passive: true });
    window.addEventListener("resize", handleFooterScroll, { passive: true });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).__lenis) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__lenis.on("scroll", handleFooterScroll);
    }

    handleFooterScroll();

    return () => {
      window.removeEventListener("scroll", handleFooterScroll);
      window.removeEventListener("resize", handleFooterScroll);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== "undefined" && (window as any).__lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__lenis.off("scroll", handleFooterScroll);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* ── Persistent Floating Minecraft Hotbar / Trigger Pill ── */}
      <AnimatePresence>
        {!isOpen && !hideNearFooter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 select-none font-mono"
          >
            <button
              onClick={handleOpen}
              className="group relative flex items-center gap-2.5 px-3 py-2 bg-white hover:bg-slate-100 text-black border-3 border-black shadow-[4px_4px_0px_#000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer"
              title="Open Extended Registration Notice"
            >
              <div className="flex flex-col text-left">
                <span className="text-[11px] sm:text-xs font-black uppercase text-[#B45309] tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFAA00]" />
                  REGISTRATION EXTENDED!
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight flex items-center gap-1 flex-wrap">
                  <span className="line-through text-[#DC2626] decoration-[#DC2626]">{previousDeadline.toUpperCase()}</span>
                  <span className="text-black font-black">➔</span>
                  <span className="text-[#16A34A] font-black">{newDeadline.toUpperCase()}</span>
                  <span>•</span>
                  <span className="text-slate-600">
                    {timeRemaining.isExpired
                      ? "CLOSED"
                      : `${timeRemaining.days}D ${timeRemaining.hours}H ${timeRemaining.minutes}M LEFT`}
                  </span>
                </span>
              </div>

              <div className="ml-1 bg-[#5DB329] hover:bg-[#689B37] text-white font-black text-[10px] px-2.5 py-1 border-2 border-black shadow-[1px_1px_0px_#000] uppercase hidden xs:inline-block">
                OPEN
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Minecraft GUI Inventory Dialog Screen ── */}
      <AnimatePresence>
        {isOpen && (
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto overflow-x-hidden font-sans overscroll-contain"
          >
            {/* Soft Atmospheric Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              aria-hidden="true"
            />

            {/* Authentic Daylight Minecraft GUI Window */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="minecraft-reg-dialog-title"
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.94, y: 15 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.94, y: 15 }
              }
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 350,
              }}
              className="relative w-full max-w-lg bg-white border-4 border-black shadow-[8px_8px_0px_#000000] z-50 my-auto overflow-hidden select-none"
            >
              {/* ── 1. Minecraft GUI Window Header ── */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F8FAFC] border-b-3 border-black font-mono">
                {/* Left Title with Gold Star */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#FFAA00] border border-black flex items-center justify-center text-black font-black text-xs shadow-[1px_1px_0px_#000]">
                    ★
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase text-black tracking-wider">
                    NOTICE // REGISTRATION DEADLINE
                  </span>
                </div>

                {/* Minecraft [ ✕ ] Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close dialog"
                  className="w-7 h-7 bg-white hover:bg-[#DC2626] hover:text-white text-black border-2 border-black active:bg-slate-200 shadow-[1px_1px_0px_#000] flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4 stroke-[3px]" />
                </button>
              </div>

              {/* ── 2. GUI Inner Body (Recessed Light GUI Canvas) ── */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Main Headline & Description */}
                <div className="text-center space-y-2 py-0.5">
                  <h2
                    id="minecraft-reg-dialog-title"
                    className="font-black text-xl sm:text-2xl text-black tracking-tight uppercase leading-snug"
                  >
                    REGISTRATION DEADLINE EXTENDED!
                  </h2>

                  <div className="text-sm text-slate-800 font-bold leading-relaxed max-w-md mx-auto space-y-1.5">
                    <p>
                      Missed the deadline?{" "}
                      <span className="inline-block px-2 py-0.5 bg-[#5DB329] text-white font-black border-2 border-black shadow-[1px_1px_0px_#000] uppercase text-xs sm:text-sm">
                        WE’VE GOT YOU COVERED!
                      </span>
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
                      <span>Due to overwhelming demand, registration is open until</span>
                      <div className="inline-flex items-center gap-1.5">
                        <span className="inline-block px-1.5 py-0.5 bg-[#FEE2E2] text-[#DC2626] line-through decoration-[#DC2626] decoration-2 font-mono font-bold text-xs sm:text-sm border border-black shadow-[1px_1px_0px_#000]">
                          {previousDeadline}
                        </span>
                        <span className="font-black text-black text-sm">➔</span>
                        <span className="inline-block px-2 py-0.5 bg-[#DCFCE7] text-[#16A34A] font-black border border-black shadow-[1px_1px_0px_#000] uppercase text-xs sm:text-sm">
                          {newDeadline} (2:00 PM)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 3. Official Deadline Item Tooltip Card ── */}
                <div className="p-3 sm:p-4 bg-[#FEF3C7] border-3 border-black shadow-[3px_3px_0px_#000] flex flex-col items-center justify-center gap-1.5 text-center">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-black uppercase text-[#16A34A] tracking-wider mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] stroke-[2.5px]" />
                    <span>OFFICIAL REGISTRATION DEADLINE (EXTENDED)</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono">
                    <span className="text-base sm:text-xl font-bold text-[#DC2626] line-through decoration-[#DC2626] decoration-2">
                      {previousDeadline}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#B45309] tracking-tight">
                      {newDeadline}
                    </span>
                  </div>
                </div>

                {/* ── 4. Minecraft Inventory Recessed Item Slots (Countdown) ── */}
                <div className="p-3 bg-[#F1F5F9] border-3 border-black shadow-[inset_1px_1px_3px_rgba(0,0,0,0.06)] space-y-2 font-mono">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-black uppercase tracking-wider">
                    <span className="text-[#0284C7] flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#0284C7] border border-black inline-block animate-pulse" />
                      TIME REMAINING:
                    </span>
                    <span className="text-[#B45309]">
                      {timeRemaining.isExpired ? "CLOSED" : "LIVE TICKER"}
                    </span>
                  </div>

                  {/* 4 Inset Item Slots */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {/* DAYS Slot */}
                    <div className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="text-2xl sm:text-3xl font-black text-[#B45309] leading-none">
                        {String(timeRemaining.days).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 uppercase mt-1">
                        DAYS
                      </div>
                    </div>

                    {/* HOURS Slot */}
                    <div className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="text-2xl sm:text-3xl font-black text-[#0284C7] leading-none">
                        {String(timeRemaining.hours).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 uppercase mt-1">
                        HOURS
                      </div>
                    </div>

                    {/* MINS Slot */}
                    <div className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="text-2xl sm:text-3xl font-black text-[#16A34A] leading-none">
                        {String(timeRemaining.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 uppercase mt-1">
                        MINS
                      </div>
                    </div>

                    {/* SECS Slot */}
                    <div className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                      <div className="text-2xl sm:text-3xl font-black text-[#DC2626] leading-none">
                        {String(timeRemaining.seconds).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 uppercase mt-1">
                        SECS
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 5. Action Buttons ── */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1 font-mono">
                  {/* Primary CTA */}
                  <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="flex-1 h-12 px-5 bg-[#5DB329] hover:bg-[#689B37] text-white font-black text-sm sm:text-base uppercase tracking-wider border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Rocket className="w-5 h-5 stroke-[2.5px] text-white" />
                    <span>REGISTER YOUR TEAM NOW</span>
                    <span className="text-base">→</span>
                  </button>

                  {/* Secondary Dismiss Button */}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="sm:w-28 h-12 px-4 bg-white hover:bg-slate-100 text-black font-black text-sm uppercase tracking-wider border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center cursor-pointer transition-colors"
                  >
                    GOT IT
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
