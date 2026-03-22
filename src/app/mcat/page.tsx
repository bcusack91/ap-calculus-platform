import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Prep | Free MCAT Practice & Review',
  description:
    'Comprehensive MCAT preparation with practice questions, diagnostic assessments, interactive lessons, study plans, and daily questions. Free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/mcat',
  },
  openGraph: {
    title: 'MCAT Prep | Free MCAT Practice & Review',
    description:
      'Master the MCAT with practice questions across all 4 sections, diagnostic assessments, 18+ topic lessons, and personalized study plans.',
    url: 'https://www.studymondo.com/mcat',
  },
}

const features = [
  {
    title: 'Practice Questions',
    description: 'Section-specific MCAT practice with passage-based and discrete questions across all four sections.',
    href: '/mcat-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
    stats: '230 questions · 4 sections',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all MCAT domains to identify your strengths and weak areas with a personalized study plan.',
    href: '/mcat-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    stats: '~40 questions · 30 min',
  },
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons for every MCAT topic with practice problems, explanations, and review questions.',
    href: '/courses/mcat-prep',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '18+ lessons · All sections',
  },
  {
    title: 'Study Plans',
    description: 'Pre-built 3-month, 6-month, and 12-month study schedules with daily tasks, auto-populated to your dashboard.',
    href: '/mcat-study-plans',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: '3 templates · 3–12 months',
  },
  {
    title: 'Daily Question',
    description: 'A fresh MCAT question every day from a rotating section. Build consistency with daily practice.',
    href: '/mcat-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: '1 question · Daily',
  },
  {
    title: 'Score Predictor',
    description: 'Project your MCAT score from ongoing quiz performance and mastery progress across sections.',
    href: '/mcat-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 2 4-5" />
      </svg>
    ),
    color: 'from-teal-500 to-emerald-500',
    stats: 'Live estimate · 472-528',
  },
]

const sections = [
  {
    title: 'Chemical & Physical Foundations (Chem/Phys)',
    topics: [
      'General Chemistry',
      'Organic Chemistry',
      'Physics: Mechanics',
      'Physics: Electricity & Optics',
      'Biochemistry Foundations',
    ],
    color: 'emerald',
  },
  {
    title: 'Critical Analysis & Reasoning Skills (CARS)',
    topics: [
      'CARS Strategy & Approach',
      'CARS Passage Analysis',
      'CARS Reasoning & Inference',
    ],
    color: 'blue',
  },
  {
    title: 'Biological & Biochemical Foundations (Bio/Biochem)',
    topics: [
      'Cell Biology',
      'Molecular Biology',
      'Organ Systems',
      'Genetics & Evolution',
      'Anatomy & Physiology',
      'Microbiology',
    ],
    color: 'amber',
  },
  {
    title: 'Psychological, Social & Biological Foundations (Psych/Soc)',
    topics: [
      'Psychology & Behavior',
      'Sociology',
      'Science Passage Strategy',
      'Test Day Strategy',
    ],
    color: 'purple',
  },
]

const sectionColorMap: Record<string, { heading: string; icon: string }> = {
  emerald: {
    heading: 'text-emerald-700 dark:text-emerald-400',
    icon: 'text-emerald-500',
  },
  blue: {
    heading: 'text-blue-700 dark:text-blue-400',
    icon: 'text-blue-500',
  },
  amber: {
    heading: 'text-amber-700 dark:text-amber-400',
    icon: 'text-amber-500',
  },
  purple: {
    heading: 'text-purple-700 dark:text-purple-400',
    icon: 'text-purple-500',
  },
}

export default function MCATLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Conquer the{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MCAT
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Practice questions across all 4 MCAT sections, diagnostic assessments, 18+ topic lessons,
            study plans, and daily practice — all completely free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/mcat-diagnostic"
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/mcat-practice"
              className="rounded-xl border-2 border-emerald-300 px-8 py-3.5 text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
            >
              Practice Questions
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
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}
                  >
                    {f.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-400">
                    {f.stats}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            What&apos;s Covered
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {sections.map(sec => {
              const colors = sectionColorMap[sec.color] ?? sectionColorMap.emerald
              return (
                <div
                  key={sec.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className={`mb-4 text-lg font-bold ${colors.heading}`}>
                    {sec.title}
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {sec.topics.map(t => (
                      <li
                        key={t}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className={`h-4 w-4 shrink-0 ${colors.icon}`}
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
              )
            })}
          </div>
        </div>
      </section>

      {/* MCAT Info */}
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the MCAT
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• 4 sections: Chem/Phys, CARS, Bio/Biochem, Psych/Soc</li>
                <li>• 230 questions total (59 per science section, 53 CARS)</li>
                <li>• Passage-based and discrete questions</li>
                <li>• Total test time: 7 hours 30 minutes (with breaks)</li>
                <li>• Computer-based; no calculator allowed</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Each section: 118–132</li>
                <li>• Total: 472–528</li>
                <li>• Average score: ~500 (50th percentile)</li>
                <li>• Competitive score: 510+ (80th percentile)</li>
                <li>• No penalty for guessing</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/mcat-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
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
