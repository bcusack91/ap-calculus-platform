import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * POST /api/teacher/activate  { attest: true }
 * Self-serve teacher provisioning: upgrades a signed-in FREE user to the TEACHER
 * role so they can create classrooms. Teacher features are free and only expose
 * the teacher's own classes, so instant self-activation (with an educator
 * attestation) is appropriate. PREMIUM users are routed to support to avoid
 * clobbering their subscription tier (role is a single enum). Idempotent for
 * users who are already TEACHER/ADMIN.
 */
export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Please sign in first.' }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  if (body?.attest !== true) {
    return NextResponse.json({ error: 'Please confirm you are a teacher or educator.' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  if (user.role === 'TEACHER' || user.role === 'ADMIN') {
    return NextResponse.json({ success: true, role: user.role, alreadyTeacher: true })
  }
  if (user.role === 'PREMIUM') {
    return NextResponse.json(
      {
        error:
          'Your account has a Premium subscription. Email support@studymondo.com and we’ll enable teacher features without affecting your subscription.',
      },
      { status: 409 }
    )
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { role: 'TEACHER' },
  })
  return NextResponse.json({ success: true, role: 'TEACHER' })
}
