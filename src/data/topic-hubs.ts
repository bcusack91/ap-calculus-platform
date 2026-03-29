export type TopicHubLink = {
  label: string
  href: string
  type: 'topic' | 'diagnostic' | 'daily' | 'practice' | 'study-plan'
}

export type TopicHub = {
  slug: string
  title: string
  description: string
  exam: 'AP Calculus' | 'SAT' | 'AP Biology'
  links: TopicHubLink[]
}

export const topicHubs: TopicHub[] = [
  {
    slug: 'ap-calculus-ab-limits-continuity',
    title: 'AP Calculus AB Unit 1: Limits and Continuity',
    description: 'Master evaluating limits, continuity, and the algebraic and graphical intuition that powers all of AP Calculus AB.',
    exam: 'AP Calculus',
    links: [
      { label: 'Start AP Calc AB Diagnostic', href: '/ap-calcab-diagnostic', type: 'diagnostic' },
      { label: 'AP Calc AB Daily Question', href: '/ap-calcab-daily-question', type: 'daily' },
      { label: 'Study AP Calculus AB Course Topics', href: '/courses/ap-calculus-ab', type: 'topic' },
      { label: 'AP Calc AB Practice', href: '/ap-calcab-practice', type: 'practice' },
    ],
  },
  {
    slug: 'ap-calculus-ab-derivatives',
    title: 'AP Calculus AB Unit 2: Derivatives',
    description: 'Build fluency in derivative rules, interpretation, and real-world rate-of-change modeling for AP Calculus AB.',
    exam: 'AP Calculus',
    links: [
      { label: 'AP Calc AB Study Plans', href: '/ap-calcab-study-plans', type: 'study-plan' },
      { label: 'AP Calc AB Score Predictor', href: '/ap-calcab-score-predictor', type: 'practice' },
      { label: 'AP Calculus AB Course Map', href: '/courses/ap-calculus-ab', type: 'topic' },
    ],
  },
  {
    slug: 'ap-calculus-bc-series',
    title: 'AP Calculus BC Unit 10: Infinite Sequences and Series',
    description: 'Target the BC-only series unit with convergence tests, Taylor series intuition, and high-yield AP-style review.',
    exam: 'AP Calculus',
    links: [
      { label: 'Start AP Calc BC Diagnostic', href: '/ap-calcbc-diagnostic', type: 'diagnostic' },
      { label: 'AP Calc BC Daily Question', href: '/ap-calcbc-daily-question', type: 'daily' },
      { label: 'AP Calculus BC Course Topics', href: '/courses/ap-calculus-bc', type: 'topic' },
      { label: 'AP Calc BC Practice', href: '/ap-calcbc-practice', type: 'practice' },
    ],
  },
  {
    slug: 'sat-grammar-conventions-hub',
    title: 'SAT Grammar Conventions Hub',
    description: 'Sharpen punctuation, sentence boundaries, and grammar conventions with SAT-style drills and diagnostics.',
    exam: 'SAT',
    links: [
      { label: 'Start SAT Diagnostic', href: '/sat-diagnostic', type: 'diagnostic' },
      { label: 'SAT Daily Question', href: '/sat-daily-question', type: 'daily' },
      { label: 'SAT Practice', href: '/sat-practice', type: 'practice' },
      { label: 'SAT Study Plans', href: '/sat-study-plans', type: 'study-plan' },
    ],
  },
  {
    slug: 'sat-reading-rhetorical-synthesis',
    title: 'SAT Reading and Rhetorical Synthesis Hub',
    description: 'Train passage analysis, evidence interpretation, and rhetorical skill-building for higher SAT verbal consistency.',
    exam: 'SAT',
    links: [
      { label: 'SAT Main Course', href: '/sat', type: 'topic' },
      { label: 'SAT Practice Sets', href: '/sat-practice', type: 'practice' },
      { label: 'SAT Score Predictor', href: '/sat-score-predictor', type: 'practice' },
    ],
  },
  {
    slug: 'sat-math-nonlinear-functions',
    title: 'SAT Math Nonlinear Functions Hub',
    description: 'Focus on quadratics, exponentials, and nonlinear models with SAT-style strategy and time-saving patterns.',
    exam: 'SAT',
    links: [
      { label: 'SAT Grid-In Practice', href: '/sat-grid-in', type: 'practice' },
      { label: 'SAT Daily Question', href: '/sat-daily-question', type: 'daily' },
      { label: 'SAT Diagnostic', href: '/sat-diagnostic', type: 'diagnostic' },
    ],
  },
  {
    slug: 'ap-biology-cells-energy',
    title: 'AP Biology Unit 2: Cell Structure and Function',
    description: 'Understand organelles, membranes, transport, and cellular energetics with AP Bio-focused scaffolding.',
    exam: 'AP Biology',
    links: [
      { label: 'AP Bio Diagnostic', href: '/ap-bio-diagnostic', type: 'diagnostic' },
      { label: 'AP Bio Daily Question', href: '/ap-bio-daily-question', type: 'daily' },
      { label: 'AP Bio Practice', href: '/ap-bio-practice', type: 'practice' },
      { label: 'AP Biology Course Topics', href: '/courses/ap-biology', type: 'topic' },
    ],
  },
  {
    slug: 'ap-biology-heredity-gene-expression',
    title: 'AP Biology Unit 5: Heredity and Gene Expression',
    description: 'Strengthen genetics, inheritance patterns, and gene expression analysis for AP Biology success.',
    exam: 'AP Biology',
    links: [
      { label: 'AP Bio Study Plans', href: '/ap-bio-study-plans', type: 'study-plan' },
      { label: 'AP Bio Score Predictor', href: '/ap-bio-score-predictor', type: 'practice' },
      { label: 'AP Bio Practice', href: '/ap-bio-practice', type: 'practice' },
    ],
  },
  {
    slug: 'ap-biology-natural-selection-evolution',
    title: 'AP Biology Unit 7: Natural Selection',
    description: 'Connect selection pressure, variation, and population-level change with AP-style biological reasoning.',
    exam: 'AP Biology',
    links: [
      { label: 'AP Biology Course', href: '/courses/ap-biology', type: 'topic' },
      { label: 'AP Bio Diagnostic', href: '/ap-bio-diagnostic', type: 'diagnostic' },
      { label: 'AP Bio Daily Question', href: '/ap-bio-daily-question', type: 'daily' },
    ],
  },
  {
    slug: 'ap-biology-ecology-interactions',
    title: 'AP Biology Unit 8: Ecology Interactions Hub',
    description: 'Practice population dynamics, ecosystems, and interaction models with AP Biology-ready problem framing.',
    exam: 'AP Biology',
    links: [
      { label: 'AP Bio Practice', href: '/ap-bio-practice', type: 'practice' },
      { label: 'AP Bio Study Plans', href: '/ap-bio-study-plans', type: 'study-plan' },
      { label: 'AP Bio Score Predictor', href: '/ap-bio-score-predictor', type: 'practice' },
    ],
  },
]

export const topicHubBySlug = Object.fromEntries(topicHubs.map((hub) => [hub.slug, hub]))
