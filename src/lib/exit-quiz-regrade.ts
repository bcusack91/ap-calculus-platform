/**
 * Server-side exit-quiz re-grading.
 *
 * The exit-quiz client (src/components/ExitQuiz.tsx) posts, per question,
 * `{ questionId, selectedAnswer, correct }`. The `correct` boolean is computed
 * on the client, so it CANNOT be trusted — it gates assignment grades, MASTERED
 * topic status, and competitive unlocks. This module recomputes correctness from
 * the real question bank whenever the question can be resolved, and reports which
 * answers had to fall back to the client-asserted value.
 *
 * How grading is reproduced:
 *   1. We build a per-topic "answer key": questionId -> { options, correctIndex,
 *      question } straight from the bank (`generateExitQuiz`).
 *   2. The client renders options through a SEEDED deterministic shuffle
 *      (`shuffleOptions(options, correctIndex, id + question)` — see ExitQuiz.tsx),
 *      and its `selectedAnswer` is the index into that SHUFFLED order. We reproduce
 *      the exact same shuffle to learn the correct post-shuffle index and compare.
 *
 * Resolvability caveat: a questionId is only trustworthy if it is a STABLE,
 * content-derived handle — i.e. the same id always maps to the same question with
 * the same options/correctIndex across generations. Some banks emit positional ids
 * (e.g. `${topicSlug}-q${i}` where `i` is a slot in a random selection) or generate
 * randomized numeric variants per call; for those, an id from a past attempt can no
 * longer be mapped to a specific question, so we do NOT regrade them (we fall back
 * to the client value and let the caller warn). We detect this generically by
 * probing the bank several times and only trusting a topic whose id->content map is
 * identical on every probe.
 */

import { shuffleOptions } from '@/lib/shuffle-options'
import { generateExitQuiz, hasExitQuiz } from '@/data/exit-quizzes'

export interface SubmittedAnswer {
  questionId?: string | number
  selectedAnswer?: number | string
  correct?: boolean
}

export interface RegradeResult {
  /** Server-computed number of correct answers over the submitted list. */
  score: number
  /** How many answers were graded authoritatively from the question bank. */
  resolvedCount: number
  /** How many answers fell back to the client-asserted `correct` boolean. */
  unresolvedCount: number
  /** True if any answer could not be resolved and fell back to the client value. */
  usedFallback: boolean
}

interface AnswerKeyEntry {
  options: string[]
  correctIndex: number
  question: string
}

type AnswerKey = Map<string, AnswerKeyEntry>

// A count large enough that `generateExitQuiz(topicSlug, LARGE)` returns the entire
// (topic-filtered) pool rather than a random subset.
const FULL_POOL_COUNT = 100_000
// Number of independent probes used to confirm a topic's ids are stable and
// content-derived. Any single mismatch across probes marks the whole topic as
// non-regradeable, which keeps false "trust" astronomically unlikely for banks
// that use positional ids or per-call randomized content.
const STABILITY_PROBES = 5

// Memoize per-topic answer keys (banks are static, so this is safe and keeps cold
// starts cheap — the bank is dynamically imported and probed at most once per
// topic per server instance). `null` means "not regradeable".
const answerKeyCache = new Map<string, Promise<AnswerKey | null>>()

function entriesEqual(a: AnswerKeyEntry, b: AnswerKeyEntry): boolean {
  return (
    a.correctIndex === b.correctIndex &&
    a.question === b.question &&
    a.options.length === b.options.length &&
    a.options.every((opt, i) => opt === b.options[i])
  )
}

async function probeAnswerKey(topicSlug: string): Promise<AnswerKey | null> {
  if (!hasExitQuiz(topicSlug)) return null

  let key: AnswerKey | null = null

  for (let probe = 0; probe < STABILITY_PROBES; probe++) {
    let questions: Awaited<ReturnType<typeof generateExitQuiz>>
    try {
      questions = await generateExitQuiz(topicSlug, FULL_POOL_COUNT)
    } catch {
      return null
    }

    const seen = new Map<string, AnswerKeyEntry>()
    for (const q of questions) {
      const id = q?.id
      if (typeof id !== 'string' || !Array.isArray(q.options) || typeof q.correctIndex !== 'number') {
        continue
      }
      const entry: AnswerKeyEntry = {
        options: q.options,
        correctIndex: q.correctIndex,
        question: typeof q.question === 'string' ? q.question : '',
      }
      // Same id appearing twice with different content within one draw => not
      // a stable content-derived id.
      const prior = seen.get(id)
      if (prior && !entriesEqual(prior, entry)) return null
      seen.set(id, entry)
    }

    if (probe === 0) {
      key = seen
      continue
    }

    // Every subsequent probe must reproduce the first probe exactly.
    if (!key || key.size !== seen.size) return null
    for (const [id, entry] of key) {
      const other = seen.get(id)
      if (!other || !entriesEqual(entry, other)) return null
    }
  }

  return key && key.size > 0 ? key : null
}

function getAnswerKey(topicSlug: string): Promise<AnswerKey | null> {
  let cached = answerKeyCache.get(topicSlug)
  if (!cached) {
    cached = probeAnswerKey(topicSlug).catch(() => null)
    answerKeyCache.set(topicSlug, cached)
  }
  return cached
}

/**
 * Re-grade a submitted exit quiz against the real question bank.
 *
 * For every answer whose questionId resolves to a stable bank question, correctness
 * is computed server-side (reproducing the client's seeded option shuffle). Any
 * answer that cannot be resolved falls back to the client-asserted `correct` value
 * and is counted in `unresolvedCount` (the caller should warn when `usedFallback`).
 */
export async function regradeExitQuiz(
  topicSlug: string,
  answers: SubmittedAnswer[],
): Promise<RegradeResult> {
  const key = await getAnswerKey(topicSlug)

  let score = 0
  let resolvedCount = 0
  let unresolvedCount = 0

  for (const answer of answers) {
    const id = typeof answer.questionId === 'string' ? answer.questionId : undefined
    const entry = id && key ? key.get(id) : undefined

    if (entry && typeof answer.selectedAnswer === 'number') {
      // Reproduce the exact deterministic shuffle the client rendered.
      const { correctIndex } = shuffleOptions(
        entry.options,
        entry.correctIndex,
        id + entry.question,
      )
      if (answer.selectedAnswer === correctIndex) score++
      resolvedCount++
    } else {
      // Could not resolve this question — trust the client's assertion for now.
      if (answer.correct === true) score++
      unresolvedCount++
    }
  }

  return {
    score,
    resolvedCount,
    unresolvedCount,
    usedFallback: unresolvedCount > 0,
  }
}
