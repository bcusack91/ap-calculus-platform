import { NextResponse } from 'next/server'
import { calculateWeeklyFunnelAlertSnapshot } from '@/lib/funnel-alerts'
import { notifyCriticalFunnelAlerts } from '@/lib/admin-alert-notifications'
import { requireCronSecret } from '@/lib/cron-auth'

/**
 * Funnel alert cron job — call every 6 hours via Vercel Cron.
 * Evaluates weekly conversion drops and sends critical notifications.
 */
export async function GET(request: Request) {
  const unauthorized = requireCronSecret(request)
  if (unauthorized) return unauthorized

  try {
    const snapshot = await calculateWeeklyFunnelAlertSnapshot()
    const notificationSummary = await notifyCriticalFunnelAlerts({
      alerts: snapshot.alerts,
      windowStart: snapshot.windowStart,
      windowEnd: snapshot.windowEnd,
    })

    return NextResponse.json({
      ok: true,
      alerts: snapshot.alerts,
      notificationSummary,
    })
  } catch (error) {
    console.error('Funnel alerts cron error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
