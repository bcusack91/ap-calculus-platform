import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry | Free OChem Practice & Review',
  description:
    'Comprehensive Organic Chemistry preparation with 140+ interactive lessons, flashcards, daily questions, and competitive challenges. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/organic-chemistry' },
  openGraph: {
    title: 'Organic Chemistry | Free OChem Practice & Review',
    description: 'Master Organic Chemistry with 140+ interactive lessons, reaction mechanisms, and daily practice.',
    url: 'https://www.studymondo.com/organic-chemistry',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering functional groups, reaction mechanisms, stereochemistry, spectroscopy, and synthesis.',
    href: '/courses/organic-chemistry',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-fuchsia-500 to-purple-500',
    stats: '140+ lessons · All topics',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all OChem topics to identify your strengths and weak areas.',
    href: '/ochem-diagnostic',
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
    description: 'Review functional groups, named reactions, reagents, spectroscopy data, and key mechanisms.',
    href: '/flashcards',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Reagents · Reactions · Groups',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time organic chemistry battles. Test your reaction knowledge.',
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
    description: 'A fresh Organic Chemistry question every day. Build consistency with daily practice.',
    href: '/ochem-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All topics',
  },
  {
    title: 'Exit Quizzes',
    description: 'Short assessments after each lesson to confirm understanding before moving on.',
    href: '/courses/organic-chemistry',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: 'Per-topic · Instant feedback',
  },
]

const topics = [
  { title: 'Foundations & Structure', topics: ['Bonding & Hybridization', 'Lewis Structures & Resonance', 'Functional Groups', 'Nomenclature (IUPAC)', 'Stereochemistry & Chirality'], color: 'fuchsia' },
  { title: 'Reactions: Substitution & Elimination', topics: ['SN1 & SN2 Mechanisms', 'E1 & E2 Mechanisms', 'Carbocation Stability', 'Leaving Groups', 'Solvent Effects'], color: 'blue' },
  { title: 'Reactions: Addition & Oxidation', topics: ['Alkene Additions', 'Hydroboration-Oxidation', 'Epoxidation', 'Oxidation & Reduction', 'Organometallic Reactions'], color: 'purple' },
  { title: 'Spectroscopy & Synthesis', topics: ['IR Spectroscopy', 'NMR (¹H and ¹³C)', 'Mass Spectrometry', 'Retrosynthetic Analysis', 'Multi-Step Synthesis'], color: 'green' },
]

const topicColors: Record<string, string> = {
  fuchsia: 'text-fuchsia-700 dark:text-fuchsia-400', blue: 'text-blue-700 dark:text-blue-400',
  purple: 'text-purple-700 dark:text-purple-400', green: 'text-green-700 dark:text-green-400',
}
const checkColors: Record<string, string> = {
  fuchsia: 'text-fuchsia-500', blue: 'text-blue-500', purple: 'text-purple-500', green: 'text-green-500',
}

export default function OrganicChemistryHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fuchsia-100 px-4 py-1.5 text-sm font-semibold text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Organic Chemistry</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            140+ interactive lessons covering functional groups, reaction mechanisms, stereochemistry, spectroscopy, and synthesis — completely free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ochem-diagnostic" className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">Start with Diagnostic</Link>
            <Link href="/courses/organic-chemistry" className="rounded-xl border-2 border-fuchsia-300 px-8 py-3.5 text-lg font-semibold text-fuchsia-700 transition hover:bg-fuchsia-50 dark:border-fuchsia-600 dark:text-fuchsia-400 dark:hover:bg-fuchsia-900/20">Browse Lessons</Link>
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
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-fuchsia-600 dark:text-white dark:group-hover:text-fuchsia-400">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </Link>
          ))}
        </div></div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">What&apos;s Covered</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {topics.map(u => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={`mb-4 text-lg font-bold ${topicColors[u.color]}`}>{u.title}</h3>
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
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">About Organic Chemistry</h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Course Overview</h4>
              <ul className="space-y-1">
                <li>• Typically a 2-semester college course</li>
                <li>• Required for pre-med, chemistry, biology</li>
                <li>• Heavy emphasis on mechanisms</li>
                <li>• Spectroscopy interpretation is key</li>
                <li>• Tested on the MCAT (Chem/Phys section)</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Study Tips</h4>
              <ul className="space-y-1">
                <li>• Practice mechanisms daily</li>
                <li>• Understand electron flow (arrows)</li>
                <li>• Build a reaction roadmap</li>
                <li>• Use molecular models for 3D</li>
                <li>• Flashcards for reagents & products</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/courses/organic-chemistry" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg">
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
