import Link from 'next/link'

/**
 * The hero block shared by every bespoke course hub page.
 *
 * This is the one seam where the 29 hand-built hubs are genuinely identical:
 * the badge pill, the `<h1>`, and the tagline `<p>` are byte-for-byte the same
 * on all of them, varying only in accent color, course name, tagline, and the
 * two CTAs. Extracting just this — rather than converting whole pages to
 * <CourseHub/> — removes the bulk of the duplicated chrome while leaving each
 * page's body (features, units, exam panel, per-course copy) untouched, so
 * there is no content or ranking risk.
 *
 * It also gives cross-cutting hero changes a single home: adding breadcrumbs,
 * adjusting heading levels, or fixing contrast is now one edit rather than 29.
 */
export type HeroAccent =
  | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet'
  | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'red' | 'orange' | 'amber' | 'lime'

export interface CourseHeroProps {
  /** Rendered after "Master " in the gradient span, e.g. "AP Biology". */
  courseName: string
  /** Supporting line under the title. */
  tagline: string
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  /** Gradient start colour; also drives the badge and outline button. */
  accentFrom: HeroAccent
  /** Gradient end colour. */
  accentTo: HeroAccent
  /** Defaults to the site-wide "Free for All Students". */
  badgeLabel?: string
  /** Verb before the course name. Defaults to "Master". */
  leadWord?: string
}

/**
 * Tailwind scans source text, so colour classes cannot be built by
 * interpolation — every class has to appear literally somewhere. These lookup
 * tables are that literal source.
 */
const BADGE: Record<HeroAccent, string> = {
  green: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
  pink: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  red: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  lime: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
}

const GRADIENT: Record<HeroAccent, string> = {
  green: 'from-green-600', emerald: 'from-emerald-600', teal: 'from-teal-600',
  cyan: 'from-cyan-600', sky: 'from-sky-600', blue: 'from-blue-600',
  indigo: 'from-indigo-600', violet: 'from-violet-600', purple: 'from-purple-600',
  fuchsia: 'from-fuchsia-600', pink: 'from-pink-600', rose: 'from-rose-600',
  red: 'from-red-600', orange: 'from-orange-600', amber: 'from-amber-600',
  lime: 'from-lime-600',
}

const GRADIENT_TO: Record<HeroAccent, string> = {
  green: 'to-green-600', emerald: 'to-emerald-600', teal: 'to-teal-600',
  cyan: 'to-cyan-600', sky: 'to-sky-600', blue: 'to-blue-600',
  indigo: 'to-indigo-600', violet: 'to-violet-600', purple: 'to-purple-600',
  fuchsia: 'to-fuchsia-600', pink: 'to-pink-600', rose: 'to-rose-600',
  red: 'to-red-600', orange: 'to-orange-600', amber: 'to-amber-600',
  lime: 'to-lime-600',
}

const OUTLINE: Record<HeroAccent, string> = {
  green: 'border-green-300 text-green-700 hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900/20',
  emerald: 'border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20',
  teal: 'border-teal-300 text-teal-700 hover:bg-teal-50 dark:border-teal-600 dark:text-teal-400 dark:hover:bg-teal-900/20',
  cyan: 'border-cyan-300 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-600 dark:text-cyan-400 dark:hover:bg-cyan-900/20',
  sky: 'border-sky-300 text-sky-700 hover:bg-sky-50 dark:border-sky-600 dark:text-sky-400 dark:hover:bg-sky-900/20',
  blue: 'border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-900/20',
  indigo: 'border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-600 dark:text-indigo-400 dark:hover:bg-indigo-900/20',
  violet: 'border-violet-300 text-violet-700 hover:bg-violet-50 dark:border-violet-600 dark:text-violet-400 dark:hover:bg-violet-900/20',
  purple: 'border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20',
  fuchsia: 'border-fuchsia-300 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-600 dark:text-fuchsia-400 dark:hover:bg-fuchsia-900/20',
  pink: 'border-pink-300 text-pink-700 hover:bg-pink-50 dark:border-pink-600 dark:text-pink-400 dark:hover:bg-pink-900/20',
  rose: 'border-rose-300 text-rose-700 hover:bg-rose-50 dark:border-rose-600 dark:text-rose-400 dark:hover:bg-rose-900/20',
  red: 'border-red-300 text-red-700 hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20',
  orange: 'border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-900/20',
  amber: 'border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-900/20',
  lime: 'border-lime-300 text-lime-700 hover:bg-lime-50 dark:border-lime-600 dark:text-lime-400 dark:hover:bg-lime-900/20',
}

export default function CourseHero({
  courseName,
  tagline,
  primaryCta,
  secondaryCta,
  accentFrom,
  accentTo,
  badgeLabel = 'Free for All Students',
  leadWord = 'Master',
}: CourseHeroProps) {
  const gradient = `bg-gradient-to-r ${GRADIENT[accentFrom]} ${GRADIENT_TO[accentTo]}`

  return (
    <section className="container py-12 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${BADGE[accentFrom]}`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {badgeLabel}
        </div>
        <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          {leadWord}{' '}
          <span className={`${gradient} bg-clip-text text-transparent`}>{courseName}</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">{tagline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`rounded-xl ${gradient} px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:shadow-xl`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`rounded-xl border-2 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold transition ${OUTLINE[accentFrom]}`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
