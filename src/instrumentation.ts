type SentryModule = typeof import('@sentry/nextjs')

const sentryEnabled = Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)
let sentryModulePromise: Promise<SentryModule> | null = null

function getSentryModule(): Promise<SentryModule> | null {
  if (!sentryEnabled) return null
  if (!sentryModulePromise) {
    sentryModulePromise = import('@sentry/nextjs')
  }
  return sentryModulePromise
}

export async function register() {
  const sentry = getSentryModule()
  if (!sentry) return
  const Sentry = await sentry

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
      enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      environment: process.env.NODE_ENV || 'development',
    })
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
      enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      environment: process.env.NODE_ENV || 'development',
    })
  }
}

export async function onRequestError(...args: unknown[]) {
  const sentry = getSentryModule()
  if (!sentry) return
  const Sentry = await sentry
  return Sentry.captureRequestError(...(args as Parameters<typeof Sentry.captureRequestError>))
}
