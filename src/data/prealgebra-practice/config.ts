import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { PRE_ALGEBRA_UNIT_TESTS_CONFIG, PRE_ALGEBRA_UNITS } from '@/data/unit-tests/pre-algebra'

/**
 * Pre-Algebra full-length practice test — composed deterministically from the same
 * pool the unit tests use (see buildExamMcqs), spread across every unit.
 */
const MCQS = buildExamMcqs(PRE_ALGEBRA_UNIT_TESTS_CONFIG.pool, PRE_ALGEBRA_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Pre-Algebra',
  description:
    'A full-length, timed Pre-Algebra practice test: 40 multiple-choice questions spanning every unit of the course, with an explanation for every answer.',
  backLink: { href: '/pre-algebra', label: 'Pre-Algebra' },
  ctaLinks: [
    { href: '/prealgebra-diagnostic', label: 'Diagnostic Test' },
    { href: '/prealgebra-unit-tests', label: 'Unit Tests' },
    { href: '/prealgebra-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
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
