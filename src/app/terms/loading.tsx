export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="mb-4">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
