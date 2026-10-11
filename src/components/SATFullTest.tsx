'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import DesmosCalculatorLink from '@/components/DesmosCalculatorLink'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import type { SATFullTest, SATTestQuestion, SATTestSection } from '@/data/sat-practice/test-generator'
import { analyzePerformance, estimateScaledScore, module2Route, routedModule2 } from '@/data/sat-practice/test-generator'
import { gradeGridIn } from '@/data/sat-grid-in'
import { satSectionScaledRouted, projectionRange as satProjectionRange } from '@/lib/sat-scoring'
import {
  psatSectionScaled,
  psatSectionScaledRouted,
  psatSectionRange,
  psatSelectionIndexOf,
  psatSelectionIndexRange,
  projectionRange as psatProjectionRange,
} from '@/lib/psat-scoring'
import { useActivitySurface } from '@/hooks/useActivitySurface'
import { Circle, Eye, EyeOff, Flag, Ruler, X } from 'lucide-react'
import PassageHighlighter from '@/components/exam/PassageHighlighter'
import SatReferenceSheet from '@/components/exam/SatReferenceSheet'
import QuestionNavigator, { type NavigatorItem } from '@/components/exam/QuestionNavigator'
import type { HighlightRange } from '@/lib/passage-highlights'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface QuestionAnswer {
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
  /** Position of this module in test.sections (the server grades by it). */
  moduleIndex: number
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
    flagged: boolean
    /** Seconds spent on the question (summed over visits). */
    seconds: number
  }[]
}

interface TestResults {
  /** Server attempt id, once the submit has been saved. */
  attemptId?: string
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

/** Stable empty highlight list (the highlighter repaints on identity change). */
const NO_HIGHLIGHTS: HighlightRange[] = []

/**
 * Bluebook-style 5-minute warning: a hidden timer reappears for these seconds
 * once 5:00 remains, alongside an announced warning.
 */
const FIVE_MINUTES = 300
const FIVE_MINUTE_REVEAL_SECONDS = 10

/** localStorage key for the hide-timer preference, per practice test. */
function timerPrefKey(test: Pick<SATFullTest, 'format' | 'testNumber' | 'exam'>): string {
  return `sat-timer-hidden:${test.exam === 'psat' ? 'psat-' : ''}${test.format}-${test.testNumber}`
}

/** Display facts per exam: name, section floor, scale maxima. */
const EXAM_META = {
  sat: { name: 'SAT', longName: 'Digital SAT', sectionMin: 200, sectionMax: 800, totalMax: 1600 },
  psat: { name: 'PSAT', longName: 'Digital PSAT/NMSQT', sectionMin: 160, sectionMax: 760, totalMax: 1520 },
} as const

type ExamKind = keyof typeof EXAM_META

const examOf = (test: Pick<SATFullTest, 'exam'>): ExamKind => (test.exam === 'psat' ? 'psat' : 'sat')

/** Navigator entries for a module's answers (text + icon state, never color alone). */
export function satNavigatorItems(
  answers: QuestionAnswer[],
  questions: SATTestQuestion[],
  currentIndex: number,
): NavigatorItem[] {
  return answers.map((a, idx) => ({
    key: String(idx),
    label: String(idx + 1),
    answered: isAnswered(a, questions[idx]),
    flagged: a.flagged,
    current: idx === currentIndex,
  }))
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
  const exam = examOf(initialTest)
  const meta = EXAM_META[exam]
  const [phase, setPhase] = useState<TestPhase>('intro')
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sectionAnswers, setSectionAnswers] = useState<Map<string, QuestionAnswer[]>>(new Map())
  const [timeRemaining, setTimeRemaining] = useState(0)
  // Teacher reports: a running section counts reading time even without input.
  useActivitySurface({ surface: 'PRACTICE_TEST', courseSlug: 'sat-prep', timed: phase === 'testing' })
  const [sectionStartTime, setSectionStartTime] = useState(0)
  const [completedSections, setCompletedSections] = useState<SectionResult[]>([])
  const [showNav, setShowNav] = useState(false)
  const [submitting, _setSubmitting] = useState(false)
  // Strikethrough tracker: sectionId -> questionIndex -> Set of option indices
  const [strikethroughs, setStrikethroughs] = useState<Map<string, Map<number, Set<number>>>>(new Map())
  const [strikethroughMode, setStrikethroughMode] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const totalStartTimeRef = useRef(Date.now())
  // Pending Module 2 routing builds, keyed by section index. The next module
  // never starts until its routed form has landed (or failed): a student who
  // clicked Continue before the swap used to sit the unrouted module.
  const routingRef = useRef<Map<number, Promise<SATTestSection | null>>>(new Map())
  const [preparingNext, setPreparingNext] = useState(false)
  // Per-question time: seconds per question index, per section id.
  const questionSecondsRef = useRef<Map<string, number[]>>(new Map())
  const activeQuestionRef = useRef<{ sectionId: string; index: number; since: number } | null>(null)
  // Exam tools: math reference sheet, hide-timer toggle (remembered per test),
  // R&W passage highlights keyed "sectionId:questionIndex".
  const [referenceOpen, setReferenceOpen] = useState(false)
  const [timerHidden, setTimerHidden] = useState(false)
  const [highlights, setHighlights] = useState<Record<string, HighlightRange[]>>({})
  const prefKey = timerPrefKey(initialTest)
  useEffect(() => {
    try { setTimerHidden(localStorage.getItem(prefKey) === '1') } catch { /* storage unavailable */ }
  }, [prefKey])
  const toggleTimerHidden = useCallback(() => {
    setTimerHidden((h) => {
      const next = !h
      try {
        if (next) localStorage.setItem(prefKey, '1')
        else localStorage.removeItem(prefKey)
      } catch { /* storage unavailable — preference lasts this session only */ }
      return next
    })
  }, [prefKey])

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

  // Bank the time spent on the question being left (navigation, review,
  // section end) and start the clock on the one now shown.
  const flushQuestionTime = useCallback(() => {
    const active = activeQuestionRef.current
    if (!active) return
    const arr = questionSecondsRef.current.get(active.sectionId) ?? []
    arr[active.index] = (arr[active.index] ?? 0) + (Date.now() - active.since) / 1000
    questionSecondsRef.current.set(active.sectionId, arr)
    activeQuestionRef.current = null
  }, [])
  const currentSectionId = currentSection?.id
  useEffect(() => {
    flushQuestionTime()
    if (phase === 'testing' && currentSectionId) {
      activeQuestionRef.current = { sectionId: currentSectionId, index: currentQuestionIndex, since: Date.now() }
    }
  }, [phase, currentSectionId, currentQuestionIndex, flushQuestionTime])

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
          // Through the ref: this interval was created when the section
          // started, so a direct call would grade that render's (empty) answers.
          submitSectionRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase, currentSectionIndex])

  // Start a section. `override` is a just-routed Module 2 whose state update
  // has not rendered yet.
  const startSection = useCallback(
    (sectionIdx: number, override?: SATTestSection) => {
      setCurrentSectionIndex(sectionIdx)
      setCurrentQuestionIndex(0)
      const section = override ?? test.sections[sectionIdx]
      setTimeRemaining(section.timeLimitSeconds)
      setSectionStartTime(Date.now())
      getOrCreateSectionAnswers(section.id, section.questionCount)
      setPhase('testing')
    },
    [test.sections, getOrCreateSectionAnswers],
  )

  // Continue from the break: wait for a pending Module 2 route first.
  const continueToSection = useCallback(
    async (sectionIdx: number) => {
      const pending = routingRef.current.get(sectionIdx)
      if (!pending) {
        startSection(sectionIdx)
        return
      }
      setPreparingNext(true)
      const rebuilt = await pending
      routingRef.current.delete(sectionIdx)
      setPreparingNext(false)
      startSection(sectionIdx, rebuilt ?? undefined)
    },
    [startSection],
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
      const seconds = questionSecondsRef.current.get(section.id) ?? []
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
          flagged: !!ans?.flagged,
          seconds: Math.round(seconds[i] ?? 0),
        }
      })

      const scaledScore = exam === 'psat'
        ? psatSectionScaled(section.questionCount > 0 ? correct / section.questionCount : 0)
        : estimateScaledScore(correct, section.questionCount, section.section)

      return {
        sectionId: section.id,
        moduleIndex: sectionIdx,
        tier: section.tier,
        sectionName: section.name,
        correct,
        total: section.questionCount,
        scaledScore,
        timeSpent,
        answers: detailedAnswers,
      }
    },
    [test.sections, sectionAnswers, sectionStartTime, exam],
  )

  // Submit current section
  const handleSubmitSection = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    flushQuestionTime()

    const result = computeSectionResult(currentSectionIndex)
    const updatedCompleted = [...completedSections, result]
    setCompletedSections(updatedCompleted)

    // ADAPTIVE ROUTING: a finished Module 1 decides the form of the Module 2
    // in the same subject, exactly as the digital SAT does. The build runs
    // while the break screen shows; continueToSection waits for it, so the
    // student always sits the routed module. routedModule2 is the same helper
    // the server grades with, so both see the identical question set.
    const justFinished = test.sections[currentSectionIndex]
    if (justFinished?.moduleNum === 1) {
      const nextIdx = test.sections.findIndex(
        (sec) => sec.section === justFinished.section && sec.moduleNum === 2,
      )
      if (nextIdx >= 0) {
        const route = module2Route(result.correct, result.total)
        const pending = routedModule2(test, nextIdx, route)
          .then((rebuilt) => {
            setTest((prev) => {
              const sections = [...prev.sections]
              sections[nextIdx] = rebuilt
              return { ...prev, sections }
            })
            return rebuilt
          })
          .catch(() => null) // keep the pre-built module on failure (scored unrouted)
        routingRef.current.set(nextIdx, pending)
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
  }, [currentSectionIndex, completedSections, test, computeSectionResult, flushQuestionTime])

  // The section timer calls the latest handler, never the one from when the
  // interval was created.
  const submitSectionRef = useRef(handleSubmitSection)
  useEffect(() => {
    submitSectionRef.current = handleSubmitSection
  }, [handleSubmitSection])

  const finishTest = useCallback(
    (allSections: SectionResult[]) => {

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
      // Provisional (the server's score replaces it): the curve of the Module 2
      // route actually served, untiered when there was no routed module.
      const sectionScore = (secs: SectionResult[]) => {
        const m1 = secs.filter(s => s.tier === undefined || s.tier === 'medium')
        const m2 = secs.find(s => s.tier === 'hard' || s.tier === 'easy')
        const m1Correct = m1.reduce((n, s) => n + s.correct, 0)
        const m1Total = m1.reduce((n, s) => n + s.total, 0)
        return (exam === 'psat' ? psatSectionScaledRouted : satSectionScaledRouted)({
          m1Correct,
          m1Total,
          m2Correct: m2?.correct ?? 0,
          m2Total: m2?.total ?? 0,
          tier: m2 ? (m2.tier === 'hard' ? 'harder' : 'easier') : null,
        })
      }
      const rwScore = rwTotal > 0 ? sectionScore(rwSections) : EXAM_META[exam].sectionMin
      const mathScore = mathTotal > 0 ? sectionScore(mathSections) : EXAM_META[exam].sectionMin

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
    [onComplete, exam],
  )

  // ----------------------------------------------------------------
  //  Computed values needed by both review and testing phases
  // ----------------------------------------------------------------
  const answeredCount = answers.filter(a => isAnswered(a, currentSection?.questions[a.questionIndex])).length
  const flaggedCount = answers.filter(a => a.flagged).length
  const timeWarning = timeRemaining <= FIVE_MINUTES // 5 min warning
  const timeCritical = timeRemaining <= 60 // 1 min critical
  // The 10 seconds after 5:00 remain: announce, and show even a hidden timer.
  const fiveMinuteAlert = timeRemaining <= FIVE_MINUTES && timeRemaining > FIVE_MINUTES - FIVE_MINUTE_REVEAL_SECONDS
  const timerVisible = !timerHidden || fiveMinuteAlert

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
              {meta.name} Practice Test {test.testNumber}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {test.format === 'full' ? 'Full-Length' : 'Mini'} {meta.longName} Simulation
              {test.format === 'full' ? ' · adaptive Module 2' : ''}
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
            onClick={() => { void continueToSection(nextIdx) }}
            disabled={preparingNext}
            className="w-full rounded-xl bg-gradient-to-r from-accent to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
          >
            {preparingNext ? 'Preparing the next module…' : 'Continue to Next Section'}
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
                Jump to question
                <span className="ml-2 inline-flex items-center gap-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                  (<Circle className="h-3 w-3" aria-hidden="true" /> unanswered ·{' '}
                  <Flag className="h-3 w-3" fill="currentColor" aria-hidden="true" /> flagged)
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {answers.map((a, idx) => {
                  if (!isAnswered(a, currentSection.questions[idx]) || a.flagged) {
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          goToQuestion(idx)
                          setPhase('testing')
                        }}
                        aria-label={`Question ${idx + 1}, ${isAnswered(a, currentSection.questions[idx]) ? 'answered' : 'unanswered'}${a.flagged ? ', flagged for review' : ''}`}
                        className={`flex h-9 min-w-[3rem] items-center justify-center gap-1 rounded-lg px-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
                          a.flagged
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                            : 'border border-dashed border-red-300 bg-red-50 text-red-700 dark:border-red-700 dark:bg-red-900/40 dark:text-red-400'
                        }`}
                      >
                        {a.flagged
                          ? <Flag className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
                          : <Circle className="h-3 w-3" aria-hidden="true" />}
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

        {/* Timer — hideable like Bluebook's; reappears briefly at 5:00 */}
        <div className="flex items-center gap-2">
          {timerVisible ? (
            <div
              role="timer"
              aria-label={`Time remaining: ${formatTime(timeRemaining)}`}
              className={`rounded-lg px-4 py-2 text-lg font-mono font-bold ${
                timeCritical
                  ? 'animate-pulse bg-red-100 text-red-700 motion-reduce:animate-none dark:bg-red-900/40 dark:text-red-400'
                  : timeWarning
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {formatTime(timeRemaining)}
            </div>
          ) : null}
          <button
            type="button"
            onClick={toggleTimerHidden}
            aria-pressed={timerHidden}
            title={timerHidden ? 'Show the timer' : 'Hide the timer'}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring motion-reduce:transition-none ${
              timerHidden
                ? 'border-accent bg-accent-subtle text-accent dark:border-accent-muted dark:bg-accent-light/20 dark:text-accent-muted'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {timerHidden
              ? <Eye className="h-4 w-4" aria-hidden="true" />
              : <EyeOff className="h-4 w-4" aria-hidden="true" />}
            Hide timer
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNav(!showNav)}
            aria-expanded={showNav}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <span className="hidden sm:inline">Navigator </span>
            ({answeredCount}/{currentSection.questionCount})
          </button>
          {flaggedCount > 0 && (
            <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
              {flaggedCount} flagged
            </span>
          )}
          {/* Bluebook tools — the real exam supplies Desmos on Math only. */}
          {currentSection.name.toLowerCase().includes('math') && (
            <DesmosCalculatorLink size="md" />
          )}
          {/* Bluebook's "Reference" sheet — Math modules only. */}
          {currentSection.section === 'math' && (
            <button
              type="button"
              onClick={() => setReferenceOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring motion-reduce:transition-none dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Ruler className="h-4 w-4" aria-hidden="true" />
              Reference
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

      {currentSection.section === 'math' && (
        <SatReferenceSheet open={referenceOpen} onClose={() => setReferenceOpen(false)} />
      )}

      {fiveMinuteAlert && (
        <div role="status" className="mb-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-center text-sm font-semibold text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
          5 minutes remain in this module.
        </div>
      )}

      {/* Question Navigator Overlay — every state has an icon + text label */}
      {showNav && (
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white">Question Navigator</h3>
            <button
              type="button"
              onClick={() => setShowNav(false)}
              aria-label="Close the question navigator"
              className="rounded text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <QuestionNavigator
            items={satNavigatorItems(answers, currentSection.questions, currentQuestionIndex)}
            onJump={goToQuestion}
          />
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
        {/* Passage — passage-based R&W questions can't be answered without it.
            It used to be generated but never rendered here. */}
        {currentQuestion.passage && (
          <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
              {currentQuestion.passage.title}
            </p>
            {currentSection.section === 'reading-writing' ? (
              <PassageHighlighter
                key={`${currentSection.id}:${currentQuestionIndex}`}
                text={currentQuestion.passage.text}
                highlights={highlights[`${currentSection.id}:${currentQuestionIndex}`] ?? NO_HIGHLIGHTS}
                onChange={(next) => {
                  const k = `${currentSection.id}:${currentQuestionIndex}`
                  setHighlights((h) => ({ ...h, [k]: next }))
                }}
                label={currentQuestion.passage.title || 'Passage'}
                className="text-base leading-relaxed text-gray-800 dark:text-gray-200"
              />
            ) : (
              <div
                className="text-base leading-relaxed text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: renderLatex(currentQuestion.passage.text) }}
              />
            )}
          </div>
        )}
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

      // Save to API. The server rebuilds the form, grades every answer by
      // question id and scores on the curve of the Module 2 route actually
      // served; the browser's own tallies are display-only until it answers.
      let final = testResults
      try {
        const res = await fetch('/api/sat-practice/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            testNumber: test.testNumber,
            format: test.format,
            // PSAT forms are graded on the PSAT curves and stored as 'psat-full'.
            ...(test.exam === 'psat' ? { exam: 'psat' } : {}),
            // The form version this test was built at (absent on the form =
            // v1). The server still verifies it against the question ids.
            formVersion: test.formVersion ?? 1,
            timeSpent: testResults.timeSpent,
            weakAreas: testResults.weakAreas.join(', '),
            strengths: testResults.strengths.join(', '),
            responses: testResults.sections.flatMap(s =>
              s.answers.map(a => ({
                moduleIndex: s.moduleIndex,
                questionId: a.question.id,
                selectedIndex: a.question.gridIn ? null : a.selectedIndex,
                textValue: a.question.gridIn ? a.textValue : null,
                flagged: a.flagged,
                seconds: a.seconds,
              })),
            ),
          }),
        })
        if (res.ok) {
          const data = await res.json()
          if (typeof data?.totalScore === 'number') {
            final = {
              ...testResults,
              attemptId: data.attemptId,
              rwScore: data.rwScore,
              mathScore: data.mathScore,
              totalScore: data.totalScore,
              rwCorrect: data.rwCorrect,
              rwTotal: data.rwTotal,
              mathCorrect: data.mathCorrect,
              mathTotal: data.mathTotal,
            }
            setResults(final)
          }
        }
      } catch {
        // Silently fail — results are still shown
      }

      onComplete(final)
    },
    [test.testNumber, test.format, test.exam, test.formVersion, onComplete],
  )

  if (submitted && results) {
    return <SATResultsView results={results} testNumber={test.testNumber} exam={examOf(test)} onCancel={onCancel} />
  }

  return <SATFullTestComponent test={test} onComplete={handleComplete} onCancel={onCancel} />
}

/* ------------------------------------------------------------------ */
/*  Results View                                                       */
/* ------------------------------------------------------------------ */

export function SATResultsView({
  results,
  testNumber,
  exam = 'sat',
  onCancel,
}: {
  results: TestResults
  testNumber: number
  exam?: ExamKind
  onCancel: () => void
}) {
  const meta = EXAM_META[exam]
  const psat = exam === 'psat'
  // PSAT thresholds sit 40 points lower per section (its curve is the SAT's
  // shifted down 40; see src/lib/psat-scoring.ts).
  const shift = psat ? 40 : 0
  const scoreColor = (score: number) => {
    if (score >= 700 - shift) return 'text-green-600 dark:text-green-400'
    if (score >= 550 - shift) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  const scoreMessage = (score: number) => {
    const s = score + 2 * shift
    if (s >= 1400) return 'Outstanding! You\'re in elite territory.'
    if (s >= 1200) return 'Excellent work! Strong performance overall.'
    if (s >= 1000) return 'Good foundation. Keep practicing to improve!'
    if (s >= 800) return 'You\'re building skills. Focus on weak areas.'
    return 'Keep studying — every practice test helps you improve!'
  }

  // Practice scores are estimates: always shown with a range. A full-length
  // SAT form is high evidence (±30); the PSAT curve has no ground-truth pins
  // of its own, so medium (±40 total, ±20 per section).
  const fullLength = results.rwTotal + results.mathTotal > 49
  const totalRange = psat
    ? psatProjectionRange(results.totalScore, 'medium')
    : satProjectionRange(results.totalScore, fullLength ? 'high' : 'medium')
  const selectionIndex = psat ? psatSelectionIndexOf(results.rwScore, results.mathScore) : null
  const selectionRange = psat ? psatSelectionIndexRange(results.rwScore, results.mathScore) : null
  const sectionRangeLabel = (score: number) => {
    if (!psat) return null
    const r = psatSectionRange(score)
    return `likely ${r.low}–${r.high}`
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
            {psat ? 'PSAT ' : ''}Practice Test {testNumber} Results
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
          <p className={`text-6xl font-black ${scoreColor(results.totalScore / 2)}`}>
            {results.totalScore}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            out of {meta.totalMax} · likely range {totalRange.low}–{totalRange.high}
          </p>
        </div>

        {/* PSAT: the National Merit Selection Index */}
        {selectionIndex !== null && selectionRange && (
          <div className="mb-8 rounded-xl border border-accent-muted bg-accent-subtle p-5 text-center dark:border-accent-muted/40 dark:bg-accent-light/10">
            <p className="text-xs font-medium uppercase text-gray-600 dark:text-gray-300">
              National Merit Selection Index (estimate)
            </p>
            <p className="mt-1 text-4xl font-black text-gray-900 dark:text-white">{selectionIndex}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              likely {selectionRange.low}–{selectionRange.high} · 2 × R&amp;W ÷ 10 + Math ÷ 10 (range 48–228)
            </p>
            <Link
              href="/psat-selection-index"
              className="mt-3 inline-block rounded font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
            >
              Compare with your state&apos;s cutoffs
            </Link>
          </div>
        )}

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
            {sectionRangeLabel(results.rwScore) && (
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{sectionRangeLabel(results.rwScore)}</p>
            )}
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
            {sectionRangeLabel(results.mathScore) && (
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{sectionRangeLabel(results.mathScore)}</p>
            )}
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
                          title={`Your Module 1 score earned the harder second module, just like the real adaptive ${meta.name}. The top of the score range is only reachable from this form.`}
                        >
                          HARDER FORM EARNED
                        </span>
                      )}
                      {sec.tier === 'easy' && (
                        <span
                          className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-semibold text-gray-600 dark:bg-gray-600 dark:text-gray-300"
                          title={`Module 1 routed you to the standard second module. On the real ${meta.name} this form caps the reachable score — raising Module 1 accuracy is what unlocks the higher range.`}
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
        <div className="flex flex-col gap-3 sm:flex-row">
          {results.attemptId && (
            <Link
              href={`/review/sat-practice/${results.attemptId}`}
              className="flex-1 rounded-xl border-2 border-accent-muted px-6 py-3 text-center font-semibold text-accent transition hover:bg-accent-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted dark:hover:bg-accent-light/10"
            >
              Review every question
            </Link>
          )}
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl bg-gradient-to-r from-accent to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Back to Practice Tests
          </button>
        </div>
        {results.attemptId && (
          <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
            Missed and flagged questions also go to your{' '}
            <Link href="/sat/mistakes" className="font-medium text-accent hover:underline dark:text-accent-muted">SAT mistake log</Link>{psat ? ' (the PSAT and SAT test the same skills)' : ''}.
          </p>
        )}
      </div>
    </div>
  )
}
