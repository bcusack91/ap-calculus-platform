// @vitest-environment jsdom
/**
 * Teacher class-wide flashcard daily limits.
 *
 * Route: GET /api/teacher/classrooms/[id]/flashcard-limits reports each active
 * member's EFFECTIVE limits (via effectiveDailyLimits — the same read path the
 * student's queue and settings use) and whether each is a stored override;
 * PATCH writes the per-student User fields for the whole class or a subset,
 * clamped to the bounds, or resets them to null. A bad payload writes nothing.
 *
 * Component: the Engagement-view control shows the class distribution, and
 * both Apply and Reset go through a confirm before the PATCH.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createElement } from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import ClassFlashcardLimits from '@/components/teacher/ClassFlashcardLimits'

// --------------- Route mocks ---------------
const mockRequireClassroomAccess = vi.fn()
const mockMemberFindMany = vi.fn()
const mockUserUpdateMany = vi.fn()

vi.mock('@/lib/teacher-auth', () => ({
  requireClassroomAccess: (...args: unknown[]) => mockRequireClassroomAccess(...args),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    classroomMember: { findMany: (...a: unknown[]) => mockMemberFindMany(...a) },
    user: { updateMany: (...a: unknown[]) => mockUserUpdateMany(...a) },
  },
}))

const ROUTE = '@/app/api/teacher/classrooms/[id]/flashcard-limits/route'
const ctx = { params: Promise.resolve({ id: 'class-1' }) }
const okAccess = { user: { id: 'teacher-1', role: 'TEACHER' }, classroom: { id: 'class-1' }, isOwner: true }

const member = (userId: string, name: string, newPerDay: number | null, reviews: number | null, nickname: string | null = null) => ({
  userId,
  nickname,
  user: { name, flashcardNewPerDay: newPerDay, flashcardMaxReviewsPerDay: reviews },
})

const ROSTER = [
  member('u1', 'Ava', null, null),
  member('u2', 'Ben', 30, null),
  member('u3', 'Cleo', 20, 300, 'Clo'),
]

const get = async () => {
  const { GET } = await import(ROUTE)
  return GET(new Request('http://localhost/api/teacher/classrooms/class-1/flashcard-limits') as never, ctx as never)
}
const patch = async (body: unknown, rawBody?: string) => {
  const { PATCH } = await import(ROUTE)
  return PATCH(
    new Request('http://localhost/api/teacher/classrooms/class-1/flashcard-limits', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: rawBody ?? JSON.stringify(body),
    }) as never,
    ctx as never,
  )
}

describe('flashcard-limits route', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockRequireClassroomAccess.mockResolvedValue(okAccess)
    mockMemberFindMany.mockResolvedValue(ROSTER)
    mockUserUpdateMany.mockImplementation(({ where }: { where: { id: { in: string[] } } }) =>
      Promise.resolve({ count: where.id.in.length }),
    )
  })

  describe('auth', () => {
    it('GET passes through the access error (co-teacher/owner check lives in requireClassroomAccess)', async () => {
      mockRequireClassroomAccess.mockResolvedValueOnce({ error: new Response('{}', { status: 403 }) })
      const res = await get()
      expect(res.status).toBe(403)
      expect(mockRequireClassroomAccess).toHaveBeenCalledWith('class-1')
      expect(mockMemberFindMany).not.toHaveBeenCalled()
    })

    it('PATCH refuses before reading the body or writing', async () => {
      mockRequireClassroomAccess.mockResolvedValueOnce({ error: new Response('{}', { status: 401 }) })
      const res = await patch({ newPerDay: 20 })
      expect(res.status).toBe(401)
      expect(mockUserUpdateMany).not.toHaveBeenCalled()
    })
  })

  describe('GET', () => {
    it('reports effective limits and whether each is the default or an override', async () => {
      const res = await get()
      expect(res.status).toBe(200)
      const body = await res.json()

      // Only ACTIVE members of THIS class.
      expect(mockMemberFindMany.mock.calls[0][0].where).toEqual({ classroomId: 'class-1', isActive: true })

      expect(body.defaults).toEqual({ newPerDay: 100, maxReviewsPerDay: 500 })
      expect(body.bounds).toEqual({ newPerDay: { min: 1, max: 500 }, maxReviewsPerDay: { min: 10, max: 1000 } })
      expect(body.summary).toEqual({ total: 3, onDefaults: 1, custom: 2 })

      const byId = Object.fromEntries(body.students.map((s: { userId: string }) => [s.userId, s]))
      expect(byId.u1.newPerDay).toEqual({ effective: 100, source: 'default' })
      expect(byId.u1.maxReviewsPerDay).toEqual({ effective: 500, source: 'default' })
      expect(byId.u2.newPerDay).toEqual({ effective: 30, source: 'override' })
      expect(byId.u2.maxReviewsPerDay).toEqual({ effective: 500, source: 'default' })
      expect(byId.u3.maxReviewsPerDay).toEqual({ effective: 300, source: 'override' })
      // Class nickname wins over the account name, as elsewhere on the page.
      expect(byId.u3.name).toBe('Clo')
      expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    })

    it('re-clamps a bad stored value on read (same rule as the student queue)', async () => {
      mockMemberFindMany.mockResolvedValueOnce([member('u9', 'Zed', 9999, 1)])
      const body = await (await get()).json()
      expect(body.students[0].newPerDay).toEqual({ effective: 500, source: 'override' })
      expect(body.students[0].maxReviewsPerDay).toEqual({ effective: 10, source: 'override' })
    })
  })

  describe('PATCH — apply to the class', () => {
    it('writes both fields for every active member, clamped to the bounds', async () => {
      const res = await patch({ newPerDay: 900, maxReviewsPerDay: 5 })
      expect(res.status).toBe(200)
      expect(mockUserUpdateMany).toHaveBeenCalledTimes(1)
      expect(mockUserUpdateMany.mock.calls[0][0]).toEqual({
        where: { id: { in: ['u1', 'u2', 'u3'] } },
        data: { flashcardNewPerDay: 500, flashcardMaxReviewsPerDay: 10 },
      })
      const body = await res.json()
      expect(body.updated).toBe(3)
      expect(body.reset).toBe(false)
      // The fresh snapshot rides along so the UI needs no second round trip.
      expect(body.summary.total).toBe(3)
      expect(Array.isArray(body.students)).toBe(true)
    })

    it('rounds a fractional value and leaves an omitted field untouched', async () => {
      await patch({ newPerDay: 25.6 })
      const { data } = mockUserUpdateMany.mock.calls[0][0]
      expect(data).toEqual({ flashcardNewPerDay: 26 })
      expect('flashcardMaxReviewsPerDay' in data).toBe(false)
    })

    it('clears a single field when it is null', async () => {
      await patch({ maxReviewsPerDay: null })
      expect(mockUserUpdateMany.mock.calls[0][0].data).toEqual({ flashcardMaxReviewsPerDay: null })
    })

    it('writes nothing for an empty class', async () => {
      mockMemberFindMany.mockResolvedValueOnce([]).mockResolvedValueOnce([])
      const res = await patch({ newPerDay: 20 })
      expect(res.status).toBe(200)
      expect(mockUserUpdateMany).not.toHaveBeenCalled()
      expect((await res.json()).updated).toBe(0)
    })
  })

  describe('PATCH — subset', () => {
    it('writes only the listed students, de-duplicated', async () => {
      await patch({ newPerDay: 20, studentIds: ['u2', 'u3', 'u2'] })
      expect(mockUserUpdateMany.mock.calls[0][0].where).toEqual({ id: { in: ['u2', 'u3'] } })
    })

    it('404s when any listed student is not an active member, and writes nothing', async () => {
      const res = await patch({ newPerDay: 20, studentIds: ['u2', 'ghost'] })
      expect(res.status).toBe(404)
      expect((await res.json()).studentIds).toEqual(['ghost'])
      expect(mockUserUpdateMany).not.toHaveBeenCalled()
    })

    it('treats an inactive (removed) member as not in the class', async () => {
      // The route only ever asks for isActive members, so a removed student
      // simply is not in the list it gets back.
      mockMemberFindMany.mockResolvedValueOnce([member('u1', 'Ava', null, null)])
      const res = await patch({ newPerDay: 20, studentIds: ['u2'] })
      expect(res.status).toBe(404)
      expect(mockUserUpdateMany).not.toHaveBeenCalled()
    })
  })

  describe('PATCH — reset', () => {
    it('sets both fields back to null (defaults) for the whole class', async () => {
      const res = await patch({ reset: true })
      expect(res.status).toBe(200)
      expect(mockUserUpdateMany.mock.calls[0][0]).toEqual({
        where: { id: { in: ['u1', 'u2', 'u3'] } },
        data: { flashcardNewPerDay: null, flashcardMaxReviewsPerDay: null },
      })
      expect((await res.json()).reset).toBe(true)
    })

    it('resets a subset', async () => {
      await patch({ reset: true, studentIds: ['u3'] })
      expect(mockUserUpdateMany.mock.calls[0][0].where).toEqual({ id: { in: ['u3'] } })
    })

    it('reset: false is just an ordinary apply', async () => {
      await patch({ reset: false, newPerDay: 40 })
      expect(mockUserUpdateMany.mock.calls[0][0].data).toEqual({ flashcardNewPerDay: 40 })
    })
  })

  describe('PATCH — bad payloads never write', () => {
    const cases: [string, unknown][] = [
      ['nothing to change', {}],
      ['a numeric string', { newPerDay: '50' }],
      ['one good field and one bad (no partial write)', { newPerDay: 50, maxReviewsPerDay: 'lots' }],
      ['a boolean', { newPerDay: true }],
      ['reset as a string', { reset: 'yes' }],
      ['reset combined with a value', { reset: true, newPerDay: 5 }],
      ['studentIds not a list', { newPerDay: 5, studentIds: 'u1' }],
      ['empty studentIds', { newPerDay: 5, studentIds: [] }],
      ['non-string student id', { newPerDay: 5, studentIds: ['u1', 7] }],
      ['an array body', [{ newPerDay: 5 }]],
    ]
    for (const [label, body] of cases) {
      it(`400s on ${label}`, async () => {
        const res = await patch(body)
        expect(res.status).toBe(400)
        expect(typeof (await res.json()).error).toBe('string')
        expect(mockUserUpdateMany).not.toHaveBeenCalled()
      })
    }

    it('400s on malformed JSON', async () => {
      const res = await patch(undefined, '{not json')
      expect(res.status).toBe(400)
      expect(mockUserUpdateMany).not.toHaveBeenCalled()
    })
  })
})

// --------------- Component ---------------

const makeSnapshot = () => ({
  defaults: { newPerDay: 100, maxReviewsPerDay: 500 },
  bounds: { newPerDay: { min: 1, max: 500 }, maxReviewsPerDay: { min: 10, max: 1000 } },
  summary: { total: 3, onDefaults: 2, custom: 1 },
  students: [
    { userId: 'u1', name: 'Ava', newPerDay: { effective: 100, source: 'default' }, maxReviewsPerDay: { effective: 500, source: 'default' } },
    { userId: 'u2', name: 'Ben', newPerDay: { effective: 30, source: 'override' }, maxReviewsPerDay: { effective: 500, source: 'default' } },
    { userId: 'u3', name: 'Cleo', newPerDay: { effective: 100, source: 'default' }, maxReviewsPerDay: { effective: 500, source: 'default' } },
  ],
})

describe('ClassFlashcardLimits control', () => {
  let fetchMock: ReturnType<typeof vi.fn>
  let patchResponse: Record<string, unknown>

  beforeEach(() => {
    patchResponse = { ...makeSnapshot(), updated: 3, summary: { total: 3, onDefaults: 0, custom: 3 } }
    fetchMock = vi.fn((_url: string, init?: RequestInit) => {
      if ((init?.method ?? 'GET') === 'GET') {
        return Promise.resolve({ ok: true, json: () => Promise.resolve(makeSnapshot()) } as Response)
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve(patchResponse) } as Response)
    })
    vi.stubGlobal('fetch', fetchMock)
  })
  afterEach(() => vi.unstubAllGlobals())

  const renderControl = async () => {
    render(createElement(ClassFlashcardLimits, { classroomId: 'class-1' }))
    await waitFor(() => expect(screen.getByTestId('limits-distribution')).toBeInTheDocument())
  }
  const patchCalls = () => fetchMock.mock.calls.filter(c => (c[1] as RequestInit | undefined)?.method === 'PATCH')
  const patchBody = (i = 0) => JSON.parse(String((patchCalls()[i][1] as RequestInit).body))

  it('shows the class distribution and the ceiling explanation', async () => {
    await renderControl()
    expect(screen.getByTestId('limits-distribution').textContent).toBe('2 on defaults, 1 custom')
    expect(screen.getByText(/Students only ever see what is actually due/)).toBeInTheDocument()
    expect(fetchMock.mock.calls[0][0]).toBe('/api/teacher/classrooms/class-1/flashcard-limits')
  })

  it('lists per-student effective values with a custom chip on overrides', async () => {
    await renderControl()
    fireEvent.click(screen.getByRole('button', { name: 'Show students' }))
    expect(screen.getByText('Ben')).toBeInTheDocument()
    expect(screen.getAllByText('custom')).toHaveLength(1)
  })

  it('applies to the class only after confirming, then refreshes the distribution', async () => {
    await renderControl()
    const apply = screen.getByRole('button', { name: 'Apply to class' })
    expect(apply).toBeDisabled() // nothing entered yet

    fireEvent.change(screen.getByLabelText('New cards per day'), { target: { value: '20' } })
    fireEvent.click(apply)

    // Confirm first — nothing has been sent yet.
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/Set 20 new cards\/day for all 3 students/)).toBeInTheDocument()
    expect(patchCalls()).toHaveLength(0)

    fireEvent.click(screen.getByRole('button', { name: 'Apply' }))
    await waitFor(() => expect(patchCalls()).toHaveLength(1))
    expect(patchBody()).toEqual({ newPerDay: 20 })
    await waitFor(() => expect(screen.getByTestId('limits-distribution').textContent).toBe('0 on defaults, 3 custom'))
    expect(screen.getByText(/Applied 20 new cards\/day to 3 students/)).toBeInTheDocument()
  })

  it('cancelling the confirm sends nothing', async () => {
    await renderControl()
    fireEvent.change(screen.getByLabelText('Max reviews per day'), { target: { value: '300' } })
    fireEvent.click(screen.getByRole('button', { name: 'Apply to class' }))
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    expect(patchCalls()).toHaveLength(0)
  })

  it('rejects an out-of-range value before the confirm', async () => {
    await renderControl()
    fireEvent.change(screen.getByLabelText('New cards per day'), { target: { value: '9999' } })
    fireEvent.click(screen.getByRole('button', { name: 'Apply to class' }))
    expect(screen.getByRole('alert').textContent).toMatch(/between 1 and 500/)
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(patchCalls()).toHaveLength(0)
  })

  it('resets the class to defaults after confirming', async () => {
    patchResponse = { ...makeSnapshot(), updated: 3, summary: { total: 3, onDefaults: 3, custom: 0 } }
    await renderControl()
    fireEvent.click(screen.getByRole('button', { name: 'Reset to defaults' }))
    expect(screen.getByText(/defaults \(100 new \/ 500 reviews per day\)/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(patchCalls()).toHaveLength(1))
    expect(patchBody()).toEqual({ reset: true })
    await waitFor(() => expect(screen.getByTestId('limits-distribution').textContent).toBe('3 on defaults, 0 custom'))
    expect(screen.getByText(/Reset 3 students to the defaults/)).toBeInTheDocument()
  })

  it('surfaces a failed PATCH instead of pretending it applied', async () => {
    await renderControl()
    fetchMock.mockImplementation((_url: string, init?: RequestInit) => {
      if ((init?.method ?? 'GET') === 'PATCH') {
        return Promise.resolve({ ok: false, json: () => Promise.resolve({ error: 'Not your classroom' }) } as Response)
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve(makeSnapshot()) } as Response)
    })
    fireEvent.change(screen.getByLabelText('New cards per day'), { target: { value: '20' } })
    fireEvent.click(screen.getByRole('button', { name: 'Apply to class' }))
    fireEvent.click(screen.getByRole('button', { name: 'Apply' }))
    await waitFor(() => expect(screen.getByRole('alert').textContent).toBe('Not your classroom'))
    expect(screen.getByTestId('limits-distribution').textContent).toBe('2 on defaults, 1 custom')
  })
})
