'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Swords, Gamepad2, Lock, School, Inbox, Hourglass, CheckCircle2, Check, ChevronRight, ArrowDown, Trophy, BookOpen, ListChecks, ClipboardCheck, Sparkles } from 'lucide-react'
import { PowerUpShop } from '@/components/PowerUps'
import { ChallengeAFriend } from '@/components/ChallengeAFriend'
import AchievementBanner from '@/components/AchievementBanner'
import { COMPETITIVE_COURSE_CATEGORIES } from '@/lib/competitive-catalog'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'
import PlayerCard from '@/components/competitive/PlayerCard'
import CourseTile from '@/components/competitive/CourseTile'

interface CompetitiveProfile {
  rank: string
  overallMMR: number
  wins: number
  losses: number
  totalMatches: number
  winStreak: number
  bestWinStreak?: number
  averageAccuracy: number
}

interface UnlockRequirements {
  masteryLevel?: number
  currentTopic?: string
  currentTopicTitle?: string
  /** Real per-requirement state served by /api/competitive/unlock-check. */
  quizPassed?: boolean
  diagnosticPassed?: boolean
  teacherGranted?: boolean
}

interface UnlockCheckResponse {
  unlocked: boolean
  profile: CompetitiveProfile | null
  requirements: UnlockRequirements | null
  completedTopics?: string[]
  competitiveCategories?: Record<string, boolean>
  algebra2SubtopicDetails?: { key: string; label: string }[]
  justUnlocked?: boolean
}

interface AsyncChallengeSummary {
  id: string
  topicSlug: string
  questionCount: number
  status: string
  challengerScore: number
  recipientScore: number | null
  expiresAt: string
  createdAt: string
  challenger?: { id: string; name: string | null; image: string | null }
  recipient?: { id: string; name: string | null; image: string | null } | null
}

/* ================================================================== */
/*  Course Catalog                                                     */
/* ================================================================== */

// Imported from the shared catalog — do NOT re-declare courses here. This
// page previously kept its own inline copy, which drifted out of sync with
// src/lib/competitive-catalog.ts (MCAT was added there but never appeared
// on this hub as a result).
const COURSE_CATEGORIES = COMPETITIVE_COURSE_CATEGORIES

/* The three multiplayer doors, shown beside the ranked "Find a match" card
   in one "Play" row. */
const WAYS_TO_PLAY = [
  {
    href: '/competitive/lobbies',
    icon: Gamepad2,
    title: 'Open Lobbies',
    desc: 'Join a live game waiting for players: duels, 2v2s, free-for-alls.',
    cta: 'Browse lobbies',
  },
  {
    href: '/competitive/lobby',
    icon: Swords,
    title: 'Private Lobby',
    desc: 'Make a code and play a friend back-to-back.',
    cta: 'Open lobby',
  },
  {
    href: '/competitive/join',
    icon: School,
    title: 'Class Lobby',
    desc: 'Enter the 6-character code from your teacher.',
    cta: 'Join with code',
  },
] as const

export default function CompetitivePage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [unlocked, setUnlocked] = useState(false)
  const [profile, setProfile] = useState<CompetitiveProfile | null>(null)
  const [competitiveCategories, setCompetitiveCategories] = useState<Record<string, boolean>>({})
  const [requirements, setRequirements] = useState<UnlockRequirements | null>(null)
  const [asyncChallenges, setAsyncChallenges] = useState<{ sent: AsyncChallengeSummary[]; received: AsyncChallengeSummary[] }>({ sent: [], received: [] })
  const [showUnlockBanner, setShowUnlockBanner] = useState(false)
  const [challengeXP, setChallengeXP] = useState(0)

  const checkUnlock = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/unlock-check')
      const data: UnlockCheckResponse = await res.json()
      setUnlocked(data.unlocked)
      setProfile(data.profile)
      setRequirements(data.requirements)
      setCompetitiveCategories(data.competitiveCategories || {})
      setLoading(false)
      if (data.justUnlocked) {
        setShowUnlockBanner(true)
      }
    } catch (error) {
      console.error('Error checking unlock:', error)
      setLoading(false)
    }
  }, [])

  const fetchAsyncChallenges = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/async-challenge')
      if (res.ok) {
        const data = await res.json()
        setAsyncChallenges(data)
      }
    } catch (e) {
      console.error('Error fetching async challenges:', e)
    }
  }, [])

  // Real, server-persisted XP: the challenges endpoint aggregates the user's
  // lifetime challenge XP (ChallengeParticipant.xpEarned). Monotonic, so the
  // cosmetics spend ledger never shows phantom debt.
  const fetchChallengeXP = useCallback(async () => {
    try {
      const res = await fetch('/api/challenges')
      if (res.ok) {
        const data = await res.json()
        if (typeof data.totalXpEarned === 'number') setChallengeXP(data.totalXpEarned)
      }
    } catch (e) {
      console.error('Error fetching challenge XP:', e)
    }
  }, [])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/competitive')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      // Fetch-on-mount: all are async, so every setState runs after `await`,
      // never synchronously in the effect body. The set-state-in-effect rule
      // can't see through the async boundary, so scope-disable it here.
      /* eslint-disable react-hooks/set-state-in-effect */
      void checkUnlock()
      void fetchAsyncChallenges()
      void fetchChallengeXP()
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, [session, checkUnlock, fetchAsyncChallenges, fetchChallengeXP])

  if (status === 'loading' || loading) {
    return <HubSkeleton />
  }

  if (!session) return null

  /* ---- Locked state ---- */
  if (!unlocked) {
    const masteryPercent = Math.round((requirements?.masteryLevel || 0) * 100)
    const currentTopic = requirements?.currentTopic || ''
    const topicTitle = requirements?.currentTopicTitle || 'a topic'
    // Each requirement reflects real server state from unlock-check. (Accepting
    // a friend's challenge unlocks instantly, so it has no pending state to
    // show — it appears as a tip below instead of a dead checklist row.)
    const checklist = [
      {
        icon: BookOpen,
        done: masteryPercent >= 60,
        title: 'Complete any interactive lesson',
        detail: `Reach 60%+ mastery. Your best so far: ${masteryPercent}%`,
      },
      {
        icon: ListChecks,
        done: !!requirements?.quizPassed,
        title: 'Pass any exit quiz',
        detail: 'Score 80% or better on any topic\'s exit quiz',
      },
      {
        icon: ClipboardCheck,
        done: !!requirements?.diagnosticPassed,
        title: 'Score 60%+ on a diagnostic',
        detail: 'Take a diagnostic test from any course',
      },
      {
        icon: School,
        done: !!requirements?.teacherGranted,
        title: 'Get access from your teacher',
        detail: 'Teachers can grant competitive mode access',
      },
    ]
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:py-12">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-card-border bg-card shadow-sm">
          <div className="relative bg-brand-gradient-br px-6 py-8 text-center text-white sm:px-10 sm:py-10">
            <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30">
              <Lock className="h-8 w-8" aria-hidden />
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Unlock Competitive Mode</h1>
            <p className="mx-auto mt-2 max-w-lg text-base text-white">
              Live quiz battles against students at your level. Do any <strong>one</strong> of the steps below to get in.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 text-sm font-medium" aria-label="What you unlock">
              {['⚡ Speed races', '🎯 Accuracy duels', '👥 2v2 battles', '🏆 Ranked ladder'].map(f => (
                <li key={f} className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/25">{f}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-8">
            {currentTopic && (
              <div className="mb-6 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/60">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                  <span className="min-w-0 truncate font-semibold text-foreground">Closest: {topicTitle}</span>
                  <span className="shrink-0 font-semibold text-accent">{masteryPercent}% / 60%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-brand-gradient transition-all duration-500"
                    style={{ width: `${Math.min(100, (masteryPercent / 60) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-lg font-bold text-foreground">Ways to unlock</h2>
              <span className="rounded-full bg-accent-light px-2 py-0.5 text-xs font-semibold text-accent-dark">any one</span>
              <HelpLink article={HELP_ARTICLES.competitiveMode} label="How Competitive Mode works" size={18} className="ml-auto" />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {checklist.map(item => (
                <li
                  key={item.title}
                  className={`flex items-start gap-3 rounded-2xl border p-4 ${
                    item.done
                      ? 'border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                      : 'border-card-border bg-card'
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    item.done ? 'bg-green-600 text-white' : 'bg-accent-subtle text-accent'
                  }`}>
                    {item.done ? <Check className="h-5 w-5" aria-hidden /> : <item.icon className="h-5 w-5" aria-hidden />}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground">{item.title}</span>
                    <span data-qa="route-detail" className="mt-0.5 block text-sm text-muted-foreground">{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              Got a challenge link from a friend? Accepting it unlocks competitive mode instantly.
            </p>

            <button
              onClick={() => router.push(currentTopic ? `/topics/${currentTopic}/interactive` : '/topics')}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-accent to-accent-secondary py-4 font-bold text-white shadow-lg transition-all hover:from-accent-hover hover:to-accent-secondary-hover"
            >
              {currentTopic ? `Continue Learning: ${topicTitle}` : 'Browse Topics'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ---- Unlocked: course-selection landing ---- */
  const totalAvailable = COURSE_CATEGORIES.reduce(
    (sum, cat) => sum + cat.courses.filter(c => competitiveCategories[c.categoryKey]).length,
    0
  )
  const totalCourses = COURSE_CATEGORIES.reduce((sum, cat) => sum + cat.courses.length, 0)
  const awaitingResponse = asyncChallenges.received.filter(c => c.status === 'WAITING_FOR_OPPONENT')
  const sentWaiting = asyncChallenges.sent.filter(c => c.status === 'WAITING_FOR_OPPONENT')
  const completedChallenges = [...asyncChallenges.sent, ...asyncChallenges.received].filter(c => c.status === 'COMPLETED')
  const playerName = session.user?.name || 'Player'

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 dark:bg-gray-950 sm:px-6 sm:py-8">
      {showUnlockBanner && (
        <AchievementBanner
          name="Competitive Mode Unlocked!"
          description="You can now challenge other students and climb the ranks."
          icon="🎉"
          onDismiss={() => setShowUnlockBanner(false)}
        />
      )}
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
        {/* Header */}
        <header className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent">
              <Swords className="h-4 w-4" aria-hidden /> Arena
            </p>
            <h1 className="mt-1 flex items-center gap-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Competitive Mode
              <HelpLink article={HELP_ARTICLES.competitiveMode} label="How Competitive Mode works" size={20} />
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {totalAvailable} of {totalCourses} courses unlocked
          </p>
        </header>

        {profile && <PlayerCard profile={profile} name={playerName} userId={session.user?.id} />}

        {/* Actionable first: challenges waiting on THIS student */}
        {profile && awaitingResponse.length > 0 && (
          <section aria-labelledby="awaiting-heading" className="-mt-2 space-y-2 sm:-mt-4">
            <h2 id="awaiting-heading" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Your move · {awaitingResponse.length} challenge{awaitingResponse.length === 1 ? '' : 's'}
            </h2>
            {awaitingResponse.map(c => (
              <button
                key={c.id}
                onClick={() => router.push(`/competitive/async/${c.id}`)}
                className="flex w-full items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-left transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Swords className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold leading-snug text-foreground">
                    {c.challenger?.name || 'Someone'} challenged you
                  </span>
                  <span className="block truncate text-sm capitalize text-gray-600 dark:text-gray-400">
                    {c.topicSlug.replace(/-/g, ' ')} · {c.questionCount} questions · score to beat {c.challengerScore}
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white">Play now</span>
              </button>
            ))}
          </section>
        )}

        {/* Ways to play — ranked first, then the three multiplayer doors */}
        <section aria-labelledby="play-heading">
          <h2 id="play-heading" className="mb-3 text-lg font-bold text-foreground">Play</h2>
          <div className="grid gap-3 lg:grid-cols-5">
            <a
              href="#course-catalog"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-gradient-br p-5 text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg lg:col-span-2 lg:p-6"
            >
              <span className="pointer-events-none absolute -right-6 -top-8 text-[8rem] leading-none opacity-15" aria-hidden>⚔️</span>
              <span className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
                  <Trophy className="h-3.5 w-3.5" aria-hidden /> Ranked
                </span>
                <span className="mt-3 block text-2xl font-black">Find a match</span>
                <span className="mt-1 block max-w-sm text-sm text-white">
                  Pick a course, choose a topic you&apos;ve completed, and get matched with a student at your level.
                </span>
              </span>
              <span className="relative mt-4 inline-flex items-center gap-1 self-start rounded-xl bg-white px-4 py-2 text-sm font-bold text-accent shadow-sm">
                Choose a course <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
              </span>
            </a>
            {WAYS_TO_PLAY.map(way => (
              <Link
                key={way.href}
                href={way.href}
                className="group flex items-center gap-3.5 rounded-2xl border border-card-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent-muted hover:shadow-md lg:flex-col lg:items-start lg:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                  <way.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-foreground">{way.title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{way.desc}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-accent lg:mt-auto lg:pt-2">
                  <span className="hidden lg:inline">{way.cta}</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Course catalog */}
        <section id="course-catalog" aria-labelledby="catalog-heading" className="scroll-mt-20">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <h2 id="catalog-heading" className="text-lg font-bold text-foreground">Choose a course</h2>
            {totalAvailable < totalCourses && (
              <p className="text-sm text-muted-foreground">Finish any lesson in a course to unlock it</p>
            )}
          </div>
          <nav aria-label="Course categories" className="-mx-4 mb-5 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {COURSE_CATEGORIES.map(category => (
                <li key={category.id}>
                  <a
                    href={`#cat-${category.id}`}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-card-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <span aria-hidden>{category.icon}</span> {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-7">
            {COURSE_CATEGORIES.map(category => {
              const open = category.courses.filter(c => competitiveCategories[c.categoryKey]).length
              return (
                <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-20">
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    <span aria-hidden className="text-base">{category.icon}</span>
                    {category.label}
                    <span className="font-medium normal-case tracking-normal text-gray-500">· {open}/{category.courses.length}</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.courses.map(course => (
                      <CourseTile key={course.slug} course={course} unlocked={!!competitiveCategories[course.categoryKey]} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Async inbox: the rest (the student's own pending links + results) */}
        {profile && (sentWaiting.length > 0 || completedChallenges.length > 0) && (
          <section aria-labelledby="inbox-heading" className="rounded-3xl border border-card-border bg-card p-5 shadow-sm sm:p-6">
            <h2 id="inbox-heading" className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
              <Inbox className="h-5 w-5 text-accent" aria-hidden /> Your async challenges
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {sentWaiting.length > 0 && (
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">Waiting for opponent</h3>
                  <div className="space-y-2">
                    {sentWaiting.map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="flex w-full items-center gap-3 rounded-xl border border-card-border p-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                          <Hourglass className="h-4.5 w-4.5" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold capitalize text-foreground">{c.topicSlug.replace(/-/g, ' ')}</span>
                          <span className="block text-xs text-muted-foreground">You scored {c.challengerScore}/{c.questionCount}</span>
                        </span>
                        <span className="shrink-0 text-xs font-semibold text-accent">Share link</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {completedChallenges.length > 0 && (
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Completed</h3>
                  <div className="space-y-2">
                    {completedChallenges.slice(0, 5).map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="flex w-full items-center gap-3 rounded-xl border border-card-border p-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <CheckCircle2 className="h-4.5 w-4.5" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold capitalize text-foreground">{c.topicSlug.replace(/-/g, ' ')}</span>
                          <span className="block text-xs tabular-nums text-muted-foreground">{c.challengerScore} vs {c.recipientScore ?? '?'}</span>
                        </span>
                        <span className="shrink-0 text-xs font-semibold text-accent">View results</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Challenge a Friend (link-based unlock) + Cosmetics Shop. Balance =
            server-persisted challenge XP (aggregated by /api/challenges),
            which is monotonic; the spend ledger is also server-persisted
            (/api/competitive/cosmetics), so purchases and balance roam with
            the account across devices. */}
        {profile && (
          <div className="grid items-start gap-6 lg:grid-cols-2 [&>div]:rounded-3xl [&>div]:border-card-border [&>div]:bg-card [&>div]:shadow-sm">
            <ChallengeAFriend />
            <PowerUpShop currentXP={challengeXP} />
          </div>
        )}
      </div>
    </div>
  )
}

/** Layout-matched placeholder while the session and unlock state load. */
function HubSkeleton() {
  const block = 'animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none'
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 dark:bg-gray-950 sm:px-6 sm:py-8" aria-busy="true" aria-label="Loading competitive mode">
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
        <div className="space-y-2">
          <div className={`${block} h-4 w-20`} />
          <div className={`${block} h-9 w-64`} />
        </div>
        <div className="overflow-hidden rounded-3xl border border-card-border bg-card">
          <div className="h-20 animate-pulse bg-gray-200 dark:bg-gray-800 sm:h-24" />
          <div className="px-4 pb-6 sm:px-7">
            <div className="-mt-10 flex items-end gap-4">
              <div className="h-[88px] w-[88px] rounded-full bg-card p-1"><div className="h-full w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" /></div>
              <div className="space-y-2 pb-2"><div className={`${block} h-6 w-40`} /><div className={`${block} h-5 w-20`} /></div>
            </div>
            <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_2fr]">
              <div className={`${block} h-32`} />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[0, 1, 2, 3].map(i => <div key={i} className={`${block} h-24 sm:h-32`} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-5">
          <div className={`${block} h-44 lg:col-span-2`} />
          {[0, 1, 2].map(i => <div key={i} className={`${block} h-20 lg:h-44`} />)}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map(i => <div key={i} className={`${block} h-20`} />)}
        </div>
      </div>
    </div>
  )
}
