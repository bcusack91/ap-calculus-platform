/**
 * The eight College Board content domains of the digital SAT, as a pure,
 * client-safe table. The keys are the RWDomain / MathDomain keys used by the
 * practice-test blueprint (src/data/sat-practice/test-generator.ts) and the
 * SAT question bank (src/lib/qbank-pools.ts, where a domain's label is the
 * qbank "discipline"). Labels must match SAT_DOMAIN_LABELS exactly; a test
 * (tests/lib/sat-bluebook.test.ts) holds them in step.
 *
 * Order and shares follow the College Board score report and test
 * specifications: R&W Information and Ideas ~26%, Craft and Structure ~28%,
 * Expression of Ideas ~20%, Standard English Conventions ~26%; Math Algebra
 * ~35%, Advanced Math ~35%, Problem-Solving and Data Analysis ~15%, Geometry
 * and Trigonometry ~15%.
 */

import type { MathDomain, RWDomain } from '@/data/sat-practice/test-generator'

export type SatDomainKey = RWDomain | MathDomain
export type SatScoreSection = 'rw' | 'math'

export interface SatDomainInfo {
  key: SatDomainKey
  label: string
  /** Short label for tight spaces. */
  short: string
  section: SatScoreSection
  /** qbank section id (QBANK_SECTIONS.sat). */
  qbankSection: 'reading-writing' | 'math'
  /** Approximate share of its section on the real test (0–1). */
  share: number
}

export const SAT_DOMAINS: readonly SatDomainInfo[] = [
  { key: 'information-ideas', label: 'Information and Ideas', short: 'Info & Ideas', section: 'rw', qbankSection: 'reading-writing', share: 0.26 },
  { key: 'craft-structure', label: 'Craft and Structure', short: 'Craft & Structure', section: 'rw', qbankSection: 'reading-writing', share: 0.28 },
  { key: 'expression', label: 'Expression of Ideas', short: 'Expression', section: 'rw', qbankSection: 'reading-writing', share: 0.2 },
  { key: 'conventions', label: 'Standard English Conventions', short: 'Conventions', section: 'rw', qbankSection: 'reading-writing', share: 0.26 },
  { key: 'algebra', label: 'Algebra', short: 'Algebra', section: 'math', qbankSection: 'math', share: 0.35 },
  { key: 'advanced', label: 'Advanced Math', short: 'Advanced Math', section: 'math', qbankSection: 'math', share: 0.35 },
  { key: 'problem-solving', label: 'Problem-Solving and Data Analysis', short: 'Problem-Solving & Data', section: 'math', qbankSection: 'math', share: 0.15 },
  { key: 'geometry', label: 'Geometry and Trigonometry', short: 'Geometry & Trig', section: 'math', qbankSection: 'math', share: 0.15 },
]

const BY_KEY = new Map<string, SatDomainInfo>(SAT_DOMAINS.map((d) => [d.key, d]))

export function isSatDomainKey(v: unknown): v is SatDomainKey {
  return typeof v === 'string' && BY_KEY.has(v)
}

export function satDomain(key: SatDomainKey): SatDomainInfo {
  return BY_KEY.get(key)!
}

/** Resolve a domain from its key or its College Board label (case-insensitive). */
export function findSatDomain(raw: string): SatDomainInfo | null {
  const v = raw.trim()
  if (!v) return null
  const byKey = BY_KEY.get(v.toLowerCase())
  if (byKey) return byKey
  const lower = v.toLowerCase()
  return SAT_DOMAINS.find((d) => d.label.toLowerCase() === lower) ?? null
}
