'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { PowerUpShop } from '@/components/PowerUps'
import { ChallengeAFriend } from '@/components/ChallengeAFriend'
import AchievementBanner from '@/components/AchievementBanner'

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

interface CourseCard {
  /** Slug used in /competitive/{slug} route. */
  slug: string
  /** Category key for unlock-check membership (matches API). */
  categoryKey: string
  emoji: string
  name: string
  desc: string
  /** Tailwind gradient classes used for the accent ring/header. */
  gradient: string
}

interface CourseCategory {
  id: string
  label: string
  icon: string
  courses: CourseCard[]
}

const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'math',
    label: 'Math',
    icon: '📐',
    courses: [
      { slug: 'ap-calculus-ab', categoryKey: 'ap-calculus-ab', emoji: '∫', name: 'AP Calculus AB', desc: 'Limits, Derivatives & Integrals', gradient: 'from-indigo-500 to-purple-500' },
      { slug: 'ap-calculus-bc', categoryKey: 'ap-calculus-bc', emoji: '∑', name: 'AP Calculus BC', desc: 'Series, Parametric & Polar', gradient: 'from-purple-500 to-pink-500' },
      { slug: 'ap-precalculus', categoryKey: 'ap-precalculus', emoji: '📊', name: 'AP Precalculus', desc: 'Functions & Modeling', gradient: 'from-blue-500 to-indigo-500' },
      { slug: 'algebra-1', categoryKey: 'algebra', emoji: '🧮', name: 'Algebra 1', desc: 'Equations, Functions & Polynomials', gradient: 'from-blue-500 to-cyan-500' },
      { slug: 'geometry', categoryKey: 'geometry', emoji: '📐', name: 'Geometry', desc: 'Angles, Triangles, Circles & Proofs', gradient: 'from-emerald-500 to-teal-500' },
    ],
  },
  {
    id: 'science',
    label: 'Science',
    icon: '🔬',
    courses: [
      { slug: 'ap-biology', categoryKey: 'ap-biology', emoji: '🧬', name: 'AP Biology', desc: 'Cells, Genetics & Evolution', gradient: 'from-green-500 to-emerald-500' },
      { slug: 'ap-chemistry', categoryKey: 'ap-chemistry', emoji: '⚗️', name: 'AP Chemistry', desc: 'Reactions, Bonding & Equilibrium', gradient: 'from-teal-500 to-cyan-500' },
      { slug: 'ap-physics1', categoryKey: 'ap-physics1', emoji: '🚀', name: 'AP Physics 1', desc: 'Kinematics, Forces & Energy', gradient: 'from-orange-500 to-red-500' },
      { slug: 'ap-physics2', categoryKey: 'ap-physics2', emoji: '⚡', name: 'AP Physics 2', desc: 'Electricity, Magnetism & Optics', gradient: 'from-yellow-500 to-orange-500' },
      { slug: 'ap-physics-c-mechanics', categoryKey: 'ap-physics-c-mech', emoji: '🔧', name: 'AP Physics C: Mech', desc: 'Calculus-Based Mechanics', gradient: 'from-amber-500 to-orange-500' },
      { slug: 'ap-physics-c-em', categoryKey: 'ap-physics-c-em', emoji: '🧲', name: 'AP Physics C: E&M', desc: 'Calculus-Based E&M', gradient: 'from-amber-500 to-yellow-500' },
      { slug: 'ap-enviro', categoryKey: 'ap-enviro', emoji: '🌱', name: 'AP Environmental Science', desc: 'Ecosystems, Climate & Sustainability', gradient: 'from-lime-500 to-green-500' },
    ],
  },
  {
    id: 'history',
    label: 'History & Social Science',
    icon: '🏛️',
    courses: [
      { slug: 'ap-world-history', categoryKey: 'ap-world-history', emoji: '🌐', name: 'AP World History', desc: 'Civilizations, Trade & Conflict', gradient: 'from-rose-500 to-red-500' },
      { slug: 'ap-us-history', categoryKey: 'ap-us-history', emoji: '🇺🇸', name: 'AP US History', desc: 'Colonial Era to Modern America', gradient: 'from-red-500 to-blue-600' },
      { slug: 'ap-african-american-studies', categoryKey: 'ap-african-american-studies', emoji: '✊', name: 'AP African American Studies', desc: 'Culture, Identity & Resistance', gradient: 'from-amber-600 to-yellow-600' },
      { slug: 'ap-human-geo', categoryKey: 'ap-human-geo', emoji: '🌍', name: 'AP Human Geography', desc: 'Population, Culture & Urbanization', gradient: 'from-emerald-500 to-teal-500' },
      { slug: 'ap-us-gov', categoryKey: 'ap-us-gov', emoji: '🏛️', name: 'AP US Government', desc: 'Constitution, Federalism & Elections', gradient: 'from-blue-600 to-indigo-600' },
      { slug: 'ap-macro', categoryKey: 'ap-macro', emoji: '📈', name: 'AP Macroeconomics', desc: 'GDP, Fiscal & Monetary Policy', gradient: 'from-emerald-600 to-green-600' },
      { slug: 'ap-micro', categoryKey: 'ap-micro', emoji: '💰', name: 'AP Microeconomics', desc: 'Supply, Demand & Markets', gradient: 'from-green-600 to-lime-600' },
    ],
  },
  {
    id: 'english',
    label: 'English',
    icon: '📚',
    courses: [
      { slug: 'ap-english-lit', categoryKey: 'ap-english-lit', emoji: '📖', name: 'AP English Literature', desc: 'Poetry, Prose & Drama Analysis', gradient: 'from-purple-600 to-fuchsia-600' },
      { slug: 'ap-english-lang', categoryKey: 'ap-english-lang', emoji: '✍️', name: 'AP English Language', desc: 'Rhetoric, Argument & Synthesis', gradient: 'from-fuchsia-500 to-pink-500' },
    ],
  },
  {
    id: 'cs',
    label: 'Computer Science',
    icon: '💻',
    courses: [
      { slug: 'ap-csa', categoryKey: 'ap-csa', emoji: '☕', name: 'AP Computer Science A', desc: 'Java OOP, Arrays & Algorithms', gradient: 'from-slate-600 to-gray-700' },
      { slug: 'ap-csp', categoryKey: 'ap-csp', emoji: '🖥️', name: 'AP CS Principles', desc: 'Data, Internet & Cybersecurity', gradient: 'from-cyan-500 to-blue-500' },
    ],
  },
  {
    id: 'test-prep',
    label: 'Test Prep',
    icon: '📝',
    courses: [
      // 'sat' is a derived unlock-check key: true when ANY of the 4 SAT bank
      // categories (sat-math / sat-reading / the 2 punctuation banks) is unlocked.
      { slug: 'sat', categoryKey: 'sat', emoji: '📝', name: 'SAT Prep', desc: 'Math, Reading & Punctuation', gradient: 'from-blue-600 to-cyan-600' },
    ],
  },
]

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

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/competitive')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      // Fetch-on-mount: both are async, so every setState runs after `await`,
      // never synchronously in the effect body. The set-state-in-effect rule
      // can't see through the async boundary, so scope-disable it here.
      /* eslint-disable react-hooks/set-state-in-effect */
      void checkUnlock()
      void fetchAsyncChallenges()
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, [session, checkUnlock, fetchAsyncChallenges])

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  if (!session) return null

  /* ---- Locked state (kept for parity with old page) ---- */
  if (!unlocked) {
    const masteryPercent = Math.round((requirements?.masteryLevel || 0) * 100)
    const currentTopic = requirements?.currentTopic || ''
    const topicTitle = requirements?.currentTopicTitle || 'a topic'
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🔒</div>
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
                    <span className="text-sm font-semibold text-purple-600">{masteryPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${masteryPercent}%` }}
                    />
                  </div>
                </>
              )}
              <div className="text-left bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">Unlock Requirements (any one)</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${masteryPercent >= 60 ? 'bg-green-100 dark:bg-green-900 text-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                      {masteryPercent >= 60 ? '✓' : '○'}
                    </div>
                    <div>
                      <p className="font-medium">Complete any interactive lesson (60%+ mastery)</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your best progress: {masteryPercent}%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">○</div>
                    <div>
                      <p className="font-medium">Score 70%+ on any entrance quiz</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Take an entrance quiz from any course</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">○</div>
                    <div>
                      <p className="font-medium">Score 60%+ on any diagnostic test</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Take a diagnostic test from any course</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">○</div>
                    <div>
                      <p className="font-medium">Accept a challenge from a friend</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Have a friend send you a challenge link!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">○</div>
                    <div>
                      <p className="font-medium">Ask your teacher for access</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Teachers can grant competitive mode access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {currentTopic ? (
              <button
                onClick={() => router.push(`/topics/${currentTopic}/interactive`)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              >
                Continue Learning: {topicTitle}
              </button>
            ) : (
              <button
                onClick={() => router.push('/topics')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              >
                Browse Topics
              </button>
            )}
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 py-6 sm:p-6">
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
            <div className="hidden sm:block w-40" />
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Competitive Mode
            </h1>
            <button
              onClick={() => router.push('/profile')}
              className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors text-sm font-semibold w-40"
            >
              ✏️ Customize Avatar
            </button>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Pick your course, then choose a topic, mode, and opponent.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {totalAvailable} of {totalCourses} courses unlocked · finish any lesson to unlock more
          </p>
        </div>

        {/* Profile Card */}
        {profile && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-5 sm:p-8 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h2 className="text-xl sm:text-3xl font-bold mb-1">{profile.rank}</h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Current Rank</p>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {profile.overallMMR}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">MMR Rating</p>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-green-600">{profile.wins}W</div>
                <div className="text-xl sm:text-3xl font-bold text-red-600">{profile.losses}L</div>
              </div>
            </div>
          </div>
        )}

        {/* Course Selection — categorized cards */}
        <div className="space-y-8 mb-10">
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
                      {/* Top accent gradient bar */}
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
                          <span className="flex-shrink-0 text-gray-400 text-xs mt-1">🔒</span>
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
              <div className="text-3xl font-bold text-purple-600">{profile.totalMatches}</div>
              <p className="text-gray-600 dark:text-gray-400">Total Matches</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">{profile.winStreak}</div>
              <p className="text-gray-600 dark:text-gray-400">Win Streak</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600">{Math.round(profile.averageAccuracy * 100)}%</div>
              <p className="text-gray-600 dark:text-gray-400">Avg Accuracy</p>
            </div>
          </div>
        )}

        {/* Private Lobby — play head-to-head with a friend */}
        <div className="mt-8 rounded-2xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 p-5 sm:p-6 shadow-xl dark:border-purple-800 dark:from-purple-900/20 dark:to-blue-900/20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">🎮 Private Lobby</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Create a code, invite a friend, and play multiple challenges back-to-back.
              </p>
            </div>
            <Link
              href="/competitive/lobby"
              className="shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Open Lobby →
            </Link>
          </div>
        </div>

        {/* Class Lobby — student joins their teacher's MMR-balanced lobby */}
        <div className="mt-4 rounded-2xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-emerald-50 p-5 sm:p-6 shadow-xl dark:border-indigo-800 dark:from-indigo-900/20 dark:to-emerald-900/20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">⚔️ Class Lobby (Teacher Code)</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Got a 6-character code from your teacher? Enter it here to join the class lobby and get auto-assigned to a balanced team.
              </p>
            </div>
            <Link
              href="/competitive/join"
              className="shrink-0 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Join Class Lobby →
            </Link>
          </div>
        </div>

        {/* Async Challenges Inbox */}
        {profile && (asyncChallenges.sent.length > 0 || asyncChallenges.received.length > 0) && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📬 Your Async Challenges</h3>

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
                          <span className="text-2xl">⚔️</span>
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
                          <span className="text-2xl">⏳</span>
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
                          <span className="text-2xl">✅</span>
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

        {/* Cosmetics Shop. Base the spendable balance ONLY on a monotonic value
            (total wins) — winStreak resets to 0 on any loss, and the spend
            ledger only grows, so including streak would make already-purchased
            cosmetics show phantom debt after a loss. */}
        {profile && (
          <div className="mt-8">
            <PowerUpShop currentXP={profile.wins * 10} />
          </div>
        )}
      </div>
    </div>
  )
}
