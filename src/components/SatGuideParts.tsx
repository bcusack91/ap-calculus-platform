import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Lightbulb } from 'lucide-react'

/**
 * Shared building blocks for the public SAT guide pages (/sat/bluebook,
 * /sat/desmos-guide, /sat/digital-sat-guide). Server components with no data,
 * so the pages stay statically rendered.
 */

export const SITE_URL = 'https://www.studymondo.com'
/** The free hooks every SAT guide links to. */
export const SAT_GUIDE_LINKS = {
  diagnostic: { href: '/sat-diagnostic', label: 'Free SAT diagnostic', blurb: '36 questions, about 30 minutes: an estimated score range and a study plan.' },
  bluebook: { href: '/sat/bluebook', label: 'Bluebook companion', blurb: 'Log a Bluebook score report and get a plan for your weakest domains.' },
  practice: { href: '/sat-practice', label: 'SAT practice tests', blurb: 'Full-length, adaptive Digital SAT practice with a score range.' },
  selectionIndex: { href: '/psat-selection-index', label: 'PSAT Selection Index calculator', blurb: 'Your National Merit index against your state’s latest cutoff.' },
  desmos: { href: '/sat/desmos-guide', label: 'Desmos on the Digital SAT', blurb: 'Graphing-calculator techniques with worked examples.' },
  strategy: { href: '/sat/digital-sat-guide', label: 'Digital SAT strategy guide', blurb: 'Format, adaptive modules, pacing and strategy by domain.' },
} as const

export type SatGuideLinkKey = keyof typeof SAT_GUIDE_LINKS

export function GuideBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500 dark:text-gray-400">
      <Link href="/sat" className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
        SAT Prep
      </Link>
      <span aria-hidden> / </span>
      <span className="text-gray-700 dark:text-gray-300">{current}</span>
    </nav>
  )
}

export function GuideSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-10 scroll-mt-20" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  )
}

export function Tip({ children, title = 'Tip' }: { children: ReactNode; title?: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-accent-light bg-accent-subtle p-4 text-sm text-gray-800 dark:border-accent/30 dark:bg-accent-light/10 dark:text-gray-100">
      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent dark:text-accent-muted" aria-hidden />
      <div>
        <p className="font-semibold">{title}</p>
        <div className="mt-1 space-y-2">{children}</div>
      </div>
    </div>
  )
}

/** A worked example: the problem, what to type, and what you read off. */
export function WorkedExample({
  title,
  problem,
  type,
  steps,
  answer,
}: {
  title: string
  problem: ReactNode
  /** Lines to type into Desmos, one per expression row. */
  type?: string[]
  steps: ReactNode[]
  answer: ReactNode
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 dark:border-gray-700 dark:bg-gray-800">
      <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-muted">Worked example</p>
      <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="mt-2 text-sm text-gray-800 dark:text-gray-200">{problem}</div>
      {type && type.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">Type into Desmos</p>
          <ol className="mt-1 overflow-x-auto rounded-lg bg-gray-50 font-mono text-[13px] text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {type.map((line, i) => (
              <li key={i} className="flex gap-3 border-b border-gray-200 px-3 py-1.5 last:border-b-0 dark:border-gray-700">
                <span className="select-none text-gray-400" aria-hidden>
                  {i + 1}
                </span>
                <span className="whitespace-pre">{line}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <p className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:bg-gray-900/60 dark:text-white">
        <span className="font-semibold">Answer: </span>
        {answer}
      </p>
    </div>
  )
}

export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <dl className="space-y-4">
      {faqs.map((f) => (
        <div key={f.question}>
          <dt className="font-semibold text-gray-900 dark:text-white">{f.question}</dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">{f.answer}</dd>
        </div>
      ))}
    </dl>
  )
}

export function GuideLinks({ keys, title = 'Free tools to use next' }: { keys: SatGuideLinkKey[]; title?: string }) {
  return (
    <section className="mt-12" aria-labelledby="guide-links-title">
      <h2 id="guide-links-title" className="text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {keys.map((k) => {
          const l = SAT_GUIDE_LINKS[k]
          return (
            <Link
              key={k}
              href={l.href}
              className="group flex items-start justify-between gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-accent-muted hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-700 dark:bg-gray-800"
            >
              <span>
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">{l.label}</span>
                <span className="mt-0.5 block text-xs text-gray-600 dark:text-gray-400">{l.blurb}</span>
              </span>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent transition group-hover:translate-x-0.5 dark:text-accent-muted" aria-hidden />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export function TrademarkNote() {
  return (
    <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
      SAT® and Bluebook™ are trademarks of College Board, and PSAT/NMSQT® is a registered trademark of College Board and the National Merit
      Scholarship Corporation. Neither is affiliated with or endorses StudyMondo. Desmos is a trademark of Desmos Studio PBC.
    </p>
  )
}

/** Article JSON-LD for a guide page (the shared articleJsonLd helper is blog-only). */
export function guideArticleJsonLd({ title, description, path, datePublished, dateModified }: { title: string; description: string; path: string; datePublished: string; dateModified?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { '@type': 'Organization', name: 'Study Mondo team', url: SITE_URL },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Study Mondo',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/android-chrome-512x512.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    inLanguage: 'en-US',
  }
}

/** Canonical + Open Graph + Twitter metadata for a guide page. */
export function guideMetadata({ title, description, path, published }: { title: string; description: string; path: string; published: string }) {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    authors: [{ name: 'Study Mondo team' }],
    openGraph: { title, description, url, type: 'article' as const, publishedTime: published, modifiedTime: published, siteName: 'Study Mondo' },
    twitter: { card: 'summary_large_image' as const, title, description },
  }
}
