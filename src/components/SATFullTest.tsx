'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import type { SATFullTest, SATTestQuestion } from '@/data/sat-practice/test-generator'
import { module2Tier, regenerateModule2 } from '@/data/sat-practice/test-generator'
import { gradeGridIn } from '@/data/sat-grid-in'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface QuestionAnswer {
  questionIndex: number
  selectedIndex: number | null
  /** Typed response for grid-in (SPR) questions; null/'' for MCQ or when blank. */
  textValue: string | null
  flagged: boolean
}

/**
 * A question is "answered" if an MCQ option is selected, or — for a grid-in
 * (SPR) item — a non-blank value has been typed.
 */
function isAnswered(ans: QuestionAnswer | undefined, q: SATTestQuestion | undefined): boolean {
  if (!ans) return false
  if (q?.gridIn) return !!(ans.textValue && ans.textValue.trim())
  return ans.selectedIndex !== null
}

type TestPhase = 'intro' | 'testing' | 'section-break' | 'review' | 'results'

interface SectionResult {
  sectionId: string
  sectionName: string
  /** Adaptive form this module was served at (Module 2 only). */
  tier?: 'easy' | 'medium' | 'hard'
  correct: number
  total: number
  scaledScore: number
  timeSpent: number
  answers: {
    question: SATTestQuestion
    selectedIndex: number | null
    textValue: string | null
    answered: boolean
    correct: boolean
  }[]
}

interface TestResults {
  rwScore: number
  mathScore: number
  totalScore: number
  rwCorrect: number
  rwTotal: number
  mathCorrect: number
  mathTotal: number
  timeSpent: number
  sections: SectionResult[]
  weakAreas: string[]
  strengths: string[]
}

interface SATFullTestProps {
  test: SATFullTest
  onComplete: (results: TestResults) => void
  onCancel: () => void
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function renderLatex(text: string): string {
  return renderRichText(text)
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SATFullTestComponent({ test: initialTest, onComplete, onCancel }: SATFullTestProps) {
  // Local copy: finishing a Module 1 swaps in an adaptively-regenerated
  // Module 2, mirroring the digital SAT's routing.
  const [test, setTest] = useState(initialTest)
  const [phase, setPhase] = useState<TestPhase>('intro')
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sectionAnswers, setSectionAnswers] = useState<Map<string, QuestionAnswer[]>>(new Map())
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [sectionStartTime, setSectionStartTime] = useState(0)
  const [completedSections, setCompletedSections] = useState<SectionResult[]>([])
  const [showNav, setShowNav] = useState(false)
  const [submitting, _setSubmitting] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  // Strikethrough tracker: sectionId -> questionIndex -> Set of option indices
  const [strikethroughs, setStrikethroughs] = useState<Map<string, Map<number, Set<number>>>>(new Map())
  const [strikethroughMode, setStrikethroughMode] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const totalStartTimeRef = useRef(Date.now())

  const currentSection = test.sections[currentSectionIndex]
  const currentQuestion = currentSection?.questions[currentQuestionIndex]

  // Initialize answers for a section
  const getOrCreateSectionAnswers = useCallback(
    (sectionId: string, questionCount: number): QuestionAnswer[] => {
      const existing = sectionAnswers.get(sectionId)
      if (existing) return existing
      const fresh = Array.from({ length: questionCount }, (_, i) => ({
        questionIndex: i,
        selectedIndex: null,
        textValue: null,
        flagged: false,
      }))
      setSectionAnswers(prev => new Map(prev).set(sectionId, fresh))
      return fresh
    },
    [sectionAnswers],
  )

  const answers = useMemo(() => {
    if (!currentSection) return []
    return getOrCreateSectionAnswers(currentSection.id, currentSection.questionCount)
  }, [currentSection, getOrCreateSectionAnswers])

  const currentAnswer = answers[currentQuestionIndex]

  // Timer
  useEffect(() => {
    if (phase !== 'testing') {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up — auto-submit section
          if (timerRef.current) clearInterval(timerRef.current)
          handleSubmitSection()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, currentSectionIndex])

  // Start a section
  const startSection = useCallback(
    (sectionIdx: number) => {
      setCurrentSectionIndex(sectionIdx)
      setCurrentQuestionIndex(0)
      const section = test.sections[sectionIdx]
      setTimeRemaining(section.timeLimitSeconds)
      setSectionStartTime(Date.now())
      getOrCreateSectionAnswers(section.id, section.questionCount)
      setPhase('testing')
    },
    [test.sections, getOrCreateSectionAnswers],
  )

  // Select an answer
  const selectAnswer = useCallback(
    (optionIndex: number) => {
      if (!currentSection) return
      setSectionAnswers(prev => {
        const next = new Map(prev)
        const arr = [...(next.get(currentSection.id) ?? [])]
        arr[currentQuestionIndex] = {
          ...arr[currentQuestionIndex],
          selectedIndex: optionIndex,
        }
        next.set(currentSection.id, arr)
        return next
      })
    },
    [currentSection, currentQuestionIndex],
  )

  // Set a grid-in (SPR) typed answer
  const setTextAnswer = useCallback(
    (value: string) => {
      if (!currentSection) return
      setSectionAnswers(prev => {
        const next = new Map(prev)
        const arr = [...(next.get(currentSection.id) ?? [])]
        arr[currentQuestionIndex] = {
          ...arr[currentQuestionIndex],
          textValue: value,
        }
        next.set(currentSection.id, arr)
        return next
      })
    },
    [currentSection, currentQuestionIndex],
  )

  // Toggle flag
  const toggleFlag = useCallback(() => {
    if (!currentSection) return
    setSectionAnswers(prev => {
      const next = new Map(prev)
      const arr = [...(next.get(currentSection.id) ?? [])]
      arr[currentQuestionIndex] = {
        ...arr[currentQuestionIndex],
        flagged: !arr[currentQuestionIndex].flagged,
      }
      next.set(currentSection.id, arr)
      return next
    })
  }, [currentSection, currentQuestionIndex])

  // Toggle strikethrough on an option (Bluebook feature)
  const toggleStrikethrough = useCallback(
    (optionIndex: number) => {
      if (!currentSection) return
      setStrikethroughs(prev => {
        const next = new Map(prev)
        const sectionMap = new Map(next.get(currentSection.id) ?? new Map())
        const qSet = new Set(sectionMap.get(currentQuestionIndex) ?? new Set())
        if (qSet.has(optionIndex)) {
          qSet.delete(optionIndex)
        } else {
          qSet.add(optionIndex)
        }
        sectionMap.set(currentQuestionIndex, qSet)
        next.set(currentSection.id, sectionMap)
        return next
      })
    },
    [currentSection, currentQuestionIndex],
  )

  // Get strikethroughs for current question
  const currentStrikethroughs = useMemo(() => {
    if (!currentSection) return new Set<number>()
    return strikethroughs.get(currentSection.id)?.get(currentQuestionIndex) ?? new Set<number>()
  }, [currentSection, currentQuestionIndex, strikethroughs])

  // Navigate questions
  const goToQuestion = useCallback((idx: number) => {
    setCurrentQuestionIndex(idx)
    setShowNav(false)
  }, [])

  const nextQuestion = useCallback(() => {
    if (!currentSection) return
    if (currentQuestionIndex < currentSection.questionCount - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }, [currentSection, currentQuestionIndex])

  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }, [currentQuestionIndex])

  // Compute section results helper
  const computeSectionResult = useCallback(
    (sectionIdx: number): SectionResult => {
      const section = test.sections[sectionIdx]
      const sectionAns = sectionAnswers.get(section.id) ?? []
      const timeSpent = Math.round((Date.now() - sectionStartTime) / 1000)

      let correct = 0
      const detailedAnswers = section.questions.map((q, i) => {
        const ans = sectionAns[i]
        const answered = isAnswered(ans, q)
        const isCorrect = q.gridIn
          ? answered && gradeGridIn(q.gridIn, ans?.textValue ?? '')
          : ans?.selectedIndex === q.correctIndex
        if (isCorrect) correct++
        return {
          question: q,
          selectedIndex: ans?.selectedIndex ?? null,
          textValue: ans?.textValue ?? null,
          answered,
          correct: isCorrect,
        }
      })

      // Import at runtime to avoid circular issues
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { estimateScaledScore } = require('@/data/sat-practice/test-generator')
      const scaledScore = estimateScaledScore(correct, section.questionCount, section.section)

      return {
        sectionId: section.id,
        tier: section.tier,
        sectionName: section.name,
        correct,
        total: section.questionCount,
        scaledScore,
        timeSpent,
        answers: detailedAnswers,
      }
    },
    [test.sections, sectionAnswers, sectionStartTime],
  )

  // Submit current section
  const handleSubmitSection = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)

    const result = computeSectionResult(currentSectionIndex)
    const updatedCompleted = [...completedSections, result]
    setCompletedSections(updatedCompleted)

    // ADAPTIVE ROUTING: a finished Module 1 decides the form of the Module 2
    // in the same subject, exactly as the digital SAT does. Fire-and-forget so
    // the break screen appears immediately; the swap lands before the student
    // starts the next module.
    const justFinished = test.sections[currentSectionIndex]
    if (justFinished?.moduleNum === 1) {
      const nextIdx = test.sections.findIndex(
        (sec) => sec.section === justFinished.section && sec.moduleNum === 2,
      )
      if (nextIdx >= 0) {
        const tier = module2Tier(result.correct, result.total)
        const used = new Set<string>()
        for (const sec of test.sections) for (const q of sec.questions) used.add(q.question)
        regenerateModule2(test.sections[nextIdx], tier, used)
          .then((rebuilt) => {
            setTest((prev) => {
              const sections = [...prev.sections]
              sections[nextIdx] = rebuilt
              return { ...prev, sections }
            })
          })
          .catch(() => { /* keep the pre-built module on failure */ })
      }
    }

    // Check if there are more sections
    if (currentSectionIndex < test.sections.length - 1) {
      setPhase('section-break')
    } else {
      // All sections done — compute final results
      finishTest(updatedCompleted)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionIndex, completedSections, test.sections.length, computeSectionResult])

  const finishTest = useCallback(
    (allSections: SectionResult[]) => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { analyzePerformance, estimateScaledScore } = require('@/data/sat-practice/test-generator')

      // Aggregate R&W sections
      const rwSections = allSections.filter(s => s.sectionId.startsWith('rw'))
      const mathSections = allSections.filter(s => s.sectionId.startsWith('math'))

      const rwCorrect = rwSections.reduce((s, sec) => s + sec.correct, 0)
      const rwTotal = rwSections.reduce((s, sec) => s + sec.total, 0)
      const mathCorrect = mathSections.reduce((s, sec) => s + sec.correct, 0)
      const mathTotal = mathSections.reduce((s, sec) => s + sec.total, 0)

      // Scale once on the combined raw per section (matches the digital-SAT model
      // and the SAT diagnostic, which aggregate raw across modules before scaling
      // rather than scaling each module and averaging).
      const rwScore = rwTotal > 0 ? estimateScaledScore(rwCorrect, rwTotal, 'reading-writing') : 200
      const mathScore = mathTotal > 0 ? estimateScaledScore(mathCorrect, mathTotal, 'math') : 200

      // Analyze strengths and weaknesses
      const allAnswers = allSections.flatMap(s => s.answers)
      const validAnswers = allAnswers
        .filter(a => a.answered)
        .map(a => ({
          question: a.question,
          selectedIndex: a.selectedIndex ?? -1,
          correct: a.correct,
        }))
      const { weakAreas, strengths } = analyzePerformance(validAnswers)

      const totalTimeSpent = Math.round((Date.now() - totalStartTimeRef.current) / 1000)

      const results: TestResults = {
        rwScore,
        mathScore,
        totalScore: rwScore + mathScore,
        rwCorrect,
        rwTotal,
        mathCorrect,
        mathTotal,
        timeSpent: totalTimeSpent,
        sections: allSections,
        weakAreas,
        strengths,
      }

      setPhase('results')
      onComplete(results)
    },
    [onComplete],
  )

  // ----------------------------------------------------------------
  //  Computed values needed by both review and testing phases
  // ----------------------------------------------------------------
  const answeredCount = answers.filter(a => isAnswered(a, currentSection?.questions[a.questionIndex])).length
  const flaggedCount = answers.filter(a => a.flagged).length
  const timeWarning = timeRemaining <= 300 // 5 min warning
  const timeCritical = timeRemaining <= 60 // 1 min critical

  // ----------------------------------------------------------------
  //  Render: Intro
  // ----------------------------------------------------------------
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-accent">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              SAT Practice Test {test.testNumber}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {test.format === 'full' ? 'Full-Length' : 'Mini'} Digital SAT Simulation
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Test Structure</h3>
            {test.sections.map((section, i) => (
              <div
                key={section.id}
                className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent-hover dark:bg-accent-light/50 dark:text-accent-muted">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{section.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {section.questionCount} questions
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {Math.round(section.timeLimitSeconds / 60)} min
                </span>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Before You Begin</h4>
            <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
              <li>• Each section is timed. When time runs out, your answers are auto-submitted.</li>
              <li>• You can flag questions to review before submitting each section.</li>
              <li>• Use the question navigator to jump between questions.</li>
              <li>• You cannot go back to a previous section once submitted.</li>
              <li>
                • Total time: {Math.round(test.totalTimeSeconds / 60)} minutes ({test.totalQuestions}{' '}
                questions)
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onCancel}
              className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => startSection(0)}
              className="flex-1 rounded-xl bg-gradient-to-r from-accent to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Begin Test
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------------------
  //  Render: Section Break
  // ----------------------------------------------------------------
  if (phase === 'section-break') {
    const nextIdx = currentSectionIndex + 1
    const nextSection = test.sections[nextIdx]
    const lastResult = completedSections[completedSections.length - 1]

    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg className="h-7 w-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Section Complete!
            </h2>
            {lastResult && (
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {lastResult.sectionName}: {lastResult.correct}/{lastResult.total} correct
              </p>
            )}
          </div>

          <div className="mb-6 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="mb-1 font-semibold text-amber-800 dark:text-amber-300">Break Time</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              Take a moment to rest. When you&apos;re ready, continue to the next section.
            </p>
          </div>

          {nextSection && (
            <div className="mb-6 rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
              <p className="font-medium text-gray-900 dark:text-white">
                Up Next: {nextSection.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {nextSection.questionCount} questions &middot;{' '}
                {Math.round(nextSection.timeLimitSeconds / 60)} minutes
              </p>
            </div>
          )}

          <button
            onClick={() => startSection(nextIdx)}
            className="w-full rounded-xl bg-gradient-to-r from-accent to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------------------
  //  Render: Results (placeholder — parent handles full results)
  // ----------------------------------------------------------------
  if (phase === 'results') {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-accent-light border-t-accent" />
          <p className="text-gray-600 dark:text-gray-400">Calculating your results...</p>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------------------
  //  Render: Review Phase
  // ----------------------------------------------------------------
  if (phase === 'review') {
    if (!currentSection) return null
    const unansweredCount = answers.filter(a => !isAnswered(a, currentSection.questions[a.questionIndex])).length
    const flaggedReview = answers.filter(a => a.flagged)

    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Review: {currentSection.name}
          </h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Time remaining: {formatTime(timeRemaining)}
          </p>

          <div className="mb-6 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
              <span className="text-gray-700 dark:text-gray-300">Answered</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {answeredCount}/{currentSection.questionCount}
              </span>
            </div>
            {unansweredCount > 0 && (
              <div className="flex items-center justify-between rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
                <span className="text-red-700 dark:text-red-400">Unanswered</span>
                <span className="font-semibold text-red-700 dark:text-red-400">
                  {unansweredCount}
                </span>
              </div>
            )}
            {flaggedReview.length > 0 && (
              <div className="flex items-center justify-between rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
                <span className="text-amber-700 dark:text-amber-400">Flagged for review</span>
                <span className="font-semibold text-amber-700 dark:text-amber-400">
                  {flaggedReview.length}
                </span>
              </div>
            )}
          </div>

          {(unansweredCount > 0 || flaggedReview.length > 0) && (
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Jump to question:
              </p>
              <div className="flex flex-wrap gap-2">
                {answers.map((a, idx) => {
                  if (!isAnswered(a, currentSection.questions[idx]) || a.flagged) {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          goToQuestion(idx)
                          setPhase('testing')
                        }}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium ${
                          a.flagged
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => setPhase('testing')}
              className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Go Back
            </button>
            <button
              onClick={handleSubmitSection}
              disabled={submitting}
              className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Section'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------------------
  //  Render: Testing Phase
  // ----------------------------------------------------------------
  if (!currentSection || !currentQuestion) return null

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {currentSection.name}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {currentSection.questionCount}
          </p>
        </div>

        {/* Timer */}
        <div
          className={`rounded-lg px-4 py-2 text-lg font-mono font-bold ${
            timeCritical
              ? 'animate-pulse bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
              : timeWarning
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
          }`}
        >
          {formatTime(timeRemaining)}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNav(!showNav)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <span className="hidden sm:inline">Navigator </span>
            ({answeredCount}/{currentSection.questionCount})
          </button>
          {flaggedCount > 0 && (
            <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
              {flaggedCount} flagged
            </span>
          )}
          {/* Bluebook Tools */}
          {currentSection.name.toLowerCase().includes('math') && (
            <button
              onClick={() => setShowCalculator(c => !c)}
              title="Desmos Calculator"
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                showCalculator
                  ? 'border-blue-400 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </button>
          )}
          {/* Strikethrough only applies to multiple-choice options */}
          {!currentQuestion.gridIn && (
            <button
              onClick={() => setStrikethroughMode(m => !m)}
              title="Strikethrough mode — click options to cross them out"
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                strikethroughMode
                  ? 'border-red-400 bg-red-50 text-red-700 dark:border-red-500 dark:bg-red-900/30 dark:text-red-400'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M5 12h14" />
                <line x1="4" y1="4" x2="20" y2="20" strokeWidth={2} strokeLinecap="round" stroke="currentColor" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Desmos Calculator Embed */}
      {showCalculator && currentSection.name.toLowerCase().includes('math') && (
        <div className="mb-4 overflow-hidden rounded-xl border border-blue-200 shadow-lg dark:border-blue-700">
          <div className="flex items-center justify-between bg-blue-50 px-4 py-2 dark:bg-blue-900/30">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Desmos Graphing Calculator</span>
            <button
              onClick={() => setShowCalculator(false)}
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <iframe
            src="https://www.desmos.com/calculator"
            className="h-80 w-full border-0 sm:h-96"
            title="Desmos Calculator"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )}

      {/* Question Navigator Overlay */}
      {showNav && (
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white">Question Navigator</h3>
            <button
              onClick={() => setShowNav(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-9 gap-2 sm:grid-cols-12">
            {answers.map((a, idx) => (
              <button
                key={idx}
                onClick={() => goToQuestion(idx)}
                className={`relative flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition ${
                  idx === currentQuestionIndex
                    ? 'bg-accent text-white ring-2 ring-accent-muted'
                    : isAnswered(a, currentSection.questions[idx])
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
                }`}
              >
                {idx + 1}
                {a.flagged && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-amber-400 text-[8px] text-white">
                    !
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-3 flex gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded bg-green-100 dark:bg-green-900/40" /> Answered
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded bg-gray-100 dark:bg-gray-700" /> Unanswered
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded bg-accent" /> Current
            </span>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-pink-500 transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / currentSection.questionCount) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 dark:border-gray-700 dark:bg-gray-800">
        {/* Question Text */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent-hover dark:bg-accent-light/50 dark:text-accent-muted">
              Q{currentQuestionIndex + 1}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-400">
              {currentQuestion.category}
            </span>
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-900 dark:prose-invert dark:text-white"
            dangerouslySetInnerHTML={{ __html: renderLatex(currentQuestion.question) }}
          />
        </div>

        {/* Answer input: grid-in (SPR) for typed responses, otherwise A–D options */}
        {currentQuestion.gridIn ? (
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Enter your answer
            </label>
            <input
              type="text"
              inputMode="text"
              autoComplete="off"
              value={currentAnswer?.textValue ?? ''}
              onChange={e => setTextAnswer(e.target.value)}
              placeholder="e.g. 12, 3.5, or 3/4"
              className="w-full max-w-xs rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-lg font-semibold text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-accent-light/40"
            />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Student-produced response — type a number. Fractions (like 3/4) and decimals are accepted.
            </p>
          </div>
        ) : (
          <div className="mb-6 space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const letters = ['A', 'B', 'C', 'D']
              const isSelected = currentAnswer?.selectedIndex === idx
              const isStruckOut = currentStrikethroughs.has(idx)
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (strikethroughMode) {
                      toggleStrikethrough(idx)
                    } else {
                      selectAnswer(idx)
                    }
                  }}
                  className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition ${
                    isSelected
                      ? 'border-accent bg-accent-subtle dark:border-accent-muted dark:bg-accent-light/20'
                      : strikethroughMode
                        ? 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50/50 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-red-500/40'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700/50'
                  } ${isStruckOut ? 'opacity-50' : ''}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isSelected
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    }`}
                  >
                    {letters[idx]}
                  </span>
                  <span
                    className={`flex-1 pt-1 text-gray-800 dark:text-gray-200 ${isStruckOut ? 'line-through' : ''}`}
                    dangerouslySetInnerHTML={{ __html: renderLatex(option) }}
                  />
                </button>
              )
            })}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 dark:border-gray-700">
          <div className="flex gap-2">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ← Back
            </button>
            <button
              onClick={toggleFlag}
              className={`flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-medium transition ${
                currentAnswer?.flagged
                  ? 'border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-400'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="h-4 w-4" fill={currentAnswer?.flagged ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              {currentAnswer?.flagged ? 'Flagged' : 'Flag'}
            </button>
          </div>

          <div className="flex gap-2">
            {currentQuestionIndex === currentSection.questionCount - 1 ? (
              <button
                onClick={() => setPhase('review')}
                className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg"
              >
                Review & Submit
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="rounded-xl bg-gradient-to-r from-accent to-pink-600 px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// We need a wrapper that handles the review phase properly
export function SATTestWrapper({ test, onComplete, onCancel }: SATFullTestProps) {
  const [results, setResults] = useState<TestResults | null>(null)
  const [submitted, setSubmitted] = useState(false)

  // Pre-load KaTeX lazily on mount
  useEffect(() => { preloadKatex() }, [])

  const handleComplete = useCallback(
    async (testResults: TestResults) => {
      setResults(testResults)
      setSubmitted(true)

      // Save to API
      try {
        await fetch('/api/sat-practice/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            testNumber: test.testNumber,
            rwScore: testResults.rwScore,
            mathScore: testResults.mathScore,
            totalScore: testResults.totalScore,
            rwCorrect: testResults.rwCorrect,
            rwTotal: testResults.rwTotal,
            mathCorrect: testResults.mathCorrect,
            mathTotal: testResults.mathTotal,
            timeSpent: testResults.timeSpent,
            weakAreas: testResults.weakAreas.join(', '),
            strengths: testResults.strengths.join(', '),
            answers: testResults.sections.map(s => ({
              sectionId: s.sectionId,
              sectionName: s.sectionName,
              correct: s.correct,
              total: s.total,
              answers: s.answers.map(a => ({
                questionId: a.question.id,
                selectedIndex: a.selectedIndex,
                textValue: a.textValue,
                answered: a.answered,
                correct: a.correct,
                category: a.question.category,
                sourceSlug: a.question.sourceSlug,
              })),
            })),
          }),
        })
      } catch {
        // Silently fail — results are still shown
      }

      onComplete(testResults)
    },
    [test.testNumber, onComplete],
  )

  if (submitted && results) {
    return <SATResultsView results={results} testNumber={test.testNumber} onCancel={onCancel} />
  }

  return <SATFullTestComponent test={test} onComplete={handleComplete} onCancel={onCancel} />
}

/* ------------------------------------------------------------------ */
/*  Results View                                                       */
/* ------------------------------------------------------------------ */

function SATResultsView({
  results,
  testNumber,
  onCancel,
}: {
  results: TestResults
  testNumber: number
  onCancel: () => void
}) {
  const scoreColor = (score: number) => {
    if (score >= 700) return 'text-green-600 dark:text-green-400'
    if (score >= 550) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  const scoreMessage = (score: number) => {
    if (score >= 1400) return 'Outstanding! You\'re in elite territory.'
    if (score >= 1200) return 'Excellent work! Strong performance overall.'
    if (score >= 1000) return 'Good foundation. Keep practicing to improve!'
    if (score >= 800) return 'You\'re building skills. Focus on weak areas.'
    return 'Keep studying — every practice test helps you improve!'
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-accent to-pink-500">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Practice Test {testNumber} Results
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {scoreMessage(results.totalScore)}
          </p>
        </div>

        {/* Total Score */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
            Composite Score
          </p>
          <p className={`text-6xl font-black ${scoreColor(results.totalScore)}`}>
            {results.totalScore}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">out of 1600</p>
        </div>

        {/* Score Breakdown */}
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-blue-50 p-5 text-center dark:bg-blue-900/20">
            <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Reading & Writing
            </p>
            <p className={`text-3xl font-bold ${scoreColor(results.rwScore)}`}>
              {results.rwScore}
            </p>
            <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">
              {results.rwCorrect}/{results.rwTotal} correct
            </p>
          </div>
          <div className="rounded-xl bg-accent-subtle p-5 text-center dark:bg-accent-light/20">
            <p className="text-xs font-medium text-accent uppercase dark:text-accent-muted">
              Math
            </p>
            <p className={`text-3xl font-bold ${scoreColor(results.mathScore)}`}>
              {results.mathScore}
            </p>
            <p className="mt-1 text-sm text-accent dark:text-accent-muted">
              {results.mathCorrect}/{results.mathTotal} correct
            </p>
          </div>
        </div>

        {/* Per-Section Details */}
        <div className="mb-8">
          <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">Section Breakdown</h3>
          <div className="space-y-3">
            {results.sections.map(sec => {
              const pct = Math.round((sec.correct / sec.total) * 100)
              return (
                <div key={sec.sectionId} className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                      {sec.sectionName}
                      {sec.tier === 'hard' && (
                        <span
                          className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                          title="Your Module 1 score earned the harder second module, just like the real adaptive SAT. The top of the score range is only reachable from this form."
                        >
                          HARDER FORM EARNED
                        </span>
                      )}
                      {sec.tier === 'easy' && (
                        <span
                          className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-semibold text-gray-600 dark:bg-gray-600 dark:text-gray-300"
                          title="Module 1 routed you to the standard second module. On the real SAT this form caps the reachable score — raising Module 1 accuracy is what unlocks the higher range."
                        >
                          STANDARD FORM
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {sec.correct}/{sec.total} ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                    <div
                      className={`h-full rounded-full transition-all ${
                        pct >= 80
                          ? 'bg-green-500'
                          : pct >= 60
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Time */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total time: {formatTime(results.timeSpent)}
          </p>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {results.strengths.length > 0 && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-800 dark:text-green-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Strengths
              </h4>
              <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
                {results.strengths.map(s => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          )}
          {results.weakAreas.length > 0 && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-700 dark:bg-red-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-800 dark:text-red-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Areas to Improve
              </h4>
              <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
                {results.weakAreas.map(w => (
                  <li key={w}>• {w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl bg-gradient-to-r from-accent to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Back to Practice Tests
          </button>
        </div>
      </div>
    </div>
  )
}
