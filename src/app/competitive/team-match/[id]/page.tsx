'use client'

import { useEffect, useState, use, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Check, X, ClipboardList, Sparkles, RotateCcw } from 'lucide-react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import { botAnswerIndex, botAnswerPlan, matchPaceCourseKey } from '@/lib/bot-pacing'
import TeamMatchReview, { summarizeAnswers, type ReviewAnswer } from '@/components/competitive/team-match/TeamMatchReview'
import {
  VersusHeader,
  ModeChip,
  QuestionCard,
  AnswerTile,
  useAnswerHotkeys,
  ResultHero,
  FinalScore,
  StatTile,
  answerGridClass,
  type AnswerState,
} from '@/components/competitive/arena/Arena'
import type { AnyAvatarData } from '@/types/avatar'
import 'katex/dist/katex.min.css'

interface Question {
  id: number
  type?: 'find-angle' | 'find-coordinate' | 'multiple-choice'
  prompt?: string
  answerIndex?: number
  question?: string
  options?: string[]
  correctAnswer?: string
  explanation?: string
  difficulty?: 'easy' | 'medium' | 'hard'
  category?: string
  /** Expected student solve time, stamped at match creation (bot-pacing.ts). */
  expectedSeconds?: number
}

interface TeamPlayer {
  id: string
  name: string
  avatar?: unknown
}

interface TeamInfo {
  players: TeamPlayer[]
  score: number
}

interface TeamMatchState {
  id: string
  status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING'
  topicSlug: string
  winnerId: string | null
  startedAt: string
  completedAt: string | null
  team1: TeamInfo
  team2: TeamInfo
  questions: Question[]
  myQuestionIndex: number
  // The current player's own chronological answer history (server-stored per
  // participant in gameData.teamN.answers). Powers the post-match review.
  myAnswers?: ReviewAnswer[]
  myTeam: 1 | 2
  player1MMRBefore?: number
  player2MMRBefore?: number
  player1MMRAfter?: number
  player2MMRAfter?: number
}

export default function TeamMatchPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const searchParams = useSearchParams()
  const lobbyPath = searchParams.get('from')
    ? `/competitive/${searchParams.get('from')}`
    : '/competitive'
  const [matchState, setMatchState] = useState<TeamMatchState | null>(null)
  const [currentUserId, setCurrentUserId] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answerResult, setAnswerResult] = useState<{ correct: boolean } | null>(null)
  // Personal consecutive-correct streak (your own answers, not the team's).
  const [streak, setStreak] = useState(0)
  const [showReview, setShowReview] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // Re-render trigger only: renderRichText shows raw TeX until the lazily
  // loaded KaTeX module resolves (tables and bold render at once).
  const [, setKatexLoaded] = useState(false)

  useEffect(() => {
    preloadKatex().then(() => { setKatexLoaded(true) })
  }, [])

  const fetchMatchState = useCallback(async () => {
    try {
      const res = await fetch(`/api/competitive/team-match/${resolvedParams.id}`)
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to load match')
        return
      }
      const data = await res.json()
      setMatchState(data.match)
      setCurrentUserId(data.currentUserId)
      setLoading(false)
    } catch {
      setError('Failed to load match state')
    }
  }, [resolvedParams.id])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMatchState()
    pollingRef.current = setInterval(fetchMatchState, 800)
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current)
    }
  }, [fetchMatchState])

  // Stop polling when match completes
  useEffect(() => {
    if (matchState?.status === 'COMPLETED' && pollingRef.current) {
      clearInterval(pollingRef.current)
      pollingRef.current = null
    }
  }, [matchState?.status])

  // --- AI Bot Simulation for Practice Team Matches ---
  const matchStateRef = useRef(matchState)
  useEffect(() => {
    matchStateRef.current = matchState
  }, [matchState])

  useEffect(() => {
    const ms = matchStateRef.current
    if (!ms || ms.status !== 'IN_PROGRESS') return
    if (!(ms as unknown as Record<string, unknown>).isPracticeMatch) return

    const questionIndices = (ms as unknown as Record<string, Record<string, number>>).questionIndices || {}
    const aiDifficultyVal = ((ms as unknown as Record<string, unknown>).aiDifficulty || 'medium') as string

    // Detect AI bots by name
    const allPlayers = [...ms.team1.players, ...ms.team2.players]
    const aiPlayers = allPlayers.filter(
      p => p.name === 'AI Teammate' || p.name === 'AI Opponent 1' || p.name === 'AI Opponent 2' || p.name === 'AI Practice Bot'
    )
    if (aiPlayers.length === 0) return

    // Each bot paces itself off the question (bot-pacing.ts): the course's
    // exam pacing × item difficulty × item length, times its strength factor.
    // The pacing course was stored at creation; older matches resolve it from
    // the topic slug.
    const paceCourse = matchPaceCourseKey({
      topicSlug: ms.topicSlug,
      gameData: { paceCourseKey: (ms as unknown as Record<string, unknown>).paceCourseKey },
    })

    const timeouts: ReturnType<typeof setTimeout>[] = []

    for (const aiPlayer of aiPlayers) {
      const aiQIndex = questionIndices[aiPlayer.id] ?? 0
      const plannedQ = ms.questions[aiQIndex]
      if (!plannedQ) continue
      const plan = botAnswerPlan(plannedQ, paceCourse, aiDifficultyVal)

      const timeoutId = setTimeout(async () => {
        try {
          const currentQ = ms.questions[aiQIndex]
          if (!currentQ) return
          const answerIndex = botAnswerIndex(currentQ, plan.correct)
          await fetch(`/api/competitive/team-match/${resolvedParams.id}/answer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              questionIndex: aiQIndex,
              answerIndex,
              playerId: aiPlayer.id,
            }),
          })
        } catch (err) {
          console.error('AI team bot error:', err)
        }
      }, plan.delayMs)
      timeouts.push(timeoutId)
    }

    return () => timeouts.forEach(t => clearTimeout(t))
  }, [matchState?.team1?.score, matchState?.team2?.score, matchState?.status, resolvedParams.id])

  async function submitAnswer(answerIdx: number) {
    if (!matchState || submitting) return
    setSubmitting(true)
    setSelectedAnswer(answerIdx)

    try {
      const res = await fetch(`/api/competitive/team-match/${resolvedParams.id}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionIndex: matchState.myQuestionIndex,
          answerIndex: answerIdx,
        }),
      })
      const data = await res.json()
      setAnswerResult({ correct: data.correct })
      setStreak(prev => (data.correct ? prev + 1 : 0))

      // Brief feedback, then advance
      setTimeout(() => {
        setSelectedAnswer(null)
        setAnswerResult(null)
        setSubmitting(false)
        fetchMatchState()
      }, 1200)
    } catch {
      setSubmitting(false)
    }
  }

  function renderMath(text: string) {
    return renderRichText(text)
  }

  // Desktop shortcuts: same handler as a click, only while a tile would be enabled.
  const hkQuestion = matchState?.questions?.[matchState?.myQuestionIndex ?? -1]
  useAnswerHotkeys(
    matchState?.status === 'IN_PROGRESS' && !!hkQuestion && !submitting,
    hkQuestion?.options?.length ?? 0,
    (i) => { void submitAnswer(i) },
  )

  const fromSlug = searchParams.get('from')

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-3 py-4 dark:bg-gray-950 sm:px-4 sm:py-6" aria-busy="true" aria-label="Loading team battle">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="h-28 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />
          <div className="h-48 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map(i => <div key={i} className="h-16 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />)}
          </div>
        </div>
      </div>
    )
  }

  if (error || !matchState) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="rounded-3xl border border-card-border bg-card p-6 text-center shadow-sm sm:p-8">
          <p className="mb-4 text-lg font-semibold text-foreground">{error || 'Match not found'}</p>
          <button
            onClick={() => router.push(lobbyPath)}
            className="rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-semibold text-white hover:from-accent-hover hover:to-accent-secondary-hover"
          >
            Back to Lobby
          </button>
        </div>
      </div>
    )
  }

  const myTeam = matchState.myTeam === 1 ? matchState.team1 : matchState.team2
  const opponentTeam = matchState.myTeam === 1 ? matchState.team2 : matchState.team1
  const teammate = myTeam.players.find(p => p.id !== currentUserId)
  const question = matchState.questions[matchState.myQuestionIndex]
  const avatarsOf = (t: TeamInfo) => t.players.map(p => (p.avatar ?? null) as AnyAvatarData | null)
  const namesOf = (t: TeamInfo, markYou: boolean) =>
    t.players.map(p => (markYou && p.id === currentUserId ? `${p.name} (you)` : p.name)).join(' & ')

  // ---- COMPLETED STATE ----
  if (matchState.status === 'COMPLETED') {
    const myTeamWon = matchState.myTeam === 1
      ? matchState.team1.score >= 15
      : matchState.team2.score >= 15

    // Personal review data: server-stored per-player answer history plus the
    // full questions (explanations included once the match is COMPLETED).
    const reviewSummary = summarizeAnswers(matchState.myAnswers ?? [])
    const { totalAnswered, totalCorrect, missedCount, bestStreak } = reviewSummary

    return (
      <div className="min-h-screen bg-gray-50 px-3 py-6 dark:bg-gray-950 sm:px-4 sm:py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <ResultHero
            outcome={myTeamWon ? 'win' : 'loss'}
            title={myTeamWon ? 'Victory!' : 'Defeat'}
            subtitle={myTeamWon ? 'Your team dominated!' : 'Better luck next time!'}
          >
            <FinalScore
              you={{ name: 'Your team', teamAvatars: avatarsOf(myTeam), score: myTeam.score, sub: namesOf(myTeam, true), won: myTeamWon }}
              opponent={{ name: 'Opponents', teamAvatars: avatarsOf(opponentTeam), score: opponentTeam.score, sub: namesOf(opponentTeam, false), won: !myTeamWon }}
            />
            <div className="space-y-4 p-4 sm:p-7">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent ring-1 ring-accent-light">
                  <span aria-hidden>👥</span> Team 2v2 · first to 15
                </span>
              </div>
              {totalAnswered > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  <StatTile label="Your correct" value={totalCorrect} sub={`of ${totalAnswered}`} />
                  <StatTile label="Accuracy" value={`${Math.round((totalCorrect / totalAnswered) * 100)}%`} />
                  <StatTile label="Best streak" value={<>{bestStreak >= 2 && <span aria-hidden className="mr-1">🔥</span>}{bestStreak}</>} />
                </div>
              )}
              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:justify-center">
                <button
                  onClick={() => router.push(lobbyPath)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-bold text-white shadow-md transition-all hover:from-accent-hover hover:to-accent-secondary-hover"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" /> Play again
                </button>
                {totalAnswered > 0 && (
                  <button
                    onClick={() => setShowReview(!showReview)}
                    aria-expanded={showReview}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {missedCount > 0
                      ? <><ClipboardList className="h-4 w-4" aria-hidden="true" /> {showReview ? 'Hide Review' : `Review Mistakes (${missedCount})`}</>
                      : <><Sparkles className="h-4 w-4" aria-hidden="true" /> {showReview ? 'Hide Review' : 'Review All Questions'}</>}
                  </button>
                )}
                {fromSlug && (
                  <button
                    onClick={() => router.push('/competitive')}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-muted-foreground transition-colors hover:text-accent"
                  >
                    Competitive hub
                  </button>
                )}
              </div>
            </div>
          </ResultHero>

          {/* Post-match question review (your own answers only) */}
          {showReview && (
            <div className="[&>div]:rounded-3xl [&>div]:border [&>div]:border-card-border [&>div]:bg-card [&>div]:shadow-sm">
              <TeamMatchReview
                questions={matchState.questions}
                summary={reviewSummary}
                renderMath={renderMath}
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  // ---- IN-PROGRESS STATE ----
  return (
    <div className="min-h-screen bg-gray-50 px-3 pb-8 dark:bg-gray-950 sm:px-4">
      <div className="mx-auto max-w-3xl">
        <VersusHeader
          you={{
            name: 'Your team',
            shortName: 'Us',
            teamAvatars: avatarsOf(myTeam),
            isYou: true,
            score: myTeam.score,
            caption: `${myTeam.score}/15`,
            progress: myTeam.score / 15,
            extra: <p className="mt-1 hidden truncate text-xs text-muted-foreground sm:block">{namesOf(myTeam, true)}</p>,
          }}
          opponent={{
            name: 'Opponents',
            shortName: 'Them',
            teamAvatars: avatarsOf(opponentTeam),
            isYou: false,
            score: opponentTeam.score,
            caption: `${opponentTeam.score}/15`,
            progress: opponentTeam.score / 15,
            extra: <p className="mt-1 hidden truncate text-right text-xs text-muted-foreground sm:block">{namesOf(opponentTeam, false)}</p>,
          }}
          center={
            <>
              <ModeChip icon="👥" label="Team 2v2" />
              <span className="text-xs font-black text-muted-foreground sm:text-sm">VS</span>
              <span className="hidden text-[11px] font-semibold text-muted-foreground sm:block">First to 15</span>
              {streak >= 2 && (
                <span key={`hud-streak-${streak}`} className="animate-celebration-pop whitespace-nowrap text-[11px] font-bold text-amber-700 dark:text-amber-400 sm:text-xs">🔥 {streak}</span>
              )}
            </>
          }
        />

        {/* Teammate Banner */}
        {teammate && (
          <p className="mb-3 text-center text-sm text-muted-foreground">
            🤝 Teamed with <strong className="text-foreground">{teammate.name}</strong> — both your answers count toward the team score!
          </p>
        )}

        {/* Question Area */}
        {question && (
          <QuestionCard questionIndex={matchState.myQuestionIndex} counter={`Question ${matchState.myQuestionIndex + 1}`} difficulty={question.difficulty}>
            <div
              data-qa="question-stem"
              className="overflow-x-auto text-lg font-semibold leading-relaxed text-foreground sm:text-xl"
              dangerouslySetInnerHTML={{ __html: renderMath(question.question || question.prompt || '') }}
            />

            {/* Answer feedback: explicit correct/incorrect line + streak pop.
                Pacing stays at the existing 1200ms — this is a live team race. */}
            <div className="mt-4 min-h-8" aria-live="polite">
              {answerResult && (
                <div className="flex flex-wrap items-center gap-2">
                  <p className={`inline-flex items-center gap-1.5 text-lg font-bold ${
                    answerResult.correct ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                  }`}>
                    {answerResult.correct
                      ? <><Check className="h-5 w-5" aria-hidden="true" /> Correct!</>
                      : <><X className="h-5 w-5" aria-hidden="true" /> Incorrect</>}
                  </p>
                  {answerResult.correct && streak >= 2 && (
                    <span key={`streak-${streak}`} className="animate-celebration-pop inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-sm font-bold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                      🔥 {streak} in a row
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className={`mt-2 grid gap-2.5 sm:gap-3 ${answerGridClass(question.options)}`}>
              {question.options?.map((option, idx) => {
                const isSelected = selectedAnswer === idx
                // Only the picked tile is graded (the team route doesn't return the key).
                const state: AnswerState = answerResult && isSelected
                  ? (answerResult.correct ? 'correct' : 'incorrect')
                  : isSelected ? 'selected' : 'idle'
                return (
                  <AnswerTile
                    key={idx}
                    index={idx}
                    letter={String.fromCharCode(65 + idx)}
                    state={state}
                    onClick={() => submitAnswer(idx)}
                    disabled={submitting}
                  >
                    <span dangerouslySetInnerHTML={{ __html: renderMath(option) }} />
                  </AnswerTile>
                )
              })}
            </div>
          </QuestionCard>
        )}
      </div>
    </div>
  )
}
