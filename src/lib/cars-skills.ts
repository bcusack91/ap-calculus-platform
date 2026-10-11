/**
 * MCAT CARS reasoning skills. Authored CARS questions carry a `skill` tag
 * (src/data/mcat/types.ts); the banks use a few spellings for the same skill
 * ("tone" / "tone-attitude", "function" / "function-purpose" /
 * "paragraph-function"), so tags are normalized to one slug before counting.
 * Pure and client-safe.
 */

export const CARS_SKILL_LABELS: Record<string, string> = {
  'main-idea': 'Main idea',
  detail: 'Detail',
  inference: 'Inference',
  function: 'Function and purpose',
  'meaning-in-context': 'Meaning in context',
  tone: 'Tone and attitude',
  assumption: 'Assumption',
  'argument-structure': 'Argument structure',
  application: 'Application',
  'new-information': 'New information',
  'strengthen-weaken': 'Strengthen or weaken',
}

const ALIASES: Record<string, string> = {
  'tone-attitude': 'tone',
  'function-purpose': 'function',
  'paragraph-function': 'function',
  'main-point': 'main-idea',
  'strengthen': 'strengthen-weaken',
  'weaken': 'strengthen-weaken',
}

/** The canonical CARS skill slug for an authored tag, or undefined when it isn't a CARS skill. */
export function normalizeCarsSkill(raw: unknown): string | undefined {
  if (typeof raw !== 'string') return undefined
  const slug = raw.trim().toLowerCase().replace(/[\s_]+/g, '-')
  const canonical = ALIASES[slug] ?? slug
  return canonical in CARS_SKILL_LABELS ? canonical : undefined
}

export function carsSkillLabel(slug: string): string {
  return CARS_SKILL_LABELS[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
}

export interface SkillCount {
  skill: string
  label: string
  count: number
}

/** Count items per skill (items without one are ignored), most frequent first. */
export function countBySkill(items: readonly { skill?: string | null }[]): SkillCount[] {
  const counts = new Map<string, number>()
  for (const it of items) {
    if (it.skill) counts.set(it.skill, (counts.get(it.skill) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([skill, count]) => ({ skill, label: carsSkillLabel(skill), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
}
