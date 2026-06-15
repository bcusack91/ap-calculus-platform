/**
 * Adaptive study plans (#4).
 *
 * Study-plan templates are static and pedagogically ordered. Rather than
 * re-sorting them with a fragile guess about which task covers which exam unit
 * (diagnostic topic slugs are finer-grained than plan task slugs, so a direct
 * match silently mislabels), we use the diagnostic's OWN validated output:
 * every diagnostic stores `results.recommendedTopics` ({ slug, name, priority })
 * and `weakAreas` (human-readable unit names). We read those back and:
 *
 *   1. (server, adopt-time) prepend a few "Priority review" tasks for the
 *      student's weakest recommended topics, so the adopted plan visibly
 *      front-loads their gaps without disturbing the template sequence;
 *   2. (client, display-time) surface a "personalized from your diagnostic"
 *      banner on the study-plan page.
 *
 * Everything degrades gracefully: no diagnostic, or a diagnostic that didn't
 * store recommendedTopics, yields an empty focus and the plan is unchanged.
 */

import { prisma } from '@/lib/prisma'

export interface RecommendedTopic {
  slug: string
  name: string
  priority?: 'high' | 'medium' | string
}

export interface DiagnosticFocus {
  /** Human-readable weak unit/area names, e.g. "Unit 1: Exploring One-Variable Data". */
  weakAreas: string[]
  /** Topics the diagnostic itself recommended, validated slugs + display names. */
  recommendedTopics: RecommendedTopic[]
  takenAt: Date
}

/** A resolved plan task, matching the shape returned by resolveStudyPlanTasks. */
export interface ResolvedTask {
  title: string
  type: string
  topicSlug?: string
  dueDate: Date
  sortOrder: number
}

// ── Defensive parsing of the stored diagnostic JSON ──────────────────────────

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null
}

function parseRecommendedTopics(results: unknown): RecommendedTopic[] {
  const r = asRecord(results)
  const raw = r?.recommendedTopics
  if (!Array.isArray(raw)) return []
  const out: RecommendedTopic[] = []
  for (const item of raw) {
    const t = asRecord(item)
    const slug = typeof t?.slug === 'string' ? t.slug : null
    if (!slug) continue
    const name = typeof t?.name === 'string' && t.name.trim() ? t.name : slug
    const priority = typeof t?.priority === 'string' ? t.priority : undefined
    out.push({ slug, name, priority })
  }
  return out
}

function parseWeakAreas(weakAreas: unknown): string[] {
  if (!Array.isArray(weakAreas)) return []
  return weakAreas.filter((w): w is string => typeof w === 'string' && w.trim().length > 0)
}

/**
 * Fetch the signed-in user's most recent diagnostic for a course and reduce it
 * to a focus summary. `categoryPrefix` is the diagnostic category stem for the
 * course (e.g. "ap-stats-diagnostic"; rows are stored as
 * "ap-stats-diagnostic-<form>").
 *
 * A course may also feed the plan from a SECONDARY assessment stored under a
 * different category stem (e.g. MCAT's full-length exam, "mcat-full-length",
 * which is distinct from the diagnostic's "mcat-full-diagnostic"). Pass an array
 * of prefixes to merge them: the most recent usable row per prefix contributes
 * its recommendedTopics/weakAreas, results are deduped by slug (and by area
 * string), and `takenAt` is the newest contributing row. A single string keeps
 * the original single-prefix behavior, so existing callers are unaffected.
 *
 * Returns null when there's no usable diagnostic for any prefix.
 */
export async function getDiagnosticFocus(
  userId: string,
  categoryPrefix: string | string[],
): Promise<DiagnosticFocus | null> {
  const prefixes = Array.isArray(categoryPrefix) ? categoryPrefix : [categoryPrefix]

  // One latest row per prefix (each prefix tracks an independent assessment, so
  // a stale row of one kind shouldn't hide a fresh row of another).
  const rows = await Promise.all(
    prefixes.map((prefix) =>
      prisma.diagnosticTest.findFirst({
        where: { userId, category: { startsWith: prefix } },
        orderBy: { createdAt: 'desc' },
        select: { results: true, weakAreas: true, createdAt: true },
      }),
    ),
  )

  const topicBySlug = new Map<string, RecommendedTopic>()
  const weakSet = new Set<string>()
  let takenAt: Date | null = null

  for (const row of rows) {
    if (!row) continue
    // Higher-priority entry for a slug wins if the same topic appears twice.
    const rank = (p?: string) => (p === 'high' ? 0 : p === 'medium' ? 1 : 2)
    for (const t of parseRecommendedTopics(row.results)) {
      const existing = topicBySlug.get(t.slug)
      if (!existing || rank(t.priority) < rank(existing.priority)) topicBySlug.set(t.slug, t)
    }
    for (const w of parseWeakAreas(row.weakAreas)) weakSet.add(w)
    if (!takenAt || row.createdAt > takenAt) takenAt = row.createdAt
  }

  const recommendedTopics = [...topicBySlug.values()]
  const weakAreas = [...weakSet]

  if ((recommendedTopics.length === 0 && weakAreas.length === 0) || !takenAt) return null

  return { weakAreas, recommendedTopics, takenAt }
}

/**
 * Build "Priority review" tasks for the student's weakest recommended topics.
 * High-priority topics come first; capped to `max` so the plan isn't flooded.
 * Pure — dates are derived from `startDate`.
 */
export function buildPriorityTasks(
  focus: DiagnosticFocus,
  startDate: Date,
  max = 3,
): ResolvedTask[] {
  const ranked = [...focus.recommendedTopics].sort((a, b) => {
    const score = (p?: string) => (p === 'high' ? 0 : p === 'medium' ? 1 : 2)
    return score(a.priority) - score(b.priority)
  })

  const seen = new Set<string>()
  const tasks: ResolvedTask[] = []
  for (const topic of ranked) {
    if (seen.has(topic.slug)) continue
    seen.add(topic.slug)
    const dueDate = new Date(startDate)
    dueDate.setDate(dueDate.getDate() + tasks.length) // spread across the first days
    tasks.push({
      title: `🎯 Priority review: ${topic.name}`,
      type: 'PRACTICE',
      topicSlug: topic.slug,
      dueDate,
      sortOrder: 0, // re-numbered by prependPriorityTasks
    })
    if (tasks.length >= max) break
  }
  return tasks
}

/**
 * Prepend priority tasks ahead of the resolved template tasks and re-number
 * sortOrder so the priority block leads. Pure.
 */
export function prependPriorityTasks(
  resolvedTasks: ResolvedTask[],
  priorityTasks: ResolvedTask[],
): ResolvedTask[] {
  if (priorityTasks.length === 0) return resolvedTasks
  return [...priorityTasks, ...resolvedTasks].map((task, i) => ({ ...task, sortOrder: i }))
}

/**
 * Convenience for adopt routes: given the resolved template tasks, fetch the
 * user's diagnostic focus for `categoryPrefix` and return the (possibly
 * unchanged) task list with priority tasks prepended. Never throws — on any
 * failure it returns the original tasks so plan adoption can't be broken by the
 * adaptive layer.
 */
export async function applyAdaptivePriority(
  userId: string,
  categoryPrefix: string | string[],
  resolvedTasks: ResolvedTask[],
  startDate: Date,
): Promise<{ tasks: ResolvedTask[]; focus: DiagnosticFocus | null }> {
  try {
    const focus = await getDiagnosticFocus(userId, categoryPrefix)
    if (!focus) return { tasks: resolvedTasks, focus: null }
    const priority = buildPriorityTasks(focus, startDate)
    return { tasks: prependPriorityTasks(resolvedTasks, priority), focus }
  } catch (err) {
    console.error('[adaptive-study-plan] failed, using static plan:', err)
    return { tasks: resolvedTasks, focus: null }
  }
}
