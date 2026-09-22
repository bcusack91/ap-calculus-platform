import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { faqJsonLd } from '@/lib/jsonld'
import type { TopicHub } from '@/data/topic-hubs'

/**
 * The lessons a topic hub actually covers, rendered server-side.
 *
 * A hub used to be a page of links — about 220 crawlable words — even though
 * it targets how students search ("ap bio unit 5"). This lists the real
 * lessons in the unit, grouped by category, so the page answers "what's on
 * this unit?" before asking anyone to click.
 *
 * A database hiccup degrades to the links-only page rather than failing it.
 */
export default async function HubTopics({ hub }: { hub: TopicHub }) {
  const categories = await prisma.category
    .findMany({
      where: { slug: { in: hub.categorySlugs } },
      select: {
        slug: true,
        name: true,
        topics: {
          where: { parentTopicId: null },
          orderBy: { order: 'asc' },
          select: { slug: true, title: true, description: true },
        },
        _count: { select: { topics: true } },
      },
    })
    .catch(() => [])

  // Keep the authored order so a multi-category unit reads in teaching order.
  const ordered = hub.categorySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c) && c!.topics.length > 0)

  if (ordered.length === 0) return null

  const topicCount = ordered.reduce((sum, c) => sum + c.topics.length, 0)
  const faqs = [
    {
      question: `What does ${hub.title} cover?`,
      answer: `${topicCount} lessons across ${ordered.length === 1 ? 'one area' : `${ordered.length} areas`}: ${ordered
        .map((c) => c.name)
        .join(', ')}.`,
    },
    {
      question: `Is ${hub.title} free to study?`,
      answer: 'Yes. Every lesson, quiz and set of flashcards on this page is free to use.',
    },
    {
      question: 'Where should I start?',
      answer:
        'Take the diagnostic first so you know which lessons in this unit you can skip, then work the rest in order and finish each with its exit quiz.',
    },
  ]

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        What this unit covers
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {topicCount} lessons, each with worked examples, practice problems and flashcards.
      </p>

      {ordered.map((category) => (
        <div key={category.slug} className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <Link href={`/categories/${category.slug}`} className="hover:text-accent transition-colors">
              {category.name}
            </Link>
          </h3>
          <ul className="mt-3 space-y-3">
            {category.topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/topics/${topic.slug}`}
                  className="font-medium text-accent hover:underline"
                >
                  {topic.title}
                </Link>
                {topic.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">{topic.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">Common questions</h3>
      <dl className="mt-3 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-semibold text-gray-900 dark:text-white">{faq.question}</dt>
            <dd className="text-gray-600 dark:text-gray-400">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
