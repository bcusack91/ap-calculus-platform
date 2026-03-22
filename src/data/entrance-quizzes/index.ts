/**
 * Entrance Quiz Registry
 *
 * Maps topic slugs to their entrance quiz loaders.
 * Uses dynamic imports for code splitting.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
export type { EntranceQuizQuestion }

type EntranceQuizLoader = () => Promise<{
  generateEntranceQuiz: () => EntranceQuizQuestion[]
  getEntranceQuizParts: () => { partNumber: number; partTitle: string }[]
}>

const entranceQuizLoaders: Record<string, EntranceQuizLoader> = {
  'moles-molar-mass': () => import('./moles-molar-mass'),
  'electron-configuration': () => import('./electron-configuration'),
  'periodic-trends': () => import('./periodic-trends'),
  'photoelectron-spectroscopy': () => import('./photoelectron-spectroscopy'),
  'types-of-chemical-bonds': () => import('./types-of-chemical-bonds'),
  'lewis-structures-formal-charge': () => import('./lewis-structures-formal-charge'),
  'vsepr-molecular-geometry': () => import('./vsepr-molecular-geometry'),
  'hybridization-sigma-pi-bonds': () => import('./hybridization-sigma-pi-bonds'),
  'types-intermolecular-forces': () => import('./types-intermolecular-forces'),
  'properties-states-matter': () => import('./properties-states-matter'),
  'solutions-solubility': () => import('./solutions-solubility'),
  'ideal-gas-law': () => import('./ideal-gas-law'),
  'mixtures-separations': () => import('./mixtures-separations'),
  'reaction-types': () => import('./reaction-types'),
  'stoichiometry-limiting-reactants': () => import('./stoichiometry-limiting-reactants'),
  'net-ionic-equations': () => import('./net-ionic-equations'),
  'oxidation-reduction-reactions': () => import('./oxidation-reduction-reactions'),
  'reaction-rates-and-rate-laws': () => import('./reaction-rates-and-rate-laws'),
  'integrated-rate-laws': () => import('./integrated-rate-laws'),
  'activation-energy-arrhenius': () => import('./activation-energy-arrhenius'),
  'reaction-mechanisms': () => import('./reaction-mechanisms'),
  'enthalpy-calorimetry': () => import('./enthalpy-calorimetry'),
  'entropy-second-law': () => import('./entropy-second-law'),
  'gibbs-free-energy': () => import('./gibbs-free-energy'),
  'intro-equilibrium': () => import('./intro-equilibrium'),
  'reaction-quotient-le-chatelier': () => import('./reaction-quotient-le-chatelier'),
  'ice-tables-calculations': () => import('./ice-tables-calculations'),
  'solubility-ksp': () => import('./solubility-ksp'),
  'acid-base-theories-ph': () => import('./acid-base-theories-ph'),
  'weak-acids-bases-ka-kb': () => import('./weak-acids-bases-ka-kb'),
  'buffer-solutions-henderson-hasselbalch': () => import('./buffer-solutions-henderson-hasselbalch'),
  'acid-base-titrations': () => import('./acid-base-titrations'),
  'galvanic-cells-potentials': () => import('./galvanic-cells-potentials'),
  'nernst-equation-concentration': () => import('./nernst-equation-concentration'),
  'electrolytic-cells-faraday': () => import('./electrolytic-cells-faraday'),
  'equilibrium-constants-expressions': () => import('./equilibrium-constants-expressions'),
  'le-chatelier-equilibrium-shifts': () => import('./le-chatelier-equilibrium-shifts'),
  'spontaneity-free-energy-applications': () => import('./spontaneity-free-energy-applications'),
  'galvanic-cells-thermo-applications': () => import('./galvanic-cells-thermo-applications'),

  // AP Physics 1
  'one-dimensional-motion': () => import('./one-dimensional-motion'),
  'motion-graphs': () => import('./motion-graphs'),
  'two-dimensional-motion': () => import('./two-dimensional-motion'),
  'projectile-motion': () => import('./projectile-motion'),
  'newtons-first-second-laws': () => import('./newtons-first-second-laws'),
  'newtons-third-law': () => import('./newtons-third-law'),
  'friction': () => import('./friction'),
  'inclined-planes': () => import('./inclined-planes'),
  'work-and-kinetic-energy': () => import('./work-and-kinetic-energy'),
  'gravitational-potential-energy': () => import('./gravitational-potential-energy'),
  'elastic-potential-energy': () => import('./elastic-potential-energy'),
  'conservation-of-energy': () => import('./conservation-of-energy'),
  'momentum-and-impulse': () => import('./momentum-and-impulse'),
  'conservation-of-momentum': () => import('./conservation-of-momentum'),
  'collisions': () => import('./collisions'),
  'uniform-circular-motion': () => import('./uniform-circular-motion'),
  'centripetal-force': () => import('./centripetal-force'),
  'universal-gravitation': () => import('./universal-gravitation'),
  'torque-and-equilibrium': () => import('./torque-and-equilibrium'),
  'rotational-kinematics': () => import('./rotational-kinematics'),
  'angular-momentum': () => import('./angular-momentum'),
  'introduction-to-shm': () => import('./introduction-to-shm'),
  'energy-in-shm': () => import('./energy-in-shm'),

  // AP Physics 2
  'fluid-pressure': () => import('./fluid-pressure'),
  'buoyancy': () => import('./buoyancy'),
  'fluid-dynamics': () => import('./fluid-dynamics'),
  'temperature-and-heat': () => import('./temperature-and-heat'),
  'kinetic-theory': () => import('./kinetic-theory'),
  'thermodynamic-laws': () => import('./thermodynamic-laws'),
  'electric-charge-and-force': () => import('./electric-charge-and-force'),
  'electric-fields': () => import('./electric-fields'),
  'electric-potential': () => import('./electric-potential'),
  'capacitance': () => import('./capacitance'),
  'dc-circuits': () => import('./dc-circuits'),
  'rc-circuits': () => import('./rc-circuits'),
  'magnetic-fields': () => import('./magnetic-fields'),
  'electromagnetic-induction': () => import('./electromagnetic-induction'),
  'geometric-optics': () => import('./geometric-optics'),
  'wave-optics': () => import('./wave-optics'),
  'quantum-mechanics': () => import('./quantum-mechanics'),
  'nuclear-physics': () => import('./nuclear-physics'),
  'atomic-structure': () => import('./atomic-structure'),

  // AP Calculus AB
  'limits-continuity-calcab': () => import('./limits-continuity-calcab'),
  'definition-of-derivative-calcab': () => import('./definition-of-derivative-calcab'),
  'basic-differentiation-rules-calcab': () => import('./basic-differentiation-rules-calcab'),
  'chain-rule-calcab': () => import('./chain-rule-calcab'),
  'inverse-functions-derivatives-calcab': () => import('./inverse-functions-derivatives-calcab'),
  'applications-of-derivatives-calcab': () => import('./applications-of-derivatives-calcab'),
  'optimization-calcab': () => import('./optimization-calcab'),
  'linearization-differentials-calcab': () => import('./linearization-differentials-calcab'),
  'theorem-applications-calcab': () => import('./theorem-applications-calcab'),
  'particle-motion-calcab': () => import('./particle-motion-calcab'),
  'definite-integrals-calcab': () => import('./definite-integrals-calcab'),
  'antiderivatives-indefinite-integrals-calcab': () => import('./antiderivatives-indefinite-integrals-calcab'),
  'u-substitution-calcab': () => import('./u-substitution-calcab'),
  'accumulation-functions-calcab': () => import('./accumulation-functions-calcab'),
  'area-between-curves-calcab': () => import('./area-between-curves-calcab'),
  'volumes-of-revolution-calcab': () => import('./volumes-of-revolution-calcab'),
  'integration-applications-calcab': () => import('./integration-applications-calcab'),
  'differential-equations-calcab': () => import('./differential-equations-calcab'),
  'exponential-models-calcab': () => import('./exponential-models-calcab'),
  'tables-data-calcab': () => import('./tables-data-calcab'),
  'free-response-strategies-calcab': () => import('./free-response-strategies-calcab'),
  'ap-exam-review-calcab': () => import('./ap-exam-review-calcab'),

  // AP Calculus BC
  'integration-by-parts-calcbc': () => import('./integration-by-parts-calcbc'),
  'partial-fractions-calcbc': () => import('./partial-fractions-calcbc'),
  'improper-integrals-calcbc': () => import('./improper-integrals-calcbc'),
  'advanced-integration-calcbc': () => import('./advanced-integration-calcbc'),
  'parametric-curves-calculus-calcbc': () => import('./parametric-curves-calculus-calcbc'),
  'polar-calculus-calcbc': () => import('./polar-calculus-calcbc'),
  'vector-valued-functions-calcbc': () => import('./vector-valued-functions-calcbc'),
  'arc-length-surface-area-calcbc': () => import('./arc-length-surface-area-calcbc'),
  'infinite-sequences-calcbc': () => import('./infinite-sequences-calcbc'),
  'infinite-series-calcbc': () => import('./infinite-series-calcbc'),
  'convergence-tests-summary-calcbc': () => import('./convergence-tests-summary-calcbc'),
  'alternating-series-calcbc': () => import('./alternating-series-calcbc'),
  'power-series-calcbc': () => import('./power-series-calcbc'),
  'taylor-maclaurin-series-calcbc': () => import('./taylor-maclaurin-series-calcbc'),
  'lagrange-error-bound-calcbc': () => import('./lagrange-error-bound-calcbc'),
  'series-applications-calcbc': () => import('./series-applications-calcbc'),
  'euler-method-advanced-calcbc': () => import('./euler-method-advanced-calcbc'),
  'logistic-models-calcbc': () => import('./logistic-models-calcbc'),
  'bc-exam-strategies-calcbc': () => import('./bc-exam-strategies-calcbc'),
  'review-connections-calcbc': () => import('./review-connections-calcbc'),

  // AP Biology
  'water-properties-biochemistry': () => import('./water-properties-biochemistry'),
  'biological-macromolecules': () => import('./biological-macromolecules'),
  'enzyme-structure-function': () => import('./enzyme-structure-function'),
  'cell-structure-organelles': () => import('./cell-structure-organelles'),
  'membrane-transport': () => import('./membrane-transport'),
  'cell-compartmentalization': () => import('./cell-compartmentalization'),
  'cellular-respiration': () => import('./cellular-respiration'),
  'photosynthesis': () => import('./photosynthesis'),
  'fitness-environment': () => import('./fitness-environment'),
  'cell-communication-signaling': () => import('./cell-communication-signaling'),
  'cell-cycle-mitosis': () => import('./cell-cycle-mitosis'),
  'feedback-mechanisms': () => import('./feedback-mechanisms'),
  'meiosis-genetic-diversity': () => import('./meiosis-genetic-diversity'),
  'mendelian-genetics': () => import('./mendelian-genetics'),
  'non-mendelian-genetics': () => import('./non-mendelian-genetics'),
  'dna-replication': () => import('./dna-replication'),
  'transcription-translation': () => import('./transcription-translation'),
  'gene-regulation': () => import('./gene-regulation'),
  'biotechnology': () => import('./biotechnology'),
  'evidence-evolution': () => import('./evidence-evolution'),
  'natural-selection-adaptation': () => import('./natural-selection-adaptation'),
  'speciation-macroevolution': () => import('./speciation-macroevolution'),
  'ecology-ecosystems': () => import('./ecology-ecosystems'),
  'energy-flow-nutrient-cycling': () => import('./energy-flow-nutrient-cycling'),
  'population-community-ecology': () => import('./population-community-ecology'),

  // AP Psychology
  'history-approaches-psychology': () => import('./history-approaches-psychology'),
  'biological-bases-brain': () => import('./biological-bases-brain'),
  'genetics-behavior': () => import('./genetics-behavior'),
  'sensation-sensory-processing': () => import('./sensation-sensory-processing'),
  'perception-attention': () => import('./perception-attention'),
  'classical-conditioning': () => import('./classical-conditioning'),
  'operant-conditioning': () => import('./operant-conditioning'),
  'observational-learning-cognition': () => import('./observational-learning-cognition'),
  'memory-encoding-storage': () => import('./memory-encoding-storage'),
  'retrieval-forgetting': () => import('./retrieval-forgetting'),
  'thinking-problem-solving': () => import('./thinking-problem-solving'),
  'language-intelligence': () => import('./language-intelligence'),
  'prenatal-childhood-development': () => import('./prenatal-childhood-development'),
  'adolescence-adulthood': () => import('./adolescence-adulthood'),
  'motivation-theories': () => import('./motivation-theories'),
  'emotion-stress': () => import('./emotion-stress'),
  'personality-theories': () => import('./personality-theories'),
  'psychological-disorders-overview': () => import('./psychological-disorders-overview'),
  'mood-psychotic-disorders': () => import('./mood-psychotic-disorders'),
  'treatment-therapy': () => import('./treatment-therapy'),
  'social-influence-conformity': () => import('./social-influence-conformity'),
  'attitudes-persuasion': () => import('./attitudes-persuasion'),
  'group-behavior-prejudice': () => import('./group-behavior-prejudice'),

  // AP Statistics
  'types-data-sampling': () => import('./types-data-sampling'),
  'displaying-distributions-graphs': () => import('./displaying-distributions-graphs'),
  'describing-distributions': () => import('./describing-distributions'),
  'measures-of-center': () => import('./measures-of-center'),
  'measures-of-spread': () => import('./measures-of-spread'),
  'normal-distributions': () => import('./normal-distributions'),
  'sampling-methods': () => import('./sampling-methods'),
  'observational-vs-experiments': () => import('./observational-vs-experiments'),
  'experimental-design': () => import('./experimental-design'),
  'bias-sampling-surveys': () => import('./bias-sampling-surveys'),
  'basic-probability-rules': () => import('./basic-probability-rules'),
  'conditional-probability': () => import('./conditional-probability'),
  'independence': () => import('./independence'),
  'discrete-random-variables': () => import('./discrete-random-variables'),
  'binomial-distribution': () => import('./binomial-distribution'),
  'geometric-distribution': () => import('./geometric-distribution'),
  'continuous-random-variables': () => import('./continuous-random-variables'),
  'sampling-distributions': () => import('./sampling-distributions'),
  'central-limit-theorem': () => import('./central-limit-theorem'),
  'ci-proportions': () => import('./ci-proportions'),
  'ci-means': () => import('./ci-means'),
  'interpreting-ci': () => import('./interpreting-ci'),
  'hypothesis-testing-framework': () => import('./hypothesis-testing-framework'),
  'type-errors': () => import('./type-errors'),
  'tests-proportions': () => import('./tests-proportions'),
  'tests-means': () => import('./tests-means'),
  'paired-data': () => import('./paired-data'),
  'chi-square-tests': () => import('./chi-square-tests'),
  'scatterplots-correlation': () => import('./scatterplots-correlation'),
  'least-squares-regression': () => import('./least-squares-regression'),
  'residuals-residual-plots': () => import('./residuals-residual-plots'),
  'coefficient-determination': () => import('./coefficient-determination'),
  'transformations-linearity': () => import('./transformations-linearity'),
  'inference-regression': () => import('./inference-regression'),

  // ACT — Math
  'act-pre-algebra-basics-act': () => import('./act-pre-algebra-basics-act'),
  'act-algebra-equations-act': () => import('./act-algebra-equations-act'),
  'act-intermediate-algebra-act': () => import('./act-intermediate-algebra-act'),
  'act-coordinate-geometry-act': () => import('./act-coordinate-geometry-act'),
  'act-plane-geometry-act': () => import('./act-plane-geometry-act'),
  'act-trigonometry-act': () => import('./act-trigonometry-act'),
  'act-statistics-probability-act': () => import('./act-statistics-probability-act'),

  // ACT — English
  'act-english-grammar-act': () => import('./act-english-grammar-act'),
  'act-english-rhetorical-act': () => import('./act-english-rhetorical-act'),
  'act-english-punctuation-act': () => import('./act-english-punctuation-act'),
  'act-english-strategy-act': () => import('./act-english-strategy-act'),

  // ACT — Reading
  'act-reading-main-ideas-act': () => import('./act-reading-main-ideas-act'),
  'act-reading-passage-types-act': () => import('./act-reading-passage-types-act'),
  'act-reading-strategy-act': () => import('./act-reading-strategy-act'),
  'act-reading-science-tips-act': () => import('./act-reading-science-tips-act'),

  // ACT — Science
  'act-science-data-act': () => import('./act-science-data-act'),
  'act-science-experiments-act': () => import('./act-science-experiments-act'),
  'act-science-reasoning-act': () => import('./act-science-reasoning-act'),

  // ACT — Strategy
  'act-math-strategy-act': () => import('./act-math-strategy-act'),
  'act-test-day-strategy-act': () => import('./act-test-day-strategy-act'),

  // ═══════════════════════════════════════════════════
  // SAT Entrance Quizzes
  // ═══════════════════════════════════════════════════
  // Math
  'sat-linear-equations-sat': () => import('./sat-linear-equations-sat'),
  'sat-quadratic-equations-sat': () => import('./sat-quadratic-equations-sat'),
  'sat-functions-graphs-sat': () => import('./sat-functions-graphs-sat'),
  'sat-exponents-radicals-sat': () => import('./sat-exponents-radicals-sat'),
  'sat-polynomials-factoring-sat': () => import('./sat-polynomials-factoring-sat'),
  'sat-ratios-proportions-sat': () => import('./sat-ratios-proportions-sat'),
  'sat-geometry-angles-sat': () => import('./sat-geometry-angles-sat'),
  'sat-data-statistics-sat': () => import('./sat-data-statistics-sat'),
  'sat-exponential-functions-sat': () => import('./sat-exponential-functions-sat'),
  'sat-circles-trig-sat': () => import('./sat-circles-trig-sat'),
  'sat-complex-numbers-sat': () => import('./sat-complex-numbers-sat'),
  'sat-passport-advanced-math-sat': () => import('./sat-passport-advanced-math-sat'),
  'sat-word-problems-sat': () => import('./sat-word-problems-sat'),
  'sat-problem-solving-data-sat': () => import('./sat-problem-solving-data-sat'),
  // Reading & Writing
  'sat-reading-evidence-sat': () => import('./sat-reading-evidence-sat'),
  'sat-punctuation-sat': () => import('./sat-punctuation-sat'),
  'sat-punctuation-commas-semicolons-sat': () => import('./sat-punctuation-commas-semicolons-sat'),
  'sat-grammar-conventions-sat': () => import('./sat-grammar-conventions-sat'),
  'sat-expression-ideas-sat': () => import('./sat-expression-ideas-sat'),
  // Strategy
  'sat-calculator-strategy-sat': () => import('./sat-calculator-strategy-sat'),
  'sat-reading-writing-strategy-sat': () => import('./sat-reading-writing-strategy-sat'),
  'sat-test-day-strategy-sat': () => import('./sat-test-day-strategy-sat'),

  // ═══════════════════════════════════════════════════
  // MCAT Entrance Quizzes
  // ═══════════════════════════════════════════════════
  // General Chemistry
  'mcat-general-chemistry-mcat': () => import('./mcat-general-chemistry-mcat'),
  'mcat-general-chemistry-atomic-structure-mcat': () => import('./mcat-general-chemistry-atomic-structure-mcat'),
  'mcat-general-chemistry-stoichiometry-mcat': () => import('./mcat-general-chemistry-stoichiometry-mcat'),
  'mcat-general-chemistry-acid-base-equilibrium-mcat': () => import('./mcat-general-chemistry-acid-base-equilibrium-mcat'),
  'mcat-general-chemistry-kinetics-mcat': () => import('./mcat-general-chemistry-kinetics-mcat'),
  'mcat-general-chemistry-thermodynamics-mcat': () => import('./mcat-general-chemistry-thermodynamics-mcat'),
  // Organic Chemistry
  'mcat-organic-chemistry-mcat': () => import('./mcat-organic-chemistry-mcat'),
  // Physics
  'mcat-physics-mechanics-mcat': () => import('./mcat-physics-mechanics-mcat'),
  'mcat-physics-electricity-mcat': () => import('./mcat-physics-electricity-mcat'),
  // Biochemistry
  'mcat-biochemistry-foundations-mcat': () => import('./mcat-biochemistry-foundations-mcat'),
  // CARS
  'mcat-cars-strategy-mcat': () => import('./mcat-cars-strategy-mcat'),
  'mcat-cars-passages-mcat': () => import('./mcat-cars-passages-mcat'),
  'mcat-cars-reasoning-mcat': () => import('./mcat-cars-reasoning-mcat'),
  // Biology
  'mcat-cell-biology-mcat': () => import('./mcat-cell-biology-mcat'),
  'mcat-molecular-biology-mcat': () => import('./mcat-molecular-biology-mcat'),
  'mcat-organ-systems-mcat': () => import('./mcat-organ-systems-mcat'),
  'mcat-genetics-evolution-mcat': () => import('./mcat-genetics-evolution-mcat'),
  'mcat-anatomy-physiology-mcat': () => import('./mcat-anatomy-physiology-mcat'),
  'mcat-microbiology-mcat': () => import('./mcat-microbiology-mcat'),
  // Psychology & Sociology
  'mcat-psychology-behavior-mcat': () => import('./mcat-psychology-behavior-mcat'),
  'mcat-sociology-mcat': () => import('./mcat-sociology-mcat'),
  // Strategy
  'mcat-science-passage-strategy-mcat': () => import('./mcat-science-passage-strategy-mcat'),
  'mcat-test-day-strategy-mcat': () => import('./mcat-test-day-strategy-mcat'),

  // Algebra 1
  'algebra-1': () => import('./algebra-1-intro'),
  'algebraic-expressions': () => import('./algebra-1-intro'),
  'one-step-equations': () => import('./algebra-1-intro'),
  'multi-step-equations': () => import('./algebra-1-intro'),
  'slope-intercept-form': () => import('./algebra-1-intro'),
  'graphing-linear-equations': () => import('./algebra-1-intro'),
  'substitution-method': () => import('./algebra-1-intro'),
  'elimination-method': () => import('./algebra-1-intro'),
  'linear-inequalities': () => import('./algebra-1-intro'),
  'polynomial-operations': () => import('./algebra-1-intro'),
  'factoring-trinomials': () => import('./algebra-1-intro'),
  'exponent-rules': () => import('./algebra-1-intro'),
  'solving-linear-equations-algebra1': () => import('./algebra-1-intro'),
  'graphing-linear-equations-algebra1': () => import('./algebra-1-intro'),
  'linear-inequalities-algebra1': () => import('./algebra-1-intro'),
  'solving-systems-algebra1': () => import('./algebra-1-intro'),
  'factoring-algebra1': () => import('./algebra-1-intro'),
  'solving-quadratics-algebra1': () => import('./algebra-1-intro'),
  'functions-basics-algebra1': () => import('./algebra-1-intro'),

  // Algebra 2
  'algebra-2': () => import('./algebra-2-intro'),
  'algebra2': () => import('./algebra-2-intro'),
  'completing-the-square': () => import('./algebra-2-intro'),
  'quadratic-formula': () => import('./algebra-2-intro'),
  'vertex-form': () => import('./algebra-2-intro'),
  'polynomial-long-division': () => import('./algebra-2-intro'),
  'synthetic-division': () => import('./algebra-2-intro'),
  'polynomial-zeros': () => import('./algebra-2-intro'),
  'simplifying-rationals': () => import('./algebra-2-intro'),
  'rational-equations': () => import('./algebra-2-intro'),
  'exponential-growth-decay': () => import('./algebra-2-intro'),
  'logarithm-properties': () => import('./algebra-2-intro'),
  'complex-numbers': () => import('./algebra-2-intro'),
  'rational-exponents': () => import('./algebra-2-intro'),
  'arithmetic-geometric-sequences': () => import('./algebra-2-intro'),
  'binomial-theorem': () => import('./algebra-2-intro'),
  'polynomial-functions-algebra2': () => import('./algebra-2-intro'),
  'exponential-functions-algebra2': () => import('./algebra-2-intro'),
  'logarithmic-functions-algebra2': () => import('./algebra-2-intro'),
  'complex-numbers-intro-algebra2': () => import('./algebra-2-intro'),

  // Geometry
  'geometry': () => import('./geometry-intro'),
  'triangle-congruence': () => import('./geometry-intro'),
  'similar-triangles': () => import('./geometry-intro'),
  'pythagorean-theorem': () => import('./geometry-intro'),
  'special-right-triangles': () => import('./geometry-intro'),
  'basic-trigonometry': () => import('./geometry-intro'),
  'circle-theorems': () => import('./geometry-intro'),
  'arc-length-sector-area': () => import('./geometry-intro'),
  'inscribed-angles': () => import('./geometry-intro'),
  'area-of-polygons': () => import('./geometry-intro'),
  'surface-area': () => import('./geometry-intro'),
  'volume-formulas': () => import('./geometry-intro'),
  'distance-midpoint': () => import('./geometry-intro'),
  'transformations': () => import('./geometry-intro'),
  'slope-parallel-perpendicular': () => import('./geometry-intro'),

  // Pre-Calculus
  'pre-calculus': () => import('./pre-calculus-intro'),
  'precalculus': () => import('./pre-calculus-intro'),
  'function-analysis': () => import('./pre-calculus-intro'),
  'polynomial-functions': () => import('./pre-calculus-intro'),
  'rational-functions': () => import('./pre-calculus-intro'),
  'zeros-of-polynomials': () => import('./pre-calculus-intro'),
  'exponential-functions': () => import('./pre-calculus-intro'),
  'logarithmic-functions': () => import('./pre-calculus-intro'),
  'unit-circle': () => import('./pre-calculus-intro'),
  'trig-identities': () => import('./pre-calculus-intro'),
  'trig-equations': () => import('./pre-calculus-intro'),
  'law-of-sines': () => import('./pre-calculus-intro'),
  'law-of-cosines': () => import('./pre-calculus-intro'),
  'inverse-trig': () => import('./pre-calculus-intro'),
  'arithmetic-sequences': () => import('./pre-calculus-intro'),
  'geometric-sequences': () => import('./pre-calculus-intro'),
  'polar-coordinates': () => import('./pre-calculus-intro'),
  'polynomial-functions-precalc': () => import('./pre-calculus-intro'),
}

/**
 * Check if a topic has an entrance quiz available.
 */
export function hasEntranceQuiz(topicSlug: string): boolean {
  return topicSlug in entranceQuizLoaders
}

/**
 * Load and generate entrance quiz questions for a topic.
 * Returns null if no entrance quiz exists for the topic.
 */
export async function loadEntranceQuiz(topicSlug: string): Promise<{
  questions: EntranceQuizQuestion[]
  parts: { partNumber: number; partTitle: string }[]
} | null> {
  const loader = entranceQuizLoaders[topicSlug]
  if (!loader) return null
  const mod = await loader()
  return {
    questions: mod.generateEntranceQuiz(),
    parts: mod.getEntranceQuizParts(),
  }
}
