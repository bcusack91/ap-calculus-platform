import { createHash } from 'crypto'

/**
 * A question's identity across every surface it can appear on (exit quiz,
 * diagnostic, unit test, practice, full-length, mistake re-quiz) and every
 * option order: a hash of its stem, its options as a SET, the correct option's
 * text, and its passage. So a question missed on a unit test is the same item
 * when it comes back on an exit quiz, and the mistake log can tell when it has
 * been answered correctly since.
 *
 * Content-addressed on purpose: if a question is later edited, its key
 * changes, and the review page shows "revised since you took it" by comparing
 * the stored key with a fresh one.
 */

export const QUESTION_KEY_PREFIX = 'q:'

const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

export interface KeyableQuestion {
  question: string
  options: readonly string[]
  /** Index into `options` of the correct answer (any order — only its text is hashed). */
  correctIndex: number
  /** The passage a passage-based question belongs to, when there is one. */
  passageId?: string | null
}

export function questionKey(q: KeyableQuestion): string {
  const options = q.options.map(norm)
  const correct = options[q.correctIndex] ?? ''
  const material = [norm(q.question), [...options].sort().join('␟'), correct, q.passageId ?? ''].join('␞')
  return QUESTION_KEY_PREFIX + createHash('sha1').update(material).digest('hex').slice(0, 16)
}

/** True for keys written by `questionKey` (older rows use free-form keys). */
export function isQuestionKey(key: string | null | undefined): key is string {
  return !!key && key.startsWith(QUESTION_KEY_PREFIX) && key.length === QUESTION_KEY_PREFIX.length + 16
}

/**
 * An option's identity regardless of where it was shown: lets "how others
 * answered" count the same choice across students who saw a different order.
 */
export function optionKey(text: string): string {
  return 'o:' + createHash('sha1').update(norm(text)).digest('hex').slice(0, 12)
}
