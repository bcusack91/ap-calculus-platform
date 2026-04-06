import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import InteractiveLessonSEO from '@/components/InteractiveLessonSEO'
import ClientLessonRenderer from '@/components/ClientLessonRenderer'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { preloadAllLessonParts } from '@/data/interactive-lessons/server-loader'
import 'katex/dist/katex.min.css'

// ISR: revalidate every hour
export const revalidate = 3600

interface InteractivePageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata
export async function generateMetadata(props: InteractivePageProps): Promise<Metadata> {
  const params = await props.params
  const topic = await prisma.topic.findUnique({
    where: { slug: params.slug },
    select: { title: true, description: true, slug: true, textContent: true }
  })

  if (!topic) {
    return {}
  }

  // Check if this topic has actual interactive content
  const hasLesson = hasInteractiveLesson(topic.slug)
  const hasDynamic = !hasLesson && !!topic.textContent?.trim()

  // Noindex pages with no interactive content
  if (!hasLesson && !hasDynamic) {
    return {
      title: `${topic.title} - Interactive Lesson | Study Mondo`,
      robots: { index: false, follow: false },
    }
  }

  const canonicalUrl = `https://www.studymondo.com/topics/${topic.slug}/interactive`

  return {
    title: `${topic.title} - Interactive Lesson | Study Mondo`,
    description: `Master ${topic.title} with our interactive, step-by-step lesson. Practice as you learn!`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${topic.title} - Interactive Lesson`,
      description: topic.description,
      url: canonicalUrl,
      type: 'article',
    },
  }
}

export default async function InteractivePage(props: InteractivePageProps) {
  const params = await props.params
  
  const topic = await prisma.topic.findUnique({
    where: { slug: params.slug },
    select: {
      id: true,
      title: true,
      description: true,
      slug: true,
      textContent: true,
      category: {
        select: {
          name: true,
          slug: true,
          course: {
            select: {
              slug: true
            }
          }
        }
      }
    }
  })

  if (!topic) {
    notFound()
  }

  // Check if we have a hand-crafted interactive lesson for this topic
  const hasHandCraftedLesson = hasInteractiveLesson(topic.slug)
  // If no hand-crafted lesson, we'll use the dynamic renderer with textContent
  const hasDynamicContent = !hasHandCraftedLesson && !!topic.textContent?.trim()

  // Pre-load lesson parts on the server to avoid client-side dynamic imports
  // (client-side chunks may not deploy to CDN with large numbers of lesson files)
  const lessonConfig = hasHandCraftedLesson
    ? await preloadAllLessonParts(topic.slug)
    : null

  if (!hasHandCraftedLesson && !hasDynamicContent) {
    // No hand-crafted lesson AND no textContent to generate from
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Interactive Lesson Coming Soon!</h1>
          <p className="text-gray-600 mb-6">
            We&apos;re working on creating an interactive version of this lesson.
          </p>
          <Link 
            href={`/topics/${topic.slug}`}
            className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-base font-semibold text-white hover:bg-purple-700"
          >
            View Standard Lesson
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="container pt-4 pb-10">
        {/* Load KaTeX from CDN */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" 
          strategy="beforeInteractive"
        />
        
        <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-muted-foreground">
          <Link href="/topics" className="hover:text-purple-600 transition-colors">Topics</Link>
          {' / '}
          <Link href={`/categories/${topic.category.slug}`} className="hover:text-purple-600 transition-colors">{topic.category.name}</Link>
          {' / '}
          <Link href={`/topics/${topic.slug}`} className="hover:text-purple-600 transition-colors">{topic.title}</Link>
          {' / '}
          <span className="text-foreground font-medium">Interactive</span>
        </nav>

        {/* Header with special interactive badge */}
        <div className="mb-4 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🎯</span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-purple-900">
              ⭐ INTERACTIVE LESSON
            </span>
          </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{topic.title}</h1>
            <p className="text-lg text-purple-100">Learn step-by-step with interactive practice!</p>
          </div>
        </div>

        {/* Interactive Lesson Renderer (client-side stepper) */}
        {hasHandCraftedLesson && lessonConfig && lessonConfig.parts.length > 0 ? (
          <ClientLessonRenderer
            mode="handcrafted"
            topicSlug={topic.slug}
            courseSlug={topic.category.course.slug}
            preloadedParts={lessonConfig.parts}
            variantParts={lessonConfig.variantParts}
            totalVariants={lessonConfig.totalVariants}
            completionDestination={lessonConfig.completionDestination}
            practiceModeParts={lessonConfig.practiceModeParts}
          />
        ) : (
          <ClientLessonRenderer
            mode="dynamic"
            topicSlug={topic.slug}
            courseSlug={topic.category.course.slug}
            textContent={topic.textContent!}
          />
        )}

        {/* SEO: Server-rendered lesson content for search engine crawling */}
        {/* This renders all lesson text as HTML that Googlebot can index.
            Visually hidden (sr-only) so users see the interactive stepper above. */}
        {hasHandCraftedLesson && (
          <InteractiveLessonSEO topicSlug={topic.slug} topicTitle={topic.title} />
        )}

        {/* Link back to standard lesson */}
        <div className="mt-8 text-center">
          <Link 
            href={`/topics/${topic.slug}`}
            className="text-purple-600 hover:text-purple-700 underline"
          >
            ← Back to Standard Lesson
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
