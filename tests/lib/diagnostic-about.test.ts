/**
 * The diagnostic routes are client-rendered quizzes, so the About section in
 * their layout is the only crawlable copy they have. These guards keep a new
 * diagnostic route (or a renamed tool page) from silently shipping the old
 * ~150-word shell again.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { DIAGNOSTIC_ABOUT } from '@/lib/diagnostic-about'

const appDir = path.join(process.cwd(), 'src/app')
const nextConfig = fs.readFileSync(path.join(process.cwd(), 'next.config.ts'), 'utf8')

/** A permanent redirect in next.config shadows the route's page.tsx entirely. */
const isRedirected = (route: string) => nextConfig.includes(`source: '/${route}'`)

const servedRoutes = fs
  .readdirSync(appDir)
  .filter((d) => d.endsWith('-diagnostic') && fs.existsSync(path.join(appDir, d, 'page.tsx')))
  .filter((d) => !isRedirected(d))

/** Regular Pre-Calculus has no Course row, so it has no unit list to render. */
const WITHOUT_ABOUT = new Set(['precalc-diagnostic'])

describe('every diagnostic route renders the About section', () => {
  it('finds the diagnostic routes', () => {
    expect(servedRoutes.length).toBeGreaterThan(25)
  })

  for (const route of servedRoutes) {
    if (WITHOUT_ABOUT.has(route)) continue

    it(`${route} has a registry entry and renders it`, () => {
      expect(DIAGNOSTIC_ABOUT[route]).toBeDefined()
      const layout = fs.readFileSync(path.join(appDir, route, 'layout.tsx'), 'utf8')
      expect(layout).toContain(`<DiagnosticAbout slug="${route}" />`)
      // The section reads from the database, so the route needs ISR rather
      // than becoming fully dynamic.
      expect(layout).toMatch(/export const revalidate = \d+/)
    })
  }
})

describe('registry entries stay true to the routes', () => {
  for (const [route, config] of Object.entries(DIAGNOSTIC_ABOUT)) {
    it(`${route}: links point at real routes and form rotation is accurate`, () => {
      expect(config.courseSlugs.length).toBeGreaterThan(0)

      for (const link of config.links) {
        const dir = path.join(appDir, link.href.replace(/^\//, ''))
        expect(fs.existsSync(path.join(dir, 'page.tsx')), `${link.href} is missing`).toBe(true)
      }

      // "a retake is new questions" is only true where the quiz picks a new form.
      const page = fs.readFileSync(path.join(appDir, route, 'page.tsx'), 'utf8')
      expect(config.rotatesForms ?? false).toBe(page.includes('pickNextForm'))
    })
  }
})
