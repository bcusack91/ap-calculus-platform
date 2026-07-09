'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ClassroomAnnouncements from '@/components/ClassroomAnnouncements'

interface AssignmentItem {
  id: string
  title: string
  description: string | null
  type: 'INTERACTIVE_LESSON' | 'FLASHCARD_REVIEW' | 'QUIZ' | 'COMPETITIVE_PRACTICE'
  topicSlug: string | null
  topicSlugs: string[] | null
  flashcardSetId: string | null
  dueDate: string | null
  maxAttempts: number
  requiredScore: number | null
  createdAt: string
  classroom: { id: string; name: string; teacher: string }
  submission: {
    id: string | null
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE'
    score: number | null
    attempts: number
    completedAt: string | null
  }
}

interface ClassroomInfo {
  id: string
  name: string
  teacher: string
}

interface UpcomingCompetition {
  id: string
  title: string
  scheduledAt: string
  endsAt: string
  duration: number
  classroom: { id: string; name: string }
}

const TYPE_LABELS: Record<string, { label: string; icon: string }> = {
  INTERACTIVE_LESSON: { label: 'Interactive Lesson', icon: '📖' },
  FLASHCARD_REVIEW: { label: 'Flashcard Review', icon: '🃏' },
  QUIZ: { label: 'Quiz', icon: '📝' },
  COMPETITIVE_PRACTICE: { label: 'Competitive Practice', icon: '⚔️' },
}

const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  NOT_STARTED: { bg: 'bg-gray-100 dark:bg-gray-700', text: 'text-gray-600 dark:text-gray-400', label: 'Not Started' },
  IN_PROGRESS: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', label: 'In Progress' },
  COMPLETED: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', label: 'Completed' },
  OVERDUE: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', label: 'Overdue' },
}

type FilterStatus = 'all' | 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE'

function getActionUrl(a: AssignmentItem): string {
  const slug = a.topicSlug
  switch (a.type) {
    case 'INTERACTIVE_LESSON':
      return slug ? `/topics/${slug}/interactive` : '/topics'
    case 'FLASHCARD_REVIEW':
      // Teacher-created set → the set viewer (carrying the assignment id so the
      // student can mark it studied). Otherwise fall back to topic flashcards.
      if (a.flashcardSetId) return `/flashcard-sets/${a.flashcardSetId}?assignment=${a.id}`
      return slug ? `/flashcards/${slug}` : '/flashcards'
    case 'QUIZ':
      return slug ? `/topics/${slug}` : '/topics'
    case 'COMPETITIVE_PRACTICE':
      return '/competitive'
    default:
      return '/topics'
  }
}

function getActionLabel(a: AssignmentItem): string {
  if (a.submission.status === 'COMPLETED') return 'Review'
  if (a.submission.status === 'IN_PROGRESS') return 'Continue'
  return 'Start'
}

function formatDue(dateStr: string | null): string {
  if (!dateStr) return 'No due date'
  const d = new Date(dateStr)
  const now = new Date()
  const diff = d.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  if (days < 0) return `Overdue by ${Math.abs(days)} day${Math.abs(days) !== 1 ? 's' : ''}`
  if (days === 0) return 'Due today'
  if (days === 1) return 'Due tomorrow'
  if (days <= 7) return `Due in ${days} days`
  return `Due ${d.toLocaleDateString()}`
}

export default function StudentAssignmentsPage() {
  const { status: authStatus } = useSession()
  const router = useRouter()
  const [assignments, setAssignments] = useState<AssignmentItem[]>([])
  const [classrooms, setClassrooms] = useState<ClassroomInfo[]>([])
  const [upcomingCompetitions, setUpcomingCompetitions] = useState<UpcomingCompetition[]>([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')
  const [filterClassroom, setFilterClassroom] = useState<string>('all')

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/assignments')
      return
    }
    if (authStatus === 'authenticated') {
      loadAssignments()
    }
  }, [authStatus, router])

  const loadAssignments = async () => {
    try {
      const res = await fetch('/api/student/assignments')
      if (res.ok) {
        const data = await res.json()
        setAssignments(data.assignments)
        setClassrooms(data.classrooms)
        setUpcomingCompetitions(data.upcomingCompetitions || [])
      }
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  const filtered = assignments.filter((a) => {
    if (filterStatus !== 'all' && a.submission.status !== filterStatus) return false
    if (filterClassroom !== 'all' && a.classroom.id !== filterClassroom) return false
    return true
  })

  const pendingCount = assignments.filter(
    (a) => a.submission.status === 'NOT_STARTED' || a.submission.status === 'IN_PROGRESS'
  ).length
  const overdueCount = assignments.filter((a) => a.submission.status === 'OVERDUE').length
  const completedCount = assignments.filter((a) => a.submission.status === 'COMPLETED').length

  if (authStatus === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/dashboard"
              className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-2 inline-block"
            >
              ← Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Assignments</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {assignments.length === 0
                ? 'No assignments yet'
                : `${pendingCount} pending · ${completedCount} completed${overdueCount > 0 ? ` · ${overdueCount} overdue` : ''}`}
            </p>
          </div>
        </div>

        {/* Upcoming live games — read-only heads-up so students know to be in class */}
        {upcomingCompetitions.length > 0 && (
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-purple-200 dark:border-purple-800 p-5">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">📅 Upcoming live games</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Your teacher will start these in class — be there and ready to join!
            </p>
            <div className="space-y-3">
              {upcomingCompetitions.map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/10"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">⚔️ {c.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{c.classroom.name}</p>
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 font-medium whitespace-nowrap">
                    {new Date(c.scheduledAt).toLocaleString(undefined, {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Class announcements (hidden per classroom when there are none) */}
        {classrooms.length > 0 && (
          <div className="space-y-6 mb-8">
            {classrooms.map((c) => (
              <ClassroomAnnouncements
                key={c.id}
                classroomId={c.id}
                isTeacher={false}
                hideWhenEmpty
                classroomName={c.name}
              />
            ))}
          </div>
        )}

        {assignments.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">No assignments yet</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {classrooms.length === 0
                ? 'Join a classroom to receive assignments from your teacher.'
                : 'Your teacher hasn\'t assigned anything yet. Check back later!'}
            </p>
            {classrooms.length === 0 && (
              <Link
                href="/join-class"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Join a Class
              </Link>
            )}
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as FilterStatus)}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
              >
                <option value="all">All Statuses</option>
                <option value="NOT_STARTED">Not Started</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="OVERDUE">Overdue</option>
              </select>
              {classrooms.length > 1 && (
                <select
                  value={filterClassroom}
                  onChange={(e) => setFilterClassroom(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
                >
                  <option value="all">All Classes</option>
                  {classrooms.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Assignment List */}
            <div className="space-y-4">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  No assignments match the current filters.
                </div>
              ) : (
                filtered.map((a) => {
                  const typeInfo = TYPE_LABELS[a.type] || { label: a.type, icon: '📄' }
                  const statusInfo = STATUS_STYLES[a.submission.status] || STATUS_STYLES.NOT_STARTED

                  return (
                    <div
                      key={a.id}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{typeInfo.icon}</span>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                              {a.title}
                            </h3>
                          </div>
                          {a.description && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
                              {a.description}
                            </p>
                          )}
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                              {typeInfo.label}
                            </span>
                            <span>{a.classroom.name}</span>
                            <span className={a.dueDate && a.submission.status === 'OVERDUE' ? 'text-red-500 font-semibold' : ''}>
                              {formatDue(a.dueDate)}
                            </span>
                            {a.requiredScore !== null && (
                              <span>Required: {Math.round(a.requiredScore * 100)}%</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.bg} ${statusInfo.text}`}
                          >
                            {statusInfo.label}
                            {a.submission.status === 'COMPLETED' && a.submission.score !== null && (
                              <> · {Math.round(a.submission.score * 100)}%</>
                            )}
                          </span>
                          <Link
                            href={getActionUrl(a)}
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                              a.submission.status === 'COMPLETED'
                                ? 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                            }`}
                          >
                            {getActionLabel(a)}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
