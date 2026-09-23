import type { ExamYield, Prisma } from '@prisma/client'

/**
 * Exam-yield filtering for flashcard study queues.
 *
 * MCAT cards carry an `examYield` label (HIGH / MEDIUM / LOW). Study queues
 * serve HIGH and MEDIUM by default; a student opts into LOW through
 * `User.flashcardIncludeLowYield`. Every other card on the site is unlabeled
 * (NULL) and must always be served — that rule is the whole reason this module
 * exists as one place rather than twenty inline conditions.
 *
 * Pure: no prisma import, so the predicate shape is unit-testable.
 */

export const SERVED_YIELDS: ExamYield[] = ['HIGH', 'MEDIUM']

/**
 * Kill switch. `FLASHCARD_HIDE_LOW_YIELD=0` serves every card again without
 * touching data, so a bad label batch is an env flip away from harmless.
 */
export function lowYieldHiddenByDefault(): boolean {
  return process.env.FLASHCARD_HIDE_LOW_YIELD !== '0'
}

/** Where-clause fragment for `Flashcard` queries. `{}` means "no filtering". */
export function servedFlashcardWhere(includeLow: boolean): Prisma.FlashcardWhereInput {
  if (includeLow || !lowYieldHiddenByDefault()) return {}
  // NULL is "never labeled", which is every non-MCAT card. SQL comparisons
  // drop NULL rows, so `examYield: { not: 'LOW' }` would silently hide ~8,600
  // unlabeled cards. The null case has to be spelled out.
  return { OR: [{ examYield: null }, { examYield: { in: SERVED_YIELDS } }] }
}

/** The same rule, one relation hop up, for `FlashcardProgress` queries. */
export function servedProgressWhere(includeLow: boolean): Prisma.FlashcardProgressWhereInput {
  const where = servedFlashcardWhere(includeLow)
  return Object.keys(where).length === 0 ? {} : { flashcard: where }
}

/** HIGH first; unlabeled cards sit with MEDIUM; LOW last. */
export function yieldRank(examYield: ExamYield | null | undefined): number {
  if (examYield === 'HIGH') return 0
  if (examYield === 'LOW') return 2
  return 1
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
