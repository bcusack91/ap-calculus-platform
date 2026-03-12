'use client'

import Link from 'next/link'

interface TopicLink {
  slug: string
  title: string
}

interface TopicNavigationProps {
  previous?: TopicLink | null
  next?: TopicLink | null
}

export default function TopicNavigation({ previous, next }: TopicNavigationProps) {
  if (!previous && !next) return null

  return (
    <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      {previous ? (
        <Link
          href={`/topics/${previous.slug}`}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all max-w-[45%]"
        >
          <span className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 text-lg">←</span>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">Previous</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{previous.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/topics/${next.slug}`}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all text-right max-w-[45%]"
        >
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">Next</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{next.title}</p>
          </div>
          <span className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 text-lg">→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
