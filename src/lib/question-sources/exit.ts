/**
 * Exit-quiz question source: rebuild the questions of a stored exit-quiz
 * attempt (ExitQuizAttempt) for the review page and the mistake log.
 *
 * The quiz is regenerated exactly as the submit route graded it
 * (regradeExitQuizAttempt: seeded regeneration when the attempt stored a seed,
 * else the probe answer key), so options come back in the order the student
 * saw them.
 */
import { resolveExitQuizItems, type SubmittedAnswer } from '@/lib/exit-quiz-regrade'
import type { ReviewItem } from './types'

export interface StoredExitAttempt {
  topicSlug: string
  /** ExitQuizAttempt.answers: [{ questionId, selectedAnswer, correct }]. */
  answers: unknown
  totalQuestions: number
  seed?: number | null
  difficulty?: string | null
  includeLowYield?: boolean | null
  /** Seconds for the whole quiz (spread evenly per question). */
  timeSpent?: number | null
}

function answerList(answers: unknown): SubmittedAnswer[] {
  let list = answers
  if (typeof list === 'string') {
    try {
      list = JSON.parse(list)
    } catch {
      return []
    }
  }
  return Array.isArray(list) ? list.filter((a): a is SubmittedAnswer => !!a && typeof a === 'object') : []
}

/**
 * Review items aligned with the stored answers; null where a question can't
 * be rebuilt (generative pools without a seed, a question since removed).
 */
export async function exitReviewItems(attempt: StoredExitAttempt): Promise<(ReviewItem | null)[]> {
  const answers = answerList(attempt.answers)
  if (!answers.length) return []
  const items = await resolveExitQuizItems(attempt.topicSlug, answers, {
    seed: attempt.seed,
    totalQuestions: attempt.totalQuestions,
    difficulty: attempt.difficulty,
    includeLowYield: attempt.includeLowYield,
  })
  // The exit quiz records only its total time; an even split would read as a
  // real per-question time, so none is shown.
  const perQuestionMs = null
  return answers.map((a, i) => {
    const item = items[i]
    if (!item) return null
    return {
      index: i,
      questionKey: item.questionKey,
      question: item.question,
      options: item.options,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
      passage: null,
      chosenIndex: typeof a.selectedAnswer === 'number' && a.selectedAnswer >= 0 ? a.selectedAnswer : null,
      flagged: false,
      durationMs: perQuestionMs,
      topicSlug: attempt.topicSlug,
    }
  })
}
