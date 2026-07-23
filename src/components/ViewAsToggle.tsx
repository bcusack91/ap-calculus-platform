'use client'

import { useEffectiveRole } from '@/lib/use-effective-role'
import { VIEW_AS_COOKIE } from '@/lib/premium'

/**
 * Admin-only "View site as Free / Premium / Admin" switch. Sets the View-as
 * cookie and reloads so both client UI and server gates pick up the override.
 * Renders nothing for non-admins (and the cookie is ignored server-side for
 * anyone whose real role isn't ADMIN).
 */
function setViewAs(value: 'FREE' | 'PREMIUM' | null) {
  if (value) {
    document.cookie = `${VIEW_AS_COOKIE}=${value}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`
  } else {
    document.cookie = `${VIEW_AS_COOKIE}=; path=/; max-age=0; samesite=lax`
  }
  window.location.reload()
}

export function ViewAsToggle() {
  const { isAdmin, viewAs } = useEffectiveRole()
  if (!isAdmin) return null

  const current = viewAs ?? 'ADMIN'
  const options: { key: 'ADMIN' | 'FREE' | 'PREMIUM'; label: string }[] = [
    { key: 'ADMIN', label: 'Admin' },
    { key: 'FREE', label: 'Free' },
    { key: 'PREMIUM', label: 'Premium' },
  ]

  return (
    <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400">View site as</p>
      <div className="flex gap-1" role="group" aria-label="View site as role">
        {options.map((o) => (
          <button
            key={o.key}
            onClick={() => setViewAs(o.key === 'ADMIN' ? null : o.key)}
            aria-pressed={current === o.key}
            className={`flex-1 rounded-md px-2 py-1 text-xs font-medium transition-colors ${
              current === o.key
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      {viewAs && (
        <p className="mt-1 text-[10px] text-amber-600 dark:text-amber-400">
          Previewing as {viewAs.toLowerCase()} — your real role is Admin.
        </p>
      )}
    </div>
  )
}
