/// <reference types="vite/client" />
/**
 * Every lesson whose exit quiz is lesson-built must be fully yield-tagged, so
 * the quiz and the lesson agree on what is low-yield (owner request 2026-10-02).
 *
 * Per lesson: every quiz question carries a valid tier; low-yield markers are
 * balanced and never leak into the default view; no step disappears or is left
 * with fewer than two questions when low-yield content is hidden.
 */
import { describe, it, expect } from 'vitest'
import { LESSON_BUILT_EXIT_TOPICS } from '@/data/exit-quizzes/lesson-built'
import { LESSON_YIELDS, filterSectionsForYield, stripLowYield } from '@/lib/lesson-yield'

type Sec = { id: string; type?: string; content?: string; exercise?: { questions?: { yield?: string }[] } }
const partFiles = import.meta.glob('../../src/data/interactive-lessons/mcat-mcat-*-part*.ts')

async function loadParts(slug: string): Promise<Sec[][]> {
  const prefix = `../../src/data/interactive-lessons/mcat-mcat-${slug.replace(/^mcat-/, '')}-part`
  const keys = Object.keys(partFiles)
    .filter((k) => k.startsWith(prefix) && /^\d+\.ts$/.test(k.slice(prefix.length)))
    .sort((a, b) => Number(a.slice(prefix.length, -3)) - Number(b.slice(prefix.length, -3)))
  const parts: Sec[][] = []
  for (const k of keys) {
    const mod = (await partFiles[k]()) as Record<string, unknown>
    const data = Object.values(mod).find((v) => !!v && typeof v === 'object' && Array.isArray((v as { sections?: unknown }).sections)) as { sections: Sec[] }
    parts.push(data.sections)
  }
  return parts
}

describe.each([...LESSON_BUILT_EXIT_TOPICS])('%s lesson', (slug) => {
  it('is fully and validly yield-tagged', async () => {
    const parts = await loadParts(slug)
    expect(parts.length, 'lesson part files').toBeGreaterThan(0)
    for (const secs of parts) {
      for (const s of secs) {
        for (const q of s.exercise?.questions ?? []) expect(LESSON_YIELDS, `${s.id} question tier`).toContain(q.yield)
        const c = s.content ?? ''
        const open = (c.match(/^[ \t]*<!--\s*yield:low\s*-->[ \t]*$/gm) ?? []).length
        const close = (c.match(/^[ \t]*<!--\s*\/yield\s*-->[ \t]*$/gm) ?? []).length
        expect(open, `${s.id} markers`).toBe(close)
        expect(stripLowYield(c), `${s.id} default view`).not.toMatch(/<!--\s*\/?yield/)
      }
      const shown = filterSectionsForYield(secs, false)
      expect(shown.length, 'steps in the default view').toBe(secs.length)
      for (const s of shown) {
        const n = s.exercise?.questions?.length
        if (typeof n === 'number') expect(n, `${s.id} visible questions`).toBeGreaterThanOrEqual(2)
      }
    }
  })
})
