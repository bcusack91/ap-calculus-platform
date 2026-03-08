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

type QuizLoader = () => Promise<{ generateExitQuiz: (count?: number, topicSlug?: string) => ExitQuizQuestion[] }>

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
  'mcat-general-chemistry-atomic-structure-mcat': () => import('./mcat-general-chemistry'),
  'mcat-general-chemistry-stoichiometry-mcat': () => import('./mcat-general-chemistry'),
  'mcat-general-chemistry-thermodynamics-mcat': () => import('./mcat-general-chemistry'),
  'mcat-general-chemistry-kinetics-mcat': () => import('./mcat-general-chemistry'),
  'mcat-general-chemistry-acid-base-equilibrium-mcat': () => import('./mcat-general-chemistry'),
  'mcat-organic-chemistry': () => import('./mcat-organic-chemistry'),
  'mcat-organic-chemistry-mcat': () => import('./mcat-organic-chemistry'), // alias
  'mcat-organic-chemistry-functional-groups-mcat': () => import('./mcat-organic-chemistry'),
  'mcat-organic-chemistry-stereochemistry-mcat': () => import('./mcat-organic-chemistry'),
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat': () => import('./mcat-organic-chemistry'),
  'mcat-organic-chemistry-carbonyls-mcat': () => import('./mcat-organic-chemistry'),
  'mcat-organic-chemistry-spectroscopy-mcat': () => import('./mcat-organic-chemistry'),
  'mcat-physics-mechanics': () => import('./mcat-physics-mechanics'),
  'mcat-physics-mechanics-mcat': () => import('./mcat-physics-mechanics'), // alias
  'mcat-physics-mechanics-kinematics-mcat': () => import('./mcat-physics-mechanics'),
  'mcat-physics-mechanics-forces-newton-laws-mcat': () => import('./mcat-physics-mechanics'),
  'mcat-physics-mechanics-work-energy-power-mcat': () => import('./mcat-physics-mechanics'),
  'mcat-physics-mechanics-momentum-collisions-mcat': () => import('./mcat-physics-mechanics'),
  'mcat-physics-mechanics-fluids-waves-mcat': () => import('./mcat-physics-mechanics'),
  'mcat-physics-electricity': () => import('./mcat-physics-electricity'),
  'mcat-physics-electricity-mcat': () => import('./mcat-physics-electricity'), // alias
  'mcat-physics-electricity-electrostatics-mcat': () => import('./mcat-physics-electricity'),
  'mcat-physics-electricity-circuits-mcat': () => import('./mcat-physics-electricity'),
  'mcat-physics-electricity-magnetism-mcat': () => import('./mcat-physics-electricity'),
  'mcat-physics-electricity-optics-mcat': () => import('./mcat-physics-electricity'),
  'mcat-physics-electricity-electrochemistry-mcat': () => import('./mcat-physics-electricity'),
  'mcat-biochemistry': () => import('./mcat-biochemistry'),
  'mcat-biochemistry-foundations-mcat': () => import('./mcat-biochemistry'), // alias
  'mcat-biochemistry-amino-acids-proteins-mcat': () => import('./mcat-biochemistry'),
  'mcat-biochemistry-enzymes-kinetics-mcat': () => import('./mcat-biochemistry'),
  'mcat-biochemistry-carbohydrate-metabolism-mcat': () => import('./mcat-biochemistry'),
  'mcat-biochemistry-lipid-metabolism-mcat': () => import('./mcat-biochemistry'),
  'mcat-biochemistry-bioenergetics-mcat': () => import('./mcat-biochemistry'),
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

  // ═══════════════════════════════════════════════════
  // AP Chemistry Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-chemistry': () => import('./ap-chemistry'),
  // Atomic Structure & Properties
  'moles-molar-mass': () => import('./ap-chemistry'),
  'electron-configuration': () => import('./ap-chemistry'),
  'periodic-trends': () => import('./ap-chemistry'),
  'photoelectron-spectroscopy': () => import('./ap-chemistry'),
  // Molecular & Ionic Compound Structure
  'types-of-chemical-bonds': () => import('./ap-chemistry'),
  'lewis-structures-formal-charge': () => import('./ap-chemistry'),
  'vsepr-molecular-geometry': () => import('./ap-chemistry'),
  'hybridization-sigma-pi-bonds': () => import('./ap-chemistry'),
  // Intermolecular Forces
  'types-intermolecular-forces': () => import('./ap-chemistry'),
  'properties-states-matter': () => import('./ap-chemistry'),
  'solutions-solubility': () => import('./ap-chemistry'),
  'ideal-gas-law': () => import('./ap-chemistry'),
  'mixtures-separations': () => import('./ap-chemistry'),
  // Chemical Reactions
  'reaction-types': () => import('./ap-chemistry'),
  'stoichiometry-limiting-reactants': () => import('./ap-chemistry'),
  'net-ionic-equations': () => import('./ap-chemistry'),
  'oxidation-reduction-reactions': () => import('./ap-chemistry'),
  // Kinetics
  'reaction-rates-and-rate-laws': () => import('./ap-chemistry'),
  'integrated-rate-laws': () => import('./ap-chemistry'),
  'activation-energy-arrhenius': () => import('./ap-chemistry'),
  'reaction-mechanisms': () => import('./ap-chemistry'),
  // Thermodynamics
  'enthalpy-calorimetry': () => import('./ap-chemistry'),
  'entropy-second-law': () => import('./ap-chemistry'),
  'gibbs-free-energy': () => import('./ap-chemistry'),
  // Equilibrium
  'equilibrium-constants-expressions': () => import('./ap-chemistry'),
  'le-chatelier-equilibrium-shifts': () => import('./ap-chemistry'),
  'intro-equilibrium': () => import('./ap-chemistry'),
  'reaction-quotient-le-chatelier': () => import('./ap-chemistry'),
  'ice-tables-calculations': () => import('./ap-chemistry'),
  'solubility-ksp': () => import('./ap-chemistry'),
  // Acids & Bases
  'acid-base-theories-ph': () => import('./ap-chemistry'),
  'weak-acids-bases-ka-kb': () => import('./ap-chemistry'),
  'buffer-solutions-henderson-hasselbalch': () => import('./ap-chemistry'),
  'acid-base-titrations': () => import('./ap-chemistry'),
  // Electrochemistry
  'galvanic-cells-potentials': () => import('./ap-chemistry'),
  'nernst-equation-concentration': () => import('./ap-chemistry'),
  'electrolytic-cells-faraday': () => import('./ap-chemistry'),
  // Thermo Applications
  'spontaneity-free-energy-applications': () => import('./ap-chemistry'),
  'galvanic-cells-thermo-applications': () => import('./ap-chemistry'),

  // ═══════════════════════════════════════════════════
  // AP Calculus AB Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-calculus-ab': () => import('./ap-calculus-ab'),
  'limits-continuity-calcab': () => import('./ap-calculus-ab'),
  'definition-of-derivative-calcab': () => import('./ap-calculus-ab'),
  'basic-differentiation-rules-calcab': () => import('./ap-calculus-ab'),
  'chain-rule-calcab': () => import('./ap-calculus-ab'),
  'inverse-functions-derivatives-calcab': () => import('./ap-calculus-ab'),
  'applications-of-derivatives-calcab': () => import('./ap-calculus-ab'),
  'optimization-calcab': () => import('./ap-calculus-ab'),
  'linearization-differentials-calcab': () => import('./ap-calculus-ab'),
  'theorem-applications-calcab': () => import('./ap-calculus-ab'),
  'particle-motion-calcab': () => import('./ap-calculus-ab'),
  'definite-integrals-calcab': () => import('./ap-calculus-ab'),
  'antiderivatives-indefinite-integrals-calcab': () => import('./ap-calculus-ab'),
  'u-substitution-calcab': () => import('./ap-calculus-ab'),
  'accumulation-functions-calcab': () => import('./ap-calculus-ab'),
  'area-between-curves-calcab': () => import('./ap-calculus-ab'),
  'volumes-of-revolution-calcab': () => import('./ap-calculus-ab'),
  'integration-applications-calcab': () => import('./ap-calculus-ab'),
  'differential-equations-calcab': () => import('./ap-calculus-ab'),
  'exponential-models-calcab': () => import('./ap-calculus-ab'),
  'tables-data-calcab': () => import('./ap-calculus-ab'),
  'free-response-strategies-calcab': () => import('./ap-calculus-ab'),
  'ap-exam-review-calcab': () => import('./ap-calculus-ab'),

  // ═══════════════════════════════════════════════════
  // AP Calculus BC Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-calculus-bc': () => import('./ap-calculus-bc'),
  'integration-by-parts-calcbc': () => import('./ap-calculus-bc'),
  'partial-fractions-calcbc': () => import('./ap-calculus-bc'),
  'improper-integrals-calcbc': () => import('./ap-calculus-bc'),
  'advanced-integration-calcbc': () => import('./ap-calculus-bc'),
  'parametric-curves-calculus-calcbc': () => import('./ap-calculus-bc'),
  'polar-calculus-calcbc': () => import('./ap-calculus-bc'),
  'vector-valued-functions-calcbc': () => import('./ap-calculus-bc'),
  'arc-length-surface-area-calcbc': () => import('./ap-calculus-bc'),
  'infinite-sequences-calcbc': () => import('./ap-calculus-bc'),
  'infinite-series-calcbc': () => import('./ap-calculus-bc'),
  'convergence-tests-summary-calcbc': () => import('./ap-calculus-bc'),
  'alternating-series-calcbc': () => import('./ap-calculus-bc'),
  'power-series-calcbc': () => import('./ap-calculus-bc'),
  'taylor-maclaurin-series-calcbc': () => import('./ap-calculus-bc'),
  'lagrange-error-bound-calcbc': () => import('./ap-calculus-bc'),
  'series-applications-calcbc': () => import('./ap-calculus-bc'),
  'euler-method-advanced-calcbc': () => import('./ap-calculus-bc'),
  'logistic-models-calcbc': () => import('./ap-calculus-bc'),
  'bc-exam-strategies-calcbc': () => import('./ap-calculus-bc'),
  'review-connections-calcbc': () => import('./ap-calculus-bc'),
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
  return mod.generateExitQuiz(count, topicSlug)
}
