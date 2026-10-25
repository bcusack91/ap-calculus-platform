// Public AFQT calculator (SEO page). Server-rendered copy + FAQ JSON-LD; the
// interactive calculator is the client component next to it. Every number on
// this page comes from asvab-pipeline/ASVAB-FACTS.md via src/lib/asvab-scoring.ts.
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'
import {
  AFQT_CATEGORIES,
  BRANCH_MINIMUMS,
  BRANCH_MINIMUMS_AS_OF,
  afqtFromStandardScores,
  afqtPercentileFromRaw,
} from '@/lib/asvab-scoring'
import AfqtCalculator from './AfqtCalculator'

const PATH = '/asvab-afqt-calculator'
const example = afqtFromStandardScores({ WK: 55, PC: 52, AR: 48, MK: 50 })
const diplomaMins = BRANCH_MINIMUMS.filter((b) => b.diploma != null)

const faqs = [
  {
    question: 'How is the AFQT score calculated?',
    answer:
      'The AFQT uses four of the ten ASVAB subtests. Word Knowledge and Paragraph Comprehension are blended into a Verbal Expression (VE) score, with Word Knowledge weighted more heavily. Your AFQT raw score is Arithmetic Reasoning + Mathematics Knowledge + 2 × VE, all as standard scores, and that sum is converted to a percentile from 1 to 99 using the official 1997-scale conversion table.',
  },
  {
    question: 'Is the AFQT the percent of questions I got right?',
    answer:
      'No. The AFQT is a percentile: it compares you with a national sample of about 6,000 people aged 18 to 23 who took the ASVAB in 1997 (the norms used since 2004). An AFQT of 50 means you scored as well as or better than 50% of that group.',
  },
  {
    question: 'What AFQT score do I need to join the military?',
    answer: `As of ${BRANCH_MINIMUMS_AS_OF}, the published minimum with a high school diploma is ${diplomaMins.map((b) => `${b.branch} ${b.diploma}`).join(', ')}. The Air Force publishes 50 for GED holders, and the Space Force does not publish a number. Minimums change often, so confirm with a recruiter.`,
  },
  {
    question: 'What are the AFQT categories?',
    answer: `Category ${AFQT_CATEGORIES.map((c) => `${c.id} is ${c.min}-${c.max}`).join(', ')}. Category V is not eligible to enlist, and federal law limits how many Category IV recruits each service can take in a year.`,
  },
  {
    question: 'Can I turn practice-test percent correct into an exact AFQT?',
    answer:
      'Not exactly. The CAT-ASVAB is adaptive: your standard score depends on which questions you answered correctly, not just how many, and no public table converts a number right into a standard score. That is why the practice mode on this page shows an estimated range. Scores from a real ASVAB score report give an exact result.',
  },
  {
    question: 'What are line scores?',
    answer:
      'Line scores (composites) are other combinations of subtests that each service uses to decide which jobs you qualify for. For example, the Army GT score is AR + VE, the Marine Corps GT adds Mechanical Comprehension, and the Air Force reports Mechanical, Administrative, General and Electronics (MAGE) percentiles.',
  },
]

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ASVAB AFQT Score Calculator',
  url: `https://www.studymondo.com${PATH}`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free AFQT calculator: turn ASVAB Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning and Mathematics Knowledge scores into an AFQT percentile, category and line-score estimates.',
}

const ANCHORS = [160, 183, 200, 202, 215, 230, 249, 260]

export default function AsvabAfqtCalculatorPage() {
  const jsonLd = [
    appJsonLd,
    faqJsonLd(faqs),
    breadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'ASVAB', url: '/asvab' },
      { name: 'AFQT Calculator', url: PATH },
    ]),
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/asvab" className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600">ASVAB</Link>
          <span aria-hidden> / </span>
          <span className="text-gray-700 dark:text-gray-300">AFQT Calculator</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">ASVAB AFQT Calculator</h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          Your AFQT decides whether you can enlist. It comes from four ASVAB subtests: Word Knowledge, Paragraph
          Comprehension, Arithmetic Reasoning and Mathematics Knowledge. Enter your standard scores for an exact
          percentile, or your practice-test percent correct for an estimated range, and see which branch minimums you clear.
        </p>

        <div className="mt-6">
          <AfqtCalculator />
        </div>

        <section className="mt-10" aria-labelledby="how-title">
          <h2 id="how-title" className="text-xl font-bold text-gray-900 dark:text-white">How the AFQT is calculated</h2>
          <div className="mt-3 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <p>
              Every ASVAB subtest is reported as a <strong>standard score</strong> with an average of 50 and a standard
              deviation of 10. About half of the reference group scores 50 or higher and about 16% score 60 or higher.
            </p>
            <p>
              <strong>Step 1: Verbal Expression (VE).</strong> Word Knowledge and Paragraph Comprehension are combined into
              VE. It is a weighted blend, not a plain sum: Paragraph Comprehension counts about 0.62 as much as Word
              Knowledge, and the result is put back on the 50/10 scale.
            </p>
            <p>
              <strong>Step 2: AFQT raw score = AR + MK + 2 × VE.</strong> Verbal skills count twice, which is why Word
              Knowledge and Paragraph Comprehension practice pays off so much.
            </p>
            <p>
              <strong>Step 3: convert to a percentile.</strong> The raw score is looked up in the official 1997-scale
              conversion table (Defense Manpower Data Center, 2004). The AFQT runs from 1 to 99.
            </p>
            <p>
              <strong>Example:</strong> WK 55, PC 52, AR 48 and MK 50 give VE {example.ve}, a raw score of 48 + 50 + 2 × {example.ve} ={' '}
              {example.raw}, and an AFQT of <strong>{example.percentile}</strong> (Category {example.category}).
            </p>
          </div>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full min-w-[18rem] text-left text-sm">
              <caption className="sr-only">Selected AFQT raw scores and their percentiles</caption>
              <thead className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr><th scope="col" className="px-3 py-2">AFQT raw score (AR + MK + 2·VE)</th><th scope="col" className="px-3 py-2 text-right">AFQT percentile</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                {ANCHORS.map((raw) => (
                  <tr key={raw}>
                    <td className="px-3 py-1.5 tabular-nums text-gray-800 dark:text-gray-200">{raw}{raw === 200 ? ' (every subtest at 50)' : ''}</td>
                    <td className="px-3 py-1.5 text-right tabular-nums text-gray-900 dark:text-white">{afqtPercentileFromRaw(raw)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="cat-title">
          <h2 id="cat-title" className="text-xl font-bold text-gray-900 dark:text-white">AFQT categories</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full min-w-[16rem] text-left text-sm">
              <caption className="sr-only">AFQT categories and percentile ranges</caption>
              <thead className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr><th scope="col" className="px-3 py-2">Category</th><th scope="col" className="px-3 py-2 text-right">AFQT percentile</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                {AFQT_CATEGORIES.map((c) => (
                  <tr key={c.id}><th scope="row" className="px-3 py-1.5 font-medium text-gray-800 dark:text-gray-200">{c.id}</th><td className="px-3 py-1.5 text-right tabular-nums">{c.min}–{c.max}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Category V is not eligible to enlist. Federal law limits Category IV recruits (AFQT 10–30) to 4% of a
            service&apos;s enlistees in a year (the Secretary of Defense can raise that to 20%). Services group the IV range in their own ways.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="min-title">
          <h2 id="min-title" className="text-xl font-bold text-gray-900 dark:text-white">Minimum AFQT by branch</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {BRANCH_MINIMUMS.map((b) => (
              <li key={b.branch}>
                <strong>{b.branch}:</strong> {b.diploma != null ? `${b.diploma} with a high school diploma` : 'no AFQT number published'}
                {b.ged != null ? `; ${b.ged} with a GED` : ''}. {b.note}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Published figures as of {BRANCH_MINIMUMS_AS_OF}. Minimums change with recruiting needs: confirm with a recruiter.</p>
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
          {[
            { href: '/asvab-diagnostic', label: 'Free ASVAB diagnostic: get an AFQT estimate' },
            { href: '/asvab', label: 'Full ASVAB course: all 10 subtests' },
            { href: '/asvab-study-plans', label: '4, 8 and 12-week ASVAB study plans' },
            { href: '/asvab-daily-question', label: 'ASVAB question of the day' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              {l.label}
              <ArrowRight className="h-4 w-4 text-green-700 transition group-hover:translate-x-0.5 dark:text-green-400" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
      <ToolPageSeoBody subjectName="ASVAB" />
    </div>
  )
}
