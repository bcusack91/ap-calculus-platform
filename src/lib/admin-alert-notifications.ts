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
  escalatedAlerts: number
  ticketsCreated: number
  runbooksIncluded: number
  opsMetrics: AlertOpsMetrics
  channelsUsed: string[]
  skippedReason?: string
  errors: string[]
}

export type AlertOpsMetrics = {
  avgAckHours: number
  avgRecoveryHours: number
  openCriticalAlerts: number
  unacknowledgedCriticalAlerts: number
  recoveredLast30Days: number
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
  runbookUrl: string | null
  ticketExternalId: string | null
  ticketUrl: string | null
  ticketStatus: string | null
  ticketCreatedAt: string | null
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

function getEscalationWebhookUrl(): string | null {
  return process.env.ADMIN_ALERT_ESCALATION_WEBHOOK_URL || null
}

function getEscalationEmailRecipients(): string[] {
  const raw = process.env.ADMIN_ALERT_ESCALATION_EMAIL_TO || ''
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function getEscalationThreshold(): number {
  const parsed = Number(process.env.ADMIN_ALERT_ESCALATION_REPEAT_THRESHOLD)
  if (!Number.isFinite(parsed) || parsed < 1) return 2
  return Math.round(parsed)
}

function getEscalationLookbackDays(): number {
  const parsed = Number(process.env.ADMIN_ALERT_ESCALATION_LOOKBACK_DAYS)
  if (!Number.isFinite(parsed) || parsed < 1) return 21
  return Math.round(parsed)
}

function parseStringMap(rawValue: string | undefined): Record<string, string> {
  if (!rawValue) return {}
  try {
    const parsed = JSON.parse(rawValue) as Record<string, unknown>
    const out: Record<string, string> = {}
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === 'string' && value.trim().length > 0) {
        out[key] = value.trim()
      }
    }
    return out
  } catch {
    return {}
  }
}

function getRunbookUrlMap(): Record<string, string> {
  return parseStringMap(process.env.ADMIN_ALERT_RUNBOOK_URLS)
}

function getTicketWebhookUrl(): string | null {
  return process.env.ADMIN_ALERT_TICKET_WEBHOOK_URL || null
}

function getTicketProvider(): string {
  return process.env.ADMIN_ALERT_TICKET_PROVIDER || 'generic'
}

function parseOwnerEmailMap(): Record<string, string[]> {
  const raw = process.env.ADMIN_ALERT_OWNER_EMAILS
  if (!raw) return {}

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const out: Record<string, string[]> = {}
    for (const [key, value] of Object.entries(parsed)) {
      if (Array.isArray(value)) {
        out[key] = value.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
      } else if (typeof value === 'string') {
        out[key] = value
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      }
    }
    return out
  } catch {
    return {}
  }
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
    ALTER TABLE "AdminAlertNotification"
    ADD COLUMN IF NOT EXISTS "resolvedAt" TIMESTAMPTZ;
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

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AdminAlertTicket" (
      "id" BIGSERIAL PRIMARY KEY,
      "alertKey" TEXT NOT NULL,
      "windowStart" DATE NOT NULL,
      "windowEnd" DATE NOT NULL,
      "provider" TEXT,
      "externalId" TEXT,
      "ticketUrl" TEXT,
      "status" TEXT,
      "payload" JSONB,
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "AdminAlertTicket_key_window_unique"
    ON "AdminAlertTicket" ("alertKey", "windowStart", "windowEnd");
  `)
}

async function markRecoveredCriticalAlerts(currentCriticalAlertKeys: string[]) {
  if (currentCriticalAlertKeys.length === 0) {
    await prisma.$executeRaw`
      UPDATE "AdminAlertNotification"
      SET "resolvedAt" = NOW()
      WHERE "severity" = 'critical'
        AND "resolvedAt" IS NULL
    `
    return
  }

  await prisma.$executeRaw`
    UPDATE "AdminAlertNotification"
    SET "resolvedAt" = NOW()
    WHERE "severity" = 'critical'
      AND "resolvedAt" IS NULL
      AND NOT ("alertKey" = ANY(${currentCriticalAlertKeys}::text[]))
  `
}

async function getAlertOpsMetrics(): Promise<AlertOpsMetrics> {
  const [ackStats, recoveryStats, openStats, unackStats, recoveredStats] = await Promise.all([
    prisma.$queryRaw<{ avgHours: number | null }[]>`
      SELECT AVG(EXTRACT(EPOCH FROM ("acknowledgedAt" - "notifiedAt")) / 3600.0) AS "avgHours"
      FROM "AdminAlertNotification"
      WHERE "acknowledgedAt" IS NOT NULL
        AND "notifiedAt" >= NOW() - INTERVAL '90 days'
    `,
    prisma.$queryRaw<{ avgHours: number | null }[]>`
      SELECT AVG(EXTRACT(EPOCH FROM ("resolvedAt" - "notifiedAt")) / 3600.0) AS "avgHours"
      FROM "AdminAlertNotification"
      WHERE "resolvedAt" IS NOT NULL
        AND "notifiedAt" >= NOW() - INTERVAL '90 days'
    `,
    prisma.$queryRaw<{ count: bigint }[]>`
      SELECT COUNT(DISTINCT "alertKey")::bigint AS count
      FROM "AdminAlertNotification"
      WHERE "severity" = 'critical'
        AND "resolvedAt" IS NULL
    `,
    prisma.$queryRaw<{ count: bigint }[]>`
      SELECT COUNT(DISTINCT "alertKey")::bigint AS count
      FROM "AdminAlertNotification"
      WHERE "severity" = 'critical'
        AND "resolvedAt" IS NULL
        AND "acknowledgedAt" IS NULL
    `,
    prisma.$queryRaw<{ count: bigint }[]>`
      SELECT COUNT(*)::bigint AS count
      FROM "AdminAlertNotification"
      WHERE "resolvedAt" >= NOW() - INTERVAL '30 days'
    `,
  ])

  const round = (n: number | null | undefined) => (n && Number.isFinite(n) ? Math.round(n * 10) / 10 : 0)

  return {
    avgAckHours: round(ackStats[0]?.avgHours),
    avgRecoveryHours: round(recoveryStats[0]?.avgHours),
    openCriticalAlerts: Number(openStats[0]?.count ?? 0),
    unacknowledgedCriticalAlerts: Number(unackStats[0]?.count ?? 0),
    recoveredLast30Days: Number(recoveredStats[0]?.count ?? 0),
  }
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

async function getEscalatedAlerts(alerts: FunnelAlert[]): Promise<FunnelAlert[]> {
  if (alerts.length === 0) return []

  const repeatThreshold = getEscalationThreshold()
  const lookbackDays = getEscalationLookbackDays()
  const lookbackStart = new Date(Date.now() - lookbackDays * 24 * 60 * 60 * 1000)

  const escalated: FunnelAlert[] = []
  for (const alert of alerts) {
    const rows = await prisma.$queryRaw<{ count: bigint }[]>`
      SELECT COUNT(*)::bigint AS count
      FROM "AdminAlertNotification"
      WHERE "alertKey" = ${alert.key}
        AND "severity" = 'critical'
        AND "notifiedAt" >= ${lookbackStart}
    `

    const repeatCount = Number(rows[0]?.count ?? 0)
    if (repeatCount >= repeatThreshold) {
      escalated.push(alert)
    }
  }

  return escalated
}

function buildAlertEmail(
  alerts: FunnelAlert[],
  windowStart: Date,
  windowEnd: Date,
  runbookByAlertKey?: Record<string, string>
) {
  const subject = `[Study Mondo] Critical Funnel Alert (${alerts.length})`
  const period = `${toIsoDate(windowStart)} to ${toIsoDate(windowEnd)}`

  const lines = alerts.map(
    (a) => `- ${a.metric}: ${a.previousValue}% -> ${a.currentValue}% (${a.deltaPct}%)`
  )

  const runbookLines = alerts
    .map((a) => {
      const runbookUrl = runbookByAlertKey?.[a.key]
      return runbookUrl ? `- ${a.metric} runbook: ${runbookUrl}` : null
    })
    .filter((v): v is string => !!v)

  const text = [
    `Critical funnel alerts detected for ${period}.`,
    '',
    ...lines,
    ...(runbookLines.length > 0 ? ['', 'Runbooks:', ...runbookLines] : []),
    '',
    `Review admin analytics: ${APP_URL}/admin`,
  ].join('\n')

  const listItems = alerts
    .map(
      (a) => {
        const runbookUrl = runbookByAlertKey?.[a.key]
        const runbook = runbookUrl
          ? ` <a href="${runbookUrl}" style="color:#1d4ed8;text-decoration:none;">Runbook</a>`
          : ''
        return `<li><strong>${a.metric}</strong>: ${a.previousValue}% &rarr; ${a.currentValue}% (<span style="color:#b91c1c;">${a.deltaPct}%</span>)${runbook}</li>`
      }
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

function buildSlackPayload(
  alerts: FunnelAlert[],
  windowStart: Date,
  windowEnd: Date,
  runbookByAlertKey?: Record<string, string>
) {
  const period = `${toIsoDate(windowStart)} to ${toIsoDate(windowEnd)}`
  const intro = {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `*Critical funnel alerts detected*\nWindow: *${period}*`,
    },
  }

  const alertBlocks = alerts.flatMap((a) => {
    const runbookUrl = runbookByAlertKey?.[a.key]
    const runbookLine = runbookUrl ? `\n<${runbookUrl}|Runbook>` : ''
    const line = `*${a.metric}*\n${a.previousValue}% -> ${a.currentValue}% (${a.deltaPct}%)${runbookLine}`
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

async function sendWebhookAlert(
  webhookUrl: string,
  alerts: FunnelAlert[],
  windowStart: Date,
  windowEnd: Date,
  runbookByAlertKey?: Record<string, string>
) {
  const isSlackWebhook = /hooks\.slack\.com/i.test(webhookUrl)
  const payload = isSlackWebhook
    ? buildSlackPayload(alerts, windowStart, windowEnd, runbookByAlertKey)
    : {
        text: `Critical funnel alerts detected (${toIsoDate(windowStart)} to ${toIsoDate(windowEnd)})`,
        alerts: alerts.map((a) => ({
          key: a.key,
          metric: a.metric,
          previousValue: a.previousValue,
          currentValue: a.currentValue,
          deltaPct: a.deltaPct,
          message: a.message,
          runbookUrl: runbookByAlertKey?.[a.key] ?? null,
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
  const runbookMap = getRunbookUrlMap()

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
    ticketExternalId: string | null
    ticketUrl: string | null
    ticketStatus: string | null
    ticketCreatedAt: Date | null
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
      p."snoozedBy",
      t."externalId" AS "ticketExternalId",
      t."ticketUrl" AS "ticketUrl",
      t."status" AS "ticketStatus",
      t."createdAt" AS "ticketCreatedAt"
    FROM "AdminAlertNotification" n
    LEFT JOIN "AdminAlertPreference" p
      ON p."alertKey" = n."alertKey"
    LEFT JOIN "AdminAlertTicket" t
      ON t."alertKey" = n."alertKey"
      AND t."windowStart" = n."windowStart"
      AND t."windowEnd" = n."windowEnd"
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
    runbookUrl: runbookMap[row.alertKey] ?? null,
    ticketExternalId: row.ticketExternalId,
    ticketUrl: row.ticketUrl,
    ticketStatus: row.ticketStatus,
    ticketCreatedAt: row.ticketCreatedAt ? row.ticketCreatedAt.toISOString() : null,
  }))
}

async function createEscalationTickets(
  escalatedAlerts: FunnelAlert[],
  windowStart: Date,
  windowEnd: Date,
  ownerEmailMap: Record<string, string[]>,
  runbookMap: Record<string, string>
) {
  const ticketWebhookUrl = getTicketWebhookUrl()
  if (!ticketWebhookUrl || escalatedAlerts.length === 0) {
    return { ticketsCreated: 0, errors: [] as string[], ticketedAlertKeys: new Set<string>() }
  }

  const provider = getTicketProvider()
  const windowStartDate = toIsoDate(windowStart)
  const windowEndDate = toIsoDate(windowEnd)
  const ticketedAlertKeys = new Set<string>()
  const errors: string[] = []
  let ticketsCreated = 0

  for (const alert of escalatedAlerts) {
    const existing = await prisma.$queryRaw<{ id: bigint }[]>`
      SELECT "id"
      FROM "AdminAlertTicket"
      WHERE "alertKey" = ${alert.key}
        AND "windowStart" = ${windowStartDate}::date
        AND "windowEnd" = ${windowEndDate}::date
      LIMIT 1
    `

    if (existing.length > 0) {
      ticketedAlertKeys.add(alert.key)
      continue
    }

    const payload = {
      provider,
      type: 'funnel_critical_escalation',
      alert: {
        key: alert.key,
        metric: alert.metric,
        severity: alert.severity,
        previousValue: alert.previousValue,
        currentValue: alert.currentValue,
        deltaPct: alert.deltaPct,
        message: alert.message,
      },
      window: {
        start: windowStartDate,
        end: windowEndDate,
      },
      runbookUrl: runbookMap[alert.key] ?? null,
      owners: ownerEmailMap[alert.key] ?? [],
      adminUrl: `${APP_URL}/admin`,
    }

    try {
      const response = await fetch(ticketWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = await response.text().catch(() => '')
        throw new Error(`Ticket webhook failed with ${response.status}${body ? `: ${body.slice(0, 200)}` : ''}`)
      }

      const responseBody = await response.json().catch(() => ({} as Record<string, unknown>))
      const externalId =
        typeof responseBody.externalId === 'string'
          ? responseBody.externalId
          : typeof responseBody.ticketId === 'string'
          ? responseBody.ticketId
          : typeof responseBody.id === 'string'
          ? responseBody.id
          : null
      const ticketUrl =
        typeof responseBody.ticketUrl === 'string'
          ? responseBody.ticketUrl
          : typeof responseBody.url === 'string'
          ? responseBody.url
          : null
      const status = typeof responseBody.status === 'string' ? responseBody.status : 'created'

      await prisma.$executeRaw`
        INSERT INTO "AdminAlertTicket"
          ("alertKey", "windowStart", "windowEnd", "provider", "externalId", "ticketUrl", "status", "payload")
        VALUES
          (${alert.key}, ${windowStartDate}::date, ${windowEndDate}::date, ${provider}, ${externalId}, ${ticketUrl}, ${status}, ${JSON.stringify(payload)}::jsonb)
        ON CONFLICT ("alertKey", "windowStart", "windowEnd") DO NOTHING
      `

      ticketsCreated++
      ticketedAlertKeys.add(alert.key)
    } catch (error) {
      errors.push(error instanceof Error ? error.message : `Ticket creation failed for ${alert.key}`)
    }
  }

  return { ticketsCreated, errors, ticketedAlertKeys }
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
  channelsByAlertKey: Map<string, string[]>
) {
  const windowStartDate = toIsoDate(windowStart)
  const windowEndDate = toIsoDate(windowEnd)

  for (const alert of alerts) {
    const channelsUsed = channelsByAlertKey.get(alert.key) ?? []
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
  const currentCriticalAlertKeys = alerts.filter((a) => a.severity === 'critical').map((a) => a.key)

  const emailRecipients = getEmailRecipients()
  const webhookUrl = getWebhookUrl()
  const escalationEmailRecipients = getEscalationEmailRecipients()
  const escalationWebhookUrl = getEscalationWebhookUrl()
  const ticketWebhookUrl = getTicketWebhookUrl()
  const runbookMap = getRunbookUrlMap()

  if (
    emailRecipients.length === 0 &&
    !webhookUrl &&
    escalationEmailRecipients.length === 0 &&
    !escalationWebhookUrl &&
    !ticketWebhookUrl
  ) {
    const opsMetrics = await getAlertOpsMetrics()
    return {
      eligibleAlerts: 0,
      notifiedAlerts: 0,
      escalatedAlerts: 0,
      ticketsCreated: 0,
      runbooksIncluded: 0,
      opsMetrics,
      channelsUsed: [],
      skippedReason: 'No notification channels configured',
      errors: [],
    }
  }

  await ensureNotificationTable()
  await markRecoveredCriticalAlerts(currentCriticalAlertKeys)

  const cooldownHours = getCooldownHours()
  const eligibleAlerts = await getUnnotifiedCriticalAlerts(alerts, windowStart, windowEnd, cooldownHours)

  const opsMetrics = await getAlertOpsMetrics()

  if (eligibleAlerts.length === 0) {
    return {
      eligibleAlerts: 0,
      notifiedAlerts: 0,
      escalatedAlerts: 0,
      ticketsCreated: 0,
      runbooksIncluded: 0,
      opsMetrics,
      channelsUsed: [],
      skippedReason: 'No new critical alerts eligible for notification',
      errors: [],
    }
  }

  const channelsByAlertKey = new Map<string, string[]>()
  for (const alert of eligibleAlerts) {
    channelsByAlertKey.set(alert.key, [])
  }

  const addChannelForAlerts = (channel: string, targetAlerts: FunnelAlert[]) => {
    for (const alert of targetAlerts) {
      const current = channelsByAlertKey.get(alert.key) ?? []
      if (!current.includes(channel)) {
        current.push(channel)
        channelsByAlertKey.set(alert.key, current)
      }
    }
  }

  const channelsUsed: string[] = []
  const errors: string[] = []

  if (emailRecipients.length > 0) {
    try {
      const message = buildAlertEmail(eligibleAlerts, windowStart, windowEnd, runbookMap)
      await sendAdminAlertEmail({
        to: emailRecipients,
        subject: message.subject,
        text: message.text,
        html: message.html,
      })
      channelsUsed.push('email')
      addChannelForAlerts('email', eligibleAlerts)
    } catch (error) {
      errors.push(error instanceof Error ? error.message : 'Email delivery failed')
    }
  }

  if (webhookUrl) {
    try {
      await sendWebhookAlert(webhookUrl, eligibleAlerts, windowStart, windowEnd, runbookMap)
      channelsUsed.push('webhook')
      addChannelForAlerts('webhook', eligibleAlerts)
    } catch (error) {
      errors.push(error instanceof Error ? error.message : 'Webhook delivery failed')
    }
  }

  const escalatedAlerts = await getEscalatedAlerts(eligibleAlerts)
  const ownerEmailMap = parseOwnerEmailMap()

  if (escalatedAlerts.length > 0 && escalationEmailRecipients.length > 0) {
    for (const alert of escalatedAlerts) {
      const owners = ownerEmailMap[alert.key] ?? []
      const recipients = Array.from(new Set([...escalationEmailRecipients, ...owners]))
      if (recipients.length === 0) continue

      try {
        const message = buildAlertEmail([alert], windowStart, windowEnd, runbookMap)
        await sendAdminAlertEmail({
          to: recipients,
          subject: `[Escalation] ${message.subject}`,
          text: `${message.text}\n\nEscalation reason: repeated critical degradation across multiple windows.`,
          html: `${message.html}<p style="max-width:640px;margin:12px auto 0;color:#7f1d1d;font-weight:600;">Escalation reason: repeated critical degradation across multiple windows.</p>`,
        })

        if (!channelsUsed.includes('escalation_email')) channelsUsed.push('escalation_email')
        addChannelForAlerts('escalation_email', [alert])
      } catch (error) {
        errors.push(error instanceof Error ? error.message : `Escalation email failed for ${alert.key}`)
      }
    }
  }

  if (escalatedAlerts.length > 0 && escalationWebhookUrl) {
    try {
      await sendWebhookAlert(escalationWebhookUrl, escalatedAlerts, windowStart, windowEnd, runbookMap)
      if (!channelsUsed.includes('escalation_webhook')) channelsUsed.push('escalation_webhook')
      addChannelForAlerts('escalation_webhook', escalatedAlerts)
    } catch (error) {
      errors.push(error instanceof Error ? error.message : 'Escalation webhook delivery failed')
    }
  }

  const ticketResult = await createEscalationTickets(
    escalatedAlerts,
    windowStart,
    windowEnd,
    ownerEmailMap,
    runbookMap
  )
  if (ticketResult.ticketsCreated > 0 && !channelsUsed.includes('ticket')) {
    channelsUsed.push('ticket')
  }
  if (ticketResult.ticketedAlertKeys.size > 0) {
    addChannelForAlerts('ticket', eligibleAlerts.filter((a) => ticketResult.ticketedAlertKeys.has(a.key)))
  }
  errors.push(...ticketResult.errors)

  const runbooksIncluded = eligibleAlerts.reduce((count, alert) => {
    return count + (runbookMap[alert.key] ? 1 : 0)
  }, 0)

  const notifiedAlertCount = Array.from(channelsByAlertKey.values()).filter((channels) => channels.length > 0).length
  const anyNotificationSent = notifiedAlertCount > 0
  if (anyNotificationSent) {
    await recordNotifications(eligibleAlerts, windowStart, windowEnd, channelsByAlertKey)
  }

  return {
    eligibleAlerts: eligibleAlerts.length,
    notifiedAlerts: notifiedAlertCount,
    escalatedAlerts: escalatedAlerts.length,
    ticketsCreated: ticketResult.ticketsCreated,
    runbooksIncluded,
    opsMetrics,
    channelsUsed,
    errors,
    skippedReason: !anyNotificationSent ? 'All notification channels failed' : undefined,
  }
}
