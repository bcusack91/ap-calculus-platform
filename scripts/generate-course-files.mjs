#!/usr/bin/env node
/**
 * Generate all boilerplate files for the 12 new AP courses.
 * Run: node scripts/generate-course-files.mjs
 *
 * Creates per-course: API routes, diagnostic generator, diagnostic page,
 * daily question data, daily question page, score predictor page.
 * Does NOT create exit quiz pools (those need hand-crafted questions).
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const courses = [
  {
    name: 'AP US Government',
    slug: 'ap-us-gov',
    courseSlug: 'ap-united-states-government',
    quizPrefix: 'gov',
    diagnosticCategory: 'ap-us-gov-diagnostic',
    accent: 'blue',
    accent2: 'indigo',
    emoji: '🏛️',
    exitQuizFile: 'ap-us-government',
    domains: [
      { id: 'foundations', name: 'Foundations of American Democracy', slugs: ['gov-constitutional-foundations', 'gov-federalism', 'gov-separation-of-powers'], target: 3 },
      { id: 'branches', name: 'Interactions Among Branches', slugs: ['gov-congress', 'gov-presidency', 'gov-judiciary', 'gov-bureaucracy'], target: 3 },
      { id: 'civil-liberties-rights', name: 'Civil Liberties & Civil Rights', slugs: ['gov-civil-liberties', 'gov-civil-rights'], target: 3 },
      { id: 'political-ideology', name: 'Political Ideologies & Beliefs', slugs: ['gov-ideologies', 'gov-public-opinion'], target: 3 },
      { id: 'political-participation', name: 'Political Participation', slugs: ['gov-voting-elections', 'gov-parties-interest-groups', 'gov-media-technology'], target: 3 },
    ],
    topicSlugs: ['gov-constitutional-foundations', 'gov-federalism', 'gov-separation-of-powers', 'gov-congress', 'gov-presidency', 'gov-judiciary', 'gov-bureaucracy', 'gov-civil-liberties', 'gov-civil-rights', 'gov-ideologies', 'gov-public-opinion', 'gov-voting-elections', 'gov-parties-interest-groups', 'gov-media-technology'],
  },
  {
    name: 'AP World History',
    slug: 'ap-world-history',
    courseSlug: 'ap-world-history',
    quizPrefix: 'wh',
    diagnosticCategory: 'ap-world-history-diagnostic',
    accent: 'amber',
    accent2: 'orange',
    emoji: '🌏',
    exitQuizFile: 'ap-world-history',
    domains: [
      { id: 'global-tapestry', name: 'The Global Tapestry (1200–1450)', slugs: ['wh-global-tapestry', 'wh-dar-al-islam'], target: 3 },
      { id: 'networks-exchange', name: 'Networks of Exchange (1200–1450)', slugs: ['wh-silk-roads-mongols', 'wh-indian-ocean-trade', 'wh-americas-africa-1200'], target: 3 },
      { id: 'land-based-empires', name: 'Land-Based Empires (1450–1750)', slugs: ['wh-land-based-empires', 'wh-islamic-empires', 'wh-east-asian-empires'], target: 2 },
      { id: 'transoceanic', name: 'Transoceanic Interconnections (1450–1750)', slugs: ['wh-exploration-columbian-exchange', 'wh-maritime-empires-labor', 'wh-transoceanic'], target: 2 },
      { id: 'revolutions', name: 'Revolutions (1750–1900)', slugs: ['wh-enlightenment-political-revolutions', 'wh-industrial-revolution', 'wh-revolutions'], target: 3 },
      { id: 'consequences', name: 'Consequences of Industrialization (1750–1900)', slugs: ['wh-consequences-industrialization', 'wh-imperialism', 'wh-reform-migration'], target: 2 },
    ],
    topicSlugs: ['wh-global-tapestry', 'wh-dar-al-islam', 'wh-silk-roads-mongols', 'wh-indian-ocean-trade', 'wh-americas-africa-1200', 'wh-land-based-empires', 'wh-islamic-empires', 'wh-east-asian-empires', 'wh-exploration-columbian-exchange', 'wh-maritime-empires-labor', 'wh-transoceanic', 'wh-enlightenment-political-revolutions', 'wh-industrial-revolution', 'wh-revolutions', 'wh-consequences-industrialization', 'wh-imperialism', 'wh-reform-migration'],
  },
  {
    name: 'AP US History',
    slug: 'ap-us-history',
    courseSlug: 'ap-united-states-history',
    quizPrefix: 'apush',
    diagnosticCategory: 'ap-us-history-diagnostic',
    accent: 'red',
    accent2: 'rose',
    emoji: '🇺🇸',
    exitQuizFile: 'ap-us-history',
    domains: [
      { id: 'period-1-2', name: 'Periods 1–2 (1491–1754)', slugs: ['apush-native-societies-exploration', 'apush-colonial-america', 'apush-colonial-society-conflicts'], target: 2 },
      { id: 'period-3', name: 'Period 3 (1754–1800)', slugs: ['apush-revolution-independence', 'apush-constitution-early-republic'], target: 2 },
      { id: 'period-4', name: 'Period 4 (1800–1848)', slugs: ['apush-democracy-expansion', 'apush-reform-movements'], target: 2 },
      { id: 'period-5', name: 'Period 5 (1844–1877)', slugs: ['apush-civil-war', 'apush-reconstruction'], target: 2 },
      { id: 'period-6', name: 'Period 6 (1865–1898)', slugs: ['apush-gilded-age'], target: 2 },
      { id: 'period-7', name: 'Period 7 (1890–1945)', slugs: ['apush-progressivism-wwi', 'apush-depression-wwii'], target: 3 },
    ],
    topicSlugs: ['apush-native-societies-exploration', 'apush-colonial-america', 'apush-colonial-society-conflicts', 'apush-revolution-independence', 'apush-constitution-early-republic', 'apush-democracy-expansion', 'apush-reform-movements', 'apush-civil-war', 'apush-reconstruction', 'apush-gilded-age', 'apush-progressivism-wwi', 'apush-depression-wwii'],
  },
  {
    name: 'AP Macroeconomics',
    slug: 'ap-macro',
    courseSlug: 'ap-macroeconomics',
    quizPrefix: 'macro',
    diagnosticCategory: 'ap-macro-diagnostic',
    accent: 'green',
    accent2: 'emerald',
    emoji: '📈',
    exitQuizFile: 'ap-macroeconomics',
    domains: [
      { id: 'basic-concepts', name: 'Basic Economic Concepts', slugs: ['macro-scarcity-opportunity-cost', 'macro-comparative-advantage'], target: 3 },
      { id: 'measurement', name: 'Economic Indicators & GDP', slugs: ['macro-gdp-growth', 'macro-unemployment-inflation'], target: 3 },
      { id: 'national-income', name: 'National Income & Price Determination', slugs: ['macro-ad-as', 'macro-multiplier-effect', 'macro-phillips-curve'], target: 3 },
      { id: 'financial-sector', name: 'Financial Sector', slugs: ['macro-money-banking', 'macro-monetary-policy'], target: 3 },
      { id: 'stabilization', name: 'Stabilization Policies', slugs: ['macro-fiscal-policy', 'macro-fiscal-policy-tools'], target: 3 },
      { id: 'international', name: 'International Trade & Finance', slugs: ['macro-open-economy', 'macro-international-trade-finance'], target: 3 },
    ],
    topicSlugs: ['macro-scarcity-opportunity-cost', 'macro-comparative-advantage', 'macro-gdp-growth', 'macro-unemployment-inflation', 'macro-ad-as', 'macro-multiplier-effect', 'macro-phillips-curve', 'macro-money-banking', 'macro-monetary-policy', 'macro-fiscal-policy', 'macro-fiscal-policy-tools', 'macro-open-economy', 'macro-international-trade-finance'],
  },
  {
    name: 'AP Microeconomics',
    slug: 'ap-micro',
    courseSlug: 'ap-microeconomics',
    quizPrefix: 'micro',
    diagnosticCategory: 'ap-micro-diagnostic',
    accent: 'teal',
    accent2: 'cyan',
    emoji: '💹',
    exitQuizFile: 'ap-microeconomics',
    domains: [
      { id: 'basic-concepts', name: 'Basic Economic Concepts', slugs: ['micro-scarcity-marginal-analysis', 'micro-supply-demand'], target: 3 },
      { id: 'supply-demand', name: 'Supply & Demand', slugs: ['micro-demand-supply-equilibrium', 'micro-elasticity', 'micro-government-intervention'], target: 3 },
      { id: 'production-cost', name: 'Production, Cost & Perfect Competition', slugs: ['micro-production-costs', 'micro-perfect-competition'], target: 3 },
      { id: 'imperfect-competition', name: 'Imperfect Competition', slugs: ['micro-monopoly', 'micro-monopolistic-oligopoly'], target: 3 },
      { id: 'factor-markets', name: 'Factor Markets', slugs: ['micro-labor-markets', 'micro-factor-markets'], target: 3 },
      { id: 'market-failure', name: 'Market Failure & Government', slugs: ['micro-externalities-public-goods', 'micro-market-failure'], target: 3 },
    ],
    topicSlugs: ['micro-scarcity-marginal-analysis', 'micro-supply-demand', 'micro-demand-supply-equilibrium', 'micro-elasticity', 'micro-government-intervention', 'micro-production-costs', 'micro-perfect-competition', 'micro-monopoly', 'micro-monopolistic-oligopoly', 'micro-labor-markets', 'micro-factor-markets', 'micro-externalities-public-goods', 'micro-market-failure'],
  },
  {
    name: 'AP African American Studies',
    slug: 'ap-african-american-studies',
    courseSlug: 'ap-african-american-studies',
    quizPrefix: 'aas',
    diagnosticCategory: 'ap-aas-diagnostic',
    accent: 'purple',
    accent2: 'violet',
    emoji: '✊',
    exitQuizFile: 'ap-african-american-studies',
    domains: [
      { id: 'origins-diaspora', name: 'Origins of the African Diaspora', slugs: ['aas-african-kingdoms', 'aas-origins-diaspora', 'aas-transatlantic-slave-trade'], target: 3 },
      { id: 'freedom-enslavement', name: 'Freedom, Enslavement & Resistance', slugs: ['aas-slavery-in-america', 'aas-resistance-abolition', 'aas-freedom-enslavement'], target: 3 },
      { id: 'practice-freedom', name: 'The Practice of Freedom', slugs: ['aas-reconstruction-jim-crow', 'aas-great-migration-harlem', 'aas-wwi-wwii-era', 'aas-practice-freedom'], target: 3 },
      { id: 'movements-debates', name: 'Movements & Debates', slugs: ['aas-civil-rights-movement', 'aas-black-power-beyond', 'aas-contemporary-issues', 'aas-movements-debates'], target: 3 },
    ],
    topicSlugs: ['aas-african-kingdoms', 'aas-origins-diaspora', 'aas-transatlantic-slave-trade', 'aas-slavery-in-america', 'aas-resistance-abolition', 'aas-freedom-enslavement', 'aas-reconstruction-jim-crow', 'aas-great-migration-harlem', 'aas-wwi-wwii-era', 'aas-practice-freedom', 'aas-civil-rights-movement', 'aas-black-power-beyond', 'aas-contemporary-issues', 'aas-movements-debates'],
  },
  {
    name: 'AP English Literature',
    slug: 'ap-english-lit',
    courseSlug: 'ap-english-literature',
    quizPrefix: 'englit',
    diagnosticCategory: 'ap-english-lit-diagnostic',
    accent: 'rose',
    accent2: 'pink',
    emoji: '📖',
    exitQuizFile: 'ap-english-literature',
    domains: [
      { id: 'short-fiction', name: 'Short Fiction', slugs: ['englit-short-fiction-1', 'englit-short-fiction-2', 'englit-short-fiction-3'], target: 3 },
      { id: 'poetry', name: 'Poetry', slugs: ['englit-poetry-1', 'englit-poetry-2', 'englit-poetic-structure-form', 'englit-sound-devices'], target: 3 },
      { id: 'longer-fiction', name: 'Longer Fiction & Drama', slugs: ['englit-longer-fiction', 'englit-longer-fiction-2', 'englit-dramatic-structure'], target: 3 },
      { id: 'character-narrative', name: 'Character & Narrative', slugs: ['englit-character-setting', 'englit-narration-pov', 'englit-narrative-complexity', 'englit-narrative-perspective'], target: 3 },
      { id: 'figurative-language', name: 'Figurative Language & Style', slugs: ['englit-figurative-language', 'englit-tone-speaker', 'englit-symbol-motif-fiction'], target: 3 },
      { id: 'analysis-argument', name: 'Analysis & Argumentation', slugs: ['englit-plot-conflict-theme', 'englit-social-commentary-drama'], target: 3 },
    ],
    topicSlugs: ['englit-short-fiction-1', 'englit-short-fiction-2', 'englit-short-fiction-3', 'englit-poetry-1', 'englit-poetry-2', 'englit-poetic-structure-form', 'englit-sound-devices', 'englit-longer-fiction', 'englit-longer-fiction-2', 'englit-dramatic-structure', 'englit-character-setting', 'englit-narration-pov', 'englit-narrative-complexity', 'englit-narrative-perspective', 'englit-figurative-language', 'englit-tone-speaker', 'englit-symbol-motif-fiction', 'englit-plot-conflict-theme', 'englit-social-commentary-drama'],
  },
  {
    name: 'AP English Language',
    slug: 'ap-english-lang',
    courseSlug: 'ap-english-language',
    quizPrefix: 'englang',
    diagnosticCategory: 'ap-english-lang-diagnostic',
    accent: 'indigo',
    accent2: 'blue',
    emoji: '✍️',
    exitQuizFile: 'ap-english-language',
    domains: [
      { id: 'rhetorical-situation', name: 'Rhetorical Situation', slugs: ['englang-intro-rhetoric', 'englang-rhetorical-situation', 'englang-rhetorical-situation-writing'], target: 3 },
      { id: 'claims-evidence', name: 'Claims & Evidence', slugs: ['englang-claims-evidence', 'englang-claims-evidence-reading', 'englang-claims-evidence-writing'], target: 3 },
      { id: 'reasoning-organization', name: 'Reasoning & Organization', slugs: ['englang-reasoning-org-reading', 'englang-reasoning-org-writing', 'englang-argument-structure'], target: 3 },
      { id: 'style', name: 'Style', slugs: ['englang-diction-syntax', 'englang-style-reading', 'englang-style-writing', 'englang-tone-voice-analysis'], target: 3 },
      { id: 'rhetorical-devices', name: 'Rhetorical Strategies', slugs: ['englang-ethos-pathos-logos', 'englang-logical-fallacies'], target: 2 },
      { id: 'synthesis-argument', name: 'Synthesis & Argumentation', slugs: ['englang-synthesis', 'englang-synthesis-essay', 'englang-developing-arguments', 'englang-writing-for-audience'], target: 3 },
    ],
    topicSlugs: ['englang-intro-rhetoric', 'englang-rhetorical-situation', 'englang-rhetorical-situation-writing', 'englang-claims-evidence', 'englang-claims-evidence-reading', 'englang-claims-evidence-writing', 'englang-reasoning-org-reading', 'englang-reasoning-org-writing', 'englang-argument-structure', 'englang-diction-syntax', 'englang-style-reading', 'englang-style-writing', 'englang-tone-voice-analysis', 'englang-ethos-pathos-logos', 'englang-logical-fallacies', 'englang-synthesis', 'englang-synthesis-essay', 'englang-developing-arguments', 'englang-writing-for-audience'],
  },
  {
    name: 'AP Environmental Science',
    slug: 'ap-enviro',
    courseSlug: 'ap-environmental-science',
    quizPrefix: 'apes',
    diagnosticCategory: 'ap-enviro-diagnostic',
    accent: 'lime',
    accent2: 'green',
    emoji: '🌿',
    exitQuizFile: 'ap-environmental-science',
    domains: [
      { id: 'earth-systems', name: 'The Living World: Ecosystems', slugs: ['apes-ecosystem-structure', 'apes-biogeochemical-cycles', 'apes-earth-systems'], target: 3 },
      { id: 'biodiversity', name: 'The Living World: Biodiversity', slugs: ['apes-biodiversity', 'apes-biodiversity-conservation', 'apes-biomes-succession'], target: 3 },
      { id: 'populations', name: 'Populations', slugs: ['apes-population-ecology', 'apes-human-population'], target: 3 },
      { id: 'land-water', name: 'Land & Water Use', slugs: ['apes-agriculture-land', 'apes-water-resources'], target: 3 },
      { id: 'energy', name: 'Energy Resources & Consumption', slugs: ['apes-fossil-fuels-nuclear', 'apes-renewable-energy', 'apes-energy'], target: 3 },
      { id: 'pollution', name: 'Atmospheric Pollution & Climate Change', slugs: ['apes-atmospheric-pollution', 'apes-atmosphere-climate'], target: 3 },
    ],
    topicSlugs: ['apes-ecosystem-structure', 'apes-biogeochemical-cycles', 'apes-earth-systems', 'apes-biodiversity', 'apes-biodiversity-conservation', 'apes-biomes-succession', 'apes-population-ecology', 'apes-human-population', 'apes-agriculture-land', 'apes-water-resources', 'apes-fossil-fuels-nuclear', 'apes-renewable-energy', 'apes-energy', 'apes-atmospheric-pollution', 'apes-atmosphere-climate'],
  },
  {
    name: 'AP Computer Science A',
    slug: 'ap-csa',
    courseSlug: 'ap-computer-science-a',
    quizPrefix: 'csa',
    diagnosticCategory: 'ap-csa-diagnostic',
    accent: 'gray',
    accent2: 'slate',
    emoji: '💻',
    exitQuizFile: 'ap-computer-science-a',
    domains: [
      { id: 'primitive-types', name: 'Primitive Types', slugs: ['csa-variables-types', 'csa-expressions-operators'], target: 3 },
      { id: 'using-objects', name: 'Using Objects', slugs: ['csa-strings-objects', 'csa-using-objects'], target: 3 },
      { id: 'conditionals', name: 'Boolean Expressions & Conditionals', slugs: ['csa-boolean-if', 'csa-conditionals'], target: 3 },
      { id: 'iteration', name: 'Iteration', slugs: ['csa-iteration', 'csa-loops'], target: 3 },
      { id: 'writing-classes', name: 'Writing Classes', slugs: ['csa-writing-classes', 'csa-class-design'], target: 3 },
      { id: 'arrays', name: 'Arrays', slugs: ['csa-array', 'csa-arrays'], target: 2 },
      { id: 'arraylist', name: 'ArrayList', slugs: ['csa-arraylist', 'csa-arraylist-usage'], target: 2 },
      { id: '2d-array', name: '2D Arrays', slugs: ['csa-2d-array', 'csa-2d-arrays'], target: 2 },
      { id: 'inheritance', name: 'Inheritance', slugs: ['csa-inheritance', 'csa-inheritance-polymorphism'], target: 3 },
    ],
    topicSlugs: ['csa-variables-types', 'csa-expressions-operators', 'csa-strings-objects', 'csa-using-objects', 'csa-boolean-if', 'csa-conditionals', 'csa-iteration', 'csa-loops', 'csa-writing-classes', 'csa-class-design', 'csa-array', 'csa-arrays', 'csa-arraylist', 'csa-arraylist-usage', 'csa-2d-array', 'csa-2d-arrays', 'csa-inheritance', 'csa-inheritance-polymorphism'],
  },
  {
    name: 'AP CS Principles',
    slug: 'ap-csp',
    courseSlug: 'ap-computer-science-principles',
    quizPrefix: 'csp',
    diagnosticCategory: 'ap-csp-diagnostic',
    accent: 'cyan',
    accent2: 'sky',
    emoji: '🖥️',
    exitQuizFile: 'ap-cs-principles',
    domains: [
      { id: 'creative-development', name: 'Creative Development', slugs: ['csp-creative-development', 'csp-collaboration-development'], target: 3 },
      { id: 'data', name: 'Data', slugs: ['csp-binary-data', 'csp-data-compression-analysis', 'csp-data'], target: 3 },
      { id: 'algorithms', name: 'Algorithms & Programming', slugs: ['csp-algorithms', 'csp-algorithms-programming', 'csp-variables-control', 'csp-procedures-lists'], target: 3 },
      { id: 'computing-systems', name: 'Computing Systems & Networks', slugs: ['csp-computing-systems-networks', 'csp-internet-protocols', 'csp-fault-tolerance-security'], target: 3 },
      { id: 'impact', name: 'Impact of Computing', slugs: ['csp-impact-of-computing', 'csp-safe-computing', 'csp-social-ethical-impacts'], target: 3 },
    ],
    topicSlugs: ['csp-creative-development', 'csp-collaboration-development', 'csp-binary-data', 'csp-data-compression-analysis', 'csp-data', 'csp-algorithms', 'csp-algorithms-programming', 'csp-variables-control', 'csp-procedures-lists', 'csp-computing-systems-networks', 'csp-internet-protocols', 'csp-fault-tolerance-security', 'csp-impact-of-computing', 'csp-safe-computing', 'csp-social-ethical-impacts'],
  },
]

function pascal(s) {
  return s.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase()).replace(/[-_ ]/g, '')
}

function camel(s) {
  const p = pascal(s)
  return p[0].toLowerCase() + p.slice(1)
}

function writeIfNew(filePath, content) {
  const abs = path.resolve(ROOT, filePath)
  if (fs.existsSync(abs)) {
    console.log(`  SKIP (exists): ${filePath}`)
    return false
  }
  fs.mkdirSync(path.dirname(abs), { recursive: true })
  fs.writeFileSync(abs, content)
  console.log(`  CREATED: ${filePath}`)
  return true
}

let created = 0
let skipped = 0

for (const c of courses) {
  console.log(`\n=== ${c.name} ===`)

  const Prefix = pascal(c.slug.replace('ap-', ''))
  const prefix = camel(c.slug.replace('ap-', ''))
  const totalQ = c.domains.reduce((s, d) => s + d.target, 0)

  // 1. Diagnostic generator
  const domainsDef = c.domains.map(d => `  {
    id: '${d.id}',
    name: '${d.name}',
    topicSlugs: [${d.slugs.map(s => `'${s}'`).join(', ')}],
    questionTarget: ${d.target},
  }`).join(',\n')

  const slugLabels = c.topicSlugs.map(s => {
    const readable = s.replace(/^(gov-|wh-|apush-|macro-|micro-|aas-|englit-|englang-|apes-|csa-|csp-|hg-)/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, ch => ch.toUpperCase())
    return `  '${s}': '${readable}',`
  }).join('\n')

  const diagnosticFile = `/**
 * ${c.name} Diagnostic Test Generator
 */

import { ${prefix}QuestionPool, type ${Prefix}Question } from './exit-quizzes/${c.exitQuizFile}'

export interface AP${Prefix}DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface AP${Prefix}Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface AP${Prefix}DiagnosticTestData {
  form: number
  questions: AP${Prefix}DiagnosticQuestion[]
  domains: AP${Prefix}Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface AP${Prefix}DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface AP${Prefix}RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface AP${Prefix}DiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: AP${Prefix}DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: AP${Prefix}RecommendedTopic[]
}

const AP_${Prefix.toUpperCase()}_DOMAINS: AP${Prefix}Domain[] = [
${domainsDef}
]

export { AP_${Prefix.toUpperCase()}_DOMAINS }

function mulberry32(seed: number) {
  return function () {
    // eslint-disable-next-line no-param-reassign
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateAP${Prefix}DiagnosticTest(form: number): AP${Prefix}DiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: AP${Prefix}DiagnosticQuestion[] = []

  for (const domain of AP_${Prefix.toUpperCase()}_DOMAINS) {
    const pool = ${prefix}QuestionPool.filter(
      (q: ${Prefix}Question) => q.domain === domain.id,
    )
    const shuffled = seededShuffle(pool, rng)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: domain.id,
        topicSlug: q.topicSlug,
      })
    }
  }

  return {
    form,
    questions: seededShuffle(questions, rng),
    domains: AP_${Prefix.toUpperCase()}_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 35,
  }
}

export function scoreAP${Prefix}Diagnostic(
  form: number,
  questions: AP${Prefix}DiagnosticQuestion[],
  answers: Record<number, number>,
): AP${Prefix}DiagnosticResults {
  const domainResults: AP${Prefix}DomainResult[] = AP_${Prefix.toUpperCase()}_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => { const a = answers[i]; return a !== undefined && a === questions[i].correctAnswer }).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: AP${Prefix}RecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_${Prefix.toUpperCase()}_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_${Prefix.toUpperCase()}_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : domainDef.topicSlugs[0]
    recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
${slugLabels}
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\\b\\w/g, c => c.toUpperCase())
}
`

  if (writeIfNew(`src/data/${c.slug.replace('ap-', 'ap-')}-diagnostic.ts`, diagnosticFile)) created++; else skipped++

  // 2. API: diagnostic submit
  const submitRoute = `import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { category, results, weakAreas, strengths } = await req.json()

    if (!category || !results) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const diagnostic = await prisma.diagnosticTest.create({
      data: {
        userId: session.user.id,
        category,
        results: typeof results === 'string' ? JSON.parse(results) : results,
        weakAreas: weakAreas ? (typeof weakAreas === 'string' ? JSON.parse(weakAreas) : weakAreas) : null,
        strengths: strengths ? (typeof strengths === 'string' ? strengths : JSON.stringify(strengths)) : null,
      },
    })

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('${c.name} Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
`
  if (writeIfNew(`src/app/api/${c.slug}-diagnostic/submit/route.ts`, submitRoute)) created++; else skipped++

  // 3. API: diagnostic history
  const historyRoute = `import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const attempts = await prisma.diagnosticTest.findMany({
      where: {
        userId: session.user.id,
        category: { startsWith: '${c.diagnosticCategory}' },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: {
        id: true,
        category: true,
        results: true,
        weakAreas: true,
        strengths: true,
        createdAt: true,
      },
    })

    return NextResponse.json({ attempts })
  } catch (error) {
    console.error('${c.name} Diagnostic history error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
`
  if (writeIfNew(`src/app/api/${c.slug}-diagnostic/history/route.ts`, historyRoute)) created++; else skipped++

  // 4. API: daily question
  const dailyQRoute = `import { NextResponse } from 'next/server'
import { getDailyQuestions } from '@/data/${c.slug}-daily-question'

export const revalidate = 86400

export async function GET() {
  try {
    const questions = await getDailyQuestions()
    return NextResponse.json({ date: new Date().toISOString().slice(0, 10), questions })
  } catch {
    return NextResponse.json({ error: 'Failed to generate daily questions' }, { status: 500 })
  }
}
`
  if (writeIfNew(`src/app/api/${c.slug}-daily-question/route.ts`, dailyQRoute)) created++; else skipped++

  // 5. API: score predictor
  const scorePredRoute = `import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { gatherSubjectData, mapToAPScore } from '@/lib/score-predictor-utils'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { avgPct, stats, trend, confidence, masteryRate } = await gatherSubjectData(
      session.user.id, '${c.quizPrefix}', '${c.courseSlug}', '${c.diagnosticCategory}',
    )

    const predictedScore = mapToAPScore(avgPct, masteryRate)
    trend.push({ date: new Date().toISOString(), score: predictedScore, source: 'prediction' })

    return NextResponse.json({
      prediction: { primaryScore: predictedScore, maxScore: 5, confidence },
      stats,
      trend,
    })
  } catch (error) {
    console.error('${c.name} score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
`
  if (writeIfNew(`src/app/api/${c.slug}-score-predictor/route.ts`, scorePredRoute)) created++; else skipped++

  // 6. Score predictor page
  const scorePredPage = `'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="${c.name}"
      description="Your projected ${c.name} exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/${c.slug}-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="${c.accent}"
      practiceLink={{ href: '/courses/${c.courseSlug}', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/${c.slug}-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
`
  if (writeIfNew(`src/app/${c.slug}-score-predictor/page.tsx`, scorePredPage)) created++; else skipped++

  // 7. Daily question data
  const dailyQData = `/**
 * ${c.name} — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
${c.topicSlugs.map(s => `  '${s}',`).join('\n')}
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface ${Prefix}DailyQuestion {
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
  }
  dayNumber: number
}

export async function getDailyQuestions(): Promise<${Prefix}DailyQuestion[]> {
  const day = dayOfYear()
  const slug = TOPIC_SLUGS[day % TOPIC_SLUGS.length]
  const pool = await generateExitQuiz(slug, 5)
  const q = pool[day % pool.length]

  return [
    {
      topicSlug: slug,
      question: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        category: q.category ?? slug,
      },
      dayNumber: day,
    },
  ]
}
`
  if (writeIfNew(`src/data/${c.slug}-daily-question.ts`, dailyQData)) created++; else skipped++

  // 8. Daily question page
  const dailyQPage = `'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface DailyQ {
  topicSlug: string
  question: { question: string; options: string[]; correctAnswer: number; explanation: string }
  dayNumber: number
}

export default function AP${Prefix}DailyQuestionPage() {
  const [questions, setQuestions] = useState<DailyQ[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    fetch('/api/${c.slug}-daily-question')
      .then(r => r.json())
      .then(data => setQuestions(data.questions ?? []))
      .finally(() => setLoading(false))
  }, [])

  const q = questions[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-${c.accent}-50 via-white to-${c.accent2}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link href="/courses/${c.courseSlug}" className="mb-4 inline-flex items-center gap-1 text-sm text-${c.accent}-600 hover:underline dark:text-${c.accent}-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            ${c.name}
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">${c.name} — Question of the Day</h1>
          <p className="text-gray-600 dark:text-gray-400">A fresh question every day covering all ${c.name} units!</p>
          <p className="mt-2 text-sm font-medium text-${c.accent}-600 dark:text-${c.accent}-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-10 w-10 animate-spin rounded-full border-4 border-${c.accent}-200 border-t-${c.accent}-600" /></div>
        ) : q ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="rounded-t-2xl bg-gradient-to-r from-${c.accent}-500 to-${c.accent2}-500 p-4 text-white">
                <span className="text-sm font-medium opacity-80">Today&apos;s ${c.name} Question</span>
              </div>
              <div className="p-6">
                <p className="mb-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question.question}</p>
                <div className="mb-5 space-y-2">
                  {q.question.options.map((opt, i) => {
                    let cls = 'w-full rounded-xl border px-4 py-3 text-left text-sm transition '
                    if (revealed) {
                      if (i === q.question.correctAnswer) cls += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600'
                      else if (i === selected && i !== q.question.correctAnswer) cls += 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-600'
                      else cls += 'border-gray-200 text-gray-500 dark:border-gray-600 dark:text-gray-400'
                    } else if (i === selected) cls += 'border-${c.accent}-500 bg-${c.accent}-50 text-${c.accent}-800 dark:bg-${c.accent}-900/30 dark:text-${c.accent}-300 dark:border-${c.accent}-500'
                    else cls += 'border-gray-200 text-gray-700 hover:border-${c.accent}-300 hover:bg-${c.accent}-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-${c.accent}-500'
                    return (<button key={i} onClick={() => !revealed && setSelected(i)} disabled={revealed} className={cls}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}</button>)
                  })}
                </div>
                {!revealed ? (
                  <button onClick={() => setRevealed(true)} disabled={selected === null} className="w-full rounded-xl bg-gradient-to-r from-${c.accent}-600 to-${c.accent2}-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-40">Check Answer</button>
                ) : (
                  <div className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-700/50">
                    <div className="mb-1 font-semibold text-gray-900 dark:text-white">{selected === q.question.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}</div>
                    <p className="text-gray-600 dark:text-gray-400">{q.question.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Want more practice? Try a full diagnostic or explore all topics.</p>
          <div className="flex justify-center gap-3">
            <Link href="/${c.slug}-diagnostic" className="rounded-lg bg-${c.accent}-100 px-4 py-2 text-sm font-medium text-${c.accent}-700 transition hover:bg-${c.accent}-200 dark:bg-${c.accent}-900/30 dark:text-${c.accent}-400">Diagnostic Test</Link>
            <Link href="/courses/${c.courseSlug}" className="rounded-lg bg-${c.accent}-100 px-4 py-2 text-sm font-medium text-${c.accent}-700 transition hover:bg-${c.accent}-200 dark:bg-${c.accent}-900/30 dark:text-${c.accent}-400">All Topics</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
`
  if (writeIfNew(`src/app/${c.slug}-daily-question/page.tsx`, dailyQPage)) created++; else skipped++

  // 9. Diagnostic page
  const diagPage = `'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  generateAP${Prefix}DiagnosticTest,
  scoreAP${Prefix}Diagnostic,
  pickNextForm,
  type AP${Prefix}DiagnosticTestData,
  type AP${Prefix}DiagnosticResults,
} from '@/data/${c.slug}-diagnostic'
import DiagnosticReview from '@/components/DiagnosticReview'

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return \`\${mins}:\${secs.toString().padStart(2, '0')}\`
}

interface HistoryEntry {
  id: string
  category: string
  results: Record<string, unknown>
  weakAreas: unknown
  strengths: string | null
  createdAt: string
}

export default function AP${Prefix}DiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<AP${Prefix}DiagnosticTestData | null>(null)
  const [results, setResults] = useState<AP${Prefix}DiagnosticResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/${c.slug}-diagnostic')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/${c.slug}-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) { clearInterval(timerRef.current!); handleFinish(); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const startTest = useCallback(() => {
    const previousForms = history.map(h => { const r = h.results as Record<string, unknown> | null; return Number(r?.form) }).filter((f): f is number => Number.isFinite(f) && f >= 1)
    const form = pickNextForm(previousForms)
    const data = generateAP${Prefix}DiagnosticTest(form)
    setTestData(data)
    setCurrentIndex(0)
    setAnswers(new Array(data.questions.length).fill(null))
    setEliminatedOptions(Array.from({ length: data.questions.length }, () => new Set<number>()))
    setTimeRemaining(data.timeLimitMinutes * 60)
    setPhase('testing')
  }, [history])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)

    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreAP${Prefix}Diagnostic(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults)
    setPhase('results')

    try {
      await fetch('/api/${c.slug}-diagnostic/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: \`${c.diagnosticCategory}-\${testData.form}\`,
          results: { form: diagnosticResults.form, totalCorrect: diagnosticResults.totalCorrect, totalQuestions: diagnosticResults.totalQuestions, percentage: diagnosticResults.percentage, estimatedAPScore: diagnosticResults.estimatedAPScore, domains: diagnosticResults.domains, recommendedTopics: diagnosticResults.recommendedTopics },
          weakAreas: diagnosticResults.weakAreas,
          strengths: diagnosticResults.strengths.join(', '),
        }),
      })
      const histRes = await fetch('/api/${c.slug}-diagnostic/history')
      if (histRes.ok) { const histData = await histRes.json(); setHistory(histData.attempts ?? []) }
      if (diagnosticResults.recommendedTopics.length > 0) {
        fetch('/api/flashcards/add-from-missed', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlugs: diagnosticResults.recommendedTopics.map((t: { slug: string }) => t.slug) }) }).catch(() => {})
      }
    } catch { /* silent */ }
  }, [testData, answers])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-${c.accent}-50 via-white to-${c.accent2}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12"><div className="mx-auto max-w-2xl space-y-6"><div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" /><div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" /></div></div>
      </div>
    )
  }

  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-${c.accent}-50 via-white to-${c.accent2}-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-full rounded-full bg-${c.accent}-500 transition-all" style={{ width: \`\${((currentIndex + 1) / testData.questions.length) * 100}%\` }} /></div>
            </div>
            <div className="flex items-center gap-4">
              <span className={\`text-sm font-mono font-bold \${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}\`}>⏱ {formatTime(timeRemaining)}</span>
              <button onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
            </div>
          </div>

          <div className="mb-4"><span className="rounded-full bg-${c.accent}-100 px-3 py-1 text-xs font-semibold text-${c.accent}-700 dark:bg-${c.accent}-900/30 dark:text-${c.accent}-400">{testData.domains.find(d => d.id === q.domain)?.name ?? q.domain}</span></div>

          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = answers[currentIndex] === i
                const isEliminated = eliminatedOptions[currentIndex]?.has(i) ?? false
                return (
                  <button key={i} onClick={() => { const updated = [...answers]; updated[currentIndex] = i; setAnswers(updated) }}
                    className={\`w-full rounded-xl border px-4 py-3 text-left text-sm transition \${isSelected ? 'border-${c.accent}-500 bg-${c.accent}-50 text-${c.accent}-800 dark:bg-${c.accent}-900/30 dark:text-${c.accent}-300 dark:border-${c.accent}-500' : 'border-gray-200 text-gray-700 hover:border-${c.accent}-300 hover:bg-${c.accent}-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-${c.accent}-500'}\`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className={\`flex-1 \${isEliminated ? 'line-through opacity-50 decoration-2 decoration-gray-400 dark:decoration-gray-500' : ''}\`}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}</span>
                      <span role="button" tabIndex={0}
                        onClick={(e) => { e.stopPropagation(); setEliminatedOptions(prev => { const next = prev.map(set => new Set(set)); const qSet = new Set(next[currentIndex] ?? []); if (qSet.has(i)) { qSet.delete(i) } else { qSet.add(i); if (answers[currentIndex] === i) { const updated = [...answers]; updated[currentIndex] = null; setAnswers(updated) } }; next[currentIndex] = qSet; return next }) }}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setEliminatedOptions(prev => { const next = prev.map(set => new Set(set)); const qSet = new Set(next[currentIndex] ?? []); if (qSet.has(i)) qSet.delete(i); else qSet.add(i); next[currentIndex] = qSet; return next }) } }}
                        className={\`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition \${isEliminated ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 dark:hover:text-red-400'}\`}
                        title={isEliminated ? 'Restore this answer' : 'Eliminate this answer'} aria-label={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}>✕</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} disabled={currentIndex === 0} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400">← Previous</button>
            <span className="text-xs text-gray-500 dark:text-gray-400">{answeredCount}/{testData.questions.length} answered</span>
            <button onClick={() => { const updated = [...answers]; updated[currentIndex] = null; setAnswers(updated); if (currentIndex < testData.questions.length - 1) setCurrentIndex(prev => prev + 1); else handleFinish() }} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">I Would Be Guessing</button>
            {currentIndex < testData.questions.length - 1 ? (
              <button onClick={() => setCurrentIndex(prev => prev + 1)} className="rounded-xl bg-${c.accent}-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-${c.accent}-700">Next →</button>
            ) : (
              <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-${c.accent}-600 to-${c.accent2}-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
            )}
          </div>
        </div></div>
      </div>
    )
  }

  if (phase === 'results' && results) {
    const apScoreEmoji = results.estimatedAPScore >= 4 ? '🎉' : results.estimatedAPScore >= 3 ? '👍' : '📚'
    const completedModules = history.length

    return (
      <div className="min-h-screen bg-gradient-to-br from-${c.accent}-50 via-white to-${c.accent2}-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">${c.name} Diagnostic Results</h2>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p><p className="text-5xl font-black text-${c.accent}-600 dark:text-${c.accent}-400">{results.estimatedAPScore}</p><p className="text-xs text-gray-500 dark:text-gray-400">out of 5</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Correct</p><p className="text-4xl font-black text-amber-600 dark:text-amber-400">{results.totalCorrect}/{results.totalQuestions}</p><p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage}%</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Performance</p><p className="text-4xl">{apScoreEmoji}</p><p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage >= 80 ? 'Excellent' : results.percentage >= 60 ? 'Good' : 'Needs Review'}</p></div>
          </div>

          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Unit Breakdown</h3>
            <div className="space-y-3">
              {results.domains.map(d => (
                <div key={d.domainId}>
                  <div className="flex items-center justify-between mb-1"><span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span><span className={\`text-xs font-semibold px-2 py-0.5 rounded-full \${d.level === 'strong' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : d.level === 'moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}\`}>{d.correct}/{d.total} ({d.percentage}%)</span></div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className={\`h-full rounded-full transition-all \${d.level === 'strong' ? 'bg-green-500' : d.level === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}\`} style={{ width: \`\${d.percentage}%\` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20"><h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">💪 Strengths</h4><ul className="space-y-1 text-sm text-green-700 dark:text-green-400">{results.strengths.length > 0 ? results.strengths.map(s => <li key={s}>• {s}</li>) : <li>Complete more questions to identify strengths</li>}</ul></div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20"><h4 className="mb-2 font-semibold text-red-800 dark:text-red-300">📚 Areas to Improve</h4><ul className="space-y-1 text-sm text-red-700 dark:text-red-400">{results.weakAreas.length > 0 ? results.weakAreas.map(w => <li key={w}>• {w}</li>) : <li>Great job — no major weak areas!</li>}</ul></div>
          </div>

          {testData && <DiagnosticReview questions={testData.questions} answers={answers} domainNames={Object.fromEntries(testData.domains.map(d => [d.id, d.name]))} />}

          {results.recommendedTopics.length > 0 && (
            <div className="mb-8 rounded-2xl border-2 border-${c.accent}-300 bg-${c.accent}-50 p-6 dark:border-${c.accent}-700 dark:bg-${c.accent}-900/20">
              <h3 className="mb-1 text-lg font-bold text-${c.accent}-800 dark:text-${c.accent}-300">🎯 Your Personalized Study Plan</h3>
              <p className="mb-4 text-sm text-${c.accent}-600 dark:text-${c.accent}-400">Based on your results, we recommend reviewing these {results.recommendedTopics.length} module{results.recommendedTopics.length > 1 ? 's' : ''}.</p>
              <div className="space-y-2">
                {results.recommendedTopics.map((topic, i) => (
                  <Link key={topic.slug} href={\`/topics/\${topic.slug}/interactive\`} className="flex items-center justify-between rounded-xl border border-${c.accent}-200 bg-white px-4 py-3 transition hover:border-${c.accent}-400 hover:shadow-sm dark:border-${c.accent}-700 dark:bg-gray-800 dark:hover:border-${c.accent}-500 group">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-${c.accent}-100 text-xs font-bold text-${c.accent}-700 dark:bg-${c.accent}-900/50 dark:text-${c.accent}-300">{i + 1}</span>
                      <div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-${c.accent}-700 dark:group-hover:text-${c.accent}-400">{topic.name}</span>
                        <span className={\`ml-2 text-xs px-2 py-0.5 rounded-full \${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}\`}>{topic.priority === 'high' ? 'High Priority' : 'Medium Priority'}</span>
                      </div>
                    </div>
                    <span className="text-${c.accent}-500 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">🔄 How This Cycle Works</h4>
            <ol className="space-y-2 text-sm text-blue-700 dark:text-blue-400 list-decimal list-inside">
              <li>Review the recommended modules above</li>
              <li>Complete each module&apos;s lessons, practice problems, and flashcards</li>
              <li>Come back and take the next diagnostic test (Form {results.form >= 10 ? 1 : results.form + 1})</li>
              <li>Get updated personalized recommendations</li>
              <li>Repeat until you&apos;re scoring 4+ across all domains!</li>
            </ol>
            {completedModules > 0 && <p className="mt-3 text-xs text-blue-500 dark:text-blue-400">You&apos;ve taken {completedModules} diagnostic test{completedModules > 1 ? 's' : ''} so far — keep going!</p>}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={() => { setResults(null); setTestData(null); startTest() }} className="flex-1 rounded-xl border-2 border-${c.accent}-500 py-3 font-semibold text-${c.accent}-600 transition hover:bg-${c.accent}-50 dark:text-${c.accent}-400 dark:hover:bg-${c.accent}-900/20">Take Next Diagnostic</button>
            <Link href="/courses/${c.courseSlug}" className="flex-1 rounded-xl bg-gradient-to-r from-${c.accent}-600 to-${c.accent2}-600 py-3 text-center font-semibold text-white shadow transition hover:shadow-lg">Browse All Modules</Link>
            <Link href="/${c.slug}-score-predictor" className="flex-1 rounded-xl border border-${c.accent}-300 py-3 text-center font-semibold text-${c.accent}-700 transition hover:bg-${c.accent}-50 dark:border-${c.accent}-700 dark:text-${c.accent}-300 dark:hover:bg-${c.accent}-900/20">View Score Predictor</Link>
            <Link href="/${c.slug}-daily-question" className="flex-1 rounded-xl border border-${c.accent}-300 py-3 text-center font-semibold text-${c.accent}-700 transition hover:bg-${c.accent}-50 dark:border-${c.accent}-700 dark:text-${c.accent}-300 dark:hover:bg-${c.accent}-900/20">Today&apos;s Question</Link>
          </div>
        </div></div>
      </div>
    )
  }

  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-${c.accent}-50 via-white to-${c.accent2}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-2xl">
        <Link href="/courses/${c.courseSlug}" className="mb-4 inline-flex items-center gap-1 text-sm text-${c.accent}-600 hover:underline dark:text-${c.accent}-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          ${c.name}
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">${c.emoji} ${c.name} Diagnostic Test</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Find your strengths and weaknesses across all ${c.name} units and get a personalized study plan.</p>

        {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
          <div className="mb-6 rounded-2xl border-2 border-${c.accent}-300 bg-${c.accent}-50 p-6 dark:border-${c.accent}-700 dark:bg-${c.accent}-900/20">
            <h3 className="mb-1 text-base font-bold text-${c.accent}-800 dark:text-${c.accent}-300">🎯 Your Current Study Plan</h3>
            <p className="mb-3 text-sm text-${c.accent}-600 dark:text-${c.accent}-400">From your last diagnostic — review these modules, then retake the test:</p>
            <div className="space-y-2">
              {lastRecommendedTopics.map((topic, i) => (
                <Link key={topic.slug} href={\`/topics/\${topic.slug}/interactive\`} className="flex items-center justify-between rounded-xl border border-${c.accent}-200 bg-white px-4 py-3 transition hover:border-${c.accent}-400 hover:shadow-sm dark:border-${c.accent}-700 dark:bg-gray-800 group">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-${c.accent}-100 text-xs font-bold text-${c.accent}-700 dark:bg-${c.accent}-900/50 dark:text-${c.accent}-300">{i + 1}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-${c.accent}-700 dark:group-hover:text-${c.accent}-400">{topic.name}</span>
                    <span className={\`text-xs px-2 py-0.5 rounded-full \${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}\`}>{topic.priority === 'high' ? 'High' : 'Medium'}</span>
                  </div>
                  <span className="text-${c.accent}-500 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {lastResult && (
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
            <div className="flex items-center justify-between">
              <div><p className="text-3xl font-bold text-${c.accent}-600 dark:text-${c.accent}-400">{String(lastResult.estimatedAPScore ?? '—')}/5</p><p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p></div>
              <div className="text-right"><p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p><p className="text-xs text-gray-400">{new Date(history[0].createdAt).toLocaleDateString()}</p></div>
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
          <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {['~${totalQ} questions spanning all ${c.domains.length} ${c.name} units', '35 minute time limit', 'Estimated AP score (1–5) with per-unit breakdown', '3-5 personalized module recommendations', '10 unique forms — each test has different questions'].map(item => (
              <li key={item} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-${c.accent}-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
          <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-${c.accent}-600 to-${c.accent2}-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">{lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}</button>
          <Link href="/${c.slug}-score-predictor" className="mt-3 block text-center text-sm font-medium text-${c.accent}-700 transition hover:underline dark:text-${c.accent}-300">Prefer a quick estimate? Open the Score Predictor</Link>
          <Link href="/${c.slug}-daily-question" className="mt-1 block text-center text-sm font-medium text-${c.accent}-700 transition hover:underline dark:text-${c.accent}-300">Need a warm-up first? Try today&apos;s question</Link>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Take the diagnostic test — questions cover all ${c.domains.length} ${c.name} units' },
              { step: '2', text: 'Get your results and 3-5 module recommendations based on what you missed' },
              { step: '3', text: 'Study those specific modules (lessons, practice problems, flashcards)' },
              { step: '4', text: 'Retake the diagnostic — a different form with fresh questions' },
              { step: '5', text: 'Repeat until you\\'re scoring 4+ across all units!' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-${c.accent}-100 text-xs font-bold text-${c.accent}-700 dark:bg-${c.accent}-900/50 dark:text-${c.accent}-300">{item.step}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {history.length > 1 && (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Previous Attempts</h3>
            <div className="space-y-2">
              {history.slice(1, 8).map(h => {
                const parsed = h.results as Record<string, unknown>
                return (
                  <div key={h.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                    <div className="flex items-center gap-3"><span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Score: {String(parsed?.estimatedAPScore ?? '—')}/5</span><span className="text-xs text-gray-500 dark:text-gray-400">Form {String(parsed?.form ?? '?')}</span></div>
                    <span className="text-xs text-gray-400">{new Date(h.createdAt).toLocaleDateString()}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div></div>
    </div>
  )
}
`
  if (writeIfNew(`src/app/${c.slug}-diagnostic/page.tsx`, diagPage)) created++; else skipped++
}

console.log(`\n✅ Done! Created: ${created}, Skipped: ${skipped}`)
