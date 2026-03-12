import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock rate-limit-v2
vi.mock('@/lib/rate-limit-v2', () => ({
  contactLimiter: {
    check: vi.fn().mockResolvedValue({ success: true, remaining: 4, resetTime: Date.now() + 60000 }),
  },
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
}))

// Mock Prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    emailSubscriber: {
      upsert: vi.fn(),
    },
  },
}))

import { prisma } from '@/lib/prisma'
import { contactLimiter } from '@/lib/rate-limit-v2'

describe('POST /api/subscribe', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Restore default mock for rate limiter after clearAllMocks
    ;(contactLimiter.check as ReturnType<typeof vi.fn>).mockResolvedValue({
      success: true,
      remaining: 4,
      resetTime: Date.now() + 60000,
    })
  })

  async function callSubscribe(body: unknown) {
    const { POST } = await import('@/app/api/subscribe/route')
    const request = new Request('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    // NextRequest wraps Request — use as-is for testing
    return POST(request as never)
  }

  it('should accept valid subscription', async () => {
    ;(prisma.emailSubscriber.upsert as ReturnType<typeof vi.fn>).mockResolvedValue({
      id: 'sub_123',
      email: 'test@example.com',
    })

    const response = await callSubscribe({ email: 'test@example.com' })
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.id).toBe('sub_123')
  })

  it('should reject invalid email', async () => {
    const response = await callSubscribe({ email: 'not-an-email' })
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toBeDefined()
  })

  it('should enforce rate limiting', async () => {
    ;(contactLimiter.check as ReturnType<typeof vi.fn>).mockResolvedValue({
      success: false,
      remaining: 0,
      resetTime: Date.now() + 60000,
    })

    const response = await callSubscribe({ email: 'test@example.com' })
    const data = await response.json()

    expect(response.status).toBe(429)
    expect(data.success).toBe(false)
  })

  it('should lowercase email for upsert', async () => {
    ;(prisma.emailSubscriber.upsert as ReturnType<typeof vi.fn>).mockResolvedValue({
      id: 'sub_456',
      email: 'test@example.com',
    })

    await callSubscribe({ email: 'Test@EXAMPLE.com' })

    expect(prisma.emailSubscriber.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { email: 'test@example.com' },
      })
    )
  })
})
