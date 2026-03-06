import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'
import { breadcrumbJsonLd } from '@/lib/jsonld'

// ISR: revalidate content every hour
export const revalidate = 3600

// Pre-render all course pages at build time for faster TTFB and better crawlability
export async function generateStaticParams() {
  const courses = await prisma.course.findMany({
    select: { slug: true },
  })
  return courses.map((course) => ({ slug: course.slug }))
}

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
    select: { name: true, slug: true, _count: { select: { categories: true } } }
  })

  if (!course) {
    return {}
  }

  // Noindex courses with no categories (empty shells)
  if (course._count.categories === 0) {
    return {
      title: `${course.name} | Study Mondo`,
      robots: { index: false, follow: true },
    }
  }

  const canonicalUrl = `https://www.studymondo.com/courses/${course.slug}`

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
            where: { parentTopicId: null },
            orderBy: { order: 'asc' },
            include: {
              _count: { select: { subtopics: true } }
            }
          }
        },
        orderBy: { order: 'asc' }
      }
    }
  })

  if (!course) {
    notFound()
  }

  // AP Calculus BC is a superset of AB — include AB categories as foundation
  let abCategories: typeof course.categories = []
  if (slug === 'ap-calculus-bc') {
    const abCourse = await prisma.course.findUnique({
      where: { slug: 'ap-calculus-ab' },
      include: {
        categories: {
          include: {
            topics: {
              where: { parentTopicId: null },
              orderBy: { order: 'asc' },
              include: {
                _count: { select: { subtopics: true } }
              }
            }
          },
          orderBy: { order: 'asc' }
        }
      }
    })
    if (abCourse) {
      abCategories = abCourse.categories
    }
  }

  const allCategories = [...abCategories, ...course.categories]
  const totalTopics = allCategories.reduce((sum, cat) => sum + cat.topics.length, 0)

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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Courses', url: '/topics' },
            { name: course.name, url: `/courses/${course.slug}` },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: course.name,
            description: course.description,
            url: `https://www.studymondo.com/courses/${course.slug}`,
            provider: {
              '@type': 'Organization',
              name: 'Study Mondo',
              url: 'https://www.studymondo.com',
            },
            numberOfCredits: totalTopics,
            hasCourseInstance: allCategories.map((cat) => ({
              '@type': 'CourseInstance',
              name: cat.name,
              description: cat.description,
            })),
            inLanguage: 'en',
          }),
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Course Header */}
        <div className={`rounded-3xl bg-gradient-to-br ${colors.bg} p-12 mb-12`}>
          <div className="flex items-start gap-6">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white text-5xl font-bold shadow-lg`}>
              {course.icon || '📚'}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{course.name}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{course.description}</p>
              <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <span className="font-semibold">{allCategories.length}</span> Categories
                </div>
                <div>
                  <span className="font-semibold">{totalTopics}</span> Topics
                </div>
                {abCategories.length > 0 && (
                  <div className="text-violet-600 dark:text-violet-400 font-medium">
                    Includes all AB + BC content
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              This {course.name} course on Study Mondo covers {totalTopics} topics organized across {allCategories.length} categories. 
              Each topic includes detailed written explanations, worked examples, practice problems with step-by-step solutions, 
              flashcards for review, and interactive lessons to help you master the material.
            </p>
            {abCategories.length > 0 && (
              <p className="text-violet-700 dark:text-violet-300 font-medium">
                Since AP Calculus BC is a superset of AB, this page includes all Calculus AB topics as your foundation, 
                followed by the BC-exclusive topics.
              </p>
            )}
            {allCategories.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What You&apos;ll Learn</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {allCategories.slice(0, 12).map((cat) => (
                    <li key={cat.id}>
                      <strong>{cat.name}</strong>{cat.description ? ` — ${cat.description}` : ''} ({cat.topics.length} {cat.topics.length === 1 ? 'topic' : 'topics'})
                    </li>
                  ))}
                  {allCategories.length > 12 && (
                    <li>...and {allCategories.length - 12} more categories</li>
                  )}
                </ul>
              </div>
            )}
            <p className="mt-4">
              All content is completely free. Start with any category below, or jump to a specific topic that you need help with.
            </p>
          </div>
        </div>

        {/* Ad placement after course overview */}
        <InArticleAd />

        {/* Categories Grid */}
        {allCategories.length > 0 ? (
          <div className="space-y-12">
            {/* AB Foundation Section (only shown on BC page) */}
            {abCategories.length > 0 && (
              <>
                <div className="flex items-center gap-4" id="ab-foundation">
                  <div className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/30 rounded-full px-6 py-2 border border-purple-200 dark:border-purple-700">
                    <span className="text-2xl">∫</span>
                    <h2 className="text-xl font-bold text-purple-700 dark:text-purple-300">Calculus AB Foundation</h2>
                  </div>
                  <div className="flex-1 h-px bg-purple-200 dark:bg-purple-800" />
                </div>
                {abCategories.map((category) => (
                  <div key={category.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm ring-1 ring-purple-100 dark:ring-purple-900/50">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        {category.icon && (
                          <span className="text-3xl">{category.icon}</span>
                        )}
                        <div>
                          <Link 
                            href={`/categories/${category.slug}`}
                            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          >
                            {category.name}
                          </Link>
                          {category.description && (
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full">AB</span>
                        <Link
                          href={`/categories/${category.slug}`}
                          className="text-sm text-purple-600 hover:text-purple-700 font-medium whitespace-nowrap"
                        >
                          View All →
                        </Link>
                      </div>
                    </div>

                    {category.topics.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.topics.map((topic) => (
                          <Link
                            key={topic.id}
                            href={`/topics/${topic.slug}`}
                            className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all"
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                              {topic.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {topic.description}
                            </p>
                            {'_count' in topic && (topic as typeof topic & { _count: { subtopics: number } })._count.subtopics > 0 && (
                              <span className="inline-block mt-2 text-xs font-medium text-indigo-700 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                                {(topic as typeof topic & { _count: { subtopics: number } })._count.subtopics} subtopics
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <p className="text-lg">Topics coming soon for this category!</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Divider between AB and BC sections */}
                <div className="flex items-center gap-4" id="bc-exclusive">
                  <div className="flex items-center gap-3 bg-violet-50 dark:bg-violet-900/30 rounded-full px-6 py-2 border border-violet-200 dark:border-violet-700">
                    <span className="text-2xl">∬</span>
                    <h2 className="text-xl font-bold text-violet-700 dark:text-violet-300">BC-Exclusive Topics</h2>
                  </div>
                  <div className="flex-1 h-px bg-violet-200 dark:bg-violet-800" />
                </div>
              </>
            )}

            {course.categories.map((category) => (
              <div key={category.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {category.icon && (
                      <span className="text-3xl">{category.icon}</span>
                    )}
                    <div>
                      <Link 
                        href={`/categories/${category.slug}`}
                        className="text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {category.name}
                      </Link>
                      {category.description && (
                        <p className="text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
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
                        className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all"
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {topic.description}
                        </p>
                        {'_count' in topic && (topic as typeof topic & { _count: { subtopics: number } })._count.subtopics > 0 && (
                          <span className="inline-block mt-2 text-xs font-medium text-indigo-700 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                            {(topic as typeof topic & { _count: { subtopics: number } })._count.subtopics} subtopics
                          </span>
                        )}
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
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Content Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We&apos;re working hard to create comprehensive study materials for {course.name}.
            </p>
            <Link
              href="/"
              className="inline-block rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700"
            >
              Explore Other Courses
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}
