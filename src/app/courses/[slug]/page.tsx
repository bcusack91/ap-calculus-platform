import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { AdBanner } from '@/components/ad-banner'
import type { Metadata } from 'next'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata with canonical URL
export async function generateMetadata(props: CoursePageProps): Promise<Metadata> {
  const params = await props.params
  const course = await prisma.course.findUnique({
    where: { slug: params.slug },
    select: { name: true, slug: true }
  })

  if (!course) {
    return {}
  }

  const canonicalUrl = `https://studymondo.com/courses/${course.slug}`

  return {
    title: `${course.name} | Study Mondo`,
    description: `Comprehensive ${course.name} study materials, practice problems, and flashcards`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: course.name,
      description: `Study ${course.name} with comprehensive notes and practice problems`,
      url: canonicalUrl,
      type: 'website',
    },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  
  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      categories: {
        include: {
          topics: {
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    }
  })

  if (!course) {
    notFound()
  }

  const totalTopics = course.categories.reduce((sum, cat) => sum + cat.topics.length, 0)

  // Map course colors to Tailwind classes
  const colorMap: Record<string, { bg: string; gradient: string }> = {
    purple: { bg: 'from-purple-50 to-purple-100', gradient: 'from-purple-600 to-blue-600' },
    blue: { bg: 'from-blue-50 to-blue-100', gradient: 'from-blue-600 to-cyan-600' },
    green: { bg: 'from-green-50 to-green-100', gradient: 'from-green-600 to-emerald-600' },
    teal: { bg: 'from-teal-50 to-teal-100', gradient: 'from-teal-600 to-cyan-600' },
    indigo: { bg: 'from-indigo-50 to-indigo-100', gradient: 'from-indigo-600 to-purple-600' },
    violet: { bg: 'from-violet-50 to-violet-100', gradient: 'from-violet-600 to-fuchsia-600' },
    orange: { bg: 'from-orange-50 to-orange-100', gradient: 'from-orange-600 to-red-600' },
    rose: { bg: 'from-rose-50 to-rose-100', gradient: 'from-rose-600 to-pink-600' },
  }

  const colors = colorMap[course.color || 'purple'] || colorMap.purple

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl">
        {/* Course Header */}
        <div className={`rounded-3xl bg-gradient-to-br ${colors.bg} p-12 mb-12`}>
          <div className="flex items-start gap-6">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white text-5xl font-bold shadow-lg`}>
              {course.icon || '📚'}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.name}</h1>
              <p className="text-lg text-gray-700 mb-6">{course.description}</p>
              <div className="flex gap-6 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">{course.categories.length}</span> Categories
                </div>
                <div>
                  <span className="font-semibold">{totalTopics}</span> Topics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Banner */}
        <div className="mb-12">
          <AdBanner slot="course-top" />
        </div>

        {/* Categories Grid */}
        {course.categories.length > 0 ? (
          <div className="space-y-12">
            {course.categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {category.icon && (
                      <span className="text-3xl">{category.icon}</span>
                    )}
                    <div>
                      <Link 
                        href={`/categories/${category.slug}`}
                        className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors"
                      >
                        {category.name}
                      </Link>
                      {category.description && (
                        <p className="text-gray-600 mt-1">{category.description}</p>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium whitespace-nowrap ml-4"
                  >
                    View All →
                  </Link>
                </div>

                {category.topics.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        href={`/topics/${topic.slug}`}
                        className="group block p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {topic.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-lg">Topics coming soon for this category!</p>
                    <p className="text-sm mt-2">Check back later for comprehensive study materials.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              We're working hard to create comprehensive study materials for {course.name}.
            </p>
            <Link
              href="/"
              className="inline-block rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700"
            >
              Explore Other Courses
            </Link>
          </div>
        )}

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdBanner slot="course-bottom" />
        </div>
      </div>
    </div>
  )
}
