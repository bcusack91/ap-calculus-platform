import { describe, it, expect } from 'vitest'
import { spawnSync } from 'child_process'

/**
 * Guard for the content rendering gate (scripts/audit-changed-content.ts).
 *
 * The 2026-08 site-wide audit removed 620+ garbled/broken math sites that had
 * accumulated because nothing checked content at merge time. This test pins
 * the gate's behavior in BOTH directions — a gate that has never been seen
 * failing is not a gate.
 */
function runGate(fixture: string) {
  return spawnSync('npx', ['tsx', 'scripts/audit-changed-content.ts', '--files', fixture], {
    encoding: 'utf8',
    timeout: 120_000,
  })
}

describe('content rendering gate', () => {
  it('fails on planted rendering bugs, naming each error class', () => {
    const r = runGate('tests/fixtures/rendering-probe-bad.ts')
    expect(r.status).toBe(1)
    const out = (r.stdout ?? '') + (r.stderr ?? '')
    expect(out).toContain('GARBLE')
    expect(out).toContain('KATEX')
    expect(out).toContain('RAWTEX')
  })

  it('passes clean content', () => {
    const r = runGate('tests/fixtures/rendering-probe-clean.ts')
    expect(r.status).toBe(0)
    expect(r.stdout).toContain('rendering-clean')
  })
})
