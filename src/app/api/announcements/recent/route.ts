import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { recentAnnouncementsFor } from '@/lib/student-announcements'

export const dynamic = 'force-dynamic'

/**
 * GET /api/announcements/recent — the signed-in student's class announcements
 * from the last 14 days, newest first, each flagged `unread` (posted after the
 * student last saw that class's announcements). Feeds the dashboard banner.
 */
export async function GET() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const announcements = await recentAnnouncementsFor(userId)
    return NextResponse.json({ announcements }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/announcements/recent]', err)
    return NextResponse.json({ error: 'Could not load announcements' }, { status: 500 })
  }
}
