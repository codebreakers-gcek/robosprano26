"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ExternalLink, Heart, MapPin, Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/common/SocialIcons";
import { ENV } from "@/config/env";
import { EVENT_DATA } from "@/data/event";

export function Footer() {
  return (
    <footer
      id="main-footer"
      className="relative z-10 bg-[#E2E8F0] text-black pt-16 pb-10 border-t-4 border-black overflow-hidden"
    >
      {/* Outer Container with Mobs Individually on Left and Right */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col 2xl:flex-row items-end justify-between gap-8 xl:gap-10">
          {/* ========================================================================= */}
          {/* LEFT: Hostile Mobs (Enderman, Spider, Zombie, Creeper, Skeleton)          */}
          {/* ========================================================================= */}
          <div className="hidden 2xl:flex shrink-0 w-[180px] 3xl:w-[240px] self-end justify-start pointer-events-none select-none">
            <img
              src="/minecraft/minecraft_hostile_mob.webp"
              alt="Minecraft Hostile Mobs"
              className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              loading="lazy"
            />
          </div>

          {/* ========================================================================= */}
          {/* CENTER: Clean Content Layout (Responsive 4-Column Grid)                  */}
          {/* ========================================================================= */}
          <div className="flex-1 w-full max-w-7xl mx-auto py-2 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
              {/* Col 1: Club & Fest Branding */}
              <div className="space-y-4 sm:col-span-2 lg:col-span-5 xl:col-span-4 min-w-0">
                <div className="space-y-3.5">
                  {/* Row 1: Robosprano & Logo */}
                  <Link
                    href="/"
                    className="flex items-center gap-3.5 group focus:outline-none"
                    aria-label="ROBOSPRANO '26 Home"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-black border-2 border-black shadow-[2px_2px_0px_#000] rounded p-1 flex items-center justify-center shrink-0 group-hover:bg-black transition-colors">
                      <img
                        src="/robosprano-1.webp"
                        alt="ROBOSPRANO '26 Main Logo"
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-lg sm:text-xl md:text-2xl tracking-tight text-black leading-tight group-hover:text-[#0284C7] transition-colors">
                        ROBOSPRANO &apos;26
                      </h3>
                      <p className="font-mono text-[10px] sm:text-xs font-bold text-slate-600 tracking-wide">
                        FLAGSHIP TECH FEST &amp; ROBOSPRANO
                      </p>
                    </div>
                  </Link>

                  {/* Row 2: Kilobots & Logo */}
                  <a
                    href={ENV.OFFICIAL_CLUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 group focus:outline-none"
                    aria-label="Kilobots Official Society"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white border-2 border-black shadow-[2px_2px_0px_#000] rounded p-1 flex items-center justify-center shrink-0 group-hover:bg-[#DCFCE7] transition-colors">
                      <img
                        src="/kilobot.png"
                        alt="Kilobots GCEK Logo"
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-black text-base sm:text-lg tracking-tight text-black leading-tight group-hover:text-[#15803D] transition-colors">
                        KILOBOTS // GCEK
                      </h4>
                      <p className="font-mono text-[10px] sm:text-xs font-bold text-slate-600 tracking-wide">
                        OFFICIAL ROBOTICS SOCIETY
                      </p>
                    </div>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  The premier robotics and combat engineering society of
                  Government College of Engineering Kalahandi. Fostering arena
                  combat, bot fabrication, and robotics excellence.
                </p>

                <div>
                  <a
                    href="https://chat.whatsapp.com/Bm0iJCw4F683n0D8jAX9U9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase tracking-wider text-black hover:text-[#0284C7] underline underline-offset-4 decoration-black hover:decoration-[#0284C7] transition-colors"
                  >
                    <span>JOIN OFFICIAL CLUB COMMUNITY</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5px]" />
                  </a>
                </div>
              </div>

              {/* Col 2: Navigation Links */}
              <div className="space-y-3 sm:col-span-1 lg:col-span-3 xl:col-span-2 min-w-0">
                <h4 className="font-mono font-black text-xs uppercase tracking-widest text-black border-b-2 border-black pb-2">
                  NAVIGATION
                </h4>
                <ul className="flex flex-col gap-y-2 text-xs font-bold text-slate-700">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Robosprano" },
                    { href: "/events", label: "Robotics Events" },
                    { href: "/register", label: "Arena Registration" },
                    { href: "/team", label: "Organizing Team" },
                    { href: "/contact", label: "Contact Desk" },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="hover:text-black transition-colors flex items-center gap-1.5 group"
                      >
                        <span className="text-slate-400 group-hover:text-[#B45309] transition-colors text-[10px]">
                          ▸
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Event Venue & Contact */}
              <div className="space-y-3 sm:col-span-1 lg:col-span-4 xl:col-span-3 min-w-0">
                <h4 className="font-mono font-black text-xs uppercase tracking-widest text-black border-b-2 border-black pb-2">
                  VENUE &amp; DISPATCH
                </h4>
                <div className="space-y-3 text-xs text-slate-700 font-semibold">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 shrink-0 text-black mt-0.5" />
                    <p className="leading-snug">
                      {EVENT_DATA.location.campus}, {EVENT_DATA.location.venue},{" "}
                      {EVENT_DATA.location.city}, {EVENT_DATA.location.state} -{" "}
                      {EVENT_DATA.location.postalCode}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 shrink-0 text-black" />
                    <a
                      href={`mailto:${ENV.CONTACT_EMAIL}`}
                      className="font-mono text-xs text-black hover:text-[#0284C7] underline underline-offset-4 decoration-black hover:decoration-[#0284C7] transition-colors break-all font-bold"
                    >
                      {ENV.CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Col 4: Community & Socials */}
              <div className="space-y-3 sm:col-span-2 lg:col-span-12 xl:col-span-3 min-w-0">
                <h4 className="font-mono font-black text-xs uppercase tracking-widest text-black border-b-2 border-black pb-2">
                  COMMUNITY RADAR
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Connect with 500+ active student builders and alumni mentors
                  across our official channels.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={EVENT_DATA.organizer.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kilobots LinkedIn"
                    className="w-8 h-8 bg-white hover:bg-[#EBF5FF] border-2 border-black text-black shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={EVENT_DATA.organizer.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kilobots Instagram"
                    className="w-8 h-8 bg-white hover:bg-[#FEF2F2] border-2 border-black text-black shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={EVENT_DATA.organizer.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kilobots Twitter"
                    className="w-8 h-8 bg-white hover:bg-[#E0F2FE] border-2 border-black text-black shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: Hero Squad (Steve, Alex, Friendly Animals, Companion Creeper)      */}
          {/* ========================================================================= */}
          <div className="hidden 2xl:flex shrink-0 w-[190px] 3xl:w-[260px] self-end justify-end pointer-events-none select-none">
            <img
              src="/minecraft/minecraft_group_mob.webp"
              alt="Minecraft Survivor Squad"
              className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t-2 border-black mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-mono text-[11px] sm:text-xs font-bold text-slate-700">
          <div>
            © {new Date().getFullYear()} KILOBOTS GCEK. ALL RIGHTS RESERVED.
          </div>

          {/* Developers Credit with Portfolio Links */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-slate-800">
            <span className="text-slate-500">{"<dev>"}</span>
            <span className="font-bold text-slate-700">DEVELOPED BY</span>
            <a
              href="https://priyam.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#B45309] font-black hover:text-black transition-colors underline underline-offset-4 decoration-[#B45309]"
            >
              <span>GYANRANJAN</span>
              <ExternalLink className="w-3 h-3 text-[#B45309]" />
            </a>
            <span className="text-slate-500">&amp;</span>
            <a
              href="https://omprakashbehera.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0284C7] font-black hover:text-black transition-colors underline underline-offset-4 decoration-[#0284C7]"
            >
              <span>OMPRAKASH</span>
              <ExternalLink className="w-3 h-3 text-[#0284C7]" />
            </a>
            <span className="text-slate-500">{"</dev>"}</span>
          </div>

          <div className="flex items-center gap-1.5 justify-center">
            <span>ENGINEERED WITH</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
            <span>BY <Link href="https://codebreakersgcek.tech" className="text-black font-black underline">CODEBREAKERS COMMUNITY</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
