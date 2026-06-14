/**
 * Child-safety signal.
 *
 * The signup age-screen records whether the account holder self-reports as under
 * 13. We persist that as a long-lived, non-HTTPOnly cookie (so client components
 * can read it) AND it is also implied for any grade 4-8 route. Under-13 users are
 * served NON-PERSONALIZED ads only and are excluded from session-replay
 * (Microsoft Clarity), per COPPA "child-directed treatment".
 *
 * NOTE (owner action): full COPPA compliance for a knowingly under-13 audience
 * also needs verifiable parental consent + durable DOB storage (a schema column).
 * This module is the enforcement layer that's shippable without a DB migration;
 * the consent flow + DOB persistence are tracked separately.
 */
export const CHILD_COOKIE = 'mondo_u13'
/** Routes that are inherently child-directed regardless of the self-reported flag. */
export const CHILD_ROUTE_PREFIXES = ['/grade-4', '/grade-5', '/grade-6', '/grade-7', '/grade-8', '/grade4', '/grade5', '/grade6', '/grade7', '/grade8']

/** Client-side: is the current visitor a self-reported under-13 child? */
export function isChildClient(): boolean {
  if (typeof document === 'undefined') return false
  try {
    if (document.cookie.split('; ').some((c) => c.startsWith(CHILD_COOKIE + '=1'))) return true
    const path = window.location?.pathname || ''
    return CHILD_ROUTE_PREFIXES.some((p) => path.startsWith(p))
  } catch {
    return false
  }
}

/** Is a given pathname a child-directed route? */
export function isChildRoute(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  return CHILD_ROUTE_PREFIXES.some((p) => pathname.startsWith(p))
}
