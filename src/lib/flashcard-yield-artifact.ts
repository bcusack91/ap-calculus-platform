/**
 * The exam-yield decision artifact: one JSON file per topic under
 * prisma/flashcard-yield/, each entry labeling one card from a committed
 * export mirror in prisma/flashcard-exports/<course>/ (written by
 * scripts/export-flashcards.ts, text-identical to prod).
 *
 * Courses in scope: the MCAT deck and five AP decks (AP Chemistry, AP
 * Biology, AP Physics 1, AP Calculus AB, AP Calculus BC). Topic slugs are
 * globally unique, so all courses share one flat artifact directory. Every
 * other course stays unlabeled (NULL = always served).
 *
 * Cards have no stable authored id, so identity is a fingerprint of the exact
 * front + back text. A classifier that rewords, drops or invents a card fails
 * verification instead of silently shipping.
 *
 * Node-only (fs, crypto): used by scripts and tests, never by app code.
 */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

export const YIELD_VALUES = ['ULTRA_HIGH', 'HIGH', 'MEDIUM', 'LOW'] as const
export type YieldValue = (typeof YIELD_VALUES)[number]

export const ARTIFACT_DIR = path.join(process.cwd(), 'prisma', 'flashcard-yield')
export const EXPORT_ROOT = path.join(process.cwd(), 'prisma', 'flashcard-exports')

/**
 * Which cards are in scope, by course export directory and file. A course
 * listed with `'*'` covers every category file in its directory (files
 * starting with `_` are metadata), so a re-export that adds a category is
 * picked up and fails verification until its cards are labeled.
 */
export const SCOPE: Record<string, readonly string[] | '*'> = {
  'mcat-prep': [
    'mcat-bio-biochem-foundations.json',
    'mcat-psych-soc-foundations.json',
    'mcat-chem-phys-foundations.json',
    'mcat-cars.json',
    'mcat-strategy.json',
  ],
  'ap-chemistry': '*',
  'ap-biology': '*',
  'ap-physics-1': '*',
  'ap-calculus-ab': '*',
  'ap-calculus-bc': '*',
}

/** The courses whose cards carry yield labels. */
export const YIELD_COURSES = Object.keys(SCOPE)

export type ExportedCard = { topicSlug: string; front: string; back: string }
export type ArtifactEntry = { front: string; fp: string; yield: YieldValue; why: string }

export const normalizeFront = (front: string) => front.trim().toLowerCase()

export function fingerprint(front: string, back: string): string {
  return crypto.createHash('sha256').update(`${front}\u0000${back}`).digest('hex').slice(0, 12)
}

function scopedFiles(exportRoot: string, course: string): string[] {
  const files = SCOPE[course]
  if (files !== '*') return [...files]
  return fs
    .readdirSync(path.join(exportRoot, course))
    .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
    .sort()
}

/** In-scope export cards of one course, grouped by topic. */
export function loadCourseExport(course: string, exportRoot = EXPORT_ROOT): Map<string, ExportedCard[]> {
  const byTopic = new Map<string, ExportedCard[]>()
  for (const file of scopedFiles(exportRoot, course)) {
    const cards: ExportedCard[] = JSON.parse(fs.readFileSync(path.join(exportRoot, course, file), 'utf8'))
    for (const card of cards) {
      const list = byTopic.get(card.topicSlug) ?? []
      list.push(card)
      byTopic.set(card.topicSlug, list)
    }
  }
  return byTopic
}

/** In-scope export cards of every yield course, grouped by topic. */
export function loadScopedExport(exportRoot = EXPORT_ROOT): Map<string, ExportedCard[]> {
  const byTopic = new Map<string, ExportedCard[]>()
  for (const course of YIELD_COURSES) {
    for (const [topic, cards] of loadCourseExport(course, exportRoot)) {
      if (byTopic.has(topic)) throw new Error(`topic ${topic} appears in more than one course export`)
      byTopic.set(topic, cards)
    }
  }
  return byTopic
}

/** Committed decisions, grouped by topic (files starting with `_` are metadata). */
export function loadArtifacts(artifactDir = ARTIFACT_DIR): Map<string, ArtifactEntry[]> {
  const byTopic = new Map<string, ArtifactEntry[]>()
  if (!fs.existsSync(artifactDir)) return byTopic
  for (const file of fs.readdirSync(artifactDir)) {
    if (!file.endsWith('.json') || file.startsWith('_')) continue
    byTopic.set(file.slice(0, -'.json'.length), JSON.parse(fs.readFileSync(path.join(artifactDir, file), 'utf8')))
  }
  return byTopic
}

export type TopicReport = {
  topic: string
  cards: number
  labeled: number
  counts: Record<YieldValue, number>
  suspect: string[]
}

export type CheckResult = {
  errors: string[]
  perTopic: TopicReport[]
  totals: { cards: number; labeled: number; counts: Record<YieldValue, number> }
}

/**
 * Every in-scope card labeled exactly once, by fingerprint; every entry's
 * front matches the card it claims to label; only known yield values; a
 * short non-empty reason. Distribution flags are a review worklist, not
 * failures.
 */
export function checkArtifacts(
  exportByTopic: Map<string, ExportedCard[]>,
  artifactByTopic: Map<string, ArtifactEntry[]>,
): CheckResult {
  const errors: string[] = []
  const perTopic: TopicReport[] = []
  const totals = { cards: 0, labeled: 0, counts: { ULTRA_HIGH: 0, HIGH: 0, MEDIUM: 0, LOW: 0 } as Record<YieldValue, number> }

  for (const topic of artifactByTopic.keys()) {
    if (!exportByTopic.has(topic)) errors.push(`${topic}: artifact for a topic that is not in scope`)
  }

  for (const [topic, cards] of [...exportByTopic.entries()].sort()) {
    const entries = artifactByTopic.get(topic)
    const report: TopicReport = {
      topic,
      cards: cards.length,
      labeled: 0,
      counts: { ULTRA_HIGH: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
      suspect: [],
    }
    perTopic.push(report)
    totals.cards += cards.length
    if (!entries) {
      errors.push(`${topic}: no artifact file`)
      continue
    }

    // Expected occurrences per fingerprint (an export can hold exact duplicates).
    const expected = new Map<string, { card: ExportedCard; n: number }>()
    for (const card of cards) {
      const fp = fingerprint(card.front, card.back)
      const slot = expected.get(fp) ?? { card, n: 0 }
      slot.n++
      expected.set(fp, slot)
    }
    const seen = new Map<string, number>()

    for (const entry of entries) {
      const slot = expected.get(entry.fp)
      if (!slot) {
        errors.push(`${topic}: fp ${entry.fp} matches no exported card (retyped or invented?): "${entry.front.slice(0, 60)}"`)
        continue
      }
      if (normalizeFront(entry.front) !== normalizeFront(slot.card.front)) {
        errors.push(`${topic}: fp ${entry.fp} front does not match the exported card`)
      }
      if (!YIELD_VALUES.includes(entry.yield)) {
        errors.push(`${topic}: fp ${entry.fp} has unknown yield "${entry.yield}"`)
        continue
      }
      if (typeof entry.why !== 'string' || !entry.why.trim() || entry.why.length > 120) {
        errors.push(`${topic}: fp ${entry.fp} needs a reason of 1-120 characters`)
      }
      seen.set(entry.fp, (seen.get(entry.fp) ?? 0) + 1)
      report.counts[entry.yield]++
      report.labeled++
    }

    for (const [fp, slot] of expected) {
      const n = seen.get(fp) ?? 0
      if (n < slot.n) errors.push(`${topic}: card not labeled: "${slot.card.front.slice(0, 70)}"`)
      if (n > slot.n) errors.push(`${topic}: card labeled ${n} times: "${slot.card.front.slice(0, 70)}"`)
    }

    const total = report.labeled || 1
    if (report.counts.LOW === 0 && report.labeled > 20) report.suspect.push('LOW = 0')
    if (report.counts.LOW / total > 0.6) report.suspect.push(`LOW ${Math.round((100 * report.counts.LOW) / total)}%`)
    for (const y of YIELD_VALUES) {
      if (report.counts[y] / total >= 0.9) report.suspect.push(`${y} ${Math.round((100 * report.counts[y]) / total)}%`)
    }
    totals.labeled += report.labeled
    for (const y of YIELD_VALUES) totals.counts[y] += report.counts[y]
  }

  return { errors, perTopic, totals }
}

/** Human-readable table for the console. */
export function formatReport(result: CheckResult): string {
  const lines: string[] = []
  for (const r of result.perTopic) {
    const pct = (n: number) => (r.labeled ? `${Math.round((100 * n) / r.labeled)}%` : '-')
    lines.push(
      `${r.topic.padEnd(50)} ${String(r.labeled).padStart(3)}/${String(r.cards).padEnd(3)} ` +
        `U ${String(r.counts.ULTRA_HIGH).padStart(3)} (${pct(r.counts.ULTRA_HIGH).padStart(3)})  ` +
        `H ${String(r.counts.HIGH).padStart(3)} (${pct(r.counts.HIGH).padStart(3)})  ` +
        `M ${String(r.counts.MEDIUM).padStart(3)} (${pct(r.counts.MEDIUM).padStart(3)})  ` +
        `L ${String(r.counts.LOW).padStart(3)} (${pct(r.counts.LOW).padStart(3)})` +
        (r.suspect.length ? `   SUSPECT: ${r.suspect.join(', ')}` : ''),
    )
  }
  const t = result.totals
  lines.push('')
  lines.push(
    `TOTAL labeled ${t.labeled}/${t.cards}: ULTRA_HIGH ${t.counts.ULTRA_HIGH}, HIGH ${t.counts.HIGH}, MEDIUM ${t.counts.MEDIUM}, LOW ${t.counts.LOW}` +
      (t.labeled ? ` (LOW ${Math.round((100 * t.counts.LOW) / t.labeled)}%)` : ''),
  )
  return lines.join('\n')
}
