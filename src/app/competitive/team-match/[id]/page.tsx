'use client'

import { useEffect, useState, use, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
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
  const [submitting, setSubmitting] = useState(false)
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [katexLoaded, setKatexLoaded] = useState(false)

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

    const difficultySettings: Record<string, { min: number; max: number; accuracy: number }> = {
      easy:   { min: 4000, max: 6000, accuracy: 0.70 },
      medium: { min: 3000, max: 5000, accuracy: 0.83 },
      hard:   { min: 1500, max: 3000, accuracy: 0.95 },
    }
    const settings = difficultySettings[aiDifficultyVal] || difficultySettings['medium']

    const timeouts: ReturnType<typeof setTimeout>[] = []

    for (const aiPlayer of aiPlayers) {
      const aiQIndex = questionIndices[aiPlayer.id] ?? 0
      const delay = settings.min + Math.random() * (settings.max - settings.min)

      const timeoutId = setTimeout(async () => {
        try {
          const questions = ms.questions
          const currentQ = questions[aiQIndex]
          if (!currentQ) return

          const willAnswerCorrectly = Math.random() < settings.accuracy
          let answerIndex: number
          if (willAnswerCorrectly && currentQ.answerIndex !== undefined) {
            answerIndex = currentQ.answerIndex
          } else {
            const totalOptions = currentQ.options?.length || 4
            do {
              answerIndex = Math.floor(Math.random() * totalOptions)
            } while (answerIndex === currentQ.answerIndex && totalOptions > 1)
          }

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
      }, delay)
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
    if (!katexLoaded) return text
    return renderRichText(text)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-dark via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4" />
          <p className="text-white text-xl">Loading Team Battle...</p>
        </div>
      </div>
    )
  }

  if (error || !matchState) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-dark via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-8 text-center">
          <p className="text-red-500 text-lg mb-4">{error || 'Match not found'}</p>
          <button
            onClick={() => router.push(lobbyPath)}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover"
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

  // ---- COMPLETED STATE ----
  if (matchState.status === 'COMPLETED') {
    const myTeamWon = matchState.myTeam === 1
      ? matchState.team1.score >= 15
      : matchState.team2.score >= 15

    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-dark via-blue-900 to-indigo-900 p-4">
        <div className="max-w-3xl mx-auto pt-10">
          {/* Victory / Defeat */}
          <div className={`text-center mb-8 ${myTeamWon ? 'text-yellow-400' : 'text-red-400'}`}>
            <h1 className="text-6xl font-black mb-2">
              {myTeamWon ? '🏆 VICTORY!' : '💀 DEFEAT'}
            </h1>
            <p className="text-xl text-gray-300">
              {myTeamWon ? 'Your team dominated!' : 'Better luck next time!'}
            </p>
          </div>

          {/* Scoreboard */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-8 mb-6">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-4 items-center text-center">
              <div>
                <p className="text-accent-muted text-sm font-semibold mb-2">
                  {matchState.myTeam === 1 ? 'YOUR TEAM' : 'OPPONENT TEAM'}
                </p>
                <p className="text-white text-sm">
                  {matchState.team1.players.map(p => p.name).join(' & ')}
                </p>
                <p className="text-5xl font-black text-white mt-2">{matchState.team1.score}</p>
              </div>
              <div className="text-gray-400 text-2xl font-bold">VS</div>
              <div>
                <p className="text-blue-300 text-sm font-semibold mb-2">
                  {matchState.myTeam === 2 ? 'YOUR TEAM' : 'OPPONENT TEAM'}
                </p>
                <p className="text-white text-sm">
                  {matchState.team2.players.map(p => p.name).join(' & ')}
                </p>
                <p className="text-5xl font-black text-white mt-2">{matchState.team2.score}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push(lobbyPath)}
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg text-lg hover:from-accent-hover hover:to-accent-secondary-hover"
            >
              Back to Lobby
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ---- IN-PROGRESS STATE ----
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-dark via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Score Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-4 items-center text-center">
            <div>
              <p className="text-accent-muted text-xs font-semibold uppercase tracking-wider">Your Team</p>
              <p className="text-white text-sm mt-1">
                {myTeam.players.map(p => p.id === currentUserId ? `${p.name} (you)` : p.name).join(' & ')}
              </p>
              <p className="text-4xl font-black text-white mt-1">{myTeam.score}</p>
            </div>
            <div>
              <p className="text-gray-400 text-lg font-bold">VS</p>
              <p className="text-gray-500 text-xs">First to 15</p>
            </div>
            <div>
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider">Opponent Team</p>
              <p className="text-white text-sm mt-1">
                {opponentTeam.players.map(p => p.name).join(' & ')}
              </p>
              <p className="text-4xl font-black text-white mt-1">{opponentTeam.score}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex gap-2">
            <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-accent h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (myTeam.score / 15) * 100)}%` }}
              />
            </div>
            <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (opponentTeam.score / 15) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Teammate Banner */}
        {teammate && (
          <div className="bg-accent/20 border border-accent/30 rounded-xl p-3 mb-4 text-center">
            <p className="text-accent-light text-sm">
              🤝 Teamed with <strong className="text-white">{teammate.name}</strong> — both your answers count toward the team score!
            </p>
          </div>
        )}

        {/* Question Area */}
        {question && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Question {matchState.myQuestionIndex + 1}
              </span>
              {question.difficulty && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  question.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                  question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {question.difficulty}
                </span>
              )}
            </div>

            <h2
              className="text-xl font-bold mb-6 text-gray-900 dark:text-white"
              dangerouslySetInnerHTML={{ __html: renderMath(question.question || question.prompt || '') }}
            />

            <div className="grid gap-3">
              {question.options?.map((option, idx) => {
                const isSelected = selectedAnswer === idx
                const showCorrect = answerResult && isSelected
                const bgClass = showCorrect
                  ? answerResult.correct
                    ? 'bg-green-100 dark:bg-green-900/40 border-green-500'
                    : 'bg-red-100 dark:bg-red-900/40 border-red-500'
                  : isSelected
                    ? 'bg-accent-light dark:bg-accent-light/40 border-accent'
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-accent-subtle dark:hover:bg-accent-light/20 hover:border-accent-muted'

                return (
                  <button
                    key={idx}
                    onClick={() => submitAnswer(idx)}
                    disabled={submitting}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgClass} ${submitting ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="font-semibold text-accent dark:text-accent-muted mr-3">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span
                      className="text-gray-800 dark:text-gray-200"
                      dangerouslySetInnerHTML={{ __html: renderMath(option) }}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
