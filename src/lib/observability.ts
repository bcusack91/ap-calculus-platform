/**
 * Tiny server-side error-reporting shim. Forwards to Sentry when it's configured
 * (NEXT_PUBLIC_SENTRY_DSN set) and is a no-op reporter otherwise, so callers can
 * report failures from a single choke point without hard-depending on Sentry
 * being enabled. Mirrors the lazy-import pattern in instrumentation.ts so
 * @sentry/nextjs isn't pulled into the server bundle when monitoring is off.
 */
type SentryModule = typeof import('@sentry/nextjs')

const sentryEnabled = Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)
let sentryModulePromise: Promise<SentryModule> | null = null

/**
 * Report a server-side error. Always logs (the floor of observability even with
 * Sentry off) and additionally forwards to Sentry when enabled. Never throws
 * into the caller's path — reporting an error must not cause a second one.
 */
export async function captureServerError(
  error: unknown,
  context?: Record<string, unknown>
): Promise<void> {
  console.error('[captureServerError]', error, context ?? '')
  if (!sentryEnabled) return
  try {
    if (!sentryModulePromise) sentryModulePromise = import('@sentry/nextjs')
    const Sentry = await sentryModulePromise
    Sentry.captureException(error, context ? { extra: context } : undefined)
  } catch {
    // Swallow — error reporting must never surface its own failure.
  }
}
