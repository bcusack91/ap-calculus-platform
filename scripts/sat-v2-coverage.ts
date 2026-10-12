/**
 * Per-option explanation coverage for an SAT form version (default: the
 * current one, v3): every multiple-choice item on the SAT full-length forms
 * (5 forms; the pre-built modules plus both routed Module 2s per section) that
 * has NO per-option explanations — neither an entry in the sidecar
 * (src/data/sat-practice/option-explanations, keyed by question key) nor
 * authored ones on the passage bank / bank item (the v3 conventions bank
 * carries its own).
 *
 *   npx tsx scripts/sat-v2-coverage.ts <out.work.json>
 *   npx tsx scripts/sat-v2-coverage.ts <out.work.json> --include-mini-psat
 *   npx tsx scripts/sat-v2-coverage.ts <out.work.json> --version 2
 *
 * Writes the authoring work-file shape used by the sat-oe pipeline
 * ({ passages: { <id>: { title, text } }, items: [{ key, id, passageId,
 * question, options, correctIndex, explanation }] }). Options are in the order
 * the form shows them; the sidecar re-aligns by option text, so explanations
 * written against that order are safe. `--include-mini-psat` also scans the
 * mini tests and adaptive PSAT forms (same pools, mostly the same items); the
 * summary splits what is missing on the full-lengths from what is missing
 * only on minis/PSAT (full-lengths come first in the work file).
 */
import { writeFileSync } from 'fs'
import path from 'path'
import {
  buildPsatForm,
  buildSatForm,
  PRACTICE_FORM_COUNT,
  PSAT_FORM_COUNT,
  CURRENT_SAT_FORM_VERSION,
  satFormVersion,
  type SATFullTest,
  type SATTestQuestion,
} from '../src/data/sat-practice/test-generator'
import { satOptionExplanationsFor } from '../src/data/sat-practice/option-explanations'
import { satOptionExplanations } from '../src/lib/question-sources/sat'
import { questionKey } from '../src/lib/question-key'

const ROUTES = [null, 'harder', 'easier'] as const

interface WorkItem {
  key: string
  id: string
  passageId: string | null
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

async function main() {
  const args = process.argv.slice(2)
  const vi = args.indexOf('--version')
  const outArg = args.find((a, i) => !a.startsWith('--') && (vi < 0 || i !== vi + 1))
  if (!outArg) {
    console.error('Usage: npx tsx scripts/sat-v2-coverage.ts <out.work.json> [--include-mini-psat] [--version N]')
    process.exit(2)
  }
  const version = vi >= 0 ? satFormVersion(Number(args[vi + 1])) : CURRENT_SAT_FORM_VERSION
  if (version === 1) throw new Error('Coverage is for v2+ forms')
  const forms: { form: SATFullTest; scope: 'full' | 'mini-psat' }[] = []
  for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
    // Same route on both sections: together the three builds hold every module.
    for (const r of ROUTES) forms.push({ form: await buildSatForm(n, 'full', r, r, version), scope: 'full' })
  }
  if (args.includes('--include-mini-psat')) {
    for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) forms.push({ form: await buildSatForm(n, 'mini', null, null, version), scope: 'mini-psat' })
    for (let n = 1; n <= PSAT_FORM_COUNT; n++) for (const r of ROUTES) forms.push({ form: await buildPsatForm(n, r, r, version), scope: 'mini-psat' })
  }
  if (forms.some((f) => f.form.formVersion !== version)) throw new Error(`Expected v${version} forms`)

  const seen = new Set<string>()
  const items: WorkItem[] = []
  const passages: Record<string, { title: string; text: string }> = {}
  const tally = {
    full: { mc: 0, sidecar: 0, inline: 0, missing: 0 },
    'mini-psat': { mc: 0, sidecar: 0, inline: 0, missing: 0 },
  }
  const bySlug = new Map<string, number>()
  for (const { form: f, scope } of forms) {
    const t = tally[scope]
    for (const q of f.sections.flatMap((s) => s.questions) as SATTestQuestion[]) {
      if (q.gridIn || !q.options.length) continue
      const passageId = q.passage?.id ?? null
      const key = questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex, passageId })
      if (seen.has(key)) continue
      seen.add(key)
      t.mc++
      if (satOptionExplanationsFor(key, q.options)) {
        t.sidecar++
        continue
      }
      if (satOptionExplanations(q)) {
        t.inline++
        continue
      }
      t.missing++
      items.push({ key, id: q.id, passageId, question: q.question, options: [...q.options], correctIndex: q.correctIndex, explanation: q.explanation })
      if (q.passage) passages[q.passage.id] = { title: q.passage.title, text: q.passage.text }
      const slug = q.passage ? 'passages' : q.sourceSlug
      bySlug.set(slug, (bySlug.get(slug) ?? 0) + 1)
    }
  }

  const out = path.resolve(outArg)
  writeFileSync(out, JSON.stringify({ passages, items }, null, 1) + '\n')
  console.log(`${forms.length} v${version} form builds`)
  for (const [scope, t] of Object.entries(tally)) {
    if (!t.mc) continue
    const label = scope === 'full' ? 'full-lengths' : 'mini/PSAT only (items not already on a full-length)'
    console.log(`  ${label}: ${t.mc} distinct MC items; covered ${t.sidecar} by the sidecar, ${t.inline} by authored bank explanations; missing ${t.missing}`)
  }
  console.log(`  missing in total: ${items.length} (${Object.keys(passages).length} passages) -> ${out}`)
  for (const [slug, n] of [...bySlug].sort((a, b) => b[1] - a[1])) console.log(`    ${slug.padEnd(42)} ${n}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
