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
import { questionKey } from '@/lib/question-key'
import { coursesIn } from '@/lib/course-includes'
import { generateExitQuiz, hasExitQuiz, isTrackMix, type ExitQuizDifficulty, type ExitQuizTrackMix } from '@/data/exit-quizzes'

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
  /** Per-answer verdict, in submitted order (the same grading `score` counts). */
  perAnswer: boolean[]
  /**
   * Per-answer resolved question (in submitted order), or null where the
   * answer was not graded from the bank. What the answer log keys on and the
   * review page rebuilds from.
   */
  items: (ResolvedExitItem | null)[]
}

/** One exit-quiz question as the student saw it, rebuilt from the bank. */
export interface ResolvedExitItem {
  questionId: string
  question: string
  /** Options in the order they were SHOWN (the client's seeded shuffle). */
  options: string[]
  /** Correct option index in the shown order. */
  correctIndex: number
  explanation: string
  /** questionKey() of the bank question (order-independent). */
  questionKey: string
}

export interface AnswerKeyEntry {
  options: string[]
  correctIndex: number
  question: string
  explanation: string
  /** The bank's category (MCAT pools: the subtopic slug). */
  category?: string
}

function entryFor(q: { options?: unknown; correctIndex?: unknown; question?: unknown; explanation?: unknown; category?: unknown }): AnswerKeyEntry | null {
  if (!Array.isArray(q.options) || typeof q.correctIndex !== 'number') return null
  return {
    options: q.options as string[],
    correctIndex: q.correctIndex,
    question: typeof q.question === 'string' ? q.question : '',
    explanation: typeof q.explanation === 'string' ? q.explanation : '',
    ...(typeof q.category === 'string' ? { category: q.category } : {}),
  }
}

/** The question as the client rendered it: same seeded shuffle as ExitQuiz.tsx. */
function resolveEntry(id: string, entry: AnswerKeyEntry): ResolvedExitItem {
  const shown = shuffleOptions(entry.options, entry.correctIndex, id + entry.question)
  return {
    questionId: id,
    question: entry.question,
    options: shown.options,
    correctIndex: shown.correctIndex,
    explanation: entry.explanation,
    questionKey: questionKey({ question: entry.question, options: entry.options, correctIndex: entry.correctIndex }),
  }
}

/**
 * Grade answers against a resolved key. Answers whose id is not in the key (or
 * whose selection is not an index) fall back to the client-asserted boolean.
 */
function gradeAgainstKey(answers: SubmittedAnswer[], key: AnswerKey | null): RegradeResult {
  let score = 0
  let resolvedCount = 0
  let unresolvedCount = 0
  const perAnswer: boolean[] = []
  const items: (ResolvedExitItem | null)[] = []
  for (const answer of answers) {
    const id = typeof answer.questionId === 'string' ? answer.questionId : undefined
    const entry = id && key ? key.get(id) : undefined
    let ok: boolean
    if (id && entry && typeof answer.selectedAnswer === 'number') {
      // Reproduce the exact deterministic shuffle the client rendered.
      const item = resolveEntry(id, entry)
      ok = answer.selectedAnswer === item.correctIndex
      items.push(item)
      resolvedCount++
    } else {
      // Could not resolve this question — trust the client's assertion for now.
      ok = answer.correct === true
      items.push(null)
      unresolvedCount++
    }
    if (ok) score++
    perAnswer.push(ok)
  }
  return { score, resolvedCount, unresolvedCount, usedFallback: unresolvedCount > 0, perAnswer, items }
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
      // Every item, LOW included: this key only resolves answers by id, and a
      // student who opted in to low-yield detail may have been served LOW items.
      questions = await generateExitQuiz(topicSlug, FULL_POOL_COUNT, undefined, undefined, { includeLowYield: true })
    } catch {
      return null
    }

    const seen = new Map<string, AnswerKeyEntry>()
    for (const q of questions) {
      const id = q?.id
      const entry = q ? entryFor(q) : null
      if (typeof id !== 'string' || !entry) continue
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

/**
 * A topic's stable id → question key (every item, LOW included), or null when
 * the topic's ids are not stable across draws. Memoized per server instance.
 */
export function getAnswerKey(topicSlug: string): Promise<AnswerKey | null> {
  let cached = answerKeyCache.get(topicSlug)
  if (!cached) {
    cached = keyWithIncludedCourses(topicSlug).catch(() => null)
    answerKeyCache.set(topicSlug, cached)
  }
  return cached
}

/**
 * A course slug that includes other courses (AP Calculus BC includes AB) draws
 * its hub quiz from every included pool (src/lib/course-quiz.ts), whose ids
 * keep their own pool's prefix, so its key is the union of the pools' keys.
 */
async function keyWithIncludedCourses(topicSlug: string): Promise<AnswerKey | null> {
  const [own, ...included] = coursesIn(topicSlug)
  const ownKey = await probeAnswerKey(own)
  if (included.length === 0) return ownKey
  const merged: AnswerKey = new Map(ownKey ?? [])
  for (const c of included) {
    const k = await probeAnswerKey(c).catch(() => null)
    if (k) for (const [id, entry] of k) if (!merged.has(id)) merged.set(id, entry)
  }
  return merged.size > 0 ? merged : null
}

/**
 * Grade a submitted exit quiz that carried a generation SEED.
 *
 * When the client generates a quiz with a seed (and records count + difficulty),
 * the server can regenerate the byte-identical quiz — same questions, same values,
 * same option order — and grade the submitted answers authoritatively, with NO
 * fallback to client-asserted correctness. This closes the score-fabrication hole
 * for randomized/generative pools (SAT etc.), where the probe path can't build a
 * stable answer key.
 *
 * Returns null if regeneration fails or produced no usable key, so the caller can
 * fall back to the probe path / legacy behavior.
 */
export async function regradeExitQuizSeeded(
  topicSlug: string,
  answers: SubmittedAnswer[],
  seed: number,
  count: number,
  difficulty?: ExitQuizDifficulty | ExitQuizTrackMix,
  includeLowYield?: boolean,
): Promise<RegradeResult | null> {
  if (!hasExitQuiz(topicSlug) || !Number.isFinite(seed)) return null

  let questions: Awaited<ReturnType<typeof generateExitQuiz>>
  try {
    questions = await generateExitQuiz(topicSlug, count, difficulty, seed, { includeLowYield })
  } catch {
    return null
  }

  const key: AnswerKey = new Map()
  for (const q of questions) {
    const entry = q ? entryFor(q) : null
    if (typeof q?.id === 'string' && entry) key.set(q.id, entry)
  }
  if (key.size === 0) return null

  return gradeAgainstKey(answers, key)
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
  return gradeAgainstKey(answers, await getAnswerKey(topicSlug))
}

export interface ExitQuizGeneration {
  seed?: number | null
  totalQuestions: number
  difficulty?: string | null
  includeLowYield?: boolean | null
}

/** A stored difficulty as a generation input: a tier, an AP track mix (ap-track.ts), or none. */
function asDifficulty(d: string | null | undefined): ExitQuizDifficulty | ExitQuizTrackMix | undefined {
  return d === 'easy' || d === 'medium' || d === 'hard' || isTrackMix(d) ? d : undefined
}

/**
 * The grading the submit route runs, as one call: the seeded regeneration when
 * the quiz carried a seed, else (or when that reproduces nothing) the probe
 * key. Shared by the submit route and the review / mistake-log resolver so
 * both rebuild exactly the quiz that was graded.
 */
export async function regradeExitQuizAttempt(
  topicSlug: string,
  answers: SubmittedAnswer[],
  gen: ExitQuizGeneration,
): Promise<RegradeResult> {
  const seeded = typeof gen.seed === 'number'
    ? await regradeExitQuizSeeded(topicSlug, answers, gen.seed, gen.totalQuestions, asDifficulty(gen.difficulty), gen.includeLowYield ?? undefined)
    : null
  return seeded ?? (await regradeExitQuiz(topicSlug, answers))
}

/**
 * Rebuild each answered question of an exit-quiz attempt (options as shown,
 * correct index as shown, explanation, question key), or null where it can no
 * longer be resolved. Aligned with `answers`.
 */
export async function resolveExitQuizItems(
  topicSlug: string,
  answers: SubmittedAnswer[],
  gen: ExitQuizGeneration,
): Promise<(ResolvedExitItem | null)[]> {
  return (await regradeExitQuizAttempt(topicSlug, answers, gen)).items
}
