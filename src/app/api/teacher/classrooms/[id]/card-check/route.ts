import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import {
  CARD_CHECK_AFTER_REVIEWS_MAX,
  CARD_CHECK_AFTER_REVIEWS_MIN,
  CARD_CHECK_DEFAULT_AFTER_REVIEWS,
} from '@/lib/flashcard-check-core'

interface Ctx { params: Promise<{ id: string }> }

const NO_STORE = { headers: { 'Cache-Control': 'private, no-store' } }

/**
 * The class's daily-card-check setting (teacher + co-teacher): how many
 * reviews in a day (repeats count) let a student with a backlog take the
 * check before their cards are finished.
 *
 * GET   — { afterReviews: number | null, effective, default, min, max }
 * PATCH — { afterReviews: number | null }  (null = back to the site default)
 */
async function snapshot(classroomId: string) {
  const c = await prisma.classroom.findUnique({ where: { id: classroomId }, select: { cardCheckAfterReviews: true } })
  const stored = c?.cardCheckAfterReviews ?? null
  return {
    afterReviews: stored,
    effective: stored ?? CARD_CHECK_DEFAULT_AFTER_REVIEWS,
    default: CARD_CHECK_DEFAULT_AFTER_REVIEWS,
    min: CARD_CHECK_AFTER_REVIEWS_MIN,
    max: CARD_CHECK_AFTER_REVIEWS_MAX,
  }
}

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error
  return NextResponse.json(await snapshot(id), NO_STORE)
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error
  const body = (await req.json().catch(() => null)) as { afterReviews?: unknown } | null
  const v = body?.afterReviews
  if (v !== null && (typeof v !== 'number' || !Number.isFinite(v))) {
    return NextResponse.json({ error: 'afterReviews must be a number, or null for the default' }, { status: 400 })
  }
  const value = v === null ? null : Math.round(v as number)
  if (value !== null && (value < CARD_CHECK_AFTER_REVIEWS_MIN || value > CARD_CHECK_AFTER_REVIEWS_MAX)) {
    return NextResponse.json({ error: `Choose a number from ${CARD_CHECK_AFTER_REVIEWS_MIN} to ${CARD_CHECK_AFTER_REVIEWS_MAX}` }, { status: 400 })
  }
  await prisma.classroom.update({ where: { id }, data: { cardCheckAfterReviews: value } })
  return NextResponse.json(await snapshot(id), NO_STORE)
}
