import type { Metadata } from 'next'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'
import { topicHubs, topicHubBySlug } from '@/data/topic-hubs'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { notFound } from 'next/navigation'

interface HubPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return topicHubs.map((hub) => ({ slug: hub.slug }))
}

export async function generateMetadata({ params }: HubPageProps): Promise<Metadata> {
  const { slug } = await params
  const hub = topicHubBySlug[slug]
  if (!hub) return {}

  return {
    title: `${hub.title} | Study Mondo Topic Hub`,
    description: hub.description,
    alternates: { canonical: `https://www.studymondo.com/hubs/${hub.slug}` },
  }
}

const examColors: Record<string, string> = {
  'AP Calculus': 'from-blue-600 to-indigo-600',
  SAT: 'from-emerald-600 to-teal-600',
  'AP Biology': 'from-rose-600 to-pink-600',
}

export default async function TopicHubPage({ params }: HubPageProps) {
  const { slug } = await params
  const hub = topicHubBySlug[slug]
  if (!hub) notFound()

  const similar = topicHubs.filter((item) => item.exam === hub.exam && item.slug !== hub.slug).slice(0, 4)
  const gradient = examColors[hub.exam] ?? 'from-purple-600 to-indigo-600'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', url: '/' },
              { name: 'Topic Hubs', url: '/hubs' },
              { name: hub.title, url: `/hubs/${hub.slug}` },
            ])
          ),
        }}
      />
      <div className="container max-w-5xl py-12">
        <div className={`rounded-3xl bg-gradient-to-r ${gradient} p-8 text-white shadow-xl`}>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Topic Hub</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{hub.title}</h1>
          <p className="mt-3 text-white/90">{hub.description}</p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Start Here</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {hub.links.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                eventName="topic_hub_link_click"
                eventParams={{
                  page_template: 'topic_hub',
                  hub_slug: hub.slug,
                  exam: hub.exam,
                  destination: link.href,
                  cta_type: link.type,
                }}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500"
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </section>

        {similar.length > 0 && (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">More {hub.exam} Hubs</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {similar.map((item) => (
                <Link
                  key={item.slug}
                  href={`/hubs/${item.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
