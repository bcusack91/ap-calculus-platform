export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse text-center">
        {/* Card skeleton */}
        <div className="mx-auto w-full max-w-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-10">
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-6" />
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6" />
          <div className="flex justify-center gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
