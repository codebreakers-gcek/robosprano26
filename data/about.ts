export interface AboutPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: "accent" | "secondary" | "muted" | "white";
}

export const ABOUT_DATA = {
  hero: {
    badge: "10TH EDITION MILESTONE // EST. 2016 - 2026",
    title: "ROBOSPRANO 2K26",
    edition: "THE 10TH EDITION",
    tagline:
      "A Decade of Innovation. A Legacy of Robotics. A Future Built by Innovators.",
    stats: [
      { label: "MILESTONE", value: "10TH", sub: "Anniversary Edition" },
      { label: "BATTLE ARENAS", value: "5", sub: "High-Voltage Tracks" },
      {
        label: "PRIZE BOUNTY",
        value: "₹91,000",
        sub: "Cash & Championship Trophies",
      },
      { label: "BUILDERS", value: "1,000+", sub: "Engineers & Bot Pilots" },
    ],
  },
  decadeLegacy: {
    title: "A DECADE OF ROBOTICS INNOVATION",
    subtitle: "TEN EDITIONS OF ENGINEERING EXCELLENCE & UNRELENTING PASSION",
    paragraphs: [
      "For ten incredible editions, ROBOSPRANO has been a celebration of engineering excellence, creativity, innovation, and the spirit of competition. It brings together passionate young innovators, aspiring engineers, robotics enthusiasts, and technology lovers on a common platform to transform bold ideas into real-world creations.",
      "Over the years, ROBOSPRANO has witnessed remarkable robotic designs, intense challenges, thrilling competitions, outstanding victories, and unforgettable moments that inspire the next generation of engineers. Every edition has pushed boundaries, encouraged teamwork, and turned imagination into innovation.",
      "Now, as we proudly step into our 10th Edition, ROBOSPRANO 2K26, we are ready to celebrate this milestone with greater challenges, stronger competition, fresh ideas, and an experience bigger and better than ever before.",
    ],
    highlights: [
      {
        title: "DECADE OF EXCELLENCE",
        desc: "10 editions of fostering high-caliber mechanical, electronics, and software craftsmanship.",
        accent: "#FFAA00",
      },
      {
        title: "UNCOMPROMISING ARENAS",
        desc: "Custom-engineered battlegrounds from extreme off-road dirt tracks to steel hazard combat rings.",
        accent: "#55FF55",
      },
      {
        title: "ROBOTICS COMMUNITY",
        desc: "Western Odisha's biggest convergence of collegiate robotics squads and bot enthusiasts.",
        accent: "#55FFFF",
      },
    ],
  },
  whatsNew: {
    tag: "FEATURED DEBUT",
    title: "WHAT'S NEW THIS YEAR? // ROBO WAR DEBUT",
    lead: "This year, get ready to experience robotics like never before! ROBOSPRANO 2K26 introduces ROBO WAR, an exciting new addition that brings strategy, mechanical engineering, control systems, and robotic combat into one electrifying arena.",
    body: "Prepare for intense robotic battles, powerful machines, smart strategies, and action-packed moments where precision, design, and innovation will determine who dominates the battlefield. Alongside this thrilling new event, participants can look forward to challenging competitions that test their technical knowledge, creativity, problem-solving abilities, and engineering skills.",
    featuredEventSlug: "robo-war",
    featuredEventName: "ROBO WAR COMBAT ARENA",
    specs: [
      "Weight Class: 8 kg Max (100g tolerance)",
      "Dimensions: Within 50 × 50 × 50 cm",
      "Fixed, Non-Moving Passive Wedges Only",
      "₹25,000 Cash Prize Pool",
    ],
  },
  callToAction: {
    headline: "NOW IT'S YOUR TURN TO BE PART OF THE LEGACY!",
    paragraphs: [
      "The arena is ready. The challenges are waiting. The next chapter of robotics history is yours to create!",
      "Bring your team, build your robot, sharpen your strategies, and prepare to compete with some of the brightest minds. Whether you are passionate about designing intelligent machines, solving complex engineering problems, experimenting with technology, or experiencing the thrill of competition, ROBOSPRANO 2K26 is your opportunity to learn, innovate, compete, and make your mark.",
      "Be part of a decade-long legacy. Turn your ideas into machines, your creativity into engineering, and your determination into victory.",
    ],
    motto: "KEEP HUSTLING. KEEP BUILDING.",
    subMotto:
      "ROBOSPRANO 2K26 | The 10th Edition. One Legacy. Countless Possibilities.",
  },
  pillars: [
    {
      number: "01",
      title: "COMBAT & MECHANICAL RIGOR",
      subtitle: "ENGINEER FOR IMPACT",
      description:
        "Push mechanical design to the absolute limit. Fabricate hardened chassis, high-torque drivetrains, and dynamic weapon mechanisms capable of withstanding extreme arena impacts.",
      badge: "FABRICATION",
      color: "accent",
    },
    {
      number: "02",
      title: "AUTONOMOUS & SENSOR CONTROL",
      subtitle: "MICROSECOND PRECISION",
      description:
        "Calibrate infrared arrays, PID algorithms, and motor controllers for seamless trajectory tracking in Line Follower and high-speed autonomous navigation.",
      badge: "ALGORITHMS",
      color: "secondary",
    },
    {
      number: "03",
      title: "TACTICAL SQUAD PILOTING",
      subtitle: "HIGH-STAKES MANEUVERS",
      description:
        "Master low-latency RF wireless communication, pilot agility, and pit-crew turnarounds in Robo Soccer, Death Race, and Sumo wrestling circles.",
      badge: "PILOTING",
      color: "muted",
    },
    {
      number: "04",
      title: "CHAMPIONSHIP TROPHIES & RECOGNITION",
      subtitle: "₹91,000 CASH POOL",
      description:
        "Compete before veteran engineering faculty, industry adjudicators, and hundreds of spectators for prestigious championship titles, cash prizes, and tech glory.",
      badge: "AWARDS",
      color: "white",
    },
  ] as AboutPillar[],
  institution: {
    name: "Government College of Engineering Kalahandi (GCEK)",
    location: "Bhawanipatna, Kalahandi, Odisha - 766002",
    description:
      "Established as a premier government technical institution in Western Odisha, GCEK is dedicated to nurturing world-class engineering talent, fostering scientific inquiry, and driving regional and national technological progress through hands-on technical societies.",
    portalUrl: "https://www.gcekbpatna.ac.in",
  },
  club: {
    name: "KILOBOTS",
    role: "The Official Robotics & Combat Engineering Society of GCEK",
    foundingYear: "2016",
    activeMembers: "80+ Bot Pilots & Fabricators",
    bio: "KILOBOTS is the vanguard robotics society at Government College of Engineering Kalahandi. Designing battle bots, autonomous rovers, and sensor-driven machines, KILOBOTS leads Western Odisha's competitive robotics arena culture.",
    portalUrl: "https://www.gcekbpatna.ac.in",
    amenities: [
      {
        title: "PIT STOP REPAIR ZONE",
        desc: "Soldering benches, DC power hookups, battery charging stations, and basic hardware repair support.",
      },
      {
        title: "OFFICIAL ARENA CALIBRATION",
        desc: "Dedicated practice runs and sensor calibration windows before official bracket rounds commence.",
      },
      {
        title: "CREW ACCOMMODATION & SAFETY",
        desc: "Secured bot impound area, mandatory safety goggles, and student hospitality support.",
      },
    ],
  },
};
