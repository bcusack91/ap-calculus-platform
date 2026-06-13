export default function Loading() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl animate-pulse space-y-6">
        <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl" />)}
        </div>
      </div>
    </div>
  )
}
