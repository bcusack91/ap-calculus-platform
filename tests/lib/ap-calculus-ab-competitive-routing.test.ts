/**
 * AP Calculus AB competitive routing guard (Oct 2026 alignment pass).
 *
 * Every student-selectable AB Topic (the prod Category -> Topic layout in
 * CALC_CATEGORIES) must draw ONLY from the bank slugs its name promises, and
 * enough of them to fill a 13-question match without repeats. Before this
 * guard, "Applications of derivatives" sat in COURSE_GROUPING_LESSONS and
 * served a random draw from all 1,700+ items, while the three bank slugs that
 * are its content were orphans no Topic could reach.
 *
 * Only the two exam-prep review topics are allowed to draw from the whole AB
 * bank (plus the unit-level Category buckets, which the student page never
 * sends).
 */
import { describe, it, expect, vi } from 'vitest'
import { CALC_CATEGORIES } from '@/lib/course-includes'
import { generateMatchQuestions, AP_LESSON_BANK_TOPICS } from '@/lib/competitive-utils'
import { LEGACY_TOPIC_REDIRECTS } from '@/lib/legacy-topic-redirects'
import { RETIRED_AP_TOPICS } from '@/data/retired-ap-topics'
import { getApCalculusQuestions } from '@/data/competitive-questions/ap-calculus-bank'

// The first match draw loads every AP bank (the generic AP slug map).
vi.setConfig({ testTimeout: 60_000 })

const WHOLE_BANK_REVIEW_TOPICS = new Set(['free-response-strategies-calcab', 'ap-exam-review-calcab'])
const MIN_ITEMS_PER_TOPIC = 15
// Round-2 tag-blind audit (2026-10-23): difficulty labels were re-rated blind and
// hard items authored so every bank topic keeps a real hard tier.
const MIN_HARD_PER_BANK_TOPIC = 3

const bank = getApCalculusQuestions(1_000_000)
const bankSlugs = new Set(bank.map((q) => q.topicSlug))
const slugByStem = new Map(bank.map((q) => [q.question, q.topicSlug]))

const abTopics = CALC_CATEGORIES.filter((c) => c.course === 'ap-calculus-ab').flatMap((c) =>
  c.topics.map((slug) => [c.slug, slug] as const),
)

/** The bank slugs a Topic is allowed to serve: its mapping entry, else itself. */
function expectedSlugs(topic: string): Set<string> {
  const mapped = AP_LESSON_BANK_TOPICS[topic]
  if (mapped) {
    expect(mapped.course).toBe('ap-calculus-ab')
    return new Set(mapped.topics)
  }
  return new Set([topic])
}

describe('AP Calculus AB competitive sections serve exactly their own content', () => {
  it('lists the AB layout', () => {
    expect(abTopics.length).toBeGreaterThan(30)
  })

  const sectionTopics = abTopics.filter(([, slug]) => !WHOLE_BANK_REVIEW_TOPICS.has(slug))

  it.each(sectionTopics)('%s / %s draws >= 15 items, all from its own bank slugs', async (_unit, slug) => {
    const allowed = expectedSlugs(slug)
    for (const s of allowed) expect(bankSlugs.has(s), `${slug} -> ${s} is not a bank slug`).toBe(true)

    const qs = await generateMatchQuestions(1_000, slug, [])
    expect(qs.length, `${slug} is too thin for a match`).toBeGreaterThanOrEqual(MIN_ITEMS_PER_TOPIC)
    // Not a whole-bank draw: the pool is bounded by the allowed slugs' size.
    const poolSize = bank.filter((q) => allowed.has(q.topicSlug)).length
    expect(qs.length).toBeLessThanOrEqual(poolSize)
    expect(qs.length).toBeLessThan(bank.length)

    for (const q of qs) {
      const served = slugByStem.get(String(q.question))
      expect(served, `${slug} served a stem that is not in the AB bank: ${q.question}`).toBeDefined()
      expect(allowed.has(served as string), `${slug} served an item tagged ${served}: ${q.question}`).toBe(true)
    }
  })

  it.each([...WHOLE_BANK_REVIEW_TOPICS])('%s is the mixed-review bucket and draws from the AB bank', async (slug) => {
    const qs = await generateMatchQuestions(40, slug, [])
    expect(qs.length).toBe(40)
    for (const q of qs) expect(slugByStem.has(String(q.question)), `${slug} served a foreign item`).toBe(true)
  })

  it('every bank slug is reachable from some student Topic (no orphan pools)', () => {
    const reachable = new Set<string>()
    for (const [, slug] of abTopics) {
      if (WHOLE_BANK_REVIEW_TOPICS.has(slug)) continue
      for (const s of expectedSlugs(slug)) reachable.add(s)
    }
    const orphans = [...bankSlugs].filter((s) => !reachable.has(s)).sort()
    expect(orphans).toEqual([])
  })

  it('the legacy duplicate slugs are gone and the IVT split is in place', () => {
    expect(bankSlugs.has('definite-integrals')).toBe(false)
    expect(bankSlugs.has('u-substitution')).toBe(false)
    expect(bank.filter((q) => q.topicSlug === 'intermediate-value-theorem').length).toBeGreaterThanOrEqual(10)
    // The Unit 5 theorem Topic must not pull the plain continuity items.
    const theoremSlugs = expectedSlugs('theorem-applications-calcab')
    expect(theoremSlugs.has('continuity-introduction')).toBe(false)
    expect(theoremSlugs.has('intermediate-value-theorem')).toBe(true)
    // ...while the Unit 1 continuity Topic still includes the IVT.
    expect(expectedSlugs('continuity-introduction').has('intermediate-value-theorem')).toBe(true)
  })

  it('every AB item carries a valid difficulty and every bank topic has a hard tier', () => {
    const hard = new Map<string, number>()
    for (const q of bank) {
      expect(['easy', 'medium', 'hard'], `item ${q.id} difficulty`).toContain(q.difficulty)
      if (q.difficulty === 'hard') hard.set(q.topicSlug, (hard.get(q.topicSlug) ?? 0) + 1)
    }
    const thin = [...bankSlugs].filter((s) => (hard.get(s) ?? 0) < MIN_HARD_PER_BANK_TOPIC).sort()
    expect(thin, 'bank topics with fewer than 3 hard items').toEqual([])
  })

  // Retired AB rows 308 to a live topic; a stale link, saved match or teacher
  // assignment naming one must draw that topic's AB content, not a fallback.
  // Rows retired as off-exam (retired-ap-topics.ts) stay unmapped on purpose.
  const retiredAb = Object.entries(LEGACY_TOPIC_REDIRECTS).filter(
    ([legacy, target]) => !(legacy in RETIRED_AP_TOPICS) && abTopics.some(([, slug]) => slug === target),
  )

  it('lists the retired AB rows', () => {
    expect(retiredAb.length).toBeGreaterThan(30)
  })

  it.each(retiredAb)('retired %s draws only AB items its 308 target %s can serve', async (legacy, target) => {
    const allowed = new Set([...expectedSlugs(target), ...(bankSlugs.has(legacy) ? [legacy] : [])])
    const qs = await generateMatchQuestions(40, legacy, [])
    expect(qs.length).toBeGreaterThanOrEqual(MIN_ITEMS_PER_TOPIC)
    for (const q of qs) {
      const served = slugByStem.get(String(q.question))
      expect(served, `${legacy} served a non-AB stem: ${q.question}`).toBeDefined()
      expect(allowed.has(served as string), `${legacy} served an item tagged ${served}`).toBe(true)
    }
  })

  it('every AB bank item is well-formed', () => {
    const ids = new Set<number>()
    for (const q of bank) {
      expect(ids.has(q.id), `duplicate id ${q.id}`).toBe(false)
      ids.add(q.id)
      expect(q.options, `item ${q.id}`).toHaveLength(4)
      expect(new Set(q.options).size, `item ${q.id} has duplicate options`).toBe(4)
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThan(4)
      expect(/wait,? let me|let me recalculate|let me re-?compute|this needs fixing|i assigned/i.test(q.explanation), `item ${q.id} explanation carries an authoring note`).toBe(false)
    }
  })
})
