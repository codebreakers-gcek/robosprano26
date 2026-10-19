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
  return ROBOTICS_EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = ROBOTICS_EVENTS.find((e) => e.slug === slug || e.id === slug);

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
  const event = ROBOTICS_EVENTS.find((e) => e.slug === slug || e.id === slug);

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
