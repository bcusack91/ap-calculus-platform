/**
 * Quota check for the SAT form versions.
 *
 *   npx tsx scripts/sat-v2-quota-check.ts                  # the current version (3)
 *   npx tsx scripts/sat-v2-quota-check.ts --versions 2,3   # chosen versions
 *   npx tsx scripts/sat-v2-quota-check.ts --both           # every version (1, 2, 3)
 *
 * For every SAT full-length form (5 forms x 9 route pairs), mini test and
 * PSAT form (3 x 9): module lengths, R&W / Math domain quotas, 6 grid-ins
 * per Math module, at least one passage set per R&W module, no repeated stem
 * within a form, no id the form's version excludes, and no routed Module 2
 * that silently fell back to the pre-built module (a tier too thin to fill).
 * `borrowed` = items drawn from another form's slice (cross-form overlap);
 * on v3, `bank` = conventions-bank items and `c&s` = items from the new Craft
 * and Structure lesson pools. Run it after regenerating an exclusion list.
 * Exits 1 on any issue. Reads no database.
 */
import {
  buildSatForm,
  buildPsatForm,
  practiceFormOf,
  psatFormOf,
  PRACTICE_FORM_COUNT,
  PSAT_FORM_COUNT,
  satFormExclusions,
  CURRENT_SAT_FORM_VERSION,
  SAT_FORM_VERSIONS,
  type SATFullTest,
  type SatFormVersion,
} from '../src/data/sat-practice/test-generator'
import { SAT_FORM_V2_EXCLUDED } from '../src/data/sat-practice/form-v2-exclusions'
import { SAT_FORM_V3_EXCLUDED } from '../src/data/sat-practice/form-v3-exclusions'
import { SAT_V3_CONVENTIONS } from '../src/data/sat-practice/v3-bank/conventions'

const BANK_IDS = new Set(SAT_V3_CONVENTIONS.map((b) => b.id))
const NEW_CS_SLUGS = new Set(['sat-text-structure-purpose', 'sat-cross-text-connections'])

const ROUTES = [null, 'harder', 'easier'] as const
const RW_QUOTA: Record<string, number> = { 'craft-structure': 8, 'information-ideas': 7, conventions: 7, expression: 5 }
const MATH_QUOTA: Record<string, number> = { algebra: 8, advanced: 8, 'problem-solving': 3, geometry: 3 }
const stem = (q: { question: string; passage?: { id: string } }) =>
  (q.passage ? `${q.passage.id}|` : '') + q.question.replace(/\s+/g, ' ').trim().toLowerCase()

let failures = 0

/** Passages with any excluded question on a version (they are drawn whole, so none may appear). */
const passageCache = new Map<SatFormVersion, Set<string>>()
function excludedPassages(version: SatFormVersion): Set<string> {
  let hit = passageCache.get(version)
  if (!hit) {
    const ids = [...(satFormExclusions(version) ?? [])]
    hit = new Set(ids.map((id) => /^sat-passage-(.+)-q\d+$/.exec(id)?.[1]).filter((x): x is string => !!x))
    passageCache.set(version, hit)
  }
  return hit
}

function check(f: SATFullTest, label: string, base: SATFullTest | null): void {
  const psat = f.exam === 'psat'
  const formOf = psat ? psatFormOf : practiceFormOf
  const ownForm = (f.testNumber - 1) % (psat ? PSAT_FORM_COUNT : PRACTICE_FORM_COUNT)
  const issues: string[] = []
  let borrowed = 0
  let bank = 0
  let cs = 0
  const excluded = satFormExclusions(f.formVersion ?? 1)
  f.sections.forEach((s, i) => {
    const counts: Record<string, number> = {}
    for (const q of s.questions) counts[q.domain ?? '?'] = (counts[q.domain ?? '?'] ?? 0) + 1
    if (s.questions.length !== s.questionCount) issues.push(`${s.id} has ${s.questions.length}/${s.questionCount}`)
    const quota = s.section === 'math' ? MATH_QUOTA : RW_QUOTA
    for (const [d, n] of Object.entries(quota)) if ((counts[d] ?? 0) !== n) issues.push(`${s.id} ${d} ${counts[d] ?? 0}/${n}`)
    if (s.section === 'math') {
      const grid = s.questions.filter((q) => q.gridIn).length
      if (grid !== 6) issues.push(`${s.id} grid-ins ${grid}/6`)
    } else if (!s.questions.some((q) => q.passage)) {
      issues.push(`${s.id} no passage set`)
    }
    if (base && s.moduleNum === 2 && s.tier) {
      const same = base.sections[i].questions.map((q) => q.id).join() === s.questions.map((q) => q.id).join()
      if (same) issues.push(`${s.id} routed module fell back to the pre-built one (tier too thin)`)
    }
    for (const q of s.questions) {
      if (!q.gridIn && formOf(q.passage ? q.passage.id : q.id) !== ownForm) borrowed++
      if (excluded?.has(q.id)) issues.push(`excluded item ${q.id}`)
      if (q.passage && excludedPassages(f.formVersion ?? 1).has(q.passage.id)) issues.push(`excluded passage ${q.passage.id}`)
      if (BANK_IDS.has(q.id)) bank++
      if (NEW_CS_SLUGS.has(q.sourceSlug)) cs++
    }
  })
  const stems = f.sections.flatMap((s) => s.questions.map(stem))
  if (new Set(stems).size !== stems.length) issues.push('repeated stem')
  if (issues.length) failures++
  const v3 = f.formVersion === 3 ? `  bank=${String(bank).padStart(2)}  c&s=${String(cs).padStart(2)}` : ''
  console.log(`${label.padEnd(28)} borrowed=${String(borrowed).padStart(2)}${v3}  ${issues.join('; ') || 'OK'}`)
}

async function main() {
  const i = process.argv.indexOf('--versions')
  const versions: SatFormVersion[] = process.argv.includes('--both')
    ? [...SAT_FORM_VERSIONS]
    : i >= 0
      ? process.argv[i + 1].split(',').map(Number).filter((v): v is SatFormVersion => (SAT_FORM_VERSIONS as number[]).includes(v))
      : [CURRENT_SAT_FORM_VERSION]
  console.log(`SAT_FORM_V2_EXCLUDED: ${SAT_FORM_V2_EXCLUDED.size} ids; SAT_FORM_V3_EXCLUDED: ${SAT_FORM_V3_EXCLUDED.size} ids; conventions bank: ${BANK_IDS.size} items`)
  for (const v of versions) {
    console.log(`\n=== form version ${v}`)
    for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
      const base = await buildSatForm(n, 'full', null, null, v)
      for (const rw of ROUTES) {
        for (const m of ROUTES) check(await buildSatForm(n, 'full', rw, m, v), `SAT ${n} rw=${rw ?? '-'} math=${m ?? '-'}`, base)
      }
      check(await buildSatForm(n, 'mini', null, null, v), `SAT mini ${n}`, null)
    }
    for (let n = 1; n <= PSAT_FORM_COUNT; n++) {
      const base = await buildPsatForm(n, null, null, v)
      for (const rw of ROUTES) {
        for (const m of ROUTES) check(await buildPsatForm(n, rw, m, v), `PSAT ${n} rw=${rw ?? '-'} math=${m ?? '-'}`, base)
      }
    }
  }
  console.log(failures ? `\n${failures} form(s) with issues` : '\nAll forms fill every quota.')
  process.exit(failures ? 1 : 0)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
