/**
 * A rough reading-time estimate for an interactive lesson from its part
 * count, for "Start <topic> · ~30 min" on the diagnostic results page. Pure,
 * so client code can use it without pulling in the lesson registry (the part
 * counts come from /api/lessons/length).
 *
 * A typical AP lesson part is ~7 sections with 5-6 checks: about 6 minutes
 * (4 undersold it; a student who overruns the estimate trusts the next one
 * less). Rounded to the nearest 5 so the number reads as the estimate it is,
 * and never under 10. 7 parts -> ~45 min.
 */
export const MINUTES_PER_LESSON_PART = 6

export function estimateLessonMinutes(partCount: number): number | null {
  if (!Number.isFinite(partCount) || partCount <= 0) return null
  // Rounded UP to the nearest 5, so the whole never reads shorter than its parts add up to.
  return Math.max(10, Math.ceil((partCount * MINUTES_PER_LESSON_PART) / 5) * 5)
}
