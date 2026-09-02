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
import ConfirmDialog, { type ConfirmRequest } from '@/components/teacher/ConfirmDialog'
import ImportRosterModal from '@/components/teacher/ImportRosterModal'
import AssignmentModal, {
  ASSIGNMENT_TYPES,
  type CourseGroup,
  type TopicOption,
} from '@/components/teacher/AssignmentModal'
import AssignmentResults, {
  type AssignmentStatsData,
  type SubmissionRow,
} from '@/components/teacher/AssignmentResults'
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CalendarPlus,
  Check,
  ClipboardList,
  Copy,
  Download,
  Link as LinkIcon,
  Megaphone,
  Play,
  QrCode,
  Search,
  Settings as SettingsIcon,
  Swords,
  Target,
  Upload,
  UserPlus,
  Users,
  X,
} from 'lucide-react'

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
  courseSlug?: string | null
  unitId?: string | null
  flashcardSetId?: string | null
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

/** Real per-assignment progress from the assignments GET route. */
interface AssignmentDetail {
  stats: AssignmentStatsData
  submissions: SubmissionRow[]
}

// ---------------------------------------------------------------------------
// Navigation: 10 legacy tabs regrouped into 4. `view` is the leaf surface (it
// keeps the legacy tab names so ?tab=performance-style links keep working);
// `group` is what renders in the primary tab bar.
// ---------------------------------------------------------------------------

type ViewType =
  | 'members'
  | 'assignments'
  | 'announcements'
  | 'competitions'
  | 'performance'
  | 'gradebook'
  | 'standards'
  | 'classplan'
  | 'engagement'
  | 'settings'
type GroupType = 'roster' | 'work' | 'insights' | 'settings'

const VIEW_GROUP: Record<ViewType, GroupType> = {
  members: 'roster',
  assignments: 'work',
  announcements: 'work',
  competitions: 'work',
  performance: 'insights',
  gradebook: 'insights',
  standards: 'insights',
  classplan: 'insights',
  engagement: 'insights',
  settings: 'settings',
}
const GROUP_HOME: Record<GroupType, ViewType> = {
  roster: 'members',
  work: 'assignments',
  insights: 'performance',
  settings: 'settings',
}
const isView = (v: string | null): v is ViewType => !!v && v in VIEW_GROUP
const isGroup = (v: string | null): v is GroupType => !!v && v in GROUP_HOME

/** Resolve ?tab= / ?view= (including legacy ?tab=<leaf> links) to a leaf view. */
const resolveView = (tab: string | null, view: string | null): ViewType => {
  if (isView(view)) return view
  if (isView(tab)) return tab // legacy deep links: ?tab=performance, ?tab=gradebook, …
  if (isGroup(tab)) return GROUP_HOME[tab]
  return 'members'
}

const GROUP_TABS: { key: GroupType; label: string; icon: typeof Users }[] = [
  { key: 'roster', label: 'Roster', icon: Users },
  { key: 'work', label: 'Work', icon: ClipboardList },
  { key: 'insights', label: 'Insights', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: SettingsIcon },
]

// Each sub-view carries a one-line answer to "what does this screen tell me?"
const SUB_VIEWS: Record<'work' | 'insights', { key: ViewType; label: string; icon: typeof Users; desc: string }[]> = {
  work: [
    { key: 'assignments', label: 'Assignments', icon: ClipboardList, desc: 'Create work, set due dates, and see who has actually finished each assignment.' },
    { key: 'announcements', label: 'Announcements', icon: Megaphone, desc: 'Post messages the whole class sees on their dashboard.' },
    { key: 'competitions', label: 'Live games', icon: Swords, desc: 'Run a real-time review game now, or put one on the calendar.' },
  ],
  insights: [
    { key: 'performance', label: 'Performance', icon: BarChart3, desc: 'Mastery, assignment averages, streaks, and exit-quiz results for each student.' },
    { key: 'gradebook', label: 'Gradebook', icon: BookOpenCheck, desc: 'Every assignment score in one grid — exportable for your SIS.' },
    { key: 'standards', label: 'Standards', icon: Target, desc: 'Class mastery mapped to curriculum standards.' },
    { key: 'classplan', label: 'Class plan', icon: CalendarDays, desc: 'A day-by-day pacing plan for this class.' },
    { key: 'engagement', label: 'Engagement', icon: Activity, desc: 'Who is logging in, when, and how much time they spend.' },
  ],
}

const TYPE_CHIP: Record<string, string> = {
  INTERACTIVE_LESSON: 'bg-accent-subtle text-accent dark:bg-accent-light/20 dark:text-accent-muted',
  FLASHCARD_REVIEW: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  QUIZ: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  COMPETITIVE_PRACTICE: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  UNIT_TEST: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  FRQ_PRACTICE: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
}
const typeLabel = (type: string) =>
  ASSIGNMENT_TYPES.find((t) => t.value === type)?.label ?? type.replace(/_/g, ' ')

const inputCls =
  'w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white'

export default function ClassroomDetailPage() {
  const router = useRouter()
  const params = useParams()
  const classroomId = params.id as string
  const { data: session } = useSession()

  const [classroom, setClassroom] = useState<ClassroomDetail | null>(null)
  const [loading, setLoading] = useState(true)
  // Tab state lives in the URL so a teacher can be linked straight to the view
  // that matters — the dashboard points at ?tab=performance for remediation and
  // ?tab=gradebook for grading, and back/forward behave as expected. Legacy
  // single-tab links resolve to the same surface inside its new group.
  const searchParams = useSearchParams()
  const [activeView, setActiveViewState] = useState<ViewType>(
    resolveView(searchParams.get('tab'), searchParams.get('view'))
  )
  const activeGroup = VIEW_GROUP[activeView]
  // Roster rows open the student's full report — the roster is where a teacher
  // is already looking when they wonder how someone is doing.
  const [reportFor, setReportFor] = useState<{ id: string; name: string } | null>(null)
  // The classroom's attached courses (Khan-style). null = not loaded yet;
  // [] = explicitly none configured, which keeps the full-catalog fallback.
  const [classCourses, setClassCourses] = useState<string[] | null>(null)
  const [courseSaveState, setCourseSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  // One visible place for background failures that used to die in console.error.
  const [pageError, setPageError] = useState('')
  // Accessible confirm dialog state — replaces bare confirm() calls.
  const [confirmReq, setConfirmReq] = useState<ConfirmRequest | null>(null)

  // Keep the URL in step with the view, without pushing a history entry per click.
  const setActiveView = useCallback((view: ViewType) => {
    setActiveViewState(view)
    const url = new URL(window.location.href)
    const group = VIEW_GROUP[view]
    if (view === 'members') {
      url.searchParams.delete('tab')
      url.searchParams.delete('view')
    } else {
      url.searchParams.set('tab', group)
      if (view === GROUP_HOME[group]) url.searchParams.delete('view')
      else url.searchParams.set('view', view)
    }
    window.history.replaceState(null, '', url.toString())
  }, [])

  // Follow back/forward and in-app links that change ?tab=/?view= while mounted.
  useEffect(() => {
    const next = resolveView(searchParams.get('tab'), searchParams.get('view'))
    if (next !== activeView) setActiveViewState(next)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])
  const [copiedCode, setCopiedCode] = useState(false)

  // Assignment creation / editing (form lives in AssignmentModal)
  const [showAssignmentModal, setShowAssignmentModal] = useState(false)
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null)
  const [courses, setCourses] = useState<CourseGroup[]>([])
  const [deletingAssignmentId, setDeletingAssignmentId] = useState<string | null>(null)
  // Real per-assignment progress (status counts + per-student rows).
  const [assignmentDetails, setAssignmentDetails] = useState<Record<string, AssignmentDetail> | null>(null)

  // Competitive grants
  const [competitiveGrants, setCompetitiveGrants] = useState<Record<string, boolean>>({})
  const [grantingAccess, setGrantingAccess] = useState<string | null>(null)
  const [bulkGranting, setBulkGranting] = useState(false)

  // Roster search
  const [memberQuery, setMemberQuery] = useState('')

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
  const [settingsSaved, setSettingsSaved] = useState(false)
  const [settingsError, setSettingsError] = useState('')

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

  const loadTopics = useCallback(async () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses.length, classCourses, classroomId])

  // Real submission-status counts per assignment — the classroom payload's
  // _count can't distinguish "started" from "finished".
  const loadAssignmentDetails = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/assignments`)
      if (!res.ok) return
      const j = await res.json()
      const map: Record<string, AssignmentDetail> = {}
      for (const a of j.assignments ?? []) {
        if (a.stats) map[a.id] = { stats: a.stats, submissions: a.submissions ?? [] }
      }
      setAssignmentDetails(map)
    } catch {
      // the per-assignment bar shows its own loading placeholder
    }
  }, [classroomId])

  const loadPerformance = useCallback(async () => {
    if (perfData) return
    setLoadingPerf(true)
    loadTopics() // so remediation suggestions can show human topic titles
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/performance`)
      if (res.ok) setPerfData(await res.json())
    } finally {
      setLoadingPerf(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perfData, classroomId])

  // Load what each view needs when it opens. Settings and the assignment
  // surfaces both need the catalog + attachments (topic titles, course pins).
  useEffect(() => {
    if (activeView === 'performance') void loadPerformance()
    if (activeView === 'settings' || activeView === 'assignments') void loadTopics()
    if (activeView === 'assignments' && assignmentDetails === null) void loadAssignmentDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeView])

  const saveClassCourses = async (slugs: string[]) => {
    setCourseSaveState('saving')
    setClassCourses(slugs) // optimistic — checkbox flips immediately
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/courses`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseSlugs: slugs }),
      })
      if (!res.ok) throw new Error()
      setCourseSaveState('saved')
      setTimeout(() => setCourseSaveState((s) => (s === 'saved' ? 'idle' : s)), 2500)
    } catch {
      setCourseSaveState('error')
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

  // CSV roster import (preview + confirm lives in ImportRosterModal)
  const [showImport, setShowImport] = useState(false)

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

  const removeCoTeacher = (userId: string) => {
    setConfirmReq({
      title: 'Remove co-teacher',
      message: 'Remove this co-teacher? They will lose access to this class.',
      confirmLabel: 'Remove',
      danger: true,
      onConfirm: async () => {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}/co-teachers/${userId}`, {
          method: 'DELETE',
        })
        if (res.ok) loadClassroom()
        else setPageError('Could not remove the co-teacher. Please try again.')
      },
    })
  }

  // A co-teacher removing themselves (leave the class).
  const leaveClass = () => {
    if (!session?.user?.id) return
    const userId = session.user.id
    setConfirmReq({
      title: 'Leave class',
      message: 'Leave this class? You will lose access to it.',
      confirmLabel: 'Leave class',
      danger: true,
      onConfirm: async () => {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}/co-teachers/${userId}`, {
          method: 'DELETE',
        })
        if (res.ok) router.push('/teacher')
        else setPageError('Could not leave the class. Please try again.')
      },
    })
  }

  const removeMember = (member: Member) => {
    setConfirmReq({
      title: 'Remove student',
      message: `Remove ${member.user.name || member.user.email || 'this student'} from the classroom? They can rejoin with the class code, and their grades are kept.`,
      confirmLabel: 'Remove',
      danger: true,
      onConfirm: async () => {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}/members/${member.id}`, {
          method: 'DELETE',
        })
        if (res.ok) loadClassroom()
        else setPageError('Could not remove the student. Please try again.')
      },
    })
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
    } catch {
      setPageError('Could not load competitive-access status. Refresh to retry.')
    }
  }, [classroomId])

  useEffect(() => {
    if (session && classroom) loadCompetitiveGrants()
  }, [session, classroom, loadCompetitiveGrants])

  const toggleCompetitiveAccess = async (studentId: string) => {
    const hasGrant = competitiveGrants[studentId]
    setGrantingAccess(studentId)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitive-grants`, {
        method: hasGrant ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId }),
      })
      if (!res.ok) throw new Error()
      setCompetitiveGrants((prev) => {
        const next = { ...prev }
        if (hasGrant) delete next[studentId]
        else next[studentId] = true
        return next
      })
    } catch {
      setPageError('Could not update competitive access. Please try again.')
    } finally {
      setGrantingAccess(null)
    }
  }

  // One batch request instead of a serial per-student loop.
  const grantAllCompetitive = async (studentIds: string[]) => {
    if (studentIds.length === 0) return
    setBulkGranting(true)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitive-grants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentIds }),
      })
      if (!res.ok) throw new Error()
      setCompetitiveGrants((prev) => ({
        ...prev,
        ...Object.fromEntries(studentIds.map((id) => [id, true])),
      }))
    } catch {
      setPageError('Could not grant competitive access. Please try again.')
    } finally {
      setBulkGranting(false)
    }
  }

  const revokeAllCompetitive = (studentIds: string[]) => {
    setConfirmReq({
      title: 'Revoke competitive access',
      message: 'Revoke competitive access for all students in this class?',
      confirmLabel: 'Revoke all',
      danger: true,
      onConfirm: async () => {
        setBulkGranting(true)
        try {
          const res = await fetch(`/api/teacher/classrooms/${classroomId}/competitive-grants`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentIds }),
          })
          if (!res.ok) throw new Error()
          setCompetitiveGrants((prev) => {
            const next = { ...prev }
            for (const id of studentIds) delete next[id]
            return next
          })
        } catch {
          setPageError('Could not revoke competitive access. Please try again.')
        } finally {
          setBulkGranting(false)
        }
      },
    })
  }

  const closeAssignmentModal = () => {
    setShowAssignmentModal(false)
    setEditingAssignment(null)
  }

  const onAssignmentSaved = () => {
    loadClassroom()
    loadAssignmentDetails()
  }

  // Resolve a topic slug to its human title using the loaded course list (for chips).
  const topicTitle = useCallback(
    (slug: string) => {
      for (const c of courses) {
        const t = c.topics.find((tp) => tp.slug === slug)
        if (t) return t.title
      }
      return slug
    },
    [courses]
  )

  const startEditAssignment = (a: Assignment) => {
    loadTopics()
    setEditingAssignment(a)
    setShowAssignmentModal(true)
  }

  const deleteAssignment = (a: Assignment) => {
    setConfirmReq({
      title: 'Unassign assignment',
      message: `Unassign "${a.title}"? Students will no longer see it. Any submitted grades are kept.`,
      confirmLabel: 'Unassign',
      danger: true,
      onConfirm: async () => {
        setDeletingAssignmentId(a.id)
        try {
          const res = await fetch(`/api/teacher/classrooms/${classroomId}/assignments/${a.id}`, {
            method: 'DELETE',
          })
          if (res.ok) {
            loadClassroom()
            loadAssignmentDetails()
          } else {
            setPageError('Could not unassign the assignment. Please try again.')
          }
        } finally {
          setDeletingAssignmentId(null)
        }
      },
    })
  }

  const archiveClassroom = () => {
    setConfirmReq({
      title: 'Archive classroom',
      message:
        'Archive this classroom? Students will lose access and it will be removed from your active list. Grades are preserved; contact support to restore it.',
      confirmLabel: 'Archive',
      danger: true,
      onConfirm: async () => {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}`, { method: 'DELETE' })
        if (res.ok) router.push('/teacher')
        else setPageError('Could not archive the classroom. Please try again.')
      },
    })
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
      if (res.ok) {
        await loadClassroom() // refresh assignments so this topic drops out of suggestions
        loadAssignmentDetails()
      } else {
        setPageError('Could not create the remediation assignment. Please try again.')
      }
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
      // fall through to the visible error below
    }
    setPageError('Could not start the live game. Please try again.')
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
      // fall through to the visible error below
    }
    setPageError('Could not launch the game. Please try again.')
    setLaunchingCompId(null)
  }

  const saveSettings = async () => {
    setSaving(true)
    setSettingsError('')
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}`, {
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
      if (!res.ok) throw new Error()
      await loadClassroom()
      setSettingsSaved(true)
      setTimeout(() => setSettingsSaved(false), 2500)
    } catch {
      setSettingsError('Could not save settings. Please try again.')
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
  const query = memberQuery.trim().toLowerCase()
  const filteredMembers = query
    ? activeMembers.filter(
        (m) =>
          (m.user.name || '').toLowerCase().includes(query) ||
          (m.user.email || '').toLowerCase().includes(query)
      )
    : activeMembers

  const settingsDirty =
    editName !== classroom.name ||
    editDesc !== (classroom.description || '') ||
    editSubject !== (classroom.subject || '') ||
    editGrade !== (classroom.grade || '') ||
    editSection !== (classroom.section || '')

  // Assignments grouped by due date: upcoming/undated first (soonest due
  // first), past-due separated below so what still matters leads.
  const nowMs = Date.now()
  const isPastDue = (a: Assignment) => !!a.dueDate && new Date(a.dueDate).getTime() < nowMs
  const upcomingAssignments = classroom.assignments
    .filter((a) => !isPastDue(a))
    .sort((a, b) => {
      if (a.dueDate && b.dueDate) return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      if (a.dueDate) return -1
      if (b.dueDate) return 1
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
  const pastDueAssignments = classroom.assignments
    .filter(isPastDue)
    .sort((a, b) => new Date(b.dueDate!).getTime() - new Date(a.dueDate!).getTime())

  const renderAssignmentCard = (a: Assignment, pastDue: boolean) => {
    const detail = assignmentDetails?.[a.id] ?? null
    return (
      <div
        key={a.id}
        className={`p-4 rounded-xl border bg-gray-50 dark:bg-gray-700/30 ${
          pastDue ? 'border-amber-200 dark:border-amber-900' : 'border-gray-100 dark:border-gray-700'
        }`}
      >
        <div className="flex flex-wrap justify-between items-start gap-2">
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 dark:text-white">{a.title}</h4>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-500">
              <span className={`px-2 py-0.5 rounded font-medium ${TYPE_CHIP[a.type] ?? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                {typeLabel(a.type)}
              </span>
              {a.topicSlugs && a.topicSlugs.length > 1 ? (
                <span title={a.topicSlugs.map(topicTitle).join(', ')}>{a.topicSlugs.length} topics</span>
              ) : (
                a.topicSlug && <span>Topic: {topicTitle(a.topicSlug)}</span>
              )}
              {a.requiredScore != null && <span>Required: {Math.round(a.requiredScore * 100)}%</span>}
              {a.maxAttempts != null && a.maxAttempts < 9999 && <span>Max attempts: {a.maxAttempts}</span>}
            </div>
          </div>
          {a.dueDate && (
            <p className={`text-xs shrink-0 ${pastDue ? 'font-semibold text-amber-600 dark:text-amber-400' : 'text-gray-400'}`}>
              {pastDue ? 'Was due' : 'Due'}: {new Date(a.dueDate).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Real progress: distribution + per-student results with feedback */}
        <AssignmentResults
          assignmentTitle={a.title}
          stats={detail?.stats ?? null}
          submissions={detail?.submissions ?? null}
          onChanged={loadAssignmentDetails}
        />

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
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-accent-subtle dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link
            href="/teacher"
            className="text-accent hover:text-accent-hover text-sm font-medium"
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
              <span className="font-mono font-bold text-lg text-accent">{classroom.joinCode}</span>
              <button
                onClick={copyJoinCode}
                className="ml-1 text-gray-400 hover:text-accent transition-colors"
                title="Copy join code"
              >
                {copiedCode ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span className="sr-only">Copy join code</span>
              </button>
            </div>
            <button
              onClick={copyJoinLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted rounded-lg hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors"
              title="Copy shareable invite link"
            >
              <LinkIcon className="w-3.5 h-3.5" aria-hidden="true" />
              Copy Link
            </button>
            <button
              onClick={() => setShowQR(!showQR)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted rounded-lg hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors"
              title="Show QR code for students to scan"
            >
              <QrCode className="w-3.5 h-3.5" aria-hidden="true" />
              QR Code
            </button>
          </div>
        </div>

        {/* Visible surface for background failures (grants, launches, removals) */}
        {pageError && (
          <div
            role="alert"
            className="mb-4 flex items-start justify-between gap-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-sm"
          >
            <span className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              {pageError}
            </span>
            <button onClick={() => setPageError('')} className="shrink-0 hover:text-red-800 dark:hover:text-red-300" aria-label="Dismiss error">
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}

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
            <p className="text-sm text-gray-500 mb-1">Join Code: <strong className="font-mono text-accent">{classroom.joinCode}</strong></p>
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

        {/* Primary tabs: 4 groups instead of 10 scrolling tabs */}
        <div className="grid grid-cols-4 gap-1 mb-2 bg-white dark:bg-gray-800 rounded-xl p-1 shadow">
          {GROUP_TABS.map((tab) => {
            const Icon = tab.icon
            const active = activeGroup === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveView(GROUP_HOME[tab.key])}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center justify-center gap-2 px-2 sm:px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  active
                    ? 'bg-accent text-white shadow'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Secondary tabs for the grouped surfaces, with a one-line "what this
            view answers" so five analytics screens stop blurring together. */}
        {(activeGroup === 'work' || activeGroup === 'insights') && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-1.5">
              {SUB_VIEWS[activeGroup].map((sub) => {
                const Icon = sub.icon
                const active = activeView === sub.key
                return (
                  <button
                    key={sub.key}
                    onClick={() => setActiveView(sub.key)}
                    aria-current={active ? 'page' : undefined}
                    title={sub.desc}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      active
                        ? 'bg-accent-light dark:bg-accent-light/30 text-accent-dark dark:text-accent-muted ring-1 ring-accent'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {sub.label}
                  </button>
                )
              })}
            </div>
            <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
              {SUB_VIEWS[activeGroup].find((s) => s.key === activeView)?.desc}
            </p>
          </div>
        )}
        {(activeGroup === 'roster' || activeGroup === 'settings') && <div className="mb-4" />}

        {/* Roster */}
        {activeView === 'members' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex flex-wrap justify-between items-center gap-y-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Students ({activeMembers.length})
              </h2>
              <div className="flex flex-wrap items-center gap-3 gap-y-2">
                <button
                  onClick={() => setShowImport(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors"
                  title="Bulk-add students from a CSV or pasted list of emails"
                >
                  <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                  Import students
                </button>
                {activeMembers.length > 0 && (
                  <button
                    onClick={() => {
                      const allGranted = activeMembers.every((m) => competitiveGrants[m.user.id])
                      if (allGranted) {
                        revokeAllCompetitive(activeMembers.map((m) => m.user.id))
                      } else {
                        grantAllCompetitive(
                          activeMembers.filter((m) => !competitiveGrants[m.user.id]).map((m) => m.user.id)
                        )
                      }
                    }}
                    disabled={bulkGranting}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-accent-light dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted hover:bg-accent-light dark:hover:bg-accent-light/50 transition-colors disabled:opacity-50"
                  >
                    <Swords className="w-3.5 h-3.5" aria-hidden="true" />
                    {bulkGranting
                      ? 'Working…'
                      : activeMembers.every((m) => competitiveGrants[m.user.id])
                      ? 'Revoke All Competitive'
                      : 'Grant All Competitive'}
                  </button>
                )}
                <div className="text-sm text-gray-500">
                  Join code: <span className="font-mono font-bold text-accent">{classroom.joinCode}</span>
                </div>
              </div>
            </div>
            {activeMembers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2">No students yet</h3>
                <p className="text-gray-500 mb-2">Share the join code <strong>{classroom.joinCode}</strong> with your students</p>
                <p className="text-sm text-gray-400 mb-4">Students can enter it at <strong>studymondo.com/join-class</strong></p>
                <button
                  onClick={() => setShowImport(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-all"
                >
                  <UserPlus className="w-4 h-4" aria-hidden="true" />
                  Import a roster (CSV or pasted emails)
                </button>
              </div>
            ) : (
              <>
                {activeMembers.length > 3 && (
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      type="search"
                      value={memberQuery}
                      onChange={(e) => setMemberQuery(e.target.value)}
                      placeholder="Search students by name or email…"
                      aria-label="Search students"
                      className="w-full pl-9 pr-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                )}
                {filteredMembers.length === 0 ? (
                  <p className="text-sm text-gray-500 py-6 text-center">No students match &ldquo;{memberQuery}&rdquo;.</p>
                ) : (
                  <div className="space-y-2">
                    {filteredMembers.map((m) => (
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
                            <div className="w-10 h-10 rounded-full bg-accent-subtle dark:bg-accent-light/30 flex items-center justify-center text-accent font-bold">
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
                            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                              competitiveGrants[m.user.id]
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                                : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-accent-light dark:hover:bg-accent-light/30 hover:text-accent-hover dark:hover:text-accent-muted'
                            }`}
                            title={competitiveGrants[m.user.id] ? 'Click to revoke competitive access' : 'Grant competitive mode access (bypasses mastery requirement)'}
                          >
                            <Swords className="w-3.5 h-3.5" aria-hidden="true" />
                            {grantingAccess === m.user.id ? '…' : competitiveGrants[m.user.id] ? 'Competitive ✓' : 'Grant Competitive'}
                          </button>
                          <button
                            onClick={() => removeMember(m)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Work › Assignments */}
        {activeView === 'assignments' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Assignments ({classroom.assignments.length})
              </h2>
              <button
                onClick={() => {
                  loadTopics()
                  setEditingAssignment(null)
                  setShowAssignmentModal(true)
                }}
                className="px-4 py-2 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all text-sm"
              >
                + New Assignment
              </button>
            </div>
            {classroom.assignments.length === 0 ? (
              <div className="text-center py-12">
                <ClipboardList className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2">No assignments yet</h3>
                <p className="text-gray-500">Create your first assignment for this class</p>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingAssignments.map((a) => renderAssignmentCard(a, false))}
                {pastDueAssignments.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3">
                      Past due ({pastDueAssignments.length})
                    </h3>
                    <div className="space-y-3 opacity-90">
                      {pastDueAssignments.map((a) => renderAssignmentCard(a, true))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Work › Live games */}
        {activeView === 'competitions' && (
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all text-sm"
                  title="Put a live game on the calendar — students see it on their assignments page"
                >
                  <CalendarPlus className="w-4 h-4" aria-hidden="true" />
                  Schedule live game
                </button>
                <button
                  onClick={startLiveLobby}
                  disabled={startingLobby}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all text-sm disabled:opacity-50"
                  title="Run a real-time team game your students join live"
                >
                  <Play className="w-4 h-4" aria-hidden="true" />
                  {startingLobby ? 'Starting…' : 'Start live game'}
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-2 mb-4">
              <strong>Start live game</strong> runs a real-time team match your students join live from any device.{' '}
              <strong>Schedule live game</strong> puts one on the calendar — students see it on their assignments page, and you hit <strong>Launch now</strong> at game time.
            </p>
            {classroom.competitions.length === 0 ? (
              <div className="text-center py-12">
                <Swords className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" aria-hidden="true" />
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
                          <span>Topic: {topicTitle(c.topicSlug)}</span>
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all disabled:opacity-50"
                          title="Start this game now as a live lobby your students join by code"
                        >
                          <Play className="w-3.5 h-3.5" aria-hidden="true" />
                          {launchingCompId === c.id ? 'Launching…' : 'Launch now'}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Insights › Performance */}
        {activeView === 'performance' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Student Performance</h2>
              {perfData && perfData.students.length > 0 && (
                <div className="flex items-center gap-2">
                  <a
                    href={`/api/teacher/classrooms/${classroomId}/export?format=csv`}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    Export CSV
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
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2">No performance data yet</h3>
                <p className="text-gray-500">Students need to start working on topics first</p>
              </div>
            ) : (
              <>
                {/* Class Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-accent-subtle dark:bg-accent-light/10 text-center">
                    <div className="text-2xl font-bold text-accent">{perfData.classSummary.avgMastery}%</div>
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
                        <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" aria-hidden="true" />
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
                              className="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover disabled:opacity-50 transition-all"
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
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Exit Quiz Results</h3>
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
                                      Passed
                                    </span>
                                  ) : eq.mustRedoUnit ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                                      Must Redo Unit
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                      Can Retry
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

        {/* Insights › Gradebook */}
        {activeView === 'gradebook' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gradebook</h2>
            <Gradebook classroomId={classroomId} classroomName={classroom.name} />
          </div>
        )}

        {activeView === 'classplan' && <ClassPlan classroomId={classroomId} />}

        {activeView === 'engagement' && <ClassEngagement classroomId={classroomId} />}

        {/* Work › Announcements */}
        {activeView === 'announcements' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Announcements</h2>
            <ClassroomAnnouncements classroomId={classroomId} isTeacher={true} />
          </div>
        )}

        {/* Insights › Standards */}
        {activeView === 'standards' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Standards Mastery</h2>
            <StandardsMastery classroomId={classroomId} />
          </div>
        )}

        {/* Settings */}
        {activeView === 'settings' && (
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
                  className={inputCls}
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
                    className={inputCls}
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
                    className={inputCls}
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
                  className={inputCls}
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
                  className={`${inputCls} resize-none`}
                />
              </div>
              {settingsError && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">{settingsError}</p>
              )}
              {classroom.isOwner !== false && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={saveSettings}
                    disabled={saving || !editName.trim()}
                    className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 transition-all"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  {settingsDirty && !saving && (
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                      Unsaved changes — these fields don&rsquo;t save until you click Save.
                    </span>
                  )}
                  {settingsSaved && !settingsDirty && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      Saved
                    </span>
                  )}
                </div>
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
                      className="flex-1 px-4 py-2.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white text-sm"
                    />
                    <button
                      onClick={addCoTeacher}
                      disabled={!coTeacherEmail.trim() || addingCoTeacher}
                      className="px-4 py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 transition-all text-sm whitespace-nowrap"
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
                <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-1">
                  Class courses
                  {/* Auto-saves on toggle — the indicator is the only save UI, so keep it loud */}
                  {courseSaveState === 'saving' && (
                    <span className="text-xs font-normal text-gray-400">Saving…</span>
                  )}
                  {courseSaveState === 'saved' && (
                    <span className="inline-flex items-center gap-1 text-xs font-normal text-green-600 dark:text-green-400">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      Saved
                    </span>
                  )}
                  {courseSaveState === 'error' && (
                    <span className="text-xs font-normal text-red-600 dark:text-red-400" role="alert">
                      Save failed — toggle again to retry
                    </span>
                  )}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Pick the courses this class uses — changes here save automatically. Assignment creation
                  shows these first instead of every course on the platform.
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
                              ? 'border-accent bg-accent-subtle dark:bg-accent-light/20 text-accent-dark dark:text-accent-muted'
                              : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-muted'
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
                            className="accent-accent"
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
      <AssignmentModal
        open={showAssignmentModal}
        onClose={closeAssignmentModal}
        classroomId={classroomId}
        courses={courses}
        classCourses={classCourses}
        editing={editingAssignment}
        onSaved={onAssignmentSaved}
      />

      {/* Schedule live game (creates a ScheduledCompetition calendar entry) */}
      <FocusTrapDialog
        open={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        title="Schedule live game"
      >
        <div className="p-4 sm:p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Schedule live game</h2>
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
                className={inputCls}
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
                className={inputCls}
              >
                <option value="">Select a topic…</option>
                {courses.map((c) => (
                  <optgroup key={c.courseTitle} label={c.courseTitle}>
                    {c.topics.map((t: TopicOption) => (
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
                  className={inputCls}
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
                  className={inputCls}
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

      {/* Import students (CSV roster) — parse preview, then confirm */}
      <ImportRosterModal
        open={showImport}
        onClose={() => setShowImport(false)}
        classroomId={classroomId}
        joinCode={classroom.joinCode}
        onImported={loadClassroom}
      />

      {/* Accessible confirm dialog (replaces bare confirm() calls) */}
      <ConfirmDialog request={confirmReq} onClose={() => setConfirmReq(null)} />

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
