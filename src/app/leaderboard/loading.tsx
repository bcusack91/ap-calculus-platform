export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        {/* Header */}
        <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mb-8" />

        {/* Leaderboard table skeleton */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4">
            <div className="flex gap-8">
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded ml-auto" />
            </div>
          </div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded ml-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
