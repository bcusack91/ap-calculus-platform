import { MetadataRoute } from 'next'

// Auth-walled / sensitive sections that crawlers should not spend budget on and
// that should never appear in results (they just redirect to sign-in). Kept in
// one place so every crawler rule stays consistent — previously /admin/ was only
// disallowed for the wildcard rule, not for Googlebot/Bingbot.
const DISALLOWED = [
  '/api/',
  '/auth/',
  '/admin/',
  '/dashboard/',
  '/profile/',
  '/teacher/',
  '/onboarding/',
  '/notes', // personal notes collection — auth-gated, nothing to index
  '/progress', // personal study history — auth-gated, nothing to index

  '/competitive/', // the /competitive hub (no trailing slash) stays crawlable
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: DISALLOWED,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: DISALLOWED,
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED,
      },
    ],
    sitemap: 'https://www.studymondo.com/sitemap.xml',
  }
}
