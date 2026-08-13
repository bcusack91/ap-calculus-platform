import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// ── API Rate Limiter (optional — skipped if Upstash not configured) ──
let apiRatelimit: Ratelimit | null = null
let authRatelimit: Ratelimit | null = null
let gameRatelimit: Ratelimit | null = null

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })
  // General API: 60 requests per 60 seconds per IP
  apiRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(60, '60 s'),
    prefix: 'rl:api',
    analytics: true,
  })
  // Auth endpoints: stricter — 30 requests per 60 seconds per IP
  // (OAuth flows like Google involve multiple internal round-trips)
  authRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(30, '60 s'),
    prefix: 'rl:auth',
    analytics: true,
  })
  // Competitive gameplay polls every ~500ms and is used by whole classrooms
  // behind a single school IP, so the general IP limiter throttles legit play.
  // These endpoints are limited per USER with a generous budget instead (a
  // single match is ~180 req/min; 600 leaves headroom while still bounding a
  // runaway/abusive client).
  gameRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(600, '60 s'),
    prefix: 'rl:game',
    analytics: true,
  })
} else if (process.env.NODE_ENV === 'production') {
  // Fail loudly: a production deploy with no Upstash config silently has NO
  // API rate limiting. Surface it in logs so a misconfiguration is visible
  // rather than discovered during an incident.
  console.error(
    '[middleware] WARNING: UPSTASH_REDIS_REST_URL/TOKEN are not set in production — ' +
      'API rate limiting is DISABLED. Configure Upstash to restore protection.'
  )
}

// Mutating endpoints that are intentionally called without a browser Origin
// (webhooks, cron) and authenticate via signature / Bearer secret instead of
// session cookies — so they are inherently immune to CSRF and exempt from the
// Origin check below.
const CSRF_EXEMPT_PREFIXES = ['/api/stripe/webhook', '/api/cron/']

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

export async function middleware(request: NextRequest) {
  const { nextUrl } = request

  // ── CSRF Origin Check for mutating API requests ──
  if (nextUrl.pathname.startsWith('/api/') && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
    const isCsrfExempt = CSRF_EXEMPT_PREFIXES.some((p) => nextUrl.pathname.startsWith(p))
    if (!isCsrfExempt) {
      const origin = request.headers.get('origin')
      const host = request.headers.get('host')
      // Browsers always send an Origin header on mutating (POST/PUT/PATCH/DELETE)
      // cross-origin AND same-origin requests, so a missing Origin on a
      // non-exempt mutating request is treated as a failed CSRF check rather
      // than silently allowed.
      if (!origin || !host || new URL(origin).host !== host) {
        return NextResponse.json(
          { error: 'Invalid origin' },
          { status: 403 }
        )
      }
    }
  }

  // ── API Rate Limiting ──
  if (nextUrl.pathname.startsWith('/api/')) {
    // Skip rate limiting for health check
    if (nextUrl.pathname === '/api/health') {
      return NextResponse.next()
    }

    const ip = getClientIp(request)

    // High-frequency-by-design endpoints shared across a classroom's single
    // IP: competitive gameplay (match/queue polling), live class sessions
    // (chat every 4s, whiteboard sync every 3s, slide-deck sync every 2.5s —
    // one participant is ~60-85 req/min, at the IP limit ALONE), and teacher
    // lobby gameplay. Limit these per authenticated USER with a generous
    // budget so a shared school IP isn't throttled mid-class, while a single
    // user still can't hammer the API.
    const isHighFrequency =
      nextUrl.pathname.startsWith('/api/competitive/') ||
      nextUrl.pathname.startsWith('/api/live-sessions/') ||
      nextUrl.pathname.startsWith('/api/teacher/lobby/')
    if (isHighFrequency && gameRatelimit) {
      try {
        const secureCookie = nextUrl.protocol === 'https:'
        const cookieName = secureCookie ? '__Secure-authjs.session-token' : 'authjs.session-token'
        const gameToken = await getToken({
          req: request,
          secret: process.env.AUTH_SECRET,
          secureCookie,
          cookieName,
          salt: cookieName,
        })
        const key = gameToken?.sub ? `user:${gameToken.sub}` : `ip:${ip}`
        const { success, limit, reset } = await gameRatelimit.limit(key)
        if (!success) {
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': limit.toString(),
                'X-RateLimit-Remaining': '0',
                'X-RateLimit-Reset': reset.toString(),
                'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
              },
            }
          )
        }
        return NextResponse.next()
      } catch (err) {
        // Fail open — a rate-limiter blip must not break live matches.
        console.error('[middleware] game rate limiter error (failing open):', err)
        return NextResponse.next()
      }
    }

    // Use stricter limiter for auth endpoints, but exclude NextAuth
    // internal routes (callback, session, csrf, providers) since OAuth
    // flows involve multiple rapid internal round-trips.
    // Exception: the credentials callback is the password sign-in endpoint
    // (a brute-force target), so it stays on the strict auth limiter.
    const isAuthEndpoint = nextUrl.pathname.startsWith('/api/auth/')
    const isCredentialsCallback = nextUrl.pathname.startsWith('/api/auth/callback/credentials')
    const isNextAuthInternal =
      !isCredentialsCallback &&
      /^\/api\/auth\/(callback|session|csrf|providers)/.test(nextUrl.pathname)
    const limiter = (isAuthEndpoint && !isNextAuthInternal) ? authRatelimit : apiRatelimit

    if (limiter) {
      try {
        const { success, limit, remaining, reset } = await limiter.limit(ip)

        if (!success) {
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': limit.toString(),
                'X-RateLimit-Remaining': '0',
                'X-RateLimit-Reset': reset.toString(),
                'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
              },
            }
          )
        }

        // Attach rate limit headers to the response
        const response = NextResponse.next()
        response.headers.set('X-RateLimit-Limit', limit.toString())
        response.headers.set('X-RateLimit-Remaining', remaining.toString())
        response.headers.set('X-RateLimit-Reset', reset.toString())
        return response
      } catch (err) {
        // Fail open for availability (a Redis blip shouldn't take down the API),
        // but log it so transient rate-limiter failures are visible rather than silent.
        console.error('[middleware] rate limiter error (failing open):', err)
        return NextResponse.next()
      }
    }

    return NextResponse.next()
  }

  // ── Page Route Auth Protection ──

  // Async challenge pages are publicly reachable so that link unfurlers
  // (iMessage, Twitter, Facebook, Slack, Discord, etc.) can fetch the
  // generated `opengraph-image` / `twitter-image` routes to show a rich
  // preview. The page itself client-side redirects unauthenticated visitors
  // to /auth/signin with a `callbackUrl` so humans still have to sign in.
  if (nextUrl.pathname.startsWith('/competitive/async/')) {
    return NextResponse.next()
  }

  // NextAuth v5 uses 'authjs.session-token' (HTTP) or '__Secure-authjs.session-token' (HTTPS)
  const secureCookie = nextUrl.protocol === 'https:'
  const cookieName = secureCookie
    ? '__Secure-authjs.session-token'
    : 'authjs.session-token'

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    secureCookie,
    cookieName,
    salt: cookieName,
  })

  if (!token) {
    const signInUrl = new URL('/auth/signin', nextUrl.origin)
    signInUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  const role = token.role as string

  // Role-based protection for teacher routes
  if (nextUrl.pathname.startsWith('/teacher')) {
    // Exception: /teacher/lobby/<id> and /teacher/lobby/<id>/play are also viewable
    // by student participants. Per-user access is enforced inside the page + APIs.
    const isTeacherLobbyShared = /^\/teacher\/lobby\/[^/]+(\/play)?\/?$/.test(nextUrl.pathname)
    if (!isTeacherLobbyShared && role !== 'TEACHER' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', nextUrl.origin))
    }
  }

  // Role-based protection for admin routes
  if (nextUrl.pathname.startsWith('/admin')) {
    if (role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', nextUrl.origin))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/teacher/:path*',
    '/admin/:path*',
    '/competitive/:path*',
    '/api/:path*',
  ],
}
