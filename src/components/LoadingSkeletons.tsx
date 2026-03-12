'use client'

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
      <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
  )
}

export function TopicCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full" />
    </div>
  )
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-2">
      <div className="grid grid-cols-4 gap-4 pb-2 border-b dark:border-gray-700">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />)}
      </div>
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4 py-2">
          {[1, 2, 3, 4].map(j => <div key={j} className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />)}
        </div>
      ))}
    </div>
  )
}

export function LeaderboardSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="flex-1 space-y-1">
            <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      ))}
    </div>
  )
}

export function FlashcardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full max-w-lg mx-auto aspect-[3/2] bg-gray-200 dark:bg-gray-700 rounded-2xl" />
      <div className="flex justify-center gap-4 mt-4">
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
    </div>
  )
}
