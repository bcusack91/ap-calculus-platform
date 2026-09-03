'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Flag, CheckCircle2 } from 'lucide-react'
import FocusTrapDialog from '@/components/FocusTrapDialog'

const CATEGORIES = [
  { value: 'bug', label: 'Bug or broken feature' },
  { value: 'content', label: 'Content error (wrong answer, typo, bad rendering)' },
  { value: 'other', label: 'Something else' },
] as const

/**
 * "Report a problem" footer link + dialog. Auto-attaches the current page
 * path and POSTs to /api/feedback (stored in ContactSubmission and forwarded
 * to the owner inbox).
 */
export function ReportProblem() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [pageUrl, setPageUrl] = useState('')
  const [category, setCategory] = useState<string>('bug')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const openDialog = () => {
    // Capture the page being reported at open time (path + query only — the
    // API rejects absolute URLs).
    setPageUrl(window.location.pathname + window.location.search)
    setSent(false)
    setError('')
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    if (sent) {
      setMessage('')
      setCategory('bug')
    }
  }

  // Prefill from the signed-in account unless the user typed their own.
  const effectiveEmail = emailTouched ? email : (email || session?.user?.email || '')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || submitting) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          message: message.trim(),
          email: effectiveEmail.trim() || undefined,
          url: pageUrl || undefined,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(
          data.error ||
            (res.status === 429
              ? 'Too many reports — please try again later.'
              : 'Something went wrong. Please try again.')
        )
        return
      }
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Flag className="h-3.5 w-3.5" aria-hidden />
        Report a problem
      </button>

      <FocusTrapDialog open={open} onClose={close} title="Report a problem">
        <div className="p-6">
          {sent ? (
            <div className="text-center py-4">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400 mx-auto mb-3" aria-hidden />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Thanks for the report!
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                We read every report — it helps make Study Mondo better for everyone.
              </p>
              <button
                type="button"
                onClick={close}
                className="px-6 py-2.5 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Report a problem
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Spotted a bug or a content mistake? Tell us and we&apos;ll fix it.
              </p>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label
                    htmlFor="report-category"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    What kind of problem?
                  </label>
                  <select
                    id="report-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="report-message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    What happened?
                  </label>
                  <textarea
                    id="report-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    maxLength={5000}
                    placeholder="Describe the problem — what you expected and what you saw instead."
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent resize-y"
                  />
                </div>

                <div>
                  <label
                    htmlFor="report-email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Email <span className="font-normal text-gray-400">(optional — for follow-up)</span>
                  </label>
                  <input
                    id="report-email"
                    type="email"
                    value={effectiveEmail}
                    onChange={(e) => {
                      setEmailTouched(true)
                      setEmail(e.target.value)
                    }}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <p className="text-xs text-gray-400 dark:text-gray-500 break-all">
                  Reporting page: <span className="font-mono">{pageUrl || '/'}</span>
                </p>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-300">
                    {error}
                  </div>
                )}

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={close}
                    className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !message.trim()}
                    className="px-5 py-2.5 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {submitting ? 'Sending…' : 'Send Report'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </FocusTrapDialog>
    </>
  )
}
