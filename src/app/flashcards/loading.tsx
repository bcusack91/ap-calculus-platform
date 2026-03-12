export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl animate-pulse">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4" />
          <div className="h-5 w-80 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
        </div>

        {/* Flashcard deck grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
