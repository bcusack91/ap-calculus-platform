// @vitest-environment jsdom
/**
 * Site-wide active study time (teacher reports, owner request 2026-09-29).
 *
 * The tracker banks active seconds against what the student is doing and
 * sends them about once a minute; the server adds them to ActiveTimeDaily for
 * the student's local day. These tests pin: the path → activity mapping,
 * page overrides (quiz overlays, timed tests), the wall-time clamp that stops
 * two tabs or a retry from double-counting, and that failed sends are kept.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, renderHook, act, cleanup } from '@testing-library/react'
import { surfaceForPath, clampSegments, segmentKey, parseSegmentKey } from '@/lib/activity-surface'
import { studentLocalDay } from '@/lib/study-tracking'

const mockAuth = vi.fn()
const mockAggregate = vi.fn()
const mockUpsert = vi.fn()
const mockTransaction = vi.fn()
const mockTopics = vi.fn()
const mockUser = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    activeTimeDaily: {
      aggregate: (...a: unknown[]) => mockAggregate(...a),
      upsert: (a: unknown) => {
        mockUpsert(a)
        return a
      },
    },
    topic: { findMany: (...a: unknown[]) => mockTopics(...a) },
    user: { findUnique: (...a: unknown[]) => mockUser(...a) },
    classroomMember: { findUnique: vi.fn(async () => ({ isActive: true })) },
    classroom: { findUnique: vi.fn(async () => ({ teacherId: 't1', isActive: true })) },
    classroomCoTeacher: { findUnique: vi.fn(async () => null) },
    $transaction: (ops: unknown[]) => mockTransaction(ops),
  },
}))

const mockUseSession = vi.fn()
vi.mock('next-auth/react', () => ({ useSession: () => mockUseSession() }))
let mockPath = '/dashboard'
vi.mock('next/navigation', () => ({ usePathname: () => mockPath }))

import { POST } from '@/app/api/activity/time/route'
import ActiveTimeTracker from '@/components/ActiveTimeTracker'
import { useActivitySurface, getActivityOverride } from '@/hooks/useActivitySurface'

describe('surfaceForPath', () => {
  it('maps pages to what the student is doing', () => {
    expect(surfaceForPath('/topics/enzyme-kinetics/interactive')).toEqual({ surface: 'LESSON', topicSlug: 'enzyme-kinetics' })
    expect(surfaceForPath('/topics/enzyme-kinetics')).toEqual({ surface: 'LESSON', topicSlug: 'enzyme-kinetics' })
    expect(surfaceForPath('/flashcards/review/start?topic=x').surface).toBe('FLASHCARDS')
    expect(surfaceForPath('/mcat-diagnostic').surface).toBe('DIAGNOSTIC')
    expect(surfaceForPath('/sat-diagnostic').surface).toBe('DIAGNOSTIC')
    expect(surfaceForPath('/mcat-full-length').surface).toBe('FULL_LENGTH')
    expect(surfaceForPath('/ap-chem-full-exam').surface).toBe('FULL_LENGTH')
    expect(surfaceForPath('/mcat-practice').surface).toBe('PRACTICE_TEST')
    expect(surfaceForPath('/mcat-cars').surface).toBe('PRACTICE_TEST')
    expect(surfaceForPath('/ap-bio-unit-tests').surface).toBe('PRACTICE_TEST')
    expect(surfaceForPath('/competitive/mcat').surface).toBe('COMPETITIVE')
    expect(surfaceForPath('/dashboard').surface).toBe('OTHER')
    expect(surfaceForPath(null).surface).toBe('OTHER')
  })

  it('round-trips buffer keys', () => {
    const s = { surface: 'EXIT_QUIZ' as const, topicSlug: 'amino-acids', courseSlug: 'mcat-prep' }
    expect(parseSegmentKey(segmentKey(s))).toEqual(s)
    expect(parseSegmentKey('BOGUS||').surface).toBe('OTHER')
  })
})

describe('clampSegments', () => {
  it('passes through when within the allowance', () => {
    expect(clampSegments([{ seconds: 30 }, { seconds: 20 }], 60)).toEqual([{ seconds: 30 }, { seconds: 20 }])
  })
  it('scales down proportionally when over', () => {
    expect(clampSegments([{ seconds: 90 }, { seconds: 30 }], 60)).toEqual([{ seconds: 45 }, { seconds: 15 }])
  })
  it('drops everything when no wall time has passed', () => {
    expect(clampSegments([{ seconds: 30 }], 0)).toEqual([])
  })
})

describe('studentLocalDay', () => {
  it('uses the student offset (JS getTimezoneOffset convention)', () => {
    // 03:00 UTC on Sept 30 is still Sept 29 in New York (offset 240).
    const t = new Date('2026-09-30T03:00:00Z')
    expect(studentLocalDay(t, 240).toISOString()).toBe('2026-09-29T00:00:00.000Z')
    expect(studentLocalDay(t).toISOString()).toBe('2026-09-30T00:00:00.000Z')
  })
})

describe('POST /api/activity/time', () => {
  const req = (body: unknown) => new Request('http://x/api/activity/time', { method: 'POST', body: JSON.stringify(body) })

  beforeEach(() => {
    vi.useFakeTimers({ now: new Date('2026-09-29T15:00:00Z') })
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockAggregate.mockReset()
    mockUpsert.mockReset()
    mockTransaction.mockReset().mockResolvedValue([])
    mockTopics.mockReset().mockResolvedValue([{ slug: 'amino-acids', category: { course: { slug: 'mcat-prep' } } }])
    mockUser.mockReset().mockResolvedValue({ studyContext: 'personal' })
  })
  afterEach(() => vi.useRealTimers())

  it('401s signed out', async () => {
    mockAuth.mockResolvedValue(null)
    expect((await POST(req({ segments: [{ surface: 'LESSON', seconds: 5 }] }))).status).toBe(401)
  })

  it('rejects unknown surfaces and bad seconds', async () => {
    expect((await POST(req({ segments: [{ surface: 'NAPPING', seconds: 5 }] }))).status).toBe(400)
    expect((await POST(req({ segments: [{ surface: 'LESSON', seconds: 0 }] }))).status).toBe(400)
  })

  it('adds seconds to the local day, fills the course from the topic, merges same-row segments', async () => {
    mockAggregate.mockResolvedValue({ _max: { updatedAt: new Date('2026-09-29T14:58:00Z') } })
    const res = await POST(
      req({
        segments: [
          { surface: 'LESSON', topicSlug: 'amino-acids', seconds: 40 },
          { surface: 'LESSON', topicSlug: 'amino-acids', seconds: 20 },
          { surface: 'FLASHCARDS', seconds: 30 },
        ],
        tzOffset: 240,
      }),
    )
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true, recorded: 90 })
    const calls = mockUpsert.mock.calls.map((c) => c[0])
    expect(calls).toHaveLength(2)
    expect(calls[0].create).toMatchObject({ surface: 'LESSON', courseSlug: 'mcat-prep', classroomId: '', seconds: 60 })
    expect(calls[0].create.day.toISOString()).toBe('2026-09-29T00:00:00.000Z')
    expect(calls[0].update).toEqual({ seconds: { increment: 60 } })
  })

  it('clamps to wall time since the last update (no double counting across tabs)', async () => {
    // Last update 10 s ago → at most 10 + 30 s slack = 40 s.
    mockAggregate.mockResolvedValue({ _max: { updatedAt: new Date('2026-09-29T14:59:50Z') } })
    const res = await POST(req({ segments: [{ surface: 'LESSON', seconds: 60 }, { surface: 'FLASHCARDS', seconds: 60 }] }))
    expect((await res.json()).recorded).toBe(40)
  })

  it('stamps the class when the student is in a class study mode', async () => {
    mockAggregate.mockResolvedValue({ _max: { updatedAt: null } })
    mockUser.mockResolvedValue({ studyContext: 'class:c1' })
    await POST(req({ segments: [{ surface: 'FLASHCARDS', seconds: 30 }] }))
    expect(mockUpsert.mock.calls[0][0].create.classroomId).toBe('c1')
  })
})

describe('useActivitySurface', () => {
  afterEach(() => cleanup())
  it('the newest override wins and unmounting restores the one below', () => {
    const a = renderHook(() => useActivitySurface({ surface: 'LESSON', topicSlug: 't' }))
    const b = renderHook(() => useActivitySurface({ surface: 'EXIT_QUIZ', topicSlug: 't' }))
    expect(getActivityOverride()?.surface).toBe('EXIT_QUIZ')
    b.unmount()
    expect(getActivityOverride()?.surface).toBe('LESSON')
    a.unmount()
    expect(getActivityOverride()).toBeNull()
  })
})

describe('ActiveTimeTracker', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  const payloads = (spy: ReturnType<typeof vi.fn>) => spy.mock.calls.map((c) => JSON.parse((c[1] as RequestInit).body as string))

  it('sends banked seconds per activity once a minute, keeping them when a send fails', async () => {
    vi.useFakeTimers({ now: 0 })
    mockUseSession.mockReturnValue({ status: 'authenticated' })
    mockPath = '/topics/amino-acids/interactive'
    const fetchSpy = vi.fn().mockResolvedValueOnce({ ok: false }).mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchSpy)
    const { rerender } = render(<ActiveTimeTracker />)

    // 30 s on the lesson, then 30 s on flashcards (with input so it counts).
    await act(async () => {
      vi.advanceTimersByTime(30_000)
      window.dispatchEvent(new Event('keydown'))
    })
    mockPath = '/flashcards/review/start'
    rerender(<ActiveTimeTracker />)
    await act(async () => {
      vi.advanceTimersByTime(30_000) // the 60 s send fires and fails
    })
    await act(async () => {
      window.dispatchEvent(new Event('keydown'))
      vi.advanceTimersByTime(60_000) // the next send carries everything
    })

    const [first, second] = payloads(fetchSpy)
    expect(first.segments).toEqual([
      { surface: 'LESSON', topicSlug: 'amino-acids', seconds: 30 },
      { surface: 'FLASHCARDS', seconds: 30 },
    ])
    const total = second.segments.reduce((n: number, s: { seconds: number }) => n + s.seconds, 0)
    expect(total).toBe(120) // the failed 60 plus 60 more
  })

  it('does nothing for signed-out visitors', () => {
    mockUseSession.mockReturnValue({ status: 'unauthenticated' })
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    const { container } = render(<ActiveTimeTracker />)
    expect(container.innerHTML).toBe('')
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})
