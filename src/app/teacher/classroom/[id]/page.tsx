'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { QRCodeSVG } from 'qrcode.react'
import Gradebook from '@/components/Gradebook'
import { StandardsMastery } from '@/components/StandardsMastery'
import ClassroomAnnouncements from '@/components/ClassroomAnnouncements'
import LiveSessionTeacherCard from '@/components/LiveSessionTeacherCard'
import ClassPlan from '@/components/ClassPlan'
import ClassEngagement from '@/components/ClassEngagement'
import StudentReportModal from '@/components/StudentReportModal'

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
  section: string | null
  isActive: boolean
  isOwner?: boolean
  coTeachers?: { id: string; user: { id: string; name: string | null; email: string | null } }[]
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
  courseSlug: string
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

type TabType = 'members' | 'assignments' | 'announcements' | 'competitions' | 'performance' | 'gradebook' | 'standards' | 'classplan' | 'engagement' | 'settings'

export default function ClassroomDetailPage() {
  const router = useRouter()
  const params = useParams()
  const classroomId = params.id as string
  const { data: session } = useSession()

  const [classroom, setClassroom] = useState<ClassroomDetail | null>(null)
  const [loading, setLoading] = useState(true)
  // Tab state lives in the URL so a teacher can be linked straight to the view
  // that matters — the dashboard points at ?tab=performance for remediation and
  // ?tab=gradebook for grading, and back/forward behave as expected.
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const isTab = (v: string | null): v is TabType =>
    !!v && ['members', 'assignments', 'gradebook', 'performance', 'standards', 'announcements', 'competitions', 'classplan', 'engagement', 'settings'].includes(v)
  const [activeTab, setActiveTabState] = useState<TabType>(isTab(tabParam) ? tabParam : 'members')
  // Roster rows open the student's full report — the roster is where a teacher
  // is already looking when they wonder how someone is doing.
  const [reportFor, setReportFor] = useState<{ id: string; name: string } | null>(null)
  // The classroom's attached courses (Khan-style). null = not loaded yet;
  // [] = explicitly none configured, which keeps the full-catalog fallback.
  const [classCourses, setClassCourses] = useState<string[] | null>(null)
  const [savingCourses, setSavingCourses] = useState(false)
  // Course the teacher is currently browsing in the assignment modal.
  const [assignCourse, setAssignCourse] = useState('')

  // Keep the URL in step with the tab, without pushing a history entry per click.
  const setActiveTab = useCallback((tab: TabType) => {
    setActiveTabState(tab)
    const url = new URL(window.location.href)
    if (tab === 'members') url.searchParams.delete('tab')
    else url.searchParams.set('tab', tab)
    window.history.replaceState(null, '', url.toString())
  }, [])

  // Follow back/forward and in-app links that change ?tab= while mounted.
  useEffect(() => {
    if (isTab(tabParam) && tabParam !== activeTab) setActiveTabState(tabParam)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabParam])
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


  // Competitive grants
  const [competitiveGrants, setCompetitiveGrants] = useState<Record<string, boolean>>({})
  const [grantingAccess, setGrantingAccess] = useState<string | null>(null)

  // Performance data
  const [perfData, setPerfData] = useState<ClassroomPerformanceData | null>(null)
  const [loadingPerf, setLoadingPerf] = useState(false)
  const [creatingRemediation, setCreatingRemediation] = useState<string | null>(null)
  const [startingLobby, setStartingLobby] = useState(false)

  // Schedule a future live game (ScheduledCompetition = the calendar entry;
  // launching it creates a real TeacherLobby students join by code)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [scheduleForm, setScheduleForm] = useState({
    title: '',
    topicSlug: '',
    scheduledAt: '',
    durationMin: '10',
  })
  const [schedulingComp, setSchedulingComp] = useState(false)
  const [scheduleError, setScheduleError] = useState('')
  const [launchingCompId, setLaunchingCompId] = useState<string | null>(null)

  // Settings
  const [editName, setEditName] = useState('')
  const [editDesc, setEditDesc] = useState('')
  const [editSubject, setEditSubject] = useState('')
  const [editGrade, setEditGrade] = useState('')
  const [editSection, setEditSection] = useState('')
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
      setEditSection(data.section || '')
    } catch {
      router.push('/teacher')
    } finally {
      setLoading(false)
    }
  }, [classroomId, router])

  useEffect(() => {
    if (session) loadClassroom()
  }, [session, loadClassroom])

  // Refresh the classroom (members/assignments/competitions) when the teacher
  // returns to the tab, so stale data doesn't linger after a student joins or
  // submits. Updates ONLY the display data — it deliberately does not touch the
  // Settings edit fields, so an in-progress edit is never clobbered.
  const refreshClassroom = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}`)
      if (res.ok) setClassroom(await res.json())
    } catch {
      // ignore transient refresh failures — don't redirect on a focus refetch
    }
  }, [classroomId])

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible') refreshClassroom()
    }
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', refreshClassroom)
    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', refreshClassroom)
    }
  }, [refreshClassroom])

  // The Settings tab's course checkboxes and the assignment modal both need
  // the catalog + attachments; load them when either surface opens.
  useEffect(() => {
    if (activeTab === 'settings') void loadTopics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const loadTopics = async () => {
    if (courses.length === 0) {
      const res = await fetch('/api/teacher/topics')
      if (res.ok) setCourses(await res.json())
    }
    if (classCourses === null) {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/courses`)
      if (res.ok) {
        const j = await res.json()
        setClassCourses(Array.isArray(j.courseSlugs) ? j.courseSlugs : [])
      }
    }
  }

  const saveClassCourses = async (slugs: string[]) => {
    setSavingCourses(true)
    setClassCourses(slugs) // optimistic — checkbox flips immediately
    try {
      await fetch(`/api/teacher/classrooms/${classroomId}/courses`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseSlugs: slugs }),
      })
    } finally {
      setSavingCourses(false)
    }
  }

  const loadPerformance = async () => {
    if (perfData) return
    setLoadingPerf(true)
    loadTopics() // so remediation suggestions can show human topic titles
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

  // CSV roster import
  const [showImport, setShowImport] = useState(false)
  const [importText, setImportText] = useState('')
  const [importing, setImporting] = useState(false)
  const [importError, setImportError] = useState('')
  const [importResult, setImportResult] = useState<null | {
    totalRows: number
    added: number
    reactivated: number
    alreadyMembers: number
    newAccounts: number
    invalid: string[]
  }>(null)

  const importRoster = async () => {
    setImporting(true)
    setImportError('')
    setImportResult(null)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/import-roster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: importText }),
      })
      const data = await res.json()
      if (!res.ok) {
        setImportError(data.error || 'Import failed')
      } else {
        setImportResult(data.summary)
        setImportText('')
        loadClassroom()
      }
    } catch {
      setImportError('Import failed. Please try again.')
    } finally {
      setImporting(false)
    }
  }

  const onRosterFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const txt = await file.text()
    setImportText((prev) => (prev ? `${prev}\n${txt}` : txt))
    e.target.value = ''
  }

  // Co-teachers (owner-only management)
  const [coTeacherEmail, setCoTeacherEmail] = useState('')
  const [addingCoTeacher, setAddingCoTeacher] = useState(false)
  const [coTeacherError, setCoTeacherError] = useState('')

  const addCoTeacher = async () => {
    if (!coTeacherEmail.trim()) return
    setAddingCoTeacher(true)
    setCoTeacherError('')
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/co-teachers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: coTeacherEmail.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setCoTeacherError(data.error || 'Could not add co-teacher')
      } else {
        setCoTeacherEmail('')
        loadClassroom()
      }
    } catch {
      setCoTeacherError('Could not add co-teacher')
    } finally {
      setAddingCoTeacher(false)
    }
  }

  const removeCoTeacher = async (userId: string) => {
    if (!confirm('Remove this co-teacher? They will lose access to this class.')) return
    const res = await fetch(`/api/teacher/classrooms/${classroomId}/co-teachers/${userId}`, {
      method: 'DELETE',
    })
    if (res.ok) loadClassroom()
  }

  // A co-teacher removing themselves (leave the class).
  const leaveClass = async () => {
    if (!session?.user?.id) return
    if (!confirm('Leave this class? You will lose access to it.')) return
    const res = await fetch(`/api/teacher/classrooms/${classroomId}/co-teachers/${session.user.id}`, {
      method: 'DELETE',
    })
    if (res.ok) router.push('/teacher')
  }

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

  // Auto-remediation: from the exit-quiz data the Performance tab already loads,
  // surface topics where students didn't pass — grouped by topic, and excluding
  // topics that already have an assignment — so the teacher can one-click assign
  // a targeted review lesson to the class.
  const getRemediationSuggestions = () => {
    if (!perfData || !classroom) return [] as { topicSlug: string; topicTitle: string; count: number; mustRedoCount: number }[]
    const assignedTopics = new Set<string>()
    for (const a of classroom.assignments) {
      if (a.topicSlug) assignedTopics.add(a.topicSlug)
      if (a.topicSlugs) for (const s of a.topicSlugs) assignedTopics.add(s)
    }
    const byTopic = new Map<string, { count: number; mustRedoCount: number }>()
    for (const s of perfData.students) {
      for (const eq of s.exitQuizzes || []) {
        if (eq.passed || assignedTopics.has(eq.topicSlug)) continue
        const entry = byTopic.get(eq.topicSlug) || { count: 0, mustRedoCount: 0 }
        entry.count++
        if (eq.mustRedoUnit) entry.mustRedoCount++
        byTopic.set(eq.topicSlug, entry)
      }
    }
    return Array.from(byTopic.entries())
      .map(([topicSlug, v]) => ({ topicSlug, topicTitle: topicTitle(topicSlug), count: v.count, mustRedoCount: v.mustRedoCount }))
      .sort((a, b) => b.count - a.count)
  }

  const createRemediation = async (topicSlug: string, title: string) => {
    setCreatingRemediation(topicSlug)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Remediation: ${title}`,
          type: 'INTERACTIVE_LESSON',
          topicSlug,
          dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
          requiredScore: 0.8,
          maxAttempts: 3,
        }),
      })
      if (res.ok) await loadClassroom() // refresh assignments so this topic drops out of suggestions
    } finally {
      setCreatingRemediation(null)
    }
  }

  // Launch a real-time team game (Teacher Lobby) tied to this classroom, then
  // jump straight into the lobby control room. Surfaces the live mode that
  // otherwise lived only under /teacher/lobby.
  const startLiveLobby = async () => {
    setStartingLobby(true)
    try {
      const res = await fetch('/api/teacher/lobby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `${classroom?.name ?? 'Class'} Live Game`, numTeams: 2, classroomId }),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.lobby?.id) {
        router.push(`/teacher/lobby/${json.lobby.id}`)
        return
      }
    } catch {
      // fall through to re-enable the button
    }
    setStartingLobby(false)
  }

  // Create a ScheduledCompetition — a calendar entry the class can see on
  // their assignments page. At game time the teacher hits "Launch now" and it
  // becomes a real TeacherLobby.
  const submitSchedule = async () => {
    if (!scheduleForm.title.trim() || !scheduleForm.topicSlug || !scheduleForm.scheduledAt) return
    setSchedulingComp(true)
    setScheduleError('')
    try {
      const start = new Date(scheduleForm.scheduledAt)
      const durationMin = Math.max(1, Math.min(60, Math.floor(Number(scheduleForm.durationMin) || 10)))
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: scheduleForm.title.trim(),
          topicSlug: scheduleForm.topicSlug,
          scheduledAt: start.toISOString(),
          endsAt: new Date(start.getTime() + durationMin * 60 * 1000).toISOString(),
          duration: durationMin * 60, // model stores seconds
        }),
      })
      if (res.ok) {
        setShowScheduleModal(false)
        setScheduleForm({ title: '', topicSlug: '', scheduledAt: '', durationMin: '10' })
        await loadClassroom()
      } else {
        const json = await res.json().catch(() => ({}))
        setScheduleError(json.error || 'Could not schedule the game')
      }
    } catch {
      setScheduleError('Could not schedule the game')
    } finally {
      setSchedulingComp(false)
    }
  }

  // Turn a scheduled competition into a live TeacherLobby and jump into the
  // lobby control room (students then join by code, exactly like Start live game).
  const launchCompetition = async (compId: string) => {
    setLaunchingCompId(compId)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitions/${compId}/launch`, {
        method: 'POST',
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.lobby?.id) {
        router.push(`/teacher/lobby/${json.lobby.id}`)
        return
      }
    } catch {
      // fall through to re-enable the button
    }
    setLaunchingCompId(null)
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
          section: editSection || null,
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
    { key: 'announcements', label: 'Announce', icon: '📢' },
    { key: 'competitions', label: 'Competitions', icon: '⚔️' },
    { key: 'performance', label: 'Performance', icon: '📊' },
    { key: 'gradebook', label: 'Gradebook', icon: '📒' },
    { key: 'standards', label: 'Standards', icon: '🎯' },
    { key: 'classplan', label: 'Class Plan', icon: '🗓️' },
    { key: 'engagement', label: 'Engagement', icon: '⏱' },
    { key: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  const assignmentTypes = [
    { value: 'INTERACTIVE_LESSON', label: 'Interactive Lesson' },
    { value: 'FLASHCARD_REVIEW', label: 'Flashcard Review' },
    { value: 'QUIZ', label: 'Quiz' },
    { value: 'COMPETITIVE_PRACTICE', label: 'Competitive Practice' },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-accent-subtle dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
              {classroom.section && <span>{classroom.section}</span>}
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
              className="px-3 py-2 text-xs font-medium bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted rounded-lg hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors"
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
              {/* Self-hosted SVG QR — no third-party host (school filters) and the join link never leaves the page */}
              <QRCodeSVG
                value={`${typeof window !== 'undefined' ? window.location.origin : 'https://www.studymondo.com'}/join-class?code=${classroom.joinCode}`}
                size={200}
                title={`QR code to join classroom ${classroom.name}`}
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

        {/* Live class sessions — conference or webcast, see LiveSessionTeacherCard */}
        <LiveSessionTeacherCard classroomId={classroomId} />

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
            <div className="flex flex-wrap justify-between items-center gap-y-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Students ({activeMembers.length})
              </h2>
              <div className="flex flex-wrap items-center gap-3 gap-y-2">
                <button
                  onClick={() => {
                    setShowImport(true)
                    setImportResult(null)
                    setImportError('')
                  }}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  title="Bulk-add students from a CSV or pasted list of emails"
                >
                  📥 Import students
                </button>
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
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-accent-light dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors"
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
                    className="flex flex-wrap items-center justify-between gap-y-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30"
                  >
                    <div className="flex items-center gap-3 min-w-0">
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
                      <button
                        onClick={() => setReportFor({ id: m.user.id, name: m.user.name || m.user.email || 'Student' })}
                        className="min-w-0 text-left group"
                        title="View full student report"
                      >
                        <p className="font-medium text-gray-900 dark:text-white group-hover:text-accent-hover group-hover:underline">
                          {m.user.name || 'Unnamed Student'}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{m.user.email}</p>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 gap-y-2">
                      <span className="text-xs text-gray-400">
                        Joined {new Date(m.joinedAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => toggleCompetitiveAccess(m.user.id)}
                        disabled={grantingAccess === m.user.id}
                        className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                          competitiveGrants[m.user.id]
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                            : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-accent-light dark:hover:bg-accent-light/30 hover:text-accent-hover dark:hover:text-accent-muted'
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
            <div className="flex flex-wrap justify-between items-center gap-y-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Competitions ({classroom.competitions.length})
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    loadTopics()
                    setScheduleError('')
                    setShowScheduleModal(true)
                  }}
                  className="px-4 py-2 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all text-sm"
                  title="Put a live game on the calendar — students see it on their assignments page"
                >
                  📅 Schedule live game
                </button>
                <button
                  onClick={startLiveLobby}
                  disabled={startingLobby}
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all text-sm disabled:opacity-50"
                  title="Run a real-time team game your students join live"
                >
                  {startingLobby ? 'Starting…' : '▶ Start live game'}
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-2 mb-4">
              <strong>Start live game</strong> runs a real-time team match your students join live from any device.{' '}
              <strong>Schedule live game</strong> puts one on the calendar — students see it on their assignments page, and you hit <strong>Launch now</strong> at game time.
            </p>
            {classroom.competitions.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="text-lg font-bold mb-2">No competitions yet</h3>
                <p className="text-gray-500">Start a live game to run a real-time review match with your class</p>
              </div>
            ) : (
              <div className="space-y-3">
                {classroom.competitions.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-accent-light dark:border-accent-light bg-accent-subtle dark:bg-accent-light/10"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{c.title}</h4>
                        <div className="flex gap-3 mt-1 text-xs text-gray-500">
                          <span>Topic: {c.topicSlug}</span>
                          <span>Mode: {c.gameMode.replace(/_/g, ' ')}</span>
                          <span>Duration: {Math.round(c.duration / 60)}min</span>
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
                    {c.status === 'SCHEDULED' && (
                      <div className="mt-3">
                        <button
                          onClick={() => launchCompetition(c.id)}
                          disabled={launchingCompId === c.id}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all disabled:opacity-50"
                          title="Start this game now as a live lobby your students join by code"
                        >
                          {launchingCompId === c.id ? 'Launching…' : '▶ Launch now'}
                        </button>
                      </div>
                    )}
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
                  <div className="p-4 rounded-xl bg-accent-subtle dark:bg-accent-light/10 text-center">
                    <div className="text-2xl font-bold text-accent">{perfData.classSummary.avgAssignmentScore}%</div>
                    <div className="text-xs text-gray-500">Avg Assignment Score</div>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 text-center">
                    <div className="text-2xl font-bold text-orange-600">{perfData.classSummary.avgStreak}</div>
                    <div className="text-xs text-gray-500">Avg Streak</div>
                  </div>
                </div>

                {/* Suggested remediation (from exit-quiz failures) */}
                {(() => {
                  const suggestions = getRemediationSuggestions()
                  if (suggestions.length === 0) return null
                  return (
                    <div className="mb-6 rounded-2xl border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10 p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">🛠️</span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Suggested remediation</h3>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                        Topics where students didn’t pass the exit quiz. One click assigns a targeted review lesson to the class.
                      </p>
                      <div className="space-y-2">
                        {suggestions.map((sug) => (
                          <div key={sug.topicSlug} className="flex items-center justify-between gap-3 bg-white dark:bg-gray-800 rounded-xl p-3">
                            <div className="min-w-0">
                              <p className="font-medium text-gray-900 dark:text-white truncate">{sug.topicTitle}</p>
                              <p className="text-xs text-gray-500">
                                {sug.count} student{sug.count !== 1 ? 's' : ''} struggling
                                {sug.mustRedoCount > 0 && (
                                  <span className="text-red-600 dark:text-red-400"> · {sug.mustRedoCount} must redo unit</span>
                                )}
                              </p>
                            </div>
                            <button
                              onClick={() => createRemediation(sug.topicSlug, sug.topicTitle)}
                              disabled={creatingRemediation === sug.topicSlug}
                              className="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-all"
                            >
                              {creatingRemediation === sug.topicSlug ? 'Assigning…' : '+ Assign review'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}

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

        {/* Gradebook Tab */}
        {activeTab === 'gradebook' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gradebook</h2>
            <Gradebook classroomId={classroomId} classroomName={classroom.name} />
          </div>
        )}

        {/* Announcements Tab */}
        {activeTab === 'classplan' && <ClassPlan classroomId={classroomId} />}

        {activeTab === 'engagement' && <ClassEngagement classroomId={classroomId} />}

        {activeTab === 'announcements' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Announcements</h2>
            <ClassroomAnnouncements classroomId={classroomId} isTeacher={true} />
          </div>
        )}

        {/* Standards Mastery Tab */}
        {activeTab === 'standards' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Standards Mastery</h2>
            <StandardsMastery classroomId={classroomId} />
          </div>
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
                  htmlFor="settings-section"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Section / period <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  id="settings-section"
                  type="text"
                  maxLength={60}
                  value={editSection}
                  onChange={(e) => setEditSection(e.target.value)}
                  placeholder="e.g., Period 3 or Section A"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
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
              {classroom.isOwner !== false && (
                <button
                  onClick={saveSettings}
                  disabled={saving || !editName.trim()}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              )}

              {classroom.isOwner === false && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You’re a co-teacher of this class. Only the class owner can change settings, manage co-teachers, or archive it.
                  </p>
                  <button
                    onClick={leaveClass}
                    className="px-5 py-2.5 border-2 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 font-semibold rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all text-sm"
                  >
                    Leave class
                  </button>
                </div>
              )}

              {/* Co-teachers (owner-only) */}
              {classroom.isOwner !== false && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Co-teachers</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    Co-teachers can view the roster, post assignments, grade, and run the class — but can’t change these settings or archive it. They need their own teacher account first.
                  </p>
                  {classroom.coTeachers && classroom.coTeachers.length > 0 && (
                    <div className="space-y-2 mb-3">
                      {classroom.coTeachers.map((ct) => (
                        <div
                          key={ct.user.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{ct.user.name || 'Teacher'}</p>
                            <p className="text-xs text-gray-500">{ct.user.email}</p>
                          </div>
                          <button
                            onClick={() => removeCoTeacher(ct.user.id)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={coTeacherEmail}
                      onChange={(e) => setCoTeacherEmail(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') addCoTeacher() }}
                      placeholder="teacher@school.org"
                      className="flex-1 px-4 py-2.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white text-sm"
                    />
                    <button
                      onClick={addCoTeacher}
                      disabled={!coTeacherEmail.trim() || addingCoTeacher}
                      className="px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all text-sm whitespace-nowrap"
                    >
                      {addingCoTeacher ? 'Adding…' : 'Add co-teacher'}
                    </button>
                  </div>
                  {coTeacherError && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">{coTeacherError}</p>
                  )}
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  📚 Class courses
                  {savingCourses && <span className="ml-2 text-xs font-normal text-gray-400">saving…</span>}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Pick the courses this class uses. Assignment creation shows these first
                  instead of every course on the platform.
                </p>
                {courses.length === 0 ? (
                  <p className="text-sm text-gray-400">Loading courses…</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-64 overflow-y-auto pr-1">
                    {courses.map((c) => {
                      const checked = (classCourses ?? []).includes(c.courseSlug)
                      return (
                        <label
                          key={c.courseSlug}
                          className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition ${
                            checked
                              ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200'
                              : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                              const cur = classCourses ?? []
                              saveClassCourses(
                                checked ? cur.filter((x) => x !== c.courseSlug) : [...cur, c.courseSlug]
                              )
                            }}
                            className="accent-blue-600"
                          />
                          <span className="truncate">{c.courseTitle}</span>
                        </label>
                      )
                    })}
                  </div>
                )}
              </div>

              {classroom.isOwner !== false && (
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
              )}
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
        <div className="p-4 sm:p-8">
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
              {/* Two-step picker: course first, then only that course's topics.
                  Attached class courses (Settings) lead the list; the full
                  catalog stays reachable so nothing is ever unassignable. */}
              {(() => {
                const attached = classCourses ?? []
                const pinned = courses.filter((c) => attached.includes(c.courseSlug))
                const rest = courses.filter((c) => !attached.includes(c.courseSlug))
                const activeGroup = courses.find((c) => c.courseSlug === assignCourse)
                // Group the chosen course's topics by category for a readable list
                const byCategory = new Map<string, TopicOption[]>()
                for (const t of activeGroup?.topics ?? []) {
                  const list = byCategory.get(t.category) ?? []
                  list.push(t)
                  byCategory.set(t.category, list)
                }
                return (
                  <div className="space-y-2">
                    <select
                      id="assignment-topic"
                      value={assignCourse}
                      onChange={(e) => setAssignCourse(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Choose a course…</option>
                      {pinned.length > 0 && (
                        <optgroup label="★ Your class courses">
                          {pinned.map((c) => (
                            <option key={c.courseSlug} value={c.courseSlug}>{c.courseTitle}</option>
                          ))}
                        </optgroup>
                      )}
                      <optgroup label={pinned.length > 0 ? 'All courses' : 'All courses (tip: pin your class courses in Settings)'}>
                        {rest.map((c) => (
                          <option key={c.courseSlug} value={c.courseSlug}>{c.courseTitle}</option>
                        ))}
                      </optgroup>
                    </select>
                    {activeGroup && (
                      <select
                        aria-label={`Topics in ${activeGroup.courseTitle}`}
                        value=""
                        onChange={(e) => {
                          const slug = e.target.value
                          if (slug && !assignmentForm.topicSlugs.includes(slug)) {
                            setAssignmentForm({ ...assignmentForm, topicSlugs: [...assignmentForm.topicSlugs, slug] })
                          }
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">+ Add a topic from {activeGroup.courseTitle}…</option>
                        {[...byCategory.entries()].map(([cat, ts]) => (
                          <optgroup key={cat} label={cat}>
                            {ts.map((t) => (
                              <option key={t.slug} value={t.slug} disabled={assignmentForm.topicSlugs.includes(t.slug)}>{t.title}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    )}
                  </div>
                )
              })()}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* Schedule live game (creates a ScheduledCompetition calendar entry) */}
      <FocusTrapDialog
        open={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        title="Schedule live game"
      >
        <div className="p-4 sm:p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">📅 Schedule live game</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Students see this on their assignments page so they know to be in class.
            At game time, hit <strong>Launch now</strong> on the competition to open the live lobby.
          </p>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="schedule-title"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Title *
              </label>
              <input
                id="schedule-title"
                type="text"
                value={scheduleForm.title}
                onChange={(e) => setScheduleForm({ ...scheduleForm, title: e.target.value })}
                placeholder="e.g., Friday Derivatives Showdown"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="schedule-topic"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Topic *
              </label>
              <select
                id="schedule-topic"
                value={scheduleForm.topicSlug}
                onChange={(e) => setScheduleForm({ ...scheduleForm, topicSlug: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a topic…</option>
                {courses.map((c) => (
                  <optgroup key={c.courseTitle} label={c.courseTitle}>
                    {c.topics.map((t) => (
                      <option key={t.slug} value={t.slug}>{t.title}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="schedule-when"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  When *
                </label>
                <input
                  id="schedule-when"
                  type="datetime-local"
                  value={scheduleForm.scheduledAt}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, scheduledAt: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="schedule-duration"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                >
                  Duration (minutes)
                </label>
                <input
                  id="schedule-duration"
                  type="number"
                  value={scheduleForm.durationMin}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, durationMin: e.target.value })}
                  min="1"
                  max="60"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
          {scheduleError && (
            <div className="mt-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
              {scheduleError}
            </div>
          )}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setShowScheduleModal(false)}
              className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={submitSchedule}
              disabled={!scheduleForm.title.trim() || !scheduleForm.topicSlug || !scheduleForm.scheduledAt || schedulingComp}
              className="flex-1 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {schedulingComp ? 'Scheduling…' : 'Schedule'}
            </button>
          </div>
        </div>
      </FocusTrapDialog>


      {/* Import students (CSV roster) */}
      <FocusTrapDialog
        open={showImport}
        onClose={() => setShowImport(false)}
        title="Import students"
      >
        <div className="p-4 sm:p-8 max-w-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Import students</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Paste a list of students or upload a CSV. One per line — just the email, or{' '}
            <span className="font-mono">name, email</span>. A header row is ignored.
          </p>

          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            rows={7}
            placeholder={'Ada Lovelace, ada@school.org\nalan@school.org\nGrace Hopper, grace@school.org'}
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white font-mono text-sm"
          />

          <div className="flex items-center gap-3 mt-3">
            <label className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              📄 Upload CSV
              <input type="file" accept=".csv,text/csv,text/plain" onChange={onRosterFile} className="hidden" />
            </label>
            <span className="text-xs text-gray-400">Up to 300 students per import</span>
          </div>

          <div className="mt-4 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 p-3 text-xs text-gray-600 dark:text-gray-300">
            Students you add this way can sign in with their <strong>school Google or Microsoft account</strong>{' '}
            using the same email. You can also just share the join code{' '}
            <span className="font-mono font-bold text-blue-600">{classroom.joinCode}</span>.
          </div>

          {importError && (
            <div className="mt-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
              {importError}
            </div>
          )}

          {importResult && (
            <div className="mt-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Import complete</p>
              <ul className="space-y-0.5">
                <li>{importResult.added} added{importResult.newAccounts > 0 ? ` (${importResult.newAccounts} new account${importResult.newAccounts !== 1 ? 's' : ''})` : ''}</li>
                {importResult.reactivated > 0 && <li>{importResult.reactivated} re-added</li>}
                {importResult.alreadyMembers > 0 && <li>{importResult.alreadyMembers} already in this class</li>}
                {importResult.invalid.length > 0 && (
                  <li className="text-amber-600 dark:text-amber-400">
                    {importResult.invalid.length} line{importResult.invalid.length !== 1 ? 's' : ''} skipped (no valid email)
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setShowImport(false)}
              className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              {importResult ? 'Done' : 'Cancel'}
            </button>
            <button
              onClick={importRoster}
              disabled={!importText.trim() || importing}
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {importing ? 'Importing...' : 'Import'}
            </button>
          </div>
        </div>
      </FocusTrapDialog>

      <StudentReportModal
        open={!!reportFor}
        onClose={() => setReportFor(null)}
        studentId={reportFor?.id ?? null}
        classroomId={classroomId}
        studentName={reportFor?.name}
      />
    </div>
  )
}
