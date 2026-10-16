/**
 * GET /api/calendar: a cycle card (and a sync) for every readiness course the
 * student is in — MCAT, SAT and the AP courses — picked from the diagnostics
 * they took, their cycle plans and their classes' dated diagnostics, and
 * nothing for courses they never touched.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

const h = vi.hoisted(() => ({
  diagFindMany: vi.fn(),
  planFindMany: vi.fn(),
  classDiagFindMany: vi.fn(),
  taskCount: vi.fn(),
  taskFindMany: vi.fn(),
  sync: vi.fn(),
  due: vi.fn(),
}))

vi.mock('@/lib/auth', () => ({ auth: () => Promise.resolve({ user: { id: 'stu-1' } }) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: { findMany: (...a: unknown[]) => h.diagFindMany(...a), findFirst: vi.fn().mockResolvedValue(null) },
    studyPlan: { findMany: (...a: unknown[]) => h.planFindMany(...a) },
    classDiagnostic: { findMany: (...a: unknown[]) => h.classDiagFindMany(...a) },
    studyTask: { count: (...a: unknown[]) => h.taskCount(...a), findMany: (...a: unknown[]) => h.taskFindMany(...a) },
    classroomMember: { findMany: vi.fn().mockResolvedValue([]) },
    assignment: { findMany: vi.fn().mockResolvedValue([]) },
    topic: { findMany: vi.fn().mockResolvedValue([]) },
  },
}))
vi.mock('@/lib/cycle-scheduler-server', () => ({
  syncCycleSchedule: (...a: unknown[]) => h.sync(...a),
  effectiveDueDate: (...a: unknown[]) => h.due(...a),
}))

import { GET } from '@/app/api/calendar/route'

const call = (qs = '') => GET(new NextRequest(`http://localhost/api/calendar${qs}`))

beforeEach(() => {
  vi.clearAllMocks()
  h.diagFindMany.mockResolvedValue([])
  h.planFindMany.mockResolvedValue([])
  h.classDiagFindMany.mockResolvedValue([])
  h.taskCount.mockResolvedValue(0)
  h.taskFindMany.mockResolvedValue([])
  h.sync.mockResolvedValue(null)
  h.due.mockResolvedValue({ dueDate: null, source: null })
})

describe('calendar cycles', () => {
  it('syncs and shows each course whose diagnostic was taken (AP included), in readiness order', async () => {
    h.diagFindMany.mockResolvedValue([{ category: 'ap-chem-diagnostic' }, { category: 'calcab-diagnostic-short' }, { category: 'mcat-full-diagnostic' }, { category: 'ap-practice-exam:ap-bio' }])
    h.taskCount.mockResolvedValue(3)
    const res = await call('?sync=1')
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.cycles.map((c: { course: string }) => c.course)).toEqual(['mcat', 'calcab', 'ap-chem'])
    expect(body.cycles.find((c: { course: string }) => c.course === 'ap-chem')).toMatchObject({ label: 'AP Chemistry', hasDiagnostic: true, pending: 3 })
    expect(h.sync.mock.calls.map((c) => c[1]).sort()).toEqual(['ap-chem', 'calcab', 'mcat'])
    // A practice-exam attempt is not a diagnostic: no AP Bio card.
    expect(body.cycles.some((c: { course: string }) => c.course === 'ap-bio')).toBe(false)
    // Only the touched courses were checked.
    expect(h.due).toHaveBeenCalledTimes(3)
  })

  it('shows an AP course with a teacher due date before the diagnostic is taken, without syncing it', async () => {
    h.classDiagFindMany.mockResolvedValue([{ courseKey: 'ap-physics1' }])
    h.due.mockImplementation(async (_u: string, course: string) =>
      course === 'ap-physics1' ? { dueDate: new Date('2026-10-30T12:00:00Z'), source: 'class', classroomName: 'Physics P2' } : { dueDate: null, source: null },
    )
    const body = await (await call('?sync=1')).json()
    expect(body.cycles).toEqual([
      { course: 'ap-physics1', label: 'AP Physics 1', dueDate: '2026-10-30T12:00:00.000Z', source: 'class', classroomName: 'Physics P2', pending: 0, hasDiagnostic: false },
    ])
    expect(h.sync).not.toHaveBeenCalled()
  })

  it('checks nothing for a student with no cycle course', async () => {
    const body = await (await call()).json()
    expect(body.cycles).toEqual([])
    expect(h.due).not.toHaveBeenCalled()
  })
})
