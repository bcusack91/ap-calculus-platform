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
    status: 'completed',
    impact: 'high',
    owner: 'product-engineering',
    notes:
      'Added a mobile speed baseline script that records homepage and major course-page metrics using PageSpeed Insights with a fetch fallback.',
    nextAction:
      'Run the baseline weekly and use the generated report to prioritize the next specific LCP/INP bottlenecks.',
  },
  {
    id: 'seo-topic-hubs',
    title: 'Expand SEO with programmatic topic hubs',
    status: 'completed',
    impact: 'high',
    owner: 'content-engineering',
    notes:
      'Launched a hub system with 10 starter pages across AP Calculus, SAT, and AP Biology, plus a hubs index and sitemap coverage.',
    nextAction:
      'Measure organic traffic and expand the hub set based on search demand and internal clickthrough.',
  },
  {
    id: 'conversion-free-to-signup',
    title: 'Increase free-to-signup conversion',
    status: 'completed',
    impact: 'high',
    owner: 'growth',
    notes:
      'Added a lightweight post-completion CTA A/B test on three daily-question pages with impression and click analytics.',
    nextAction:
      'Review variant performance and roll the better CTA into additional daily-question templates.',
  },
  {
    id: 'ad-placement-optimization',
    title: 'Optimize ad placement by template type',
    status: 'completed',
    impact: 'high',
    owner: 'growth-monetization',
    notes:
      'Created a per-template ad experiment matrix and activated the first topic-page ad-density experiment for a deterministic traffic split.',
    nextAction:
      'Compare RPM and engagement before extending experiments to course and daily-question templates.',
  },
  {
    id: 'content-depth-standard',
    title: 'Standardize content depth across all courses',
    status: 'completed',
    impact: 'high',
    owner: 'content-engineering',
    notes:
      'Added automated daily-pool depth auditing, report generation scripts, and a cron endpoint for weekly thin-pool visibility.',
    nextAction:
      'Use the generated reports to prioritize the next thin pools for content expansion.',
  },
  {
    id: 'analytics-funnel',
    title: 'Add funnel and engagement analytics instrumentation',
    status: 'completed',
    impact: 'high',
    owner: 'growth-data',
    notes:
      'The funnel stack now includes persisted attribution, admin trends, alerting, cron delivery, ack/snooze controls, escalation routing, runbooks, tickets, monthly digest data, and operational response metrics.',
    nextAction:
      'Monitor monthly digest trends and trim any low-signal events if the dashboard becomes noisy.',
  },
  {
    id: 'onsite-discovery',
    title: 'Improve onsite search and related-topic discovery',
    status: 'completed',
    impact: 'medium',
    owner: 'product-engineering',
    notes:
      'Added related-topic discovery cards to both topic and course templates, with click tracking for downstream measurement.',
    nextAction:
      'Review related-topic clickthrough and expand the pattern to more templates if it lifts pages/session.',
  },
  {
    id: 'reliability-guardrails',
    title: 'Add deploy-time smoke tests and route monitoring',
    status: 'completed',
    impact: 'medium',
    owner: 'platform',
    notes:
      'Added route smoke checks, CI health wait logic, and build-time depth auditing to guard diagnostic, daily-question, and content-page flows.',
    nextAction:
      'Keep the smoke suite lean and add only the next highest-value learner flows when regressions justify it.',
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
