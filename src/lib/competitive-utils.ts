// Utility functions for competitive match gameplay

import { getQuestionSet } from '@/data/competitive-questions/reflection-refraction-bank'
import { getDerivativeQuestions } from '@/data/competitive-questions/derivatives-bank'
import { getLimitQuestions } from '@/data/competitive-questions/limits-bank'
import { getIntegralQuestions } from '@/data/competitive-questions/integrals-bank'
import { getAlgebraQuestions } from '@/data/competitive-questions/algebra-bank'
import { getAlgebra1Questions } from '@/data/competitive-questions/algebra1-bank'
import { getAlgebra2Questions, getUnlockedAlgebra2Subtopics } from '@/data/competitive-questions/algebra2-bank'
import { getNegativeNumbersQuestions } from '@/data/competitive-questions/negative-numbers-bank'
import { getSatPunctuationQuestions } from '@/data/competitive-questions/sat-punctuation-bank'
import { getSatPunctuationGeneralQuestions } from '@/data/competitive-questions/sat-punctuation-general-bank'
import { getParametricQuestions } from '@/data/competitive-questions/parametric-equations-bank'
import { getVectorQuestions } from '@/data/competitive-questions/vectors-bank'
import { getPolarQuestions } from '@/data/competitive-questions/polar-coordinates-bank'
import { getApBiologyQuestions } from '@/data/competitive-questions/ap-biology-bank'
import { getApChemistryQuestions } from '@/data/competitive-questions/ap-chemistry-bank'
import { getApPsychologyQuestions } from '@/data/competitive-questions/ap-psychology-bank'
import { getApStatisticsQuestions } from '@/data/competitive-questions/ap-statistics-bank'
import { getApPhysics1Questions } from '@/data/competitive-questions/ap-physics1-bank'
import { getSatMathQuestions } from '@/data/competitive-questions/sat-math-bank'
import { getSatReadingQuestions } from '@/data/competitive-questions/sat-reading-bank'
import { getActMathQuestions } from '@/data/competitive-questions/act-math-bank'
import { getActScienceQuestions } from '@/data/competitive-questions/act-science-bank'
import { getOChemQuestions } from '@/data/competitive-questions/ochem-bank'
import { getPreCalcQuestions } from '@/data/competitive-questions/precalc-bank'
import { getGeometryQuestions } from '@/data/competitive-questions/geometry-bank'
import { getApCalculusQuestions } from '@/data/competitive-questions/ap-calculus-bank'
import { getApPhysics2Questions } from '@/data/competitive-questions/ap-physics2-bank'
import { getApPhysicsCMechQuestions } from '@/data/competitive-questions/ap-physics-c-mech-bank'
import { getApPhysicsCEMQuestions } from '@/data/competitive-questions/ap-physics-c-em-bank'
import { getApCalculusBCQuestions } from '@/data/competitive-questions/ap-calculus-bc-bank'
import { getApHumanGeoQuestions } from '@/data/competitive-questions/ap-human-geo-bank'
import { getApUSGovQuestions } from '@/data/competitive-questions/ap-us-gov-bank'
import { getApWorldHistoryQuestions } from '@/data/competitive-questions/ap-world-history-bank'
import { getApUSHistoryQuestions } from '@/data/competitive-questions/ap-us-history-bank'
import { getApMacroQuestions } from '@/data/competitive-questions/ap-macro-bank'
import { getApMicroQuestions } from '@/data/competitive-questions/ap-micro-bank'
import { getApAASQuestions } from '@/data/competitive-questions/ap-african-american-studies-bank'
import { getApEngLitQuestions } from '@/data/competitive-questions/ap-english-lit-bank'
import { getApEngLangQuestions } from '@/data/competitive-questions/ap-english-lang-bank'
import { getApAPESQuestions } from '@/data/competitive-questions/ap-enviro-bank'
import { getApCSAQuestions } from '@/data/competitive-questions/ap-csa-bank'
import { getApCSPQuestions } from '@/data/competitive-questions/ap-csp-bank'

interface UnitCirclePosition {
  angle: number;
  x: number;
  y: number;
  label: string;
}

interface Question {
  id: number;
  type: 'find-angle' | 'find-coordinate';
  target: UnitCirclePosition;
  prompt: string;
  answerIndex: number; // Index in UNIT_CIRCLE_POSITIONS array
}

type OptionQuestion = {
  options: string[];
  correctAnswer: number;
  [key: string]: unknown;
}

type MatchQuestion = {
  id: number;
  question?: string;
  options?: string[];
  correctAnswer?: number;
  answerIndex?: number;
  explanation?: string;
  difficulty?: unknown;
  type?: string;
  [key: string]: unknown;
}

// All 16 unit circle positions
export const UNIT_CIRCLE_POSITIONS: UnitCirclePosition[] = [
  { angle: 0, x: 1, y: 0, label: '0°' },
  { angle: 30, x: Math.sqrt(3)/2, y: 0.5, label: '30°' },
  { angle: 45, x: Math.sqrt(2)/2, y: Math.sqrt(2)/2, label: '45°' },
  { angle: 60, x: 0.5, y: Math.sqrt(3)/2, label: '60°' },
  { angle: 90, x: 0, y: 1, label: '90°' },
  { angle: 120, x: -0.5, y: Math.sqrt(3)/2, label: '120°' },
  { angle: 135, x: -Math.sqrt(2)/2, y: Math.sqrt(2)/2, label: '135°' },
  { angle: 150, x: -Math.sqrt(3)/2, y: 0.5, label: '150°' },
  { angle: 180, x: -1, y: 0, label: '180°' },
  { angle: 210, x: -Math.sqrt(3)/2, y: -0.5, label: '210°' },
  { angle: 225, x: -Math.sqrt(2)/2, y: -Math.sqrt(2)/2, label: '225°' },
  { angle: 240, x: -0.5, y: -Math.sqrt(3)/2, label: '240°' },
  { angle: 270, x: 0, y: -1, label: '270°' },
  { angle: 300, x: 0.5, y: -Math.sqrt(3)/2, label: '300°' },
  { angle: 315, x: Math.sqrt(2)/2, y: -Math.sqrt(2)/2, label: '315°' },
  { angle: 330, x: Math.sqrt(3)/2, y: -0.5, label: '330°' },
];

/**
 * Shuffle the options array of an MCQ question so the correct answer
 * doesn't always appear at the same index. Returns a new object with
 * shuffled options and an updated correctAnswer / answerIndex.
 */
function shuffleOptions(q: OptionQuestion) {
  const correctOption = q.options[q.correctAnswer]
  const shuffled = [...q.options]
  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  const newCorrectIndex = shuffled.indexOf(correctOption)
  return { options: shuffled, correctAnswer: newCorrectIndex, answerIndex: newCorrectIndex }
}

/**
 * Format coordinate for display with LaTeX
 */
function formatCoordinate(x: number, y: number): string {
  const formatValue = (val: number): string => {
    if (Math.abs(val) < 0.001) return '0';
    if (Math.abs(val - 1) < 0.001) return '1';
    if (Math.abs(val + 1) < 0.001) return '-1';
    if (Math.abs(val - 0.5) < 0.001) return '\\frac{1}{2}';
    if (Math.abs(val + 0.5) < 0.001) return '-\\frac{1}{2}';
    if (Math.abs(val - Math.sqrt(2)/2) < 0.01) return '\\frac{\\sqrt{2}}{2}';
    if (Math.abs(val + Math.sqrt(2)/2) < 0.01) return '-\\frac{\\sqrt{2}}{2}';
    if (Math.abs(val - Math.sqrt(3)/2) < 0.01) return '\\frac{\\sqrt{3}}{2}';
    if (Math.abs(val + Math.sqrt(3)/2) < 0.01) return '-\\frac{\\sqrt{3}}{2}';
    return val.toFixed(2);
  };

  return `\\left(${formatValue(x)}, ${formatValue(y)}\\right)`;
}

/**
 * Generate 10 random questions for a match
 * Ensures variety by mixing angle and coordinate questions
 */
/**
 * Generate 10 random questions for a match
 * Ensures variety by mixing angle and coordinate questions
 */
/**
 * Map curriculum lesson slugs (as stored in the Topic table and used by the
 * per-course competitive pages) onto the corresponding competitive bank
 * topicSlug. When a 1-to-1 mapping doesn't exist (e.g. a lesson that spans
 * several bank topics), use COURSE_GROUPING_LESSONS instead.
 */
const LESSON_TO_BANK_TOPIC: Record<string, string> = {
  // ---- AP Calculus AB (lesson slug → bank topic slug in ap-calculus-bank.ts)
  'accumulation-functions-calcab': 'accumulation-functions',
  'antiderivatives-indefinite-integrals-calcab': 'antiderivatives-indefinite-integrals',
  'area-between-curves-calcab': 'area-between-curves',
  'basic-differentiation-rules-calcab': 'basic-differentiation-rules',
  'chain-rule-calcab': 'chain-rule',
  'constant-multiple-sum-rules': 'basic-differentiation-rules',
  'definite-integrals-calcab': 'fundamental-theorem-of-calculus',
  'definition-of-derivative-calcab': 'definition-of-derivative',
  'derivative-as-rate-of-change': 'definition-of-derivative',
  'derivative-as-slope': 'definition-of-derivative',
  'derivative-notation': 'definition-of-derivative',
  'derivatives-of-exponential-functions': 'basic-differentiation-rules',
  'derivatives-of-logarithmic-functions': 'basic-differentiation-rules',
  'derivatives-of-trig-functions': 'basic-differentiation-rules',
  'differential-equations-calcab': 'differential-equations-slope-fields',
  'evaluating-limits-algebraically': 'limits-algebraically',
  'evaluating-limits-graphically': 'limits-graphically',
  'exponential-models-calcab': 'differential-equations-slope-fields',
  'higher-order-derivatives': 'basic-differentiation-rules',
  'indeterminate-forms-factoring': 'limits-algebraically',
  'introduction-to-limits': 'limits-graphically',
  'inverse-functions-derivatives-calcab': 'implicit-differentiation',
  'limits-continuity-calcab': 'continuity-and-ivt',
  'linearization-differentials-calcab': 'linearization-differentials',
  'logarithmic-differentiation-technique': 'implicit-differentiation',
  'one-sided-limits': 'limits-graphically',
  'optimization-calcab': 'optimization',
  'particle-motion-calcab': 'particle-motion',
  'power-rule-basics': 'basic-differentiation-rules',
  'product-rule': 'product-quotient-rules',
  'quotient-rule': 'product-quotient-rules',
  'rationalizing-techniques': 'limits-algebraically',
  'tables-data-calcab': 'riemann-sums',
  'theorem-applications-calcab': 'mean-value-theorem',
  'u-substitution-calcab': 'integration-by-substitution',
  'volumes-of-revolution-calcab': 'volumes-of-revolution',
  'what-is-a-derivative': 'definition-of-derivative',
  // ---- AP Calculus AB additional lesson slugs (limits unit + extras)
  'what-is-a-limit': 'limits-graphically',
  'estimating-limits-tables': 'limits-graphically',
  'estimating-limits-graphs': 'limits-graphically',
  'direct-substitution-method': 'limits-algebraically',
  'factoring-method-limits': 'limits-algebraically',
  'rationalizing-technique-limits': 'limits-algebraically',
  'limits-at-infinity': 'limits-algebraically',
  'infinite-limits-vertical-asymptotes': 'limits-algebraically',
  'continuity-introduction': 'continuity-and-ivt',
  'types-of-discontinuity': 'continuity-and-ivt',
  'continuity-ivt-calcab': 'continuity-and-ivt',
  'derivatives-exp-log-calcab': 'basic-differentiation-rules',
  'implicit-differentiation-calcab': 'implicit-differentiation',
  'concavity-inflection-points-calcab': 'curve-sketching',
  'second-derivative-test': 'curve-sketching',
  'second-derivative-test-calcab': 'curve-sketching',
  'related-rates-calcab': 'related-rates',
  'limits-at-infinity-calcab': 'limits-algebraically',
  // ---- AP Calculus AB DB topic slugs (Applications of Derivatives unit)
  // These curriculum slugs don't match any bank topicSlug verbatim, so without
  // aliasing they fall through every router and hit the cumulative-MCQ bucket
  // (which mixes physics, algebra 2, parametric, polar, etc. — totally
  // off-topic). Map each to the closest AP Calc AB bank topic.
  'critical-points-and-extrema': 'extreme-value-theorem',
  'absolute-extrema': 'extreme-value-theorem',
  'first-derivative-test': 'curve-sketching',
  'optimization-problems': 'optimization',
  'linear-approximation': 'linearization-differentials',
  'newtons-method': 'linearization-differentials',
  'lhopitals-rule': 'l-hopitals-rule',
  // ---- AP Calculus AB DB topic slugs (Integration unit)
  'antiderivatives-intro': 'antiderivatives-indefinite-integrals',
  'indefinite-integrals': 'antiderivatives-indefinite-integrals',
  'definite-integrals': 'fundamental-theorem-of-calculus',
  'u-substitution': 'integration-by-substitution',
  'volumes-disk-method': 'volumes-of-revolution',
  'volumes-washer-method': 'volumes-of-revolution',
  'volumes-shell-method': 'volumes-of-revolution',
  // BC-flavored integration techniques that may appear in AB content trees;
  // route to the closest AB-scope bank topic so questions stay relevant.
  'integration-by-parts': 'antiderivatives-indefinite-integrals',
  'partial-fractions': 'antiderivatives-indefinite-integrals',
  'trig-substitution': 'integration-by-substitution',
  // ---- AP Calculus AB DB topic slugs (Limits unit, additional)
  'limit-notation-terminology': 'limits-graphically',
  'one-sided-limits-in-detail': 'limits-graphically',
  // Legacy "Calculus" course lesson slugs (pre-AP Calc AB course rebrand)
  'power-rule': 'basic-differentiation-rules',

  // ---- AP Precalculus (lesson slug → bank topic slug in precalc-bank.ts)
  'polynomial-functions-precalc': 'polynomial-functions-end-behavior',
  'rational-functions-precalc': 'rational-functions-asymptotes',
  'exponential-functions-precalc': 'exponential-functions-growth-decay',
  'logarithmic-functions-precalc': 'logarithmic-functions-properties',
  'function-composition-inverses-precalc': 'composite-functions',
  'transformations-precalc': 'transformations-of-functions',
  'trigonometric-functions-precalc': 'trigonometric-ratios-unit-circle',
  'trigonometric-identities-precalc': 'trig-identities-pythagorean',
  'inverse-trig-functions-precalc': 'inverse-trig-functions',
  'law-of-sines-cosines-precalc': 'law-of-sines-and-cosines',
  'polar-coordinates-precalc': 'polar-coordinates-graphs',
  'vectors-two-dimensions-precalc': 'vectors-in-two-dimensions',
  'matrices-precalc': 'matrices-and-determinants',
  'sequences-series-precalc': 'sequences-and-series',
  'parametric-equations-precalc': 'parametric-equations-motion',
  // Precalc lessons without an exact 1-to-1 bank topic — route to closest
  // related bank topic so questions stay on-subject.
  'conic-sections-precalc': 'polynomial-functions-end-behavior',
  'limits-introduction-precalc': 'rates-of-change',
  'rates-of-change-precalc': 'rates-of-change',
  'systems-of-equations-precalc': 'systems-of-equations-matrices',
  'continuity-precalc': 'rates-of-change',

  // ---- AP Physics C: Mechanics
  'physics-c-1d-kinematics': 'physics-c-position-velocity-acceleration',
  'physics-c-2d-kinematics': 'physics-c-position-velocity-acceleration',
  'physics-c-potential-energy-curves': 'physics-c-conservative-forces',
  'physics-c-variable-mass': 'physics-c-momentum-collisions',

  // ---- AP Physics C: E&M
  'physics-c-coulomb-law': 'physics-c-electric-field-coulomb',
  'physics-c-electric-fields': 'physics-c-electric-field-coulomb',
  'physics-c-conductors-equilibrium': 'physics-c-gauss-law',
  'physics-c-potential-energy': 'physics-c-electric-potential',
  'physics-c-capacitors': 'physics-c-capacitors-dielectrics',
  'physics-c-dielectrics': 'physics-c-capacitors-dielectrics',
  'physics-c-energy-density': 'physics-c-capacitors-dielectrics',
  'physics-c-power-circuits': 'physics-c-dc-circuits',
  'physics-c-faraday-induction': 'physics-c-faraday-lenz',
  'physics-c-inductance-rl': 'physics-c-inductance-rl-circuits',

  // ---- AP Biology (lesson slug → bank topic in ap-biology-bank.ts)
  'ap-bio-chemistry-of-life': 'water-biological-macromolecules',
  'ap-bio-cell-structure-function': 'cell-structure-organelles',
  'ap-bio-membrane-transport': 'cell-membrane-transport',
  'ap-bio-cell-cycle-mitosis': 'cell-cycle-mitosis',
  'ap-bio-cell-communication': 'signal-transduction',
  'ap-bio-cellular-energetics': 'cellular-respiration',
  'ap-bio-photosynthesis': 'photosynthesis',
  'ap-bio-meiosis': 'meiosis-genetic-diversity',
  'ap-bio-mendelian-genetics': 'mendelian-genetics',
  'ap-bio-molecular-genetics': 'dna-structure-replication',
  'ap-bio-gene-regulation': 'gene-regulation',
  'ap-bio-natural-selection': 'natural-selection-evolution',
  'ap-bio-ecology-energy-flow': 'ecology-ecosystems',
  'ap-bio-population-ecology': 'ecology-ecosystems',
  'ap-bio-immune-system': 'signal-transduction',
  'ap-bio-biotechnology': 'biotechnology',
  'ap-bio-experimental-design': 'biotechnology',
  'ap-bio-evolution-evidence': 'natural-selection-evolution',
  'ap-bio-ecology-interactions': 'ecology-ecosystems',
  'ap-bio-hardy-weinberg': 'hardy-weinberg-population-genetics',
  'ap-bio-phylogenetics': 'speciation',
  'ap-bio-dna-technology': 'biotechnology',
  'ap-bio-viral-biology': 'dna-structure-replication',
  'ap-bio-nervous-system': 'signal-transduction',
  'ap-bio-endocrine-system': 'signal-transduction',
  'ap-bio-animal-behavior': 'ecology-ecosystems',
  'ap-bio-chromosomal-inheritance': 'mendelian-genetics',
  'ap-bio-origins-of-life': 'natural-selection-evolution',
  'ap-bio-biodiversity': 'ecology-ecosystems',
  'ap-bio-biogeochemical-cycles': 'ecology-ecosystems',
  'ap-bio-plant-structure': 'ecology-ecosystems',

  // ---- AP US History (lesson slug → bank era)
  'apush-native-societies-exploration': 'colonial-america',
  'apush-colonial-america': 'colonial-america',
  'apush-colonial-society-conflicts': 'colonial-america',
  'apush-revolution-independence': 'revolution-independence',
  'apush-constitution-early-republic': 'revolution-independence',
  'apush-democracy-expansion': 'civil-war',
  'apush-reform-movements': 'civil-war',
  'apush-civil-war': 'civil-war',
  'apush-reconstruction': 'reconstruction',
  'apush-gilded-age': 'reconstruction',
  'apush-progressivism-wwi': 'reconstruction',
  'apush-depression-wwii': 'reconstruction',

  // ---- AP US Government
  'gov-constitutional-foundations': 'constitutional-foundations',
  'gov-federalism': 'federalism',
  'gov-separation-of-powers': 'constitutional-foundations',
  'gov-congress': 'constitutional-foundations',
  'gov-presidency': 'constitutional-foundations',
  'gov-judiciary': 'constitutional-foundations',
  'gov-bureaucracy': 'federalism',
  'gov-civil-liberties': 'civil-liberties',
  'gov-civil-rights': 'civil-liberties',
  'gov-ideologies': 'voting-elections',
  'gov-public-opinion': 'voting-elections',
  'gov-voting-elections': 'voting-elections',
  'gov-parties-interest-groups': 'voting-elections',
  'gov-media-technology': 'voting-elections',

  // ---- AP World History (lesson slug → bank category)
  'wh-global-tapestry': 'global-tapestry',
  'wh-dar-al-islam': 'global-tapestry',
  'wh-silk-roads-mongols': 'silk-roads-mongols',
  'wh-indian-ocean-trade': 'silk-roads-mongols',
  'wh-americas-africa-1200': 'global-tapestry',
  'wh-land-based-empires': 'silk-roads-mongols',
  'wh-islamic-empires': 'silk-roads-mongols',
  'wh-east-asian-empires': 'silk-roads-mongols',
  'wh-exploration-columbian-exchange': 'exploration-columbian-exchange',
  'wh-maritime-empires-labor': 'exploration-columbian-exchange',
  'wh-transoceanic': 'exploration-columbian-exchange',
  'wh-enlightenment-political-revolutions': 'industrial-revolution',
  'wh-revolutions': 'industrial-revolution',
  'wh-industrial-revolution': 'industrial-revolution',
  'wh-imperialism': 'industrial-revolution',
  'wh-consequences-industrialization': 'industrial-revolution',
  'wh-reform-migration': 'industrial-revolution',

  // ---- AP Human Geography
  'hg-intro-geography': 'intro-geography',
  'hg-spatial-concepts': 'intro-geography',
  'hg-population-growth': 'population-distribution',
  'hg-migration': 'migration',
  'hg-population-distribution': 'population-distribution',
  'hg-culture-diffusion': 'culture-diffusion',
  'hg-language-religion': 'culture-diffusion',
  'hg-ethnicity-identity': 'culture-diffusion',
  'hg-political-geography': 'political-geography',
  'hg-political-power': 'political-geography',
  'hg-agricultural-origins': 'urbanization',
  'hg-agricultural-practices': 'urbanization',
  'hg-urbanization': 'urbanization',
  'hg-urban-challenges': 'urbanization',
  'hg-globalization-trade': 'urbanization',
  'hg-industrialization': 'urbanization',

  // ---- AP Environmental Science
  'enviro-earth-systems': 'ecosystems',
  'enviro-plate-tectonics': 'ecosystems',
  'enviro-rock-cycle': 'ecosystems',
  'enviro-soil': 'ecosystems',
  'enviro-atmosphere': 'climate-change',
  'enviro-biodiversity': 'ecosystems',
  'enviro-ecosystem-ecology': 'ecosystems',
  'enviro-island-biogeography': 'ecosystems',
  'enviro-biodiversity-loss': 'sustainability',
  'enviro-invasive-species': 'sustainability',
  'enviro-population-ecology': 'ecosystems',
  'enviro-population-dynamics': 'ecosystems',
  'enviro-human-population': 'sustainability',
  'enviro-agriculture': 'sustainability',
  'enviro-forestry': 'sustainability',
  'enviro-water-resources': 'sustainability',
  'enviro-water-pollution': 'pollution',
  'enviro-fossil-fuels': 'energy',
  'enviro-nuclear-energy': 'energy',
  'enviro-renewable-energy': 'energy',
  'enviro-energy-conservation': 'energy',
  'enviro-climate-change': 'climate-change',
  'enviro-ozone-depletion': 'pollution',
  'enviro-toxicology': 'pollution',
  'enviro-environmental-law': 'sustainability',

  // ---- AP English Language
  'englang-intro-rhetoric': 'rhetorical-analysis',
  'englang-rhetorical-situation': 'rhetorical-analysis',
  'englang-rhetorical-situation-writing': 'rhetorical-analysis',
  'englang-claims-evidence': 'argument-writing',
  'englang-claims-evidence-reading': 'rhetorical-analysis',
  'englang-claims-evidence-writing': 'argument-writing',
  'englang-reasoning-org-reading': 'rhetorical-analysis',
  'englang-reasoning-org-writing': 'argument-writing',
  'englang-argument-structure': 'argument-writing',
  'englang-diction-syntax': 'style-syntax',
  'englang-style-reading': 'style-syntax',
  'englang-style-writing': 'style-syntax',
  'englang-tone-voice-analysis': 'style-syntax',
  'englang-ethos-pathos-logos': 'rhetorical-analysis',
  'englang-logical-fallacies': 'argument-writing',
  'englang-synthesis': 'argument-writing',
  'englang-synthesis-essay': 'argument-writing',
  'englang-developing-arguments': 'argument-writing',
  'englang-writing-for-audience': 'argument-writing',

  // ---- AP English Literature
  'englit-short-fiction-1': 'narrative-technique',
  'englit-short-fiction-2': 'narrative-technique',
  'englit-short-fiction-3': 'narrative-technique',
  'englit-poetry-1': 'poetry-analysis',
  'englit-poetic-structure-form': 'poetry-analysis',
  'englit-sound-devices': 'poetry-analysis',
  'englit-poetry-2': 'poetry-analysis',
  'englit-longer-fiction': 'narrative-technique',
  'englit-dramatic-structure': 'narrative-technique',
  'englit-longer-fiction-2': 'narrative-technique',
  'englit-character-setting': 'character-analysis',
  'englit-narration-pov': 'narrative-technique',
  'englit-narrative-complexity': 'narrative-technique',
  'englit-narrative-perspective': 'narrative-technique',
  'englit-figurative-language': 'figurative-language',
  'englit-tone-speaker': 'figurative-language',
  'englit-symbol-motif-fiction': 'figurative-language',
  'englit-plot-conflict-theme': 'character-analysis',
  'englit-social-commentary-drama': 'character-analysis',

  // ---- AP Microeconomics
  'micro-scarcity-marginal-analysis': 'basic-concepts',
  'micro-supply-demand': 'supply-demand',
  'micro-demand-supply-equilibrium': 'supply-demand',
  'micro-elasticity': 'elasticity',
  'micro-government-intervention': 'market-failure',
  'micro-production-costs': 'market-structures',
  'micro-perfect-competition': 'market-structures',
  'micro-monopoly': 'market-structures',
  'micro-monopolistic-oligopoly': 'market-structures',
  'micro-labor-markets': 'factor-markets',
  'micro-factor-markets': 'factor-markets',
  'micro-externalities-public-goods': 'market-failure',
  'micro-market-failure': 'market-failure',

  // ---- AP Macroeconomics
  'macro-scarcity-opportunity-cost': 'gdp-growth',
  'macro-comparative-advantage': 'gdp-growth',
  'macro-gdp-growth': 'gdp-growth',
  'macro-unemployment-inflation': 'gdp-growth',
  'macro-ad-as': 'ad-as',
  'macro-multiplier-effect': 'fiscal-policy',
  'macro-phillips-curve': 'ad-as',
  'macro-money-banking': 'monetary-policy',
  'macro-monetary-policy': 'monetary-policy',
  'macro-fiscal-policy': 'fiscal-policy',
  'macro-fiscal-policy-tools': 'fiscal-policy',
  'macro-open-economy': 'monetary-policy',
  'macro-international-trade-finance': 'monetary-policy',

  // ---- AP African American Studies
  'aas-african-kingdoms': 'origins-diaspora',
  'aas-transatlantic-slave-trade': 'origins-diaspora',
  'aas-slavery-in-america': 'resistance-abolition',
  'aas-resistance-abolition': 'resistance-abolition',
  'aas-reconstruction-jim-crow': 'resistance-abolition',
  'aas-great-migration-harlem': 'community-society',
  'aas-wwi-wwii-era': 'community-society',
  'aas-civil-rights-movement': 'political-struggles',
  'aas-black-power-beyond': 'political-struggles',
  'aas-contemporary-issues': 'culture-identity',

  // ---- AP Computer Science Principles (course topic slug → generic bank topic slug)
  // The ap-csp-bank uses 6 broad topicSlugs (algorithms, cybersecurity,
  // digital-information, impact, internet, programming) while the curriculum
  // exposes 15 fine-grained topics. Map each fine-grained topic to the most
  // relevant bank slug so competitive mode returns questions instead of empty.
  'csp-creative-development': 'programming',
  'csp-collaboration-development': 'programming',
  'csp-data': 'digital-information',
  'csp-binary-data': 'digital-information',
  'csp-data-compression-analysis': 'digital-information',
  'csp-algorithms': 'algorithms',
  'csp-algorithms-programming': 'algorithms',
  'csp-procedures-lists': 'programming',
  'csp-variables-control': 'programming',
  'csp-computing-systems-networks': 'internet',
  'csp-internet-protocols': 'internet',
  'csp-fault-tolerance-security': 'cybersecurity',
  'csp-safe-computing': 'cybersecurity',
  'csp-impact-of-computing': 'impact',
  'csp-social-ethical-impacts': 'impact',
}

/**
 * Lesson slug → course bank dispatch key. Used by the generic per-course
 * sub-topic router so any lesson slug for a covered course is routed to
 * its bank function (with the bank-topic alias from LESSON_TO_BANK_TOPIC).
 */
const LESSON_TO_COURSE_BANK_KEY: Record<string, string> = {
  // Algebra 1 topic slugs
  'solving-linear-equations-algebra1': 'algebra-1',
  'graphing-linear-equations-algebra1': 'algebra-1',
  'linear-inequalities-algebra1': 'algebra-1',
  'solving-systems-algebra1': 'algebra-1',
  'exponent-rules-algebra1': 'algebra-1',
  'factoring-algebra1': 'algebra-1',
  'multiplying-polynomials-algebra1': 'algebra-1',
  'solving-quadratics-algebra1': 'algebra-1',
  'functions-basics-algebra1': 'algebra-1',
  'slope-intercept-form-algebra1': 'algebra-1',
  // Algebra 1 topic slugs (batch 2)
  'absolute-value-algebra1': 'algebra-1',
  'word-problems-linear-algebra1': 'algebra-1',
  'compound-absolute-value-inequalities-alg1': 'algebra-1',
  'graphing-systems-algebra1': 'algebra-1',
  'exponential-growth-decay-alg1': 'algebra-1',
  'polynomial-operations-algebra1': 'algebra-1',
  'simplifying-radicals-alg1': 'algebra-1',
  'quadratic-formula-detailed-algebra1': 'algebra-1',
  'completing-the-square': 'algebra-1',
  'graphing-quadratics-algebra1': 'algebra-1',
  'domain-range-algebra1': 'algebra-1',
  'domain-and-range': 'algebra-1',
  'arithmetic-geometric-sequences-alg1': 'algebra-1',
  'ratios-rates-algebra1': 'algebra-1',
  'proportions-algebra1': 'algebra-1',
  'percent-problems-algebra1': 'algebra-1',
  'radical-operations-algebra1': 'algebra-1',
  'simplifying-radicals-algebra1': 'algebra-1',
  'linear-regression-correlation-alg1': 'algebra-1',
  'mean-median-mode-algebra1': 'algebra-1',
  'box-plots': 'algebra-1',
  'outliers-in-data': 'algebra-1',
  // Geometry topic slugs
  'angle-relationships-geometry': 'geometry',
  'parallel-lines-transversals': 'geometry',
  'triangle-angle-sum': 'geometry',
  'pythagorean-theorem': 'geometry',
  'similar-triangles-geometry': 'geometry',
  'special-right-triangles': 'geometry',
  'properties-quadrilaterals': 'geometry',
  'polygon-angle-sums': 'geometry',
  'circle-basics-geometry': 'geometry',
  'trigonometric-ratios-geo': 'geometry',
  // AP Calc AB lesson aliases that need explicit course routing
  'second-derivative-test': 'ap-calculus-ab',
  'second-derivative-test-calcab': 'ap-calculus-ab',
  // Physics C
  'physics-c-1d-kinematics': 'ap-physics-c-mech',
  'physics-c-2d-kinematics': 'ap-physics-c-mech',
  'physics-c-potential-energy-curves': 'ap-physics-c-mech',
  'physics-c-variable-mass': 'ap-physics-c-mech',
  'physics-c-coulomb-law': 'ap-physics-c-em',
  'physics-c-electric-fields': 'ap-physics-c-em',
  'physics-c-conductors-equilibrium': 'ap-physics-c-em',
  'physics-c-potential-energy': 'ap-physics-c-em',
  'physics-c-capacitors': 'ap-physics-c-em',
  'physics-c-dielectrics': 'ap-physics-c-em',
  'physics-c-energy-density': 'ap-physics-c-em',
  'physics-c-power-circuits': 'ap-physics-c-em',
  'physics-c-faraday-induction': 'ap-physics-c-em',
  'physics-c-inductance-rl': 'ap-physics-c-em',
  // AP Bio
  'ap-bio-chemistry-of-life': 'ap-biology',
  'ap-bio-cell-structure-function': 'ap-biology',
  'ap-bio-membrane-transport': 'ap-biology',
  'ap-bio-cell-cycle-mitosis': 'ap-biology',
  'ap-bio-cell-communication': 'ap-biology',
  'ap-bio-cellular-energetics': 'ap-biology',
  'ap-bio-photosynthesis': 'ap-biology',
  'ap-bio-meiosis': 'ap-biology',
  'ap-bio-mendelian-genetics': 'ap-biology',
  'ap-bio-molecular-genetics': 'ap-biology',
  'ap-bio-gene-regulation': 'ap-biology',
  'ap-bio-natural-selection': 'ap-biology',
  'ap-bio-ecology-energy-flow': 'ap-biology',
  'ap-bio-population-ecology': 'ap-biology',
  'ap-bio-immune-system': 'ap-biology',
  'ap-bio-biotechnology': 'ap-biology',
  'ap-bio-experimental-design': 'ap-biology',
  'ap-bio-evolution-evidence': 'ap-biology',
  'ap-bio-ecology-interactions': 'ap-biology',
  'ap-bio-hardy-weinberg': 'ap-biology',
  'ap-bio-phylogenetics': 'ap-biology',
  'ap-bio-dna-technology': 'ap-biology',
  'ap-bio-viral-biology': 'ap-biology',
  'ap-bio-nervous-system': 'ap-biology',
  'ap-bio-endocrine-system': 'ap-biology',
  'ap-bio-animal-behavior': 'ap-biology',
  'ap-bio-chromosomal-inheritance': 'ap-biology',
  'ap-bio-origins-of-life': 'ap-biology',
  'ap-bio-biodiversity': 'ap-biology',
  'ap-bio-biogeochemical-cycles': 'ap-biology',
  'ap-bio-plant-structure': 'ap-biology',
  // AP US History
  'apush-native-societies-exploration': 'ap-us-history',
  'apush-colonial-america': 'ap-us-history',
  'apush-colonial-society-conflicts': 'ap-us-history',
  'apush-revolution-independence': 'ap-us-history',
  'apush-constitution-early-republic': 'ap-us-history',
  'apush-democracy-expansion': 'ap-us-history',
  'apush-reform-movements': 'ap-us-history',
  'apush-civil-war': 'ap-us-history',
  'apush-reconstruction': 'ap-us-history',
  'apush-gilded-age': 'ap-us-history',
  'apush-progressivism-wwi': 'ap-us-history',
  'apush-depression-wwii': 'ap-us-history',
  // AP US Gov
  'gov-constitutional-foundations': 'ap-us-gov',
  'gov-federalism': 'ap-us-gov',
  'gov-separation-of-powers': 'ap-us-gov',
  'gov-congress': 'ap-us-gov',
  'gov-presidency': 'ap-us-gov',
  'gov-judiciary': 'ap-us-gov',
  'gov-bureaucracy': 'ap-us-gov',
  'gov-civil-liberties': 'ap-us-gov',
  'gov-civil-rights': 'ap-us-gov',
  'gov-ideologies': 'ap-us-gov',
  'gov-public-opinion': 'ap-us-gov',
  'gov-voting-elections': 'ap-us-gov',
  'gov-parties-interest-groups': 'ap-us-gov',
  'gov-media-technology': 'ap-us-gov',
  // AP World History
  'wh-global-tapestry': 'ap-world-history',
  'wh-dar-al-islam': 'ap-world-history',
  'wh-silk-roads-mongols': 'ap-world-history',
  'wh-indian-ocean-trade': 'ap-world-history',
  'wh-americas-africa-1200': 'ap-world-history',
  'wh-land-based-empires': 'ap-world-history',
  'wh-islamic-empires': 'ap-world-history',
  'wh-east-asian-empires': 'ap-world-history',
  'wh-exploration-columbian-exchange': 'ap-world-history',
  'wh-maritime-empires-labor': 'ap-world-history',
  'wh-transoceanic': 'ap-world-history',
  'wh-enlightenment-political-revolutions': 'ap-world-history',
  'wh-revolutions': 'ap-world-history',
  'wh-industrial-revolution': 'ap-world-history',
  'wh-imperialism': 'ap-world-history',
  'wh-consequences-industrialization': 'ap-world-history',
  'wh-reform-migration': 'ap-world-history',
  // AP Human Geo
  'hg-intro-geography': 'ap-human-geo',
  'hg-spatial-concepts': 'ap-human-geo',
  'hg-population-growth': 'ap-human-geo',
  'hg-migration': 'ap-human-geo',
  'hg-population-distribution': 'ap-human-geo',
  'hg-culture-diffusion': 'ap-human-geo',
  'hg-language-religion': 'ap-human-geo',
  'hg-ethnicity-identity': 'ap-human-geo',
  'hg-political-geography': 'ap-human-geo',
  'hg-political-power': 'ap-human-geo',
  'hg-agricultural-origins': 'ap-human-geo',
  'hg-agricultural-practices': 'ap-human-geo',
  'hg-urbanization': 'ap-human-geo',
  'hg-urban-challenges': 'ap-human-geo',
  'hg-globalization-trade': 'ap-human-geo',
  'hg-industrialization': 'ap-human-geo',
  // AP Enviro
  'enviro-earth-systems': 'ap-enviro',
  'enviro-plate-tectonics': 'ap-enviro',
  'enviro-rock-cycle': 'ap-enviro',
  'enviro-soil': 'ap-enviro',
  'enviro-atmosphere': 'ap-enviro',
  'enviro-biodiversity': 'ap-enviro',
  'enviro-ecosystem-ecology': 'ap-enviro',
  'enviro-island-biogeography': 'ap-enviro',
  'enviro-biodiversity-loss': 'ap-enviro',
  'enviro-invasive-species': 'ap-enviro',
  'enviro-population-ecology': 'ap-enviro',
  'enviro-population-dynamics': 'ap-enviro',
  'enviro-human-population': 'ap-enviro',
  'enviro-agriculture': 'ap-enviro',
  'enviro-forestry': 'ap-enviro',
  'enviro-water-resources': 'ap-enviro',
  'enviro-water-pollution': 'ap-enviro',
  'enviro-fossil-fuels': 'ap-enviro',
  'enviro-nuclear-energy': 'ap-enviro',
  'enviro-renewable-energy': 'ap-enviro',
  'enviro-energy-conservation': 'ap-enviro',
  'enviro-climate-change': 'ap-enviro',
  'enviro-ozone-depletion': 'ap-enviro',
  'enviro-toxicology': 'ap-enviro',
  'enviro-environmental-law': 'ap-enviro',
  // AP English Lang
  'englang-intro-rhetoric': 'ap-english-lang',
  'englang-rhetorical-situation': 'ap-english-lang',
  'englang-rhetorical-situation-writing': 'ap-english-lang',
  'englang-claims-evidence': 'ap-english-lang',
  'englang-claims-evidence-reading': 'ap-english-lang',
  'englang-claims-evidence-writing': 'ap-english-lang',
  'englang-reasoning-org-reading': 'ap-english-lang',
  'englang-reasoning-org-writing': 'ap-english-lang',
  'englang-argument-structure': 'ap-english-lang',
  'englang-diction-syntax': 'ap-english-lang',
  'englang-style-reading': 'ap-english-lang',
  'englang-style-writing': 'ap-english-lang',
  'englang-tone-voice-analysis': 'ap-english-lang',
  'englang-ethos-pathos-logos': 'ap-english-lang',
  'englang-logical-fallacies': 'ap-english-lang',
  'englang-synthesis': 'ap-english-lang',
  'englang-synthesis-essay': 'ap-english-lang',
  'englang-developing-arguments': 'ap-english-lang',
  'englang-writing-for-audience': 'ap-english-lang',
  // AP English Lit
  'englit-short-fiction-1': 'ap-english-lit',
  'englit-short-fiction-2': 'ap-english-lit',
  'englit-short-fiction-3': 'ap-english-lit',
  'englit-poetry-1': 'ap-english-lit',
  'englit-poetic-structure-form': 'ap-english-lit',
  'englit-sound-devices': 'ap-english-lit',
  'englit-poetry-2': 'ap-english-lit',
  'englit-longer-fiction': 'ap-english-lit',
  'englit-dramatic-structure': 'ap-english-lit',
  'englit-longer-fiction-2': 'ap-english-lit',
  'englit-character-setting': 'ap-english-lit',
  'englit-narration-pov': 'ap-english-lit',
  'englit-narrative-complexity': 'ap-english-lit',
  'englit-narrative-perspective': 'ap-english-lit',
  'englit-figurative-language': 'ap-english-lit',
  'englit-tone-speaker': 'ap-english-lit',
  'englit-symbol-motif-fiction': 'ap-english-lit',
  'englit-plot-conflict-theme': 'ap-english-lit',
  'englit-social-commentary-drama': 'ap-english-lit',
  // AP Micro
  'micro-scarcity-marginal-analysis': 'ap-micro',
  'micro-supply-demand': 'ap-micro',
  'micro-demand-supply-equilibrium': 'ap-micro',
  'micro-elasticity': 'ap-micro',
  'micro-government-intervention': 'ap-micro',
  'micro-production-costs': 'ap-micro',
  'micro-perfect-competition': 'ap-micro',
  'micro-monopoly': 'ap-micro',
  'micro-monopolistic-oligopoly': 'ap-micro',
  'micro-labor-markets': 'ap-micro',
  'micro-factor-markets': 'ap-micro',
  'micro-externalities-public-goods': 'ap-micro',
  'micro-market-failure': 'ap-micro',
  // AP Macro
  'macro-scarcity-opportunity-cost': 'ap-macro',
  'macro-comparative-advantage': 'ap-macro',
  'macro-gdp-growth': 'ap-macro',
  'macro-unemployment-inflation': 'ap-macro',
  'macro-ad-as': 'ap-macro',
  'macro-multiplier-effect': 'ap-macro',
  'macro-phillips-curve': 'ap-macro',
  'macro-money-banking': 'ap-macro',
  'macro-monetary-policy': 'ap-macro',
  'macro-fiscal-policy': 'ap-macro',
  'macro-fiscal-policy-tools': 'ap-macro',
  'macro-open-economy': 'ap-macro',
  'macro-international-trade-finance': 'ap-macro',
  // AAS
  'aas-african-kingdoms': 'ap-african-american-studies',
  'aas-transatlantic-slave-trade': 'ap-african-american-studies',
  'aas-slavery-in-america': 'ap-african-american-studies',
  'aas-resistance-abolition': 'ap-african-american-studies',
  'aas-reconstruction-jim-crow': 'ap-african-american-studies',
  'aas-great-migration-harlem': 'ap-african-american-studies',
  'aas-wwi-wwii-era': 'ap-african-american-studies',
  'aas-civil-rights-movement': 'ap-african-american-studies',
  'aas-black-power-beyond': 'ap-african-american-studies',
  'aas-contemporary-issues': 'ap-african-american-studies',
  // AP Computer Science Principles
  'csp-creative-development': 'ap-csp',
  'csp-collaboration-development': 'ap-csp',
  'csp-data': 'ap-csp',
  'csp-binary-data': 'ap-csp',
  'csp-data-compression-analysis': 'ap-csp',
  'csp-algorithms': 'ap-csp',
  'csp-algorithms-programming': 'ap-csp',
  'csp-procedures-lists': 'ap-csp',
  'csp-variables-control': 'ap-csp',
  'csp-computing-systems-networks': 'ap-csp',
  'csp-internet-protocols': 'ap-csp',
  'csp-fault-tolerance-security': 'ap-csp',
  'csp-safe-computing': 'ap-csp',
  'csp-impact-of-computing': 'ap-csp',
  'csp-social-ethical-impacts': 'ap-csp',
}

/**
 * Course bank functions used by the generic sub-topic dispatcher. Each takes
 * (count, topicSlug?) and returns questions optionally filtered by topicSlug.
 */
const COURSE_SUB_TOPIC_BANKS: Record<string, (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>> = {
  'ap-physics-c-mech': getApPhysicsCMechQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-physics-c-em': getApPhysicsCEMQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-biology': getApBiologyQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-us-history': getApUSHistoryQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-us-gov': getApUSGovQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-world-history': getApWorldHistoryQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-human-geo': getApHumanGeoQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-enviro': getApAPESQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-english-lang': getApEngLangQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-english-lit': getApEngLitQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-micro': getApMicroQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-macro': getApMacroQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-african-american-studies': getApAASQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
  'ap-csp': getApCSPQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug?: string } & OptionQuestion>,
}

/**
 * Lesson slug → bankless-topic course getter. For courses where the bank has
 * NO per-question topicSlug field (psychology, statistics), the lesson slug
 * routes to the whole-bank random-sample getter.
 */
const LESSON_TO_FULL_COURSE_BANK: Record<string, (count?: number) => OptionQuestion[]> = {}
const PSYCHOLOGY_LESSON_SLUGS = [
  'history-approaches-psychology', 'biological-bases-brain', 'genetics-behavior',
  'sensation-sensory-processing', 'perception-attention', 'classical-conditioning',
  'operant-conditioning', 'observational-learning-cognition', 'memory-encoding-storage',
  'retrieval-forgetting', 'thinking-problem-solving', 'language-intelligence',
  'prenatal-childhood-development', 'adolescence-adulthood', 'motivation-theories',
  'emotion-stress', 'personality-theories', 'psychological-disorders-overview',
  'mood-psychotic-disorders', 'treatment-therapy', 'social-influence-conformity',
  'attitudes-persuasion', 'group-behavior-prejudice',
]
const STATISTICS_LESSON_SLUGS = [
  'types-data-sampling', 'displaying-distributions-graphs', 'describing-distributions',
  'measures-of-spread', 'measures-of-center', 'normal-distributions', 'sampling-methods',
  'observational-vs-experiments', 'experimental-design', 'bias-sampling-surveys',
  'basic-probability-rules', 'conditional-probability', 'independence',
  'discrete-random-variables', 'binomial-distribution', 'geometric-distribution',
  'continuous-random-variables', 'sampling-distributions', 'central-limit-theorem',
  'interpreting-ci', 'ci-proportions', 'ci-means', 'hypothesis-testing-framework',
  'type-errors', 'tests-proportions', 'tests-means', 'paired-data', 'chi-square-tests',
  'scatterplots-correlation', 'least-squares-regression', 'residuals-residual-plots',
  'coefficient-determination', 'transformations-linearity', 'inference-regression',
  'mean-sd-random-variables', 'combining-random-variables',
  'sampling-distribution-sample-mean', 'sampling-distribution-sample-proportion',
  'two-sample-proportions', 'two-sample-means', 'chi-square-independence-homogeneity',
]
for (const s of PSYCHOLOGY_LESSON_SLUGS) LESSON_TO_FULL_COURSE_BANK[s] = getApPsychologyQuestions as unknown as (count?: number) => OptionQuestion[]
for (const s of STATISTICS_LESSON_SLUGS) LESSON_TO_FULL_COURSE_BANK[s] = getApStatisticsQuestions as unknown as (count?: number) => OptionQuestion[]

/**
 * Lesson slugs that are course/unit "buckets" rather than a single sub-topic.
 * For these, we sample from the entire course bank instead of strict
 * topic-equality filtering. The value is the course bank key.
 */
const COURSE_GROUPING_LESSONS: Record<string, 'ap-calculus-ab' | 'ap-calculus-bc'> = {
  // ---- AP Calculus AB unit & exam-prep buckets
  'ap-exam-review-calcab': 'ap-calculus-ab',
  'applications-of-derivatives-calcab': 'ap-calculus-ab',
  'calcab-applications-derivatives': 'ap-calculus-ab',
  'calcab-differential-equations': 'ap-calculus-ab',
  'calcab-differentiation-fundamentals': 'ap-calculus-ab',
  'calcab-exam-prep': 'ap-calculus-ab',
  'calcab-integration-applications': 'ap-calculus-ab',
  'calcab-integration': 'ap-calculus-ab',
  'calcab-limits-continuity': 'ap-calculus-ab',
  'derivatives': 'ap-calculus-ab',
  'free-response-strategies-calcab': 'ap-calculus-ab',
  'integration-applications-calcab': 'ap-calculus-ab',
  'limits': 'ap-calculus-ab',
  // ---- AP Calculus BC unit & exam-prep buckets
  'calcbc-advanced-de': 'ap-calculus-bc',
  'calcbc-advanced-integration': 'ap-calculus-bc',
  'calcbc-exam-prep': 'ap-calculus-bc',
  'calcbc-parametric-polar-vector': 'ap-calculus-bc',
  'calcbc-power-taylor': 'ap-calculus-bc',
  'calcbc-sequences-series': 'ap-calculus-bc',
}

export function generateMatchQuestions(totalQuestions: number = 10, topicSlug?: string, completedTopics?: string[]): MatchQuestion[] {
  // Resolve a possibly-aliased lesson slug into an actual bank topic slug.
  // Lesson slugs (from the curriculum DB) often differ from competitive bank
  // topic slugs (e.g. lesson `linearization-differentials-calcab` → bank
  // topic `linearization-differentials`). Without aliasing, those slugs would
  // miss every routing branch and historically fell through to a unit-circle
  // click-the-angle drill (the source of irrelevant unit-circle questions in
  // AP Calc competitive mode).
  const resolvedTopicSlug = topicSlug ? (LESSON_TO_BANK_TOPIC[topicSlug] ?? topicSlug) : topicSlug
  // Course-grouping lesson slugs (units/exam-prep buckets) should sample
  // randomly from the entire course bank instead of strict-filtering.
  const groupingCourseKey = topicSlug ? COURSE_GROUPING_LESSONS[topicSlug] : undefined

  // Generic per-course sub-topic dispatch: if the lesson slug is registered
  // in LESSON_TO_COURSE_BANK_KEY, route it to that course's bank function with
  // the (aliased) bank-topic slug. This covers all courses whose banks have
  // per-question topicSlug fields. Avoids the strict every() check used by
  // the older per-course branches.
  if (topicSlug && LESSON_TO_COURSE_BANK_KEY[topicSlug]) {
    const courseKey = LESSON_TO_COURSE_BANK_KEY[topicSlug]
    const bankFn = COURSE_SUB_TOPIC_BANKS[courseKey]
    if (bankFn) {
      const bankSlug = LESSON_TO_BANK_TOPIC[topicSlug] ?? topicSlug
      const filtered = bankFn(totalQuestions, bankSlug)
      if (filtered.length > 0) {
        return (filtered as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
          const shuffled = shuffleOptions(q)
          return {
            id: i,
            question: q.question as string,
            options: shuffled.options,
            correctAnswer: shuffled.correctAnswer,
            answerIndex: shuffled.answerIndex,
            explanation: q.explanation as string,
            difficulty: q.difficulty,
            type: 'multiple-choice'
          } as MatchQuestion
        })
      }
    }
  }

  // Bankless-topic course dispatch: psychology and statistics banks have no
  // per-question topicSlug, so any lesson slug for these courses pulls a
  // random sample from the whole course bank.
  if (topicSlug && LESSON_TO_FULL_COURSE_BANK[topicSlug]) {
    const bankFn = LESSON_TO_FULL_COURSE_BANK[topicSlug]
    const qs = bankFn(totalQuestions)
    if (qs.length > 0) {
      return qs.map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }


  // Course-grouping lessons (e.g. an AP Calc AB unit page or exam-prep
  // bucket): pull a random mix from that course's bank.
  if (groupingCourseKey) {
    const groupBank = groupingCourseKey === 'ap-calculus-ab'
      ? getApCalculusQuestions
      : getApCalculusBCQuestions
    const groupQuestions = groupBank(totalQuestions)
    if (groupQuestions.length > 0) {
      return (groupQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }
  // If topic is reflection-refraction, use that question bank
  if (topicSlug === 'reflection-refraction') {
    const questions = getQuestionSet(totalQuestions)
    return questions.map((q, i) => {
      const serializableQuestion = Object.fromEntries(
        Object.entries(q as unknown as Record<string, unknown>).filter(([key]) => key !== 'generateQuestion')
      ) as { options: string[]; [key: string]: unknown }
      const shuffled = shuffleOptions({ options: serializableQuestion.options, correctAnswer: q.correctAnswer })
      return {
        ...serializableQuestion,
        id: i,
        options: shuffled.options,
        correctAnswer: shuffled.correctAnswer,
        answerIndex: shuffled.answerIndex,
        type: 'multiple-choice'
      }
    })
  }

  // AP Chemistry sub-topic routing: filter questions to specific topic
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-chemistry') {
    const apChemTopicQuestions = getApChemistryQuestions(totalQuestions, resolvedTopicSlug)
    // Only use filtered results if the bank actually has questions for this topic
    if (apChemTopicQuestions.length > 0 && apChemTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apChemTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Physics 1 sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-physics1') {
    const apPhysicsTopicQuestions = getApPhysics1Questions(totalQuestions, resolvedTopicSlug)
    if (apPhysicsTopicQuestions.length > 0 && apPhysicsTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysicsTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Biology sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-biology') {
    const apBioTopicQuestions = getApBiologyQuestions(totalQuestions, resolvedTopicSlug)
    if (apBioTopicQuestions.length > 0 && apBioTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apBioTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // Algebra 1 sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'algebra-1' && resolvedTopicSlug !== 'algebra1') {
    const algebra1TopicQuestions = getAlgebra1Questions(totalQuestions, resolvedTopicSlug)
    if (algebra1TopicQuestions.length > 0 && algebra1TopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (algebra1TopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Precalculus sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'precalc' && resolvedTopicSlug !== 'ap-precalculus') {
    const precalcTopicQuestions = getPreCalcQuestions(totalQuestions, resolvedTopicSlug)
    if (precalcTopicQuestions.length > 0 && precalcTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (precalcTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Calculus AB sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-calculus-ab') {
    const apCalcTopicQuestions = getApCalculusQuestions(totalQuestions, resolvedTopicSlug)
    if (apCalcTopicQuestions.length > 0 && apCalcTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apCalcTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Physics 2 sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-physics2') {
    const apPhysics2TopicQuestions = getApPhysics2Questions(totalQuestions, resolvedTopicSlug)
    if (apPhysics2TopicQuestions.length > 0 && apPhysics2TopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysics2TopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Physics C: Mechanics sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-physics-c-mech') {
    const apPhysicsCMechTopicQuestions = getApPhysicsCMechQuestions(totalQuestions, resolvedTopicSlug)
    if (apPhysicsCMechTopicQuestions.length > 0 && apPhysicsCMechTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysicsCMechTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Physics C: E&M sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-physics-c-em') {
    const apPhysicsCEMTopicQuestions = getApPhysicsCEMQuestions(totalQuestions, resolvedTopicSlug)
    if (apPhysicsCEMTopicQuestions.length > 0 && apPhysicsCEMTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysicsCEMTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // AP Calculus BC sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'ap-calculus-bc') {
    const apCalcBCTopicQuestions = getApCalculusBCQuestions(totalQuestions, resolvedTopicSlug)
    if (apCalcBCTopicQuestions.length > 0 && apCalcBCTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apCalcBCTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // Geometry sub-topic routing
  if (resolvedTopicSlug && resolvedTopicSlug !== 'geometry') {
    const geometryTopicQuestions = getGeometryQuestions(totalQuestions, resolvedTopicSlug)
    if (geometryTopicQuestions.length > 0 && geometryTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (geometryTopicQuestions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const shuffled = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: shuffled.options,
          correctAnswer: shuffled.correctAnswer,
          answerIndex: shuffled.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  // Multiple-choice question bank topics
  const mcqBanks: Record<string, (count?: number) => OptionQuestion[]> = {
    'derivatives': getDerivativeQuestions as unknown as (count?: number) => OptionQuestion[],
    'limits': getLimitQuestions as unknown as (count?: number) => OptionQuestion[],
    'integrals': getIntegralQuestions as unknown as (count?: number) => OptionQuestion[],
    'algebra': getAlgebraQuestions as unknown as (count?: number) => OptionQuestion[],
    'algebra-1': getAlgebra1Questions as unknown as (count?: number) => OptionQuestion[],
    'negative-numbers-grade6': getNegativeNumbersQuestions as unknown as (count?: number) => OptionQuestion[],
    'sat-punctuation-commas-semicolons': getSatPunctuationQuestions as unknown as (count?: number) => OptionQuestion[],
    'sat-punctuation': getSatPunctuationGeneralQuestions as unknown as (count?: number) => OptionQuestion[],
    'parametric-equations': getParametricQuestions as unknown as (count?: number) => OptionQuestion[],
    'vectors': getVectorQuestions as unknown as (count?: number) => OptionQuestion[],
    'polar-coordinates': getPolarQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-biology': getApBiologyQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-chemistry': getApChemistryQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-psychology': getApPsychologyQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-statistics': getApStatisticsQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-physics1': getApPhysics1Questions as unknown as (count?: number) => OptionQuestion[],
    'sat-math': getSatMathQuestions as unknown as (count?: number) => OptionQuestion[],
    'sat-reading': getSatReadingQuestions as unknown as (count?: number) => OptionQuestion[],
    'act-math': getActMathQuestions as unknown as (count?: number) => OptionQuestion[],
    'act-science': getActScienceQuestions as unknown as (count?: number) => OptionQuestion[],
    'ochem': getOChemQuestions as unknown as (count?: number) => OptionQuestion[],
    'precalc': getPreCalcQuestions as unknown as (count?: number) => OptionQuestion[],
    'geometry': getGeometryQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-calculus-ab': getApCalculusQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-physics2': getApPhysics2Questions as unknown as (count?: number) => OptionQuestion[],
    'ap-physics-c-mech': getApPhysicsCMechQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-physics-c-em': getApPhysicsCEMQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-calculus-bc': getApCalculusBCQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-precalculus': getPreCalcQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-human-geo': getApHumanGeoQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-us-gov': getApUSGovQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-world-history': getApWorldHistoryQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-us-history': getApUSHistoryQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-macro': getApMacroQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-micro': getApMicroQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-african-american-studies': getApAASQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-english-lit': getApEngLitQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-english-lang': getApEngLangQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-enviro': getApAPESQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-csa': getApCSAQuestions as unknown as (count?: number) => OptionQuestion[],
    'ap-csp': getApCSPQuestions as unknown as (count?: number) => OptionQuestion[],
  }

  // For course-level topics (standard mode, no sub-topic selected), filter to completed topics only
  const courseTopicBanks: Record<string, (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>> = {
    'ap-chemistry': getApChemistryQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-physics1': getApPhysics1Questions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-biology': getApBiologyQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'precalc': getPreCalcQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-calculus-ab': getApCalculusQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-physics2': getApPhysics2Questions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-physics-c-mech': getApPhysicsCMechQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-physics-c-em': getApPhysicsCEMQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'ap-calculus-bc': getApCalculusBCQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'algebra-1': getAlgebra1Questions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
    'geometry': getGeometryQuestions as unknown as (count: number, topicSlug?: string) => Array<{ topicSlug: string } & OptionQuestion>,
  }

  if (topicSlug && topicSlug in courseTopicBanks && completedTopics && completedTopics.length > 0) {
    // Standard mode: only include questions from topics both students have completed
    const bankFn = courseTopicBanks[topicSlug]
    const allCourseQuestions = bankFn(999) // get all questions
    const filteredQuestions = allCourseQuestions.filter(q => completedTopics.includes(q.topicSlug))
    if (filteredQuestions.length > 0) {
      const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
      const selected = shuffled.slice(0, Math.min(totalQuestions, shuffled.length))
      return (selected as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
        const s = shuffleOptions(q)
        return {
          id: i,
          question: q.question as string,
          options: s.options,
          correctAnswer: s.correctAnswer,
          answerIndex: s.answerIndex,
          explanation: q.explanation as string,
          difficulty: q.difficulty,
          type: 'multiple-choice'
        } as MatchQuestion
      })
    }
  }

  if (topicSlug && topicSlug in mcqBanks) {
    const questions = mcqBanks[topicSlug](totalQuestions)
    return questions.map((q: OptionQuestion, i: number) => {
      const shuffled = shuffleOptions(q)
      return {
        id: i,
        question: q.question as string,
        options: shuffled.options,
        correctAnswer: shuffled.correctAnswer,
        answerIndex: shuffled.answerIndex,
        explanation: q.explanation as string,
        difficulty: q.difficulty,
        type: 'multiple-choice'
      } as MatchQuestion
    })
  }

  // Algebra 2: filter questions to only subtopics the student has completed
  if (topicSlug === 'algebra2') {
    const allowedSubtopics = completedTopics ? getUnlockedAlgebra2Subtopics(completedTopics) : undefined
    const questions = getAlgebra2Questions(totalQuestions, allowedSubtopics)
    return (questions as unknown as OptionQuestion[]).map((q: OptionQuestion, i: number) => {
      const shuffled = shuffleOptions(q)
      return {
        id: i,
        question: q.question as string,
        options: shuffled.options,
        correctAnswer: shuffled.correctAnswer,
        answerIndex: shuffled.answerIndex,
        explanation: q.explanation as string,
        difficulty: q.difficulty,
        type: 'multiple-choice'
      } as MatchQuestion
    })
  }

  // If cumulative, get mixed questions from all available topics
  if (topicSlug === 'cumulative') {
    return generateCumulativeQuestions(totalQuestions, completedTopics)
  }

  // If a topicSlug was provided but matched none of the routes/banks above,
  // fall back to cumulative MCQs rather than silently returning unit-circle
  // click-the-angle drills (which leaked unit-circle questions into AP Calc
  // and other courses whose lesson slugs don't match bank topic slugs).
  if (topicSlug && topicSlug !== 'unit-circle') {
    return generateCumulativeQuestions(totalQuestions, completedTopics)
  }

  // Default (no topicSlug, or explicit 'unit-circle'): unit circle questions
  const questions: Question[] = [];
  const usedIndices = new Set<number>();

  // Ensure we have a mix of question types
  const questionTypes: ('find-angle' | 'find-coordinate')[] = [];
  for (let i = 0; i < totalQuestions; i++) {
    questionTypes.push(i % 2 === 0 ? 'find-angle' : 'find-coordinate');
  }
  
  // Shuffle question types
  for (let i = questionTypes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionTypes[i], questionTypes[j]] = [questionTypes[j], questionTypes[i]];
  }

  for (let i = 0; i < totalQuestions; i++) {
    // Pick a random position, allowing reuse when totalQuestions > available positions
    let randomIndex: number;
    if (usedIndices.size >= UNIT_CIRCLE_POSITIONS.length) {
      // All positions used, allow reuse
      randomIndex = Math.floor(Math.random() * UNIT_CIRCLE_POSITIONS.length);
    } else {
      do {
        randomIndex = Math.floor(Math.random() * UNIT_CIRCLE_POSITIONS.length);
      } while (usedIndices.has(randomIndex));
    }
    
    usedIndices.add(randomIndex);
    const position = UNIT_CIRCLE_POSITIONS[randomIndex];
    const type = questionTypes[i];

    let prompt: string;
    if (type === 'find-angle') {
      // Given coordinate, find angle
      prompt = `Click the position for angle ${position.angle}°`;
    } else {
      // Given angle, find coordinate
      const coord = formatCoordinate(position.x, position.y);
      prompt = `Click the position for coordinate ${coord}`;
    }

    questions.push({
      id: i,
      type,
      target: position,
      prompt,
      answerIndex: randomIndex, // Store the correct answer index
    });
  }

  return questions as unknown as MatchQuestion[];
}

/**
 * Generate cumulative questions from multiple topics
 */
function generateCumulativeQuestions(totalQuestions: number, completedTopics?: string[]): MatchQuestion[] {
  const questions: MatchQuestion[] = []

  // Gather questions from all MCQ banks
  const allBankQuestions: MatchQuestion[] = []

  // Reflection-refraction questions
  const rrQuestions = getQuestionSet(2).map((q, i) => {
    const shuffled = shuffleOptions({ options: (q as unknown as Record<string, unknown>).options as string[], correctAnswer: q.correctAnswer } as OptionQuestion)
    return {
      id: i,
      question: (q as unknown as Record<string, unknown>).question as string,
      options: shuffled.options,
      correctAnswer: shuffled.correctAnswer,
      answerIndex: shuffled.answerIndex,
      explanation: (q as unknown as Record<string, unknown>).explanation as string,
      type: 'multiple-choice'
    } as MatchQuestion
  })
  allBankQuestions.push(...rrQuestions)

  // Derivatives
  const dQuestions = getDerivativeQuestions(3).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...dQuestions)

  // Limits
  const lQuestions = getLimitQuestions(3).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...lQuestions)

  // Integrals
  const iQuestions = getIntegralQuestions(1).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...iQuestions)

  // Algebra 2 — filtered to completed subtopics only
  const allowedSubtopics = completedTopics ? getUnlockedAlgebra2Subtopics(completedTopics) : undefined
  const a2Questions = getAlgebra2Questions(1, allowedSubtopics).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...a2Questions)

  // Parametric equations
  const paramQuestions = getParametricQuestions(1).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...paramQuestions)

  // Vectors
  const vecQuestions = getVectorQuestions(1).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...vecQuestions)

  // Polar coordinates
  const polarQuestions = getPolarQuestions(1).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...polarQuestions)

  questions.push(...allBankQuestions)

  // Shuffle the combined questions
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]]
  }

  // Take only what we need and re-index
  const result = questions.slice(0, totalQuestions)
  result.forEach((q, i) => q.id = i)

  return result
}

/**
 * Check if the clicked position matches the target
 */
export function checkAnswer(
  clickedIndex: number,
  targetPosition: UnitCirclePosition
): boolean {
  const clicked = UNIT_CIRCLE_POSITIONS[clickedIndex];
  
  // Check if angle matches (with some tolerance for floating point)
  return Math.abs(clicked.angle - targetPosition.angle) < 0.1;
}

/**
 * Calculate Elo MMR change
 */
export function calculateMMRChange(
  playerMMR: number,
  opponentMMR: number,
  playerWon: boolean,
  totalMatches: number
): number {
  // Determine K-factor based on experience
  let kFactor: number;
  if (totalMatches < 10) {
    kFactor = 40; // New players
  } else if (totalMatches < 30) {
    kFactor = 32; // Intermediate
  } else if (playerMMR >= 2000) {
    kFactor = 16; // High-rated players
  } else {
    kFactor = 24; // Experienced players
  }

  // Calculate expected score
  const expectedScore = 1 / (1 + Math.pow(10, (opponentMMR - playerMMR) / 400));
  
  // Actual score (1 for win, 0 for loss, 0.5 for tie - though we don't have ties in this game)
  const actualScore = playerWon ? 1 : 0;
  
  // Calculate MMR change
  const mmrChange = Math.round(kFactor * (actualScore - expectedScore));
  
  return mmrChange;
}

/**
 * Determine rank based on MMR
 */
export function getRankFromMMR(mmr: number): string {
  if (mmr >= 2200) return 'Diamond';
  if (mmr >= 1800) return 'Platinum';
  if (mmr >= 1400) return 'Gold';
  if (mmr >= 1000) return 'Silver';
  return 'Bronze';
}
