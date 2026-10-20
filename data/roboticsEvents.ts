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
  rulebookLink?: string;
  closed?: boolean;
}

export const ROBOSPRANO_COORDINATORS = {
  "Nukesh Kumar Sahu (Chief Coordinator)": "+91 9556192291",
  "Manish Sahu (Student Coordinator)": "+91 9348927516",
  "Shivam Dash (Student Coordinator)": "+91 8457581070",
  "Subrat Kumar Mahanta (Student Coordinator)": "+91 7008585565",
  "Saijyoti Prakash Sahoo (Student Coordinator)": "+91 8018576414",
};

export const ROBOTICS_EVENTS: RoboticsEvent[] = [
  {
    id: "death-race",
    slug: "death-race",
    title: "Robo Race",
    category: "racing",
    tagline: "High-octane obstacle circuit, loops, ramps, and time attacks.",
    badge: "Robosprano",
    datetime: "2026-11-05T10:00:00+05:30",
    date: "Thursday, November 05, 2026",
    time: "10:00 AM",
    venue: "GCEK Ground Floor",
    location: "GCEK Ground Floor",
    teamSize: "2–4 participants",
    fee: "Rs. 350 per Team",
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
    image: "/minecraft/deathrace.webp",
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
    contact: ROBOSPRANO_COORDINATORS,
    gallery: [
      {
        url: "/minecraft/deathrace.webp",
        caption: "Robo Race Championship Circuit Arena",
      },
    ],
    enrollLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdkIHqbEYyUMPzQfGYL34Z2-QM1YXeMYu_p4cspVoGHBgitYg/viewform",
    rulebookLink:
      "https://drive.google.com/file/d/1_DNeLOhgv_WeAL_lRfmZ9-gHQLQEfEc9/view?usp=drive_link",
    closed: false,
  },
  {
    id: "robo-war",
    slug: "robo-war",
    title: "Robo War – Wedge",
    category: "combat",
    tagline:
      "High-torque wedge battle of power, precision, and arena domination.",
    badge: "Robosprano",
    datetime: "2026-11-05T13:00:00+05:30",
    date: "Thursday, November 05, 2026",
    time: "01:00 PM",
    venue: "GCEK Combat Cage Arena",
    location: "GCEK Combat Cage Arena",
    teamSize: "2–5 participants",
    fee: "Rs. 500 per team",
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
    image: "/minecraft/robowar.webp",
    description:
      "Witness the thrilling battle of power, precision, and strategy in Robo War – Wedge, where two teams compete head-to-head with their custom-built combat robots. Teams manually control their bots using a wireless method, aiming to outmaneuver their opponents and dominate the arena with their wedge-shaped designs. Each robot must demonstrate strength, stability, and effective tactics to gain an advantage over the opponent. The team that dominates the battle and meets the competition’s winning criteria will emerge victorious. Get ready for an action-packed robotic showdown!",
    botSpecifications: [
      "The robot must not weigh more than 8 kg, including the battery and all onboard components. A weight tolerance of up to 100 g is allowed.",
      "The robot must fit within 40 cm × 40 cm × 40 cm (Length × Width × Height).",
      "Only wedge-type robots with fixed, non-moving wedges are allowed. Active weapons or weapon systems are strictly prohibited.",
      "All robots must be operated wirelessly. Wired control systems are not allowed.",
      "The maximum permitted battery voltage is 16.8 V, using a 4-cell battery configuration.",
      "All batteries and electrical components must be securely fitted inside the robot, with exposed connections properly insulated.",
      "Every robot must have a failsafe system that automatically stops the drive motors if the control signal is lost.",
      "Internal combustion engines, pyrotechnics, and hazardous materials are strictly prohibited.",
    ],
    rules: [
      "Each team must consist of 2–5 participants. Students from different institutions may form a team. All participants must carry valid institutional ID cards.",
      "All robots must undergo and pass weight, electrical, and safety inspections before participation. Organizers may conduct re-inspection at any stage.",
      "The objective is to immobilize the opponent or dominate the match through pushing effectiveness and control using the permitted wedge and drive system.",
      "Spinning weapons, powered lifters, flippers, hammers, and all other active weapon mechanisms are strictly prohibited.",
      "All matches will be conducted inside the designated enclosed arena cage. Participants must remain outside the safety area while robots are operational.",
      "Robots may be activated only on the referee’s signal. Participants must not touch or retrieve robots during a match unless instructed by officials.",
      "A robot may be declared immobilized if it cannot demonstrate controlled movement for the period specified by the referee.",
      "If neither robot is immobilized within the allotted time, judges will decide the winner based on pushing effectiveness, control, aggression, and overall performance.",
      "Deliberate interference with an opponent’s wireless control, intentional damage to the arena, or unsafe conduct may result in penalties or disqualification.",
      "Any modification made after inspection must comply with the specifications and may require reinspection before the robot is allowed to compete.",
      "The referee may stop a match in case of a safety risk, technical issue, or arena malfunction. Robots may be retrieved only after the referee confirms that it is safe to do so.",
      "Teams must report at the designated time. Failure to report may result in forfeiture.",
      "The referee and judges’ decisions regarding scoring, penalties, match stoppages, and disqualification will be final.",
      "The organizers reserve the right to amend the rules when necessary for safety or fair competition.",
    ],
    contact: ROBOSPRANO_COORDINATORS,
    gallery: [
      {
        url: "/minecraft/robowar.webp",
        caption: "Robo War Bulletproof Combat Arena Cage",
      },
    ],
    enrollLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeoMUx4pcd93lkdYzxZfUvQ7IMjOYapdyvRS7ULAqjEr4y6Hg/viewform",
    rulebookLink:
      "https://drive.google.com/file/d/1sWoyAjd07I1xehwY7btkiMenfIwPJLOQ/view?usp=drive_link",
    closed: false,
  },
  {
    id: "robo-sumo",
    slug: "robo-sumo",
    title: "Robo Sumo",
    category: "dohyo",
    tagline:
      "Wrestle and push opponent bots off the elevated ring in high-torque duels.",
    badge: "Robosprano",
    datetime: "2026-11-05T15:30:00+05:30",
    date: "Thursday, November 05, 2026",
    time: "03:30 PM",
    venue: "GCEK Indoor Arena",
    location: "GCEK Indoor Arena",
    teamSize: "2–4 participants",
    fee: "Rs. 350 per team.",
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
    image: "/minecraft/robosumo.webp",
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
    contact: ROBOSPRANO_COORDINATORS,
    gallery: [
      {
        url: "/minecraft/robosumo.webp",
        caption: "Elevated Circular Dohyo Sumo Ring",
      },
    ],
    enrollLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd-I1CxfOhXPzzwK44QOUlgqiVTy_unUe9GlDM6NFPwXsIF4A/viewform?pli=1",
    rulebookLink:
      "https://drive.google.com/file/d/10Kqmce2RujmoarFWeAzi6ozfG8sUxs3I/view?usp=drive_link",
    closed: false,
  },
  {
    id: "robo-soccer",
    slug: "robo-soccer",
    title: "Robo Soccer",
    category: "agility",
    tagline:
      "Fast-paced robotic soccer championship with high-mobility RC strikers.",
    badge: "Robosprano",
    datetime: "2026-11-06T10:00:00+05:30",
    date: "Friday, November 06, 2026",
    time: "10:00 AM",
    venue: "GCEK Sports Pitch",
    location: "GCEK Sports Pitch",
    teamSize: "2–4 participants",
    fee: "Rs. 300 per team",
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
    image: "/minecraft/robosoccer.webp",
    description:
      "Witness the excitement of Robo Soccer, where two teams battle head-to-head to score goals using customized soccer bots. Controlled manually through wired or wireless methods, these bots compete in an intense showdown of strategy, speed, precision, and strength. Teams must skillfully maneuver their robots, defend their goalposts, and attack their opponents to secure victory. The team that scores the highest number of goals within the given time wins the match. Get ready for an action-packed competition filled with thrilling moments, fierce rivalries, and robotic football excitement!",
    botSpecifications: [
      "Maximum dimensions: 30 cm × 30 cm × 15 cm (L × B × H), with a tolerance of 1 cm.",
      "Maximum weight: 5 kg, with a tolerance of 200 g.",
      "Maximum operating voltage: 12 V DC.",
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
      "The referee may pause or restart a match due to technical issues, ball obstruction, or unsafe conditions. Teams must report promptly when called. The referee's decisions will be final.",
      "The organizers reserve the right to amend the rules when necessary for safety or fair competition.",
    ],
    contact: ROBOSPRANO_COORDINATORS,
    gallery: [
      {
        url: "/minecraft/robosoccer.webp",
        caption: "Robo Soccer Turf Pitch Arena",
      },
    ],
    enrollLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeXhrM9VhJhrhvzbbdNShBgG5V2M5z5x4l-BzuVCCYx6FjkDA/viewform",
    rulebookLink:
      "https://drive.google.com/file/d/1YNEOn_6B_fKO2H0EzC7BiUadAnvNiQv2/view?usp=drive_link",
    closed: false,
  },
  {
    id: "line-follower",
    slug: "line-follower",
    title: "Line Follower Robot",
    category: "autonomous",
    tagline: "Autonomous high-speed IR sensor black-line trajectory tracking.",
    badge: "Robosprano",
    datetime: "2026-11-06T14:00:00+05:30",
    date: "Friday, November 06, 2026",
    time: "02:00 PM",
    venue: "GCEK Central Hall",
    location: "GCEK Central Hall",
    teamSize: "2–4 participants",
    fee: "Rs. 350 per team",
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
    image: "/minecraft/robolinefollow.webp",
    description:
      "The line follower robot is a mobile machine that can detect and follow the line drawn on the floor. Generally, the path is predefined and can be either visible, like a black line on a white surface with a high-contrast colour, or invisible, like a magnetic field. Therefore, this kind of robot should sense the line with its infrared ray (IR) sensors installed under the robot. After that, the data is transmitted to the processor by specific transition buses. Hence, the processor decides the proper commands and sends them to the driver, and thus the path is followed by the line follower robot.",
    botSpecifications: [
      "The robot must be fully autonomous, with no remote control or manual steering during the run.",
      "Maximum dimensions: 25 cm × 25 cm × 20 cm (L × B × H).",
      "Maximum supply voltage: 12 V.",
      "Readymade and imported ready-to-use line follower bots are strictly prohibited. Teams must build their own robots.",
      "Custom-designed PCBs and commercially available individual electronic components are permitted.",
      "The robot must follow a black line on a white background, with a line width of less than 30 mm.",
      "The robot must function reliably under normal venue lighting conditions.",
    ],
    rules: [
      "Each team must consist of 2–4 participants.",
      "Each team will receive 3 minutes immediately before its run for coding adjustments.",
      "Each team is allowed one official run. The competition will follow a points-based scoring system.",
      "All robots must pass technical inspection before participating.",
      "Touching or manually assisting the robot during a run, modifying the track, or using external assistance is prohibited.",
      "The team with the highest total score will be declared the winner.",
      "In case of a tie, the team that completes more checkpoints will rank higher, followed by the faster completion time.",
      "If no robot completes the track, rankings will be based on total points, followed by the farthest verified progress along the track and checkpoints completed.",
      "Any violation of the rules may result in penalties or disqualification. The judges’ decisions regarding scoring and disputes will be final.",
      "The organizers reserve the right to amend the rules when necessary for safety or fair competition.",
    ],
    contact: ROBOSPRANO_COORDINATORS,
    gallery: [
      {
        url: "/minecraft/robolinefollow.webp",
        caption: "Autonomous PID High-Speed Line Tracking Course",
      },
    ],
    enrollLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdVrMKQXV8W8hvFEynuVwxHeibnFQwIu4-8lwHU9sz7k0K2PQ/viewform",
    rulebookLink:
      "https://drive.google.com/file/d/1t708JdtaIpauDPU89-3fahkwPTH42jn5/view?usp=drive_link",
    closed: false,
  },
];
