import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock Prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    emailSubscriber: {
      upsert: vi.fn(),
    },
  },
}))

import { prisma } from '@/lib/prisma'

const upsert = prisma.emailSubscriber.upsert as ReturnType<typeof vi.fn>

async function validToken(email = 'User@Example.com') {
  // Tokens are HMAC-signed (base64url(email).signature); bare base64 is a
  // legacy form the route deliberately rejects.
  process.env.AUTH_SECRET = 'test-unsubscribe-secret'
  const { makeUnsubscribeToken } = await import('@/lib/unsubscribe-token')
  return makeUnsubscribeToken(email)!
}

async function call(method: 'GET' | 'POST', token?: string) {
  const route = await import('@/app/api/unsubscribe/route')
  const url = token
    ? `http://localhost:3000/api/unsubscribe?token=${encodeURIComponent(token)}`
    : 'http://localhost:3000/api/unsubscribe'
  const request = new Request(url, { method })
  return route[method](request as never)
}

const expectedUpsert = {
  where: { email: 'user@example.com' },
  update: { unsubscribed: true },
  create: { email: 'user@example.com', source: 'unsubscribe', unsubscribed: true },
}

describe('GET /api/unsubscribe', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return 400 if token is missing', async () => {
    const response = await call('GET')
    expect(response.status).toBe(400)
  })

  it('should return 400 for invalid token', async () => {
    const response = await call('GET', 'not-valid-base64-!!!')
    expect(response.status).toBe(400)
  })

  it('records the unsubscribe even for an account with no subscriber row', async () => {
    // Most account holders never had an EmailSubscriber row; an update-only
    // write showed them "unsubscribed" while recording nothing.
    upsert.mockResolvedValue({})
    const response = await call('GET', await validToken())

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toContain('text/html')
    expect(upsert).toHaveBeenCalledWith(expectedUpsert)
  })
})

describe('POST /api/unsubscribe (one-click)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('records the unsubscribe and returns 200 with no page', async () => {
    upsert.mockResolvedValue({})
    const response = await call('POST', await validToken())

    expect(response.status).toBe(200)
    expect(upsert).toHaveBeenCalledWith(expectedUpsert)
  })

  it('rejects a forged token without writing', async () => {
    const token = await validToken()
    const response = await call('POST', token.slice(0, -2) + 'xx')

    expect(response.status).toBe(400)
    expect(upsert).not.toHaveBeenCalled()
  })
})

describe('one-click unsubscribe reaches the route', () => {
  it('is exempt from the middleware Origin check', async () => {
    // Gmail and Yahoo POST from their servers with no Origin header; without
    // the exemption the middleware answers 403 and the unsubscribe is lost.
    const fs = await import('fs')
    const middleware = fs.readFileSync('src/middleware.ts', 'utf8')
    const exempt = middleware.match(/CSRF_EXEMPT_PREFIXES = \[([^\]]*)\]/)?.[1] ?? ''
    expect(exempt).toContain("'/api/unsubscribe'")
  })
})
