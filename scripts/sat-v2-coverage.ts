/**
 * Per-option explanation coverage for SAT form v2: every multiple-choice item
 * on the v2 SAT full-length forms (5 forms; the pre-built modules plus both
 * routed Module 2s per section) that has NO per-option explanations — neither
 * an entry in the sidecar (src/data/sat-practice/option-explanations, keyed by
 * question key) nor authored ones on the passage bank / bank item.
 *
 *   npx tsx scripts/sat-v2-coverage.ts <out.work.json>
 *   npx tsx scripts/sat-v2-coverage.ts <out.work.json> --include-mini-psat
 *
 * Writes the authoring work-file shape used by the sat-oe pipeline
 * ({ passages: { <id>: { title, text } }, items: [{ key, id, passageId,
 * question, options, correctIndex, explanation }] }). Options are in the order
 * the form shows them; the sidecar re-aligns by option text, so explanations
 * written against that order are safe. `--include-mini-psat` also scans the
 * v2 mini tests and adaptive PSAT forms (same pools, mostly the same items).
 */
import { writeFileSync } from 'fs'
import path from 'path'
import {
  buildPsatForm,
  buildSatForm,
  PRACTICE_FORM_COUNT,
  PSAT_FORM_COUNT,
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
  const outArg = process.argv.slice(2).find((a) => !a.startsWith('--'))
  if (!outArg) {
    console.error('Usage: npx tsx scripts/sat-v2-coverage.ts <out.work.json> [--include-mini-psat]')
    process.exit(2)
  }
  const forms: SATFullTest[] = []
  for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
    // Same route on both sections: together the three builds hold every module.
    for (const r of ROUTES) forms.push(await buildSatForm(n, 'full', r, r))
  }
  if (process.argv.includes('--include-mini-psat')) {
    for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) forms.push(await buildSatForm(n, 'mini'))
    for (let n = 1; n <= PSAT_FORM_COUNT; n++) for (const r of ROUTES) forms.push(await buildPsatForm(n, r, r))
  }
  if (forms.some((f) => f.formVersion !== 2)) throw new Error('Expected v2 forms (CURRENT_SAT_FORM_VERSION changed?)')

  const seen = new Set<string>()
  const items: WorkItem[] = []
  const passages: Record<string, { title: string; text: string }> = {}
  let mc = 0
  let sidecar = 0
  let inline = 0
  const bySlug = new Map<string, number>()
  for (const f of forms) {
    for (const q of f.sections.flatMap((s) => s.questions) as SATTestQuestion[]) {
      if (q.gridIn || !q.options.length) continue
      const passageId = q.passage?.id ?? null
      const key = questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex, passageId })
      if (seen.has(key)) continue
      seen.add(key)
      mc++
      if (satOptionExplanationsFor(key, q.options)) {
        sidecar++
        continue
      }
      if (satOptionExplanations(q)) {
        inline++
        continue
      }
      items.push({ key, id: q.id, passageId, question: q.question, options: [...q.options], correctIndex: q.correctIndex, explanation: q.explanation })
      if (q.passage) passages[q.passage.id] = { title: q.passage.title, text: q.passage.text }
      const slug = q.passage ? 'passages' : q.sourceSlug
      bySlug.set(slug, (bySlug.get(slug) ?? 0) + 1)
    }
  }

  const out = path.resolve(outArg)
  writeFileSync(out, JSON.stringify({ passages, items }, null, 1) + '\n')
  console.log(`${forms.length} v2 form builds, ${mc} distinct multiple-choice items`)
  console.log(`  covered: ${sidecar} by the sidecar, ${inline} by authored bank explanations`)
  console.log(`  missing: ${items.length} (${Object.keys(passages).length} passages) -> ${out}`)
  for (const [slug, n] of [...bySlug].sort((a, b) => b[1] - a[1])) console.log(`    ${slug.padEnd(42)} ${n}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
