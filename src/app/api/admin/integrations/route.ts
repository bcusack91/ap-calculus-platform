import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth-guard'

/**
 * GET /api/admin/integrations — a read-only health check of the env-gated
 * services the app depends on (email, payments, error monitoring, AI, SSO,
 * rostering). Reports ONLY whether each secret is configured — never the
 * value — so an admin can see at a glance what's live and what still needs
 * setup. Admin-gated (re-reads role from DB via requireAdmin).
 */

type IntegrationStatus = 'ready' | 'partial' | 'off'

interface EnvVarState {
  name: string
  set: boolean
  required: boolean
}

interface Integration {
  key: string
  label: string
  icon: string
  optional: boolean
  status: IntegrationStatus
  summary: string
  note?: string
  vars: EnvVarState[]
}

const isSet = (name: string): boolean => Boolean(process.env[name] && process.env[name]!.trim())

function envVar(name: string, required: boolean): EnvVarState {
  return { name, set: isSet(name), required }
}

/** A secret that may be provided under either of two names (e.g. AUTH_SECRET). */
function eitherEnvVar(display: string, names: string[], required: boolean): EnvVarState {
  return { name: display, set: names.some(isSet), required }
}

function computeStatus(vars: EnvVarState[]): IntegrationStatus {
  const required = vars.filter((v) => v.required)
  if (required.length === 0) {
    // No required vars (fully optional integration): ready only if every var is set.
    return vars.every((v) => v.set) ? 'ready' : vars.some((v) => v.set) ? 'partial' : 'off'
  }
  const setCount = required.filter((v) => v.set).length
  if (setCount === 0) return 'off'
  return setCount < required.length ? 'partial' : 'ready'
}

export async function GET() {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  // Detect Stripe mode from the key prefix without exposing the key itself.
  const stripeSecret = (process.env.STRIPE_SECRET_KEY || '').trim()
  const stripeMode: 'live' | 'test' | null = stripeSecret.startsWith('sk_live_')
    ? 'live'
    : stripeSecret.startsWith('sk_test_')
      ? 'test'
      : null

  const build = (
    partial: Omit<Integration, 'status'> & { vars: EnvVarState[] }
  ): Integration => ({ ...partial, status: computeStatus(partial.vars) })

  const core = build({
    key: 'core',
    label: 'Core configuration',
    icon: '🔑',
    optional: false,
    summary: 'Signs sessions, password-reset links, and email unsubscribe tokens; sets the canonical URL used in emails and Stripe redirects.',
    vars: [
      eitherEnvVar('AUTH_SECRET / NEXTAUTH_SECRET', ['AUTH_SECRET', 'NEXTAUTH_SECRET'], true),
      envVar('DATABASE_URL', true),
      envVar('NEXT_PUBLIC_APP_URL', false),
    ],
  })

  const email = build({
    key: 'email',
    label: 'Email delivery (Resend)',
    icon: '✉️',
    optional: false,
    summary: 'Password resets, email verification, weekly digests, and parent/guardian progress emails. Without it these fail (password reset returns an error).',
    vars: [
      envVar('RESEND_API_KEY', true),
      envVar('SMTP_FROM', false),
    ],
  })

  const payments = build({
    key: 'payments',
    label: 'Payments (Stripe)',
    icon: '💳',
    optional: false,
    summary: 'Premium checkout and the subscription lifecycle (upgrades, renewals, cancellations). Checkout returns HTTP 503 until the secret + price are set.',
    note: stripeMode === 'live'
      ? 'LIVE mode — real charges.'
      : stripeMode === 'test'
        ? 'TEST mode — no real charges. Switch to a live key (sk_live_…) when ready to charge.'
        : undefined,
    vars: [
      envVar('STRIPE_SECRET_KEY', true),
      envVar('STRIPE_WEBHOOK_SECRET', true),
      envVar('STRIPE_PREMIUM_PRICE_ID', true),
      envVar('STRIPE_PREMIUM_ANNUAL_PRICE_ID', false),
    ],
  })

  const monitoring = build({
    key: 'monitoring',
    label: 'Error monitoring (Sentry)',
    icon: '🩺',
    optional: false,
    summary: 'Captures server + browser errors so you find production breaks before students do. Add SENTRY_AUTH_TOKEN for readable stack traces (source maps).',
    vars: [
      envVar('NEXT_PUBLIC_SENTRY_DSN', true),
      envVar('SENTRY_ORG', false),
      envVar('SENTRY_PROJECT', false),
      envVar('SENTRY_AUTH_TOKEN', false),
    ],
  })

  const ai = build({
    key: 'ai',
    label: 'AI features (Anthropic)',
    icon: '🤖',
    optional: false,
    summary: 'Student AI tutor, AI flashcard generation, and AI free-response grading.',
    vars: [envVar('ANTHROPIC_API_KEY', true)],
  })

  const cron = build({
    key: 'cron',
    label: 'Scheduled jobs (Cron)',
    icon: '⏰',
    optional: false,
    summary: 'Weekly student digests, parent/guardian progress emails, streak reminders, and funnel alerts. Every cron endpoint rejects all requests unless this shared secret is set — so if it is missing, none of the scheduled emails send.',
    vars: [envVar('CRON_SECRET', true)],
  })

  const microsoftSso = build({
    key: 'microsoft-sso',
    label: 'Microsoft SSO',
    icon: '🪟',
    optional: true,
    summary: '"Continue with Microsoft" sign-in for Microsoft-shop districts. Code is wired; inactive until these are set.',
    vars: [
      envVar('AUTH_MICROSOFT_ENTRA_ID_ID', true),
      envVar('AUTH_MICROSOFT_ENTRA_ID_SECRET', true),
      envVar('NEXT_PUBLIC_MICROSOFT_SSO_ENABLED', false),
    ],
  })

  const rostering = build({
    key: 'rostering',
    label: 'Roster sync (Edlink)',
    icon: '🏫',
    optional: true,
    summary: 'One-click district rostering across Google Classroom / Clever / ClassLink. CSV import + self-join bridge the gap until this is provisioned.',
    vars: [
      eitherEnvVar('EDLINK_CLIENT_ID', ['EDLINK_CLIENT_ID', 'EDLINK_APPLICATION_ID'], true),
      eitherEnvVar('EDLINK_CLIENT_SECRET', ['EDLINK_CLIENT_SECRET', 'EDLINK_SECRET'], true),
    ],
  })

  const integrations: Integration[] = [core, email, payments, monitoring, ai, cron, microsoftSso, rostering]

  const summary = {
    ready: integrations.filter((i) => i.status === 'ready').length,
    partial: integrations.filter((i) => i.status === 'partial').length,
    off: integrations.filter((i) => i.status === 'off').length,
    total: integrations.length,
    // Blocking = non-optional integrations that aren't fully ready.
    blockingNotReady: integrations.filter((i) => !i.optional && i.status !== 'ready').length,
  }

  return NextResponse.json({ integrations, stripeMode, summary })
}
