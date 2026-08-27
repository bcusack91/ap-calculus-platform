/**
 * Integration tests for Progress API routes.
 * Tests authentication, validation, and response formats.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

// --------------- Mocks ---------------
const mockAuth = vi.fn()
const mockTopicFindUnique = vi.fn()
const mockProgressUpsert = vi.fn()
const mockProgressFindUnique = vi.fn()

vi.mock('@/lib/auth', () => ({
  auth: () => mockAuth(),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    topic: { findUnique: (...args: unknown[]) => mockTopicFindUnique(...args) },
    topicProgress: {
      upsert: (...args: unknown[]) => mockProgressUpsert(...args),
      findUnique: (...args: unknown[]) => mockProgressFindUnique(...args),
    },
    flashcard: { create: vi.fn() },
    flashcardProgress: { findMany: vi.fn().mockResolvedValue([]), create: vi.fn() },
  },
}))

vi.mock('@/lib/flashcard-generation', () => ({
  generateFlashcardsFromContent: vi.fn().mockReturnValue([]),
  getTopFlashcards: vi.fn().mockReturnValue([]),
}))

vi.mock('@/lib/validations', async () => {
  const actual = await vi.importActual('@/lib/validations')
  return actual
})

describe('Progress Load API', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 401 for unauthenticated requests', async () => {
    mockAuth.mockResolvedValueOnce(null)

    const { GET } = await import('@/app/api/progress/load/route')
    const req = new Request('http://localhost/api/progress/load?topicSlug=test-topic')
    const res = await GET(req)
    expect(res.status).toBe(401)
  })

  it('returns 400 for missing topicSlug', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'user-1' } })

    const { GET } = await import('@/app/api/progress/load/route')
    const req = new Request('http://localhost/api/progress/load')
    const res = await GET(req)
    expect(res.status).toBe(400)
  })

  it('returns 404 for non-existent topic', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'user-1' } })
    mockTopicFindUnique.mockResolvedValueOnce(null)

    const { GET } = await import('@/app/api/progress/load/route')
    const req = new Request('http://localhost/api/progress/load?topicSlug=non-existent')
    const res = await GET(req)
    expect(res.status).toBe(404)
  })

  it('returns progress for authenticated user', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'user-1' } })
    // The route fetches progress via an include on the topic query
    // (topic.topicProgress[0]), not a separate topicProgress lookup.
    mockTopicFindUnique.mockResolvedValueOnce({
      id: 'topic-1',
      topicProgress: [{
        status: 'IN_PROGRESS',
        masteryLevel: 0.6,
        timeSpent: 120,
        lastAccessed: new Date(),
        completedAt: null,
      }],
    })

    const { GET } = await import('@/app/api/progress/load/route')
    const req = new Request('http://localhost/api/progress/load?topicSlug=test-topic')
    const res = await GET(req)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.exists).toBe(true)
    expect(body.progress.status).toBe('IN_PROGRESS')
    expect(body.progress.masteryLevel).toBe(0.6)
  })

  it('returns null progress when no record exists', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'user-1' } })
    mockTopicFindUnique.mockResolvedValueOnce({ id: 'topic-1', topicProgress: [] })

    const { GET } = await import('@/app/api/progress/load/route')
    const req = new Request('http://localhost/api/progress/load?topicSlug=new-topic')
    const res = await GET(req)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.exists).toBe(false)
    expect(body.progress).toBeNull()
  })
})
