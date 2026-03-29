import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth-guard'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  const [
    alertVolume,
    ackMedian,
    recoveryMedian,
    topRecurring,
    channelMix,
  ] = await Promise.all([
    prisma.$queryRaw<{ total: bigint; critical: bigint; warning: bigint }[]>`
      SELECT
        COUNT(*)::bigint AS total,
        COUNT(*) FILTER (WHERE "severity" = 'critical')::bigint AS critical,
        COUNT(*) FILTER (WHERE "severity" = 'warning')::bigint AS warning
      FROM "AdminAlertNotification"
      WHERE "notifiedAt" >= NOW() - INTERVAL '30 days'
    `,
    prisma.$queryRaw<{ medianHours: number | null }[]>`
      SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (
        ORDER BY EXTRACT(EPOCH FROM ("acknowledgedAt" - "notifiedAt")) / 3600.0
      ) AS "medianHours"
      FROM "AdminAlertNotification"
      WHERE "acknowledgedAt" IS NOT NULL
        AND "notifiedAt" >= NOW() - INTERVAL '30 days'
    `,
    prisma.$queryRaw<{ medianHours: number | null }[]>`
      SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (
        ORDER BY EXTRACT(EPOCH FROM ("resolvedAt" - "notifiedAt")) / 3600.0
      ) AS "medianHours"
      FROM "AdminAlertNotification"
      WHERE "resolvedAt" IS NOT NULL
        AND "notifiedAt" >= NOW() - INTERVAL '30 days'
    `,
    prisma.$queryRaw<{ alertKey: string; metric: string; count: bigint }[]>`
      SELECT "alertKey", MAX("metric") AS metric, COUNT(*)::bigint AS count
      FROM "AdminAlertNotification"
      WHERE "notifiedAt" >= NOW() - INTERVAL '30 days'
      GROUP BY "alertKey"
      ORDER BY count DESC
      LIMIT 10
    `,
    prisma.$queryRaw<{ channel: string; count: bigint }[]>`
      SELECT channel, COUNT(*)::bigint AS count
      FROM (
        SELECT jsonb_array_elements_text(COALESCE("channels", '[]'::jsonb)) AS channel
        FROM "AdminAlertNotification"
        WHERE "notifiedAt" >= NOW() - INTERVAL '30 days'
      ) t
      GROUP BY channel
      ORDER BY count DESC
    `,
  ])

  const round = (n: number | null | undefined) => (n && Number.isFinite(n) ? Math.round(n * 10) / 10 : 0)

  return NextResponse.json({
    windowDays: 30,
    totals: {
      total: Number(alertVolume[0]?.total ?? 0),
      critical: Number(alertVolume[0]?.critical ?? 0),
      warning: Number(alertVolume[0]?.warning ?? 0),
    },
    medians: {
      ackHours: round(ackMedian[0]?.medianHours),
      recoveryHours: round(recoveryMedian[0]?.medianHours),
    },
    topRecurring: topRecurring.map((row) => ({
      alertKey: row.alertKey,
      metric: row.metric,
      count: Number(row.count),
    })),
    channelMix: channelMix.map((row) => ({
      channel: row.channel,
      count: Number(row.count),
    })),
  })
}
