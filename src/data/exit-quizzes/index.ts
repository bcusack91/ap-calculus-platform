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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QuizLoader = () => Promise<{ generateExitQuiz: (count?: number, topicSlug?: string) => any[] }>

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
  // AP Physics 1 Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-physics-1': () => import('./ap-physics-1'),
  // Kinematics
  'one-dimensional-motion': () => import('./ap-physics-1'),
  'motion-graphs': () => import('./ap-physics-1'),
  'two-dimensional-motion': () => import('./ap-physics-1'),
  'projectile-motion': () => import('./ap-physics-1'),
  // Dynamics
  'newtons-first-second-laws': () => import('./ap-physics-1'),
  'newtons-third-law': () => import('./ap-physics-1'),
  'friction': () => import('./ap-physics-1'),
  'inclined-planes': () => import('./ap-physics-1'),
  // Energy
  'work-and-kinetic-energy': () => import('./ap-physics-1'),
  'gravitational-potential-energy': () => import('./ap-physics-1'),
  'elastic-potential-energy': () => import('./ap-physics-1'),
  'conservation-of-energy': () => import('./ap-physics-1'),
  // Momentum
  'momentum-and-impulse': () => import('./ap-physics-1'),
  'conservation-of-momentum': () => import('./ap-physics-1'),
  'collisions': () => import('./ap-physics-1'),
  // Circular Motion & Gravitation
  'uniform-circular-motion': () => import('./ap-physics-1'),
  'centripetal-force': () => import('./ap-physics-1'),
  'universal-gravitation': () => import('./ap-physics-1'),
  // Torque & Rotation
  'torque-and-equilibrium': () => import('./ap-physics-1'),
  'rotational-kinematics': () => import('./ap-physics-1'),
  'angular-momentum': () => import('./ap-physics-1'),
  // Simple Harmonic Motion
  'introduction-to-shm': () => import('./ap-physics-1'),
  'energy-in-shm': () => import('./ap-physics-1'),

  // ═══════════════════════════════════════════════════
  // AP Physics 2 Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-physics-2': () => import('./ap-physics-2'),
  // Fluids
  'fluid-pressure': () => import('./ap-physics-2'),
  'buoyancy': () => import('./ap-physics-2'),
  'fluid-dynamics': () => import('./ap-physics-2'),
  // Thermodynamics
  'temperature-and-heat': () => import('./ap-physics-2'),
  'kinetic-theory': () => import('./ap-physics-2'),
  'thermodynamic-laws': () => import('./ap-physics-2'),
  // Electricity
  'electric-charge-and-force': () => import('./ap-physics-2'),
  'electric-fields': () => import('./ap-physics-2'),
  'electric-potential': () => import('./ap-physics-2'),
  'capacitance': () => import('./ap-physics-2'),
  // Circuits
  'dc-circuits': () => import('./ap-physics-2'),
  'rc-circuits': () => import('./ap-physics-2'),
  // Magnetism
  'magnetic-fields': () => import('./ap-physics-2'),
  'electromagnetic-induction': () => import('./ap-physics-2'),
  // Optics
  'geometric-optics': () => import('./ap-physics-2'),
  'wave-optics': () => import('./ap-physics-2'),
  // Modern Physics
  'quantum-mechanics': () => import('./ap-physics-2'),
  'nuclear-physics': () => import('./ap-physics-2'),
  'atomic-structure': () => import('./ap-physics-2'),

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

  // ═══════════════════════════════════════════════════
  // Algebra 1 Exit Quizzes
  // ═══════════════════════════════════════════════════
  'algebra-1': () => import('./algebra-1'),
  'algebraic-expressions': () => import('./algebra-1'),
  'one-step-equations': () => import('./algebra-1'),
  'multi-step-equations': () => import('./algebra-1'),
  'slope-intercept-form': () => import('./algebra-1'),
  'point-slope-form': () => import('./algebra-1'),
  'graphing-linear-equations': () => import('./algebra-1'),
  'substitution-method': () => import('./algebra-1'),
  'elimination-method': () => import('./algebra-1'),
  'systems-word-problems': () => import('./algebra-1'),
  'linear-inequalities': () => import('./algebra-1'),
  'compound-inequalities': () => import('./algebra-1'),
  'absolute-value-inequalities': () => import('./algebra-1'),
  'polynomial-operations': () => import('./algebra-1'),
  'factoring-trinomials': () => import('./algebra-1'),
  'factoring-special-products': () => import('./algebra-1'),
  'exponent-rules': () => import('./algebra-1'),
  'scientific-notation': () => import('./algebra-1'),
  'simplifying-radicals': () => import('./algebra-1'),
  'solving-linear-equations-algebra1': () => import('./algebra-1'),
  'graphing-linear-equations-algebra1': () => import('./algebra-1'),
  'linear-inequalities-algebra1': () => import('./algebra-1'),
  'solving-systems-algebra1': () => import('./algebra-1'),
  'graphing-systems-algebra1': () => import('./algebra-1'),
  'factoring-algebra1': () => import('./algebra-1'),
  'exponent-rules-algebra1': () => import('./algebra-1'),
  'solving-quadratics-algebra1': () => import('./algebra-1'),
  'functions-basics-algebra1': () => import('./algebra-1'),
  'domain-range-algebra1': () => import('./algebra-1'),

  // ═══════════════════════════════════════════════════
  // Algebra 2 Exit Quizzes
  // ═══════════════════════════════════════════════════
  'algebra-2': () => import('./algebra-2'),
  'algebra2': () => import('./algebra-2'),
  'completing-the-square': () => import('./algebra-2'),
  'quadratic-formula': () => import('./algebra-2'),
  'vertex-form': () => import('./algebra-2'),
  'polynomial-long-division': () => import('./algebra-2'),
  'synthetic-division': () => import('./algebra-2'),
  'polynomial-zeros': () => import('./algebra-2'),
  'simplifying-rationals': () => import('./algebra-2'),
  'rational-equations': () => import('./algebra-2'),
  'complex-fractions': () => import('./algebra-2'),
  'exponential-growth-decay': () => import('./algebra-2'),
  'logarithm-properties': () => import('./algebra-2'),
  'solving-log-equations': () => import('./algebra-2'),
  'radical-equations': () => import('./algebra-2'),
  'complex-numbers': () => import('./algebra-2'),
  'rational-exponents': () => import('./algebra-2'),
  'arithmetic-geometric-sequences': () => import('./algebra-2'),
  'binomial-theorem': () => import('./algebra-2'),
  'counting-probability': () => import('./algebra-2'),
  'polynomial-operations-algebra2': () => import('./algebra-2'),
  'factoring-polynomials-algebra2': () => import('./algebra-2'),
  'polynomial-theorems-algebra2': () => import('./algebra-2'),
  'rational-equations-algebra2': () => import('./algebra-2'),
  'exponential-functions-algebra2': () => import('./algebra-2'),
  'logarithmic-functions-algebra2': () => import('./algebra-2'),
  'complex-numbers-intro-algebra2': () => import('./algebra-2'),
  'radical-equations-algebra2': () => import('./algebra-2'),
  'algebra2-exponential-logarithmic': () => import('./algebra-2'),
  'algebra2-polynomial-functions': () => import('./algebra-2'),
  'algebra2-rational-expressions': () => import('./algebra-2'),
  'algebra2-sequences-series': () => import('./algebra-2'),
  'algebra2-complex-numbers': () => import('./algebra-2'),

  // ═══════════════════════════════════════════════════
  // Geometry Exit Quizzes
  // ═══════════════════════════════════════════════════
  'geometry': () => import('./geometry'),
  'triangle-congruence': () => import('./geometry'),
  'cpctc': () => import('./geometry'),
  'isosceles-equilateral-triangles': () => import('./geometry'),
  'similar-triangles': () => import('./geometry'),
  'proportional-relationships': () => import('./geometry'),
  'triangle-proportionality': () => import('./geometry'),
  'pythagorean-theorem': () => import('./geometry'),
  'special-right-triangles': () => import('./geometry'),
  'basic-trigonometry': () => import('./geometry'),
  'circle-theorems': () => import('./geometry'),
  'arc-length-sector-area': () => import('./geometry'),
  'inscribed-angles': () => import('./geometry'),
  'area-of-polygons': () => import('./geometry'),
  'surface-area': () => import('./geometry'),
  'volume-formulas': () => import('./geometry'),
  'distance-midpoint': () => import('./geometry'),
  'transformations': () => import('./geometry'),
  'slope-parallel-perpendicular': () => import('./geometry'),

  // ═══════════════════════════════════════════════════
  // Pre-Calculus Exit Quizzes
  // ═══════════════════════════════════════════════════
  'pre-calculus': () => import('./pre-calculus'),
  'precalculus': () => import('./pre-calculus'),
  'function-analysis': () => import('./pre-calculus'),
  'domain-range': () => import('./pre-calculus'),
  'polynomial-functions': () => import('./pre-calculus'),
  'rational-functions': () => import('./pre-calculus'),
  'zeros-of-polynomials': () => import('./pre-calculus'),
  'exponential-functions': () => import('./pre-calculus'),
  'logarithmic-functions': () => import('./pre-calculus'),
  'exponential-equations': () => import('./pre-calculus'),
  'unit-circle': () => import('./pre-calculus'),
  'trig-identities': () => import('./pre-calculus'),
  'trig-equations': () => import('./pre-calculus'),
  'law-of-sines': () => import('./pre-calculus'),
  'law-of-cosines': () => import('./pre-calculus'),
  'inverse-trig': () => import('./pre-calculus'),
  'arithmetic-sequences': () => import('./pre-calculus'),
  'geometric-sequences': () => import('./pre-calculus'),
  'polar-coordinates': () => import('./pre-calculus'),
  'polynomial-functions-precalc': () => import('./pre-calculus'),
  'rational-functions-precalc': () => import('./pre-calculus'),
  'exponential-functions-precalc': () => import('./pre-calculus'),
  'logarithmic-functions-precalc': () => import('./pre-calculus'),
  'function-composition-inverses-precalc': () => import('./pre-calculus'),
  'transformations-precalc': () => import('./pre-calculus'),
  'trigonometric-functions-precalc': () => import('./pre-calculus'),
  'trigonometric-identities-precalc': () => import('./pre-calculus'),
  'inverse-trig-functions-precalc': () => import('./pre-calculus'),
  'law-of-sines-cosines-precalc': () => import('./pre-calculus'),
  'polar-coordinates-precalc': () => import('./pre-calculus'),
  'vectors-two-dimensions-precalc': () => import('./pre-calculus'),

  // ═══════════════════════════════════════════════════
  // Grade 8 Math Exit Quizzes
  // ═══════════════════════════════════════════════════
  'grade-8-math': () => import('./grade-8-math'),
  'rational-irrational-numbers': () => import('./grade-8-math'),
  'approximating-irrationals': () => import('./grade-8-math'),
  'comparing-real-numbers': () => import('./grade-8-math'),
  'integer-exponents': () => import('./grade-8-math'),
  'solving-linear-equations': () => import('./grade-8-math'),
  'defining-functions': () => import('./grade-8-math'),
  'linear-functions-grade8': () => import('./grade-8-math'),
  'comparing-functions': () => import('./grade-8-math'),
  'pythagorean-theorem-grade8': () => import('./grade-8-math'),
  'volume-cylinders-cones-spheres': () => import('./grade-8-math'),
  'transformations-grade8': () => import('./grade-8-math'),
  'scatter-plots': () => import('./grade-8-math'),
  'two-way-tables': () => import('./grade-8-math'),
  'line-of-best-fit': () => import('./grade-8-math'),
  'unit-rates': () => import('./grade-8-math'),
  'proportional-relationships-grade8': () => import('./grade-8-math'),
  'slope-as-rate-of-change': () => import('./grade-8-math'),

  // ═══════════════════════════════════════════════════
  // AP Psychology Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-psychology': () => import('./ap-psychology'),
  'history-approaches-psychology': () => import('./ap-psychology'),
  'biological-bases-brain': () => import('./ap-psychology'),
  'genetics-behavior': () => import('./ap-psychology'),
  'sensation-sensory-processing': () => import('./ap-psychology'),
  'perception-attention': () => import('./ap-psychology'),
  'classical-conditioning': () => import('./ap-psychology'),
  'operant-conditioning': () => import('./ap-psychology'),
  'observational-learning-cognition': () => import('./ap-psychology'),
  'memory-encoding-storage': () => import('./ap-psychology'),
  'retrieval-forgetting': () => import('./ap-psychology'),
  'thinking-problem-solving': () => import('./ap-psychology'),
  'language-intelligence': () => import('./ap-psychology'),
  'prenatal-childhood-development': () => import('./ap-psychology'),
  'adolescence-adulthood': () => import('./ap-psychology'),
  'motivation-theories': () => import('./ap-psychology'),
  'emotion-stress': () => import('./ap-psychology'),
  'personality-theories': () => import('./ap-psychology'),
  'psychological-disorders-overview': () => import('./ap-psychology'),
  'mood-psychotic-disorders': () => import('./ap-psychology'),
  'treatment-therapy': () => import('./ap-psychology'),
  'social-influence-conformity': () => import('./ap-psychology'),
  'attitudes-persuasion': () => import('./ap-psychology'),
  'group-behavior-prejudice': () => import('./ap-psychology'),

  // ═══════════════════════════════════════════════════
  // AP Statistics Exit Quizzes
  // ═══════════════════════════════════════════════════
  'ap-statistics': () => import('./ap-statistics'),
  'types-data-sampling': () => import('./ap-statistics'),
  'displaying-distributions-graphs': () => import('./ap-statistics'),
  'describing-distributions': () => import('./ap-statistics'),
  'measures-of-center': () => import('./ap-statistics'),
  'measures-of-spread': () => import('./ap-statistics'),
  'normal-distributions': () => import('./ap-statistics'),
  'sampling-methods': () => import('./ap-statistics'),
  'observational-vs-experiments': () => import('./ap-statistics'),
  'experimental-design': () => import('./ap-statistics'),
  'bias-sampling-surveys': () => import('./ap-statistics'),
  'basic-probability-rules': () => import('./ap-statistics'),
  'conditional-probability': () => import('./ap-statistics'),
  'independence': () => import('./ap-statistics'),
  'discrete-random-variables': () => import('./ap-statistics'),
  'binomial-distribution': () => import('./ap-statistics'),
  'geometric-distribution': () => import('./ap-statistics'),
  'continuous-random-variables': () => import('./ap-statistics'),
  'sampling-distributions': () => import('./ap-statistics'),
  'central-limit-theorem': () => import('./ap-statistics'),
  'ci-proportions': () => import('./ap-statistics'),
  'ci-means': () => import('./ap-statistics'),
  'interpreting-ci': () => import('./ap-statistics'),
  'hypothesis-testing-framework': () => import('./ap-statistics'),
  'type-errors': () => import('./ap-statistics'),
  'tests-proportions': () => import('./ap-statistics'),
  'tests-means': () => import('./ap-statistics'),
  'paired-data': () => import('./ap-statistics'),
  'chi-square-tests': () => import('./ap-statistics'),
  'scatterplots-correlation': () => import('./ap-statistics'),
  'least-squares-regression': () => import('./ap-statistics'),
  'residuals-residual-plots': () => import('./ap-statistics'),
  'coefficient-determination': () => import('./ap-statistics'),
  'transformations-linearity': () => import('./ap-statistics'),
  'inference-regression': () => import('./ap-statistics'),

  // ═══════════════════════════════════════════════════
  // ACT Exit Quizzes
  // ═══════════════════════════════════════════════════
  // Math
  'act-pre-algebra-basics-act': () => import('./act'),
  'act-algebra-equations-act': () => import('./act'),
  'act-intermediate-algebra-act': () => import('./act'),
  'act-coordinate-geometry-act': () => import('./act'),
  'act-plane-geometry-act': () => import('./act'),
  'act-trigonometry-act': () => import('./act'),
  'act-statistics-probability-act': () => import('./act'),
  // English
  'act-english-grammar-act': () => import('./act'),
  'act-english-rhetorical-act': () => import('./act'),
  'act-english-punctuation-act': () => import('./act'),
  'act-english-strategy-act': () => import('./act'),
  // Reading
  'act-reading-main-ideas-act': () => import('./act'),
  'act-reading-passage-types-act': () => import('./act'),
  'act-reading-strategy-act': () => import('./act'),
  'act-reading-science-tips-act': () => import('./act'),
  // Science
  'act-science-data-act': () => import('./act'),
  'act-science-experiments-act': () => import('./act'),
  'act-science-reasoning-act': () => import('./act'),
  // Strategy
  'act-math-strategy-act': () => import('./act'),
  'act-test-day-strategy-act': () => import('./act'),
  // Legacy slug aliases
  'act-english-grammar-usage': () => import('./act'),
  'act-english-punctuation': () => import('./act'),
  'act-english-sentence-structure': () => import('./act'),
  'act-english-rhetorical-skills': () => import('./act'),
  'act-english-strategy': () => import('./act'),
  'act-math-pre-algebra': () => import('./act'),
  'act-math-elementary-algebra': () => import('./act'),
  'act-math-intermediate-algebra': () => import('./act'),
  'act-math-coordinate-geometry': () => import('./act'),
  'act-math-plane-geometry': () => import('./act'),
  'act-reading-prose-fiction': () => import('./act'),
  'act-reading-social-science': () => import('./act'),
  'act-reading-humanities': () => import('./act'),
  'act-reading-natural-science': () => import('./act'),
  'act-reading-paired-passages': () => import('./act'),
  'act-science-data-representation': () => import('./act'),
  'act-science-research-summaries': () => import('./act'),
  'act-science-conflicting-viewpoints': () => import('./act'),
  'act-science-experimental-design': () => import('./act'),
  'act-science-scientific-reasoning': () => import('./act'),
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
