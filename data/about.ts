export interface AboutPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: "accent" | "secondary" | "muted" | "white";
}

export interface ClubMilestone {
  year: string;
  event: string;
  detail: string;
}

export const ABOUT_DATA = {
  festOverview: {
    title: "ABOUT ROBOSPRANO '26",
    tagline: "WHERE KALAHANDI'S MECHANICAL ENERGY MEETS STATE-SCALE ROBOTICS COMBAT",
    paragraphs: [
      "ROBOSPRANO '26 is the signature STATE-level annual robotics championship and combat tournament organized by KILOBOTS at Government College of Engineering Kalahandi (GCEK), Bhawanipatna, Odisha.",
      "Conceived as an intense proving ground for combat and autonomous robotics, the tournament provides ambitious student engineers an elite arena to battle custom combat bots across 5 high-voltage arenas.",
      "Over 3 electrifying days, participants experience Robo War, Death Race, Robo Sumo, Robo Soccer, and Line Follower, competing for ₹91,000 in cash bounties and state trophies.",
    ],
  },
  pillars: [
    {
      number: "01",
      title: "INNOVATION OPPORTUNITIES",
      subtitle: "BUILDING BEYOND THE CLASSROOM",
      description:
        "Tackle unvarnished problem statements formulated with industry leaders and government domain advisors. From decentralized logistics to local language AI engines, build projects that address genuine friction points in society.",
      badge: "PROTOTYPING",
      color: "accent",
    },
    {
      number: "02",
      title: "LEARNING OPPORTUNITIES",
      subtitle: "ACCELERATED COGNITIVE GROWTH",
      description:
        "Immerse yourself in real-time code reviews, architecture critiques, and direct masterclasses on containerization, neural models, cyber forensics, and edge computing led by senior engineers and alumni.",
      badge: "MENTORSHIP",
      color: "secondary",
    },
    {
      number: "03",
      title: "COLLABORATION ECOSYSTEM",
      subtitle: "SYNERGY ACROSS DISCIPLINES",
      description:
        "Kilobots believes that true breakthrough engineering is forged when mechanical fabricators, electronics designers, and bot pilots connect. Network with top robotics teams from across India.",
      badge: "COMMUNITY",
      color: "muted",
    },
    {
      number: "04",
      title: "PLACEMENT & INDUSTRY LAUNCHPAD",
      subtitle: "DIRECT RECRUITER VISIBILITY",
      description:
        "Top-performing teams and individual standouts receive direct referral opportunities, interview fast-tracks, and incubation mentorship for promising hardware and software ventures.",
      badge: "CAREERS",
      color: "white",
    },
  ] as AboutPillar[],
  institution: {
    name: "Government College of Engineering Kalahandi (GCEK)",
    location: "Bhawanipatna, Kalahandi, Odisha - 766002",
    description:
      "Established as a premier government technical institution in Western Odisha, GCEK is dedicated to nurturing technical talent, fostering scientific inquiry, and driving regional and STATE technological progress through robust engineering education.",
    portalUrl: "https://www.gcekbpatna.ac.in",
  },
  club: {
    name: "KILOBOTS",
    role: "The Premier Official Robotics & Combat Society of GCEK",
    foundingYear: "2021",
    activeMembers: "50+ Bot Pilots",
    bio: "Kilobots is the official robotics and combat engineering society at GCEK. Designing battle bots, autonomous rovers, and sensor-driven machines, Kilobots leads Western Odisha's competitive robotics arena culture.",
    officialWebsite: "https://www.gcekbpatna.ac.in",
    milestones: [
      {
        year: "2019",
        event: "CLUB FOUNDING",
        detail:
          "Established by passionate computer science students to cultivate competitive programming & development culture in GCEK.",
      },
      {
        year: "2021",
        event: "CAMPUS PLATFORM LAUNCH",
        detail:
          "Engineered and deployed the digital portal for college fests INSPRANO and UDAAN with 10,000+ hits.",
      },
      {
        year: "2023",
        event: "HACKVERSE'23 INCEPTION",
        detail:
          "Hosted the first edition of Hack Nova with 80+ participating teams and STATE recognition.",
      },
      {
        year: "2026",
        event: "HACKVERSE '26 STATE FEST",
        detail:
          "Expanding to a full-scale 3-day multi-track STATE tech symposium with ₹35K+ prize pool.",
      },
    ] as ClubMilestone[],
  },
};
