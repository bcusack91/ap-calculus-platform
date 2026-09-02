'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Swords, Gamepad2, Lock, School, UserPen, Inbox, Hourglass, CheckCircle2, Check } from 'lucide-react'
import { PowerUpShop } from '@/components/PowerUps'
import { ChallengeAFriend } from '@/components/ChallengeAFriend'
import AchievementBanner from '@/components/AchievementBanner'
import { COMPETITIVE_COURSE_CATEGORIES } from '@/lib/competitive-catalog'

interface CompetitiveProfile {
  rank: string
  overallMMR: number
  wins: number
  losses: number
  totalMatches: number
  winStreak: number
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

/* The three multiplayer doors, rendered as one consistent "Ways to play"
   section instead of scattered promo blocks with competing gradients. */
const WAYS_TO_PLAY = [
  {
    href: '/competitive/lobbies',
    icon: Gamepad2,
    title: 'Open Lobbies',
    desc: 'Jump into a game that’s waiting for players — 1v1 duels, 2v2 battles, free-for-all races — or host your own.',
    when: 'Best when you want a live game right now.',
    cta: 'Browse lobbies',
  },
  {
    href: '/competitive/lobby',
    icon: Swords,
    title: 'Private Lobby',
    desc: 'Create a code, invite a friend, and play challenges back-to-back.',
    when: 'Best for playing a specific friend.',
    cta: 'Open lobby',
  },
  {
    href: '/competitive/join',
    icon: School,
    title: 'Class Lobby',
    desc: 'Enter the 6-character code from your teacher to join a class battle with MMR-balanced teams.',
    when: 'Best when your teacher gave you a code.',
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
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
        done: masteryPercent >= 60,
        title: 'Complete any interactive lesson (60%+ mastery)',
        detail: `Your best progress: ${masteryPercent}%`,
      },
      {
        done: !!requirements?.quizPassed,
        title: 'Pass any topic quiz (70%+)',
        detail: 'Take an entrance or exit quiz from any course',
      },
      {
        done: !!requirements?.diagnosticPassed,
        title: 'Score 60%+ on any diagnostic test',
        detail: 'Take a diagnostic test from any course',
      },
      {
        done: !!requirements?.teacherGranted,
        title: 'Get access from your teacher',
        detail: 'Teachers can grant competitive mode access',
      },
    ]
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <Lock className="mx-auto mb-6 h-14 w-14 text-gray-400" aria-hidden />
            <h1 className="text-4xl font-bold mb-4">Competitive Mode Locked</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Unlock competitive challenges by doing any ONE of the following:
            </p>
            <div className="mb-8">
              {currentTopic && (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Best Progress: {topicTitle}
                    </span>
                    <span className="text-sm font-semibold text-accent">{masteryPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                    <div
                      className="bg-gradient-to-r from-accent to-accent-secondary h-4 rounded-full transition-all duration-500"
                      style={{ width: `${masteryPercent}%` }}
                    />
                  </div>
                </>
              )}
              <div className="text-left bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">Unlock Requirements (any one)</h3>
                <div className="space-y-4">
                  {checklist.map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.done ? 'bg-green-100 dark:bg-green-900 text-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                        {item.done ? <Check className="h-3.5 w-3.5" aria-hidden /> : <span aria-hidden>○</span>}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                  Tip: accepting a challenge link from a friend also unlocks competitive mode instantly.
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push(currentTopic ? `/topics/${currentTopic}/interactive` : '/topics')}
              className="w-full bg-gradient-to-r from-accent to-accent-secondary text-white font-bold py-4 rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all shadow-lg"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 py-6 sm:p-6">
      {showUnlockBanner && (
        <AchievementBanner
          name="Competitive Mode Unlocked!"
          description="You can now challenge other students and climb the ranks."
          icon="🎉"
          onDismiss={() => setShowUnlockBanner(false)}
        />
      )}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative mb-4 flex flex-col items-center gap-3 sm:block">
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              Competitive Mode
            </h1>
            <button
              onClick={() => router.push('/profile')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-light dark:bg-accent-light/30 text-accent dark:text-accent-muted rounded-lg hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors text-sm font-semibold sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
            >
              <UserPen className="h-4 w-4" aria-hidden /> Customize Avatar
            </button>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Pick your course, then choose a topic, mode, and opponent.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {totalAvailable} of {totalCourses} courses unlocked · finish any lesson to unlock more
          </p>
        </div>

        {/* Profile Card — Rank | MMR | Record, equal treatment */}
        {profile && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-5 sm:p-8 mb-8">
            <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700 text-center">
              <div>
                <div className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">{profile.rank}</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Current Rank</p>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-accent dark:text-accent-muted mb-1">
                  {profile.overallMMR}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">MMR Rating</p>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold mb-1">
                  <span className="text-green-600">{profile.wins}W</span>
                  <span className="mx-1 text-gray-400">–</span>
                  <span className="text-red-600">{profile.losses}L</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Record</p>
              </div>
            </div>
          </div>
        )}

        {/* Primary play CTA — the ranked flow this page is built around */}
        <div className="mb-8 rounded-2xl bg-brand-gradient p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <Swords className="h-6 w-6" aria-hidden /> Ready to compete?
              </h2>
              <p className="mt-1 text-sm text-white/85">
                Pick a course below, choose a topic you&apos;ve completed, and get matched
                against another student at your level.
              </p>
            </div>
            <a
              href="#course-catalog"
              className="shrink-0 self-start rounded-xl bg-white px-6 py-3 font-bold text-accent shadow transition hover:shadow-lg sm:self-auto"
            >
              Find a Match
            </a>
          </div>
        </div>

        {/* Ways to play — the three multiplayer doors, one consistent row */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Ways to play</h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {WAYS_TO_PLAY.map(way => (
              <Link
                key={way.href}
                href={way.href}
                className="group flex h-full flex-col rounded-2xl border border-card-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                  <way.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white">{way.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{way.desc}</p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">{way.when}</p>
                <span className="mt-auto pt-3 text-sm font-semibold text-accent group-hover:underline">
                  {way.cta} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Course Selection — categorized cards */}
        <div id="course-catalog" className="space-y-8 mb-10 scroll-mt-6">
          {COURSE_CATEGORIES.map(category => (
            <section key={category.id}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{category.label}</h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.courses.map(course => {
                  const isUnlocked = !!competitiveCategories[course.categoryKey]
                  const cardBody = (
                    <div
                      className={`relative h-full p-5 rounded-2xl border transition-all overflow-hidden ${
                        isUnlocked
                          ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer'
                          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      {/* Top course-identity gradient bar */}
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${course.gradient}`} />
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl flex-shrink-0">{course.emoji}</span>
                          <div>
                            <h3 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                              {course.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                              {course.desc}
                            </p>
                          </div>
                        </div>
                        {isUnlocked ? (
                          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5" title="Unlocked" />
                        ) : (
                          <Lock className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-gray-400" aria-hidden />
                        )}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        {isUnlocked ? (
                          <span className={`text-xs font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                            Compete →
                          </span>
                        ) : (
                          <span className="text-[11px] text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded-full font-medium">
                            Complete a lesson to unlock
                          </span>
                        )}
                      </div>
                    </div>
                  )
                  return isUnlocked ? (
                    <Link key={course.slug} href={`/competitive/${course.slug}`} className="block h-full">
                      {cardBody}
                    </Link>
                  ) : (
                    <div key={course.slug} className="h-full">
                      {cardBody}
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Stats */}
        {profile && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent">{profile.totalMatches}</div>
              <p className="text-gray-600 dark:text-gray-400">Total Matches</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent-secondary">{profile.winStreak}</div>
              <p className="text-gray-600 dark:text-gray-400">Win Streak</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600">{Math.round(profile.averageAccuracy * 100)}%</div>
              <p className="text-gray-600 dark:text-gray-400">Avg Accuracy</p>
            </div>
          </div>
        )}

        {/* Async Challenges Inbox */}
        {profile && (asyncChallenges.sent.length > 0 || asyncChallenges.received.length > 0) && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <Inbox className="h-5 w-5 text-accent" aria-hidden /> Your Async Challenges
            </h3>

            {asyncChallenges.received.filter(c => c.status === 'WAITING_FOR_OPPONENT').length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">Awaiting Your Response</h4>
                <div className="space-y-2">
                  {asyncChallenges.received
                    .filter(c => c.status === 'WAITING_FOR_OPPONENT')
                    .map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="w-full flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Swords className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden />
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              {c.challenger?.name || 'Someone'} challenged you
                            </p>
                            <p className="text-xs text-gray-500">{c.topicSlug.replace(/-/g, ' ')} · {c.questionCount} questions</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">Play Now</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {asyncChallenges.sent.filter(c => c.status === 'WAITING_FOR_OPPONENT').length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Waiting for Opponent</h4>
                <div className="space-y-2">
                  {asyncChallenges.sent
                    .filter(c => c.status === 'WAITING_FOR_OPPONENT')
                    .map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="w-full flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Hourglass className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden />
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              Your {c.topicSlug.replace(/-/g, ' ')} challenge
                            </p>
                            <p className="text-xs text-gray-500">Score: {c.challengerScore}/{c.questionCount} · Waiting for opponent</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">Share Link</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {[...asyncChallenges.sent, ...asyncChallenges.received].filter(c => c.status === 'COMPLETED').length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Completed</h4>
                <div className="space-y-2">
                  {[...asyncChallenges.sent, ...asyncChallenges.received]
                    .filter(c => c.status === 'COMPLETED')
                    .slice(0, 5)
                    .map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden />
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              {c.topicSlug.replace(/-/g, ' ')}
                            </p>
                            <p className="text-xs text-gray-500">
                              {c.challengerScore} vs {c.recipientScore ?? '?'}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">View Results</span>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Challenge a Friend (link-based unlock) */}
        {profile && (
          <div className="mt-8">
            <ChallengeAFriend />
          </div>
        )}

        {/* Cosmetics Shop. Balance = server-persisted challenge XP (aggregated
            by /api/challenges), which is monotonic — the localStorage spend
            ledger only grows, so the balance can never show phantom debt. */}
        {profile && (
          <div className="mt-8">
            <PowerUpShop currentXP={challengeXP} />
          </div>
        )}
      </div>
    </div>
  )
}
