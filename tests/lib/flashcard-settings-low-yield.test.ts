/**
 * The low-yield opt-in rides on the existing per-user flashcard settings. It
 * is a strict boolean: anything looser ("yes", 1, null) would silently change
 * which cards a student is served.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockFindUnique = vi.fn()
const mockUpdate = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'student-1' } }) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: (...a: unknown[]) => mockFindUnique(...a),
      update: (...a: unknown[]) => mockUpdate(...a),
    },
  },
}))

const stored = { flashcardNewPerDay: null, flashcardMaxReviewsPerDay: null, flashcardIncludeLowYield: false }

beforeEach(() => {
  vi.clearAllMocks()
  mockFindUnique.mockResolvedValue(stored)
  mockUpdate.mockImplementation(async ({ data }: { data: Record<string, unknown> }) => ({ ...stored, ...data }))
})

async function patch(body: unknown) {
  const { PATCH } = await import('@/app/api/flashcards/settings/route')
  return PATCH(new Request('http://localhost/api/flashcards/settings', { method: 'PATCH', body: JSON.stringify(body) }))
}

describe('GET /api/flashcards/settings', () => {
  it('reports the opt-in, defaulting to false', async () => {
    const { GET } = await import('@/app/api/flashcards/settings/route')
    const res = await GET()
    expect(res.status).toBe(200)
    expect((await res.json()).includeLowYield).toBe(false)
  })
})

describe('PATCH /api/flashcards/settings includeLowYield', () => {
  it('accepts true and false', async () => {
    for (const value of [true, false]) {
      const res = await patch({ includeLowYield: value })
      expect(res.status).toBe(200)
      expect(mockUpdate).toHaveBeenLastCalledWith(
        expect.objectContaining({ data: { flashcardIncludeLowYield: value } }),
      )
      expect((await res.json()).includeLowYield).toBe(value)
    }
  })

  it.each([['yes'], [1], [null], ['true']])('rejects %j without writing', async (value) => {
    const res = await patch({ includeLowYield: value })
    expect(res.status).toBe(400)
    expect(mockUpdate).not.toHaveBeenCalled()
  })

  it('leaves the opt-in alone when the field is omitted', async () => {
    const res = await patch({ newPerDay: 50 })
    expect(res.status).toBe(200)
    const data = mockUpdate.mock.calls[0][0].data
    expect(data).not.toHaveProperty('flashcardIncludeLowYield')
  })
})
