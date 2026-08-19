// Dynamic import registry - lesson data is loaded on-demand
// This avoids bundling all 500+ lesson files into one chunk

type LessonSection = {
  id?: string
  content?: string
  [key: string]: unknown
}

export type LessonData = {
  topicSlug: string
  sections: LessonSection[]
}

interface LazyPartConfig {
  title: string
  loader: () => Promise<LessonData>
}

export interface InteractiveTopicConfig {
  parts: LazyPartConfig[]
  /** Variant content: keys are variant numbers (2, 3). Variant 1 = default parts. */
  variants?: Record<number, LazyPartConfig[]>
  completionDestination?: 'competitive' | 'complete'
  practiceModeParts?: number[]
}

import { registryChunk0 } from './registry-chunk-0'
import { registryChunk1 } from './registry-chunk-1'
import { registryChunk2 } from './registry-chunk-2'
import { registryChunk3 } from './registry-chunk-3'
import { registryChunk4 } from './registry-chunk-4'
import { registryExtra } from './registry-extra'

const interactiveLessonRegistry: Record<string, InteractiveTopicConfig> = {
  ...registryChunk0,
  ...registryChunk1,
  ...registryChunk2,
  ...registryChunk3,
  ...registryChunk4,
  // Hand-authored lessons for previously-uncovered topics (see registry-extra.ts).
  ...registryExtra,
}

// ---------------------------------------------------------------------------
// Slug alias map: maps correct DB slugs → orphan registry slugs
// This recovers hand-crafted interactive lessons that were registered
// under a slightly different slug naming convention.
// ---------------------------------------------------------------------------
const slugAliases: Record<string, string> = {
  // AP Statistics — wire CED-aligned topic slugs to existing interactive lessons
  // Unit 1: Exploring One-Variable Data
  'types-data-sampling': 'exploratory-data-apstats',
  'displaying-distributions-graphs': 'exploratory-data-apstats',
  'describing-distributions': 'describing-distributions-apstats',
  'measures-of-center': 'exploratory-data-apstats',
  'measures-of-spread': 'exploratory-data-apstats',
  'normal-distributions': 'normal-distribution-apstats',
  // Unit 2: Exploring Two-Variable Data
  'scatterplots-correlation': 'linear-regression-apstats',
  'least-squares-regression': 'linear-regression-apstats',
  'residuals-residual-plots': 'linear-regression-apstats',
  'coefficient-determination': 'linear-regression-apstats',
  'transformations-linearity': 'linear-regression-apstats',
  // Unit 3: Collecting Data
  'sampling-methods': 'collecting-data-apstats',
  'observational-vs-experiments': 'experimental-design-apstats',
  'experimental-design': 'experimental-design-apstats',
  'bias-sampling-surveys': 'collecting-data-apstats',
  // Unit 4: Probability, Random Variables & Distributions
  'basic-probability-rules': 'probability-rules-apstats',
  'conditional-probability': 'probability-rules-apstats',
  'independence': 'probability-rules-apstats',
  'discrete-random-variables': 'discrete-random-variables-apstats',
  'mean-sd-random-variables': 'discrete-random-variables-apstats',
  'combining-random-variables': 'discrete-random-variables-apstats',
  'binomial-distribution': 'binomial-geometric-apstats',
  'geometric-distribution': 'binomial-geometric-apstats',
  'continuous-random-variables': 'probability-distributions-apstats',
  // Unit 5: Sampling Distributions
  'sampling-distributions': 'sampling-distributions-apstats',
  'central-limit-theorem': 'sampling-distributions-apstats',
  'sampling-distribution-sample-mean': 'sampling-distributions-apstats',
  'sampling-distribution-sample-proportion': 'sampling-distributions-apstats',
  // Unit 6: Inference for Categorical Data — Proportions
  'ci-proportions': 'proportions-inference-apstats',
  'tests-proportions': 'proportions-inference-apstats',
  'two-sample-proportions': 'comparing-populations-apstats',
  // Unit 7: Inference for Quantitative Data — Means
  'hypothesis-testing-framework': 'hypothesis-testing-apstats',
  'type-errors': 'type-errors-power-apstats',
  'ci-means': 'means-inference-apstats',
  'interpreting-ci': 'confidence-intervals-apstats',
  'tests-means': 'means-inference-apstats',
  'paired-data': 'comparing-populations-apstats',
  'two-sample-means': 'comparing-populations-apstats',
  // Unit 8: Inference for Categorical Data — Chi-Square
  'chi-square-tests': 'chi-square-tests-apstats',
  'chi-square-independence-homogeneity': 'chi-square-tests-apstats',
  // Unit 9: Inference for Quantitative Data — Slopes
  'inference-regression': 'inference-regression-apstats',
  // AP Biology
  'cell-organelles': 'cell-structure-organelles',
  'cell-membrane-transport': 'membrane-transport',
  'cell-signaling': 'cell-communication-signaling',
  'meiosis': 'meiosis-genetic-diversity',
  'translation': 'transcription-translation',
  'transcription-rna-processing': 'transcription-translation',
  'natural-selection': 'natural-selection-adaptation',
  'community-ecology': 'population-community-ecology',
  'water-properties': 'water-properties-biochemistry',
  // Other AP Bio aliases pointing to existing hand-crafted lessons
  'enzymes-metabolism': 'enzyme-structure-function',
  'enzyme-kinetics': 'enzyme-structure-function',
  'prokaryotic-eukaryotic-cells': 'cell-structure-organelles',
  'population-ecology': 'population-community-ecology',
  'ecosystems-energy': 'population-community-ecology',
  'population-dynamics': 'population-community-ecology',
  'speciation': 'speciation-macroevolution',
  'phylogeny-classification': 'speciation-macroevolution',
  'chromosomal-inheritance': 'chromosomal-inheritance-patterns',
  // SAT Prep
  'sat-quadratic-equations': 'sat-quadratic-equations-sat',
  'sat-exponents-radicals': 'sat-exponents-radicals-sat',
  'sat-complex-numbers': 'sat-complex-numbers-sat',
  'sat-grammar-conventions': 'sat-grammar-conventions-sat',
  'sat-punctuation': 'sat-punctuation-sat',
  'sat-punctuation-commas-semicolons': 'sat-punctuation-commas-semicolons-sat',
  'sat-ratios-proportions-percents': 'sat-ratios-proportions-sat',
  'sat-exponential-functions': 'sat-exponential-functions-sat',
  'sat-circles': 'sat-circles-trig-sat',
  'sat-linear-equations-inequalities': 'sat-linear-equations-sat',
  'sat-statistics-data-interpretation': 'sat-data-statistics-sat',
  'sat-reading-comprehension': 'sat-reading-evidence-sat',
  'sat-functions': 'sat-functions-graphs-sat',
  'sat-geometry-trigonometry': 'sat-geometry-angles-sat',
  'sat-word-problems': 'sat-word-problems-sat',
  'sat-passport-advanced-math': 'sat-passport-advanced-math-sat',
  'sat-problem-solving-data': 'sat-problem-solving-data-sat',
  'sat-calculator-strategy': 'sat-calculator-strategy-sat',
  'sat-reading-writing-strategy': 'sat-reading-writing-strategy-sat',
  'sat-test-day-strategy': 'sat-test-day-strategy-sat',
  'sat-expression-ideas': 'sat-expression-ideas-sat',
  'sat-polynomials-factoring': 'sat-polynomials-factoring-sat',
  // ACT Prep
  'act-statistics-probability': 'act-statistics-probability-act',
  'act-rhetorical-skills': 'act-english-rhetorical-act',
  'act-data-representation': 'act-science-data-act',
  'act-reading-strategies': 'act-reading-strategy-act',
  'act-pre-algebra-elementary': 'act-pre-algebra-basics-act',
  'act-algebra-functions': 'act-algebra-equations-act',
  'act-geometry-trigonometry': 'act-plane-geometry-act',
  // AP Precalculus
  'polynomial-functions-end-behavior-precalc': 'polynomial-functions-precalc',
  'logarithmic-functions-equations-precalc': 'logarithmic-functions-precalc',
  'trigonometric-identities': 'trigonometric-identities-precalc',
  // SAT — wire real Topic slugs to their interactive lessons so /topics/<slug>
  // loads the lesson (the other 11 SAT topics already match a registry key).
  'sat-central-ideas-details': 'sat-reading-evidence-sat',
  'sat-vocabulary-context': 'sat-reading-evidence-sat',
  'sat-finding-textual-evidence': 'sat-reading-evidence-sat',
  'sat-conciseness-redundancy': 'sat-expression-ideas-sat',
  'sat-transitions-organization': 'sat-expression-ideas-sat',
  'sat-grammar-usage': 'sat-grammar-conventions-sat',
  'sat-sentence-structure': 'sat-grammar-conventions-sat',
  'sat-pronoun-agreement': 'sat-grammar-conventions-sat',
  'sat-data-statistics': 'sat-data-statistics-sat',
  'sat-probability-two-way-tables': 'sat-problem-solving-data-sat',
  'sat-scatterplots-line-fit': 'sat-problem-solving-data-sat',
  'sat-geometry-basics': 'sat-geometry-angles-sat',
  'sat-linear-inequalities-graphs': 'sat-linear-equations-sat',
  'sat-systems-equations': 'sat-linear-equations-sat',
  'sat-systems-linear-equations': 'sat-linear-equations-sat',
  'sat-nonlinear-equations-functions': 'sat-functions-graphs-sat',
  'sat-polynomial-rational-expressions': 'sat-polynomials-factoring-sat',
  'sat-time-management': 'sat-test-day-strategy-sat',
  // SAT — legacy linking slugs used by daily-question/test-generator vocab
  'sat-command-evidence': 'sat-reading-evidence-sat',
  'sat-subject-verb-agreement': 'sat-grammar-conventions-sat',
  'sat-effective-language-use': 'sat-expression-ideas-sat',
  // AP Physics C: Mechanics — wire real Topic slugs to the hand-crafted
  // calculus-based lesson suites (registry keys use a different vocabulary).
  'physics-c-position-velocity-acceleration': '1d-kinematics-physics-c',
  'physics-c-variable-acceleration': 'variable-acceleration-physics-c',
  'physics-c-newtons-laws-calculus': 'newtons-laws-physics-c',
  'physics-c-friction-inclines': 'friction-inclines-physics-c',
  'physics-c-circular-motion': 'circular-motion-physics-c',
  'physics-c-work-power': 'work-energy-theorem-physics-c',
  'physics-c-conservative-forces': 'conservative-forces-physics-c',
  'physics-c-momentum-collisions': 'momentum-impulse-physics-c',
  'physics-c-center-of-mass': 'center-of-mass-physics-c',
  'physics-c-rotational-kinematics-dynamics': 'rotational-dynamics-physics-c',
  'physics-c-moment-of-inertia': 'rotational-dynamics-physics-c',
  'physics-c-angular-momentum': 'angular-momentum-physics-c',
  'physics-c-simple-harmonic-motion': 'oscillations-physics-c',
  'physics-c-damped-driven-oscillations': 'oscillations-physics-c',
  'physics-c-universal-gravitation': 'gravitation-physics-c',
  // AP Physics C: E&M
  'physics-c-electric-field-coulomb': 'coulombs-law-physics-c-em',
  'physics-c-gauss-law': 'gauss-law-physics-c-em',
  'physics-c-electric-potential': 'electric-potential-physics-c-em',
  'physics-c-capacitors-dielectrics': 'capacitors-dielectrics-physics-c-em',
  'physics-c-dc-circuits': 'dc-circuits-physics-c-em',
  'physics-c-rc-circuits': 'rc-circuits-physics-c-em',
  'physics-c-magnetic-forces': 'magnetic-forces-physics-c-em',
  'physics-c-magnetic-field-sources': 'magnetic-fields-physics-c-em',
  'physics-c-faraday-lenz': 'em-induction-physics-c-em',
  'physics-c-inductance-rl-circuits': 'inductance-rl-physics-c-em',
  'physics-c-maxwell-equations': 'maxwell-equations-physics-c-em',
  'physics-c-electromagnetic-waves': 'maxwell-equations-physics-c-em',
  // AP Physics 2 — fluids topic whose registry key differs
  'fluid-dynamics': 'fluid-dynamics-continuity',
  // AP Precalculus — generic + course topic slugs → precalc lesson suites
  'polynomial-functions-end-behavior': 'polynomial-end-behavior-apprecalc',
  'solving-polynomial-inequalities': 'polynomial-functions-precalc',
  'exponential-functions-growth-decay': 'exponential-functions-precalc',
  'solving-exponential-logarithmic-equations': 'logarithmic-functions-precalc',
  'logarithmic-exponential-models': 'exponential-functions-precalc',
  'graphing-trig-functions': 'trigonometric-modeling-apprecalc',
  'composite-inverse-functions': 'function-composition-inverses-precalc',
  'rational-functions-asymptotes-precalc': 'rational-functions-apprecalc',
  'exponential-functions-modeling-precalc': 'exponential-functions-precalc',
  'transformations-functions-precalc': 'transformations-precalc',
  'unit-circle-radian-measure': 'the-unit-circle',
  'inverse-trig-functions': 'inverse-trig-functions-precalc',
  'law-of-sines-cosines': 'law-of-sines-cosines-precalc',
  // Calculus — generic topic slugs → AB/BC suites (connects orphaned suites)
  'implicit-differentiation': 'implicit-differentiation-calcab',
  'related-rates': 'related-rates-calcab',
  'lhopitals-rule': 'lhopitals-advanced-calcbc',
  'mean-value-theorem': 'theorem-applications-calcab',
  'derivatives-of-trig-functions': 'basic-differentiation-rules-calcab',
  'antiderivatives-intro': 'antiderivatives-indefinite-integrals-calcab',
  // ACT — study-plan rewrite targets lacking a direct registry key
  'act-usage-mechanics': 'act-english-grammar-act',
  'act-main-ideas-details': 'act-reading-main-ideas-act',
  // MCAT — wire the 72 granular subtopic Topic slugs to their parent lesson
  // suites (subtopics share the parent's interactive lesson; Tier-4 deepens these).
  'mcat-anatomy-physiology-embryology-mcat': 'mcat-anatomy-physiology-mcat',
  'mcat-anatomy-physiology-musculoskeletal-mcat': 'mcat-anatomy-physiology-mcat',
  'mcat-anatomy-physiology-reproductive-mcat': 'mcat-anatomy-physiology-mcat',
  'mcat-anatomy-physiology-sensory-mcat': 'mcat-anatomy-physiology-mcat',
  'mcat-biochemistry-amino-acids-proteins-mcat': 'mcat-biochemistry-foundations-mcat',
  'mcat-biochemistry-bioenergetics-mcat': 'mcat-biochemistry-foundations-mcat',
  'mcat-biochemistry-carbohydrate-metabolism-mcat': 'mcat-biochemistry-foundations-mcat',
  'mcat-biochemistry-enzymes-kinetics-mcat': 'mcat-biochemistry-foundations-mcat',
  'mcat-biochemistry-lipid-metabolism-mcat': 'mcat-biochemistry-foundations-mcat',
  'mcat-cars-passages-comparative-mcat': 'mcat-cars-passages-mcat',
  'mcat-cars-passages-ethics-mcat': 'mcat-cars-passages-mcat',
  'mcat-cars-passages-humanities-mcat': 'mcat-cars-passages-mcat',
  'mcat-cars-passages-social-science-mcat': 'mcat-cars-passages-mcat',
  'mcat-cars-reasoning-argument-structure-mcat': 'mcat-cars-reasoning-mcat',
  'mcat-cars-reasoning-assumptions-mcat': 'mcat-cars-reasoning-mcat',
  'mcat-cars-reasoning-fallacies-mcat': 'mcat-cars-reasoning-mcat',
  'mcat-cars-reasoning-strengthen-weaken-mcat': 'mcat-cars-reasoning-mcat',
  'mcat-cars-strategy-active-reading-mcat': 'mcat-cars-strategy-mcat',
  'mcat-cars-strategy-elimination-mcat': 'mcat-cars-strategy-mcat',
  'mcat-cars-strategy-main-idea-inference-mcat': 'mcat-cars-strategy-mcat',
  'mcat-cars-strategy-timing-mcat': 'mcat-cars-strategy-mcat',
  'mcat-cell-biology-cell-cycle-mcat': 'mcat-cell-biology-mcat',
  'mcat-cell-biology-membrane-transport-mcat': 'mcat-cell-biology-mcat',
  'mcat-cell-biology-organelles-mcat': 'mcat-cell-biology-mcat',
  'mcat-cell-biology-signaling-mcat': 'mcat-cell-biology-mcat',
  'mcat-genetics-evolution-immunology-mcat': 'mcat-genetics-evolution-mcat',
  'mcat-genetics-evolution-mendelian-mcat': 'mcat-genetics-evolution-mcat',
  'mcat-genetics-evolution-natural-selection-mcat': 'mcat-genetics-evolution-mcat',
  'mcat-genetics-evolution-population-genetics-mcat': 'mcat-genetics-evolution-mcat',
  'mcat-microbiology-antimicrobials-mcat': 'mcat-microbiology-mcat',
  'mcat-microbiology-bacteria-mcat': 'mcat-microbiology-mcat',
  'mcat-microbiology-genetics-mcat': 'mcat-microbiology-mcat',
  'mcat-microbiology-viruses-mcat': 'mcat-microbiology-mcat',
  'mcat-molecular-biology-biotechnology-mcat': 'mcat-molecular-biology-mcat',
  'mcat-molecular-biology-dna-replication-mcat': 'mcat-molecular-biology-mcat',
  'mcat-molecular-biology-transcription-mcat': 'mcat-molecular-biology-mcat',
  'mcat-molecular-biology-translation-mcat': 'mcat-molecular-biology-mcat',
  'mcat-organic-chemistry-carbonyls-mcat': 'mcat-organic-chemistry-mcat',
  'mcat-organic-chemistry-functional-groups-mcat': 'mcat-organic-chemistry-mcat',
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat': 'mcat-organic-chemistry-mcat',
  'mcat-organic-chemistry-spectroscopy-mcat': 'mcat-organic-chemistry-mcat',
  'mcat-organic-chemistry-stereochemistry-mcat': 'mcat-organic-chemistry-mcat',
  'mcat-organ-systems-cardiovascular-mcat': 'mcat-organ-systems-mcat',
  'mcat-organ-systems-endocrine-nervous-mcat': 'mcat-organ-systems-mcat',
  'mcat-organ-systems-renal-mcat': 'mcat-organ-systems-mcat',
  'mcat-organ-systems-respiratory-mcat': 'mcat-organ-systems-mcat',
  'mcat-physics-electricity-circuits-mcat': 'mcat-physics-electricity-mcat',
  'mcat-physics-electricity-electrochemistry-mcat': 'mcat-physics-electricity-mcat',
  'mcat-physics-electricity-electrostatics-mcat': 'mcat-physics-electricity-mcat',
  'mcat-physics-electricity-magnetism-mcat': 'mcat-physics-electricity-mcat',
  'mcat-physics-electricity-optics-mcat': 'mcat-physics-electricity-mcat',
  'mcat-physics-mechanics-fluids-waves-mcat': 'mcat-physics-mechanics-mcat',
  'mcat-physics-mechanics-forces-newton-laws-mcat': 'mcat-physics-mechanics-mcat',
  'mcat-physics-mechanics-kinematics-mcat': 'mcat-physics-mechanics-mcat',
  'mcat-physics-mechanics-momentum-collisions-mcat': 'mcat-physics-mechanics-mcat',
  'mcat-physics-mechanics-work-energy-power-mcat': 'mcat-physics-mechanics-mcat',
  'mcat-psychology-behavior-cognition-language-mcat': 'mcat-psychology-behavior-mcat',
  'mcat-psychology-behavior-development-mcat': 'mcat-psychology-behavior-mcat',
  'mcat-psychology-behavior-disorders-mcat': 'mcat-psychology-behavior-mcat',
  'mcat-psychology-behavior-learning-memory-mcat': 'mcat-psychology-behavior-mcat',
  'mcat-psychology-behavior-sensation-perception-mcat': 'mcat-psychology-behavior-mcat',
  'mcat-science-passage-strategy-discrete-questions-mcat': 'mcat-science-passage-strategy-mcat',
  'mcat-science-passage-strategy-experimental-design-mcat': 'mcat-science-passage-strategy-mcat',
  'mcat-science-passage-strategy-figures-mcat': 'mcat-science-passage-strategy-mcat',
  'mcat-science-passage-strategy-reading-mcat': 'mcat-science-passage-strategy-mcat',
  'mcat-sociology-culture-socialization-mcat': 'mcat-sociology-mcat',
  'mcat-sociology-groups-interaction-mcat': 'mcat-sociology-mcat',
  'mcat-sociology-health-disparities-mcat': 'mcat-sociology-mcat',
  'mcat-sociology-structure-stratification-mcat': 'mcat-sociology-mcat',
  'mcat-test-day-strategy-format-scoring-mcat': 'mcat-test-day-strategy-mcat',
  'mcat-test-day-strategy-section-specific-mcat': 'mcat-test-day-strategy-mcat',
  'mcat-test-day-strategy-study-planning-mcat': 'mcat-test-day-strategy-mcat',
  'mcat-test-day-strategy-test-day-logistics-mcat': 'mcat-test-day-strategy-mcat',
}

function resolveSlug(topicSlug: string): string {
  return slugAliases[topicSlug] ?? topicSlug
}

export function getInteractiveTopicConfig(topicSlug: string): InteractiveTopicConfig | null {
  const resolved = resolveSlug(topicSlug)
  return interactiveLessonRegistry[resolved] ?? null
}

/** Get the parts array for a specific variant (falls back to v1 if variant not found) */
export function getVariantParts(topicSlug: string, variant: number = 1): InteractiveTopicConfig['parts'] | null {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return null
  if (variant <= 1) return config.parts
  return config.variants?.[variant] ?? config.parts
}

/** Get the total number of available variants for a topic */
export function getTopicVariantCount(topicSlug: string): number {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return 1
  const variantKeys = config.variants ? Object.keys(config.variants).map(Number) : []
  return 1 + variantKeys.length // variant 1 (default) + explicit variants
}

export function hasInteractiveLesson(topicSlug: string): boolean {
  const resolved = resolveSlug(topicSlug)
  return resolved in interactiveLessonRegistry
}

export function getAllInteractiveSlugs(): string[] {
  return Object.keys(interactiveLessonRegistry)
}

export async function getInteractiveLessonData(topicSlug: string, part: number, variant: number = 1): Promise<LessonData | null> {
  const parts = getVariantParts(topicSlug, variant)
  if (!parts) return null
  const partConfig = parts[part - 1]
  if (!partConfig) return null
  return partConfig.loader()
}
