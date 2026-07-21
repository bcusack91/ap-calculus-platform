// Utility functions for competitive match gameplay

// Lazily load each question bank so a given competitive API route only pulls
// in the ~50KB bank it actually needs at runtime, instead of webpack bundling
// all ~2.3MB of banks into every route's cold-start graph. Each wrapper keeps
// the SAME name as the original named export so the dispatch maps and call
// sites resolve unchanged — callers just `await` the now-async getter.
type BankQuestion = OptionQuestion
type AnyGetter = (...a: unknown[]) => BankQuestion[]
async function getQuestionSet(...args: unknown[]) { const m = await import('@/data/competitive-questions/reflection-refraction-bank'); return (m.getQuestionSet as unknown as AnyGetter)(...args) }
async function getDerivativeQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/derivatives-bank'); return m.getDerivativeQuestions(count ?? 10) }
async function getLimitQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/limits-bank'); return m.getLimitQuestions(count ?? 10) }
async function getIntegralQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/integrals-bank'); return m.getIntegralQuestions(count ?? 10) }
async function getAlgebraQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/algebra-bank'); return m.getAlgebraQuestions(count ?? 10) }
async function getAlgebra1Questions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/algebra1-bank'); return m.getAlgebra1Questions(count ?? 10, topicSlug) }
async function getAlgebra2Questions(...args: unknown[]) { const m = await import('@/data/competitive-questions/algebra2-bank'); return (m.getAlgebra2Questions as unknown as AnyGetter)(...args) }
async function getUnlockedAlgebra2Subtopics(...args: unknown[]) { const m = await import('@/data/competitive-questions/algebra2-bank'); return (m.getUnlockedAlgebra2Subtopics as unknown as AnyGetter)(...args) }
async function getNegativeNumbersQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/negative-numbers-bank'); return m.getNegativeNumbersQuestions(count ?? 10) }
async function getSatPunctuationQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-punctuation-bank'); return m.getSatPunctuationQuestions(count ?? 10) }
async function getSatPunctuationGeneralQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-punctuation-general-bank'); return m.getSatPunctuationGeneralQuestions(count ?? 10) }
async function getParametricQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/parametric-equations-bank'); return m.getParametricQuestions(count ?? 10) }
async function getVectorQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/vectors-bank'); return m.getVectorQuestions(count ?? 10) }
async function getPolarQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/polar-coordinates-bank'); return m.getPolarQuestions(count ?? 10) }
async function getApBiologyQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-biology-bank'); return m.getApBiologyQuestions(count ?? 10, topicSlug) }
async function getApChemistryQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-chemistry-bank'); return m.getApChemistryQuestions(count ?? 10, topicSlug) }
async function getApPsychologyQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-psychology-bank'); return m.getApPsychologyQuestions(count ?? 10, topicSlug) }
async function getApStatisticsQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-statistics-bank'); return m.getApStatisticsQuestions(count ?? 10, topicSlug) }
async function getApPhysics1Questions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-physics1-bank'); return m.getApPhysics1Questions(count ?? 10, topicSlug) }
async function getSatMathQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-math-bank'); return m.getSatMathQuestions(count ?? 10) }
async function getSatReadingQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-reading-bank'); return m.getSatReadingQuestions(count ?? 10) }
// SAT Math — 4 area-filtered pools (draw only from that area of sat-math-bank)
async function getSatMathAlgebra(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-math-bank'); return m.getSatMathQuestions(count ?? 10, 'algebra') }
async function getSatMathAdvanced(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-math-bank'); return m.getSatMathQuestions(count ?? 10, 'advanced') }
async function getSatMathProblemSolving(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-math-bank'); return m.getSatMathQuestions(count ?? 10, 'problem-solving') }
async function getSatMathGeometry(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-math-bank'); return m.getSatMathQuestions(count ?? 10, 'geometry') }
// SAT Reading & Writing — mixed + 4 domain-filtered pools (sat-rw-bank)
async function getSatRwQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-rw-bank'); return m.getSatRwQuestions(count ?? 10) }
async function getSatRwInfoIdeas(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-rw-bank'); return m.getSatRwQuestions(count ?? 10, 'information-ideas') }
async function getSatRwCraftStructure(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-rw-bank'); return m.getSatRwQuestions(count ?? 10, 'craft-structure') }
async function getSatRwExpression(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-rw-bank'); return m.getSatRwQuestions(count ?? 10, 'expression') }
async function getSatRwConventions(count?: number): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/sat-rw-bank'); return m.getSatRwQuestions(count ?? 10, 'conventions') }
async function getActMathQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/act-math-bank'); return m.getActMathQuestions(count ?? 10) }
async function getActScienceQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/act-science-bank'); return m.getActScienceQuestions(count ?? 10) }
async function getOChemQuestions(count?: number, _topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ochem-bank'); return m.getOChemQuestions(count ?? 10) }
async function getPreCalcQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/precalc-bank'); return m.getPreCalcQuestions(count ?? 10, topicSlug) }
async function getGeometryQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/geometry-bank'); return m.getGeometryQuestions(count ?? 10, topicSlug) }
async function getApCalculusQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-calculus-bank'); return m.getApCalculusQuestions(count ?? 10, topicSlug) }
async function getApPhysics2Questions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-physics2-bank'); return m.getApPhysics2Questions(count ?? 10, topicSlug) }
async function getApPhysicsCMechQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-physics-c-mech-bank'); return m.getApPhysicsCMechQuestions(count ?? 10, topicSlug) }
async function getApPhysicsCEMQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-physics-c-em-bank'); return m.getApPhysicsCEMQuestions(count ?? 10, topicSlug) }
async function getApCalculusBCQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-calculus-bc-bank'); return m.getApCalculusBCQuestions(count ?? 10, topicSlug) }
async function getApHumanGeoQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-human-geo-bank'); return m.getApHumanGeoQuestions(count ?? 10, topicSlug) }
async function getApUSGovQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-us-gov-bank'); return m.getApUSGovQuestions(count ?? 10, topicSlug) }
async function getApWorldHistoryQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-world-history-bank'); return m.getApWorldHistoryQuestions(count ?? 10, topicSlug) }
async function getApUSHistoryQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-us-history-bank'); return m.getApUSHistoryQuestions(count ?? 10, topicSlug) }
async function getApMacroQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-macro-bank'); return m.getApMacroQuestions(count ?? 10, topicSlug) }
async function getApMicroQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-micro-bank'); return m.getApMicroQuestions(count ?? 10, topicSlug) }
async function getApAASQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-african-american-studies-bank'); return m.getApAASQuestions(count ?? 10, topicSlug) }
async function getApEngLitQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-english-lit-bank'); return m.getApEngLitQuestions(count ?? 10, topicSlug) }
async function getApEngLangQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-english-lang-bank'); return m.getApEngLangQuestions(count ?? 10, topicSlug) }
async function getApAPESQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-enviro-bank'); return m.getApAPESQuestions(count ?? 10, topicSlug) }
async function getApCSAQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-csa-bank'); return m.getApCSAQuestions(count ?? 10, topicSlug) }
async function getApCSPQuestions(count?: number, topicSlug?: string): Promise<OptionQuestion[]> { const m = await import('@/data/competitive-questions/ap-csp-bank'); return m.getApCSPQuestions(count ?? 10, topicSlug) }

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

// Concrete shape shared by every bank's question (no index signature, so the
// banks' own question interfaces are structurally assignable — that's what lets
// the lazy getters return this without `as unknown` casts). Only the fields the
// dispatch actually reads are declared.
type OptionQuestion = {
  id?: number | string;
  question?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty?: unknown;
  topicSlug?: string;
  subtopic?: string;
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
const LESSON_TO_BANK_TOPIC: Record<string, string> = {}

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
const COURSE_SUB_TOPIC_BANKS: Record<string, (count: number, topicSlug?: string) => Promise<Array<{ topicSlug?: string } & OptionQuestion>>> = {
  'ap-physics-c-mech': getApPhysicsCMechQuestions,
  'ap-physics-c-em': getApPhysicsCEMQuestions,
  'ap-biology': getApBiologyQuestions,
  'ap-us-history': getApUSHistoryQuestions,
  'ap-us-gov': getApUSGovQuestions,
  'ap-world-history': getApWorldHistoryQuestions,
  'ap-human-geo': getApHumanGeoQuestions,
  'ap-enviro': getApAPESQuestions,
  'ap-english-lang': getApEngLangQuestions,
  'ap-english-lit': getApEngLitQuestions,
  'ap-micro': getApMicroQuestions,
  'ap-macro': getApMacroQuestions,
  'ap-african-american-studies': getApAASQuestions,
  'ap-csp': getApCSPQuestions,
}

/**
 * Lesson slug → bankless-topic course getter. For courses where the bank has
 * NO per-question topicSlug field (psychology, statistics), the lesson slug
 * routes to the whole-bank random-sample getter.
 */
const LESSON_TO_FULL_COURSE_BANK: Record<string, (count?: number) => Promise<OptionQuestion[]>> = {}
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
for (const s of PSYCHOLOGY_LESSON_SLUGS) LESSON_TO_FULL_COURSE_BANK[s] = getApPsychologyQuestions
for (const s of STATISTICS_LESSON_SLUGS) LESSON_TO_FULL_COURSE_BANK[s] = getApStatisticsQuestions

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

// Every AP competitive bank getter. Each one filters by the question's canonical
// topicSlug — the same slug the curriculum DB / competitive topic filter uses —
// so a selected topic resolves to exactly that topic's questions.
type ApBankGetter = (count: number, topicSlug?: string) => Promise<Array<{ topicSlug?: string } & OptionQuestion>>
const AP_BANK_GETTERS: ApBankGetter[] = [
  getApBiologyQuestions, getApChemistryQuestions, getApPhysics1Questions, getApPhysics2Questions,
  getApPhysicsCMechQuestions, getApPhysicsCEMQuestions, getApCalculusQuestions, getApCalculusBCQuestions,
  getApStatisticsQuestions, getApPsychologyQuestions, getApUSGovQuestions, getApUSHistoryQuestions,
  getApWorldHistoryQuestions, getApHumanGeoQuestions, getApMacroQuestions, getApMicroQuestions,
  getApAPESQuestions, getApEngLangQuestions, getApEngLitQuestions, getApAASQuestions,
  getApCSPQuestions, getApCSAQuestions,
]

// Lazy, cached map: canonical topic slug -> the AP bank getter that owns it.
// Built once by scanning every AP bank, so any AP topic routes to its bank
// without per-course alias tables (bank slugs ARE the canonical curriculum slugs).
let _apSlugToGetter: Map<string, ApBankGetter> | null = null
async function getApSlugToGetter(): Promise<Map<string, ApBankGetter>> {
  if (_apSlugToGetter) return _apSlugToGetter
  const map = new Map<string, ApBankGetter>()
  for (const fn of AP_BANK_GETTERS) {
    try {
      const qs = await fn(1_000_000)
      for (const q of qs) if (q.topicSlug && !map.has(q.topicSlug)) map.set(q.topicSlug, fn)
    } catch { /* skip a bank that fails to load */ }
  }
  _apSlugToGetter = map
  return map
}

export type MatchTier = 'easy' | 'medium' | 'hard'

/**
 * Difficulty mix per match tier (owner spec): harder tiers include easier
 * warm-up questions. At 10 questions, hard = 2 easy + 3 medium + 5 hard;
 * other counts allocate proportionally (largest-remainder, deterministic).
 */
const TIER_MIX: Record<MatchTier, { easy: number; medium: number; hard: number }> = {
  easy: { easy: 1, medium: 0, hard: 0 },
  medium: { easy: 0.3, medium: 0.7, hard: 0 },
  hard: { easy: 0.2, medium: 0.3, hard: 0.5 },
}

// Shortfall spill order: when a tier's pool runs dry, borrow from these.
const TIER_SPILL: Record<MatchTier, MatchTier[]> = {
  easy: ['medium', 'hard'],
  medium: ['easy', 'hard'],
  hard: ['medium', 'easy'],
}

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Draw `count` questions from `pool` honoring the tier's difficulty mix.
 * Untagged questions count as medium. Result is ordered as a ramp
 * (easy → medium → hard) so matches start with warm-ups.
 */
export function pickTieredQuestions<T extends { difficulty?: unknown }>(pool: T[], count: number, tier: MatchTier): T[] {
  const buckets: Record<MatchTier, T[]> = { easy: [], medium: [], hard: [] }
  for (const q of pool) {
    const d = q.difficulty === 'easy' || q.difficulty === 'hard' ? q.difficulty : 'medium'
    buckets[d].push(q)
  }
  ;(Object.keys(buckets) as MatchTier[]).forEach((k) => { buckets[k] = fisherYates(buckets[k]) })

  // Largest-remainder allocation of count across the mix weights
  const weights = TIER_MIX[tier]
  const alloc = (Object.entries(weights) as [MatchTier, number][]).map(([k, w]) => {
    const exact = count * w
    return { k, n: Math.floor(exact), frac: exact - Math.floor(exact) }
  })
  let remaining = count - alloc.reduce((s, a) => s + a.n, 0)
  for (const a of [...alloc].sort((x, y) => y.frac - x.frac)) {
    if (remaining <= 0) break
    a.n++
    remaining--
  }

  const picked: Record<MatchTier, T[]> = { easy: [], medium: [], hard: [] }
  for (const { k, n } of alloc) picked[k] = buckets[k].splice(0, n)
  // Spill shortfalls into adjacent tiers so small banks still fill the match
  for (const { k, n } of alloc) {
    let short = n - picked[k].length
    for (const donor of TIER_SPILL[k]) {
      if (short <= 0) break
      const extra = buckets[donor].splice(0, short)
      picked[k].push(...extra)
      short -= extra.length
    }
  }
  return [...picked.easy, ...picked.medium, ...picked.hard].slice(0, count)
}

export async function generateMatchQuestions(totalQuestions: number = 10, topicSlug?: string, completedTopics?: string[], tier?: MatchTier): Promise<MatchQuestion[]> {
  // Generic AP per-topic routing (runs first): if the selected slug is a
  // canonical topic of any AP bank, return exactly that topic's questions. This
  // covers every AP course uniformly. Course-level grouping slugs (whole-unit /
  // exam-prep buckets) are NOT per-question topics, so they fall through to the
  // grouping logic below.
  if (topicSlug) {
    const apMap = await getApSlugToGetter()
    const apGetter = apMap.get(topicSlug)
    if (apGetter) {
      const filtered = await apGetter(totalQuestions, topicSlug)
      if (filtered.length > 0 && filtered.every(q => q.topicSlug === topicSlug)) {
        return filtered.map((q, i) => {
          const shuffled = shuffleOptions(q)
          return {
            id: i,
            question: q.question as string,
            options: shuffled.options,
            correctAnswer: shuffled.correctAnswer,
            answerIndex: shuffled.answerIndex,
            explanation: q.explanation as string,
            difficulty: q.difficulty,
            type: 'multiple-choice',
          } as MatchQuestion
        })
      }
    }
  }

  // (Legacy) resolve a possibly-aliased lesson slug into a bank topic slug.
  // LESSON_TO_BANK_TOPIC is now empty (identity) since bank slugs are canonical;
  // kept for the non-AP branches below.
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
      const filtered = await bankFn(totalQuestions, bankSlug)
      if (filtered.length > 0) {
        return (filtered).map((q: OptionQuestion, i: number) => {
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
    const qs = await bankFn(totalQuestions)
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
    const groupQuestions = await groupBank(totalQuestions)
    if (groupQuestions.length > 0) {
      return (groupQuestions).map((q: OptionQuestion, i: number) => {
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
    const questions = await getQuestionSet(totalQuestions)
    return questions.map((q, i) => {
      const serializableQuestion = Object.fromEntries(
        Object.entries(q as unknown as Record<string, unknown>).filter(([key]) => key !== 'generateQuestion')
      ) as { options: string[]; [key: string]: unknown }
      const shuffled = shuffleOptions({ options: serializableQuestion.options, correctAnswer: q.correctAnswer as number })
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
    const apChemTopicQuestions = await getApChemistryQuestions(totalQuestions, resolvedTopicSlug)
    // Only use filtered results if the bank actually has questions for this topic
    if (apChemTopicQuestions.length > 0 && apChemTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apChemTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apPhysicsTopicQuestions = await getApPhysics1Questions(totalQuestions, resolvedTopicSlug)
    if (apPhysicsTopicQuestions.length > 0 && apPhysicsTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysicsTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apBioTopicQuestions = await getApBiologyQuestions(totalQuestions, resolvedTopicSlug)
    if (apBioTopicQuestions.length > 0 && apBioTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apBioTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const algebra1TopicQuestions = await getAlgebra1Questions(totalQuestions, resolvedTopicSlug)
    if (algebra1TopicQuestions.length > 0 && algebra1TopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (algebra1TopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const precalcTopicQuestions = await getPreCalcQuestions(totalQuestions, resolvedTopicSlug)
    if (precalcTopicQuestions.length > 0 && precalcTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (precalcTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apCalcTopicQuestions = await getApCalculusQuestions(totalQuestions, resolvedTopicSlug)
    if (apCalcTopicQuestions.length > 0 && apCalcTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apCalcTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apPhysics2TopicQuestions = await getApPhysics2Questions(totalQuestions, resolvedTopicSlug)
    if (apPhysics2TopicQuestions.length > 0 && apPhysics2TopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysics2TopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apPhysicsCMechTopicQuestions = await getApPhysicsCMechQuestions(totalQuestions, resolvedTopicSlug)
    if (apPhysicsCMechTopicQuestions.length > 0 && apPhysicsCMechTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysicsCMechTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apPhysicsCEMTopicQuestions = await getApPhysicsCEMQuestions(totalQuestions, resolvedTopicSlug)
    if (apPhysicsCEMTopicQuestions.length > 0 && apPhysicsCEMTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apPhysicsCEMTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const apCalcBCTopicQuestions = await getApCalculusBCQuestions(totalQuestions, resolvedTopicSlug)
    if (apCalcBCTopicQuestions.length > 0 && apCalcBCTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (apCalcBCTopicQuestions).map((q: OptionQuestion, i: number) => {
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
    const geometryTopicQuestions = await getGeometryQuestions(totalQuestions, resolvedTopicSlug)
    if (geometryTopicQuestions.length > 0 && geometryTopicQuestions.every(q => q.topicSlug === resolvedTopicSlug)) {
      return (geometryTopicQuestions).map((q: OptionQuestion, i: number) => {
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
  const mcqBanks: Record<string, (count?: number) => Promise<OptionQuestion[]>> = {
    'derivatives': getDerivativeQuestions,
    'limits': getLimitQuestions,
    'integrals': getIntegralQuestions,
    'algebra': getAlgebraQuestions,
    'algebra-1': getAlgebra1Questions,
    'negative-numbers-grade6': getNegativeNumbersQuestions,
    'sat-punctuation-commas-semicolons': getSatPunctuationQuestions,
    'sat-punctuation': getSatPunctuationGeneralQuestions,
    'parametric-equations': getParametricQuestions,
    'vectors': getVectorQuestions,
    'polar-coordinates': getPolarQuestions,
    'ap-biology': getApBiologyQuestions,
    'ap-chemistry': getApChemistryQuestions,
    'ap-psychology': getApPsychologyQuestions,
    'ap-statistics': getApStatisticsQuestions,
    'ap-physics1': getApPhysics1Questions,
    'sat-math': getSatMathQuestions,
    'sat-math-algebra': getSatMathAlgebra,
    'sat-math-advanced': getSatMathAdvanced,
    'sat-math-problem-solving': getSatMathProblemSolving,
    'sat-math-geometry': getSatMathGeometry,
    'sat-reading': getSatReadingQuestions,
    'sat-rw': getSatRwQuestions,
    'sat-rw-information-ideas': getSatRwInfoIdeas,
    'sat-rw-craft-structure': getSatRwCraftStructure,
    'sat-rw-expression': getSatRwExpression,
    'sat-rw-conventions': getSatRwConventions,
    'act-math': getActMathQuestions,
    'act-science': getActScienceQuestions,
    'ochem': getOChemQuestions,
    'precalc': getPreCalcQuestions,
    'geometry': getGeometryQuestions,
    'ap-calculus-ab': getApCalculusQuestions,
    'ap-physics2': getApPhysics2Questions,
    'ap-physics-c-mech': getApPhysicsCMechQuestions,
    'ap-physics-c-em': getApPhysicsCEMQuestions,
    'ap-calculus-bc': getApCalculusBCQuestions,
    'ap-precalculus': getPreCalcQuestions,
    'ap-human-geo': getApHumanGeoQuestions,
    'ap-us-gov': getApUSGovQuestions,
    'ap-world-history': getApWorldHistoryQuestions,
    'ap-us-history': getApUSHistoryQuestions,
    'ap-macro': getApMacroQuestions,
    'ap-micro': getApMicroQuestions,
    'ap-african-american-studies': getApAASQuestions,
    'ap-english-lit': getApEngLitQuestions,
    'ap-english-lang': getApEngLangQuestions,
    'ap-enviro': getApAPESQuestions,
    'ap-csa': getApCSAQuestions,
    'ap-csp': getApCSPQuestions,
  }

  // For course-level topics (standard mode, no sub-topic selected), filter to completed topics only
  const courseTopicBanks: Record<string, (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>> = {
    'ap-chemistry': getApChemistryQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-physics1': getApPhysics1Questions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-biology': getApBiologyQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'precalc': getPreCalcQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-calculus-ab': getApCalculusQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-physics2': getApPhysics2Questions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-physics-c-mech': getApPhysicsCMechQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-physics-c-em': getApPhysicsCEMQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'ap-calculus-bc': getApCalculusBCQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'algebra-1': getAlgebra1Questions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
    'geometry': getGeometryQuestions as unknown as (count: number, topicSlug?: string) => Promise<Array<{ topicSlug: string } & OptionQuestion>>,
  }

  if (topicSlug && topicSlug in courseTopicBanks && completedTopics && completedTopics.length > 0) {
    // Standard mode: only include questions from topics both students have completed
    const bankFn = courseTopicBanks[topicSlug]
    const allCourseQuestions = await bankFn(999) // get all questions
    const filteredQuestions = allCourseQuestions.filter(q => completedTopics.includes(q.topicSlug))
    if (filteredQuestions.length > 0) {
      const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
      const selected = shuffled.slice(0, Math.min(totalQuestions, shuffled.length))
      return (selected).map((q: OptionQuestion, i: number) => {
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
    // With a tier, fetch the whole bank so the difficulty mix can be honored;
    // without one, behavior is unchanged.
    const questions = tier
      ? pickTieredQuestions(await mcqBanks[topicSlug](10000), totalQuestions, tier)
      : await mcqBanks[topicSlug](totalQuestions)
    return questions.map((q: OptionQuestion, i: number) => {
      const shuffled = shuffleOptions(q)
      const skill = (q as { skill?: string }).skill
      return {
        id: i,
        question: q.question as string,
        options: shuffled.options,
        correctAnswer: shuffled.correctAnswer,
        answerIndex: shuffled.answerIndex,
        explanation: q.explanation as string,
        difficulty: q.difficulty,
        type: 'multiple-choice',
        // Student-facing skill label (present for SAT area/domain questions).
        ...(skill ? { skill } : {}),
      } as MatchQuestion
    })
  }

  // Algebra 2: filter questions to only subtopics the student has completed
  if (topicSlug === 'algebra2') {
    const allowedSubtopics = completedTopics ? await getUnlockedAlgebra2Subtopics(completedTopics) : undefined
    const questions = await getAlgebra2Questions(totalQuestions, allowedSubtopics)
    return (questions).map((q: OptionQuestion, i: number) => {
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
    return await generateCumulativeQuestions(totalQuestions, completedTopics)
  }

  // If a topicSlug was provided but matched none of the routes/banks above,
  // fall back to cumulative MCQs rather than silently returning unit-circle
  // click-the-angle drills (which leaked unit-circle questions into AP Calc
  // and other courses whose lesson slugs don't match bank topic slugs).
  if (topicSlug && topicSlug !== 'unit-circle') {
    return await generateCumulativeQuestions(totalQuestions, completedTopics)
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
async function generateCumulativeQuestions(totalQuestions: number, completedTopics?: string[]): Promise<MatchQuestion[]> {
  const questions: MatchQuestion[] = []

  // Gather questions from all MCQ banks
  const allBankQuestions: MatchQuestion[] = []

  // Reflection-refraction questions
  const rrQuestions = ((await getQuestionSet(2))).map((q, i) => {
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
  const dQuestions = ((await getDerivativeQuestions(3))).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...dQuestions)

  // Limits
  const lQuestions = ((await getLimitQuestions(3))).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...lQuestions)

  // Integrals
  const iQuestions = ((await getIntegralQuestions(1))).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...iQuestions)

  // Algebra 2 — filtered to completed subtopics only
  const allowedSubtopics = completedTopics ? await getUnlockedAlgebra2Subtopics(completedTopics) : undefined
  const a2Questions = ((await getAlgebra2Questions(1, allowedSubtopics))).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...a2Questions)

  // Parametric equations
  const paramQuestions = ((await getParametricQuestions(1))).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...paramQuestions)

  // Vectors
  const vecQuestions = ((await getVectorQuestions(1))).map((q, i) => {
    const shuffled = shuffleOptions(q as unknown as OptionQuestion)
    return { id: i, question: q.question, options: shuffled.options, correctAnswer: shuffled.correctAnswer, answerIndex: shuffled.answerIndex, explanation: q.explanation, difficulty: q.difficulty, type: 'multiple-choice' } as MatchQuestion
  })
  allBankQuestions.push(...vecQuestions)

  // Polar coordinates
  const polarQuestions = ((await getPolarQuestions(1))).map((q, i) => {
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
