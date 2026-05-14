'use client'

import { use, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import 'katex/dist/katex.min.css'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'

interface PlayQuestion {
  id: number | string
  question: string
  options: string[]
  topicSlug?: string
}

interface PlayState {
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
  endsAt?: string
  durationSec?: number
  questions?: PlayQuestion[]
  myProgress?: {
    score: number
    questionsAnswered: number
    questionsCorrect: number
    lastQuestionIndex: number
    team: number | null
  } | null
}

const TEAM_COLORS = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8']

export default function ClassMatchPlayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const { status: authStatus } = useSession()

  const [state, setState] = useState<PlayState | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [katexReady, setKatexReady] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean; correctAnswer: number; scoreDelta?: number } | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [score, setScore] = useState(0)
  const [questionsCorrect, setQuestionsCorrect] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [now, setNow] = useState(() => Date.now())

  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auth gate
  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=/teacher/lobby/${id}/play`)
    }
  }, [authStatus, router, id])

  // Preload KaTeX once
  useEffect(() => {
    preloadKatex().then(() => setKatexReady(true))
  }, [])

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/play`)
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Failed to load match')
        return
      }
      setState(json)
      if (json.myProgress) {
        setScore(json.myProgress.score)
        setQuestionsCorrect(json.myProgress.questionsCorrect)
        setQuestionsAnswered(json.myProgress.questionsAnswered)
        // Resume from last index if reloaded mid-game
        setQuestionIndex(prev =>
          prev === 0 && json.myProgress.lastQuestionIndex > 0
            ? json.myProgress.lastQuestionIndex
            : prev,
        )
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    }
  }, [id])

  useEffect(() => {
    if (authStatus !== 'authenticated') return
    void load()
    // Poll every 5s while waiting; once IN_PROGRESS we stop polling (questions are already loaded).
    const t = setInterval(() => {
      setState(s => {
        if (!s || s.status !== 'IN_PROGRESS') void load()
        return s
      })
    }, 5000)
    return () => clearInterval(t)
  }, [authStatus, load])

  // Local clock tick for the timer display
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(t)
  }, [])

  const remainingMs = useMemo(() => {
    if (!state?.endsAt) return null
    return Math.max(0, new Date(state.endsAt).getTime() - now)
  }, [state?.endsAt, now])

  const expired = remainingMs !== null && remainingMs <= 0

  // When time expires, mark match closed locally so we show end screen
  useEffect(() => {
    if (expired && state?.status === 'IN_PROGRESS') {
      // Trigger a refresh so server-side state catches up too
      void load()
    }
  }, [expired, state?.status, load])

  const currentQuestion: PlayQuestion | null = useMemo(() => {
    const qs = state?.questions ?? []
    return qs[questionIndex] ?? null
  }, [state?.questions, questionIndex])

  async function submitAnswer(chosen: number) {
    if (submitting || feedback || expired || !currentQuestion) return
    setSubmitting(true)
    setSelected(chosen)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionIndex, selectedIndex: chosen }),
      })
      const json = await res.json()
      if (!res.ok) {
        if (json?.expired) {
          setFeedback({ correct: false, correctAnswer: -1 })
          return
        }
        throw new Error(json.error || 'Submission failed')
      }
      setFeedback({
        correct: !!json.correct,
        correctAnswer: Number(json.correctAnswer),
        scoreDelta: typeof json.scoreDelta === 'number' ? json.scoreDelta : (json.correct ? 100 : -50),
      })
      setScore(json.score)
      setQuestionsAnswered(json.questionsAnswered)
      setQuestionsCorrect(json.questionsCorrect)
      // Auto-advance after a brief pause so the student sees the feedback color
      advanceTimer.current = setTimeout(() => {
        setSelected(null)
        setFeedback(null)
        setQuestionIndex(i => i + 1)
      }, 900)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
      setSelected(null)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current)
    }
  }, [])

  if (authStatus === 'loading' || !state) {
    return <div className="p-8 text-gray-600">{error || 'Loading match…'}</div>
  }

  // Pre-game: lobby still OPEN
  if (state.status === 'OPEN') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <div className="rounded-lg bg-white p-8 shadow text-center max-w-md">
          <div className="text-5xl mb-3">⏳</div>
          <h1 className="text-2xl font-bold mb-2">Waiting for the teacher…</h1>
          <p className="text-gray-600 mb-4">
            The match hasn&apos;t started yet. Once your teacher hits &ldquo;Start match&rdquo;, the timer
            will begin and questions will appear here.
          </p>
          <button
            onClick={() => router.push(`/teacher/lobby/${id}`)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
          >
            Back to lobby
          </button>
        </div>
      </div>
    )
  }

  // Post-game
  if (state.status === 'CLOSED' || expired) {
    const accuracy =
      questionsAnswered > 0 ? Math.round((questionsCorrect / questionsAnswered) * 100) : 0
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
        <div className="rounded-lg bg-white p-8 shadow text-center max-w-md">
          <div className="text-5xl mb-3">🏁</div>
          <h1 className="text-2xl font-bold mb-2">Match over!</h1>
          {state.myProgress?.team !== null && state.myProgress?.team !== undefined && (
            <p className="text-sm text-gray-500 mb-4">
              You played for <strong>{TEAM_COLORS[state.myProgress.team] ?? `Team ${state.myProgress.team + 1}`}</strong>
            </p>
          )}
          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="rounded bg-indigo-50 p-3">
              <div className="text-2xl font-bold text-indigo-700">{score}</div>
              <div className="text-xs text-gray-600">Score</div>
            </div>
            <div className="rounded bg-emerald-50 p-3">
              <div className="text-2xl font-bold text-emerald-700">{questionsCorrect}</div>
              <div className="text-xs text-gray-600">Correct</div>
            </div>
            <div className="rounded bg-amber-50 p-3">
              <div className="text-2xl font-bold text-amber-700">{accuracy}%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
          </div>
          <button
            onClick={() => router.push(`/teacher/lobby/${id}`)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Back to lobby (see leaderboard)
          </button>
        </div>
      </div>
    )
  }

  // IN_PROGRESS — render the question
  const totalSec = remainingMs !== null ? Math.max(0, Math.ceil(remainingMs / 1000)) : 0
  const mm = Math.floor(totalSec / 60).toString().padStart(2, '0')
  const ss = (totalSec % 60).toString().padStart(2, '0')
  const timerColor =
    totalSec <= 30 ? 'text-rose-600' : totalSec <= 60 ? 'text-amber-600' : 'text-gray-900'

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">
            Question <strong>{questionIndex + 1}</strong> · Score{' '}
            <strong className="text-indigo-700">{score}</strong> · Correct{' '}
            <strong>{questionsCorrect}</strong>
          </div>
          <div className={`text-2xl font-mono font-bold ${timerColor}`}>
            {mm}:{ss}
          </div>
        </div>

        {!currentQuestion ? (
          <div className="rounded-lg bg-white p-8 shadow text-center">
            <div className="text-3xl mb-2">🎉</div>
            <p className="text-gray-700">
              You&apos;ve answered every question in the bank — keep this page open until the timer
              runs out.
            </p>
          </div>
        ) : (
          <div className="rounded-lg bg-white p-5 sm:p-7 shadow relative">
            {feedback && typeof feedback.scoreDelta === 'number' && (
              <div
                className={
                  'absolute top-3 right-3 rounded-full px-3 py-1 text-sm font-bold ' +
                  (feedback.scoreDelta >= 0
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-rose-100 text-rose-700')
                }
              >
                {feedback.scoreDelta >= 0 ? `+${feedback.scoreDelta}` : feedback.scoreDelta}
              </div>
            )}
            <div
              className="text-lg sm:text-xl text-gray-900 mb-5"
              dangerouslySetInnerHTML={{
                __html: katexReady ? renderRichText(currentQuestion.question) : currentQuestion.question,
              }}
            />
            <div className="grid gap-2">
              {currentQuestion.options.map((opt, i) => {
                const isSelected = selected === i
                const isCorrect = feedback && i === feedback.correctAnswer
                const isWrongPick = feedback && isSelected && !feedback.correct
                let btnClass = 'border-gray-300 bg-white hover:border-indigo-400'
                if (feedback) {
                  if (isCorrect) btnClass = 'border-emerald-500 bg-emerald-50'
                  else if (isWrongPick) btnClass = 'border-rose-500 bg-rose-50'
                  else btnClass = 'border-gray-200 bg-gray-50 opacity-70'
                } else if (isSelected) {
                  btnClass = 'border-indigo-500 bg-indigo-50'
                }
                return (
                  <button
                    key={i}
                    disabled={submitting || !!feedback || expired}
                    onClick={() => submitAnswer(i)}
                    className={`w-full text-left rounded-lg border-2 px-4 py-3 transition-colors ${btnClass} disabled:cursor-not-allowed`}
                  >
                    <span
                      className="text-gray-900"
                      dangerouslySetInnerHTML={{
                        __html: katexReady ? renderRichText(opt) : opt,
                      }}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-3 text-xs text-gray-500 text-center">
          Questions are continuously fed until the timer runs out.
          <span className="text-emerald-700 font-medium"> +100</span> for correct,
          <span className="text-rose-700 font-medium"> −50</span> for wrong — don&apos;t guess.
        </div>
      </div>
    </div>
  )
}
