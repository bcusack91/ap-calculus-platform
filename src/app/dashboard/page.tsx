'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AvatarDisplay from '@/components/AvatarDisplay'
import { AvatarData } from '@/types/avatar'

interface BookmarkEntry {
  id: string
  title: string
  savedAt: string
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

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null)
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([])
  const [verificationSent, setVerificationSent] = useState(false)
  const [sendingVerification, setSendingVerification] = useState(false)
  const [pendingAssignments, setPendingAssignments] = useState(0)
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/dashboard')
      return
    }
    if (status === 'authenticated') {
      fetchDashboard()
      fetchAvatar()
      fetchAssignments()
    }
    // Load bookmarks from localStorage
    try {
      const saved = localStorage.getItem('studymondo-bookmarks')
      if (saved) setBookmarks(JSON.parse(saved))
    } catch {}
  }, [status, router])

  const fetchDashboard = async () => {
    try {
      const res = await fetch('/api/dashboard')
      if (res.ok) {
        setData(await res.json())
      }
    } catch (err) {
      console.error('Failed to load dashboard:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchAvatar = async () => {
    try {
      const res = await fetch('/api/user/avatar')
      const d = await res.json()
      setAvatarData(d.avatarData)
    } catch {
      // ignore
    }
  }

  const fetchAssignments = async () => {
    try {
      const res = await fetch('/api/student/assignments')
      if (res.ok) {
        const d = await res.json()
        const pending = (d.assignments || []).filter(
          (a: { submission: { status: string } }) =>
            a.submission.status !== 'COMPLETED'
        ).length
        setPendingAssignments(pending)
      }
    } catch {
      // ignore
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session) return null

  const overview = data?.overview
  const streak = data?.streak
  const courseProgress = data?.courseProgress ?? []
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
      case 'MASTERED': return 'text-yellow-700 bg-yellow-100'
      case 'COMPLETED': return 'text-green-700 bg-green-100'
      case 'IN_PROGRESS': return 'text-blue-700 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <AvatarDisplay avatarData={avatarData} size={56} className="ring-2 ring-purple-500 rounded-full" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {session.user?.name || 'Student'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Here&apos;s your learning progress</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/join-class"
              className="px-4 py-2 text-sm font-medium rounded-lg border border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-purple-700 dark:text-purple-300"
            >
              🏫 Join a Class
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              Edit Profile
            </Link>
            <Link
              href="/flashcards/review/dashboard"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Review Flashcards {overview && overview.dueFlashcards > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {overview.dueFlashcards} due
                </span>
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
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                Please verify {session.user.email} to secure your account.
              </p>
            </div>
            {verificationSent ? (
              <span className="text-sm font-medium text-green-700 dark:text-green-400">✅ Verification email sent!</span>
            ) : (
              <button
                onClick={async () => {
                  setSendingVerification(true)
                  try {
                    await fetch('/api/auth/verify-email', { method: 'POST' })
                    setVerificationSent(true)
                  } catch {}
                  setSendingVerification(false)
                }}
                disabled={sendingVerification}
                className="px-4 py-2 text-sm font-semibold bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50"
              >
                {sendingVerification ? 'Sending...' : 'Send Verification Email'}
              </button>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {overview?.topicsCompleted ?? 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Topics Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              {overview?.topicsMastered ?? 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Topics Mastered</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              {overview?.totalFlashcards ?? 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Flashcards Studied</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              {streak?.current ?? 0}🔥
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Day Streak</div>
          </div>
        </div>

        {/* Pending Assignments Banner */}
        {pendingAssignments > 0 && (
          <Link
            href="/assignments"
            className="mb-8 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {pendingAssignments} assignment{pendingAssignments !== 1 ? 's' : ''} pending
                </p>
                <p className="text-sm text-gray-500">From your teachers — click to view</p>
              </div>
            </div>
            <span className="text-purple-600 font-semibold group-hover:translate-x-1 transition-transform">
              View →
            </span>
          </Link>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Progress */}
            {courseProgress.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📚 Course Progress</h2>
                <div className="space-y-4">
                  {courseProgress.map((course) => {
                    const total = course.completed + course.mastered + course.inProgress
                    const done = course.completed + course.mastered
                    const pct = total > 0 ? Math.round((done / total) * 100) : 0
                    return (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                            {course.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {done}/{total} topics · {pct}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🕐 Recent Activity</h2>
              {recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No activity yet! Start learning to see your progress here.</p>
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Browse Courses →
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {recentActivity.map((activity, i) => (
                    <Link
                      key={i}
                      href={`/topics/${activity.topicSlug}`}
                      className="flex items-center justify-between py-3 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors group"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 group-hover:text-purple-600 truncate transition-colors">
                          {activity.topicTitle}
                        </p>
                        <p className="text-xs text-gray-500">{activity.courseName}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor(activity.status)}`}>
                          {statusLabel(activity.status)}
                        </span>
                        <span className="text-xs text-gray-400">
                          {timeAgo(activity.lastAccessed)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/flashcards/review/start"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 hover:border-purple-300 transition-colors group"
                >
                  <span className="text-2xl">🎴</span>
                  <div>
                    <p className="font-medium text-purple-900 group-hover:text-purple-700">Review Flashcards</p>
                    <p className="text-xs text-purple-600">
                      {overview && overview.dueFlashcards > 0
                        ? `${overview.dueFlashcards} cards due`
                        : 'All caught up!'}
                    </p>
                  </div>
                </Link>
                <Link
                  href="/competitive"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 transition-colors group"
                >
                  <span className="text-2xl">🎮</span>
                  <div>
                    <p className="font-medium text-green-900 group-hover:text-green-700">Competitive Mode</p>
                    <p className="text-xs text-green-600">Challenge AI or other students</p>
                  </div>
                </Link>
                <Link
                  href="/topics"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 hover:border-amber-300 transition-colors group"
                >
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="font-medium text-amber-900 group-hover:text-amber-700">Browse Topics</p>
                    <p className="text-xs text-amber-600">Explore all study materials</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Streak Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-sm">
              <h3 className="font-bold mb-2">🔥 Study Streak</h3>
              <div className="flex items-end gap-6">
                <div>
                  <div className="text-4xl font-bold">{streak?.current ?? 0}</div>
                  <div className="text-sm text-orange-100">Current Streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{streak?.longest ?? 0}</div>
                  <div className="text-sm text-orange-100">Best Streak</div>
                </div>
              </div>
              {(streak?.current ?? 0) > 0 && (
                <p className="mt-3 text-sm text-orange-100">
                  Keep it going! Study today to maintain your streak.
                </p>
              )}
            </div>

            {/* Study Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">📊 Study Stats</h3>
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

            {/* Bookmarked Lessons */}
            {bookmarks.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">🔖 Saved Lessons</h3>
                <div className="space-y-2">
                  {bookmarks.slice(0, 5).map((bookmark) => {
                    // Parse the bookmark ID to create a link (format: topicSlug-partN)
                    const parts = bookmark.id.match(/^(.+)-part(\d+)$/)
                    const slug = parts ? parts[1] : bookmark.id
                    const partNum = parts ? parts[2] : '1'
                    return (
                      <Link
                        key={bookmark.id}
                        href={`/topics/${slug}?part=${partNum}`}
                        className="flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-purple-50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 truncate">
                          {bookmark.title}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            const updated = bookmarks.filter(b => b.id !== bookmark.id)
                            setBookmarks(updated)
                            localStorage.setItem('studymondo-bookmarks', JSON.stringify(updated))
                          }}
                          className="text-gray-400 hover:text-red-500 transition-colors ml-2 flex-shrink-0"
                          title="Remove bookmark"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </Link>
                    )
                  })}
                  {bookmarks.length > 5 && (
                    <p className="text-xs text-gray-500 pt-1">
                      +{bookmarks.length - 5} more saved
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
