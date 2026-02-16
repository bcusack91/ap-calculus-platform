'use client'

import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { useSession } from 'next-auth/react'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DynamicSection {
  id: string
  title: string
  content: string
}

interface DynamicInteractiveLessonRendererProps {
  topicSlug: string
  textContent: string
}

// ---------------------------------------------------------------------------
// Markdown → sections parser
// ---------------------------------------------------------------------------

function parseTextContentIntoSections(textContent: string): DynamicSection[] {
  if (!textContent || !textContent.trim()) return []

  // Split on ## headings – keep the heading with its body
  const parts = textContent.split(/(?=^## )/m)

  const sections: DynamicSection[] = []

  parts.forEach((part, index) => {
    const trimmed = part.trim()
    if (!trimmed) return

    // Extract title from heading
    const headingMatch = trimmed.match(/^#{1,2}\s+(.+)$/m)
    const title = headingMatch
      ? headingMatch[1].replace(/[*_~`]/g, '').trim()
      : `Section ${index + 1}`

    sections.push({
      id: `dynamic-section-${index}`,
      title,
      content: trimmed,
    })
  })

  // If no sections were created (no headings at all), wrap everything as one
  if (sections.length === 0) {
    sections.push({
      id: 'dynamic-section-0',
      title: 'Lesson',
      content: textContent.trim(),
    })
  }

  return sections
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function DynamicInteractiveLessonRenderer({
  topicSlug,
  textContent,
}: DynamicInteractiveLessonRendererProps) {
  const { data: session } = useSession()
  const sections = parseTextContentIntoSections(textContent)

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())
  const [cachedTopicId, setCachedTopicId] = useState<string | null>(null)
  const [progressLoaded, setProgressLoaded] = useState(false)
  const queryCountRef = useRef(0)

  const currentSection = sections[currentSectionIndex]
  const progress = sections.length > 0
    ? ((completedSections.size) / sections.length) * 100
    : 0

  // -----------------------------------------------------------------------
  // Progress persistence
  // -----------------------------------------------------------------------

  const saveProgress = async (isCompletion = false) => {
    if (!session?.user) return
    try {
      const masteryLevel = Math.min(1, completedSections.size / Math.max(sections.length, 1))
      await fetch('/api/progress/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: cachedTopicId ?? undefined,
          topicSlug: !cachedTopicId ? topicSlug : undefined,
          lessonPart: 1,
          completedSections: Array.from(completedSections),
          masteryLevel,
          timeSpent: 0,
          isPartCompletion: isCompletion,
        }),
      })
    } catch (err) {
      console.error('Failed to save progress:', err)
    }
  }

  // Load progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      if (!session?.user || progressLoaded) return
      try {
        queryCountRef.current++
        const response = await fetch(`/api/progress/load?topicSlug=${topicSlug}`)
        const data = await response.json()
        if (data.topicId) setCachedTopicId(data.topicId)
        setProgressLoaded(true)
      } catch {
        setProgressLoaded(true)
      }
    }
    loadProgress()
  }, [session, topicSlug, progressLoaded])

  // Save on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (session?.user && completedSections.size > 0 && cachedTopicId) {
        const masteryLevel = Math.min(1, completedSections.size / Math.max(sections.length, 1))
        navigator.sendBeacon(
          '/api/progress/save',
          JSON.stringify({
            topicId: cachedTopicId,
            lessonPart: 1,
            completedSections: Array.from(completedSections),
            masteryLevel,
            timeSpent: 0,
          }),
        )
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [session, completedSections, cachedTopicId, sections.length])

  // Save every 3 sections
  useEffect(() => {
    if (progressLoaded && completedSections.size > 0 && completedSections.size % 3 === 0) {
      saveProgress(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedSections, progressLoaded])

  // -----------------------------------------------------------------------
  // Navigation handlers
  // -----------------------------------------------------------------------

  const handleNext = () => {
    // Mark current section as complete
    setCompletedSections((prev) => new Set([...prev, currentSectionIndex]))

    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Final section – mark all as complete and save
      const allDone = new Set(sections.map((_, i) => i))
      setCompletedSections(allDone)
      saveProgress(true)
    }
  }

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (sections.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        No lesson content available yet.
      </div>
    )
  }

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <div className="space-y-6">
      {/* Section titles nav (scrollable) */}
      {sections.length > 1 && (
        <div className="bg-gradient-to-r from-indigo-100/80 via-purple-100/80 to-pink-100/80 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm rounded-2xl p-5 border-2 border-indigo-200/70 dark:border-indigo-700/50 shadow-lg">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-1">
              Sections:
            </span>
            {sections.map((sec, index) => (
              <button
                key={sec.id}
                onClick={() => setCurrentSectionIndex(index)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all truncate max-w-[180px] ${
                  currentSectionIndex === index
                    ? 'bg-purple-600 text-white shadow-lg'
                    : completedSections.has(index)
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                }`}
                title={sec.title}
              >
                {completedSections.has(index) && currentSectionIndex !== index && '✓ '}
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="space-y-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-purple-100/50 dark:border-purple-500/20 shadow-md">
        <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
          <div
            className="h-full transition-all duration-500 ease-out shadow-md"
            style={{
              width: `${progress}%`,
              background:
                'linear-gradient(90deg, #9333ea 0%, #ec4899 25%, #a855f7 50%, #ec4899 75%, #9333ea 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            Section {currentSectionIndex + 1} of {sections.length}
          </span>
          <span className="text-purple-700 dark:text-purple-400 font-bold">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>

      {/* Section Content */}
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border-2 border-purple-100/50 dark:border-purple-500/20 min-h-[500px] transition-all duration-300 hover:shadow-3xl hover:border-purple-200/70 dark:hover:border-purple-400/30">
        <div
          key={currentSection.id}
          className="animate-fade-in prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-0 prose-h1:leading-tight prose-h1:text-gray-900 dark:prose-h1:text-white prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-lg prose-strong:text-purple-700 dark:prose-strong:text-purple-400 prose-strong:font-semibold prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-purple-50 dark:prose-code:bg-purple-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-ul:my-6 prose-ul:space-y-2 prose-li:my-2 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:text-lg"
        >
          <style jsx>{`
            :global(.prose h1) {
              font-size: 3rem !important;
              margin-bottom: 2rem !important;
              line-height: 1.2 !important;
              font-weight: 800 !important;
            }
            :global(.prose ul) {
              margin-top: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
            :global(.prose li) {
              font-size: 1.125rem !important;
              margin-top: 0.5rem !important;
              margin-bottom: 0.5rem !important;
            }
            :global(.prose p) {
              font-size: 1.125rem !important;
              margin-bottom: 1.25rem !important;
            }
          `}</style>
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              p: ({ children }) => (
                <p className="text-xl leading-relaxed mb-4">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="space-y-3 text-lg ml-6">{children}</ul>
              ),
              li: ({ children }) => <li className="text-lg">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg text-xl font-semibold">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <table className="min-w-full border-collapse border-2 border-purple-300 dark:border-purple-700 my-6">
                  {children}
                </table>
              ),
              thead: ({ children }) => (
                <thead className="bg-purple-100 dark:bg-purple-900/40">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => <tbody>{children}</tbody>,
              tr: ({ children }) => (
                <tr className="border-b border-purple-200 dark:border-purple-800">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="px-6 py-3 text-left text-lg font-bold text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 text-lg border border-purple-200 dark:border-purple-800">
                  {children}
                </td>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt || ''}
                  className="max-w-full h-auto my-6 rounded-lg"
                />
              ),
            }}
          >
            {currentSection.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={handlePrevious}
          disabled={currentSectionIndex === 0}
          className="group px-8 py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg disabled:hover:shadow-none disabled:hover:bg-white dark:disabled:hover:bg-gray-800"
        >
          <span className="flex items-center gap-2">
            <span className="transform transition-transform group-hover:-translate-x-1">
              ←
            </span>
            <span>Previous</span>
          </span>
        </button>

        <div className="flex gap-2">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSectionIndex
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-10 shadow-md'
                  : completedSections.has(index)
                  ? 'bg-green-500 w-2.5 shadow-sm'
                  : 'bg-gray-300 dark:bg-gray-600 w-2.5'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="group px-8 py-4 rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl border-2 border-transparent hover:scale-[1.02]"
        >
          {currentSectionIndex !== sections.length - 1
            ? 'Next →'
            : '✅ Lesson Complete!'}
        </button>
      </div>
    </div>
  )
}
