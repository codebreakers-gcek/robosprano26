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
    title: "Death Race",
    category: "racing",
    tagline: "High-octane obstacle circuit, loops, ramps, and time attacks.",
    badge: "Robosprano",
    datetime: "2026-10-17T12:00:00+05:30",
    date: "Friday, October 17, 2026",
    time: "12:00 PM",
    venue: "GCEK Ground Floor",
    location: "GCEK Ground Floor",
    teamSize: "2 to 5 members",
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
      "The maximum dimension of the robot can be 30 cm x 30 cm x 15 cm (lxbxh). 5% tolerance will be considered.",
      "The robot may be wired or wireless.",
      "The length of the wire for wired bots should be long enough to cover the whole track and wire should remain slack during the complete run.",
      "Maximum weight must not exceed 5 kg.",
      "The participants will be provided with 220 Volts, 50Hz standard AC supply. Participants will have to themselves arrange for adaptor or batteries.",
      "The electric voltage anywhere in the machine should not be more than 12V DC at any point of time.",
      "The machine must not be made from Lego parts or any ready-made kit. If we find such a machine it will be disqualified.",
    ],
    rules: [
      "This is racing event so fastest and most balanced robot will win.",
      "Robot should be as per the given specifications.",
      "Each team can have maximum 2 to 5 members.",
      "Each member of the team must contain the identity card of his/her respected institute.",
      "The robot should not damage the arena.",
      "Wires should remain slack during the course of the run. Pulling the wire to aid the robot in traversing may lead to disqualification.",
      "If any of the robots starts off before start up call, the counter would be restarted and the machines will get a second chance. If repeated again then team will be disqualified.",
      "Your robot must be ready when call is made for your team.",
      "Team members will be allowed only three times to touch or reset their robots position during the run. However, this will lead to a time penalty and timer will not stop during this course of action.",
      "The robot will be judged on basis of (in priority) - Number of checkpoints cleared, Time to complete the track.",
      "No test practice will be allowed on the arena.",
      "The robot must not leave behind any of its parts during the run; else it will result disqualification.",
      "Unethical behavior could lead to disqualification. Co-ordination committee has all the rights to take final decisions for any matter during the event.",
      "Judge's decision will be considered final.",
      "Certificates of Participation will be given to all the teams that will participate in the event, but not to the teams which get disqualified due to disobeying any of the competition rules.",
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
    teamSize: "2 to 4 members",
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
      "Max dimensions: 20 cm x 20 cm with unlimited height.",
      "Maximum weight: Bot weight must not exceed 3.0 kg.",
      "Wheels/Traction: High-grip silicone or rubber tires allowed. No suction cups or sticky adhesive substances.",
      "Power source: Maximum onboard DC battery voltage of 18V.",
      "Sharp edge scoop wedges permitted, but no rotating blades, liquids, or projectile weapons.",
    ],
    rules: [
      "Matches are best 2 out of 3 rounds. Each round is a maximum of 3 minutes.",
      "A bot loses the round if any part of its body touches the floor outside the Dohyo perimeter.",
      "If both bots fall simultaneously, the round is restarted.",
      "Autonomous and manual RC variants are permitted under designated brackets.",
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
    image: "/minecraft/minecraft_natural.webp",
    description:
      "Robo Soccer pits precision robotic soccer machines in head-to-head competition on a miniaturized turf pitch. Teams construct agile, omnidirectional or tank-drive robots equipped with custom kickers and dribbler mechanisms to out-maneuver opponents and score goals into the net.",
    botSpecifications: [
      "Maximum dimensions: 25 cm x 25 cm x 25 cm.",
      "Maximum weight: 3 kg.",
      "Kicker mechanism: Pneumatic, mechanical spring, or solenoid kicker allowed.",
      "Ball control: The robot must not hold or encapsulate more than 20% of the ball diameter.",
      "Max voltage: 12V DC onboard battery.",
    ],
    rules: [
      "Matches consist of two 5-minute halves with a 2-minute half-time break.",
      "The team with the most goals scored at full time wins the match.",
      "Direct collisions without targeting the ball will be penalized as fouls.",
      "Penalty kicks will decide tie-breakers in knockout elimination stages.",
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

