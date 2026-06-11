import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { parseBody } from '@/lib/validations'

const STATUSES = ['PUBLISHED', 'DRAFT', 'ARCHIVED'] as const

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
