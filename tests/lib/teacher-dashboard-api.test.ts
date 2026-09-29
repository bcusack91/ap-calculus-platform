/**
 * GET /api/teacher/dashboard — the first-week additions.
 *
 * Regressions guarded here:
 *   - A new teacher saw a red "0%" Avg Mastery: the API reported 0 when there
 *     was nothing to average. It now reports null.
 *   - Rostered students who never signed in (or never started) were left out
 *     of Needs Attention entirely.
 *   - "Scored below target" compared a 0-1 score (as a percent) with the 0-1
 *     requiredScore, so nobody was ever flagged; an unset bar now uses the
 *     site pass mark.
 *   - The Getting started checklist ticks each step from real rows.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  INACTIVITY_REASON,
  NEVER_SIGNED_IN_REASON,
  NOT_STARTED_REASON,
  membershipAttention,
  scoredBelowTarget,
} from '@/lib/attention-dismissals'
import { summarizeActivity } from '@/lib/student-activity'
import {
  GETTING_STARTED_STEPS,
  gettingStartedStatus,
  nextGettingStartedStep,
} from '@/lib/teacher-getting-started'

const NOW = new Date('2026-09-28T12:00:00.000Z')
const daysAgo = (n: number) => new Date(NOW.getTime() - n * 24 * 60 * 60 * 1000)

// ---------------------------------------------------------------- mocks ----
const m = {
  requireTeacher: vi.fn(),
  classrooms: vi.fn(),
  members: vi.fn(),
  submissionsFindMany: vi.fn(),
  assignmentFindMany: vi.fn(),
  assignmentCount: vi.fn(),
  competitions: vi.fn(),
  progressAgg: vi.fn(),
  users: vi.fn(),
  dismissals: vi.fn(),
  accounts: vi.fn(),
  topicGroup: vi.fn(),
  exitGroup: vi.fn(),
  diagGroup: vi.fn(),
  cardGroup: vi.fn(),
  classDiagCount: vi.fn(),
  lobbyCount: vi.fn(),
  liveCount: vi.fn(),
}

vi.mock('@/lib/teacher-auth', () => ({ requireTeacher: () => m.requireTeacher() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    classroom: { findMany: (...a: unknown[]) => m.classrooms(...a) },
    classroomMember: { findMany: (...a: unknown[]) => m.members(...a) },
    assignmentSubmission: { findMany: (...a: unknown[]) => m.submissionsFindMany(...a) },
    assignment: { findMany: (...a: unknown[]) => m.assignmentFindMany(...a), count: (...a: unknown[]) => m.assignmentCount(...a) },
    scheduledCompetition: { findMany: (...a: unknown[]) => m.competitions(...a) },
    topicProgress: { aggregate: (...a: unknown[]) => m.progressAgg(...a), groupBy: (...a: unknown[]) => m.topicGroup(...a) },
    user: { findMany: (...a: unknown[]) => m.users(...a) },
    attentionDismissal: { findMany: (...a: unknown[]) => m.dismissals(...a) },
    account: { findMany: (...a: unknown[]) => m.accounts(...a) },
    exitQuizAttempt: { groupBy: (...a: unknown[]) => m.exitGroup(...a) },
    diagnosticTest: { groupBy: (...a: unknown[]) => m.diagGroup(...a) },
    flashcardDailyActivity: { groupBy: (...a: unknown[]) => m.cardGroup(...a) },
    classDiagnostic: { count: (...a: unknown[]) => m.classDiagCount(...a) },
    teacherLobby: { count: (...a: unknown[]) => m.lobbyCount(...a) },
    liveSession: { count: (...a: unknown[]) => m.liveCount(...a) },
  },
}))

const classroom = (id: string, teacherId = 'teacher-1') => ({
  id, name: id, teacherId, joinCode: 'ABC123', isActive: true, createdAt: daysAgo(10),
  _count: { members: 0, assignments: 0, competitions: 0 },
})

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
  for (const fn of Object.values(m)) fn.mockReset()
  m.requireTeacher.mockResolvedValue({ user: { id: 'teacher-1' } })
  m.classrooms.mockResolvedValue([])
  m.members.mockResolvedValue([])
  m.submissionsFindMany.mockResolvedValue([])
  m.assignmentFindMany.mockResolvedValue([])
  m.assignmentCount.mockResolvedValue(0)
  m.competitions.mockResolvedValue([])
  m.progressAgg.mockResolvedValue({ _avg: { masteryLevel: null } })
  m.users.mockResolvedValue([])
  m.dismissals.mockResolvedValue([])
  m.accounts.mockResolvedValue([])
  m.topicGroup.mockResolvedValue([])
  m.exitGroup.mockResolvedValue([])
  m.diagGroup.mockResolvedValue([])
  m.cardGroup.mockResolvedValue([])
  m.classDiagCount.mockResolvedValue(0)
  m.lobbyCount.mockResolvedValue(0)
  m.liveCount.mockResolvedValue(0)
})

const getDashboard = async () => {
  const { GET } = await import('@/app/api/teacher/dashboard/route')
  const res = await GET()
  expect(res.status).toBe(200)
  return res.json()
}

describe('a brand-new teacher', () => {
  it('reports no average (not 0%) and an empty checklist', async () => {
    const body = await getDashboard()
    expect(body.stats.avgMastery).toBeNull()
    expect(body.stats.totalStudents).toBe(0)
    expect(body.needsAttention).toEqual([])
    expect(body.gettingStarted.classroomId).toBeNull()
    expect(Object.values(body.gettingStarted.steps).every((v) => v === false)).toBe(true)
  })

  it('reports no average while students have no progress yet', async () => {
    m.classrooms.mockResolvedValue([classroom('c1')])
    m.members.mockResolvedValue([{ userId: 's1', classroomId: 'c1', joinedAt: daysAgo(1) }])
    const body = await getDashboard()
    expect(body.stats.totalStudents).toBe(1)
    expect(body.stats.avgMastery).toBeNull()
  })
})

describe('Getting started detection', () => {
  it('ticks each step from real rows and deep-links into an owned class', async () => {
    m.classrooms.mockResolvedValue([classroom('co-taught', 'someone-else'), classroom('mine')])
    m.members.mockResolvedValue([
      { userId: 'imported', classroomId: 'mine', joinedAt: daysAgo(1) },
      { userId: 'joined', classroomId: 'mine', joinedAt: daysAgo(1) },
    ])
    // 'joined' created their own account (password); 'imported' never signed in.
    m.users.mockImplementation((args: { where?: { password?: unknown } }) =>
      Promise.resolve(args?.where?.password ? [{ id: 'joined' }] : []),
    )
    m.classDiagCount.mockResolvedValue(1)
    m.assignmentCount.mockResolvedValue(0)
    m.lobbyCount.mockResolvedValue(0)
    m.liveCount.mockResolvedValue(2)

    const body = await getDashboard()
    expect(body.gettingStarted.classroomId).toBe('mine')
    expect(body.gettingStarted.steps).toEqual({
      createClass: true,
      shareCode: true,
      studentJoined: true,
      assignDiagnostic: true,
      assignLesson: false,
      runGameOrLive: true,
    })
    // Lesson detection counts the two lesson-type assignments only.
    expect(m.assignmentCount.mock.calls[0][0].where.type).toEqual({ in: ['INTERACTIVE_LESSON', 'QUIZ'] })
    // Student-hosted lobbies are not the teacher running a class game.
    expect(m.lobbyCount.mock.calls[0][0].where).toEqual({ teacherId: 'teacher-1', studentHosted: false })
  })

  it('does not count an imported roster as a student having joined', async () => {
    m.classrooms.mockResolvedValue([classroom('c1')])
    m.members.mockResolvedValue([{ userId: 'imported', classroomId: 'c1', joinedAt: daysAgo(1) }])
    const body = await getDashboard()
    expect(body.gettingStarted.steps.shareCode).toBe(true)
    expect(body.gettingStarted.steps.studentJoined).toBe(false)
  })
})

describe('Needs Attention', () => {
  it('lists a rostered student who has not signed in after the grace period', async () => {
    m.classrooms.mockResolvedValue([classroom('c1')])
    m.members.mockResolvedValue([
      { userId: 'old-import', classroomId: 'c1', joinedAt: daysAgo(5) },
      { userId: 'new-import', classroomId: 'c1', joinedAt: daysAgo(1) },
    ])
    m.users.mockImplementation((args: { where?: { password?: unknown } }) =>
      Promise.resolve(args?.where?.password ? [] : [
        { id: 'old-import', name: 'Old Import', email: null },
        { id: 'new-import', name: 'New Import', email: null },
      ]),
    )
    const body = await getDashboard()
    expect(body.needsAttention).toHaveLength(1)
    expect(body.needsAttention[0]).toMatchObject({
      studentId: 'old-import',
      studentName: 'Old Import',
      reasons: [NEVER_SIGNED_IN_REASON],
    })
  })

  it('keeps that reason hidden once the teacher marks it as seen', async () => {
    m.classrooms.mockResolvedValue([classroom('c1')])
    m.members.mockResolvedValue([{ userId: 'old-import', classroomId: 'c1', joinedAt: daysAgo(5) }])
    m.dismissals.mockResolvedValue([{ studentId: 'old-import', reason: NEVER_SIGNED_IN_REASON, dismissedAt: daysAgo(1) }])
    const body = await getDashboard()
    expect(body.needsAttention).toEqual([])
  })

  it('flags a graded score below the assignment’s 0-1 bar', async () => {
    m.classrooms.mockResolvedValue([classroom('c1')])
    m.members.mockResolvedValue([{ userId: 's1', classroomId: 'c1', joinedAt: daysAgo(30) }])
    m.topicGroup.mockResolvedValue([{ userId: 's1', _max: { lastAccessed: daysAgo(1) } }])
    m.submissionsFindMany.mockImplementation((args: { where?: { status?: string } }) =>
      Promise.resolve(args?.where?.status === 'COMPLETED' ? [{
        score: 0.6,
        student: { id: 's1', name: 'Sam', email: null },
        assignment: { title: 'Limits', requiredScore: 0.8, classroomId: 'c1' },
      }] : []),
    )
    const body = await getDashboard()
    expect(body.needsAttention[0].reasons).toEqual(['scored below target on "Limits"'])
  })
})

// ------------------------------------------------------- pure helpers ----
describe('scoredBelowTarget', () => {
  it('compares fractions with fractions, and falls back to the pass mark', () => {
    expect(scoredBelowTarget(0.6, 0.8)).toBe(true)
    expect(scoredBelowTarget(0.8, 0.8)).toBe(false)
    expect(scoredBelowTarget(0.75, null)).toBe(true) // site pass mark is 80%
    expect(scoredBelowTarget(0.85, null)).toBe(false)
    expect(scoredBelowTarget(null, 0.8)).toBe(false)
  })
})

describe('summarizeActivity', () => {
  it('treats a password, an OAuth account or any activity as signed in', () => {
    const at = daysAgo(2)
    const out = summarizeActivity(['pw', 'oauth', 'studied', 'import'], {
      withPassword: ['pw'],
      withAccount: ['oauth'],
      activity: [['studied', at], ['studied', daysAgo(9)], ['import', null]],
    })
    expect(out.get('pw')).toEqual({ signedIn: true, lastActiveAt: null })
    expect(out.get('oauth')).toEqual({ signedIn: true, lastActiveAt: null })
    expect(out.get('studied')).toEqual({ signedIn: true, lastActiveAt: at })
    expect(out.get('import')).toEqual({ signedIn: false, lastActiveAt: null })
  })
})

describe('membershipAttention', () => {
  const act = (signedIn: boolean, lastActiveAt: Date | null) => ({ signedIn, lastActiveAt })
  it('names never-signed-in, not-started and inactive students, once each', () => {
    const rows = membershipAttention(
      [
        { userId: 'a', classroomId: 'c1', joinedAt: daysAgo(10) },
        { userId: 'a', classroomId: 'c2', joinedAt: daysAgo(10) },
        { userId: 'b', classroomId: 'c1', joinedAt: daysAgo(10) },
        { userId: 'c', classroomId: 'c1', joinedAt: daysAgo(40) },
        { userId: 'd', classroomId: 'c1', joinedAt: daysAgo(40) },
        { userId: 'e', classroomId: 'c1', joinedAt: daysAgo(1) },
      ],
      new Map([
        ['a', act(false, null)],
        ['b', act(true, null)],
        ['c', act(true, daysAgo(20))],
        ['d', act(true, daysAgo(2))],
        ['e', act(false, null)],
      ]),
      NOW,
    )
    expect(rows.map((r) => [r.userId, r.reason])).toEqual([
      ['a', NEVER_SIGNED_IN_REASON],
      ['b', NOT_STARTED_REASON],
      ['c', INACTIVITY_REASON],
    ])
  })
})

describe('gettingStartedStatus', () => {
  it('orders the steps and finds the next one', () => {
    expect(GETTING_STARTED_STEPS.map((s) => s.key)).toEqual([
      'createClass', 'shareCode', 'studentJoined', 'assignDiagnostic', 'assignLesson', 'runGameOrLive',
    ])
    const status = gettingStartedStatus({
      classroomCount: 1, memberCount: 3, signedInMemberCount: 0,
      diagnosticCount: 0, lessonAssignmentCount: 2, classGameCount: 0, liveLessonCount: 0,
    })
    expect(nextGettingStartedStep(status)?.key).toBe('studentJoined')
  })

  it('deep-links each step to where it happens', () => {
    const href = (key: string) => GETTING_STARTED_STEPS.find((s) => s.key === key)!.href('c1')
    expect(href('shareCode')).toBe('/teacher/classroom/c1?share=1')
    expect(href('assignDiagnostic')).toBe('/teacher/classroom/c1?tab=work&assign=diagnostic')
    expect(href('assignLesson')).toBe('/teacher/classroom/c1?tab=work&assign=lesson')
    expect(href('runGameOrLive')).toBe('/teacher/classroom/c1?tab=work&view=competitions')
  })
})
