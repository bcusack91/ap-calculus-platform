/**
 * Content store (#10) — read editable content from the `ContentItem` table with
 * a static fallback to the existing `src/data/*` source.
 *
 * This is the seam that lets content move from code into the database
 * incrementally and reversibly: a consumer asks for items of a given
 * (type, courseSlug); if the DB has PUBLISHED rows it uses them, otherwise it
 * returns the static fallback unchanged. Nothing breaks if the DB is empty, a
 * row is missing, or the DB is briefly unavailable.
 */

import { prisma } from '@/lib/prisma'

export const CONTENT_TYPES = {
  studyPlanTemplate: 'study-plan-template',
  frq: 'frq',
  practiceExam: 'practice-exam',
  unitTestUnits: 'unit-test-units',
} as const

/** Stable key for the single full-length practice-exam config per course. */
export const PRACTICE_EXAM_KEY = 'exam'
/** Stable key for a course's unit-test unit definitions. */
export const UNIT_TEST_UNITS_KEY = 'units'

/**
 * A course's unit-test unit definitions (editable metadata) from the DB, or the
 * static fallback. Only the unit DEFINITIONS are stored — the question pool stays
 * referenced from exit-quizzes, so nothing is duplicated. Never throws.
 */
export async function getUnitTestUnits<T>(courseSlug: string, staticUnits: T[]): Promise<T[]> {
  try {
    const row = await prisma.contentItem.findUnique({
      where: {
        type_courseSlug_key: {
          type: CONTENT_TYPES.unitTestUnits,
          courseSlug,
          key: UNIT_TEST_UNITS_KEY,
        },
      },
      select: { payload: true, status: true },
    })
    if (row && row.status === 'PUBLISHED') return row.payload as T[]
  } catch (err) {
    console.error(`[content-store] unit-test units read failed for ${courseSlug}; using static:`, err)
  }
  return staticUnits
}

/**
 * All published items of a (type, courseSlug), as their typed payloads.
 * Falls back to `staticFallback` when there are no rows or on any error.
 */
export async function getContentItems<T>(
  type: string,
  courseSlug: string,
  staticFallback: T[],
): Promise<T[]> {
  try {
    const rows = await prisma.contentItem.findMany({
      where: { type, courseSlug, status: 'PUBLISHED' },
      orderBy: { createdAt: 'asc' },
      select: { payload: true },
    })
    if (rows.length === 0) return staticFallback
    return rows.map((r) => r.payload as T)
  } catch (err) {
    console.error(`[content-store] read failed for ${type}/${courseSlug}; using static fallback:`, err)
    return staticFallback
  }
}

/**
 * The full-length practice-exam config for a course, from the DB (one row,
 * key="exam") or the static fallback. Whole-config storage, so no per-question
 * IDs are needed. Never throws — falls back to the static config on any failure.
 */
export async function getPracticeExamConfig<T>(courseSlug: string, staticConfig: T): Promise<T> {
  const [config] = await getContentItems(CONTENT_TYPES.practiceExam, courseSlug, [staticConfig])
  return config ?? staticConfig
}

/**
 * A single published item by key, or the matching static fallback entry.
 * `keyOf` extracts the stable key from a fallback item so we can resolve it
 * without a DB hit when the DB has no row.
 */
export async function getContentItem<T>(
  type: string,
  courseSlug: string,
  key: string,
  staticFallback: T[],
  keyOf: (item: T) => string,
): Promise<T | undefined> {
  try {
    const row = await prisma.contentItem.findUnique({
      where: { type_courseSlug_key: { type, courseSlug, key } },
      select: { payload: true, status: true },
    })
    if (row && row.status === 'PUBLISHED') return row.payload as T
  } catch (err) {
    console.error(`[content-store] read failed for ${type}/${courseSlug}/${key}; using static fallback:`, err)
  }
  return staticFallback.find((item) => keyOf(item) === key)
}
