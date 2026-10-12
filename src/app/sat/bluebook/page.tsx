import type { Metadata } from 'next'
import BluebookCompanion from '@/components/BluebookCompanion'
import {
  FaqList,
  GuideBreadcrumb,
  GuideLinks,
  GuideSection,
  TrademarkNote,
  guideArticleJsonLd,
  guideMetadata,
} from '@/components/SatGuideParts'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'
import { SAT_DOMAINS } from '@/lib/sat-domains'

// Static shell: everything personal (the form, the plan) loads client-side in
// BluebookCompanion, so this page prerenders with no session or database.

const PATH = '/sat/bluebook'
const PUBLISHED = '2026-10-12'
const TITLE = 'Bluebook Practice Test Score Report to SAT Study Plan'
const DESCRIPTION =
  'Took a Bluebook practice test? Log your score report, including the eight Knowledge and Skills domains, and get a free plan: focused practice sets and lessons for your weakest SAT domains.'

export const metadata: Metadata = guideMetadata({ title: `${TITLE} | Study Mondo`, description: DESCRIPTION, path: PATH, published: PUBLISHED })

const faqs = [
  {
    question: 'Is StudyMondo part of College Board or Bluebook?',
    answer:
      'No. Bluebook is College Board’s official testing app, and its practice tests are the best preview of test day. StudyMondo is an independent study site that works alongside it: you take the official practice test in Bluebook, then log the results here to decide what to study next.',
  },
  {
    question: 'Where do I find my Knowledge and Skills bands?',
    answer:
      'On your practice test score report. Below your total and section scores, the Knowledge and Skills section shows a bar for each of the eight content domains, four in Reading and Writing and four in Math. Count the filled segments in each bar (1 to 7) and enter that number.',
  },
  {
    question: 'Do I have to enter the domain bands?',
    answer:
      'No. With only your total and section scores, the plan starts with the most heavily tested domains of your lower section. With the bands it can point at the exact domains that cost you points, so enter them if you can.',
  },
  {
    question: 'How often should I take a Bluebook practice test?',
    answer:
      'Leave room to study in between. StudyMondo counts a logged Bluebook test as a full-length: your readiness bar starts over, and it fills as you finish two study cycles (a diagnostic plus the lessons it recommends). When it is full, take the next one.',
  },
]

export default function SatBluebookPage() {
  const jsonLd = [
    guideArticleJsonLd({ title: TITLE, description: DESCRIPTION, path: PATH, datePublished: PUBLISHED }),
    faqJsonLd(faqs),
    breadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'SAT Prep', url: '/sat' },
      { name: 'Bluebook companion', url: PATH },
    ]),
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <GuideBreadcrumb current="Bluebook companion" />
        <p className="text-sm font-semibold text-accent dark:text-accent-muted">Bluebook companion</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Took a Bluebook practice test? Turn your score report into a study plan.
        </h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          College Board&rsquo;s free Bluebook practice tests are the closest thing to test day. Your score report tells you where you lost
          points; StudyMondo turns that into what to do next: a focused practice set and the lessons for each of your weakest content domains.
        </p>

        <ol className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ['Take the test', 'A full-length, adaptive practice test in the Bluebook app.'],
            ['Log the report', 'Your scores and, ideally, the eight Knowledge and Skills bands. About a minute.'],
            ['Work the plan', 'Practice sets from our SAT question bank and the matching lessons.'],
          ].map(([t, b], i) => (
            <li key={t} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-bold text-accent dark:text-accent-muted">Step {i + 1}</p>
              <p className="mt-0.5 font-semibold text-gray-900 dark:text-white">{t}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <BluebookCompanion />
        </div>

        <GuideSection id="domains-title" title="The eight Knowledge and Skills domains">
          <p>
            Every digital SAT question belongs to one of eight content domains. Your score report rates each one on a seven-segment bar, and
            the domains don&rsquo;t carry equal weight, so a low band in a heavily tested domain costs the most.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {(['rw', 'math'] as const).map((section) => (
              <div key={section} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm font-bold text-gray-900 dark:text-white">{section === 'rw' ? 'Reading and Writing' : 'Math'}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {SAT_DOMAINS.filter((d) => d.section === section).map((d) => (
                    <li key={d.key} className="flex items-baseline justify-between gap-3">
                      <span>{d.label}</span>
                      <span className="shrink-0 tabular-nums text-gray-500 dark:text-gray-400">about {Math.round(d.share * 100)}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Shares are approximate percentages of each section, from College Board&rsquo;s test specifications.</p>
        </GuideSection>

        <GuideSection id="why-both-title" title="Why use Bluebook and StudyMondo together">
          <p>
            <strong>Bluebook</strong> gives you official, adaptive full-length tests in the real testing interface. They are the most
            trustworthy measure of where you stand, and there are only a handful of them, so each one is worth spending wisely.
          </p>
          <p>
            <strong>StudyMondo</strong> covers the weeks between them: a diagnostic to start each study cycle, lessons with exit quizzes,
            and a question bank you can filter by domain, topic and difficulty. Logging each Bluebook result keeps your score history,
            superscore and score goal in one place.
          </p>
        </GuideSection>

        <GuideSection id="faq-title" title="Frequently asked questions">
          <FaqList faqs={faqs} />
        </GuideSection>

        <GuideLinks keys={['diagnostic', 'practice', 'strategy', 'desmos', 'selectionIndex']} />
        <TrademarkNote />
      </div>
    </div>
  )
}
