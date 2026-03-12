import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * GET /api/health — Health check endpoint for uptime monitoring.
 * Returns OK if the server and database are reachable.
 */
export async function GET() {
  const start = Date.now()

  try {
    // Check database connectivity with a lightweight query
    await prisma.$queryRaw`SELECT 1`

    const dbLatency = Date.now() - start

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      checks: {
        database: { status: 'ok', latencyMs: dbLatency },
        memory: {
          heapUsedMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          heapTotalMB: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
          rssMB: Math.round(process.memoryUsage().rss / 1024 / 1024),
        },
      },
      version: process.env.npm_package_version || '0.1.0',
      environment: process.env.NODE_ENV,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        checks: {
          database: { status: 'error', error: message },
        },
      },
      { status: 503 }
    )
  }
}
