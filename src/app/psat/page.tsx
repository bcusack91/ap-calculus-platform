import type { Metadata } from 'next'
import Link from 'next/link'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'
import { courseJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'PSAT/NMSQT Prep | Free Practice & Study Tools',
  description:
    'Free PSAT/NMSQT prep. Full-length practice test, diagnostic, reading practice, daily questions, and study plans. PSAT prep is SAT prep — build your score early.',
  alternates: { canonical: 'https://www.studymondo.com/psat' },
}

// PSAT tests the same Reading & Writing and Math skills as the Digital SAT, so
// PSAT prep funnels into the (shared) SAT tools rather than duplicating them.
const features = [
  {
    title: 'PSAT Practice Test',
    description: 'Full-length PSAT-style practice exam with Reading & Writing and Math sections, modeled on the digital PSAT/NMSQT.',
    href: '/psat-practice',
    color: 'from-indigo-500 to-blue-600',
    stats: 'Full-length',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Diagnostic Test',
    description: 'The PSAT and SAT test the same skills, so the SAT diagnostic pinpoints your weak areas and builds a personalized plan that counts for both.',
    href: '/sat-diagnostic',
    color: 'from-purple-500 to-pink-600',
    stats: 'Same skills as SAT',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Reading Practice',
    description: '60 passages across literary, science, and historical genres to sharpen the Reading & Writing skills tested on both the PSAT and SAT.',
    href: '/sat-reading-practice',
    color: 'from-blue-500 to-cyan-600',
    stats: '60 passages',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Daily Question',
    description: 'Two fresh questions every day — personalized toward your weak areas once you take a diagnostic. Build a streak.',
    href: '/sat-daily-question',
    color: 'from-amber-500 to-orange-600',
    stats: '2 per day',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Study Plans',
    description: 'Pick a guided 4–12 week schedule. Adopt a plan and it front-loads the areas your diagnostic flagged weak.',
    href: '/sat-study-plans',
    color: 'from-emerald-500 to-green-600',
    stats: '3 templates',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Score Predictor',
    description: 'See where your practice puts you on the 320–1520 PSAT scale — and how it projects to the 400–1600 SAT.',
    href: '/sat-score-predictor',
    color: 'from-rose-500 to-red-600',
    stats: '320–1520',
    icon: 'M3 3v18h18M7 14l3-3 3 2 4-5',
  },
]

export default function PsatHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
          title: 'PSAT/NMSQT Prep',
          description: metadata.description as string,
          slug: 'psat',
          canonicalPath: '/psat',
        })) }}
      />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Get a head start on the <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">PSAT/NMSQT</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            The PSAT tests the same Reading &amp; Writing and Math skills as the Digital SAT — so every minute here builds <strong>both</strong> scores. Start with a diagnostic and follow your plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sat-diagnostic" className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">
              Start with the Diagnostic
            </Link>
            <Link href="/psat-practice" className="rounded-xl border-2 border-indigo-500 px-8 py-3.5 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/20">
              Take a Practice Test
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}>
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-400">{f.stats}</span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </Link>
          ))}
        </div>

        {/* In-article ad — single, mid-page placement after the feature grid */}
        <div className="mx-auto mt-10 max-w-5xl">
          <InArticleAd />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 text-center dark:border-indigo-800 dark:bg-indigo-900/20">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Sophomore or junior?</strong> A strong PSAT can qualify you for National Merit — and the exact same prep carries straight into your{' '}
            <Link href="/sat" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">SAT preparation</Link>.
          </p>
        </div>
      </section>
      <CourseToolGrid courseSlug="psat" />
    </div>
  )
}
