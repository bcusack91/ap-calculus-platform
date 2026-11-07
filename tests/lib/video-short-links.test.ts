import { describe, it, expect } from 'vitest'
import { VIDEO_SHORT_LINKS, lookupShortLink, shortLinkDestination } from '@/data/video-short-links'
import { getShotList } from '@/data/video-shot-lists'

describe('video short links (/v/<code>)', () => {
  it('codes are short, lowercase, and say-able', () => {
    for (const code of Object.keys(VIDEO_SHORT_LINKS)) expect(code).toMatch(/^[a-z]+[0-9]+$/)
  })

  it('every pilot code points at a real clip in its recording plan', async () => {
    for (const [code, link] of Object.entries(VIDEO_SHORT_LINKS)) {
      const plan = await getShotList(link.topicSlug)
      expect(plan, code).not.toBeNull()
      expect(link.clip).toBeGreaterThanOrEqual(1)
      expect(link.clip).toBeLessThanOrEqual(plan!.clips.length)
    }
  })

  it('lookup is case-insensitive and ignores unknown codes', () => {
    expect(lookupShortLink('BONDS3')?.clip).toBe(3)
    expect(lookupShortLink('constructor')).toBeNull()
    expect(lookupShortLink('nope1')).toBeNull()
  })

  it('always lands on the clip\'s questions page, with the YouTube campaign carried through', () => {
    const link = lookupShortLink('bonds2')!
    const dest = '/v/bonds2/questions?utm_source=youtube&utm_medium=video&utm_campaign=apchem-bonds&utm_content=bonds2'
    expect(shortLinkDestination(link, ['jane'])).toBe(dest)
    expect(shortLinkDestination(link, ['jane', 'marcus'])).toBe(dest)
    expect(shortLinkDestination(link, [])).toBe(dest)
  })
})
