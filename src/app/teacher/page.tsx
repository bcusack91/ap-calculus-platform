'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { LMSIntegration } from '@/components/LMSIntegration'

interface ClassroomSummary {
  id: string
  name: string
  subject: string | null
  grade: string | null
  joinCode: string
  isActive: boolean
  createdAt: string
  _count: { members: number; assignments: number; competitions: number }
}

interface DashboardData {
  classrooms: ClassroomSummary[]
  stats: { totalClassrooms: number; totalStudents: number; avgMastery: number }
  recentSubmissions: {
    studentName: string
    assignmentTitle: string
    type: string
    score: number | null
    completedAt: string
  }[]
  upcomingAssignments: {
    id: string
    title: string
    classroom: string
    dueDate: string | null
    totalStudents: number
    completedCount: number
    isOverdue: boolean
  }[]
  upcomingCompetitions: {
    id: string
    title: string
    topicSlug: string
    scheduledAt: string
    endsAt: string
    status: string
    classroom: { name: string }
    _count: { participants: number }
  }[]
}

export default function TeacherDashboard() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newClass, setNewClass] = useState({ name: '', subject: '', grade: '', description: '' })
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/teacher')
    }
  }, [status, router])

  const loadDashboard = useCallback(async () => {
    try {
      const res = await fetch('/api/teacher/dashboard')
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.error('Failed to load teacher dashboard:', err)
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    if (session) loadDashboard()
  }, [session, loadDashboard])

  const createClassroom = async () => {
    if (!newClass.name.trim()) return
    setCreating(true)
    try {
      const res = await fetch('/api/teacher/classrooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClass),
      })
      if (res.ok) {
        setShowCreateModal(false)
        setNewClass({ name: '', subject: '', grade: '', description: '' })
        loadDashboard()
      }
    } catch (err) {
      console.error('Failed to create classroom:', err)
    } finally {
      setCreating(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500 dark:text-gray-400">Loading teacher dashboard...</div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Teacher Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back, {session?.user?.name || 'Teacher'}
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            + New Classroom
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-100 dark:border-blue-900/30">
            <div className="text-4xl font-bold text-blue-600">{data.stats.totalClassrooms}</div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Active Classrooms</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-green-100 dark:border-green-900/30">
            <div className="text-4xl font-bold text-green-600">{data.stats.totalStudents}</div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Total Students</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-purple-900/30">
            <div className="text-4xl font-bold text-purple-600">{data.stats.avgMastery}%</div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Avg Student Mastery</div>
          </div>
        </div>

        {/* Classrooms Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Classrooms</h2>
          {data.classrooms.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="text-xl font-bold mb-2">No classrooms yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Create your first classroom to start managing students and assignments.</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
              >
                Create Classroom
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.classrooms.map((cls) => (
                <Link
                  key={cls.id}
                  href={`/teacher/classroom/${cls.id}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-xl group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {cls.name}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold rounded-lg">
                      {cls.joinCode}
                    </span>
                  </div>
                  {(cls.subject || cls.grade) && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {[cls.subject, cls.grade].filter(Boolean).join(' • ')}
                    </p>
                  )}
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>👤 {cls._count.members} students</span>
                    <span>📋 {cls._count.assignments} assignments</span>
                    <span>⚔️ {cls._count.competitions} competitions</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Two-column layout: Upcoming & Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Assignments */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">📋 Upcoming Assignments</h2>
            {data.upcomingAssignments.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-6">No upcoming assignments</p>
            ) : (
              <div className="space-y-3">
                {data.upcomingAssignments.map((a) => (
                  <div
                    key={a.id}
                    className={`p-4 rounded-xl border ${
                      a.isOverdue
                        ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
                        : 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{a.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{a.classroom}</p>
                      </div>
                      <span className="text-xs font-semibold text-green-600">
                        {a.completedCount}/{a.totalStudents} done
                      </span>
                    </div>
                    {a.dueDate && (
                      <p className={`text-xs mt-1 ${a.isOverdue ? 'text-red-600 font-semibold' : 'text-gray-400'}`}>
                        {a.isOverdue ? 'OVERDUE' : 'Due'}: {new Date(a.dueDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Submissions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">📝 Recent Submissions</h2>
            {data.recentSubmissions.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-6">No submissions yet</p>
            ) : (
              <div className="space-y-3">
                {data.recentSubmissions.slice(0, 8).map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">{s.studentName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{s.assignmentTitle}</p>
                    </div>
                    <div className="text-right">
                      {s.score !== null && (
                        <span className={`text-sm font-bold ${s.score >= 80 ? 'text-green-600' : s.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {s.score}%
                        </span>
                      )}
                      {s.completedAt && (
                        <p className="text-xs text-gray-400">
                          {new Date(s.completedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Competitions */}
        {data.upcomingCompetitions.length > 0 && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">⚔️ Upcoming Competitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.upcomingCompetitions.map((c) => (
                <div key={c.id} className="p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{c.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{c.classroom.name} • {c.topicSlug}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                      c.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {c.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {new Date(c.scheduledAt).toLocaleString()} — {new Date(c.endsAt).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{c._count.participants} participants</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Teacher Tools */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🛠️ Teacher Tools</h2>
            <Link
              href="/teacher/tools"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Open All Tools →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '📝', label: 'Quiz Builder', href: '/teacher/tools?tab=quiz-builder' },
              { icon: '📋', label: 'Templates', href: '/teacher/tools?tab=templates' },
              { icon: '✍️', label: 'FRQ Grader', href: '/teacher/tools?tab=frq-grader' },
              { icon: '🃏', label: 'Flashcards', href: '/teacher/tools?tab=flashcards' },
              { icon: '📊', label: 'Analytics', href: '/teacher/tools?tab=analytics' },
              { icon: '👥', label: 'Groups', href: '/teacher/tools?tab=grouping' },
              { icon: '⚔️', label: 'Class Lobby', href: '/teacher/lobby' },
              { icon: '📢', label: 'Announcements', href: '/teacher/tools?tab=announcements' },
              { icon: '🗺️', label: 'Curriculum Map', href: '/teacher/tools?tab=curriculum' },
              { icon: '👨‍👩‍👧', label: 'Parent View', href: '/teacher/tools?tab=parent-view' },
              { icon: '🔗', label: 'LMS Integration', href: '#lms' },
            ].map((tool) => (
              <Link
                key={tool.label}
                href={tool.href}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-center hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 border-2 border-transparent transition-all group"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                  {tool.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* LMS Integration */}
        <div id="lms" className="mt-8">
          <LMSIntegration />
        </div>
      </div>

      {/* Create Classroom Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create New Classroom</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Classroom Name *
                </label>
                <input
                  type="text"
                  value={newClass.name}
                  onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                  placeholder="e.g., Period 3 AP Calculus"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={newClass.subject}
                    onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                    placeholder="e.g., AP Calculus"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Grade
                  </label>
                  <input
                    type="text"
                    value={newClass.grade}
                    onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
                    placeholder="e.g., 11th"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={newClass.description}
                  onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                  placeholder="Optional description..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white resize-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={createClassroom}
                disabled={!newClass.name.trim() || creating}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {creating ? 'Creating...' : 'Create Classroom'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
