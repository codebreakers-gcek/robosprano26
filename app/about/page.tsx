import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { AboutOverview } from "@/features/about/AboutOverview";
import { PillarCards } from "@/features/about/PillarCards";
import { ClubMilestones } from "@/features/about/ClubMilestones";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";

export const metadata: Metadata = {
  title: "About ROBOSPRANO 2026 | The 10th Edition | Kilobots GCEK",
  description:
    "ROBOSPRANO 2026 marks the 10th milestone edition of Odisha's premier robotics championship organized by KILOBOTS at Government College of Engineering Kalahandi (GCEK). Featuring Robo War, Death Race, Robo Sumo, Robo Soccer, and Line Follower.",
  keywords: [
    "About ROBOSPRANO 2026",
    "ROBOSPRANO 10th Edition",
    "ROBOSPRANO GCEK",
    "Kilobots GCEK",
    "Kilobots Robotics Society",
    "Government College of Engineering Kalahandi",
    "Robo War Odisha",
    "Robotics Fest Odisha",
    "Robotics competition Bhawanipatna",
    "GCEK Kalahandi robotics",
    "Robo Sumo",
    "Death Race",
    "Line Follower",
    "Robo Soccer",
  ],
  alternates: {
    canonical: "https://hackverse.codebreakersgcek.tech/about",
  },
  openGraph: {
    title: "About ROBOSPRANO 2026 | The 10th Edition",
    description:
      "A Decade of Innovation. A Legacy of Robotics. A Future Built by Innovators. Organized by KILOBOTS at GCEK Bhawanipatna.",
    url: "https://hackverse.codebreakersgcek.tech/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png", alt: "About ROBOSPRANO 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ROBOSPRANO 2026 // The 10th Edition",
    description: "A Decade of Innovation. A Legacy of Robotics. Organized by KILOBOTS GCEK.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-neutral-950 text-black">
      {/* Fixed Minecraft Background Layer with Full Clarity */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/minecraft/aboutbg.webp"
          alt="Hackverse About Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle dark tint to guarantee readability while preserving 100% full image clarity */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black/85" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16 min-w-0">
        <AboutOverview />
        <PillarCards />
        <ClubMilestones />
      </div>

      <div className="relative z-10 py-6">
        <MarqueeBanner
          bg="orange"
          glass={true}
          speed="normal"
          angle="rotate-[-1deg] sm:rotate-[-0.85deg]"
        />
      </div>
    </div>
  );
}
