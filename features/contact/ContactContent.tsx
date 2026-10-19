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

  // Role-based Neutral Palette Generator (Lead = Warm Oak/Amber Gold, Tech = Iron Cyan Slate, Management = Moss Forest Deepslate)
  const getRoleTheme = (person: (typeof ALL_CONTACTS)[number]) => {
    const isChiefOrFeaturedLead =
      person.featured ||
      person.role.toLowerCase().includes("chief") ||
      person.role.toLowerCase().includes("lead");

    if (isChiefOrFeaturedLead && person.category === "management") {
      // Chief / Festival Leads: Warm Roasted Oak & Amber-Gold Neutral
      return {
        cardBg: "bg-[#29221B]/95",
        borderBevel:
          "border-t-[#A5783A] border-l-[#A5783A] border-r-[#15110C] border-b-[#15110C]",
        hoverStyle:
          "hover:border-t-[#FBBF24] hover:border-l-[#FBBF24] hover:shadow-[6px_6px_0px_#000,0_0_24px_rgba(245,158,11,0.25)]",
        titleColor: "text-[#FDF5DE]",
        roleColor: "text-[#FBBF24]",
        deptColor: "text-[#D2BEA0]",
        categoryBadge:
          "bg-[#1B1510] text-[#FCD34D] border-2 border-t-[#5C3F1B] border-l-[#5C3F1B] border-r-[#0F0C08] border-b-[#0F0C08]",
        leadBadge:
          "bg-[#B45309] text-[#FEF3C7] border-2 border-t-[#FBBF24] border-l-[#FBBF24] border-r-[#6B2807] border-b-[#6B2807]",
        slotBg:
          "bg-[#1B1510] border-2 border-t-[#0F0C08] border-l-[#0F0C08] border-r-[#423120] border-b-[#423120]",
        slotText: "text-[#FDE68A]",
        bioText: "text-[#E6DCCF]",
        phoneIcon: "text-[#FBBF24]",
        copyBtn:
          "bg-[#382F25] hover:bg-[#483B2E] active:bg-[#2A231A] text-[#FDF5DE] border border-t-[#63513C] border-l-[#63513C] border-r-[#17130D] border-b-[#17130D]",
        callBtn:
          "bg-[#3D3125] hover:bg-[#4E3F2E] active:bg-[#2A2117] text-[#FDF5DE] border-2 border-t-[#785E40] border-l-[#785E40] border-r-[#1C160E] border-b-[#1C160E]",
        whatsappBtn:
          "bg-[#2F4D28] hover:bg-[#3B6133] active:bg-[#22391D] text-[#EAF7E6] border-2 border-t-[#568E48] border-l-[#568E48] border-r-[#142311] border-b-[#142311]",
        socialBtn:
          "bg-[#382F25] hover:bg-[#483B2E] text-[#FDF5DE] border-2 border-t-[#63513C] border-l-[#63513C] border-r-[#17130D] border-b-[#17130D]",
        divider: "border-[#3D3125]",
      };
    }

    if (person.category === "technical") {
      // Technical & Arena Leads / Systems: Deep Slate & Iron Cyan Neutral
      const isTechLead = person.featured || person.role.toLowerCase().includes("lead");
      return {
        cardBg: "bg-[#1D252E]/95",
        borderBevel: isTechLead
          ? "border-t-[#4E7E98] border-l-[#4E7E98] border-r-[#0D1318] border-b-[#0D1318]"
          : "border-t-[#3E5C70] border-l-[#3E5C70] border-r-[#0D1318] border-b-[#0D1318]",
        hoverStyle:
          "hover:border-t-[#38BDF8] hover:border-l-[#38BDF8] hover:shadow-[6px_6px_0px_#000,0_0_24px_rgba(56,189,248,0.25)]",
        titleColor: "text-[#EEF5FA]",
        roleColor: "text-[#38BDF8]",
        deptColor: "text-[#ADC2D1]",
        categoryBadge:
          "bg-[#121A20] text-[#7DD3FC] border-2 border-t-[#27485E] border-l-[#27485E] border-r-[#090E12] border-b-[#090E12]",
        leadBadge:
          "bg-[#0369A1] text-[#E0F2FE] border-2 border-t-[#38BDF8] border-l-[#38BDF8] border-r-[#083344] border-b-[#083344]",
        slotBg:
          "bg-[#131B22] border-2 border-t-[#0A0E13] border-l-[#0A0E13] border-r-[#2A3E4E] border-b-[#2A3E4E]",
        slotText: "text-[#BAE6FD]",
        bioText: "text-[#D9E4EC]",
        phoneIcon: "text-[#38BDF8]",
        copyBtn:
          "bg-[#283542] hover:bg-[#344557] active:bg-[#1D2731] text-[#EEF5FA] border border-t-[#475E74] border-l-[#475E74] border-r-[#10171D] border-b-[#10171D]",
        callBtn:
          "bg-[#2B3947] hover:bg-[#37495B] active:bg-[#1E2833] text-[#EEF5FA] border-2 border-t-[#516C85] border-l-[#516C85] border-r-[#11171E] border-b-[#11171E]",
        whatsappBtn:
          "bg-[#284C38] hover:bg-[#336147] active:bg-[#1C3627] text-[#E5F7ED] border-2 border-t-[#468A64] border-l-[#468A64] border-r-[#102218] border-b-[#102218]",
        socialBtn:
          "bg-[#283542] hover:bg-[#344557] text-[#EEF5FA] border-2 border-t-[#475E74] border-l-[#475E74] border-r-[#10171D] border-b-[#10171D]",
        divider: "border-[#2D3C4B]",
      };
    }

    // Management & Student Coordinators: Moss Stone & Forest Cobble Neutral
    return {
      cardBg: "bg-[#1E2721]/95",
      borderBevel:
        "border-t-[#4C7555] border-l-[#4C7555] border-r-[#0E1510] border-b-[#0E1510]",
      hoverStyle:
        "hover:border-t-[#34D399] hover:border-l-[#34D399] hover:shadow-[6px_6px_0px_#000,0_0_24px_rgba(52,211,153,0.25)]",
      titleColor: "text-[#EEF6F1]",
      roleColor: "text-[#34D399]",
      deptColor: "text-[#AFC5B4]",
      categoryBadge:
        "bg-[#131A15] text-[#6EE7B7] border-2 border-t-[#2A4E34] border-l-[#2A4E34] border-r-[#090E0B] border-b-[#090E0B]",
      leadBadge:
        "bg-[#047857] text-[#D1FAE5] border-2 border-t-[#34D399] border-l-[#34D399] border-r-[#064E3B] border-b-[#064E3B]",
      slotBg:
        "bg-[#131A15] border-2 border-t-[#090F0B] border-l-[#090F0B] border-r-[#263D2E] border-b-[#263D2E]",
      slotText: "text-[#A7F3D0]",
      bioText: "text-[#D8E6DC]",
      phoneIcon: "text-[#34D399]",
      copyBtn:
        "bg-[#29372D] hover:bg-[#36473B] active:bg-[#1D2720] text-[#EEF6F1] border border-t-[#4A6250] border-l-[#4A6250] border-r-[#101712] border-b-[#101712]",
      callBtn:
        "bg-[#2C3B30] hover:bg-[#394C3F] active:bg-[#1F2A22] text-[#EEF6F1] border-2 border-t-[#506D57] border-l-[#506D57] border-r-[#111712] border-b-[#111712]",
      whatsappBtn:
        "bg-[#265335] hover:bg-[#306843] active:bg-[#1B3C26] text-[#E4F8EC] border-2 border-t-[#45965E] border-l-[#45965E] border-r-[#102417] border-b-[#102417]",
      socialBtn:
        "bg-[#29372D] hover:bg-[#36473B] text-[#EEF6F1] border-2 border-t-[#4A6250] border-l-[#4A6250] border-r-[#101712] border-b-[#101712]",
      divider: "border-[#2B3B30]",
    };
  };

  // Official Email Card Themes (Neutral with Role Tints)
  const getEmailTheme = (inboxId: string) => {
    if (inboxId === "email-robosprano-hq") {
      // Fest Headquarters -> Warm Amber Gold Neutral
      return {
        cardBg: "bg-[#29221B]/95",
        borderBevel:
          "border-t-[#A5783A] border-l-[#A5783A] border-r-[#15110C] border-b-[#15110C]",
        hoverStyle:
          "hover:border-t-[#FBBF24] hover:border-l-[#FBBF24] hover:shadow-[6px_6px_0px_#000,0_0_24px_rgba(245,158,11,0.25)]",
        titleColor: "text-[#FDF5DE]",
        badgeStyle:
          "bg-[#1B1510] text-[#FCD34D] border-2 border-t-[#5C3F1B] border-l-[#5C3F1B] border-r-[#0F0C08] border-b-[#0F0C08]",
        slotBg:
          "bg-[#1B1510] border-2 border-t-[#0F0C08] border-l-[#0F0C08] border-r-[#423120] border-b-[#423120]",
        slotText: "text-[#FDE68A]",
        descText: "text-[#E6DCCF]",
        copyBtn:
          "bg-[#382F25] hover:bg-[#483B2E] active:bg-[#2A231A] text-[#FDF5DE] border-3 border-t-[#63513C] border-l-[#63513C] border-r-[#17130D] border-b-[#17130D]",
        composeBtn:
          "bg-[#B45309] hover:bg-[#D97706] active:bg-[#78350F] text-[#FEF3C7] border-3 border-t-[#FBBF24] border-l-[#FBBF24] border-r-[#6B2807] border-b-[#6B2807]",
        divider: "border-[#3D3125]",
      };
    }

    if (inboxId === "email-arena-tech") {
      // Arena & Systems -> Deep Slate Cyan Neutral
      return {
        cardBg: "bg-[#1D252E]/95",
        borderBevel:
          "border-t-[#4E7E98] border-l-[#4E7E98] border-r-[#0D1318] border-b-[#0D1318]",
        hoverStyle:
          "hover:border-t-[#38BDF8] hover:border-l-[#38BDF8] hover:shadow-[6px_6px_0px_#000,0_0_24px_rgba(56,189,248,0.25)]",
        titleColor: "text-[#EEF5FA]",
        badgeStyle:
          "bg-[#121A20] text-[#7DD3FC] border-2 border-t-[#27485E] border-l-[#27485E] border-r-[#090E12] border-b-[#090E12]",
        slotBg:
          "bg-[#131B22] border-2 border-t-[#0A0E13] border-l-[#0A0E13] border-r-[#2A3E4E] border-b-[#2A3E4E]",
        slotText: "text-[#BAE6FD]",
        descText: "text-[#D9E4EC]",
        copyBtn:
          "bg-[#283542] hover:bg-[#344557] active:bg-[#1D2731] text-[#EEF5FA] border-3 border-t-[#475E74] border-l-[#475E74] border-r-[#10171D] border-b-[#10171D]",
        composeBtn:
          "bg-[#0284C7] hover:bg-[#0EA5E9] active:bg-[#0369A1] text-[#E0F2FE] border-3 border-t-[#38BDF8] border-l-[#38BDF8] border-r-[#075985] border-b-[#075985]",
        divider: "border-[#2D3C4B]",
      };
    }

    // Institutional & Club Desk -> Warm Walnut/Bronze Neutral
    return {
      cardBg: "bg-[#252220]/95",
      borderBevel:
        "border-t-[#857367] border-l-[#857367] border-r-[#131110] border-b-[#131110]",
      hoverStyle:
        "hover:border-t-[#D6C7BC] hover:border-l-[#D6C7BC] hover:shadow-[6px_6px_0px_#000,0_0_24px_rgba(214,199,188,0.2)]",
      titleColor: "text-[#F7F2EE]",
      badgeStyle:
        "bg-[#161413] text-[#E2D5CC] border-2 border-t-[#4D423B] border-l-[#4D423B] border-r-[#0E0C0B] border-b-[#0E0C0B]",
      slotBg:
        "bg-[#161413] border-2 border-t-[#0D0B0A] border-l-[#0D0B0A] border-r-[#38312C] border-b-[#38312C]",
      slotText: "text-[#E8DDD5]",
      descText: "text-[#DDD3CA]",
      copyBtn:
        "bg-[#35302D] hover:bg-[#443E3A] active:bg-[#25221F] text-[#F7F2EE] border-3 border-t-[#5E554F] border-l-[#5E554F] border-r-[#151312] border-b-[#151312]",
      composeBtn:
        "bg-[#4D6F39] hover:bg-[#5E8746] active:bg-[#3A542B] text-[#EEF7EB] border-3 border-t-[#78A85B] border-l-[#78A85B] border-r-[#24351B] border-b-[#24351B]",
      divider: "border-[#3A3430]",
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
    <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#16141B] text-[#E5E7EB]">
      {/* Ambient Minecraft Background Layer with Warm Neutral Tinting */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/minecraft/contactbg.webp"
          alt="Robosprano Contact Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft atmospheric overlay preserving room illumination & wooden warmth */}
        <div className="absolute inset-0 bg-[#121017]/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141219]/75 via-[#141219]/35 to-[#141219]/85" />
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
            <span className="inline-flex items-center gap-2 font-minecraft text-xs sm:text-sm uppercase px-3.5 py-1.5 bg-[#25222D]/95 text-[#7EE896] border-2 border-t-[#4D455D] border-l-[#4D455D] border-r-[#131118] border-b-[#131118] shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000]">
              <Mail className="w-3.5 h-3.5 text-[#7EE896]" /> COMMUNICATION &amp; DISPATCH DESK
            </span>

            {/* Main Title: GET IN TOUCH */}
            <h1 className="font-minecraft text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#F5F2EB] uppercase tracking-wider leading-tight [text-shadow:_3px_3px_0_#000,_-1px_-1px_0_#000,_0_6px_0_#000]">
              GET IN{" "}
              <span className="inline-block bg-[#E08A1E] text-[#1E1202] px-3.5 py-0.5 border-4 border-t-[#FCD34D] border-l-[#FCD34D] border-r-[#8F4E02] border-b-[#8F4E02] shadow-[4px_4px_0px_#000] -rotate-1 [text-shadow:none]">
                TOUCH
              </span>
            </h1>

            {/* Subtitle Card (Neutral Stone Panel) */}
            <div className="bg-[#24212C]/95 border-3 border-t-[#464056] border-l-[#464056] border-r-[#13121A] border-b-[#13121A] px-5 sm:px-7 py-3 shadow-[4px_4px_0px_#000]">
              <p className="text-xs sm:text-sm font-minecraft text-[#D4CFDF] leading-relaxed [text-shadow:_1px_1px_0_#000]">
                Connect directly with our Chief Coordinator, Student Coordinators, and Technical Leads for Robosprano &apos;26 registrations, bot specifications, arena logistics, and sponsorships.
              </p>
            </div>

            {/* Quick-Jump HUD (Neutral Minecraft Slate Buttons) */}
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
                    className="px-3 py-1.5 bg-[#2B2735] hover:bg-[#393447] active:bg-[#1E1B26] text-[#E8E5F0] border-2 border-t-[#4E4760] border-l-[#4E4760] border-r-[#131119] border-b-[#131119] shadow-[2px_2px_0_#000] active:translate-y-0.5 transition-all font-minecraft text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer [text-shadow:_1px_1px_0_#000]"
                  >
                    <Icon className="w-3 h-3 text-[#7EE896]" />
                    <span>{anchor.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 2: OFFICIAL EMAILS HUB (FEATURED NEUTRAL MINECRAFT CARDS)         */}
        {/* ========================================================================= */}
        <motion.div id="inboxes" variants={itemVariants} className="space-y-4 w-full max-w-full">
          {/* Section Header Bar */}
          <div className="flex items-center justify-between bg-[#24212C]/95 px-4 py-2.5 border-3 border-t-[#464056] border-l-[#464056] border-r-[#13121A] border-b-[#13121A] shadow-[4px_4px_0px_#000]">
            <div className="flex items-center gap-2.5">
              <Mail className="w-5 h-5 stroke-[2.5px] text-[#FBBF24]" />
              <h3 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-[#F5F2EB] [text-shadow:_2px_2px_0_#000]">
                OFFICIAL INBOXES &amp; MAIL DIRECTORY
              </h3>
            </div>
            <span className="font-minecraft text-[10px] sm:text-xs text-[#7DD3FC] hidden sm:inline-block [text-shadow:_1px_1px_0_#000]">
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
                    theme.borderBevel,
                    theme.hoverStyle,
                    "border-4 p-5 sm:p-6 shadow-[6px_6px_0px_#000] transition-all flex flex-col justify-between space-y-4 select-none",
                    inbox.primary && "relative overflow-hidden"
                  )}
                >
                  <div className="space-y-3">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={clsx("font-minecraft text-[10px] uppercase px-2.5 py-1 shadow-[1px_1px_0px_#000] [text-shadow:_1px_1px_0_#000]", theme.badgeStyle)}>
                        {inbox.badge}
                      </span>
                      {inbox.primary && (
                        <span className="font-minecraft text-[10px] font-black uppercase px-2.5 py-1 bg-[#B45309] text-[#FEF3C7] border-2 border-t-[#FBBF24] border-l-[#FBBF24] border-r-[#6B2807] border-b-[#6B2807] shadow-[1px_1px_0px_#000]">
                          PRIMARY
                        </span>
                      )}
                    </div>

                    {/* Desk Title */}
                    <h4 className={clsx("font-minecraft text-sm sm:text-base uppercase tracking-wider leading-snug [text-shadow:_1px_1px_0_#000]", theme.titleColor)}>
                      {inbox.label}
                    </h4>

                    {/* Email Inset Slot (Minecraft Inventory Slot) */}
                    <div className={clsx("p-2.5 font-mono text-xs font-bold break-all select-all flex items-center justify-between gap-2 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.85)]", theme.slotBg, theme.slotText)}>
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
                        "flex-1 py-2.5 px-3 font-minecraft text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer [text-shadow:_1px_1px_0_#000]",
                        theme.copyBtn
                      )}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#7DD3FC] stroke-[3px]" />
                          <span className="text-[#7DD3FC]">COPIED!</span>
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
                        "py-2.5 px-3.5 font-minecraft text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer [text-shadow:_1px_1px_0_#000]",
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
        {/* SECTION 3: DIRECTORY OF TEAMS (ROLE-BASED NEUTRAL MINECRAFT THEMES)       */}
        {/* ========================================================================= */}
        <motion.div id="coordinators" variants={itemVariants} className="space-y-5">
          {/* Section Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#24212C]/95 px-4 py-2.5 border-3 border-t-[#464056] border-l-[#464056] border-r-[#13121A] border-b-[#13121A] shadow-[4px_4px_0px_#000]">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 stroke-[2.5px] text-[#7EE896]" />
              <h3 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-[#F5F2EB] [text-shadow:_2px_2px_0_#000]">
                LEADERSHIP &amp; COORDINATOR DIRECTORY
              </h3>
            </div>

            {/* Category Filter Tabs (Neutral 3D Buttons) */}
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
                      "px-3 py-1.5 border-3 font-minecraft text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000]",
                      isActive
                        ? "bg-[#33592C] hover:bg-[#3D6B35] text-[#EEF8EC] border-t-[#59934B] border-l-[#59934B] border-r-[#162713] border-b-[#162713]"
                        : "bg-[#2B2735] hover:bg-[#393447] text-[#D4CFDF] border-t-[#4E4760] border-l-[#4E4760] border-r-[#131119] border-b-[#131119]"
                    )}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={clsx(
                        "font-minecraft text-[10px] px-1.5 py-0.2 border",
                        isActive
                          ? "bg-[#142312] text-[#7DD3FC] border-[#2A4822]"
                          : "bg-[#18161E] text-[#FCD34D] border-[#393445]"
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
          <div className="bg-[#24212C]/95 border-3 border-t-[#464056] border-l-[#464056] border-r-[#13121A] border-b-[#13121A] p-2.5 sm:p-3 shadow-[4px_4px_0px_#000] flex items-center gap-3">
            <Search className="w-4 h-4 text-neutral-400 shrink-0 ml-1" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY COORDINATOR NAME, ROLE, OR ARENA..."
              className="w-full bg-transparent font-minecraft text-xs uppercase text-[#F5F2EB] placeholder-[#9E9AA8] focus:outline-none tracking-wider"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[#D4CFDF] hover:text-white font-minecraft text-xs px-2 py-0.5 bg-[#1B1822] border border-[#484257] cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Contact Cards Grid (Neutral Role-Based Minecraft Palettes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredContacts.length === 0 ? (
              <div className="col-span-full bg-[#24212C]/95 border-4 border-t-[#464056] border-l-[#464056] border-r-[#13121A] border-b-[#13121A] p-8 text-center shadow-[6px_6px_0px_#000] space-y-3">
                <HelpCircle className="w-10 h-10 mx-auto text-[#FBBF24] stroke-[2px]" />
                <h4 className="font-minecraft text-base sm:text-lg uppercase text-[#F5F2EB] [text-shadow:_2px_2px_0_#000]">
                  NO TEAM MEMBERS MATCHED &quot;{searchQuery}&quot;
                </h4>
                <p className="font-minecraft text-xs text-[#D4CFDF] max-w-sm mx-auto">
                  Try searching by first name, domain keyword, or reset the search query.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    playButtonClickSound(0.25);
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 bg-[#2B2735] hover:bg-[#393447] text-[#F5F2EB] border-3 border-t-[#4E4760] border-l-[#4E4760] border-r-[#131119] border-b-[#131119] font-minecraft text-xs uppercase shadow-[2px_2px_0px_#000] cursor-pointer"
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
                      theme.borderBevel,
                      theme.hoverStyle,
                      "border-4 p-5 sm:p-6 shadow-[6px_6px_0px_#000] transition-all flex flex-col justify-between space-y-4 select-none"
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
                        <h4 className={clsx("font-minecraft text-lg sm:text-xl uppercase tracking-wider leading-tight [text-shadow:_2px_2px_0_#000]", theme.titleColor)}>
                          {person.name}
                        </h4>
                        <div className={clsx("font-minecraft text-xs mt-1 [text-shadow:_1px_1px_0_#000]", theme.roleColor)}>
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
                            <span className={clsx("font-minecraft text-xs sm:text-sm [text-shadow:_0_0_6px_rgba(0,0,0,0.6)]", theme.slotText)}>
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
                            "px-3.5 py-2 font-minecraft text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 active:shadow-none transition-all",
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
        {/* SECTION 4: CAMPUS HEADQUARTERS, TRANSIT & FAQS ROW (NEUTRAL PALETTES)     */}
        {/* ========================================================================= */}
        <motion.div id="venue" variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-2 bg-[#24212C]/95 px-4 py-2.5 border-3 border-t-[#464056] border-l-[#464056] border-r-[#13121A] border-b-[#13121A] shadow-[4px_4px_0px_#000]">
            <MapPin className="w-5 h-5 stroke-[2.5px] text-[#FBBF24]" />
            <h3 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-[#F5F2EB] [text-shadow:_2px_2px_0_#000]">
              CAMPUS HEADQUARTERS, TRANSIT &amp; SUPPORT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD 1: Campus Headquarters & Venue (Warm Earth Oak Neutral) */}
            <div className="bg-[#29221B]/95 border-4 border-t-[#A5783A] border-l-[#A5783A] border-r-[#15110C] border-b-[#15110C] p-5 sm:p-6 shadow-[6px_6px_0px_#000] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-[#3D3125] pb-2.5">
                  <MapPin className="w-5 h-5 text-[#FBBF24] stroke-[3px]" />
                  <h4 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-[#FDF5DE] [text-shadow:_1px_1px_0_#000]">
                    CAMPUS HEADQUARTERS
                  </h4>
                </div>

                <div className="space-y-2 text-xs font-minecraft text-[#D2BEA0] leading-relaxed [text-shadow:_1px_1px_0_#000]">
                  <div className="text-sm uppercase text-[#7DD3FC]">
                    {VENUE_DETAILS.institution}
                  </div>
                  <div className="text-[11px] text-[#FBBF24]">
                    {VENUE_DETAILS.department}
                  </div>
                  <p className="pt-1 text-[#E6DCCF] font-sans text-xs">
                    {VENUE_DETAILS.campus}, {VENUE_DETAILS.address}, {VENUE_DETAILS.city}, {VENUE_DETAILS.state} - {VENUE_DETAILS.pincode}
                  </p>
                </div>
              </div>

                <a
                  href={VENUE_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playButtonClickSound(0.3)}
                  className="w-full py-3 bg-[#33592C] hover:bg-[#3D6B35] active:bg-[#233D1E] text-[#EEF8EC] border-3 border-t-[#59934B] border-l-[#59934B] border-r-[#162713] border-b-[#162713] font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                >
                  <MapPin className="w-4 h-4 stroke-[2.5px] text-[#7DD3FC]" />
                  <span>OPEN IN GOOGLE MAPS</span>
                </a>
            </div>

            {/* CARD 2: Transit & Connectivity (Cool Steel Railway Slate) */}
            <div className="bg-[#1D252E]/95 border-4 border-t-[#4E7E98] border-l-[#4E7E98] border-r-[#0D1318] border-b-[#0D1318] p-5 sm:p-6 shadow-[6px_6px_0px_#000] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-[#2D3C4B] pb-2.5">
                  <Train className="w-5 h-5 text-[#7EE896] stroke-[2.5px]" />
                  <h4 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-[#EEF5FA] [text-shadow:_1px_1px_0_#000]">
                    TRANSIT &amp; TRAVEL
                  </h4>
                </div>

                <div className="space-y-3 text-xs font-minecraft">
                  <div>
                    <div className="uppercase text-[#7EE896] flex items-center gap-1.5 mb-1.5 text-[11px] [text-shadow:_1px_1px_0_#000]">
                      <Train className="w-3.5 h-3.5 stroke-[2.5px]" />
                      <span>RAILWAY ACCESS:</span>
                    </div>
                    <ul className="space-y-1.5 pl-1 text-[11px] text-[#D9E4EC] font-sans">
                      {VENUE_DETAILS.railwayStations.map((st, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#7EE896] font-black">▸</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t-2 border-[#2D3C4B] pt-2.5">
                    <div className="uppercase text-[#7DD3FC] flex items-center gap-1.5 mb-1.5 text-[11px] [text-shadow:_1px_1px_0_#000]">
                      <Plane className="w-3.5 h-3.5 stroke-[2.5px]" />
                      <span>AIRPORT ACCESS:</span>
                    </div>
                    <ul className="space-y-1.5 pl-1 text-[11px] text-[#D9E4EC] font-sans">
                      {VENUE_DETAILS.airports.map((ap, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#7DD3FC] font-black">▸</span>
                          <span>{ap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-[#131B22] border-2 border-t-[#0A0E13] border-l-[#0A0E13] border-r-[#2A3E4E] border-b-[#2A3E4E] font-minecraft text-[10px] text-[#FCD34D] text-center [text-shadow:_1px_1px_0_#000] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]">
                COLLEGE SHUTTLES AVAILABLE AT KESINGA (KSNG)
              </div>
            </div>

            {/* CARD 3: Common Questions & Community Hub (Moss Forest Neutral) */}
            <div id="faqs" className="bg-[#1E2721]/95 border-4 border-t-[#4C7555] border-l-[#4C7555] border-r-[#0E1510] border-b-[#0E1510] p-5 sm:p-6 shadow-[6px_6px_0px_#000] flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-[#2B3B30] pb-2.5">
                  <HelpCircle className="w-5 h-5 stroke-[2.5px] text-[#FBBF24]" />
                  <h4 className="font-minecraft text-sm sm:text-base uppercase tracking-wider text-[#EEF6F1] [text-shadow:_1px_1px_0_#000]">
                    COMMUNITY &amp; FAQS
                  </h4>
                </div>

                <p className="font-sans text-xs text-[#D8E6DC] leading-relaxed">
                  Have questions about bot dimensions, voltage compliance, battle arena rules, food &amp; accommodation passes, or cash prizes? Check our live FAQ database.
                </p>

                <div className="space-y-2 pt-1 font-minecraft text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-[#131A15] border-2 border-t-[#090F0B] border-l-[#090F0B] border-r-[#263D2E] border-b-[#263D2E] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-[#EEF6F1] [text-shadow:_1px_1px_0_#000]">COMMUNITY DISCORD</span>
                    <a
                      href={SOCIAL_CHANNELS.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playButtonClickSound(0.25)}
                      className="text-[10px] uppercase text-[#7DD3FC] underline hover:text-[#7EE896] [text-shadow:_0_0_6px_rgba(125,211,252,0.4)]"
                    >
                      JOIN SERVER ↗
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-[#131A15] border-2 border-t-[#090F0B] border-l-[#090F0B] border-r-[#263D2E] border-b-[#263D2E] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-[#EEF6F1] flex items-center gap-1.5 [text-shadow:_1px_1px_0_#000]">
                      <WhatsappIcon className="w-3.5 h-3.5 text-[#7EE896]" />
                      <span>WHATSAPP DESK</span>
                    </span>
                    <a
                      href={SOCIAL_CHANNELS.whatsappGroup}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playButtonClickSound(0.25)}
                      className="text-[10px] uppercase text-[#7EE896] underline hover:text-[#7DD3FC] [text-shadow:_0_0_6px_rgba(126,232,150,0.4)]"
                    >
                      CHAT GROUP ↗
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/faqs"
                onClick={() => playButtonClickSound(0.3)}
                className="w-full py-3 bg-[#33592C] hover:bg-[#3D6B35] active:bg-[#233D1E] text-[#EEF8EC] border-3 border-t-[#59934B] border-l-[#59934B] border-r-[#162713] border-b-[#162713] font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] [text-shadow:_1px_1px_0_#000] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                <span>EXPLORE ALL FAQS</span>
                <ArrowRight className="w-4 h-4 stroke-[3px]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Banner */}
      <div className="relative z-10 py-6 bg-[#16141B]/90 border-t-4 border-[#25222D]">
        <MarqueeBanner
          items={[
            "ROBOSPRANO '26 BATTLEFIELD COMMS",
            "KILOBOTS GCEK HELPDESK",
            "ROBOTICS CLUB GCEK KALAHANDI",
            "KILOBOTS@GCEKBPATNA.AC.IN",
            "BHAWANIPATNA, ODISHA",
          ]}
          bg="black"
          glass={true}
          angle="rotate-[-1deg] sm:rotate-[-0.85deg]"
        />
      </div>
    </div>
  );
}
