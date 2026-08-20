import Link from 'next/link'
import CourseStudyPlan from '@/components/CourseStudyPlan'
import { InArticleAd } from '@/components/ad-banner'
import type { Metadata } from 'next'
import CourseToolGrid from '@/components/CourseToolGrid'
import { courseJsonLd } from '@/lib/jsonld'
import CourseHero from '@/components/CourseHero'

export const metadata: Metadata = {
  title: 'SAT Prep | Free Digital SAT Practice',
  description:
    'Comprehensive SAT preparation with practice tests, diagnostic assessments, interactive lessons, exit quizzes, and a score predictor. Free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/sat',
  },
  openGraph: {
    title: 'SAT Prep | Free Digital SAT Practice',
    description:
      'Master the Digital SAT with full-length practice tests, diagnostic assessments, 35+ topic quizzes, and personalized score predictions.',
    url: 'https://www.studymondo.com/sat',
  },
}

const features = [
  {
    title: 'Practice Tests',
    description: 'Full-length and mini Digital SAT simulations with timed sections, question flagging, and detailed results.',
    href: '/sat-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: '98 questions · 2h 14min',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all SAT domains to identify your strengths and weak areas with a personalized study plan.',
    href: '/sat-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-green-500 to-teal-500',
    stats: '~30 questions · 25 min',
  },
  {
    title: 'Score Predictor',
    description: 'See your projected 400–1600 SAT score based on quiz performance, mastery progress, and practice test history.',
    href: '/sat-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-indigo-500 to-purple-500',
    stats: 'Trend chart · Percentile',
  },
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons for every SAT topic with practice problems, explanations, and exit quizzes.',
    href: '/courses/sat-prep',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '22+ lessons · All topics',
  },
  {
    title: 'Study Plans',
    description: 'Pre-built 4, 8, and 12-week study schedules with daily tasks. Pick a plan and it auto-populates your dashboard planner.',
    href: '/sat-study-plans',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: '3 templates · 4–12 weeks',
  },
  {
    title: 'Daily Question',
    description: 'Two fresh SAT questions every day — one Math, one Reading & Writing. Build consistency with daily practice.',
    href: '/sat-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: '2 questions · Daily',
  },
  {
    title: 'Grid-In Practice',
    description: 'Student-produced response problems — type your numeric answer. Covers algebra, geometry, statistics, and more.',
    href: '/sat-grid-in',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-emerald-500 to-green-600',
    stats: '20 problem types',
  },
  {
    title: 'Reading Practice',
    description: 'Practice the Digital SAT Reading & Writing section passage by passage — 60 passages across literary, science, and historical genres.',
    href: '/sat-reading-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-600',
    stats: '60 passages',
  },
]

const sections = [
  {
    title: 'Reading & Writing',
    topics: [
      'Reading Comprehension',
      'Vocabulary in Context',
      'Central Ideas & Details',
      'Command of Evidence',
      'Grammar & Conventions',
      'Punctuation',
      'Sentence Structure',
      'Effective Language Use',
      'Transitions & Organization',
    ],
    color: 'blue',
  },
  {
    title: 'Math',
    topics: [
      'Linear Equations & Inequalities',
      'Systems of Equations',
      'Quadratic Equations',
      'Functions & Graphs',
      'Exponents & Radicals',
      'Polynomials & Factoring',
      'Statistics & Data',
      'Geometry & Trigonometry',
      'Circles & Complex Numbers',
    ],
    color: 'purple',
  },
]

export default function SATLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
          title: 'SAT Prep',
          description: metadata.description as string,
          slug: 'sat-prep',
          canonicalPath: '/sat',
        })) }}
      />
      {/* Personalized plan: flashcards due + diagnostic study modules */}
      <CourseStudyPlan
        courseSlug="sat-prep"
        courseLabel="SAT"
        planStatusEndpoint="/api/sat-diagnostic/plan-status"
        diagnosticHref="/sat-diagnostic"
        accent="purple"
      />
      <CourseHero
        courseName='Digital SAT'
        tagline='Full-length practice tests, diagnostic assessments, 35+ topic quizzes, interactive lessons, and a personalized score predictor.'
        primaryCta={{ href: '/sat-diagnostic', label: 'Start with Diagnostic' }}
        secondaryCta={{ href: '/sat-practice', label: 'Take Practice Test' }}
        accentFrom="purple"
        accentTo="pink"
        leadWord='Ace the'
      />

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
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}
                  >
                    {f.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-400">
                    {f.stats}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* In-article ad — single, mid-page placement between features and "What's Covered" */}
      <InArticleAd />

      {/* What's Covered */}
      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            What&apos;s Covered
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {sections.map(sec => (
              <div
                key={sec.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
              >
                <h3
                  className={`mb-4 text-lg font-bold ${
                    sec.color === 'blue'
                      ? 'text-blue-700 dark:text-blue-400'
                      : 'text-purple-700 dark:text-purple-400'
                  }`}
                >
                  {sec.title}
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {sec.topics.map(t => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className={`h-4 w-4 shrink-0 ${
                          sec.color === 'blue'
                            ? 'text-blue-500'
                            : 'text-purple-500'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
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

      {/* Digital SAT Info */}
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the Digital SAT
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• 2 sections: Reading & Writing, Math</li>
                <li>• Each section has 2 adaptive modules</li>
                <li>• Shorter passages in R&W (1 question per passage)</li>
                <li>• Calculator allowed for all Math questions</li>
                <li>• Total test time: 2 hours 14 minutes</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Composite: 400–1600</li>
                <li>• Reading & Writing: 200–800</li>
                <li>• Math: 200–800</li>
                <li>• No penalty for guessing</li>
                <li>• Average score: ~1060</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/sat-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
            >
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <CourseToolGrid courseSlug="sat-prep" />
    </div>
  )
}
