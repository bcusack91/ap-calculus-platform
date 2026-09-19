import { Calculator, ExternalLink } from 'lucide-react'

/**
 * Opens the Desmos graphing calculator in a new tab.
 *
 * The Digital SAT gives students a built-in Desmos calculator on the Math
 * section, so practising with the same tool matters. This links out rather
 * than embedding: Desmos's embed API is licensed for prototyping, not
 * commercial use (their own console warning says so), and framing
 * desmos.com was silently blocked by this site's `frame-src` policy — the
 * button that used to do it opened an empty box in production.
 *
 * A new tab also matches how students actually work: calculator on one side,
 * question on the other, and their place in a timed test is never lost.
 */
export default function DesmosCalculatorLink({
  className = '',
  label = 'Desmos calculator',
  size = 'sm',
}: {
  className?: string
  /** Shorter label where space is tight (e.g. a crowded test toolbar). */
  label?: string
  /**
   * Padding and type scale. A discrete prop rather than a className override:
   * Tailwind resolves `py-1.5` against `py-2` by stylesheet order, not by the
   * order they appear in the attribute, so passing the bigger size as extra
   * classes silently loses about half the time.
   */
  size?: 'sm' | 'md'
}) {
  const sizing = size === 'md' ? 'px-3 py-2 text-sm' : 'px-3 py-1.5 text-xs'
  const icon = size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'
  return (
    <a
      href="https://www.desmos.com/calculator"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg bg-gray-100 font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 ${sizing} ${className}`}
      title="Open the Desmos graphing calculator in a new tab — the same calculator the Digital SAT provides"
      aria-label={`${label} (opens in a new tab)`}
    >
      <Calculator className={icon} aria-hidden="true" />
      {label}
      <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
    </a>
  )
}
