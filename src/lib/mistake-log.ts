/**
 * The mistake log, computed from the answer log (QuestionActivity rows that
 * carry a question key), never stored — so it can't drift from what the
 * student actually did.
 *
 * Rules (owner-approved plan, Oct 2026):
 *  - A miss is a wrong answer, a skipped question, or ANY flagged answer
 *    (flagging means "I wasn't sure").
 *  - Each miss resets the item's streak and becomes its origin (the attempt
 *    the log links back to).
 *  - Each later correct, unflagged answer — from any source: exit quiz,
 *    diagnostic, unit test, full-length or a mistake re-quiz — adds one.
 *  - Two in a row retire the item. Until then it's active.
 */

export const CORRECT_TO_RETIRE = 2

export interface AnswerLogRow {
  questionKey: string
  correct: number
  /** null = skipped; a typed answer counts as answered. */
  chosenIndex: number | null
  chosenText?: string | null
  flagged: boolean
  answeredAt: Date
  attemptKind: string | null
  attemptId: string | null
  itemIndex: number | null
  topicSlug: string
  discipline: string
  source: string
}

export interface MistakeItem {
  questionKey: string
  /** Where the latest miss happened — the log links back to it, and re-quizzes rebuild the item from it. */
  origin: { attemptKind: string; attemptId: string; itemIndex: number; source: string }
  topicSlug: string
  discipline: string
  lastMissedAt: Date
  /** Why it's in the log: the latest miss was wrong, skipped, or a flagged answer. */
  reason: 'wrong' | 'skipped' | 'flagged'
  /** How many misses in total. */
  misses: number
  /** Correct, unflagged answers since the latest miss (retires at CORRECT_TO_RETIRE). */
  correctSince: number
  retired: boolean
}

function missReason(r: AnswerLogRow): MistakeItem['reason'] | null {
  if (r.flagged) return 'flagged'
  const answered = r.chosenIndex != null || !!r.chosenText
  if (!answered) return 'skipped'
  return r.correct > 0 ? null : 'wrong'
}

/**
 * Every question the student has ever missed, with its retirement state.
 * Rows without a full origin (attempt kind, id, position) can still COUNT
 * toward retiring an item but can never BE an origin, since there would be
 * nothing to link to or rebuild.
 */
export function computeMistakes(rows: readonly AnswerLogRow[]): MistakeItem[] {
  const byKey = new Map<string, AnswerLogRow[]>()
  for (const r of rows) {
    if (!r.questionKey) continue
    const list = byKey.get(r.questionKey)
    if (list) list.push(r)
    else byKey.set(r.questionKey, [r])
  }
  const out: MistakeItem[] = []
  for (const [questionKey, list] of byKey) {
    list.sort((a, b) => a.answeredAt.getTime() - b.answeredAt.getTime())
    // Widened explicitly: TypeScript would otherwise narrow it to null inside the loop.
    let item = null as MistakeItem | null
    for (const r of list) {
      const reason = missReason(r)
      if (reason) {
        // A re-quiz miss resets the streak but keeps the original origin: the
        // re-quiz itself isn't a stored attempt that can be rebuilt.
        const hasOrigin = !!(r.attemptKind && r.attemptKind !== 'mistake-review' && r.attemptId && r.itemIndex != null)
        if (hasOrigin) {
          item = {
            questionKey,
            origin: { attemptKind: r.attemptKind!, attemptId: r.attemptId!, itemIndex: r.itemIndex!, source: r.source },
            topicSlug: r.topicSlug || item?.topicSlug || '',
            discipline: r.discipline || item?.discipline || '',
            lastMissedAt: r.answeredAt,
            reason,
            misses: (item?.misses ?? 0) + 1,
            correctSince: 0,
            retired: false,
          }
        } else if (item) {
          // A miss we can't link to still resets the streak.
          item = { ...item, lastMissedAt: r.answeredAt, reason, misses: item.misses + 1, correctSince: 0, retired: false }
        }
      } else if (item) {
        const correctSince = item.correctSince + 1
        item = { ...item, correctSince, retired: correctSince >= CORRECT_TO_RETIRE }
      }
    }
    if (item) out.push(item)
  }
  return out.sort((a, b) => b.lastMissedAt.getTime() - a.lastMissedAt.getTime())
}

export function activeMistakes(rows: readonly AnswerLogRow[]): MistakeItem[] {
  return computeMistakes(rows).filter((m) => !m.retired)
}
