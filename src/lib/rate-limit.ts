/**
 * Rate limiting — re-exports from the v2 distributed implementation.
 * Existing callers continue to work unchanged.
 *
 * @see ./rate-limit-v2.ts for the full implementation
 */
export {
  checkRateLimit,
  getClientIp,
  rateLimit,
  authLimiter,
  apiMutationLimiter,
  progressLimiter,
  competitiveLimiter,
  teacherLimiter,
  adminLimiter,
  contactLimiter,
} from './rate-limit-v2'
export type { RateLimitConfig, RateLimitResult } from './rate-limit-v2'
