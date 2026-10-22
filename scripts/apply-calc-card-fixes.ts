/**
 * AP Calculus AB + BC finalize (calc-final, Oct 2026): applies the four
 * flashcard fix lists the content audit produced, on top of the restructure
 * (prisma/restructure-calc.ts already retired the 43 legacy calc topics and
 * re-parented their 228 cards onto canonical topics):
 *
 *   cards-ab14.json    AB Units 1-4 (fp-keyed): deletes, text edits, a tier
 *                      change, a re-parent to lhopitals-rule
 *   cards-ab58.json    AB Units 5-8 + exam prep (fp-keyed): corrections,
 *                      deletes, hint fixes, the same re-parent; one `optional`
 *                      delete decided in OPTIONAL_DECISIONS below
 *   cards-bc.json      BC (prod-id-keyed): deletes, text and hint edits
 *   cards-legacy.json  the screen of the re-parented legacy cards (id + fp):
 *                      keep entries are only resolved, deletes/edits applied
 *
 * The lists live in ap-phase1-pipeline/calc-final/ (CALC_FINAL_DIR overrides).
 *
 * Each fix is resolved against LIVE rows across BOTH calculus courses (the
 * restructure moved cards between topics, so the list's topicSlug is a hint,
 * never a filter): by prod id when the list has one, else by fingerprint
 * (sha256(front + '\0' + back)[:12], the exam-yield fingerprint) and, when the
 * list carries the current `front`, that front must match. A fix whose card
 * cannot be found, is ambiguous (two live rows share the fingerprint), or has
 * drifted is reported as UNRESOLVED and skipped — never guessed. Fixes that
 * target the same card (cards-ab14 and cards-ab58 overlap on two cards) are
 * merged; conflicting values are a hard error.
 *
 * Supported changes: delete (with the card's FlashcardProgress rows), newFront,
 * newBack, newHint (string, or null to clear), newTopicSlug (same course only),
 * newYield (+ newWhy, recorded for the label artifact), tier-only changes.
 * An edit without newYield keeps the card's current examYield (AB tiers are
 * inherited; BC has none yet). FlashcardReviewLog has no FK to Flashcard and is
 * history — left alone, as in scripts/apply-ap-flashcard-fixes.ts.
 *
 * Safety:
 *   - Dry run unless APPLY=1.
 *   - SEED_DB=prod loads .env (dotenv override), anything else loads .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses
 *     a Neon host.
 *   - Backs up every touched Flashcard row (with topicSlug) and the
 *     FlashcardProgress rows of deleted cards to
 *     scripts/_calc-card-fixes-backup-<timestamp>.json (gitignored) first.
 *   - All writes run in one transaction; every row is re-read inside it and
 *     skipped if it changed since the plan was made.
 *   - Idempotent: after an apply, deleted cards are "gone" and edited cards
 *     are "already-applied" (their live state equals the target), so a rerun
 *     plans nothing.
 *   - PLAN_OUT=<file> also writes the resolved plan as JSON (old fp -> new fp,
 *     tier, why per card) for the yield-label patch (calc-final/CARDS-RUNBOOK.md).
 *
 * Run (repo root):
 *   npx tsx scripts/apply-calc-card-fixes.ts                     # dry run, local
 *   SEED_DB=prod npx tsx scripts/apply-calc-card-fixes.ts        # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx scripts/apply-calc-card-fixes.ts
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { PrismaClient, type ExamYield } from '@prisma/client'
import { YIELD_VALUES, fingerprint } from '../src/lib/flashcard-yield-artifact'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
const COURSES = ['ap-calculus-ab', 'ap-calculus-bc'] as const
const CALC_FINAL_DIR =
  process.env.CALC_FINAL_DIR ??
  path.join(os.homedir(), '.claude/projects/-Users-brendancusack-Projects-AP-Calculus-Website---Ad-Revenue-Based/ap-phase1-pipeline/calc-final')
const LISTS = ['cards-ab14.json', 'cards-ab58.json', 'cards-bc.json', 'cards-legacy.json'] as const

/**
 * Owner rule for `optional: true` deletes: delete only if the card is an exact
 * concept duplicate of a card KEPT ON THE SAME TOPIC, else keep. Keyed by fp.
 */
const OPTIONAL_DECISIONS: Record<string, { delete: boolean; why: string }> = {
  a71fc591de0b: {
    delete: false,
    why: 'keep: "State the Mean Value Theorem." is the only MVT statement left on applications-of-derivatives-calcab; its twin ("…including its hypotheses") is on theorem-applications-calcab, a different topic',
  },
}

// ---------------------------------------------------------------------------
// Fix lists

type RawFix = {
  id?: string
  course?: string
  fp?: string
  topicSlug?: string
  front?: string
  delete?: boolean
  optional?: boolean
  decision?: 'keep' | 'delete' | 'edit'
  newFront?: string
  newBack?: string
  newHint?: string | null
  newTopicSlug?: string
  newYield?: string
  newWhy?: string
  reason?: string
}

type Change = {
  delete: boolean
  keepOnly: boolean
  newFront?: string
  newBack?: string
  newHint?: string | null
  newTopicSlug?: string
  newYield?: ExamYield
  newWhy?: string
}

/** One card's plan: every list entry that targets it, merged. */
type Group = {
  key: string // 'id:<id>' or 'fp:<fp>'
  id?: string
  fp?: string
  front?: string
  /** From the list (cards-legacy) or implied by the list name; used only to report cards with no live row. */
  course: string
  sources: string[] // "<list>#<index>"
  reasons: string[]
  change: Change
}

const EDIT_FIELDS = ['newFront', 'newBack', 'newHint', 'newTopicSlug', 'newYield', 'newWhy'] as const

function loadGroups(): { groups: Group[]; skippedOptional: string[] } {
  const groups = new Map<string, Group>()
  const skippedOptional: string[] = []
  for (const list of LISTS) {
    const file = path.join(CALC_FINAL_DIR, list)
    if (!fs.existsSync(file)) throw new Error(`fix list not found: ${file} (set CALC_FINAL_DIR)`)
    const fixes: RawFix[] = JSON.parse(fs.readFileSync(file, 'utf8')).fixes
    if (!Array.isArray(fixes)) throw new Error(`${list}: no "fixes" array`)
    fixes.forEach((f, i) => {
      const src = `${list}#${i}`
      if (!f.id && !f.fp) throw new Error(`${src}: neither id nor fp`)
      if (f.fp && !/^[0-9a-f]{12}$/.test(f.fp)) throw new Error(`${src}: bad fp ${f.fp}`)
      if (f.newYield !== undefined && !(YIELD_VALUES as readonly string[]).includes(f.newYield)) throw new Error(`${src}: bad newYield ${f.newYield}`)
      for (const k of ['newFront', 'newBack'] as const) if (f[k] !== undefined && !f[k]!.trim()) throw new Error(`${src}: empty ${k}`)

      let del = f.delete === true || f.decision === 'delete'
      if (del && f.optional) {
        const d = f.fp ? OPTIONAL_DECISIONS[f.fp] : undefined
        if (!d) {
          skippedOptional.push(`${src} ${f.fp ?? f.id}: optional delete with no decision in OPTIONAL_DECISIONS — skipped`)
          return
        }
        if (!d.delete) {
          skippedOptional.push(`${src} ${f.fp}: optional delete → ${d.why}`)
          return
        }
      }
      const hasEdit = EDIT_FIELDS.some((k) => f[k] !== undefined)
      if (del && hasEdit) throw new Error(`${src}: both delete and edit fields`)
      const keepOnly = !del && !hasEdit
      if (keepOnly && f.decision !== 'keep') throw new Error(`${src}: entry changes nothing and is not a keep decision`)

      // Legacy entries carry both: the prod id is primary, the fp verifies.
      const key = f.id ? `id:${f.id}` : `fp:${f.fp}`
      const g: Group = groups.get(key) ?? { key, id: f.id, fp: f.fp, front: f.front, course: f.course ?? (list === 'cards-bc.json' ? 'ap-calculus-bc' : 'ap-calculus-ab'), sources: [], reasons: [], change: { delete: false, keepOnly: true } }
      if (f.fp && g.fp && f.fp !== g.fp) throw new Error(`${src}: fp ${f.fp} conflicts with ${g.fp} for ${key}`)
      if (f.front !== undefined && g.front !== undefined && f.front !== g.front) throw new Error(`${src}: front conflicts for ${key}`)
      g.fp ??= f.fp
      g.front ??= f.front
      g.sources.push(src)
      if (f.reason) g.reasons.push(f.reason)
      const c = g.change
      if (del) {
        if (!c.keepOnly && !c.delete) throw new Error(`${src}: delete conflicts with an edit of the same card`)
        c.delete = true
        c.keepOnly = false
      } else if (!keepOnly) {
        if (c.delete) throw new Error(`${src}: edit conflicts with a delete of the same card`)
        c.keepOnly = false
        for (const k of EDIT_FIELDS) {
          const v = f[k]
          if (v === undefined) continue
          const cur = c[k]
          if (cur !== undefined && cur !== v) throw new Error(`${src}: ${k} conflicts with another list for ${key}`)
          ;(c as Record<string, unknown>)[k] = v
        }
      }
      groups.set(key, g)
    })
  }
  return { groups: [...groups.values()], skippedOptional }
}

// ---------------------------------------------------------------------------

const prisma = new PrismaClient()

type Live = {
  id: string
  front: string
  back: string
  hint: string | null
  examYield: ExamYield | null
  topicId: string
  topicSlug: string
  course: string
  fp: string
  progress: number
}

type Verdict = 'delete' | 'update' | 'keep' | 'already-applied' | 'gone' | 'unresolved'

type Planned = {
  g: Group
  verdict: Verdict
  note: string
  row?: Live
  data?: { front?: string; back?: string; hint?: string | null; topicId?: string; examYield?: ExamYield }
  kinds?: string[]
  newFp?: string
}

/**
 * Resolves every plan entry against a snapshot of live rows (pure: also used
 * to simulate the rerun after an apply).
 */
function resolve(groups: Group[], live: Live[], topicBySlug: Map<string, { id: string; course: string }>): Planned[] {
  const byId = new Map(live.map((r) => [r.id, r]))
  const byFp = new Map<string, Live[]>()
  for (const r of live) byFp.set(r.fp, [...(byFp.get(r.fp) ?? []), r])

  /** Target text after the change, for already-applied detection. */
  const targetOf = (g: Group, r: { front: string; back: string }) => ({
    front: g.change.newFront ?? r.front,
    back: g.change.newBack ?? r.back,
  })

  const planned: Planned[] = []
  const claimed = new Map<string, string>() // row id -> group key
  for (const g of groups) {
    const c = g.change
    let row: Live | undefined
    let how = ''
    if (g.id && byId.has(g.id)) { row = byId.get(g.id); how = 'id' }
    if (!row && g.fp) {
      const hits = byFp.get(g.fp) ?? []
      if (hits.length > 1) { planned.push({ g, verdict: 'unresolved', note: `ambiguous: ${hits.length} live rows share fp ${g.fp} (${hits.map((h) => h.topicSlug).join(', ')})` }); continue }
      if (hits.length === 1) { row = hits[0]; how = 'fp' }
    }
    if (!row && !c.delete && !c.keepOnly && (c.newFront !== undefined || c.newBack !== undefined)) {
      // Text already rewritten? Look for the target text (needs the old text: only the front/back the fix keeps).
      // The target fp is computable when both sides are known: newFront+newBack, or the list's front + newBack.
      const tf = c.newFront ?? g.front
      if (tf !== undefined && c.newBack !== undefined) {
        const hits = byFp.get(fingerprint(tf, c.newBack)) ?? []
        if (hits.length === 1) { row = hits[0]; how = 'target-fp' }
      } else {
        // newFront only: find a unique live row whose front is the new front.
        const hits = live.filter((r) => r.front === c.newFront)
        if (hits.length === 1) { row = hits[0]; how = 'target-front' }
      }
    }
    if (!row) {
      if (c.delete) planned.push({ g, verdict: 'gone', note: 'no live row (already deleted?)' })
      else planned.push({ g, verdict: 'unresolved', note: 'no live row by id / fp / target text' })
      continue
    }

    // Verify identity. A row found by id must still carry the listed fp/front
    // unless it already shows the target text.
    if (how === 'id' || how === 'fp') {
      const fpOk = !g.fp || row.fp === g.fp
      const frontOk = g.front === undefined || row.front === g.front
      if (!fpOk || !frontOk) {
        const t = g.fp ? targetOf(g, { front: g.front ?? row.front, back: row.back }) : undefined
        const looksApplied = !c.delete && t !== undefined && (c.newFront !== undefined || c.newBack !== undefined) && row.front === t.front && (c.newBack === undefined || row.back === c.newBack)
        if (!looksApplied) {
          planned.push({ g, verdict: 'unresolved', row, note: `drifted: live ${!fpOk ? `fp ${row.fp} ≠ listed ${g.fp}` : 'front differs from the listed front'}` })
          continue
        }
      }
    }
    if (claimed.has(row.id)) throw new Error(`card ${row.id} is targeted by two plan entries (${claimed.get(row.id)} and ${g.key}); merge them in the lists`)
    claimed.set(row.id, g.key)

    if (c.keepOnly) { planned.push({ g, verdict: 'keep', row, note: `found by ${how}` }); continue }
    if (c.delete) { planned.push({ g, verdict: 'delete', row, note: `found by ${how}` }); continue }

    const data: NonNullable<Planned['data']> = {}
    const kinds: string[] = []
    if (c.newFront !== undefined && row.front !== c.newFront) { data.front = c.newFront; kinds.push('front') }
    if (c.newBack !== undefined && row.back !== c.newBack) { data.back = c.newBack; kinds.push('back') }
    if (c.newHint !== undefined && row.hint !== c.newHint) { data.hint = c.newHint; kinds.push('hint') }
    if (c.newTopicSlug !== undefined && row.topicSlug !== c.newTopicSlug) {
      const t = topicBySlug.get(c.newTopicSlug)
      if (!t) { planned.push({ g, verdict: 'unresolved', row, note: `newTopicSlug ${c.newTopicSlug} has no live topic` }); continue }
      if (t.course !== row.course) { planned.push({ g, verdict: 'unresolved', row, note: `newTopicSlug ${c.newTopicSlug} is in ${t.course}, card is in ${row.course}` }); continue }
      data.topicId = t.id
      kinds.push('topic')
    }
    if (c.newYield !== undefined && row.examYield !== c.newYield) { data.examYield = c.newYield; kinds.push('tier') }
    const newFp = fingerprint(c.newFront ?? row.front, c.newBack ?? row.back)
    if (!kinds.length) { planned.push({ g, verdict: 'already-applied', row, note: `found by ${how}`, newFp }); continue }
    planned.push({ g, verdict: 'update', row, data, kinds, newFp, note: `found by ${how}` })
  }
  return planned
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:     ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '→', host || '(DATABASE_URL not set)')
  console.log('Mode:   ', APPLY ? 'APPLY (writes)' : 'dry run')
  console.log('Lists:  ', CALC_FINAL_DIR)
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  const { groups, skippedOptional } = loadGroups()
  console.log(`Plan:    ${groups.length} cards from ${LISTS.length} lists (${groups.filter((g) => g.change.delete).length} deletes, ${groups.filter((g) => !g.change.delete && !g.change.keepOnly).length} edits, ${groups.filter((g) => g.change.keepOnly).length} keeps)`)
  for (const s of skippedOptional) console.log(`  optional: ${s}`)

  // ---- Live rows of both courses
  const topics = await prisma.topic.findMany({
    where: { category: { courseId: { in: [...COURSES] } } },
    select: { id: true, slug: true, category: { select: { courseId: true } } },
  })
  const topicBySlug = new Map(topics.map((t) => [t.slug, { id: t.id, course: t.category.courseId }]))
  const rows = await prisma.flashcard.findMany({
    where: { topic: { category: { courseId: { in: [...COURSES] } } } },
    select: {
      id: true, front: true, back: true, hint: true, examYield: true, topicId: true,
      topic: { select: { slug: true, category: { select: { courseId: true } } } },
      _count: { select: { progress: true } },
    },
  })
  const live: Live[] = rows.map((r) => ({
    id: r.id, front: r.front, back: r.back, hint: r.hint, examYield: r.examYield, topicId: r.topicId,
    topicSlug: r.topic.slug, course: r.topic.category.courseId, fp: fingerprint(r.front, r.back), progress: r._count.progress,
  }))
  console.log(`Live:    ${live.length} cards on ${topics.length} topics (${COURSES.map((c) => `${c} ${live.filter((r) => r.course === c).length}`).join(', ')})`)

  // ---- Resolve
  const planned = resolve(groups, live, topicBySlug)

  // ---- Report
  const short = (s: string | undefined, n = 58) => (s ?? '').replace(/\s+/g, ' ').slice(0, n)
  const order: Verdict[] = ['unresolved', 'delete', 'update', 'already-applied', 'gone', 'keep']
  for (const v of order) {
    const ps = planned.filter((p) => p.verdict === v)
    if (!ps.length) continue
    console.log(`\n-- ${v} (${ps.length})`)
    if (v === 'keep') { console.log('   (resolved, no change; listed in cards-legacy.json)'); continue }
    for (const p of ps) {
      const r = p.row
      const where = r ? `${r.course.replace('ap-calculus-', '').padEnd(2)} ${r.topicSlug.padEnd(42)}` : `${p.g.course.replace('ap-calculus-', '').padEnd(2)} ${'(no live row)'.padEnd(42)}`
      const extra =
        v === 'update' ? ` [${p.kinds!.join('+')}]${p.data!.topicId ? ` → ${p.g.change.newTopicSlug}` : ''}${p.data!.examYield ? ` tier ${r!.examYield ?? 'NULL'}→${p.data!.examYield}` : ''}${p.data!.front !== undefined || p.data!.back !== undefined ? ` fp ${r!.fp}→${p.newFp}` : ''}`
          : v === 'delete' ? ` progress ${r!.progress} tier ${r!.examYield ?? 'NULL'}`
          : ''
      console.log(`  ${(p.g.fp ?? p.g.id ?? '').padEnd(25)} ${where}${extra} | ${short(r?.front ?? p.g.front)}${v === 'unresolved' || v === 'gone' ? `  <${p.note}; ${p.g.sources.join(', ')}>` : ''}`)
    }
  }

  console.log('\n-- per course')
  const sum = (ps: Planned[], f: (p: Planned) => number) => ps.reduce((s, p) => s + f(p), 0)
  for (const course of COURSES) {
    const ps = planned.filter((p) => p.row?.course === course || (!p.row && p.g.course === course))
    const dels = ps.filter((p) => p.verdict === 'delete')
    const ups = ps.filter((p) => p.verdict === 'update')
    const kindCount = (k: string) => ups.filter((p) => p.kinds!.includes(k)).length
    console.log(
      `  ${course.padEnd(15)} delete ${String(dels.length).padStart(3)} (FlashcardProgress ${sum(dels, (p) => p.row!.progress)})` +
        `  update ${String(ups.length).padStart(3)} (front ${kindCount('front')}, back ${kindCount('back')}, hint ${kindCount('hint')}, topic ${kindCount('topic')}, tier ${kindCount('tier')})` +
        `  keep ${ps.filter((p) => p.verdict === 'keep').length}  already-applied ${ps.filter((p) => p.verdict === 'already-applied').length}` +
        `  gone ${ps.filter((p) => p.verdict === 'gone').length}  unresolved ${ps.filter((p) => p.verdict === 'unresolved').length}`,
    )
  }
  for (const list of LISTS) {
    const ps = planned.filter((p) => p.g.sources.some((s) => s.startsWith(list + '#')))
    const n = (v: Verdict) => ps.filter((p) => p.verdict === v).length
    console.log(`  ${list.padEnd(18)} cards ${String(ps.length).padStart(3)}: delete ${n('delete')}, update ${n('update')}, keep ${n('keep')}, already-applied ${n('already-applied')}, gone ${n('gone')}, unresolved ${n('unresolved')}`)
  }

  const dels = planned.filter((p) => p.verdict === 'delete')
  const ups = planned.filter((p) => p.verdict === 'update')
  const unresolved = planned.filter((p) => p.verdict === 'unresolved')
  console.log(`\nWould delete ${dels.length} flashcards (${sum(dels, (p) => p.row!.progress)} FlashcardProgress rows) and update ${ups.length}. Unresolved: ${unresolved.length}.`)

  // ---- Idempotency check: apply the plan to an in-memory copy and resolve again.
  const slugById = new Map([...topicBySlug].map(([slug, t]) => [t.id, slug]))
  const deletedIds = new Set(dels.map((p) => p.row!.id))
  const after: Live[] = live
    .filter((r) => !deletedIds.has(r.id))
    .map((r) => {
      const p = ups.find((u) => u.row!.id === r.id)
      if (!p) return r
      const n = { ...r, ...p.data } as Live
      n.topicSlug = slugById.get(n.topicId) ?? r.topicSlug
      n.fp = fingerprint(n.front, n.back)
      return n
    })
  const rerun = resolve(groups, after, topicBySlug)
  const rn = (v: Verdict) => rerun.filter((p) => p.verdict === v).length
  console.log(`Rerun after apply (simulated): delete ${rn('delete')}, update ${rn('update')}, unresolved ${rn('unresolved')} | already-applied ${rn('already-applied')}, gone ${rn('gone')}, keep ${rn('keep')}${rn('delete') + rn('update') + rn('unresolved') - unresolved.length === 0 ? '  → idempotent' : '  → NOT IDEMPOTENT'}`)
  for (const p of rerun.filter((x) => x.verdict === 'delete' || x.verdict === 'update')) console.log(`  rerun would still ${p.verdict}: ${p.g.key} ${p.g.sources.join(', ')}`)

  if (process.env.PLAN_OUT) {
    const plan = planned
      .filter((p) => p.row && (p.verdict === 'delete' || p.verdict === 'update' || p.verdict === 'already-applied'))
      .map((p) => ({
        course: p.row!.course,
        id: p.row!.id,
        verdict: p.verdict,
        oldFp: p.verdict === 'already-applied' ? p.g.fp ?? p.row!.fp : p.row!.fp,
        newFp: p.verdict === 'delete' ? null : p.newFp,
        topicSlug: p.row!.topicSlug,
        newTopicSlug: p.g.change.newTopicSlug ?? null,
        newYield: p.g.change.newYield ?? null,
        newWhy: p.g.change.newWhy ?? null,
        currentYield: p.row!.examYield,
        newFront: p.g.change.newFront ?? null,
        sources: p.g.sources,
      }))
    fs.writeFileSync(process.env.PLAN_OUT, JSON.stringify(plan, null, 1) + '\n')
    console.log(`Plan written: ${process.env.PLAN_OUT} (${plan.length} cards)`)
  }

  if (!APPLY) {
    console.log('\nDry run only. Re-run with APPLY=1 to write.')
    return
  }
  if (!dels.length && !ups.length) {
    console.log('\nNothing to write.')
    return
  }

  // ---- Backup
  const touched = [...dels, ...ups].map((p) => p.row!.id)
  const backupRows = await prisma.flashcard.findMany({ where: { id: { in: touched } }, include: { topic: { select: { slug: true } } } })
  const progressRows = await prisma.flashcardProgress.findMany({ where: { flashcardId: { in: dels.map((p) => p.row!.id) } } })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `_calc-card-fixes-backup-${stamp}.json`)
  fs.writeFileSync(backupPath, JSON.stringify({
    host,
    createdAt: new Date().toISOString(),
    deletes: dels.map((p) => ({ id: p.row!.id, fp: p.row!.fp, sources: p.g.sources })),
    updates: ups.map((p) => ({ id: p.row!.id, oldFp: p.row!.fp, newFp: p.newFp, kinds: p.kinds, sources: p.g.sources })),
    flashcards: backupRows.map(({ topic, ...row }) => ({ ...row, topicSlug: topic.slug })),
    flashcardProgress: progressRows,
  }, null, 2))
  console.log('Backup written:', backupPath, `(${backupRows.length} flashcards, ${progressRows.length} progress rows)`)

  // ---- Writes, one transaction; each row re-verified inside it
  const same = (a: Live, b: { front: string; back: string; hint: string | null; examYield: ExamYield | null; topicId: string }) =>
    a.front === b.front && a.back === b.back && a.hint === b.hint && a.examYield === b.examYield && a.topicId === b.topicId
  const result = await prisma.$transaction(async (tx) => {
    let deleted = 0, progressDeleted = 0, updated = 0, skipped = 0
    for (const p of dels) {
      const cur = await tx.flashcard.findUnique({ where: { id: p.row!.id }, select: { front: true, back: true, hint: true, examYield: true, topicId: true } })
      if (!cur || !same(p.row!, cur)) { skipped++; console.log(`  SKIP delete ${p.row!.id} (changed during run)`); continue }
      progressDeleted += (await tx.flashcardProgress.deleteMany({ where: { flashcardId: p.row!.id } })).count
      await tx.flashcard.delete({ where: { id: p.row!.id } })
      deleted++
    }
    for (const p of ups) {
      const cur = await tx.flashcard.findUnique({ where: { id: p.row!.id }, select: { front: true, back: true, hint: true, examYield: true, topicId: true } })
      if (!cur || !same(p.row!, cur)) { skipped++; console.log(`  SKIP update ${p.row!.id} (changed during run)`); continue }
      await tx.flashcard.update({ where: { id: p.row!.id }, data: p.data! })
      updated++
    }
    return { deleted, progressDeleted, updated, skipped }
  }, { timeout: 180_000, maxWait: 15_000 })

  console.log(`\nDONE: deleted ${result.deleted} flashcards (${result.progressDeleted} FlashcardProgress rows), updated ${result.updated}, skipped inside transaction ${result.skipped}.`)
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1 })
  .finally(() => prisma.$disconnect())
