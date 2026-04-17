#!/usr/bin/env node
/**
 * Generate study plan data, pages, and API routes for 12 new AP courses.
 * Run: node scripts/generate-study-plans.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function e(s) { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") }

const courses = [
  {
    key: 'ap-human-geo', fullSlug: 'ap-human-geography', name: 'AP Human Geography',
    varName: 'AP_HUMAN_GEO_PLANS', accent: 'blue', backHref: '/ap-human-geography', backLabel: 'AP Human Geography',
    topics: [
      ['Introduction to Geography', 'hg-intro-geography'],
      ['Spatial Concepts & Data', 'hg-spatial-concepts'],
      ['Population Distribution', 'hg-population-distribution'],
      ['Population Growth', 'hg-population-growth'],
      ['Migration Patterns', 'hg-migration'],
      ['Cultural Diffusion', 'hg-culture-diffusion'],
      ['Language & Religion', 'hg-language-religion'],
      ['Ethnicity & Identity', 'hg-ethnicity-identity'],
      ['Political Geography', 'hg-political-geography'],
      ['Political Power', 'hg-political-power'],
      ['Agricultural Origins', 'hg-agricultural-origins'],
      ['Agricultural Practices', 'hg-agricultural-practices'],
      ['Urbanization', 'hg-urbanization'],
      ['Urban Challenges', 'hg-urban-challenges'],
      ['Industrialization', 'hg-industrialization'],
      ['Globalization & Trade', 'hg-globalization-trade'],
    ],
  },
  {
    key: 'ap-us-gov', fullSlug: 'ap-us-government', name: 'AP US Government',
    varName: 'AP_US_GOV_PLANS', accent: 'blue', backHref: '/ap-us-government', backLabel: 'AP US Government',
    topics: [
      ['Constitutional Foundations', 'gov-constitutional-foundations'],
      ['Federalism', 'gov-federalism'],
      ['Separation of Powers', 'gov-separation-of-powers'],
      ['Congress', 'gov-congress'],
      ['The Presidency', 'gov-presidency'],
      ['The Federal Judiciary', 'gov-judiciary'],
      ['The Bureaucracy', 'gov-bureaucracy'],
      ['Civil Liberties', 'gov-civil-liberties'],
      ['Civil Rights', 'gov-civil-rights'],
      ['Political Ideologies', 'gov-ideologies'],
      ['Public Opinion', 'gov-public-opinion'],
      ['Voting & Elections', 'gov-voting-elections'],
      ['Parties & Interest Groups', 'gov-parties-interest-groups'],
      ['Media & Technology', 'gov-media-technology'],
    ],
  },
  {
    key: 'ap-world-history', fullSlug: 'ap-world-history', name: 'AP World History',
    varName: 'AP_WORLD_HISTORY_PLANS', accent: 'amber', backHref: '/ap-world-history', backLabel: 'AP World History',
    topics: [
      ['Global Tapestry', 'wh-global-tapestry'],
      ['Dar al-Islam', 'wh-dar-al-islam'],
      ['Silk Roads & Mongols', 'wh-silk-roads-mongols'],
      ['Indian Ocean Trade', 'wh-indian-ocean-trade'],
      ['Americas & Africa', 'wh-americas-africa-1200'],
      ['Land-Based Empires', 'wh-land-based-empires'],
      ['Islamic Empires', 'wh-islamic-empires'],
      ['East Asian Empires', 'wh-east-asian-empires'],
      ['Exploration & Columbian Exchange', 'wh-exploration-columbian-exchange'],
      ['Maritime Empires', 'wh-maritime-empires-labor'],
      ['Transoceanic Interactions', 'wh-transoceanic'],
      ['Enlightenment & Revolutions', 'wh-enlightenment-political-revolutions'],
      ['Industrial Revolution', 'wh-industrial-revolution'],
      ['Revolutions', 'wh-revolutions'],
      ['Consequences of Industrialization', 'wh-consequences-industrialization'],
      ['Imperialism', 'wh-imperialism'],
      ['Reform & Migration', 'wh-reform-migration'],
    ],
  },
  {
    key: 'ap-us-history', fullSlug: 'ap-us-history', name: 'AP US History',
    varName: 'AP_US_HISTORY_PLANS', accent: 'red', backHref: '/ap-us-history', backLabel: 'AP US History',
    topics: [
      ['Native Societies & Exploration', 'apush-native-societies-exploration'],
      ['Colonial America', 'apush-colonial-america'],
      ['Colonial Society', 'apush-colonial-society-conflicts'],
      ['Revolution & Independence', 'apush-revolution-independence'],
      ['Constitution & Early Republic', 'apush-constitution-early-republic'],
      ['Democracy & Expansion', 'apush-democracy-expansion'],
      ['Reform Movements', 'apush-reform-movements'],
      ['Civil War', 'apush-civil-war'],
      ['Reconstruction', 'apush-reconstruction'],
      ['Gilded Age', 'apush-gilded-age'],
      ['Progressivism & WWI', 'apush-progressivism-wwi'],
      ['Depression & WWII', 'apush-depression-wwii'],
    ],
  },
  {
    key: 'ap-macro', fullSlug: 'ap-macroeconomics', name: 'AP Macroeconomics',
    varName: 'AP_MACRO_PLANS', accent: 'emerald', backHref: '/ap-macroeconomics', backLabel: 'AP Macroeconomics',
    topics: [
      ['Scarcity & Opportunity Cost', 'macro-scarcity-opportunity-cost'],
      ['Comparative Advantage', 'macro-comparative-advantage'],
      ['GDP & Growth', 'macro-gdp-growth'],
      ['Unemployment & Inflation', 'macro-unemployment-inflation'],
      ['AD-AS Model', 'macro-ad-as'],
      ['Multiplier Effect', 'macro-multiplier-effect'],
      ['Phillips Curve', 'macro-phillips-curve'],
      ['Money & Banking', 'macro-money-banking'],
      ['Monetary Policy', 'macro-monetary-policy'],
      ['Fiscal Policy', 'macro-fiscal-policy'],
      ['Fiscal Policy Tools', 'macro-fiscal-policy-tools'],
      ['Open Economy', 'macro-open-economy'],
      ['International Trade', 'macro-international-trade-finance'],
    ],
  },
  {
    key: 'ap-micro', fullSlug: 'ap-microeconomics', name: 'AP Microeconomics',
    varName: 'AP_MICRO_PLANS', accent: 'violet', backHref: '/ap-microeconomics', backLabel: 'AP Microeconomics',
    topics: [
      ['Scarcity & Marginal Analysis', 'micro-scarcity-marginal-analysis'],
      ['Supply & Demand', 'micro-supply-demand'],
      ['Market Equilibrium', 'micro-demand-supply-equilibrium'],
      ['Elasticity', 'micro-elasticity'],
      ['Government Intervention', 'micro-government-intervention'],
      ['Production & Costs', 'micro-production-costs'],
      ['Perfect Competition', 'micro-perfect-competition'],
      ['Monopoly', 'micro-monopoly'],
      ['Monopolistic & Oligopoly', 'micro-monopolistic-oligopoly'],
      ['Labor Markets', 'micro-labor-markets'],
      ['Factor Markets', 'micro-factor-markets'],
      ['Externalities & Public Goods', 'micro-externalities-public-goods'],
      ['Market Failure', 'micro-market-failure'],
    ],
  },
  {
    key: 'ap-african-american-studies', fullSlug: 'ap-african-american-studies', name: 'AP African American Studies',
    varName: 'AP_AAS_PLANS', accent: 'amber', backHref: '/ap-african-american-studies', backLabel: 'AP African American Studies',
    topics: [
      ['African Kingdoms', 'aas-african-kingdoms'],
      ['Origins of Diaspora', 'aas-origins-diaspora'],
      ['Transatlantic Slave Trade', 'aas-transatlantic-slave-trade'],
      ['Slavery in America', 'aas-slavery-in-america'],
      ['Resistance & Abolition', 'aas-resistance-abolition'],
      ['Freedom & Enslavement', 'aas-freedom-enslavement'],
      ['Reconstruction & Jim Crow', 'aas-reconstruction-jim-crow'],
      ['Great Migration & Harlem', 'aas-great-migration-harlem'],
      ['WWI & WWII Era', 'aas-wwi-wwii-era'],
      ['Practice of Freedom', 'aas-practice-freedom'],
      ['Civil Rights Movement', 'aas-civil-rights-movement'],
      ['Black Power & Beyond', 'aas-black-power-beyond'],
      ['Contemporary Issues', 'aas-contemporary-issues'],
      ['Movements Today', 'aas-movements-debates'],
    ],
  },
  {
    key: 'ap-english-lit', fullSlug: 'ap-english-literature', name: 'AP English Literature',
    varName: 'AP_ENG_LIT_PLANS', accent: 'rose', backHref: '/ap-english-literature', backLabel: 'AP English Literature',
    topics: [
      ['Short Fiction: Character', 'englit-short-fiction-1'],
      ['Short Fiction: Plot', 'englit-short-fiction-2'],
      ['Short Fiction: Theme', 'englit-short-fiction-3'],
      ['Poetry: Imagery', 'englit-poetry-1'],
      ['Poetry: Tone', 'englit-poetry-2'],
      ['Poetic Structure', 'englit-poetic-structure-form'],
      ['Sound Devices', 'englit-sound-devices'],
      ['Novel Analysis', 'englit-longer-fiction'],
      ['Novel Themes', 'englit-longer-fiction-2'],
      ['Dramatic Structure', 'englit-dramatic-structure'],
      ['Figurative Language', 'englit-figurative-language'],
      ['Symbol & Motif', 'englit-symbol-motif-fiction'],
      ['Plot & Conflict', 'englit-plot-conflict-theme'],
      ['Social Commentary', 'englit-social-commentary-drama'],
    ],
  },
  {
    key: 'ap-english-lang', fullSlug: 'ap-english-language', name: 'AP English Language',
    varName: 'AP_ENG_LANG_PLANS', accent: 'cyan', backHref: '/ap-english-language', backLabel: 'AP English Language',
    topics: [
      ['Intro to Rhetoric', 'englang-intro-rhetoric'],
      ['Rhetorical Situation', 'englang-rhetorical-situation'],
      ['Rhetorical Writing', 'englang-rhetorical-situation-writing'],
      ['Claims & Evidence', 'englang-claims-evidence'],
      ['Claims Reading', 'englang-claims-evidence-reading'],
      ['Claims Writing', 'englang-claims-evidence-writing'],
      ['Reasoning in Reading', 'englang-reasoning-org-reading'],
      ['Reasoning in Writing', 'englang-reasoning-org-writing'],
      ['Argument Structure', 'englang-argument-structure'],
      ['Diction & Syntax', 'englang-diction-syntax'],
      ['Style in Reading', 'englang-style-reading'],
      ['Style in Writing', 'englang-style-writing'],
      ['Ethos/Pathos/Logos', 'englang-ethos-pathos-logos'],
      ['Logical Fallacies', 'englang-logical-fallacies'],
      ['Synthesis', 'englang-synthesis'],
      ['Developing Arguments', 'englang-developing-arguments'],
    ],
  },
  {
    key: 'ap-enviro', fullSlug: 'ap-environmental-science', name: 'AP Environmental Science',
    varName: 'AP_ENVIRO_PLANS', accent: 'green', backHref: '/ap-environmental-science', backLabel: 'AP Environmental Science',
    topics: [
      ['Ecosystem Structure', 'apes-ecosystem-structure'],
      ['Biogeochemical Cycles', 'apes-biogeochemical-cycles'],
      ['Earth Systems', 'apes-earth-systems'],
      ['Biodiversity', 'apes-biodiversity'],
      ['Conservation', 'apes-biodiversity-conservation'],
      ['Biomes & Succession', 'apes-biomes-succession'],
      ['Population Ecology', 'apes-population-ecology'],
      ['Human Population', 'apes-human-population'],
      ['Agriculture & Land', 'apes-agriculture-land'],
      ['Water Resources', 'apes-water-resources'],
      ['Fossil Fuels & Nuclear', 'apes-fossil-fuels-nuclear'],
      ['Renewable Energy', 'apes-renewable-energy'],
      ['Energy Concepts', 'apes-energy'],
      ['Atmospheric Pollution', 'apes-atmospheric-pollution'],
      ['Climate Change', 'apes-atmosphere-climate'],
    ],
  },
  {
    key: 'ap-csa', fullSlug: 'ap-computer-science-a', name: 'AP Computer Science A',
    varName: 'AP_CSA_PLANS', accent: 'amber', backHref: '/ap-computer-science-a', backLabel: 'AP Computer Science A',
    topics: [
      ['Variables & Types', 'csa-variables-types'],
      ['Expressions & Operators', 'csa-expressions-operators'],
      ['Strings & Objects', 'csa-strings-objects'],
      ['Using Objects', 'csa-using-objects'],
      ['Boolean & If', 'csa-boolean-if'],
      ['Conditionals', 'csa-conditionals'],
      ['Iteration', 'csa-iteration'],
      ['Loops', 'csa-loops'],
      ['Writing Classes', 'csa-writing-classes'],
      ['Class Design', 'csa-class-design'],
      ['Arrays', 'csa-array'],
      ['Array Algorithms', 'csa-arrays'],
      ['ArrayList', 'csa-arraylist'],
      ['2D Arrays', 'csa-2d-array'],
      ['Inheritance', 'csa-inheritance'],
      ['Polymorphism', 'csa-inheritance-polymorphism'],
    ],
  },
  {
    key: 'ap-csp', fullSlug: 'ap-computer-science-principles', name: 'AP CS Principles',
    varName: 'AP_CSP_PLANS', accent: 'blue', backHref: '/ap-cs-principles', backLabel: 'AP CS Principles',
    topics: [
      ['Creative Development', 'csp-creative-development'],
      ['Collaboration', 'csp-collaboration-development'],
      ['Binary & Data', 'csp-binary-data'],
      ['Data Compression', 'csp-data-compression-analysis'],
      ['Data & Info', 'csp-data'],
      ['Algorithms', 'csp-algorithms'],
      ['Variables & Control', 'csp-variables-control'],
      ['Procedures & Lists', 'csp-procedures-lists'],
      ['Systems & Networks', 'csp-computing-systems-networks'],
      ['Internet Protocols', 'csp-internet-protocols'],
      ['Fault Tolerance', 'csp-fault-tolerance-security'],
      ['Impact of Computing', 'csp-impact-of-computing'],
      ['Safe Computing', 'csp-safe-computing'],
    ],
  },
]

function buildSprintTasks(topics) {
  const t = topics
  // 4-week sprint: fast review of core topics
  const weeks = []
  const perWeek = Math.ceil(t.length / 4)
  for (let w = 0; w < 4; w++) {
    const chunk = t.slice(w * perWeek, (w + 1) * perWeek)
    const items = []
    if (w === 0) items.push(`{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }`)
    chunk.forEach((c, i) => {
      const day = w === 0 ? i + 1 : i * 2
      if (day <= 5) items.push(`{ title: '${e(c[0])} Review', type: 'LESSON' as const, topicSlug: '${c[1]}', dayOfWeek: ${Math.min(day, 5)} }`)
    })
    if (w === 3) {
      items.push(`{ title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 }`)
      items.push(`{ title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 }`)
    } else {
      items.push(`{ title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }`)
    }
    weeks.push(`    ...weekTasks(${w}, [\n      ${items.join(',\n      ')},\n    ])`)
  }
  return weeks.join(',\n')
}

function buildStandardTasks(topics) {
  const weeks = []
  // Week 0: diagnostic
  weeks.push(`    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: '${e(topics[0][0])}', type: 'LESSON' as const, topicSlug: '${topics[0][1]}', dayOfWeek: 1 },
      { title: '${e(topics[1] ? topics[1][0] : topics[0][0])}', type: 'LESSON' as const, topicSlug: '${topics[1] ? topics[1][1] : topics[0][1]}', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ])`)

  // Weeks 1-8: 2 topics per week
  let tidx = 2
  for (let w = 1; w <= 8; w++) {
    const items = []
    if (tidx < topics.length) {
      items.push(`{ title: '${e(topics[tidx][0])}', type: 'LESSON' as const, topicSlug: '${topics[tidx][1]}', dayOfWeek: 0 }`)
      tidx++
    }
    if (tidx < topics.length) {
      items.push(`{ title: '${e(topics[tidx][0])}', type: 'LESSON' as const, topicSlug: '${topics[tidx][1]}', dayOfWeek: 2 }`)
      tidx++
    }
    if (w === 5) {
      items.push(`{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 }`)
    } else {
      items.push(`{ title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 }`)
    }
    items.push(`{ title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }`)
    weeks.push(`    ...weekTasks(${w}, [\n      ${items.join(',\n      ')},\n    ])`)
  }

  // Week 9: final review
  weeks.push(`    ...weekTasks(9, [
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 },
      { title: 'FRQ Practice', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 },
      { title: 'Second Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 5 },
    ])`)

  return weeks.join(',\n')
}

function buildComprehensiveTasks(topics) {
  const weeks = []
  // Week 0
  weeks.push(`    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: '${e(topics[0][0])}', type: 'LESSON' as const, topicSlug: '${topics[0][1]}', dayOfWeek: 4 }])`)

  // 1 topic per week with deep practice
  let tidx = 1
  for (let w = 1; w <= 14; w++) {
    if (w === 8) {
      weeks.push(`    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }])`)
      continue
    }
    if (w === 14) {
      weeks.push(`    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }])`)
      continue
    }
    const items = []
    if (tidx < topics.length) {
      items.push(`{ title: '${e(topics[tidx][0])}', type: 'LESSON' as const, topicSlug: '${topics[tidx][1]}', dayOfWeek: 0 }`)
      tidx++
    }
    if (tidx < topics.length) {
      items.push(`{ title: '${e(topics[tidx][0])}', type: 'LESSON' as const, topicSlug: '${topics[tidx][1]}', dayOfWeek: 2 }`)
      tidx++
    }
    items.push(`{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }`)
    items.push(`{ title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }`)
    weeks.push(`    ...weekTasks(${w}, [${items.join(', ')}])`)
  }

  // Week 15: final
  weeks.push(`    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }])`)

  return weeks.join(',\n')
}

function generateDataFile(c) {
  const sprintId = `4-week-${c.key.replace('ap-', '')}-sprint`
  const standardId = `10-week-${c.key.replace('ap-', '')}-standard`
  const comprehensiveId = `16-week-${c.key.replace('ap-', '')}-comprehensive`
  const shortName = c.name.replace('AP ', '')

  return `import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '${sprintId}',
  title: '4-Week ${c.name} Sprint',
  description: 'Fast review of core ${shortName} topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
${buildSprintTasks(c.topics)},
  ],
}

const standard: StudyPlanTemplate = {
  id: '${standardId}',
  title: '10-Week ${c.name} Plan',
  description: 'Balanced study schedule covering all ${shortName} units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
${buildStandardTasks(c.topics)},
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '${comprehensiveId}',
  title: '16-Week ${c.name} Mastery',
  description: 'In-depth study plan covering all ${shortName} units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
${buildComprehensiveTasks(c.topics)},
  ],
}

export const ${c.varName}: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: '${e(c.name)}',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '${c.backHref}', label: '${e(c.backLabel)}' },
  apiEndpoint: '/api/${c.key}-study-plans',
  accent: '${c.accent}',
  examLabel: 'AP Exam Date',
  plans: ${c.varName},
}
`
}

function generatePage(c) {
  return `'use client'

import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/${c.key}-study-plans'

export default function Page() {
  return <StudyPlanSelector {...config} />
}
`
}

function generateApiRoute(c) {
  return `import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ${c.varName} } from '@/data/${c.key}-study-plans'
import { resolveStudyPlanTasks } from '@/lib/study-plan-utils'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { templateId, startDate, examDate } = body as {
    templateId: string
    startDate?: string
    examDate?: string
  }

  const template = ${c.varName}.find(t => t.id === templateId)
  if (!template) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const start = startDate ? new Date(startDate) : new Date()
  const resolvedTasks = resolveStudyPlanTasks(template, start)

  const defaultExamDate = new Date(start)
  defaultExamDate.setDate(defaultExamDate.getDate() + template.durationWeeks * 7)

  const plan = await prisma.studyPlan.create({
    data: {
      userId: session.user.id,
      title: template.title,
      goalType: 'CUSTOM',
      courseSlug: '${c.fullSlug}',
      examDate: examDate ? new Date(examDate) : defaultExamDate,
      isActive: true,
      tasks: { create: resolvedTasks },
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  return NextResponse.json(plan)
}

export async function GET() {
  const templates = ${c.varName}.map(t => ({
    id: t.id, title: t.title, description: t.description,
    durationWeeks: t.durationWeeks, targetImprovement: t.targetImprovement,
    weeklyHours: t.weeklyHours, difficulty: t.difficulty, taskCount: t.tasks.length,
  }))
  return NextResponse.json(templates)
}
`
}

let stats = { data: 0, page: 0, api: 0 }

for (const c of courses) {
  // 1. Data file
  const dataPath = path.join(ROOT, `src/data/${c.key}-study-plans.ts`)
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, generateDataFile(c), 'utf8')
    stats.data++
  }

  // 2. Page
  const pageDir = path.join(ROOT, `src/app/${c.key}-study-plans`)
  const pagePath = path.join(pageDir, 'page.tsx')
  if (!fs.existsSync(pagePath)) {
    fs.mkdirSync(pageDir, { recursive: true })
    fs.writeFileSync(pagePath, generatePage(c), 'utf8')
    stats.page++
  }

  // 3. API route
  const apiDir = path.join(ROOT, `src/app/api/${c.key}-study-plans`)
  const apiPath = path.join(apiDir, 'route.ts')
  if (!fs.existsSync(apiPath)) {
    fs.mkdirSync(apiDir, { recursive: true })
    fs.writeFileSync(apiPath, generateApiRoute(c), 'utf8')
    stats.api++
  }
}

console.log('Done!')
console.log(`  Data files: ${stats.data}`)
console.log(`  Pages:      ${stats.page}`)
console.log(`  API routes: ${stats.api}`)
