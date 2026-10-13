/**
 * GET /api/activity/my-time — a student's own active study time (owner
 * request 2026-10-13: students asked to see what their teacher sees).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

const mockAuth = vi.fn()
const mockFindMany = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({ prisma: { activeTimeDaily: { findMany: (...a: unknown[]) => mockFindMany(...a) } } }))

const { GET } = await import('@/app/api/activity/my-time/route')
const get = (qs: string) => GET(new NextRequest(`http://localhost/api/activity/my-time${qs}`))
const day = (s: string) => new Date(`${s}T00:00:00.000Z`)

beforeEach(() => {
  vi.useFakeTimers()
  // 2026-10-13 03:00 UTC = the evening of Oct 12 in New York (UTC-4, tz=240).
  vi.setSystemTime(new Date('2026-10-13T03:00:00.000Z'))
  mockAuth.mockResolvedValue({ user: { id: 'stu' } })
  mockFindMany.mockReset()
  mockFindMany.mockResolvedValue([
    { day: day('2026-10-10'), surface: 'LESSON', seconds: 1800 },
    { day: day('2026-10-10'), surface: 'FLASHCARDS', seconds: 600 },
    { day: day('2026-10-12'), surface: 'EXIT_QUIZ', seconds: 300 },
    { day: day('2026-10-12'), surface: 'DIAGNOSTIC', seconds: 2400 },
  ])
})
afterEach(() => vi.useRealTimers())

describe('GET /api/activity/my-time', () => {
  it('requires sign-in', async () => {
    mockAuth.mockResolvedValueOnce(null)
    expect((await get('')).status).toBe(401)
  })

  it('reads only the signed-in student, last 7 local days by default, and sums by activity', async () => {
    const body = await (await get('?tz=240')).json()
    const where = mockFindMany.mock.calls[0][0].where
    expect(where.userId).toBe('stu')
    // The student's today is Oct 12, so 7 days = Oct 6 through Oct 12.
    expect(where.day.gte.toISOString().slice(0, 10)).toBe('2026-10-06')
    expect(body).toMatchObject({ range: '7d', from: '2026-10-06', today: '2026-10-12' })
    expect(body.activeTime.totalSeconds).toBe(5100)
    expect(body.activeTime.activeDays).toBe(2)
    expect(body.activeTime.bySurface).toMatchObject({ LESSON: 1800, FLASHCARDS: 600, EXIT_QUIZ: 300, DIAGNOSTIC: 2400, OTHER: 0 })
  })

  it('30 days starts 29 days back; all time has no lower bound', async () => {
    await get('?range=30d&tz=240')
    expect(mockFindMany.mock.calls[0][0].where.day.gte.toISOString().slice(0, 10)).toBe('2026-09-13')
    const all = await (await get('?range=all')).json()
    expect(mockFindMany.mock.calls[1][0].where.day).toBeUndefined()
    expect(all.from).toBeNull()
  })
})
