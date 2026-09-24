/**
 * Needs Attention "mark as seen". The list is recomputed live on every load,
 * so these rules decide whether a cleared item stays cleared — and, just as
 * important, whether a NEW problem for the same student still surfaces.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { applyDismissals, INACTIVITY_REASON, type AttentionEntry } from '@/lib/attention-dismissals'

const d = (iso: string) => new Date(iso)
const entry = (studentId: string, items: [string, number][]): AttentionEntry => ({
  studentId,
  studentName: studentId,
  classroomId: 'c1',
  items: items.map(([reason, weight]) => ({ reason, weight })),
})

describe('applyDismissals', () => {
  it('hides a dismissed reason and drops a student left with nothing', () => {
    const rows = applyDismissals(
      [entry('s1', [['scored below target on "Quiz 1"', 3]])],
      [{ studentId: 's1', reason: 'scored below target on "Quiz 1"', dismissedAt: d('2026-09-01') }],
      new Map(),
    )
    expect(rows).toEqual([])
  })

  it('still surfaces a NEW problem for a student whose old one was cleared', () => {
    const rows = applyDismissals(
      [entry('s1', [['scored below target on "Quiz 1"', 3], ['scored below target on "Quiz 2"', 3]])],
      [{ studentId: 's1', reason: 'scored below target on "Quiz 1"', dismissedAt: d('2026-09-01') }],
      new Map(),
    )
    expect(rows).toHaveLength(1)
    expect(rows[0].reasons).toEqual(['scored below target on "Quiz 2"'])
    // Severity counts only what is still showing.
    expect(rows[0].severity).toBe(3)
  })

  it('keeps an inactivity dismissal only for the same quiet spell', () => {
    const dismissed = [{ studentId: 's1', reason: INACTIVITY_REASON, dismissedAt: d('2026-09-10') }]
    const items = [entry('s1', [[INACTIVITY_REASON, 1]])]
    // No activity since the dismissal: still the same spell, stays hidden.
    expect(applyDismissals(items, dismissed, new Map([['s1', d('2026-08-20')]]))).toEqual([])
    // Active after the dismissal, then quiet for 14 days again: a new problem.
    expect(applyDismissals(items, dismissed, new Map([['s1', d('2026-09-12')]]))).toHaveLength(1)
  })

  it('does not let one student\'s dismissal hide another student', () => {
    const rows = applyDismissals(
      [entry('s1', [['has not submitted "HW"', 2]]), entry('s2', [['has not submitted "HW"', 2]])],
      [{ studentId: 's1', reason: 'has not submitted "HW"', dismissedAt: d('2026-09-01') }],
      new Map(),
    )
    expect(rows.map((r) => r.studentId)).toEqual(['s2'])
  })
})

// ---------------- the route ----------------

const mockMemberFindFirst = vi.fn()
const mockUpsert = vi.fn()
const mockDeleteMany = vi.fn()

vi.mock('@/lib/teacher-auth', () => ({
  requireTeacher: async () => ({ user: { id: 'teacher-1' } }),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    classroomMember: { findFirst: (...a: unknown[]) => mockMemberFindFirst(...a) },
    attentionDismissal: {
      upsert: (...a: unknown[]) => mockUpsert(...a),
      deleteMany: (...a: unknown[]) => mockDeleteMany(...a),
    },
    $transaction: async (ops: Promise<unknown>[]) => Promise.all(ops),
  },
}))

const req = (method: string, body: unknown) =>
  new Request('http://localhost/api/teacher/attention/dismiss', { method, body: JSON.stringify(body) })

beforeEach(() => {
  vi.clearAllMocks()
  mockMemberFindFirst.mockResolvedValue({ id: 'm1' })
  mockUpsert.mockResolvedValue({})
  mockDeleteMany.mockResolvedValue({ count: 1 })
})

describe('POST/DELETE /api/teacher/attention/dismiss', () => {
  it('records one dismissal per reason for this teacher', async () => {
    const { POST } = await import('@/app/api/teacher/attention/dismiss/route')
    const res = await POST(req('POST', { studentId: 's1', reasons: ['a', 'b', 'a'] }))
    expect(res.status).toBe(200)
    expect(mockUpsert).toHaveBeenCalledTimes(2) // de-duplicated
    expect(mockUpsert.mock.calls[0][0].create).toMatchObject({ teacherId: 'teacher-1', studentId: 's1', reason: 'a' })
  })

  it('refuses a student who is not in any of this teacher\'s classes', async () => {
    mockMemberFindFirst.mockResolvedValue(null)
    const { POST } = await import('@/app/api/teacher/attention/dismiss/route')
    const res = await POST(req('POST', { studentId: 'stranger', reasons: ['a'] }))
    expect(res.status).toBe(404)
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('checks classes the teacher owns OR co-teaches', async () => {
    const { POST } = await import('@/app/api/teacher/attention/dismiss/route')
    await POST(req('POST', { studentId: 's1', reasons: ['a'] }))
    const where = mockMemberFindFirst.mock.calls[0][0].where
    expect(where.classroom.OR).toEqual([
      { teacherId: 'teacher-1' },
      { coTeachers: { some: { userId: 'teacher-1' } } },
    ])
  })

  it.each([[{}], [{ studentId: 's1' }], [{ studentId: 's1', reasons: [] }], [{ studentId: 's1', reasons: [5] }]])(
    'rejects a malformed body %j without writing',
    async (body) => {
      const { POST } = await import('@/app/api/teacher/attention/dismiss/route')
      const res = await POST(req('POST', body))
      expect(res.status).toBe(400)
      expect(mockUpsert).not.toHaveBeenCalled()
    },
  )

  it('undo removes only this teacher\'s dismissals', async () => {
    const { DELETE } = await import('@/app/api/teacher/attention/dismiss/route')
    const res = await DELETE(req('DELETE', { studentId: 's1', reasons: ['a'] }))
    expect(res.status).toBe(200)
    expect(mockDeleteMany).toHaveBeenCalledWith({
      where: { teacherId: 'teacher-1', studentId: 's1', reason: { in: ['a'] } },
    })
  })
})
