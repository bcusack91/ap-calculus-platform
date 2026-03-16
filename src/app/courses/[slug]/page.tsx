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
  searchParams: Promise<{
    exitQuiz?: string
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

export default async function CoursePage({ params, searchParams: searchParamsPromise }: CoursePageProps) {
  const { slug } = await params
  const searchParams = await searchParamsPromise
  const isExitQuizMode = searchParams?.exitQuiz === 'true'
  
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
    purple: { bg: 'from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30', gradient: 'from-purple-600 to-blue-600' },
    blue: { bg: 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30', gradient: 'from-blue-600 to-cyan-600' },
    green: { bg: 'from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30', gradient: 'from-green-600 to-emerald-600' },
    teal: { bg: 'from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30', gradient: 'from-teal-600 to-cyan-600' },
    indigo: { bg: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30', gradient: 'from-indigo-600 to-purple-600' },
    violet: { bg: 'from-violet-50 to-violet-100 dark:from-violet-900/30 dark:to-violet-800/30', gradient: 'from-violet-600 to-fuchsia-600' },
    orange: { bg: 'from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30', gradient: 'from-orange-600 to-red-600' },
    rose: { bg: 'from-rose-50 to-rose-100 dark:from-rose-900/30 dark:to-rose-800/30', gradient: 'from-rose-600 to-pink-600' },
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

        {/* Diagnostic Test CTA — shown for all courses that have a diagnostic */}
        {(() => {
          const diagnosticMap: Record<string, { href: string; icon: string; description: string; borderColor: string; bgGradient: string; btnGradient: string }> = {
            'ap-chemistry': { href: '/ap-chem-diagnostic', icon: '🧪', description: 'Take a diagnostic test covering all 9 AP Chemistry units. Get a personalized study plan with 3-5 modules to focus on.', borderColor: 'border-orange-300 dark:border-orange-700', bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20', btnGradient: 'from-orange-600 to-red-600' },
            'ap-calculus-ab': { href: '/calcab-diagnostic', icon: '∫', description: 'Take a diagnostic test covering all 7 AP Calculus AB units. Get a personalized study plan with 3-5 modules to focus on.', borderColor: 'border-purple-300 dark:border-purple-700', bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20', btnGradient: 'from-purple-600 to-violet-600' },
            'ap-calculus-bc': { href: '/calcbc-diagnostic', icon: '∬', description: 'Take a diagnostic test covering AB foundations and BC-exclusive content. Get your BC score, AB subscore, and a personalized study plan.', borderColor: 'border-violet-300 dark:border-violet-700', bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20', btnGradient: 'from-violet-600 to-purple-600' },
            'ap-biology': { href: '/ap-bio-diagnostic', icon: '🧬', description: 'Take a diagnostic test covering all AP Biology units. Identify your strengths and get a personalized study plan.', borderColor: 'border-green-300 dark:border-green-700', bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20', btnGradient: 'from-green-600 to-emerald-600' },
            'ap-statistics': { href: '/ap-stats-diagnostic', icon: '📊', description: 'Take a diagnostic test covering all AP Statistics units. Find your weak areas and get a targeted study plan.', borderColor: 'border-blue-300 dark:border-blue-700', bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', btnGradient: 'from-blue-600 to-cyan-600' },
            'ap-psychology': { href: '/ap-psych-diagnostic', icon: '🧠', description: 'Take a diagnostic test covering all AP Psychology units. Get a personalized study plan targeting your weak areas.', borderColor: 'border-pink-300 dark:border-pink-700', bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20', btnGradient: 'from-pink-600 to-rose-600' },
            'ap-physics-1': { href: '/ap-physics1-diagnostic', icon: '⚡', description: 'Take a diagnostic test covering all AP Physics 1 units. Identify your strengths and get a focused study plan.', borderColor: 'border-indigo-300 dark:border-indigo-700', bgGradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20', btnGradient: 'from-indigo-600 to-blue-600' },
            'ap-physics-2': { href: '/ap-physics2-diagnostic', icon: '🔬', description: 'Take a diagnostic test covering all AP Physics 2 units. Find your weak areas and build a targeted study plan.', borderColor: 'border-teal-300 dark:border-teal-700', bgGradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20', btnGradient: 'from-teal-600 to-cyan-600' },
            'ap-physics-c-mechanics': { href: '/ap-physics-c-mech-diagnostic', icon: '🔧', description: 'Take a diagnostic test covering all AP Physics C: Mechanics units. Get a personalized study plan.', borderColor: 'border-slate-300 dark:border-slate-700', bgGradient: 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20', btnGradient: 'from-slate-600 to-gray-600' },
            'ap-physics-c-em': { href: '/ap-physics-c-em-diagnostic', icon: '🧲', description: 'Take a diagnostic test covering all AP Physics C: E&M units. Identify gaps and get a targeted study plan.', borderColor: 'border-amber-300 dark:border-amber-700', bgGradient: 'from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20', btnGradient: 'from-amber-600 to-yellow-600' },
            'organic-chemistry': { href: '/ochem-diagnostic', icon: '⚗️', description: 'Take a diagnostic test covering all Organic Chemistry topics. Get a personalized study plan for your weak areas.', borderColor: 'border-emerald-300 dark:border-emerald-700', bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20', btnGradient: 'from-emerald-600 to-green-600' },
            'algebra-1': { href: '/algebra1-diagnostic', icon: '📐', description: 'Take a diagnostic test covering all Algebra 1 topics. Pinpoint areas to improve and get a study plan.', borderColor: 'border-sky-300 dark:border-sky-700', bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20', btnGradient: 'from-sky-600 to-blue-600' },
            'algebra-2': { href: '/algebra2-diagnostic', icon: '📏', description: 'Take a diagnostic test covering all Algebra 2 topics. Identify your strengths and areas to work on.', borderColor: 'border-cyan-300 dark:border-cyan-700', bgGradient: 'from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20', btnGradient: 'from-cyan-600 to-sky-600' },
            'geometry': { href: '/geometry-diagnostic', icon: '📐', description: 'Take a diagnostic test covering all Geometry topics. Build a targeted study plan for your weak areas.', borderColor: 'border-rose-300 dark:border-rose-700', bgGradient: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20', btnGradient: 'from-rose-600 to-pink-600' },
            'pre-algebra': { href: '/prealgebra-diagnostic', icon: '🔢', description: 'Take a diagnostic test covering all Pre-Algebra topics. Find out what to focus on with a personalized plan.', borderColor: 'border-lime-300 dark:border-lime-700', bgGradient: 'from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20', btnGradient: 'from-lime-600 to-green-600' },
            'precalculus': { href: '/precalc-diagnostic', icon: '📈', description: 'Take a diagnostic test covering all Precalculus topics. Get a personalized plan to strengthen weak areas.', borderColor: 'border-fuchsia-300 dark:border-fuchsia-700', bgGradient: 'from-fuchsia-50 to-purple-50 dark:from-fuchsia-900/20 dark:to-purple-900/20', btnGradient: 'from-fuchsia-600 to-purple-600' },
            'ap-precalculus': { href: '/ap-precalculus-diagnostic', icon: '📉', description: 'Take a diagnostic test covering all AP Precalculus units. Identify gaps and get a targeted study plan.', borderColor: 'border-violet-300 dark:border-violet-700', bgGradient: 'from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20', btnGradient: 'from-violet-600 to-indigo-600' },
            'grade-8-math': { href: '/grade8-math-diagnostic', icon: '🎓', description: 'Take a diagnostic test covering all Grade 8 Math topics. Get a personalized study plan for improvement.', borderColor: 'border-yellow-300 dark:border-yellow-700', bgGradient: 'from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20', btnGradient: 'from-yellow-600 to-amber-600' },
          }
          const diag = diagnosticMap[slug]
          if (!diag) return null
          return (
            <div className={`rounded-2xl border-2 ${diag.borderColor} bg-gradient-to-r ${diag.bgGradient} p-8 mb-12 shadow-sm`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {diag.icon} Not sure where to start?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {diag.description}
                  </p>
                </div>
                <Link
                  href={diag.href}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r ${diag.btnGradient} px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl`}
                >
                  Take Diagnostic Test →
                </Link>
              </div>
            </div>
          )
        })()}

        {/* Ad placement after course overview */}
        <InArticleAd />

        {/* Exit Quiz Mode Banner */}
        {isExitQuizMode && (
          <div className="rounded-2xl border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📝</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Exit Quiz Mode</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Select a topic below to take an exit quiz. Score well and you can skip sections you already know!
                </p>
              </div>
            </div>
          </div>
        )}

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
                            href={isExitQuizMode ? `/topics/${topic.slug}/interactive?exitQuiz=true` : `/topics/${topic.slug}`}
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
                        href={isExitQuizMode ? `/topics/${topic.slug}/interactive?exitQuiz=true` : `/topics/${topic.slug}`}
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
