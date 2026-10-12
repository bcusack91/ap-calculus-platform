/**
 * Build src/data/sat-practice/form-v3-exclusions.ts: the ids SAT form
 * VERSION 3 leaves out ON TOP OF the frozen v2 list (SAT_FORM_V2_EXCLUDED).
 *
 *   npx tsx scripts/build-sat-v3-exclusions.ts              # write the TS file
 *   npx tsx scripts/build-sat-v3-exclusions.ts --dry-run    # report only
 *   npx tsx scripts/build-sat-v3-exclusions.ts --pipeline <mcat-fl-pipeline dir> --out <ts file>
 *
 * Sources (both in the pipeline folder, default ~/.claude/projects/<proj>/mcat-fl-pipeline):
 *   (a) sat-v2/v2-3-conventions.verdicts.json: every conventions item whose v2
 *       verdict note starts with "lesson drill:" (kept on v2 only to keep the
 *       pools full; v3 replaces them with the SAT-format conventions bank).
 *   (b) OE-FLAGGED-ITEMS.md, section "## SAT form v2 (Oct 11)": the ids on the
 *       "Kept but weak" and "Weak R&W kept" lines (arbitrary distractors, bare
 *       stems). Shorthand "#hash" ids inherit the previous id's slug.
 *
 * Every id must be a real form candidate (satFormCandidateIds); unknown ids
 * abort. Ids already on the v2 list are reported and skipped (v3 = v2 ∪ these).
 * Once v3 attempts exist in production this list is FROZEN like v2's: a
 * change would alter forms students already took. Ship a v4 instead.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import os from 'os'
import path from 'path'
import { satFormCandidateIds } from '../src/data/sat-practice/test-generator'
import { SAT_FORM_V2_EXCLUDED } from '../src/data/sat-practice/form-v2-exclusions'

const REPO = path.resolve(__dirname, '..')
const DEFAULT_PIPELINE = path.join(
  os.homedir(),
  '.claude/projects/-Users-brendancusack-Projects-AP-Calculus-Website---Ad-Revenue-Based/mcat-fl-pipeline',
)
const DEFAULT_OUT = path.join(REPO, 'src/data/sat-practice/form-v3-exclusions.ts')

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name)
  return i >= 0 ? process.argv[i + 1] : undefined
}

const oneLine = (s: string | undefined) => (s ?? '').replace(/\s+/g, ' ').trim()

interface Entry {
  reason: 'lesson-drill' | 'weak-distractors' | 'weak-rw'
  note: string
}

/** (a) "lesson drill:" conventions items from the v2 classifier verdicts. */
function lessonDrills(pipeline: string): Map<string, Entry> {
  const file = path.join(pipeline, 'sat-v2/v2-3-conventions.verdicts.json')
  if (!existsSync(file)) throw new Error(`Missing ${file}`)
  const data = JSON.parse(readFileSync(file, 'utf8')) as Record<string, { keep?: boolean; note?: string }>
  const out = new Map<string, Entry>()
  for (const [id, v] of Object.entries(data)) {
    const note = oneLine(v?.note)
    if (note.startsWith('lesson drill:')) out.set(id, { reason: 'lesson-drill', note: note.replace(/^lesson drill:\s*/, '') })
  }
  return out
}

/**
 * (b) Weak items from OE-FLAGGED-ITEMS.md. Each id keeps the text that follows
 * it on its line (up to the next id) as its note, e.g. "(−10 unattainable)".
 */
/** Ids on the given lines of one "## …" section of OE-FLAGGED-ITEMS.md. */
function flaggedIds(pipeline: string, header: string, lines: [RegExp, Entry['reason']][], required: boolean): Map<string, Entry> {
  const file = path.join(pipeline, 'OE-FLAGGED-ITEMS.md')
  if (!existsSync(file)) throw new Error(`Missing ${file}`)
  const md = readFileSync(file, 'utf8')
  const out = new Map<string, Entry>()
  const start = md.indexOf(header)
  if (start < 0) {
    if (required) throw new Error(`OE-FLAGGED-ITEMS.md has no "${header}" section`)
    return out
  }
  const rest = md.slice(start + 3)
  const section = rest.slice(0, rest.search(/\n## /) >= 0 ? rest.search(/\n## /) : undefined)
  for (const [re, reason] of lines) {
    const m = re.exec(section)
    if (!m) {
      if (required) throw new Error(`OE-FLAGGED-ITEMS.md: no line matching ${re}`)
      continue
    }
    const label = oneLine(/^- ([^:]+):/.exec(m[0])?.[1])
    const text = m[1]
    const idRe = /(sat-[a-z0-9-]+)?#([a-z0-9]+)/g
    const hits: { id: string; at: number; end: number }[] = []
    let slug = ''
    for (let h = idRe.exec(text); h; h = idRe.exec(text)) {
      if (h[1]) slug = h[1]
      if (!slug) throw new Error(`OE-FLAGGED-ITEMS.md: "#${h[2]}" has no slug to inherit`)
      hits.push({ id: `${slug}#${h[2]}`, at: h.index, end: h.index + h[0].length })
    }
    hits.forEach((h, i) => {
      const tail = oneLine(text.slice(h.end, hits[i + 1]?.at ?? text.length)).replace(/^[,.;]\s*|[,.;]\s*$/g, '')
      const detail = /^\(([^)]*)\)/.exec(tail)?.[1] ?? ''
      out.set(h.id, { reason, note: [label, detail].filter(Boolean).join('; ') })
    })
  }
  return out
}

/** v2-era weak items (required) plus the v3 final pass found while authoring v3 explanations. */
function weakItems(pipeline: string): Map<string, Entry> {
  const v2 = flaggedIds(pipeline, '## SAT form v2 (Oct 11)', [
    [/^- Kept but weak[^:]*:(.*)$/m, 'weak-distractors'],
    [/^- Weak R&W kept:(.*)$/m, 'weak-rw'],
  ], true)
  const v3 = flaggedIds(pipeline, '## SAT v3 final exclusion pass (Oct 12)', [
    [/^- Arbitrary distractors[^:]*:(.*)$/m, 'weak-distractors'],
    [/^- Stem gives away a step[^:]*:(.*)$/m, 'weak-rw'],
    [/^- Weak R&W \(v3 final pass[^:]*:(.*)$/m, 'weak-rw'],
  ], false)
  return new Map([...v2, ...v3])
}

/** The v3 math sweep (sat-v3sweep/sweep-*.verdicts.json): every keep:false verdict. */
function sweepItems(pipeline: string): Map<string, Entry> {
  const dir = path.join(pipeline, 'sat-v3sweep')
  const out = new Map<string, Entry>()
  if (!existsSync(dir)) return out
  for (const f of readdirSync(dir).filter((n) => /^sweep-\d+\.verdicts\.json$/.test(n)).sort()) {
    const data = JSON.parse(readFileSync(path.join(dir, f), 'utf8')) as Record<string, { keep?: boolean; reason?: string; note?: string }>
    for (const [id, v] of Object.entries(data)) {
      if (v?.keep !== false) continue
      // "trivial" one-step items stay: the real digital SAT has easy questions
      // ("What is 20% of 300?"), and removing them would make v3 harder than
      // the exam and shift the score calibration. Only defects are excluded.
      if (v.reason === 'trivial') continue
      out.set(id, { reason: v.reason === 'arbitrary-distractors' ? 'weak-distractors' : 'weak-rw', note: `math sweep (${v.reason}): ${oneLine(v.note)}` })
    }
  }
  return out
}

async function main() {
  const pipeline = path.resolve(arg('--pipeline') ?? DEFAULT_PIPELINE)
  const out = path.resolve(arg('--out') ?? DEFAULT_OUT)
  const dryRun = process.argv.includes('--dry-run')

  const added = new Map<string, Entry>()
  const alreadyV2: string[] = []
  for (const source of [lessonDrills(pipeline), weakItems(pipeline), sweepItems(pipeline)]) {
    for (const [id, e] of source) {
      if (SAT_FORM_V2_EXCLUDED.has(id)) {
        alreadyV2.push(id)
        continue
      }
      const prior = added.get(id)
      // Listed by both sources: keep the first reason, note the second.
      if (prior) prior.note = `${prior.note}; also ${e.reason}${e.note ? ` (${e.note})` : ''}`
      else added.set(id, { ...e })
    }
  }

  const candidates = await satFormCandidateIds()
  const unknown = [...added.keys()].filter((id) => !candidates.has(id))
  if (unknown.length) {
    for (const id of unknown) console.log(`  not in any form pool: ${id}`)
    throw new Error(`${unknown.length} unknown id(s): fix the sources before writing the v3 list.`)
  }

  const byReason = new Map<string, number>()
  for (const { reason } of added.values()) byReason.set(reason, (byReason.get(reason) ?? 0) + 1)
  const bySlug = new Map<string, number>()
  for (const id of added.keys()) bySlug.set(id.split('#')[0], (bySlug.get(id.split('#')[0]) ?? 0) + 1)
  console.log(`v3 adds ${added.size} id(s) to the ${SAT_FORM_V2_EXCLUDED.size} v2 exclusions (${SAT_FORM_V2_EXCLUDED.size + added.size} total)`)
  console.log('By reason: ' + [...byReason].map(([r, n]) => `${r} ${n}`).join(', '))
  console.log('By slug:   ' + [...bySlug].sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s} ${n}`).join(', '))
  if (alreadyV2.length) console.log(`Already on the v2 list (skipped): ${alreadyV2.join(', ')}`)

  const ids = [...added.keys()].sort()
  const body = ids
    .map((id) => {
      const { reason, note } = added.get(id)!
      return `  // ${reason}${note ? `: ${note}` : ''}\n  ${JSON.stringify(id)},`
    })
    .join('\n')
  const ts = `/**
 * Items SAT form VERSION 3 leaves out IN ADDITION to the frozen v2 list
 * (SAT_FORM_V2_EXCLUDED). v3 = v2 minus these, plus the SAT-format
 * conventions bank (v3-bank/) and the Craft & Structure lesson pools.
 *
 *   lesson-drill      conventions items the v2 classifier kept only to keep
 *                     the pools full (toy sentence variants, instruction-style
 *                     stems, no passage); replaced by the conventions bank.
 *   weak-distractors  math items with arbitrary distractors (no real trap).
 *   weak-rw           R&W items with a flawed or bare stem.
 *
 * Version 1 and 2 forms ignore this list, so their attempts still rebuild
 * exactly as served. Once v3 attempts exist this list is FROZEN: a change
 * needs a new form version, not an edit here.
 *
 * GENERATED by scripts/build-sat-v3-exclusions.ts from
 * mcat-fl-pipeline/sat-v2/v2-3-conventions.verdicts.json and
 * mcat-fl-pipeline/OE-FLAGGED-ITEMS.md (${ids.length} ids). Regenerate rather than editing by hand.
 */
import { SAT_FORM_V2_EXCLUDED } from './form-v2-exclusions'

/** The ids v3 adds to the v2 exclusions. */
export const SAT_FORM_V3_ADDED: ReadonlySet<string> = new Set([
${body}
])

/** Everything a v3 form skips: the v2 list plus SAT_FORM_V3_ADDED. */
export const SAT_FORM_V3_EXCLUDED: ReadonlySet<string> = new Set([...SAT_FORM_V2_EXCLUDED, ...SAT_FORM_V3_ADDED])
`
  if (dryRun) {
    console.log(`\nDry run: would write ${ids.length} ids to ${path.relative(REPO, out) || out}`)
    return
  }
  writeFileSync(out, ts)
  console.log(`\nWrote ${ids.length} ids to ${path.relative(REPO, out) || out}`)
  console.log('Next: npx tsx scripts/sat-v2-quota-check.ts --versions 3 && npx vitest run tests/lib/sat-form-v3.test.ts')
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e)
  process.exit(1)
})
