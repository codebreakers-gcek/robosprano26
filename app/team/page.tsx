import React from "react";
import type { Metadata } from "next";
import { TeamContent } from "@/features/team/TeamContent";

export const metadata: Metadata = {
  title: "Organizing Team, Faculty Patrons & Arena Leads | ROBOSPRANO '26",
  description:
    "Meet the official patrons, core student council, faculty mentors, and technical arena leads behind ROBOSPRANO '26 at Government College of Engineering Kalahandi. Organized by Kilobots Robotics Society.",
  keywords: [
    "ROBOSPRANO 2026 team",
    "Kilobots GCEK team",
    "Kilobots organizing committee",
    "GCEK robotics organizers",
    "Government College of Engineering Kalahandi faculty",
    "GCEK Kalahandi student council",
    "Kilobots club Kalahandi",
    "ROBOSPRANO mentors",
    "ROBOSPRANO arena leads",
    "ROBOSPRANO convenors",
    "robotics coordinators Odisha",
    "student organizers Odisha",
    "Odisha student robotics team",
    "GCEK Bhawanipatna faculty convenor",
    "Kilobots lead developers",
    "robotics core team 2026",
    "robotics arena leads Kalahandi",
    "student coordinators GCEK",
    "Odisha robotics mentors",
    "Odisha robotics leadership",
    "robotics club leads Odisha",
    "bot builder leads Bhawanipatna",
    "ROBOSPRANO 26 organizing team",
    "ROBOSPRANO GCEK student leads",
    "Kilobots dev team",
    "Kilobots design team",
    "Kilobots PR team",
    "Kilobots event management",
    "ROBOSPRANO volunteer team",
    "ROBOSPRANO hospitality leads",
    "ROBOSPRANO logistics team",
    "ROBOSPRANO technical team",
    "student innovators Kalahandi",
    "Odisha engineering students",
    "Bhawanipatna robotics community",
    "GCEK alumni mentors",
    "tech fest organizers Odisha",
    "college tech fest team Odisha",
    "robotics coordinators",
    "combat robotics mentors Odisha",
    "embedded systems mentors Odisha",
    "IoT mentors Kalahandi",
    "robotics hardware mentors Odisha",
    "full stack developers GCEK",
    "Kilobots Robotics team",
    "Government Engineering College Kalahandi leadership",
    "Kalahandi student developers",
    "young developers Odisha",
    "Odisha robotics community leads",
    "robotics project mentors Odisha",
  ],
  alternates: {
    canonical: "https://robosprano.gcekbpatna.ac.in/team",
  },
  openGraph: {
    title: "Organizing Team // ROBOSPRANO '26",
    description:
      "Meet the student builders, arena leads, and mentors making ROBOSPRANO '26 possible at GCEK Kalahandi.",
    url: "https://robosprano.gcekbpatna.ac.in/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png", alt: "ROBOSPRANO '26 Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organizing Committee & Arena Leads // Kilobots GCEK",
    description: "Meet the student engineers, faculty convenors, and bot builders powering ROBOSPRANO '26.",
    images: ["/og-image.png"],
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
