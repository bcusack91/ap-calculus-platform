/**
 * Exit Quiz Registry — centralizes all exit quiz question pools
 *
 * Uses dynamic imports so question data is lazy-loaded on demand rather
 * than bundled into the initial page JS (~137 kB gzip savings).
 */

export type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

/* ------------------------------------------------------------------ */
/*  Lazy loader map — each entry dynamically imports its quiz file     */
/* ------------------------------------------------------------------ */

type QuizLoader = () => Promise<{ generateExitQuiz: (count?: number) => ExitQuizQuestion[] }>

const quizLoaders: Record<string, QuizLoader> = {
  // Original math
  'sat-linear-equations-inequalities': () => import('./sat-linear-equations-inequalities'),
  'sat-quadratic-equations': () => import('./sat-quadratic-equations'),
  'sat-functions': () => import('./sat-functions'),
  'sat-exponents-radicals': () => import('./sat-exponents-radicals'),
  'sat-ratios-proportions-percents': () => import('./sat-ratios-proportions-percents'),
  'sat-statistics-data-interpretation': () => import('./sat-statistics-data-interpretation'),
  'sat-exponential-functions': () => import('./sat-exponential-functions'),
  'sat-circles': () => import('./sat-circles'),
  'sat-complex-numbers': () => import('./sat-complex-numbers'),
  // New math
  'sat-systems-linear-equations': () => import('./sat-systems-linear-equations'),
  'sat-systems-equations': () => import('./sat-systems-linear-equations'), // alias
  'sat-linear-inequalities-graphs': () => import('./sat-linear-inequalities-graphs'),
  'sat-probability-two-way-tables': () => import('./sat-probability-two-way-tables'),
  'sat-scatterplots-line-fit': () => import('./sat-scatterplots-line-fit'),
  'sat-data-statistics': () => import('./sat-data-statistics'),
  'sat-polynomials-factoring': () => import('./sat-polynomials-factoring'),
  'sat-polynomial-rational-expressions': () => import('./sat-polynomial-rational-expressions'),
  'sat-nonlinear-equations-functions': () => import('./sat-nonlinear-equations-functions'),
  'sat-geometry-trigonometry': () => import('./sat-geometry-trigonometry'),
  'sat-geometry-basics': () => import('./sat-geometry-basics'),
  // Reading
  'sat-reading-comprehension': () => import('./sat-reading-comprehension'),
  'sat-vocabulary-context': () => import('./sat-vocabulary-context'),
  'sat-central-ideas-details': () => import('./sat-central-ideas-details'),
  'sat-command-evidence': () => import('./sat-command-evidence'),
  'sat-finding-textual-evidence': () => import('./sat-finding-textual-evidence'),
  // Writing
  'sat-grammar-usage': () => import('./sat-grammar-usage'),
  'sat-grammar-conventions': () => import('./sat-grammar-conventions'),
  'sat-punctuation': () => import('./sat-punctuation'),
  'sat-punctuation-commas-semicolons': () => import('./sat-punctuation-commas-semicolons'),
  'sat-sentence-structure': () => import('./sat-sentence-structure'),
  'sat-pronoun-agreement': () => import('./sat-pronoun-agreement'),
  'sat-effective-language-use': () => import('./sat-effective-language-use'),
  'sat-transitions-organization': () => import('./sat-transitions-organization'),
  'sat-conciseness-redundancy': () => import('./sat-conciseness-redundancy'),
  'sat-subject-verb-agreement': () => import('./sat-subject-verb-agreement'),
  // Strategy
  'sat-time-management': () => import('./sat-time-management'),
  'sat-test-strategies': () => import('./sat-time-management'), // alias

  // ═══════════════════════════════════════════════════
  // MCAT Exit Quizzes
  // ═══════════════════════════════════════════════════
  // Chem/Phys
  'mcat-general-chemistry': () => import('./mcat-general-chemistry'),
  'mcat-general-chemistry-mcat': () => import('./mcat-general-chemistry'), // alias
  'mcat-organic-chemistry': () => import('./mcat-organic-chemistry'),
  'mcat-organic-chemistry-mcat': () => import('./mcat-organic-chemistry'), // alias
  'mcat-physics-mechanics': () => import('./mcat-physics-mechanics'),
  'mcat-physics-mechanics-mcat': () => import('./mcat-physics-mechanics'), // alias
  'mcat-physics-electricity': () => import('./mcat-physics-electricity'),
  'mcat-physics-electricity-mcat': () => import('./mcat-physics-electricity'), // alias
  'mcat-biochemistry': () => import('./mcat-biochemistry'),
  'mcat-biochemistry-foundations-mcat': () => import('./mcat-biochemistry'), // alias
  // CARS
  'mcat-cars': () => import('./mcat-cars'),
  'mcat-cars-strategy-mcat': () => import('./mcat-cars'), // alias
  'mcat-cars-passages-mcat': () => import('./mcat-cars'), // alias
  'mcat-cars-reasoning-mcat': () => import('./mcat-cars'), // alias
  // Bio/Biochem
  'mcat-biology': () => import('./mcat-biology'),
  'mcat-cell-biology-mcat': () => import('./mcat-biology'), // alias
  'mcat-molecular-biology-mcat': () => import('./mcat-biology'), // alias
  'mcat-microbiology-mcat': () => import('./mcat-biology'), // alias
  'mcat-organ-systems': () => import('./mcat-organ-systems'),
  'mcat-organ-systems-mcat': () => import('./mcat-organ-systems'), // alias
  'mcat-anatomy-physiology-mcat': () => import('./mcat-organ-systems'), // alias
  'mcat-genetics-evolution': () => import('./mcat-genetics-evolution'),
  'mcat-genetics-evolution-mcat': () => import('./mcat-genetics-evolution'), // alias
  // Psych/Soc
  'mcat-psychology-sociology': () => import('./mcat-psychology-sociology'),
  'mcat-psychology-behavior-mcat': () => import('./mcat-psychology-sociology'), // alias
  'mcat-sociology-mcat': () => import('./mcat-psychology-sociology'), // alias
  'mcat-science-passage-strategy-mcat': () => import('./mcat-psychology-sociology'), // alias
  'mcat-test-day-strategy-mcat': () => import('./mcat-psychology-sociology'), // alias
}

/**
 * Check whether a topic slug has an exit quiz available (synchronous).
 */
export function hasExitQuiz(topicSlug: string): boolean {
  return topicSlug in quizLoaders
}

/**
 * Generate an exit quiz for a given topic slug.
 * Dynamically loads only the requested question pool on demand.
 */
export async function generateExitQuiz(topicSlug: string, count: number = 10): Promise<ExitQuizQuestion[]> {
  const loader = quizLoaders[topicSlug]
  if (!loader) {
    throw new Error(`No exit quiz found for topic: ${topicSlug}`)
  }
  const mod = await loader()
  return mod.generateExitQuiz(count)
}
