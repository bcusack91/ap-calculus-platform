import Link from 'next/link'
import { ArrowRight, ClipboardList } from 'lucide-react'

/**
 * "Took a Bluebook test? Log it → get your plan." A one-line nudge toward the
 * Bluebook companion (/sat/bluebook). Static — no data, no personalization —
 * so it is safe on statically rendered pages like the SAT hub.
 */
export default function BluebookPromptCard({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/sat/bluebook"
      className={`group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-accent-muted hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent dark:bg-accent-light/15 dark:text-accent-muted">
        <ClipboardList className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">Took a Bluebook practice test?</span>
        <span className="block text-sm text-gray-600 dark:text-gray-400">Log your score report and get a plan for your weakest domains.</span>
      </span>
      <span className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-accent sm:inline-flex dark:text-accent-muted">
        Log it <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-accent sm:hidden dark:text-accent-muted" aria-hidden />
    </Link>
  )
}
