import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { AdBanner, InArticleAd, SidebarAd } from '@/components/ad-banner'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import TopicContentRenderer from '@/components/TopicContentRenderer'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

interface TopicPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata with canonical URL
export async function generateMetadata(props: TopicPageProps): Promise<Metadata> {
  const params = await props.params
  const topic = await prisma.topic.findUnique({
    where: { slug: params.slug },
    select: { title: true, description: true, slug: true }
  })

  if (!topic) {
    return {}
  }

  const canonicalUrl = `https://studymondo.com/topics/${topic.slug}`

  return {
    title: `${topic.title} | Study Mondo`,
    description: topic.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: topic.title,
      description: topic.description,
      url: canonicalUrl,
      type: 'article',
    },
  }
}

// Custom components for styled markdown
const MarkdownComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-r">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-700">{children}</h3>
  ),
  p: ({ children }: any) => (
    <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
  ),
  li: ({ children }: any) => (
    <li className="text-gray-700">{children}</li>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-3 mb-4 italic rounded-r">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }: any) => 
    inline ? (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-700">{children}</code>
    ) : (
      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">{children}</code>
    ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-purple-700">{children}</strong>
  ),
}

export default async function TopicPage(props: TopicPageProps) {
  const params = await props.params
  const session = await auth()
  const isPremium = session?.user?.role === 'PREMIUM'

  const topic = await prisma.topic.findUnique({
    where: { slug: params.slug },
    include: {
      category: {
        include: {
          course: {
            select: {
              name: true,
              slug: true,
            }
          }
        }
      },
      exampleProblems: {
        orderBy: { order: 'asc' }
      }
    }
  })

  if (!topic) {
    notFound()
  }

  /* Temporarily hidden for free tier launch - all content is free
  // Check if user has access
  if (topic.isPremium && !isPremium) {
    return (
      <div className="container py-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50 p-8 text-center shadow-lg">
            <div className="text-6xl mb-4">🌟</div>
            <h1 className="text-3xl font-bold mb-4 text-purple-900">Premium Content</h1>
            <p className="text-lg mb-6 text-gray-700">
              This topic is part of our Premium content. Upgrade to access:
            </p>
            <ul className="text-left inline-block mb-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Advanced topic explanations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Video tutorials
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Additional practice problems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Spaced repetition flashcards
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Progress tracking
              </li>
            </ul>
            <div>
              <Link
                href="/premium"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700 shadow-md transition-all"
              >
                Upgrade to Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  */

  return (
    <div className="container py-10">
      {/* Top Banner Ad - High visibility */}
      <div className="mb-6">
        <AdBanner slot="topic-top" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link href="/topics" className="hover:text-purple-600 transition-colors">Topics</Link>
              {' / '}
              <Link href={`/categories/${topic.category.slug}`} className="hover:text-purple-600 transition-colors">{topic.category.name}</Link>
              {' / '}
              <span className="text-foreground font-medium">{topic.title}</span>
            </nav>

            {/* Header with gradient background */}
            <div className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold tracking-tight mb-4">{topic.title}</h1>
              <p className="text-lg text-purple-100">{topic.description}</p>
              {/* Temporarily hidden for free tier launch
              {topic.isPremium && (
                <span className="inline-flex items-center px-3 py-1 mt-3 text-xs font-semibold rounded-full bg-yellow-400 text-purple-900">
                  ⭐ Premium Content
                </span>
              )}
              */}
            </div>

            {/* Interactive Lesson Banner - Show only for topics that have it */}
            {(topic.slug === 'the-unit-circle' || topic.slug === 'factoring-algebra1') && (
              <div className="mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl">🎯</span>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-purple-900">
                        ⭐ NEW: INTERACTIVE LESSON
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Try the Interactive Version!</h3>
                    <p className="text-purple-100">Learn step-by-step with practice exercises built right in.</p>
                  </div>
                  <Link
                    href={`/topics/${topic.slug}/interactive`}
                    className="px-6 py-3 bg-white text-purple-700 rounded-lg font-bold hover:bg-yellow-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Start Interactive Lesson →
                  </Link>
                </div>
              </div>
            )}

            {/* Video (Premium only) */}
            {isPremium && topic.videoUrl && (
              <div className="mb-8 rounded-lg overflow-hidden bg-gray-100 shadow-lg border-2 border-purple-200">
                <div className="bg-purple-600 text-white px-4 py-2 font-semibold flex items-center gap-2">
                  <span className="text-xl">🎥</span> Video Explanation
                </div>
                <div className="aspect-video">
                  <iframe
                    src={topic.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* In-Content Ad (After intro, before main content) */}
            <div className="my-8">
              <InArticleAd />
            </div>

            {/* Main Content with styled boxes */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
              <div className="prose prose-lg max-w-none">
                {/* Check if content includes component markers */}
                {topic.textContent.includes('<MultiplicationAnimation') || 
                 topic.textContent.includes('<TwoDigitMultiplicationAnimation') ||
                 topic.textContent.includes('<UnitCircleTable') ? (
                  <TopicContentRenderer content={topic.textContent} />
                ) : (
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={MarkdownComponents}
                  >
                    {topic.textContent}
                  </ReactMarkdown>
                )}
              </div>
            </div>

            {/* Mid-Content Ad */}
            <div className="my-8">
              <InArticleAd />
            </div>

            {/* Example Problems with colored styling */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-3xl">📚</span> Practice Problems
                </h2>
              </div>
              <div className="space-y-6 bg-green-50 p-6 rounded-b-lg border-2 border-green-200">
                {topic.exampleProblems.length === 0 ? (
                  <p className="text-muted-foreground">No example problems available yet.</p>
                ) : (
                  topic.exampleProblems.map((problem: any, index: number) => (
                    <div key={problem.id} className="bg-white rounded-lg border-2 border-green-300 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-900">
                            Problem {index + 1}
                            <span className={`ml-2 text-sm font-normal px-2 py-1 rounded ${
                              problem.difficulty === 'EASY' ? 'bg-green-100 text-green-800' :
                              problem.difficulty === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                              problem.difficulty === 'HARD' ? 'bg-orange-100 text-orange-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {problem.difficulty.toLowerCase()}
                            </span>
                          </span>
                        </h3>
                        {/* Temporarily hidden for free tier launch
                        {problem.isPremium && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            Premium
                          </span>
                        )}
                        */}
                      </div>

                      <div className="mb-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 text-blue-900 flex items-center gap-2">
                          <span>❓</span> Question:
                        </h4>
                        <div className="prose max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                            {problem.question}
                          </ReactMarkdown>
                        </div>
                      </div>

                      {/* Show solution for all problems in free tier launch */}
                      <details className="mt-4">
                        <summary className="cursor-pointer font-semibold text-gray-900 hover:text-purple-600 bg-purple-50 p-3 rounded border-2 border-purple-200 transition-colors">
                          💡 Show Solution
                        </summary>
                        <div className="mt-4 prose max-w-none bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                            {problem.solution}
                          </ReactMarkdown>
                        </div>
                      </details>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Related Links with card styling */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <Link
                href={`/flashcards/${topic.slug}`}
                className="block rounded-lg border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 hover:shadow-lg transition-all hover:border-blue-400"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🎴</span>
                  <h3 className="font-semibold text-blue-900">Practice with Flashcards</h3>
                </div>
                <p className="text-sm text-blue-700">
                  Review key concepts with our flashcard system
                </p>
              </Link>
              <Link
                href="/topics"
                className="block rounded-lg border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 p-6 hover:shadow-lg transition-all hover:border-purple-400"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">📖</span>
                  <h3 className="font-semibold text-purple-900">Browse All Topics</h3>
                </div>
                <p className="text-sm text-purple-700">
                  Explore other calculus topics
                </p>
              </Link>
            </div>

            {/* Bottom Ad */}
            <div className="mt-8">
              <AdBanner slot="topic-bottom" />
            </div>
          </div>

          {/* Sticky Sidebar with Ads */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              {/* Sidebar Ad 1 */}
              <SidebarAd />

              {/* Quick Links Card */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-4">
                <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <span>🎯</span> Quick Navigation
                </h3>
                <div className="space-y-2 text-sm">
                  <Link href="/" className="block text-purple-700 hover:text-purple-900 hover:underline">
                    ← All Courses
                  </Link>
                  <Link href={`/courses/${topic.category.course.slug}`} className="block text-purple-700 hover:text-purple-900 hover:underline">
                    📚 {topic.category.course.name}
                  </Link>
                  <Link href={`/categories/${topic.category.slug}`} className="block text-purple-700 hover:text-purple-900 hover:underline">
                    📂 {topic.category.name}
                  </Link>
                  <Link href={`/flashcards/${topic.slug}`} className="block text-purple-700 hover:text-purple-900 hover:underline">
                    🎴 Flashcards
                  </Link>
                </div>
              </div>

              {/* Sidebar Ad 2 */}
              <SidebarAd />

              {/* Study Tips Card */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <span>💡</span> Study Tips
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Work through examples step-by-step</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Practice with flashcards daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Review common mistakes</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
