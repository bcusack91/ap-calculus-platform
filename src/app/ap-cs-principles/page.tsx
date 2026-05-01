import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP CS Principles | Free Practice & Review',
  description:
    'Master AP Computer Science Principles with interactive lessons, practice exams, and study plans — free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/ap-cs-principles',
  },
  openGraph: {
    title: 'AP CS Principles | Free Practice & Review',
    description:
      'Interactive lessons on computing, data, algorithms, the internet, and the impact of technology on society.',
    url: 'https://www.studymondo.com/ap-cs-principles',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every AP CSP unit with practice problems and exit quizzes.',
    href: '/courses/ap-cs-principles',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-blue-500 to-sky-500',
    stats: '90+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all units to identify your strengths and weak areas.',
    href: '/ap-csp-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'Unit Tests',
    description: 'Drill a single AP unit at a time. 5 units · 4 different variations each — perfect for end-of-unit review.',
    href: '/ap-csp-unit-tests',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    color: 'from-teal-500 to-cyan-500',
    stats: '5 units · 4 variations',
  },
  {
    title: 'Flashcards',
    description: 'Review key terms and concepts with spaced-repetition flashcards.',
    href: '/flashcards?course=ap-cs-principles',
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
    href: '/ap-csp-daily-question',
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
    href: '/ap-csp-study-plans',
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
    href: '/ap-csp-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: 'AI-powered · Personalized',
  },
]

const units = [
  {
    title: 'Big Idea 1: Creative Development',
    topics: ['Collaboration', 'Program Design', 'Program Development', 'Identifying Errors'],
    color: 'blue',
  },
  {
    title: 'Big Idea 2: Data',
    topics: ['Binary & Data', 'Data Compression', 'Information Extraction', 'Data Analysis'],
    color: 'green',
  },
  {
    title: 'Big Idea 3: Algorithms & Programming',
    topics: ['Variables & Control', 'Procedures & Parameters', 'Lists', 'Algorithms'],
    color: 'purple',
  },
  {
    title: 'Big Ideas 4–5: Systems & Impact',
    topics: ['Computing Systems', 'Internet & Networks', 'Digital Divide', 'Safe Computing'],
    color: 'amber',
  },
]

const unitColors: Record<string, string> = {
  blue: 'text-blue-700 dark:text-blue-400',
  green: 'text-green-700 dark:text-green-400',
  purple: 'text-purple-700 dark:text-purple-400',
  amber: 'text-amber-700 dark:text-amber-400',
}

const checkColors: Record<string, string> = {
  blue: 'text-blue-500',
  green: 'text-green-500',
  purple: 'text-purple-500',
  amber: 'text-amber-500',
}

export default function ApCsPrinciplesHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP CS Principles',
        description: metadata.description as string,
        slug: 'ap-cs-principles',
      })) }}
    />
      {/* Hero */}
      <CourseUniqueIntro slug="ap-cs-principles" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              AP CS Principles
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Interactive lessons on computing, data, algorithms, the internet, and the impact of technology on society.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ap-csp-diagnostic"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/courses/ap-cs-principles"
              className="rounded-xl border-2 border-blue-300 px-8 py-3.5 text-lg font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-900/20"
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
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}>
                    {f.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400">{f.stats}</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
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
                <h3 className={`mb-4 text-lg font-bold ${unitColors[u.color]}`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${checkColors[u.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            About the AP CS Principles Exam
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Create Performance Task: 12 hours (30% of score)</li>
                <li>• End-of-Course Exam: 70 MCQs in 120 minutes (70% of score)</li>
                <li>• Single-select and multiple-select questions</li>
                <li>• Total exam: 2 hours + Create Task</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Score range: 1–5</li>
                <li>• 5 = Extremely well qualified</li>
                <li>• ~12% of students score a 5</li>
                <li>• No penalty for guessing</li>
                <li>• Most colleges accept 3+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/ap-csp-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
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
