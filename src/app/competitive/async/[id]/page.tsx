'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { use } from 'react'
import { Lightbulb, ArrowRight } from 'lucide-react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import AvatarDisplay from '@/components/AvatarDisplay'
import { AvatarData } from '@/types/avatar'
import { publicDisplayName } from '@/lib/display-name'
import 'katex/dist/katex.min.css'

interface Question {
  id: number
  question?: string
  prompt?: string
  options?: string[]
  answerIndex?: number
  correctAnswer?: number
  explanation?: string
  type?: string
}

interface ChallengeData {
  id: string
  topicSlug: string
  courseSlug: string | null
  questionCount: number
  timeLimit: number
  status: string
  expiresAt: string
  challenger: { id: string; name: string | null; image: string | null; avatarData: unknown }
  recipient: { id: string; name: string | null; image: string | null; avatarData: unknown } | null
  challengerScore: number
  challengerTime: number | null
  recipientScore: number | null
  recipientTime: number | null
  winnerId: string | null
  completedAt: string | null
  isChallenger: boolean
  isRecipient: boolean
  canPlay: boolean
  isOpenInvite?: boolean
  questions?: Question[]
  challengerAnswers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean; timeMs?: number }>
  recipientAnswers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean; timeMs?: number }>
}

const TOPIC_LABELS: Record<string, string> = {
  'the-unit-circle': 'Unit Circle',
  'derivatives': 'Derivatives',
  'limits': 'Limits',
  'integrals': 'Integrals',
  'algebra': 'Algebra 1',
  'algebra2': 'Algebra 2',
  'geometry': 'Geometry',
  'precalc': 'Pre-Calculus',
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-chemistry': 'AP Chemistry',
  'ap-biology': 'AP Biology',
  'ap-psychology': 'AP Psychology',
  'ap-statistics': 'AP Statistics',
  'ap-physics1': 'AP Physics 1',
  'ap-physics2': 'AP Physics 2',
  'sat-math': 'SAT Math',
  'sat-reading': 'SAT Reading',
  'act-math': 'ACT Math',
  'act-science': 'ACT Science',
  'ochem': 'Organic Chemistry',
}

export default function AsyncChallengePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const { status: sessionStatus } = useSession()
  const [challenge, setChallenge] = useState<ChallengeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Play state
  const [phase, setPhase] = useState<'loading' | 'lobby' | 'playing' | 'submitting' | 'results'>('loading')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Array<{ questionIndex: number; answerIndex: number; timeMs: number }>>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  // Wrong answer with an explanation: hold on the question (async is
  // self-paced) until the player taps Next. The countdown keeps running.
  const [awaitingNext, setAwaitingNext] = useState(false)
  // Consecutive-correct streak for the pop in the top bar.
  const [streak, setStreak] = useState(0)
  // Avatar reaction to your own answer — mirrors the live 1v1 match.
  const [selfEmotion, setSelfEmotion] = useState<'neutral' | 'happy' | 'sad'>('neutral')
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [, setTotalElapsed] = useState(0)
  const startTimeRef = useRef<number>(0)
  const questionStartRef = useRef<number>(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Score tracking during play
  const [liveScore, setLiveScore] = useState(0)

  // Always-current answers for callbacks captured by long-lived timers (the
  // countdown interval holds the submitAllAnswers closure from startPlaying,
  // whose `answers` state would otherwise be stale).
  const answersRef = useRef<typeof answers>([])
  useEffect(() => { answersRef.current = answers }, [answers])

  useEffect(() => { preloadKatex() }, [])

  const fetchChallenge = useCallback(async () => {
    try {
      const res = await fetch(`/api/competitive/async-challenge/${id}`)
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to load challenge')
        setLoading(false)
        return
      }
      const data: ChallengeData = await res.json()
      setChallenge(data)
      setLoading(false)

      if (data.status === 'COMPLETED' || data.status === 'EXPIRED') {
        setPhase('results')
      } else if (data.canPlay) {
        setPhase('lobby')
      } else {
        // Can't play — show status
        setPhase('lobby')
      }
    } catch {
      setError('Failed to load challenge')
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      const timeoutId = setTimeout(() => {
        void fetchChallenge()
      }, 0)
      return () => clearTimeout(timeoutId)
    } else if (sessionStatus === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(`/competitive/async/${id}`)}`)
    }
  }, [sessionStatus, fetchChallenge, router, id])

  const submitAllAnswers = useCallback(async (finalAnswers?: typeof answers) => {
    setPhase('submitting')
    if (timerRef.current) clearInterval(timerRef.current)

    const answersToSubmit = finalAnswers || answersRef.current
    const elapsed = Date.now() - startTimeRef.current

    try {
      const res = await fetch(`/api/competitive/async-challenge/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersToSubmit, totalTime: elapsed }),
      })
      if (res.ok) {
        // Refresh challenge data to get results
        await fetchChallenge()
        setPhase('results')
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to submit')
      }
    } catch {
      setError('Failed to submit answers')
    }
  }, [id, fetchChallenge])

  const startPlaying = useCallback(() => {
    if (!challenge?.questions) return
    setPhase('playing')
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedAnswer(null)
    setLiveScore(0)
    setStreak(0)
    setAwaitingNext(false)
    startTimeRef.current = Date.now()
    questionStartRef.current = Date.now()
    setTimeRemaining(challenge.timeLimit)

    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
      const remaining = Math.max(0, challenge.timeLimit - elapsed)
      setTimeRemaining(remaining)
      setTotalElapsed(Date.now() - startTimeRef.current)

      if (remaining <= 0) {
        // Time's up — auto-submit
        if (timerRef.current) clearInterval(timerRef.current)
        submitAllAnswers()
      }
    }, 250)
  }, [challenge, submitAllAnswers])

  // Clear feedback and move on to the next question (or submit after the last).
  // By the time this runs (Next click or the 800ms timeout), the just-recorded
  // answer has committed to state, so answersRef is always complete on submit.
  const advanceQuestion = useCallback(() => {
    setShowFeedback(false)
    setAwaitingNext(false)
    setSelectedAnswer(null)
    setSelfEmotion('neutral')

    if (challenge?.questions && currentQuestion + 1 < challenge.questions.length) {
      setCurrentQuestion(prev => prev + 1)
      questionStartRef.current = Date.now()
    } else {
      // Done — submit
      if (timerRef.current) clearInterval(timerRef.current)
      submitAllAnswers()
    }
  }, [challenge, currentQuestion, submitAllAnswers])

  const handleAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null || !challenge?.questions) return
    setSelectedAnswer(answerIndex)

    const q = challenge.questions[currentQuestion]
    const correctIdx = q.answerIndex ?? q.correctAnswer ?? -1
    const isCorrect = answerIndex === correctIdx
    if (isCorrect) setLiveScore(prev => prev + 1)
    setStreak(prev => (isCorrect ? prev + 1 : 0))
    setSelfEmotion(isCorrect ? 'happy' : 'sad')

    const timeMs = Date.now() - questionStartRef.current

    setAnswers(prev => [...prev, { questionIndex: currentQuestion, answerIndex, timeMs }])
    setShowFeedback(true)

    // Wrong answer with an explanation: async play is self-paced, so hold on
    // this question and let the player read it before tapping Next. (The
    // overall countdown keeps running — reading time is the player's own.)
    if (!isCorrect && q.explanation) {
      setAwaitingNext(true)
      return
    }

    setTimeout(advanceQuestion, 800)
  }, [selectedAnswer, challenge, currentQuestion, advanceQuestion])



  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  if (loading || sessionStatus === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-2xl p-8 max-w-md text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <button onClick={() => router.push('/competitive')} className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover">
            Back to Competitive
          </button>
        </div>
      </div>
    )
  }

  if (!challenge) return null

  const topicLabel = TOPIC_LABELS[challenge.topicSlug] || challenge.topicSlug

  // === RESULTS PHASE ===
  if (phase === 'results') {
    const isCompleted = challenge.status === 'COMPLETED'
    const isExpired = challenge.status === 'EXPIRED'
    const isWaiting = challenge.status === 'WAITING_FOR_OPPONENT'

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 p-4">
        <div className="max-w-2xl mx-auto pt-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isCompleted ? '🏆 Challenge Complete!' : isExpired ? '⏰ Challenge Expired' : '⏳ Waiting for Opponent'}
            </h1>
            <p className="text-gray-400">{topicLabel} · {challenge.questionCount} questions</p>
          </div>

          {/* Share link (for challenger waiting) */}
          {isWaiting && challenge.isChallenger && (
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Share this challenge!</h3>
              <p className="text-gray-300 text-sm mb-3">Send this link to a friend — they&apos;ll play the same questions and you&apos;ll see who scores higher.</p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={`${typeof window !== 'undefined' ? window.location.origin : ''}/competitive/async/${id}`}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-sm"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/competitive/async/${id}`)
                  }}
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover text-sm font-medium whitespace-nowrap"
                >
                  Copy Link
                </button>
              </div>
            </div>
          )}

          {/* Scoreboard */}
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 mb-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Challenger */}
              <div className={`text-center p-4 rounded-xl ${isCompleted && challenge.winnerId === challenge.challenger.id ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-gray-700/30'}`}>
                <div className="flex justify-center mb-2">
                  {challenge.challenger.avatarData ? (
                    <AvatarDisplay avatarData={challenge.challenger.avatarData as AvatarData} size={48} />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                      {(challenge.challenger.name || '?')[0]}
                    </div>
                  )}
                </div>
                <p className="text-white font-semibold text-sm mb-1">{publicDisplayName(challenge.challenger.name, 'Challenger')}</p>
                <p className="text-3xl font-bold text-white">{challenge.challengerScore}/{challenge.questionCount}</p>
                {challenge.challengerTime != null && (
                  <p className="text-gray-400 text-xs mt-1">{(challenge.challengerTime / 1000).toFixed(1)}s</p>
                )}
                {isCompleted && challenge.winnerId === challenge.challenger.id && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Winner!</span>
                )}
              </div>

              {/* Recipient */}
              <div className={`text-center p-4 rounded-xl ${isCompleted && challenge.winnerId && challenge.winnerId !== challenge.challenger.id ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-gray-700/30'}`}>
                <div className="flex justify-center mb-2">
                  {challenge.recipient?.avatarData ? (
                    <AvatarDisplay avatarData={challenge.recipient.avatarData as AvatarData} size={48} />
                  ) : challenge.recipient ? (
                    <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                      {(challenge.recipient.name || '?')[0]}
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 text-lg">?</div>
                  )}
                </div>
                <p className="text-white font-semibold text-sm mb-1">{challenge.recipient ? publicDisplayName(challenge.recipient.name, 'Opponent') : 'Waiting...'}</p>
                {challenge.recipientScore != null ? (
                  <p className="text-3xl font-bold text-white">{challenge.recipientScore}/{challenge.questionCount}</p>
                ) : (
                  <p className="text-xl text-gray-500">—</p>
                )}
                {challenge.recipientTime != null && (
                  <p className="text-gray-400 text-xs mt-1">{(challenge.recipientTime / 1000).toFixed(1)}s</p>
                )}
                {isCompleted && challenge.winnerId && challenge.winnerId !== challenge.challenger.id && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Winner!</span>
                )}
                {isCompleted && !challenge.winnerId && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-gray-500/20 text-gray-400 text-xs rounded-full">Tie</span>
                )}
              </div>
            </div>
          </div>

          {/* Question-by-question breakdown (only when completed) */}
          {isCompleted && challenge.questions && challenge.challengerAnswers && challenge.recipientAnswers && (
            <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Question Breakdown</h3>
              <div className="space-y-3">
                {(challenge.questions as Question[]).map((q, i) => {
                  const cAnswer = challenge.challengerAnswers?.find(a => a.questionIndex === i)
                  const rAnswer = challenge.recipientAnswers?.find(a => a.questionIndex === i)
                  return (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-700/50 last:border-0">
                      <span className="text-gray-400 text-sm w-6">Q{i + 1}</span>
                      <p className="flex-1 text-gray-300 text-sm truncate" dangerouslySetInnerHTML={{
                        __html: renderRichText(q.question || q.prompt || `Question ${i + 1}`)
                      }} />
                      <div className="flex gap-4">
                        <span className={`text-sm font-medium ${cAnswer?.correct ? 'text-green-400' : 'text-red-400'}`}>
                          {cAnswer?.correct ? '✓' : '✗'}
                        </span>
                        <span className={`text-sm font-medium ${rAnswer?.correct ? 'text-green-400' : 'text-red-400'}`}>
                          {rAnswer?.correct ? '✓' : '✗'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => router.push('/competitive')}
              className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 font-medium"
            >
              Back to Competitive
            </button>
          </div>

          {isCompleted && (
            <RematchPanel
              challenge={challenge}
              currentUserId={challenge.isChallenger ? challenge.challenger.id : (challenge.recipient?.id ?? '')}
            />
          )}
        </div>
      </div>
    )
  }

  // === LOBBY PHASE ===
  if (phase === 'lobby') {
    const isWaitingForMe = challenge.canPlay && !challenge.isChallenger
    const isMyTurn = challenge.canPlay

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8 text-center">
            <div className="text-5xl mb-4">⚔️</div>
            <h1 className="text-2xl font-bold text-white mb-2">Async Challenge</h1>
            <p className="text-gray-400 mb-6">{topicLabel} · {challenge.questionCount} questions · {Math.floor(challenge.timeLimit / 60)}min</p>

            {challenge.isChallenger && challenge.status === 'CHALLENGER_PLAYING' && (
              <>
                <p className="text-gray-300 mb-6">You created this challenge. Play your round first, then share the link with a friend!</p>
                <button
                  onClick={startPlaying}
                  className="w-full py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover text-lg transition-colors"
                >
                  Start Playing
                </button>
              </>
            )}

            {isWaitingForMe && (
              <>
                <div className="flex items-center justify-center gap-3 mb-4">
                  {challenge.challenger.avatarData ? (
                    <AvatarDisplay avatarData={challenge.challenger.avatarData as AvatarData} size={40} />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                      {(challenge.challenger.name || '?')[0]}
                    </div>
                  )}
                  <span className="text-white font-semibold">{publicDisplayName(challenge.challenger.name, 'Someone')}</span>
                  <span className="text-gray-400">challenged you!</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">Answer the same {challenge.questionCount} questions and see who scores higher. You have {Math.floor(challenge.timeLimit / 60)} minutes.</p>
                <button
                  onClick={startPlaying}
                  className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 text-lg transition-colors"
                >
                  Accept & Play
                </button>
              </>
            )}

            {!isMyTurn && challenge.status === 'WAITING_FOR_OPPONENT' && !challenge.isChallenger && (
              <p className="text-gray-300">This challenge is waiting for an opponent. If you&apos;re logged in, you can accept it!</p>
            )}

            <button
              onClick={() => router.push('/competitive')}
              className="mt-4 text-gray-400 hover:text-gray-300 text-sm"
            >
              ← Back to Competitive
            </button>
          </div>
        </div>
      </div>
    )
  }

  // === PLAYING PHASE ===
  if (phase === 'playing' && challenge.questions) {
    const q = challenge.questions[currentQuestion]
    const progress = ((currentQuestion) / challenge.questions.length) * 100
    const minutes = Math.floor(timeRemaining / 60)
    const seconds = timeRemaining % 60

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 p-4">
        <div className="max-w-2xl mx-auto pt-4">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Your avatar reacts to each answer, same as in a live match. */}
              <AvatarDisplay
                avatarData={(challenge.isChallenger ? challenge.challenger.avatarData : challenge.recipient?.avatarData) as AvatarData}
                size={36}
                emotion={selfEmotion}
                className="flex-shrink-0"
              />
              <div className="text-white font-semibold">
                Q{currentQuestion + 1}/{challenge.questions.length}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {streak >= 2 && (
                <span
                  key={`streak-${streak}`}
                  className="animate-celebration-pop inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-sm font-bold text-amber-400"
                >
                  🔥 {streak}
                </span>
              )}
              <span key={`score-${liveScore}`} className={`text-emerald-400 font-bold ${liveScore > 0 ? 'animate-celebration-pop' : ''}`}>
                {liveScore} correct
              </span>
              <span className={`font-mono text-lg font-bold ${timeRemaining <= 30 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {minutes}:{seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-gray-700 rounded-full mb-8">
            <div className="h-full bg-accent rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Question */}
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 mb-6">
            <p
              className="text-white text-lg leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: renderRichText(q.question || q.prompt || '')
              }}
            />
          </div>

          {/* Options */}
          <div className="space-y-3">
            {q.options?.map((opt, i) => {
              const correctIdx = q.answerIndex ?? q.correctAnswer ?? -1
              const isSelected = selectedAnswer === i
              const isCorrect = i === correctIdx
              let className = 'w-full text-left p-4 rounded-xl border transition-all duration-200 '

              if (showFeedback && isSelected && isCorrect) {
                className += 'bg-green-900/30 border-green-500 text-green-300'
              } else if (showFeedback && isSelected && !isCorrect) {
                className += 'bg-red-900/30 border-red-500 text-red-300'
              } else if (showFeedback && isCorrect) {
                className += 'bg-green-900/20 border-green-500/50 text-green-300'
              } else if (isSelected) {
                className += 'bg-accent/20 border-accent text-white'
              } else {
                className += 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-accent/50 hover:bg-gray-700/50 cursor-pointer'
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedAnswer !== null}
                  className={className}
                >
                  <span className="font-medium mr-3 text-gray-500">{String.fromCharCode(65 + i)}.</span>
                  <span dangerouslySetInnerHTML={{ __html: renderRichText(opt) }} />
                </button>
              )
            })}
          </div>

          {/* Wrong-answer explanation + Next (self-paced, so reading is safe) */}
          {awaitingNext && q.explanation && (
            <div className="mt-6 animate-fadeIn rounded-xl border border-accent/40 bg-gray-800/60 p-4">
              <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-muted mb-2">
                <Lightbulb className="w-4 h-4" aria-hidden="true" />
                Explanation
              </p>
              <div
                className="text-sm text-gray-300 leading-relaxed overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: renderRichText(q.explanation) }}
              />
              <button
                onClick={advanceQuestion}
                className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent-hover font-semibold transition-colors"
              >
                {currentQuestion + 1 < challenge.questions.length ? 'Next question' : 'Finish & submit'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // === SUBMITTING ===
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4" />
        <p className="text-gray-400">Submitting your answers...</p>
      </div>
    </div>
  )
}

// === Rematch Panel ===
interface RematchTopic { slug: string; title: string; completed: boolean; masteryLevel: number }
interface RematchUnit { name: string; slug: string; topics: RematchTopic[] }
interface RematchTopicsResponse { courseSlug: string; courseName: string; units: RematchUnit[] }

function RematchPanel({
  challenge,
  currentUserId,
}: {
  challenge: ChallengeData
  currentUserId: string
}) {
  const router = useRouter()
  const opponent = challenge.isChallenger ? challenge.recipient : challenge.challenger
  const opponentId = opponent?.id
  const [open, setOpen] = useState(false)
  const [topicsData, setTopicsData] = useState<RematchTopicsResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!opponent || !opponentId || opponentId === currentUserId) return null

  const courseSlug = challenge.courseSlug

  const handleOpen = async () => {
    setOpen(true)
    if (!courseSlug) {
      setError('Could not determine the course for this challenge — pick a topic from the competitive hub instead.')
      return
    }
    if (topicsData) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/competitive/course-topics?course=${encodeURIComponent(courseSlug)}`)
      if (!res.ok) throw new Error('Failed to load topics')
      const data: RematchTopicsResponse = await res.json()
      setTopicsData(data)
    } catch {
      setError('Could not load topics. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSend = async () => {
    if (!selected || submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/competitive/async-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: selected, recipientId: opponentId }),
      })
      const data = await res.json()
      if (!res.ok || !data.challengeId) throw new Error(data.error || 'Failed to create rematch')
      router.push(`/competitive/async/${data.challengeId}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create rematch')
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-6 bg-gradient-to-br from-accent/20 to-accent-dark/40 border border-accent/30 rounded-2xl p-6">
      {!open ? (
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-1">Get them back?</h3>
          <p className="text-sm text-gray-300 mb-4">
            Send <span className="font-semibold text-white">{publicDisplayName(opponent.name, 'your opponent')}</span> another challenge on a topic you choose.
          </p>
          <button
            onClick={handleOpen}
            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover text-white font-bold rounded-xl text-lg shadow-lg transition-all"
          >
            🔁 Rematch {publicDisplayName(opponent.name, 'them').split(' ')[0]}
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Pick a topic for {publicDisplayName(opponent.name, 'them').split(' ')[0]}</h3>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-200 text-sm">Cancel</button>
          </div>

          {loading && (
            <div className="text-center py-6 text-gray-400 text-sm">Loading topics…</div>
          )}

          {error && (
            <div className="mb-3 p-3 rounded-lg bg-red-900/30 border border-red-500/40 text-red-200 text-sm">{error}</div>
          )}

          {topicsData && (
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {topicsData.units.map(unit => {
                const completedTopics = unit.topics.filter(t => t.completed)
                if (completedTopics.length === 0) return null
                return (
                  <div key={unit.slug}>
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{unit.name}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {completedTopics.map(topic => {
                        const isSel = selected === topic.slug
                        return (
                          <button
                            key={topic.slug}
                            onClick={() => setSelected(topic.slug)}
                            className={`text-left text-sm px-3 py-2 rounded-lg border transition-all ${isSel ? 'border-accent bg-accent/20 text-white' : 'border-gray-600 bg-gray-800/40 text-gray-300 hover:border-accent/50'}`}
                          >
                            {topic.title}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
              {topicsData.units.every(u => u.topics.every(t => !t.completed)) && (
                <p className="text-sm text-gray-400 text-center py-4">
                  Complete more lessons in this course to unlock topics for a rematch.
                </p>
              )}
            </div>
          )}

          <button
            onClick={handleSend}
            disabled={!selected || submitting}
            className="mt-5 w-full py-3 bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {submitting ? 'Creating rematch…' : selected ? 'Send Rematch →' : 'Pick a topic'}
          </button>
        </div>
      )}
    </div>
  )
}
