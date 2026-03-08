export default function CalcABDiagnosticLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="h-10 w-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="h-5 w-96 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
