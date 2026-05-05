import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import CourseEntranceQuiz from '@/components/CourseEntranceQuiz'
import DiagnosticStudyPlanBanner from '@/components/DiagnosticStudyPlanBanner'
import TrackedLink from '@/components/TrackedLink'
import {
  courseDailyQuestionMap,
  courseDiagnosticMap,
  courseFlashcardMap,
  courseFRQMap,
  coursePracticeTestMap,
  courseScorePredictorMap,
  courseStudyPlanMap,
} from '@/data/course-feature-config'
import { CRAM_PLANS, isCramPlanCourse } from '@/data/cram-plans'

// ISR: revalidate content every hour
export const revalidate = 3600

// Pre-render all course pages at build time for faster TTFB and better crawlability
export async function generateStaticParams() {
  try {
    const courses = await prisma.course.findMany({
      select: { slug: true },
    })
    return courses.map((course) => ({ slug: course.slug }))
  } catch (error) {
    console.warn('Skipping static course params generation because database is unavailable at build time.', error)
    return []
  }
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
  const featuredTopics = allCategories.flatMap((cat) => cat.topics).slice(0, 8)

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

        {/* Personalized study plan from previous diagnostic — shown prominently at top */}
        <DiagnosticStudyPlanBanner courseSlug={slug} />

        {/* Course Overview */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 mb-12 shadow-sm">
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
          const diag = courseDiagnosticMap[slug]
          if (!diag) return null
          const predictor = courseScorePredictorMap[slug]
          const dailyQuestion = courseDailyQuestionMap[slug]
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
                <div className="flex flex-col sm:flex-row gap-2">
                  <TrackedLink
                    href={diag.href}
                    eventName="course_cta_click"
                    eventParams={{
                      course_slug: slug,
                      course_name: course.name,
                      page_template: 'course_page',
                      cta_type: 'diagnostic',
                      destination: diag.href,
                      location: 'course_header_cta',
                    }}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r ${diag.btnGradient} px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl`}
                  >
                    Take Diagnostic Test →
                  </TrackedLink>
                  {predictor && (
                    <TrackedLink
                      href={predictor.href}
                      eventName="course_cta_click"
                      eventParams={{
                        course_slug: slug,
                        course_name: course.name,
                        page_template: 'course_page',
                        cta_type: 'score_predictor',
                        destination: predictor.href,
                        location: 'course_header_cta',
                      }}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-white/70 bg-white/70 px-6 py-3 font-semibold text-gray-800 transition hover:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:bg-gray-800"
                    >
                      {predictor.label}
                    </TrackedLink>
                  )}
                  {dailyQuestion && (
                    <TrackedLink
                      href={dailyQuestion.href}
                      eventName="course_cta_click"
                      eventParams={{
                        course_slug: slug,
                        course_name: course.name,
                        page_template: 'course_page',
                        cta_type: 'daily_question',
                        destination: dailyQuestion.href,
                        location: 'course_header_cta',
                      }}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-white/70 bg-white/70 px-6 py-3 font-semibold text-gray-800 transition hover:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:bg-gray-800"
                    >
                      {dailyQuestion.label}
                    </TrackedLink>
                  )}
                </div>
              </div>
            </div>
          )
        })()}

        {/* Extra feature links — shown when course has practice test, FRQ, study plans, or flashcards */}
        {(() => {
          const practice = coursePracticeTestMap[slug]
          const frq = courseFRQMap[slug]
          const studyPlan = courseStudyPlanMap[slug]
          const flashcards = courseFlashcardMap[slug]
          const links = [practice, frq, studyPlan, flashcards].filter(Boolean)
          if (links.length === 0) return null
          const btnClass = 'inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/20'
          return (
            <div className="flex flex-wrap gap-3 mb-8">
              {practice && (
                <TrackedLink href={practice.href} eventName="course_cta_click" eventParams={{ course_slug: slug, course_name: course.name, page_template: 'course_page', cta_type: 'practice_test', destination: practice.href, location: 'course_feature_links' }} className={btnClass}>
                  📝 {practice.label}
                </TrackedLink>
              )}
              {frq && (
                <TrackedLink href={frq.href} eventName="course_cta_click" eventParams={{ course_slug: slug, course_name: course.name, page_template: 'course_page', cta_type: 'frq', destination: frq.href, location: 'course_feature_links' }} className={btnClass}>
                  ✍️ {frq.label}
                </TrackedLink>
              )}
              {studyPlan && (
                <TrackedLink href={studyPlan.href} eventName="course_cta_click" eventParams={{ course_slug: slug, course_name: course.name, page_template: 'course_page', cta_type: 'study_plans', destination: studyPlan.href, location: 'course_feature_links' }} className={btnClass}>
                  📅 {studyPlan.label}
                </TrackedLink>
              )}
              {flashcards && (
                <TrackedLink href={flashcards.href} eventName="course_cta_click" eventParams={{ course_slug: slug, course_name: course.name, page_template: 'course_page', cta_type: 'flashcards', destination: flashcards.href, location: 'course_feature_links' }} className={btnClass}>
                  🃏 {flashcards.label}
                </TrackedLink>
              )}
            </div>
          )
        })()}

        {/* Ad placement after course overview */}
        <InArticleAd />

        {/* Cram Plans & Study Guides — links to /courses/[slug]/cram/[plan] pages */}
        {isCramPlanCourse(slug) && (
          <section className="mt-8 mb-12 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 shadow-sm dark:border-indigo-800 dark:from-indigo-950/40 dark:via-gray-900 dark:to-purple-950/40">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  📚 Study Plans &amp; Cram Guides
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pick the plan that matches your timeline — from a 1-month build-up to a night-before review.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CRAM_PLANS.map((plan) => (
                <TrackedLink
                  key={plan.slug}
                  href={`/courses/${slug}/cram/${plan.slug}`}
                  eventName="course_cta_click"
                  eventParams={{
                    course_slug: slug,
                    course_name: course.name,
                    page_template: 'course_page',
                    cta_type: 'cram_plan',
                    plan_slug: plan.slug,
                    destination: `/courses/${slug}/cram/${plan.slug}`,
                    location: 'course_study_plans_box',
                  }}
                  className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-indigo-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-indigo-500"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{plan.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {plan.titleSuffix}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{plan.tagline}</p>
                  <p className="mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">{plan.estimate}</p>
                </TrackedLink>
              ))}
            </div>
          </section>
        )}

        {/* Related-topic discovery cards */}
        {featuredTopics.length > 0 && (
          <section className="mt-8 mb-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Explore Related Topics</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
              Jump into high-impact topics and keep your study momentum moving.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {featuredTopics.map((topic) => (
                <TrackedLink
                  key={topic.id}
                  href={`/topics/${topic.slug}`}
                  eventName="related_topic_click"
                  eventParams={{
                    page_template: 'course_page',
                    course_slug: slug,
                    destination: `/topics/${topic.slug}`,
                    cta_type: 'related_topic_card',
                    location: 'course_featured_topics',
                  }}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-indigo-400 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/20"
                >
                  {topic.title}
                </TrackedLink>
              ))}
            </div>
          </section>
        )}

        {/* Exit Quiz Mode — show entrance quiz + filtered topics */}
        {isExitQuizMode && (
          <CourseEntranceQuiz
            courseSlug={slug}
            courseName={course.name}
            categories={allCategories.map(cat => ({
              id: cat.id,
              name: cat.name,
              slug: cat.slug,
              description: cat.description,
              icon: cat.icon,
              topics: cat.topics.map(t => ({
                id: t.id,
                slug: t.slug,
                title: t.title,
                description: t.description,
                subtopicCount: t._count.subtopics,
              })),
            }))}
          />
        )}

        {/* Categories Grid — only shown in normal mode */}
        {!isExitQuizMode && allCategories.length > 0 ? (
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
                  <div key={category.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 shadow-sm ring-1 ring-purple-100 dark:ring-purple-900/50">
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
              <div key={category.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 shadow-sm">
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
