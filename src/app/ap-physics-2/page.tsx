import Link from 'next/link'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 2 | Free AP Physics 2 Practice & Review',
  description:
    'Comprehensive AP Physics 2 preparation with 126+ interactive lessons, flashcards, daily questions, and competitive challenges. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-2' },
  openGraph: {
    title: 'AP Physics 2 | Free AP Physics 2 Practice & Review',
    description: 'Master AP Physics 2 with 126+ interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/ap-physics-2',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering thermodynamics, fluids, electromagnetism, optics, and modern physics.',
    href: '/courses/ap-physics-2',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
    stats: '126+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all AP Physics 2 units to identify your strengths and weak areas.',
    href: '/ap-physics2-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    stats: '~30 questions · 25 min',
  },
  {
    title: 'Flashcards',
    description: 'Review physics equations, key concepts, and definitions for all AP Physics 2 topics.',
    href: '/flashcards?course=ap-physics-2',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Equations · Key concepts',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time physics question battles. Climb the leaderboard.',
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
    description: 'A fresh AP Physics 2 question every day. Build consistency with daily practice.',
    href: '/ap-physics2-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'Estimate your AP Physics 2 exam score from your quiz performance and mastery data.',
    href: '/ap-physics2-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 2 4-5" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: 'Live estimate · AP 1-5',
  },
  {
    title: 'Exit Quizzes',
    description: 'Short assessments after each lesson to confirm understanding before moving on.',
    href: '/courses/ap-physics-2',
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
    href: '/ap-physics2-frq',
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
  { title: 'Unit 1: Fluids', topics: ['Pressure & Pascal\'s Law', 'Buoyancy & Archimedes', 'Fluid Dynamics & Bernoulli', 'Viscosity & Turbulence'], color: 'blue' },
  { title: 'Unit 2: Thermodynamics', topics: ['Temperature & Heat Transfer', 'Ideal Gas Law', 'Laws of Thermodynamics', 'Entropy & Heat Engines'], color: 'purple' },
  { title: 'Unit 3: Electric Force & Fields', topics: ['Coulomb\'s Law', 'Electric Fields', 'Gauss\'s Law', 'Electric Potential'], color: 'green' },
  { title: 'Unit 4–5: Circuits & Magnetism', topics: ['Ohm\'s Law & Circuits', 'RC Circuits', 'Magnetic Fields & Forces', 'Electromagnetic Induction'], color: 'amber' },
  { title: 'Unit 6–7: Optics & Modern Physics', topics: ['Geometric Optics', 'Wave Optics & Interference', 'Quantum Physics', 'Atomic & Nuclear Physics'], color: 'red' },
]

const unitColors: Record<string, string> = {
  blue: 'text-blue-700 dark:text-blue-400', purple: 'text-purple-700 dark:text-purple-400',
  green: 'text-green-700 dark:text-green-400', amber: 'text-amber-700 dark:text-amber-400',
  red: 'text-red-700 dark:text-red-400',
}
const checkColors: Record<string, string> = {
  blue: 'text-blue-500', purple: 'text-purple-500', green: 'text-green-500', amber: 'text-amber-500', red: 'text-red-500',
}

export default function APPhysics2Hub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP Physics 2',
        description: metadata.description as string,
        slug: 'ap-physics-2',
      })) }}
    />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AP Physics 2</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            126+ interactive lessons covering fluids, thermodynamics, electromagnetism, optics, and modern physics — everything you need to score a 5.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ap-physics2-diagnostic" className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">Start with Diagnostic</Link>
            <Link href="/courses/ap-physics-2" className="rounded-xl border-2 border-violet-300 px-8 py-3.5 text-lg font-semibold text-violet-700 transition hover:bg-violet-50 dark:border-violet-600 dark:text-violet-400 dark:hover:bg-violet-900/20">Browse Lessons</Link>
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
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">{f.title}</h3>
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
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">About the AP Physics 2 Exam</h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 40 MCQs in 90 minutes</li>
                <li>• Section II: 4 FRQs in 90 minutes</li>
                <li>• Algebra-based (no calculus required)</li>
                <li>• Total exam time: 3 hours</li>
                <li>• Calculator allowed</li>
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
            <Link href="/ap-physics2-diagnostic" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg">
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
