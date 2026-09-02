import Link from 'next/link'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'
import StudyModeSwitcher from '@/components/StudyModeSwitcher'
import { Layers, ChevronDown } from 'lucide-react'

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
            ? `Review ${courseName} concepts with our smart spaced-repetition system!`
            : 'Review concepts with our smart spaced-repetition system!'}
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

        <div className="space-y-4 mt-8">
          {categories.length === 0 ? (
            <div className="mx-auto max-w-md rounded-xl bg-card border border-card-border p-10 text-center">
              <Layers className="mx-auto mb-4 h-10 w-10 text-accent dark:text-accent-muted" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground mb-2">No flashcards here yet</h2>
              <p className="text-muted-foreground mb-6">
                {course
                  ? "We haven't published flashcards for this course yet — browse other courses in the meantime."
                  : 'Flashcards are on the way. Browse our courses to start studying now.'}
              </p>
              <Link
                href="/topics"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg transition-all"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            categories.map((category) => (
              // Collapsible per-category sections keep the all-course catalog
              // scannable: collapsed by default when browsing everything, open
              // when filtered to a single course.
              <details key={category.id} open={Boolean(course)} className="group rounded-xl bg-card border border-card-border">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
                  {category.icon && <span className="text-3xl" aria-hidden>{category.icon}</span>}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {!course && `${category.course.name} · `}
                      {category.topics.length} {category.topics.length === 1 ? 'topic' : 'topics'}
                    </p>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                </summary>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-5 pb-5">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/flashcards/${topic.slug}`}
                      className="block group/card rounded-xl bg-card border border-card-border p-6 hover:shadow-lg transition-all hover:border-accent-muted"
                    >
                      <h3 className="font-semibold mb-2 group-hover/card:text-accent transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {topic._count.flashcards} {topic._count.flashcards === 1 ? 'card' : 'cards'}
                      </p>
                      <div className="mt-4 text-sm text-accent group-hover/card:underline">
                        Study now →
                      </div>
                    </Link>
                  ))}
                </div>
              </details>
            ))
          )}
        </div>

        {/* Ad placement after flashcard list */}
        <InArticleAd />

      </div>
    </div>
  )
}
