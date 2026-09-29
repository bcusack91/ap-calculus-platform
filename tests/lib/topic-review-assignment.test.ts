/**
 * The two teacher recommenders create the SAME assignment.
 *
 * Insights › Performance ("Suggested review", from failed exit quizzes) used
 * to create an INTERACTIVE_LESSON called "Remediation: X", while Insights ›
 * Class plan ("Assign practice", from diagnostics) created a QUIZ called
 * "Practice: X". Same goal, two types, two names. Both now go through
 * topicReviewAssignment(), cleared at the site pass mark.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { topicReviewAssignment, TOPIC_REVIEW_TYPE } from '@/lib/topic-review-assignment'
import { EXIT_QUIZ_PASS_FRACTION, TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

const repoFile = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

describe('topicReviewAssignment', () => {
  it('is a lesson cleared by the exit quiz at the site pass mark', () => {
    const body = topicReviewAssignment({
      topicSlug: 'limits-intro',
      topicTitle: 'Intro to Limits',
      source: 'your exit-quiz results',
      now: new Date('2026-09-28T12:00:00.000Z'),
    })
    expect(body.type).toBe('INTERACTIVE_LESSON')
    expect(body.title).toBe('Review: Intro to Limits')
    expect(body.topicSlug).toBe('limits-intro')
    expect(body.requiredScore).toBe(EXIT_QUIZ_PASS_FRACTION)
    expect(body.description).toContain(`${TOPIC_CLEAR_PERCENT}% or higher on its exit quiz`)
    expect(body.description).toContain('your exit-quiz results')
    expect(body.dueDate).toBe('2026-10-05T12:00:00.000Z')
  })

  it('stays within what the assignments route accepts (0-1 requiredScore)', () => {
    const body = topicReviewAssignment({ topicSlug: 't', topicTitle: 'T', source: 's' })
    expect(body.requiredScore).toBeGreaterThan(0)
    expect(body.requiredScore).toBeLessThanOrEqual(1)
  })
})

describe('both recommenders use it', () => {
  const RECOMMENDERS = ['src/components/ClassPlan.tsx', 'src/app/teacher/classroom/[id]/page.tsx']

  for (const file of RECOMMENDERS) {
    it(`${file} posts topicReviewAssignment(...)`, () => {
      const src = repoFile(file)
      expect(src).toContain("from '@/lib/topic-review-assignment'")
      expect(src).toMatch(/body: JSON\.stringify\(\s*topicReviewAssignment\(/)
      // The old, divergent payloads are gone.
      expect(src).not.toContain('Remediation: ${')
      expect(src).not.toContain('Practice: ${')
    })
  }

  it('the exit-quiz submit route completes the shared type', () => {
    const submit = repoFile('src/app/api/exit-quiz/submit/route.ts')
    expect(submit).toMatch(new RegExp(`types: \\[[^\\]]*'${TOPIC_REVIEW_TYPE}'`))
  })
})
