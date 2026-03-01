/**
 * In-memory rate limiter for API routes.
 *
 * Uses a sliding-window counter keyed by an identifier (IP address, user ID, etc.).
 * In a multi-instance deployment (e.g. multiple Vercel serverless functions),
 * replace this with a Redis-backed implementation for accurate global limiting.
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

// Periodically clean up expired entries to prevent memory leaks
const CLEANUP_INTERVAL = 60 * 1000 // 1 minute
let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}

export interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  maxRequests: number
  /** Window duration in milliseconds */
  windowMs: number
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetTime: number
}

/**
 * Check rate limit for a given identifier.
 *
 * @param identifier - Unique key for rate limiting (e.g. IP address, user ID)
 * @param config - Rate limit configuration
 * @returns Whether the request is allowed, remaining count, and reset time
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  cleanup()

  const now = Date.now()
  const key = identifier
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetTime) {
    // First request or window expired — start a new window
    rateLimitMap.set(key, { count: 1, resetTime: now + config.windowMs })
    return { success: true, remaining: config.maxRequests - 1, resetTime: now + config.windowMs }
  }

  if (entry.count >= config.maxRequests) {
    return { success: false, remaining: 0, resetTime: entry.resetTime }
  }

  entry.count++
  return { success: true, remaining: config.maxRequests - entry.count, resetTime: entry.resetTime }
}

/**
 * Extract the client IP address from a request.
 * Prefers x-forwarded-for (set by reverse proxies / Vercel) over direct connection.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs; the first is the client
    return forwarded.split(',')[0].trim()
  }
  // Fallback — not reliable behind a proxy but better than nothing
  return request.headers.get('x-real-ip') || 'unknown'
}
