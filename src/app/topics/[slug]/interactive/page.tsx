import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import InteractiveLessonRenderer from '@/components/InteractiveLessonRenderer'
import 'katex/dist/katex.min.css'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

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
    select: { title: true, description: true, slug: true }
  })

  if (!topic) {
    return {}
  }

  const canonicalUrl = `https://studymondo.com/topics/${topic.slug}/interactive`

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
      category: {
        select: {
          name: true,
          slug: true
        }
      }
    }
  })

  if (!topic) {
    notFound()
  }

  // For now, we'll hardcode the unit circle interactive lesson
  // Later we'll store this in the database
  const isUnitCircle = topic.slug === 'the-unit-circle'

  if (!isUnitCircle) {
    // Redirect to regular topic page if no interactive lesson exists
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Interactive Lesson Coming Soon!</h1>
          <p className="text-gray-600 mb-6">
            We're working on creating an interactive version of this lesson.
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
    <div className="container py-10">
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
        <div className="mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🎯</span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-purple-900">
              ⭐ INTERACTIVE LESSON
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{topic.title}</h1>
          <p className="text-lg text-purple-100">Learn step-by-step with interactive practice!</p>
        </div>

        {/* Interactive Lesson Renderer */}
        <InteractiveLessonRenderer topicSlug={topic.slug} />

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
  )
}
