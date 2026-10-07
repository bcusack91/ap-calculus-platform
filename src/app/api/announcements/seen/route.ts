import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { markAnnouncementsSeen } from '@/lib/student-announcements'

export const dynamic = 'force-dynamic'

const bodySchema = z.object({
  classroomId: z.string().min(1).max(100).optional(),
  /** Newest announcement the student was shown (ISO); defaults to now. */
  upTo: z.string().datetime({ offset: true }).optional(),
})

/**
 * POST /api/announcements/seen {classroomId?, upTo?} — the student has seen this
 * class's announcements (or every class's, without classroomId). Called by the
 * dashboard banner's Dismiss and by opening the Assignments page.
 */
export async function POST(request: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  let raw: unknown = {}
  try {
    const text = await request.text()
    raw = text ? JSON.parse(text) : {}
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  const parsed = bodySchema.safeParse(raw)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  try {
    const upTo = parsed.data.upTo ? new Date(parsed.data.upTo) : null
    const updated = await markAnnouncementsSeen(userId, parsed.data.classroomId, upTo)
    return NextResponse.json({ ok: true, updated })
  } catch (err) {
    console.error('[POST /api/announcements/seen]', err)
    return NextResponse.json({ error: 'Could not save' }, { status: 500 })
  }
}
