/**
 * Open class diagnostics on the STUDENT side: the dashboard banner and the
 * assignments page read /api/class-diagnostics/pending. An open diagnostic
 * (any course without a frozen class test) must send the student to that
 * course's normal diagnostic and drop off once they have taken it after it was
 * assigned — an older sitting doesn't count.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { defaultDiagnosticCourseKey, isOpenClassDiagnostic, OPEN_DIAGNOSTIC_TEST_DATA } from '@/lib/class-diagnostic-open'

const mockAuth = vi.fn()
const mockMembers = vi.fn()
const mockDiagnostics = vi.fn()
const mockLatest = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    classroomMember: { findMany: (...a: unknown[]) => mockMembers(...a) },
    classDiagnostic: { findMany: (...a: unknown[]) => mockDiagnostics(...a) },
    diagnosticTest: { findFirst: (...a: unknown[]) => mockLatest(...a) },
  },
}))

const assignedAt = new Date('2026-09-20T12:00:00.000Z')
const row = (over: Record<string, unknown>) => ({
  id: 'x', courseKey: 'ap-bio', title: 'Diagnostic 1', dueDate: null, createdAt: assignedAt,
  testData: OPEN_DIAGNOSTIC_TEST_DATA, classroom: { id: 'c1', name: 'Period 3' }, attempts: [],
  ...over,
})

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'stu-1' } })
  mockMembers.mockResolvedValue([{ classroomId: 'c1' }])
})

const pending = async () => {
  const { GET } = await import('@/app/api/class-diagnostics/pending/route')
  return (await (await GET()).json()).pending as { id: string; href: string }[]
}

describe('GET /api/class-diagnostics/pending — open diagnostics', () => {
  it('links an open diagnostic to the course’s own diagnostic page', async () => {
    mockDiagnostics.mockResolvedValue([row({ id: 'o1' })])
    mockLatest.mockResolvedValue(null)
    const list = await pending()
    expect(list).toHaveLength(1)
    expect(list[0].href).toBe('/ap-bio-diagnostic')
    expect(mockLatest.mock.calls[0][0].where).toEqual({ userId: 'stu-1', category: { startsWith: 'ap-bio-diagnostic' } })
  })

  it('still lists it when the only sitting is from before it was assigned', async () => {
    mockDiagnostics.mockResolvedValue([row({ id: 'o1' })])
    mockLatest.mockResolvedValue({ createdAt: new Date('2026-09-01T00:00:00.000Z') })
    expect(await pending()).toHaveLength(1)
  })

  it('drops it once the student takes the diagnostic after it was assigned', async () => {
    mockDiagnostics.mockResolvedValue([row({ id: 'o1' })])
    mockLatest.mockResolvedValue({ createdAt: new Date('2026-09-21T00:00:00.000Z') })
    expect(await pending()).toHaveLength(0)
  })

  it('keeps frozen (MCAT/SAT) diagnostics on the ?assigned= link and linked-attempt rule', async () => {
    mockDiagnostics.mockResolvedValue([
      row({ id: 'm1', courseKey: 'mcat', testData: { questions: [] } }),
      row({ id: 'm2', courseKey: 'mcat', testData: { questions: [] }, attempts: [{ id: 'a' }] }),
    ])
    const list = await pending()
    expect(list.map(d => d.id)).toEqual(['m1'])
    expect(list[0].href).toBe('/mcat-diagnostic?assigned=m1')
    expect(mockLatest).not.toHaveBeenCalled()
  })
})

describe('class-diagnostic-open helpers', () => {
  it('recognizes only the open marker', () => {
    expect(isOpenClassDiagnostic(OPEN_DIAGNOSTIC_TEST_DATA)).toBe(true)
    expect(isOpenClassDiagnostic({ questions: [] })).toBe(false)
    expect(isOpenClassDiagnostic(null)).toBe(false)
  })

  it('defaults to the first pinned course that has a diagnostic', () => {
    expect(defaultDiagnosticCourseKey(['mcat-competitive', 'ap-biology', 'sat-prep'])).toBe('ap-bio')
    expect(defaultDiagnosticCourseKey(['mcat-prep'])).toBe('mcat')
    expect(defaultDiagnosticCourseKey([])).toBeNull()
  })
})
