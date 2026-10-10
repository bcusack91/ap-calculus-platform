/**
 * The shared SAT form build: the runner (SATFullTest) and the server grader
 * must serve / rebuild the IDENTICAL question set for any test number,
 * format and pair of Module 2 routes.
 */
import { describe, it, expect, vi } from 'vitest'
import {
  buildSatForm,
  routedModule2,
  type SATFullTest,
  type SATTestSection,
} from '@/data/sat-practice/test-generator'

const ids = (s: SATTestSection) => s.questions.map((q) => q.id)

describe('buildSatForm / routedModule2', { timeout: 180_000 }, () => {
  it('serves the unrouted form when no route is given, and mini tests never route', async () => {
    const full = await buildSatForm(2, 'full')
    expect(full.sections.map((s) => s.id)).toEqual(['rw-1', 'rw-2', 'math-1', 'math-2'])
    expect(full.sections.every((s) => s.tier === undefined)).toBe(true)
    const mini = await buildSatForm(2, 'mini', 'harder', 'harder')
    expect(mini.format).toBe('mini')
    expect(mini.sections.map((s) => s.id)).toEqual(['rw-1', 'math-1'])
    expect(mini).toBe(await buildSatForm(2, 'mini'))
  })

  it('routes Module 2 only: Module 1s are untouched, routed Module 2s differ from the pre-built ones', async () => {
    const base = await buildSatForm(2, 'full')
    const routed = await buildSatForm(2, 'full', 'harder', 'easier')
    expect(ids(routed.sections[0])).toEqual(ids(base.sections[0]))
    expect(ids(routed.sections[2])).toEqual(ids(base.sections[2]))
    expect(routed.sections[1].tier).toBe('hard')
    expect(routed.sections[3].tier).toBe('easy')
    expect(ids(routed.sections[1])).not.toEqual(ids(base.sections[1]))
    expect(ids(routed.sections[3])).not.toEqual(ids(base.sections[3]))
    expect(routed.sections[1].questions).toHaveLength(27)
    expect(routed.sections[3].questions).toHaveLength(22)
  })

  it('client and server build the identical Module 2 whatever the runner has swapped in', async () => {
    // The runner: starts from the unrouted form, swaps in the routed R&W
    // Module 2 first, then routes Math from that already-modified test.
    const start = await buildSatForm(3, 'full')
    let client: SATFullTest = { ...start, sections: [...start.sections] }
    client.sections[1] = await routedModule2(client, 1, 'easier')
    client = { ...client, sections: [...client.sections] }
    client.sections[3] = await routedModule2(client, 3, 'harder')

    // The server: rebuilds the path from scratch.
    const server = await buildSatForm(3, 'full', 'easier', 'harder')
    expect(client.sections.map(ids)).toEqual(server.sections.map(ids))
    expect(client.sections.map((s) => s.questions.map((q) => `${q.options.join('|')}#${q.correctIndex}`))).toEqual(
      server.sections.map((s) => s.questions.map((q) => `${q.options.join('|')}#${q.correctIndex}`)),
    )
  })

  it('is deterministic across fresh module instances (no cache involved)', async () => {
    const first = await buildSatForm(4, 'full', 'harder', 'harder')
    vi.resetModules()
    const fresh = await import('@/data/sat-practice/test-generator')
    const again = await fresh.buildSatForm(4, 'full', 'harder', 'harder')
    expect(again).not.toBe(first)
    expect(again.sections.map(ids)).toEqual(first.sections.map(ids))
    // Grid-in keys too (they are regenerated from a seed).
    const keys = (t: SATFullTest) => t.sections.flatMap((s) => s.questions.filter((q) => q.gridIn).map((q) => `${q.question}=${q.gridIn!.correctAnswer}`))
    expect(keys(again)).toEqual(keys(first))
  })

  it('a routed Module 2 never repeats a question or passage from the rest of the test', async () => {
    const form = await buildSatForm(1, 'full', 'harder', 'harder')
    const allIds = form.sections.flatMap(ids)
    expect(new Set(allIds).size).toBe(allIds.length)
    const passagesBy = form.sections.map((s) => new Set(s.questions.flatMap((q) => (q.passage ? [q.passage.id] : []))))
    for (const p of passagesBy[1]) expect(passagesBy[0].has(p)).toBe(false)
  })
})
