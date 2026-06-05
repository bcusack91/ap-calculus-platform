import Link from 'next/link'

/**
 * Editorial byline shown on content pages (topics, categories, courses).
 *
 * Provides the author/reviewer + "last updated" E-E-A-T signals that readers
 * (and ad-network reviewers) look for. Content is created and reviewed by
 * Brendan Cusack with the Study Mondo Education Team.
 */
export function ArticleByline({
  updatedAt,
  className = '',
}: {
  updatedAt?: Date | string | null
  className?: string
}) {
  const formatted = updatedAt
    ? new Date(updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400 ${className}`}
    >
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden="true"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xs font-bold text-white"
        >
          BC
        </span>
        <span>
          Written and reviewed by{' '}
          <span className="font-medium text-gray-800 dark:text-gray-200">Brendan Cusack</span>,{' '}
          <Link
            href="/editorial-standards"
            className="font-medium text-purple-700 hover:underline dark:text-purple-300"
          >
            Study Mondo Education Team
          </Link>
        </span>
      </span>
      {formatted && (
        <>
          <span aria-hidden="true" className="hidden sm:inline text-gray-300 dark:text-gray-600">
            •
          </span>
          <span>
            Last updated{' '}
            <time dateTime={new Date(updatedAt as string | number | Date).toISOString()}>
              {formatted}
            </time>
          </span>
        </>
      )}
    </div>
  )
}
