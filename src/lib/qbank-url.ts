/**
 * Deep links into the question bank builder (/sat/qbank, /mcat/qbank).
 *
 *   /sat/qbank?domain=algebra&count=15&mode=tutor
 *
 * Params (all optional; anything missing or invalid is ignored, so a bare
 * /sat/qbank behaves exactly as before):
 *   domain      SAT only. One or more content-domain keys or College Board
 *               labels, comma-separated ('algebra', 'craft-structure',
 *               'Advanced Math'). Selects the domain (qbank "discipline") and
 *               its section.
 *   section     Section ids, comma-separated ('math', 'reading-writing', 'cars').
 *   topic       Topic slugs, comma-separated.
 *   difficulty  easy | medium | hard, comma-separated.
 *   pool        all | unused | incorrect | flagged.
 *   count       QBANK_MIN_COUNT–QBANK_MAX_COUNT (clamped).
 *   mode        tutor | timed.
 *
 * Pure: shared by QbankBuilder (client) and the links that point at it.
 */

import {
  QBANK_DIFFICULTIES,
  QBANK_MAX_COUNT,
  QBANK_MIN_COUNT,
  QBANK_POOL_KINDS,
  QBANK_SECTIONS,
  type QbankCourse,
  type QbankDifficulty,
  type QbankMode,
  type QbankPoolKind,
} from '@/lib/qbank-types'
import { findSatDomain, satDomain, type SatDomainKey } from '@/lib/sat-domains'

export interface QbankUrlPreset {
  sections?: string[]
  disciplines?: string[]
  topics?: string[]
  difficulties?: QbankDifficulty[]
  pool?: QbankPoolKind
  count?: number
  mode?: QbankMode
}

const list = (v: string | null): string[] =>
  (v ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

const uniq = <T,>(xs: T[]): T[] => Array.from(new Set(xs))

/** Read a builder preset from a query string ('?a=b' or 'a=b' or URLSearchParams). */
export function parseQbankUrlParams(search: string | URLSearchParams, course: QbankCourse): QbankUrlPreset {
  const p = typeof search === 'string' ? new URLSearchParams(search.startsWith('?') ? search.slice(1) : search) : search
  const out: QbankUrlPreset = {}
  const sectionIds = new Set((QBANK_SECTIONS[course] ?? []).map((s) => s.id))

  const sections: string[] = list(p.get('section') ?? p.get('sections')).filter((s) => sectionIds.has(s))
  const disciplines: string[] = []
  if (course === 'sat') {
    for (const raw of list(p.get('domain') ?? p.get('domains'))) {
      const d = findSatDomain(raw)
      if (!d) continue
      disciplines.push(d.label)
      sections.push(d.qbankSection)
    }
  }
  if (sections.length) out.sections = uniq(sections)
  if (disciplines.length) out.disciplines = uniq(disciplines)

  const topics = list(p.get('topic') ?? p.get('topics')).filter((t) => /^[a-z0-9-]{1,120}$/.test(t))
  if (topics.length) out.topics = uniq(topics)

  const difficulties = list(p.get('difficulty') ?? p.get('difficulties')).filter((d): d is QbankDifficulty =>
    (QBANK_DIFFICULTIES as readonly string[]).includes(d),
  )
  if (difficulties.length) out.difficulties = uniq(difficulties)

  const pool = p.get('pool')
  if (pool && (QBANK_POOL_KINDS as readonly string[]).includes(pool)) out.pool = pool as QbankPoolKind

  const countRaw = p.get('count')
  if (countRaw && /^\d{1,4}$/.test(countRaw)) {
    out.count = Math.max(QBANK_MIN_COUNT, Math.min(QBANK_MAX_COUNT, Number(countRaw)))
  }

  const mode = p.get('mode')
  if (mode === 'tutor' || mode === 'timed') out.mode = mode

  return out
}

/** True when the preset sets anything (the builder shows where it came from). */
export function hasQbankPreset(p: QbankUrlPreset): boolean {
  return Object.keys(p).length > 0
}

/** A deep link that practices one SAT content domain. */
export function satDomainQbankHref(
  domain: SatDomainKey,
  opts: { count?: number; mode?: QbankMode; pool?: QbankPoolKind } = {},
): string {
  const params = new URLSearchParams({ domain: satDomain(domain).key })
  params.set('count', String(opts.count ?? 15))
  params.set('mode', opts.mode ?? 'tutor')
  if (opts.pool && opts.pool !== 'all') params.set('pool', opts.pool)
  return `/sat/qbank?${params.toString()}`
}
