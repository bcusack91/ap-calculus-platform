import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Session replay (optional — only if you want it)
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: process.env.NODE_ENV === 'production' ? 1.0 : 0,

  // Environment
  environment: process.env.NODE_ENV || 'development',

  // Filter out noisy errors
  ignoreErrors: [
    'ResizeObserver loop',
    'Non-Error promise rejection',
    'Load failed',
    'AbortError',
    'NetworkError',
  ],

  beforeSend(event) {
    // Don't send events in development unless DSN is explicitly set
    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_SENTRY_DSN) {
      return null
    }
    return event
  },
})
