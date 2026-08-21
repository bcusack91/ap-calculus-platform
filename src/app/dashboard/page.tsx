'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ClipboardList, Stethoscope, FlaskConical, Rocket, BookOpen, Zap, Trophy, Clock, TrendingUp, BarChart3, Bookmark, Play, Layers, NotebookPen, GraduationCap } from 'lucide-react'
import AvatarDisplay from '@/components/AvatarDisplay'
import { AvatarData } from '@/types/avatar'
import ProgressRing from '@/components/ProgressRing'
import LiveNowBanner from '@/components/LiveNowBanner'
import ClassDiagnosticBanner from '@/components/ClassDiagnosticBanner'
import AchievementToast from '@/components/AchievementToast'
import ProgressCharts from '@/components/ProgressCharts'
import StudyPlanner from '@/components/StudyPlanner'
import ChallengesWidget from '@/components/ChallengesWidget'
import ContinueWhereYouLeftOff from '@/components/ContinueWhereYouLeftOff'
import StreakNotification from '@/components/StreakNotification'
import PomodoroTimer from '@/components/PomodoroTimer'
import WeakTopicsDashboard from '@/components/WeakTopicsDashboard'
import ProgressComparison from '@/components/ProgressComparison'
import DashboardTutorial from '@/components/DashboardTutorial'
import RandomPracticeButton from '@/components/RandomPracticeButton'
import { DailyChallenge } from '@/components/DailyChallenge'
import { SeasonalEvents } from '@/components/SeasonalEvents'
import { ChallengeAFriend } from '@/components/ChallengeAFriend'
import { StudyHeatmap } from '@/components/StudyHeatmap'
import { PaidAnalyticsGate } from '@/components/PaidAnalyticsGate'
import SixSigmaDashboard from '@/components/SixSigmaDashboard'

const FlashcardStudySession = dynamic(
  () => import('@/components/FlashcardStudySession'),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800 p-8 min-h-[300px]">
        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    ),
  }
)

interface BookmarkEntry {
  id: string
  topicSlug: string
  title: string
  part: number
  createdAt: string
}

interface NoteEntry {
  topicSlug: string
  topicTitle: string
  content: string
  drawing?: string | null
  updatedAt: string
}

interface AchievementData {
  id: string
  name: string
  description: string
  icon: string
  category: string
  unlocked: boolean
  unlockedAt: string | null
}

interface DashboardData {
  overview: {
    topicsStarted: number
    topicsCompleted: number
    topicsMastered: number
    topicsInProgress: number
    totalTimeSpentMinutes: number
    totalFlashcards: number
    dueFlashcards: number
  }
  streak: {
    current: number
    longest: number
    lastActive: string | null
  }
  courseProgress: {
    name: string
    slug: string
    total: number
    completed: number
    mastered: number
    inProgress: number
  }[]
  recentActivity: {
    topicTitle: string
    topicSlug: string
    courseName: string
    status: string
    masteryLevel: number
    lastAccessed: string
  }[]
}

const DASHBOARD_TABS = [
  ['overview', 'Overview'],
  ['progress', 'Progress'],
  ['practice', 'Practice'],
  ['extras', 'Extras'],
] as const

type DashboardTab = (typeof DASHBOARD_TABS)[number][0]

function isDashboardTab(value: string | null): value is DashboardTab {
  return DASHBOARD_TABS.some(([key]) => key === value)
}

/** Skeleton shown while session/dashboard data load (also used as the Suspense fallback). */
function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="space-y-2">
            <div className="w-48 h-7 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
              <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <div className="w-40 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <div className="w-32 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  {[1, 2].map((j) => (
                    <div key={j} className="w-full h-14 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardContent() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)
  const initialTabParam = searchParams.get('tab')
  const [tab, setTab] = useState<DashboardTab>(isDashboardTab(initialTabParam) ? initialTabParam : 'overview')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null)
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([])
  const [notes, setNotes] = useState<NoteEntry[]>([])
  const [verificationSent, setVerificationSent] = useState(false)
  const [sendingVerification, setSendingVerification] = useState(false)
  const [verificationError, setVerificationError] = useState(false)
  const [pendingAssignments, setPendingAssignments] = useState(0)
  const [pathTopic, setPathTopic] = useState<string | null>(null)
  const [achievements, setAchievements] = useState<AchievementData[]>([])
  const [achievementStats, setAchievementStats] = useState({ unlocked: 0, total: 0 })
  const [newAchievements, setNewAchievements] = useState<string[]>([])
  const [apChemDiagnostic, setApChemDiagnostic] = useState<{
    estimatedAPScore?: number
    percentage?: number
    form?: string
    recommendedTopics?: { slug: string; name: string; priority: string }[]
  } | null>(null)
  const [calcABDiagnostic, setCalcABDiagnostic] = useState<{
    estimatedAPScore?: number
    percentage?: number
    form?: string
    recommendedTopics?: { slug: string; name: string; priority: string }[]
  } | null>(null)
  const [calcBCDiagnostic, setCalcBCDiagnostic] = useState<{
    estimatedAPScore?: number
    percentage?: number
    abSubscore?: number
    form?: string
    recommendedTopics?: { slug: string; name: string; priority: string }[]
  } | null>(null)
  const [satDiagnostic, setSatDiagnostic] = useState<{
    estimatedScore?: number
    rwScore?: number
    mathScore?: number
    recommendedTopics?: { slug: string; name: string; priority: string }[]
  } | null>(null)
  // slug -> cleared (entrance mastery or exit >= 80%) for study-plan Done badges
  const [clearedModules, setClearedModules] = useState<Record<string, boolean>>({})
  const [mcatPlanStatus, setMcatPlanStatus] = useState<{
    hasDiagnostic: boolean
    canRetakeDiagnostic: boolean
    requiredScorePercent: number
    recommendedTopics: {
      slug: string
      name: string
      priority: 'high' | 'medium' | 'low'
      topicPath: string
      entranceSatisfied: boolean
      bestExitScorePercent: number | null
      exitSatisfied: boolean
      isSatisfied: boolean
    }[]
    pendingTopics: {
      slug: string
      name: string
      priority: 'high' | 'medium' | 'low'
      topicPath: string
      entranceSatisfied: boolean
      bestExitScorePercent: number | null
      exitSatisfied: boolean
      isSatisfied: boolean
    }[]
  } | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/dashboard')
      return
    }
    if (status === 'authenticated') {
      fetchAll()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  // Keep the active tab in sync with the URL (?tab=...), e.g. on back/forward or in-app links
  useEffect(() => {
    const urlTab = searchParams.get('tab')
    const next: DashboardTab = isDashboardTab(urlTab) ? urlTab : 'overview'
    setTab((prev) => (prev === next ? prev : next))
  }, [searchParams])

  const selectTab = (key: DashboardTab) => {
    setTab(key)
    router.replace(key === 'overview' ? '/dashboard' : `/dashboard?tab=${key}`, { scroll: false })
  }

  // WAI-ARIA tabs pattern: Left/Right arrows (wrapping) + Home/End move focus and selection
  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number
    if (e.key === 'ArrowRight') next = (index + 1) % DASHBOARD_TABS.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + DASHBOARD_TABS.length) % DASHBOARD_TABS.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = DASHBOARD_TABS.length - 1
    else return
    e.preventDefault()
    selectTab(DASHBOARD_TABS[next][0])
    tabRefs.current[next]?.focus()
  }

  const fetchAll = async () => {
    const [dashRes, avatarRes, assignRes, bookmarkRes, achieveRes, onboardRes, notesRes] = await Promise.allSettled([
      fetch('/api/dashboard'),
      fetch('/api/user/avatar'),
      fetch('/api/student/assignments'),
      fetch('/api/bookmarks'),
      fetch('/api/achievements'),
      fetch('/api/onboarding'),
      fetch('/api/notes'),
    ])

    if (dashRes.status === 'fulfilled' && dashRes.value.ok) {
      try {
        setData(await dashRes.value.json())
        setFetchError(false)
      } catch {
        setFetchError(true)
      }
    } else {
      setFetchError(true)
    }
    if (avatarRes.status === 'fulfilled' && avatarRes.value.ok) {
      const d = await avatarRes.value.json()
      setAvatarData(d.avatarData)
    }
    if (assignRes.status === 'fulfilled' && assignRes.value.ok) {
      const d = await assignRes.value.json()
      const pending = (d.assignments || []).filter(
        (a: { submission: { status: string } }) => a.submission.status !== 'COMPLETED'
      ).length
      setPendingAssignments(pending)
    }
    if (bookmarkRes.status === 'fulfilled' && bookmarkRes.value.ok) {
      const d = await bookmarkRes.value.json()
      setBookmarks(d.bookmarks || [])
    }
    if (notesRes.status === 'fulfilled' && notesRes.value.ok) {
      const d = await notesRes.value.json()
      setNotes(d.notes || [])
    }
    if (achieveRes.status === 'fulfilled' && achieveRes.value.ok) {
      const d = await achieveRes.value.json()
      setAchievements(d.achievements || [])
      setAchievementStats({ unlocked: d.totalUnlocked, total: d.totalAchievements })
    }
    if (onboardRes.status === 'fulfilled' && onboardRes.value.ok) {
      const d = await onboardRes.value.json()
      if (!d.hasCompletedOnboarding) {
        router.push('/onboarding')
        return
      }
      // Keep the study path so the cold-start card can point at the next topic.
      if (d.learningPath?.currentTopic) setPathTopic(d.learningPath.currentTopic)
    }

    // Collect every recommended slug across plans for one Done-status lookup
    const planSlugs = new Set<string>()
    const collectSlugs = (results: Record<string, unknown>) => {
      const recs = (results as { recommendedTopics?: { slug?: string }[] }).recommendedTopics
      for (const t of recs ?? []) if (typeof t?.slug === 'string') planSlugs.add(t.slug)
    }

    // Fetch AP Chem diagnostic recommendations
    try {
      const chemRes = await fetch('/api/ap-chem-diagnostic/history')
      if (chemRes.ok) {
        const chemData = await chemRes.json()
        if (chemData.attempts?.length > 0) {
          const latest = chemData.attempts[0].results as Record<string, unknown>
          setApChemDiagnostic(latest)
          collectSlugs(latest)
        }
      }
    } catch { /* silent */ }

    // Fetch AP Calculus AB diagnostic recommendations
    try {
      const abRes = await fetch('/api/calcab-diagnostic/history')
      if (abRes.ok) {
        const abData = await abRes.json()
        if (abData.attempts?.length > 0) {
          const latest = abData.attempts[0].results as Record<string, unknown>
          setCalcABDiagnostic(latest)
          collectSlugs(latest)
        }
      }
    } catch { /* silent */ }

    // Fetch AP Calculus BC diagnostic recommendations
    try {
      const bcRes = await fetch('/api/calcbc-diagnostic/history')
      if (bcRes.ok) {
        const bcData = await bcRes.json()
        if (bcData.attempts?.length > 0) {
          const latest = bcData.attempts[0].results as Record<string, unknown>
          setCalcBCDiagnostic(latest)
          collectSlugs(latest)
        }
      }
    } catch { /* silent */ }

    // Fetch SAT diagnostic recommendations
    try {
      const satRes = await fetch('/api/sat-diagnostic/history')
      if (satRes.ok) {
        const satData = await satRes.json()
        if (satData.attempts?.length > 0) {
          const latest = satData.attempts[0].results as Record<string, unknown>
          setSatDiagnostic(latest)
          collectSlugs(latest)
        }
      }
    } catch { /* silent */ }

    // Fetch MCAT diagnostic remediation/recommendation plan
    try {
      const mcatRes = await fetch('/api/mcat-diagnostic/plan-status')
      if (mcatRes.ok) {
        const mcatData = await mcatRes.json()
        if (mcatData?.hasDiagnostic) {
          setMcatPlanStatus(mcatData)
        }
      }
    } catch { /* silent */ }

    // One lookup for all plan Done badges
    try {
      if (planSlugs.size > 0) {
        const ms = await fetch(`/api/progress/module-status?slugs=${encodeURIComponent([...planSlugs].join(','))}`)
        if (ms.ok) {
          const d = await ms.json()
          setClearedModules(d.cleared ?? {})
        }
      }
    } catch { /* silent */ }

    // Check for new achievements
    try {
      const checkRes = await fetch('/api/achievements', { method: 'POST' })
      if (checkRes.ok) {
        const d = await checkRes.json()
        if (d.newlyUnlocked?.length > 0) {
          setNewAchievements(d.newlyUnlocked)
          const refreshRes = await fetch('/api/achievements')
          if (refreshRes.ok) {
            const rd = await refreshRes.json()
            setAchievements(rd.achievements || [])
            setAchievementStats({ unlocked: rd.totalUnlocked, total: rd.totalAchievements })
          }
        }
      }
    } catch { /* silent */ }

    setLoading(false)
  }

  const removeBookmark = async (topicSlug: string, part: number) => {
    setBookmarks((prev) => prev.filter((b) => !(b.topicSlug === topicSlug && b.part === part)))
    try {
      await fetch('/api/bookmarks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug, part }),
      })
    } catch { /* silent */ }
  }

  const retryFetch = () => {
    setFetchError(false)
    setLoading(true)
    fetchAll()
  }

  // Skeleton loading
  if (status === 'loading' || loading) {
    return <DashboardSkeleton />
  }

  if (!session) return null

  const overview = data?.overview
  const streak = data?.streak
  const courseProgress = data?.courseProgress ?? []
  // Onboarding-selected study path (used for the cold-start card below)
  const recentActivity = data?.recentActivity ?? []

  const statusLabel = (s: string) => {
    switch (s) {
      case 'MASTERED': return '🏆 Mastered'
      case 'COMPLETED': return '✅ Completed'
      case 'IN_PROGRESS': return '📖 In Progress'
      default: return '⬜ Not Started'
    }
  }

  const statusColor = (s: string) => {
    switch (s) {
      case 'MASTERED': return 'text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/30'
      case 'COMPLETED': return 'text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30'
      case 'IN_PROGRESS': return 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30'
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700/30'
    }
  }

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'just now'
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    if (days < 7) return `${days}d ago`
    return new Date(dateStr).toLocaleDateString()
  }

  const totalTopics = overview?.topicsStarted ?? 0
  const completionPct = totalTopics > 0
    ? Math.round(((overview?.topicsCompleted ?? 0) + (overview?.topicsMastered ?? 0)) / totalTopics * 100)
    : 0
  const masteryPct = totalTopics > 0
    ? Math.round((overview?.topicsMastered ?? 0) / totalTopics * 100)
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {newAchievements.length > 0 && (
        <AchievementToast achievements={newAchievements} onDismiss={() => setNewAchievements([])} />
      )}

      <div className="container py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <AvatarDisplay avatarData={avatarData} size={56} className="ring-2 ring-accent rounded-full" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {session.user?.name || 'Student'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Here&apos;s your learning progress</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/join-class" className="px-4 py-2 text-sm font-medium rounded-lg border border-accent-muted dark:border-accent hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors text-accent-hover dark:text-accent-muted">
              🏫 Join a Class
            </Link>
            <Link href="/profile" className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              Edit Profile
            </Link>
            <Link href="/flashcards/review" className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white hover:from-accent-hover hover:to-accent-secondary-hover transition-all">
              Review Flashcards {overview && overview.dueFlashcards > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{overview.dueFlashcards} due</span>
              )}
            </Link>
          </div>
        </div>

        {/* Email Verification Banner */}
        {session?.user?.email && !session?.user?.emailVerified && (
          <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-2xl">📧</span>
            <div className="flex-1">
              <p className="font-semibold text-yellow-900 dark:text-yellow-200">Verify your email address</p>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">Please verify {session.user.email} to secure your account.</p>
            </div>
            {verificationSent ? (
              <span className="text-sm font-medium text-green-700 dark:text-green-400">✅ Verification email sent!</span>
            ) : (
              <div className="flex flex-col items-start gap-1">
                <button
                  onClick={async () => {
                    setSendingVerification(true)
                    setVerificationError(false)
                    try {
                      const res = await fetch('/api/auth/verify-email', { method: 'POST' })
                      if (res.ok) {
                        setVerificationSent(true)
                      } else {
                        setVerificationError(true)
                      }
                    } catch {
                      setVerificationError(true)
                    }
                    setSendingVerification(false)
                  }}
                  disabled={sendingVerification}
                  className="px-4 py-2 text-sm font-semibold bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50"
                >
                  {sendingVerification ? 'Sending...' : 'Send Verification Email'}
                </button>
                {verificationError && (
                  <span role="alert" className="text-xs font-medium text-red-700 dark:text-red-400">
                    Couldn&apos;t send the verification email. Please try again.
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Teacher-assigned work leads the page: it carries deadlines and it is
            why most students are here. Deliberately ABOVE the fetchError guard
            further down — both of these load from their own endpoints, so a
            failure of the /api/dashboard stats payload must not hide an
            assigned diagnostic or a due assignment. */}

        {/* Assigned class diagnostics not yet taken */}
        <ClassDiagnosticBanner />

        {/* Pending Assignments */}
        {pendingAssignments > 0 && (
          <Link href="/assignments" className="mb-8 flex items-center justify-between bg-gradient-to-r from-blue-50 to-accent-subtle dark:from-blue-900/20 dark:to-accent-light/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 hover:shadow-md transition-all group">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{pendingAssignments} assignment{pendingAssignments !== 1 ? 's' : ''} pending</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">From your teachers — click to view</p>
              </div>
            </div>
            <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">View →</span>
          </Link>
        )}

        {/* Daily Challenge */}
        <DailyChallenge />

        {/* Continue Where You Left Off (#121) */}
        <ContinueWhereYouLeftOff />

        {/* Streak Notification (#122) */}
        <StreakNotification />

        {fetchError ? (
        /* Dashboard payload failed — show an inline error instead of zeroed stats */
        <div role="alert" className="bg-white dark:bg-gray-800 rounded-xl border border-red-200 dark:border-red-800 p-8 text-center shadow-sm">
          <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Couldn&apos;t load your progress</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-5 max-w-md mx-auto">
            Something went wrong while loading your dashboard data. Check your connection and try again.
          </p>
          <button
            onClick={retryFetch}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
          >
            Retry
          </button>
        </div>
        ) : (
        <>
        {/* Stats Grid with Progress Rings */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm flex items-center gap-3">
            <ProgressRing percentage={completionPct} size={48} strokeWidth={5} color="#8b5cf6" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{overview?.topicsCompleted ?? 0}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Completed</div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm flex items-center gap-3">
            <ProgressRing percentage={masteryPct} size={48} strokeWidth={5} color="#f59e0b" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{overview?.topicsMastered ?? 0}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Mastered</div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">{overview?.totalFlashcards ?? 0}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Flashcards Studied</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">{streak?.current ?? 0}🔥</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Day Streak</div>
          </div>
        </div>

        {/* Live class sessions — shows only while an enrolled class is live */}
        <LiveNowBanner />

        {/* Tabs — keep the default view focused; everything else is one click away (#6) */}
        <div role="tablist" aria-label="Dashboard sections" className="mb-6 flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-700">
          {DASHBOARD_TABS.map(([key, label], index) => (
            <button
              key={key}
              ref={(el) => { tabRefs.current[index] = el }}
              role="tab"
              id={`dashboard-tab-${key}`}
              aria-selected={tab === key}
              aria-controls={`dashboard-tabpanel-${key}`}
              tabIndex={tab === key ? 0 : -1}
              onClick={() => selectTab(key)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors ${tab === key ? 'border-accent text-accent-hover dark:text-accent-muted' : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
              {label}
            </button>
          ))}
          {/* Full cross-activity history lives on its own page — link it from the
              tab strip so the dashboard stays a summary, not a dumping ground. */}
          <Link
            href="/progress"
            className="-mb-px ml-auto border-b-2 border-transparent px-4 py-2.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            My Progress →
          </Link>
        </div>

        {/* ============ OVERVIEW: what to study now ============ */}
        {tab === 'overview' && (
        <div role="tabpanel" id="dashboard-tabpanel-overview" aria-labelledby="dashboard-tab-overview" className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Continue where you left off — THE single next action, derived from
                the most recent topic activity. The one gradient-prominent card on
                the page; everything else stays neutral so this reads first.
                (New users with no activity get the cold-start card below instead.) */}
            {recentActivity.length > 0 && (
              <div className="rounded-2xl bg-gradient-to-r from-accent to-accent-secondary p-6 sm:p-7 text-white shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                  Continue where you left off
                </p>
                <h2 className="text-2xl font-bold mb-1 truncate">{recentActivity[0].topicTitle}</h2>
                <p className="text-sm text-white/85 mb-4">
                  {recentActivity[0].courseName}
                  {typeof recentActivity[0].masteryLevel === 'number' && recentActivity[0].masteryLevel > 0 && (
                    <> · {Math.round(recentActivity[0].masteryLevel * 100)}% mastery</>
                  )}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/topics/${recentActivity[0].topicSlug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-accent-hover shadow hover:bg-white/90 transition-colors"
                  >
                    <Play className="w-4 h-4" aria-hidden /> Continue topic
                  </Link>
                  {(overview?.dueFlashcards ?? 0) > 0 && (
                    <Link
                      href="/flashcards"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      <Layers className="w-4 h-4" aria-hidden /> Review {overview!.dueFlashcards} due card{overview!.dueFlashcards === 1 ? '' : 's'}
                    </Link>
                  )}
                  {(streak?.current ?? 0) > 0 && (
                    <span className="ml-auto text-sm font-semibold text-white/90" title="Current daily streak">
                      🔥 {streak!.current}-day streak
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Diagnostic Study Plans — shown prominently at top of dashboard */}
            {(apChemDiagnostic?.recommendedTopics?.length || calcABDiagnostic?.recommendedTopics?.length || calcBCDiagnostic?.recommendedTopics?.length || mcatPlanStatus?.recommendedTopics?.length || satDiagnostic?.recommendedTopics?.length) ? (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white"><ClipboardList className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Your Study Plans</h2>
                {mcatPlanStatus?.recommendedTopics && mcatPlanStatus.recommendedTopics.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-emerald-300 dark:border-emerald-700 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white"><Stethoscope className="inline w-4 h-4 mr-1 -mt-0.5 text-emerald-600 dark:text-emerald-400" aria-hidden /> MCAT Remediation Plan</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {mcatPlanStatus.pendingTopics.length === 0 ? 'All recommended modules complete' : `${mcatPlanStatus.pendingTopics.length} module${mcatPlanStatus.pendingTopics.length === 1 ? '' : 's'} left`}
                        </span>
                        <Link href="/mcat-diagnostic" className="text-xs text-emerald-600 hover:underline dark:text-emerald-400">View Plan →</Link>
                      </div>
                    </div>
                    <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                      Retake unlock rule: score 100% on entrance quiz or at least {mcatPlanStatus.requiredScorePercent}% on exit quiz for each recommended module.
                    </p>
                    <div className="space-y-1.5">
                      {mcatPlanStatus.recommendedTopics.map((topic, i) => (
                        <Link key={topic.slug} href={topic.topicPath} className={`flex items-center justify-between rounded-lg border border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 hover:border-emerald-400 transition-colors group ${clearedModules[topic.slug] ? 'opacity-60' : ''}`}>
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">{topic.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Med'}</span>
                            {clearedModules[topic.slug] && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">✓ Done</span>
                            )}
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.isSatisfied ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                              {topic.isSatisfied ? 'Complete' : 'Pending'}
                            </span>
                          </div>
                          <span className="text-emerald-500 group-hover:translate-x-1 transition-transform text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {apChemDiagnostic?.recommendedTopics && apChemDiagnostic.recommendedTopics.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-orange-300 dark:border-orange-700 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white"><FlaskConical className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> AP Chemistry</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Score: {apChemDiagnostic.estimatedAPScore}/5 ({apChemDiagnostic.percentage}%)</span>
                        <Link href="/ap-chem-diagnostic" className="text-xs text-orange-600 hover:underline dark:text-orange-400">Retake →</Link>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {apChemDiagnostic.recommendedTopics.map((topic, i) => (
                        <Link key={topic.slug} href={`/topics/${topic.slug}`} className={`flex items-center justify-between rounded-lg border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 px-3 py-2 hover:border-orange-400 transition-colors group ${clearedModules[topic.slug] ? 'opacity-60' : ''}`}>
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/50 text-[10px] font-bold text-orange-700 dark:text-orange-300">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-orange-700 dark:group-hover:text-orange-400">{topic.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Med'}</span>
                            {clearedModules[topic.slug] && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">✓ Done</span>
                            )}
                          </div>
                          <span className="text-orange-500 group-hover:translate-x-1 transition-transform text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {calcABDiagnostic?.recommendedTopics && calcABDiagnostic.recommendedTopics.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-accent-muted dark:border-accent-hover p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white">∫ AP Calculus AB</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Score: {calcABDiagnostic.estimatedAPScore}/5 ({calcABDiagnostic.percentage}%)</span>
                        <Link href="/calcab-diagnostic" className="text-xs text-accent hover:underline dark:text-accent-muted">Retake →</Link>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {calcABDiagnostic.recommendedTopics.map((topic, i) => (
                        <Link key={topic.slug} href={`/topics/${topic.slug}`} className={`flex items-center justify-between rounded-lg border border-accent-light dark:border-accent-hover bg-accent-subtle dark:bg-accent-light/20 px-3 py-2 hover:border-accent-muted transition-colors group ${clearedModules[topic.slug] ? 'opacity-60' : ''}`}>
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-light dark:bg-accent-light/50 text-[10px] font-bold text-accent-hover dark:text-accent-muted">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-accent-hover dark:group-hover:text-accent-muted">{topic.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Med'}</span>
                            {clearedModules[topic.slug] && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">✓ Done</span>
                            )}
                          </div>
                          <span className="text-accent group-hover:translate-x-1 transition-transform text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {satDiagnostic?.recommendedTopics && satDiagnostic.recommendedTopics.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-green-300 dark:border-green-700 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white"><GraduationCap className="inline w-4 h-4 mr-1 -mt-0.5 text-green-600 dark:text-green-400" aria-hidden /> SAT</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Score: {satDiagnostic.estimatedScore} (R&W {satDiagnostic.rwScore} · Math {satDiagnostic.mathScore})</span>
                        <Link href="/sat-diagnostic" className="text-xs text-green-600 hover:underline dark:text-green-400">Retake →</Link>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {satDiagnostic.recommendedTopics.slice(0, 5).map((topic, i) => (
                        <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className={`flex items-center justify-between rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 px-3 py-2 hover:border-green-400 transition-colors group ${clearedModules[topic.slug] ? 'opacity-60' : ''}`}>
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 text-[10px] font-bold text-green-700 dark:text-green-300">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-700 dark:group-hover:text-green-400">{topic.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Med'}</span>
                            {clearedModules[topic.slug] && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">✓ Done</span>
                            )}
                          </div>
                          <span className="text-green-500 group-hover:translate-x-1 transition-transform text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {calcBCDiagnostic?.recommendedTopics && calcBCDiagnostic.recommendedTopics.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-violet-300 dark:border-violet-700 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white">∬ AP Calculus BC</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">BC: {calcBCDiagnostic.estimatedAPScore}/5, AB: {calcBCDiagnostic.abSubscore}/5</span>
                        <Link href="/calcbc-diagnostic" className="text-xs text-violet-600 hover:underline dark:text-violet-400">Retake →</Link>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {calcBCDiagnostic.recommendedTopics.map((topic, i) => (
                        <Link key={topic.slug} href={`/topics/${topic.slug}`} className={`flex items-center justify-between rounded-lg border border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20 px-3 py-2 hover:border-violet-400 transition-colors group ${clearedModules[topic.slug] ? 'opacity-60' : ''}`}>
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50 text-[10px] font-bold text-violet-700 dark:text-violet-300">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-violet-700 dark:group-hover:text-violet-400">{topic.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Med'}</span>
                            {clearedModules[topic.slug] && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">✓ Done</span>
                            )}
                          </div>
                          <span className="text-violet-500 group-hover:translate-x-1 transition-transform text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {/* Cold start: onboarding picked a course but nothing studied yet —
                give the promised "start your study path" entry point. */}
            {courseProgress.length === 0 && pathTopic && (
              <div className="bg-gradient-to-r from-accent to-accent-secondary rounded-xl p-6 shadow-sm text-white">
                <h2 className="text-xl font-bold mb-1"><Rocket className="inline w-5 h-5 mr-1.5 -mt-1" aria-hidden /> Start your study path</h2>
                <p className="text-sm text-accent-light mb-4">
                  Your course is ready — jump into your first topic and your progress will show up here.
                </p>
                <Link
                  href={`/topics/${pathTopic}`}
                  className="inline-block px-5 py-2.5 bg-white text-accent-hover font-semibold rounded-lg hover:bg-accent-subtle transition-colors"
                >
                  Start your first topic →
                </Link>
              </div>
            )}

            {/* Course Progress */}
            {courseProgress.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4"><BookOpen className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Course Progress</h2>
                <div className="space-y-4">
                  {courseProgress.map((course) => {
                    const total = course.completed + course.mastered + course.inProgress
                    const done = course.completed + course.mastered
                    const pct = total > 0 ? Math.round((done / total) * 100) : 0
                    return (
                      <Link key={course.slug} href={`/courses/${course.slug}`} className="block group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">{course.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{done}/{total} topics · {pct}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-accent to-blue-500 h-2.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

          </div>
          {/* Overview sidebar — quick actions + what's weak */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4"><Zap className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/flashcards/review/start" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent-subtle to-blue-50 dark:from-accent-light/20 dark:to-blue-900/20 border border-accent-light dark:border-accent-hover hover:border-accent-muted transition-colors group">
                  <span className="text-2xl">🎴</span>
                  <div>
                    <p className="font-medium text-accent-dark dark:text-accent-dark">Review Flashcards</p>
                    <p className="text-xs text-accent dark:text-accent-muted">{overview && overview.dueFlashcards > 0 ? `${overview.dueFlashcards} cards due` : 'All caught up!'}</p>
                  </div>
                </Link>
                <Link href="/competitive" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 hover:border-green-300 transition-colors group">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-200">Competitive Mode</p>
                    <p className="text-xs text-green-600 dark:text-green-400">Challenge AI or other students</p>
                  </div>
                </Link>
                <Link href="/topics" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700 hover:border-amber-300 transition-colors group">
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="font-medium text-amber-900 dark:text-amber-200">Browse Topics</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400">Explore all study materials</p>
                  </div>
                </Link>
                <div className="p-3">
                  <RandomPracticeButton />
                </div>
              </div>
            </div>

            {/* Weak Topics (#133) */}
            <WeakTopicsDashboard />
          </div>
        </div>
        )}

        {/* ============ PROGRESS: how you're doing ============ */}
        {tab === 'progress' && (
        <div role="tabpanel" id="dashboard-tabpanel-progress" aria-labelledby="dashboard-tab-progress" className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Charts */}
            <ProgressCharts />

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white"><Trophy className="inline w-5 h-5 mr-1.5 -mt-1 text-amber-500" aria-hidden /> Achievements</h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{achievementStats.unlocked}/{achievementStats.total} unlocked</span>
                  <Link href="/achievements" className="text-sm font-semibold text-accent hover:text-accent-hover">View All →</Link>
                </div>
              </div>
              {achievements.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">Complete topics, review flashcards, and build streaks to earn achievements!</p>
              ) : (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {achievements.slice(0, 12).map((a) => (
                    <div
                      key={a.id}
                      title={`${a.name}: ${a.description}${a.unlocked ? '' : ' (Locked)'}`}
                      aria-label={`${a.name}: ${a.description}${a.unlocked ? '' : ' (locked)'}`}
                      className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                        a.unlocked ? 'bg-accent-subtle dark:bg-accent-light/20 border border-accent-light dark:border-accent-hover' : 'opacity-40 grayscale'
                      }`}
                    >
                      <span className="text-2xl" aria-hidden="true">{a.icon}</span>
                      <span className="text-[10px] text-center text-gray-600 dark:text-gray-400 mt-1 leading-tight">{a.name}</span>
                      {!a.unlocked && <span className="sr-only">(locked)</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4"><Clock className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Recent Activity</h2>
              {recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">📖</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">No activity yet! Start learning to see your progress here.</p>
                  <Link href="/" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-lg font-medium hover:from-accent-hover hover:to-accent-secondary-hover transition-all">Browse Courses →</Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {recentActivity.map((activity, i) => (
                    <Link key={i} href={`/topics/${activity.topicSlug}`} className="flex items-center justify-between py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 -mx-2 px-2 rounded-lg transition-colors group">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white group-hover:text-accent truncate transition-colors">{activity.topicTitle}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.courseName}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor(activity.status)}`}>{statusLabel(activity.status)}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{timeAgo(activity.lastAccessed)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-6">
            {/* Progress Comparison (#153) — advanced analytics, paid */}
            <PaidAnalyticsGate label="Peer comparison">
              <ProgressComparison />
            </PaidAnalyticsGate>

            {/* Six Sigma performance analytics — advanced, paid (component self-gates).
                topicSlug="all" aggregates the user's results across every topic. */}
            {session?.user?.id && (
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3"><TrendingUp className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> Performance Analytics</h3>
                <SixSigmaDashboard topicSlug="all" userId={session.user.id} />
              </div>
            )}

            {/* Study Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4"><BarChart3 className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> Study Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Topics Started</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{overview?.topicsStarted ?? 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">In Progress</span>
                  <span className="font-semibold text-blue-600">{overview?.topicsInProgress ?? 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Completed</span>
                  <span className="font-semibold text-green-600">{overview?.topicsCompleted ?? 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Mastered</span>
                  <span className="font-semibold text-yellow-600">{overview?.topicsMastered ?? 0}</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-3 flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Time Studied</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {overview && overview.totalTimeSpentMinutes > 60
                      ? `${Math.floor(overview.totalTimeSpentMinutes / 60)}h ${overview.totalTimeSpentMinutes % 60}m`
                      : `${overview?.totalTimeSpentMinutes ?? 0}m`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* ============ PRACTICE: tools to drill ============ */}
        {tab === 'practice' && (
        <div role="tabpanel" id="dashboard-tabpanel-practice" aria-labelledby="dashboard-tab-practice" className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Study Planner */}
            <StudyPlanner />

            {/* Weekly Challenges */}
            <ChallengesWidget />
          </div>
          <div className="space-y-6">
            {/* Quick Flashcard Review */}
            <FlashcardStudySession />

            {/* Bookmarks (server-synced) */}
            {bookmarks.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4"><Bookmark className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> Saved Lessons</h3>
                <div className="space-y-2">
                  {bookmarks.slice(0, 5).map((bookmark) => (
                    <Link
                      key={`${bookmark.topicSlug}-${bookmark.part}`}
                      href={`/topics/${bookmark.topicSlug}?part=${bookmark.part}`}
                      className="flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors group"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-accent truncate">{bookmark.title}</span>
                      <button
                        onClick={(e) => { e.preventDefault(); removeBookmark(bookmark.topicSlug, bookmark.part) }}
                        className="text-gray-500 hover:text-red-500 dark:text-gray-400 transition-colors ml-2 flex-shrink-0"
                        title="Remove bookmark"
                        aria-label={`Remove bookmark for ${bookmark.title}`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </Link>
                  ))}
                  {bookmarks.length > 5 && <p className="text-xs text-gray-500 dark:text-gray-400 pt-1">+{bookmarks.length - 5} more saved</p>}
                </div>
              </div>
            )}

            {/* My Notes (server-synced per-topic notes) */}
            {notes.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 dark:text-white"><NotebookPen className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> My Notes</h3>
                  <Link href="/notes" className="text-xs font-medium text-accent hover:underline">View all →</Link>
                </div>
                <div className="space-y-2">
                  {notes.slice(0, 5).map((note) => (
                    <Link
                      key={note.topicSlug}
                      href={`/topics/${note.topicSlug}`}
                      className="block p-2 -mx-2 rounded-lg hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors group"
                    >
                      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-accent truncate">{note.topicTitle}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">{note.content.replace(/\s+/g, ' ').trim().slice(0, 90) || (note.drawing ? '🖊️ Hand-drawn sketch' : 'Empty note')}</span>
                    </Link>
                  ))}
                  {notes.length > 5 && <p className="text-xs text-gray-500 dark:text-gray-400 pt-1">+{notes.length - 5} more</p>}
                </div>
              </div>
            )}
          </div>
        </div>
        )}

        {/* ============ EXTRAS: gamification & social ============ */}
        {tab === 'extras' && (
        <div role="tabpanel" id="dashboard-tabpanel-extras" aria-labelledby="dashboard-tab-extras" className="grid gap-6 sm:grid-cols-2">
          {/* Challenge a Friend */}
          <ChallengeAFriend />
          {/* Seasonal Events */}
          <SeasonalEvents />
          {/* Study Heatmap */}
          <PaidAnalyticsGate label="Study heatmap">
            <StudyHeatmap />
          </PaidAnalyticsGate>
          {/* Pomodoro Timer (#130) */}
          <PomodoroTimer />
        </div>
        )}
        </>
        )}
      </div>

      {/* Dashboard Tutorial (#151) */}
      <DashboardTutorial />
    </div>
  )
}

export default function DashboardPage() {
  // useSearchParams() in a client page must be rendered below a Suspense boundary (Next 15)
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  )
}
