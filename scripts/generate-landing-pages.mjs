#!/usr/bin/env node
/**
 * Generate dedicated landing pages for 12 new AP courses.
 * Run: node scripts/generate-landing-pages.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const courses = [
  {
    slug: 'ap-human-geography',
    shortSlug: 'ap-human-geo',
    name: 'AP Human Geography',
    shortName: 'AP Human Geo',
    tagline: 'Master AP Human Geography with interactive lessons, diagnostic tests, daily questions, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons covering all units of AP Human Geography — population, culture, political geography, urbanization, and more.',
    lessonCount: '100+',
    gradientFrom: 'blue', gradientTo: 'indigo',
    bgFrom: 'blue', bgTo: 'indigo',
    units: [
      { title: 'Unit 1: Thinking Geographically', topics: ['Maps & Spatial Data', 'Geographic Concepts', 'Scale of Analysis', 'Data Collection'], color: 'blue' },
      { title: 'Unit 2: Population & Migration', topics: ['Population Distribution', 'Population Growth', 'Migration Patterns', 'Demographic Transition'], color: 'green' },
      { title: 'Unit 3–4: Cultural & Political Geography', topics: ['Cultural Diffusion', 'Language & Religion', 'Political Boundaries', 'Forms of Government'], color: 'purple' },
      { title: 'Unit 5–7: Agriculture, Cities & Industry', topics: ['Agricultural Origins', 'Urbanization Models', 'Industrialization', 'Globalization'], color: 'amber' },
    ],
    examInfo: {
      format: ['Section I: 60 MCQs in 60 minutes', 'Section II: 3 FRQs in 75 minutes', '1 FRQ with stimulus, 1 no stimulus, 1 with stimulus', 'Total exam time: 2 hours 15 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~15% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-us-government',
    shortSlug: 'ap-us-gov',
    name: 'AP US Government',
    shortName: 'AP US Gov',
    tagline: 'Comprehensive AP US Government preparation with interactive lessons, practice exams, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons covering the Constitution, civil liberties, political parties, voting, and all AP Gov units.',
    lessonCount: '90+',
    gradientFrom: 'blue', gradientTo: 'indigo',
    bgFrom: 'blue', bgTo: 'indigo',
    units: [
      { title: 'Unit 1: Foundations of Democracy', topics: ['Constitutional Principles', 'Federalism', 'Separation of Powers', 'Checks & Balances'], color: 'blue' },
      { title: 'Unit 2: Branches of Government', topics: ['Congress', 'The Presidency', 'Federal Judiciary', 'Bureaucracy'], color: 'green' },
      { title: 'Unit 3: Civil Liberties & Rights', topics: ['Bill of Rights', 'Selective Incorporation', 'Civil Rights Legislation', 'Equal Protection'], color: 'purple' },
      { title: 'Unit 4–5: Political Participation', topics: ['Voting & Elections', 'Political Parties', 'Interest Groups', 'Media & Public Opinion'], color: 'amber' },
    ],
    examInfo: {
      format: ['Section I: 55 MCQs in 80 minutes', 'Section II: 4 FRQs in 100 minutes', 'Concept Application, Quantitative, SCOTUS Comparison, Argument Essay', 'Total exam time: 3 hours'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~12% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-world-history',
    shortSlug: 'ap-world-history',
    name: 'AP World History',
    shortName: 'AP World History',
    tagline: 'Master AP World History with interactive lessons, diagnostic tests, daily questions, and study plans — free for all students.',
    heroSubtitle: 'From ancient civilizations to modern globalization — interactive lessons covering every AP World History period.',
    lessonCount: '120+',
    gradientFrom: 'amber', gradientTo: 'orange',
    bgFrom: 'amber', bgTo: 'orange',
    units: [
      { title: 'Unit 1–2: Global Tapestry & Networks (1200–1450)', topics: ['Song Dynasty & East Asia', 'Dar al-Islam', 'Silk Roads & Mongols', 'Indian Ocean Trade'], color: 'amber' },
      { title: 'Unit 3–4: Land-Based & Maritime Empires (1450–1750)', topics: ['Ottoman & Mughal Empires', 'European Exploration', 'Columbian Exchange', 'Atlantic Slave Trade'], color: 'blue' },
      { title: 'Unit 5–6: Revolutions & Industrialization (1750–1900)', topics: ['Enlightenment', 'Political Revolutions', 'Industrial Revolution', 'Imperialism'], color: 'green' },
      { title: 'Unit 7–9: Global Conflict & Decolonization (1900–present)', topics: ['World Wars', 'Cold War', 'Decolonization', 'Globalization'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 55 MCQs + 3 SAQs in 95 minutes', 'Section II: 1 DBQ + 1 LEQ in 100 minutes', 'DBQ: analyze 7 documents', 'Total exam time: 3 hours 15 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~12% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-us-history',
    shortSlug: 'ap-us-history',
    name: 'AP US History',
    shortName: 'APUSH',
    tagline: 'Comprehensive APUSH preparation with interactive lessons, practice exams, FRQ practice, and study plans — free for all students.',
    heroSubtitle: 'From colonial America to the modern era — interactive lessons covering every APUSH period with DBQ and LEQ practice.',
    lessonCount: '110+',
    gradientFrom: 'red', gradientTo: 'rose',
    bgFrom: 'red', bgTo: 'rose',
    units: [
      { title: 'Period 1–3: Colonial & Revolutionary (1491–1800)', topics: ['Native Societies', 'Colonial America', 'Revolution & Independence', 'Constitution'], color: 'red' },
      { title: 'Period 4–5: Expansion & Civil War (1800–1877)', topics: ['Democracy & Expansion', 'Reform Movements', 'Civil War', 'Reconstruction'], color: 'blue' },
      { title: 'Period 6–7: Industrialization & Wars (1865–1945)', topics: ['Gilded Age', 'Progressivism', 'WWI', 'Depression & WWII'], color: 'green' },
      { title: 'Period 8–9: Modern America (1945–present)', topics: ['Cold War', 'Civil Rights', 'Vietnam & Watergate', 'Contemporary Issues'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 55 MCQs + 3 SAQs in 95 minutes', 'Section II: 1 DBQ + 1 LEQ in 100 minutes', 'DBQ: analyze 7 documents', 'Total exam time: 3 hours 15 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~11% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-macroeconomics',
    shortSlug: 'ap-macro',
    name: 'AP Macroeconomics',
    shortName: 'AP Macro',
    tagline: 'Master AP Macroeconomics with interactive lessons, diagnostic tests, daily questions, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons on GDP, monetary & fiscal policy, international trade, and all macroeconomics concepts.',
    lessonCount: '85+',
    gradientFrom: 'emerald', gradientTo: 'green',
    bgFrom: 'emerald', bgTo: 'green',
    units: [
      { title: 'Unit 1: Basic Economic Concepts', topics: ['Scarcity & Opportunity Cost', 'Comparative Advantage', 'Supply & Demand', 'Market Equilibrium'], color: 'emerald' },
      { title: 'Unit 2: Economic Indicators', topics: ['GDP & Growth', 'Unemployment', 'Inflation & CPI', 'Business Cycle'], color: 'blue' },
      { title: 'Unit 3–4: AD-AS & Financial Sector', topics: ['AD-AS Model', 'Multiplier Effect', 'Phillips Curve', 'Money & Banking'], color: 'purple' },
      { title: 'Unit 5–6: Policy & International', topics: ['Fiscal Policy', 'Monetary Policy', 'International Trade', 'Exchange Rates'], color: 'amber' },
    ],
    examInfo: {
      format: ['Section I: 60 MCQs in 70 minutes', 'Section II: 3 FRQs in 60 minutes', '1 long FRQ + 2 short FRQs', 'Total exam time: 2 hours 10 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~17% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-microeconomics',
    shortSlug: 'ap-micro',
    name: 'AP Microeconomics',
    shortName: 'AP Micro',
    tagline: 'Comprehensive AP Microeconomics preparation with interactive lessons, practice exams, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons on supply & demand, market structures, elasticity, factor markets, and market failure.',
    lessonCount: '85+',
    gradientFrom: 'violet', gradientTo: 'purple',
    bgFrom: 'violet', bgTo: 'purple',
    units: [
      { title: 'Unit 1: Basic Economic Concepts', topics: ['Scarcity & Marginal Analysis', 'Supply & Demand', 'Market Equilibrium', 'Elasticity'], color: 'violet' },
      { title: 'Unit 2–3: Production & Market Structures', topics: ['Production & Costs', 'Perfect Competition', 'Monopoly', 'Oligopoly'], color: 'blue' },
      { title: 'Unit 4: Factor Markets', topics: ['Labor Markets', 'Factor Pricing', 'Monopsony', 'Wage Determination'], color: 'green' },
      { title: 'Unit 5–6: Market Failure & Government', topics: ['Externalities', 'Public Goods', 'Income Distribution', 'Government Intervention'], color: 'amber' },
    ],
    examInfo: {
      format: ['Section I: 60 MCQs in 70 minutes', 'Section II: 3 FRQs in 60 minutes', '1 long FRQ + 2 short FRQs', 'Total exam time: 2 hours 10 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~19% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-african-american-studies',
    shortSlug: 'ap-african-american-studies',
    name: 'AP African American Studies',
    shortName: 'AP AAS',
    tagline: 'Master AP African American Studies with interactive lessons, diagnostic tests, practice, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons covering African origins, the diaspora, resistance, cultural movements, and contemporary issues.',
    lessonCount: '95+',
    gradientFrom: 'amber', gradientTo: 'yellow',
    bgFrom: 'amber', bgTo: 'yellow',
    units: [
      { title: 'Unit 1: Origins of the African Diaspora', topics: ['African Kingdoms', 'Transatlantic Slave Trade', 'Middle Passage', 'Colonial Slavery'], color: 'amber' },
      { title: 'Unit 2: Freedom, Enslavement & Resistance', topics: ['Resistance & Abolition', 'Underground Railroad', 'Civil War & Emancipation', 'Reconstruction'], color: 'blue' },
      { title: 'Unit 3: The Practice of Freedom', topics: ['Jim Crow Era', 'Great Migration', 'Harlem Renaissance', 'WWII Era'], color: 'green' },
      { title: 'Unit 4: Movements & Debates', topics: ['Civil Rights Movement', 'Black Power', 'Contemporary Issues', 'Cultural Contributions'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 60 MCQs in 60 minutes', 'Section II: 3 FRQs in 120 minutes', 'Source analysis, argument, and research-based FRQs', 'Total exam time: 3 hours'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', 'First administered in 2024–25', 'No penalty for guessing', 'Check with your college for credit'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-english-literature',
    shortSlug: 'ap-english-lit',
    name: 'AP English Literature',
    shortName: 'AP Eng Lit',
    tagline: 'Master AP English Literature with interactive lessons, analysis practice, FRQ preparation, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons on prose fiction, poetry, drama, figurative language, and literary analysis techniques.',
    lessonCount: '100+',
    gradientFrom: 'rose', gradientTo: 'pink',
    bgFrom: 'rose', bgTo: 'pink',
    units: [
      { title: 'Units 1–3: Short Fiction', topics: ['Character Development', 'Narration & Point of View', 'Setting & Atmosphere', 'Theme & Meaning'], color: 'rose' },
      { title: 'Units 4–6: Poetry', topics: ['Imagery & Figurative Language', 'Tone & Speaker', 'Poetic Structure', 'Sound Devices'], color: 'blue' },
      { title: 'Units 7–8: Longer Fiction & Drama', topics: ['Novel Analysis', 'Dramatic Structure', 'Social Commentary', 'Symbol & Motif'], color: 'green' },
      { title: 'Unit 9: Exam Preparation', topics: ['Prose Fiction Analysis', 'Poetry Analysis', 'Literary Argument Essay', 'Timed Writing Practice'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 55 MCQs in 60 minutes', 'Section II: 3 FRQs in 120 minutes', 'Prose fiction analysis, poetry analysis, literary argument', 'Total exam time: 3 hours'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~7% of students score a 5', 'No penalty for guessing', 'Most colleges accept 4+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-english-language',
    shortSlug: 'ap-english-lang',
    name: 'AP English Language',
    shortName: 'AP Eng Lang',
    tagline: 'Comprehensive AP English Language preparation with rhetoric lessons, argument practice, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons on rhetorical analysis, argumentation, synthesis, and persuasive writing techniques.',
    lessonCount: '100+',
    gradientFrom: 'cyan', gradientTo: 'teal',
    bgFrom: 'cyan', bgTo: 'teal',
    units: [
      { title: 'Units 1–2: Rhetorical Situation', topics: ['SOAPSTone Analysis', 'Purpose & Audience', 'Exigence & Context', 'Rhetorical Choices'], color: 'cyan' },
      { title: 'Units 3–5: Claims & Reasoning', topics: ['Claims & Evidence', 'Reasoning & Organization', 'Line of Reasoning', 'Counterargument'], color: 'blue' },
      { title: 'Units 6–7: Style & Persuasion', topics: ['Diction & Syntax', 'Ethos, Pathos, Logos', 'Logical Fallacies', 'Tone & Voice'], color: 'green' },
      { title: 'Units 8–9: Synthesis & Argument', topics: ['Synthesis Essay', 'Rhetorical Analysis Essay', 'Argument Essay', 'Timed Writing Practice'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 45 MCQs in 60 minutes', 'Section II: 3 FRQs in 135 minutes', 'Synthesis, rhetorical analysis, and argument essays', 'Total exam time: 3 hours 15 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~10% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-environmental-science',
    shortSlug: 'ap-enviro',
    name: 'AP Environmental Science',
    shortName: 'AP Enviro',
    tagline: 'Master AP Environmental Science with interactive lessons, diagnostic tests, daily questions, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons covering ecosystems, biodiversity, energy, pollution, climate change, and sustainability.',
    lessonCount: '100+',
    gradientFrom: 'green', gradientTo: 'emerald',
    bgFrom: 'green', bgTo: 'emerald',
    units: [
      { title: 'Unit 1–2: Ecosystems & Biodiversity', topics: ['Ecosystem Structure', 'Energy Flow', 'Biogeochemical Cycles', 'Biodiversity'], color: 'green' },
      { title: 'Unit 3–4: Populations & Earth Systems', topics: ['Population Ecology', 'Human Population', 'Earth Systems', 'Land & Water Use'], color: 'blue' },
      { title: 'Unit 5–6: Land & Water Resources', topics: ['Agriculture', 'Forestry', 'Water Resources', 'Mining & Fishing'], color: 'amber' },
      { title: 'Unit 7–9: Energy & Pollution', topics: ['Energy Sources', 'Atmospheric Pollution', 'Climate Change', 'Global Change'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 80 MCQs in 90 minutes', 'Section II: 3 FRQs in 70 minutes', '1 Design an Investigation + 2 Analyze an Environmental Problem', 'Total exam time: 2 hours 40 minutes'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~11% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-computer-science-a',
    shortSlug: 'ap-csa',
    name: 'AP Computer Science A',
    shortName: 'AP CSA',
    tagline: 'Master AP Computer Science A with interactive Java lessons, coding practice, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons on Java programming — variables, control flow, arrays, OOP, inheritance, and algorithms.',
    lessonCount: '110+',
    gradientFrom: 'amber', gradientTo: 'orange',
    bgFrom: 'amber', bgTo: 'orange',
    units: [
      { title: 'Units 1–2: Primitives & Objects', topics: ['Variables & Types', 'Expressions & Operators', 'Strings & Objects', 'Using Objects'], color: 'amber' },
      { title: 'Units 3–4: Control Flow', topics: ['Boolean & Conditionals', 'If/Else Statements', 'Iteration & Loops', 'Nested Loops'], color: 'blue' },
      { title: 'Units 5–8: Classes & Data Structures', topics: ['Writing Classes', 'Arrays', 'ArrayList', '2D Arrays'], color: 'green' },
      { title: 'Units 9–10: Inheritance & Recursion', topics: ['Inheritance', 'Polymorphism', 'Recursion', 'Sorting & Searching'], color: 'purple' },
    ],
    examInfo: {
      format: ['Section I: 40 MCQs in 90 minutes', 'Section II: 4 FRQs in 90 minutes', 'FRQs: Methods/Control Flow, Class, Array/ArrayList, 2D Array', 'Total exam time: 3 hours'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~25% of students score a 5', 'Calculator NOT permitted', 'Most colleges accept 3+'],
    },
    hasFRQ: true,
  },
  {
    slug: 'ap-cs-principles',
    shortSlug: 'ap-csp',
    name: 'AP CS Principles',
    shortName: 'AP CSP',
    tagline: 'Master AP Computer Science Principles with interactive lessons, practice exams, and study plans — free for all students.',
    heroSubtitle: 'Interactive lessons on computing, data, algorithms, the internet, and the impact of technology on society.',
    lessonCount: '90+',
    gradientFrom: 'blue', gradientTo: 'sky',
    bgFrom: 'blue', bgTo: 'sky',
    units: [
      { title: 'Big Idea 1: Creative Development', topics: ['Collaboration', 'Program Design', 'Program Development', 'Identifying Errors'], color: 'blue' },
      { title: 'Big Idea 2: Data', topics: ['Binary & Data', 'Data Compression', 'Information Extraction', 'Data Analysis'], color: 'green' },
      { title: 'Big Idea 3: Algorithms & Programming', topics: ['Variables & Control', 'Procedures & Parameters', 'Lists', 'Algorithms'], color: 'purple' },
      { title: 'Big Ideas 4–5: Systems & Impact', topics: ['Computing Systems', 'Internet & Networks', 'Digital Divide', 'Safe Computing'], color: 'amber' },
    ],
    examInfo: {
      format: ['Create Performance Task: 12 hours (30% of score)', 'End-of-Course Exam: 70 MCQs in 120 minutes (70% of score)', 'Single-select and multiple-select questions', 'Total exam: 2 hours + Create Task'],
      scoring: ['Score range: 1–5', '5 = Extremely well qualified', '~12% of students score a 5', 'No penalty for guessing', 'Most colleges accept 3+'],
    },
    hasFRQ: false,
  },
]

function generateLandingPage(c) {
  const diagnosticHref = `/${c.shortSlug}-diagnostic`
  const coursesHref = `/courses/${c.slug}`
  const dailyHref = `/${c.shortSlug}-daily-question`
  const flashcardsHref = `/flashcards?course=${c.slug}`
  const studyPlansHref = `/${c.shortSlug}-study-plans`
  const practiceHref = `/${c.shortSlug}-practice`
  const frqHref = c.hasFRQ ? `/${c.shortSlug}-frq` : null
  const scoreHref = `/${c.shortSlug}-score-predictor`

  const featuresFRQ = frqHref ? `  {
    title: 'FRQ Practice',
    description: 'Practice free-response questions with rubrics and timed exam simulation.',
    href: '${frqHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: 'FRQs · Auto-graded · Timed',
  },` : ''

  const unitColors = [...new Set(c.units.map(u => u.color))]
  const unitColorsMap = unitColors.map(col => `  ${col}: 'text-${col}-700 dark:text-${col}-400',`).join('\n')
  const checkColorsMap = unitColors.map(col => `  ${col}: 'text-${col}-500',`).join('\n')

  return `import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${c.name} | Free Practice & Review',
  description:
    '${c.tagline}',
  alternates: {
    canonical: 'https://www.studymondo.com/${c.slug}',
  },
  openGraph: {
    title: '${c.name} | Free Practice & Review',
    description:
      '${c.heroSubtitle}',
    url: 'https://www.studymondo.com/${c.slug}',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every ${c.shortName} unit with practice problems and exit quizzes.',
    href: '${coursesHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-${c.gradientFrom}-500 to-${c.gradientTo}-500',
    stats: '${c.lessonCount} lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all units to identify your strengths and weak areas.',
    href: '${diagnosticHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key terms and concepts with spaced-repetition flashcards.',
    href: '${flashcardsHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Key terms · Definitions',
  },
  {
    title: 'Daily Question',
    description: 'A fresh question every day covering different units. Build consistency with daily practice.',
    href: '${dailyHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Study Plans',
    description: 'Structured 4, 10, or 16-week study schedules tailored to your timeline.',
    href: '${studyPlansHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: '3 plans · Auto-scheduled',
  },
  {
    title: 'Score Predictor',
    description: 'Estimate your AP score based on your practice performance and study habits.',
    href: '${scoreHref}',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: 'AI-powered · Personalized',
  },
${featuresFRQ}]

const units = [
${c.units.map(u => `  {
    title: '${u.title.replace(/'/g, "\\'")}',
    topics: [${u.topics.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}],
    color: '${u.color}',
  }`).join(',\n')},
]

const unitColors: Record<string, string> = {
${unitColorsMap}
}

const checkColors: Record<string, string> = {
${checkColorsMap}
}

export default function ${c.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/ /g, '')}Hub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-${c.bgFrom}-50 via-white to-${c.bgTo}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-${c.bgFrom}-100 px-4 py-1.5 text-sm font-semibold text-${c.bgFrom}-700 dark:bg-${c.bgFrom}-900/40 dark:text-${c.bgFrom}-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-${c.gradientFrom}-600 to-${c.gradientTo}-600 bg-clip-text text-transparent">
              ${c.name}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            ${c.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="${diagnosticHref}"
              className="rounded-xl bg-gradient-to-r from-${c.gradientFrom}-600 to-${c.gradientTo}-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="${coursesHref}"
              className="rounded-xl border-2 border-${c.bgFrom}-300 px-8 py-3.5 text-lg font-semibold text-${c.bgFrom}-700 transition hover:bg-${c.bgFrom}-50 dark:border-${c.bgFrom}-600 dark:text-${c.bgFrom}-400 dark:hover:bg-${c.bgFrom}-900/20"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map(f => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={\`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white \${f.color}\`}>
                    {f.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400">{f.stats}</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-${c.bgFrom}-600 dark:text-white dark:group-hover:text-${c.bgFrom}-400">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Units Covered */}
      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            What&apos;s Covered
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {units.map(u => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={\`mb-4 text-lg font-bold \${unitColors[u.color]}\`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={\`h-4 w-4 shrink-0 \${checkColors[u.color]}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Info */}
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the ${c.name} Exam
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
${c.examInfo.format.map(f => `                <li>• ${f}</li>`).join('\n')}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
${c.examInfo.scoring.map(s => `                <li>• ${s}</li>`).join('\n')}
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="${diagnosticHref}"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-${c.gradientFrom}-600 to-${c.gradientTo}-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
            >
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
`
}

let count = 0
for (const c of courses) {
  const dir = path.join(ROOT, `src/app/${c.slug}`)
  const filePath = path.join(dir, 'page.tsx')
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(filePath, generateLandingPage(c), 'utf8')
    count++
    console.log(`✅ ${c.slug}/page.tsx`)
  } else {
    console.log(`⏭ Already exists: ${c.slug}/page.tsx`)
  }
}
console.log(`\nDone! Generated ${count} landing pages.`)
