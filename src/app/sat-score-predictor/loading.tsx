export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="h-10 w-56 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  )
}
