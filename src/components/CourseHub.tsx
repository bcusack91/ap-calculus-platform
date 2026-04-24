/**
 * Reusable course landing-page (hub) component.
 *
 * Mirrors the visual structure of the AP Chemistry hub at /ap-chemistry:
 *   • Hero with badge + gradient title + dual CTAs
 *   • 2-column grid of feature cards
 *   • "What's Covered" units grid
 *   • Optional "About the Exam" panel (AP courses only)
 *
 * Used to bring courses currently rendered through /courses/[slug]
 * (the generic catalog) up to parity with hand-built AP hubs.
 */
import Link from 'next/link'
import { courseJsonLd } from '@/lib/jsonld'

export type HubIconName =
  | 'lessons'
  | 'diagnostic'
  | 'flashcards'
  | 'competitive'
  | 'daily'
  | 'scorePredictor'
  | 'exitQuiz'
  | 'frq'
  | 'practice'
  | 'studyPlan'
  | 'fullExam'
  | 'labs'
  | 'periodicTable'
  | 'reference'
  | 'sparkle'
  | 'chart'
  | 'puzzle'

const HUB_ICONS: Record<HubIconName, React.ReactNode> = {
  lessons: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
  diagnostic: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  ),
  flashcards: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  ),
  competitive: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  daily: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  scorePredictor: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 2 4-5" />
  ),
  exitQuiz: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  frq: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  ),
  practice: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h12" />
  ),
  studyPlan: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  ),
  fullExam: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  ),
  labs: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  ),
  periodicTable: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  ),
  reference: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2z M14 2v6h6 M9 13h6 M9 17h6" />
  ),
  sparkle: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l3.5 7L24 12l-7.5 2L13 21l-3.5-7L2 12l7.5-2z" />
  ),
  chart: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M9 17V9m4 8V5m4 12v-7" />
  ),
  puzzle: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a3 3 0 016 0v1h2a2 2 0 012 2v3h-1a3 3 0 100 6h1v3a2 2 0 01-2 2h-3v-1a3 3 0 10-6 0v1H5a2 2 0 01-2-2v-3h1a3 3 0 100-6H3V7a2 2 0 012-2h6V4z" />
  ),
}

export interface HubFeature {
  title: string
  description: string
  href: string
  icon: HubIconName
  /** Tailwind gradient classes, e.g. 'from-teal-500 to-cyan-500' */
  color: string
  stats: string
}

export interface HubUnit {
  title: string
  topics: string[]
  /** One of: indigo, blue, purple, green, amber, teal, pink, rose, cyan, orange, violet */
  color: HubUnitColor
}

export type HubUnitColor =
  | 'indigo'
  | 'blue'
  | 'purple'
  | 'green'
  | 'amber'
  | 'teal'
  | 'pink'
  | 'rose'
  | 'cyan'
  | 'orange'
  | 'violet'
  | 'sky'
  | 'red'

const UNIT_TITLE_COLORS: Record<HubUnitColor, string> = {
  indigo: 'text-indigo-700 dark:text-indigo-400',
  blue: 'text-blue-700 dark:text-blue-400',
  purple: 'text-purple-700 dark:text-purple-400',
  green: 'text-green-700 dark:text-green-400',
  amber: 'text-amber-700 dark:text-amber-400',
  teal: 'text-teal-700 dark:text-teal-400',
  pink: 'text-pink-700 dark:text-pink-400',
  rose: 'text-rose-700 dark:text-rose-400',
  cyan: 'text-cyan-700 dark:text-cyan-400',
  orange: 'text-orange-700 dark:text-orange-400',
  violet: 'text-violet-700 dark:text-violet-400',
  sky: 'text-sky-700 dark:text-sky-400',
  red: 'text-red-700 dark:text-red-400',
}
const UNIT_CHECK_COLORS: Record<HubUnitColor, string> = {
  indigo: 'text-indigo-500',
  blue: 'text-blue-500',
  purple: 'text-purple-500',
  green: 'text-green-500',
  amber: 'text-amber-500',
  teal: 'text-teal-500',
  pink: 'text-pink-500',
  rose: 'text-rose-500',
  cyan: 'text-cyan-500',
  orange: 'text-orange-500',
  violet: 'text-violet-500',
  sky: 'text-sky-500',
  red: 'text-red-500',
}

export type HubAccent =
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'violet'
  | 'pink'
  | 'rose'
  | 'red'
  | 'orange'
  | 'amber'
  | 'green'
  | 'emerald'
  | 'sky'
  | 'fuchsia'

interface AccentClasses {
  pageBg: string
  badgeBg: string
  badgeText: string
  titleGradient: string
  ctaGradient: string
  ctaSecondaryBorder: string
  ctaSecondaryText: string
  ctaSecondaryHover: string
  cardHover: string
}

/**
 * Hard-coded class strings (so Tailwind JIT picks them up reliably).
 */
const ACCENTS: Record<HubAccent, AccentClasses> = {
  teal: {
    pageBg: 'bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-teal-100 dark:bg-teal-900/40',
    badgeText: 'text-teal-700 dark:text-teal-300',
    titleGradient: 'bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    ctaSecondaryBorder: 'border-teal-300 dark:border-teal-600',
    ctaSecondaryText: 'text-teal-700 dark:text-teal-400',
    ctaSecondaryHover: 'hover:bg-teal-50 dark:hover:bg-teal-900/20',
    cardHover: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
  },
  cyan: {
    pageBg: 'bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-cyan-100 dark:bg-cyan-900/40',
    badgeText: 'text-cyan-700 dark:text-cyan-300',
    titleGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    ctaSecondaryBorder: 'border-cyan-300 dark:border-cyan-600',
    ctaSecondaryText: 'text-cyan-700 dark:text-cyan-400',
    ctaSecondaryHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20',
    cardHover: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
  },
  blue: {
    pageBg: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-blue-100 dark:bg-blue-900/40',
    badgeText: 'text-blue-700 dark:text-blue-300',
    titleGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    ctaSecondaryBorder: 'border-blue-300 dark:border-blue-600',
    ctaSecondaryText: 'text-blue-700 dark:text-blue-400',
    ctaSecondaryHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    cardHover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
  },
  indigo: {
    pageBg: 'bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-900/40',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    titleGradient: 'bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-indigo-600 to-blue-600',
    ctaSecondaryBorder: 'border-indigo-300 dark:border-indigo-600',
    ctaSecondaryText: 'text-indigo-700 dark:text-indigo-400',
    ctaSecondaryHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
    cardHover: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
  },
  purple: {
    pageBg: 'bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-purple-100 dark:bg-purple-900/40',
    badgeText: 'text-purple-700 dark:text-purple-300',
    titleGradient: 'bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-purple-600 to-violet-600',
    ctaSecondaryBorder: 'border-purple-300 dark:border-purple-600',
    ctaSecondaryText: 'text-purple-700 dark:text-purple-400',
    ctaSecondaryHover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
    cardHover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
  },
  violet: {
    pageBg: 'bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-violet-100 dark:bg-violet-900/40',
    badgeText: 'text-violet-700 dark:text-violet-300',
    titleGradient: 'bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-violet-600 to-purple-600',
    ctaSecondaryBorder: 'border-violet-300 dark:border-violet-600',
    ctaSecondaryText: 'text-violet-700 dark:text-violet-400',
    ctaSecondaryHover: 'hover:bg-violet-50 dark:hover:bg-violet-900/20',
    cardHover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
  },
  pink: {
    pageBg: 'bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-pink-100 dark:bg-pink-900/40',
    badgeText: 'text-pink-700 dark:text-pink-300',
    titleGradient: 'bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-pink-600 to-rose-600',
    ctaSecondaryBorder: 'border-pink-300 dark:border-pink-600',
    ctaSecondaryText: 'text-pink-700 dark:text-pink-400',
    ctaSecondaryHover: 'hover:bg-pink-50 dark:hover:bg-pink-900/20',
    cardHover: 'group-hover:text-pink-600 dark:group-hover:text-pink-400',
  },
  rose: {
    pageBg: 'bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-rose-100 dark:bg-rose-900/40',
    badgeText: 'text-rose-700 dark:text-rose-300',
    titleGradient: 'bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-rose-600 to-pink-600',
    ctaSecondaryBorder: 'border-rose-300 dark:border-rose-600',
    ctaSecondaryText: 'text-rose-700 dark:text-rose-400',
    ctaSecondaryHover: 'hover:bg-rose-50 dark:hover:bg-rose-900/20',
    cardHover: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
  },
  red: {
    pageBg: 'bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-red-100 dark:bg-red-900/40',
    badgeText: 'text-red-700 dark:text-red-300',
    titleGradient: 'bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-red-600 to-orange-600',
    ctaSecondaryBorder: 'border-red-300 dark:border-red-600',
    ctaSecondaryText: 'text-red-700 dark:text-red-400',
    ctaSecondaryHover: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    cardHover: 'group-hover:text-red-600 dark:group-hover:text-red-400',
  },
  orange: {
    pageBg: 'bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-orange-100 dark:bg-orange-900/40',
    badgeText: 'text-orange-700 dark:text-orange-300',
    titleGradient: 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-orange-600 to-amber-600',
    ctaSecondaryBorder: 'border-orange-300 dark:border-orange-600',
    ctaSecondaryText: 'text-orange-700 dark:text-orange-400',
    ctaSecondaryHover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
    cardHover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
  },
  amber: {
    pageBg: 'bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-amber-100 dark:bg-amber-900/40',
    badgeText: 'text-amber-700 dark:text-amber-300',
    titleGradient: 'bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-amber-600 to-yellow-600',
    ctaSecondaryBorder: 'border-amber-300 dark:border-amber-600',
    ctaSecondaryText: 'text-amber-700 dark:text-amber-400',
    ctaSecondaryHover: 'hover:bg-amber-50 dark:hover:bg-amber-900/20',
    cardHover: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
  },
  green: {
    pageBg: 'bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-green-100 dark:bg-green-900/40',
    badgeText: 'text-green-700 dark:text-green-300',
    titleGradient: 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-green-600 to-emerald-600',
    ctaSecondaryBorder: 'border-green-300 dark:border-green-600',
    ctaSecondaryText: 'text-green-700 dark:text-green-400',
    ctaSecondaryHover: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    cardHover: 'group-hover:text-green-600 dark:group-hover:text-green-400',
  },
  emerald: {
    pageBg: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    titleGradient: 'bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    ctaSecondaryBorder: 'border-emerald-300 dark:border-emerald-600',
    ctaSecondaryText: 'text-emerald-700 dark:text-emerald-400',
    ctaSecondaryHover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20',
    cardHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
  },
  sky: {
    pageBg: 'bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-sky-100 dark:bg-sky-900/40',
    badgeText: 'text-sky-700 dark:text-sky-300',
    titleGradient: 'bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-sky-600 to-blue-600',
    ctaSecondaryBorder: 'border-sky-300 dark:border-sky-600',
    ctaSecondaryText: 'text-sky-700 dark:text-sky-400',
    ctaSecondaryHover: 'hover:bg-sky-50 dark:hover:bg-sky-900/20',
    cardHover: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
  },
  fuchsia: {
    pageBg: 'bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    badgeBg: 'bg-fuchsia-100 dark:bg-fuchsia-900/40',
    badgeText: 'text-fuchsia-700 dark:text-fuchsia-300',
    titleGradient: 'bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent',
    ctaGradient: 'bg-gradient-to-r from-fuchsia-600 to-pink-600',
    ctaSecondaryBorder: 'border-fuchsia-300 dark:border-fuchsia-600',
    ctaSecondaryText: 'text-fuchsia-700 dark:text-fuchsia-400',
    ctaSecondaryHover: 'hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20',
    cardHover: 'group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400',
  },
}

export interface HubExamSection {
  /** e.g., "Format" */
  heading: string
  bullets: string[]
}

export interface HubExamInfo {
  title: string
  sections: HubExamSection[]
}

export interface CourseHubProps {
  courseSlug: string
  courseName: string
  courseDescription: string
  /** Hero subtitle / marketing line */
  tagline: string
  /** Optional badge text. Defaults to "Free for All Students" */
  badgeLabel?: string
  /** Hero CTAs */
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  /** Final "get started" CTA href; defaults to primaryCta.href */
  finalCtaHref?: string
  finalCtaLabel?: string
  accent: HubAccent
  features: HubFeature[]
  units: HubUnit[]
  /** Optional exam info panel; show "About the … Exam" when provided */
  exam?: HubExamInfo
}

function HubIcon({ name }: { name: HubIconName }) {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {HUB_ICONS[name]}
    </svg>
  )
}

export function CourseHub(props: CourseHubProps) {
  const a = ACCENTS[props.accent]
  const finalCtaHref = props.finalCtaHref ?? props.primaryCta.href
  const finalCtaLabel = props.finalCtaLabel ?? 'Get Started Free'

  return (
    <div className={`min-h-screen ${a.pageBg}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseJsonLd({
              title: props.courseName,
              description: props.courseDescription,
              slug: props.courseSlug,
            }),
          ),
        }}
      />

      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${a.badgeBg} ${a.badgeText}`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {props.badgeLabel ?? 'Free for All Students'}
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master <span className={a.titleGradient}>{props.courseName}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">{props.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={props.primaryCta.href}
              className={`rounded-xl px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl ${a.ctaGradient}`}
            >
              {props.primaryCta.label}
            </Link>
            {props.secondaryCta ? (
              <Link
                href={props.secondaryCta.href}
                className={`rounded-xl border-2 px-8 py-3.5 text-lg font-semibold transition ${a.ctaSecondaryBorder} ${a.ctaSecondaryText} ${a.ctaSecondaryHover}`}
              >
                {props.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {props.features.map(f => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}>
                    <HubIcon name={f.icon} />
                  </div>
                  <span className="text-xs font-medium text-gray-400">{f.stats}</span>
                </div>
                <h3 className={`mb-1 text-lg font-bold text-gray-900 dark:text-white ${a.cardHover}`}>{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">What&apos;s Covered</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {props.units.map(u => (
              <div
                key={u.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className={`mb-4 text-lg font-bold ${UNIT_TITLE_COLORS[u.color]}`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${UNIT_CHECK_COLORS[u.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {props.exam ? (
        <section className="container pb-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{props.exam.title}</h2>
            <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
              {props.exam.sections.map(s => (
                <div key={s.heading}>
                  <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">{s.heading}</h4>
                  <ul className="space-y-1">
                    {s.bullets.map(b => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href={finalCtaHref}
                className={`inline-flex items-center gap-2 rounded-xl px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg ${a.ctaGradient}`}
              >
                {finalCtaLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="container pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href={finalCtaHref}
              className={`inline-flex items-center gap-2 rounded-xl px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg ${a.ctaGradient}`}
            >
              {finalCtaLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
