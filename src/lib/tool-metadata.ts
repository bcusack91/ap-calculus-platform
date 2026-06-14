import type { Metadata } from 'next'

const SITE_URL = 'https://www.studymondo.com'

/**
 * Build canonical + Open Graph + Twitter metadata for the ~200 course-family
 * tool pages (daily-question, score-predictor, practice, study-plans, frq,
 * unit-tests, etc.).
 *
 * Previously these layouts set only `title`/`description`/`alternates.canonical`
 * and inherited the homepage's og:title/twitter:title, so every shared link
 * showed the homepage title. This helper derives the OG/Twitter fields from the
 * page's own title/description/canonical so the values stay in sync.
 *
 * `path` may be a canonical path (e.g. `/ap-calc-ab-daily-question`) or a full
 * URL on the production origin; either way the resulting `openGraph.url` and
 * `alternates.canonical` point at the production URL.
 */
export function toolMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = path.startsWith('http')
    ? path
    : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
