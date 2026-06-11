export interface DayHours {
  day: string;
  hours: string;
  open: boolean;
  /** 24h opening hour, used by isOpenNow() */
  openHour: number;
  /** 24h closing hour, used by isOpenNow() */
  closeHour: number;
}

// Source of truth: the Fresha booking page (bookings are Fresha-only).
export const hours: DayHours[] = [
  { day: "Monday", hours: "11:00 AM – 6:00 PM", open: true, openHour: 11, closeHour: 18 },
  { day: "Tuesday", hours: "11:00 AM – 6:00 PM", open: true, openHour: 11, closeHour: 18 },
  { day: "Wednesday", hours: "11:00 AM – 6:00 PM", open: true, openHour: 11, closeHour: 18 },
  { day: "Thursday", hours: "11:00 AM – 8:00 PM", open: true, openHour: 11, closeHour: 20 },
  { day: "Friday", hours: "11:00 AM – 8:00 PM", open: true, openHour: 11, closeHour: 20 },
  { day: "Saturday", hours: "11:00 AM – 4:00 PM", open: true, openHour: 11, closeHour: 16 },
  { day: "Sunday", hours: "11:00 AM – 4:00 PM", open: true, openHour: 11, closeHour: 16 },
];

const TIME_ZONE = "America/Toronto";

const dayNameToIndex: Record<string, number> = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

function formatHour(hour24: number): string {
  if (hour24 === 0) return "12:00 AM";
  if (hour24 === 12) return "12:00 PM";
  return hour24 > 12 ? `${hour24 - 12}:00 PM` : `${hour24}:00 AM`;
}

export function isOpenNow(): { open: boolean; message: string } {
  // Resolve the spa's local day and hour so visitors in any
  // timezone see Whitby's actual open/closed status.
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hourValue = parts.find((part) => part.type === "hour")?.value;
  const dayIndex = weekday !== undefined ? dayNameToIndex[weekday] : undefined;
  const today = dayIndex !== undefined ? hours[dayIndex] : undefined;

  if (!today || !today.open) {
    return { open: false, message: "Closed today" };
  }

  const hour = hourValue !== undefined ? Number.parseInt(hourValue, 10) : Number.NaN;
  if (Number.isNaN(hour)) {
    return { open: false, message: `Opens at ${formatHour(today.openHour)}` };
  }

  if (hour >= today.openHour && hour < today.closeHour) {
    return { open: true, message: `Open until ${formatHour(today.closeHour)}` };
  }

  if (hour < today.openHour) {
    return { open: false, message: `Opens at ${formatHour(today.openHour)}` };
  }

  return { open: false, message: "Closed for today" };
}
