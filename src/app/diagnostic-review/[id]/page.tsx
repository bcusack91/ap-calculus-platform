'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import DiagnosticReview, { type ReviewQuestion } from '@/components/DiagnosticReview'

interface AttemptResults {
  form?: number | string
  totalCorrect?: number
  totalQuestions?: number
  percentage?: number
  estimatedLevel?: string
  estimatedAPScore?: number | string
  estimatedScore?: number | string
  estimatedComposite?: number | string
  review?: {
    questions: ReviewQuestion[]
    answers: (number | null)[]
    domainNames?: Record<string, string>
  }
  [key: string]: unknown
}

interface Attempt {
  id: string
  category: string
  results: AttemptResults | null
  createdAt: string
}

// Map a category prefix back to the diagnostic page where students retake.
function diagnosticPathForCategory(category: string): string {
  const slug = category.replace(/-\d+$/, '') // strip trailing -<form>
  return `/${slug}`
}

function prettyCategory(category: string): string {
  const slug = category.replace(/-\d+$/, '').replace(/-diagnostic$/, '')
  return slug
    .split('-')
    .map(p => (p.length <= 3 ? p.toUpperCase() : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(' ') + ' Diagnostic'
}

export default function DiagnosticAttemptReviewPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const { status } = useSession()
  const [attempt, setAttempt] = useState<Attempt | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=/diagnostic-review/${params.id}`)
    }
  }, [status, router, params.id])

  useEffect(() => {
    if (status !== 'authenticated' || !params?.id) return
    let cancelled = false
    fetch(`/api/diagnostic-attempts/${params.id}`)
      .then(async r => {
        if (!r.ok) {
          throw new Error(r.status === 404 ? 'Attempt not found' : 'Failed to load attempt')
        }
        return r.json()
      })
      .then(data => { if (!cancelled) setAttempt(data.attempt) })
      .catch(e => { if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load') })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [status, params?.id])

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !attempt) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Couldn&apos;t load this attempt</h1>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">{error ?? 'This diagnostic attempt does not exist or no longer exists.'}</p>
            <Link href="/dashboard" className="inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-accent-hover">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    )
  }

  const results = attempt.results ?? {}
  const review = results.review
  const diagnosticPath = diagnosticPathForCategory(attempt.category)
  const niceName = prettyCategory(attempt.category)
  const date = new Date(attempt.createdAt).toLocaleString()

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-indigo-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Link href={diagnosticPath} className="mb-4 inline-flex items-center gap-1 text-sm text-accent hover:underline dark:text-accent-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to {niceName}
          </Link>
          <h1 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">📝 Past Attempt Review</h1>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">{niceName} · {date}</p>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Score</p>
              <p className="mt-1 text-2xl font-bold text-accent-hover dark:text-accent-muted">
                {results.totalCorrect != null && results.totalQuestions != null
                  ? `${results.totalCorrect}/${results.totalQuestions}`
                  : '—'}
              </p>
              {typeof results.percentage === 'number' && (
                <p className="text-xs text-gray-500 dark:text-gray-400">{Math.round(results.percentage)}%</p>
              )}
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Estimate</p>
              <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-gray-200">
                {String(
                  results.estimatedAPScore ??
                  results.estimatedLevel ??
                  results.estimatedScore ??
                  results.estimatedComposite ??
                  '—'
                )}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Form</p>
              <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-gray-200">{String(results.form ?? '—')}</p>
            </div>
          </div>

          {review && Array.isArray(review.questions) && Array.isArray(review.answers) ? (
            <DiagnosticReview
              questions={review.questions}
              answers={review.answers}
              domainNames={review.domainNames}
            />
          ) : (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center dark:border-amber-800 dark:bg-amber-900/20">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Detailed question review isn&apos;t available for this attempt. Per-question review is saved for diagnostics taken after this feature was released.
              </p>
              <Link href={diagnosticPath} className="mt-4 inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-accent-hover">Take a New Diagnostic</Link>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={diagnosticPath} className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-accent-hover">Take Another</Link>
            <Link href="/dashboard" className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
