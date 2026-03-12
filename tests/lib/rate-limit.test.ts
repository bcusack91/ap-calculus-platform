import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock redis to return null (in-memory mode)
vi.mock('@/lib/redis', () => ({
  getRedis: () => null,
}))

describe('rate-limit-v2', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should allow requests within limit', async () => {
    const { rateLimit } = await import('@/lib/rate-limit-v2')
    const limiter = rateLimit({ maxRequests: 3, windowMs: 60_000, prefix: 'test' })

    const r1 = await limiter.check('user1')
    expect(r1.success).toBe(true)
    expect(r1.remaining).toBe(2)

    const r2 = await limiter.check('user1')
    expect(r2.success).toBe(true)
    expect(r2.remaining).toBe(1)

    const r3 = await limiter.check('user1')
    expect(r3.success).toBe(true)
    expect(r3.remaining).toBe(0)
  })

  it('should block requests that exceed limit', async () => {
    const { rateLimit } = await import('@/lib/rate-limit-v2')
    const limiter = rateLimit({ maxRequests: 2, windowMs: 60_000, prefix: 'test2' })

    await limiter.check('user2')
    await limiter.check('user2')
    const r3 = await limiter.check('user2')
    expect(r3.success).toBe(false)
    expect(r3.remaining).toBe(0)
  })

  it('should isolate different identifiers', async () => {
    const { rateLimit } = await import('@/lib/rate-limit-v2')
    const limiter = rateLimit({ maxRequests: 1, windowMs: 60_000, prefix: 'test3' })

    const r1 = await limiter.check('userA')
    expect(r1.success).toBe(true)

    const r2 = await limiter.check('userB')
    expect(r2.success).toBe(true)
  })

  it('getClientIp should return 127.0.0.1 as fallback', async () => {
    const { getClientIp } = await import('@/lib/rate-limit-v2')
    const req = new Request('http://localhost')
    expect(getClientIp(req)).toBe('127.0.0.1')
  })

  it('getClientIp should extract x-forwarded-for', async () => {
    const { getClientIp } = await import('@/lib/rate-limit-v2')
    const req = new Request('http://localhost', {
      headers: { 'x-forwarded-for': '203.0.113.50, 70.41.3.18' },
    })
    expect(getClientIp(req)).toBe('203.0.113.50')
  })
})
