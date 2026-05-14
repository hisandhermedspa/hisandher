export interface DayHours {
  day: string;
  hours: string;
  open: boolean;
}

export const hours: DayHours[] = [
  { day: "Monday", hours: "10:00 AM – 8:00 PM", open: true },
  { day: "Tuesday", hours: "10:00 AM – 8:00 PM", open: true },
  { day: "Wednesday", hours: "10:00 AM – 8:00 PM", open: true },
  { day: "Thursday", hours: "10:00 AM – 8:00 PM", open: true },
  { day: "Friday", hours: "10:00 AM – 8:00 PM", open: true },
  { day: "Saturday", hours: "11:00 AM – 6:00 PM", open: true },
  { day: "Sunday", hours: "11:00 AM – 4:00 PM", open: true },
];

export function isOpenNow(): { open: boolean; message: string } {
  const now = new Date();
  const dayIndex = now.getDay();
  const dayMap: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
  const mappedIndex = dayMap[dayIndex];
  const today = mappedIndex !== undefined ? hours[mappedIndex] : undefined;

  if (!today || !today.open) {
    return { open: false, message: "Closed today" };
  }

  const hour = now.getHours();
  const isWeekday = dayIndex >= 1 && dayIndex <= 5;
  const openHour = isWeekday ? 10 : 11;
  const closeHour = dayIndex === 0 ? 16 : dayIndex === 6 ? 18 : 20;

  if (hour >= openHour && hour < closeHour) {
    return { open: true, message: `Open until ${closeHour > 12 ? closeHour - 12 : closeHour}:00 PM` };
  }

  if (hour < openHour) {
    return { open: false, message: `Opens at ${openHour}:00 AM` };
  }

  return { open: false, message: "Closed for today" };
}
