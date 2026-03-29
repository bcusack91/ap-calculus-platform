import { NextResponse } from 'next/server'
import { generateDailyPoolDepthReport } from '@/lib/depth-audit'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const report = generateDailyPoolDepthReport()

    const webhookUrl = process.env.CONTENT_DEPTH_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'daily_pool_depth_report',
          generatedAt: report.generatedAt,
          thresholds: report.thresholds,
          totals: report.totals,
          thinPools: report.pools.filter((pool) => pool.isThin).slice(0, 20),
        }),
      }).catch(() => {
        // Keep cron resilient; report is still returned in response.
      })
    }

    return NextResponse.json({ ok: true, report })
  } catch (error) {
    console.error('Daily depth report cron error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
