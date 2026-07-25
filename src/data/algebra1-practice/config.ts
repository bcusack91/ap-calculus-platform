import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { ALGEBRA_1_UNIT_TESTS_CONFIG, ALGEBRA_1_UNITS } from '@/data/unit-tests/algebra-1'

/**
 * Algebra 1 full-length practice test.
 *
 * Composed deterministically from the same topic-tagged bank the unit tests use
 * (see buildExamMcqs) rather than duplicating questions into a literal array —
 * questions are spread proportionally across every unit.
 */
const MCQS = buildExamMcqs(ALGEBRA_1_UNIT_TESTS_CONFIG.pool, ALGEBRA_1_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Algebra 1',
  description:
    'A full-length, timed Algebra 1 practice test: 40 multiple-choice questions spanning every unit of the course. Review explanations for each answer when you finish.',
  backLink: { href: '/courses/algebra-1', label: 'Algebra 1' },
  ctaLinks: [
    { href: '/algebra1-diagnostic', label: 'Diagnostic Test' },
    { href: '/algebra1-unit-tests', label: 'Unit Tests' },
    { href: '/algebra1-daily-question', label: 'Daily Question' },
  ],
  accent: 'sky',
  totalTimeMinutes: 60,
  sections: [
    {
      id: 'mcq',
      name: 'Practice Test',
      shortName: 'Multiple Choice',
      description:
        '40 multiple-choice questions covering every unit, weighted by how much of the course each unit represents.',
      timeLimitMinutes: 60,
      items: MCQS,
    },
  ],
}
