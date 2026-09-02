'use client'

/**
 * Shared per-course competitive queue page.
 *
 * The ~24 unit-based course pages under /competitive/<slug> were near-identical
 * ~190-line forks that each redeclared unit colors/emojis and the whole
 * topic → mode → queue flow. Each page is now a thin wrapper passing a config
 * from course-page-configs.ts; behavior (topics endpoint, queue payloads,
 * ?from= redirects) is preserved per course via that config.
 *
 * SAT and MCAT are NOT served by this component — they have their own
 * hierarchy pickers at /competitive/sat and /competitive/mcat.
 */

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ArrowLeft, Bot, Check, Lock, Star } from 'lucide-react'
import { GAME_MODE_CARDS } from '@/lib/competitive-modes'
import { COMPETITIVE_COURSES } from '@/lib/competitive-catalog'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'
import QueueSearchPanel, { QUEUE_POLL_TIMEOUT_SEC } from '@/components/competitive/QueueSearchPanel'

export interface CompetitiveCoursePageConfig {
  /** Route slug: /competitive/<slug>; also the ?from= param on match redirects. */
  slug: string
  /** Display name ("AP Calculus AB"). */
  courseName: string
  /** Topics API route, e.g. '/api/competitive/calculus-ab-topics'. */
  topicsEndpoint: string
  /** Queue topicSlug fallback when none selected; defaults to `slug`. */
  fallbackTopicSlug?: string
  /** Course home the back link points to. */
  backHref: string
  /** Where "Browse … Lessons" goes in the nothing-completed state. */
  browseHref: string
  /** Per-unit header emojis (gamified content); falls back to the course emoji. */
  unitEmojis?: string[]
  /** Subset of GAME_MODE_CARDS keys to offer; defaults to all. */
  modeKeys?: string[]
}

interface TopicInfo { id: string; slug: string; title: string; completed: boolean; masteryLevel: number; status: string }
interface UnitInfo { unitNumber: number; name: string; slug: string; topics: TopicInfo[] }
interface TopicsResponse { units: UnitInfo[]; totalTopics: number; completedCount: number; hasAnyCompleted: boolean }
interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }

/**
 * Single shared unit palette, assigned by index (Unit 1 is always red, …).
 * Decorative unit tinting only — selection/CTA styling uses accent tokens.
 */
const UNIT_COLORS = [
  { light: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-700', text: 'text-red-700 dark:text-red-300' },
  { light: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-700', text: 'text-orange-700 dark:text-orange-300' },
  { light: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-700', text: 'text-amber-700 dark:text-amber-300' },
  { light: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-700', text: 'text-yellow-700 dark:text-yellow-300' },
  { light: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-700', text: 'text-rose-700 dark:text-rose-300' },
  { light: 'bg-fuchsia-50 dark:bg-fuchsia-900/20', border: 'border-fuchsia-200 dark:border-fuchsia-700', text: 'text-fuchsia-700 dark:text-fuchsia-300' },
  { light: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-700', text: 'text-pink-700 dark:text-pink-300' },
  { light: 'bg-sky-50 dark:bg-sky-900/20', border: 'border-sky-200 dark:border-sky-700', text: 'text-sky-700 dark:text-sky-300' },
]

const PAGE_BG = 'bg-gradient-to-br from-accent-subtle via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'

function CompetitiveCoursePageInner({ config }: { config: CompetitiveCoursePageConfig }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const recommendedTopic = searchParams.get('topic')
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [topicsData, setTopicsData] = useState<TopicsResponse | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [queueTimedOut, setQueueTimedOut] = useState(false)
  const [showAIOptions, setShowAIOptions] = useState(false)
  const hasAutoSelected = useRef(false)
  const queueJoinedAt = useRef<number | null>(null)

  const { slug, courseName, topicsEndpoint, backHref, browseHref } = config
  const fallbackTopicSlug = config.fallbackTopicSlug ?? slug
  const courseMeta = COMPETITIVE_COURSES.find(c => c.slug === slug)
  const courseGradient = courseMeta?.gradient ?? 'from-accent to-accent-secondary'
  const courseEmoji = courseMeta?.emoji ?? '📘'
  const modeCards = config.modeKeys
    ? GAME_MODE_CARDS.filter(m => config.modeKeys!.includes(m.key))
    : GAME_MODE_CARDS

  useEffect(() => {
    if (!session) return
    async function fetchTopics() {
      try {
        const res = await fetch(topicsEndpoint)
        if (!res.ok) throw new Error('Failed to fetch topics')
        setTopicsData(await res.json())
      } catch (err) { console.error(`Error loading ${courseName} topics:`, err) }
      finally { setLoading(false) }
    }
    void fetchTopics()
  }, [session, topicsEndpoint, courseName])

  useEffect(() => {
    if (status === 'unauthenticated') router.push(`/auth/signin?callbackUrl=/competitive/${slug}`)
  }, [status, router, slug])

  const checkQueue = useCallback(async () => {
    try {
      const queueEndpoint = selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue'
      const res = await fetch(queueEndpoint)
      const data: QueueStatus = await res.json()
      if (data.status === 'not_in_queue') { setInQueue(false); setQueueStatus(null) }
      else if (data.status === 'matched') {
        setInQueue(false)
        const matchPath = selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'
        router.push(`/competitive/${matchPath}/${data.matchId}?from=${slug}`)
      } else setQueueStatus(data)
    } catch (err) { console.error('Error checking queue:', err) }
  }, [router, selectedMode, slug])

  const leaveQueue = useCallback(async () => {
    try {
      await fetch('/api/competitive/queue', { method: 'DELETE' })
    } catch (err) { console.error('Error leaving queue:', err) }
    setInQueue(false)
    setQueueStatus(null)
  }, [])

  // Poll while queued — with a hard ceiling so we never poll forever.
  useEffect(() => {
    if (!inQueue) return
    const i = setInterval(() => {
      if (queueJoinedAt.current && Date.now() - queueJoinedAt.current > QUEUE_POLL_TIMEOUT_SEC * 1000) {
        setQueueTimedOut(true)
        void leaveQueue()
        return
      }
      void checkQueue()
    }, 2000)
    return () => clearInterval(i)
  }, [inQueue, checkQueue, leaveQueue])

  useEffect(() => {
    if (topicsData && recommendedTopic && !hasAutoSelected.current) {
      hasAutoSelected.current = true
      const found = topicsData.units.flatMap(u => u.topics).find(t => t.slug === recommendedTopic && t.completed)
      if (found) setSelectedTopic(found.slug)
    }
  }, [topicsData, recommendedTopic])

  const joinQueue = async () => {
    try {
      const queueEndpoint = selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue'
      const res = await fetch(queueEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: selectedTopic || fallbackTopicSlug, gameMode: selectedMode }),
      })
      const data: QueueStatus = await res.json()
      if (data.status === 'matched') {
        const matchPath = selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'
        router.push(`/competitive/${matchPath}/${data.matchId}?from=${slug}`)
      } else {
        queueJoinedAt.current = Date.now()
        setQueueTimedOut(false)
        setInQueue(true)
        setQueueStatus(data)
      }
    } catch (err) { console.error('Error joining queue:', err) }
  }

  const startAIPractice = async (difficulty: 'easy' | 'medium' | 'hard') => {
    try {
      const res = await fetch('/api/competitive/practice-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: selectedTopic || fallbackTopicSlug, gameMode: selectedMode, aiDifficulty: difficulty }),
      })
      const data = await res.json()
      if (data.matchId) {
        const matchPath = data.isTeamMatch ? 'team-match' : 'match'
        router.push(`/competitive/${matchPath}/${data.matchId}?from=${slug}`)
      }
    } catch (err) { console.error('Error starting AI practice:', err) }
  }

  if (status === 'loading' || loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${PAGE_BG}`}>
        <div className="animate-pulse text-xl text-gray-500">Loading {courseName} Competitive Mode…</div>
      </div>
    )
  }

  if (!session) return null

  if (!topicsData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Could not load {courseName} topics.</p>
          <button onClick={() => router.push(backHref)} className="inline-flex items-center gap-1 text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {courseName}
          </button>
        </div>
      </div>
    )
  }

  const anyCompleted = topicsData.hasAnyCompleted

  return (
    <div className={`min-h-screen ${PAGE_BG}`}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={() => router.push(backHref)}
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {courseName}
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            {courseName}{' '}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Competitive Mode</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Select a topic you&apos;ve completed, choose your game mode, and challenge other students!</p>
          <div className="mt-4 max-w-md mx-auto">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>{topicsData.completedCount} / {topicsData.totalTopics} topics completed</span>
              <span>{Math.round((topicsData.completedCount / topicsData.totalTopics) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              {/* Course-identity gradient (from course-metadata via the catalog) */}
              <div className={`bg-gradient-to-r ${courseGradient} h-2.5 rounded-full transition-all`} style={{ width: `${(topicsData.completedCount / topicsData.totalTopics) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Topic selection by unit */}
        <div className="space-y-6 mb-10">
          {topicsData.units.map((unit, ui) => {
            const colors = UNIT_COLORS[ui % UNIT_COLORS.length]
            const emoji = config.unitEmojis ? (config.unitEmojis[ui] || courseEmoji) : courseEmoji
            return (
              <div key={unit.slug} className={`rounded-2xl border ${colors.border} ${colors.light} p-5`}>
                <h2 className={`font-bold text-lg mb-3 ${colors.text}`}>{emoji} Unit {unit.unitNumber}: {unit.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {unit.topics.map(topic => {
                    const isSelected = selectedTopic === topic.slug
                    const isCompleted = topic.completed
                    const isRecommended = topic.slug === recommendedTopic
                    return (
                      <button
                        key={topic.slug}
                        disabled={!isCompleted}
                        onClick={() => setSelectedTopic(isSelected ? null : topic.slug)}
                        className={`relative text-left p-4 rounded-xl border transition-all ${
                          isSelected
                            ? 'ring-2 ring-accent border-accent-light bg-white dark:bg-gray-800 shadow-lg'
                            : isCompleted
                              ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md cursor-pointer'
                              : 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {isRecommended && isCompleted && (
                          <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-full bg-accent text-white shadow">
                            <Star className="h-2.5 w-2.5" aria-hidden /> Recommended
                          </span>
                        )}
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold text-sm ${isCompleted ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>{topic.title}</h3>
                          {isCompleted ? (
                            <span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center">
                              <Check className="h-3 w-3" aria-hidden />
                            </span>
                          ) : (
                            <span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 flex items-center justify-center">
                              <Lock className="h-3 w-3" aria-hidden />
                            </span>
                          )}
                        </div>
                        {isCompleted && (
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${Math.round(topic.masteryLevel * 100)}%` }} />
                            </div>
                            <span className="text-xs text-gray-500">{Math.round(topic.masteryLevel * 100)}%</span>
                          </div>
                        )}
                        {!isCompleted && (<p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Complete the interactive lesson to unlock</p>)}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mode + queue — always visible once anything is completed, so
            first-time visitors can see how a match starts. Find Match stays
            disabled with a hint until a topic is picked. */}
        {anyCompleted && (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">Choose Game Mode</h2>
              <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${modeCards.length === 3 ? 'sm:grid-cols-3' : 'lg:grid-cols-4'}`}>
                {modeCards.map(mode => (
                  <button
                    key={mode.key}
                    onClick={() => setSelectedMode(mode.key)}
                    className={`p-5 rounded-xl border transition-all text-left ${
                      selectedMode === mode.key
                        ? 'ring-2 ring-accent border-accent-light bg-white dark:bg-gray-800 shadow-lg'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md'
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-1">{mode.icon} {mode.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{mode.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center">
              {!inQueue ? (
                <>
                  {queueTimedOut && (
                    <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700/50 dark:bg-amber-900/20 dark:text-amber-300">
                      No opponent found — you left the queue after {Math.round(QUEUE_POLL_TIMEOUT_SEC / 60)} minutes.
                      Try Practice vs AI or send an async challenge below.
                    </div>
                  )}
                  <button
                    onClick={joinQueue}
                    disabled={!selectedTopic}
                    className="px-10 py-4 bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover text-white font-bold rounded-xl text-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
                  >
                    Find Match
                  </button>
                  {!selectedTopic && (
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Pick a topic above to start</p>
                  )}
                  <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setShowAIOptions(!showAIOptions)}
                      disabled={!selectedTopic}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Bot className="h-4 w-4" aria-hidden /> Practice vs AI
                    </button>
                    {showAIOptions && selectedTopic && (
                      <div className="mt-4 flex justify-center gap-3">
                        <button onClick={() => startAIPractice('easy')} className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all text-sm">Easy</button>
                        <button onClick={() => startAIPractice('medium')} className="px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all text-sm">Medium</button>
                        <button onClick={() => startAIPractice('hard')} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all text-sm">Hard</button>
                      </div>
                    )}
                  </div>
                  <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <AsyncChallengeButton
                      topicSlug={selectedTopic}
                      helperText="Play 10 questions now, then share a link — friends beat your score on their own time. Great when no one's online to match."
                    />
                  </div>
                </>
              ) : (
                <QueueSearchPanel
                  position={queueStatus?.position}
                  estimatedWait={queueStatus?.estimatedWait}
                  onCancel={leaveQueue}
                  fallback={
                    <div className="mt-3">
                      <button
                        onClick={async () => { await leaveQueue(); void startAIPractice('medium') }}
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-subtle"
                      >
                        <Bot className="h-4 w-4" aria-hidden /> Practice vs AI instead
                      </button>
                    </div>
                  }
                />
              )}
            </div>
          </>
        )}

        {!anyCompleted && (
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
            <Lock className="mx-auto mb-4 h-12 w-12 text-gray-400" aria-hidden />
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Complete a Lesson to Unlock</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Finish any {courseName} interactive lesson with 80%+ mastery to start competing.</p>
            <button
              onClick={() => router.push(browseHref)}
              className="px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Browse {courseName} Lessons
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CompetitiveCoursePage({ config }: { config: CompetitiveCoursePageConfig }) {
  return (
    <Suspense fallback={
      <div className={`min-h-screen flex items-center justify-center ${PAGE_BG}`}>
        <div className="animate-pulse text-xl text-gray-500">Loading {config.courseName} Competitive Mode…</div>
      </div>
    }>
      <CompetitiveCoursePageInner config={config} />
    </Suspense>
  )
}
