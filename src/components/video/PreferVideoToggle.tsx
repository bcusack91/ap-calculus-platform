'use client'

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'

/**
 * "Prefer video lessons" (User.preferredLessonFormat). When on, study-plan
 * links open a topic's video lesson instead of the text lesson whenever the
 * topic has one (studyPlanTopicHref). Signed-in students only; the setting
 * is read from and saved to /api/lessons/settings. Renders nothing until the
 * saved value is known (or when signed out), so it never flickers.
 */
export function PreferVideoToggle({ className = '', videoHref }: { className?: string; /** Also link this topic's video lesson. */ videoHref?: string }) {
  const [on, setOn] = useState<boolean | null>(null)
  const [saving, setSaving] = useState(false)
  const labelId = useId()

  useEffect(() => {
    let active = true
    fetch('/api/lessons/settings')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (active && (d?.preferredFormat === 'VIDEO' || d?.preferredFormat === 'TEXT')) setOn(d.preferredFormat === 'VIDEO')
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  if (on === null) return null

  const toggle = async () => {
    const next = !on
    setOn(next)
    setSaving(true)
    try {
      const res = await fetch('/api/lessons/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferredFormat: next ? 'VIDEO' : 'TEXT' }),
      })
      if (!res.ok) setOn(!next)
    } catch {
      setOn(!next)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className={`flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 ${className}`}>
      <div>
        <p id={labelId} className="text-sm font-semibold text-gray-900 dark:text-white">Prefer video lessons</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Your study plan opens a topic&apos;s video lesson, when it has one, instead of the reading.
        </p>
        {videoHref && (
          <Link href={videoHref} className="mt-1 inline-block text-xs font-semibold text-accent hover:text-accent-hover dark:text-accent-muted">
            Watch this topic&apos;s video lesson →
          </Link>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-labelledby={labelId}
        disabled={saving}
        onClick={toggle}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-70 ${on ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'}`}
      >
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${on ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  )
}
