import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * POST /api/teacher/activate  { attest: true }
 * Self-serve teacher provisioning: upgrades a signed-in FREE user to the TEACHER
 * role so they can create classrooms. Teacher features are free and only expose
 * the teacher's own classes, so instant self-activation (with an educator
 * attestation) is appropriate. PREMIUM users get a 409 with code
 * PREMIUM_ACCOUNT, an explanation and two next steps (support, or a separate
 * teacher account) instead of clobbering their subscription tier (role is a
 * single enum). Idempotent for
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
    // Not a dead end: say why, and give the two ways forward. The account
    // role is a single value, so switching it here would silently end the
    // Premium subscription's perks. TeacherActivateCTA renders these steps.
    return NextResponse.json(
      {
        code: 'PREMIUM_ACCOUNT',
        error:
          'This account has a Premium student subscription, and one account can’t be both Premium and a teacher yet. Switching it here would switch off your Premium features, so we haven’t changed anything.',
        nextSteps: [
          {
            label: 'Ask us to add teacher tools',
            detail: 'We’ll turn on teacher features without touching your subscription.',
            href: 'mailto:support@studymondo.com?subject=Add%20teacher%20tools%20to%20my%20Premium%20account',
          },
          {
            label: 'Use a separate teacher account',
            detail: 'Sign up again with your school email as a teacher. Your Premium account stays as it is.',
            href: '/auth/signup?role=teacher',
          },
        ],
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
