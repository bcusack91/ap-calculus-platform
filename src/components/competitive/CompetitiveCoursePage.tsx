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
import { ArrowLeft, Check, ChevronDown, Lock, Star, Swords } from 'lucide-react'
import { GAME_MODE_CARDS } from '@/lib/competitive-modes'
import { COMPETITIVE_COURSES } from '@/lib/competitive-catalog'
import { QUEUE_POLL_TIMEOUT_SEC, queuePositionOf } from '@/components/competitive/QueueSearchPanel'
import { MatchSetupBar, MatchSetupPanel, ModeCard, type MatchSetupProps } from '@/components/competitive/MatchSetup'

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
/** unitNumber is the CED unit (null for an exam-prep section); see unitHeading. */
interface UnitInfo { unitNumber: number | null; name: string; slug: string; topics: TopicInfo[] }
interface TopicsResponse { units: UnitInfo[]; totalTopics: number; completedCount: number; hasAnyCompleted: boolean }
interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }

const PAGE_BG = 'bg-gray-50 dark:bg-gray-950'

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
  /** Explicit expand/collapse per unit; unset = open when the unit has anything playable. */
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({})
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
    return <CoursePageSkeleton />
  }

  if (!session) return null

  if (!topicsData) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${PAGE_BG}`}>
        <div className="max-w-md rounded-3xl border border-card-border bg-card p-8 text-center shadow-sm">
          <p className="mb-4 text-lg text-foreground">Could not load {courseName} topics.</p>
          <button onClick={() => router.push(backHref)} className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {courseName}
          </button>
        </div>
      </div>
    )
  }

  const anyCompleted = topicsData.hasAnyCompleted
  const allTopics = topicsData.units.flatMap(u => u.topics)
  const selectedTopicTitle = allTopics.find(t => t.slug === selectedTopic)?.title ?? null
  const setupProps: MatchSetupProps = {
    modeCards,
    selectedMode,
    onSelectMode: setSelectedMode,
    selectedTopic,
    selectedTopicTitle,
    inQueue,
    queuePosition: queuePositionOf(queueStatus),
    queueEstimatedWait: queueStatus?.estimatedWait,
    queueTimedOut,
    showBotOptions: showAIOptions,
    onToggleBotOptions: () => setShowAIOptions(!showAIOptions),
    onFindMatch: joinQueue,
    onCancelQueue: leaveQueue,
    onStartBot: startAIPractice,
    onBotInsteadOfQueue: async () => { await leaveQueue(); void startAIPractice('medium') },
  }

  const unitList = (
    <div className="space-y-3">
      {topicsData.units.map((unit, ui) => {
        const emoji = config.unitEmojis ? (config.unitEmojis[ui] || courseEmoji) : courseEmoji
        const ready = unit.topics.filter(t => t.completed).length
        const hasRecommended = !!recommendedTopic && unit.topics.some(t => t.slug === recommendedTopic)
        // Units with nothing playable start collapsed so long courses stay scannable.
        const isOpen = openUnits[unit.slug] ?? (ready > 0 || hasRecommended)
        const panelId = `unit-panel-${unit.slug}`
        const eyebrow = unit.unitNumber != null ? `Unit ${unit.unitNumber}` : 'Review'
        const name = unit.name.trim().replace(/^unit\s+\d+\s*[:.\-–]\s*/i, '')
        return (
          <section key={unit.slug} className="overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
            <button
              onClick={() => setOpenUnits(o => ({ ...o, [unit.slug]: !isOpen }))}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl font-bold text-foreground dark:bg-gray-800" aria-hidden>
                {emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{eyebrow}</span>
                <span data-qa="unit-name" className="block font-bold leading-snug text-foreground">{name}</span>
              </span>
              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums ${
                ready > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
              }`}>
                {ready === unit.topics.length ? `${ready} topics` : `${ready}/${unit.topics.length} ready`}
              </span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-gray-500 transition-transform dark:text-gray-400 ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            {isOpen ? (
              <div id={panelId} className="grid grid-cols-1 gap-2.5 border-t border-card-border p-3 sm:grid-cols-2 sm:p-4">
                {unit.topics.map(topic => (
                  <TopicTile
                    key={topic.slug}
                    topic={topic}
                    selected={selectedTopic === topic.slug}
                    recommended={topic.slug === recommendedTopic}
                    onToggle={() => setSelectedTopic(selectedTopic === topic.slug ? null : topic.slug)}
                  />
                ))}
              </div>
            ) : (
              <p id={panelId} className="border-t border-card-border px-4 py-2.5 text-sm text-muted-foreground">
                {ready === 0
                  ? `${unit.topics.length} topics · finish a lesson in this unit to play it`
                  : `${unit.topics.length} topics · tap to show`}
              </p>
            )}
          </section>
        )
      })}
    </div>
  )

  return (
    <div className={`min-h-screen ${PAGE_BG}`}>
      <div className={`mx-auto max-w-6xl px-4 py-6 sm:py-8 ${anyCompleted ? 'pb-48 lg:pb-12' : 'pb-12'}`}>
        <button
          onClick={() => router.push(backHref)}
          className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {courseName}
        </button>

        <CourseHero
          courseName={courseName}
          emoji={courseEmoji}
          gradient={courseGradient}
          completed={topicsData.completedCount}
          total={topicsData.totalTopics}
        />

        {anyCompleted ? (
          <>
            <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-6">
              <div className="min-w-0">
                {/* Mobile: modes inline; desktop shows them in the setup panel. */}
                <section aria-labelledby="mode-heading-mobile" className="mb-6 lg:hidden">
                  <h2 id="mode-heading-mobile" className="mb-3 text-lg font-bold text-foreground">Game mode</h2>
                  <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                    {modeCards.map(mode => (
                      <ModeCard key={mode.key} mode={mode} selected={selectedMode === mode.key} onSelect={setSelectedMode} compact />
                    ))}
                  </div>
                </section>
                <div className="mb-3 flex items-end justify-between gap-2">
                  <h2 className="text-lg font-bold text-foreground">Pick a topic</h2>
                  {topicsData.completedCount < topicsData.totalTopics && (
                    <p className="text-sm text-muted-foreground">Only lessons you&apos;ve finished</p>
                  )}
                </div>
                {unitList}
              </div>
              <div className="hidden lg:sticky lg:top-20 lg:block">
                <MatchSetupPanel {...setupProps} />
              </div>
            </div>
            <div className="lg:hidden">
              <MatchSetupBar {...setupProps} />
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 rounded-3xl border border-card-border bg-card p-6 text-center shadow-sm sm:p-8">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-subtle text-accent">
                <Lock className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mb-2 text-2xl font-bold text-foreground">Complete a Lesson to Unlock</h2>
              <p className="mx-auto mb-6 max-w-md text-muted-foreground">Finish any {courseName} interactive lesson with 80%+ mastery to start competing.</p>
              <button
                onClick={() => router.push(browseHref)}
                className="rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-8 py-3 font-semibold text-white transition-all hover:from-accent-hover hover:to-accent-secondary-hover hover:shadow-lg"
              >
                Browse {courseName} Lessons
              </button>
            </div>
            <h2 className="mt-8 mb-3 text-lg font-bold text-foreground">What you&apos;ll unlock</h2>
            {unitList}
          </>
        )}
      </div>
    </div>
  )
}

/** Course identity band, emoji chip, name, and topics-unlocked ring. */
function CourseHero({ courseName, emoji, gradient, completed, total }: { courseName: string; emoji: string; gradient: string; completed: number; total: number }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  const r = 26
  const c = 2 * Math.PI * r
  return (
    <section className="overflow-hidden rounded-3xl border border-card-border bg-card shadow-sm">
      {/* Course-identity gradient (from course-metadata via the catalog) */}
      <div className={`relative h-20 bg-gradient-to-br sm:h-24 ${gradient}`} aria-hidden>
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      </div>
      <div className="relative flex flex-wrap items-end justify-between gap-4 px-4 pb-5 sm:px-7 sm:pb-6">
        <div className="-mt-9 flex min-w-0 items-start gap-4 sm:-mt-10">
          <span className="shrink-0 rounded-2xl bg-card p-1 shadow-md ring-1 ring-card-border">
            <span className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-3xl font-bold text-white sm:h-[4.5rem] sm:w-[4.5rem] ${gradient}`} aria-hidden>
              {emoji}
            </span>
          </span>
          <div className="min-w-0 pt-10 sm:pt-11">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              <Swords className="h-3.5 w-3.5" aria-hidden /> Competitive
            </p>
            <h1 className="text-2xl font-black leading-tight tracking-tight text-foreground sm:text-3xl">{courseName}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90" role="img" aria-label={`${completed} of ${total} topics unlocked`}>
            <circle cx="32" cy="32" r={r} fill="none" strokeWidth="6" className="stroke-gray-200 dark:stroke-gray-700" />
            <circle
              cx="32" cy="32" r={r} fill="none" strokeWidth="6" strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)}
              className="stroke-accent transition-all duration-700"
            />
            <text x="32" y="32" textAnchor="middle" dominantBaseline="central" transform="rotate(90 32 32)" className="fill-foreground text-[13px] font-bold">
              {pct}%
            </text>
          </svg>
          <div>
            <p className="text-lg font-bold tabular-nums text-foreground">{completed}<span className="text-muted-foreground">/{total}</span></p>
            <p className="text-xs text-muted-foreground">topics unlocked</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/** One selectable topic: playable (mastery bar), locked (lesson hint), recommended, selected. */
function TopicTile({ topic, selected, recommended, onToggle }: { topic: TopicInfo; selected: boolean; recommended: boolean; onToggle: () => void }) {
  const mastery = Math.round(topic.masteryLevel * 100)
  if (!topic.completed) {
    return (
      <button
        data-topic-slug={topic.slug}
        disabled
        aria-pressed={false}
        className="flex cursor-not-allowed items-start gap-3 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3 text-left dark:border-gray-700 dark:bg-gray-900/40"
      >
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          <Lock className="h-3 w-3" aria-hidden />
        </span>
        <span className="min-w-0">
          <span data-qa="topic-locked-title" className="block text-sm font-medium text-gray-600 dark:text-gray-400">{topic.title}</span>
          <span data-qa="topic-locked-hint" className="mt-0.5 block text-xs text-gray-600 dark:text-gray-400">Complete the lesson to unlock</span>
        </span>
      </button>
    )
  }
  return (
    <button
      data-topic-slug={topic.slug}
      onClick={onToggle}
      aria-pressed={selected}
      className={`group relative flex items-start gap-3 rounded-xl border p-3 text-left transition-all ${
        selected
          ? 'border-accent bg-accent-subtle shadow-sm ring-2 ring-accent'
          : 'border-card-border bg-card hover:-translate-y-px hover:border-accent-muted hover:shadow-sm'
      }`}
    >
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
          selected ? 'bg-accent text-white' : 'ring-2 ring-gray-300 group-hover:ring-accent-muted dark:ring-gray-600'
        }`}
        aria-hidden
      >
        {selected && <Check className="h-3.5 w-3.5" />}
      </span>
      <span className="min-w-0 flex-1">
        {recommended && (
          <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold text-white">
            <Star className="h-3 w-3" aria-hidden /> Recommended
          </span>
        )}
        <span data-qa="topic-title" className="block text-sm font-semibold leading-snug text-foreground">{topic.title}</span>
        {mastery > 0 ? (
          <span className="mt-2 flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <span className="block h-full rounded-full bg-green-500" style={{ width: `${mastery}%` }} />
            </span>
            <span className="text-xs tabular-nums text-muted-foreground">{mastery}%</span>
          </span>
        ) : (
          <span className="mt-1 block text-xs text-muted-foreground">No lesson progress yet</span>
        )}
      </span>
    </button>
  )
}

/** Layout-matched placeholder while topics load. */
function CoursePageSkeleton() {
  const block = 'animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none'
  return (
    <div className={`min-h-screen ${PAGE_BG}`} aria-busy="true" aria-label="Loading competitive mode">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <div className={`${block} mb-4 h-5 w-40`} />
        <div className="overflow-hidden rounded-3xl border border-card-border bg-card">
          <div className="h-20 animate-pulse bg-gray-200 dark:bg-gray-800 sm:h-24" />
          <div className="flex items-end gap-4 px-4 pb-6 sm:px-7">
            <div className="-mt-9 h-[4.5rem] w-[4.5rem] rounded-2xl bg-card p-1"><div className="h-full w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" /></div>
            <div className="space-y-2"><div className={`${block} h-3 w-24`} /><div className={`${block} h-7 w-56`} /></div>
          </div>
        </div>
        <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-6">
          <div className="space-y-3">
            {[0, 1, 2].map(i => (
              <div key={i} className="rounded-2xl border border-card-border bg-card p-4">
                <div className="flex items-center gap-3"><div className={`${block} h-11 w-11`} /><div className={`${block} h-5 flex-1`} /></div>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {[0, 1, 2, 3].map(j => <div key={j} className={`${block} h-16`} />)}
                </div>
              </div>
            ))}
          </div>
          <div className={`${block} hidden h-96 lg:block`} />
        </div>
      </div>
    </div>
  )
}

export default function CompetitiveCoursePage({ config }: { config: CompetitiveCoursePageConfig }) {
  return (
    <Suspense fallback={<CoursePageSkeleton />}>
      <CompetitiveCoursePageInner config={config} />
    </Suspense>
  )
}
