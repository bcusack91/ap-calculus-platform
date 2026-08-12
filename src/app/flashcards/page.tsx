import Link from 'next/link'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'
import StudyModeSwitcher from '@/components/StudyModeSwitcher'

export const revalidate = 3600 // ISR: revalidate every hour

export const metadata: Metadata = {
  title: 'Flashcards | Study Mondo',
  description: `Review flashcards across ${COURSE_COUNT} courses and ${TOPIC_COUNT_LABEL} topics. Powered by spaced repetition for optimal learning.`,
  alternates: {
    canonical: 'https://www.studymondo.com/flashcards',
  },
}

export default async function FlashcardsPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>
}) {
  const { course } = await searchParams

  const categories = await prisma.category.findMany({
    where: course ? { course: { slug: course } } : undefined,
    include: {
      course: { select: { name: true, slug: true } },
      topics: {
        include: {
          _count: {
            select: { flashcards: true }
          }
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { order: 'asc' }
  }).catch((error) => {
    console.warn('Flashcard categories unavailable at build time; rendering empty list.', error)
    return []
  })

  const courseName = course && categories.length > 0 ? categories[0].course.name : null

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {courseName ? `${courseName} Flashcards` : 'Flashcards'}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          {courseName
            ? `Review ${courseName} concepts with our Anki-style spaced repetition system!`
            : 'Review concepts with our Anki-style spaced repetition system!'}
        </p>
        {courseName && (
          <Link href="/flashcards" className="text-sm text-accent hover:underline mb-4 inline-block">
            ← View all flashcard categories
          </Link>
        )}

        <StudyModeSwitcher />

        {/* Quick Action Button */}
        <div className="mb-8">
          <Link
            href="/flashcards/review"
            className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            🎯 Start Review Session
          </Link>
        </div>

        <div className="space-y-12 mt-8">
          {categories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No flashcards available yet. Check back soon!</p>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  {category.icon && <span className="text-3xl">{category.icon}</span>}
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/flashcards/${topic.slug}`}
                      className="block group rounded-lg border p-6 hover:shadow-lg transition-all hover:border-accent-muted"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold group-hover:text-accent transition-colors">
                          {topic.title}
                        </h3>
                        {/* Temporarily hidden for free tier launch
                        {topic.isPremium && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-accent-light text-accent-dark">
                            Premium
                          </span>
                        )}
                        */}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {topic._count.flashcards} {topic._count.flashcards === 1 ? 'card' : 'cards'}
                      </p>
                      <div className="mt-4 text-sm text-accent group-hover:underline">
                        Study now →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Ad placement after flashcard list */}
        <InArticleAd />

        {/* Temporarily hidden for free tier launch
        <div className="mt-12 p-6 rounded-lg bg-accent-subtle border border-accent-light">
          <h3 className="text-xl font-bold mb-2">🌟 Upgrade for Spaced Repetition</h3>
          <p className="text-muted-foreground mb-4">
            Premium members get Anki-style spaced repetition flashcards that adapt to your memory. Never forget what you've learned!
          </p>
          <Link
            href="/premium"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Learn More
          </Link>
        </div>
        */}

      </div>
    </div>
  )
}
