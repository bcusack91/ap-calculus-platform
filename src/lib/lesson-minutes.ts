/**
 * A rough reading-time estimate for an interactive lesson from its part
 * count, for "Start <topic> · ~30 min" on the diagnostic results page. Pure,
 * so client code can use it without pulling in the lesson registry (the part
 * counts come from /api/lessons/length).
 *
 * A typical AP lesson part is ~7 sections with checks: about 4 minutes.
 * Rounded to the nearest 5 so the number reads as the estimate it is, and
 * never under 10.
 */
export const MINUTES_PER_LESSON_PART = 4

export function estimateLessonMinutes(partCount: number): number | null {
  if (!Number.isFinite(partCount) || partCount <= 0) return null
  return Math.max(10, Math.round((partCount * MINUTES_PER_LESSON_PART) / 5) * 5)
}
