import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { AdBanner } from '@/components/ad-banner'
import type { Metadata } from 'next'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata with canonical URL
export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const params = await props.params
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    select: { name: true, description: true, slug: true }
  })

  if (!category) {
    return {}
  }

  const canonicalUrl = `https://www.studymondo.com/categories/${category.slug}`

  return {
    title: `${category.name} | Study Mondo`,
    description: category.description || `Study ${category.name} with comprehensive notes and practice problems`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: category.name,
      description: category.description || `Explore ${category.name} topics`,
      url: canonicalUrl,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  
  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      course: {
        select: {
          name: true,
          slug: true,
          color: true,
          icon: true,
        }
      },
      topics: {
        orderBy: { order: 'asc' },
        include: {
          _count: {
            select: {
              exampleProblems: true,
              flashcards: true,
            }
          }
        }
      }
    }
  })

  if (!category) {
    notFound()
  }

  // Map course colors to Tailwind classes
  const colorMap: Record<string, { bg: string; gradient: string; border: string }> = {
    purple: { 
      bg: 'from-purple-50 to-purple-100', 
      gradient: 'from-purple-600 to-blue-600',
      border: 'border-purple-300'
    },
    blue: { 
      bg: 'from-blue-50 to-blue-100', 
      gradient: 'from-blue-600 to-cyan-600',
      border: 'border-blue-300'
    },
    green: { 
      bg: 'from-green-50 to-green-100', 
      gradient: 'from-green-600 to-emerald-600',
      border: 'border-green-300'
    },
    teal: { 
      bg: 'from-teal-50 to-teal-100', 
      gradient: 'from-teal-600 to-cyan-600',
      border: 'border-teal-300'
    },
    indigo: { 
      bg: 'from-indigo-50 to-indigo-100', 
      gradient: 'from-indigo-600 to-purple-600',
      border: 'border-indigo-300'
    },
    violet: { 
      bg: 'from-violet-50 to-violet-100', 
      gradient: 'from-violet-600 to-fuchsia-600',
      border: 'border-violet-300'
    },
    orange: { 
      bg: 'from-orange-50 to-orange-100', 
      gradient: 'from-orange-600 to-red-600',
      border: 'border-orange-300'
    },
    rose: { 
      bg: 'from-rose-50 to-rose-100', 
      gradient: 'from-rose-600 to-pink-600',
      border: 'border-rose-300'
    },
    pink: { 
      bg: 'from-pink-50 to-pink-100', 
      gradient: 'from-pink-600 to-rose-600',
      border: 'border-pink-300'
    },
    cyan: { 
      bg: 'from-cyan-50 to-cyan-100', 
      gradient: 'from-cyan-600 to-blue-600',
      border: 'border-cyan-300'
    },
    emerald: { 
      bg: 'from-emerald-50 to-emerald-100', 
      gradient: 'from-emerald-600 to-green-600',
      border: 'border-emerald-300'
    },
  }

  const colors = colorMap[category.course.color || 'purple'] || colorMap.purple

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          {' / '}
          <Link href={`/courses/${category.course.slug}`} className="hover:text-purple-600 transition-colors">
            {category.course.name}
          </Link>
          {' / '}
          <span className="text-foreground font-medium">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className={`rounded-3xl bg-gradient-to-br ${colors.bg} p-12 mb-12`}>
          <div className="flex items-start gap-6">
            {category.icon && (
              <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white text-5xl font-bold shadow-lg`}>
                {category.icon}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Link 
                  href={`/courses/${category.course.slug}`}
                  className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {category.course.icon} {category.course.name}
                </Link>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
              {category.description && (
                <p className="text-lg text-gray-700 mb-6">{category.description}</p>
              )}
              <div className="flex gap-6 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">{category.topics.length}</span> Topics
                </div>
                <div>
                  <span className="font-semibold">
                    {category.topics.reduce((sum, topic) => sum + topic._count.exampleProblems, 0)}
                  </span> Practice Problems
                </div>
                <div>
                  <span className="font-semibold">
                    {category.topics.reduce((sum, topic) => sum + topic._count.flashcards, 0)}
                  </span> Flashcards
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Banner */}
        <div className="mb-12">
          <AdBanner slot="category-top" />
        </div>

        {/* Topics Grid */}
        {category.topics.length > 0 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Topics in {category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.topics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topics/${topic.slug}`}
                  className={`group block p-6 rounded-xl border-2 ${colors.border} hover:shadow-lg transition-all bg-white`}
                >
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {topic.description}
                  </p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    {topic._count.exampleProblems > 0 && (
                      <div className="flex items-center gap-1">
                        <span>📝</span>
                        <span>{topic._count.exampleProblems} problems</span>
                      </div>
                    )}
                    {topic._count.flashcards > 0 && (
                      <div className="flex items-center gap-1">
                        <span>🎴</span>
                        <span>{topic._count.flashcards} cards</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-xl text-gray-600 mb-2">No topics yet in this category</p>
            <p className="text-sm text-gray-500">Check back soon for comprehensive study materials!</p>
          </div>
        )}

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdBanner slot="category-bottom" />
        </div>

        {/* Back to Course Link */}
        <div className="mt-12 text-center">
          <Link
            href={`/courses/${category.course.slug}`}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            ← Back to {category.course.name}
          </Link>
        </div>
      </div>
    </div>
  )
}
