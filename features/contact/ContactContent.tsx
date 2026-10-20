"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  OFFICIAL_EMAILS,
  ALL_CONTACTS,
  TECHNICAL_TEAM,
  MANAGEMENT_TEAM,
  VENUE_DETAILS,
  SOCIAL_CHANNELS,
} from "@/data/contactData";
import { ContactCategory } from "@/types/contact";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";
import { playButtonClickSound } from "@/components/ui/MinecraftSoundEffects";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Users,
  Sparkles,
  Train,
  Plane,
  ArrowRight,
  HelpCircle,
  Search,
  X,
  Compass,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/common/SocialIcons";
import clsx from "clsx";

export function ContactContent() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<ContactCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  // Copy Email Handler
  const handleCopyEmail = (email: string) => {
    playButtonClickSound(0.3);
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2200);
    }
  };

  // Copy Phone Handler
  const handleCopyPhone = (phone: string, id: string) => {
    playButtonClickSound(0.3);
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(phone);
      setCopiedPhone(id);
      setTimeout(() => setCopiedPhone(null), 2200);
    }
  };

  // Role-based Light Daylight Palette Generator
  const getRoleTheme = (person: (typeof ALL_CONTACTS)[number]) => {
    const isChiefOrFeaturedLead =
      person.featured ||
      person.role.toLowerCase().includes("chief") ||
      person.role.toLowerCase().includes("lead");

    if (isChiefOrFeaturedLead && person.category === "management") {
      // Chief / Festival Leads: Amber Gold Accented Light Stone Card
      return {
        cardBg: "bg-white",
        borderBevel: "border-black",
        hoverStyle: "hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000]",
        titleColor: "text-black",
        roleColor: "text-[#B45309]",
        deptColor: "text-slate-600",
        categoryBadge: "bg-[#FEF3C7] text-black border border-black",
        leadBadge: "bg-[#FFAA00] text-black border border-black",
        slotBg: "bg-[#F1F5F9] border-2 border-black",
        slotText: "text-slate-900",
        bioText: "text-slate-700",
        phoneIcon: "text-[#B45309]",
        copyBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border border-black",
        callBtn: "bg-[#FFAA00] hover:bg-[#FFC040] text-black border-2 border-black",
        whatsappBtn: "bg-[#16A34A] hover:bg-[#15803D] text-white border-2 border-black",
        socialBtn: "bg-white hover:bg-slate-100 text-black border-2 border-black",
        divider: "border-slate-200",
      };
    }

    if (person.category === "technical") {
      // Technical & Arena Leads / Systems: Sky Blue Accented Light Stone Card
      return {
        cardBg: "bg-white",
        borderBevel: "border-black",
        hoverStyle: "hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000]",
        titleColor: "text-black",
        roleColor: "text-[#0284C7]",
        deptColor: "text-slate-600",
        categoryBadge: "bg-[#E0F2FE] text-[#0284C7] border border-black",
        leadBadge: "bg-[#0284C7] text-white border border-black",
        slotBg: "bg-[#F1F5F9] border-2 border-black",
        slotText: "text-slate-900",
        bioText: "text-slate-700",
        phoneIcon: "text-[#0284C7]",
        copyBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border border-black",
        callBtn: "bg-[#0284C7] hover:bg-[#0369A1] text-white border-2 border-black [text-shadow:_1px_1px_0_#000]",
        whatsappBtn: "bg-[#16A34A] hover:bg-[#15803D] text-white border-2 border-black",
        socialBtn: "bg-white hover:bg-slate-100 text-black border-2 border-black",
        divider: "border-slate-200",
      };
    }

    // Management & Student Coordinators: Emerald Grass Accented Light Stone Card
    return {
      cardBg: "bg-white",
      borderBevel: "border-black",
      hoverStyle: "hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000]",
      titleColor: "text-black",
      roleColor: "text-[#16A34A]",
      deptColor: "text-slate-600",
      categoryBadge: "bg-[#DCFCE7] text-[#16A34A] border border-black",
      leadBadge: "bg-[#5DB329] text-white border border-black",
      slotBg: "bg-[#F1F5F9] border-2 border-black",
      slotText: "text-slate-900",
      bioText: "text-slate-700",
      phoneIcon: "text-[#16A34A]",
      copyBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border border-black",
      callBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black [text-shadow:_1px_1px_0_#000]",
      whatsappBtn: "bg-[#16A34A] hover:bg-[#15803D] text-white border-2 border-black",
      socialBtn: "bg-white hover:bg-slate-100 text-black border-2 border-black",
      divider: "border-slate-200",
    };
  };

  // Official Email Card Themes (Light Daylight Palettes)
  const getEmailTheme = (inboxId: string) => {
    if (inboxId === "email-robosprano-hq") {
      // Fest Headquarters -> Amber Gold Accented
      return {
        cardBg: "bg-white",
        borderBevel: "border-black",
        hoverStyle: "hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000]",
        titleColor: "text-black",
        badgeStyle: "bg-[#FEF3C7] text-black border border-black",
        slotBg: "bg-[#F1F5F9] border-2 border-black",
        slotText: "text-slate-900",
        descText: "text-slate-700",
        copyBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black",
        composeBtn: "bg-[#FFAA00] hover:bg-[#FFC040] text-black border-2 border-black",
        divider: "border-slate-200",
      };
    }

    if (inboxId === "email-arena-tech") {
      // Arena & Systems -> Sky Blue Accented
      return {
        cardBg: "bg-white",
        borderBevel: "border-black",
        hoverStyle: "hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000]",
        titleColor: "text-black",
        badgeStyle: "bg-[#E0F2FE] text-[#0284C7] border border-black",
        slotBg: "bg-[#F1F5F9] border-2 border-black",
        slotText: "text-slate-900",
        descText: "text-slate-700",
        copyBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black",
        composeBtn: "bg-[#0284C7] hover:bg-[#0369A1] text-white border-2 border-black",
        divider: "border-slate-200",
      };
    }

    // Institutional & Club Desk -> Grass Green Accented
    return {
      cardBg: "bg-white",
      borderBevel: "border-black",
      hoverStyle: "hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000]",
      titleColor: "text-black",
      badgeStyle: "bg-[#DCFCE7] text-[#16A34A] border border-black",
      slotBg: "bg-[#F1F5F9] border-2 border-black",
      slotText: "text-slate-900",
      descText: "text-slate-700",
      copyBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black",
      composeBtn: "bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black",
      divider: "border-slate-200",
    };
  };

  // Filter Contacts
  const filteredContacts = useMemo(() => {
    return ALL_CONTACTS.filter((person) => {
      const matchesCategory =
        selectedCategory === "all" || person.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        person.name.toLowerCase().includes(q) ||
        person.role.toLowerCase().includes(q) ||
        person.department.toLowerCase().includes(q) ||
        person.email.toLowerCase().includes(q) ||
        person.phone.includes(q) ||
        person.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.03,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#F0F8FF] text-black">
      {/* Ambient Minecraft Background Layer with Daylight Tinting */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/minecraft/minecraft_2.webp"
          alt="Robosprano Contact Background"
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
        className="relative z-10 w-full max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 sm:space-y-12 min-w-0"
      >
        {/* ========================================================================= */}
        {/* SECTION 1: HEADER TITLE & QUICK NAV HUD                                   */}
        {/* ========================================================================= */}
        <motion.div variants={itemVariants} className="w-full max-w-full flex justify-center">
          <div className="flex flex-col items-center text-center space-y-3.5 sm:space-y-4 max-w-3xl">
            {/* Top Dispatch Tag */}
            <span className="inline-flex items-center gap-2 font-minecraft text-xs sm:text-sm uppercase px-3.5 py-1.5 bg-[#5DB329] text-white border-2 border-black shadow-[3px_3px_0px_#000]">
              <Mail className="w-3.5 h-3.5 text-white" /> COMMUNICATION &amp; DISPATCH DESK
            </span>

            {/* Main Title: GET IN TOUCH */}
            <h1 className="font-minecraft text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-black uppercase tracking-wider leading-tight">
              GET IN{" "}
              <span className="inline-block bg-[#FFAA00] text-black px-3.5 py-0.5 border-4 border-black shadow-[4px_4px_0px_#000] -rotate-1">
                TOUCH
              </span>
            </h1>

            {/* Subtitle Card (Light Stone Panel) */}
            <div className="bg-white border-3 border-black px-5 sm:px-7 py-3.5 shadow-[4px_4px_0px_#000]">
              <p className="text-xs sm:text-sm font-minecraft text-slate-800 leading-relaxed">
                Connect directly with our Chief Coordinator, Student Coordinators, and Technical Leads for Robosprano &apos;26 registrations, bot specifications, arena logistics, and sponsorships.
              </p>
            </div>

            {/* Quick-Jump HUD (Light Minecraft Slate Buttons) */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {[
                { label: "EMAIL INBOXES", href: "#inboxes", icon: Mail },
                { label: "LEADERSHIP DESK", href: "#coordinators", icon: Users },
                { label: "CAMPUS & VENUE", href: "#venue", icon: MapPin },
                { label: "COMMUNITY & FAQS", href: "#faqs", icon: HelpCircle },
              ].map((anchor) => {
                const Icon = anchor.icon;
                return (
                  <a
                    key={anchor.label}
                    href={anchor.href}
                    onClick={() => playButtonClickSound(0.25)}
                    className="px-3 py-1.5 bg-white hover:bg-slate-100 active:bg-slate-200 text-black border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 transition-all font-minecraft text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer font-bold"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{anchor.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 2: OFFICIAL EMAILS HUB (FEATURED LIGHT MINECRAFT CARDS)           */}
        {/* ========================================================================= */}
        <motion.div id="inboxes" variants={itemVariants} className="space-y-4 w-full max-w-full">
          {/* Section Header Bar */}
          <div className="flex items-center justify-between bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
            <div className="flex items-center gap-2.5">
              <Mail className="w-5 h-5 stroke-[2.5px] text-[#FFAA00]" />
              <h3 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-black">
                OFFICIAL INBOXES &amp; MAIL DIRECTORY
              </h3>
            </div>
            <span className="font-minecraft text-[10px] sm:text-xs text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 border border-[#0284C7] hidden sm:inline-block font-bold">
              ● 24/7 ACTIVE DISPATCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OFFICIAL_EMAILS.map((inbox) => {
              const isCopied = copiedEmail === inbox.email;
              const theme = getEmailTheme(inbox.id);
              return (
                <div
                  key={inbox.id}
                  className={clsx(
                    theme.cardBg,
                    "border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#000] transition-all flex flex-col justify-between space-y-4 select-none",
                    theme.hoverStyle,
                    inbox.primary && "relative overflow-hidden"
                  )}
                >
                  <div className="space-y-3">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={clsx("font-minecraft text-[10px] uppercase px-2.5 py-1 font-bold", theme.badgeStyle)}>
                        {inbox.badge}
                      </span>
                      {inbox.primary && (
                        <span className="font-minecraft text-[10px] font-black uppercase px-2.5 py-1 bg-[#FFAA00] text-black border-2 border-black shadow-[1px_1px_0px_#000]">
                          PRIMARY
                        </span>
                      )}
                    </div>

                    {/* Desk Title */}
                    <h4 className={clsx("font-minecraft text-sm sm:text-base uppercase tracking-wider leading-snug font-black", theme.titleColor)}>
                      {inbox.label}
                    </h4>

                    {/* Email Inset Slot (Minecraft Inventory Slot) */}
                    <div className={clsx("p-2.5 font-mono text-xs font-bold break-all select-all flex items-center justify-between gap-2 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)]", theme.slotBg, theme.slotText)}>
                      <span>{inbox.email}</span>
                    </div>

                    <p className={clsx("font-sans text-xs leading-relaxed", theme.descText)}>
                      {inbox.description}
                    </p>
                  </div>

                  {/* Actions (Minecraft Beveled Buttons) */}
                  <div className={clsx("pt-2 flex items-center gap-2 border-t-2", theme.divider)}>
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(inbox.email)}
                      className={clsx(
                        "flex-1 py-2.5 px-3 font-minecraft text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer font-bold",
                        theme.copyBtn
                      )}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                          <span className="text-white">COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 stroke-[2.5px] opacity-80" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${inbox.email}?subject=${encodeURIComponent("Inquiry regarding ROBOSPRANO '26 - Kilobots GCEK")}`}
                      onClick={() => playButtonClickSound(0.3)}
                      className={clsx(
                        "py-2.5 px-3.5 font-minecraft text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer font-bold",
                        theme.composeBtn
                      )}
                    >
                      <Mail className="w-3.5 h-3.5 stroke-[2.5px]" />
                      <span>COMPOSE</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 3: DIRECTORY OF TEAMS (ROLE-BASED LIGHT MINECRAFT THEMES)         */}
        {/* ========================================================================= */}
        <motion.div id="coordinators" variants={itemVariants} className="space-y-5">
          {/* Section Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 stroke-[2.5px] text-[#5DB329]" />
              <h3 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-black font-black">
                LEADERSHIP &amp; COORDINATOR DIRECTORY
              </h3>
            </div>

            {/* Category Filter Tabs (Light 3D Buttons) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto select-none">
              {[
                { id: "all", label: "ALL DESKS", count: ALL_CONTACTS.length },
                { id: "management", label: "COORDINATORS", count: MANAGEMENT_TEAM.length },
                { id: "technical", label: "ARENA LEADS", count: TECHNICAL_TEAM.length },
              ].map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      playButtonClickSound(0.25);
                      setSelectedCategory(tab.id as ContactCategory);
                    }}
                    className={clsx(
                      "px-3 py-1.5 border-2 border-black font-minecraft text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-[2px_2px_0px_#000] font-black",
                      isActive
                        ? "bg-[#5DB329] hover:bg-[#689B37] text-white"
                        : "bg-white hover:bg-slate-100 text-black"
                    )}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={clsx(
                        "font-minecraft text-[10px] px-1.5 py-0.2 border border-black",
                        isActive
                          ? "bg-black text-[#55FFFF]"
                          : "bg-[#F1F5F9] text-black"
                      )}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar HUD */}
          <div className="bg-white border-3 border-black p-2.5 sm:p-3 shadow-[4px_4px_0px_#000] flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-500 shrink-0 ml-1" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY COORDINATOR NAME, ROLE, OR ARENA..."
              className="w-full bg-transparent font-minecraft text-xs uppercase text-black placeholder-slate-400 focus:outline-none tracking-wider font-bold"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-black hover:bg-slate-100 font-minecraft text-xs px-2 py-0.5 bg-[#F1F5F9] border border-black cursor-pointer font-bold"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Contact Cards Grid (Light Role-Based Minecraft Palettes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredContacts.length === 0 ? (
              <div className="col-span-full bg-white border-3 border-black p-8 text-center shadow-[5px_5px_0px_#000] space-y-3">
                <HelpCircle className="w-10 h-10 mx-auto text-[#FFAA00] stroke-[2px]" />
                <h4 className="font-minecraft text-base sm:text-lg uppercase text-black font-black">
                  NO TEAM MEMBERS MATCHED &quot;{searchQuery}&quot;
                </h4>
                <p className="font-minecraft text-xs text-slate-600 max-w-sm mx-auto">
                  Try searching by first name, domain keyword, or reset the search query.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    playButtonClickSound(0.25);
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 bg-[#5DB329] hover:bg-[#689B37] text-white border-2 border-black font-minecraft text-xs uppercase shadow-[2px_2px_0px_#000] cursor-pointer font-black"
                >
                  RESET SEARCH
                </button>
              </div>
            ) : (
              filteredContacts.map((person) => {
                const isPhoneCopied = copiedPhone === person.id;
                const theme = getRoleTheme(person);

                return (
                  <div
                    key={person.id}
                    className={clsx(
                      theme.cardBg,
                      "border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#000] transition-all flex flex-col justify-between space-y-4 select-none",
                      theme.hoverStyle
                    )}
                  >
                    <div className="space-y-3">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={clsx("font-minecraft text-[10px] uppercase px-2.5 py-1 shadow-[1px_1px_0px_#000]", theme.categoryBadge)}>
                          {person.categoryLabel}
                        </span>

                        {person.featured && (
                          <span className={clsx("font-minecraft text-[10px] font-black uppercase px-2.5 py-0.5 shadow-[1px_1px_0px_#000] flex items-center gap-1", theme.leadBadge)}>
                            <Sparkles className="w-3 h-3 stroke-[2.5px]" />
                            <span>LEAD</span>
                          </span>
                        )}
                      </div>

                      {/* Header info */}
                      <div>
                        <h4 className={clsx("font-minecraft text-lg sm:text-xl uppercase tracking-wider leading-tight font-black", theme.titleColor)}>
                          {person.name}
                        </h4>
                        <div className={clsx("font-minecraft text-xs mt-1 font-bold", theme.roleColor)}>
                          {person.role}
                        </div>
                        <div className={clsx("font-minecraft text-[11px] mt-0.5", theme.deptColor)}>
                          {person.department}
                        </div>
                      </div>

                      {/* Bio Inset */}
                      {person.bio && (
                        <p className={clsx("font-sans text-xs leading-relaxed p-2.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]", theme.slotBg, theme.bioText)}>
                          {person.bio}
                        </p>
                      )}

                      {/* Contact Info (Phone Slot) */}
                      <div className="pt-1">
                        <div className={clsx("flex items-center justify-between p-2.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]", theme.slotBg)}>
                          <div className="flex items-center gap-2 truncate">
                            <Phone className={clsx("w-3.5 h-3.5 stroke-[2.5px] shrink-0", theme.phoneIcon)} />
                            <span className={clsx("font-minecraft text-xs sm:text-sm font-bold", theme.slotText)}>
                              {person.displayPhone}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyPhone(person.phone, person.id)}
                            className={clsx("font-minecraft text-[10px] uppercase px-2 py-1 cursor-pointer shadow-[1px_1px_0px_#000] ml-2 shrink-0 [text-shadow:_1px_1px_0_#000]", theme.copyBtn)}
                            title="Copy number"
                          >
                            {isPhoneCopied ? "COPIED!" : "COPY"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className={clsx("pt-2 flex flex-wrap items-center justify-between gap-2 border-t-2", theme.divider)}>
                      <div className="flex items-center gap-2">
                        {/* Direct Call Button */}
                        <a
                          href={`tel:${person.phone}`}
                          onClick={() => playButtonClickSound(0.3)}
                          className={clsx(
                            "px-3.5 py-2 font-minecraft text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all",
                            theme.callBtn
                          )}
                        >
                          <Phone className="w-3.5 h-3.5 stroke-[2.5px]" />
                          <span>CALL</span>
                        </a>

                        {/* WhatsApp Button */}
                        {person.whatsapp && (
                          <a
                            href={`https://wa.me/${person.whatsapp}?text=${encodeURIComponent(
                              `Hi ${person.name}, I am reaching out regarding ROBOSPRANO '26 at GCEK.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => playButtonClickSound(0.3)}
                            className={clsx(
                              "px-3.5 py-2 font-minecraft text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 active:shadow-none transition-all",
                              theme.whatsappBtn
                            )}
                          >
                            <WhatsappIcon className="w-4 h-4" />
                            <span>WHATSAPP</span>
                          </a>
                        )}
                      </div>

                      {/* Social Links (Square Minecraft Icons) */}
                      <div className="flex items-center gap-1.5">
                        {person.github && (
                          <a
                            href={person.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => playButtonClickSound(0.2)}
                            className={clsx("p-2 shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all", theme.socialBtn)}
                            aria-label={`${person.name} GitHub`}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => playButtonClickSound(0.2)}
                            className={clsx("p-2 shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all", theme.socialBtn)}
                            aria-label={`${person.name} LinkedIn`}
                          >
                            <LinkedinIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 4: CAMPUS HEADQUARTERS, TRANSIT & FAQS ROW (LIGHT MINECRAFT THEME) */}
        {/* ========================================================================= */}
        <motion.div id="venue" variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-2 bg-white px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#000]">
            <MapPin className="w-5 h-5 stroke-[2.5px] text-[#FFAA00]" />
            <h3 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-black font-black">
              CAMPUS HEADQUARTERS, TRANSIT &amp; SUPPORT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD 1: Campus Headquarters & Venue (Light Stone Card) */}
            <div className="bg-white border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#000] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2.5">
                  <MapPin className="w-5 h-5 text-[#FFAA00] stroke-[3px]" />
                  <h4 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-black font-black">
                    CAMPUS HEADQUARTERS
                  </h4>
                </div>

                <div className="space-y-2 text-xs font-minecraft text-slate-800 leading-relaxed">
                  <div className="text-sm uppercase text-[#0284C7] font-black">
                    {VENUE_DETAILS.institution}
                  </div>
                  <div className="text-[11px] text-[#B45309] font-bold">
                    {VENUE_DETAILS.department}
                  </div>
                  <p className="pt-1 text-slate-700 font-sans text-xs">
                    {VENUE_DETAILS.campus}, {VENUE_DETAILS.address}, {VENUE_DETAILS.city}, {VENUE_DETAILS.state} - {VENUE_DETAILS.pincode}
                  </p>
                </div>
              </div>

              <a
                href={VENUE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playButtonClickSound(0.3)}
                className="w-full py-3 bg-[#5DB329] hover:bg-[#689B37] active:bg-[#4C9421] text-white border-2 border-black font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer font-black"
              >
                <MapPin className="w-4 h-4 stroke-[2.5px] text-white" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
            </div>

            {/* CARD 2: Transit & Connectivity (Light Stone Card) */}
            <div className="bg-white border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#000] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2.5">
                  <Train className="w-5 h-5 text-[#0284C7] stroke-[2.5px]" />
                  <h4 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-black font-black">
                    TRANSIT &amp; TRAVEL
                  </h4>
                </div>

                <div className="space-y-3 text-xs font-minecraft">
                  <div>
                    <div className="uppercase text-[#0284C7] flex items-center gap-1.5 mb-1.5 text-[11px] font-black">
                      <Train className="w-3.5 h-3.5 stroke-[2.5px]" />
                      <span>RAILWAY ACCESS:</span>
                    </div>
                    <ul className="space-y-1.5 pl-1 text-[11px] text-slate-700 font-sans">
                      {VENUE_DETAILS.railwayStations.map((st, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#5DB329] font-black">▸</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t-2 border-slate-200 pt-2.5">
                    <div className="uppercase text-[#0284C7] flex items-center gap-1.5 mb-1.5 text-[11px] font-black">
                      <Plane className="w-3.5 h-3.5 stroke-[2.5px]" />
                      <span>AIRPORT ACCESS:</span>
                    </div>
                    <ul className="space-y-1.5 pl-1 text-[11px] text-slate-700 font-sans">
                      {VENUE_DETAILS.airports.map((ap, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#0284C7] font-black">▸</span>
                          <span>{ap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-[#FEF3C7] border-2 border-black font-minecraft text-[10px] text-black font-bold text-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]">
                COLLEGE SHUTTLES AVAILABLE AT KESINGA (KSNG)
              </div>
            </div>

            {/* CARD 3: Common Questions & Community Hub (Light Stone Card) */}
            <div id="faqs" className="bg-white border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#000] flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2.5">
                  <HelpCircle className="w-5 h-5 stroke-[2.5px] text-[#FFAA00]" />
                  <h4 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-black font-black">
                    COMMUNITY &amp; FAQS
                  </h4>
                </div>

                <p className="font-sans text-xs text-slate-700 leading-relaxed">
                  Have questions about bot dimensions, voltage compliance, battle arena rules, food &amp; accommodation passes, or cash prizes? Check our live FAQ database.
                </p>

                <div className="space-y-2 pt-1 font-minecraft text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-[#F1F5F9] border-2 border-black shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]">
                    <span className="text-black font-bold">COMMUNITY DISCORD</span>
                    <a
                      href={SOCIAL_CHANNELS.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playButtonClickSound(0.25)}
                      className="text-[10px] uppercase text-[#0284C7] font-black underline hover:text-[#5DB329]"
                    >
                      JOIN SERVER ↗
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-[#F1F5F9] border-2 border-black shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]">
                    <span className="text-black font-bold flex items-center gap-1.5">
                      <WhatsappIcon className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>WHATSAPP DESK</span>
                    </span>
                    <a
                      href={SOCIAL_CHANNELS.whatsappGroup}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playButtonClickSound(0.25)}
                      className="text-[10px] uppercase text-[#16A34A] font-black underline hover:text-[#0284C7]"
                    >
                      CHAT GROUP ↗
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/faqs"
                onClick={() => playButtonClickSound(0.3)}
                className="w-full py-3 bg-[#5DB329] hover:bg-[#689B37] active:bg-[#4C9421] text-white border-2 border-black font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer font-black"
              >
                <span>EXPLORE ALL FAQS</span>
                <ArrowRight className="w-4 h-4 stroke-[3px]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Banner */}
      <div className="relative z-10 py-6 bg-white border-t-3 border-black">
        <MarqueeBanner
          items={[
            "ROBOSPRANO '26 BATTLEFIELD COMMS",
            "KILOBOTS GCEK HELPDESK",
            "ROBOTICS CLUB GCEK KALAHANDI",
            "KILOBOTS@GCEKBPATNA.AC.IN",
            "BHAWANIPATNA, ODISHA",
          ]}
          bg="orange"
          glass={false}
          angle="rotate-[-1deg] sm:rotate-[-0.85deg]"
        />
      </div>
    </div>
  );
}
