/**
 * PATCH /api/teacher/classrooms/[id]/students/[studentId]/ap-track — a
 * teacher pins (or clears) a student's AP difficulty track in one course
 * (ApTrackOverride, src/lib/ap-track.ts). Authorisation goes through
 * requireStudentInClassroom: the caller teaches the class and the student is
 * an active member.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest, NextResponse } from 'next/server'

const mockAccess = vi.fn()
const mockUpsert = vi.fn()
const mockDeleteMany = vi.fn()
const mockOverrideFindUnique = vi.fn()
const mockDiagFindFirst = vi.fn()

vi.mock('@/lib/teacher-auth', () => ({ requireStudentInClassroom: (...a: unknown[]) => mockAccess(...a) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    apTrackOverride: {
      upsert: (...a: unknown[]) => mockUpsert(...a),
      deleteMany: (...a: unknown[]) => mockDeleteMany(...a),
      findUnique: (...a: unknown[]) => mockOverrideFindUnique(...a),
    },
    diagnosticTest: { findFirst: (...a: unknown[]) => mockDiagFindFirst(...a) },
  },
}))

import { PATCH } from '@/app/api/teacher/classrooms/[id]/students/[studentId]/ap-track/route'

const call = (body: unknown, classroomId = 'c1', studentId = 's1') =>
  PATCH(
    new NextRequest(`http://localhost/api/teacher/classrooms/${classroomId}/students/${studentId}/ap-track`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    }),
    { params: Promise.resolve({ id: classroomId, studentId }) },
  )

const granted = { user: { id: 't1', role: 'TEACHER' }, classroom: { id: 'c1', name: 'Chem' }, isOwner: true, student: { id: 's1', name: 'Sam', email: 's@x.test' } }

beforeEach(() => {
  vi.clearAllMocks()
  mockAccess.mockResolvedValue(granted)
  mockUpsert.mockResolvedValue({})
  mockDeleteMany.mockResolvedValue({ count: 1 })
  mockDiagFindFirst.mockResolvedValue({ results: { totalCorrect: 28, totalQuestions: 33, percentage: 85 } })
})

describe('PATCH …/students/[studentId]/ap-track', () => {
  it('pins a track for the student in that course and returns the effective placement', async () => {
    mockOverrideFindUnique.mockResolvedValue({ track: 'foundation' })
    const res = await call({ courseSlug: 'ap-chemistry', track: 'foundation' })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      ok: true,
      override: 'foundation',
      apTrack: { track: 'foundation', label: 'Foundation track', source: 'teacher', override: 'foundation' },
    })
    expect(mockAccess).toHaveBeenCalledWith('c1', 's1')
    expect(mockUpsert).toHaveBeenCalledTimes(1)
    expect(mockUpsert.mock.calls[0][0]).toEqual({
      where: { userId_courseSlug: { userId: 's1', courseSlug: 'ap-chemistry' } },
      update: { track: 'foundation', setById: 't1' },
      create: { userId: 's1', courseSlug: 'ap-chemistry', track: 'foundation', setById: 't1' },
    })
    expect(mockDeleteMany).not.toHaveBeenCalled()
  })

  it('null clears the override and the student returns to automatic placement', async () => {
    mockOverrideFindUnique.mockResolvedValue(null)
    const res = await call({ courseSlug: 'ap-chemistry', track: null })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      ok: true,
      override: null,
      apTrack: { track: 'five', label: '5-track', source: 'diagnostic', override: null },
    })
    expect(mockDeleteMany).toHaveBeenCalledWith({ where: { userId: 's1', courseSlug: 'ap-chemistry' } })
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('refuses when the caller may not act on this student (not their class, inactive member)', async () => {
    for (const status of [401, 403, 404]) {
      mockAccess.mockResolvedValue({ error: NextResponse.json({ error: 'no' }, { status }) })
      const res = await call({ courseSlug: 'ap-chemistry', track: 'five' })
      expect(res.status).toBe(status)
    }
    expect(mockUpsert).not.toHaveBeenCalled()
    expect(mockDeleteMany).not.toHaveBeenCalled()
  })

  it('validates the course and the track', async () => {
    expect((await call({ courseSlug: 'ap-statistics', track: 'five' })).status).toBe(400)
    expect((await call({ courseSlug: 'sat-prep', track: 'five' })).status).toBe(400)
    expect((await call({ track: 'five' })).status).toBe(400)
    expect((await call({ courseSlug: 'ap-biology', track: 'five-mix' })).status).toBe(400)
    expect((await call({ courseSlug: 'ap-biology', track: 'Foundation' })).status).toBe(400)
    expect((await call({ courseSlug: 'ap-biology' })).status).toBe(400)
    expect((await call('not json')).status).toBe(400)
    expect(mockUpsert).not.toHaveBeenCalled()
    expect(mockDeleteMany).not.toHaveBeenCalled()
  })

  it('works for every flagship course', async () => {
    mockOverrideFindUnique.mockResolvedValue({ track: 'five' })
    for (const courseSlug of ['ap-chemistry', 'ap-biology', 'ap-physics-1', 'ap-calculus-ab']) {
      expect((await call({ courseSlug, track: 'five' })).status).toBe(200)
    }
    expect(mockUpsert).toHaveBeenCalledTimes(4)
  })
})
