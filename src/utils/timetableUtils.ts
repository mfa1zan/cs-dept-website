// Utility helpers extracted from timetable.astro
export const DAY_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function to12(time24: string | null | undefined): string {
  if (!time24) return '';
  const [hStr, mStr] = time24.split(':');
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  if (Number.isNaN(h) || Number.isNaN(m)) return time24; // fallback
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

export function abbreviateProgram(program: string): string {
  if (!program) return '';
  const words = program.split(/\s+/).filter(Boolean);
  const abbr = words
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  if (abbr.length <= 1 && words[0]) return words[0].slice(0, 3).toUpperCase();
  return abbr;
}

export function shortenSection(section: string): string {
  return section || '';
}

export interface FlatRecordLike {
  degree?: string | null;
  program: string;
  section?: string | null;
}

export function buildClassShort(r: FlatRecordLike): string {
  const parts: string[] = [];
  if (r.degree) parts.push(r.degree.toUpperCase());
  const progAbbr = abbreviateProgram(r.program);
  if (progAbbr) parts.push(progAbbr);
  const sectionFull = shortenSection(r.section || '');
  if (sectionFull) parts.push(sectionFull);
  return parts.join(' ');
}
