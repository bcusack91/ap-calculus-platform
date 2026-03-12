export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl animate-pulse">
        {/* Search bar skeleton */}
        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-8" />

        {/* Result skeletons */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="mb-4 rounded-xl border border-gray-200 dark:border-gray-700 p-5"
          >
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
