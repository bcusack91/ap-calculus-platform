import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { OCHEM_1_UNIT_TESTS_CONFIG, OCHEM_1_UNITS } from '@/data/unit-tests/organic-chemistry-1'

/**
 * Organic Chemistry 1 full-length practice test — composed deterministically from the same
 * pool the unit tests use (see buildExamMcqs), spread across every unit.
 */
const MCQS = buildExamMcqs(OCHEM_1_UNIT_TESTS_CONFIG.pool, OCHEM_1_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Organic Chemistry 1',
  description:
    'A full-length, timed Organic Chemistry 1 practice test: 40 multiple-choice questions spanning every unit of the course, with an explanation for every answer.',
  backLink: { href: '/courses/organic-chemistry-1', label: 'Organic Chemistry 1' },
  ctaLinks: [
    { href: '/ochem1-diagnostic', label: 'Diagnostic Test' },
    { href: '/ochem1-unit-tests', label: 'Unit Tests' },
    { href: '/ochem1-daily-question', label: 'Daily Question' },
  ],
  accent: 'emerald',
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
