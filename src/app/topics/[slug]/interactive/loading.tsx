export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  )
}
