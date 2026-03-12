export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-md animate-pulse text-center">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-6" />
        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
      </div>
    </div>
  )
}
