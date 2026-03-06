export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
