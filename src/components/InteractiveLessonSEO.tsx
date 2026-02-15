/**
 * InteractiveLessonSEO — Server Component
 * 
 * Renders all interactive lesson text content as server-side HTML
 * for search engine crawling. This content is visually hidden from
 * users (who see the interactive stepper) but fully crawlable by
 * Googlebot and other search engines.
 * 
 * The interactive client component (InteractiveLessonRenderer) 
 * continues to work unchanged on top of this.
 */

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import { getInteractiveLessonSEOContent, type SEOLessonContent } from '@/data/interactive-lessons/seo-content-loader'

// Minimal styled components for the SEO content
const SEOMarkdownComponents = {
  h1: ({ children }: any) => <h2 className="text-2xl font-bold mb-4 mt-6">{children}</h2>,
  h2: ({ children }: any) => <h3 className="text-xl font-semibold mb-3 mt-5">{children}</h3>,
  h3: ({ children }: any) => <h4 className="text-lg font-semibold mb-2 mt-4">{children}</h4>,
  p: ({ children }: any) => <p className="mb-3 leading-relaxed">{children}</p>,
  ul: ({ children }: any) => <ul className="list-disc list-inside mb-3 space-y-1 ml-4">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-inside mb-3 space-y-1 ml-4">{children}</ol>,
  li: ({ children }: any) => <li>{children}</li>,
  blockquote: ({ children }: any) => <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-3 italic">{children}</blockquote>,
  strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
  table: ({ children }: any) => <table className="w-full border-collapse mb-4">{children}</table>,
  th: ({ children }: any) => <th className="border border-gray-300 px-3 py-2 bg-gray-100 text-left font-semibold">{children}</th>,
  td: ({ children }: any) => <td className="border border-gray-300 px-3 py-2">{children}</td>,
}

interface InteractiveLessonSEOProps {
  topicSlug: string
  topicTitle: string
}

export default async function InteractiveLessonSEO({ topicSlug, topicTitle }: InteractiveLessonSEOProps) {
  const seoContent = await getInteractiveLessonSEOContent(topicSlug)

  if (!seoContent || seoContent.length === 0) {
    return null
  }

  // Build JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${topicTitle} - Interactive Lesson`,
    description: `Master ${topicTitle} with step-by-step interactive lessons, practice problems, and quizzes.`,
    provider: {
      '@type': 'Organization',
      name: 'Study Mondo',
      url: 'https://www.studymondo.com',
    },
    hasCourseInstance: seoContent.map((part) => ({
      '@type': 'CourseInstance',
      name: `Part ${part.partNumber}: ${part.partTitle}`,
      courseMode: 'online',
    })),
  }

  // Count total words for rich content signal
  const totalWords = seoContent.reduce((acc, part) => 
    acc + part.sections.reduce((sAcc, section) => 
      sAcc + section.content.split(/\s+/).length, 0
    ), 0
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 
        Server-rendered lesson content for SEO crawling.
        
        This article is positioned off-screen using sr-only so:
        - Googlebot and other crawlers can index all lesson text
        - Screen readers can access the content
        - Sighted users see the interactive stepper instead
        
        We use clip-based sr-only rather than display:none because
        Google may ignore display:none content, but sr-only content
        is treated as legitimate accessible content.
      */}
      <article 
        className="sr-only" 
        aria-label={`${topicTitle} complete lesson content`}
        itemScope 
        itemType="https://schema.org/Article"
      >
        <meta itemProp="name" content={`${topicTitle} - Interactive Lesson`} />
        <meta itemProp="wordCount" content={String(totalWords)} />
        
        <h2 itemProp="headline">{topicTitle} - Complete Interactive Lesson</h2>
        
        {seoContent.map((part) => (
          <section key={part.partNumber} aria-label={`Part ${part.partNumber}: ${part.partTitle}`}>
            <h3>Part {part.partNumber}: {part.partTitle}</h3>
            {part.sections.map((section) => (
              <div key={section.id}>
                <ReactMarkdown
                  remarkPlugins={[remarkMath, remarkGfm]}
                  rehypePlugins={[rehypeKatex]}
                  components={SEOMarkdownComponents}
                >
                  {section.content}
                </ReactMarkdown>
              </div>
            ))}
          </section>
        ))}
      </article>
    </>
  )
}
