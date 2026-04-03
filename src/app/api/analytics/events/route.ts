import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const bodySchema = z.object({
  eventName: z.string().min(1).max(120),
  params: z.object({}).catchall(z.union([z.string(), z.number(), z.boolean()])).optional(),
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
    );

    CREATE INDEX IF NOT EXISTS "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent" ("createdAt");
    CREATE INDEX IF NOT EXISTS "AnalyticsEvent_eventName_idx" ON "AnalyticsEvent" ("eventName");
    CREATE INDEX IF NOT EXISTS "AnalyticsEvent_pageTemplate_idx" ON "AnalyticsEvent" ("pageTemplate");
    CREATE INDEX IF NOT EXISTS "AnalyticsEvent_ctaType_idx" ON "AnalyticsEvent" ("ctaType");
  `)
  tableReady = true
}

export async function POST(req: NextRequest) {
  try {
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
