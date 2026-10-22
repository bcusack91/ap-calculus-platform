/**
 * Validate an AP diagnostic v2 bank (src/data/ap-diagnostic-v2/<course>/).
 *
 *   npx tsx scripts/check-ap-diagnostic-v2.ts [course ...]
 *       Shape, ids, topic slugs (production topics), stimulus-set integrity,
 *       SVG safety, format tells, length balance, disjointness from the exit
 *       pool and the v1 forms, per-unit counts against the switch minimum and
 *       the authoring target, and a 15-sitting no-repeat simulation.
 *       Courses: ap-chemistry ap-biology ap-physics-1 ap-calculus-ab ap-calculus-bc (default: all).
 *       ap-calculus-bc is the AB bank plus BC-only items: its topics are the BC
 *       and AB production topics, and it must be disjoint from both exit pools
 *       and both v1 diagnostics.
 *       Exit code 1 if any error.
 *
 *   npx tsx scripts/check-ap-diagnostic-v2.ts --export-blind <course> <dir>
 *       Keyless, option-shuffled export for an independent blind solve:
 *       <dir>/blind/<course>.json (give ONLY this to the solver) and the key
 *       in a separate folder, <dir>/key/<course>.key.json.
 *
 *   npx tsx scripts/check-ap-diagnostic-v2.ts --score-blind <course> <dir>
 *       Compares <dir>/blind/<course>.answers.json
 *       ({"answers":[{"id","answer","flag"?}]}) with the key.
 *
 * Pure data: imports no prisma and touches no database.
 */
import fs from 'fs'
import path from 'path'
import { AP_DIAG_V2_BLUEPRINTS, AP_DIAG_V2_COURSES, isApDiagV2Course, unitQuotas } from '../src/lib/ap-diagnostic-v2/blueprints'
import { AP_DIAG_V2_BANKS } from '../src/lib/ap-diagnostic-v2/banks'
import { AP_DIAG_V2_LIVE, AP_DIAG_V2_SWITCH_RULES, bankReadiness, unitRequirements } from '../src/lib/ap-diagnostic-v2/readiness'
import { generateApDiagnosticV2, seenKeysForServed } from '../src/lib/ap-diagnostic-v2/generator'
import { normalizeStem, validateBank } from '../src/lib/ap-diagnostic-v2/validate'
import type { ApDiagV2Course } from '../src/lib/ap-diagnostic-v2/types'
import { mulberry32 } from '../src/data/_shared/prng'
import { apChemQuestionPool } from '../src/data/exit-quizzes/ap-chemistry'
import { apBioQuestionPool } from '../src/data/exit-quizzes/ap-biology'
import { apPhysics1QuestionPool } from '../src/data/exit-quizzes/ap-physics-1'
import { calcABQuestionPool } from '../src/data/exit-quizzes/ap-calculus-ab'
import { calcBCQuestionPool } from '../src/data/exit-quizzes/ap-calculus-bc'
import * as chemV1 from '../src/data/ap-chemistry-diagnostic'
import * as bioV1 from '../src/data/ap-biology-diagnostic'
import * as phys1V1 from '../src/data/ap-physics-1-diagnostic'
import * as calcV1 from '../src/data/ap-calculus-ab-diagnostic'
import * as calcBcV1 from '../src/data/ap-calculus-bc-diagnostic'
import { coursesIn, excludedTopicsOf } from '../src/lib/course-includes'

const root = path.resolve(__dirname, '..')
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'tests/fixtures/ap-lesson-topic-slugs.json'), 'utf8')) as Record<string, string[]>

/** Production topics a course's items may carry: its own plus those of every course it includes (BC includes AB). */
function productionTopics(course: ApDiagV2Course): Set<string> {
  const excluded = new Set(excludedTopicsOf(course))
  return new Set(coursesIn(course).flatMap((c) => fixture[c] ?? []).filter((s) => !excluded.has(s)))
}

/** Stems the v2 bank must not reuse: the exit pool and every v1 form (incl. v1 inline pools). */
function forbiddenStems(course: ApDiagV2Course): Set<string> {
  const out = new Set<string>()
  const add = (qs: { question: string }[]) => qs.forEach((q) => out.add(normalizeStem(q.question)))
  const forms = (gen: (f: number) => { questions: { question: string }[] }, n: number) => {
    for (let f = 1; f <= n; f++) add(gen(f).questions)
  }
  switch (course) {
    case 'ap-chemistry':
      add(apChemQuestionPool)
      forms(chemV1.generateAPChemDiagnosticTest, chemV1.TOTAL_FORMS)
      break
    case 'ap-biology':
      add(apBioQuestionPool)
      forms(bioV1.generateAPBioDiagnosticTest, bioV1.TOTAL_FORMS)
      break
    case 'ap-physics-1':
      add(apPhysics1QuestionPool)
      add(phys1V1.AP_PHYSICS1_QUESTION_POOL)
      forms(phys1V1.generateAPPhysics1DiagnosticTest, phys1V1.TOTAL_FORMS)
      break
    case 'ap-calculus-ab':
      add(calcABQuestionPool)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the v1 form type is a literal union
      forms((f) => calcV1.generateCalcABDiagnosticTest(f as any), calcV1.TOTAL_FORMS)
      break
    case 'ap-calculus-bc':
      // The BC bank contains the AB bank, so it answers to both courses' pools and v1 forms.
      add(calcABQuestionPool)
      add(calcBCQuestionPool)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the v1 form type is a literal union
      forms((f) => calcV1.generateCalcABDiagnosticTest(f as any), calcV1.TOTAL_FORMS)
      forms(calcBcV1.generateCalcBCDiagnosticTest, calcBcV1.TOTAL_FORMS)
      break
  }
  return out
}

/** 15 back-to-back sittings carrying the seen set forward (the MCAT/SAT rule). */
function simulate(course: ApDiagV2Course, sittings = 15) {
  const bank = AP_DIAG_V2_BANKS[course]
  const seen = new Set<string>()
  const rng = mulberry32(20261016)
  const rows: { n: number; repeats: number }[] = []
  for (let s = 0; s < sittings; s++) {
    const t = generateApDiagnosticV2(bank, { seen, rng })
    const repeats = t.questions.filter((q) => seen.has(q.id)).length
    rows.push({ n: t.questions.length, repeats })
    for (const q of t.questions) for (const k of seenKeysForServed(q)) seen.add(k)
  }
  const fresh = rows.findIndex((r) => r.repeats > 0)
  return { rows, freshSittings: fresh === -1 ? sittings : fresh }
}

function check(course: ApDiagV2Course): number {
  const bp = AP_DIAG_V2_BLUEPRINTS[course]
  const bank = AP_DIAG_V2_BANKS[course]
  const report = validateBank(bank, { productionTopics: productionTopics(course), forbiddenStems: forbiddenStems(course) })
  const quotas = unitQuotas(bp)
  console.log(`\n=== ${course} (${bp.label}) — ${report.stats.items} items, ${report.stats.stimuli} stimuli (${report.stats.setItems} set items)`)
  console.log(`    blueprint: ${bp.length} q / ${bp.timeLimitMinutes} min, ${bp.setsPerSitting} sets per sitting; weights: ${bp.weightSource}`)
  console.log(`    length balance: key strictly longest ${report.stats.keyLongestPct}%, strictly shortest ${report.stats.keyShortestPct}%`)
  console.log('    unit                quota  have  min  target   easy/med/hard (need per sitting)  sets')
  for (const r of unitRequirements(bank)) {
    const u = bp.units.find((x) => x.id === r.unit)!
    const st = report.stats.byUnit[r.unit]
    const flag = r.have >= r.minimum ? ' ' : '!'
    console.log(
      `  ${flag} ${`${u.id} ${u.name}`.slice(0, 20).padEnd(20)} ${String(quotas[u.id]).padStart(4)} ${String(r.have).padStart(5)} ${String(r.minimum).padStart(4)} ${String(r.target).padStart(6)}   ` +
        `${st.easy}/${st.medium}/${st.hard} (${r.byDifficulty.easy.need}/${r.byDifficulty.medium.need}/${r.byDifficulty.hard.need})`.padEnd(34) +
        `${st.sets}`,
    )
  }
  const ready = bankReadiness(bank)
  console.log(`    switch minimum (${AP_DIAG_V2_SWITCH_RULES.minItems}+ items, ${AP_DIAG_V2_SWITCH_RULES.minSittingsPerUnit} sittings per unit): ${ready.ready ? 'MET' : `not met (${ready.problems.length} gaps)`}; live flag: ${AP_DIAG_V2_LIVE[course]}`)
  if (AP_DIAG_V2_LIVE[course] && !ready.ready) report.errors.push('course is flagged live but the bank is below the switch minimum')
  const sim = simulate(course)
  console.log(`    15-sitting simulation: sittings ${sim.rows.map((r) => r.n).join(',')}; repeats ${sim.rows.map((r) => r.repeats).join(',')}; fully fresh sittings: ${sim.freshSittings}`)
  for (const w of report.warnings) console.log(`    WARN  ${w}`)
  for (const e of report.errors) console.log(`    ERROR ${e}`)
  console.log(`    ${report.errors.length} error(s), ${report.warnings.length} warning(s)`)
  return report.errors.length
}

function hash(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
function shuffled<T>(arr: T[], seed: string): T[] {
  const a = [...arr]
  let h = hash(seed)
  for (let i = a.length - 1; i > 0; i--) {
    h = (Math.imul(h, 1103515245) + 12345) >>> 0
    const j = h % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * The items a blind solve covers: the course's own items. A bank that includes
 * another course's bank (BC includes AB) leaves those items out; they were
 * blind-solved with their own course.
 */
function ownBank(course: ApDiagV2Course) {
  const bank = AP_DIAG_V2_BANKS[course]
  const inherited = new Set((AP_DIAG_V2_BLUEPRINTS[course].includes ?? []).flatMap((c) => AP_DIAG_V2_BANKS[c].items.map((i) => i.id)))
  const inheritedStimuli = new Set((AP_DIAG_V2_BLUEPRINTS[course].includes ?? []).flatMap((c) => AP_DIAG_V2_BANKS[c].stimuli.map((s) => s.id)))
  return { ...bank, items: bank.items.filter((i) => !inherited.has(i.id)), stimuli: bank.stimuli.filter((s) => !inheritedStimuli.has(s.id)) }
}

function exportBlind(course: ApDiagV2Course, dir: string) {
  const bank = ownBank(course)
  const blindDir = path.join(dir, 'blind')
  const keyDir = path.join(dir, 'key')
  fs.mkdirSync(blindDir, { recursive: true })
  fs.mkdirSync(keyDir, { recursive: true })
  const stimuli = bank.stimuli.map((s) => ({ id: s.id, title: s.title, kind: s.kind, content: s.content, dataTable: s.dataTable ?? null, chart: s.chart ?? null, svg: s.svg ?? null }))
  const items = bank.items.map((i) => ({ id: i.id, stimulusId: i.stimulusId ?? null, unit: i.unit, stem: i.stem, options: shuffled(i.options, i.id) }))
  const key = bank.items.map((i) => ({ id: i.id, key: i.options[i.correctIndex], topicSlug: i.topicSlug, difficulty: i.difficulty }))
  fs.writeFileSync(path.join(blindDir, `${course}.json`), JSON.stringify({ course, stimuli, items }, null, 2))
  fs.writeFileSync(path.join(keyDir, `${course}.key.json`), JSON.stringify(key, null, 2))
  console.log(`wrote ${items.length} items: ${path.join(blindDir, `${course}.json`)} (solver input) and ${path.join(keyDir, `${course}.key.json`)} (keep away from the solver)`)
}

function scoreBlind(course: ApDiagV2Course, dir: string): number {
  const key = JSON.parse(fs.readFileSync(path.join(dir, 'key', `${course}.key.json`), 'utf8')) as { id: string; key: string; topicSlug: string }[]
  const ans = JSON.parse(fs.readFileSync(path.join(dir, 'blind', `${course}.answers.json`), 'utf8')) as { answers: { id: string; answer: string; flag?: string }[] }
  const byId = new Map(ans.answers.map((a) => [a.id, a]))
  const bad = key.filter((k) => byId.get(k.id)?.answer !== k.key)
  console.log(`${course}: agree ${key.length - bad.length}/${key.length}`)
  for (const k of bad) console.log(`  DISAGREE ${k.id} ${k.topicSlug} | KEY: ${k.key.slice(0, 90)} | SOLVER: ${(byId.get(k.id)?.answer ?? '(none)').slice(0, 90)}`)
  for (const a of ans.answers) if (a.flag) console.log(`  FLAG ${a.id} ${a.flag.slice(0, 200)}`)
  return bad.length
}

function main() {
  const args = process.argv.slice(2)
  const mode = args[0]
  if (mode === '--export-blind' || mode === '--score-blind') {
    const [, course, dir] = args
    if (!course || !isApDiagV2Course(course) || !dir) {
      console.error(`usage: ${mode} <${AP_DIAG_V2_COURSES.join('|')}> <dir>`)
      process.exit(2)
    }
    if (mode === '--export-blind') exportBlind(course, path.resolve(dir))
    else process.exit(scoreBlind(course, path.resolve(dir)) > 0 ? 1 : 0)
    return
  }
  const courses = args.length ? args : AP_DIAG_V2_COURSES
  let errors = 0
  for (const c of courses) {
    if (!isApDiagV2Course(c)) {
      console.error(`unknown course ${c}; expected one of ${AP_DIAG_V2_COURSES.join(', ')}`)
      process.exit(2)
    }
    errors += check(c)
  }
  console.log(`\n${errors === 0 ? 'OK' : `FAILED: ${errors} error(s)`}`)
  process.exit(errors === 0 ? 0 : 1)
}

main()
