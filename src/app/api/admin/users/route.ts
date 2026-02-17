import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/users?search=email
export async function GET(request: NextRequest) {
  const session = await auth()
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const search = request.nextUrl.searchParams.get('search') || ''
  if (!search || search.length < 2) {
    return NextResponse.json([])
  }

  const users = await prisma.user.findMany({
    where: {
      OR: [
        { email: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      createdAt: true,
    },
    take: 20,
    orderBy: { name: 'asc' },
  })

  return NextResponse.json(users)
}

// PUT /api/admin/users  { userId, role }
export async function PUT(request: NextRequest) {
  const session = await auth()
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { userId, role } = await request.json()
  if (!userId || !role) {
    return NextResponse.json({ error: 'userId and role required' }, { status: 400 })
  }

  const validRoles = ['FREE', 'PREMIUM', 'TEACHER', 'ADMIN']
  if (!validRoles.includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  // Prevent demoting yourself
  if (userId === session.user.id && role !== 'ADMIN') {
    return NextResponse.json({ error: 'Cannot change your own role' }, { status: 400 })
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: { role },
    select: { id: true, name: true, email: true, role: true },
  })

  return NextResponse.json(user)
}
