// Utilities extracted from room-finder.astro for reuse & testability
import { DAY_ORDER, to12 } from './timetableUtils';

export const TEACHING_START = 8 * 60; // 08:00 in minutes
export const TEACHING_END = 18 * 60 + 30; // 18:30 in minutes

export interface RawEntry {
  start_time: string | null;
  end_time: string | null;
  course_title: string | null;
  teacher_name: string | null;
}
export type RawData = Record<string, Record<string, RawEntry[]>>;
export interface Slot {
  start: string;
  end: string;
  course: string;
  teacher: string;
}

export function parseHM(t: string | null | undefined): number | null {
  if (!t) return null;
  const [h, m] = t.split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

export function formatDelta(mins: number | null): string {
  if (mins == null) return '';
  if (mins <= 0) return 'Now';
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const parts: string[] = [];
  if (h) parts.push(h + 'h');
  if (m) parts.push(m + 'm');
  return parts.join(' ');
}

export function roomSlotsForDay(
  rawData: RawData,
  day: string,
  room: string
): Slot[] {
  const entries = rawData?.[day]?.[room] || [];
  return entries
    .filter((e) => e && (e.start_time || e.end_time))
    .map((e) => ({
      start: e.start_time || '08:00',
      end: e.end_time || e.start_time || '18:30',
      course: e.course_title || 'TBA',
      teacher: e.teacher_name || '',
    }))
    .sort((a, b) => (parseHM(a.start) || 0) - (parseHM(b.start) || 0));
}

export interface OccupancyStatus {
  free: boolean;
  nextStart: number | null;
  current?: Slot;
  currentEnds?: number | null;
  immediateContinuation?: boolean;
  nextAfterCurrentStart?: number | null;
}

export function isRoomFreeAt(
  rawData: RawData,
  day: string,
  room: string,
  minutes: number
): OccupancyStatus {
  const slots = roomSlotsForDay(rawData, day, room);
  let nextStart: number | null = null;
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];
    const start = parseHM(s.start) || 0;
    const end = parseHM(s.end) || start + 50;
    if (minutes >= start && minutes < end) {
      let immediateContinuation = false;
      let nextAfterCurrentStart: number | null = null;
      if (i + 1 < slots.length) {
        const nextStartCandidate = parseHM(slots[i + 1].start) || 0;
        if (nextStartCandidate === end) immediateContinuation = true;
        nextAfterCurrentStart = nextStartCandidate;
      }
      return {
        free: false,
        nextStart: null,
        current: s,
        currentEnds: end,
        immediateContinuation,
        nextAfterCurrentStart,
      };
    }
    if (start > minutes) {
      nextStart = start;
      break;
    }
  }
  return { free: true, nextStart };
}

export function computeSoonFree(
  list: { room: string; status: OccupancyStatus }[],
  minutes: number,
  soonThreshold: number
) {
  return list.filter((l) => {
    if (l.status.free) return false;
    if (l.status.currentEnds == null) return false;
    const minutesLeft = l.status.currentEnds - minutes;
    if (minutesLeft < 0 || minutesLeft > soonThreshold) return false;
    if (l.status.immediateContinuation) return false;
    return true;
  });
}

export function getWeekdayOrMonday(): string {
  const now = new Date();
  const idx = now.getDay();
  const mapped = DAY_ORDER[(idx + 6) % 7];
  return ['Saturday', 'Sunday'].includes(mapped) ? 'Monday' : mapped;
}

export { DAY_ORDER, to12 };
