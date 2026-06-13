'use client'

import { useSession } from 'next-auth/react'
import { isPremiumRole, resolveEffectiveRole, VIEW_AS_COOKIE } from './premium'

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return m ? decodeURIComponent(m[1]) : null
}

/**
 * Client-side effective role + premium status, honoring the admin "View as…"
 * override cookie (only for real ADMINs). The toggle reloads the page after
 * setting the cookie, so this is read once per load — no reactive subscription
 * needed.
 */
export function useEffectiveRole() {
  const { data: session } = useSession()
  const realRole = session?.user?.role
  const viewAs = realRole === 'ADMIN' ? readCookie(VIEW_AS_COOKIE) : null
  const role = resolveEffectiveRole(realRole, viewAs)
  return {
    role,
    realRole,
    isPremium: isPremiumRole(role),
    isAdmin: realRole === 'ADMIN',
    viewAs: viewAs as 'FREE' | 'PREMIUM' | null,
  }
}
