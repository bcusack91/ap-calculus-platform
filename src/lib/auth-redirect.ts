/**
 * Where to send a logged-out visitor who hits a page that needs an account.
 *
 * Diagnostics, FRQ practice and competitive mode all require an account (owner
 * decision 2026-09-28), but they used to bounce visitors to a "Welcome Back"
 * sign-in page. Most of those visitors have no account yet, so the wall is now
 * a sign-UP page that says what they are signing up for, e.g. "Create a free
 * account to take the AP Calculus AB diagnostic". The sign-up page links to
 * sign-in (and back) with the same context, so returning users lose nothing.
 *
 * Pure and dependency-free: used by client pages AND by the edge middleware.
 */

export type AuthReason = 'diagnostic' | 'frq' | 'competitive' | 'generic'

const AUTH_REASONS: readonly AuthReason[] = ['diagnostic', 'frq', 'competitive', 'generic']

export interface AuthRedirectOptions {
  /** Same-origin path to return to after sign-up/sign-in (e.g. '/calcab-diagnostic'). */
  callbackUrl?: string | null
  reason?: AuthReason | null
  /** Human course name shown in the heading, e.g. 'AP Calculus AB'. */
  label?: string | null
}

/**
 * Only same-origin paths are honoured, so a crafted link can't turn the auth
 * pages into an open redirect. '//host' and '/\host' are protocol-relative in
 * browsers, so both are rejected. Returns null when absent or unsafe.
 */
export function safeCallbackUrl(raw: string | null | undefined): string | null {
  if (!raw) return null
  if (!raw.startsWith('/')) return null
  if (raw.startsWith('//') || raw.startsWith('/\\')) return null
  return raw
}

export function parseAuthReason(raw: string | null | undefined): AuthReason | null {
  return raw && (AUTH_REASONS as readonly string[]).includes(raw) ? (raw as AuthReason) : null
}

const LABEL_MAX = 60
const LABEL_RE = /^[\p{L}\p{N} :&.,'()+\-/]+$/u

/**
 * The label comes from the URL, so it is untrusted text rendered in a heading.
 * React escapes it, but a crafted link could still put arbitrary words in our
 * mouth — so only short course-name-shaped strings are accepted.
 */
export function sanitizeAuthLabel(raw: string | null | undefined): string | null {
  const label = raw?.trim()
  if (!label || label.length > LABEL_MAX || !LABEL_RE.test(label)) return null
  return label
}

function buildAuthUrl(path: string, { callbackUrl, reason, label }: AuthRedirectOptions): string {
  const parts: string[] = []
  const cb = safeCallbackUrl(callbackUrl)
  if (cb && cb !== '/') parts.push(`callbackUrl=${encodeURIComponent(cb)}`)
  const r = parseAuthReason(reason)
  if (r) parts.push(`reason=${r}`)
  const l = sanitizeAuthLabel(label)
  if (l) parts.push(`label=${encodeURIComponent(l)}`)
  return parts.length ? `${path}?${parts.join('&')}` : path
}

/** e.g. `/auth/signup?callbackUrl=%2Fcalcab-diagnostic&reason=diagnostic&label=AP%20Calculus%20AB` */
export function signUpUrl(opts: AuthRedirectOptions = {}): string {
  return buildAuthUrl('/auth/signup', opts)
}

/** The sign-in twin of signUpUrl, carrying the same context. */
export function signInUrl(opts: AuthRedirectOptions = {}): string {
  return buildAuthUrl('/auth/signin', opts)
}

/** Which reason fits a middleware-protected path. */
export function authReasonForPath(pathname: string): AuthReason {
  if (pathname === '/competitive' || pathname.startsWith('/competitive/')) return 'competitive'
  if (/-diagnostic(\/|$)/.test(pathname)) return 'diagnostic'
  if (/-frq(\/|$)/.test(pathname)) return 'frq'
  return 'generic'
}

export interface AuthContextCopy {
  heading: string
  subheading: string
}

/**
 * Contextual heading + one-line value prop for the auth pages. Returns null
 * with no reason, so the pages keep their default copy for plain visits.
 */
export function authContextCopy(
  mode: 'signup' | 'signin',
  reasonRaw: string | null | undefined,
  labelRaw?: string | null,
): AuthContextCopy | null {
  const reason = parseAuthReason(reasonRaw)
  if (!reason) return null
  const label = sanitizeAuthLabel(labelRaw)

  const action: Record<AuthReason, string> = {
    diagnostic: label ? `take the ${label} diagnostic` : 'take the diagnostic',
    frq: label ? `practice ${label} free-response questions` : 'practice free-response questions',
    competitive: 'play Competitive Mode',
    generic: 'continue',
  }

  if (mode === 'signin') {
    return {
      heading: `Sign in to ${action[reason]}`,
      subheading: "Welcome back. You'll go straight there after you sign in.",
    }
  }

  const saved: Record<AuthReason, string> = {
    diagnostic: 'Your results and study plan are saved to your account.',
    frq: 'Your answers and scores are saved to your account.',
    competitive: 'Your rating and match history are saved to your account.',
    generic: 'Your progress is saved to your account.',
  }
  return {
    heading: `Create a free account to ${action[reason]}`,
    subheading: `It takes 30 seconds. ${saved[reason]}`,
  }
}
