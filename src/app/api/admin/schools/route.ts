import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'

/**
 * GET  /api/admin/schools — list schools (with classroom/user counts) for admin.
 * POST /api/admin/schools — create a school { name, district?, state? }.
 * Schools + their `district` are what the district-rollup aggregates by, so this
 * is how that view gets real data.
 */
export async function GET() {
  const auth = await requireAdmin()
  if ('error' in auth) return auth.error

  const schools = await prisma.school.findMany({
    orderBy: [{ district: 'asc' }, { name: 'asc' }],
    select: {
      id: true, name: true, district: true, state: true,
      _count: { select: { classrooms: true, users: true } },
    },
  })
  return NextResponse.json({ schools })
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin()
  if ('error' in auth) return auth.error

  const body = await req.json().catch(() => ({}))
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const district = typeof body?.district === 'string' ? body.district.trim() : ''
  const state = typeof body?.state === 'string' ? body.state.trim() : ''

  if (name.length < 2) {
    return NextResponse.json({ error: 'School name is required (min 2 characters).' }, { status: 400 })
  }

  const school = await prisma.school.create({
    data: { name, district: district || null, state: state || null },
    select: { id: true, name: true, district: true, state: true },
  })
  return NextResponse.json({ school }, { status: 201 })
}
