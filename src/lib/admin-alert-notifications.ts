import { prisma } from '@/lib/prisma'
import { sendAdminAlertEmail } from '@/lib/email'

export type FunnelAlert = {
  key: string
  severity: 'warning' | 'critical'
  metric: string
  currentValue: number
  previousValue: number
  deltaPct: number
  message: string
}

type NotifyCriticalAlertsArgs = {
  alerts: FunnelAlert[]
  windowStart: Date
  windowEnd: Date
}

type NotificationSummary = {
  eligibleAlerts: number
  notifiedAlerts: number
  channelsUsed: string[]
  skippedReason?: string
  errors: string[]
}

export type AdminAlertNotificationRecord = {
  id: number
  alertKey: string
  metric: string
  severity: string
  windowStart: string
  windowEnd: string
  message: string | null
  channels: string[]
  notifiedAt: string
  acknowledgedAt: string | null
  acknowledgedBy: string | null
  snoozedUntil: string | null
  snoozedBy: string | null
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'

function toIsoDate(d: Date): string {
  return d.toISOString().split('T')[0]
}

function getEmailRecipients(): string[] {
  const raw = process.env.ADMIN_ALERT_EMAIL_TO || ''
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function getWebhookUrl(): string | null {
  return process.env.ADMIN_ALERT_WEBHOOK_URL || process.env.ADMIN_ALERT_SLACK_WEBHOOK_URL || null
}

function getCooldownHours(): number {
  const parsed = Number(process.env.ADMIN_ALERT_COOLDOWN_HOURS)
  if (!Number.isFinite(parsed) || parsed <= 0) return 12
  return Math.round(parsed)
}

async function ensureNotificationTable() {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AdminAlertNotification" (
      "id" BIGSERIAL PRIMARY KEY,
      "alertKey" TEXT NOT NULL,
      "metric" TEXT NOT NULL,
      "severity" TEXT NOT NULL,
      "windowStart" DATE NOT NULL,
      "windowEnd" DATE NOT NULL,
      "message" TEXT,
      "channels" JSONB,
      "notifiedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "AdminAlertNotification_key_window_unique"
    ON "AdminAlertNotification" ("alertKey", "windowStart", "windowEnd");
  `)

  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "AdminAlertNotification_key_time_idx"
    ON "AdminAlertNotification" ("alertKey", "notifiedAt" DESC);
  `)

  await prisma.$executeRawUnsafe(`
    ALTER TABLE "AdminAlertNotification"
    ADD COLUMN IF NOT EXISTS "acknowledgedAt" TIMESTAMPTZ;
  `)

  await prisma.$executeRawUnsafe(`
    ALTER TABLE "AdminAlertNotification"
    ADD COLUMN IF NOT EXISTS "acknowledgedBy" TEXT;
  `)

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AdminAlertPreference" (
      "alertKey" TEXT PRIMARY KEY,
      "snoozedUntil" TIMESTAMPTZ,
      "snoozedBy" TEXT,
      "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)

  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "AdminAlertPreference_snoozedUntil_idx"
    ON "AdminAlertPreference" ("snoozedUntil");
  `)
}

async function getSnoozedAlertKeySet(): Promise<Set<string>> {
  const rows = await prisma.$queryRaw<{ alertKey: string }[]>`
    SELECT "alertKey"
    FROM "AdminAlertPreference"
    WHERE "snoozedUntil" IS NOT NULL
      AND "snoozedUntil" > NOW()
  `
  return new Set(rows.map((r) => r.alertKey))
}

async function getUnnotifiedCriticalAlerts(
  alerts: FunnelAlert[],
  windowStart: Date,
  windowEnd: Date,
  cooldownHours: number
): Promise<FunnelAlert[]> {
  const criticalAlerts = alerts.filter((a) => a.severity === 'critical')
  if (criticalAlerts.length === 0) return []

  const snoozedAlertKeys = await getSnoozedAlertKeySet()

  const windowStartDate = toIsoDate(windowStart)
  const windowEndDate = toIsoDate(windowEnd)
  const result: FunnelAlert[] = []

  for (const alert of criticalAlerts) {
    if (snoozedAlertKeys.has(alert.key)) continue

    const existingForWindow = await prisma.$queryRaw<{ id: bigint }[]>`
      SELECT id
      FROM "AdminAlertNotification"
      WHERE "alertKey" = ${alert.key}
        AND "windowStart" = ${windowStartDate}::date
        AND "windowEnd" = ${windowEndDate}::date
      LIMIT 1
    `

    if (existingForWindow.length > 0) continue

    const recentNotification = await prisma.$queryRaw<{ id: bigint }[]>`
      SELECT id
      FROM "AdminAlertNotification"
      WHERE "alertKey" = ${alert.key}
        AND "notifiedAt" >= NOW() - (${cooldownHours} * INTERVAL '1 hour')
      LIMIT 1
    `

    if (recentNotification.length > 0) continue

    result.push(alert)
  }

  return result
}

function buildAlertEmail(alerts: FunnelAlert[], windowStart: Date, windowEnd: Date) {
  const subject = `[Study Mondo] Critical Funnel Alert (${alerts.length})`
  const period = `${toIsoDate(windowStart)} to ${toIsoDate(windowEnd)}`

  const lines = alerts.map(
    (a) => `- ${a.metric}: ${a.previousValue}% -> ${a.currentValue}% (${a.deltaPct}%)`
  )

  const text = [
    `Critical funnel alerts detected for ${period}.`,
    '',
    ...lines,
    '',
    `Review admin analytics: ${APP_URL}/admin`,
  ].join('\n')

  const listItems = alerts
    .map(
      (a) =>
        `<li><strong>${a.metric}</strong>: ${a.previousValue}% &rarr; ${a.currentValue}% (<span style="color:#b91c1c;">${a.deltaPct}%</span>)</li>`
    )
    .join('')

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#111827;">
      <h2 style="margin:0 0 12px;">Critical funnel alerts detected</h2>
      <p style="margin:0 0 16px;color:#4b5563;">Window: <strong>${period}</strong></p>
      <ul style="margin:0 0 16px;padding-left:20px;line-height:1.6;">${listItems}</ul>
      <p style="margin:0;">
        <a href="${APP_URL}/admin" style="display:inline-block;background:#dc2626;color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;font-weight:600;">Open Admin Analytics</a>
      </p>
    </div>
  `

  return { subject, text, html }
}

function buildSlackPayload(alerts: FunnelAlert[], windowStart: Date, windowEnd: Date) {
  const period = `${toIsoDate(windowStart)} to ${toIsoDate(windowEnd)}`
  const intro = {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `*Critical funnel alerts detected*\nWindow: *${period}*`,
    },
  }

  const alertBlocks = alerts.flatMap((a) => {
    const line = `*${a.metric}*\n${a.previousValue}% -> ${a.currentValue}% (${a.deltaPct}%)`
    return [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: line,
        },
      },
      { type: 'divider' },
    ]
  })

  return {
    text: `Critical funnel alerts detected (${period})`,
    blocks: [
      intro,
      ...alertBlocks,
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Open Admin Analytics',
              emoji: true,
            },
            url: `${APP_URL}/admin`,
          },
        ],
      },
    ],
  }
}

async function sendWebhookAlert(webhookUrl: string, alerts: FunnelAlert[], windowStart: Date, windowEnd: Date) {
  const isSlackWebhook = /hooks\.slack\.com/i.test(webhookUrl)
  const payload = isSlackWebhook
    ? buildSlackPayload(alerts, windowStart, windowEnd)
    : {
        text: `Critical funnel alerts detected (${toIsoDate(windowStart)} to ${toIsoDate(windowEnd)})`,
        alerts: alerts.map((a) => ({
          key: a.key,
          metric: a.metric,
          previousValue: a.previousValue,
          currentValue: a.currentValue,
          deltaPct: a.deltaPct,
          message: a.message,
        })),
      }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    throw new Error(`Webhook delivery failed with ${response.status}${body ? `: ${body.slice(0, 200)}` : ''}`)
  }
}

function parseChannels(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((v): v is string => typeof v === 'string')
  }
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)
      if (Array.isArray(parsed)) {
        return parsed.filter((v): v is string => typeof v === 'string')
      }
    } catch {
      return []
    }
  }
  return []
}

export async function getRecentAdminAlertNotifications(limit = 40): Promise<AdminAlertNotificationRecord[]> {
  await ensureNotificationTable()

  const boundedLimit = Math.max(1, Math.min(limit, 200))
  const rows = await prisma.$queryRaw<{
    id: bigint
    alertKey: string
    metric: string
    severity: string
    windowStart: Date
    windowEnd: Date
    message: string | null
    channels: unknown
    notifiedAt: Date
    acknowledgedAt: Date | null
    acknowledgedBy: string | null
    snoozedUntil: Date | null
    snoozedBy: string | null
  }[]>`
    SELECT
      n."id",
      n."alertKey",
      n."metric",
      n."severity",
      n."windowStart",
      n."windowEnd",
      n."message",
      n."channels",
      n."notifiedAt",
      n."acknowledgedAt",
      n."acknowledgedBy",
      p."snoozedUntil",
      p."snoozedBy"
    FROM "AdminAlertNotification" n
    LEFT JOIN "AdminAlertPreference" p
      ON p."alertKey" = n."alertKey"
    ORDER BY n."notifiedAt" DESC
    LIMIT ${boundedLimit}
  `

  return rows.map((row) => ({
    id: Number(row.id),
    alertKey: row.alertKey,
    metric: row.metric,
    severity: row.severity,
    windowStart: toIsoDate(row.windowStart),
    windowEnd: toIsoDate(row.windowEnd),
    message: row.message,
    channels: parseChannels(row.channels),
    notifiedAt: row.notifiedAt.toISOString(),
    acknowledgedAt: row.acknowledgedAt ? row.acknowledgedAt.toISOString() : null,
    acknowledgedBy: row.acknowledgedBy,
    snoozedUntil: row.snoozedUntil ? row.snoozedUntil.toISOString() : null,
    snoozedBy: row.snoozedBy,
  }))
}

export async function acknowledgeAdminAlertNotification(notificationId: number, acknowledgedBy?: string | null) {
  await ensureNotificationTable()

  const rows = await prisma.$queryRaw<{ id: bigint }[]>`
    UPDATE "AdminAlertNotification"
    SET
      "acknowledgedAt" = NOW(),
      "acknowledgedBy" = ${acknowledgedBy ?? null}
    WHERE "id" = ${notificationId}
    RETURNING "id"
  `

  return rows.length > 0
}

export async function snoozeAdminAlertKey(alertKey: string, hours: number, snoozedBy?: string | null) {
  await ensureNotificationTable()
  const boundedHours = Math.max(1, Math.min(Math.round(hours), 24 * 30))
  const snoozedUntil = new Date(Date.now() + boundedHours * 60 * 60 * 1000)

  await prisma.$executeRaw`
    INSERT INTO "AdminAlertPreference" ("alertKey", "snoozedUntil", "snoozedBy", "updatedAt")
    VALUES (${alertKey}, ${snoozedUntil}, ${snoozedBy ?? null}, NOW())
    ON CONFLICT ("alertKey") DO UPDATE SET
      "snoozedUntil" = EXCLUDED."snoozedUntil",
      "snoozedBy" = EXCLUDED."snoozedBy",
      "updatedAt" = NOW()
  `

  return snoozedUntil.toISOString()
}

export async function clearAlertSnooze(alertKey: string) {
  await ensureNotificationTable()
  await prisma.$executeRaw`
    UPDATE "AdminAlertPreference"
    SET
      "snoozedUntil" = NULL,
      "updatedAt" = NOW()
    WHERE "alertKey" = ${alertKey}
  `
}

async function recordNotifications(
  alerts: FunnelAlert[],
  windowStart: Date,
  windowEnd: Date,
  channelsUsed: string[]
) {
  const windowStartDate = toIsoDate(windowStart)
  const windowEndDate = toIsoDate(windowEnd)

  for (const alert of alerts) {
    await prisma.$executeRaw`
      INSERT INTO "AdminAlertNotification"
        ("alertKey", "metric", "severity", "windowStart", "windowEnd", "message", "channels")
      VALUES
        (${alert.key}, ${alert.metric}, ${alert.severity}, ${windowStartDate}::date, ${windowEndDate}::date, ${alert.message}, ${JSON.stringify(channelsUsed)}::jsonb)
      ON CONFLICT ("alertKey", "windowStart", "windowEnd") DO NOTHING
    `
  }
}

export async function notifyCriticalFunnelAlerts(
  args: NotifyCriticalAlertsArgs
): Promise<NotificationSummary> {
  const { alerts, windowStart, windowEnd } = args

  const emailRecipients = getEmailRecipients()
  const webhookUrl = getWebhookUrl()
  if (emailRecipients.length === 0 && !webhookUrl) {
    return {
      eligibleAlerts: 0,
      notifiedAlerts: 0,
      channelsUsed: [],
      skippedReason: 'No notification channels configured',
      errors: [],
    }
  }

  await ensureNotificationTable()

  const cooldownHours = getCooldownHours()
  const eligibleAlerts = await getUnnotifiedCriticalAlerts(alerts, windowStart, windowEnd, cooldownHours)

  if (eligibleAlerts.length === 0) {
    return {
      eligibleAlerts: 0,
      notifiedAlerts: 0,
      channelsUsed: [],
      skippedReason: 'No new critical alerts eligible for notification',
      errors: [],
    }
  }

  const channelsUsed: string[] = []
  const errors: string[] = []

  if (emailRecipients.length > 0) {
    try {
      const message = buildAlertEmail(eligibleAlerts, windowStart, windowEnd)
      await sendAdminAlertEmail({
        to: emailRecipients,
        subject: message.subject,
        text: message.text,
        html: message.html,
      })
      channelsUsed.push('email')
    } catch (error) {
      errors.push(error instanceof Error ? error.message : 'Email delivery failed')
    }
  }

  if (webhookUrl) {
    try {
      await sendWebhookAlert(webhookUrl, eligibleAlerts, windowStart, windowEnd)
      channelsUsed.push('webhook')
    } catch (error) {
      errors.push(error instanceof Error ? error.message : 'Webhook delivery failed')
    }
  }

  if (channelsUsed.length > 0) {
    await recordNotifications(eligibleAlerts, windowStart, windowEnd, channelsUsed)
  }

  return {
    eligibleAlerts: eligibleAlerts.length,
    notifiedAlerts: channelsUsed.length > 0 ? eligibleAlerts.length : 0,
    channelsUsed,
    errors,
    skippedReason: channelsUsed.length === 0 ? 'All notification channels failed' : undefined,
  }
}
