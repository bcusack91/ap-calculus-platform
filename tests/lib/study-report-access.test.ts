/**
 * Who may read a student's study report: the class's owner, a co-teacher or an
 * admin — and only while the student is an ACTIVE member. (The older
 * student-report route read students who had left the class.)
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockUser = vi.fn()
const mockClassroom = vi.fn()
const mockCoTeacher = vi.fn()
const mockMember = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...a: unknown[]) => mockUser(...a) },
    classroom: { findUnique: (...a: unknown[]) => mockClassroom(...a) },
    classroomCoTeacher: { findUnique: (...a: unknown[]) => mockCoTeacher(...a) },
    classroomMember: { findUnique: (...a: unknown[]) => mockMember(...a) },
  },
}))

import { requireStudentInClassroom } from '@/lib/teacher-auth'

const student = { id: 's1', name: 'Sam', email: 's@x.test' }

describe('requireStudentInClassroom', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockAuth.mockResolvedValue({ user: { email: 't@x.test', role: 'TEACHER' } })
    mockUser.mockResolvedValue({ id: 't1', role: 'TEACHER' })
    mockClassroom.mockResolvedValue({ id: 'c1', teacherId: 't1', name: 'MCAT Tu/Th' })
    mockCoTeacher.mockResolvedValue(null)
    mockMember.mockResolvedValue({ isActive: true, user: student })
  })

  it('lets the owner read an active member', async () => {
    const r = await requireStudentInClassroom('c1', 's1')
    expect('error' in r).toBe(false)
    if (!('error' in r)) expect(r.student).toEqual(student)
  })

  it('lets a co-teacher read an active member', async () => {
    mockClassroom.mockResolvedValue({ id: 'c1', teacherId: 'someone-else', name: 'MCAT' })
    mockCoTeacher.mockResolvedValue({ id: 'co' })
    expect('error' in (await requireStudentInClassroom('c1', 's1'))).toBe(false)
  })

  it('refuses a student who left the class', async () => {
    mockMember.mockResolvedValue({ isActive: false, user: student })
    const r = await requireStudentInClassroom('c1', 's1')
    expect('error' in r && r.error?.status).toBe(404)
  })

  it('refuses a student who was never in it', async () => {
    mockMember.mockResolvedValue(null)
    const r = await requireStudentInClassroom('c1', 's1')
    expect('error' in r && r.error?.status).toBe(404)
  })

  it("refuses a teacher of a different class", async () => {
    mockClassroom.mockResolvedValue({ id: 'c1', teacherId: 'someone-else', name: 'MCAT' })
    const r = await requireStudentInClassroom('c1', 's1')
    expect('error' in r && r.error?.status).toBe(403)
    expect(mockMember).not.toHaveBeenCalled()
  })

  it('refuses students', async () => {
    mockAuth.mockResolvedValue({ user: { email: 's@x.test', role: 'FREE' } })
    const r = await requireStudentInClassroom('c1', 's1')
    expect('error' in r && r.error?.status).toBe(403)
  })
})
