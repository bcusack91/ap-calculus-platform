'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">Oops!</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-8">
              We&apos;ve been notified and are working on a fix.
              Try refreshing the page.
            </p>
            <button
              onClick={reset}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
