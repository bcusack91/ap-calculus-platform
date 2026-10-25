/**
 * Which courses the live-session "Present slides" launcher offers, best first.
 *
 * The launcher used to offer only the course most of the roster had taken a
 * diagnostic in, so a class whose students had not taken one (most SAT and AP
 * classes) got no launcher at all (owner, 2026-10-25). Now it offers, in order:
 * the courses the teacher assigned to the class, then courses its students
 * took diagnostics in (most takers first, as the class-plan discovery sorts
 * them), then every other course that has slides, so any deck can be presented
 * from any class. Only courses with stored decks are offered.
 */

export interface LauncherCourse {
  slug: string
  name: string
  deckCount: number
}

export function orderLauncherCourses(
  library: readonly LauncherCourse[],
  assigned: readonly string[],
  diagnostic: readonly (string | null | undefined)[],
): LauncherCourse[] {
  const bySlug = new Map(library.filter((c) => c.deckCount > 0).map((c) => [c.slug, c]))
  const ordered: LauncherCourse[] = []
  const seen = new Set<string>()
  const take = (slug: string | null | undefined) => {
    if (!slug || seen.has(slug)) return
    const course = bySlug.get(slug)
    if (!course) return
    seen.add(slug)
    ordered.push(course)
  }
  for (const slug of assigned) take(slug)
  for (const slug of diagnostic) take(slug)
  for (const course of [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name))) take(course.slug)
  return ordered
}

/** How many of the ordered courses belong to the class (assigned or diagnosed). */
export function classCourseCount(
  ordered: readonly LauncherCourse[],
  assigned: readonly string[],
  diagnostic: readonly (string | null | undefined)[],
): number {
  const own = new Set<string>([...assigned, ...diagnostic.filter((s): s is string => !!s)])
  return ordered.filter((c) => own.has(c.slug)).length
}
