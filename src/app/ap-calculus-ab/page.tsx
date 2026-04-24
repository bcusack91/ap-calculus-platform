import Link from 'next/link'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Calculus AB | Free AP Calc AB Practice & Review',
  description:
    'Comprehensive AP Calculus AB preparation with 154+ interactive lessons, diagnostic tests, flashcards, daily questions, and competitive challenges. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calculus-ab' },
  openGraph: {
    title: 'AP Calculus AB | Free AP Calc AB Practice & Review',
    description: 'Master AP Calculus AB with 154+ interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/ap-calculus-ab',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering limits, derivatives, integrals, and all AP Calc AB topics with practice problems.',
    href: '/courses/ap-calculus-ab',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-orange-500 to-amber-500',
    stats: '154+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all Calc AB topics to identify your strengths and weak areas with AP score prediction.',
    href: '/ap-calcab-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-green-500 to-teal-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'Unit Tests',
    description: 'Drill a single AP unit at a time. 6 units · 4 different variations each — perfect for end-of-unit review.',
    href: '/ap-calcab-unit-tests',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: '6 units · 4 variations',
  },
  {
    title: 'Flashcards',
    description: 'Review derivative rules, integral formulas, theorems, and key AP Calculus AB concepts.',
    href: '/flashcards?course=ap-calculus-ab',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Formulas · Theorems · Rules',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time calculus battles — derivatives, limits, and integrals.',
    href: '/competitive',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-red-500 to-orange-500',
    stats: 'Real-time · Leaderboard',
  },
  {
    title: 'Daily Question',
    description: 'A fresh AP Calculus AB question every day covering different topics. Build consistency.',
    href: '/ap-calcab-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Exit Quizzes',
    description: 'Short assessments after each lesson to confirm understanding before moving on.',
    href: '/courses/ap-calculus-ab',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: 'Per-topic · Instant feedback',
  },
  {
    title: 'FRQ Practice',
    description: 'Practice free-response questions with auto-grading, rubrics, and timed exam simulation. 50% of the AP exam.',
    href: '/ap-calc-ab-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: '9 FRQs · Auto-graded · Timed',
  },
]

const units = [
  { title: 'Unit 1–2: Limits & Continuity', topics: ['Limits Graphically & Numerically', 'Algebraic Limit Techniques', 'Squeeze Theorem', 'Continuity & IVT'], color: 'orange' },
  { title: 'Unit 3–4: Differentiation', topics: ['Definition of Derivative', 'Power, Product & Quotient Rules', 'Chain Rule', 'Implicit Differentiation', 'Related Rates'], color: 'blue' },
  { title: 'Unit 5: Analytical Applications', topics: ['Mean Value Theorem', 'Increasing/Decreasing Intervals', 'Relative & Absolute Extrema', 'Concavity & Points of Inflection', 'Optimization'], color: 'purple' },
  { title: 'Unit 6–8: Integration', topics: ['Riemann Sums & Definite Integrals', 'Fundamental Theorem of Calculus', 'U-Substitution', 'Area Between Curves', 'Volumes of Revolution', 'Differential Equations'], color: 'green' },
]

const unitColors: Record<string, string> = {
  orange: 'text-orange-700 dark:text-orange-400', blue: 'text-blue-700 dark:text-blue-400',
  purple: 'text-purple-700 dark:text-purple-400', green: 'text-green-700 dark:text-green-400',
}
const checkColors: Record<string, string> = {
  orange: 'text-orange-500', blue: 'text-blue-500', purple: 'text-purple-500', green: 'text-green-500',
}

export default function APCalculusABHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP Calculus AB',
        description: metadata.description as string,
        slug: 'ap-calculus-ab',
      })) }}
    />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">AP Calculus AB</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            154+ interactive lessons, diagnostic assessments, flashcards, daily questions, and competitive challenges — everything you need to score a 5.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ap-calcab-diagnostic" className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">Start with Diagnostic</Link>
            <Link href="/courses/ap-calculus-ab" className="rounded-xl border-2 border-orange-300 px-8 py-3.5 text-lg font-semibold text-orange-700 transition hover:bg-orange-50 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-900/20">Browse Lessons</Link>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl"><div className="grid gap-6 sm:grid-cols-2">
          {features.map(f => (
            <Link key={f.title} href={f.href} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}>{f.icon}</div>
                <span className="text-xs font-medium text-gray-400">{f.stats}</span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </Link>
          ))}
        </div></div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">What&apos;s Covered</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {units.map(u => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={`mb-4 text-lg font-bold ${unitColors[u.color]}`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${checkColors[u.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">About the AP Calculus AB Exam</h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 45 MCQs in 105 minutes</li>
                <li>• Part A: 30 no-calculator MCQs (60 min)</li>
                <li>• Part B: 15 calculator MCQs (45 min)</li>
                <li>• Section II: 6 FRQs in 90 minutes</li>
                <li>• Total exam time: 3 hours 15 minutes</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Score range: 1–5</li>
                <li>• 5 = Extremely well qualified</li>
                <li>• ~24% of students score a 5</li>
                <li>• No penalty for guessing</li>
                <li>• Most colleges accept 4+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/ap-calcab-diagnostic" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg">
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
