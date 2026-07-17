'use client'

import { MathText } from '@/components/MathText'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { renderRichText } from '@/lib/render-rich-text'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ParsedSection {
  id: string
  title: string
  content: string
}

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

// ---------------------------------------------------------------------------
// Deterministic pseudo-random helpers
// ---------------------------------------------------------------------------

function createRng(seed: number): () => number {
  let s = Math.max(seed, 1)
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function hashStr(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h) || 1
}

function shuffleWithRng<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ---------------------------------------------------------------------------
// Markdown → sections parser
// ---------------------------------------------------------------------------

function parseTextContentIntoSections(textContent: string): ParsedSection[] {
  if (!textContent || !textContent.trim()) return []

  const parts = textContent.split(/(?=^## )/m)
  const sections: ParsedSection[] = []

  parts.forEach((part, index) => {
    const trimmed = part.trim()
    if (!trimmed) return

    const headingMatch = trimmed.match(/^#{1,2}\s+(.+)$/m)
    const title = headingMatch
      ? headingMatch[1].replace(/[*_~`]/g, '').trim()
      : `Section ${index + 1}`

    sections.push({
      id: `dyn-${index}`,
      title,
      content: trimmed,
    })
  })

  if (sections.length === 0) {
    sections.push({
      id: 'dyn-0',
      title: 'Lesson',
      content: textContent.trim(),
    })
  }

  return sections
}

// ---------------------------------------------------------------------------
// Quiz generation
// ---------------------------------------------------------------------------

function extractBoldTerms(
  content: string,
): { term: string; line: string }[] {
  const results: { term: string; line: string }[] = []
  const re = /\*\*([^*]{3,60})\*\*/g
  let m
  while ((m = re.exec(content)) !== null) {
    const lineStart = content.lastIndexOf('\n', m.index)
    const lineEnd = content.indexOf('\n', m.index + m[0].length)
    const line = content
      .substring(
        lineStart === -1 ? 0 : lineStart + 1,
        lineEnd === -1 ? content.length : lineEnd,
      )
      .trim()
    if (!line.startsWith('#')) {
      results.push({ term: m[1], line })
    }
  }
  return results
}

function generateQuizForSection(
  section: ParsedSection,
  allSections: ParsedSection[],
  sectionIndex: number,
  rng: () => number,
): QuizQuestion | null {
  // Skip very short sections
  const textOnly = section.content
    .replace(/[#$*_`|>\[\](){}\-\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (textOnly.length < 80) return null

  const boldTerms = extractBoldTerms(section.content)

  // Collect bold terms from other sections for distractors
  const otherAllTerms = allSections
    .filter((_, i) => i !== sectionIndex)
    .flatMap((s) => extractBoldTerms(s.content).map((bt) => bt.term))
  const uniqueOtherTerms = [...new Set(otherAllTerms)].filter(
    (t) => !boldTerms.some((bt) => bt.term.toLowerCase() === t.toLowerCase()),
  )

  // Strategy 1: Fill-in-the-blank with a bold term
  if (boldTerms.length >= 1 && uniqueOtherTerms.length >= 2) {
    const sorted = [...boldTerms].sort(
      (a, b) => b.line.length - a.line.length,
    )
    const idx = Math.floor(rng() * Math.min(sorted.length, 3))
    const selected = sorted[idx]

    // Count how many LaTeX expressions are in the line
    const mathCount = (selected.line.match(/\$[^$]+\$/g) || []).length

    // Skip lines with 3+ math expressions — they become unreadable
    // when every expression is replaced with generic "(expression)" text
    if (mathCount >= 3) {
      // Fall through to Strategy 2 instead
    } else {
    const cleanLine = selected.line
      .replace(/\*\*/g, '')
      .replace(/\$\$[^$]+\$\$/g, '(formula)')
      .replace(/\$[^$]+\$/g, '(expression)')
      .replace(/^\s*[-*]\s*/, '')
      .trim()

    if (cleanLine.length > selected.term.length + 10) {
      const escaped = selected.term.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&',
      )
      const blanked = cleanLine.replace(
        new RegExp(escaped, 'i'),
        '_______',
      )

      if (blanked !== cleanLine) {
        const distractors = shuffleWithRng(uniqueOtherTerms, rng).slice(0, 3)
        const allOptions = shuffleWithRng(
          [selected.term, ...distractors],
          rng,
        )

        return {
          question: `Complete the statement:\n\n"${blanked}"`,
          options: allOptions,
          correctIndex: allOptions.indexOf(selected.term),
          explanation: `"${cleanLine}"`,
        }
      }
    }
    } // end else (mathCount < 3)
  }

  // Strategy 2: Section topic recognition (fallback)
  const otherTitles = allSections
    .filter((_, i) => i !== sectionIndex)
    .map((s) => s.title)

  if (otherTitles.length >= 2) {
    const distractors = shuffleWithRng(otherTitles, rng).slice(0, 3)
    const allOptions = shuffleWithRng(
      [section.title, ...distractors],
      rng,
    )

    return {
      question: 'What was the main topic covered in this section?',
      options: allOptions,
      correctIndex: allOptions.indexOf(section.title),
      explanation: `This section covered "${section.title}".`,
    }
  }

  return null
}

// ---------------------------------------------------------------------------
// QuizBlock component
// ---------------------------------------------------------------------------

function QuizBlock({
  quiz,
  onCorrect,
  isAnswered,
  sectionId,
}: {
  quiz: QuizQuestion
  onCorrect: () => void
  isAnswered: boolean
  sectionId: string
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    if (isAnswered) {
      const timeoutId = setTimeout(() => {
        setSelected(quiz.correctIndex)
        setSubmitted(true)
        setIsCorrect(true)
      }, 0)
      return () => clearTimeout(timeoutId)
    }
  }, [isAnswered, quiz.correctIndex])

  // Reset state when navigating to a different section
  useEffect(() => {
    if (!isAnswered) {
      const timeoutId = setTimeout(() => {
        setSelected(null)
        setSubmitted(false)
        setIsCorrect(false)
      }, 0)
      return () => clearTimeout(timeoutId)
    }
  }, [sectionId, isAnswered])

  const handleSubmit = () => {
    if (selected === null) return
    setSubmitted(true)
    const correct = selected === quiz.correctIndex
    setIsCorrect(correct)
    if (correct) onCorrect()
  }

  const handleTryAgain = () => {
    setSelected(null)
    setSubmitted(false)
    setIsCorrect(false)
  }

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-300 dark:border-amber-600 rounded-2xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📝</span>
        <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">
          Check Your Understanding
        </h3>
      </div>

      <p className="text-gray-800 dark:text-gray-200 mb-4 whitespace-pre-line font-medium" dangerouslySetInnerHTML={{ __html: renderRichText(quiz.question) }} />

      <div className="space-y-3 mb-5">
        {quiz.options.map((option, i) => (
          <label
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
              submitted && i === quiz.correctIndex
                ? 'bg-green-100 dark:bg-green-900/30 border-green-500'
                : submitted && i === selected && !isCorrect
                  ? 'bg-red-100 dark:bg-red-900/30 border-red-500'
                  : selected === i
                    ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:border-purple-300'
            } ${submitted ? 'pointer-events-none' : 'cursor-pointer'}`}
          >
            <input
              type="radio"
              name={`quiz-${sectionId}`}
              checked={selected === i}
              onChange={() => !submitted && setSelected(i)}
              className="w-4 h-4 text-purple-600"
              disabled={submitted}
            />
            <span className="text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: renderRichText(option) }} />
            {submitted && i === quiz.correctIndex && (
              <span className="ml-auto text-green-600 font-bold">&#10003;</span>
            )}
            {submitted && i === selected && !isCorrect && i !== quiz.correctIndex && (
              <span className="ml-auto text-red-600 font-bold">&#10007;</span>
            )}
          </label>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="px-6 py-2.5 rounded-xl font-semibold bg-amber-500 hover:bg-amber-600 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
        >
          Check Answer
        </button>
      ) : isCorrect ? (
        <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold">
          <span className="text-xl">&#9989;</span> Correct! <MathText inline text={quiz.explanation} />
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold">
            <span className="text-xl">&#10060;</span> Not quite — try again!
          </div>
          <button
            onClick={handleTryAgain}
            className="px-6 py-2.5 rounded-xl font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Shared ReactMarkdown component overrides (heading hierarchy fix)
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
const markdownComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-extrabold mb-6 mt-2 text-gray-900 dark:text-white leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="text-lg leading-relaxed mb-4">{children}</p>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-purple-700 dark:text-purple-400">
      {children}
    </strong>
  ),
  ul: ({ children }: any) => (
    <ul className="space-y-3 text-lg ml-6">{children}</ul>
  ),
  li: ({ children }: any) => <li className="text-lg">{children}</li>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg text-lg font-semibold">
      {children}
    </blockquote>
  ),
  table: ({ children }: any) => (
    <table className="min-w-full border-collapse border-2 border-purple-300 dark:border-purple-700 my-6">
      {children}
    </table>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-purple-100 dark:bg-purple-900/40">{children}</thead>
  ),
  tbody: ({ children }: any) => <tbody>{children}</tbody>,
  tr: ({ children }: any) => (
    <tr className="border-b border-purple-200 dark:border-purple-800">
      {children}
    </tr>
  ),
  th: ({ children }: any) => (
    <th className="px-6 py-3 text-left text-lg font-bold text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-6 py-4 text-lg border border-purple-200 dark:border-purple-800">
      {children}
    </td>
  ),
  img: ({ src, alt }: any) => {
    const altText = alt || (src ? src.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '') || 'Lesson image' : 'Lesson image')
    const isSvg = src?.endsWith('.svg')
    return (
      <Image
        src={src || ''}
        alt={altText}
        width={800}
        height={450}
        className="max-w-full h-auto my-6 rounded-lg"
        sizes="(max-width: 768px) 100vw, 800px"
        unoptimized={isSvg}
      />
    )
  },
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function DynamicInteractiveLessonRenderer({
  topicSlug,
  textContent,
}: {
  topicSlug: string
  textContent: string
}) {
  const { data: session } = useSession()

  // Parse sections & generate quizzes once (deterministic via seeded PRNG)
  const sections = useMemo(
    () => parseTextContentIntoSections(textContent),
    [textContent],
  )

  const quizzes = useMemo(() => {
    // Need at least 3 sections to generate meaningful quizzes
    if (sections.length <= 2) return sections.map(() => null)
    const rng = createRng(hashStr(textContent))
    return sections.map((section, i) =>
      // Skip quiz for the very first section (intro / title page)
      i === 0
        ? null
        : generateQuizForSection(section, sections, i, rng),
    )
  }, [sections, textContent])

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(
    new Set(),
  )
  const [quizCorrect, setQuizCorrect] = useState<Set<number>>(new Set())
  const [cachedTopicId, setCachedTopicId] = useState<string | null>(null)
  const [progressLoaded, setProgressLoaded] = useState(false)
  const [lessonComplete, setLessonComplete] = useState(false)
  const queryCountRef = useRef(0)

  // Active study-time tracking. `activeSinceRef` marks when the current active
  // (visible) interval began; `accumulatedMsRef` holds time from prior intervals
  // not yet flushed to the server. consumeTimeSpentSeconds() folds the in-progress
  // interval into the accumulator, returns the whole-second delta, and resets the
  // accumulator so each saved value is a non-overlapping increment.
  // Initialized in the mount effect below (Date.now() can't be called during render).
  const activeSinceRef = useRef<number | null>(null)
  const accumulatedMsRef = useRef<number>(0)
  const consumeTimeSpentSeconds = useCallback(() => {
    const now = Date.now()
    if (activeSinceRef.current != null) {
      accumulatedMsRef.current += now - activeSinceRef.current
      activeSinceRef.current = now
    }
    const seconds = Math.round(accumulatedMsRef.current / 1000)
    if (seconds > 0) {
      accumulatedMsRef.current -= seconds * 1000
    }
    return seconds
  }, [])

  // Pause/resume the active timer on tab visibility changes so background time
  // (other tabs, minimized window) isn't counted as study time.
  useEffect(() => {
    // Start the active interval on mount (deferred out of render).
    activeSinceRef.current = Date.now()
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (activeSinceRef.current != null) {
          accumulatedMsRef.current += Date.now() - activeSinceRef.current
          activeSinceRef.current = null
        }
      } else {
        activeSinceRef.current = Date.now()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  const currentSection = sections[currentSectionIndex]
  const currentQuiz = quizzes[currentSectionIndex]
  const progress =
    sections.length > 0
      ? (completedSections.size / sections.length) * 100
      : 0

  // Whether the student can proceed past the current section
  const canProceed = !currentQuiz || quizCorrect.has(currentSectionIndex)

  // -----------------------------------------------------------------------
  // Progress persistence
  // -----------------------------------------------------------------------

  const saveProgress = useCallback(
    async (isCompletion = false) => {
      if (!session?.user) return
      try {
        const masteryLevel = Math.min(
          1,
          completedSections.size / Math.max(sections.length, 1),
        )
        await fetch('/api/progress/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topicId: cachedTopicId ?? undefined,
            topicSlug: !cachedTopicId ? topicSlug : undefined,
            lessonPart: 1,
            completedSections: Array.from(completedSections),
            masteryLevel,
            timeSpent: consumeTimeSpentSeconds(),
            isPartCompletion: isCompletion,
          }),
        })
      } catch (err) {
        console.error('Failed to save progress:', err)
      }
    },
    [session, cachedTopicId, topicSlug, completedSections, sections.length, consumeTimeSpentSeconds],
  )

  // Load progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      if (!session?.user || progressLoaded) return
      try {
        queryCountRef.current++
        const response = await fetch(
          `/api/progress/load?topicSlug=${topicSlug}`,
        )
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
        const masteryLevel = Math.min(
          1,
          completedSections.size / Math.max(sections.length, 1),
        )
        navigator.sendBeacon(
          '/api/progress/save',
          JSON.stringify({
            topicId: cachedTopicId,
            lessonPart: 1,
            completedSections: Array.from(completedSections),
            masteryLevel,
            timeSpent: consumeTimeSpentSeconds(),
          }),
        )
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [session, completedSections, cachedTopicId, sections.length, consumeTimeSpentSeconds])

  // Checkpoint save every 3 sections
  useEffect(() => {
    if (
      progressLoaded &&
      completedSections.size > 0 &&
      completedSections.size % 3 === 0
    ) {
      saveProgress(false)
    }
  }, [completedSections, progressLoaded, saveProgress])

  // -----------------------------------------------------------------------
  // Navigation
  // -----------------------------------------------------------------------

  const handleNext = () => {
    setCompletedSections((prev) => new Set([...prev, currentSectionIndex]))

    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const allDone = new Set(sections.map((_, i) => i))
      setCompletedSections(allDone)
      setLessonComplete(true)
      saveProgress(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

  // Lesson complete celebration screen
  if (lessonComplete) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 rounded-2xl shadow-2xl p-10 border-2 border-green-200 dark:border-green-700 text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="text-3xl font-extrabold text-green-800 dark:text-green-300 mb-4">
            Lesson Complete!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            You finished all {sections.length} sections and passed every check-for-understanding quiz.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Great work mastering this topic!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/competitive"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <span className="text-xl">⚔️</span>
              Go to Competitive Mode
            </Link>
            <Link
              href={`/topics/${topicSlug}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transition-all"
            >
              Back to Topic
            </Link>
          </div>
        </div>

        {/* Progress bar showing 100% */}
        <div className="space-y-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-green-100/50 dark:border-green-500/20 shadow-md">
          <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
            <div
              className="h-full transition-all duration-500 ease-out shadow-md"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #22c55e 0%, #10b981 50%, #22c55e 100%)',
              }}
            />
          </div>
          <div className="text-center text-sm text-green-700 dark:text-green-400 font-bold">
            100% Complete — All sections finished!
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Section titles nav */}
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
                {completedSections.has(index) &&
                  currentSectionIndex !== index &&
                  '\u2713 '}
                <span dangerouslySetInnerHTML={{ __html: renderRichText(sec.title) }} />
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

      {/* Section Content + Understanding Check */}
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border-2 border-purple-100/50 dark:border-purple-500/20 min-h-[500px] transition-all duration-300 hover:shadow-3xl hover:border-purple-200/70 dark:hover:border-purple-400/30">
        <div
          key={currentSection.id}
          className="animate-fade-in prose prose-lg max-w-none dark:prose-invert"
        >
          {/* Lesson content */}
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={markdownComponents}
          >
            {escapeCurrencyMath(currentSection.content)}
          </ReactMarkdown>

          {/* Inline understanding check */}
          {currentQuiz && (
            <QuizBlock
              key={`quiz-${currentSection.id}`}
              quiz={currentQuiz}
              sectionId={currentSection.id}
              onCorrect={() =>
                setQuizCorrect((prev) =>
                  new Set([...prev, currentSectionIndex]),
                )
              }
              isAnswered={quizCorrect.has(currentSectionIndex)}
            />
          )}
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
              &larr;
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
          disabled={!canProceed}
          className="group px-8 py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl border-2 border-transparent hover:scale-[1.02] disabled:hover:scale-100"
        >
          {currentSectionIndex !== sections.length - 1
            ? 'Next \u2192'
            : '\u2705 Lesson Complete!'}
        </button>
      </div>

      {/* Hint when quiz blocks progression */}
      {currentQuiz && !quizCorrect.has(currentSectionIndex) && (
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          \ud83d\udca1 Answer the understanding check above to continue
        </div>
      )}
    </div>
  )
}
