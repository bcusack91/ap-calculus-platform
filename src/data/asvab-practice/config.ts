import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { GS_ITEMS } from './form-1/gs'
import { AR_ITEMS } from './form-1/ar'
import { WK_ITEMS } from './form-1/wk'
import { PC_ITEMS } from './form-1/pc'
import { MK_ITEMS } from './form-1/mk'
import { EI_ITEMS } from './form-1/ei'
import { AI_ITEMS } from './form-1/ai'
import { SI_ITEMS } from './form-1/si'
import { MC_ITEMS } from './form-1/mc'
import { AO_ITEMS } from './form-1/ao'

/**
 * ASVAB practice test, form 1: a fixed form at full CAT-ASVAB length. The ten
 * subtests run in the official administration order with the official scored
 * item counts and time limits without tryout items (asvab-pipeline/ASVAB-FACTS.md
 * §1a: 135 items, 197 minutes). Each subtest is its own timed section in the
 * runner. Results show percent correct per subtest and an AFQT estimate (range)
 * from WK, PC, AR and MK through src/lib/asvab-scoring.ts.
 *
 * Content-store key 'asvab' (prisma/import-practice.ts): after a deploy that
 * changes this form, re-run the importer on prod or the stored copy keeps serving.
 * Checker: npx tsx scripts/check-asvab-practice-form.ts
 */
export const config: FullLengthExamConfig = {
  subject: 'ASVAB',
  description:
    'A full-length ASVAB practice test built like the computer version given at MEPS (the CAT-ASVAB): all 10 subtests in the official order, with the official number of scored questions and time limit for each (135 questions, 197 minutes). The real CAT-ASVAB is adaptive: it picks harder or easier questions based on your answers and does not let you go back. This fixed form gives every test taker the same questions, easy to hard within each subtest, and lets you review within a subtest. Your results show percent correct for each subtest and an estimated AFQT range, not an official score.',
  backLink: { href: '/asvab', label: 'ASVAB' },
  ctaLinks: [
    { href: '/asvab-diagnostic', label: 'Diagnostic Test' },
    { href: '/asvab-afqt-calculator', label: 'AFQT Calculator' },
    { href: '/asvab-unit-tests', label: 'Subtest Unit Tests' },
    { href: '/asvab-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
  scaledExam: 'asvab',
  answerReview: true,
  // Signed-in students' sittings are saved as DiagnosticTest category 'asvab-practice-1' (read by the score predictor).
  saveEndpoint: '/api/asvab-practice/submit',
  totalTimeMinutes: 197,
  sections: [
    {
      id: 'gs',
      name: 'General Science',
      shortName: 'GS',
      description: 'Life science, earth and space science, chemistry and physics. 15 questions, 12 minutes.',
      timeLimitMinutes: 12,
      items: GS_ITEMS,
    },
    {
      id: 'ar',
      name: 'Arithmetic Reasoning',
      shortName: 'AR',
      description: 'Word problems: rates, fractions, percents, ratios, averages and probability. No calculator. 15 questions, 55 minutes. Counts toward the AFQT.',
      timeLimitMinutes: 55,
      items: AR_ITEMS,
    },
    {
      id: 'wk',
      name: 'Word Knowledge',
      shortName: 'WK',
      description: 'Choose the word closest in meaning, alone or in a sentence. 15 questions, 9 minutes. Counts toward the AFQT.',
      timeLimitMinutes: 9,
      items: WK_ITEMS,
    },
    {
      id: 'pc',
      name: 'Paragraph Comprehension',
      shortName: 'PC',
      description: 'Read short passages and answer questions about main idea, details and inferences. 10 questions, 27 minutes. Counts toward the AFQT.',
      timeLimitMinutes: 27,
      items: PC_ITEMS,
    },
    {
      id: 'mk',
      name: 'Mathematics Knowledge',
      shortName: 'MK',
      description: 'Number properties, algebra and geometry. No calculator. 15 questions, 31 minutes. Counts toward the AFQT.',
      timeLimitMinutes: 31,
      items: MK_ITEMS,
    },
    {
      id: 'ei',
      name: 'Electronics Information',
      shortName: 'EI',
      description: 'Current, voltage, resistance, circuits and components. 15 questions, 10 minutes.',
      timeLimitMinutes: 10,
      items: EI_ITEMS,
    },
    {
      id: 'ai',
      name: 'Auto Information',
      shortName: 'AI',
      description: 'Engines, drivetrain, brakes and vehicle systems. 10 questions, 7 minutes.',
      timeLimitMinutes: 7,
      items: AI_ITEMS,
    },
    {
      id: 'si',
      name: 'Shop Information',
      shortName: 'SI',
      description: 'Tools, fasteners, materials and shop practices. 10 questions, 6 minutes.',
      timeLimitMinutes: 6,
      items: SI_ITEMS,
    },
    {
      id: 'mc',
      name: 'Mechanical Comprehension',
      shortName: 'MC',
      description: 'Forces, levers, pulleys, gears and fluids. 15 questions, 22 minutes.',
      timeLimitMinutes: 22,
      items: MC_ITEMS,
    },
    {
      id: 'ao',
      name: 'Assembling Objects',
      shortName: 'AO',
      description: 'Picture how shapes connect or fit together. On this practice test, shapes may be turned but never flipped, which is how the official sample questions behave. 15 questions, 18 minutes.',
      timeLimitMinutes: 18,
      items: AO_ITEMS,
    },
  ],
  aboutInfo: {
    title: 'About the CAT-ASVAB',
    columns: [
      {
        heading: 'Real Test Structure',
        items: [
          '10 subtests, 135 scored questions, 197 minutes of subtest time',
          'Taken on a computer at MEPS and most MET sites',
          'Adaptive: a right answer usually leads to a harder question',
          'You cannot go back to a question once you answer it',
          'Some questions may be unscored tryout items; treat every question as scored',
          'No calculator; scratch paper is provided',
        ],
      },
      {
        heading: 'Scoring',
        items: [
          'Each subtest is reported as a standard score (mean 50, SD 10)',
          'AFQT = AR + MK + 2 × VE (a weighted blend of WK and PC), as a 1–99 percentile',
          'The AFQT is a percentile, not percent correct',
          'CAT scores depend on which questions you answer correctly, so any practice-test AFQT is an estimate',
          'Line scores for jobs combine other subtests; minimums vary by service, so confirm with a recruiter',
        ],
      },
    ],
  },
}
