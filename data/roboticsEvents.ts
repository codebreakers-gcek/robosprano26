export interface RoboticsEvent {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  badge: string;
  datetime: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  teamSize: string;
  fee: string;
  prizePool: string;
  prizes: string[];
  bountyBreakdown: {
    first: string;
    second: string;
    third: string;
  };
  image: string;
  description: string;
  botSpecifications?: string[];
  rules?: string[];
  contact?: Record<string, string>;
  gallery?: Array<{ url: string; caption: string }>;
  enrollLink?: string;
  closed?: boolean;
}

export const ROBOTICS_EVENTS: RoboticsEvent[] = [
  {
    id: "death-race",
    slug: "death-race",
    title: "Robo Race",
    category: "racing",
    tagline: "High-octane obstacle circuit, loops, ramps, and time attacks.",
    badge: "Robosprano",
    datetime: "2026-10-17T12:00:00+05:30",
    date: "Friday, October 17, 2026",
    time: "12:00 PM",
    venue: "GCEK Ground Floor",
    location: "GCEK Ground Floor",
    teamSize: "2–4 participants",
    fee: "Rs. 150 per head — access to all Robosprano events.",
    prizePool: "₹18,000",
    prizes: [
      "1st : ₹8,000 + Certificates",
      "2nd : ₹6,000 + Certificates",
      "3rd : ₹4,000 + Certificates",
    ],
    bountyBreakdown: {
      first: "₹8,000",
      second: "₹6,000",
      third: "₹4,000",
    },
    image: "/minecraft/1.webp",
    description:
      "Death Race is a Racing event, using Manual Robotics. Teams compete with each other by making a racing bot either wired or wireless within the specified dimensions that can operated manually and can travel through all turns of the track. It should be able to withstand any obstacle-big or small in the least of time, including hurdles, checkpoints and tasks within the Track Obstacles. For the competition will include Switch Bridge, speed breakers, marble pit, slippery path, rotating disc, curve ramp down etc. The bot that will complete the specified task in least time will be the winner.",
    botSpecifications: [
      "Maximum dimensions: 30 cm × 30 cm × 15 cm (L × B × H), with a tolerance of 1 cm.",
      "Maximum weight: 3 kg, with a tolerance of 100 g.",
      "Maximum operating voltage: 12V DC.",
      "Robots may be wired or wireless and must be manually controlled.",
      "For wired robots, the connecting cable must be sufficiently long and remain slack throughout the run without restricting movement.",
      "LEGO components are not permitted.",
      "Internal combustion (IC) engines are strictly prohibited.",
    ],
    rules: [
      "Each team must consist of 2–4 participants. Students from different institutions may form a team. All participants must carry valid institutional ID cards.",
      "All robots must pass weight, dimension, voltage, and safety inspections before competing.",
      "The objective is to navigate the track, clear designated checkpoints, and complete assigned challenges.",
      "Robots must be ready at the starting position before the start signal. False starts may result in a penalty or disqualification at the officials' discretion.",
      "Robots may be repositioned only with the permission of the officials. Any permitted repositioning may incur a time penalty.",
      "Practice runs on the official competition track are strictly prohibited.",
      "Robots must not damage the track, shed components, or create unsafe conditions. Violations may result in penalties or disqualification.",
      "Scoring will be based primarily on the total points earned by clearing checkpoints and completing designated tasks, followed by completion time. In the event of a tie in points, the robot completing the track in the shortest time will be declared the winner.",
      "Robots must be adequately protected against track hazards, including water and fire obstacles. Electrical components, batteries, and wiring must be securely mounted and suitably insulated to ensure safe operation. Robots failing to meet safety requirements may be disqualified.",
      "Teams must report promptly when called for their race. The judges' decisions regarding scoring, timing, penalties, and disqualification will be final. The organizing committee reserves the right to amend the rules when necessary.",
    ],
    contact: {
      "Yuvraj Ajay Taptam": "+91 9905273837",
      "Mukesh Kumar Sahu": "+91 9556192201",
      "Biswasmruti Sahoo": "+91 9938927439",
      "Madhusmita Sahoo": "+91 9338962004",
    },
    gallery: [
      {
        url: "/minecraft/1.webp",
        caption: "Death Race Championship Circuit Arena",
      },
    ],
    enrollLink: "https://forms.google.com",
    closed: false,
  },
  {
    id: "robo-war",
    slug: "robo-war",
    title: "Robo War",
    category: "combat",
    tagline: "Steel-on-steel arena destruction and weaponized combat.",
    badge: "Robosprano",
    datetime: "2026-10-17T10:00:00+05:30",
    date: "Friday, October 17, 2026",
    time: "10:00 AM",
    venue: "GCEK Combat Cage Arena",
    location: "GCEK Combat Cage Arena",
    teamSize: "2 to 5 members",
    fee: "Rs. 150 per head — access to all Robosprano events.",
    prizePool: "₹25,000",
    prizes: [
      "1st : ₹12,000 + Certificates",
      "2nd : ₹8,000 + Certificates",
      "3rd : ₹5,000 + Certificates",
    ],
    bountyBreakdown: {
      first: "₹12,000",
      second: "₹8,000",
      third: "₹5,000",
    },
    image: "/minecraft/wallpaper.webp",
    description:
      "Robo War is the flagship combat event of Robosprano. Teams design and fabricate high-powered armored robots to fight inside an enclosed bulletproof steel arena. Armed with spinning discs, pneumatic flippers, drum spinners, or devastating lifters, robots face off in brutal 1v1 bouts to achieve knockout or score decisive damage points.",
    botSpecifications: [
      "Maximum dimensions must be within 50 cm x 50 cm x 50 cm (5% tolerance allowed).",
      "Weight classification: Combat bot must not exceed 15 kg (with weapons).",
      "Wireless control only (2.4 GHz spread spectrum recommended with fail-safe).",
      "Weapon systems: Spinning blades, drums, lifters, flippers, and wedges are permitted.",
      "Forbidden weapons: Liquid combustibles, acid, explosives, nets, glue, EMPs, or tethered entanglement devices.",
      "Power source: Maximum electrical voltage cannot exceed 36V DC onboard battery.",
      "Robot must feature an external master cut-off switch visible and reachable by scrutineers.",
    ],
    rules: [
      "Each bout lasts for 3 minutes of active combat.",
      "A bot will be declared knocked out (KO) if it cannot exhibit controlled translational movement for 10 seconds.",
      "If both robots survive 3 minutes, the match is decided on points: Aggression, Damage, and Control.",
      "Any intentional attack on the arena walls or safety glass results in immediate disqualification.",
      "Team members must wear safety goggles and stand outside the designated blast zone at all times.",
      "Referee decisions on pinning and unsticking are final.",
    ],
    contact: {
      "Yuvraj Ajay Taptam": "+91 9905273837",
      "Mukesh Kumar Sahu": "+91 9556192201",
      "Biswasmruti Sahoo": "+91 9938927439",
    },
    gallery: [
      {
        url: "/minecraft/wallpaper.webp",
        caption: "Robo War Bulletproof Combat Arena",
      },
    ],
    enrollLink: "https://forms.google.com",
    closed: false,
  },
  {
    id: "robo-sumo",
    slug: "robo-sumo",
    title: "Robo Sumo",
    category: "dohyo",
    tagline: "Wrestle and push opponent bots off the elevated ring in high-torque duels.",
    badge: "Robosprano",
    datetime: "2026-10-17T14:00:00+05:30",
    date: "Friday, October 17, 2026",
    time: "02:00 PM",
    venue: "GCEK Indoor Arena",
    location: "GCEK Indoor Arena",
    teamSize: "2–4 participants",
    fee: "Rs. 150 per head — access to all Robosprano events.",
    prizePool: "₹18,000",
    prizes: [
      "1st : ₹8,000 + Certificates",
      "2nd : ₹6,000 + Certificates",
      "3rd : ₹4,000 + Certificates",
    ],
    bountyBreakdown: {
      first: "₹8,000",
      second: "₹6,000",
      third: "₹4,000",
    },
    image: "/minecraft/minecraft_2.webp",
    description:
      "Robo Sumo is an intense engineering ring battle modeled on traditional Japanese Sumo. Two robots battle on an elevated circular ring (Dohyo). The objective is to use brute pushing force, custom silicon tire traction, and ultra-low metal plow scoops to push the opponent completely off the ring without falling off oneself.",
    botSpecifications: [
      "Maximum dimensions: 30 cm × 30 cm × 15 cm (L × B × H), with a tolerance of 1 cm.",
      "Maximum weight: 5 kg, with a tolerance of 200 g.",
      "Maximum operating voltage: 12V DC.",
      "Robots may be wired or wireless and must be manually controlled.",
      "LEGO components are not permitted.",
      "Internal combustion (IC) engines are strictly prohibited.",
    ],
    rules: [
      "Each team must consist of 2–4 participants. Students from different institutions may form a team. All participants must carry valid institutional ID cards.",
      "All robots must pass weight, dimension, voltage, and safety inspections before competing.",
      "The objective is to push the opponent's robot beyond the arena boundary.",
      "A point will be awarded when 50% or more of the opponent robot's body extends beyond the arena boundary. The referee's decision regarding scoring will be final.",
      "For wired robots, the connecting cable must be sufficiently long and remain slack throughout the match without restricting movement.",
      "If neither robot scores within the allotted match time, the winner will be decided by the judges based on pushing effectiveness and control. In case of a tie, a sudden-death round will be conducted.",
      "No practice runs will be allowed on the competition arena.",
      "Participants must not touch, reposition, or interfere with either robot during a match unless instructed by the officials.",
      "Batteries must be securely mounted, and exposed electrical connections must be properly insulated. Damaged or leaking batteries are prohibited.",
      "A non-functional robot may forfeit the round. Deliberate damage, unsafe conduct, or rule violations may result in disqualification. Teams must report promptly when called. The judges' decisions will be final, and the organizing committee reserves the right to amend the rules when necessary.",
    ],
    contact: {
      "Mukesh Kumar Sahu": "+91 9556192201",
      "Madhusmita Sahoo": "+91 9338962004",
    },
    gallery: [
      {
        url: "/minecraft/minecraft_2.webp",
        caption: "Elevated Circular Dohyo Sumo Ring",
      },
    ],
    enrollLink: "https://forms.google.com",
    closed: false,
  },
  {
    id: "robo-soccer",
    slug: "robo-soccer",
    title: "Robo Soccer",
    category: "agility",
    tagline: "Fast-paced robotic soccer championship with high-mobility RC strikers.",
    badge: "Robosprano",
    datetime: "2026-10-18T10:00:00+05:30",
    date: "Saturday, October 18, 2026",
    time: "10:00 AM",
    venue: "GCEK Sports Pitch",
    location: "GCEK Sports Pitch",
    teamSize: "2–4 participants",
    fee: "Rs. 150 per head — access to all Robosprano events.",
    prizePool: "₹15,000",
    prizes: [
      "1st : ₹7,000 + Certificates",
      "2nd : ₹5,000 + Certificates",
      "3rd : ₹3,000 + Certificates",
    ],
    bountyBreakdown: {
      first: "₹7,000",
      second: "₹5,000",
      third: "₹3,000",
    },
    image: "/minecraft/minecraft_natural.webp",
    description:
      "Robo Soccer pits precision robotic soccer machines in head-to-head competition on a miniaturized turf pitch. Teams construct agile, omnidirectional or tank-drive robots equipped with custom kickers and dribbler mechanisms to out-maneuver opponents and score goals into the net.",
    botSpecifications: [
      "Maximum dimensions: 30 cm × 30 cm × 15 cm (L × B × H), with a tolerance of 1 cm.",
      "Maximum weight: 5 kg, with a tolerance of 200 g.",
      "Maximum operating voltage: 12V DC.",
      "Robots may be wired or wireless and must be manually controlled.",
      "For wired robots, the connecting cable must be sufficiently long and remain slack throughout the match without restricting movement.",
      "LEGO components are not permitted.",
      "Internal combustion (IC) engines are strictly prohibited.",
    ],
    rules: [
      "Each team must consist of 2–4 participants. Students from different institutions may form a team. All participants must carry valid institutional ID cards.",
      "All robots must pass weight, dimension, voltage, and safety inspections before competing.",
      "The objective is to score goals by maneuvering the ball into the opponent's goal while defending one's own goal.",
      "A goal will be counted only when the entire ball crosses the goal line.",
      "Robots must not intentionally hold, carry, trap, or enclose the ball in a manner that prevents fair gameplay.",
      "After each goal, play will restart from the designated starting position under the referee's instructions.",
      "Deliberate grabbing, overturning, damaging, or unsafe interference with an opponent's robot is prohibited and may result in a penalty or disqualification.",
      "Participants must not touch, reposition, or interfere with their robots during a match unless permitted by the referee.",
      "The team scoring the highest number of goals within the allotted match time will be declared the winner. In case of a tie, an additional round or another tie-breaking procedure specified by the organizers will be conducted.",
      "The referee may pause or restart a match due to technical issues, ball obstruction, or unsafe conditions. Teams must report promptly when called. The referee's decisions will be final, and the organizing committee reserves the right to amend the rules when necessary.",
    ],
    contact: {
      "Yuvraj Ajay Taptam": "+91 9905273837",
      "Biswasmruti Sahoo": "+91 9938927439",
    },
    gallery: [
      {
        url: "/minecraft/minecraft_natural.webp",
        caption: "Robo Soccer Turf Pitch Arena",
      },
    ],
    enrollLink: "https://forms.google.com",
    closed: false,
  },
  {
    id: "line-follower",
    slug: "line-follower",
    title: "Line Follower",
    category: "autonomous",
    tagline: "High-speed autonomous IR sensor path tracing through complex curves and grids.",
    badge: "Robosprano",
    datetime: "2026-10-18T13:00:00+05:30",
    date: "Saturday, October 18, 2026",
    time: "01:00 PM",
    venue: "GCEK Central Hall",
    location: "GCEK Central Hall",
    teamSize: "2 to 4 members",
    fee: "Rs. 150 per head — access to all Robosprano events.",
    prizePool: "₹15,000",
    prizes: [
      "1st : ₹7,000 + Certificates",
      "2nd : ₹5,000 + Certificates",
      "3rd : ₹3,000 + Certificates",
    ],
    bountyBreakdown: {
      first: "₹7,000",
      second: "₹5,000",
      third: "₹3,000",
    },
    image: "/minecraft/schedulebg.webp",
    description:
      "Line Follower tests the limits of embedded firmware, sensor filtering, and PID motion control. Autonomous micro-chassis robots navigate an intricate high-contrast black line track on a white surface, tackling 90-degree corners, loop crossovers, acute hairpins, and broken lines at blazing speeds.",
    botSpecifications: [
      "Max dimensions: 20 cm x 20 cm x 15 cm.",
      "Must be 100% autonomous with onboard microcontroller (Arduino, STM32, ESP32, etc.).",
      "Sensor array: Infrared (IR), photodiode, or optical line sensor bars.",
      "Power source: 12V DC maximum onboard battery.",
      "Pre-assembled educational toy kits are strictly disqualified.",
    ],
    rules: [
      "Each team gets 2 calibration laps and 3 competitive time-trial runs.",
      "The fastest single successful run without track de-railing determines podium rank.",
      "Manual touch penalties add 5 seconds to the total run time.",
    ],
    contact: {
      "Mukesh Kumar Sahu": "+91 9556192201",
      "Madhusmita Sahoo": "+91 9338962004",
    },
    gallery: [
      {
        url: "/minecraft/schedulebg.webp",
        caption: "Autonomous PID High-Speed Line Tracking Course",
      },
    ],
    enrollLink: "https://forms.google.com",
    closed: false,
  },
];

