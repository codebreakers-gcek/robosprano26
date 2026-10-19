import { EVENT_DATA } from "@/data/event";
import { EventInfo } from "@/types/event";

/**
 * Event Data Service - Static Frontend
 */
export const eventService = {
  async getEventInfo(): Promise<EventInfo> {
    return EVENT_DATA;
  },
};
