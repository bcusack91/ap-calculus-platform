/**
 * Build src/data/sat-practice/form-v2-exclusions.ts (SAT_FORM_V2_EXCLUDED)
 * from the SAT form v2 classifier verdicts.
 *
 *   npx tsx scripts/build-sat-v2-exclusions.ts              # write the TS file
 *   npx tsx scripts/build-sat-v2-exclusions.ts --dry-run    # report only
 *   npx tsx scripts/build-sat-v2-exclusions.ts --dir <verdicts dir> --out <ts file>
 *
 * Input: every `*.verdicts.json` in the verdicts dir (default: the pipeline's
 * sat-v2 folder), each shaped
 *   { "<id>": { "keep": true } | { "keep": false, "reason": "<code>", "note": "…" } }
 * An id is excluded when any file says keep:false (conflicts are reported).
 * Every excluded id must be a real pool item or passage question
 * (satFormCandidateIds); unknown ids abort unless --allow-unknown, which
 * drops them.
 *
 * After writing, run `npx tsx scripts/sat-v2-quota-check.ts` and the vitest
 * suite (tests/lib/sat-form-v2.test.ts) to confirm every v2 form still fills.
 * Once v2 attempts exist in production the list is FROZEN: a change would
 * alter forms students already took. Ship a new form version instead.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import os from 'os'
import path from 'path'
import { satFormCandidateIds } from '../src/data/sat-practice/test-generator'
import { SAT_PASSAGES } from '../src/data/sat-passages'

const REPO = path.resolve(__dirname, '..')
const DEFAULT_DIR = path.join(
  os.homedir(),
  '.claude/projects/-Users-brendancusack-Projects-AP-Calculus-Website---Ad-Revenue-Based/mcat-fl-pipeline/sat-v2',
)
const DEFAULT_OUT = path.join(REPO, 'src/data/sat-practice/form-v2-exclusions.ts')

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name)
  return i >= 0 ? process.argv[i + 1] : undefined
}

interface Verdict {
  keep: boolean
  reason?: string
  note?: string
}

const oneLine = (s: string | undefined) => (s ?? '').replace(/\s+/g, ' ').trim()

async function main() {
  const dir = path.resolve(arg('--dir') ?? DEFAULT_DIR)
  const out = path.resolve(arg('--out') ?? DEFAULT_OUT)
  const dryRun = process.argv.includes('--dry-run')
  const allowUnknown = process.argv.includes('--allow-unknown')

  if (!existsSync(dir)) throw new Error(`No verdicts dir: ${dir}`)
  const files = readdirSync(dir).filter((f) => f.endsWith('.verdicts.json')).sort()
  if (!files.length) throw new Error(`No *.verdicts.json files in ${dir}`)

  const excluded = new Map<string, { reason: string; note: string; file: string }>()
  const kept = new Set<string>()
  const conflicts: string[] = []
  let malformed = 0
  for (const file of files) {
    const data = JSON.parse(readFileSync(path.join(dir, file), 'utf8')) as Record<string, Verdict>
    for (const [id, v] of Object.entries(data)) {
      if (!v || typeof v.keep !== 'boolean') {
        malformed++
        console.warn(`  ${file}: ${id} has no boolean keep, skipped`)
        continue
      }
      if (v.keep) {
        if (excluded.has(id)) conflicts.push(`${id}: excluded in ${excluded.get(id)!.file}, kept in ${file}`)
        kept.add(id)
        continue
      }
      if (kept.has(id) && !excluded.has(id)) conflicts.push(`${id}: kept elsewhere, excluded in ${file}`)
      if (!excluded.has(id)) excluded.set(id, { reason: oneLine(v.reason) || 'unspecified', note: oneLine(v.note), file })
    }
  }

  const candidates = await satFormCandidateIds()
  const unknown = [...excluded.keys()].filter((id) => !candidates.has(id))
  if (unknown.length) {
    console.log(`\n${unknown.length} excluded id(s) are not in any form pool:`)
    for (const id of unknown) console.log(`  ${id}`)
    if (!allowUnknown) throw new Error('Unknown ids (stale or mistyped). Fix the verdicts, or pass --allow-unknown to drop them.')
    for (const id of unknown) excluded.delete(id)
  }

  // Report: by reason, by pool slug (remaining candidates), whole passages dropped.
  const byReason = new Map<string, number>()
  for (const { reason } of excluded.values()) byReason.set(reason, (byReason.get(reason) ?? 0) + 1)
  const slugOf = (id: string) => (id.startsWith('sat-passage-') ? 'passages' : id.split('#')[0])
  const perSlug = new Map<string, { total: number; excluded: number }>()
  for (const id of candidates) {
    if (id.startsWith('sat-passage-')) continue
    const s = perSlug.get(slugOf(id)) ?? { total: 0, excluded: 0 }
    s.total++
    if (excluded.has(id)) s.excluded++
    perSlug.set(slugOf(id), s)
  }
  const droppedPassages = SAT_PASSAGES.filter((p) => p.questions.some((_, i) => excluded.has(`sat-passage-${p.id}-q${i}`)))

  console.log(`\nVerdict files: ${files.join(', ')}`)
  console.log(`Verdicts: ${kept.size + excluded.size} ids, ${excluded.size} excluded${malformed ? `, ${malformed} malformed` : ''}`)
  console.log('By reason: ' + [...byReason].sort((a, b) => b[1] - a[1]).map(([r, n]) => `${r} ${n}`).join(', '))
  console.log('Pool slugs (excluded / candidates, remaining share):')
  for (const [slug, s] of [...perSlug].sort((a, b) => a[0].localeCompare(b[0]))) {
    if (!s.excluded) continue
    const left = (1 - s.excluded / s.total) * 100
    console.log(`  ${slug.padEnd(42)} ${String(s.excluded).padStart(3)} / ${String(s.total).padStart(3)}  ${left.toFixed(0)}% left${left < 60 ? '  <-- thin' : ''}`)
  }
  console.log(`Passages dropped whole: ${droppedPassages.length} of ${SAT_PASSAGES.length}${droppedPassages.length ? ` (${droppedPassages.map((p) => p.id).join(', ')})` : ''}`)
  if (conflicts.length) {
    console.log(`\n${conflicts.length} conflicting verdict(s) (treated as excluded):`)
    for (const c of conflicts) console.log(`  ${c}`)
  }

  const ids = [...excluded.keys()].sort()
  const body = ids
    .map((id) => {
      const { reason, note } = excluded.get(id)!
      return `  // ${reason}${note ? `: ${note}` : ''}\n  ${JSON.stringify(id)},`
    })
    .join('\n')
  const ts = `/**
 * Items left out of SAT form VERSION 2 (full-length tests, mini tests and the
 * adaptive PSAT forms built by test-generator.ts). Owner rule: "not on the
 * exam = not in the program" — lesson concept checks (definitions, test
 * strategy), broken, two-answer, giveaway and degenerate items stay in the
 * lessons and exit quizzes but are never drawn onto a v2 form.
 *
 * Ids are pool item ids (content hashes, \`<slug>#<hash>\`) and passage question
 * ids (\`sat-passage-<passageId>-q<i>\`). Excluding any question of a passage
 * excludes the whole passage from v2 (passages are drawn whole).
 *
 * Version 1 forms ignore this list, so attempts taken on v1 still rebuild
 * exactly as served. Changing this list changes every v2 form: once v2
 * attempts exist, a change needs a new form version, not an edit here.
 *
 * GENERATED by scripts/build-sat-v2-exclusions.ts from the classifier
 * verdicts (${files.length} file(s), ${ids.length} ids). Regenerate rather than editing by hand.
 */
export const SAT_FORM_V2_EXCLUDED: ReadonlySet<string> = new Set([
${body}
])
`
  if (dryRun) {
    console.log(`\nDry run: would write ${ids.length} ids to ${path.relative(REPO, out) || out}`)
    return
  }
  writeFileSync(out, ts)
  console.log(`\nWrote ${ids.length} ids to ${path.relative(REPO, out) || out}`)
  console.log('Next: npx tsx scripts/sat-v2-quota-check.ts && npx vitest run tests/lib/sat-form-v2.test.ts')
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e)
  process.exit(1)
})
