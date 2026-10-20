import { ContactPerson, OfficialEmail, VenueInfo } from "@/types/contact";

export const OFFICIAL_EMAILS: OfficialEmail[] = [
  {
    id: "email-club",
    email: "kilobots@gcekbpatna.ac.in",
    label: "KILOBOTS CLUB & INSTITUTIONAL DESK",
    description:
      "Official institutional correspondence, administrative approvals, college permissions, and faculty inquiries.",
    badge: "INSTITUTIONAL",
    primary: true,
  },
  {
    id: "email-robosprano-hq",
    email: "kilobots@gcekbpatna.ac.in",
    label: "ROBOSPRANO '26 TOURNAMENT HEADQUARTERS",
    description:
      "Championship registrations, arena slotting queries, team eligibility, sponsorships, and tournament press.",
    badge: "FEST HEADQUARTERS",
    primary: true,
  },
  {
    id: "email-arena-tech",
    email: "kilobots@gcekbpatna.ac.in",
    label: "ARENA OPERATIONS & TECHNICAL DESK",
    description:
      "Bot specifications, voltage/weight compliance, cage safety inspection, track rules, and referee clarifications.",
    badge: "ARENA & SYSTEMS",
    primary: false,
  },
];

export const MANAGEMENT_TEAM: ContactPerson[] = [
  {
    id: "robosprano-chief",
    name: "Nukesh Kumar Sahu",
    role: "Chief Coordinator",
    category: "management",
    categoryLabel: "Chief Coordinator",
    department: "Kilobots Robotics Club, GCEK",
    phone: "+919556192291",
    displayPhone: "+91 95561 92291",
    email: "kilobots@gcekbpatna.ac.in",
    whatsapp: "919556192291",
    bio: "Chief Coordinator overseeing Robosprano '26 tournament operations, arena logistics, inter-college bot registrations, and festival scheduling.",
    avatarColor: "bg-neo-secondary",
    featured: true,
  },
  {
    id: "robosprano-coord-manish",
    name: "Manish Sahu",
    role: "Student Coordinator",
    category: "management",
    categoryLabel: "Student Coordinator",
    department: "Kilobots Robotics Club, GCEK",
    phone: "+919348927516",
    displayPhone: "+91 93489 27516",
    email: "kilobots@gcekbpatna.ac.in",
    whatsapp: "919348927516",
    bio: "Student coordinator managing participant check-ins, squad slots, match scheduling, and on-ground participant guidance.",
    avatarColor: "bg-neo-accent",
    featured: true,
  },
  {
    id: "robosprano-coord-saijyoti",
    name: "Saijyoti Prakash Sahoo",
    role: "Student Coordinator",
    category: "management",
    categoryLabel: "Student Coordinator",
    department: "Kilobots Robotics Club, GCEK",
    phone: "+918018576414",
    displayPhone: "+91 80185 76414",
    email: "kilobots@gcekbpatna.ac.in",
    whatsapp: "918018576414",
    bio: "Student coordinator facilitating venue arrangements, team hospitality, registration desk, and certificate distributions.",
    avatarColor: "bg-neo-muted",
  },
];

export const TECHNICAL_TEAM: ContactPerson[] = [
  {
    id: "robosprano-coord-shivam",
    name: "Shivam Dash",
    role: "Student Coordinator (Technical & Inspection)",
    category: "technical",
    categoryLabel: "Technical Coordinator",
    department: "Kilobots Robotics Club, GCEK",
    phone: "+918457581070",
    displayPhone: "+91 84575 81070",
    email: "kilobots@gcekbpatna.ac.in",
    whatsapp: "918457581070",
    bio: "Technical coordinator supervising bot specification inspections, operating voltage compliance, failsafe checks, and track readiness.",
    avatarColor: "bg-neo-accent",
    featured: true,
  },
  {
    id: "robosprano-coord-subrat",
    name: "Subrat Kumar Mahanta",
    role: "Student Coordinator (Arena & Rules)",
    category: "technical",
    categoryLabel: "Technical Coordinator",
    department: "Kilobots Robotics Club, GCEK",
    phone: "+917008585565",
    displayPhone: "+91 70085 85565",
    email: "kilobots@gcekbpatna.ac.in",
    whatsapp: "917008585565",
    bio: "Arena coordinator supervising combat cage safety, obstacle course inspection, match timing, and referee scoring systems.",
    avatarColor: "bg-neo-secondary",
  },
  {
    id: "web-lead-priyam",
    name: "Gyanranjan Priyam",
    role: "Systems & Web Platform Lead",
    category: "technical",
    categoryLabel: "Platform Lead",
    department: "KILOBOTS Society // GCEK",
    phone: "+918895220675",
    displayPhone: "+91 88952 20675",
    email: "kilobots@gcekbpatna.ac.in",
    whatsapp: "918895220675",
    github: "https://github.com/gyanranjan-priyam",
    linkedin: "https://www.linkedin.com/in/gyanranjan-priyam",
    bio: "Architect of the festival web portal, registration verification pipeline, and digital infrastructure.",
    avatarColor: "bg-neo-muted",
  },
];

export const ALL_CONTACTS: ContactPerson[] = [
  ...MANAGEMENT_TEAM,
  ...TECHNICAL_TEAM,
];

export const VENUE_DETAILS: VenueInfo = {
  institution: "Government College of Engineering Kalahandi (GCEK)",
  department: "Kilobots Robotics Club // GCEK Robotics Arena",
  campus: "Central Robotics Arena & Indoor Sports Complex",
  address: "Kandha Bando Pala, Po: Risigaon, Bhawanipatna",
  city: "Bhawanipatna",
  state: "Odisha",
  pincode: "766003",
  googleMapsUrl:
    "https://maps.google.com/?q=Government+College+of+Engineering+Kalahandi+Bhawanipatna",
  railwayStations: [
    "Bhawanipatna Railway Station (BWIP) — 7 km",
    "Kesinga Junction (KSNG) — 35 km (College shuttles available)",
  ],
  airports: [
    "Utkela Airport (Bhawanipatna) — 22 km",
    "Swami Vivekananda Airport (Raipur - RPR) — 240 km",
    "Biju Patnaik Airport (Bhubaneswar - BBI) — 420 km",
  ],
};

export const SOCIAL_CHANNELS = {
  discord: "https://discord.gg/robosprano2026",
  whatsappGroup: "https://chat.whatsapp.com/robosprano2026-announcements",
  github: "https://github.com/kilobots-gcek",
  linkedin: "https://linkedin.com/company/kilobots-gcek",
  instagram: "https://instagram.com/gcek.kilobots",
  robospranoInstagram: "https://instagram.com/gcek.robosprano",
  twitter: "https://twitter.com/kilobots_gcek",
};
