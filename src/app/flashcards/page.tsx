import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { AdBanner } from '@/components/ad-banner'

export default async function FlashcardsPage() {
  const categories = await prisma.category.findMany({
    include: {
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
  })

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Flashcards</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Review calculus concepts with our flashcard system. Premium members get spaced-repetition for optimal retention!
        </p>

        <AdBanner slot="flashcards-top" />

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
                      className="block group rounded-lg border p-6 hover:shadow-lg transition-all hover:border-purple-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold group-hover:text-purple-600 transition-colors">
                          {topic.title}
                        </h3>
                        {topic.isPremium && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {topic._count.flashcards} {topic._count.flashcards === 1 ? 'card' : 'cards'}
                      </p>
                      <div className="mt-4 text-sm text-purple-600 group-hover:underline">
                        Study now →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-purple-50 border border-purple-200">
          <h3 className="text-xl font-bold mb-2">🌟 Upgrade for Spaced Repetition</h3>
          <p className="text-muted-foreground mb-4">
            Premium members get Anki-style spaced repetition flashcards that adapt to your memory. Never forget what you've learned!
          </p>
          <Link
            href="/premium"
            className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-700"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-8">
          <AdBanner slot="flashcards-bottom" />
        </div>
      </div>
    </div>
  )
}
