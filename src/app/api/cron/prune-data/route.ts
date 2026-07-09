import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000

// Retention windows
const ANALYTICS_EVENT_RETENTION_DAYS = 180
const WEBHOOK_EVENT_RETENTION_DAYS = 30
const MMR_HISTORY_RETENTION_DAYS = 365

/**
 * GET /api/cron/prune-data
 * Weekly data-retention cron (see vercel.json). Deletes:
 *   - AnalyticsEvent rows older than 180 days
 *   - ProcessedWebhookEvent rows older than 30 days (Stripe never retries that late)
 *   - MMRHistory rows older than 365 days
 * Secured by CRON_SECRET bearer header.
 */
export async function GET(request: Request) {
  try {
    // Inline CRON_SECRET check (null-check + compare). Kept inline intentionally.
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = Date.now()
    const analyticsCutoff = new Date(now - ANALYTICS_EVENT_RETENTION_DAYS * DAY_MS)
    const webhookCutoff = new Date(now - WEBHOOK_EVENT_RETENTION_DAYS * DAY_MS)
    const mmrCutoff = new Date(now - MMR_HISTORY_RETENTION_DAYS * DAY_MS)

    const [analyticsEvents, webhookEvents, mmrHistory] = await Promise.all([
      prisma.analyticsEvent.deleteMany({
        where: { createdAt: { lt: analyticsCutoff } },
      }),
      prisma.processedWebhookEvent.deleteMany({
        where: { processedAt: { lt: webhookCutoff } },
      }),
      prisma.mMRHistory.deleteMany({
        where: { timestamp: { lt: mmrCutoff } },
      }),
    ])

    const result = {
      success: true,
      deleted: {
        analyticsEvents: analyticsEvents.count,
        processedWebhookEvents: webhookEvents.count,
        mmrHistory: mmrHistory.count,
      },
      cutoffs: {
        analyticsEvents: analyticsCutoff.toISOString(),
        processedWebhookEvents: webhookCutoff.toISOString(),
        mmrHistory: mmrCutoff.toISOString(),
      },
    }

    console.log('[cron/prune-data] Pruned:', JSON.stringify(result.deleted))
    return NextResponse.json(result)
  } catch (error) {
    console.error('[cron/prune-data] Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
