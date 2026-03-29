import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Improvement Roadmap | Study Mondo',
  description:
    'Living roadmap for obvious website improvements, implementation priorities, and continuation notes.',
}

type RoadmapItem = {
  id: string
  title: string
  status: 'not-started' | 'in-progress' | 'completed'
  impact: 'high' | 'medium'
  owner: string
  notes: string
  nextAction: string
}

const roadmap: RoadmapItem[] = [
  {
    id: 'speed-core-web-vitals',
    title: 'Improve page speed on high-traffic pages',
    status: 'not-started',
    impact: 'high',
    owner: 'product-engineering',
    notes:
      'Focus on LCP/INP for mobile. Audit heavy sections and lazy-load below-the-fold modules.',
    nextAction:
      'Run a mobile Lighthouse baseline for homepage + top course pages and capture top 10 bottlenecks.',
  },
  {
    id: 'seo-topic-hubs',
    title: 'Expand SEO with programmatic topic hubs',
    status: 'not-started',
    impact: 'high',
    owner: 'content-engineering',
    notes:
      'Build hub pages for major exam units with stronger internal links to diagnostics, quizzes, and daily questions.',
    nextAction:
      'Define URL pattern and launch first 10 hub pages (AP Calc + SAT + AP Bio starter set).',
  },
  {
    id: 'conversion-free-to-signup',
    title: 'Increase free-to-signup conversion',
    status: 'not-started',
    impact: 'high',
    owner: 'growth',
    notes:
      'Add stronger post-completion CTA blocks after daily questions and diagnostics.',
    nextAction:
      'A/B test one new CTA variant on 3 daily question pages with event tracking.',
  },
  {
    id: 'ad-placement-optimization',
    title: 'Optimize ad placement by template type',
    status: 'not-started',
    impact: 'high',
    owner: 'growth-monetization',
    notes:
      'Tune ad density per template to raise RPM without hurting retention.',
    nextAction:
      'Create per-template ad experiment matrix and launch first experiment on high-traffic lesson pages.',
  },
  {
    id: 'content-depth-standard',
    title: 'Standardize content depth across all courses',
    status: 'in-progress',
    impact: 'high',
    owner: 'content-engineering',
    notes:
      'Recent updates improved AP Bio, AP Precalculus, Grade 8, OChem, and Pre-Algebra daily systems.',
    nextAction:
      'Add automated depth checks for all daily pools and report thin topic coverage weekly.',
  },
  {
    id: 'analytics-funnel',
    title: 'Add funnel and engagement analytics instrumentation',
    status: 'in-progress',
    impact: 'high',
    owner: 'growth-data',
    notes:
      'Canonical daily-question + homepage/course-entry events are persisted, admin weekly funnel includes page-template + CTA-type attribution, critical drop notifications send via email/webhook with cooldown dedupe, and cron + admin acknowledge/snooze controls are live.',
    nextAction:
      'Add escalation policies (second channel + owner routing) when the same critical metric remains degraded for multiple windows.',
  },
  {
    id: 'onsite-discovery',
    title: 'Improve onsite search and related-topic discovery',
    status: 'not-started',
    impact: 'medium',
    owner: 'product-engineering',
    notes:
      'Faster content discovery should increase pages/session and reduce bounce.',
    nextAction:
      'Add related-topic cards to 2 major content templates and measure clickthrough.',
  },
  {
    id: 'reliability-guardrails',
    title: 'Add deploy-time smoke tests and route monitoring',
    status: 'not-started',
    impact: 'medium',
    owner: 'platform',
    notes:
      'Protect key learner flows from silent regressions.',
    nextAction:
      'Add smoke checks for diagnostic start, daily fetch, and topic page render in CI.',
  },
]

const statusClasses: Record<RoadmapItem['status'], string> = {
  'not-started': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'in-progress': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
  completed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200',
}

const impactClasses: Record<RoadmapItem['impact'], string> = {
  high: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200',
  medium: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
}

function formatLabel(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default function ImprovementRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 dark:from-slate-950 dark:to-gray-950">
      <div className="container max-w-5xl space-y-8">
        <header className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
            Living Implementation Plan
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Website Improvement Roadmap
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            This page is the source of truth for obvious product, growth, and monetization improvements.
            Start a new chat and ask to continue from this file:
            <span className="font-semibold"> src/app/improvement-roadmap/page.tsx</span>
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Execution Order</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Prioritize high-impact items first: speed, SEO hubs, conversion, monetization experiments, then analytics and reliability hardening.
          </p>
        </section>

        <section className="space-y-4">
          {roadmap.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="mr-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[item.status]}`}>
                  {formatLabel(item.status)}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${impactClasses[item.impact]}`}>
                  {formatLabel(item.impact)} Impact
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Owner: {item.owner}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-200">{item.notes}</p>
              <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Next action: {item.nextAction}
              </p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
