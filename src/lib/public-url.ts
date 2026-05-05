const DEFAULT_PUBLIC_APP_URL = 'https://www.studymondo.com'

function normalizeUrl(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`

  try {
    const url = new URL(withProtocol)
    return url.origin
  } catch {
    return null
  }
}

function isLocalUrl(value: string): boolean {
  try {
    const { hostname } = new URL(value)
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1'
  } catch {
    return false
  }
}

export function getPublicAppUrl(): string {
  const candidates = [
    process.env.EMAIL_PUBLIC_APP_URL,
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.NEXTAUTH_URL,
    process.env.VERCEL_URL,
  ]

  for (const candidate of candidates) {
    if (!candidate) continue

    const normalized = normalizeUrl(candidate)
    if (!normalized) continue


    if (isLocalUrl(normalized) && process.env.ALLOW_LOCAL_EMAIL_LINKS !== 'true') {
      continue
    }

    return normalized
  }

  return DEFAULT_PUBLIC_APP_URL
}