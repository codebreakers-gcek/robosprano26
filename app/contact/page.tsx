import React from "react";
import type { Metadata } from "next";
import { ContactContent } from "@/features/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Desk, Arena Support & Campus Location // ROBOSPRANO '26",
  description:
    "Official contact directory for ROBOSPRANO '26 at Government College of Engineering Kalahandi. Reach Chief Coordinator Nukesh Kumar Sahu, Kilobots student coordinators, and arena leads.",
  keywords: [
    "ROBOSPRANO contact",
    "ROBOSPRANO 2K26 contact number",
    "Kilobots GCEK contact",
    "Nukesh Kumar Sahu GCEK",
    "Government College of Engineering Kalahandi address",
    "GCEK Kalahandi phone number",
    "GCEK Bhawanipatna location",
    "robotics competition helpdesk Odisha",
    "ROBOSPRANO emergency contact",
    "ROBOSPRANO hospitality helpdesk",
    "robotics student coordinators contact",
    "Kilobots faculty convenor contact",
    "how to reach Government College of Engineering Kalahandi",
    "nearest railway station to GCEK Kalahandi",
    "Kesinga railway station to GCEK",
    "Bhawanipatna bus stand to GCEK",
    "nearest airport to Bhawanipatna",
    "Utkela airport Kalahandi",
    "Raipur to Bhawanipatna travel route",
    "Bhubaneswar to Bhawanipatna train route",
    "ROBOSPRANO email support",
    "Kilobots official email",
    "kilobots@gcekbpatna.ac.in",
    "robotics query helpline",
    "Robo Soccer contact",
    "Robo War contact",
    "Robo Sumo contact",
    "Death Race contact",
    "Line Follower contact",
    "ROBOSPRANO sponsorship enquiry",
    "robotics tournament partnership contact",
    "ROBOSPRANO Discord link",
    "ROBOSPRANO WhatsApp group",
    "Kilobots social media",
    "Kilobots Instagram handle",
    "Kilobots LinkedIn page",
    "Kilobots GitHub repo",
    "GCEK campus map",
    "Bandopala Bhawanipatna location",
    "Kalahandi Odisha pin code 766003",
    "robotics team accommodation contact",
    "robotics fest transport helpdesk",
    "Odisha robotics championship support team",
    "Bhawanipatna robotics fest inquiry",
    "robotics tournament contact",
    "student bot builder helpdesk Odisha",
    "bot registration help",
    "bot dimension inspection assistance",
    "emergency technical support GCEK",
    "Kilobots club Bhawanipatna",
    "tech fest contact Odisha 2026",
    "engineering college Kalahandi contact",
    "GCEK official website help",
    "ROBOSPRANO desk phone",
    "Kilobots support 2026",
  ],
  alternates: {
    canonical: "https://robosprano.codebreakersgcek.tech/contact",
  },
  openGraph: {
    title: "Contact & Support // ROBOSPRANO '26",
    description:
      "Have queries regarding bot participation, arena rules, lodging, or sponsorship? Contact the Kilobots GCEK team.",
    url: "https://robosprano.codebreakersgcek.tech/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "ROBOSPRANO '26 Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Operations Support & Inquiries // ROBOSPRANO '26",
    description:
      "Reach out to Kilobots GCEK Chief Coordinator Nukesh Kumar Sahu, student coordinators, and arena technical leads.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
