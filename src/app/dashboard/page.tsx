'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ClipboardList, BookOpen, Zap, Trophy, Clock, TrendingUp, BarChart3, Bookmark, Play, Layers, NotebookPen, School, Mail, AlertTriangle, Gamepad2, CheckCircle2, Circle, Target, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import AvatarDisplay from '@/components/AvatarDisplay'
import { AvatarData } from '@/types/avatar'
import ProgressRing from '@/components/ProgressRing'
import LiveNowBanner from '@/components/LiveNowBanner'
import AchievementToast from '@/components/AchievementToast'
import ProgressCharts from '@/components/ProgressCharts'
import StudyPlanner from '@/components/StudyPlanner'
import ChallengesWidget from '@/components/ChallengesWidget'
import StreakNotification from '@/components/StreakNotification'
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton'
import EmptyState from '@/components/dashboard/EmptyState'
import EngagementStrip from '@/components/dashboard/EngagementStrip'
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
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import NextStepCard from '@/components/dashboard/NextStepCard'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'
import { deckDisplayName, type ContextOption } from '@/components/StudyModeSwitcher'
import {
  FLASHCARD_REVIEW_HREF,
  isFirstVisit,
  pickContinueTopic,
  resolveNextStep,
  studyPlanTopicHref,
  type NextStepClassDiagnostic,
  type NextStepCourse,
} from '@/lib/dashboard-next-step'
import { courseDiagnosticForSlug } from '@/lib/student-courses'
import { getCourseHref } from '@/data/course-metadata'

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
  /** The student's chosen / most-studied course (for the next step). */
  primaryCourse?: { slug: string; name: string } | null
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
  // Pending class diagnostics (same endpoint ClassDiagnosticBanner uses) — an
  // input to the one "Your next step" card.
  const [classDiags, setClassDiags] = useState<(NextStepClassDiagnostic & { id: string })[]>([])
  // The daily question is a chip in the "Also today" row that expands in place.
  const [showDailyQuestion, setShowDailyQuestion] = useState(false)
  // The active flashcard deck (study mode), shown on the flashcard card.
  const [activeDeck, setActiveDeck] = useState<ContextOption | null>(null)
  const [showTutorial, setShowTutorial] = useState(false)
  const [pathTopic, setPathTopic] = useState<string | null>(null)
  const [achievements, setAchievements] = useState<AchievementData[]>([])
  const [achievementStats, setAchievementStats] = useState({ unlocked: 0, total: 0 })
  const [newAchievements, setNewAchievements] = useState<string[]>([])
  /**
   * Diagnostic study plans, one per course the student has a diagnostic in.
   *
   * This replaced five separate per-course states (AP Chem, Calc AB, Calc BC,
   * SAT, MCAT) plus a cleared-modules lookup. Because each course had to be
   * hand-wired here, the other 28 courses with diagnostics had no plan at all.
   */
  const [plansLoaded, setPlansLoaded] = useState(false)
  const [studyPlans, setStudyPlans] = useState<{
    courseKey: string
    label: string
    diagnosticRoute: string
    gated: boolean
    canRetakeDiagnostic?: boolean
    requiredScorePercent: number
    topics: {
      slug: string
      name: string
      priority: 'high' | 'medium' | 'low'
      topicPath: string
      isSatisfied: boolean
    }[]
    summary: { total: number; completed: number; pending: number }
  }[]>([])

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
    const [dashRes, avatarRes, assignRes, bookmarkRes, achieveRes, onboardRes, notesRes, classDiagRes] = await Promise.allSettled([
      fetch('/api/dashboard'),
      fetch('/api/user/avatar'),
      fetch('/api/student/assignments'),
      fetch('/api/bookmarks'),
      fetch('/api/achievements'),
      fetch('/api/onboarding'),
      fetch('/api/notes'),
      fetch('/api/class-diagnostics/pending', { cache: 'no-store' }),
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
      // ?from=onboarding means the user just finished or skipped the wizard —
      // never bounce them straight back (the skip is also saved server-side,
      // this covers a failed save so it can't loop).
      if (!d.hasCompletedOnboarding && searchParams.get('from') !== 'onboarding') {
        router.push('/onboarding')
        return
      }
      // Keep the study path so the cold-start card can point at the next topic.
      if (d.learningPath?.currentTopic) setPathTopic(d.learningPath.currentTopic)
    }
    if (classDiagRes.status === 'fulfilled' && classDiagRes.value.ok) {
      try {
        const d = await classDiagRes.value.json()
        setClassDiags(Array.isArray(d?.pending) ? d.pending : [])
      } catch { /* silent */ }
    }

    // Core stats/progress have settled — paint the dashboard now. Everything
    // below fills in after the initial render instead of blocking it.
    setLoading(false)

    // One call covers every course the student has a diagnostic in, with
    // per-topic done/pending already computed server-side. This replaced six
    // sequential fetches (four course histories, the MCAT plan, and a
    // module-status lookup) that between them still only covered five courses.
    // The active deck rides along (it only labels the flashcard card).
    const [planRes, deckRes] = await Promise.allSettled([
      fetch('/api/study-plan/plan-status'),
      fetch('/api/study-context', { cache: 'no-store' }),
    ])
    try {
      if (planRes.status === 'fulfilled' && planRes.value.ok) {
        const d = await planRes.value.json()
        setStudyPlans(Array.isArray(d.plans) ? d.plans : [])
      }
    } catch { /* silent */ }
    // Resolved either way — the next-step card stops waiting on a failure.
    setPlansLoaded(true)
    try {
      if (deckRes.status === 'fulfilled' && deckRes.value.ok) {
        const d = await deckRes.value.json()
        const active = (d.contexts as ContextOption[] | undefined)?.find((c) => c.key === d.active)
        if (active) setActiveDeck(active)
      }
    } catch { /* silent */ }

    // Check for new achievements — deliberately after setLoading(false) so the
    // POST + re-GET never sit in the first paint's critical path.
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
      case 'MASTERED': return <><Trophy className="inline w-3 h-3 mr-1 -mt-0.5" aria-hidden /> Mastered</>
      case 'COMPLETED': return <><CheckCircle2 className="inline w-3 h-3 mr-1 -mt-0.5" aria-hidden /> Completed</>
      case 'IN_PROGRESS': return <><BookOpen className="inline w-3 h-3 mr-1 -mt-0.5" aria-hidden /> In Progress</>
      default: return <><Circle className="inline w-3 h-3 mr-1 -mt-0.5" aria-hidden /> Not Started</>
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

  // ── The one "Your next step" (see src/lib/dashboard-next-step.ts) ──
  const dueFlashcards = overview?.dueFlashcards ?? 0
  const totalFlashcards = overview?.totalFlashcards ?? 0
  const primaryCourse = data?.primaryCourse ?? null
  const primaryDiagnostic = courseDiagnosticForSlug(primaryCourse?.slug)
  const preferredCourse: NextStepCourse | null = primaryCourse
    ? {
        key: primaryDiagnostic?.key ?? null,
        label: primaryDiagnostic?.label ?? primaryCourse.name,
        diagnosticHref: primaryDiagnostic?.diagnosticHref ?? null,
        courseHref: getCourseHref(primaryCourse.slug),
      }
    : null
  const nextStep = resolveNextStep({
    pendingAssignments,
    classDiagnostics: classDiags,
    dueFlashcards,
    plans: plansLoaded ? studyPlans : null,
    preferredCourse,
    firstTopicSlug: pathTopic,
  })
  // Continue: the latest topic that isn't cleared, and isn't the next step.
  const clearedSlugs = new Set(studyPlans.flatMap((p) => p.topics.filter((t) => t.isSatisfied).map((t) => t.slug)))
  const continueTopic = pickContinueTopic(
    recentActivity,
    clearedSlugs,
    nextStep.kind === 'plan-topic' ? nextStep.topic.slug : null,
  )
  const firstVisit = isFirstVisit({
    topicsStarted: overview?.topicsStarted ?? 0,
    totalFlashcards,
    longestStreak: streak?.longest ?? 0,
    hasPlans: studyPlans.length > 0,
  })
  const deckName = activeDeck ? deckDisplayName(activeDeck) : null

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
                {firstVisit ? 'Welcome' : 'Welcome back'}, {session.user?.name || 'Student'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {firstVisit ? 'Your first step is right below.' : 'Here’s your next step and your progress'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* Quiet secondary actions share one outlined style. The page's one
                primary button lives in the "Your next step" card below. */}
            <Link data-tour="join-class" href="/join-class" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              <School className="w-4 h-4" aria-hidden /> Join a Class
            </Link>
            <Link href="/profile" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              Edit Profile
            </Link>
            {/* A student with no cards yet gets no flashcard button at all —
                "Review Flashcards" into an empty deck was a dead end. */}
            {totalFlashcards > 0 && (
              <Link href={FLASHCARD_REVIEW_HREF} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
                <Layers className="w-4 h-4" aria-hidden /> Review flashcards
                {dueFlashcards > 0 && (
                  <span className="ml-0.5 px-2 py-0.5 bg-accent-subtle dark:bg-accent-light/20 text-accent-hover dark:text-accent-muted rounded-full text-xs font-semibold">{dueFlashcards} due</span>
                )}
              </Link>
            )}
            <button
              onClick={() => setShowTutorial(true)}
              title="How StudyMondo works (replay the tour)"
              aria-label="How StudyMondo works (replay the tour)"
              className="p-2 rounded-lg text-gray-400 hover:text-accent hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors"
            >
              <HelpCircle className="w-5 h-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Email verification — deliberately a slim one-line bar, not a card,
            so it never competes with time-critical items below. */}
        {session?.user?.email && !session?.user?.emailVerified && (
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 text-sm">
            <Mail className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
            <span className="text-amber-900 dark:text-amber-200">
              Verify {session.user.email} to secure your account.
            </span>
            {verificationSent ? (
              <span className="font-medium text-green-700 dark:text-green-400">
                <CheckCircle2 className="inline w-4 h-4 mr-1 -mt-0.5" aria-hidden />Verification email sent!
              </span>
            ) : (
              <>
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
                  className="font-semibold text-amber-800 dark:text-amber-300 underline underline-offset-2 hover:text-amber-900 dark:hover:text-amber-200 disabled:opacity-50 transition-colors"
                >
                  {sendingVerification ? 'Sending...' : 'Send verification email'}
                </button>
                {verificationError && (
                  <span role="alert" className="text-xs font-medium text-red-700 dark:text-red-400">
                    Couldn&apos;t send it — please try again.
                  </span>
                )}
              </>
            )}
          </div>
        )}

        {/* ONE next step above the stats (assignment > class diagnostic >
            cards due > next study-plan topic > the diagnostic). LiveNowBanner
            stays too (time-critical). Everything else that is due today is a
            compact chip in the "Also today" row, never a second primary card.
            This all sits deliberately ABOVE the fetchError guard further down —
            each input loads from its own endpoint, so a failure of the
            /api/dashboard stats payload must not hide a live session, an
            assigned diagnostic, or due work. */}

        {/* Live class sessions — shows only while an enrolled class is live */}
        <LiveNowBanner />

        <NextStepCard step={nextStep} />

        {/* Also today — whatever the next-step card didn't take */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Also today</span>
          {nextStep.kind !== 'class-diagnostic' && classDiags.length > 0 && (
            <Link
              href={classDiags[0].href}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-accent-muted hover:text-accent transition-colors"
            >
              <NotebookPen className="w-4 h-4 text-accent" aria-hidden />
              Class diagnostic due{classDiags.length > 1 ? ` (${classDiags.length})` : ''}
            </Link>
          )}
          {nextStep.kind === 'class-diagnostic' && classDiags.length > 1 && (
            <Link
              href={classDiags[1].href}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-accent-muted hover:text-accent transition-colors"
            >
              <NotebookPen className="w-4 h-4 text-accent" aria-hidden />
              {classDiags.length - 1} more class diagnostic{classDiags.length > 2 ? 's' : ''}
            </Link>
          )}
          {nextStep.kind !== 'flashcards' && dueFlashcards > 0 && (
            <Link href={FLASHCARD_REVIEW_HREF} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-accent-muted hover:text-accent transition-colors">
              <Layers className="w-4 h-4 text-accent" aria-hidden />
              {dueFlashcards} flashcard{dueFlashcards !== 1 ? 's' : ''} due
            </Link>
          )}
          <button
            onClick={() => setShowDailyQuestion((v) => !v)}
            aria-expanded={showDailyQuestion}
            aria-controls="dashboard-daily-question"
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-accent-muted hover:text-accent transition-colors"
          >
            <Target className="w-4 h-4 text-accent" aria-hidden />
            Daily question
            {showDailyQuestion
              ? <ChevronUp className="w-3.5 h-3.5" aria-hidden />
              : <ChevronDown className="w-3.5 h-3.5" aria-hidden />}
          </button>
        </div>

        {/* Daily question — from the student's own course, expanded on demand */}
        {showDailyQuestion && (
          <div id="dashboard-daily-question" className="mb-6">
            <DailyChallenge />
          </div>
        )}

        {/* Streak Notification (#122) */}
        <StreakNotification />

        {fetchError ? (
        /* Dashboard payload failed — show an inline error instead of zeroed stats */
        <div role="alert" className="bg-white dark:bg-gray-800 rounded-xl border border-red-200 dark:border-red-800 p-8 text-center shadow-sm">
          <AlertTriangle className="w-10 h-10 mx-auto mb-3 text-red-500" aria-hidden="true" />
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
        {/* Stats Grid with Progress Rings — every tile links somewhere useful */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Link href="/dashboard?tab=progress" className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm flex items-center gap-3 hover:border-accent-muted hover:shadow-md transition-all group">
            <ProgressRing percentage={completionPct} size={48} strokeWidth={5} color="var(--accent)" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{overview?.topicsCompleted ?? 0}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors">Completed</div>
            </div>
          </Link>
          <Link href="/dashboard?tab=progress" className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm flex items-center gap-3 hover:border-accent-muted hover:shadow-md transition-all group">
            <ProgressRing percentage={masteryPct} size={48} strokeWidth={5} color="var(--accent-secondary)" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{overview?.topicsMastered ?? 0}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors">Mastered</div>
            </div>
          </Link>
          <Link href={FLASHCARD_REVIEW_HREF} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:border-accent-muted hover:shadow-md transition-all group">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">{overview?.totalFlashcards ?? 0}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-accent transition-colors">Flashcards studied</div>
          </Link>
          <Link href="/dashboard?tab=extras" className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:border-accent-muted hover:shadow-md transition-all group">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{streak?.current ?? 0}<span aria-hidden>🔥</span></div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-accent transition-colors">Day Streak</div>
          </Link>
        </div>

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
        </div>

        {/* ============ OVERVIEW: what to study now ============ */}
        {tab === 'overview' && (
        <div role="tabpanel" id="dashboard-tabpanel-overview" aria-labelledby="dashboard-tab-overview" className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Continue where you left off — the latest topic that is NOT
                cleared yet (and isn't already the next step above). Opens the
                interactive lesson, where the entrance quiz, lesson parts and
                exit quiz live. Neutral on purpose: the next-step card is the
                page's one primary action. */}
            {continueTopic && (
              <div data-tour="continue" className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                    Continue where you left off
                  </p>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">{continueTopic.topicTitle}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {continueTopic.courseName}
                    {continueTopic.masteryLevel > 0 && (
                      <> · {Math.round(continueTopic.masteryLevel * 100)}% through the lesson</>
                    )}
                  </p>
                </div>
                <Link
                  href={continueTopic.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-accent-muted dark:border-accent px-4 py-2 text-sm font-semibold text-accent-hover dark:text-accent-muted hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors"
                >
                  <Play className="w-4 h-4" aria-hidden /> Continue topic
                </Link>
              </div>
            )}

            {/* Diagnostic study plans, for EVERY course the student has taken a
                diagnostic in. This was five courses written out one after
                another, each with its own state, its own fetch and its own copy
                of this markup — which is why the other 28 silently had none. */}
            {studyPlans.length > 0 && (
              <div data-tour="study-plans" className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  <ClipboardList className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Your study plans
                  <HelpLink article={HELP_ARTICLES.diagnosticsAndStudyPlans} label="How study plans work" className="ml-1.5" />
                </h2>
                {studyPlans.map((plan) => (
                  <div key={plan.courseKey} className="bg-white dark:bg-gray-800 rounded-xl border-2 border-accent-light dark:border-accent-hover p-5 shadow-sm">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">{plan.label}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {plan.summary.pending === 0
                            ? 'Every topic cleared'
                            : `${plan.summary.completed} of ${plan.summary.total} cleared`}
                        </span>
                        <Link href={plan.diagnosticRoute} className="text-xs text-accent hover:underline">View plan →</Link>
                      </div>
                    </div>
                    <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                      Clear a topic by scoring {TOPIC_CLEAR_PERCENT}% or better on its exit quiz (or by testing out on its entrance quiz).{' '}
                      {plan.gated
                        ? 'Clear every topic to unlock your diagnostic retake.'
                        : 'When every topic is cleared, retake the diagnostic to see your growth and get a new plan.'}
                    </p>
                    <div className="space-y-1.5">
                      {plan.topics.map((topic, i) => (
                        <Link
                          key={topic.slug}
                          href={studyPlanTopicHref(topic, plan.courseKey)}
                          className={`flex items-center justify-between rounded-lg border border-accent-light dark:border-accent-hover bg-accent-subtle dark:bg-accent-light/20 px-3 py-2 hover:border-accent-muted transition-colors group ${topic.isSatisfied ? 'opacity-60' : ''}`}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-light dark:bg-accent-hover text-[10px] font-bold text-accent-hover dark:text-white">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-accent-hover">{topic.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Med'}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.isSatisfied ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                              {topic.isSatisfied ? '✓ Cleared' : 'To do'}
                            </span>
                          </div>
                          <span className="text-accent group-hover:translate-x-1 transition-transform text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {studyPlans.length === 0 && (
              <div data-tour="study-plans" className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  <ClipboardList className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Your study plans
                  <HelpLink article={HELP_ARTICLES.diagnosticsAndStudyPlans} label="How study plans work" className="ml-1.5" />
                </h2>
                <EmptyState
                  icon={ClipboardList}
                  message="Take a course's free diagnostic and your study plan appears here: the topics you most need, in order."
                  ctaHref={preferredCourse?.diagnosticHref ?? '/topics'}
                  ctaLabel={preferredCourse?.diagnosticHref ? `Take the ${preferredCourse.label} diagnostic` : 'Find your course'}
                  compact
                />
              </div>
            )}

            {/* Course Progress */}
            {courseProgress.length > 0 && (
              <div data-tour="course-progress" className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4"><BookOpen className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Course progress</h2>
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
            {courseProgress.length === 0 && (
              <div data-tour="course-progress" className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2"><BookOpen className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Course progress</h2>
                <EmptyState
                  icon={BookOpen}
                  message="Start any topic and your course progress will show up here."
                  ctaHref={pathTopic ? `/topics/${pathTopic}/interactive` : '/topics'}
                  ctaLabel={pathTopic ? 'Start your first topic' : 'Browse courses'}
                  compact
                />
              </div>
            )}

            {/* Streak, weekly XP, leaderboard — deliberately BELOW the study
                plans and course progress: motivation, not the next step. */}
            <EngagementStrip streak={streak?.current ?? 0} />

          </div>
          {/* Overview sidebar — quick actions + what's weak */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4"><Zap className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> Quick Actions</h3>
              <div className="space-y-3">
                <Link data-tour="flashcards" href={FLASHCARD_REVIEW_HREF} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent-subtle to-blue-50 dark:from-accent-light/20 dark:to-blue-900/20 border border-accent-light dark:border-accent-hover hover:border-accent-muted transition-colors group">
                  <Layers className="w-6 h-6 text-accent shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="font-medium text-accent-dark dark:text-accent-muted">Review flashcards</p>
                    <p className="text-xs text-accent dark:text-accent-muted">
                      {totalFlashcards === 0
                        ? 'Clear a topic (lesson + exit quiz) to unlock its cards'
                        : dueFlashcards > 0
                          ? `${dueFlashcards} card${dueFlashcards === 1 ? '' : 's'} due today`
                          : 'Nothing due right now'}
                    </p>
                    {deckName && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate" title="Change decks on the flashcard review page">
                        Deck: {deckName}
                      </p>
                    )}
                  </div>
                </Link>
                <Link data-tour="competitive" href="/competitive" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 hover:border-green-300 transition-colors group">
                  <Gamepad2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-200">Competitive Mode</p>
                    <p className="text-xs text-green-600 dark:text-green-400">Optional: race the AI or other students</p>
                  </div>
                </Link>
                <Link href="/topics" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700 hover:border-amber-300 transition-colors group">
                  <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden />
                  <div>
                    <p className="font-medium text-amber-900 dark:text-amber-200">Browse courses</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400">Every course and its topics</p>
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
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
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
                      <span className="text-xs text-center text-gray-600 dark:text-gray-400 mt-1 leading-tight">{a.name}</span>
                      {!a.unlocked && <span className="sr-only">(locked)</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activity — the full cross-activity history lives on its
                own page, linked from this card's header (moved out of the tab
                strip, where its ml-auto placement wrapped badly on mobile). */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white"><Clock className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Recent Activity</h2>
                <Link href="/progress" className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors">Full history →</Link>
              </div>
              {recentActivity.length === 0 ? (
                <EmptyState
                  icon={BookOpen}
                  message="No activity yet! Start learning to see your progress here."
                  ctaHref="/"
                  ctaLabel="Browse courses"
                />
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
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4"><Bookmark className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> Saved Lessons</h3>
              {bookmarks.length === 0 ? (
                <EmptyState
                  icon={Bookmark}
                  message="Bookmark a lesson while studying and it will show up here."
                  ctaHref="/topics"
                  ctaLabel="Browse topics"
                  compact
                />
              ) : (
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
              )}
            </div>

            {/* My Notes (server-synced per-topic notes) */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 dark:text-white"><NotebookPen className="inline w-4 h-4 mr-1 -mt-0.5 text-accent" aria-hidden /> My Notes</h3>
                {notes.length > 0 && <Link href="/notes" className="text-xs font-medium text-accent hover:underline">View all →</Link>}
              </div>
              {notes.length === 0 ? (
                <EmptyState
                  icon={NotebookPen}
                  message="Notes you take on any topic are saved here."
                  ctaHref="/topics"
                  ctaLabel="Find a topic"
                  compact
                />
              ) : (
                <div className="space-y-2">
                  {notes.slice(0, 5).map((note) => (
                    <Link
                      key={note.topicSlug}
                      href={`/topics/${note.topicSlug}`}
                      className="block p-2 -mx-2 rounded-lg hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors group"
                    >
                      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-accent truncate">{note.topicTitle}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">{note.content.replace(/\s+/g, ' ').trim().slice(0, 90) || (note.drawing ? 'Hand-drawn sketch' : 'Empty note')}</span>
                    </Link>
                  ))}
                  {notes.length > 5 && <p className="text-xs text-gray-500 dark:text-gray-400 pt-1">+{notes.length - 5} more</p>}
                </div>
              )}
            </div>
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

      {/* Dashboard Tutorial (#151) — replayable via the header help button */}
      <DashboardTutorial forceOpen={showTutorial} onClose={() => setShowTutorial(false)} />
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
