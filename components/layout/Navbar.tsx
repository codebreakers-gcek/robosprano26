"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { HEADER_UPDATES } from "@/data/updates";
import { MinecraftNavbarMusicPlayer } from "@/components/ui/MinecraftNavbarMusicPlayer";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [hideOnMobile, setHideOnMobile] = useState(false);

  // Primary navigation links
  const navLinks: Array<{ label: string; href: string; badge?: string }> = [
    { label: "ABOUT", href: "/about" },
    { label: "EVENTS", href: "/events" },
    { label: "TEAM", href: "/team" },
    { label: "CONTACT", href: "/contact" },
  ];

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to close menus and lock body/Lenis scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.start();
      }
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Detect when footer reaches navbar position on mobile to hide the navbar smoothly
  useEffect(() => {
    const handleFooterIntersection = () => {
      if (typeof window === "undefined" || window.innerWidth >= 1024) {
        setHideOnMobile(false);
        return;
      }

      const footer = document.getElementById("main-footer") || document.querySelector("footer");
      if (!footer || !headerRef.current) return;

      const footerRect = footer.getBoundingClientRect();
      const headerHeight = headerRef.current.offsetHeight || 92;

      if (footerRect.top <= headerHeight + 5) {
        setHideOnMobile(true);
      } else {
        setHideOnMobile(false);
      }
    };

    window.addEventListener("scroll", handleFooterIntersection, { passive: true });
    window.addEventListener("resize", handleFooterIntersection, { passive: true });

    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.on("scroll", handleFooterIntersection);
    }

    handleFooterIntersection();

    return () => {
      window.removeEventListener("scroll", handleFooterIntersection);
      window.removeEventListener("resize", handleFooterIntersection);
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.off("scroll", handleFooterIntersection);
      }
    };
  }, [pathname]);

  return (
    <>
      {/* Outside Content Blur Overlay when Mobile Menu is Open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 w-full max-w-full border-b-4 border-b-[#555555] border-t-2 border-t-[#FFFFFF] shadow-[0_4px_0_#000] transition-all duration-300 ease-in-out bg-[#C6C6C6]",
          hideOnMobile && !mobileMenuOpen && "-translate-y-full lg:translate-y-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
        )}
      >
        {/* Top Header Marquee: Live Updates */}
        <div
          className={clsx(
            "w-full max-w-full border-b-2 border-[#555555] flex items-center text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase overflow-hidden h-8 select-none transition-colors duration-300 bg-[#2A2A2A] text-white"
          )}
        >
          <div className="shrink-0 bg-[#FFAA00] text-black px-2.5 sm:px-3 h-full flex items-center gap-1.5 font-black z-10 border-r-2 border-r-[#555555] border-b-2 border-b-[#8F5500] border-t-2 border-t-[#FFE285] shadow-[1px_1px_0px_#000] text-[10px] sm:text-xs">
            <span className="w-2 h-2 rounded-none bg-red-600 inline-block shadow-[1px_1px_0px_#000]" />
            <span>LIVE UPDATES</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex-1 min-w-0 flex items-center">
            <div className="animate-marquee-header flex items-center gap-8">
              {[...HEADER_UPDATES, ...HEADER_UPDATES].map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-6">
                  <span>{item}</span>
                  <Sparkles className="w-3 h-3 text-[#55FF55] shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 h-14 sm:h-16 flex items-center justify-between gap-3 lg:gap-4 xl:gap-8">
          {/* Brand / Logo - Pinned Left */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black shrink-0"
              aria-label="Kilobots Robosprano Home"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 rounded-xl shadow-neo-sm bg-white">
                <Image
                  src="/cbrobo.webp"
                  alt="Kilobots Robotics"
                  width={36}
                  height={36}
                  priority
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-minecraftt text-lg sm:text-4xl tracking-wider text-black leading-none">
                  ROBOSPRANO
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Primary Navigation */}
          <nav
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 mx-2 lg:mx-3 xl:mx-8 shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-2 xl:px-2.5 py-1.5 font-black text-[11px] xl:text-xs uppercase tracking-wider transition-colors duration-100 border-2 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0",
                    isActive
                      ? "bg-neo-secondary border-black text-black shadow-neo-sm"
                      : "border-transparent text-black hover:border-black hover:bg-white hover:shadow-neo-sm"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 bg-amber-400 text-black border border-black font-mono text-[9px] font-black shadow-neo-xs animate-pulse whitespace-nowrap">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side CTA & Music Player */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Minecraft Navbar Music Player */}
            <MinecraftNavbarMusicPlayer />

            <Link
              href="/register"
              className="h-10 sm:h-11 px-4 sm:px-6 inline-flex items-center gap-2 bg-[#5B8731] hover:bg-[#689B37] text-white font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[3px_3px_0px_#000] active:translate-y-1 transition-all cursor-pointer [text-shadow:_1px_1px_0_#000]"
            >
              <span>REGISTER</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </Link>
          </div>

          {/* Mobile Right Controls: Music Player + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <MinecraftNavbarMusicPlayer />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              className="w-10 h-10 bg-[#DBDBDB] hover:bg-[#EAEAEA] border-3 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] shadow-[3px_3px_0px_#000] flex items-center justify-center text-black active:translate-y-0.5 transition-all cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[3px]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[3px]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="lg:hidden border-t-4 border-t-[#555555] bg-[#C6C6C6] px-4 sm:px-6 pt-5 pb-10 flex flex-col gap-2.5 shadow-[8px_8px_0px_#000] max-h-[calc(100dvh-105px)] overflow-y-auto overscroll-contain touch-pan-y text-black"
            >
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "px-3.5 py-2.5 border-3 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between transition-all",
                      isActive
                        ? "bg-[#5B8731] text-white border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000]"
                        : "bg-[#DBDBDB] hover:bg-[#EAEAEA] text-black border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#555555] border-b-[#555555] shadow-[2px_2px_0px_#000]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="px-1.5 py-0.2 bg-[#FFAA00] text-black border border-t-[#FFE285] border-l-[#FFE285] border-r-[#8F5500] border-b-[#8F5500] font-mono text-[9px] font-black shadow-[1px_1px_0px_#000]">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs font-black text-black/50">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}

              <div className="pt-2 border-t-2 border-[#555555]/30 mt-1">
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-12 bg-[#5B8731] hover:bg-[#689B37] text-white font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-t-[#85B745] border-l-[#85B745] border-r-[#2C4813] border-b-[#2C4813] shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 active:translate-y-1 transition-all [text-shadow:_1px_1px_0_#000]"
                >
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so page content below fixed navbar starts at the exact correct vertical offset */}
      <div className="h-[92px] sm:h-[100px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
