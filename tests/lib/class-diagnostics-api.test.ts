/**
 * Teacher class-diagnostics API: question reuse across assignments, end-of-day
 * due dates, title auto-numbering, and deletion.
 *
 * Regressions guarded here:
 *   - Diagnostics 2 and 3 repeated Diagnostic 1's questions because POST passed
 *     an empty exclusion set (MCAT) or none at all (SAT).
 *   - A date-only due date was stored at UTC midnight, i.e. the first instant
 *     of the day, so the student banner went "Overdue" the evening before.
 *   - Titles were numbered from the ROW COUNT, so deleting one produced two
 *     "Diagnostic 2"s.
 *   - There was no way to delete an assignment at all.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockRequireClassroomAccess = vi.fn()
const mockFindMany = vi.fn()
const mockFindFirst = vi.fn()
const mockCreate = vi.fn()
const mockDelete = vi.fn()
const mockGenerateMCAT = vi.fn()
const mockGenerateSAT = vi.fn()

vi.mock('@/lib/teacher-auth', () => ({
  requireClassroomAccess: (...args: unknown[]) => mockRequireClassroomAccess(...args),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    classDiagnostic: {
      findMany: (...a: unknown[]) => mockFindMany(...a),
      findFirst: (...a: unknown[]) => mockFindFirst(...a),
      create: (...a: unknown[]) => mockCreate(...a),
      delete: (...a: unknown[]) => mockDelete(...a),
      count: vi.fn(),
    },
    classroomMember: { findMany: vi.fn().mockResolvedValue([]) },
    classroomCourse: { findMany: vi.fn().mockResolvedValue([]) },
    user: { findMany: vi.fn().mockResolvedValue([]) },
    diagnosticTest: { groupBy: vi.fn().mockResolvedValue([]), findMany: vi.fn().mockResolvedValue([]) },
  },
}))

vi.mock('@/data/mcat-practice/diagnostic-generator', () => ({
  generateMCATDiagnosticTest: (...a: unknown[]) => mockGenerateMCAT(...a),
}))

vi.mock('@/data/sat-practice/diagnostic-generator', () => ({
  generateDiagnosticTest: (...a: unknown[]) => mockGenerateSAT(...a),
  // The real fingerprinting helper matters here, but the module is heavy; a
  // faithful stand-in keeps the test about the route's plumbing.
  seenKeysForQuestion: (q: { id?: string; question: string; passage?: string }) => [
    ...(q.id ? [q.id] : []),
    `stem:${q.passage ? `${q.passage}|${q.question}` : q.question}`,
  ],
}))

const ROUTE = '@/app/api/teacher/classrooms/[id]/class-diagnostics/route'
const ctx = { params: Promise.resolve({ id: 'class-1' }) }
const okAccess = { user: { id: 'teacher-1', role: 'TEACHER' }, classroom: { id: 'class-1' }, isOwner: true }

const postBody = (body: unknown) =>
  new Request('http://localhost/api/teacher/classrooms/class-1/class-diagnostics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

beforeEach(() => {
  vi.clearAllMocks()
  mockRequireClassroomAccess.mockResolvedValue(okAccess)
  mockGenerateMCAT.mockResolvedValue({ questions: [], domains: [], totalQuestions: 0, timeLimitMinutes: 60 })
  mockGenerateSAT.mockResolvedValue({ questions: [], domains: [], totalQuestions: 0, timeLimitMinutes: 30 })
  mockCreate.mockImplementation(({ data }: { data: { title: string } }) => ({
    id: 'new-diag', title: data.title, courseKey: 'mcat', dueDate: null,
  }))
  mockFindMany.mockResolvedValue([])
})

describe('POST — no repeats across successive diagnostics', () => {
  it('excludes every question id already served to this class (MCAT)', async () => {
    mockFindMany.mockResolvedValueOnce([
      { title: 'Diagnostic 1', testData: { questions: [{ id: 'cars-authored-cars-hum-01-q0' }, { id: 'bio-bank-17' }] } },
      { title: 'Diagnostic 2', testData: { questions: [{ id: 'psych-bank-4' }] } },
    ])
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat' }) as never, ctx as never)

    const exclude = mockGenerateMCAT.mock.calls[0][0].excludeQuestionIds as Set<string>
    expect(exclude.size).toBe(3)
    expect(exclude.has('cars-authored-cars-hum-01-q0')).toBe(true)
    expect(exclude.has('bio-bank-17')).toBe(true)
    expect(exclude.has('psych-bank-4')).toBe(true)
  })

  it('scopes exclusions to the classroom and course', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat' }) as never, ctx as never)
    expect(mockFindMany.mock.calls[0][0].where).toEqual({ classroomId: 'class-1', courseKey: 'mcat' })
  })

  it('passes ids AND stem fingerprints for SAT (pools reuse text under new ids)', async () => {
    mockFindMany.mockResolvedValueOnce([
      { title: 'Diagnostic 1', testData: { questions: [{ id: 'diag-passage-p7-q0', question: 'Main idea?', passage: 'PASSAGE TEXT' }] } },
    ])
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'sat' }) as never, ctx as never)

    const exclude = mockGenerateSAT.mock.calls[0][0].excludeQuestionIds as Set<string>
    expect(exclude.has('diag-passage-p7-q0')).toBe(true)
    expect(exclude.has('stem:PASSAGE TEXT|Main idea?')).toBe(true)
  })

  it('survives a legacy or malformed frozen payload', async () => {
    mockFindMany.mockResolvedValueOnce([
      { title: 'Diagnostic 1', testData: null },
      { title: 'Diagnostic 2', testData: { questions: 'nope' } },
      { title: 'Diagnostic 3', testData: { questions: [null, { noId: true }, { id: 'keeper' }] } },
    ])
    const { POST } = await import(ROUTE)
    const res = await POST(postBody({ courseKey: 'mcat' }) as never, ctx as never)
    expect(res.status).toBe(200)
    const exclude = mockGenerateMCAT.mock.calls[0][0].excludeQuestionIds as Set<string>
    expect([...exclude]).toEqual(['keeper'])
  })
})

describe('POST — due dates are the END of the chosen day', () => {
  const dueOf = () => mockCreate.mock.calls[0][0].data.dueDate as Date

  it('lands at 23:59:59.999 in the teacher’s timezone', async () => {
    const { POST } = await import(ROUTE)
    // 240 = getTimezoneOffset() in US Eastern Daylight Time (UTC-4).
    await POST(postBody({ courseKey: 'mcat', dueDate: '2026-09-18', tzOffsetMinutes: 240 }) as never, ctx as never)
    expect(dueOf().toISOString()).toBe('2026-09-19T03:59:59.999Z')
  })

  it('never lands at the FIRST instant of the day (the off-by-one)', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat', dueDate: '2026-09-18', tzOffsetMinutes: 240 }) as never, ctx as never)
    expect(dueOf().toISOString()).not.toBe('2026-09-18T00:00:00.000Z')
    // 8pm ET the evening before must still be inside the window.
    expect(dueOf().getTime()).toBeGreaterThan(Date.parse('2026-09-18T00:00:00.000Z'))
  })

  it('falls back to end of day UTC with no offset', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat', dueDate: '2026-09-18' }) as never, ctx as never)
    expect(dueOf().toISOString()).toBe('2026-09-18T23:59:59.999Z')
  })

  it('ignores an absurd offset instead of shifting days', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat', dueDate: '2026-09-18', tzOffsetMinutes: 99999 }) as never, ctx as never)
    expect(dueOf().toISOString()).toBe('2026-09-19T11:59:59.999Z') // clamped to UTC-12
  })

  it('trusts a full ISO datetime as given', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat', dueDate: '2026-09-18T17:00:00.000Z' }) as never, ctx as never)
    expect(dueOf().toISOString()).toBe('2026-09-18T17:00:00.000Z')
  })

  it('stores null for no due date or junk', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat' }) as never, ctx as never)
    expect(mockCreate.mock.calls[0][0].data.dueDate).toBeNull()
    await POST(postBody({ courseKey: 'mcat', dueDate: 'tomorrow-ish' }) as never, ctx as never)
    expect(mockCreate.mock.calls[1][0].data.dueDate).toBeNull()
  })
})

describe('POST — auto-numbering survives a deletion', () => {
  it('numbers from the highest existing title, not the row count', async () => {
    // Diagnostic 1 was deleted: 2 rows remain, but "Diagnostic 3" is taken.
    mockFindMany.mockResolvedValueOnce([
      { title: 'Diagnostic 2', testData: {} },
      { title: 'Diagnostic 3', testData: {} },
    ])
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat' }) as never, ctx as never)
    expect(mockCreate.mock.calls[0][0].data.title).toBe('Diagnostic 4')
  })

  it('starts back at 1 once the course has none left', async () => {
    const { POST } = await import(ROUTE)
    await POST(postBody({ courseKey: 'mcat' }) as never, ctx as never)
    expect(mockCreate.mock.calls[0][0].data.title).toBe('Diagnostic 1')
  })

  it('rejects a course that has no diagnostic', async () => {
    const { POST } = await import(ROUTE)
    const res = await POST(postBody({ courseKey: 'ap-calc' }) as never, ctx as never)
    expect(res.status).toBe(400)
    expect(mockCreate).not.toHaveBeenCalled()
  })
})

/**
 * Only MCAT and SAT can freeze one test for a class. Every other course is
 * assigned as an OPEN diagnostic: no generator runs, the row carries a marker
 * instead of questions, and any sitting of that course's diagnostic on or
 * after the assignment date counts (src/lib/class-diagnostic-open.ts).
 */
describe('open class diagnostics (courses without a class test generator)', () => {
  it('POST assigns the course diagnostic without generating a test', async () => {
    const { POST } = await import(ROUTE)
    const res = await POST(postBody({ courseKey: 'ap-bio', dueDate: '2026-10-02', tzOffsetMinutes: 0 }) as never, ctx as never)
    expect(res.status).toBe(200)
    expect(mockGenerateMCAT).not.toHaveBeenCalled()
    expect(mockGenerateSAT).not.toHaveBeenCalled()
    const data = mockCreate.mock.calls[0][0].data
    expect(data.courseKey).toBe('ap-bio')
    expect(data.testData).toEqual({ mode: 'course-diagnostic' })
    expect(data.title).toBe('Diagnostic 1')
    expect(data.dueDate.toISOString()).toBe('2026-10-02T23:59:59.999Z')
    expect((await res.json()).diagnostic.open).toBe(true)
  })

  it('GET counts any sitting of that course on or after the assignment date', async () => {
    const { prisma } = await import('@/lib/prisma')
    const assigned = new Date('2026-09-20T12:00:00.000Z')
    mockFindMany.mockResolvedValueOnce([
      { id: 'o1', courseKey: 'ap-bio', title: 'Diagnostic 1', dueDate: null, createdAt: assigned, testData: { mode: 'course-diagnostic' }, attempts: [] },
    ])
    vi.mocked(prisma.classroomMember.findMany).mockResolvedValueOnce([
      { userId: 'u1', nickname: null, user: { name: 'Ava' } },
      { userId: 'u2', nickname: null, user: { name: 'Ben' } },
    ] as never)
    vi.mocked(prisma.diagnosticTest.findMany).mockResolvedValueOnce([
      { userId: 'u1', createdAt: new Date('2026-09-21T09:00:00.000Z'), results: { percentage: 64, estimatedAPScore: 3 } },
    ] as never)
    const { GET } = await import(ROUTE)
    const body = await (await GET(new Request('http://localhost/x') as never, ctx as never)).json()

    const where = vi.mocked(prisma.diagnosticTest.findMany).mock.calls[0][0]!.where as Record<string, unknown>
    expect(where.category).toEqual({ startsWith: 'ap-bio-diagnostic' })
    expect(where.createdAt).toEqual({ gte: assigned })

    const d = body.diagnostics[0]
    expect(d.open).toBe(true)
    expect(d.courseLabel).toBe('AP Biology')
    expect(d.takenCount).toBe(1)
    expect(d.growth).toBeNull()
    const ava = d.students.find((s: { userId: string }) => s.userId === 'u1')
    expect(ava.scoreLabel).toBe('3/5')
    const ben = d.students.find((s: { userId: string }) => s.userId === 'u2')
    expect(ben.takenAt).toBeNull()
  })

  it('GET offers every diagnostic course and defaults to the class’s pinned course', async () => {
    const { prisma } = await import('@/lib/prisma')
    vi.mocked(prisma.classroomCourse.findMany).mockResolvedValueOnce([
      { courseSlug: 'mcat-competitive' }, // no diagnostic of its own
      { courseSlug: 'ap-chemistry' },
    ] as never)
    const { GET } = await import(ROUTE)
    const body = await (await GET(new Request('http://localhost/x') as never, ctx as never)).json()
    expect(body.defaultCourseKey).toBe('ap-chem')
    const keys = body.assignableCourses.map((c: { key: string }) => c.key)
    expect(keys).toContain('ap-chem')
    expect(keys).toContain('calcab')
    const frozen = body.assignableCourses.filter((c: { frozen: boolean }) => c.frozen).map((c: { key: string }) => c.key)
    expect(frozen.sort()).toEqual(['mcat', 'sat'])
  })
})

describe('GET — growth across successive diagnostics', () => {
  const D1 = new Date('2026-09-01T12:00:00.000Z')
  const D2 = new Date('2026-09-08T12:00:00.000Z')

  const loadGet = async (opts: { memberIds?: string[]; priorMcat?: { userId: string; _max: { createdAt: Date } }[] } = {}) => {
    const { prisma } = await import('@/lib/prisma')
    // GET lists newest first.
    mockFindMany.mockResolvedValueOnce([
      {
        id: 'd2', courseKey: 'mcat', title: 'Diagnostic 2', dueDate: null, createdAt: D2,
        attempts: [
          { userId: 'u1', createdAt: D2, results: { estimatedScore: 512, percentage: 60 } },
          { userId: 'u2', createdAt: D2, results: { estimatedScore: 515, percentage: 62 } },
        ],
      },
      {
        id: 'd1', courseKey: 'mcat', title: 'Diagnostic 1', dueDate: null, createdAt: D1,
        attempts: [
          { userId: 'u1', createdAt: D1, results: { estimatedScore: 500, percentage: 50 } },
          { userId: 'u2', createdAt: D1, results: { estimatedScore: 495, percentage: 48 } },
          { userId: 'u3', createdAt: D1, results: { estimatedScore: 490, percentage: 45 } },
        ],
      },
    ])
    const ids = opts.memberIds ?? ['u1', 'u2', 'u3']
    vi.mocked(prisma.classroomMember.findMany).mockResolvedValueOnce(
      ids.map(id => ({ userId: id, nickname: id.toUpperCase(), user: { name: id } })) as never,
    )
    vi.mocked(prisma.diagnosticTest.groupBy).mockResolvedValueOnce((opts.priorMcat ?? []) as never)
    const { GET } = await import(ROUTE)
    const res = await GET(new Request('http://localhost/x') as never, ctx as never)
    return res.json()
  }

  it('reports each student’s change from their previous diagnostic', async () => {
    const body = await loadGet()
    const d2 = body.diagnostics[0]
    const u1 = d2.students.find((s: { userId: string }) => s.userId === 'u1')
    expect(u1.growthFromTitle).toBe('Diagnostic 1')
    expect(u1.growthFromScore).toBe(500)
    expect(u1.growthDelta).toBe(12)
    // u3 skipped Diagnostic 2 — no change to report, not a fake zero.
    const u3 = d2.students.find((s: { userId: string }) => s.userId === 'u3')
    expect(u3.growthDelta).toBeNull()
  })

  it('reports the class average change with an honest noise band', async () => {
    const body = await loadGet()
    const d2 = body.diagnostics[0]
    expect(d2.growth.fromTitle).toBe('Diagnostic 1')
    expect(d2.growth.pairedCount).toBe(2)
    expect(d2.growth.avgDelta).toBe(16) // (+12, +20) / 2
    // sd 5.5 per sitting → sd √2·5.5 per change → 2 sd ≈ 16 for one student,
    // and √n tighter for a class average.
    expect(d2.growth.noiseBand).toBe(16)
    expect(d2.growth.avgNoiseBand).toBe(11)
    expect(d2.growth.avgNoiseBand).toBeLessThan(d2.growth.noiseBand)
  })

  it('has no growth on the first diagnostic', async () => {
    const body = await loadGet()
    const d1 = body.diagnostics[1]
    expect(d1.growth).toBeNull()
    expect(d1.students.every((s: { growthDelta: number | null }) => s.growthDelta === null)).toBe(true)
  })

  it('flags who the retake gate can still be blocking, taken or not', async () => {
    const body = await loadGet({ priorMcat: [{ userId: 'u3', _max: { createdAt: D1 } }] })
    const d2 = body.diagnostics[0]
    const u3 = d2.students.find((s: { userId: string }) => s.userId === 'u3')
    expect(u3.takenAt).toBeNull()
    expect(u3.hasPriorDiagnostic).toBe(true) // so the waive control shows on THIS row
    const u1 = d2.students.find((s: { userId: string }) => s.userId === 'u1')
    expect(u1.hasPriorDiagnostic).toBe(false) // no MCAT diagnostic on file yet
  })

  it('exposes the attempt count deletion warns about', async () => {
    const body = await loadGet()
    expect(body.diagnostics[0].attemptCount).toBe(2)
    expect(body.diagnostics[1].attemptCount).toBe(3)
  })
})

describe('DELETE', () => {
  const del = async (qs: string) => {
    const { DELETE } = await import(ROUTE)
    return DELETE(new Request(`http://localhost/api/teacher/classrooms/class-1/class-diagnostics${qs}`, { method: 'DELETE' }) as never, ctx as never)
  }

  it('requires a diagnosticId', async () => {
    expect((await del('')).status).toBe(400)
  })

  it('refuses a diagnostic from another classroom', async () => {
    mockFindFirst.mockResolvedValueOnce(null)
    const res = await del('?diagnosticId=other-class-diag')
    expect(res.status).toBe(404)
    expect(mockDelete).not.toHaveBeenCalled()
  })

  it('refuses a teacher without access to the classroom', async () => {
    const forbidden = new Response('{}', { status: 403 })
    mockRequireClassroomAccess.mockResolvedValueOnce({ error: forbidden })
    const res = await del('?diagnosticId=d1')
    expect(res.status).toBe(403)
    expect(mockDelete).not.toHaveBeenCalled()
  })

  it('deletes an untouched assignment', async () => {
    mockFindFirst.mockResolvedValueOnce({ id: 'd1', title: 'Diagnostic 1', _count: { attempts: 0 } })
    const res = await del('?diagnosticId=d1')
    expect(res.status).toBe(200)
    expect(mockDelete).toHaveBeenCalledWith({ where: { id: 'd1' } })
    expect((await res.json()).attemptsDetached).toBe(0)
  })

  it('refuses one with attempts and explains what deleting would do', async () => {
    mockFindFirst.mockResolvedValueOnce({ id: 'd1', title: 'Diagnostic 1', _count: { attempts: 3 } })
    const res = await del('?diagnosticId=d1')
    expect(res.status).toBe(409)
    const body = await res.json()
    expect(body.requiresForce).toBe(true)
    expect(body.attemptCount).toBe(3)
    expect(body.error).toMatch(/3 student attempts/)
    expect(mockDelete).not.toHaveBeenCalled()
  })

  it('deletes with force and reports the attempts left behind', async () => {
    // Attempts survive: DiagnosticTest.classDiagnosticId is onDelete SetNull,
    // so each sitting stays on the student's record as a normal diagnostic.
    mockFindFirst.mockResolvedValueOnce({ id: 'd1', title: 'Diagnostic 1', _count: { attempts: 3 } })
    const res = await del('?diagnosticId=d1&force=1')
    expect(res.status).toBe(200)
    expect(mockDelete).toHaveBeenCalledWith({ where: { id: 'd1' } })
    expect((await res.json()).attemptsDetached).toBe(3)
  })
})
