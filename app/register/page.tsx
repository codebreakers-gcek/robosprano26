import { Metadata } from "next";
import { ROBOTICS_EVENTS } from "@/data/roboticsEvents";
import { RegisterClient } from "./RegisterClient";

export const metadata: Metadata = {
  title: "Arena Registration | Robosprano '26 - Robotics Championship",
  description:
    "Direct registration portal for all official tournament arenas at Robosprano '26, GCEK Kalahandi. Secure your team slot for Robo War, DEATH RACE, Robo Sumo, Robo Soccer, and Line Follower Robot.",
  openGraph: {
    title: "Arena Registration | Robosprano '26",
    description:
      "Direct registration portal for all 5 official tournament arenas at Robosprano '26. Claim your share of the ₹91,000 bounty pool.",
    images: ["/minecraft/1.webp"],
  },
};

export default function RegisterPage() {
  return <RegisterClient events={ROBOTICS_EVENTS} />;
}
