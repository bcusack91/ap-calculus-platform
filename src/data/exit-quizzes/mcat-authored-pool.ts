/**
 * Bridges the authored competitive MCAT questions (2,273 items, 55 subtopic
 * tags, KaTeX-verified by scripts/verify-mcat-questions.ts) into the area
 * exit-quiz banks, which previously held only ~18 questions each (audit
 * finding F1, MCAT-CONTENT-AUDIT.md). Exit quizzes grade homework and feed
 * slide-deck polls, so they deserve the deep bank.
 *
 * mcat-bank.ts pull() de-duplicates by question stem, so questions appearing
 * in both an exit-quiz pool and the authored set are not doubled in
 * competitive matches.
 */
import { chemistryQuestions } from '../competitive-questions/mcat-questions-chemistry'
import { chemistryQuestions2 } from '../competitive-questions/mcat-questions-chemistry-2'
import { physicsQuestions } from '../competitive-questions/mcat-questions-physics'
import { physicsQuestions2 } from '../competitive-questions/mcat-questions-physics-2'
import { biologyQuestions } from '../competitive-questions/mcat-questions-biology'
import { biologyQuestions2 } from '../competitive-questions/mcat-questions-biology-2'
import { biologyQuestions3 } from '../competitive-questions/mcat-questions-biology-3'
import { behavioralQuestions } from '../competitive-questions/mcat-questions-behavioral'
import { behavioralQuestions2 } from '../competitive-questions/mcat-questions-behavioral-2'
import { gapsChemPhysQuestions } from '../competitive-questions/mcat-questions-gaps-chemphys'
import { gapsBioPsychQuestions } from '../competitive-questions/mcat-questions-gaps-biopsych'
import { gapsWave2Questions } from '../competitive-questions/mcat-questions-gaps-wave2'
import type { McatBankQuestion } from '../competitive-questions/mcat-question-types'

const ALL: McatBankQuestion[] = [
  ...chemistryQuestions, ...chemistryQuestions2,
  ...physicsQuestions, ...physicsQuestions2,
  ...biologyQuestions, ...biologyQuestions2, ...biologyQuestions3,
  ...behavioralQuestions, ...behavioralQuestions2,
  ...gapsChemPhysQuestions, ...gapsBioPsychQuestions,
  ...gapsWave2Questions,
]

/**
 * Some authored tags use older/coarser names than the curriculum topic slugs.
 * Where the correspondence is clean, retag so the exit-quiz selectors' exact
 * tier picks them up; ambiguous coarse tags (organ-system pairs, molecular
 * biology) are left as-is for the keyword classifier to route.
 */
const TAG_ALIASES: Record<string, string> = {
  'mcat-biology-cell-cycle-mcat': 'mcat-cell-biology-cell-cycle-mcat',
  'mcat-biology-cell-structure-mcat': 'mcat-cell-biology-organelles-mcat',
  'mcat-genetics-mendelian-mcat': 'mcat-genetics-evolution-mendelian-mcat',
  'mcat-psych-sensation-perception-mcat': 'mcat-psychology-behavior-sensation-perception-mcat',
  'mcat-psych-learning-memory-mcat': 'mcat-psychology-behavior-learning-memory-mcat',
  'mcat-psych-cognition-language-mcat': 'mcat-psychology-behavior-cognition-language-mcat',
  'mcat-psych-social-psychology-mcat': 'mcat-social-psychology-mcat',
  'mcat-psych-sociology-social-structure-mcat': 'mcat-sociology-structure-stratification-mcat',
  'mcat-psych-social-inequality-mcat': 'mcat-sociology-health-disparities-mcat',
  'mcat-psych-disorders-mcat': 'mcat-psychology-behavior-disorders-mcat',
}

/** Authored questions whose subtopic tag starts with any given prefix. */
export function authoredFor(prefixes: string[]): McatBankQuestion[] {
  return ALL.filter((q) => prefixes.some((p) => q.subtopicSlug.startsWith(p))).map((q) =>
    TAG_ALIASES[q.subtopicSlug] ? { ...q, subtopicSlug: TAG_ALIASES[q.subtopicSlug] } : q,
  )
}
