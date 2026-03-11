'use client'

import { useState, useRef, type FormEvent } from 'react'

interface EmailCaptureProps {
  /** Where this component is placed — tracked for analytics */
  source?: string
  /** Pre-selected interest tags */
  interests?: string[]
  /** Heading text */
  heading?: string
  /** Description text */
  description?: string
  /** CTA button text */
  buttonText?: string
  /** Compact mode for sidebar placement */
  compact?: boolean
}

export function EmailCapture({
  source = 'website',
  interests = [],
  heading = 'Get Free Study Tips',
  description = 'Join thousands of students. Get weekly study tips, practice problem sets, and exam strategies — 100% free.',
  buttonText = 'Subscribe',
  compact = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, interests }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong')
        return
      }

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20 ${compact ? 'p-4' : 'p-6'}`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-semibold text-green-800 dark:text-green-200">
              You&apos;re subscribed!
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              Check your inbox for a welcome email.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 dark:border-purple-800 dark:from-purple-900/20 dark:to-blue-900/20 ${compact ? 'p-4' : 'p-6'}`}
    >
      <h3
        className={`font-bold text-gray-900 dark:text-white ${compact ? 'text-base mb-1' : 'text-lg mb-2'}`}
      >
        {heading}
      </h3>
      {!compact && (
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className={compact ? 'space-y-2' : 'space-y-3'}>
        <div className={compact ? '' : 'sm:flex sm:gap-2'}>
          <label htmlFor={`email-capture-${source}`} className="sr-only">
            Email address
          </label>
          <input
            ref={inputRef}
            id={`email-capture-${source}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            aria-describedby={errorMsg ? `email-error-${source}` : undefined}
            className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-purple-800 ${compact ? 'mb-2' : 'mb-2 sm:mb-0 sm:flex-1'}`}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus:ring-2 focus:ring-purple-200 disabled:opacity-60 dark:focus:ring-purple-800 ${compact ? '' : 'sm:w-auto'}`}
          >
            {status === 'loading' ? 'Subscribing…' : buttonText}
          </button>
        </div>

        {errorMsg && (
          <p
            id={`email-error-${source}`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {errorMsg}
          </p>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
