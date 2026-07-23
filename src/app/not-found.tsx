import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">📚</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover shadow-lg transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/topics"
            className="rounded-lg px-6 py-3 text-base font-semibold text-accent-hover dark:text-accent-muted bg-white dark:bg-gray-800 border border-accent-light dark:border-accent-light hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            Browse Topics
          </Link>
        </div>
        <div className="mt-12">
          <Link
            href="/search"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-muted transition-colors"
          >
            Or try searching for what you need →
          </Link>
        </div>
      </div>
    </div>
  )
}
