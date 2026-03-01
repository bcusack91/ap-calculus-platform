export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6" />

        {/* Header skeleton */}
        <div className="rounded-3xl bg-gray-100 dark:bg-gray-800 p-12 mb-12">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
          <div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
          <div className="flex gap-6">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* Topic grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
