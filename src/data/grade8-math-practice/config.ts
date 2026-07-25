import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { GRADE_8_UNIT_TESTS_CONFIG, GRADE_8_UNITS } from '@/data/unit-tests/grade-8-math'

/**
 * Grade 8 Math full-length practice test — composed deterministically from the same
 * pool the unit tests use (see buildExamMcqs), spread across every unit.
 */
const MCQS = buildExamMcqs(GRADE_8_UNIT_TESTS_CONFIG.pool, GRADE_8_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Grade 8 Math',
  description:
    'A full-length, timed Grade 8 Math practice test: 40 multiple-choice questions spanning every unit of the course, with an explanation for every answer.',
  backLink: { href: '/grade-8-math', label: 'Grade 8 Math' },
  ctaLinks: [
    { href: '/grade8-math-diagnostic', label: 'Diagnostic Test' },
    { href: '/grade8-math-unit-tests', label: 'Unit Tests' },
    { href: '/grade8-math-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 60,
  sections: [
    {
      id: 'mcq',
      name: 'Practice Test',
      shortName: 'Multiple Choice',
      description: '40 multiple-choice questions covering every unit, weighted by unit depth.',
      timeLimitMinutes: 60,
      items: MCQS,
    },
  ],
}
