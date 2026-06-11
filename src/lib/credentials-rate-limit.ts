import { getRedis } from './redis'

/**
 * Per-email sliding-window limiter for FAILED credentials sign-in attempts.
 *
 * The generic limiters in rate-limit-v2.ts consume a slot on every check, so
 * they cannot express "count only failures, reset on success". This helper
 * uses the same shared Upstash Redis client (src/lib/redis.ts) with a sorted
 * set of failure timestamps:
 *
 *   - isCredentialsLocked(email): true when >= MAX_FAILURES failures occurred
 *     in the last WINDOW_MS (does NOT consume anything)
 *   - recordCredentialsFailure(email): adds a failure timestamp
 *   - clearCredentialsFailures(email): wipes the counter on successful login
 *
 * Fail-open: if Redis is unconfigured or errors, sign-in is allowed (matching
 * the codebase's existing fail-open posture) but we log loudly.
 */

const MAX_FAILURES = 5
const WINDOW_MS = 15 * 60 * 1000
const KEY_PREFIX = 'cred_fail:'

let warnedNoRedis = false

function key(email: string): string {
  return `${KEY_PREFIX}${email.trim().toLowerCase()}`
}

function logNoRedis() {
  if (warnedNoRedis) return
  warnedNoRedis = true
  console.error(
    '[credentials-rate-limit] WARNING: Upstash Redis is not configured — ' +
      'credentials brute-force protection is DISABLED (failing open). ' +
      'Set UPSTASH_REDIS_REST_URL/TOKEN to restore protection.'
  )
}

/** True when the email has exhausted its failure budget within the window. */
export async function isCredentialsLocked(email: string): Promise<boolean> {
  const redis = getRedis()
  if (!redis) {
    logNoRedis()
    return false
  }
  try {
    const now = Date.now()
    const k = key(email)
    // Drop failures outside the sliding window, then count what's left.
    await redis.zremrangebyscore(k, 0, now - WINDOW_MS)
    const failures = await redis.zcard(k)
    return failures >= MAX_FAILURES
  } catch (err) {
    console.error('[credentials-rate-limit] Redis error (failing open):', err)
    return false
  }
}

/** Record a failed sign-in attempt for this email. */
export async function recordCredentialsFailure(email: string): Promise<void> {
  const redis = getRedis()
  if (!redis) {
    logNoRedis()
    return
  }
  try {
    const now = Date.now()
    const k = key(email)
    await redis.zadd(k, { score: now, member: `${now}:${Math.random().toString(36).slice(2)}` })
    // Keep the key from lingering forever after the window passes.
    await redis.expire(k, Math.ceil(WINDOW_MS / 1000))
  } catch (err) {
    console.error('[credentials-rate-limit] Redis error recording failure:', err)
  }
}

/** Reset the failure counter after a successful sign-in. */
export async function clearCredentialsFailures(email: string): Promise<void> {
  const redis = getRedis()
  if (!redis) return
  try {
    await redis.del(key(email))
  } catch (err) {
    console.error('[credentials-rate-limit] Redis error clearing failures:', err)
  }
}
