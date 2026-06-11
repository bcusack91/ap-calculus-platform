import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit-v2'
import { getRedis } from '@/lib/redis'

// Abuse controls: this is an unauthenticated insert endpoint, so cap both the
// request rate (per IP) and the size/shape of what a single event can store.
const MAX_PARAM_KEYS = 20
const MAX_PARAMS_JSON_LENGTH = 2000

// 30 events/min per IP. Backed by Upstash Redis when configured; rate-limit-v2
// transparently falls back to per-instance in-memory limiting otherwise
// (fail-open across instances — we log loudly below so it gets configured).
const analyticsLimiter = rateLimit({ maxRequests: 30, windowMs: 60_000, prefix: 'analytics_events' })
let warnedNoRedis = false

const bodySchema = z.object({
  eventName: z.string().min(1).max(120),
  params: z
    .object({})
    .catchall(z.union([z.string().max(500), z.number(), z.boolean()]))
    .optional()
    .refine((p) => p === undefined || Object.keys(p).length <= MAX_PARAM_KEYS, {
      message: `params must have at most ${MAX_PARAM_KEYS} keys`,
    })
    .refine((p) => p === undefined || JSON.stringify(p).length <= MAX_PARAMS_JSON_LENGTH, {
      message: `params must serialize to at most ${MAX_PARAMS_JSON_LENGTH} characters`,
    }),
})

let tableReady = false

async function ensureEventsTable() {
  if (tableReady) return
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AnalyticsEvent" (
      "id" BIGSERIAL PRIMARY KEY,
      "eventName" TEXT NOT NULL,
      "pageTemplate" TEXT,
      "ctaType" TEXT,
      "location" TEXT,
      "destination" TEXT,
      "courseSlug" TEXT,
      "topicSlug" TEXT,
      "metadata" JSONB,
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
  await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent" ("createdAt")`)
  await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "AnalyticsEvent_eventName_idx" ON "AnalyticsEvent" ("eventName")`)
  await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "AnalyticsEvent_pageTemplate_idx" ON "AnalyticsEvent" ("pageTemplate")`)
  await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "AnalyticsEvent_ctaType_idx" ON "AnalyticsEvent" ("ctaType")`)
  tableReady = true
}

export async function POST(req: NextRequest) {
  try {
    // Per-IP rate limit before any parsing/DB work
    if (!getRedis() && !warnedNoRedis) {
      warnedNoRedis = true
      console.error(
        '[analytics/events] RATE LIMITER NOT DISTRIBUTED: Upstash Redis is not configured — ' +
        'falling back to per-instance in-memory rate limiting (fail-open across instances). ' +
        'Configure UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.'
      )
    }
    const ip = getClientIp(req)
    const { success } = await analyticsLimiter.check(ip)
    if (!success) {
      return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 })
    }

    const parsed = bodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
    }

    const { eventName, params = {} } = parsed.data

    await ensureEventsTable()

    await prisma.$executeRaw`
      INSERT INTO "AnalyticsEvent"
        ("eventName", "pageTemplate", "ctaType", "location", "destination", "courseSlug", "topicSlug", "metadata")
      VALUES
        (
          ${eventName},
          ${typeof params.page_template === 'string' ? params.page_template : null},
          ${typeof params.cta_type === 'string' ? params.cta_type : null},
          ${typeof params.location === 'string' ? params.location : null},
          ${typeof params.destination === 'string' ? params.destination : null},
          ${typeof params.course_slug === 'string' ? params.course_slug : null},
          ${typeof params.topic_slug === 'string' ? params.topic_slug : null},
          ${JSON.stringify(params)}::jsonb
        )
    `

    return NextResponse.json({ ok: true })
  } catch {
    // Keep endpoint quiet because analytics should not break product flows.
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
