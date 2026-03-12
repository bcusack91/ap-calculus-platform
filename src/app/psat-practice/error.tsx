'use client'
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (<div className="container py-20 text-center"><h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Something went wrong</h2><p className="mb-6 text-gray-600 dark:text-gray-400">{error.message || 'An unexpected error occurred.'}</p><button onClick={reset} className="rounded-lg bg-sky-600 px-6 py-2 font-semibold text-white hover:bg-sky-700">Try Again</button></div>)
}
