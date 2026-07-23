'use client'

import { useEffect, useState } from 'react'

/**
 * Lets a student add a parent/guardian email that receives a weekly progress
 * summary. Double opt-in: saving sends the guardian a confirmation email, and
 * digests only start once they confirm. Self-contained (loads/saves via
 * /api/user/guardian-email). Guardians can unsubscribe from any email.
 */
export function GuardianEmailCard() {
  const [value, setValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [savedEmail, setSavedEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/user/guardian-email')
      .then((r) => r.json())
      .then((d) => {
        setValue(d.guardianEmail ?? '')
        setSavedEmail(d.guardianEmail ?? '')
        setConfirmed(!!d.confirmed)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const save = async () => {
    setSaving(true)
    setError('')
    setMsg('')
    try {
      const res = await fetch('/api/user/guardian-email', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guardianEmail: value.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not save.')
      } else {
        setValue(data.guardianEmail ?? '')
        setSavedEmail(data.guardianEmail ?? '')
        setConfirmed(!!data.confirmed)
        if (!data.guardianEmail) setMsg('Cleared — no more guardian emails.')
        else if (data.confirmed) setMsg('Saved — your guardian is confirmed and will get a weekly summary.')
        else setMsg('Saved. We emailed your guardian a confirmation link — updates start once they confirm.')
      }
    } catch {
      setError('Could not save.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mb-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <h2 className="font-semibold text-gray-900 dark:text-white mb-1">Parent / guardian email</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        Add a parent or guardian&apos;s email to send them a short weekly progress summary. They&apos;ll get a one-time
        confirmation email first, and can unsubscribe anytime. Optional — leave blank for none.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="parent@example.com"
          disabled={loading}
          className="flex-1 px-4 py-2.5 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white text-sm"
        />
        <button
          onClick={save}
          disabled={saving || loading}
          className="px-4 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover disabled:opacity-50 transition-colors text-sm"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
      {savedEmail && !msg && (
        <p className="text-xs mt-2">
          {confirmed ? (
            <span className="text-green-600 dark:text-green-400">✓ Confirmed — weekly summaries are on.</span>
          ) : (
            <span className="text-amber-600 dark:text-amber-400">Pending — your guardian needs to confirm the email we sent.</span>
          )}
        </p>
      )}
      {error && <p className="text-sm text-red-600 dark:text-red-400 mt-2">{error}</p>}
      {msg && <p className="text-sm text-green-600 dark:text-green-400 mt-2">{msg}</p>}
    </div>
  )
}
