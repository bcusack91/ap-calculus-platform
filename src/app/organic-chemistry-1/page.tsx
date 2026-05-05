import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry 1 | Free OChem 1 Practice & Score Predictor',
  description:
    'Master Organic Chemistry 1 — first-semester organic. Structure & bonding, stereochemistry, SN1/SN2/E1/E2, alkene/alkyne/radical reactions, alcohols, IR/MS/NMR. Includes a 1–5 AP-equivalent score predictor.',
  alternates: { canonical: 'https://www.studymondo.com/organic-chemistry-1' },
  openGraph: {
    title: 'Organic Chemistry 1',
    description: 'AP-equivalent rigor across the full first-semester organic curriculum, with a 1–5 score predictor.',
    url: 'https://www.studymondo.com/organic-chemistry-1',
  },
}

const features = [
  { title: 'Interactive Lessons', description: 'Step-by-step coverage of all 13 OChem 1 topics with mechanism walkthroughs and worked examples.', href: '/courses/organic-chemistry-1', stats: '5 units · 13 topics', color: 'from-lime-500 to-emerald-500', icon: '📘' },
  { title: 'Diagnostic Test', description: 'Benchmark your performance across the OChem 1 curriculum and surface the topics to prioritize.', href: '/ochem-diagnostic', stats: '~30 questions · 25 min', color: 'from-blue-500 to-indigo-500', icon: '🎯' },
  { title: 'AP-Equivalent Score Predictor', description: 'Convert your quiz performance and topic mastery into an AP-equivalent 1–5 score, the way AP Chemistry students are scored.', href: '/ochem1-score-predictor', stats: '1–5 scale · live updates', color: 'from-emerald-500 to-teal-500', icon: '⭐' },
  { title: 'Flashcards', description: 'Reagents, named reactions, and key spectroscopy data for OChem 1.', href: '/flashcards?course=organic-chemistry-1', stats: 'Reagents · Named reactions', color: 'from-purple-500 to-pink-500', icon: '🃏' },
  { title: 'Daily Question', description: 'A fresh organic question every day — keep mechanisms sharp.', href: '/ochem-daily-question', stats: 'New daily', color: 'from-rose-500 to-pink-500', icon: '📅' },
  { title: 'Exit Quizzes', description: 'Per-lesson assessments confirm mastery before you advance.', href: '/courses/organic-chemistry-1', stats: 'Per topic · Instant feedback', color: 'from-cyan-500 to-blue-500', icon: '✅' },
]

const units = [
  { title: 'Unit 1 · Structure, Bonding & Acid-Base', topics: ['Atomic structure & hybridization', 'Lewis structures & resonance', 'Molecular representations & IMFs', 'Organic acids and bases (pKa, factors affecting acidity)'], color: 'lime' },
  { title: 'Unit 2 · Alkanes & Stereochemistry', topics: ['Alkane / cycloalkane nomenclature', 'Newman projections & cyclohexane chairs', 'Chirality, R/S, optical activity', 'Enantiomers, diastereomers, meso'], color: 'emerald' },
  { title: 'Unit 3 · Substitution & Elimination', topics: ['SN2 vs SN1 (substrate, Nu, LG, solvent)', 'E2 vs E1 (Zaitsev, Hofmann, anti-periplanar)', 'SN/E decision framework'], color: 'green' },
  { title: 'Unit 4 · Alkenes, Alkynes & Radicals', topics: ['Electrophilic addition; Markovnikov / anti-Markovnikov', 'Hydroboration-oxidation, ozonolysis, epoxidation', 'Acetylide chemistry; Lindlar / Na-NH₃', 'Radical halogenation & NBS'], color: 'teal' },
  { title: 'Unit 5 · Alcohols, Ethers & Spectroscopy', topics: ['Grignards, dehydration, oxidation', 'Williamson ether synthesis & epoxide opening', 'IR & mass spectrometry', '¹H and ¹³C NMR fundamentals'], color: 'cyan' },
]

const colorClasses: Record<string, { text: string; check: string }> = {
  lime: { text: 'text-lime-700 dark:text-lime-400', check: 'text-lime-500' },
  emerald: { text: 'text-emerald-700 dark:text-emerald-400', check: 'text-emerald-500' },
  green: { text: 'text-green-700 dark:text-green-400', check: 'text-green-500' },
  teal: { text: 'text-teal-700 dark:text-teal-400', check: 'text-teal-500' },
  cyan: { text: 'text-cyan-700 dark:text-cyan-400', check: 'text-cyan-500' },
}

export default function OrganicChemistry1Hub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
          title: 'Organic Chemistry 1',
          description: metadata.description as string,
          slug: 'organic-chemistry-1',
        })) }}
      />
      <CourseUniqueIntro slug="organic-chemistry-1" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-1.5 text-sm font-semibold text-lime-700 dark:bg-lime-900/40 dark:text-lime-300">
            <span>🎓</span> First-semester organic chemistry · AP-equivalent rigor
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">Organic Chemistry 1</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            First-semester organic chemistry at AP-equivalent rigor — structure & bonding, stereochemistry, substitution & elimination,
            alkene/alkyne/radical reactions, alcohols, and 1D spectroscopy. Includes a <strong>1–5 AP-equivalent score predictor</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ochem-diagnostic" className="rounded-xl bg-gradient-to-r from-lime-600 to-emerald-600 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">Start with Diagnostic</Link>
            <Link href="/ochem1-score-predictor" className="rounded-xl border-2 border-emerald-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20">View 1–5 Score Predictor</Link>
            <Link href="/courses/organic-chemistry-1" className="rounded-xl border-2 border-lime-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-lime-700 transition hover:bg-lime-50 dark:border-lime-600 dark:text-lime-400 dark:hover:bg-lime-900/20">Browse Lessons</Link>
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Continuing the sequence? <Link href="/organic-chemistry-2" className="font-semibold text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400">Jump to Organic Chemistry 2 →</Link>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <Link key={f.title} href={f.href} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-2xl text-white ${f.color}`}>{f.icon}</div>
                <span className="text-xs font-medium text-gray-400">{f.stats}</span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </Link>
          ))}
        </div></div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">Organic Chemistry 1 Curriculum</h2>
          <p className="mb-6 text-center text-sm text-gray-500 dark:text-gray-400">5 units · 13 topics · ~90 interactive lesson parts</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {units.map(u => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={`mb-4 text-lg font-bold ${colorClasses[u.color].text}`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${colorClasses[u.color].check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">About the AP-Equivalent Score (1–5)</h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Organic Chemistry isn&apos;t an official AP subject, but Organic Chemistry 1 is taught at AP-equivalent depth. The score predictor blends
            <strong> 70% quiz performance</strong> and <strong>30% topic mastery rate</strong> and maps the result onto the same 1–5 scale used for AP Chemistry —
            so you can intuit your standing the way you would for any other AP science.
          </p>
          <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2 dark:text-gray-300">
            <li>• <strong>5</strong> — Top performance (≥ 85%): on track for honors-level mastery.</li>
            <li>• <strong>4</strong> — Strong (≥ 70%): solid grasp; refine weak topics.</li>
            <li>• <strong>3</strong> — Passing (≥ 55%): foundational understanding; rebuild a few units.</li>
            <li>• <strong>2</strong> — Below passing (≥ 35%): focused remediation needed.</li>
            <li>• <strong>1</strong> — Beginning (&lt; 35%): work through the lessons end-to-end.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
