/**
 * Retired whole routes (the non-AP Precalculus track, Oct 2026) permanently
 * redirect to the page that replaced them. Every source must be gone from
 * src/app and the sitemap, every target must be a live page (never another
 * redirect, so no chains), and next.config.ts must emit the map as 308s.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { RETIRED_ROUTE_REDIRECTS } from '@/lib/retired-route-redirects'

const ROOT = process.cwd()
const nextConfig = fs.readFileSync(path.join(ROOT, 'next.config.ts'), 'utf8')
const sitemap = fs.readFileSync(path.join(ROOT, 'src/app/sitemap.ts'), 'utf8')

/** Every `source: '/x'` literal next.config redirects (the static ones). */
const redirectedSources = new Set([...nextConfig.matchAll(/source:\s*'(\/[^']+)'/g)].map((m) => m[1]))

const NON_AP_PRECALC_ROUTES = [
  '/precalculus', '/precalc-diagnostic', '/precalc-practice', '/precalc-unit-tests',
  '/precalc-study-plans', '/precalc-score-predictor', '/precalc-daily-question',
]

describe('retired route redirects', () => {
  it('cover every non-AP Precalculus route', () => {
    for (const route of NON_AP_PRECALC_ROUTES) expect(RETIRED_ROUTE_REDIRECTS[route], route).toBeTruthy()
  })

  it.each(Object.entries(RETIRED_ROUTE_REDIRECTS))('%s -> %s is a 308 to a live AP page', (source, target) => {
    expect(source).not.toBe(target)
    expect(target).toMatch(/^\/ap-precalc/)
    // The source page is gone, so the redirect is what answers the URL.
    expect(fs.existsSync(path.join(ROOT, 'src/app', source)), `${source} still has a route dir`).toBe(false)
    // The target is a real page and not itself redirected (no chains).
    expect(fs.existsSync(path.join(ROOT, 'src/app', target, 'page.tsx')), `${target} has no page.tsx`).toBe(true)
    expect(RETIRED_ROUTE_REDIRECTS[target], `${target} is itself retired`).toBeUndefined()
    expect(redirectedSources.has(target), `${target} is itself a next.config redirect`).toBe(false)
  })

  it('are emitted by next.config as permanent redirects, from the shared map', () => {
    expect(nextConfig).toContain("import { RETIRED_ROUTE_REDIRECTS } from \"./src/lib/retired-route-redirects\"")
    expect(nextConfig).toMatch(/Object\.entries\(RETIRED_ROUTE_REDIRECTS\)\)\s*\{\s*redirects\.push\(\{ source, destination, permanent: true \}\)/)
    // No second inline copy.
    for (const source of Object.keys(RETIRED_ROUTE_REDIRECTS)) expect(redirectedSources.has(source), source).toBe(false)
  })

  it('are not submitted by the sitemap and have no API routes or data files left', () => {
    for (const source of Object.keys(RETIRED_ROUTE_REDIRECTS)) {
      const key = source.slice(1) // 'precalc-diagnostic'
      const prefix = key.replace(/-(diagnostic|practice|unit-tests|study-plans|score-predictor|daily-question)$/, '')
      // The sitemap builds these URLs from short lists: 'precalc' must not be in any, nor the hub.
      expect(sitemap, source).not.toMatch(new RegExp(`'${prefix}'`))
    }
    for (const dir of ['precalc-diagnostic', 'precalc-daily-question', 'precalc-score-predictor', 'precalc-study-plans', 'precalculus-study-plans']) {
      expect(fs.existsSync(path.join(ROOT, 'src/app/api', dir)), `api/${dir}`).toBe(false)
    }
    for (const file of ['precalculus-diagnostic.ts', 'precalculus-study-plans.ts', 'precalc-daily-question.ts', 'precalc-practice', 'unit-tests/precalculus.ts']) {
      expect(fs.existsSync(path.join(ROOT, 'src/data', file)), `data/${file}`).toBe(false)
    }
  })
})
