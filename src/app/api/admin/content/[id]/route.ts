import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { parseBody } from '@/lib/validations'

const STATUSES = ['PUBLISHED', 'DRAFT', 'ARCHIVED'] as const

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
