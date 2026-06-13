import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { effectiveIsPremium } from '@/lib/effective-role'
import { FREE_DIAGNOSTIC_PLANS } from '@/lib/premium'

/**
 * Whether the current user may see a personalized diagnostic study plan.
 * Free users get a plan for their first FREE_DIAGNOSTIC_PLANS diagnostics; the
 * next one requires Premium. Premium/admin (and admins previewing as premium)
 * always have access. Fails OPEN so a glitch never hides a paying or first-time
 * user's plan.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      // Anonymous diagnostics are ephemeral (nothing is persisted to gate on).
      return NextResponse.json({ canAccess: true, used: 0, limit: FREE_DIAGNOSTIC_PLANS, premium: false })
    }
    if (await effectiveIsPremium(session.user.role)) {
      return NextResponse.json({ canAccess: true, used: 0, limit: FREE_DIAGNOSTIC_PLANS, premium: true })
    }
    const used = await prisma.diagnosticTest.count({ where: { userId: session.user.id } })
    return NextResponse.json({
      canAccess: used <= FREE_DIAGNOSTIC_PLANS,
      used,
      limit: FREE_DIAGNOSTIC_PLANS,
      premium: false,
    })
  } catch {
    return NextResponse.json({ canAccess: true, used: 0, limit: FREE_DIAGNOSTIC_PLANS, premium: false })
  }
}
