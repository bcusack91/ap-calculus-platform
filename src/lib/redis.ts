/**
 * Upstash Redis client — used for distributed rate limiting, caching, etc.
 *
 * Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in your environment
 * to enable Redis-backed features. When not configured, consumers should
 * fall back gracefully (see rate-limit.ts).
 */

import { Redis } from '@upstash/redis'

let _redis: Redis | null = null

export function getRedis(): Redis | null {
  if (_redis) return _redis

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    return null
  }

  _redis = new Redis({ url, token })
  return _redis
}

// ─── Caching helpers ────────────────────────────────────────────────────────

/**
 * Get a cached value, or compute and store it.
 * @param key   Redis key
 * @param ttl   Time-to-live in seconds
 * @param fn    Async function that produces the value
 */
export async function cached<T>(key: string, ttl: number, fn: () => Promise<T>): Promise<T> {
  const redis = getRedis()
  if (!redis) return fn()

  try {
    const existing = await redis.get<T>(key)
    if (existing !== null && existing !== undefined) return existing

    const value = await fn()
    await redis.set(key, JSON.stringify(value), { ex: ttl })
    return value
  } catch {
    // Redis down — compute directly
    return fn()
  }
}

/**
 * Invalidate a cached key.
 */
export async function invalidateCache(key: string): Promise<void> {
  const redis = getRedis()
  if (!redis) return
  try {
    await redis.del(key)
  } catch {
    // Ignore Redis failures
  }
}

/**
 * Invalidate all keys matching a pattern prefix.
 */
export async function invalidateCachePrefix(prefix: string): Promise<void> {
  const redis = getRedis()
  if (!redis) return
  try {
    const keys = await redis.keys(`${prefix}*`)
    if (keys.length > 0) {
      await redis.del(...keys)
    }
  } catch {
    // Ignore Redis failures
  }
}
