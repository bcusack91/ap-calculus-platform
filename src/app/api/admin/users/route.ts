import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { adminUserUpdateSchema, parseBody } from '@/lib/validations'
import { requireAdmin } from '@/lib/auth-guard'

// GET /api/admin/users?search=email
export async function GET(request: NextRequest) {
  try {
    const authResult = await requireAdmin()
    if ('error' in authResult) return authResult.error

    const search = request.nextUrl.searchParams.get('search') || ''

    const users = await prisma.user.findMany({
      where: search.length >= 2
        ? {
            OR: [
              { email: { contains: search, mode: 'insensitive' } },
              { name: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {},
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        createdAt: true,
      },
      take: 20,
      orderBy: search.length >= 2 ? { name: 'asc' } : { createdAt: 'desc' },
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error('[GET /api/admin/users]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/admin/users  { userId, role }
export async function PUT(request: NextRequest) {
  try {
    const authResult = await requireAdmin()
    if ('error' in authResult) return authResult.error
    const { user: currentUser } = authResult

    const body = await request.json()
    const parsed = parseBody(adminUserUpdateSchema, body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }
    const { userId, role } = parsed.data

    // Prevent demoting yourself
    if (userId === currentUser.id && role !== 'ADMIN') {
      return NextResponse.json({ error: 'Cannot change your own role' }, { status: 400 })
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: { id: true, name: true, email: true, role: true },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('[PUT /api/admin/users]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
