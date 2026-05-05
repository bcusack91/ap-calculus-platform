import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACT Prep | Free ACT Practice & Review',
  description:
    'Comprehensive ACT preparation with practice questions, interactive lessons, daily questions, and study tools. Free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/act',
  },
  openGraph: {
    title: 'ACT Prep | Free ACT Practice & Review',
    description:
      'Master the ACT with practice questions across all 4 sections, interactive lessons, and study tools.',
    url: 'https://www.studymondo.com/act',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every ACT topic with practice problems, explanations, and exit quizzes.',
    href: '/courses/act-prep',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '140+ lessons · All topics',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all ACT sections to identify your strengths and weak areas with a personalized study plan.',
    href: '/act-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-green-500 to-teal-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key ACT concepts, vocabulary, formulas, and science terminology with spaced-repetition flashcards.',
    href: '/flashcards?course=act-prep',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Science · English · Math',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time ACT question battles. Climb the leaderboard and earn achievements.',
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
    description: 'Fresh ACT questions every day across all four sections. Build consistency with quick daily practice.',
    href: '/act-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All sections',
  },
  {
    title: 'Full-Length Practice Exam',
    description: 'Take a complete, timed ACT practice exam modeled on the Enhanced ACT (2025+) format: English, Math, Reading, and Science with section-by-section timing.',
    href: '/act-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-red-500 to-orange-500',
    stats: '60 MCQ · 4 sections · Timed',
  },
]

const sections = [
  {
    title: 'English',
    topics: [
      'Grammar & Usage',
      'Punctuation',
      'Sentence Structure',
      'Rhetorical Skills',
      'Organization',
      'Style & Tone',
    ],
    color: 'blue',
  },
  {
    title: 'Math',
    topics: [
      'Pre-Algebra',
      'Elementary Algebra',
      'Intermediate Algebra',
      'Coordinate Geometry',
      'Plane Geometry',
      'Trigonometry',
    ],
    color: 'purple',
  },
  {
    title: 'Reading',
    topics: [
      'Social Studies Passages',
      'Natural Sciences Passages',
      'Literary Narrative / Prose Fiction',
      'Humanities Passages',
    ],
    color: 'green',
  },
  {
    title: 'Science',
    topics: [
      'Data Representation',
      'Research Summaries',
      'Conflicting Viewpoints',
      'Experimental Design',
    ],
    color: 'amber',
  },
]

const sectionColors: Record<string, string> = {
  blue: 'text-blue-700 dark:text-blue-400',
  purple: 'text-purple-700 dark:text-purple-400',
  green: 'text-green-700 dark:text-green-400',
  amber: 'text-amber-700 dark:text-amber-400',
}

const checkColors: Record<string, string> = {
  blue: 'text-blue-500',
  purple: 'text-purple-500',
  green: 'text-green-500',
  amber: 'text-amber-500',
}

export default function ACTLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero */}
      <CourseUniqueIntro slug="act" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Ace the{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              ACT
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Interactive lessons, daily practice, flashcards, and competitive challenges across
            all four ACT sections — English, Math, Reading, and Science.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/act-diagnostic"
              className="rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/courses/act-prep"
              className="rounded-xl border-2 border-red-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-red-700 transition hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              Browse Lessons
            </Link>
            <Link
              href="/competitive"
              className="rounded-xl border-2 border-red-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-red-700 transition hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              Competitive Mode
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
                  <span className="text-xs font-medium text-gray-400">{f.stats}</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Covered */}
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
                <h3 className={`mb-4 text-lg font-bold ${sectionColors[sec.color]}`}>
                  {sec.title}
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {sec.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${checkColors[sec.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ACT Info */}
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the ACT
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• 4 sections: English, Math, Reading, Science</li>
                <li>• Optional Writing (essay) section</li>
                <li>• English: 75 questions in 45 minutes</li>
                <li>• Math: 60 questions in 60 minutes</li>
                <li>• Reading: 40 questions in 35 minutes</li>
                <li>• Science: 40 questions in 35 minutes</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Composite: 1–36 (avg of section scores)</li>
                <li>• Each section: 1–36</li>
                <li>• No penalty for guessing</li>
                <li>• National average: ~21</li>
                <li>• 30+ is top ~5%</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/courses/act-prep"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
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
