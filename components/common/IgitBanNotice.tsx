"use client";

import React from "react";
import { Ban, ShieldAlert, AlertOctagon } from "lucide-react";

interface IgitBanNoticeProps {
  variant?: "banner" | "compact" | "sidebar";
  className?: string;
}

export function IgitBanNotice({
  variant = "banner",
  className = "",
}: IgitBanNoticeProps) {
  // Disabled: IGIT ban notice commented / hidden
  return null;

  if (variant === "compact") {
    return (
      <div
        className={`relative bg-[#FEF2F2] border-3 border-black p-3 sm:p-3.5 shadow-[3px_3px_0px_#000] ${className}`}
      >
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 bg-[#EF4444] border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
            <Ban className="w-4 h-4 text-white stroke-[2.8]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[10px] font-black uppercase text-white tracking-wider bg-[#DC2626] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
                RESTRICTION NOTICE
              </span>
            </div>
            <p className="font-sans text-xs font-bold text-neutral-900 mt-1 leading-snug">
              IGIT (Indira Gandhi Institute of Technology) Sarang is{" "}
              <span className="text-[#DC2626] underline decoration-[#DC2626] decoration-2 font-black">
                STRICTLY NOT ALLOWED
              </span>{" "}
              to participate.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div
        className={`relative bg-[#FEF2F2] border-3 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_#000] ${className}`}
      >
        {/* Top Mini Hazard Rail */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[repeating-linear-gradient(45deg,#EF4444,#EF4444_8px,#000000_8px,#000000_16px)]" />

        <div className="pt-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#EF4444] border border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
              <Ban className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
            <span className="font-mono text-xs text-[#DC2626] font-black uppercase tracking-wider">
              ELIGIBILITY BAN NOTICE
            </span>
          </div>

          <div className="font-sans text-xs text-neutral-900 leading-relaxed space-y-2">
            <p className="text-neutral-900 bg-white p-2.5 border-2 border-black font-bold shadow-[2px_2px_0px_#000]">
              ⛔ <span className="text-[#DC2626] font-extrabold">IGIT (Indira Gandhi Institute of Technology) Sarang</span> is{" "}
              <span className="underline uppercase text-[#DC2626] font-black">strictly barred</span> from participating in this event.
            </p>
            <p className="text-[11px] text-neutral-700 font-medium pt-0.5">
              Any registrations from IGIT Sarang students or combined teams will be rejected instantly during pit inspection.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      role="alert"
      aria-label="IGIT Sarang Participation Ban Notice"
      className={`relative bg-[#FEF2F2] border-4 border-black shadow-[6px_6px_0px_#000] overflow-hidden ${className}`}
    >
      {/* Top Danger Hazard Stripes */}
      <div className="h-2.5 w-full bg-[repeating-linear-gradient(45deg,#EF4444,#EF4444_12px,#000000_12px,#000000_24px)] border-b-2 border-black" />

      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Big Ban Icon Badge */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EF4444] border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] relative">
              <Ban className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.8]" />
            </div>
          </div>

          {/* Text Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase tracking-wider px-2.5 py-1 bg-[#EF4444] text-white border-2 border-black shadow-[2px_2px_0px_#000]">
                <AlertOctagon className="w-3.5 h-3.5 text-white" />
                TOURNAMENT BAN NOTICE
              </span>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-black bg-[#FEE2E2] px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                NON-ELIGIBLE INSTITUTION
              </span>
            </div>

            <h3 className="font-sans font-black text-base sm:text-xl lg:text-2xl text-neutral-950 uppercase tracking-tight leading-snug">
              IGIT (Indira Gandhi Institute of Technology) Sarang is{" "}
              <span className="bg-[#DC2626] text-white px-2.5 py-0.5 inline-block font-black tracking-normal border-2 border-black shadow-[2px_2px_0px_#000] mt-1 sm:mt-0">
                NOT ALLOWED TO PARTICIPATE
              </span>
            </h3>

            <p className="font-sans text-xs sm:text-sm text-neutral-800 mt-2.5 leading-relaxed font-normal">
              By official tournament directive, students, bot squads, and mixed rosters from{" "}
              <strong className="text-neutral-950 font-bold underline decoration-[#DC2626] decoration-2">
                IGIT (Indira Gandhi Institute of Technology) Sarang
              </strong>{" "}
              are strictly debarred from registering or competing in any tournament arenas, track sprints, or hackathons at ROBOSPRANO &apos;26. Any submitted applications or bot rosters from IGIT Sarang will be cancelled and disqualified immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Danger Strip Indicator */}
      <div className="bg-[#FEE2E2] px-4 sm:px-6 py-2.5 border-t-2 border-black flex items-center justify-between gap-3 flex-wrap">
        <span className="font-mono text-[11px] sm:text-xs text-[#DC2626] uppercase tracking-wide flex items-center gap-1.5 font-bold">
          <ShieldAlert className="w-4 h-4 text-[#DC2626] shrink-0" />
          DISQUALIFICATION ENFORCED AT PIT CHECK-IN &amp; ARENA SCRUTINEERING
        </span>
        <span className="font-mono text-[11px] text-neutral-700 font-semibold">
          STRICT JURY COMPLIANCE
        </span>
      </div>
    </div>
  );
}
