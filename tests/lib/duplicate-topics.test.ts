/**
 * The duplicate-topic map decides which of two lessons on one concept stays
 * in the index. A wrong entry silently hides a page from search, so these
 * guards check the map's shape and that every consumer honors it.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { DUPLICATE_TOPICS, isDuplicateTopic } from '@/lib/duplicate-topics'

const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

describe('the map is unambiguous', () => {
  it('never points a page at itself', () => {
    for (const [loser, winner] of Object.entries(DUPLICATE_TOPICS)) {
      expect(loser).not.toBe(winner)
    }
  })

  it('never chains: a kept page is never also a hidden one', () => {
    // Otherwise the page we send readers to is itself out of the index.
    for (const winner of Object.values(DUPLICATE_TOPICS)) {
      expect(isDuplicateTopic(winner), `${winner} is both kept and hidden`).toBe(false)
    }
  })
})

describe('every consumer honors the map', () => {
  it('the topic page noindexes the weaker twin', () => {
    const page = read('src/app/topics/[slug]/page.tsx')
    expect(page).toContain('isDuplicateTopic(topic.slug)')
    expect(page).toContain('isThin || isDuplicate')
  })

  it('the interactive page noindexes it too, since that lesson competes as well', () => {
    const page = read('src/app/topics/[slug]/interactive/page.tsx')
    expect(page).toContain('isDuplicateTopic(topic.slug)')
  })

  it('the sitemap drops both of its URLs', () => {
    // Submitting a noindexed URL earns a "submitted but excluded" warning.
    const sitemap = read('src/app/sitemap.ts')
    const filters = sitemap.match(/!isDuplicateTopic\(topic\.slug\)/g) ?? []
    expect(filters.length).toBe(2)
  })
})
