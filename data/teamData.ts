import { OfficialIncharge, TeamMember } from "@/types/team";

export const officialIncharges: OfficialIncharge[] = [
  {
    id: "principal",
    name: "Prof.(Dr) Subhransu Sekhar Dash",
    designation: "Principal & Patron-in-Chief",
    role: "Government College of Engineering Kalahandi",
    image: "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1786821219/773725407_17976388644114016_5470375353953459513_n_hjyuvt.jpg",
    quote: "Empowering young technical minds to innovate, lead, and shape the digital future of our nation through technology.",
    department: "Administration, GCEK",
  },
  {
    id: "dsw",
    name: "Prof.(Dr) Chitaranjan Dash",
    designation: "Dean Student Welfare (DSW)",
    role: "Government College of Engineering Kalahandi",
    image: "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1786979088/WhatsApp_Image_2026-08-15_at_10.11.03_PM_yox4ea.jpg",
    quote: "Fostering an ecosystem of holistic student growth, technical excellence, and vibrant campus leadership.",
    department: "Student Welfare, GCEK",
  },
  {
    id: "pic",
    name: "Prof. Mihira Kumar Nath",
    designation: "Professor In-Charge (PIC)",
    role: "Assistant Professor, Dept. of EE",
    image: "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1792462317/mihir_ux4y1j.jpg", // Fallback / Cloudinary asset
    quote: "Igniting the spark of innovation and guiding students to build technology that shapes tomorrow.",
    department: "Department of EE, GCEK",
  },
];

export const coreLeads: TeamMember[] = [];

export const clubLeads: TeamMember[] = [
  {
    image:
      "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1792462338/yash_xjyltu.jpg",
    title: "Nukesh Kumar Sahu",
    subtitle: "Cheif Coordinator",
    handle: "@nukesh",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 9556192291",
  },
   {
    image:
      "/team/manish.png",
    title: "Manish Sahu",
    subtitle: "Student Coordinator",
    handle: "@manish",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 93489 27516",
  },
  {
    image:
      "/team/shivam.png",
    title: "Shivam Dash",
    subtitle: "Student Coordinator",
    handle: "@shivam",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 84575810700",
  },

  {
    image:
      "/team/subrat.jpeg",
    title: "Subrat Kumar Mahanta",
    subtitle: "Student Coordinator",
    handle: "@subrat",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 7008585565",
  },
    {
    image:
      "/team/sai.jpeg",
    title: "Saijyoti Prakash Sahoo",
    subtitle: "Student Coordinator",
    handle: "@saijyoti",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 8018576414",
  },
    {
    image:
      "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1786779293/IMG_0230_2_vmnw90.jpg",
    title: "Gyanranjan Priyam",
    subtitle: "Technical Lead",
    handle: "@gyanranjanpriyam",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 88952 20675",
  },
    {
    image:
      "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1786816638/WhatsApp_Image_2026-08-15_at_11.25.32_PM_vqijmi.jpg",
    title: "Omprakash Behera",
    subtitle: "Technical Co-Lead",
    handle: "@omprakash",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    phone: "+91 88952 20675",
  },
];

const items = [...coreLeads, ...clubLeads];
export default items;
