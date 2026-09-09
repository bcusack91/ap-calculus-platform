import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import {
  DEFAULT_MAX_REVIEWS_PER_DAY,
  DEFAULT_NEW_PER_DAY,
  MAX_REVIEWS_PER_DAY_MAX,
  MAX_REVIEWS_PER_DAY_MIN,
  NEW_PER_DAY_MAX,
  NEW_PER_DAY_MIN,
  effectiveDailyLimits,
} from '@/lib/flashcard-daily-limits'

/**
 * Anki-style flashcard daily-limit settings.
 *
 * GET  /api/flashcards/settings — the user's stored prefs (null = unset),
 *      the effective values, and the defaults/bounds for the UI.
 * PATCH /api/flashcards/settings — update either or both limits. A field set
 *      to null resets it to the code default; an omitted field is unchanged.
 *      Bounds: newPerDay 1-500, maxReviewsPerDay 10-1000.
 */

function settingsPayload(user: {
  flashcardNewPerDay: number | null
  flashcardMaxReviewsPerDay: number | null
}) {
  return {
    newPerDay: user.flashcardNewPerDay,
    maxReviewsPerDay: user.flashcardMaxReviewsPerDay,
    effective: effectiveDailyLimits(user),
    defaults: { newPerDay: DEFAULT_NEW_PER_DAY, maxReviewsPerDay: DEFAULT_MAX_REVIEWS_PER_DAY },
    bounds: {
      newPerDay: { min: NEW_PER_DAY_MIN, max: NEW_PER_DAY_MAX },
      maxReviewsPerDay: { min: MAX_REVIEWS_PER_DAY_MIN, max: MAX_REVIEWS_PER_DAY_MAX },
    },
  }
}

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { flashcardNewPerDay: true, flashcardMaxReviewsPerDay: true },
  })
  if (!user) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(settingsPayload(user))
}

/** null → reset to default; integer → clamp-checked; anything else → error. */
function parseLimit(value: unknown, min: number, max: number, label: string):
  | { ok: true; value: number | null }
  | { ok: false; error: string } {
  if (value === null) return { ok: true, value: null }
  const num = Number(value)
  if (!Number.isFinite(num) || !Number.isInteger(num)) {
    return { ok: false, error: `${label} must be a whole number` }
  }
  if (num < min || num > max) {
    return { ok: false, error: `${label} must be between ${min} and ${max}` }
  }
  return { ok: true, value: num }
}

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const data: { flashcardNewPerDay?: number | null; flashcardMaxReviewsPerDay?: number | null } = {}

  if ('newPerDay' in body) {
    const parsed = parseLimit(body.newPerDay, NEW_PER_DAY_MIN, NEW_PER_DAY_MAX, 'New cards per day')
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 })
    data.flashcardNewPerDay = parsed.value
  }
  if ('maxReviewsPerDay' in body) {
    const parsed = parseLimit(
      body.maxReviewsPerDay,
      MAX_REVIEWS_PER_DAY_MIN,
      MAX_REVIEWS_PER_DAY_MAX,
      'Max reviews per day',
    )
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 })
    data.flashcardMaxReviewsPerDay = parsed.value
  }

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data,
    select: { flashcardNewPerDay: true, flashcardMaxReviewsPerDay: true },
  })
  return NextResponse.json(settingsPayload(user))
}
