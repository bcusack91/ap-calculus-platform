import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { parseBody } from '@/lib/validations'

const STATUSES = ['PUBLISHED', 'DRAFT', 'ARCHIVED'] as const

// --- ISR revalidation for admin content writes -----------------------------
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

const createSchema = z.object({
  type: z.string().min(1).max(120),
  courseSlug: z.string().min(1).max(120),
  key: z.string().min(1).max(200),
  payload: z.unknown().refine((v) => v !== undefined && v !== null, 'payload is required'),
  status: z.enum(STATUSES).optional().default('DRAFT'),
})

// GET /api/admin/content?type=&courseSlug=  — list content items (admin)
export async function GET(request: NextRequest) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  const type = request.nextUrl.searchParams.get('type') || undefined
  const courseSlug = request.nextUrl.searchParams.get('courseSlug') || undefined

  const items = await prisma.contentItem.findMany({
    where: { type, courseSlug },
    orderBy: [{ type: 'asc' }, { courseSlug: 'asc' }, { key: 'asc' }],
    select: { id: true, type: true, courseSlug: true, key: true, status: true, version: true, updatedAt: true },
  })
  return NextResponse.json({ items })
}

// POST /api/admin/content  — create a content item (admin)
export async function POST(request: NextRequest) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const parsed = parseBody(createSchema, await request.json())
  if (!parsed.success) return NextResponse.json({ error: parsed.error }, { status: 400 })
  const { type, courseSlug, key, payload, status } = parsed.data

  // Enforce the (type, courseSlug, key) uniqueness with a friendly error.
  const existing = await prisma.contentItem.findUnique({
    where: { type_courseSlug_key: { type, courseSlug, key } },
    select: { id: true },
  })
  if (existing) {
    return NextResponse.json({ error: 'An item with this type/course/key already exists' }, { status: 409 })
  }

  const item = await prisma.contentItem.create({
    data: { type, courseSlug, key, payload: payload as object, status, updatedBy: user.id },
  })

  // New PUBLISHED content should show on the public page immediately.
  revalidateContentPages(type, courseSlug)

  await prisma.adminAuditLog
    .create({
      data: {
        action: 'content.create',
        actorId: user.id,
        actorEmail: user.email ?? null,
        targetId: item.id,
        details: { type, courseSlug, key, status },
      },
    })
    .catch((e) => console.error('[audit] content.create failed:', e))

  return NextResponse.json({ item }, { status: 201 })
}
