import BreadcrumbNav, { BreadcrumbItem } from '@/components/BreadcrumbNav'
import { getSubjectSeoByName } from '@/data/subject-configs'
import { getCourseHref } from '@/data/course-metadata'

/**
 * Breadcrumb for the templated tool pages (score-predictor / practice /
 * study-plans / etc.) so a visitor landing from search isn't stranded. Derives
 * the parent course link from the subject display name — no per-page prop needed.
 */
export function ToolBreadcrumb({ subjectName, tool }: { subjectName: string; tool: string }) {
  const s = getSubjectSeoByName(subjectName)
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
  if (s) {
    // getCourseHref falls back to /courses/<slug> for slugs without a hub; that
    // route 404s for SEO slugs that don't map to a DB course, so treat any
    // /courses/ fallback as "unknown" and send users to the topics hub instead.
    const href = getCourseHref(s.slug)
    items.push({ label: s.name, href: href.startsWith('/courses/') ? '/topics' : href })
  } else {
    items.push({ label: 'All courses', href: '/topics' })
  }
  items.push({ label: tool })

  return (
    <div className="max-w-5xl mx-auto px-4 pt-4">
      <BreadcrumbNav items={items} />
    </div>
  )
}
