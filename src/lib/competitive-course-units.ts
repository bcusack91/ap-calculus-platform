/**
 * Competitive-page units for a course whose syllabus is fixed in code (AP
 * Calculus AB/BC and AP Precalculus, src/lib/course-includes.ts). Client-safe:
 * no Prisma.
 *
 * The BC competitive page shows the full 10-unit BC layout (AB Units 1-8 with
 * the BC-only topics merged into 6-8, Units 9-10, exam prep), exactly like the
 * course hub and the unit tests. AB-unit topics are shared Topic rows and draw
 * from the AB bank through the ordinary AP routing in competitive-utils. The
 * AP Precalculus page shows the three assessed CED units (exam prep appears
 * once it has lessons).
 */
import type { CourseUnitSection } from '@/lib/course-includes'

export interface LayoutUnit<T> {
  /** CED unit number, or null for exam prep. */
  unitNumber: number | null
  name: string
  /** Stable section key ('unit-6', 'exam-prep'); used as the React key. */
  slug: string
  topics: T[]
}

/**
 * Group topic rows by a fixed layout, in syllabus order. A layout topic with no
 * row is skipped; a section left with no topics is dropped.
 */
export function groupTopicsByLayout<T extends { slug: string }>(layout: CourseUnitSection[], rows: T[]): LayoutUnit<T>[] {
  const bySlug = new Map(rows.map((r) => [r.slug, r]))
  return layout
    .map((s) => ({
      unitNumber: s.unitNumber,
      name: s.name,
      slug: s.key,
      topics: s.topics.map((t) => bySlug.get(t)).filter((t): t is T => t !== undefined),
    }))
    .filter((u) => u.topics.length > 0)
}

/**
 * Heading of a unit card. Category names of the calculus courses already start
 * with "Unit N:", and exam prep has no number, so the "Unit {n}: " prefix is
 * added only when the name does not carry it (fixes "Unit 1: Unit 6 (BC): …").
 */
export function unitHeading(unit: { unitNumber: number | null; name: string }): string {
  const name = unit.name.trim()
  if (unit.unitNumber == null || /^unit\s+\d+/i.test(name)) return name
  return `Unit ${unit.unitNumber}: ${name}`
}
