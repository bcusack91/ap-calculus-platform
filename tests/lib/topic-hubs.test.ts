/**
 * Topic hubs target unit-level searches ("ap bio unit 5"), so each one has to
 * carry the unit's real lesson list rather than a page of links. These guards
 * keep a new hub from shipping as the old ~220-word shell.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { topicHubs } from '@/data/topic-hubs'

const appDir = path.join(process.cwd(), 'src/app')
const nextConfig = fs.readFileSync(path.join(process.cwd(), 'next.config.ts'), 'utf8')

describe('every hub lists the lessons in its unit', () => {
  it('renders HubTopics with ISR, since the lessons come from the database', () => {
    const page = fs.readFileSync(path.join(appDir, 'hubs/[slug]/page.tsx'), 'utf8')
    expect(page).toContain('<HubTopics hub={hub} />')
    expect(page).toMatch(/export const revalidate = \d+/)
  })

  for (const hub of topicHubs) {
    it(`${hub.slug} names the categories it covers`, () => {
      expect(hub.categorySlugs.length).toBeGreaterThan(0)
      expect(new Set(hub.categorySlugs).size).toBe(hub.categorySlugs.length)
    })
  }
})

describe('hub links point somewhere real', () => {
  for (const hub of topicHubs) {
    for (const link of hub.links) {
      it(`${hub.slug} -> ${link.href}`, () => {
        const route = link.href.replace(/^\//, '')
        expect(
          fs.existsSync(path.join(appDir, route, 'page.tsx')) ||
            // Course pages are a dynamic segment rather than their own folder.
            route.startsWith('courses/'),
          `${link.href} has no page`,
        ).toBe(true)
        // Linking a redirect wastes the click and the crawl.
        expect(nextConfig.includes(`source: '${link.href}'`), `${link.href} is redirected`).toBe(false)
      })
    }
  }
})
