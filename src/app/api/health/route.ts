import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * GET /api/health — Health check endpoint for uptime monitoring.
 * Returns OK if the server and database are reachable.
 *
 * Security: to unauthenticated callers in production we expose only a minimal
 * { status } so we don't leak environment, version, uptime, or process memory
 * internals (useful for fingerprinting / capacity probing). Richer diagnostics
 * are returned only when the caller proves they are an operator by presenting
 * the HEALTH_CHECK_SECRET via the `x-health-secret` header (or outside prod,
 * where it's handy for local debugging).
 */
export async function GET(request: Request) {
  const start = Date.now()

  const healthSecret = process.env.HEALTH_CHECK_SECRET
  const providedSecret = request.headers.get('x-health-secret')
  const isAuthorized =
    process.env.NODE_ENV !== 'production' ||
    (!!healthSecret && providedSecret === healthSecret)

  try {
    // Check database connectivity with a lightweight query
    await prisma.$queryRaw`SELECT 1`

    const dbLatency = Date.now() - start

    // Minimal response for unauthenticated/public callers — keeps the 200 that
    // uptime monitors expect without disclosing internals.
    if (!isAuthorized) {
      return NextResponse.json({ status: 'ok' })
    }

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
    // Public callers get an opaque failure; operators get the DB error detail.
    return NextResponse.json(
      isAuthorized
        ? {
            status: 'unhealthy',
            timestamp: new Date().toISOString(),
            checks: {
              database: { status: 'error', error: message },
            },
          }
        : { status: 'error' },
      { status: 503 }
    )
  }
}
