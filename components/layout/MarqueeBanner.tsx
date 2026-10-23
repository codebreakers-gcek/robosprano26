import React from "react";
import clsx from "clsx";
import { Star } from "lucide-react";

export interface MarqueeBannerProps {
  items?: string[];
  bg?: "orange" | "secondary" | "accent" | "muted" | "black" | "white";
  glass?: boolean;
  speed?: "normal" | "fast";
  direction?: "left" | "right";
  bended?: boolean;
  angle?: string;
  className?: string;
}

export function MarqueeBanner({
  items = [
    "ROBOSPRANO '26",
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
    "KILOBOTS GCEK",
    "ROBOTICS CHAMPIONSHIP",
  ],
  bg = "orange",
  glass = true,
  speed = "normal",
  bended = false,
  angle,
  className,
}: MarqueeBannerProps) {
  const bgStyles = {
    orange: glass
      ? "bg-gradient-to-r from-black/80 via-[#FF6600]/30 to-black/80 backdrop-blur-xl border-y-2 border-[#FF7700]/80 shadow-[0_4px_30px_rgba(255,102,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,119,0,0.4)]"
      : "bg-gradient-to-r from-[#FF6600] via-[#FFAA00] to-[#FF6600] text-black border-y-4 border-black shadow-[4px_4px_0px_#000]",
    secondary: glass
      ? "bg-gradient-to-r from-black/80 via-[#FF6600]/30 to-black/80 backdrop-blur-xl border-y-2 border-[#FF7700]/80 shadow-[0_4px_30px_rgba(255,102,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,119,0,0.4)]"
      : "bg-gradient-to-r from-[#FF6600] via-[#FFAA00] to-[#FF6600] text-black border-y-4 border-black",
    accent: glass
      ? "bg-gradient-to-r from-black/80 via-[#FF5500]/35 to-black/80 backdrop-blur-xl border-y-2 border-[#FF5500]/80 text-white shadow-[0_4px_30px_rgba(255,85,0,0.35)]"
      : "bg-[#FF5555] text-white border-y-4 border-black",
    muted: "bg-[#A8E6CF] text-black border-y-4 border-black",
    black: "bg-white/95 backdrop-blur-xl text-black border-y-2 border-black shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
    white: "bg-white/90 backdrop-blur-xl text-black border-y-2 border-black/20",
  };

  const animClass = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  const rotationClass = angle || (bended ? "rotate-[-1deg] sm:rotate-[-0.85deg] scale-[1.03] my-2 z-20" : "");

  const bannerElement = (
    <div
      className={clsx(
        "relative w-[110%] -left-[5%] overflow-hidden py-3 sm:py-3.5 select-none flex items-center transition-all duration-300",
        bgStyles[bg],
        rotationClass,
        className
      )}
    >
      {/* Top Glass Specular Shimmer Line */}
      {glass && (
        <>
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFAA00]/80 to-transparent pointer-events-none" />
        </>
      )}

      <div className={clsx("flex items-center gap-8 whitespace-nowrap will-change-transform min-w-0", animClass)}>
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-6 font-sans font-black text-sm sm:text-base tracking-widest uppercase text-black"
          >
            <span>{text}</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF7700] text-[#FFAA00] drop-shadow-[0_0_10px_#FF7700] shrink-0 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );

  if (bended || angle) {
    return (
      <div className="relative w-full max-w-full overflow-hidden py-3">
        {bannerElement}
      </div>
    );
  }

  return bannerElement;
}
