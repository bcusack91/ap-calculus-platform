import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import {
  DEFAULT_MAX_REVIEWS_PER_DAY,
  DEFAULT_NEW_PER_DAY,
  MAX_REVIEWS_PER_DAY_MAX,
  MAX_REVIEWS_PER_DAY_MIN,
  NEW_PER_DAY_MAX,
  NEW_PER_DAY_MIN,
  effectiveDailyLimits,
} from '@/lib/flashcard-daily-limits'

interface Ctx { params: Promise<{ id: string }> }

/**
 * Class-wide flashcard daily limits (teacher + co-teacher).
 *
 * The limits are per-student fields (User.flashcardNewPerDay /
 * User.flashcardMaxReviewsPerDay, null = code default) that are only ever READ
 * through effectiveDailyLimits(). This route is a teacher-side WRITER for those
 * same fields — not a second source of truth — so the student's own control on
 * /flashcards/review and the review queue keep seeing exactly what is stored.
 *
 * GET   — per active member: display name, effective limits, and whether each
 *         one is the code default or a stored override. The DB cannot tell a
 *         teacher-set value from a student-set one, so both read "override".
 * PATCH — { newPerDay?, maxReviewsPerDay?, studentIds? } writes the given
 *         limit(s), rounded and clamped to the bounds, for every active member
 *         or only the listed ones. A field set to null clears that one field;
 *         { reset: true, studentIds? } clears both. The payload is validated in
 *         full BEFORE the single updateMany, so a bad payload writes nothing.
 *         404 when any studentId is not an active member of this class.
 */

const NO_STORE = { headers: { 'Cache-Control': 'private, no-store' } }

type LimitSource = 'default' | 'override'

function sourceOf(stored: number | null): LimitSource {
  return stored == null ? 'default' : 'override'
}

async function classSnapshot(classroomId: string) {
  const members = await prisma.classroomMember.findMany({
    where: { classroomId, isActive: true },
    select: {
      userId: true,
      nickname: true,
      user: { select: { name: true, flashcardNewPerDay: true, flashcardMaxReviewsPerDay: true } },
    },
  })

  const students = members
    .map(m => {
      const effective = effectiveDailyLimits(m.user)
      return {
        userId: m.userId,
        name: m.nickname || m.user.name || 'Student',
        newPerDay: { effective: effective.newPerDay, source: sourceOf(m.user.flashcardNewPerDay) },
        maxReviewsPerDay: {
          effective: effective.maxReviewsPerDay,
          source: sourceOf(m.user.flashcardMaxReviewsPerDay),
        },
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  const custom = students.filter(
    s => s.newPerDay.source === 'override' || s.maxReviewsPerDay.source === 'override',
  ).length

  return {
    defaults: { newPerDay: DEFAULT_NEW_PER_DAY, maxReviewsPerDay: DEFAULT_MAX_REVIEWS_PER_DAY },
    bounds: {
      newPerDay: { min: NEW_PER_DAY_MIN, max: NEW_PER_DAY_MAX },
      maxReviewsPerDay: { min: MAX_REVIEWS_PER_DAY_MIN, max: MAX_REVIEWS_PER_DAY_MAX },
    },
    summary: { total: students.length, onDefaults: students.length - custom, custom },
    students,
  }
}

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  return NextResponse.json(await classSnapshot(id), NO_STORE)
}

// ---------------------------------------------------------------------------
// PATCH
// ---------------------------------------------------------------------------

interface LimitWrite {
  flashcardNewPerDay?: number | null
  flashcardMaxReviewsPerDay?: number | null
}

type ParsedBody =
  | { ok: true; data: LimitWrite; studentIds: string[] | null; reset: boolean }
  | { ok: false; error: string }

function clampLimit(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(value)))
}

/** null → clear that field; finite number → rounded + clamped; else → error. */
function parseLimit(value: unknown, min: number, max: number, label: string):
  | { ok: true; value: number | null }
  | { ok: false; error: string } {
  if (value === null) return { ok: true, value: null }
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return { ok: false, error: `${label} must be a number (or null to use the default)` }
  }
  return { ok: true, value: clampLimit(value, min, max) }
}

/**
 * Validate the whole payload up front. Nothing here touches the DB, so any
 * `ok: false` result means nothing was written.
 */
function parseBody(body: unknown): ParsedBody {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'Invalid request body' }
  }
  const b = body as Record<string, unknown>

  let studentIds: string[] | null = null
  if (b.studentIds !== undefined) {
    if (
      !Array.isArray(b.studentIds) ||
      b.studentIds.length === 0 ||
      !b.studentIds.every(s => typeof s === 'string' && s.length > 0)
    ) {
      return { ok: false, error: 'studentIds must be a non-empty list of student ids' }
    }
    studentIds = [...new Set(b.studentIds as string[])]
  }

  if (b.reset !== undefined && typeof b.reset !== 'boolean') {
    return { ok: false, error: 'reset must be true or false' }
  }
  const reset = b.reset === true
  const hasNew = b.newPerDay !== undefined
  const hasReviews = b.maxReviewsPerDay !== undefined

  if (reset) {
    if (hasNew || hasReviews) {
      return { ok: false, error: 'reset cannot be combined with newPerDay or maxReviewsPerDay' }
    }
    return {
      ok: true,
      reset: true,
      studentIds,
      data: { flashcardNewPerDay: null, flashcardMaxReviewsPerDay: null },
    }
  }

  if (!hasNew && !hasReviews) {
    return { ok: false, error: 'Provide newPerDay and/or maxReviewsPerDay, or reset: true' }
  }

  const data: LimitWrite = {}
  if (hasNew) {
    const parsed = parseLimit(b.newPerDay, NEW_PER_DAY_MIN, NEW_PER_DAY_MAX, 'newPerDay')
    if (!parsed.ok) return parsed
    data.flashcardNewPerDay = parsed.value
  }
  if (hasReviews) {
    const parsed = parseLimit(
      b.maxReviewsPerDay,
      MAX_REVIEWS_PER_DAY_MIN,
      MAX_REVIEWS_PER_DAY_MAX,
      'maxReviewsPerDay',
    )
    if (!parsed.ok) return parsed
    data.flashcardMaxReviewsPerDay = parsed.value
  }
  return { ok: true, reset: false, studentIds, data }
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
  const parsed = parseBody(raw)
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 })

  const members = await prisma.classroomMember.findMany({
    where: { classroomId: id, isActive: true },
    select: { userId: true },
  })
  const activeIds = members.map(m => m.userId)

  let targets: string[]
  if (parsed.studentIds) {
    const active = new Set(activeIds)
    const missing = parsed.studentIds.filter(s => !active.has(s))
    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'Student not in this class', studentIds: missing },
        { status: 404 },
      )
    }
    targets = parsed.studentIds
  } else {
    targets = activeIds
  }

  // One statement for the whole batch: it either applies to every target or
  // to none of them.
  let updated = 0
  if (targets.length > 0) {
    const result = await prisma.user.updateMany({ where: { id: { in: targets } }, data: parsed.data })
    updated = result.count
  }

  const snapshot = await classSnapshot(id)
  return NextResponse.json({ updated, reset: parsed.reset, ...snapshot }, NO_STORE)
}
