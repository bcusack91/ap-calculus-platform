export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>

        {/* Score bar skeleton */}
        <div className="flex items-center justify-between mb-10 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* Question card skeleton */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-3"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
