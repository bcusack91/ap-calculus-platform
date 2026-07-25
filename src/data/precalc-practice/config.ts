import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { PRECALCULUS_UNIT_TESTS_CONFIG, PRECALCULUS_UNITS } from '@/data/unit-tests/precalculus'

/**
 * Precalculus full-length practice test.
 *
 * Composed deterministically from the same topic-tagged bank the unit tests use
 * (see buildExamMcqs) rather than duplicating questions into a literal array —
 * questions are spread proportionally across every unit.
 */
const MCQS = buildExamMcqs(PRECALCULUS_UNIT_TESTS_CONFIG.pool, PRECALCULUS_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Precalculus',
  description:
    'A full-length, timed Precalculus practice test: 40 multiple-choice questions spanning every unit of the course. Review explanations for each answer when you finish.',
  backLink: { href: '/precalculus', label: 'Precalculus' },
  ctaLinks: [
    { href: '/precalc-diagnostic', label: 'Diagnostic Test' },
    { href: '/precalc-unit-tests', label: 'Unit Tests' },
    { href: '/precalc-daily-question', label: 'Daily Question' },
  ],
  accent: 'violet',
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
