/**
 * AP exam dates for the next administration (May 2027), keyed by course slug
 * (DB Course.slug / CLASS_PLAN_COURSES.courseSlug).
 *
 * Source: College Board exam calendar, fetched 2026-10-20 (two weeks: May
 * 3–7 and May 10–14, 2027; third-party calendars agree). OWNER: re-verify
 * every row against https://apstudents.collegeboard.org/ap-exams-overview/exam-calendar
 * before April 2027 — the exam-week follow-up email switches on these dates.
 * Late testing (reported as May 17–21) is not modelled.
 *
 * Pure (no prisma), so emails, crons and client components can import it.
 */

export const AP_EXAM_YEAR = 2027

/** ISO date (YYYY-MM-DD) of each course's exam. Both sessions of a day map to the same date. */
export const AP_EXAM_DATES: Record<string, string> = {
  // Mon May 3
  'ap-human-geography': '2027-05-03',
  'ap-physics-c-mechanics': '2027-05-03',
  'ap-biology': '2027-05-03',
  // Tue May 4
  'ap-us-government': '2027-05-04',
  'ap-microeconomics': '2027-05-04',
  // Wed May 5
  'ap-english-literature': '2027-05-05',
  'ap-physics-1': '2027-05-05',
  'ap-physics-c-em': '2027-05-05',
  // Thu May 6
  'ap-physics-2': '2027-05-06',
  'ap-world-history': '2027-05-06',
  'ap-african-american-studies': '2027-05-06',
  'ap-chemistry': '2027-05-06',
  // Fri May 7
  'ap-us-history': '2027-05-07',
  'ap-macroeconomics': '2027-05-07',
  // Mon May 10
  'ap-calculus-ab': '2027-05-10',
  'ap-calculus-bc': '2027-05-10',
  // Tue May 11
  'ap-precalculus': '2027-05-11',
  'ap-statistics': '2027-05-11',
  // Wed May 12
  'ap-english-language': '2027-05-12',
  'ap-computer-science-a': '2027-05-12',
  // Thu May 13
  'ap-environmental-science': '2027-05-13',
  // Fri May 14
  'ap-computer-science-principles': '2027-05-14',
  'ap-psychology': '2027-05-14',
}

const DAY_MS = 86_400_000

/**
 * The exam moment used for countdowns: noon UTC on the exam date (8 am
 * Eastern, when the morning session starts). Null for a course without a
 * date (non-AP slugs, or a course missing from the table).
 */
export function apExamDate(courseSlug: string): Date | null {
  const iso = AP_EXAM_DATES[courseSlug]
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d, 12))
}

/**
 * Whole days from `now` until the course's exam, rounded up: the evening
 * before the exam reads as 1, the exam morning itself as 1 until noon UTC,
 * and anything after the exam is 0 or negative. Null without a date.
 */
export function daysUntilApExam(courseSlug: string, now: Date = new Date()): number | null {
  const exam = apExamDate(courseSlug)
  if (!exam) return null
  return Math.ceil((exam.getTime() - now.getTime()) / DAY_MS)
}
