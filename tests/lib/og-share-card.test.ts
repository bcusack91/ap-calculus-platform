import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { courseMeta, defaultCourseMeta } from '@/data/course-metadata'
import {
  BRAND_GRADIENT,
  CHALLENGE_GRADIENT,
  COMPETITIVE_GRADIENT,
  OG_COURSE_ALIASES,
  cardGradient,
  courseCardTheme,
  isEmojiIcon,
  mixHex,
  tailwindGradientToHex,
  whiteContrast,
} from '@/lib/og/course-theme'
import { parseFontMetrics, wrapLines } from '@/lib/og/font-metrics'

const ROOT = process.cwd()
const APP = join(ROOT, 'src/app')

/** White text must pass AA (4.5:1) on every stop and every midpoint. */
function expectWhiteSafe(stops: string[]) {
  const dark = cardGradient(stops)
  const samples = [...dark]
  for (let i = 1; i < dark.length; i++) samples.push(mixHex(dark[i - 1], dark[i]))
  for (const c of samples) expect(whiteContrast(c)).toBeGreaterThanOrEqual(4.5)
}

describe('share-card course themes', () => {
  it('every course in course-metadata resolves to a gradient and an icon', () => {
    for (const [slug, meta] of Object.entries(courseMeta)) {
      const stops = tailwindGradientToHex(meta.gradient)
      expect(stops, `${slug}: unmapped Tailwind colour in "${meta.gradient}"`).not.toBeNull()
      const theme = courseCardTheme(slug)
      expect(theme.key).toBe(slug)
      expect(theme.gradient).toEqual(stops)
      expect(theme.icon.length).toBeGreaterThan(0)
      // Either an emoji (Twemoji) or one of the drawn integral symbols.
      expect(isEmojiIcon(theme.icon) || ['∫', '∬', '∭'].includes(theme.icon)).toBe(true)
      expectWhiteSafe(theme.gradient)
    }
  })

  it('route/DB aliases point at real course-metadata entries', () => {
    for (const [alias, key] of Object.entries(OG_COURSE_ALIASES)) {
      expect(courseMeta[key], alias).toBeDefined()
      expect(courseCardTheme(alias).key).toBe(key)
    }
  })

  it('unknown slugs fall back to the default course gradient and icon', () => {
    const t = courseCardTheme('not-a-course')
    expect(t.key).toBeNull()
    expect(t.gradient).toEqual(tailwindGradientToHex(defaultCourseMeta.gradient))
    expect(t.icon).toBe('📚')
  })

  it('shared non-course gradients keep white text at AA', () => {
    for (const g of [BRAND_GRADIENT, COMPETITIVE_GRADIENT, CHALLENGE_GRADIENT]) expectWhiteSafe(g)
  })
})

describe('share-card font metrics', () => {
  const metrics = parseFontMetrics(readFileSync(join(ROOT, 'src/lib/og/fonts/Inter-ExtraBold.ttf')))

  it('measures real advance widths (wider glyphs measure wider)', () => {
    expect(metrics.measure('MMMM', 100)).toBeGreaterThan(metrics.measure('iiii', 100))
    expect(metrics.measure('AP Calculus BC', 100)).toBeGreaterThan(500)
    expect(metrics.measure('AP Calculus BC', 100)).toBeLessThan(1100)
  })

  it('wraps greedily within the width', () => {
    const w = (s: string) => metrics.measure(s, 100)
    const lines = wrapLines('Integration by Parts and Partial Fractions', 800, w)
    expect(lines.length).toBeGreaterThan(1)
    for (const l of lines) expect(w(l)).toBeLessThanOrEqual(800)
  })
})

describe('opengraph-image routes use the shared renderer', () => {
  const apRoutes = readdirSync(APP).filter(
    (d) => d.startsWith('ap-') && existsSync(join(APP, d, 'opengraph-image.tsx')),
  )

  it('covers all 22 AP hubs', () => {
    expect(apRoutes.length).toBe(22)
  })

  it.each(apRoutes)('%s is a thin wrapper around renderApHubCard', (dir) => {
    const src = readFileSync(join(APP, dir, 'opengraph-image.tsx'), 'utf8')
    expect(src).toContain(`renderApHubCard('${dir}'`)
    expect(src).not.toContain('new ImageResponse')
    expect(src).toContain("export const dynamic = 'force-dynamic'")
    expect(courseCardTheme(dir).key, `${dir} has no course-metadata entry`).not.toBeNull()
  })

  it('no opengraph/twitter route builds its own ImageResponse', () => {
    const offenders: string[] = []
    const walk = (dir: string) => {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, e.name)
        if (e.isDirectory()) walk(p)
        else if (/^(opengraph|twitter)-image\.tsx$/.test(e.name) && readFileSync(p, 'utf8').includes('ImageResponse')) {
          offenders.push(p.slice(ROOT.length + 1))
        }
      }
    }
    walk(APP)
    expect(offenders).toEqual([])
  })

  it('there is no root twitter-image (pages inherit their own og:image)', () => {
    expect(existsSync(join(APP, 'twitter-image.tsx'))).toBe(false)
  })

  it('the ASVAB pages have their own cards', () => {
    expect(existsSync(join(APP, 'asvab/opengraph-image.tsx'))).toBe(true)
    expect(existsSync(join(APP, 'asvab-afqt-calculator/opengraph-image.tsx'))).toBe(true)
  })
})
