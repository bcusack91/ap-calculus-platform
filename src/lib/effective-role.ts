import { cookies } from 'next/headers'
import { isPaidRole, isPremiumRole, resolveEffectiveRole, VIEW_AS_COOKIE } from './premium'

/**
 * Server-side effective role: applies the admin "View as…" cookie override
 * (only honored for real ADMINs — see resolveEffectiveRole). Use in route
 * handlers / server components so premium gates can be previewed by admins and
 * can't be bypassed by a forged cookie from a non-admin.
 */
export async function getEffectiveRole(realRole?: string | null): Promise<string> {
  const viewAs = (await cookies()).get(VIEW_AS_COOKIE)?.value
  return resolveEffectiveRole(realRole, viewAs)
}

/** Convenience: is the *effective* role premium (honoring an admin View-as override)? */
export async function effectiveIsPremium(realRole?: string | null): Promise<boolean> {
  return isPremiumRole(await getEffectiveRole(realRole))
}

/** Is the *effective* role a paid account — premium OR teacher (honoring View-as)? */
export async function effectiveIsPaid(realRole?: string | null): Promise<boolean> {
  return isPaidRole(await getEffectiveRole(realRole))
}
