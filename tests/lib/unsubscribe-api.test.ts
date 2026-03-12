import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock Prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    emailSubscriber: {
      updateMany: vi.fn(),
    },
  },
}))

import { prisma } from '@/lib/prisma'

describe('GET /api/unsubscribe', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  async function callUnsubscribe(token?: string) {
    const { GET } = await import('@/app/api/unsubscribe/route')
    const url = token
      ? `http://localhost:3000/api/unsubscribe?token=${token}`
      : 'http://localhost:3000/api/unsubscribe'
    const request = new Request(url, { method: 'GET' })
    return GET(request as never)
  }

  it('should return 400 if token is missing', async () => {
    const response = await callUnsubscribe()
    expect(response.status).toBe(400)
  })

  it('should return 400 for invalid token', async () => {
    const response = await callUnsubscribe('not-valid-base64-!!!')
    expect(response.status).toBe(400)
  })

  it('should unsubscribe user with valid token', async () => {
    const token = Buffer.from('user@example.com').toString('base64')
    ;(prisma.emailSubscriber.updateMany as ReturnType<typeof vi.fn>).mockResolvedValue({ count: 1 })

    const response = await callUnsubscribe(token)

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toContain('text/html')
    expect(prisma.emailSubscriber.updateMany).toHaveBeenCalledWith({
      where: { email: 'user@example.com' },
      data: { unsubscribed: true },
    })
  })
})
