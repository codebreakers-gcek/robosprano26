import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ROBOTICS_EVENTS } from "@/data/roboticsEvents";
import EventDetailClient from "./EventDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const slugs = ROBOTICS_EVENTS.map((event) => ({
    slug: event.slug,
  }));
  // Alias robo-race for death-race
  if (!slugs.some((s) => s.slug === "robo-race")) {
    slugs.push({ slug: "robo-race" });
  }
  return slugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = ROBOTICS_EVENTS.find(
    (e) => e.slug === slug || e.id === slug || (slug === "robo-race" && e.slug === "death-race")
  );

  if (!event) {
    return {
      title: "Event Not Found | Robosprano '26",
    };
  }

  return {
    title: `${event.title} | Robosprano '26`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Robosprano '26`,
      description: event.description,
      images: [event.image],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = ROBOTICS_EVENTS.find(
    (e) => e.slug === slug || e.id === slug || (slug === "robo-race" && e.slug === "death-race")
  );

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
