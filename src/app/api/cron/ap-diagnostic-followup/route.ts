import { coursesTopicWhere } from '@/lib/course-includes'
import { NextResponse, type NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendApDiagnosticFollowupEmail } from '@/lib/email'
import { requireCronSecret } from '@/lib/cron-auth'
import {
  AP_FOLLOWUP_COURSES,
  AP_FOLLOWUP_EVENT,
  buildFollowupContext,
  followupWindow,
  selectFollowupRecipients,
  type FollowupDiagnostic,
  type LessonSignal,
} from '@/lib/ap-diagnostic-followup'

/**
 * AP diagnostic follow-up cron — call once a day via Vercel Cron.
 *
 * Emails students whose most recent AP diagnostic was taken 24–48 hours ago
 * and who have not opened a lesson in that course since (targeting rules and
 * the one-run-per-diagnostic argument: src/lib/ap-diagnostic-followup.ts).
 *
 * Ships dark: sendEmail throws without RESEND_API_KEY, so every send is
 * wrapped — a failure is logged and counted, never fatal. A successful send
 * writes an `ap_followup_email_sent` AnalyticsEvent naming the diagnostic,
 * which a replayed run skips; an in-memory set guards double-sends within
 * the run.
 *
 * Vercel Cron config in vercel.json:
 *   { "path": "/api/cron/ap-diagnostic-followup", "schedule": "0 22 * * *" }
 * 22:00 UTC = 6 pm Eastern / 3 pm Pacific, a US evening send.
 */
export async function GET(request: NextRequest) {
  const unauthorized = requireCronSecret(request)
  if (unauthorized) return unauthorized

  try {
    const now = new Date()
    const { from, to } = followupWindow(now)
    const categoryFilter = AP_FOLLOWUP_COURSES.map((c) => ({ category: { startsWith: c.categoryPrefix } }))
    const courseSlugs = AP_FOLLOWUP_COURSES.map((c) => c.courseSlug)

    const diagnostics = await prisma.diagnosticTest.findMany({
      where: { createdAt: { gte: from, lt: to }, OR: categoryFilter },
      select: {
        id: true,
        userId: true,
        category: true,
        createdAt: true,
        results: true,
        weakAreas: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            emailVerified: true,
            accounts: { select: { id: true }, take: 1 },
          },
        },
      },
    })

    const empty = { ok: true, eligible: 0, sent: 0, skipped: 0, failed: 0, skippedBy: {} as Record<string, number> }
    if (diagnostics.length === 0) return NextResponse.json(empty)

    const userIds = [...new Set(diagnostics.map((d) => d.userId))]

    const [newer, optedOut, markers, topicProgress, activeTime, questionActivity, exitAttempts] = await Promise.all([
      // Anyone with a later AP diagnostic: their most recent sitting is not in the window.
      prisma.diagnosticTest.findMany({
        where: { userId: { in: userIds }, createdAt: { gte: to }, OR: categoryFilter },
        select: { userId: true },
        distinct: ['userId'],
      }),
      // CAN-SPAM opt-outs, keyed by email like the other crons.
      prisma.emailSubscriber.findMany({ where: { unsubscribed: true }, select: { email: true } }),
      // Dedupe markers: written at send time, so always after the window's start.
      prisma.analyticsEvent.findMany({
        where: { eventName: AP_FOLLOWUP_EVENT, createdAt: { gte: from } },
        select: { metadata: true },
      }),
      // Lesson signals since the window opened — the funnel's definition.
      prisma.topicProgress.findMany({
        where: { userId: { in: userIds }, lastAccessed: { gte: from }, topic: coursesTopicWhere(courseSlugs) },
        select: { userId: true, lastAccessed: true, topic: { select: { category: { select: { course: { select: { slug: true } } } } } } },
      }),
      prisma.activeTimeDaily.findMany({
        where: { userId: { in: userIds }, courseSlug: { in: courseSlugs }, surface: { in: ['LESSON', 'ENTRANCE_QUIZ'] }, day: { gte: new Date(from.getTime() - 86_400_000) } },
        select: { userId: true, courseSlug: true, day: true },
      }),
      prisma.questionActivity.findMany({
        where: { userId: { in: userIds }, courseSlug: { in: courseSlugs }, source: { in: ['LESSON', 'ENTRANCE'] }, answeredAt: { gte: from } },
        select: { userId: true, courseSlug: true, answeredAt: true },
      }),
      prisma.exitQuizAttempt.findMany({
        where: { userId: { in: userIds }, completedAt: { gte: from } },
        select: { userId: true, topicSlug: true, startedAt: true },
      }),
    ])

    const exitTopicSlugs = [...new Set(exitAttempts.map((a) => a.topicSlug))]
    const exitTopics = exitTopicSlugs.length
      ? await prisma.topic.findMany({
          where: { slug: { in: exitTopicSlugs } },
          select: { slug: true, category: { select: { course: { select: { slug: true } } } } },
        })
      : []
    const courseOfTopicSlug = new Map(exitTopics.map((t) => [t.slug, t.category.course.slug]))

    const lessonSignals: LessonSignal[] = [
      ...topicProgress.map((r) => ({ userId: r.userId, courseSlug: r.topic.category.course.slug, at: r.lastAccessed })),
      // A day row covers the whole UTC day, so it is dated at the end of that
      // day: a lesson on the diagnostic's own day counts as "since" (same
      // granularity as the funnel report).
      ...activeTime.map((r) => ({ userId: r.userId, courseSlug: r.courseSlug, at: new Date(r.day.getTime() + 86_400_000 - 1) })),
      ...questionActivity.map((r) => ({ userId: r.userId, courseSlug: r.courseSlug, at: r.answeredAt })),
      ...exitAttempts
        .filter((a) => courseOfTopicSlug.has(a.topicSlug))
        .map((a) => ({ userId: a.userId, courseSlug: courseOfTopicSlug.get(a.topicSlug)!, at: a.startedAt })),
    ]

    const sentDiagnosticIds = new Set<string>()
    for (const m of markers) {
      const id = m.metadata && typeof m.metadata === 'object' && !Array.isArray(m.metadata) ? (m.metadata as { diagnosticId?: unknown }).diagnosticId : null
      if (typeof id === 'string') sentDiagnosticIds.add(id)
    }

    const candidates: FollowupDiagnostic[] = diagnostics.map((d) => ({
      id: d.id,
      userId: d.userId,
      category: d.category,
      createdAt: d.createdAt,
      results: d.results,
      weakAreas: d.weakAreas,
      user: {
        id: d.user.id,
        email: d.user.email,
        name: d.user.name,
        role: d.user.role,
        emailVerified: d.user.emailVerified,
        hasOAuthAccount: d.user.accounts.length > 0,
      },
    }))

    const selection = selectFollowupRecipients({
      diagnostics: candidates,
      newerDiagnosticUserIds: new Set(newer.map((n) => n.userId)),
      lessonSignals,
      optedOutEmails: new Set(optedOut.map((s) => s.email.toLowerCase())),
      sentDiagnosticIds,
      now,
    })

    // Production titles for the topic-1 buttons.
    const contexts = selection.recipients.map((d) => buildFollowupContext(d, { now }))
    const topicSlugs = [...new Set(contexts.flatMap((c) => (c?.topic ? [c.topic.slug] : [])))]
    const topics = topicSlugs.length
      ? await prisma.topic.findMany({ where: { slug: { in: topicSlugs } }, select: { slug: true, title: true } })
      : []
    const topicTitles = new Map(topics.map((t) => [t.slug, t.title]))

    let sent = 0
    let failed = 0
    const sentThisRun = new Set<string>()

    for (const d of selection.recipients) {
      // Double-send guard within the run (one email per student per diagnostic).
      if (sentThisRun.has(d.id) || sentThisRun.has(`user:${d.userId}`)) continue
      const ctx = buildFollowupContext(d, { now, topicTitles })
      if (!ctx) continue
      sentThisRun.add(d.id)
      sentThisRun.add(`user:${d.userId}`)

      try {
        await sendApDiagnosticFollowupEmail(ctx)
        sent++
      } catch (err) {
        // Fail soft per recipient: no RESEND_API_KEY, a provider error, a bad
        // address — log without the address and move on.
        failed++
        console.error(`[ap-diagnostic-followup] send failed for diagnostic ${d.id} (${ctx.courseSlug}, ${ctx.variant}):`, err instanceof Error ? err.message : err)
        continue
      }

      try {
        await prisma.analyticsEvent.create({
          data: {
            eventName: AP_FOLLOWUP_EVENT,
            courseSlug: ctx.courseSlug,
            topicSlug: ctx.topic?.slug ?? null,
            destination: ctx.variant === 'exam-week' ? ctx.paths.flashcards : ctx.paths.lesson,
            metadata: { diagnosticId: d.id, variant: ctx.variant, daysToExam: ctx.daysToExam },
          },
        })
      } catch (err) {
        console.error(`[ap-diagnostic-followup] marker write failed for diagnostic ${d.id}:`, err instanceof Error ? err.message : err)
      }
    }

    const skipped = Object.values(selection.skipped).reduce((a, b) => a + (b ?? 0), 0)
    return NextResponse.json({
      ok: true,
      eligible: selection.recipients.length,
      sent,
      skipped,
      failed,
      skippedBy: selection.skipped,
      window: { from: from.toISOString(), to: to.toISOString() },
    })
  } catch (error) {
    console.error('AP diagnostic follow-up cron error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
