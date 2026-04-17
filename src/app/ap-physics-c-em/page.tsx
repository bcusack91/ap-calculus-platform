import Link from 'next/link'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: Electricity & Magnetism | Free Practice & Review',
  description:
    'Comprehensive AP Physics C: E&M preparation with diagnostic tests, FRQ practice, daily questions, score prediction, and competitive challenges. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-em' },
  openGraph: {
    title: 'AP Physics C: E&M | Free Practice & Review',
    description: 'Master AP Physics C: E&M with diagnostics, FRQ practice, and daily questions.',
    url: 'https://www.studymondo.com/ap-physics-c-em',
  },
}

const features = [
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all AP Physics C: E&M units to identify your strengths and weak areas with a personalized study plan.',
    href: '/ap-physics-c-em-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'FRQ Practice',
    description: 'Practice free-response questions with auto-grading, rubrics, and timed exam simulation. 50% of the AP exam.',
    href: '/ap-physics-c-em-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: '16 FRQs · Auto-graded · Timed',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time E&M question battles. Climb the leaderboard.',
    href: '/competitive/ap-physics-c-em',
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
    description: 'A fresh AP Physics C: E&M question every day covering different units. Build consistency.',
    href: '/ap-physics-c-em-daily-question',
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
    description: 'Estimate your AP Physics C: E&M exam score from your quiz performance and mastery data.',
    href: '/ap-physics-c-em-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 2 4-5" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: 'Live estimate · AP 1-5',
  },
  {
    title: 'Practice Test',
    description: 'Full-length timed multiple-choice practice exam covering all AP Physics C: E&M topics.',
    href: '/ap-physics-c-em-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
    stats: '30 questions · 45 min',
  },
  {
    title: 'Study Plans',
    description: 'Pre-built 4, 8, or 12-week study schedules tailored to your timeline and AP Physics C: E&M goals.',
    href: '/ap-physics-c-em-study-plans',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: '4 / 8 / 12 weeks',
  },
  {
    title: 'Flashcards',
    description: 'Review key formulas, laws, and concepts for every AP Physics C: E&M unit.',
    href: '/flashcards?course=ap-physics-c-em',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Formulas · Laws · Concepts',
  },
]

const units = [
  {
    title: 'Unit 1: Electrostatics',
    topics: ['Charge & Coulomb\'s Law', 'Electric Fields', 'Gauss\'s Law', 'Electric Potential'],
    color: 'amber',
  },
  {
    title: 'Unit 2: Conductors, Capacitors, Dielectrics',
    topics: ['Conductors & Charge Distribution', 'Capacitance', 'Energy in Capacitors', 'Dielectrics'],
    color: 'orange',
  },
  {
    title: 'Unit 3: Electric Circuits',
    topics: ['Current & Resistance', 'DC Circuits (Kirchhoff\'s Laws)', 'RC Circuits', 'Power & Energy'],
    color: 'red',
  },
  {
    title: 'Unit 4: Magnetic Fields',
    topics: ['Magnetic Forces on Charges & Wires', 'Biot-Savart Law', 'Ampère\'s Law', 'Magnetic Flux'],
    color: 'purple',
  },
  {
    title: 'Unit 5: Electromagnetism',
    topics: ['Faraday\'s Law', 'Lenz\'s Law', 'Inductance & LR Circuits', 'Maxwell\'s Equations'],
    color: 'indigo',
  },
]

const unitColors: Record<string, string> = {
  amber: 'text-amber-700 dark:text-amber-400',
  orange: 'text-orange-700 dark:text-orange-400',
  red: 'text-red-700 dark:text-red-400',
  purple: 'text-purple-700 dark:text-purple-400',
  indigo: 'text-indigo-700 dark:text-indigo-400',
}

const checkColors: Record<string, string> = {
  amber: 'text-amber-500',
  orange: 'text-orange-500',
  red: 'text-red-500',
  purple: 'text-purple-500',
  indigo: 'text-indigo-500',
}

export default function APPhysicsCEMHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP Physics C: E&M',
        description: metadata.description as string,
        slug: 'ap-physics-c-em',
      })) }}
    />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              AP Physics C: E&amp;M
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
            Calculus-based electricity &amp; magnetism — from electrostatics and circuits to magnetic fields and electromagnetic induction.
            Diagnostics, FRQ practice, daily questions, and competitive mode.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ap-physics-c-em-diagnostic" className="rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition">
              Take Diagnostic
            </Link>
            <Link href="/ap-physics-c-em-frq" className="rounded-xl border-2 border-amber-300 px-6 py-3 font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900/30 transition">
              FRQ Practice
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Everything You Need to Score a 5
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(f => (
              <Link key={f.title} href={f.href} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-700 dark:bg-gray-800">
                <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${f.color} p-3 text-white`}>{f.icon}</div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{f.description}</p>
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">{f.stats}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Units */}
      <section className="container pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">What You&apos;ll Master</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {units.map(u => (
              <div key={u.title} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={`mb-2 font-bold ${unitColors[u.color]}`}>{u.title}</h3>
                <ul className="space-y-1">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <svg className={`h-4 w-4 ${checkColors[u.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
