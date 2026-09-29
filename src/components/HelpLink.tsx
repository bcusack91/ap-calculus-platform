import Link from 'next/link'
import { CircleHelp } from 'lucide-react'
import {
  HELP_ARTICLES,
  helpHref,
  type HelpArticleKey,
  type HelpArticleSlug,
} from '@/data/help/slugs'

export { HELP_ARTICLES, helpHref }
export type { HelpArticleKey, HelpArticleSlug }

interface HelpLinkProps {
  /** Which article to open — use `HELP_ARTICLES.<key>`, never a raw string. */
  article: HelpArticleSlug
  /** Optional heading or glossary-term id inside the article. */
  anchor?: string
  /** Accessible name and tooltip, e.g. "Why are my flashcards locked?". Defaults to "Help". */
  label?: string
  /** Open in a new tab (useful mid-quiz or mid-lesson, so work isn't lost). */
  newTab?: boolean
  /** Icon size in px (default 16). */
  size?: number
  className?: string
}

/**
 * A small "?" icon that links to a help-center article. Place it beside a
 * gate or a confusing label:
 *
 *   <HelpLink article={HELP_ARTICLES.flashcardsLocked} label="Why are my flashcards locked?" />
 *
 * Server- and client-safe (no hooks), so it drops into either kind of component.
 */
export default function HelpLink({
  article,
  anchor,
  label = 'Help',
  newTab = false,
  size = 16,
  className = '',
}: HelpLinkProps) {
  const accessibleName = newTab ? `${label} (opens in a new tab)` : label
  return (
    <Link
      href={helpHref(article, anchor)}
      aria-label={accessibleName}
      title={label}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`-m-1 inline-flex items-center justify-center rounded-full p-1 align-middle text-gray-500 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-400 dark:hover:text-accent-muted ${className}`}
    >
      <CircleHelp style={{ width: size, height: size }} aria-hidden />
    </Link>
  )
}
