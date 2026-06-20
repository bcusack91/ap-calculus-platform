'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { StudentGrouping } from '@/components/StudentGrouping'
import { ClassAnnouncements } from '@/components/ClassAnnouncements'
import { ClassroomChallenges } from '@/components/ClassroomChallenges'
import FocusTrapDialog from '@/components/FocusTrapDialog'

interface Member {
  id: string
  isActive: boolean
  joinedAt: string
  user: { id: string; name: string | null; email: string | null; image: string | null }
}

interface Assignment {
  id: string
  title: string
  type: string
  topicSlug: string | null
  topicSlugs: string[] | null
  dueDate: string | null
  requiredScore: number | null
  maxAttempts: number | null
  createdAt: string
  _count: { submissions: number }
}

interface Competition {
  id: string
  title: string
  topicSlug: string
  gameMode: string
  status: string
  scheduledAt: string
  endsAt: string
  duration: number
  _count: { participants: number }
}

interface ClassroomDetail {
  id: string
  name: string
  description: string | null
  joinCode: string
  subject: string | null
  grade: string | null
  isActive: boolean
  createdAt: string
  members: Member[]
  assignments: Assignment[]
  competitions: Competition[]
}

interface TopicOption {
  slug: string
  title: string
  category: string
}

interface CourseGroup {
  courseTitle: string
  topics: TopicOption[]
}

interface ClassroomPerformanceData {
  classSummary: {
    avgMastery: number
    totalTopicsCompleted: number
    avgAssignmentScore: number
    avgStreak: number
  }
  students: {
    userId: string
    name: string
    email: string | null
    topicStats: {
      completed: number
      started: number
      avgMastery: number
    }
    assignmentStats: {
      completed: number
      total: number
      avgScore: number
    }
    streak: {
      current: number
      longest: number
      lastActive: string | null
    }
    exitQuizzes?: {
      topicSlug: string
      totalAttempts: number
      passed: boolean
      bestScore: number
      lastScore: number | null
      lastAttempt: string | null
      mustRedoUnit: boolean
    }[]
  }[]
}

interface AssignmentCreateBody {
  title: string
  type: string
  requiredScore?: number
  maxAttempts?: number
  dueDate?: string
  topicSlugs?: string[]
  topicSlug?: string
}

type TabType = 'members' | 'assignments' | 'competitions' | 'performance' | 'groups' | 'announcements' | 'challenges' | 'settings'

export default function ClassroomDetailPage() {
  const router = useRouter()
  const params = useParams()
  const classroomId = params.id as string
  const { data: session } = useSession()

  const [classroom, setClassroom] = useState<ClassroomDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('members')
  const [copiedCode, setCopiedCode] = useState(false)

  // Assignment creation
  const [showAssignmentModal, setShowAssignmentModal] = useState(false)
  const [courses, setCourses] = useState<CourseGroup[]>([])
  const [assignmentForm, setAssignmentForm] = useState({
    title: '',
    type: 'INTERACTIVE_LESSON' as string,
    topicSlug: '',
    topicSlugs: [] as string[],
    dueDate: '',
    maxAttempts: '',
    requiredScore: '80',
  })
  const [creatingAssignment, setCreatingAssignment] = useState(false)
  const [editingAssignmentId, setEditingAssignmentId] = useState<string | null>(null)
  const [deletingAssignmentId, setDeletingAssignmentId] = useState<string | null>(null)

  // Competition creation
  const [showCompModal, setShowCompModal] = useState(false)
  const [compForm, setCompForm] = useState({
    title: '',
    topicSlug: '',
    gameMode: 'SPEED_ROUND',
    scheduledAt: '',
    duration: '30',
  })
  const [creatingComp, setCreatingComp] = useState(false)

  // Competitive grants
  const [competitiveGrants, setCompetitiveGrants] = useState<Record<string, boolean>>({})
  const [grantingAccess, setGrantingAccess] = useState<string | null>(null)

  // Performance data
  const [perfData, setPerfData] = useState<ClassroomPerformanceData | null>(null)
  const [loadingPerf, setLoadingPerf] = useState(false)

  // Settings
  const [editName, setEditName] = useState('')
  const [editDesc, setEditDesc] = useState('')
  const [editSubject, setEditSubject] = useState('')
  const [editGrade, setEditGrade] = useState('')
  const [saving, setSaving] = useState(false)

  const loadClassroom = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}`)
      if (!res.ok) {
        router.push('/teacher')
        return
      }
      const data = await res.json()
      setClassroom(data)
      setEditName(data.name)
      setEditDesc(data.description || '')
      setEditSubject(data.subject || '')
      setEditGrade(data.grade || '')
    } catch {
      router.push('/teacher')
    } finally {
      setLoading(false)
    }
  }, [classroomId, router])

  useEffect(() => {
    if (session) loadClassroom()
  }, [session, loadClassroom])

  const loadTopics = async () => {
    if (courses.length > 0) return
    const res = await fetch('/api/teacher/topics')
    if (res.ok) setCourses(await res.json())
  }

  const loadPerformance = async () => {
    if (perfData) return
    setLoadingPerf(true)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/performance`)
      if (res.ok) setPerfData(await res.json())
    } finally {
      setLoadingPerf(false)
    }
  }

  const copyJoinCode = () => {
    if (!classroom) return
    navigator.clipboard.writeText(classroom.joinCode)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const copyJoinLink = () => {
    if (!classroom) return
    const link = `${window.location.origin}/join-class?code=${classroom.joinCode}`
    navigator.clipboard.writeText(link)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const [showQR, setShowQR] = useState(false)

  const removeMember = async (memberId: string) => {
    if (!confirm('Remove this student from the classroom?')) return
    const res = await fetch(`/api/teacher/classrooms/${classroomId}/members/${memberId}`, {
      method: 'DELETE',
    })
    if (res.ok) loadClassroom()
  }

  const loadCompetitiveGrants = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitive-grants`)
      if (res.ok) {
        const data = await res.json()
        const grantMap: Record<string, boolean> = {}
        for (const grant of data.grants) {
          grantMap[grant.student.id] = true
        }
        setCompetitiveGrants(grantMap)
      }
    } catch (err) {
      console.error('Error loading competitive grants:', err)
    }
  }, [classroomId])

  useEffect(() => {
    if (session && classroom) loadCompetitiveGrants()
  }, [session, classroom, loadCompetitiveGrants])

  const toggleCompetitiveAccess = async (studentId: string) => {
    const hasGrant = competitiveGrants[studentId]
    setGrantingAccess(studentId)
    try {
      if (hasGrant) {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitive-grants`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId }),
        })
        if (res.ok) {
          setCompetitiveGrants(prev => {
            const next = { ...prev }
            delete next[studentId]
            return next
          })
        }
      } else {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitive-grants`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId }),
        })
        if (res.ok) {
          setCompetitiveGrants(prev => ({ ...prev, [studentId]: true }))
        }
      }
    } catch (err) {
      console.error('Error toggling competitive access:', err)
    } finally {
      setGrantingAccess(null)
    }
  }

  const closeAssignmentModal = () => {
    setShowAssignmentModal(false)
    setEditingAssignmentId(null)
    setAssignmentForm({
      title: '', type: 'INTERACTIVE_LESSON', topicSlug: '', topicSlugs: [],
      dueDate: '', maxAttempts: '', requiredScore: '80',
    })
  }

  // Resolve a topic slug to its human title using the loaded course list (for chips).
  const topicTitle = (slug: string) => {
    for (const c of courses) {
      const t = c.topics.find((tp) => tp.slug === slug)
      if (t) return t.title
    }
    return slug
  }

  // ISO timestamp -> value for a <input type="datetime-local"> (local wall clock).
  const toLocalDatetimeInput = (iso: string | null) => {
    if (!iso) return ''
    const d = new Date(iso)
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
  }

  // Create (POST) or edit (PUT) depending on whether we're editing an existing one.
  const submitAssignment = async () => {
    if (!assignmentForm.title.trim()) return
    setCreatingAssignment(true)
    try {
      const body: AssignmentCreateBody = {
        title: assignmentForm.title,
        type: assignmentForm.type,
        requiredScore: assignmentForm.requiredScore ? parseInt(assignmentForm.requiredScore) / 100 : undefined,
        maxAttempts: assignmentForm.maxAttempts ? parseInt(assignmentForm.maxAttempts) : undefined,
        dueDate: assignmentForm.dueDate || undefined,
      }
      if (assignmentForm.topicSlugs.length > 0) {
        body.topicSlugs = assignmentForm.topicSlugs
        body.topicSlug = assignmentForm.topicSlugs[0]
      } else if (assignmentForm.topicSlug) {
        body.topicSlug = assignmentForm.topicSlug
      }
      const res = await fetch(
        editingAssignmentId
          ? `/api/teacher/classrooms/${classroomId}/assignments/${editingAssignmentId}`
          : `/api/teacher/classrooms/${classroomId}/assignments`,
        {
          method: editingAssignmentId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      )
      if (res.ok) {
        closeAssignmentModal()
        loadClassroom()
      }
    } finally {
      setCreatingAssignment(false)
    }
  }

  const startEditAssignment = (a: Assignment) => {
    loadTopics()
    setEditingAssignmentId(a.id)
    setAssignmentForm({
      title: a.title,
      type: a.type,
      topicSlug: a.topicSlug || '',
      topicSlugs: a.topicSlugs && a.topicSlugs.length > 0 ? a.topicSlugs : (a.topicSlug ? [a.topicSlug] : []),
      dueDate: toLocalDatetimeInput(a.dueDate),
      maxAttempts: a.maxAttempts ? String(a.maxAttempts) : '',
      requiredScore: a.requiredScore != null ? String(Math.round(a.requiredScore * 100)) : '',
    })
    setShowAssignmentModal(true)
  }

  const deleteAssignment = async (a: Assignment) => {
    if (!confirm(`Unassign "${a.title}"? Students will no longer see it. Any submitted grades are kept.`)) return
    setDeletingAssignmentId(a.id)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/assignments/${a.id}`, { method: 'DELETE' })
      if (res.ok) loadClassroom()
    } finally {
      setDeletingAssignmentId(null)
    }
  }

  const archiveClassroom = async () => {
    if (!confirm('Archive this classroom? Students will lose access and it will be removed from your active list. Grades are preserved; contact support to restore it.')) return
    const res = await fetch(`/api/teacher/classrooms/${classroomId}`, { method: 'DELETE' })
    if (res.ok) router.push('/teacher')
  }

  const createCompetition = async () => {
    if (!compForm.title.trim() || !compForm.topicSlug || !compForm.scheduledAt) return
    setCreatingComp(true)
    try {
      const scheduledAt = new Date(compForm.scheduledAt)
      const endsAt = new Date(scheduledAt.getTime() + parseInt(compForm.duration) * 60 * 1000)
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: compForm.title,
          topicSlug: compForm.topicSlug,
          gameMode: compForm.gameMode,
          scheduledAt: scheduledAt.toISOString(),
          endsAt: endsAt.toISOString(),
          duration: parseInt(compForm.duration),
        }),
      })
      if (res.ok) {
        setShowCompModal(false)
        setCompForm({ title: '', topicSlug: '', gameMode: 'SPEED_ROUND', scheduledAt: '', duration: '30' })
        loadClassroom()
      }
    } finally {
      setCreatingComp(false)
    }
  }

  const saveSettings = async () => {
    setSaving(true)
    try {
      await fetch(`/api/teacher/classrooms/${classroomId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editName,
          description: editDesc || null,
          subject: editSubject || null,
          grade: editGrade || null,
        }),
      })
      loadClassroom()
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500">Loading classroom...</div>
      </div>
    )
  }

  if (!classroom) return null

  const activeMembers = classroom.members.filter((m) => m.isActive)

  const tabs: { key: TabType; label: string; icon: string }[] = [
    { key: 'members', label: 'Students', icon: '👤' },
    { key: 'assignments', label: 'Assignments', icon: '📋' },
    { key: 'competitions', label: 'Competitions', icon: '⚔️' },
    { key: 'performance', label: 'Performance', icon: '📊' },
    { key: 'groups', label: 'Groups', icon: '👥' },
    { key: 'announcements', label: 'Announce', icon: '📢' },
    { key: 'challenges', label: 'Challenges', icon: '🏅' },
    { key: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  const assignmentTypes = [
    { value: 'INTERACTIVE_LESSON', label: 'Interactive Lesson' },
    { value: 'FLASHCARD_REVIEW', label: 'Flashcard Review' },
    { value: 'QUIZ', label: 'Quiz' },
    { value: 'COMPETITIVE_PRACTICE', label: 'Competitive Practice' },
  ]

  const gameModes = [
    { value: 'SPEED_ROUND', label: 'Speed Round' },
    { value: 'ACCURACY', label: 'Accuracy Challenge' },
    { value: 'SURVIVAL', label: 'Survival Mode' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link
            href="/teacher"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            ← Dashboard
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{classroom.name}</h1>
            {classroom.description && (
              <p className="text-gray-500 mt-1">{classroom.description}</p>
            )}
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              {classroom.subject && <span>{classroom.subject}</span>}
              {classroom.grade && <span>Grade {classroom.grade}</span>}
              <span>{activeMembers.length} students</span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-white dark:bg-gray-800 rounded-xl px-4 py-2 flex items-center gap-2 shadow">
              <span className="text-xs text-gray-500">Join Code:</span>
              <span className="font-mono font-bold text-lg text-blue-600">{classroom.joinCode}</span>
              <button
                onClick={copyJoinCode}
                className="ml-1 text-gray-400 hover:text-blue-600 transition-colors"
                title="Copy join code"
              >
                {copiedCode ? '✓' : '📋'}
              </button>
            </div>
            <button
              onClick={copyJoinLink}
              className="px-3 py-2 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              title="Copy shareable invite link"
            >
              🔗 Copy Link
            </button>
            <button
              onClick={() => setShowQR(!showQR)}
              className="px-3 py-2 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
              title="Show QR code for students to scan"
            >
              📱 QR Code
            </button>
          </div>
        </div>

        {/* QR Code Modal */}
        {showQR && classroom && (
          <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center max-w-sm mx-auto">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Scan to Join</h3>
            <div className="bg-white p-4 rounded-lg inline-block mb-3">
              {/* Simple QR code using a public API — no npm dependency needed */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${typeof window !== 'undefined' ? window.location.origin : 'https://www.studymondo.com'}/join-class?code=${classroom.joinCode}`)}`}
                alt={`QR code to join classroom ${classroom.name}`}
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mb-1">Join Code: <strong className="font-mono text-blue-600">{classroom.joinCode}</strong></p>
            <p className="text-xs text-gray-400">Students can scan this or go to studymondo.com/join-class</p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-3 text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white dark:bg-gray-800 rounded-xl p-1 shadow overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key)
                if (tab.key === 'performance') loadPerformance()
              }}
              className={`flex-1 px-4 py-3 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Students ({activeMembers.length})
              </h2>
              <div className="flex items-center gap-3">
                {activeMembers.length > 0 && (
                  <button
                    onClick={async () => {
                      const allGranted = activeMembers.every(m => competitiveGrants[m.user.id])
                      if (allGranted) {
                        if (!confirm('Revoke competitive access for all students?')) return
                        for (const m of activeMembers) {
                          if (competitiveGrants[m.user.id]) {
                            await toggleCompetitiveAccess(m.user.id)
                          }
                        }
                      } else {
                        for (const m of activeMembers) {
                          if (!competitiveGrants[m.user.id]) {
                            await toggleCompetitiveAccess(m.user.id)
                          }
                        }
                      }
                    }}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    {activeMembers.every(m => competitiveGrants[m.user.id]) ? '⚔️ Revoke All Competitive' : '⚔️ Grant All Competitive'}
                  </button>
                )}
                <div className="text-sm text-gray-500">
                  Join code: <span className="font-mono font-bold text-blue-600">{classroom.joinCode}</span>
                </div>
              </div>
            </div>
            {activeMembers.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">👋</div>
                <h3 className="text-lg font-bold mb-2">No students yet</h3>
                <p className="text-gray-500 mb-2">Share the join code <strong>{classroom.joinCode}</strong> with your students</p>
                <p className="text-sm text-gray-400">Students can enter it at <strong>studymondo.com/join-class</strong></p>
              </div>
            ) : (
              <div className="space-y-2">
                {activeMembers.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30"
                  >
                    <div className="flex items-center gap-3">
                      {m.user.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={m.user.image}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold">
                          {(m.user.name || m.user.email || '?')[0].toUpperCase()}
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {m.user.name || 'Unnamed Student'}
                        </p>
                        <p className="text-xs text-gray-500">{m.user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">
                        Joined {new Date(m.joinedAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => toggleCompetitiveAccess(m.user.id)}
                        disabled={grantingAccess === m.user.id}
                        className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                          competitiveGrants[m.user.id]
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                            : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-400'
                        }`}
                        title={competitiveGrants[m.user.id] ? 'Click to revoke competitive access' : 'Grant competitive mode access (bypasses mastery requirement)'}
                      >
                        {grantingAccess === m.user.id ? '...' : competitiveGrants[m.user.id] ? '⚔️ Competitive ✓' : '⚔️ Grant Competitive'}
                      </button>
                      <button
                        onClick={() => removeMember(m.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Assignments ({classroom.assignments.length})
              </h2>
              <button
                onClick={() => {
                  loadTopics()
                  setShowAssignmentModal(true)
                }}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-sm"
              >
                + New Assignment
              </button>
            </div>
            {classroom.assignments.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-lg font-bold mb-2">No assignments yet</h3>
                <p className="text-gray-500">Create your first assignment for this class</p>
              </div>
            ) : (
              <div className="space-y-3">
                {classroom.assignments.map((a) => (
                  <div
                    key={a.id}
                    className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{a.title}</h4>
                        <div className="flex flex-wrap gap-3 mt-1 text-xs text-gray-500">
                          <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                            {a.type.replace(/_/g, ' ')}
                          </span>
                          {a.topicSlugs && a.topicSlugs.length > 1
                            ? <span>Topics: {a.topicSlugs.length}</span>
                            : a.topicSlug && <span>Topic: {a.topicSlug}</span>}
                          {a.requiredScore && <span>Required: {Math.round(a.requiredScore * 100)}%</span>}
                          {a.maxAttempts && <span>Max attempts: {a.maxAttempts}</span>}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-green-600">
                          {a._count.submissions} submissions
                        </span>
                        {a.dueDate && (
                          <p className="text-xs text-gray-400 mt-1">
                            Due: {new Date(a.dueDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => startEditAssignment(a)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteAssignment(a)}
                        disabled={deletingAssignmentId === a.id}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all disabled:opacity-50"
                      >
                        {deletingAssignmentId === a.id ? 'Removing…' : 'Unassign'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Competitions Tab */}
        {activeTab === 'competitions' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Competitions ({classroom.competitions.length})
              </h2>
              <button
                onClick={() => {
                  loadTopics()
                  setShowCompModal(true)
                }}
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all text-sm"
              >
                + Schedule Competition
              </button>
            </div>
            {classroom.competitions.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="text-lg font-bold mb-2">No competitions yet</h3>
                <p className="text-gray-500">Schedule a competition for your students</p>
              </div>
            ) : (
              <div className="space-y-3">
                {classroom.competitions.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-purple-100 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{c.title}</h4>
                        <div className="flex gap-3 mt-1 text-xs text-gray-500">
                          <span>Topic: {c.topicSlug}</span>
                          <span>Mode: {c.gameMode.replace(/_/g, ' ')}</span>
                          <span>Duration: {c.duration}min</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-bold ${
                            c.status === 'ACTIVE'
                              ? 'bg-green-100 text-green-700'
                              : c.status === 'COMPLETED'
                              ? 'bg-gray-100 text-gray-700'
                              : c.status === 'CANCELLED'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {c.status}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">
                          {c._count.participants} participants
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(c.scheduledAt).toLocaleString()} — {new Date(c.endsAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">📊 Student Performance</h2>
              {perfData && perfData.students.length > 0 && (
                <div className="flex items-center gap-2">
                  <a
                    href={`/api/teacher/classrooms/${classroomId}/export?format=csv`}
                    download
                    className="px-3 py-1.5 text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    📥 Export CSV
                  </a>
                </div>
              )}
            </div>
            {loadingPerf ? (
              <div className="text-center py-12 text-gray-500">Loading performance data...</div>
            ) : !perfData ? (
              <div className="text-center py-12 text-gray-500">Unable to load performance data</div>
            ) : perfData.students.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-lg font-bold mb-2">No performance data yet</h3>
                <p className="text-gray-500">Students need to start working on topics first</p>
              </div>
            ) : (
              <>
                {/* Class Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 text-center">
                    <div className="text-2xl font-bold text-blue-600">{perfData.classSummary.avgMastery}%</div>
                    <div className="text-xs text-gray-500">Avg Mastery</div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 text-center">
                    <div className="text-2xl font-bold text-green-600">{perfData.classSummary.totalTopicsCompleted}</div>
                    <div className="text-xs text-gray-500">Topics Completed</div>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 text-center">
                    <div className="text-2xl font-bold text-purple-600">{perfData.classSummary.avgAssignmentScore}%</div>
                    <div className="text-xs text-gray-500">Avg Assignment Score</div>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 text-center">
                    <div className="text-2xl font-bold text-orange-600">{perfData.classSummary.avgStreak}</div>
                    <div className="text-xs text-gray-500">Avg Streak</div>
                  </div>
                </div>

                {/* Per-Student Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Student</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Topics</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Mastery</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Assignments</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Avg Score</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Streak</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Last Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      {perfData.students.map((s) => (
                        <tr key={s.userId} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                          <td className="py-3 px-4">
                            <p className="font-medium text-gray-900 dark:text-white">{s.name}</p>
                            <p className="text-xs text-gray-400">{s.email}</p>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className="text-green-600 font-bold">{s.topicStats.completed}</span>
                            <span className="text-gray-400">/{s.topicStats.started}</span>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className={`font-bold ${
                              s.topicStats.avgMastery >= 80 ? 'text-green-600' :
                              s.topicStats.avgMastery >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {s.topicStats.avgMastery}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4">
                            {s.assignmentStats.completed}/{s.assignmentStats.total}
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className={`font-bold ${
                              s.assignmentStats.avgScore >= 80 ? 'text-green-600' :
                              s.assignmentStats.avgScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {s.assignmentStats.avgScore}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className="text-orange-600 font-bold">{s.streak.current}</span>
                            <span className="text-gray-400 text-xs"> (best: {s.streak.longest})</span>
                          </td>
                          <td className="text-center py-3 px-4 text-xs text-gray-400">
                            {s.streak.lastActive
                              ? new Date(s.streak.lastActive).toLocaleDateString()
                              : 'Never'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Exit Quiz Results */}
                {perfData.students.some(s => s.exitQuizzes && s.exitQuizzes.length > 0) && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">📝 Exit Quiz Results</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Student</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Topic</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Best Score</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Attempts</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Last Attempt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {perfData.students.flatMap(s =>
                            (s.exitQuizzes || []).map((eq, idx) => (
                              <tr key={`${s.userId}-${eq.topicSlug}-${idx}`} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                <td className="py-3 px-4">
                                  <p className="font-medium text-gray-900 dark:text-white">{s.name}</p>
                                </td>
                                <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                                  {eq.topicSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </td>
                                <td className="text-center py-3 px-4">
                                  <span className={`font-bold ${eq.bestScore >= 7 ? 'text-green-600' : eq.bestScore >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                                    {eq.bestScore}/10
                                  </span>
                                </td>
                                <td className="text-center py-3 px-4 text-gray-600 dark:text-gray-400">{eq.totalAttempts}</td>
                                <td className="text-center py-3 px-4">
                                  {eq.passed ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                      ✅ Passed
                                    </span>
                                  ) : eq.mustRedoUnit ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                                      🔄 Must Redo Unit
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                      ⏳ Can Retry
                                    </span>
                                  )}
                                </td>
                                <td className="text-center py-3 px-4 text-xs text-gray-400">
                                  {eq.lastAttempt ? new Date(eq.lastAttempt).toLocaleDateString() : '—'}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Groups Tab */}
        {activeTab === 'groups' && (
          <StudentGrouping />
        )}

        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <ClassAnnouncements isTeacher />
        )}

        {/* Classroom Challenges Tab */}
        {activeTab === 'challenges' && (
          <ClassroomChallenges />
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-2xl">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Classroom Settings</h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="settings-name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="settings-name"
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="settings-subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="settings-subject"
                    type="text"
                    value={editSubject}
                    onChange={(e) => setEditSubject(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="settings-grade"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Grade
                  </label>
                  <input
                    id="settings-grade"
                    type="text"
                    value={editGrade}
                    onChange={(e) => setEditGrade(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="settings-description"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="settings-description"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white resize-none"
                />
              </div>
              <button
                onClick={saveSettings}
                disabled={saving || !editName.trim()}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-bold text-red-600 dark:text-red-400 mb-1">Danger Zone</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Archiving removes this class from your active list and revokes student access. Grades are preserved.
                </p>
                <button
                  onClick={archiveClassroom}
                  className="px-5 py-2.5 border-2 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 font-semibold rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all text-sm"
                >
                  Archive Classroom
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create / Edit Assignment Modal */}
      <FocusTrapDialog
        open={showAssignmentModal}
        onClose={closeAssignmentModal}
        title={editingAssignmentId ? 'Edit Assignment' : 'Create Assignment'}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{editingAssignmentId ? 'Edit Assignment' : 'Create Assignment'}</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="assignment-title"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Title *
              </label>
              <input
                id="assignment-title"
                type="text"
                value={assignmentForm.title}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, title: e.target.value })}
                placeholder="e.g., Practice Derivatives"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="assignment-type"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Type
              </label>
              <select
                id="assignment-type"
                value={assignmentForm.type}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, type: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                {assignmentTypes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="assignment-topic"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Topics
              </label>
              <select
                id="assignment-topic"
                value=""
                onChange={(e) => {
                  const slug = e.target.value
                  if (slug && !assignmentForm.topicSlugs.includes(slug)) {
                    setAssignmentForm({ ...assignmentForm, topicSlugs: [...assignmentForm.topicSlugs, slug] })
                  }
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                <option value="">+ Add a topic…</option>
                {courses.map((c) => (
                  <optgroup key={c.courseTitle} label={c.courseTitle}>
                    {c.topics.map((t) => (
                      <option key={t.slug} value={t.slug} disabled={assignmentForm.topicSlugs.includes(t.slug)}>{t.title}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {assignmentForm.topicSlugs.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {assignmentForm.topicSlugs.map((slug) => (
                    <span key={slug} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs">
                      {topicTitle(slug)}
                      <button
                        type="button"
                        onClick={() => setAssignmentForm({ ...assignmentForm, topicSlugs: assignmentForm.topicSlugs.filter((s) => s !== slug) })}
                        className="text-blue-500 hover:text-blue-800 dark:hover:text-blue-100 font-bold leading-none"
                        aria-label={`Remove ${topicTitle(slug)}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-1 text-xs text-gray-400">Add one or more topics — students complete all of them.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="assignment-due-date"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Due Date
                </label>
                <input
                  id="assignment-due-date"
                  type="datetime-local"
                  value={assignmentForm.dueDate}
                  onChange={(e) => setAssignmentForm({ ...assignmentForm, dueDate: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="assignment-required-score"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Required Score (%)
                </label>
                <input
                  id="assignment-required-score"
                  type="number"
                  value={assignmentForm.requiredScore}
                  onChange={(e) => setAssignmentForm({ ...assignmentForm, requiredScore: e.target.value })}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="assignment-max-attempts"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Max Attempts (optional)
              </label>
              <input
                id="assignment-max-attempts"
                type="number"
                value={assignmentForm.maxAttempts}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, maxAttempts: e.target.value })}
                min="1"
                placeholder="Unlimited"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={closeAssignmentModal}
              className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={submitAssignment}
              disabled={!assignmentForm.title.trim() || creatingAssignment}
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {creatingAssignment
                ? (editingAssignmentId ? 'Saving…' : 'Creating...')
                : (editingAssignmentId ? 'Save Changes' : 'Create Assignment')}
            </button>
          </div>
        </div>
      </FocusTrapDialog>

      {/* Schedule Competition Modal */}
      <FocusTrapDialog
        open={showCompModal}
        onClose={() => setShowCompModal(false)}
        title="Schedule Competition"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Schedule Competition</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="competition-title"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Title *
              </label>
              <input
                id="competition-title"
                type="text"
                value={compForm.title}
                onChange={(e) => setCompForm({ ...compForm, title: e.target.value })}
                placeholder="e.g., Friday Speed Challenge"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="competition-topic"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Topic *
              </label>
              <select
                id="competition-topic"
                value={compForm.topicSlug}
                onChange={(e) => setCompForm({ ...compForm, topicSlug: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a topic...</option>
                {courses.map((c) => (
                  <optgroup key={c.courseTitle} label={c.courseTitle}>
                    {c.topics.map((t) => (
                      <option key={t.slug} value={t.slug}>{t.title}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="competition-game-mode"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Game Mode
              </label>
              <select
                id="competition-game-mode"
                value={compForm.gameMode}
                onChange={(e) => setCompForm({ ...compForm, gameMode: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                {gameModes.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="competition-start-time"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Start Time *
                </label>
                <input
                  id="competition-start-time"
                  type="datetime-local"
                  value={compForm.scheduledAt}
                  onChange={(e) => setCompForm({ ...compForm, scheduledAt: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="competition-duration"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Duration (min)
                </label>
                <input
                  id="competition-duration"
                  type="number"
                  value={compForm.duration}
                  onChange={(e) => setCompForm({ ...compForm, duration: e.target.value })}
                  min="5"
                  max="180"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setShowCompModal(false)}
              className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={createCompetition}
              disabled={!compForm.title.trim() || !compForm.topicSlug || !compForm.scheduledAt || creatingComp}
              className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {creatingComp ? 'Scheduling...' : 'Schedule Competition'}
            </button>
          </div>
        </div>
      </FocusTrapDialog>
    </div>
  )
}
