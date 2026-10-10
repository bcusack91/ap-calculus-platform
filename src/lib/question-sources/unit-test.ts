import { questionKey } from '@/lib/question-key'
import type { UnitTestQuestion } from '@/lib/mcat-unit-test'
import type { ReviewItem } from './types'

/**
 * Review items for a cycle unit test sitting (McatUnitTest — shared by MCAT,
 * SAT and ACT). The questions were frozen with their shuffled options and key
 * when the sitting was built, so nothing needs rebuilding.
 */
export function unitTestReviewItems(questions: unknown, answers: unknown): ReviewItem[] {
  const qs = (Array.isArray(questions) ? questions : []) as UnitTestQuestion[]
  const as = Array.isArray(answers) ? answers : []
  return qs.map((q, i) => {
    const chosen = as[i]
    return {
      index: i,
      questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex }),
      question: q.question,
      options: [...q.options],
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? '',
      passage: null,
      chosenIndex: typeof chosen === 'number' && Number.isInteger(chosen) ? chosen : null,
      flagged: false,
      topicSlug: q.topicSlug,
    }
  })
}
