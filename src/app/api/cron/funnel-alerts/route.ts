import { NextResponse } from 'next/server'
import { calculateWeeklyFunnelAlertSnapshot } from '@/lib/funnel-alerts'
import { notifyCriticalFunnelAlerts } from '@/lib/admin-alert-notifications'

/**
 * Funnel alert cron job — call every 6 hours via Vercel Cron.
 * Evaluates weekly conversion drops and sends critical notifications.
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

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
