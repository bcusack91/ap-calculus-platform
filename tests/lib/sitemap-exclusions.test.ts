/**
 * The sitemap must not submit URLs that redirect or carry noindex.
 *
 * A live sweep of all 2,543 submitted URLs found 104 legacy topic slugs
 * answering 308 (their Topic rows still exist, so a Topic-table sitemap kept
 * listing them — Search Console's "Page with redirect"), /competitive
 * redirecting signed-out crawlers to sign-in, and two empty categories that
 * the page metadata noindexes ("Excluded by noindex").
 */
import { describe, it, expect } from 'vitest'
import { LEGACY_TOPIC_REDIRECTS, isLegacyTopicSlug } from '@/lib/legacy-topic-redirects'
import fs from 'fs'

describe('legacy topic redirects', () => {
  it('cover the known micro-lesson slugs', () => {
    expect(Object.keys(LEGACY_TOPIC_REDIRECTS).length).toBeGreaterThanOrEqual(59)
    expect(isLegacyTopicSlug('trig-substitution')).toBe(true)
    expect(isLegacyTopicSlug('advanced-integration-calcbc')).toBe(false)
  })

  it('never redirect to another redirected slug (no chains, no loops)', () => {
    for (const [from, to] of Object.entries(LEGACY_TOPIC_REDIRECTS)) {
      expect(from, `${from} -> ${to}`).not.toBe(to)
      expect(isLegacyTopicSlug(to), `${from} -> ${to} is itself redirected`).toBe(false)
    }
  })

  it('are the single source used by next.config and the sitemap', () => {
    const config = fs.readFileSync('next.config.ts', 'utf8')
    const sitemap = fs.readFileSync('src/app/sitemap.ts', 'utf8')
    expect(config).toContain('LEGACY_TOPIC_REDIRECTS')
    expect(config).not.toMatch(/'trig-substitution':\s*'/) // no second inline copy
    expect(sitemap).toContain('isLegacyTopicSlug(topic.slug)')
    expect(sitemap).toContain('category._count.topics > 0')
    expect(sitemap).not.toMatch(/url: `\$\{baseUrl\}\/competitive`/)
  })
})
