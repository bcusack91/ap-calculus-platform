import { generateExitQuiz, hasExitQuiz, type ExitQuizQuestion } from '@/data/exit-quizzes'
import { coursesIn, excludedTopicsOf } from '@/lib/course-includes'

/**
 * The course-level quiz on a course hub (CourseEntranceQuiz). For a course that
 * includes others (AP Calculus BC includes AB), the draw spans every included
 * course's pool: INCLUDED_SHARE of the items come from the included courses
 * (about the CED share of AB content on the BC exam), the rest from the
 * course's own pool, and an included course's excluded topics never appear.
 * Item ids keep each pool's own prefix, and the regrade key for the course
 * slug merges the included courses' keys (exit-quiz-regrade.ts), so the
 * server still grades every answer from the bank.
 */
export const INCLUDED_SHARE = 0.6

type PooledQuestion = ExitQuizQuestion & { topicSlug?: string }

export async function generateCourseQuiz(courseSlug: string, count: number): Promise<ExitQuizQuestion[]> {
  const [own, ...included] = coursesIn(courseSlug)
  if (included.length === 0) return hasExitQuiz(own) ? generateExitQuiz(own, count) : []
  const excluded = new Set(excludedTopicsOf(courseSlug))
  const includedCount = Math.round(count * INCLUDED_SHARE)
  const perIncluded = Math.ceil(includedCount / included.length)
  const fromIncluded: ExitQuizQuestion[] = []
  for (const c of included) {
    if (!hasExitQuiz(c)) continue
    // Over-draw so dropping excluded topics still leaves enough.
    const drawn = (await generateExitQuiz(c, perIncluded * 2)) as PooledQuestion[]
    fromIncluded.push(...drawn.filter((q) => !q.topicSlug || !excluded.has(q.topicSlug)).slice(0, perIncluded))
  }
  const ownItems = hasExitQuiz(own) ? await generateExitQuiz(own, count - Math.min(includedCount, fromIncluded.length)) : []
  const mixed = [...fromIncluded.slice(0, includedCount), ...ownItems]
  for (let i = mixed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[mixed[i], mixed[j]] = [mixed[j], mixed[i]]
  }
  return mixed.slice(0, count)
}

/** True when the course hub can offer a course-level quiz. */
export function hasCourseQuiz(courseSlug: string): boolean {
  return coursesIn(courseSlug).some((c) => hasExitQuiz(c))
}
