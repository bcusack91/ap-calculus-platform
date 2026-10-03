import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { buildMcatPlanStatus } from '@/lib/mcat-plan'
import { createUnitTest, publicQuestions } from '@/lib/mcat-unit-test-server'

/**
 * Start (or resume) a sitting of this cycle's unit test.
 *
 * Only once every plan topic is cleared, and not after a pass. An unfinished
 * sitting is returned as-is, so a refresh can't re-roll the questions.
 */
export async function POST() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const userId = session.user.id

    const plan = await buildMcatPlanStatus(userId)
    if (!plan.hasDiagnostic || !plan.diagnosticId || !plan.unitTest) {
      return NextResponse.json({ error: 'Take the MCAT diagnostic first.' }, { status: 409 })
    }
    if (!plan.unitTest.available) {
      return NextResponse.json(
        { error: 'Clear every recommended topic first.', pending: plan.pendingTopics.map((t) => t.slug) },
        { status: 409 },
      )
    }
    if (plan.unitTest.passed) {
      return NextResponse.json({ error: 'You already passed this unit test.' }, { status: 409 })
    }

    if (plan.unitTest.inProgressId) {
      const open = await prisma.mcatUnitTest.findUnique({
        where: { id: plan.unitTest.inProgressId },
        select: { id: true, total: true, questions: true },
      })
      if (open) return NextResponse.json({ id: open.id, total: open.total, questions: publicQuestions(open.questions), resumed: true })
    }

    const created = await createUnitTest(userId, plan.diagnosticId, plan.recommendedTopics.map((t) => t.slug))
    if (!created) {
      return NextResponse.json({ error: 'No questions are available for these topics yet.' }, { status: 503 })
    }
    return NextResponse.json({ id: created.id, total: created.total, questions: publicQuestions(created.questions), resumed: false })
  } catch (error) {
    console.error('[mcat unit test start] failed:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
