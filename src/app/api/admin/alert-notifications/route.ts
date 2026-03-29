import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { requireAdmin } from '@/lib/auth-guard'
import {
  acknowledgeAdminAlertNotification,
  clearAlertSnooze,
  getRecentAdminAlertNotifications,
  snoozeAdminAlertKey,
} from '@/lib/admin-alert-notifications'

const bodySchema = z.discriminatedUnion('action', [
  z.object({
    action: z.literal('acknowledge'),
    notificationId: z.number().int().positive(),
  }),
  z.object({
    action: z.literal('snooze'),
    alertKey: z.string().min(1).max(120),
    hours: z.number().int().min(1).max(24 * 30).default(24),
  }),
  z.object({
    action: z.literal('clear-snooze'),
    alertKey: z.string().min(1).max(120),
  }),
])

export async function GET(req: NextRequest) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  const limitParam = req.nextUrl.searchParams.get('limit')
  const parsedLimit = limitParam ? Number(limitParam) : 40
  const limit = Number.isFinite(parsedLimit) ? parsedLimit : 40

  const notifications = await getRecentAdminAlertNotifications(limit)
  return NextResponse.json({ notifications })
}

export async function POST(req: NextRequest) {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  const parsed = bodySchema.safeParse(await req.json())
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const adminEmail = authResult.user.email ?? null
  const payload = parsed.data

  if (payload.action === 'acknowledge') {
    const updated = await acknowledgeAdminAlertNotification(payload.notificationId, adminEmail)
    return NextResponse.json({ ok: updated })
  }

  if (payload.action === 'snooze') {
    const snoozedUntil = await snoozeAdminAlertKey(payload.alertKey, payload.hours, adminEmail)
    return NextResponse.json({ ok: true, snoozedUntil })
  }

  await clearAlertSnooze(payload.alertKey)
  return NextResponse.json({ ok: true })
}
