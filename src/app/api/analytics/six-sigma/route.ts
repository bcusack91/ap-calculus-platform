import { NextRequest, NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { effectiveIsPaid } from '@/lib/effective-role'
import { generateSixSigmaAnalytics, PerformanceDataPoint } from '@/utils/six-sigma-analytics'

export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Advanced (Six Sigma) analytics is a Premium feature. Enforce server-side
    // so the gate can't be bypassed by calling the API directly; the dashboard
    // UI shows an upgrade prompt to free users.
    if (!(await effectiveIsPaid(session.user.role))) {
      return NextResponse.json({ error: 'Premium required', upgrade: true }, { status: 403 })
    }

    const searchParams = request.nextUrl.searchParams
    const topicSlug = searchParams.get('topicSlug')
    const userId = session.user.id

    if (!topicSlug) {
      return NextResponse.json({ error: 'Topic slug required' }, { status: 400 })
    }

    // Fetch real performance data from database
    const performanceRecords = await prisma.factoringPerformanceMetrics.findMany({
      where: { userId },
      orderBy: { timestamp: 'asc' },
    })

    let dataPoints: PerformanceDataPoint[]

    if (performanceRecords.length > 0) {
      // General quiz metrics store the topic slug in `problemType`; map those to
      // readable topic titles so the per-type breakdown reads as a per-topic
      // breakdown. Legacy factoring values (e.g. 'gcf') have no topic and pass
      // through unchanged.
      const distinctTypes = Array.from(new Set(performanceRecords.map(r => r.problemType)))
      const topics = await prisma.topic.findMany({
        where: { slug: { in: distinctTypes } },
        select: { slug: true, title: true },
      })
      const titleBySlug = new Map(topics.map(t => [t.slug, t.title]))

      // Use real data
      dataPoints = performanceRecords.map(record => ({
        timestamp: record.timestamp,
        isCorrect: record.isCorrect,
        problemType: titleBySlug.get(record.problemType) || record.problemType,
        timeToAnswer: record.timeToAnswer,
        attemptNumber: record.attemptNumber,
        errorType: record.errorType || undefined,
        errorCategory: record.errorCategory || undefined,
        hintsUsed: record.hintsUsed,
      }))
    } else {
      // Not enough data — return empty analytics
      return NextResponse.json({
        success: true,
        analytics: null,
        dataPointCount: 0,
        message: 'Not enough performance data yet. Complete some practice problems to see analytics.',
      })
    }

    // Generate Six Sigma analytics
    const analytics = generateSixSigmaAnalytics(dataPoints)

    // Persist computed metrics
    await prisma.sixSigmaMetrics.upsert({
      where: {
        userId_topicSlug: { userId, topicSlug },
      },
      create: {
        userId,
        topicSlug,
        accuracyMean: analytics.controlChart.accuracyMean,
        accuracyStdDev: analytics.controlChart.accuracyStdDev,
        upperControlLimit: analytics.controlChart.upperControlLimit,
        lowerControlLimit: analytics.controlChart.lowerControlLimit,
        avgTimePerProblem: Object.values(analytics.typeBreakdown)[0]?.avgTime ?? 0,
        timeStdDev: 0,
        totalAttempts: analytics.qualityMetrics.totalAttempts,
        totalErrors: analytics.qualityMetrics.totalErrors,
        dpmo: analytics.qualityMetrics.dpmo,
        sigmaLevel: analytics.qualityMetrics.sigmaLevel,
        cpk: analytics.processCapability.cpk,
        cp: analytics.processCapability.cp,
        performanceByType: analytics.typeBreakdown as Prisma.InputJsonValue,
        trendDirection: 'stable',
        consecutiveCorrect: 0,
        longestStreak: 0,
        hasOutliers: analytics.controlChart.outOfControlPoints > 0,
        outlierCount: analytics.controlChart.outOfControlPoints,
      },
      update: {
        accuracyMean: analytics.controlChart.accuracyMean,
        accuracyStdDev: analytics.controlChart.accuracyStdDev,
        upperControlLimit: analytics.controlChart.upperControlLimit,
        lowerControlLimit: analytics.controlChart.lowerControlLimit,
        avgTimePerProblem: Object.values(analytics.typeBreakdown)[0]?.avgTime ?? 0,
        totalAttempts: analytics.qualityMetrics.totalAttempts,
        totalErrors: analytics.qualityMetrics.totalErrors,
        dpmo: analytics.qualityMetrics.dpmo,
        sigmaLevel: analytics.qualityMetrics.sigmaLevel,
        cpk: analytics.processCapability.cpk,
        cp: analytics.processCapability.cp,
        performanceByType: analytics.typeBreakdown as Prisma.InputJsonValue,
        hasOutliers: analytics.controlChart.outOfControlPoints > 0,
        outlierCount: analytics.controlChart.outOfControlPoints,
        calculatedAt: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      analytics,
      dataPointCount: dataPoints.length,
    })
  } catch (error) {
    console.error('Six Sigma analytics error:', error)
    return NextResponse.json(
      { error: 'Failed to generate analytics' },
      { status: 500 }
    )
  }
}
