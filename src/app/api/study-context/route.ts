import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getActiveStudyContext, listStudyContexts, validateContext } from '@/lib/study-context'

/**
 * GET  /api/study-context — the user's active study mode + every mode they can
 *      switch to (personal, their classes, started course modes) + the course
 *      catalog for creating a new course study mode.
 * PUT  /api/study-context { context } — switch modes. 'course:<slug>' keys are
 *      created implicitly on first switch; class keys require membership.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const [active, contexts, courses] = await Promise.all([
    getActiveStudyContext(userId),
    listStudyContexts(userId),
    prisma.course.findMany({ select: { slug: true, name: true }, orderBy: { name: 'asc' } }),
  ])
  return NextResponse.json(
    { active, contexts, courseCatalog: courses },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}

export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const body = await req.json().catch(() => ({}))
  const context = typeof body?.context === 'string' ? body.context.trim() : ''
  if (!context || context.length > 100) {
    return NextResponse.json({ error: 'context required' }, { status: 400 })
  }
  if (!(await validateContext(userId, context))) {
    return NextResponse.json({ error: 'You do not have access to that study mode.' }, { status: 403 })
  }
  await prisma.user.update({ where: { id: userId }, data: { studyContext: context } })
  return NextResponse.json({ active: context })
}
