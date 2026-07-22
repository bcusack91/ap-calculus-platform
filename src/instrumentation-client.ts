/**
 * Browser-side Sentry initialization. Next.js loads this automatically on the
 * client (the counterpart to src/instrumentation.ts on the server). Without it,
 * only server errors and React render errors (via error.tsx / global-error.tsx)
 * are captured — unhandled promise rejections and event-handler errors in the
 * browser would go unseen. Gated on NEXT_PUBLIC_SENTRY_DSN: a no-op until the
 * DSN is set, so it's safe to ship dark.
 */
import * as Sentry from '@sentry/nextjs'

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: dsn || '',
  enabled: Boolean(dsn),
  environment: process.env.NODE_ENV || 'development',
  // Trace a sample of transactions in prod; everything in dev.
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  // Session Replay is intentionally DISABLED. Study Mondo serves minors
  // (COPPA under-13 accounts) and replay can capture keystrokes / PII; the
  // signup flow already commits to "no session replay". Leave both at 0 so the
  // replay integration never records.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
})

// Instruments client-side navigations for tracing/breadcrumbs.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
