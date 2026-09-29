/**
 * Owner decision (2026-09-28): ONE pass mark everywhere. The exit quiz used to
 * say "Passed" at 70% while study plans, class plans and retake gates cleared a
 * topic at 80%, so students saw "Quiz Passed!" next to a plan still saying
 * "Pending". Every surface now derives from EXIT_QUIZ_PASS_FRACTION.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { EXIT_QUIZ_PASS_FRACTION, TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { SAT_REQUIRED_SCORE_PERCENT } from '@/lib/sat-plan'

const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

describe('one pass mark', () => {
  it('is 80%, and the percent form matches the fraction', () => {
    expect(EXIT_QUIZ_PASS_FRACTION).toBe(0.8)
    expect(TOPIC_CLEAR_PERCENT).toBe(80)
    expect(SAT_REQUIRED_SCORE_PERCENT).toBe(TOPIC_CLEAR_PERCENT)
    // A 10-question quiz passes at 8, exactly the plan threshold.
    expect(Math.ceil(10 * EXIT_QUIZ_PASS_FRACTION)).toBe(8)
  })

  it('every plan and gate imports it instead of hard-coding a number', () => {
    for (const f of [
      'src/app/api/study-plan/plan-status/route.ts',
      'src/app/api/mcat-diagnostic/plan-status/route.ts',
      'src/app/api/act-diagnostic/plan-status/route.ts',
      'src/app/api/teacher/classrooms/[id]/class-plan/route.ts',
      'src/app/api/progress/module-status/route.ts',
      'src/lib/sat-plan.ts',
    ]) {
      const src = read(f)
      expect(src, f).toMatch(/TOPIC_CLEAR_PERCENT|EXIT_QUIZ_PASS_FRACTION/)
      expect(src, f).not.toMatch(/(requiredScorePercent|REQUIRED_\w*PERCENT|REQUIRED_EXIT_FRACTION)\s*[:=]\s*(80|0\.8)\b/)
    }
  })
})
