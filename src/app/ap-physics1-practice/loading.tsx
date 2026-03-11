export default function Loading() {
  return (<div className="container py-10"><div className="mx-auto max-w-4xl animate-pulse"><div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6" /><div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mb-8" /><div className="grid gap-6 sm:grid-cols-2">{[1,2].map(i=><div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl" />)}</div></div></div>)
}
