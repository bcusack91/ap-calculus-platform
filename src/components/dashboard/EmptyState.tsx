import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

/**
 * Friendly empty state for dashboard cards — mirrors the Recent Activity
 * pattern: an icon, one line of copy, and a CTA link.
 */
export default function EmptyState({
  icon: Icon,
  message,
  ctaHref,
  ctaLabel,
  compact = false,
}: {
  icon: LucideIcon
  message: string
  ctaHref: string
  ctaLabel: string
  compact?: boolean
}) {
  return (
    <div className={`text-center ${compact ? 'py-4' : 'py-8'}`}>
      <Icon className={`mx-auto text-gray-300 dark:text-gray-600 mb-3 ${compact ? 'w-8 h-8' : 'w-10 h-10'}`} aria-hidden />
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{message}</p>
      <Link href={ctaHref} className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors">
        {ctaLabel} →
      </Link>
    </div>
  )
}
