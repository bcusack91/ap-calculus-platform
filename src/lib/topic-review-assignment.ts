import { EXIT_QUIZ_PASS_FRACTION, TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

/**
 * The one assignment a teacher's recommenders create for a topic.
 *
 * Insights › Performance ("Suggested review", from failed exit quizzes) and
 * Insights › Class plan ("Assign practice", from diagnostics) used to create
 * different things — a "Remediation:" lesson and a "Practice:" quiz — for the
 * same goal. Both now create this: the topic's interactive lesson, which ends
 * in its exit quiz, cleared at the site-wide pass mark. The exit-quiz submit
 * route completes INTERACTIVE_LESSON assignments, so the gradebook fills in
 * without the student doing anything extra.
 */

export const TOPIC_REVIEW_TYPE = 'INTERACTIVE_LESSON' as const

export function topicReviewAssignment(opts: {
  topicSlug: string
  topicTitle: string
  /** Where it was assigned from, for the student-facing description. */
  source: string
  dueInDays?: number
  now?: Date
}) {
  const due = new Date(opts.now ?? Date.now())
  due.setDate(due.getDate() + (opts.dueInDays ?? 7))
  return {
    title: `Review: ${opts.topicTitle}`,
    description: `From ${opts.source}. Work through the lesson, then score ${TOPIC_CLEAR_PERCENT}% or higher on its exit quiz to clear this topic.`,
    type: TOPIC_REVIEW_TYPE,
    topicSlug: opts.topicSlug,
    dueDate: due.toISOString(),
    requiredScore: EXIT_QUIZ_PASS_FRACTION,
  }
}
