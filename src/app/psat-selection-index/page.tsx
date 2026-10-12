import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Table2 } from 'lucide-react'
import PsatSelectionIndexCalculator from '@/components/PsatSelectionIndexCalculator'
import { toolMetadata } from '@/lib/tool-metadata'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'
import {
  CURRENT_CUTOFFS,
  PREVIOUS_CUTOFFS,
  CUTOFF_REGIONS,
  CUTOFF_SOURCE,
  nationalRange,
} from '@/data/psat-cutoffs'

const PATH = '/psat-selection-index'
const range = nationalRange(CURRENT_CUTOFFS)

export const metadata: Metadata = toolMetadata({
  title: 'PSAT Selection Index Calculator + National Merit Cutoffs by State',
  description: `Free PSAT/NMSQT Selection Index calculator. Enter your Reading & Writing and Math scores to see your index (48–228) against your state's National Merit Semifinalist cutoff (class of ${CURRENT_CUTOFFS.classOf}: ${range.low}–${range.high}) and the ${CURRENT_CUTOFFS.commended} Commended cutoff.`,
  path: PATH,
})

const faqs = [
  {
    question: 'How is the PSAT Selection Index calculated?',
    answer:
      'Divide each section score by 10, double the Reading and Writing number, and add the Math number: Selection Index = 2 × (Reading and Writing ÷ 10) + (Math ÷ 10). Section scores run 160–760, so the index runs 48–228.',
  },
  {
    question: 'What Selection Index do I need to be a National Merit Semifinalist?',
    answer: `It depends on your state. For the class of ${CURRENT_CUTOFFS.classOf} (PSAT/NMSQT taken ${CURRENT_CUTOFFS.testTaken}), state Semifinalist cutoffs ranged from ${range.low} to ${range.high}. The national Commended cutoff was ${CURRENT_CUTOFFS.commended}.`,
  },
  {
    question: 'Do the cutoffs change every year?',
    answer: `Yes. National Merit sets new state cutoffs each year once all scores are in, and they usually move by a few points. The class of ${PREVIOUS_CUTOFFS.classOf} Commended cutoff was ${PREVIOUS_CUTOFFS.commended}; for the class of ${CURRENT_CUTOFFS.classOf} it was ${CURRENT_CUTOFFS.commended}. Treat the latest cutoffs as a guide, not a guarantee.`,
  },
  {
    question: 'Which PSAT counts for National Merit?',
    answer:
      'Only the PSAT/NMSQT you take in the fall of your junior year (11th grade) counts toward the National Merit Scholarship Program. Earlier PSATs are good practice but do not enter you in the competition.',
  },
]

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'PSAT Selection Index Calculator',
  url: `https://www.studymondo.com${PATH}`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: metadata.description,
}

export default function PsatSelectionIndexPage() {
  const jsonLd = [
    appJsonLd,
    faqJsonLd(faqs),
    breadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'PSAT/NMSQT', url: '/psat' },
      { name: 'Selection Index Calculator', url: PATH },
    ]),
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/psat" className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">PSAT/NMSQT</Link>
          <span aria-hidden> / </span>
          <span className="text-gray-700 dark:text-gray-300">Selection Index Calculator</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          PSAT Selection Index Calculator
        </h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          National Merit doesn&rsquo;t use your 320&ndash;1520 PSAT total. It uses the <strong>Selection Index</strong>, which
          counts Reading &amp; Writing twice. Enter your section scores and state to see where you stand against the most
          recent published cutoffs.
        </p>

        <div className="mt-6">
          <PsatSelectionIndexCalculator />
        </div>

        <section className="mt-10" aria-labelledby="how-title">
          <h2 id="how-title" className="text-xl font-bold text-gray-900 dark:text-white">How the Selection Index works</h2>
          <div className="mt-3 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Selection Index = 2 × (Reading &amp; Writing ÷ 10) + (Math ÷ 10).</strong> A student with 700 in
              Reading &amp; Writing and 720 in Math has an index of 2 × 70 + 72 = 212.
            </p>
            <p>
              Because Reading &amp; Writing is doubled, 10 more points there add 2 to your index, while 10 more Math points
              add 1. Each section runs 160&ndash;760, so the index runs 48&ndash;228.
            </p>
            <p>
              Each fall National Merit names about 50,000 high scorers. Roughly the top third of them become Semifinalists,
              chosen state by state, so every state has its own cutoff. The rest who clear the single national
              Commended cutoff are named Commended Students.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="cutoffs-title">
          <h2 id="cutoffs-title" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <Table2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden />
            National Merit Semifinalist cutoffs by state
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Cutoffs change every year; these are the most recent published. Class of {CURRENT_CUTOFFS.classOf} = PSAT/NMSQT
            taken {CURRENT_CUTOFFS.testTaken} (released {CURRENT_CUTOFFS.released}). Class of {PREVIOUS_CUTOFFS.classOf} =
            PSAT/NMSQT taken {PREVIOUS_CUTOFFS.testTaken}. Commended: {CURRENT_CUTOFFS.commended} (class of {CURRENT_CUTOFFS.classOf}),{' '}
            {PREVIOUS_CUTOFFS.commended} (class of {PREVIOUS_CUTOFFS.classOf}).
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <caption className="sr-only">Semifinalist Selection Index cutoffs by state, latest two classes</caption>
              <thead className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">State</th>
                  <th scope="col" className="px-3 py-2 text-right font-semibold">Class of {CURRENT_CUTOFFS.classOf}</th>
                  <th scope="col" className="px-3 py-2 text-right font-semibold">Class of {PREVIOUS_CUTOFFS.classOf}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                {CUTOFF_REGIONS.map((r) => (
                  <tr key={r.key}>
                    <th scope="row" className="px-3 py-1.5 font-medium text-gray-800 dark:text-gray-200">{r.name}</th>
                    <td className="px-3 py-1.5 text-right tabular-nums text-gray-900 dark:text-white">{CURRENT_CUTOFFS.semifinalist[r.key] ?? '—'}</td>
                    <td className="px-3 py-1.5 text-right tabular-nums text-gray-600 dark:text-gray-400">{PREVIOUS_CUTOFFS.semifinalist[r.key] ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Source: National Merit Scholarship Corporation state cutoffs as compiled by{' '}
            <a href={CUTOFF_SOURCE.url} rel="noopener noreferrer" target="_blank" className="underline hover:text-gray-700 dark:hover:text-gray-200">
              Compass Education Group
            </a>
            . Boarding-school students are grouped by region and not listed.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-xl font-bold text-gray-900 dark:text-white">Frequently asked questions</h2>
          <dl className="mt-3 space-y-4">
            {faqs.map((f) => (
              <div key={f.question}>
                <dt className="font-semibold text-gray-900 dark:text-white">{f.question}</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/psat-practice"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            Take a free PSAT practice test
            <ArrowRight className="h-4 w-4 text-indigo-600 transition group-hover:translate-x-0.5 dark:text-indigo-400" aria-hidden />
          </Link>
          <Link
            href="/psat"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            All PSAT/NMSQT prep tools
            <ArrowRight className="h-4 w-4 text-indigo-600 transition group-hover:translate-x-0.5 dark:text-indigo-400" aria-hidden />
          </Link>
          <Link
            href="/sat-diagnostic"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            Free diagnostic: find your weak areas
            <ArrowRight className="h-4 w-4 text-indigo-600 transition group-hover:translate-x-0.5 dark:text-indigo-400" aria-hidden />
          </Link>
          <Link
            href="/sat/digital-sat-guide"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            Digital SAT and PSAT strategy guide
            <ArrowRight className="h-4 w-4 text-indigo-600 transition group-hover:translate-x-0.5 dark:text-indigo-400" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  )
}
