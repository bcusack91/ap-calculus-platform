import type { ReactNode } from 'react'
import { Children, isValidElement, cloneElement } from 'react'

/**
 * Visual callout / admonition boxes for long-form lesson content.
 *
 * Authors write a normal Markdown blockquote whose first line is a GitHub-style
 * marker, e.g.:
 *
 *   > [!KEY]
 *   > The derivative measures instantaneous rate of change.
 *
 *   > [!MISTAKE]
 *   > Forgetting the chain rule when differentiating composite functions.
 *
 * Recognized markers map to styled boxes (Key Takeaway, AP Tip, Common Mistake,
 * Note, Example). Anything without a recognized marker falls back to the normal
 * blockquote styling, so existing content is unaffected.
 */

type CalloutStyle = {
  title: string
  icon: string
  container: string
  heading: string
}

// Marker (normalized to upper-case, no spaces) → style. Several aliases map to
// the same visual treatment so authors can use whichever reads naturally.
const CALLOUT_STYLES: Record<string, CalloutStyle> = {
  KEY: {
    title: 'Key Takeaway',
    icon: '🔑',
    container: 'border-purple-400 bg-purple-50 dark:border-purple-500 dark:bg-purple-900/20',
    heading: 'text-purple-800 dark:text-purple-200',
  },
  IMPORTANT: {
    title: 'Key Takeaway',
    icon: '🔑',
    container: 'border-purple-400 bg-purple-50 dark:border-purple-500 dark:bg-purple-900/20',
    heading: 'text-purple-800 dark:text-purple-200',
  },
  TIP: {
    title: 'Tip',
    icon: '💡',
    container: 'border-green-400 bg-green-50 dark:border-green-500 dark:bg-green-900/20',
    heading: 'text-green-800 dark:text-green-200',
  },
  AP: {
    title: 'AP Exam Tip',
    icon: '🎯',
    container: 'border-green-400 bg-green-50 dark:border-green-500 dark:bg-green-900/20',
    heading: 'text-green-800 dark:text-green-200',
  },
  MISTAKE: {
    title: 'Common Mistake',
    icon: '⚠️',
    container: 'border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900/20',
    heading: 'text-red-800 dark:text-red-200',
  },
  WARNING: {
    title: 'Watch Out',
    icon: '⚠️',
    container: 'border-amber-400 bg-amber-50 dark:border-amber-500 dark:bg-amber-900/20',
    heading: 'text-amber-800 dark:text-amber-200',
  },
  CAUTION: {
    title: 'Watch Out',
    icon: '⚠️',
    container: 'border-amber-400 bg-amber-50 dark:border-amber-500 dark:bg-amber-900/20',
    heading: 'text-amber-800 dark:text-amber-200',
  },
  NOTE: {
    title: 'Note',
    icon: 'ℹ️',
    container: 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20',
    heading: 'text-blue-800 dark:text-blue-200',
  },
  INFO: {
    title: 'Note',
    icon: 'ℹ️',
    container: 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20',
    heading: 'text-blue-800 dark:text-blue-200',
  },
  EXAMPLE: {
    title: 'Example',
    icon: '📝',
    container: 'border-teal-400 bg-teal-50 dark:border-teal-500 dark:bg-teal-900/20',
    heading: 'text-teal-800 dark:text-teal-200',
  },
}

const MARKER_RE = /^\s*\[!\s*([A-Za-z ]+?)\s*\]\s*:?\s*/

// Pull the leading plain-text string out of (possibly nested) React children.
function leadingText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) {
    for (const child of node) {
      const t = leadingText(child)
      if (t) return t
    }
    return ''
  }
  if (isValidElement(node)) {
    return leadingText((node.props as { children?: ReactNode }).children)
  }
  return ''
}

// Return children with the first occurrence of the marker prefix removed from
// the leading text node, so the box body doesn't repeat "[!KEY]".
function stripMarker(node: ReactNode): { node: ReactNode; done: boolean } {
  if (typeof node === 'string') {
    if (MARKER_RE.test(node)) {
      return { node: node.replace(MARKER_RE, ''), done: true }
    }
    return { node, done: false }
  }
  if (Array.isArray(node)) {
    const out: ReactNode[] = []
    let done = false
    for (const child of node) {
      if (done) {
        out.push(child)
        continue
      }
      const res = stripMarker(child)
      out.push(res.node)
      done = res.done
    }
    return { node: out, done }
  }
  if (isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: ReactNode }>
    const res = stripMarker(element.props.children)
    if (!res.done) return { node, done: false }
    return {
      node: cloneElement(element, undefined, res.node),
      done: true,
    }
  }
  return { node, done: false }
}

/**
 * Renders a styled admonition if the blockquote opens with a recognized marker;
 * otherwise renders the default blockquote passed via `fallback`.
 */
export function MarkdownCallout({
  children,
  fallback,
}: {
  children?: ReactNode
  fallback: (children?: ReactNode) => ReactNode
}) {
  const text = leadingText(children)
  const match = text.match(MARKER_RE)
  const key = match?.[1]?.toUpperCase().replace(/\s+/g, '')
  const style = key ? CALLOUT_STYLES[key] : undefined

  if (!style) {
    return <>{fallback(children)}</>
  }

  const stripped = stripMarker(Children.toArray(children)).node

  return (
    <div className={`not-prose my-5 rounded-lg border-l-4 px-5 py-4 shadow-sm ${style.container}`}>
      <p className={`mb-2 flex items-center gap-2 font-bold ${style.heading}`}>
        <span aria-hidden className="text-lg">{style.icon}</span>
        {style.title}
      </p>
      <div className="text-gray-700 dark:text-gray-200 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:text-gray-900 dark:[&_strong]:text-white">
        {stripped}
      </div>
    </div>
  )
}
