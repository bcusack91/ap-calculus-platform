'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Link from 'next/link'
import {
  generateUnitTest,
  scoreUnitTest,
  variantCountFor,
  getQuestionsPerVariant,
  getUnitPoolSize,
  type CourseUnitTestConfig,
  type UnitDef,
  type UnitTestData,
  type UnitTestResults,
} from '@/lib/unit-tests/engine'
import { shuffleOptions } from '@/lib/shuffle-options'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'
import { InArticleAd } from '@/components/ad-banner'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'

type Phase = 'menu' | 'testing' | 'results'

// Render rich-text (LaTeX with $...$ delimiters, markdown tables, etc.) safely.
// Question/option/explanation strings are author-controlled content from src/data — not user input.
function RichText({ text, className }: { text: string; className?: string }) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: renderRichText(text || '') }}
    />
  )
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function levelStyles(level: 'strong' | 'moderate' | 'weak') {
  if (level === 'strong')
    return {
      label: 'Mastered',
      color: 'text-emerald-700 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      ring: 'ring-emerald-300 dark:ring-emerald-700',
    }
  if (level === 'moderate')
    return {
      label: 'Almost there',
      color: 'text-amber-700 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      ring: 'ring-amber-300 dark:ring-amber-700',
    }
  return {
    label: 'Needs review',
    color: 'text-rose-700 dark:text-rose-400',
    bg: 'bg-rose-100 dark:bg-rose-900/30',
    ring: 'ring-rose-300 dark:ring-rose-700',
  }
}

export interface UnitTestsClientProps {
  config: CourseUnitTestConfig
  /** Page-level theme (mostly used for the menu hero gradient + back link). */
  theme?: {
    bgGradient?: string         // tailwind classes
    badgeClass?: string         // tailwind classes for the menu badge
    accentBlock?: string        // tailwind classes for the info block at bottom
  }
}

export default function UnitTestsClient({ config, theme }: UnitTestsClientProps) {
  const variantCount = variantCountFor(config)
  const [phase, setPhase] = useState<Phase>('menu')
  const [activeUnit, setActiveUnit] = useState<UnitDef | null>(null)
  const [activeVariant, setActiveVariant] = useState<number>(1)
  const [testData, setTestData] = useState<UnitTestData | null>(null)
  const [results, setResults] = useState<UnitTestResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [reviewing, setReviewing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Pre-load KaTeX so the first math-bearing question doesn't render briefly as raw $...$.
  useEffect(() => { void preloadKatex() }, [])

  useEffect(() => {
    if (phase !== 'testing') {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          handleFinish()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const startTest = useCallback(
    (unit: UnitDef, variant: number) => {
      const data = generateUnitTest(config, unit.id, variant)
      data.questions.forEach(q => {
        const s = shuffleOptions(q.options, q.correctAnswer, `${config.courseSlug}-${unit.id}-${variant}-${q.question}`)
        q.options = s.options
        q.correctAnswer = s.correctIndex
      })
      setActiveUnit(unit)
      setActiveVariant(variant)
      setTestData(data)
      setResults(null)
      setCurrentIndex(0)
      setAnswers(new Array(data.questions.length).fill(null))
      setTimeRemaining(data.timeLimitMinutes * 60)
      setReviewing(false)
      setPhase('testing')
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [config],
  )

  const handleFinish = useCallback(() => {
    if (!testData) return
    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => {
      if (a !== null) answersRecord[i] = a
    })
    const r = scoreUnitTest(config, testData, answersRecord)
    setResults(r)
    setPhase('results')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [testData, answers, config])

  const goToMenu = useCallback(() => {
    setPhase('menu')
    setTestData(null)
    setResults(null)
    setActiveUnit(null)
    setReviewing(false)
  }, [])

  const reviewHrefForTopic = useCallback(
    (topicSlug: string) =>
      config.reviewHrefForTopic
        ? config.reviewHrefForTopic(topicSlug)
        : `/courses/${config.courseSlug}/${topicSlug}`,
    [config],
  )

  const bgGradient =
    theme?.bgGradient ??
    'bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'
  const badgeClass =
    theme?.badgeClass ??
    'bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
  const accentBlock =
    theme?.accentBlock ??
    'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200'

  /* ------------------------------ MENU ------------------------------ */
  if (phase === 'menu') {
    return (
      <div className={`min-h-screen ${bgGradient}`}>
        <section className="container py-12 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href={config.courseHubHref}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              ← Back to {config.courseTitle}
            </Link>
            <div className={`mt-4 mb-3 inline-flex items-center gap-2 rounded-full ${badgeClass}`}>
              📝 Unit Tests
            </div>
            <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              {config.courseTitle} Unit Tests
            </h1>
            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg dark:text-gray-400">
              Pick a unit to drill it head-on. Each unit has{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {variantCount} different test variations
              </span>{' '}
              so you can keep retaking until you master it.
            </p>
          </div>
        </section>

        <section className="container pb-16">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {config.units.map(unit => (
              <UnitCard
                key={unit.id}
                unit={unit}
                variantCount={variantCount}
                qPerVariant={getQuestionsPerVariant(config, unit.id)}
                poolSize={getUnitPoolSize(config, unit.id)}
                onStart={v => startTest(unit, v)}
              />
            ))}
          </div>

          <div className={`mx-auto mt-10 max-w-3xl rounded-2xl border p-6 text-sm ${accentBlock}`}>
            <p className="font-semibold">How unit tests work</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Focused on a single AP unit, between a single-topic quiz and the full diagnostic.</li>
              <li>{variantCount} variations per unit — pick a fresh variation any time you retake.</li>
              <li>Roughly 90 seconds per question — the same pacing as the AP exam.</li>
              <li>You&apos;ll get a unit-level score, recommended topics to review, and a question-by-question explanation.</li>
            </ul>
          </div>
        </section>

        <ToolPageSeoBody subjectName={config.courseTitle} />
      </div>
    )
  }

  /* ----------------------------- TESTING ---------------------------- */
  if (phase === 'testing' && testData && activeUnit) {
    const q = testData.questions[currentIndex]
    const answered = answers.filter(a => a !== null).length
    const progressPct = Math.round((answered / testData.questions.length) * 100)
    return (
      <div className={`min-h-screen ${bgGradient}`}>
        <section className="container py-8 sm:py-10">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={() => {
                  if (window.confirm('Quit this unit test? Your progress will not be saved.')) goToMenu()
                }}
                className="text-sm font-medium text-gray-500 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-400"
              >
                ✕ Quit
              </button>
              <div className="rounded-full bg-white px-4 py-1.5 text-sm font-bold tabular-nums text-gray-800 shadow ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700">
                ⏱ {formatTime(timeRemaining)}
              </div>
            </div>

            <div className="mb-2 flex items-center justify-between text-xs font-medium text-gray-600 dark:text-gray-400">
              <span>
                {activeUnit.icon} {activeUnit.shortName} · Variation {activeVariant}
              </span>
              <span>
                Question {currentIndex + 1} of {testData.questions.length}
              </span>
            </div>
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={`h-full bg-gradient-to-r ${activeUnit.color} transition-all`}
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <RichText
                text={q.question}
                className="mb-5 block text-base font-medium text-gray-900 sm:text-lg dark:text-white"
              />
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const selected = answers[currentIndex] === i
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const next = [...answers]
                        next[currentIndex] = i
                        setAnswers(next)
                      }}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition sm:text-base ${
                        selected
                          ? 'border-blue-500 bg-blue-50 text-blue-900 ring-2 ring-blue-300 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-100'
                          : 'border-gray-200 bg-white text-gray-800 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-2 inline-block w-5 font-bold text-gray-500 dark:text-gray-400">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      <RichText text={opt} />
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                ← Previous
              </button>

              {currentIndex < testData.questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(i => Math.min(testData.questions.length - 1, i + 1))}
                  className={`rounded-xl bg-gradient-to-r ${activeUnit.color} px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg`}
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (
                      answered < testData.questions.length &&
                      !window.confirm(
                        `You have ${testData.questions.length - answered} unanswered question(s). Submit anyway?`,
                      )
                    )
                      return
                    handleFinish()
                  }}
                  className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg"
                >
                  Submit Test ✓
                </button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {testData.questions.map((_, i) => {
                const filled = answers[i] !== null
                const current = i === currentIndex
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-9 w-9 rounded-lg text-xs font-semibold transition ${
                      current
                        ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                        : filled
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                    aria-label={`Jump to question ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }

  /* ----------------------------- RESULTS ---------------------------- */
  if (phase === 'results' && results && testData && activeUnit) {
    const styles = levelStyles(results.level)
    const nextVariant = (activeVariant % variantCount) + 1

    return (
      <div className={`min-h-screen ${bgGradient}`}>
        <section className="container py-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {activeUnit.icon} {activeUnit.name} · Variation {activeVariant}
              </div>
              <h1 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
                {results.percentage}% — {results.totalCorrect} of {results.totalQuestions} correct
              </h1>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ring-1 ${styles.bg} ${styles.color} ${styles.ring}`}
              >
                {styles.label}
              </span>

              {results.recommendedTopics.length > 0 && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-900/20">
                  <p className="mb-2 font-semibold text-amber-900 dark:text-amber-200">
                    Topics to review
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {results.recommendedTopics.map(t => (
                      <li key={t.slug}>
                        <Link
                          href={reviewHrefForTopic(t.slug)}
                          className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-100"
                        >
                          → {t.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setReviewing(r => !r)}
                  className="rounded-xl border-2 border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {reviewing ? 'Hide' : 'Review'} questions
                </button>
                <button
                  onClick={() => startTest(activeUnit, nextVariant)}
                  className={`rounded-xl bg-gradient-to-r ${activeUnit.color} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg`}
                >
                  Try Variation {nextVariant} →
                </button>
                <button
                  onClick={() => startTest(activeUnit, activeVariant)}
                  className="rounded-xl border-2 border-blue-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-blue-900/20"
                >
                  Retake same variation
                </button>
                <button
                  onClick={goToMenu}
                  className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Pick another unit
                </button>
              </div>
            </div>

            {/* Ad — on the results screen, after the score breakdown */}
            <InArticleAd />

            {reviewing && (
              <div className="mt-6 space-y-4">
                {testData.questions.map((q, i) => {
                  const userAnswer = answers[i]
                  const correct = userAnswer === q.correctAnswer
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl border p-5 ${
                        correct
                          ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/10'
                          : 'border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/10'
                      }`}
                    >
                      <p className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Question {i + 1} {correct ? '· Correct' : '· Incorrect'}
                      </p>
                      <RichText
                        text={q.question}
                        className="mb-3 block font-medium text-gray-900 dark:text-white"
                      />
                      <ul className="mb-3 space-y-1 text-sm">
                        {q.options.map((opt, j) => {
                          const isCorrect = j === q.correctAnswer
                          const isUser = j === userAnswer
                          return (
                            <li
                              key={j}
                              className={`rounded-lg px-3 py-2 ${
                                isCorrect
                                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100'
                                  : isUser
                                  ? 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-100'
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <span className="mr-2 font-bold">{String.fromCharCode(65 + j)}.</span>
                              <RichText text={opt} />
                              {isCorrect && <span className="ml-2 text-xs font-bold">(correct)</span>}
                              {isUser && !isCorrect && (
                                <span className="ml-2 text-xs font-bold">(your answer)</span>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Explanation:</span>{' '}
                        <RichText text={q.explanation} />
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }

  return null
}

function UnitCard({
  unit,
  variantCount,
  qPerVariant,
  poolSize,
  onStart,
}: {
  unit: UnitDef
  variantCount: number
  qPerVariant: number
  poolSize: number
  onStart: (variant: number) => void
}) {
  const variants = useMemo(() => Array.from({ length: variantCount }, (_, i) => i + 1), [variantCount])
  const lowPool = poolSize > 0 && poolSize < qPerVariant * 2
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r text-2xl ${unit.color}`}
          aria-hidden
        >
          <span>{unit.icon}</span>
        </div>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          {unit.exam_weight} of exam
        </span>
      </div>
      <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{unit.name}</h3>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">{unit.description}</p>
      <p className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400">
        {qPerVariant} questions · ~{Math.max(5, Math.round(qPerVariant * 1.5))} min
        {lowPool && (
          <span className="ml-2 rounded bg-amber-50 px-1.5 py-0.5 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            small bank — variations may overlap
          </span>
        )}
      </p>

      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Pick a variation
      </div>
      <div className="grid grid-cols-4 gap-2">
        {variants.map(v => (
          <button
            key={v}
            onClick={() => onStart(v)}
            className={`rounded-lg bg-gradient-to-r ${unit.color} px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:shadow active:scale-95`}
            aria-label={`Start ${unit.shortName} variation ${v}`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}
