import { prisma } from '@/lib/prisma'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { isEntranceMastery } from '@/lib/flashcard-unlock'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { canonicalizeSlug, satPlanCandidatePool, slugToName } from '@/data/sat-practice/diagnostic-generator'
import { HARD_MODULE_CATEGORY, hardTrackStatus } from '@/data/sat-practice/hard-modules'
import {
  CORE_MODULE_CATEGORY,
  coreSkillsTrackStatus,
  parseSatTrackOverride,
  type CoreSkillsTrackStatus,
} from '@/data/sat-practice/core-skills-modules'

/**
 * The SAT study plan: which topics this diagnostic cycle asks for, routed to
 * the student's track, with per-topic done/pending state.
 *
 * One builder for every surface. The SAT page (/api/sat-diagnostic/plan-status)
 * and the dashboard (/api/study-plan/plan-status) used to compute this
 * separately; the dashboard never applied track routing, so a Core Skills
 * student was sent to the 7-part regular lessons from the dashboard while the
 * SAT page sent them to the 2-part Core Skills ones.
 */

export type SatLane = 'core-skills' | 'advanced' | 'regular'

type RecommendedTopic = { slug: string; name: string; priority: 'high' | 'medium' | 'low' }

export const SAT_REQUIRED_SCORE_PERCENT = TOPIC_CLEAR_PERCENT

/**
 * The diagnostic can recommend six slugs that have no track twin of their own.
 * Each is a narrower cut of a topic that does, so track students are routed to
 * the lesson covering the same skill rather than dropped back into the general
 * lane. (Subject-verb agreement and the other grammar slugs are taught inside
 * the sentence-structure bundle.)
 */
export const TRACK_SLUG_ALIASES: Record<string, string> = {
  'sat-finding-textual-evidence': 'sat-command-evidence',
  'sat-conciseness-redundancy': 'sat-effective-language-use',
  'sat-punctuation-commas-semicolons': 'sat-punctuation',
  'sat-grammar-usage': 'sat-sentence-structure',
  'sat-grammar-conventions': 'sat-sentence-structure',
  'sat-subject-verb-agreement': 'sat-sentence-structure',
}

const LANE_SUFFIX: Record<SatLane, string> = {
  'core-skills': '-core-skills',
  advanced: '-advanced',
  regular: '',
}

/** The track twin a base slug would route to (existence is checked by the caller). */
export function trackSlugFor(baseSlug: string, lane: SatLane): string {
  if (lane === 'regular') return baseSlug
  return `${TRACK_SLUG_ALIASES[baseSlug] ?? baseSlug}${LANE_SUFFIX[lane]}`
}

const priorityValue = (p: RecommendedTopic['priority']) => (p === 'high' ? 0 : p === 'medium' ? 1 : 2)

function parseRecommended(results: unknown): RecommendedTopic[] {
  if (!results || typeof results !== 'object') return []
  const raw = (results as { recommendedTopics?: unknown }).recommendedTopics
  if (!Array.isArray(raw)) return []
  const out: RecommendedTopic[] = []
  for (const t of raw) {
    if (!t || typeof t !== 'object') continue
    const { slug, name, priority } = t as { slug?: unknown; name?: unknown; priority?: unknown }
    if (typeof slug !== 'string' || !slug) continue
    // Older attempts stored pseudo slugs ('grid-in-algebra'); resolve them to
    // the lesson they stand for, the same way fresh results are built.
    const real = canonicalizeSlug(slug)
    out.push({
      slug: real,
      // A remapped slug's stored name described the old pseudo topic.
      name: real === slug && typeof name === 'string' && name ? name : slugToName(real),
      priority: priority === 'high' || priority === 'low' ? priority : 'medium',
    })
  }
  return out
}

function parseDomains(results: unknown): { domainId: string; level: string }[] {
  if (!results || typeof results !== 'object') return []
  const raw = (results as { domains?: unknown }).domains
  if (!Array.isArray(raw)) return []
  return raw.flatMap((d) => {
    if (!d || typeof d !== 'object') return []
    const { domainId, level } = d as { domainId?: unknown; level?: unknown }
    return typeof domainId === 'string' && typeof level === 'string' ? [{ domainId, level }] : []
  })
}

/**
 * Which lane the student studies in. Placement is a property of the STUDENT,
 * not of the last attempt: a teacher override wins, then Core Skills placement,
 * then the 700-800 lane for anyone whose latest regular screen qualifies for
 * the hard track (or whose latest attempt was a hard module). Before this, the
 * hard lane followed the last attempt only, so the next assigned class
 * diagnostic dropped a 1450 student back into 7-part regular lessons.
 */
export function satLane(opts: {
  override: string | null
  core: CoreSkillsTrackStatus
  latestIsHardModule: boolean
  hardTrackUnlocked: boolean
}): SatLane {
  if (opts.override === 'advanced') return 'advanced'
  if (opts.override === 'regular') return 'regular'
  if (opts.core.placed) return 'core-skills'
  if (opts.latestIsHardModule || opts.hardTrackUnlocked) return 'advanced'
  return 'regular'
}

/**
 * Fill this cycle's plan, PREFERRING topics the student has not already
 * cleared. Ported from the MCAT fix (selectPlanTopics): the scorer rebuilds
 * recommendations from the new attempt's misses with no notion of what the
 * student already mastered, so cycle 2 could hand back topics cycle 1 had just
 * cleared — satisfied on arrival, with no new work.
 *
 * `isStale` asks "was this cleared BEFORE this diagnostic?", not "is it cleared
 * now", so finishing a topic during the cycle marks it done instead of
 * swapping it for another (a treadmill the plan could never finish). Never
 * returns fewer than `limit` while candidates exist; already-cleared topics are
 * restored last rather than leaving the plan short.
 */
export function selectSatPlanTopics(opts: {
  recommended: RecommendedTopic[]
  pool: RecommendedTopic[]
  isStale: (slug: string) => boolean
  limit: number
}): RecommendedTopic[] {
  const { recommended, pool, isStale, limit } = opts
  const seen = new Set<string>()
  const fresh: RecommendedTopic[] = []
  const stale: RecommendedTopic[] = []
  for (const t of recommended) {
    if (seen.has(t.slug)) continue
    seen.add(t.slug)
    ;(isStale(t.slug) ? stale : fresh).push(t)
  }
  const selected = fresh.slice(0, limit)
  for (const c of pool) {
    if (selected.length >= limit) break
    if (seen.has(c.slug) || isStale(c.slug)) continue
    seen.add(c.slug)
    selected.push(c)
  }
  for (const t of stale) {
    if (selected.length >= limit) break
    selected.push(t)
  }
  return selected
}

export type SatPlanTopic = RecommendedTopic & {
  topicPath: string
  topicFound: boolean
  masteryLevel: number
  entranceSatisfied: boolean
  bestExitScorePercent: number | null
  bestExitScore: string | null
  bestExitCompletedAt: Date | null
  exitSatisfied: boolean
  isSatisfied: boolean
}

export type SatPlan =
  | {
      hasDiagnostic: false
      canRetakeDiagnostic: true
      requiredScorePercent: number
      lane: SatLane
      recommendedTopics: []
      pendingTopics: []
    }
  | {
      hasDiagnostic: true
      diagnosticId: string
      diagnosticCreatedAt: Date
      planSource: 'core-skills' | 'hard' | 'regular'
      lane: SatLane
      coreSkills: {
        placed: boolean
        graduated: boolean
        bestModuleScore: number | null
        pointsToGraduate: number | null
        completedModules: number
        nextModule: number | null
        source: CoreSkillsTrackStatus['source']
      }
      canRetakeDiagnostic: boolean
      requiredScorePercent: number
      recommendedTopics: SatPlanTopic[]
      pendingTopics: SatPlanTopic[]
      summary: { totalRecommended: number; completed: number; pending: number }
    }

export async function buildSatPlan(userId: string): Promise<SatPlan> {
  const [latestDiagnostic, user, regularAttempts, coreModuleAttempts, hardModuleAttempts] = await Promise.all([
    prisma.diagnosticTest.findFirst({
      // The plan follows the student's LATEST diagnostic attempt of any kind:
      // the regular screen, a hard-track module, or a Core Skills module.
      where: {
        userId,
        OR: [
          { category: 'sat-full-diagnostic' },
          { category: { startsWith: HARD_MODULE_CATEGORY } },
          { category: { startsWith: CORE_MODULE_CATEGORY } },
        ],
      },
      orderBy: { createdAt: 'desc' },
      select: { id: true, category: true, createdAt: true, results: true },
    }),
    prisma.user.findUnique({ where: { id: userId }, select: { satTrackOverride: true } }),
    prisma.diagnosticTest.findMany({
      where: { userId, category: 'sat-full-diagnostic' },
      orderBy: { createdAt: 'desc' },
      select: { results: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { userId, category: { startsWith: CORE_MODULE_CATEGORY } },
      orderBy: { createdAt: 'desc' },
      select: { category: true, results: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { userId, category: { startsWith: HARD_MODULE_CATEGORY } },
      select: { category: true },
    }),
  ])

  const override = parseSatTrackOverride(user?.satTrackOverride ?? null)
  const coreStatus = coreSkillsTrackStatus(regularAttempts, coreModuleAttempts, override)
  const lane = satLane({
    override,
    core: coreStatus,
    latestIsHardModule: !!latestDiagnostic?.category.startsWith(HARD_MODULE_CATEGORY),
    hardTrackUnlocked: hardTrackStatus(regularAttempts, hardModuleAttempts).unlocked,
  })

  if (!latestDiagnostic) {
    return {
      hasDiagnostic: false,
      canRetakeDiagnostic: true,
      requiredScorePercent: SAT_REQUIRED_SCORE_PERCENT,
      lane,
      recommendedTopics: [],
      pendingTopics: [],
    }
  }

  // Stored recommendations, deduped at their best priority.
  const deduped = new Map<string, RecommendedTopic>()
  for (const t of parseRecommended(latestDiagnostic.results)) {
    const existing = deduped.get(t.slug)
    if (!existing || priorityValue(t.priority) < priorityValue(existing.priority)) deduped.set(t.slug, t)
  }
  const stored = Array.from(deduped.values()).sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority))
  const pool = satPlanCandidatePool(parseDomains(latestDiagnostic.results))

  // Route every candidate (stored + backfill pool) to the student's lane, but
  // only where that lane's twin actually exists; otherwise the base lesson
  // stands in.
  const baseSlugs = Array.from(new Set([...stored, ...pool].map((t) => t.slug)))
  const routedCandidates = lane === 'regular' ? [] : baseSlugs.map((s) => trackSlugFor(s, lane))
  const topicRows = await prisma.topic.findMany({
    where: { slug: { in: Array.from(new Set([...baseSlugs, ...routedCandidates])) } },
    select: { id: true, slug: true, title: true },
  })
  const topicBySlug = new Map(topicRows.map((t) => [t.slug, t]))
  const route = (t: RecommendedTopic): RecommendedTopic => {
    if (lane === 'regular') return t
    const twin = topicBySlug.get(trackSlugFor(t.slug, lane))
    return twin ? { ...t, slug: twin.slug, name: twin.title } : t
  }
  // Several base slugs can alias onto one track lesson; keep the first (the
  // list is already in priority order).
  const collapse = (list: RecommendedTopic[]) => {
    const out = new Map<string, RecommendedTopic>()
    for (const t of list.map(route)) if (!out.has(t.slug)) out.set(t.slug, t)
    return Array.from(out.values())
  }
  const routedStored = collapse(stored)
  const routedPool = collapse(pool)

  if (routedStored.length === 0) {
    return {
      hasDiagnostic: true,
      diagnosticId: latestDiagnostic.id,
      diagnosticCreatedAt: latestDiagnostic.createdAt,
      planSource: lane === 'core-skills' ? 'core-skills' : lane === 'advanced' ? 'hard' : 'regular',
      lane,
      coreSkills: coreSummary(coreStatus),
      canRetakeDiagnostic: true,
      requiredScorePercent: SAT_REQUIRED_SCORE_PERCENT,
      recommendedTopics: [],
      pendingTopics: [],
      summary: { totalRecommended: 0, completed: 0, pending: 0 },
    }
  }

  const universe = Array.from(new Set([...routedStored, ...routedPool].map((t) => t.slug)))
  const universeTopics = topicRows.filter((t) => universe.includes(t.slug))
  const topicIdToSlug = new Map(universeTopics.map((t) => [t.id, t.slug]))

  const [progressRows, exitAttempts] = await Promise.all([
    prisma.topicProgress.findMany({
      where: { userId, topicId: { in: universeTopics.map((t) => t.id) } },
      select: { topicId: true, masteryLevel: true, masteredParts: true, completedAt: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { userId, topicSlug: { in: universe } },
      orderBy: { completedAt: 'desc' },
      select: { topicSlug: true, score: true, totalQuestions: true, completedAt: true },
    }),
  ])

  const progressBySlug = new Map<string, (typeof progressRows)[number]>()
  for (const row of progressRows) {
    const slug = topicIdToSlug.get(row.topicId)
    if (slug) progressBySlug.set(slug, row)
  }

  const bestExitBySlug = new Map<string, { scorePercent: number; score: number; totalQuestions: number; completedAt: Date }>()
  // First time the topic was PASSED: passing attempts are immutable, so this is
  // stable across requests (TopicProgress.completedAt is re-stamped on saves).
  const firstPassAtBySlug = new Map<string, Date>()
  for (const a of exitAttempts) {
    if (!a.totalQuestions || a.totalQuestions <= 0) continue
    const pct = Math.round((a.score / a.totalQuestions) * 100)
    const existing = bestExitBySlug.get(a.topicSlug)
    if (!existing || pct > existing.scorePercent) {
      bestExitBySlug.set(a.topicSlug, { scorePercent: pct, score: a.score, totalQuestions: a.totalQuestions, completedAt: a.completedAt })
    }
    if (pct >= SAT_REQUIRED_SCORE_PERCENT) {
      const first = firstPassAtBySlug.get(a.topicSlug)
      if (!first || a.completedAt < first) firstPassAtBySlug.set(a.topicSlug, a.completedAt)
    }
  }

  // An entrance-quiz test-out clears a topic without its exit quiz; finishing
  // the lesson does NOT (it also reaches masteryLevel 1).
  const entranceMastered = (slug: string) => {
    const p = progressBySlug.get(slug)
    return !!p && isEntranceMastery({ topicSlug: slug, masteryLevel: p.masteryLevel, masteredParts: p.masteredParts })
  }
  // Topics with no exit quiz can never produce an attempt, so the lesson alone
  // has to clear them or the plan can never be completed.
  const quizlessLessonDone = (slug: string) => !hasExitQuiz(slug) && (progressBySlug.get(slug)?.masteryLevel ?? 0) >= 1

  const takenAt = latestDiagnostic.createdAt.getTime()
  const clearedBeforeThisDiagnostic = (slug: string) => {
    const firstPass = firstPassAtBySlug.get(slug)
    if (firstPass && firstPass.getTime() <= takenAt) return true
    const completedAt = progressBySlug.get(slug)?.completedAt
    if (!completedAt || completedAt.getTime() > takenAt) return false
    return entranceMastered(slug) || quizlessLessonDone(slug)
  }

  const selected = selectSatPlanTopics({
    recommended: routedStored,
    pool: routedPool,
    isStale: clearedBeforeThisDiagnostic,
    // Keep the plan the size the scorer chose (it caps at 5): swap pre-cleared
    // slots for real work rather than padding a short plan out.
    limit: Math.min(5, routedStored.length),
  })

  const recommendedTopics: SatPlanTopic[] = selected.map((topic) => {
    const progress = progressBySlug.get(topic.slug)
    const masteryLevel = progress?.masteryLevel ?? 0
    const bestExit = bestExitBySlug.get(topic.slug)
    const entranceSatisfied = entranceMastered(topic.slug)
    const exitSatisfied = (bestExit?.scorePercent ?? 0) >= SAT_REQUIRED_SCORE_PERCENT
    return {
      ...topic,
      topicPath: `/topics/${topic.slug}`,
      topicFound: topicBySlug.has(topic.slug),
      masteryLevel,
      entranceSatisfied,
      bestExitScorePercent: bestExit?.scorePercent ?? null,
      bestExitScore: bestExit ? `${bestExit.score}/${bestExit.totalQuestions}` : null,
      bestExitCompletedAt: bestExit?.completedAt ?? null,
      exitSatisfied,
      isSatisfied: entranceSatisfied || exitSatisfied || quizlessLessonDone(topic.slug),
    }
  })
  const pendingTopics = recommendedTopics.filter((t) => !t.isSatisfied)

  return {
    hasDiagnostic: true,
    diagnosticId: latestDiagnostic.id,
    diagnosticCreatedAt: latestDiagnostic.createdAt,
    /** 'hard' when the student studies in the 700-800 lane. */
    planSource: lane === 'core-skills' ? 'core-skills' : lane === 'advanced' ? 'hard' : 'regular',
    lane,
    coreSkills: coreSummary(coreStatus),
    canRetakeDiagnostic: pendingTopics.length === 0,
    requiredScorePercent: SAT_REQUIRED_SCORE_PERCENT,
    recommendedTopics,
    pendingTopics,
    summary: {
      totalRecommended: recommendedTopics.length,
      completed: recommendedTopics.length - pendingTopics.length,
      pending: pendingTopics.length,
    },
  }
}

function coreSummary(s: CoreSkillsTrackStatus) {
  return {
    placed: s.placed,
    graduated: s.graduated,
    bestModuleScore: s.bestModuleScore,
    pointsToGraduate: s.pointsToGraduate,
    completedModules: s.completedModules,
    nextModule: s.nextModule,
    source: s.source,
  }
}

export type SatPlacement = {
  userId: string
  lane: SatLane
  override: 'core-skills' | 'regular' | 'advanced' | null
  /** What decided the lane: a teacher override, the student's diagnostics, or nothing yet. */
  source: 'override' | 'diagnostic' | 'none'
  latestRegularScore: number | null
  regularAttempts: number
}

/**
 * Lane for many students at once (the teacher's class roster), using the same
 * rules as buildSatPlan: two queries however large the class is.
 */
export async function satPlacementsFor(userIds: string[]): Promise<SatPlacement[]> {
  if (userIds.length === 0) return []
  const [users, attempts] = await Promise.all([
    prisma.user.findMany({ where: { id: { in: userIds } }, select: { id: true, satTrackOverride: true } }),
    prisma.diagnosticTest.findMany({
      where: {
        userId: { in: userIds },
        OR: [
          { category: 'sat-full-diagnostic' },
          { category: { startsWith: HARD_MODULE_CATEGORY } },
          { category: { startsWith: CORE_MODULE_CATEGORY } },
        ],
      },
      orderBy: { createdAt: 'desc' },
      select: { userId: true, category: true, results: true },
    }),
  ])
  const overrideBy = new Map(users.map((u) => [u.id, parseSatTrackOverride(u.satTrackOverride)]))
  const byUser = new Map<string, typeof attempts>()
  for (const a of attempts) {
    const list = byUser.get(a.userId) ?? []
    list.push(a)
    byUser.set(a.userId, list)
  }
  return userIds.map((userId) => {
    const mine = byUser.get(userId) ?? []
    const regular = mine.filter((a) => a.category === 'sat-full-diagnostic')
    const core = mine.filter((a) => a.category.startsWith(CORE_MODULE_CATEGORY))
    const hard = mine.filter((a) => a.category.startsWith(HARD_MODULE_CATEGORY))
    const override = overrideBy.get(userId) ?? null
    const coreStatus = coreSkillsTrackStatus(regular, core, override)
    const lane = satLane({
      override,
      core: coreStatus,
      latestIsHardModule: !!mine[0]?.category.startsWith(HARD_MODULE_CATEGORY),
      hardTrackUnlocked: hardTrackStatus(regular, hard).unlocked,
    })
    const latest = regular[0]?.results as { estimatedScore?: unknown } | undefined
    return {
      userId,
      lane,
      override,
      source: override ? 'override' : mine.length > 0 ? 'diagnostic' : 'none',
      latestRegularScore: typeof latest?.estimatedScore === 'number' ? latest.estimatedScore : null,
      regularAttempts: regular.length,
    }
  })
}
