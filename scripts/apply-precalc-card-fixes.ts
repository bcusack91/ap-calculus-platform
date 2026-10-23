/**
 * AP Precalculus finalize (precalc-final, Oct 2026, PLAN.md Wave 2 step 2):
 * applies the flashcard fix lists the Unit 1-3 content audits produced, on top
 * of the restructure (prisma/restructure-precalc.ts retires the 27 legacy
 * precalc rows, re-parents their cards onto the 308 targets and CREATES the two
 * new Topic rows `function-modeling-precalc` and
 * `exponential-logarithmic-modeling-precalc`). Same contract as
 * scripts/apply-calc-card-fixes.ts (calc-final/CARDS-RUNBOOK.md), plus a
 * create path and exam-yield tiers for every kept Unit 1-2 card.
 *
 *   cards-u1u2.json   Units 1-2 (id + fp keyed): `fixes` (deletes, text edits,
 *                     [reparent] entries, newYield on every kept card),
 *                     `tiers` (kept-unchanged cards: tier only) and `creates`
 *                     (5 new cards for exponential-logarithmic-modeling-precalc)
 *   cards-u3.json     Unit 3 + other (id + fp keyed): deletes, text edits,
 *                     re-parents, `tiers` for every kept Unit 3 card (the 6
 *                     former protected deletes are rewrites with newYield)
 *   cards-u3-new.json `cards`: 23 new cards for the live Unit 3 topics (tiered)
 *
 * The lists live in ap-phase1-pipeline/precalc-final/ (PRECALC_FINAL_DIR overrides).
 *
 * Resolution (per card): by prod id, else by fingerprint
 * (sha256(front + '\0' + back)[:12], the exam-yield fingerprint); the listed fp
 * and front must still match the live row unless the row already shows the
 * target text. The list's topicSlug is a hint only: the restructure moves
 * cards between topics before this runs. Not found / ambiguous / drifted →
 * UNRESOLVED and skipped, never guessed. The three lists overlap (16 ids);
 * entries for one card are merged, same-field conflicts are a hard error, and
 * a delete-vs-edit conflict is decided ONLY by CONFLICT_DECISIONS below (an
 * `optional` re-parent of a card another list deletes simply yields to the
 * delete). `optional` re-parents whose target is the PLAN.md 308 target are
 * honored (the table is binding).
 *
 * Rules enforced here:
 *   - A re-parent of a card listed on a retired row must go to that row's 308
 *     target (LEGACY_TOPIC_REDIRECTS), except the DEVIATIONS the lists call
 *     out (the 7 `logarithmic-exponential-models` growth/decay cards go to
 *     exponential-functions-precalc, where that content lives). Anything else
 *     is a hard error before any DB access.
 *   - A card with FlashcardProgress is NEVER deleted: such a delete is reported
 *     as `protected` and skipped (rewrite or re-parent it in the list instead).
 *   - Every re-parent / create target must be a live topic of ap-precalculus.
 *     Missing targets are reported in a banner, their entries are `blocked`,
 *     the dry run exits 1, and APPLY refuses to write anything. Run
 *     prisma/restructure-precalc.ts first.
 *   - Creates are idempotent on (topic, normalized front): an existing card
 *     with the same front on the target topic is `already-created` (same back)
 *     or `exists-differs` (reported, skipped), never duplicated.
 *   - Tiers: newYield (fixes), yield (tiers, creates) are written to
 *     Flashcard.examYield directly, as the calc script did; the resulting
 *     per-topic distribution is printed. Cards without a tier in the lists
 *     stay as they are (NULL = served); after this run only deleted cards
 *     and the re-parents blocked on a missing topic should be untiered.
 *
 * Safety:
 *   - Dry run unless APPLY=1; the dry run only SELECTs.
 *   - SEED_DB=prod loads .env (dotenv override), anything else .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses
 *     a Neon host.
 *   - Backs up every touched Flashcard row (with topicSlug) and the
 *     FlashcardProgress rows of deleted cards to
 *     scripts/_precalc-card-fixes-backup-<timestamp>.json (gitignored) before
 *     writing; the ids of created cards are appended after the transaction.
 *   - All writes run in one transaction; every row is re-read inside it and
 *     skipped if it changed since the plan was made; a create re-checks for a
 *     same-front card on the topic inside the transaction.
 *   - Idempotent: a rerun plans nothing (edited → already-applied, deleted →
 *     gone, created → already-created); the dry run simulates the rerun.
 *   - PLAN_OUT=<file> also writes the resolved plan as JSON (old fp → new fp,
 *     tier, why per card; the creates) for the yield-label artifact.
 *
 * Run (repo root):
 *   ALLOW_FP_FALLBACK=1 npx tsx scripts/apply-precalc-card-fixes.ts # dry run, local (ids differ there; match by fp)
 *   SEED_DB=prod npx tsx scripts/apply-precalc-card-fixes.ts        # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx scripts/apply-precalc-card-fixes.ts
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { PrismaClient, type ExamYield } from '@prisma/client'
import { YIELD_VALUES, fingerprint, normalizeFront } from '../src/lib/flashcard-yield-artifact'
import { LEGACY_TOPIC_REDIRECTS } from '../src/lib/legacy-topic-redirects'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
/**
 * Local-only aid: the local Docker DB was seeded separately, so prod ids do not
 * exist there. ALLOW_FP_FALLBACK=1 lets an id-keyed entry whose id is not live
 * resolve by its (unique) fingerprint so the local dry run exercises the plan.
 * Never for prod writes: identical-text twins sit on different topics there.
 */
const ALLOW_FP_FALLBACK = process.env.ALLOW_FP_FALLBACK === '1'
const COURSE = 'ap-precalculus'
const PRECALC_FINAL_DIR =
  process.env.PRECALC_FINAL_DIR ??
  path.join(os.homedir(), '.claude/projects/-Users-brendancusack-Projects-AP-Calculus-Website---Ad-Revenue-Based/ap-phase1-pipeline/precalc-final')
const FIX_LISTS = ['cards-u1u2.json', 'cards-u3.json'] as const
const CREATE_LISTS = ['cards-u1u2.json', 'cards-u3-new.json'] as const

/**
 * Delete-vs-edit conflicts between the lists (same card, one list deletes it,
 * another edits it). The unit that owns the card's topic decided; the loser's
 * reason is recorded in `why`. Keyed by prod id. Anything not listed here is a
 * hard error, never a guess.
 */
const CONFLICT_DECISIONS: Record<string, { winner: 'delete' | 'edit'; why: string }> = {
  cmo4wqgnh000b0fs7q9ftbpws: {
    winner: 'delete',
    why: 'complex-numbers "Complex Conjugate Root Theorem": u1u2 deletes it as a duplicate of the kept FTA conjugate-pairs card cmo4wqgsa000k0fs7t2shfet9; the u3 wording fix (non-real zeros) is moot',
  },
  cmo4wqbf3000v0fp8k1tvotxg: {
    winner: 'delete',
    why: 'rates-of-change "difference quotient": u1u2 deletes it as a duplicate of the canonical AROC card cmrwx6uyt003xy5mniq2glvpr; the u3 rewrite into AROC wording would make it an exact twin',
  },
  cmo4wqwte000t0f1wf2pwb6kf: {
    winner: 'delete',
    why: 'sequences "explicit arithmetic formula": u1u2 deletes it as a duplicate of canonical cmo5k4plz0017lb04op6bdeg5 (22 progress rows, rewritten into the CED a_n = a_0 + dn form); the u3 back fix says the same thing',
  },
  cmo4wqwum000x0f1wqw605nmg: {
    winner: 'delete',
    why: 'sequences "explicit geometric formula": u1u2 deletes it as a duplicate of canonical cmo5k4plz0017lb04op6bdeg5 (rewritten into g_n = g_0 r^n); the u3 back fix says the same thing',
  },
  cmo5k4plz0017lb04op6bdeg5: {
    winner: 'edit',
    why: 'sequences-series-precalc "series / sigma notation": 22 FlashcardProgress rows, so it is never deleted (u3 asked); u1u2 rewrites it into the CED 2.1-2.2 explicit-formula card',
  },
}

/**
 * Re-parents that deliberately leave the PLAN.md 308 table: listed source row
 * → allowed target. Called out in cards-u1u2.json's _note.
 */
const DEVIATIONS: Record<string, readonly string[]> = {
  'logarithmic-exponential-models': ['exponential-functions-precalc'],
}

// ---------------------------------------------------------------------------
// Fix lists

type RawFix = {
  id?: string
  fp?: string
  topicSlug?: string
  front?: string
  progress?: number
  source?: string
  delete?: boolean
  optional?: boolean
  newFront?: string
  newBack?: string
  newHint?: string | null
  newTopicSlug?: string
  newYield?: string
  newWhy?: string
  newFp?: string
  reason?: string
}

type RawTier = { id: string; fp: string; topicSlug: string; yield: string; why: string }

type RawCreate = { topicSlug: string; front: string; back: string; hint?: string; yield?: string; why?: string; reason?: string }

type Change = {
  delete: boolean
  newFront?: string
  newBack?: string
  newHint?: string | null
  newTopicSlug?: string
  newYield?: ExamYield
  newWhy?: string
}

type Entry = { src: string; optional: boolean; del: boolean; edit: Partial<Change> }

/** One card's plan: every list entry that targets it, merged. */
type Group = {
  key: string // 'id:<id>' or 'fp:<fp>'
  id?: string
  fp?: string
  front?: string
  /** Listed (pre-restructure) topic slugs; the deviation check and the report only. */
  listedTopics: string[]
  sources: string[] // "<list>#<index>"
  reasons: string[]
  notes: string[]
  change: Change
}

type Create = { src: string; topicSlug: string; front: string; back: string; hint: string | null; yield: ExamYield | null; why: string | null; reason: string | null }

const EDIT_FIELDS = ['newFront', 'newBack', 'newHint', 'newTopicSlug', 'newYield', 'newWhy'] as const

const isYield = (v: unknown): v is ExamYield => (YIELD_VALUES as readonly string[]).includes(v as string)

/** Follow LEGACY_TOPIC_REDIRECTS to a slug that is not itself redirected (null = not a retired slug). */
function canonicalTarget(slug: string): string | null {
  let s = slug
  for (let i = 0; i < 5; i++) {
    const next = LEGACY_TOPIC_REDIRECTS[s]
    if (!next) return s === slug ? null : s
    s = next
  }
  throw new Error(`redirect loop from ${slug}`)
}

function readList(list: string): Record<string, unknown> {
  const file = path.join(PRECALC_FINAL_DIR, list)
  if (!fs.existsSync(file)) throw new Error(`fix list not found: ${file} (set PRECALC_FINAL_DIR)`)
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function loadGroups(): { groups: Group[]; creates: Create[]; notes: string[] } {
  const entriesByKey = new Map<string, { g: Group; entries: Entry[] }>()
  const notes: string[] = []

  const add = (src: string, f: RawFix, entry: Entry) => {
    if (!f.id && !f.fp) throw new Error(`${src}: neither id nor fp`)
    if (f.fp && !/^[0-9a-f]{12}$/.test(f.fp)) throw new Error(`${src}: bad fp ${f.fp}`)
    const key = f.id ? `id:${f.id}` : `fp:${f.fp}`
    // Some [reparent] entries ship `front: ""`; the fp still pins the exact text, so an empty front is "not listed".
    const front = f.front?.trim() ? f.front : undefined
    const slot = entriesByKey.get(key) ?? {
      g: { key, id: f.id, fp: f.fp, front, listedTopics: [], sources: [], reasons: [], notes: [], change: { delete: false } },
      entries: [],
    }
    const g = slot.g
    if (f.fp && g.fp && f.fp !== g.fp) throw new Error(`${src}: fp ${f.fp} conflicts with ${g.fp} for ${key}`)
    if (front !== undefined && g.front !== undefined && front !== g.front) throw new Error(`${src}: front conflicts for ${key}`)
    g.fp ??= f.fp
    g.front ??= front
    if (f.topicSlug && !g.listedTopics.includes(f.topicSlug)) g.listedTopics.push(f.topicSlug)
    g.sources.push(src)
    if (f.reason) g.reasons.push(f.reason)
    slot.entries.push(entry)
    entriesByKey.set(key, slot)
  }

  for (const list of FIX_LISTS) {
    const doc = readList(list)
    const fixes = doc.fixes as RawFix[] | undefined
    if (!Array.isArray(fixes)) throw new Error(`${list}: no "fixes" array`)
    fixes.forEach((f, i) => {
      const src = `${list}#${i}`
      if (f.newYield !== undefined && !isYield(f.newYield)) throw new Error(`${src}: bad newYield ${f.newYield}`)
      for (const k of ['newFront', 'newBack'] as const) if (f[k] !== undefined && !f[k]!.trim()) throw new Error(`${src}: empty ${k}`)
      const del = f.delete === true
      const edit: Partial<Change> = {}
      for (const k of EDIT_FIELDS) if (f[k] !== undefined) (edit as Record<string, unknown>)[k] = f[k]
      const hasEdit = Object.keys(edit).length > 0
      if (del && hasEdit) throw new Error(`${src}: both delete and edit fields`)
      if (!del && !hasEdit) throw new Error(`${src}: entry changes nothing`)
      if (f.newFp !== undefined) {
        // The list's own claim of the post-edit fingerprint: must agree with the text it ships.
        const tf = f.newFront ?? f.front
        if (tf === undefined || f.newBack === undefined) throw new Error(`${src}: newFp given but newFront/front + newBack are not both known`)
        const want = fingerprint(tf, f.newBack)
        if (want !== f.newFp) throw new Error(`${src}: newFp ${f.newFp} does not match the listed text (computed ${want})`)
      }
      add(src, f, { src, optional: f.optional === true, del, edit })
    })

    const tiers = doc.tiers as RawTier[] | undefined
    if (tiers !== undefined) {
      if (!Array.isArray(tiers)) throw new Error(`${list}: "tiers" is not an array`)
      tiers.forEach((t, i) => {
        const src = `${list}#tiers${i}`
        if (!isYield(t.yield)) throw new Error(`${src}: bad yield ${t.yield}`)
        if (!t.why?.trim()) throw new Error(`${src}: tier without a why`)
        add(src, { id: t.id, fp: t.fp, topicSlug: t.topicSlug }, { src, optional: false, del: false, edit: { newYield: t.yield, newWhy: t.why } })
      })
    }
  }

  // ---- Merge the entries of each card
  const groups: Group[] = []
  for (const { g, entries } of entriesByKey.values()) {
    const dels = entries.filter((e) => e.del)
    let edits = entries.filter((e) => !e.del)
    if (dels.length && edits.length) {
      const required = edits.filter((e) => !e.optional)
      if (!required.length) {
        g.notes.push(`optional ${edits.map((e) => e.src).join('+')} yields to the delete`)
        edits = []
      } else {
        const id = g.id ?? ''
        const d = CONFLICT_DECISIONS[id]
        if (!d) throw new Error(`${g.key}: delete (${dels.map((e) => e.src).join(', ')}) conflicts with edit (${required.map((e) => e.src).join(', ')}); add a CONFLICT_DECISIONS entry`)
        g.notes.push(`conflict → ${d.winner}: ${d.why}`)
        if (d.winner === 'delete') edits = []
        else dels.length = 0
      }
    }
    if (dels.length && !edits.length) {
      g.change.delete = true
    } else {
      for (const e of edits) {
        for (const k of EDIT_FIELDS) {
          const v = e.edit[k]
          if (v === undefined) continue
          const cur = g.change[k]
          if (cur !== undefined && cur !== v) throw new Error(`${e.src}: ${k} conflicts with another entry for ${g.key} (${JSON.stringify(cur)} vs ${JSON.stringify(v)})`)
          ;(g.change as Record<string, unknown>)[k] = v
        }
        if (e.optional && e.edit.newTopicSlug) g.notes.push(`optional re-parent ${e.src} honored (308 target)`)
      }
    }
    groups.push(g)
  }

  // ---- The 308 table is binding for cards listed on a retired row.
  let deviations = 0
  for (const g of groups) {
    const t = g.change.newTopicSlug
    if (!t || g.change.delete) continue
    for (const listed of g.listedTopics) {
      const canon = canonicalTarget(listed)
      if (!canon || canon === t) continue
      if (DEVIATIONS[listed]?.includes(t)) {
        deviations++
        g.notes.push(`deviation from the 308 table (${listed} → ${canon}) honored as listed: → ${t}`)
        continue
      }
      throw new Error(`${g.key} (${g.sources.join(', ')}): re-parent ${listed} → ${t} disagrees with the PLAN.md 308 target ${canon}`)
    }
  }
  if (deviations) notes.push(`${deviations} re-parents deviate from the 308 table by design (see DEVIATIONS)`)

  // ---- Creates
  const creates: Create[] = []
  for (const list of CREATE_LISTS) {
    const doc = readList(list)
    const raw = (list === 'cards-u1u2.json' ? doc.creates : doc.cards) as RawCreate[] | undefined
    if (!Array.isArray(raw)) throw new Error(`${list}: no create list`)
    raw.forEach((c, i) => {
      const src = `${list}#create${i}`
      if (!c.topicSlug || !c.front?.trim() || !c.back?.trim()) throw new Error(`${src}: needs topicSlug, front, back`)
      if (c.yield !== undefined && !isYield(c.yield)) throw new Error(`${src}: bad yield ${c.yield}`)
      if (c.yield !== undefined && !c.why?.trim()) throw new Error(`${src}: yield without a why`)
      creates.push({ src, topicSlug: c.topicSlug, front: c.front, back: c.back, hint: c.hint?.trim() ? c.hint : null, yield: c.yield ?? null, why: c.why ?? null, reason: c.reason ?? null })
    })
  }
  const seenCreate = new Map<string, string>()
  for (const c of creates) {
    const k = `${c.topicSlug}\u0000${normalizeFront(c.front)}`
    const prev = seenCreate.get(k)
    if (prev) throw new Error(`${c.src}: duplicate create of "${c.front.slice(0, 50)}" on ${c.topicSlug} (also ${prev})`)
    seenCreate.set(k, c.src)
  }

  return { groups, creates, notes }
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

type TopicRef = { id: string; course: string }

type Verdict = 'blocked' | 'unresolved' | 'protected' | 'delete' | 'update' | 'already-applied' | 'gone'

type Planned = {
  g: Group
  verdict: Verdict
  note: string
  row?: Live
  data?: { front?: string; back?: string; hint?: string | null; topicId?: string; examYield?: ExamYield }
  kinds?: string[]
  newFp?: string
}

type CreateVerdict = 'blocked' | 'create' | 'already-created' | 'exists-differs'
type PlannedCreate = { c: Create; verdict: CreateVerdict; note: string; row?: Live; topicId?: string; fp: string }

/**
 * Resolves every plan entry against a snapshot of live rows (pure: also used
 * to simulate the rerun after an apply).
 */
function resolve(groups: Group[], live: Live[], topicBySlug: Map<string, TopicRef>): Planned[] {
  const byId = new Map(live.map((r) => [r.id, r]))
  const byFp = new Map<string, Live[]>()
  for (const r of live) byFp.set(r.fp, [...(byFp.get(r.fp) ?? []), r])

  const planned: Planned[] = []
  const claimed = new Map<string, string>() // row id -> group key
  for (const g of groups) {
    const c = g.change
    let row: Live | undefined
    let how = ''
    if (g.id && byId.has(g.id)) { row = byId.get(g.id); how = 'id' }
    // An id-keyed entry resolves by id ONLY: prod ids are stable, and the deck
    // holds identical-text twins on different topics (the same filler card on
    // several -precalc rows), so a text fallback could claim the wrong twin.
    if (!row && (!g.id || ALLOW_FP_FALLBACK) && g.fp) {
      const hits = byFp.get(g.fp) ?? []
      if (hits.length > 1) { planned.push({ g, verdict: 'unresolved', note: `ambiguous: ${hits.length} live rows share fp ${g.fp} (${hits.map((h) => h.topicSlug).join(', ')})` }); continue }
      if (hits.length === 1) { row = hits[0]; how = 'fp' }
    }
    if (!row && (!g.id || ALLOW_FP_FALLBACK) && !c.delete && (c.newFront !== undefined || c.newBack !== undefined)) {
      // Text already rewritten? Look for the target text.
      const tf = c.newFront ?? g.front
      if (tf !== undefined && c.newBack !== undefined) {
        const hits = byFp.get(fingerprint(tf, c.newBack)) ?? []
        if (hits.length === 1) { row = hits[0]; how = 'target-fp' }
      } else if (c.newFront !== undefined) {
        const hits = live.filter((r) => r.front === c.newFront)
        if (hits.length === 1) { row = hits[0]; how = 'target-front' }
      }
    }
    if (!row) {
      if (c.delete) planned.push({ g, verdict: 'gone', note: 'no live row (already deleted?)' })
      else planned.push({ g, verdict: 'unresolved', note: g.id ? 'id not live (deleted? wrong course?)' : 'no live row by fp / target text' })
      continue
    }

    // Verify identity. A row found by id must still carry the listed fp/front
    // unless it already shows the target text.
    if (how === 'id' || how === 'fp') {
      const fpOk = !g.fp || row.fp === g.fp
      const frontOk = g.front === undefined || row.front === g.front
      if (!fpOk || !frontOk) {
        const hasText = c.newFront !== undefined || c.newBack !== undefined
        const tFront = c.newFront ?? g.front ?? row.front
        const looksApplied = !c.delete && hasText && row.front === tFront && (c.newBack === undefined || row.back === c.newBack)
        if (!looksApplied) {
          planned.push({ g, verdict: 'unresolved', row, note: `drifted: live ${!fpOk ? `fp ${row.fp} ≠ listed ${g.fp}` : 'front differs from the listed front'}` })
          continue
        }
      }
    }
    if (claimed.has(row.id)) throw new Error(`card ${row.id} is targeted by two plan entries (${claimed.get(row.id)} and ${g.key}); merge them in the lists`)
    claimed.set(row.id, g.key)

    if (c.delete) {
      if (row.progress > 0) { planned.push({ g, verdict: 'protected', row, note: `${row.progress} FlashcardProgress rows: not deleted (rewrite or re-parent it instead)` }); continue }
      planned.push({ g, verdict: 'delete', row, note: `found by ${how}` })
      continue
    }

    const data: NonNullable<Planned['data']> = {}
    const kinds: string[] = []
    if (c.newFront !== undefined && row.front !== c.newFront) { data.front = c.newFront; kinds.push('front') }
    if (c.newBack !== undefined && row.back !== c.newBack) { data.back = c.newBack; kinds.push('back') }
    if (c.newHint !== undefined && row.hint !== c.newHint) { data.hint = c.newHint; kinds.push('hint') }
    if (c.newTopicSlug !== undefined && row.topicSlug !== c.newTopicSlug) {
      const t = topicBySlug.get(c.newTopicSlug)
      if (!t) { planned.push({ g, verdict: 'blocked', row, note: `newTopicSlug ${c.newTopicSlug} is not a live topic (run prisma/restructure-precalc.ts first)` }); continue }
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

/** Creates against a snapshot of live rows (pure). */
function resolveCreates(creates: Create[], live: Live[], topicBySlug: Map<string, TopicRef>): PlannedCreate[] {
  const out: PlannedCreate[] = []
  for (const c of creates) {
    const fp = fingerprint(c.front, c.back)
    const t = topicBySlug.get(c.topicSlug)
    if (!t) { out.push({ c, verdict: 'blocked', note: `topic ${c.topicSlug} is not a live topic (run prisma/restructure-precalc.ts first)`, fp }); continue }
    const nf = normalizeFront(c.front)
    const sameFront = live.filter((r) => r.topicSlug === c.topicSlug && normalizeFront(r.front) === nf)
    if (sameFront.length > 1) { out.push({ c, verdict: 'exists-differs', note: `${sameFront.length} cards on ${c.topicSlug} already have this front`, fp, topicId: t.id }); continue }
    if (sameFront.length === 1) {
      const r = sameFront[0]
      if (r.back === c.back) {
        const tierNote = c.yield && r.examYield !== c.yield ? `; tier ${r.examYield ?? 'NULL'} ≠ listed ${c.yield} (left as is)` : ''
        out.push({ c, verdict: 'already-created', note: `exists as ${r.id}${tierNote}`, fp, row: r, topicId: t.id })
      } else {
        out.push({ c, verdict: 'exists-differs', note: `card ${r.id} on ${c.topicSlug} has this front with a different back`, fp, row: r, topicId: t.id })
      }
      continue
    }
    const twin = live.find((r) => r.fp === fp)
    out.push({ c, verdict: 'create', note: twin ? `NOTE identical card already on ${twin.topicSlug} (${twin.id})` : '', fp, topicId: t.id })
  }
  return out
}

const YIELD_KEYS = ['ULTRA_HIGH', 'HIGH', 'MEDIUM', 'LOW', 'NULL'] as const
type Dist = Record<(typeof YIELD_KEYS)[number], number>
const zeroDist = (): Dist => ({ ULTRA_HIGH: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NULL: 0 })
const fmtDist = (d: Dist) => `U${d.ULTRA_HIGH}/H${d.HIGH}/M${d.MEDIUM}/L${d.LOW}/∅${d.NULL}`

function distribution(rows: Live[]): Map<string, Dist> {
  const m = new Map<string, Dist>()
  for (const r of rows) {
    const d = m.get(r.topicSlug) ?? zeroDist()
    d[r.examYield ?? 'NULL']++
    m.set(r.topicSlug, d)
  }
  return m
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:     ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '→', host || '(DATABASE_URL not set)')
  console.log('Mode:   ', APPLY ? 'APPLY (writes)' : 'dry run')
  console.log('Lists:  ', PRECALC_FINAL_DIR)
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)
  if (ALLOW_FP_FALLBACK && (IS_PROD || isNeon)) throw new Error('ALLOW_FP_FALLBACK is a local-only aid; refusing against prod')
  if (ALLOW_FP_FALLBACK) console.log('Match:   id, then fingerprint fallback (ALLOW_FP_FALLBACK=1, local only)')

  const { groups, creates, notes } = loadGroups()
  const nDel = groups.filter((g) => g.change.delete).length
  const nEdit = groups.filter((g) => !g.change.delete).length
  const nTierOnly = groups.filter((g) => !g.change.delete && Object.keys(g.change).every((k) => k === 'delete' || k === 'newYield' || k === 'newWhy')).length
  console.log(`Plan:    ${groups.length} cards from ${FIX_LISTS.length} lists (${nDel} deletes, ${nEdit} edits of which ${nTierOnly} tier-only, ${groups.filter((g) => g.change.newTopicSlug).length} re-parent) + ${creates.length} creates`)
  for (const n of notes) console.log(`  note: ${n}`)
  for (const g of groups) for (const n of g.notes) console.log(`  ${g.key}: ${n}`)

  // ---- Live rows
  const allTopics = await prisma.topic.findMany({ select: { id: true, slug: true, category: { select: { courseId: true } } } })
  const topicBySlugAll = new Map(allTopics.map((t) => [t.slug, { id: t.id, course: t.category.courseId } as TopicRef]))
  const topicBySlug = new Map([...topicBySlugAll].filter(([, t]) => t.course === COURSE))
  const rows = await prisma.flashcard.findMany({
    where: { topic: { category: { courseId: COURSE } } },
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
  console.log(`Live:    ${live.length} cards on ${topicBySlug.size} topics of ${COURSE}`)

  // ---- Target topics must exist (restructure → cards)
  const required = new Set<string>()
  for (const g of groups) if (g.change.newTopicSlug && !g.change.delete) required.add(g.change.newTopicSlug)
  for (const c of creates) required.add(c.topicSlug)
  const missing = [...required].filter((s) => !topicBySlug.has(s)).sort()
  if (missing.length) {
    console.log('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(`!!! MISSING TARGET TOPICS (${missing.length}) in ${COURSE}: ${missing.join(', ')}`)
    for (const s of missing) {
      const elsewhere = topicBySlugAll.get(s)
      console.log(`!!!   ${s}: ${elsewhere ? `exists in course ${elsewhere.course}, not ${COURSE}` : 'no Topic row at all'} — ${groups.filter((g) => g.change.newTopicSlug === s && !g.change.delete).length} re-parents + ${creates.filter((c) => c.topicSlug === s).length} creates blocked`)
    }
    console.log('!!! Run prisma/restructure-precalc.ts (APPLY) first; this script refuses to write until every target exists.')
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  }

  // ---- Resolve
  const planned = resolve(groups, live, topicBySlug)
  const plannedCreates = resolveCreates(creates, live, topicBySlug)

  // ---- Report
  const short = (s: string | undefined, n = 58) => (s ?? '').replace(/\s+/g, ' ').slice(0, n)
  const order: Verdict[] = ['blocked', 'unresolved', 'protected', 'delete', 'update', 'already-applied', 'gone']
  for (const v of order) {
    const ps = planned.filter((p) => p.verdict === v)
    if (!ps.length) continue
    console.log(`\n-- ${v} (${ps.length})`)
    for (const p of ps) {
      const r = p.row
      const where = (r ? r.topicSlug : `(no live row; listed ${p.g.listedTopics.join('/')})`).padEnd(44)
      const extra =
        v === 'update' ? ` [${p.kinds!.join('+')}]${p.data!.topicId ? ` → ${p.g.change.newTopicSlug}` : ''}${p.data!.examYield ? ` tier ${r!.examYield ?? 'NULL'}→${p.data!.examYield}` : ''}${p.data!.front !== undefined || p.data!.back !== undefined ? ` fp ${r!.fp}→${p.newFp}` : ''}`
          : v === 'delete' || v === 'protected' ? ` progress ${r!.progress} tier ${r!.examYield ?? 'NULL'}`
          : ''
      const tail = v === 'unresolved' || v === 'gone' || v === 'blocked' || v === 'protected' ? `  <${p.note}; ${p.g.sources.join(', ')}>` : ''
      console.log(`  ${(p.g.id ?? p.g.fp ?? '').padEnd(26)} ${where}${extra} | ${short(r?.front ?? p.g.front)}${tail}`)
    }
  }
  const corder: CreateVerdict[] = ['blocked', 'exists-differs', 'create', 'already-created']
  for (const v of corder) {
    const ps = plannedCreates.filter((p) => p.verdict === v)
    if (!ps.length) continue
    console.log(`\n-- create: ${v} (${ps.length})`)
    for (const p of ps) console.log(`  ${p.fp.padEnd(26)} ${p.c.topicSlug.padEnd(44)} tier ${p.c.yield ?? 'NULL'} | ${short(p.c.front)}${p.note ? `  <${p.note}; ${p.c.src}>` : `  <${p.c.src}>`}`)
  }

  // ---- Per-list + headline numbers
  const n = (v: Verdict) => planned.filter((p) => p.verdict === v).length
  const cn = (v: CreateVerdict) => plannedCreates.filter((p) => p.verdict === v).length
  const ups = planned.filter((p) => p.verdict === 'update')
  const dels = planned.filter((p) => p.verdict === 'delete')
  const kindCount = (k: string) => ups.filter((p) => p.kinds!.includes(k)).length
  console.log('\n-- per list')
  for (const list of FIX_LISTS) {
    const ps = planned.filter((p) => p.g.sources.some((s) => s.startsWith(list + '#')))
    const ln = (v: Verdict) => ps.filter((p) => p.verdict === v).length
    console.log(`  ${list.padEnd(18)} cards ${String(ps.length).padStart(3)}: delete ${ln('delete')}, update ${ln('update')}, already-applied ${ln('already-applied')}, gone ${ln('gone')}, protected ${ln('protected')}, blocked ${ln('blocked')}, unresolved ${ln('unresolved')}`)
  }
  for (const list of CREATE_LISTS) {
    const ps = plannedCreates.filter((p) => p.c.src.startsWith(list + '#'))
    const ln = (v: CreateVerdict) => ps.filter((p) => p.verdict === v).length
    console.log(`  ${list.padEnd(18)} creates ${String(ps.length).padStart(2)}: create ${ln('create')}, already-created ${ln('already-created')}, exists-differs ${ln('exists-differs')}, blocked ${ln('blocked')}`)
  }
  console.log('\n-- headline')
  console.log(`  delete ${dels.length} (FlashcardProgress ${dels.reduce((s, p) => s + p.row!.progress, 0)})  update ${ups.length} (front ${kindCount('front')}, back ${kindCount('back')}, hint ${kindCount('hint')}, topic ${kindCount('topic')}, tier ${kindCount('tier')}; tier-only ${ups.filter((p) => p.kinds!.every((k) => k === 'tier')).length})  create ${cn('create')}`)
  console.log(`  already-applied ${n('already-applied')}  gone ${n('gone')}  already-created ${cn('already-created')}`)
  console.log(`  unresolved ${n('unresolved')}  protected deletes ${n('protected')}  blocked (missing target) ${n('blocked')} + ${cn('blocked')} creates  exists-differs ${cn('exists-differs')}  missing target topics ${missing.length}`)

  // ---- Simulated after-state: tier distribution + idempotency
  const slugById = new Map([...topicBySlug].map(([slug, t]) => [t.id, slug]))
  const deletedIds = new Set(dels.map((p) => p.row!.id))
  const after: Live[] = live
    .filter((r) => !deletedIds.has(r.id))
    .map((r) => {
      const p = ups.find((u) => u.row!.id === r.id)
      if (!p) return r
      const x = { ...r, ...p.data } as Live
      x.topicSlug = slugById.get(x.topicId) ?? r.topicSlug
      x.fp = fingerprint(x.front, x.back)
      return x
    })
  for (const p of plannedCreates.filter((x) => x.verdict === 'create')) {
    after.push({ id: `new:${p.fp}`, front: p.c.front, back: p.c.back, hint: p.c.hint, examYield: p.c.yield, topicId: p.topicId!, topicSlug: p.c.topicSlug, course: COURSE, fp: p.fp, progress: 0 })
  }
  const before = distribution(live)
  const dist = distribution(after)
  console.log(`\n-- exam-yield distribution per topic after apply (before → after; ${COURSE})`)
  const total = zeroDist()
  const totalBefore = zeroDist()
  for (const slug of [...new Set([...before.keys(), ...dist.keys()])].sort()) {
    const b = before.get(slug) ?? zeroDist()
    const d = dist.get(slug) ?? zeroDist()
    const nb = YIELD_KEYS.reduce((s, k) => s + b[k], 0)
    const na = YIELD_KEYS.reduce((s, k) => s + d[k], 0)
    const retired = canonicalTarget(slug) ? ' (retired row: restructure moves these)' : ''
    console.log(`  ${slug.padEnd(44)} ${String(nb).padStart(3)} ${fmtDist(b).padEnd(22)} → ${String(na).padStart(3)} ${fmtDist(d)}${retired}`)
    for (const k of YIELD_KEYS) { total[k] += d[k]; totalBefore[k] += b[k] }
  }
  console.log(`  ${'TOTAL'.padEnd(44)} ${String(live.length).padStart(3)} ${fmtDist(totalBefore).padEnd(22)} → ${String(after.length).padStart(3)} ${fmtDist(total)}`)

  const rerun = resolve(groups, after, topicBySlug)
  const rerunCreates = resolveCreates(creates, after, topicBySlug)
  const rn = (v: Verdict) => rerun.filter((p) => p.verdict === v).length
  const rcn = (v: CreateVerdict) => rerunCreates.filter((p) => p.verdict === v).length
  const stillTodo = rn('delete') + rn('update') + rcn('create')
  const sameLeftovers = rn('unresolved') === n('unresolved') && rn('protected') === n('protected') && rn('blocked') === n('blocked') && rcn('blocked') === cn('blocked') && rcn('exists-differs') === cn('exists-differs')
  console.log(`\nRerun after apply (simulated): delete ${rn('delete')}, update ${rn('update')}, create ${rcn('create')} | already-applied ${rn('already-applied')}, gone ${rn('gone')}, already-created ${rcn('already-created')}, unresolved ${rn('unresolved')}, protected ${rn('protected')}, blocked ${rn('blocked')}+${rcn('blocked')}${stillTodo === 0 && sameLeftovers ? '  → idempotent' : '  → NOT IDEMPOTENT'}`)
  for (const p of rerun.filter((x) => x.verdict === 'delete' || x.verdict === 'update')) console.log(`  rerun would still ${p.verdict}: ${p.g.key} ${p.g.sources.join(', ')}`)
  for (const p of rerunCreates.filter((x) => x.verdict === 'create')) console.log(`  rerun would still create: ${p.c.src}`)

  if (process.env.PLAN_OUT) {
    const plan = {
      course: COURSE,
      host,
      createdAt: new Date().toISOString(),
      cards: planned
        .filter((p) => p.row && (p.verdict === 'delete' || p.verdict === 'update' || p.verdict === 'already-applied' || p.verdict === 'protected'))
        .map((p) => ({
          id: p.row!.id,
          verdict: p.verdict,
          oldFp: p.verdict === 'already-applied' ? p.g.fp ?? p.row!.fp : p.row!.fp,
          newFp: p.verdict === 'delete' ? null : p.newFp ?? p.row!.fp,
          topicSlug: p.row!.topicSlug,
          newTopicSlug: p.g.change.newTopicSlug ?? null,
          newYield: p.g.change.newYield ?? null,
          newWhy: p.g.change.newWhy ?? null,
          currentYield: p.row!.examYield,
          newFront: p.g.change.newFront ?? null,
          sources: p.g.sources,
        })),
      creates: plannedCreates
        .filter((p) => p.verdict === 'create' || p.verdict === 'already-created')
        .map((p) => ({ verdict: p.verdict, fp: p.fp, topicSlug: p.c.topicSlug, front: p.c.front, yield: p.c.yield, why: p.c.why, existingId: p.row?.id ?? null, source: p.c.src })),
    }
    fs.writeFileSync(process.env.PLAN_OUT, JSON.stringify(plan, null, 1) + '\n')
    console.log(`Plan written: ${process.env.PLAN_OUT} (${plan.cards.length} cards, ${plan.creates.length} creates)`)
  }

  if (!APPLY) {
    if (missing.length) {
      console.log(`\nDry run only. ${missing.length} target topic(s) missing — run prisma/restructure-precalc.ts first (exit 1).`)
      process.exitCode = 1
    } else {
      console.log('\nDry run only. Re-run with APPLY=1 to write.')
    }
    return
  }
  if (missing.length) throw new Error(`Refusing to write: ${missing.length} target topic(s) missing (${missing.join(', ')}); run prisma/restructure-precalc.ts first`)
  const newCards = plannedCreates.filter((p) => p.verdict === 'create')
  if (!dels.length && !ups.length && !newCards.length) {
    console.log('\nNothing to write.')
    return
  }

  // ---- Backup
  const touched = [...dels, ...ups].map((p) => p.row!.id)
  const backupRows = await prisma.flashcard.findMany({ where: { id: { in: touched } }, include: { topic: { select: { slug: true } } } })
  const progressRows = await prisma.flashcardProgress.findMany({ where: { flashcardId: { in: dels.map((p) => p.row!.id) } } })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `_precalc-card-fixes-backup-${stamp}.json`)
  const backup = {
    host,
    createdAt: new Date().toISOString(),
    deletes: dels.map((p) => ({ id: p.row!.id, fp: p.row!.fp, sources: p.g.sources })),
    updates: ups.map((p) => ({ id: p.row!.id, oldFp: p.row!.fp, newFp: p.newFp, kinds: p.kinds, sources: p.g.sources })),
    creates: newCards.map((p) => ({ fp: p.fp, topicSlug: p.c.topicSlug, front: p.c.front, source: p.c.src })),
    createdIds: [] as string[],
    flashcards: backupRows.map(({ topic, ...row }) => ({ ...row, topicSlug: topic.slug })),
    flashcardProgress: progressRows,
  }
  fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2))
  console.log('Backup written:', backupPath, `(${backupRows.length} flashcards, ${progressRows.length} progress rows)`)

  // ---- Writes, one transaction; each row re-verified inside it
  const same = (a: Live, b: { front: string; back: string; hint: string | null; examYield: ExamYield | null; topicId: string }) =>
    a.front === b.front && a.back === b.back && a.hint === b.hint && a.examYield === b.examYield && a.topicId === b.topicId
  const result = await prisma.$transaction(async (tx) => {
    let deleted = 0, progressDeleted = 0, updated = 0, created = 0, skipped = 0
    const createdIds: string[] = []
    for (const p of dels) {
      const cur = await tx.flashcard.findUnique({ where: { id: p.row!.id }, select: { front: true, back: true, hint: true, examYield: true, topicId: true, _count: { select: { progress: true } } } })
      if (!cur || !same(p.row!, cur) || cur._count.progress > 0) { skipped++; console.log(`  SKIP delete ${p.row!.id} (changed or gained progress during run)`); continue }
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
    for (const p of newCards) {
      const exists = await tx.flashcard.findFirst({ where: { topicId: p.topicId!, front: p.c.front }, select: { id: true } })
      if (exists) { skipped++; console.log(`  SKIP create ${p.c.src} (card ${exists.id} appeared during run)`); continue }
      const row = await tx.flashcard.create({
        data: { topicId: p.topicId!, front: p.c.front, back: p.c.back, hint: p.c.hint, examYield: p.c.yield, isPremium: false },
        select: { id: true },
      })
      createdIds.push(row.id)
      created++
    }
    return { deleted, progressDeleted, updated, created, skipped, createdIds }
  }, { timeout: 180_000, maxWait: 15_000 })

  backup.createdIds = result.createdIds
  fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2))
  console.log(`\nDONE: deleted ${result.deleted} flashcards (${result.progressDeleted} FlashcardProgress rows), updated ${result.updated}, created ${result.created}, skipped inside transaction ${result.skipped}. Created ids recorded in ${backupPath}.`)
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1 })
  .finally(() => prisma.$disconnect())
