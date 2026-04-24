import Link from 'next/link'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Biology | Free AP Bio Practice & Review',
  description:
    'Comprehensive AP Biology preparation with interactive lessons, diagnostic tests, daily questions, flashcards, and competitive challenges. Free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/ap-biology',
  },
  openGraph: {
    title: 'AP Biology | Free AP Bio Practice & Review',
    description:
      'Master AP Biology with 175+ interactive lessons, diagnostic assessments, daily questions, and competitive challenges.',
    url: 'https://www.studymondo.com/ap-biology',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every AP Bio unit with practice problems, diagrams, and exit quizzes.',
    href: '/courses/ap-biology',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
    stats: '175+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all AP Bio units to identify your strengths and weak areas with a personalized study plan.',
    href: '/ap-bio-diagnostic',
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
    href: '/ap-bio-unit-tests',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
    stats: '6 units · 4 variations',
  },
  {
    title: 'Flashcards',
    description: 'Review key terms, biological processes, cell structures, and AP Bio vocabulary with spaced-repetition flashcards.',
    href: '/flashcards?course=ap-biology',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Key terms · Processes',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time AP Bio question battles. Climb the leaderboard and earn achievements.',
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
    description: 'A fresh AP Biology question every day covering different units. Build consistency with daily practice.',
    href: '/ap-bio-daily-question',
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
    description: 'Quick topic assessments after each lesson to confirm mastery before moving on.',
    href: '/courses/ap-biology',
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
    href: '/ap-bio-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: '7 FRQs · Auto-graded · Timed',
  },
]

const units = [
  {
    title: 'Unit 1–2: Chemistry of Life & Cell Structure',
    topics: [
      'Water & Macromolecules',
      'Cell Structure & Function',
      'Membrane Transport',
      'Cell Communication',
    ],
    color: 'green',
  },
  {
    title: 'Unit 3–4: Cellular Energetics & Cell Cycle',
    topics: [
      'Enzyme Catalysis',
      'Photosynthesis',
      'Cellular Respiration',
      'Cell Division (Mitosis & Meiosis)',
    ],
    color: 'blue',
  },
  {
    title: 'Unit 5–6: Heredity & Gene Expression',
    topics: [
      'Mendelian Genetics',
      'Non-Mendelian Inheritance',
      'DNA Replication',
      'Transcription & Translation',
      'Gene Regulation',
    ],
    color: 'purple',
  },
  {
    title: 'Unit 7–8: Evolution & Ecology',
    topics: [
      'Natural Selection',
      'Speciation & Phylogeny',
      'Population Ecology',
      'Community Ecology',
      'Biodiversity',
    ],
    color: 'amber',
  },
]

const unitColors: Record<string, string> = {
  green: 'text-green-700 dark:text-green-400',
  blue: 'text-blue-700 dark:text-blue-400',
  purple: 'text-purple-700 dark:text-purple-400',
  amber: 'text-amber-700 dark:text-amber-400',
}

const checkColors: Record<string, string> = {
  green: 'text-green-500',
  blue: 'text-blue-500',
  purple: 'text-purple-500',
  amber: 'text-amber-500',
}

export default function APBiologyHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP Biology',
        description: metadata.description as string,
        slug: 'ap-biology',
      })) }}
    />
      {/* Hero */}
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AP Biology
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            175+ interactive lessons, diagnostic assessments, flashcards, daily questions,
            and competitive challenges — everything you need to score a 5.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ap-bio-diagnostic"
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/courses/ap-biology"
              className="rounded-xl border-2 border-green-300 px-8 py-3.5 text-lg font-semibold text-green-700 transition hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900/20"
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
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
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

      {/* AP Bio Exam Info */}
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the AP Biology Exam
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 60 MCQs in 90 minutes</li>
                <li>• Section II: 6 FRQs in 90 minutes</li>
                <li>• 2 long FRQs + 4 short FRQs</li>
                <li>• Total exam time: 3 hours</li>
                <li>• No calculator allowed</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Score range: 1–5</li>
                <li>• 5 = Extremely well qualified</li>
                <li>• ~14% of students score a 5</li>
                <li>• No penalty for guessing</li>
                <li>• Most colleges accept 4+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/ap-bio-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
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
