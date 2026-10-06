import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// Which budget each request is charged to, and what a refusal looks like.
// Oct 2026: real students hit 429s at the old 60/min shared budget, and a 429
// on next-auth's own endpoints showed up as "Sign-In Error" / a sudden
// sign-out — so next-auth plumbing has its own bucket.

const calls: { prefix: string; key: string }[] = []
const refuse = new Set<string>()
const sizes: Record<string, number> = {}

vi.mock('@upstash/redis', () => ({ Redis: class {} }))
vi.mock('@upstash/ratelimit', () => {
  class Ratelimit {
    prefix: string
    constructor(opts: { prefix: string; limiter: number }) {
      this.prefix = opts.prefix
      sizes[opts.prefix] = opts.limiter
    }
    static slidingWindow(tokens: number) {
      return tokens
    }
    async limit(key: string) {
      calls.push({ prefix: this.prefix, key })
      const ok = !refuse.has(this.prefix)
      return { success: ok, limit: sizes[this.prefix], remaining: ok ? 1 : 0, reset: Date.now() + 30_000 }
    }
  }
  return { Ratelimit }
})
let signedIn = false
vi.mock('next-auth/jwt', () => ({ getToken: async () => (signedIn ? { sub: 'u1', role: 'STUDENT' } : null) }))

let middleware: (req: NextRequest) => Promise<Response>
beforeAll(async () => {
  process.env.UPSTASH_REDIS_REST_URL = 'https://example.upstash.io'
  process.env.UPSTASH_REDIS_REST_TOKEN = 'token'
  ;({ middleware } = await import('@/middleware'))
})
beforeEach(() => {
  calls.length = 0
  refuse.clear()
  signedIn = false
})

const req = (path: string, method = 'GET') =>
  new NextRequest(`https://www.studymondo.com${path}`, {
    method,
    headers: { 'x-forwarded-for': '203.0.113.7', origin: 'https://www.studymondo.com', host: 'www.studymondo.com' },
  })

describe('middleware rate-limit buckets', () => {
  it('sizes the budgets for a class on one school IP', () => {
    expect(sizes['rl:api']).toBeGreaterThanOrEqual(300)
    expect(sizes['rl:api-anon']).toBeGreaterThanOrEqual(600)
    expect(sizes['rl:auth']).toBeGreaterThanOrEqual(150)
    expect(sizes['rl:auth-read']).toBeGreaterThanOrEqual(600)
  })

  it.each(['/api/auth/session', '/api/auth/csrf', '/api/auth/providers', '/api/auth/callback/google'])(
    'charges next-auth plumbing %s to its own bucket',
    async (path) => {
      await middleware(req(path))
      expect(calls).toEqual([{ prefix: 'rl:auth-read', key: 'ip:203.0.113.7' }])
      signedIn = true
      calls.length = 0
      await middleware(req(path))
      expect(calls).toEqual([{ prefix: 'rl:auth-read', key: 'user:u1' }])
    }
  )

  it('keeps password sign-in and sign-in starts on the strict per-IP limiter', async () => {
    await middleware(req('/api/auth/callback/credentials', 'POST'))
    await middleware(req('/api/auth/signin/google', 'POST'))
    await middleware(req('/api/auth/signup', 'POST'))
    expect(calls.map((c) => c.prefix)).toEqual(['rl:auth', 'rl:auth', 'rl:auth'])
    expect(new Set(calls.map((c) => c.key))).toEqual(new Set(['203.0.113.7']))
  })

  it('limits signed-in users as themselves and anonymous traffic per IP', async () => {
    await middleware(req('/api/study-plan/plan-status'))
    signedIn = true
    await middleware(req('/api/study-plan/plan-status'))
    expect(calls).toEqual([
      { prefix: 'rl:api-anon', key: 'ip:203.0.113.7' },
      { prefix: 'rl:api', key: 'user:u1' },
    ])
  })

  it('an exhausted general budget does not block the session check', async () => {
    signedIn = true
    refuse.add('rl:api')
    expect((await middleware(req('/api/dashboard'))).status).toBe(429)
    expect((await middleware(req('/api/auth/session'))).status).toBe(200)
  })

  it('answers 429 with Retry-After when a budget is spent', async () => {
    refuse.add('rl:auth-read')
    const res = await middleware(req('/api/auth/session'))
    expect(res.status).toBe(429)
    expect(Number(res.headers.get('Retry-After'))).toBeGreaterThan(0)
  })
})
