import type { ExamYield, Prisma } from '@prisma/client'

/**
 * Exam-yield filtering for flashcard study queues.
 *
 * MCAT cards carry an `examYield` tier: ULTRA_HIGH, HIGH, MEDIUM or LOW.
 * ULTRA_HIGH and HIGH are always served. MEDIUM (on by default) and LOW (off
 * by default) are per-student opt-ins on the User row. Every other card on
 * the site is unlabeled (NULL) and must always be served — that rule is the
 * whole reason this module exists as one place rather than twenty inline
 * conditions.
 *
 * Pure: no prisma import, so the predicate shape is unit-testable.
 */

export type YieldPrefs = { includeMedium: boolean; includeLow: boolean }

/** The tiers a student sees regardless of preference. */
export const ALWAYS_SERVED: ExamYield[] = ['ULTRA_HIGH', 'HIGH']

/** Site default: medium on, low off. */
export const DEFAULT_YIELD_PREFS: YieldPrefs = { includeMedium: true, includeLow: false }

/**
 * Kill switch. `FLASHCARD_HIDE_LOW_YIELD=0` serves every card again without
 * touching data, so a bad label batch is an env flip away from harmless.
 */
export function lowYieldHiddenByDefault(): boolean {
  return process.env.FLASHCARD_HIDE_LOW_YIELD !== '0'
}

export function servedYields(prefs: YieldPrefs): ExamYield[] {
  return [...ALWAYS_SERVED, ...(prefs.includeMedium ? ['MEDIUM' as const] : []), ...(prefs.includeLow ? ['LOW' as const] : [])]
}

/** Where-clause fragment for `Flashcard` queries. `{}` means "no filtering". */
export function servedFlashcardWhere(prefs: YieldPrefs): Prisma.FlashcardWhereInput {
  if (!lowYieldHiddenByDefault()) return {}
  const tiers = servedYields(prefs)
  if (tiers.length === 4) return {}
  // NULL is "never labeled", which is every non-MCAT card. SQL comparisons
  // drop NULL rows, so `examYield: { notIn: [...] }` would silently hide
  // ~8,600 unlabeled cards. The null case has to be spelled out.
  return { OR: [{ examYield: null }, { examYield: { in: tiers } }] }
}

/** The same rule, one relation hop up, for `FlashcardProgress` queries. */
export function servedProgressWhere(prefs: YieldPrefs): Prisma.FlashcardProgressWhereInput {
  const where = servedFlashcardWhere(prefs)
  return Object.keys(where).length === 0 ? {} : { flashcard: where }
}

/** ULTRA_HIGH first; unlabeled cards sit with MEDIUM; LOW last. */
export function yieldRank(examYield: ExamYield | null | undefined): number {
  switch (examYield) {
    case 'ULTRA_HIGH':
      return 0
    case 'HIGH':
      return 1
    case 'LOW':
      return 3
    default:
      return 2
  }
}

/**
 * Total order for a topic's cards: by yield, then creation time, then id. The
 * tiebreaks matter — the unlock drip schedules cards by array index, and the
 * query feeding it had no ORDER BY, so the order was whatever Postgres felt
 * like that day.
 */
export function compareByYield<T extends { examYield: ExamYield | null; createdAt?: Date; id: string }>(
  a: T,
  b: T,
): number {
  // A row without createdAt (older callers, test fixtures) sorts as oldest.
  const time = (d?: Date) => (d instanceof Date ? d.getTime() : 0)
  return (
    yieldRank(a.examYield) - yieldRank(b.examYield) ||
    time(a.createdAt) - time(b.createdAt) ||
    a.id.localeCompare(b.id)
  )
}
