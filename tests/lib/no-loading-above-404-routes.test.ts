/**
 * No loading.tsx may sit above a route that can call notFound().
 *
 * A loading boundary flushes a 200 shell before the page runs, so a missing
 * slug came back as HTTP 200 + the not-found UI + Next's automatic noindex:
 * a soft 404 that Search Console filed under "Excluded by noindex" for every
 * stale, renamed or mistyped URL Google had ever seen (593 of them), and that
 * "Validate fix" could never clear. Proven by elimination on a local server:
 * root, /topics and route-level boundaries each kept the status at 200.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'

const FORBIDDEN = [
  'src/app/loading.tsx',
  'src/app/topics/loading.tsx',
  'src/app/topics/[slug]/loading.tsx',
  'src/app/topics/[slug]/interactive/loading.tsx',
  'src/app/categories/loading.tsx',
  'src/app/categories/[slug]/loading.tsx',
  'src/app/courses/loading.tsx',
  'src/app/courses/[slug]/loading.tsx',
  'src/app/hubs/loading.tsx',
  'src/app/hubs/[slug]/loading.tsx',
]

const ROUTES_THAT_404 = [
  'src/app/topics/[slug]/page.tsx',
  'src/app/topics/[slug]/interactive/page.tsx',
  'src/app/categories/[slug]/page.tsx',
  'src/app/courses/[slug]/page.tsx',
  'src/app/hubs/[slug]/page.tsx',
]

describe('soft-404 guard', () => {
  it('has no loading boundary above a 404-capable route', () => {
    for (const f of FORBIDDEN) expect(fs.existsSync(f), `${f} must not exist`).toBe(false)
  })

  it('decides notFound in generateMetadata, before anything streams', () => {
    for (const f of ROUTES_THAT_404) {
      const src = fs.readFileSync(f, 'utf8')
      const meta = src.slice(src.indexOf('generateMetadata'), src.indexOf('export default'))
      expect(meta, `${f} generateMetadata`).toMatch(/notFound\(\)/)
    }
  })
})
