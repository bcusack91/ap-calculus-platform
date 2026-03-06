export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-6" />
        <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  )
}
