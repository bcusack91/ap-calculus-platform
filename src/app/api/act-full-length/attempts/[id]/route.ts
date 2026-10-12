import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ACT_FL_CATEGORY, summarizeActFl } from '@/lib/act-full-length-server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/act-full-length/attempts/<id> → { attempt } — one of the student's
 * own sittings for the results page (scores, ranges, sections, skills, time,
 * study topics). Per-question detail lives on /review/act-fl/<id>.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const row = await prisma.diagnosticTest.findFirst({
    where: { id, userId, category: ACT_FL_CATEGORY },
    select: { id: true, createdAt: true, results: true },
  })
  const attempt = row ? summarizeActFl(row) : null
  if (!attempt) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ attempt }, { headers: { 'Cache-Control': 'private, no-store' } })
}
