'use client'

import Link from 'next/link'

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">📡</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          You&apos;re Offline
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          It looks like you&apos;ve lost your internet connection. Some features may not be 
          available until you&apos;re back online.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="block w-full px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Go Home
          </Link>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
          Previously visited pages may still be available from cache.
        </p>
      </div>
    </div>
  )
}
