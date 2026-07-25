import Link from 'next/link'
import { InArticleAd } from '@/components/ad-banner'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'
import CourseToolGrid from '@/components/CourseToolGrid'

export const metadata: Metadata = {
  title: 'Organic Chemistry — OChem 1 & 2 with AP-Equivalent Score Predictor',
  description:
    'A two-course Organic Chemistry sequence with AP-equivalent rigor and a 1–5 score predictor. Choose Organic Chemistry 1 or 2 to start.',
  alternates: { canonical: 'https://www.studymondo.com/organic-chemistry' },
  openGraph: {
    title: 'Organic Chemistry — OChem 1 & 2',
    description: 'Organic Chemistry 1 and 2 with an AP-equivalent 1–5 score predictor.',
    url: 'https://www.studymondo.com/organic-chemistry',
  },
}

export default function OrganicChemistryChooser() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
          title: 'Organic Chemistry — OChem 1 & 2',
          description: metadata.description as string,
          slug: 'organic-chemistry',
        })) }}
      />

      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-1.5 text-sm font-semibold text-lime-700 dark:bg-lime-900/40 dark:text-lime-300">
            <span>🎓</span> Two-course college-level sequence · AP-equivalent rigor
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            <span className="bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Organic Chemistry</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Pick the semester you&apos;re studying. Both courses include interactive lessons, exit quizzes, flashcards, a diagnostic test, and an
            <strong> AP-equivalent 1–5 score predictor</strong> so you can benchmark progress the same way AP students do.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          <Link href="/organic-chemistry-1" className="group rounded-3xl border-2 border-lime-200 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-lime-800 dark:bg-gray-800">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-lime-500 to-emerald-500 text-3xl text-white">⚗️</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">First semester</p>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">Organic Chemistry 1</h2>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Structure, bonding, stereochemistry, SN1/SN2/E1/E2, alkene/alkyne/radical reactions, alcohols, and 1D spectroscopy (IR, MS, NMR).
            </p>
            <ul className="mb-5 grid grid-cols-2 gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <li>• 5 units · 13 topics</li>
              <li>• ~90 lesson parts</li>
              <li>• Mechanism walkthroughs</li>
              <li>• 1–5 score predictor</li>
            </ul>
            <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-lime-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow group-hover:shadow-lg">
              Start OChem 1 →
            </span>
          </Link>

          <Link href="/organic-chemistry-2" className="group rounded-3xl border-2 border-emerald-200 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-emerald-800 dark:bg-gray-800">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-3xl text-white">🧪</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Second semester</p>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">Organic Chemistry 2</h2>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Aromatics & EAS/NAS, pericyclic reactions, full carbonyl & acyl substitution, enolate condensations (aldol/Claisen/Michael/Robinson),
              biomolecules, advanced 2D NMR, and full retrosynthetic planning.
            </p>
            <ul className="mb-5 grid grid-cols-2 gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <li>• 6 units · 17 topics</li>
              <li>• Pericyclic & retrosynthesis</li>
              <li>• 2D NMR (COSY/HSQC/HMBC)</li>
              <li>• 1–5 score predictor</li>
            </ul>
            <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow group-hover:shadow-lg">
              Start OChem 2 →
            </span>
          </Link>
        </div>

        {/* In-article ad — single, mid-page placement after the course-choice cards */}
        <div className="mx-auto mt-10 max-w-5xl">
          <InArticleAd />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Not sure which one to pick?</h3>
          <ul className="space-y-1">
            <li>• Just starting organic? → <Link href="/organic-chemistry-1" className="font-semibold text-lime-600 hover:underline">Organic Chemistry 1</Link></li>
            <li>• Already comfortable with SN/E and basic spectroscopy? → <Link href="/organic-chemistry-2" className="font-semibold text-emerald-600 hover:underline">Organic Chemistry 2</Link></li>
            <li>• Want a baseline first? → <Link href="/ochem-diagnostic" className="font-semibold text-blue-600 hover:underline">Take the diagnostic</Link> — it covers both.</li>
          </ul>
        </div>
      </section>
      <CourseToolGrid courseSlug="organic-chemistry" />
    </div>
  )
}
