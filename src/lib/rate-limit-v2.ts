/**
 * Distributed rate limiter — uses Upstash Redis when configured,
 * falls back to in-memory sliding-window otherwise.
 *
 * Usage:
 *   import { rateLimit, getClientIp } from '@/lib/rate-limit'
 *
 *   const limiter = rateLimit({ maxRequests: 10, windowMs: 60_000, prefix: 'api_progress' })
 *
 *   export async function POST(req: NextRequest) {
 *     const ip = getClientIp(req)
 *     const { success, remaining } = await limiter.check(ip)
 *     if (!success) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
 *     ...
 *   }
 */

import { Ratelimit } from '@upstash/ratelimit'
import { getRedis } from './redis'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  maxRequests: number
  /** Window duration in milliseconds */
  windowMs: number
  /** Optional prefix for Redis keys (keeps limiters isolated) */
  prefix?: string
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetTime: number
}

// ─── In-memory fallback ─────────────────────────────────────────────────────

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()
const CLEANUP_INTERVAL = 60_000
let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) rateLimitMap.delete(key)
  }
}

function checkInMemory(identifier: string, config: RateLimitConfig): RateLimitResult {
  cleanup()
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + config.windowMs })
    return { success: true, remaining: config.maxRequests - 1, resetTime: now + config.windowMs }
  }

  if (entry.count >= config.maxRequests) {
    return { success: false, remaining: 0, resetTime: entry.resetTime }
  }

  entry.count++
  return { success: true, remaining: config.maxRequests - entry.count, resetTime: entry.resetTime }
}

/**
 * Non-consuming read of the current limit state — does NOT count a request.
 * Use to gate expensive work before deciding whether to actually consume a
 * slot (e.g. only meter an AI call once it produces a real result).
 */
function peekInMemory(identifier: string, config: RateLimitConfig): RateLimitResult {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)
  if (!entry || now > entry.resetTime) {
    return { success: true, remaining: config.maxRequests, resetTime: now + config.windowMs }
  }
  const remaining = Math.max(0, config.maxRequests - entry.count)
  return { success: entry.count < config.maxRequests, remaining, resetTime: entry.resetTime }
}

// ─── Public API ─────────────────────────────────────────────────────────────

export function rateLimit(config: RateLimitConfig) {
  const redis = getRedis()
  const prefix = config.prefix ?? 'rl'

  // If Redis is available, use Upstash Ratelimit (sliding-window)
  let upstashLimiter: Ratelimit | null = null
  if (redis) {
    const windowSec = Math.max(1, Math.round(config.windowMs / 1000))
    upstashLimiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(config.maxRequests, `${windowSec} s`),
      prefix: `@rl:${prefix}`,
      analytics: false,
    })
  }

  return {
    async check(identifier: string): Promise<RateLimitResult> {
      if (upstashLimiter) {
        try {
          const result = await upstashLimiter.limit(identifier)
          return {
            success: result.success,
            remaining: result.remaining,
            resetTime: result.reset,
          }
        } catch {
          // Redis error — fall back to in-memory
          return checkInMemory(`${prefix}:${identifier}`, config)
        }
      }
      return checkInMemory(`${prefix}:${identifier}`, config)
    },

    /**
     * Read the current limit state WITHOUT consuming a slot. Returns
     * success:false when the identifier is already at/over the limit.
     */
    async peek(identifier: string): Promise<RateLimitResult> {
      if (upstashLimiter) {
        try {
          const r = (await upstashLimiter.getRemaining(identifier)) as
            | number
            | { remaining: number; reset: number }
          const remaining = typeof r === 'number' ? r : r.remaining
          const resetTime = typeof r === 'number' ? Date.now() + config.windowMs : r.reset
          return { success: remaining > 0, remaining, resetTime }
        } catch {
          return peekInMemory(`${prefix}:${identifier}`, config)
        }
      }
      return peekInMemory(`${prefix}:${identifier}`, config)
    },
  }
}

// ─── Pre-built limiters for common API routes ───────────────────────────────

/** Auth endpoints: 10 req / 60 s */
export const authLimiter = rateLimit({ maxRequests: 10, windowMs: 60_000, prefix: 'auth' })

/** General API mutations: 30 req / 60 s */
export const apiMutationLimiter = rateLimit({ maxRequests: 30, windowMs: 60_000, prefix: 'api_mut' })

/** Progress saves: 60 req / 60 s (generous for auto-save) */
export const progressLimiter = rateLimit({ maxRequests: 60, windowMs: 60_000, prefix: 'progress' })

/** Competitive queue: 10 req / 60 s */
export const competitiveLimiter = rateLimit({ maxRequests: 10, windowMs: 60_000, prefix: 'competitive' })

/** Teacher APIs: 30 req / 60 s */
export const teacherLimiter = rateLimit({ maxRequests: 30, windowMs: 60_000, prefix: 'teacher' })

/** Admin APIs: 60 req / 60 s */
export const adminLimiter = rateLimit({ maxRequests: 60, windowMs: 60_000, prefix: 'admin' })

/** Contact form: 5 req / 5 min */
export const contactLimiter = rateLimit({ maxRequests: 5, windowMs: 300_000, prefix: 'contact' })

// ─── Backward-compatible exports ────────────────────────────────────────────

export { checkInMemory as checkRateLimit }

/**
 * Extract the client IP address from a request.
 * Prefers x-forwarded-for (set by reverse proxies / Vercel) over direct connection.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || '127.0.0.1'
}
