import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import {
  HELP_ARTICLE_LIST,
  HELP_AUDIENCE_LABEL,
  getHelpArticle,
} from '@/data/help/articles'
import { helpHref } from '@/data/help/slugs'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { HelpArticleBody } from '../_components/HelpArticleBody'
import { HelpContact } from '../_components/HelpContact'

interface HelpArticlePageProps {
  params: Promise<{ slug: string }>
}

// Every article is known at build time; anything else is a real 404.
export const dynamicParams = false

export function generateStaticParams() {
  return HELP_ARTICLE_LIST.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: HelpArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getHelpArticle(slug)
  // Decide the 404 before anything streams (see tests/lib/no-loading-above-404-routes.test.ts).
  if (!article) notFound()
  const url = `https://www.studymondo.com${helpHref(article.slug)}`
  return {
    title: `${article.title} | Study Mondo Help`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: 'article' },
  }
}

export default async function HelpArticlePage({ params }: HelpArticlePageProps) {
  const { slug } = await params
  const article = getHelpArticle(slug)
  if (!article) notFound()

  const related = article.related
    .map((s) => getHelpArticle(s))
    .filter((a): a is NonNullable<typeof a> => !!a)

  return (
    <div className="bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', url: '/' },
              { name: 'Help Center', url: '/help' },
              { name: article.title, url: helpHref(article.slug) },
            ]),
          ),
        }}
      />
      <article className="container max-w-3xl py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link
            href="/help"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden /> Help Center
          </Link>
        </nav>

        <header className="mb-8 border-b border-gray-200 pb-6 dark:border-gray-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">
            {HELP_AUDIENCE_LABEL[article.audience]}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-400">{article.description}</p>
        </header>

        {article.video && (
          <div className="mb-8 aspect-video overflow-hidden rounded-2xl border border-card-border bg-gray-100 dark:bg-gray-900">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${article.video.youtubeId}`}
              title={article.video.title}
              loading="lazy"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <HelpArticleBody blocks={article.blocks} />

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-12">
            <h2 id="related-heading" className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={helpHref(r.slug)}
                    className="block h-full rounded-xl border border-card-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12">
          <HelpContact />
        </div>
      </article>
    </div>
  )
}
