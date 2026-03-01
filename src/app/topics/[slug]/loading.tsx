export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        {/* Breadcrumb */}
        <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6" />

        {/* Title */}
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-5 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-8" />

        {/* Content blocks */}
        <div className="space-y-4">
          {[95, 88, 92, 85, 90, 87, 93, 82].map((w, i) => (
            <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded" style={{ width: `${w}%` }} />
          ))}
        </div>

        {/* Example problems skeleton */}
        <div className="mt-12">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
