import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { AdBanner, InArticleAd, SidebarAd } from '@/components/ad-banner'
import { EmailCapture } from '@/components/email-capture'
import { generateTopicFaqs } from '@/lib/topic-faqs'
import { faqJsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { MarkdownCallout } from '@/components/MarkdownCallout'
import { isPlaceholderContent } from '@/lib/placeholder-content'

function TopicBottomAd() {
  const slot = process.env.NEXT_PUBLIC_AD_SLOT_TOPIC_BOTTOM
  if (!slot) return null
  return <AdBanner slot={slot} />
}
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import TopicContentRenderer from '@/components/TopicContentRenderer'
import type { ReactNode } from 'react'
import { SocialShare } from '@/components/SocialShare'
import { ArticleByline } from '@/components/ArticleByline'
import { TopicContentTools } from '@/components/TopicContentTools'
import TrackedLink from '@/components/TrackedLink'
import { getTopicAdVariant } from '@/lib/experiments'

// ISR: revalidate content every hour (content rarely changes)
export const revalidate = 3600

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
    select: {
      title: true,
      description: true,
      slug: true,
      textContent: true,
      _count: { select: { exampleProblems: true, subtopics: true } },
    }
  })

  if (!topic) {
    return {}
  }

  const canonicalUrl = `https://www.studymondo.com/topics/${topic.slug}`

  // Noindex genuinely thin pages: very little written content AND no practice
  // problems AND no subtopics. Keeps low-value pages out of the index so the
  // site is judged on its substantial content.
  const contentLength = (topic.textContent || '').trim().length
  const isThin =
    contentLength < 600 &&
    topic._count.exampleProblems === 0 &&
    topic._count.subtopics === 0

  return {
    title: `${topic.title} | Study Mondo`,
    description: topic.description,
    alternates: {
      canonical: canonicalUrl,
    },
    ...(isThin ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: topic.title,
      description: topic.description,
      url: canonicalUrl,
      type: 'article',
    },
  }
}

// Custom components for styled markdown
type MarkdownChildrenProps = {
  children?: ReactNode
}

type MarkdownCodeProps = {
  inline?: boolean
  children?: ReactNode
}

const MarkdownComponents = {
  h1: ({ children }: MarkdownChildrenProps) => (
    <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900 dark:text-gray-100">{children}</h1>
  ),
  h2: ({ children }: MarkdownChildrenProps) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100 border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/30 py-2 rounded-r">{children}</h2>
  ),
  h3: ({ children }: MarkdownChildrenProps) => (
    <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-700 dark:text-gray-200">{children}</h3>
  ),
  p: ({ children }: MarkdownChildrenProps) => (
    <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>
  ),
  ul: ({ children }: MarkdownChildrenProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
  ),
  ol: ({ children }: MarkdownChildrenProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
  ),
  li: ({ children }: MarkdownChildrenProps) => (
    <li className="text-gray-700 dark:text-gray-300">{children}</li>
  ),
  blockquote: ({ children }: MarkdownChildrenProps) => (
    <MarkdownCallout
      fallback={(c) => (
        <blockquote className="!border-l-4 !border-purple-500 dark:!border-purple-400 !bg-gradient-to-r !from-purple-50 !to-transparent dark:!from-purple-900/20 dark:!to-transparent !pl-4 !py-3 !mb-4 italic !rounded-r !shadow-none">
          {c}
        </blockquote>
      )}
    >
      {children}
    </MarkdownCallout>
  ),
  code: ({ inline, children }: MarkdownCodeProps) => 
    inline ? (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-700 dark:text-purple-300">{children}</code>
    ) : (
      <code className="block bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">{children}</code>
    ),
  strong: ({ children }: MarkdownChildrenProps) => (
    <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
  ),
  hr: () => (
    <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" />
  ),
  table: ({ children }: MarkdownChildrenProps) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: MarkdownChildrenProps) => (
    <thead className="bg-purple-50 dark:bg-purple-900/30">
      {children}
    </thead>
  ),
  th: ({ children }: MarkdownChildrenProps) => (
    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
      {children}
    </th>
  ),
  td: ({ children }: MarkdownChildrenProps) => (
    <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">
      {children}
    </td>
  ),
  tr: ({ children }: MarkdownChildrenProps) => (
    <tr className="even:bg-gray-50 dark:even:bg-gray-800/50">
      {children}
    </tr>
  ),
}

export default async function TopicPage(props: TopicPageProps) {
  const params = await props.params

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
      },
      parentTopic: {
        select: { slug: true, title: true }
      },
      subtopics: {
        orderBy: { order: 'asc' },
        select: {
          slug: true,
          title: true,
          description: true,
          order: true,
          _count: { select: { exampleProblems: true } }
        }
      }
    }
  })

  if (!topic) {
    notFound()
  }

  // Query adjacent topics in the same category for next/prev navigation
  const siblingTopics = await prisma.topic.findMany({
    where: { categoryId: topic.categoryId },
    select: { slug: true, title: true, order: true },
    orderBy: { order: 'asc' },
  })
  const currentIdx = siblingTopics.findIndex((t) => t.slug === topic.slug)
  const prevTopic = currentIdx > 0 ? siblingTopics[currentIdx - 1] : null
  const nextTopic = currentIdx < siblingTopics.length - 1 ? siblingTopics[currentIdx + 1] : null

  // Related topics: other topics in the same category (excluding current), limited to 6
  const relatedTopics = siblingTopics
    .filter((t) => t.slug !== topic.slug)
    .slice(0, 6)
  const topicAdVariant = getTopicAdVariant(topic.slug)

  // Some topics were seeded with a placeholder stub ("<Title> content") and have
  // no problems/flashcards yet. Don't render the stub as a lesson — show a
  // focused "coming soon" state instead.
  if (isPlaceholderContent(topic.textContent) && topic.exampleProblems.length === 0) {
    return (
      <div className="container py-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-10 shadow-sm">
            <div className="text-5xl mb-4">📝</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{topic.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We&apos;re still writing this lesson. In the meantime, explore related topics and
              practice in this subject — full content for this topic is coming soon.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={`/categories/${topic.category.slug}`} className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-base font-semibold text-white hover:bg-purple-700">
                Browse {topic.category.name}
              </Link>
              <Link href="/topics" className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 px-6 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                All topics
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
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
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', url: '/' },
              { name: topic.category.course.name, url: `/courses/${topic.category.course.slug}` },
              { name: topic.category.name, url: `/categories/${topic.category.slug}` },
              ...(topic.parentTopic
                ? [{ name: topic.parentTopic.title, url: `/topics/${topic.parentTopic.slug}` }]
                : []),
              { name: topic.title, url: `/topics/${topic.slug}` },
            ])
          ),
        }}
      />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: topic.title,
            description: topic.description,
            url: `https://www.studymondo.com/topics/${topic.slug}`,
            dateModified: topic.updatedAt,
            datePublished: topic.createdAt,
            author: {
              '@type': 'Person',
              name: 'Brendan Cusack',
              url: 'https://www.studymondo.com/about',
            },
            reviewedBy: {
              '@type': 'Person',
              name: 'Brendan Cusack',
            },
            provider: {
              '@type': 'Organization',
              name: 'Study Mondo',
              url: 'https://www.studymondo.com',
            },
            educationalLevel: 'High School / AP',
            isPartOf: {
              '@type': 'Course',
              name: topic.category.course.name,
              url: `https://www.studymondo.com/courses/${topic.category.course.slug}`,
            },
            learningResourceType: ['lesson', 'practice problem'],
            inLanguage: 'en',
          }),
        }}
      />
      {/* FAQ JSON-LD for rich snippets */}
      {(() => {
        const faqs = generateTopicFaqs({
          title: topic.title,
          description: topic.description,
          courseName: topic.category.course.name,
          categoryName: topic.category.name,
          hasPracticeProblems: topic.exampleProblems.length > 0,
          problemCount: topic.exampleProblems.length,
        })
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
          />
        )
      })()}

      <div className="mx-auto max-w-7xl">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link href="/topics" className="hover:text-purple-600 transition-colors">Topics</Link>
              {' / '}
              <Link href={`/categories/${topic.category.slug}`} className="hover:text-purple-600 transition-colors">{topic.category.name}</Link>
              {topic.parentTopic && (
                <>
                  {' / '}
                  <Link href={`/topics/${topic.parentTopic.slug}`} className="hover:text-purple-600 transition-colors">{topic.parentTopic.title}</Link>
                </>
              )}
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

            {/* Editorial byline — author/reviewer + last-updated (E-E-A-T) */}
            <ArticleByline updatedAt={topic.updatedAt} className="mb-6" />

            {/* Social sharing */}
            <div className="mb-6 social-share">
              <SocialShare
                url={`https://www.studymondo.com/topics/${topic.slug}`}
                title={`${topic.title} - Study Mondo`}
                description={topic.description}
              />
            </div>

            {/* Ad experiment: high-density cohort gets one additional early ad slot */}
            {topicAdVariant === 'high-density' && (
              <div className="mb-8">
                <InArticleAd />
              </div>
            )}

            {/* Subtopics Grid — shown when this topic has child topics */}
            {topic.subtopics.length > 0 && (
              <div className="mb-10">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-t-lg">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <span className="text-3xl">📂</span> Subtopics in {topic.title}
                  </h2>
                  <p className="text-indigo-100 mt-1">Select a subtopic below to start studying</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-b-lg border-2 border-indigo-200 dark:border-indigo-800">
                  {topic.subtopics.map((sub, idx) => (
                    <Link
                      key={sub.slug}
                      href={`/topics/${sub.slug}`}
                      className="group block bg-white dark:bg-gray-900 rounded-lg border-2 border-indigo-200 dark:border-indigo-700 p-5 hover:border-purple-400 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-1">
                            {sub.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {sub.description}
                          </p>
                          {sub._count.exampleProblems > 0 && (
                            <span className="inline-block mt-2 text-xs font-medium text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                              {sub._count.exampleProblems} practice {sub._count.exampleProblems === 1 ? 'problem' : 'problems'}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-400 group-hover:text-purple-500 transition-colors text-lg">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Lesson Banner - Show for all topics */}
            <div className="mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">🎯</span>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-purple-900">
                      ⭐ INTERACTIVE LESSON
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

            {/* Video - Temporarily hidden for free tier launch
            {topic.videoUrl && (
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
            */}

            {/* Main Content with styled boxes */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <div className="prose prose-lg max-w-none">
                {/* Check if content includes component markers */}
                {topic.textContent.includes('<MultiplicationAnimation') || 
                 topic.textContent.includes('<TwoDigitMultiplicationAnimation') ||
                 topic.textContent.includes('<UnitCircleTable') ? (
                  <TopicContentRenderer content={topic.textContent} />
                ) : (
                  <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    components={MarkdownComponents}
                  >
                    {escapeCurrencyMath(topic.textContent)}
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
              <div className="space-y-6 bg-green-50 dark:bg-green-900/10 p-6 rounded-b-lg border-2 border-green-200 dark:border-green-800">
                {topic.exampleProblems.length === 0 ? (
                  <p className="text-muted-foreground">No example problems available yet.</p>
                ) : (
                  topic.exampleProblems.map((problem, index: number) => (
                    <div key={problem.id}>
                    <div className="bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-900 dark:text-gray-100">
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

                      <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-200 flex items-center gap-2">
                          <span>❓</span> Question:
                        </h4>
                        <div className="prose max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                            {escapeCurrencyMath(problem.question)}
                          </ReactMarkdown>
                        </div>
                      </div>

                      {/* Show solution for all problems in free tier launch */}
                      <details className="mt-4">
                        <summary className="cursor-pointer font-semibold text-gray-900 dark:text-gray-100 hover:text-purple-600 bg-purple-50 dark:bg-purple-900/30 p-3 rounded border-2 border-purple-200 dark:border-purple-700 transition-colors">
                          💡 Show Solution
                        </summary>
                        <div className="mt-4 prose max-w-none bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                            {escapeCurrencyMath(problem.solution)}
                          </ReactMarkdown>
                        </div>
                      </details>
                    </div>
                    {/* Ad after every 4th practice problem */}
                    {(index + 1) % 4 === 0 && index < topic.exampleProblems.length - 1 && (
                      <div className="my-2">
                        <InArticleAd />
                      </div>
                    )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Content Enrichment Tools */}
            <TopicContentTools
              topicTitle={topic.title}
              topicSlug={topic.slug}
              courseName={topic.category.course.name}
            />

            {/* Next / Previous Topic Navigation */}
            {(prevTopic || nextTopic) && (
              <div className="mt-12 flex justify-between items-stretch gap-4">
                {prevTopic ? (
                  <Link
                    href={`/topics/${prevTopic.slug}`}
                    className="flex-1 block rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 hover:border-purple-400 hover:shadow-md transition-all group"
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">← Previous Topic</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {prevTopic.title}
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextTopic ? (
                  <Link
                    href={`/topics/${nextTopic.slug}`}
                    className="flex-1 block rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 hover:border-purple-400 hover:shadow-md transition-all text-right group"
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next Topic →</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {nextTopic.title}
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            )}

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
                  Explore more {topic.category.course.name} topics
                </p>
              </Link>
            </div>

            {/* Related Topics in this category */}
            {relatedTopics.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>📌</span> Related Topics in {topic.category.name}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedTopics.map((rt) => (
                    <TrackedLink
                      key={rt.slug}
                      href={`/topics/${rt.slug}`}
                      eventName="related_topic_click"
                      eventParams={{
                        page_template: 'topic_page',
                        source_topic_slug: topic.slug,
                        destination: `/topics/${rt.slug}`,
                        cta_type: 'related_topic_card',
                        location: 'topic_related_section',
                      }}
                      className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-purple-400 hover:shadow-md transition-all group"
                    >
                      <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                        {rt.title}
                      </span>
                    </TrackedLink>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Section for SEO + user value */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span>❓</span> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {generateTopicFaqs({
                  title: topic.title,
                  description: topic.description,
                  courseName: topic.category.course.name,
                  categoryName: topic.category.name,
                  hasPracticeProblems: topic.exampleProblems.length > 0,
                  problemCount: topic.exampleProblems.length,
                }).map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg">
                      {faq.question}
                      <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">▾</span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom Ad */}
            <div className="mt-8">
              <TopicBottomAd />
            </div>
          </div>

          {/* Sticky Sidebar with Ads */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
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

              {/* Email Capture */}
              <EmailCapture
                source="topic-sidebar"
                interests={[topic.category.course.slug]}
                heading="Free Study Tips"
                description="Get weekly tips and practice problems for this course."
                buttonText="Subscribe"
                compact
              />

              {/* Sidebar Ad (desktop only) */}
              <SidebarAd />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
