'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function InteractiveError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Interactive lesson error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-pink-50 to-blue-50 dark:from-gray-900 dark:via-accent-light/20 dark:to-gray-900 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Something went wrong
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The interactive lesson encountered an error. This may be a temporary issue.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/topics"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Back to Topics
          </Link>
        </div>
      </div>
    </div>
  )
}
