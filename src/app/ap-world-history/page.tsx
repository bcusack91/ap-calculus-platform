import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import { InArticleAd } from '@/components/ad-banner'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'
import CourseToolGrid from '@/components/CourseToolGrid'

export const metadata: Metadata = {
  title: 'AP World History | Free Practice & Review',
  description:
    'Master AP World History with interactive lessons, diagnostic tests, daily questions, and study plans — free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/ap-world-history',
  },
  openGraph: {
    title: 'AP World History | Free Practice & Review',
    description:
      'From ancient civilizations to modern globalization — interactive lessons covering every AP World History period.',
    url: 'https://www.studymondo.com/ap-world-history',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every AP World History unit with practice problems and exit quizzes.',
    href: '/courses/ap-world-history',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '120+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all units to identify your strengths and weak areas.',
    href: '/ap-world-history-diagnostic',
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
    description: 'Drill a single AP unit at a time. 6 units · 4 different variations each — perfect for end-of-unit review.',
    href: '/ap-world-history-unit-tests',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '6 units · 4 variations',
  },
  {
    title: 'Practice Exam',
    description: 'Full-length 30-question stimulus-based practice exam covering all 9 units, modeled on the official College Board exam.',
    href: '/ap-world-history-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-orange-500 to-red-500',
    stats: '55 MCQ · 3 SAQ · DBQ · LEQ',
  },
  {
    title: 'Flashcards',
    description: 'Review key terms and concepts with spaced-repetition flashcards.',
    href: '/flashcards?course=ap-world-history',
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
    href: '/ap-world-history-daily-question',
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
    href: '/ap-world-history-study-plans',
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
    href: '/ap-world-history-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: 'AI-powered · Personalized',
  },
  {
    title: 'FRQ Practice',
    description: 'Practice free-response questions with rubrics and timed exam simulation.',
    href: '/ap-world-history-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: 'FRQs · Auto-graded · Timed',
  },]

const units = [
  {
    title: 'Unit 1: The Global Tapestry (1200–1450)',
    topics: ['Song Dynasty & East Asia', 'Dar al-Islam', 'South & Southeast Asia', 'State Building in the Americas & Africa'],
    color: 'amber',
  },
  {
    title: 'Unit 2: Networks of Exchange (1200–1450)',
    topics: ['Silk Roads', 'Mongol Empire', 'Indian Ocean Trade', 'Trans-Saharan Trade'],
    color: 'orange',
  },
  {
    title: 'Unit 3: Land-Based Empires (1450–1750)',
    topics: ['Ottoman Empire', 'Safavid Empire', 'Mughal Empire', 'Qing Dynasty'],
    color: 'blue',
  },
  {
    title: 'Unit 4: Transoceanic Interconnections (1450–1750)',
    topics: ['European Exploration', 'Columbian Exchange', 'Maritime Empires', 'Coerced Labor Systems'],
    color: 'indigo',
  },
  {
    title: 'Unit 5: Revolutions (1750–1900)',
    topics: ['Enlightenment', 'American & French Revolutions', 'Haitian Revolution', 'Latin American Independence'],
    color: 'green',
  },
  {
    title: 'Unit 6: Consequences of Industrialization (1750–1900)',
    topics: ['Industrial Revolution', 'Imperialism', 'Economic Imperialism', 'Reform & Resistance'],
    color: 'teal',
  },
  {
    title: 'Unit 7: Global Conflict (1900–present)',
    topics: ['World War I', 'World War II', 'Mass Atrocities', 'Total War'],
    color: 'red',
  },
  {
    title: 'Unit 8: Cold War & Decolonization (1900–present)',
    topics: ['Cold War Conflicts', 'Decolonization in Africa & Asia', 'Proxy Wars', 'End of the Cold War'],
    color: 'purple',
  },
  {
    title: 'Unit 9: Globalization (1900–present)',
    topics: ['Economic Globalization', 'Technological Innovation', 'Disease & Environment', 'Social & Cultural Changes'],
    color: 'pink',
  },
]

const unitColors: Record<string, string> = {
  amber: 'text-amber-700 dark:text-amber-400',
  orange: 'text-orange-700 dark:text-orange-400',
  blue: 'text-blue-700 dark:text-blue-400',
  indigo: 'text-indigo-700 dark:text-indigo-400',
  green: 'text-green-700 dark:text-green-400',
  teal: 'text-teal-700 dark:text-teal-400',
  red: 'text-red-700 dark:text-red-400',
  purple: 'text-purple-700 dark:text-purple-400',
  pink: 'text-pink-700 dark:text-pink-400',
}

const checkColors: Record<string, string> = {
  amber: 'text-amber-500',
  orange: 'text-orange-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  green: 'text-green-500',
  teal: 'text-teal-500',
  red: 'text-red-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
}

export default function ApWorldHistoryHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP World History',
        description: metadata.description as string,
        slug: 'ap-world-history',
      })) }}
    />
      {/* Hero */}
      <CourseUniqueIntro slug="ap-world-history" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              AP World History
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            From ancient civilizations to modern globalization — interactive lessons covering every AP World History period.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ap-world-history-diagnostic"
              className="rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/courses/ap-world-history"
              className="rounded-xl border-2 border-amber-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-900/20"
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
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400">
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
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the AP World History Exam
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 55 MCQs + 3 SAQs in 95 minutes</li>
                <li>• Section II: 1 DBQ + 1 LEQ in 100 minutes</li>
                <li>• DBQ: analyze 7 documents</li>
                <li>• Total exam time: 3 hours 15 minutes</li>
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
              href="/ap-world-history-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
            >
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <CourseToolGrid courseSlug="ap-world-history" />
    </div>
  )
}
