"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [hideOnMobile, setHideOnMobile] = useState(false);

  // Navigation links exactly matching the reference image
  const navLinks = [
    { label: "EVENTS", href: "/events" },
    { label: "ABOUT", href: "/about" },
    { label: "TEAM", href: "/team" },
    { label: "CONTACT", href: "/contact" },
  ];

  // Helper to test if link is currently active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

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
      window.removeEventListener("keydown", handleKeyDown);
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

  // Detect when footer reaches navbar position on mobile to hide smoothly
  useEffect(() => {
    const handleFooterIntersection = () => {
      if (typeof window === "undefined" || window.innerWidth >= 1024) {
        setHideOnMobile(false);
        return;
      }

      const footer =
        document.getElementById("main-footer") ||
        document.querySelector("footer");
      if (!footer || !headerRef.current) return;

      const footerRect = footer.getBoundingClientRect();
      const headerHeight = headerRef.current.offsetHeight || 64;

      if (footerRect.top <= headerHeight + 5) {
        setHideOnMobile(true);
      } else {
        setHideOnMobile(false);
      }
    };

    window.addEventListener("scroll", handleFooterIntersection, {
      passive: true,
    });
    window.addEventListener("resize", handleFooterIntersection, {
      passive: true,
    });

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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
          "bg-white/95 backdrop-blur-md border-b-2 border-black shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
          hideOnMobile &&
          !mobileMenuOpen &&
          "-translate-y-full lg:translate-y-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
        )}
      >
        {/* Main Navbar Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between gap-4">
          {/* Brand / Logo - Pinned Left */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              onClick={() => playButtonClickSound(0.25)}
              className="flex justify-center items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] shrink-0"
              aria-label="Kilobots Robosprano Home"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black rounded-xl shadow-[2px_2px_0px_#000] bg-[#0084FF] shrink-0">
                <Image
                  src="/robosprano-1.webp"
                  alt="Kilobots Robotics"
                  width={36}
                  height={36}
                  priority
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-minecraftt text-lg sm:text-4xl tracking-wider text-black leading-none transition-colors group-hover:text-[#0084FF]">
                  ROBOSPRANO
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Primary Navigation - Center */}
          <nav
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 flex-1 h-full relative"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => playButtonClickSound(0.25)}
                  className={clsx(
                    "relative h-full flex items-center px-2 py-1 font-sans font-black text-xs sm:text-[13px] tracking-[0.16em] uppercase transition-colors duration-200 select-none",
                    active ? "text-[#0084FF]" : "text-zinc-700 hover:text-black"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{link.label}</span>

                  {/* Active Blue Glowing Tab at the bottom edge */}
                  {active && (
                    <motion.div
                      layoutId="activeNavTab"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center z-10"
                    >
                      {/* Ambient Blue Underglow */}
                      <div className="absolute -bottom-1 w-20 sm:w-24 h-4 bg-[#0084FF]/40 blur-md rounded-full pointer-events-none" />

                      {/* Trapezoid Tab matching Minecraft light theme */}
                      <div
                        className="w-16 sm:w-20 h-2 bg-gradient-to-r from-[#0084FF] via-[#3898EC] to-[#0084FF] shadow-[0_2px_8px_#0084FF]"
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, calc(100% - 6px) 100%, 6px 100%)",
                        }}
                      />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions: Register Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Register CTA Button */}
            <Link
              href="/register"
              onClick={() => playButtonClickSound(0.4)}
              className="h-10 px-5 rounded-md sm:rounded-lg inline-flex items-center gap-2 bg-[#5DB329] hover:bg-[#6CBF35] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[2px_2px_0px_#000] border-2 border-t-[#8CE249] border-l-[#8CE249] border-r-[#337A17] border-b-[#337A17] active:scale-[0.98] transition-all cursor-pointer [text-shadow:_1px_1px_0_#275A0E]"
            >
              <span className="tracking-[0.2em]">REGISTER</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </Link>
          </div>

          {/* Mobile Right Controls: Register + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/register"
              onClick={() => playButtonClickSound(0.4)}
              className="h-9 px-3 rounded-md inline-flex items-center gap-1.5 bg-[#5DB329] text-white font-sans font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#000] border border-t-[#8CE249] border-l-[#8CE249] border-r-[#337A17] border-b-[#337A17]"
            >
              <span>REGISTER</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                playButtonClickSound(0.25);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={
                mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="w-9 h-9 rounded-md bg-white hover:bg-slate-100 border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000] transition-all cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
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
              className="lg:hidden border-t-2 border-black bg-white/98 backdrop-blur-xl px-4 sm:px-6 pt-4 pb-8 flex flex-col gap-2 shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain text-black"
            >
              {navLinks.map((link, idx) => {
                const active = isLinkActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      playButtonClickSound(0.25);
                      setMobileMenuOpen(false);
                    }}
                    className={clsx(
                      "px-4 py-3 rounded-md font-sans font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between transition-all",
                      active
                        ? "bg-[#E0F2FE] text-[#0284C7] border-l-4 border-[#0284C7] shadow-[inset_0_0_12px_rgba(2,132,199,0.1)]"
                        : "bg-slate-50 hover:bg-slate-100 text-zinc-800 border border-slate-200"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span className={active ? "text-[#0284C7]" : ""}>
                        {link.label}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-500 font-bold">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-slate-200 mt-1">
                <Link
                  href="/register"
                  onClick={() => {
                    playButtonClickSound(0.4);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-11 rounded-md bg-[#5DB329] hover:bg-[#6CBF35] text-white font-sans font-black text-xs sm:text-sm uppercase tracking-wider shadow-[2px_2px_0px_#000] flex items-center justify-center gap-2 active:scale-[0.98] transition-all border-2 border-t-[#8CE249] border-l-[#8CE249] border-r-[#337A17] border-b-[#337A17]"
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
      <div className="h-16 sm:h-[68px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
