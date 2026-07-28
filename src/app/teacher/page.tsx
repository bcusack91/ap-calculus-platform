'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { ClipboardList, FileText, AlertTriangle } from 'lucide-react'
import StudentReportModal from '@/components/StudentReportModal'
import SubmissionFeedbackModal from '@/components/SubmissionFeedbackModal'

interface ClassroomSummary {
  id: string
  name: string
  subject: string | null
  grade: string | null
  section: string | null
  joinCode: string
  isActive: boolean
  coTaught?: boolean
  createdAt: string
  _count: { members: number; assignments: number; competitions: number }
}

interface DashboardData {
  classrooms: ClassroomSummary[]
  stats: { totalClassrooms: number; totalStudents: number; avgMastery: number; needsAttentionCount: number }
  needsAttention: {
    studentId: string
    studentName: string
    classroomId: string
    reasons: string[]
    severity: number
  }[]
  recentSubmissions: {
    submissionId: string
    studentId: string
    studentName: string
    classroomId: string
    assignmentId: string
    assignmentTitle: string
    type: string
    score: number | null
    feedback: string | null
    completedAt: string
  }[]
  upcomingAssignments: {
    id: string
    title: string
    classroomId: string
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
  // Drill-in state. The dashboard is a work surface: every row opens the thing
  // you act on, rather than making the teacher navigate back down the tree.
  const [reportFor, setReportFor] = useState<{ studentId: string; classroomId: string; name: string } | null>(null)
  const [feedbackFor, setFeedbackFor] = useState<{
    submissionId: string; studentName: string; assignmentTitle: string
    score: number | null; feedback: string | null
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newClass, setNewClass] = useState({ name: '', subject: '', grade: '', section: '', description: '', schoolId: '' })
  const [schools, setSchools] = useState<{ id: string; name: string; district: string | null }[]>([])
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

  // Schools for the optional "school" picker in Create Classroom (feeds the
  // admin district rollup). Empty until an admin has created schools.
  useEffect(() => {
    fetch('/api/teacher/schools')
      .then((r) => (r.ok ? r.json() : { schools: [] }))
      .then((d) => setSchools(d.schools ?? []))
      .catch(() => setSchools([]))
  }, [])

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
        setNewClass({ name: '', subject: '', grade: '', section: '', description: '', schoolId: '' })
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-accent-subtle dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
          <div
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border ${
              data.stats.needsAttentionCount > 0
                ? 'border-amber-200 dark:border-amber-800'
                : 'border-green-100 dark:border-green-900/30'
            }`}
          >
            <div className={`text-4xl font-bold ${data.stats.needsAttentionCount > 0 ? 'text-amber-600' : 'text-green-600'}`}>
              {data.stats.needsAttentionCount}
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">
              {data.stats.needsAttentionCount === 1 ? 'Student needs attention' : 'Students need attention'}
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Class average {data.stats.avgMastery}% mastery
            </div>
          </div>
        </div>

        {/* Needs attention — the dashboard's answer to "what do I do today" */}
        {data.needsAttention.length > 0 && (
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-amber-200 dark:border-amber-800">
            <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
              <AlertTriangle className="inline w-5 h-5 mr-1.5 -mt-1 text-amber-500" aria-hidden /> Needs attention
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Click a student to see their full report.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.needsAttention.map((n) => (
                <button
                  key={n.studentId}
                  onClick={() => setReportFor({ studentId: n.studentId, classroomId: n.classroomId, name: n.studentName })}
                  className="text-left p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 hover:border-amber-400 transition-colors group"
                >
                  <p className="font-semibold text-sm text-gray-900 dark:text-white group-hover:underline truncate">
                    {n.studentName}
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {n.reasons.slice(0, 3).map((r, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400">• {r}</li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </div>
        )}

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
                      {cls.coTaught && (
                        <span className="ml-2 align-middle px-2 py-0.5 bg-accent-light dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted text-[10px] font-semibold rounded-full">
                          Co-teacher
                        </span>
                      )}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold rounded-lg">
                      {cls.joinCode}
                    </span>
                  </div>
                  {(cls.subject || cls.grade || cls.section) && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {[cls.subject, cls.grade, cls.section].filter(Boolean).join(' • ')}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>👤 {cls._count.members} students</span>
                    <span><ClipboardList className="inline w-3.5 h-3.5 mr-1 -mt-0.5" aria-hidden />{cls._count.assignments} assignments</span>
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
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white"><ClipboardList className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Upcoming Assignments</h2>
            {data.upcomingAssignments.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-6">No upcoming assignments</p>
            ) : (
              <div className="space-y-3">
                {data.upcomingAssignments.map((a) => (
                  <Link
                    key={a.id}
                    href={`/teacher/classroom/${a.classroomId}?tab=assignments`}
                    className={`block p-4 rounded-xl border transition-colors hover:border-accent ${
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
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Recent Submissions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white"><FileText className="inline w-5 h-5 mr-1.5 -mt-1 text-accent" aria-hidden /> Recent Submissions</h2>
            {data.recentSubmissions.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-6">No submissions yet</p>
            ) : (
              <div className="space-y-3">
                {data.recentSubmissions.slice(0, 8).map((s) => (
                  <div key={s.submissionId} className="flex items-center justify-between gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                    <button
                      onClick={() => setReportFor({ studentId: s.studentId, classroomId: s.classroomId, name: s.studentName })}
                      className="min-w-0 flex-1 text-left group"
                    >
                      <p className="font-medium text-sm text-gray-900 dark:text-white truncate group-hover:text-accent-hover group-hover:underline">
                        {s.studentName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{s.assignmentTitle}</p>
                    </button>
                    <div className="text-right shrink-0">
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
                    <button
                      onClick={() => setFeedbackFor({
                        submissionId: s.submissionId, studentName: s.studentName,
                        assignmentTitle: s.assignmentTitle, score: s.score, feedback: s.feedback,
                      })}
                      className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-accent hover:text-accent-hover transition-colors"
                      title={s.feedback ? 'Edit feedback' : 'Leave feedback'}
                    >
                      {s.feedback ? '✓ Feedback' : 'Feedback'}
                    </button>
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
                <div key={c.id} className="p-4 rounded-xl border border-accent-light dark:border-accent-light bg-accent-subtle dark:bg-accent-light/10">
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
              { icon: '✍️', label: 'FRQ Grader', href: '/teacher/tools?tab=frq-grader' },
              { icon: '🃏', label: 'Flashcards', href: '/teacher/tools?tab=flashcards' },
              { icon: '⚔️', label: 'Class Lobby', href: '/teacher/lobby' },
              { icon: '📖', label: 'Content Library', href: '/teacher/content' },
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

      </div>

      {/* Create Classroom Modal */}
      <FocusTrapDialog
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Classroom"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create New Classroom</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="new-classroom-name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Classroom Name *
              </label>
              <input
                id="new-classroom-name"
                type="text"
                value={newClass.name}
                onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                placeholder="e.g., Period 3 AP Calculus"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="new-classroom-subject"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  id="new-classroom-subject"
                  type="text"
                  value={newClass.subject}
                  onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                  placeholder="e.g., AP Calculus"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="new-classroom-grade"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Grade
                </label>
                <input
                  id="new-classroom-grade"
                  type="text"
                  value={newClass.grade}
                  onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
                  placeholder="e.g., 11th"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="new-classroom-section"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Section / period <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="new-classroom-section"
                type="text"
                maxLength={60}
                value={newClass.section}
                onChange={(e) => setNewClass({ ...newClass, section: e.target.value })}
                placeholder="e.g., Period 3 or Section A"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            {schools.length > 0 && (
              <div>
                <label
                  htmlFor="new-classroom-school"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  School <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <select
                  id="new-classroom-school"
                  value={newClass.schoolId}
                  onChange={(e) => setNewClass({ ...newClass, schoolId: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                >
                  <option value="">No school</option>
                  {schools.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}{s.district ? ` — ${s.district}` : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label
                htmlFor="new-classroom-description"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Description
              </label>
              <textarea
                id="new-classroom-description"
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
      </FocusTrapDialog>

      <StudentReportModal
        open={!!reportFor}
        onClose={() => setReportFor(null)}
        studentId={reportFor?.studentId ?? null}
        classroomId={reportFor?.classroomId ?? null}
        studentName={reportFor?.name}
      />

      <SubmissionFeedbackModal
        open={!!feedbackFor}
        onClose={() => setFeedbackFor(null)}
        submissionId={feedbackFor?.submissionId ?? null}
        studentName={feedbackFor?.studentName}
        assignmentTitle={feedbackFor?.assignmentTitle}
        currentScore={feedbackFor?.score ?? null}
        currentFeedback={feedbackFor?.feedback ?? null}
        onSaved={loadDashboard}
      />
    </div>
  )
}
