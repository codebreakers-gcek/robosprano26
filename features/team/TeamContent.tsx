"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { officialIncharges, coreLeads, clubLeads } from "@/data/teamData";
import { TeamCategory, TeamMember } from "@/types/team";
import {
  Users,
  Sparkles,
  Quote,
  Copy,
  Check,
  Globe,
  ArrowRight,
  Crown,
  Code2,
  Mail,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/common/SocialIcons";
import clsx from "clsx";

// Helper to get crystal clear high-DPI Cloudinary image URLs
function getOptimizedImageUrl(url: string, width = 800) {
  if (!url) return url;
  if (url.includes("res.cloudinary.com") && url.includes("/image/upload/")) {
    if (url.includes("/image/upload/f_") || url.includes("/image/upload/q_") || url.includes("/image/upload/w_")) {
      return url;
    }
    return url.replace("/image/upload/", `/image/upload/f_auto,q_auto:best,w_${width},c_limit/`);
  }
  return url;
}

export function TeamContent() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<TeamCategory>("all");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleCopyEmail = (email: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#F0F8FF] text-black">
      {/* Fixed Minecraft Background Layer with Daylight Clarity */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/minecraft/teambg.webp"
          alt="Robosprano Team Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-16 min-w-0"
      >
        {/* ========================================================================= */}
        {/* SECTION 1: HEADER & INTRO */}
        {/* ========================================================================= */}
        <motion.div variants={itemVariants} className="w-full max-w-full flex justify-center">
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-3.5 py-1 bg-[#5DB329] text-white border-2 border-black shadow-[3px_3px_0px_#000]">
              <Users className="w-3.5 h-3.5" /> THE CREW // KILOBOTS GCEK
            </span>

            <h1 className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-tight">
              MEET THE{" "}
              <span className="inline-block bg-[#FFAA00] text-black px-2.5 sm:px-3 py-0.5 border-4 border-black shadow-[4px_4px_0px_#000] -rotate-1">
                TEAM CREW
              </span>
            </h1>

            <div className="bg-white border-3 border-black px-4 sm:px-6 py-3 shadow-[4px_4px_0px_#000]">
              <p className="text-xs sm:text-sm md:text-base font-bold text-slate-800 font-mono leading-relaxed">
                The visionary academic patrons, student leaders, and technical architects driving ROBOSPRANO &apos;26 and shaping the innovation culture at GCEK.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 2: CATEGORY FILTER TABS (Minecraft 3D Buttons) */}
        {/* ========================================================================= */}
        <motion.div variants={itemVariants} className="flex items-center justify-center w-full max-w-full">
          <div className="flex flex-wrap items-center justify-center gap-2.5 select-none w-full sm:w-auto max-w-full">
            {[
              { id: "all", label: "ALL SQUAD", count: officialIncharges.length + coreLeads.length + clubLeads.length },
              { id: "officials", label: "FACULTY PATRONS", count: officialIncharges.length },
              { id: "club", label: "CO-ORDINATORS", count: clubLeads.length },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id as TeamCategory)}
                  className={clsx(
                    "font-mono font-black text-xs uppercase tracking-wider px-4 py-2.5 border-3 transition-all cursor-pointer flex items-center gap-2",
                    isActive
                      ? "bg-[#5DB329] hover:bg-[#689B37] text-white border-black shadow-[3px_3px_0px_#000]"
                      : "bg-white hover:bg-[#F1F5F9] text-black border-black shadow-[3px_3px_0px_#000]"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={clsx(
                      "font-mono text-[10px] font-black px-1.5 py-0.2 border border-black",
                      isActive ? "bg-black text-[#55FFFF]" : "bg-[#F1F5F9] text-black"
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 3: OFFICIAL IN-CHARGES & PATRONS */}
        {/* ========================================================================= */}
        {(selectedCategory === "all" || selectedCategory === "officials") && (
          <motion.div variants={itemVariants} className="space-y-6 w-full max-w-full">
            <div className="flex items-center justify-between bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
              <div className="flex items-center gap-2.5">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFAA00] stroke-[2.5px]" />
                <h3 className="font-mono font-black text-base sm:text-xl uppercase tracking-tight text-black">
                  HON&apos;BLE PATRONS &amp; FACULTY ADVISORS
                </h3>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 border border-[#0284C7] hidden sm:inline-block">
                ACADEMIC &amp; INSTITUTIONAL GOVERNANCE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {officialIncharges.map((official) => {
                const hasError = imageErrors[official.id];
                return (
                  <div
                    key={official.id}
                    className="bg-white border-3 border-black p-4 sm:p-5 shadow-[5px_5px_0px_#000] hover:translate-y-[-2px] transition-all flex flex-col justify-between space-y-5 relative overflow-hidden w-full max-w-full"
                  >
                    <div className="space-y-4">
                      {/* Portrait Frame (Minecraft Light Slot) */}
                      <div
                        className="relative w-full aspect-4/3 sm:aspect-square bg-[#F1F5F9] border-3 border-black overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15)] group"
                        style={{
                          transform: "translateZ(0)",
                          isolation: "isolate",
                        }}
                      >
                        {!hasError ? (
                          <img
                            src={getOptimizedImageUrl(official.image, 800)}
                            alt={official.name}
                            loading="eager"
                            decoding="async"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 select-none"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "translate3d(0, 0, 0)",
                              imageRendering: "auto",
                            }}
                            onError={() => handleImageError(official.id)}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#F1F5F9] text-black p-4 text-center">
                            <Crown className="w-12 h-12 stroke-[2px] mb-2 text-[#FFAA00]" />
                            <span className="font-mono font-black text-sm uppercase text-black">{official.name}</span>
                          </div>
                        )}
                        <div className="absolute top-2 left-2 bg-[#0284C7] text-white font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
                          {official.id.toUpperCase()}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#FFAA00] text-black border-2 border-black inline-block shadow-[2px_2px_0px_#000]">
                          {official.designation}
                        </span>
                        <h4 className="font-mono font-black text-lg sm:text-xl text-black uppercase tracking-tight leading-snug pt-1">
                          {official.name}
                        </h4>
                        <div className="font-mono text-xs font-black text-slate-800">
                          {official.role}
                        </div>
                        <div className="font-mono text-[11px] font-bold text-slate-600">
                          {official.department}
                        </div>
                      </div>

                      {/* Quote (Minecraft Light Inset Slab) */}
                      {official.quote && (
                        <div className="p-3 bg-[#F8FAFC] border-2 border-black relative shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)]">
                          <Quote className="w-4 h-4 text-slate-400 stroke-[3px] mb-1" />
                          <p className="font-mono text-xs font-bold text-slate-800 italic leading-relaxed">
                            &quot;{official.quote}&quot;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 4: CORE LEADS & FOUNDERS */}
        {/* ========================================================================= */}
        {coreLeads.length > 0 && (
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-between bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFAA00] stroke-[2.5px]" />
                <h3 className="font-mono font-black text-base sm:text-xl uppercase tracking-tight text-black">
                  FOUNDING ARCHITECTS &amp; CLUB LEADS
                </h3>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#FFAA00] bg-[#FEF3C7] px-2 py-0.5 border border-[#FFAA00] hidden sm:inline-block">
                CORE DIRECTORS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreLeads.map((member, idx) => (
                <MemberCard
                  key={idx}
                  member={member}
                  copiedEmail={copiedEmail}
                  onCopyEmail={handleCopyEmail}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 5: DOMAIN & CLUB HEADS */}
        {/* ========================================================================= */}
        {(selectedCategory === "all" || selectedCategory === "club") && (
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-between bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#16A34A] stroke-[2.5px]" />
                <h3 className="font-mono font-black text-base sm:text-xl uppercase tracking-tight text-black">
                  MANAGEMENT &amp; TECHNICAL EXECUTIVES
                </h3>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 border border-[#0284C7] hidden sm:inline-block">
                SYSTEMS, PR, EVENTS &amp; DEV OPERATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubLeads.map((member, idx) => (
                <MemberCard
                  key={idx}
                  member={member}
                  copiedEmail={copiedEmail}
                  onCopyEmail={handleCopyEmail}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 6: JOIN THE SQUAD / CALL TO ACTION */}
        {/* ========================================================================= */}
        <motion.div variants={itemVariants}>
          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <span className="font-mono text-xs font-black uppercase px-2.5 py-0.5 bg-[#5DB329] text-white border-2 border-black shadow-[2px_2px_0px_#000] inline-block">
                  [COMMUNITY &amp; COLLABORATION]
                </span>
                <h3 className="font-mono font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
                  WANT TO COLLABORATE WITH KILOBOTS?
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-slate-700 max-w-xl leading-relaxed">
                  Whether you are looking to sponsor ROBOSPRANO &apos;26, deliver a technical workshop, or connect with our student robotics community, reach out to our team desks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="px-5 sm:px-6 py-3 bg-[#5DB329] hover:bg-[#689B37] text-white font-mono font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 stroke-[3px]" />
                  <span>CONTACT CREW DIRECTLY</span>
                </Link>
                <Link
                  href="/events"
                  className="px-5 sm:px-6 py-3 bg-[#FFAA00] hover:bg-[#FFC040] text-black font-mono font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <span>REGISTER FOR ROBOSPRANO</span>
                  <ArrowRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Subcomponent for Member Cards (Minecraft Stone GUI Slab)
function MemberCard({
  member,
  copiedEmail,
  onCopyEmail,
}: {
  member: TeamMember;
  copiedEmail: string | null;
  onCopyEmail: (email: string) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const isCopied = member.email && copiedEmail === member.email;

  return (
    <div className="bg-white border-3 border-black p-4 sm:p-5 shadow-[5px_5px_0px_#000] hover:translate-y-[-2px] transition-all flex flex-col justify-between space-y-4">
      <div className="space-y-3.5">
        {/* Avatar Frame (Minecraft Light Inset Slot) */}
        <div
          className="relative w-full aspect-square bg-[#F1F5F9] border-3 border-black overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15)] group"
          style={{
            transform: "translateZ(0)",
            isolation: "isolate",
          }}
        >
          {!imgError ? (
            <img
              src={getOptimizedImageUrl(member.image, 800)}
              alt={member.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 select-none"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translate3d(0, 0, 0)",
                imageRendering: "auto",
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center font-black bg-[#F1F5F9] text-black">
              <Users className="w-12 h-12 stroke-[2px] mb-2 text-[#5DB329]" />
              <span className="font-mono text-sm uppercase text-black">{member.title}</span>
            </div>
          )}

          {/* Top-right handle pill */}
          <div className="absolute top-2 right-2 bg-[#0284C7] text-white font-mono text-[10px] font-black px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
            {member.handle}
          </div>
        </div>

        {/* Identity Details */}
        <div className="space-y-1.5">
          {member.subtitle && (
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#5DB329] text-white border-2 border-black shadow-[2px_2px_0px_#000]">
                {member.subtitle}
              </span>
            </div>
          )}

          <h4 className="font-mono font-black text-base sm:text-lg text-black uppercase tracking-tight leading-tight pt-0.5">
            {member.title}
          </h4>

          {/* Mobile / Phone if available (Minecraft Light Inset Slot) */}
          {(member.phone || member.mobile) && (
            <div className="pt-1 flex items-center justify-between p-2 bg-[#F1F5F9] border-2 border-black font-mono text-[11px] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)]">
              <a
                href={`tel:${(member.phone || member.mobile)?.replace(/\s+/g, "")}`}
                className="font-bold text-slate-900 truncate hover:text-[#0284C7] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>{member.phone || member.mobile}</span>
              </a>
              <button
                type="button"
                onClick={() => onCopyEmail((member.phone || member.mobile)!)}
                className="text-[10px] font-black uppercase px-1.5 py-0.5 bg-[#5DB329] hover:bg-[#689B37] text-white border border-black cursor-pointer flex items-center gap-1 shadow-[1px_1px_0px_#000] ml-2 shrink-0"
                title="Copy phone number"
              >
                {copiedEmail === (member.phone || member.mobile) ? (
                  <>
                    <Check className="w-3 h-3 text-white stroke-[3px]" />
                    <span className="text-white">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 stroke-[2.5px]" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Email if available (Minecraft Light Inset Slot) */}
          {member.email && (
            <div className="pt-1 flex items-center justify-between p-2 bg-[#F1F5F9] border-2 border-black font-mono text-[11px] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)]">
              <span className="font-bold text-slate-900 truncate">{member.email}</span>
              <button
                type="button"
                onClick={() => onCopyEmail(member.email!)}
                className="text-[10px] font-black uppercase px-1.5 py-0.5 bg-[#5DB329] hover:bg-[#689B37] text-white border border-black cursor-pointer flex items-center gap-1 shadow-[1px_1px_0px_#000] ml-2 shrink-0"
                title="Copy email address"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3 h-3 text-white stroke-[3px]" />
                    <span className="text-white">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 stroke-[2.5px]" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Social Links & Action Row (Only rendered when at least one link is available) */}
      {(member.socials?.github ||
        member.socials?.linkedin ||
        member.socials?.instagram ||
        member.socials?.website ||
        member.url) && (
        <div className="pt-2 border-t-2 border-slate-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {member.socials?.github && member.socials.github !== "#" && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[2px_2px_0px_#000] transition-colors"
                aria-label={`${member.title} GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}

            {member.socials?.linkedin && member.socials.linkedin !== "#" && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white hover:bg-slate-100 text-[#0077b5] border-2 border-black shadow-[2px_2px_0px_#000] transition-colors"
                aria-label={`${member.title} LinkedIn`}
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            )}

            {member.socials?.instagram && member.socials.instagram !== "#" && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white hover:bg-slate-100 text-[#E1306C] border-2 border-black shadow-[2px_2px_0px_#000] transition-colors"
                aria-label={`${member.title} Instagram`}
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Portfolio / Profile URL button (Minecraft Light 3D Button) */}
          {member.socials?.website && member.socials.website.length > 0 ? (
            <a
              href={member.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-[2px_2px_0px_#000] transition-all"
            >
              <span>PORTFOLIO</span>
              <Globe className="w-3 h-3 stroke-[2.5px]" />
            </a>
          ) : member.url && member.url.length > 0 ? (
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-[2px_2px_0px_#000] transition-all"
            >
              <span>PROFILE</span>
              <Globe className="w-3 h-3 stroke-[2.5px]" />
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}

