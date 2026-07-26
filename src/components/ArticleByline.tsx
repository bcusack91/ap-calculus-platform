import Link from 'next/link'

/**
 * Editorial byline shown on content pages (topics, categories, courses).
 *
 * Provides the author/reviewer + "last updated" E-E-A-T signals that readers
 * look for. Attribution is to the Study Mondo Education Team as a whole — the
 * team is the publishing entity of record, and /editorial-standards documents
 * who writes the material and how it is reviewed.
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
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-secondary text-xs font-bold text-white"
        >
          SM
        </span>
        <span>
          Written and reviewed by the{' '}
          <Link
            href="/editorial-standards"
            className="font-medium text-accent-hover hover:underline dark:text-accent-muted"
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
