import { EventInfo } from "@/types/event";

export const EVENT_DATA: EventInfo = {
  name: "ROBOSPRANO '26",
  edition: "Robotics Championship 2026",
  tagline: "STEEL • SPEED • DESTRUCTION • GLORY",
  shortDescription:
    "The premier annual robotics championship and combat tournament organized by Kilobots GCEK. 5 high-voltage arenas: Robo War, Death Race, Robo Sumo, Robo Soccer, and Line Follower with ₹91,000 cash bounties.",
  fullDescription:
    "ROBOSPRANO '26 brings together the sharpest robotics engineers, circuit builders, and combat bot pilots across Odisha. Organized by Kilobots—the premier robotics club of Government College of Engineering Kalahandi (GCEK)—this 2-day robotics festival features heavy metal arena combats, obstacle time attacks, autonomous sensor runs, and direct industry jury evaluations.",
  startDate: "2026-11-05T09:00:00+05:30",
  endDate: "2026-11-06T18:00:00+05:30",
  displayDates: "NOVEMBER 05 - 06, 2026",
  location: {
    campus: "Combat Arena Ground",
    venue: "Government College of Engineering Kalahandi",
    city: "Bhawanipatna",
    state: "Odisha",
    postalCode: "766002",
    googleMapsUrl:
      "https://maps.google.com/?q=Government+College+of+Engineering+Kalahandi",
  },
  registrationDeadline: "NOVEMBER 01, 2026 // 11:59 PM IST",
  totalPrizePool: "₹91K",
  organizer: {
    name: "Kilobots GCEK",
    club: "Kilobots - The Premier Robotics Club of GCEK",
    institution: "Government College of Engineering Kalahandi",
    establishedYear: 2021,
    membersCount: "50+",
    website: "https://www.gcekbpatna.ac.in",
    socials: {
      github: "https://github.com/kilobots-gcek",
      linkedin: "https://www.linkedin.com/company/kilobots-gcek",
      instagram: "https://www.instagram.com/gcek.kilobots",
      twitter: "https://twitter.com/kilobots_gcek",
    },
  },
  stats: [
    { label: "PRIZE POOL", value: "₹91K+", change: "CASH REWARDS" },
    { label: "COMBAT ARENAS", value: "5 ARENAS", change: "OFFICIAL" },
    { label: "PODIUM WINNERS", value: "15 SQUADS", change: "GUARANTEED" },
    { label: "COMBAT ROBOTICS", value: "50+ BOTS", change: "COMPETITORS" },
  ],
  tracks: [
    {
      id: "hackathons",
      code: "TRK-01",
      name: "HACK NOVA (HACKATHON)",
      tagline: "24-Hour Software & Hardware Sprint",
      description:
        "Engineers and builders collaborate under pressure to solve real-world industry and societal problem statements.",
      highlights: [
        "Flagship 24-hour sprint",
        "1-on-1 industry mentorship",
        "Direct fast-track interview perks",
      ],
      icon: "Terminal",
      flagship: true,
    },
    {
      id: "cp",
      code: "TRK-02",
      name: "9-LOCK CP CONTEST",
      tagline: "High-Speed Algorithmic Showdown",
      description:
        "Fast-paced competitive programming arena testing time complexity, data structures, and edge-case execution.",
      highlights: [
        "Dynamic difficulty scaling",
        "Live projected leaderboard",
        "Codeforces / CodeChef rated standards",
      ],
      icon: "Cpu",
    },
    {
      id: "ai-symposium",
      code: "TRK-03",
      name: "NEURAL SUMMIT",
      tagline: "Generative AI & Computer Vision Expo",
      description:
        "Demonstrate custom fine-tuned LLMs, neural networks, agents, and autonomous computer vision prototypes.",
      highlights: [
        "Hands-on AI workshops",
        "Model evaluation shootout",
        "Compute sponsor credit rewards",
      ],
      icon: "Sparkles",
    },
    {
      id: "open-source",
      code: "TRK-04",
      name: "OPEN FORGE",
      tagline: "Decentralized & Community Tech",
      description:
        "Showcase open-source dev tools, systems software, accessibility innovations, and public digital goods.",
      highlights: [
        "Open-source repo auditing",
        "Community voting mechanics",
        "Best documentation trophy",
      ],
      icon: "GitBranch",
    },
  ],
  prizes: [
    {
      position: "FIRST PLACE // CHAMPION",
      amount: "₹20K",
      perks: [
        "Cash Prize & Certificate",
        "Direct Tech Interview Referrals",
        "Featured on Kilobots Official Wall of Fame",
      ],
      color: "secondary",
    },
    {
      position: "RUNNER UP // 2ND PLACE",
      amount: "₹10K",
      perks: [
        "Cash Prize & Certificates",
        "Mentorship Sprint with Industry Leaders",
        "Robotics Hardware Credit Vouchers",
      ],
      color: "accent",
    },
    {
      position: "THIRD PLACE // 2ND RUNNER UP",
      amount: "₹5K",
      perks: [
        "Cash Prize & Certificates",
        "Robotics Tooling Subscriptions",
        "Exclusive Kilobots Merch Kit",
      ],
      color: "muted",
    },
  ],
  winners: [
    {
      id: "first-prize",
      title: "FIRST PRIZE // JOINT WINNERS",
      rank: "RANK 01",
      award: "OVERWORLD CHAMPIONS",
      prize: "₹20,000 CASH POOL + TROPHY & MERCH",
      badge: "DIAMOND & GOLD",
      colorTheme: "gold",
      teams: [
        {
          teamName: "Team FPS",
          institution: "Government College of Engineering Kalahandi (GCE Kalahandi)",
        },
        {
          teamName: "Team BRUTEFORCE",
          institution: "GITAM Bhubaneswar",
        },
      ],
    },
    {
      id: "second-prize",
      title: "SECOND PRIZE // 1ST RUNNER UP",
      rank: "RANK 02",
      award: "ELITE RUNNER UP",
      prize: "₹10,000 CASH + CERTIFICATE & PERKS",
      badge: "SILVER / EMERALD",
      colorTheme: "silver",
      teams: [
        {
          teamName: "CODE WARRIORS",
          institution: "Government College of Engineering Kalahandi (GCE Kalahandi)",
        },
      ],
    },
    {
      id: "third-prize",
      title: "THIRD PRIZE // 2ND RUNNER UP",
      rank: "RANK 03",
      award: "TECH APPRENTICE",
      prize: "₹5,000 CASH + CERTIFICATE & PERKS",
      badge: "BRONZE / REDSTONE",
      colorTheme: "bronze",
      teams: [
        {
          teamName: "Team ACEBits",
          institution: "Government College of Engineering Keonjhar (GCE Keonjhar)",
        },
      ],
    },
    {
      id: "best-female-led",
      title: "SPECIAL AWARD // BEST FEMALE-LED TEAM",
      rank: "SPECIAL",
      award: "WOMEN IN TECH EXCELLENCE",
      prize: "SPECIAL TROPHY, CASH & EXCLUSIVE PERKS",
      badge: "AMETHYST SPECIAL",
      colorTheme: "special",
      teams: [
        {
          teamName: "code_crash",
          institution: "Government College of Engineering Kalahandi (GCE Kalahandi)",
        },
      ],
    },
  ],
  registrationExtended: {
    enabled: true,
    previousDeadline: "26th Sept, 2026",
    newDeadline: "28th Sept, 2026",
    deadlineISO: "2026-09-28T14:00:00+05:30",
    heading: "Registration Deadline Extended!",
    subheading: "Missed the deadline? We've got you covered! Due to overwhelming demand, registration is open until 28th September 2026, 2:00 PM.",
  },
};
