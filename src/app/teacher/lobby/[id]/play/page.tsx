'use client'

import { use, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import 'katex/dist/katex.min.css'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import {
  useChaosNow,
  PowerUpBar,
  InkSplatOverlay,
  DarkOverlay,
  StormOverlay,
  FrostOverlay,
  TimeWarpOverlay,
  ChaosToasts,
  type ChaosToast,
} from '@/components/ChaosMode'
import { activeEffects, POWER_UPS, type ActiveEffect, type PowerUpId } from '@/lib/chaos-powerups'
import type { LobbyInventoryItem } from '@/lib/lobby-chaos'

interface PlayQuestion {
  id: number | string
  question: string
  options: string[]
  topicSlug?: string
}

interface LobbyChaosState {
  intensity: string
  inventory: LobbyInventoryItem[]
  effects: ActiveEffect[]
  shield?: boolean
  reflect?: boolean
  doubleNext?: boolean
  fiftyFifty?: { questionIndex: number; eliminated: number[] }
}

interface PlayState {
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
  endsAt?: string
  durationSec?: number
  gameMode?: string
  chaos?: LobbyChaosState | null
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
  const [chaos, setChaos] = useState<LobbyChaosState | null>(null)
  const [toasts, setToasts] = useState<ChaosToast[]>([])
  const [firing, setFiring] = useState(false)

  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Effects already announced, so re-polling the same active attack does not
  // re-toast it every two seconds.
  const seenEffects = useRef<Set<string>>(new Set())

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
      if (json.chaos) {
        setChaos(json.chaos)
        // Tell the victim who hit them — ActiveEffect.from carries the
        // attacker's display name.
        const fresh = (json.chaos.effects as ActiveEffect[]).filter(
          (e) => !seenEffects.current.has(e.id) && e.type !== 'time-warp'
        )
        if (fresh.length) {
          for (const e of fresh) seenEffects.current.add(e.id)
          setToasts((prev) => [
            ...prev,
            ...fresh.map((e) => ({
              id: e.id,
              text: `${e.from} hit you with ${POWER_UPS[e.type].name}!`,
            })),
          ])
        }
      }
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
    // Poll every 5s while waiting. Normally polling stops once IN_PROGRESS
    // because the questions are already loaded — but in Chaos Mode this GET is
    // how an incoming attack reaches its victim, so keep a faster poll running.
    const t = setInterval(() => {
      setState(s => {
        if (!s || s.status !== 'IN_PROGRESS' || s.gameMode === 'CHAOS') void load()
        return s
      })
    }, 2000)
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

  // Ticks only while an effect is running, so overlays animate without
  // re-rendering the page the rest of the time.
  const chaosNow = useChaosNow(chaos?.effects)

  const currentQuestion: PlayQuestion | null = useMemo(() => {
    const qs = state?.questions ?? []
    return qs[questionIndex] ?? null
  }, [state?.questions, questionIndex])

  async function submitAnswer(chosen: number) {
    if (submitting || feedback || expired || !currentQuestion) return
    // Freeze blocks answering outright — dimming the buttons is not enough,
    // since a keyboard user can still reach them.
    if (activeEffects(chaos?.effects, Date.now()).some(
      (e) => e.type === 'freeze' || e.type === 'chaos-storm'
    )) return
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
      if (json.powerUps) setChaos((c) => (c ? { ...c, ...json.powerUps } : c))
      if (json.droppedPowerUp) {
        const def = POWER_UPS[json.droppedPowerUp as PowerUpId]
        setToasts((prev) => [
          ...prev,
          { id: `drop-${Date.now()}`, text: `You found ${def.icon} ${def.name}!` },
        ])
      }
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

  async function firePowerUp(powerUpId: PowerUpId) {
    if (firing || expired) return
    setFiring(true)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/powerup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ powerUpId, questionIndex }),
      })
      const json = await res.json()
      if (json.powerUps) setChaos((c) => (c ? { ...c, ...json.powerUps } : c))
      if (!res.ok || json.ok === false) {
        setToasts((prev) => [
          ...prev,
          { id: `err-${Date.now()}`, text: json.error || 'That did not land' },
        ])
        return
      }
      const def = POWER_UPS[powerUpId]
      const blurb =
        json.scope === 'team'
          ? `${def.icon} ${def.name} hit all ${json.targets} of them!`
          : json.scope === 'self'
            ? `${def.icon} ${def.name} ready`
            : `${def.icon} ${def.name} sent!`
      const extra = json.blocked ? ` (${json.blocked} blocked)` : json.reflected ? ' — reflected back!' : ''
      setToasts((prev) => [...prev, { id: `use-${Date.now()}`, text: blurb + extra }])
    } catch {
      setToasts((prev) => [...prev, { id: `err-${Date.now()}`, text: 'That did not land' }])
    } finally {
      setFiring(false)
    }
  }

  // Toasts are transient; drop each one a few seconds after it appears.
  useEffect(() => {
    if (toasts.length === 0) return
    const t = setTimeout(() => setToasts((prev) => prev.slice(1)), 3200)
    return () => clearTimeout(t)
  }, [toasts])

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
      <div className="min-h-screen flex items-center justify-center bg-indigo-50 text-gray-900">
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
      <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4 text-gray-900">
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
  // Chaos: an attack is "live" only while its window is open, so drive the
  // overlays off the server clock rather than off arrival time.
  const live = activeEffects(chaos?.effects, chaosNow)
  const frozen = live.some((e) => e.type === 'freeze' || e.type === 'chaos-storm')
  const eliminated =
    chaos?.fiftyFifty?.questionIndex === questionIndex ? chaos.fiftyFifty.eliminated : []

  const totalSec = remainingMs !== null ? Math.max(0, Math.ceil(remainingMs / 1000)) : 0
  const mm = Math.floor(totalSec / 60).toString().padStart(2, '0')
  const ss = (totalSec % 60).toString().padStart(2, '0')
  const timerColor =
    totalSec <= 30 ? 'text-rose-600' : totalSec <= 60 ? 'text-amber-600' : 'text-gray-900'

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4 sm:p-6 text-gray-900">
      {live.map((e) =>
        e.type === 'ink-splat' ? <InkSplatOverlay key={e.id} effect={e} now={chaosNow} /> :
        e.type === 'blackout' ? <DarkOverlay key={e.id} effect={e} now={chaosNow} /> :
        e.type === 'chaos-storm' ? <StormOverlay key={e.id} effect={e} now={chaosNow} /> :
        e.type === 'freeze' ? <FrostOverlay key={e.id} effect={e} now={chaosNow} /> :
        e.type === 'fog' ? <DarkOverlay key={e.id} effect={e} now={chaosNow} intensity={0.35} /> :
        e.type === 'time-warp' ? <TimeWarpOverlay key={e.id} effect={e} now={chaosNow} /> :
        null
      )}
      <ChaosToasts toasts={toasts} />
      {chaos && (
        <PowerUpBar
          inventory={chaos.inventory.map((i) => i.id)}
          scopes={chaos.inventory.map((i) => i.scope)}
          shield={chaos.shield}
          reflect={chaos.reflect}
          doubleNext={chaos.doubleNext}
          disabled={firing || expired || frozen}
          onUse={firePowerUp}
        />
      )}
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
                // 50/50 struck this option out for this question only.
                const struck = eliminated.includes(i)
                if (struck && !feedback) btnClass = 'border-gray-200 bg-gray-100 opacity-40 line-through'
                return (
                  <button
                    key={i}
                    disabled={submitting || !!feedback || expired || frozen || struck}
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
