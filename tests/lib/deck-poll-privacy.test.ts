/**
 * Live slide polls (owner rule 2026-10-13): the teacher sees how many of the
 * class have answered — never who — so recorded lessons can't show names.
 * Students see only their own choice until the teacher reveals.
 */
import { describe, it, expect, vi } from 'vitest'
import { NextRequest } from 'next/server'

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/live-session', () => ({ touchAttendance: vi.fn(async () => {}) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    liveSession: { findUnique: vi.fn(async () => ({ id: 's1', status: 'LIVE', classroomId: 'c1', classroom: { teacherId: 't1' } })) },
    user: { findUnique: vi.fn(async ({ where }: { where: { id: string } }) => ({ name: where.id, role: where.id === 't1' ? 'TEACHER' : 'STUDENT' })) },
    classroomCoTeacher: { findUnique: vi.fn(async () => null) },
    classroomMember: {
      findUnique: vi.fn(async () => ({ isActive: true })),
      count: vi.fn(async () => 8),
    },
    slideDeck: {
      findFirst: vi.fn(async () => ({
        id: 'd1', title: 'Thermo', topicSlug: 't', currentSlide: 0, status: 'ACTIVE', revealed: [],
        slides: [{ kind: 'poll', question: 'Q?', options: ['A', 'B', 'C', 'D'], correctIndex: 1, explanation: 'Because.' }],
      })),
    },
    slideResponse: {
      findMany: vi.fn(async () => [
        { userId: 'stu1', userName: 'Jaslyn Blanco', answerIndex: 1 },
        { userId: 'stu2', userName: 'Sabrina Bogat', answerIndex: 1 },
        { userId: 'stu3', userName: 'Farina Hussain', answerIndex: 2 },
      ]),
    },
    liveBoard: { findUnique: vi.fn(async () => null) },
  },
}))

const { GET } = await import('@/app/api/live-sessions/[id]/deck/route')
const get = async () => (await GET(new NextRequest('http://localhost/x'), { params: Promise.resolve({ id: 's1' }) })).json()

describe('live poll privacy', () => {
  it('teacher: tallies and "3 of 8 answered", with no student names anywhere', async () => {
    mockAuth.mockResolvedValue({ user: { id: 't1' } })
    const { deck } = await get()
    expect(deck.poll).toEqual({ counts: [0, 2, 1, 0], total: 3, myAnswer: null, classSize: 8 })
    expect(JSON.stringify(deck)).not.toMatch(/Jaslyn|Sabrina|Farina/)
  })

  it('student before the reveal: only their own answer', async () => {
    mockAuth.mockResolvedValue({ user: { id: 'stu3' } })
    const { deck } = await get()
    expect(deck.poll).toEqual({ counts: null, total: null, myAnswer: 2 })
  })
})
