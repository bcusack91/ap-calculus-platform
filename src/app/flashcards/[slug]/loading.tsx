export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6" />

        {/* Title skeleton */}
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mb-8" />

        {/* Flashcard grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 min-h-[150px]">
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
