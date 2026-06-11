import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { parseBody } from '@/lib/validations'

const STATUSES = ['PUBLISHED', 'DRAFT', 'ARCHIVED'] as const

// --- ISR revalidation for admin content writes -----------------------------
// (Kept in sync with src/app/api/admin/content/route.ts — route files can only
// export HTTP handlers/config, so the helper is duplicated rather than shared.)
// Public route suffix per ContentItem.type. courseSlug conventions per type
// come from the importers (prisma/import-practice.ts, import-frq.ts,
// import-study-plan-templates.ts, import-unit-tests.ts).
const TYPE_ROUTE_SUFFIX: Record<string, string> = {
  'practice-exam': '-practice', // courseSlug = practice dir prefix (ap-bio, act, psat, …)
  'study-plan-template': '-study-plans', // courseSlug = full course slug (ap-biology, …)
  frq: '-frq', // courseSlug = FRQ dir prefix (ap-calc-ab, ap-macro, …)
  'unit-test-units': '-unit-tests', // courseSlug = full course slug (ap-biology, …)
}

// study-plan-template and unit-test-units store the FULL course slug while the
// public routes use short prefixes (e.g. courseSlug 'ap-biology' →
// /ap-bio-study-plans, /ap-bio-unit-tests). Map long slugs to route prefixes.
const COURSE_SLUG_ROUTE_PREFIXES: Record<string, string[]> = {
  'act-prep': ['act'],
  'ap-african-american-studies': ['ap-aas'], // unit tests live at /ap-aas-unit-tests
  'ap-biology': ['ap-bio'],
  'ap-calculus-ab': ['ap-calcab'],
  'ap-calculus-bc': ['ap-calcbc'],
  'ap-chemistry': ['ap-chem'],
  'ap-computer-science-a': ['ap-csa'],
  'ap-computer-science-principles': ['ap-csp'],
  'ap-cs-principles': ['ap-csp'],
  'ap-english-language': ['ap-english-lang'],
  'ap-english-literature': ['ap-english-lit'],
  'ap-environmental-science': ['ap-enviro'],
  'ap-human-geography': ['ap-human-geo'],
  'ap-macroeconomics': ['ap-macro'],
  'ap-microeconomics': ['ap-micro'],
  'ap-physics-1': ['ap-physics1'],
  'ap-physics-2': ['ap-physics2'],
  'ap-precalculus': ['ap-precalc'],
  'ap-psychology': ['ap-psych'],
  'ap-statistics': ['ap-stats'],
  'ap-us-government': ['ap-us-gov'],
}

/**
 * Revalidate the public page(s) backed by a ContentItem so admin edits are
 * visible without waiting out ISR. We revalidate both the raw courseSlug and
 * any short route alias; revalidatePath() on a path that doesn't exist as a
 * route is a harmless no-op, so no existence check is needed.
 */
function revalidateContentPages(type: string, courseSlug: string) {
  const suffix = TYPE_ROUTE_SUFFIX[type]
  if (!suffix) return
  const prefixes = new Set([courseSlug, ...(COURSE_SLUG_ROUTE_PREFIXES[courseSlug] ?? [])])
  for (const prefix of prefixes) revalidatePath(`/${prefix}${suffix}`)
}
// ---------------------------------------------------------------------------

const updateSchema = z
  .object({
    payload: z.unknown().optional(),
    status: z.enum(STATUSES).optional(),
  })
  .refine((v) => v.payload !== undefined || v.status !== undefined, 'Nothing to update')

// GET /api/admin/content/:id — fetch one item incl. full payload
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error
  const { id } = await params

  const item = await prisma.contentItem.findUnique({ where: { id } })
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ item })
}

// PUT /api/admin/content/:id — update payload and/or status
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error
  const { user } = authResult
  const { id } = await params

  const parsed = parseBody(updateSchema, await request.json())
  if (!parsed.success) return NextResponse.json({ error: parsed.error }, { status: 400 })
  const { payload, status } = parsed.data

  const before = await prisma.contentItem.findUnique({
    where: { id },
    select: { status: true, version: true },
  })
  if (!before) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const item = await prisma.contentItem.update({
    where: { id },
    data: {
      ...(payload !== undefined ? { payload: payload as object } : {}),
      ...(status !== undefined ? { status } : {}),
      // Bump version whenever the content body changes.
      ...(payload !== undefined ? { version: { increment: 1 } } : {}),
      updatedBy: user.id,
    },
  })

  // Surface the edit on the public page without waiting out ISR.
  revalidateContentPages(item.type, item.courseSlug)

  await prisma.adminAuditLog
    .create({
      data: {
        action: 'content.update',
        actorId: user.id,
        actorEmail: user.email ?? null,
        targetId: item.id,
        details: {
          type: item.type,
          courseSlug: item.courseSlug,
          key: item.key,
          payloadChanged: payload !== undefined,
          status: status !== undefined ? { from: before.status, to: status } : undefined,
        },
      },
    })
    .catch((e) => console.error('[audit] content.update failed:', e))

  return NextResponse.json({ item })
}

// DELETE /api/admin/content/:id
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error
  const { user } = authResult
  const { id } = await params

  const existing = await prisma.contentItem.findUnique({
    where: { id },
    select: { type: true, courseSlug: true, key: true },
  })
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  await prisma.contentItem.delete({ where: { id } })

  // The public page falls back to static content once the row is gone —
  // revalidate so the deletion takes effect immediately.
  revalidateContentPages(existing.type, existing.courseSlug)

  await prisma.adminAuditLog
    .create({
      data: {
        action: 'content.delete',
        actorId: user.id,
        actorEmail: user.email ?? null,
        targetId: id,
        details: { type: existing.type, courseSlug: existing.courseSlug, key: existing.key },
      },
    })
    .catch((e) => console.error('[audit] content.delete failed:', e))

  return NextResponse.json({ ok: true })
}
