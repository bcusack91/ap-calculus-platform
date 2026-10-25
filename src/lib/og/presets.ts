/**
 * Share-card presets: the copy and course identity for each kind of page,
 * so the opengraph-image routes stay one-line wrappers.
 *
 * Copy rule: every tagline/chip must be true for the page it's on. Numbers
 * come from live data (DB counts, site-stats) or are facts of the product
 * (the ASVAB practice test is a fixed 135-item form).
 */
import { courseCardTheme } from './course-theme'
import { renderShareCard, type ShareCardProps } from './share-card'

/** Everything a share card needs except the colours/icon, which come from the course. */
type CardCopy = Omit<ShareCardProps, 'gradient' | 'icon'> & { icon?: string }

/** A card in a course's own colours and icon (from course-metadata). */
export function renderCourseCard(slug: string, copy: CardCopy) {
  const theme = courseCardTheme(slug)
  return renderShareCard({ ...copy, icon: copy.icon ?? theme.icon, gradient: theme.gradient })
}

// Every AP hub lists interactive lessons, a diagnostic, flashcards and a daily
// question; practice exams/FRQs are linked from each hub as well.
export const AP_HUB_TAGLINE = 'Lessons · Practice tests · Flashcards'
export const AP_HUB_CHIPS = ['Diagnostic test', 'Daily question', 'Free']

/** The /ap-* course hub card. `title` is the short course name, e.g. "AP Calculus BC". */
export function renderApHubCard(slug: string, title: string) {
  return renderCourseCard(slug, {
    eyebrow: 'AP course',
    title,
    tagline: AP_HUB_TAGLINE,
    chips: AP_HUB_CHIPS,
  })
}
