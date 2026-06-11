import crypto from 'crypto'
import { NextResponse } from 'next/server'

/**
 * Authorize a cron request via the `Authorization: Bearer <CRON_SECRET>` header.
 *
 * Returns `null` when the request is authorized, or a 401 NextResponse otherwise.
 *
 * Security notes:
 * - Rejects ALL requests when CRON_SECRET is missing/empty (previously the
 *   expected header degenerated to the literal string "Bearer undefined").
 * - Uses crypto.timingSafeEqual on equal-length buffers to avoid timing leaks.
 */
export function requireCronSecret(request: Request): NextResponse | null {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    console.error(
      '[cron-auth] CRON_SECRET is not configured — rejecting cron request. ' +
        'Set CRON_SECRET in the environment to enable cron endpoints.'
    )
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const authHeader = request.headers.get('authorization') ?? ''
  const expected = Buffer.from(`Bearer ${secret}`, 'utf8')
  const provided = Buffer.from(authHeader, 'utf8')

  if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return null
}
