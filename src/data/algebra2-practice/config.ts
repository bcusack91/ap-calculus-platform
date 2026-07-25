import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { ALGEBRA_2_UNIT_TESTS_CONFIG, ALGEBRA_2_UNITS } from '@/data/unit-tests/algebra-2'

/**
 * Algebra 2 full-length practice test — composed deterministically from the same
 * pool the unit tests use (see buildExamMcqs), spread across every unit.
 */
const MCQS = buildExamMcqs(ALGEBRA_2_UNIT_TESTS_CONFIG.pool, ALGEBRA_2_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Algebra 2',
  description:
    'A full-length, timed Algebra 2 practice test: 40 multiple-choice questions spanning every unit of the course, with an explanation for every answer.',
  backLink: { href: '/courses/algebra-2', label: 'Algebra 2' },
  ctaLinks: [
    { href: '/algebra2-diagnostic', label: 'Diagnostic Test' },
    { href: '/algebra2-unit-tests', label: 'Unit Tests' },
    { href: '/algebra2-daily-question', label: 'Daily Question' },
  ],
  accent: 'cyan',
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
