import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { buildExamMcqs } from '@/lib/practice-exam/from-pool'
import { OCHEM_2_UNIT_TESTS_CONFIG, OCHEM_2_UNITS } from '@/data/unit-tests/organic-chemistry-2'

/**
 * Organic Chemistry 2 full-length practice test — composed deterministically from the same
 * pool the unit tests use (see buildExamMcqs), spread across every unit.
 */
const MCQS = buildExamMcqs(OCHEM_2_UNIT_TESTS_CONFIG.pool, OCHEM_2_UNITS, 40)

export const config: FullLengthExamConfig = {
  subject: 'Organic Chemistry 2',
  description:
    'A full-length, timed Organic Chemistry 2 practice test: 40 multiple-choice questions spanning every unit of the course, with an explanation for every answer.',
  backLink: { href: '/courses/organic-chemistry-2', label: 'Organic Chemistry 2' },
  ctaLinks: [
    { href: '/ochem2-diagnostic', label: 'Diagnostic Test' },
    { href: '/ochem2-unit-tests', label: 'Unit Tests' },
    { href: '/ochem2-daily-question', label: 'Daily Question' },
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
