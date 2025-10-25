import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { AdBanner } from '@/components/ad-banner'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function TopicsPage() {
  // Fetch all categories with their topics
  const categories = await prisma.category.findMany({
    include: {
      topics: {
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { order: 'asc' }
  })

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Calculus Topics</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Comprehensive coverage of all AP Calculus AB and BC topics. Each topic includes detailed explanations, examples, and practice problems.
        </p>

        <AdBanner slot="topics-top" />

        <div className="space-y-12 mt-8">
          {categories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No topics available yet. Check back soon!</p>
              <p className="text-sm text-muted-foreground mt-2">
                Content is being added regularly.
              </p>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  {category.icon && <span className="text-3xl">{category.icon}</span>}
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    {category.description && (
                      <p className="text-muted-foreground">{category.description}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/topics/${topic.slug}`}
                      className="block group rounded-lg border p-6 hover:shadow-lg transition-all hover:border-purple-300"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold group-hover:text-purple-600 transition-colors">
                          {topic.title}
                        </h3>
                        {topic.isPremium && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {topic.description}
                      </p>
                      <div className="mt-4 text-sm text-purple-600 group-hover:underline">
                        Learn more →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12">
          <AdBanner slot="topics-bottom" />
        </div>
      </div>
    </div>
  )
}
