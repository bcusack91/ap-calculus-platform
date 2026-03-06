/**
 * Integration tests for the Search API route.
 * Tests query validation, result formatting, and error handling.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

// --------------- Mocks ---------------
const mockTopicFindMany = vi.fn()
const mockCourseFindMany = vi.fn()
const mockCategoryFindMany = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    topic: { findMany: (...args: unknown[]) => mockTopicFindMany(...args) },
    course: { findMany: (...args: unknown[]) => mockCourseFindMany(...args) },
    category: { findMany: (...args: unknown[]) => mockCategoryFindMany(...args) },
  },
}))

// Mock unstable_cache to pass through the function directly
vi.mock('next/cache', () => ({
  unstable_cache: <T extends (...args: unknown[]) => unknown>(fn: T) => fn,
}))

const { GET } = await import('@/app/api/search/route')

function makeRequest(q?: string) {
  const url = q
    ? `http://localhost/api/search?q=${encodeURIComponent(q)}`
    : 'http://localhost/api/search'
  const req = new Request(url)
  // Simulate NextRequest.nextUrl
  Object.defineProperty(req, 'nextUrl', {
    value: new URL(url),
    writable: false,
  })
  return req as never
}

describe('GET /api/search', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockTopicFindMany.mockResolvedValue([])
    mockCourseFindMany.mockResolvedValue([])
    mockCategoryFindMany.mockResolvedValue([])
  })

  it('returns empty results for missing query', async () => {
    const res = await GET(makeRequest())
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.results).toEqual([])
  })

  it('returns empty results for short query', async () => {
    const res = await GET(makeRequest('a'))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.results).toEqual([])
  })

  it('returns search results sorted by relevance', async () => {
    mockCourseFindMany.mockResolvedValueOnce([
      { slug: 'ap-calculus-ab', name: 'AP Calculus AB', description: 'Calculus fundamentals' },
    ])
    mockCategoryFindMany.mockResolvedValueOnce([
      { slug: 'limits', name: 'Limits and Continuity', course: { name: 'AP Calculus AB' } },
    ])
    mockTopicFindMany.mockResolvedValueOnce([
      {
        slug: 'derivatives-intro',
        title: 'Introduction to Derivatives',
        description: 'Learn calculus derivatives',
        category: { name: 'Derivatives', course: { name: 'AP Calculus AB', slug: 'ap-calculus-ab' } },
      },
    ])

    const res = await GET(makeRequest('calculus'))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.results.length).toBe(3)
    // Courses rank highest (score 90), then categories (70), then topics
    expect(body.results[0].type).toBe('course')
    expect(body.results[1].type).toBe('category')
    expect(body.results[2].type).toBe('topic')
    expect(body.total).toBe(3)
  })

  it('handles database errors gracefully', async () => {
    mockTopicFindMany.mockRejectedValueOnce(new Error('DB error'))
    const res = await GET(makeRequest('calculus'))
    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body.error).toBeDefined()
  })
})
