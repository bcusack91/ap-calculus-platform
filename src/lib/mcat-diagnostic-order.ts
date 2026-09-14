/**
 * Question ordering for the MCAT diagnostic.
 *
 * On the real MCAT a passage's questions always come as one consecutive block,
 * in the order they were written. The diagnostic used to shuffle all 45
 * questions individually, so a passage's questions landed at scattered
 * positions (e.g. 3, 9, 24, 40, 44) and the passage was re-shown each time.
 *
 * The ordering unit is therefore a passage block (all of one passage's
 * questions, in authored order) or a single standalone question. The
 * generator shuffles units; the test page regroups on load, so class-assigned
 * diagnostics frozen before this fix also show passages consecutively. That
 * is safe because scoring and the saved review both use the order the student
 * actually saw.
 */

export interface OrderableQuestion {
  id: string
  passage?: { id: string }
}

/**
 * Authored position of a passage question, parsed from its id
 * (`<domain>-authored-<passageId>-q<n>`). Questions without one keep their
 * relative order.
 */
export function authoredQuestionIndex(id: string): number {
  const match = /-q(\d+)$/.exec(id)
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY
}

/** Group questions into ordering units: passage blocks and standalone questions. */
export function toOrderingUnits<T extends OrderableQuestion>(questions: T[]): T[][] {
  const units: T[][] = []
  const blockByPassage = new Map<string, T[]>()
  for (const question of questions) {
    const passageId = question.passage?.id
    if (!passageId) {
      units.push([question])
      continue
    }
    let block = blockByPassage.get(passageId)
    if (!block) {
      block = []
      blockByPassage.set(passageId, block)
      units.push(block)
    }
    block.push(question)
  }
  for (const block of blockByPassage.values()) {
    // Stable sort: equal indexes keep their incoming order.
    block.sort((a, b) => authoredQuestionIndex(a.id) - authoredQuestionIndex(b.id))
  }
  return units
}

/**
 * Put every passage's questions into one consecutive block in authored order.
 * Each block sits where its passage first appeared, and standalone questions
 * keep their relative order. Pass `shuffleUnits` to randomize the order of
 * blocks and standalone questions without splitting a block. Idempotent, and
 * never adds or drops a question.
 */
export function arrangeInPassageBlocks<T extends OrderableQuestion>(
  questions: T[],
  shuffleUnits?: (units: T[][]) => T[][],
): T[] {
  const units = toOrderingUnits(questions)
  return (shuffleUnits ? shuffleUnits(units) : units).flat()
}
