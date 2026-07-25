import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { GEOMETRY_UNIT_TESTS_CONFIG, GEOMETRY_UNITS } from '@/data/unit-tests/geometry'

/**
 * Geometry full-length practice test.
 *
 * Composed deterministically from the same topic-tagged bank the unit tests use
 * (see buildExamMcqs) rather than duplicating questions into a literal array —
 * questions are spread proportionally across every unit.
 */
const MCQS = buildExamMcqs(GEOMETRY_UNIT_TESTS_CONFIG.pool, GEOMETRY_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Geometry',
  description:
    'A full-length, timed Geometry practice test: 40 multiple-choice questions spanning every unit of the course. Review explanations for each answer when you finish.',
  backLink: { href: '/courses/geometry', label: 'Geometry' },
  ctaLinks: [
    { href: '/geometry-diagnostic', label: 'Diagnostic Test' },
    { href: '/geometry-unit-tests', label: 'Unit Tests' },
    { href: '/geometry-daily-question', label: 'Daily Question' },
  ],
  accent: 'rose',
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
