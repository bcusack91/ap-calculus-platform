export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-72 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4" />
          <div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
        </div>

        {/* Pricing cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
              <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3" />
              ))}
              <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl mt-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
