/**
 * Course identity for social share cards (og:image / iMessage previews).
 *
 * The single source of truth is `courseMeta` in src/data/course-metadata.ts:
 * its Tailwind gradient classes (e.g. `from-green-600 to-lime-600`) and icon.
 * Share cards are rendered by Satori, which can't read Tailwind, so this file
 * maps the Tailwind colour names to hex and then darkens each stop until white
 * text on it measures at least 4.5:1 (WCAG AA for normal-size text). Pure data
 * and math, no JSX, so it is unit-testable.
 */
import { courseMeta, defaultCourseMeta } from '@/data/course-metadata'

/** Tailwind (v3 palette) hex values for the colour names course-metadata uses. */
export const TAILWIND_HEX: Record<string, string> = {
  'slate-600': '#475569',
  'gray-500': '#6b7280', 'gray-600': '#4b5563', 'gray-700': '#374151',
  'red-500': '#ef4444', 'red-600': '#dc2626', 'red-700': '#b91c1c',
  'orange-500': '#f97316', 'orange-600': '#ea580c', 'orange-700': '#c2410c',
  'amber-500': '#f59e0b', 'amber-600': '#d97706', 'amber-700': '#b45309',
  'yellow-500': '#eab308', 'yellow-600': '#ca8a04', 'yellow-700': '#a16207',
  'lime-500': '#84cc16', 'lime-600': '#65a30d', 'lime-700': '#4d7c0f',
  'green-500': '#22c55e', 'green-600': '#16a34a', 'green-700': '#15803d',
  'emerald-500': '#10b981', 'emerald-600': '#059669', 'emerald-700': '#047857',
  'teal-500': '#14b8a6', 'teal-600': '#0d9488', 'teal-700': '#0f766e',
  'cyan-500': '#06b6d4', 'cyan-600': '#0891b2', 'cyan-700': '#0e7490',
  'sky-500': '#0ea5e9', 'sky-600': '#0284c7', 'sky-700': '#0369a1',
  'blue-500': '#3b82f6', 'blue-600': '#2563eb', 'blue-700': '#1d4ed8',
  'indigo-500': '#6366f1', 'indigo-600': '#4f46e5', 'indigo-700': '#4338ca',
  'violet-500': '#8b5cf6', 'violet-600': '#7c3aed', 'violet-700': '#6d28d9',
  'purple-500': '#a855f7', 'purple-600': '#9333ea', 'purple-700': '#7e22ce',
  'fuchsia-500': '#d946ef', 'fuchsia-600': '#c026d3', 'fuchsia-700': '#a21caf',
  'pink-500': '#ec4899', 'pink-600': '#db2777', 'pink-700': '#be185d',
  'rose-500': '#f43f5e', 'rose-600': '#e11d48', 'rose-700': '#be123c',
}

/** Brand purple→blue (the favicon's gradient) for site-wide cards. */
export const BRAND_GRADIENT = ['#7c3aed', '#2563eb']
/** Competitive mode (leaderboard): amber→red. */
export const COMPETITIVE_GRADIENT = ['#f59e0b', '#dc2626']
/** Challenge invites with no resolvable course: amber→red→violet. */
export const CHALLENGE_GRADIENT = ['#f59e0b', '#dc2626', '#7c3aed']

/**
 * Route / DB slugs that differ from their course-metadata key. The DB course
 * is `organic-chemistry` while the registry splits OChem 1 and 2; the SAT,
 * MCAT and CSP hubs live at shorter paths than their course slugs.
 */
export const OG_COURSE_ALIASES: Record<string, string> = {
  'organic-chemistry': 'organic-chemistry-1',
  sat: 'sat-prep',
  mcat: 'mcat-prep',
  'ap-cs-principles': 'ap-computer-science-principles',
}

/** `from-green-600 via-x-500 to-lime-600` → hex stops, in order. */
export function tailwindGradientToHex(classes: string): string[] | null {
  const stops: string[] = []
  for (const prefix of ['from', 'via', 'to']) {
    const m = classes.match(new RegExp(`(?:^|\\s)${prefix}-([a-z]+-\\d{2,3})(?:\\s|$)`))
    if (!m) continue
    const hex = TAILWIND_HEX[m[1]]
    if (!hex) return null
    stops.push(hex)
  }
  return stops.length >= 2 ? stops : null
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number]
}

function rgbToHex([r, g, b]: [number, number, number]): string {
  return '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('')
}

/** WCAG relative luminance. */
export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Contrast ratio of white text on `hex`. */
export function whiteContrast(hex: string): number {
  return 1.05 / (relativeLuminance(hex) + 0.05)
}

/** sRGB midpoint of two colours (what a CSS linear-gradient paints halfway). */
export function mixHex(a: string, b: string): string {
  const ra = hexToRgb(a)
  const rb = hexToRgb(b)
  return rgbToHex([0, 1, 2].map((i) => (ra[i] + rb[i]) / 2) as [number, number, number])
}

/**
 * Darken a colour (scale toward black, hue kept) until white text on it meets
 * `minRatio`. Already-dark colours are still deepened slightly so cards share
 * a consistent rich tone instead of some looking washed out.
 */
export function darkenForWhiteText(hex: string, minRatio = 4.6): string {
  let rgb = hexToRgb(hex).map((v) => v * 0.9) as [number, number, number]
  for (let i = 0; i < 60 && whiteContrast(rgbToHex(rgb)) < minRatio; i++) {
    rgb = rgb.map((v) => v * 0.96) as [number, number, number]
  }
  return rgbToHex(rgb)
}

/** Darken every stop of a gradient so white text passes AA everywhere on it. */
export function cardGradient(stops: string[]): string[] {
  return stops.map((s) => darkenForWhiteText(s))
}

/**
 * True when `icon` will render as an emoji image (Twemoji) rather than as a
 * text glyph. Calc AB/BC use the math symbols ∫ / ∬, which are text.
 */
export function isEmojiIcon(icon: string): boolean {
  return /\p{Extended_Pictographic}|\p{Regional_Indicator}|⃣/u.test(icon)
}

export interface CourseCardTheme {
  /** Metadata key the theme came from (after aliasing), or null for default. */
  key: string | null
  /** Emoji or symbol shown in the card's icon tile. */
  icon: string
  /** The course's hex stops as authored; renderShareCard darkens them (cardGradient). */
  gradient: string[]
}

/** Resolve a route or DB course slug to its share-card colours and icon. */
export function courseCardTheme(slug: string | null | undefined): CourseCardTheme {
  const key = slug ? (OG_COURSE_ALIASES[slug] ?? slug) : null
  const meta = key ? courseMeta[key] : undefined
  const stops = tailwindGradientToHex((meta ?? defaultCourseMeta).gradient) ?? BRAND_GRADIENT
  return {
    key: meta ? key : null,
    icon: meta?.icon ?? defaultCourseMeta.icon,
    gradient: stops,
  }
}
