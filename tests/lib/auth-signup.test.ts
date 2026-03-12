/**
 * Integration tests for the Signup API route.
 * Tests input validation, rate-limiting checks, and response formats.
 *
 * NOTE: These tests mock Prisma and bcrypt to run without a database.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

// --------------- Mocks ---------------
const mockFindUnique = vi.fn()
const mockCreate = vi.fn()
const mockLearningPathCreate = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...args: unknown[]) => mockFindUnique(...args), create: (...args: unknown[]) => mockCreate(...args) },
    learningPath: { create: (...args: unknown[]) => mockLearningPathCreate(...args) },
  },
}))

vi.mock('bcryptjs', () => ({
  default: { hash: vi.fn().mockResolvedValue('$2a$12$hashed') },
}))

vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: vi.fn().mockReturnValue({ success: true }),
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
}))

// Import route handler AFTER mocks are set up
const { POST } = await import('@/app/api/auth/signup/route')

function makeRequest(body: Record<string, unknown>) {
  return new Request('http://localhost/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/auth/signup', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 400 for missing email', async () => {
    const res = await POST(makeRequest({ password: 'test12345' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toBeDefined()
  })

  it('returns 400 for invalid email format', async () => {
    const res = await POST(makeRequest({ email: 'not-an-email', password: 'test12345' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toMatch(/email/i)
  })

  it('returns 400 for short password', async () => {
    const res = await POST(makeRequest({ email: 'test@example.com', password: '123' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toMatch(/password/i)
  })

  it('returns 400 for existing user', async () => {
    mockFindUnique.mockResolvedValueOnce({ id: 'existing-user' })
    const res = await POST(makeRequest({ email: 'taken@example.com', password: 'test12345' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toMatch(/exists/i)
  })

  it('creates user successfully', async () => {
    mockFindUnique.mockResolvedValueOnce(null)
    mockCreate.mockResolvedValueOnce({ id: 'new-user', email: 'new@example.com', name: 'new' })
    mockLearningPathCreate.mockResolvedValueOnce({})

    const res = await POST(makeRequest({ email: 'new@example.com', password: 'securePass123', name: 'Test User' }))
    expect(res.status).toBe(201)
    const body = await res.json()
    expect(body.user.email).toBe('new@example.com')
    expect(body.message).toMatch(/created/i)
  })

  it('handles database errors gracefully', async () => {
    mockFindUnique.mockRejectedValueOnce(new Error('DB connection failed'))
    const res = await POST(makeRequest({ email: 'test@example.com', password: 'securePass123' }))
    expect(res.status).toBe(500)
  })
})
