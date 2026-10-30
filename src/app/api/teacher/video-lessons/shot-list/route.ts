import { NextRequest, NextResponse } from 'next/server'
import { noStore, requireInstructorCaller } from '@/lib/video-lesson-authoring'
import { getShotList } from '@/data/video-shot-lists'

/**
 * GET /api/teacher/video-lessons/shot-list?topic=<slug>[&instructorId=] →
 * { shotList | null } — the topic's recording plan, shown beside the editor.
 */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const r = await requireInstructorCaller(sp.get('instructorId'))
  if ('error' in r) return r.error
  const topic = sp.get('topic') ?? ''
  if (!topic) return NextResponse.json({ error: 'topic required' }, { status: 400 })
  return NextResponse.json({ shotList: await getShotList(topic) }, { headers: noStore })
}
