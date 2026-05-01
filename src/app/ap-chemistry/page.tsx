import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Chemistry | Free AP Chem Practice & Review',
  description:
    'Comprehensive AP Chemistry preparation with 245+ interactive lessons, diagnostic tests, flashcards, daily questions, and competitive challenges. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chemistry' },
  openGraph: {
    title: 'AP Chemistry | Free AP Chem Practice & Review',
    description: 'Master AP Chemistry with 245+ interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/ap-chemistry',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons for every AP Chem unit with practice problems, molecular visualizations, and exit quizzes.',
    href: '/courses/ap-chemistry',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-teal-500 to-cyan-500',
    stats: '245+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all AP Chem units to identify your strengths and weak areas with a personalized study plan.',
    href: '/ap-chem-diagnostic',
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
    description: 'Drill a single AP unit at a time. 9 units · 4 different variations each — perfect for end-of-unit review.',
    href: '/ap-chem-unit-tests',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
    stats: '9 units · 4 variations',
  },
  {
    title: 'Flashcards',
    description: 'Review chemical reactions, formulas, periodic trends, and key AP Chemistry vocabulary.',
    href: '/flashcards?course=ap-chemistry',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Reactions · Formulas · Trends',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time chemistry question battles. Climb the leaderboard.',
    href: '/competitive/ap-chemistry',
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
    description: 'A fresh AP Chemistry question every day covering different units. Build consistency.',
    href: '/ap-chem-daily-question',
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
    href: '/courses/ap-chemistry?exitQuiz=true',
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
    href: '/ap-chem-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: '13 FRQs · Auto-graded · Timed',
  },
  {
    title: 'Full Practice Exam',
    description: 'Complete AP Chemistry exam simulation: 60 MCQ (90 min) + 7 FRQ (105 min) with scoring.',
    href: '/ap-chem-full-exam',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    color: 'from-red-500 to-rose-500',
    stats: '3hr 15min · Full exam · AP score',
  },
  {
    title: 'Virtual Labs',
    description: 'Interactive simulations for titration curves and calorimetry experiments with real-time data.',
    href: '/ap-chem-labs',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-emerald-500 to-green-500',
    stats: 'Titration · Calorimetry',
  },
  {
    title: 'Periodic Table',
    description: 'Interactive periodic table with trend visualization, element details, and AP Chemistry relevance notes.',
    href: '/periodic-table',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
    stats: '36 elements · Trends · Details',
  },
]

const units = [
  { title: 'Unit 1: Atomic Structure & Properties', topics: ['Atomic Models', 'Electron Configuration', 'Periodic Trends', 'Isotopes & Mass Spectrometry'], color: 'teal' },
  { title: 'Unit 2–3: Bonding & Intermolecular Forces', topics: ['Ionic & Covalent Bonds', 'Lewis Structures', 'VSEPR Theory', 'Intermolecular Forces'], color: 'blue' },
  { title: 'Unit 4–5: Reactions & Kinetics', topics: ['Stoichiometry', 'Types of Reactions', 'Reaction Rates', 'Rate Laws & Mechanisms'], color: 'purple' },
  { title: 'Unit 6–7: Thermodynamics & Equilibrium', topics: ['Enthalpy & Hess\'s Law', 'Gibbs Free Energy', 'Le Chatelier\'s Principle', 'Ksp & Solubility'], color: 'green' },
  { title: 'Unit 8–9: Acids/Bases & Electrochemistry', topics: ['pH & pOH', 'Strong vs Weak Acids', 'Buffers & Titrations', 'Galvanic & Electrolytic Cells'], color: 'amber' },
]

const unitColors: Record<string, string> = {
  teal: 'text-teal-700 dark:text-teal-400', blue: 'text-blue-700 dark:text-blue-400',
  purple: 'text-purple-700 dark:text-purple-400', green: 'text-green-700 dark:text-green-400',
  amber: 'text-amber-700 dark:text-amber-400',
}
const checkColors: Record<string, string> = {
  teal: 'text-teal-500', blue: 'text-blue-500', purple: 'text-purple-500', green: 'text-green-500', amber: 'text-amber-500',
}

export default function APChemistryHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP Chemistry',
        description: metadata.description as string,
        slug: 'ap-chemistry',
      })) }}
    />
      <CourseUniqueIntro slug="ap-chemistry" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">AP Chemistry</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            245+ interactive lessons, diagnostic assessments, flashcards, daily questions, and competitive challenges — everything you need to score a 5.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ap-chem-diagnostic" className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">Start with Diagnostic</Link>
            <Link href="/courses/ap-chemistry" className="rounded-xl border-2 border-teal-300 px-8 py-3.5 text-lg font-semibold text-teal-700 transition hover:bg-teal-50 dark:border-teal-600 dark:text-teal-400 dark:hover:bg-teal-900/20">Browse Lessons</Link>
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
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">{f.title}</h3>
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
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">About the AP Chemistry Exam</h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 60 MCQs in 90 minutes</li>
                <li>• Section II: 7 FRQs in 105 minutes</li>
                <li>• 3 long FRQs + 4 short FRQs</li>
                <li>• Total exam time: 3 hours 15 minutes</li>
                <li>• Calculator allowed on FRQs</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Score range: 1–5</li>
                <li>• 5 = Extremely well qualified</li>
                <li>• ~12% of students score a 5</li>
                <li>• No penalty for guessing</li>
                <li>• Most colleges accept 4+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/ap-chem-diagnostic" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg">
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
