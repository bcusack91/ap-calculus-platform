import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import withBundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeKatex from "rehype-katex";

const analyzeBundles = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  webpack(config) {
    config.ignoreWarnings = [
      ...(config.ignoreWarnings ?? []),
      {
        module: /@opentelemetry\/instrumentation/,
        message: /Critical dependency: the request of a dependency is an expression/,
      },
    ]

    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async headers() {
    const isDev = process.env.NODE_ENV === 'development'
    const scriptSrc = [
      "script-src 'self' 'unsafe-inline'",
      isDev ? "'unsafe-eval'" : '',
      'https://pagead2.googlesyndication.com',
      'https://www.googletagmanager.com',
      'https://adservice.google.com',
      'https://ep1.adtrafficquality.google',
      'https://ep2.adtrafficquality.google',
      'https://va.vercel-scripts.com',
      'https://cdn.jsdelivr.net',
      'https://www.clarity.ms',
      'https://*.clarity.ms',
      // JaaS external_api.js — loaded by the embedded conference room in live
      // class sessions (see src/app/live/[id]/page.tsx).
      'https://8x8.vc',
    ]
      .filter(Boolean)
      .join(' ')

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            // Camera/mic/screen-share are for the embedded JaaS conference room
            // (8x8.vc) in live class sessions. `self` MUST be in these
            // allowlists: Chrome treats delegation as a chain, so a feature the
            // top-level document is not allowed for its own origin is disabled
            // for every child frame too — allow attributes notwithstanding.
            // Delegation-only lists like camera=("https://8x8.vc") silently
            // deny the camera INSIDE the 8x8 iframe with no prompt (Safari
            // doesn't enforce this header, which is how the gap hid).
            // autoplay/fullscreen are delegated to the video embeds so the
            // webcast player and conference behave normally.
            key: 'Permissions-Policy',
            value: [
              'camera=(self "https://8x8.vc")',
              'microphone=(self "https://8x8.vc")',
              'display-capture=(self "https://8x8.vc")',
              'autoplay=(self "https://8x8.vc" "https://www.youtube-nocookie.com" "https://www.youtube.com")',
              'fullscreen=(self "https://8x8.vc" "https://www.youtube-nocookie.com" "https://www.youtube.com")',
              'geolocation=()',
              'interest-cohort=()',
              'payment=(self)',
            ].join(', ')
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              scriptSrc,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
              "connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://ep1.adtrafficquality.google https://*.adtrafficquality.google https://*.sentry.io https://www.clarity.ms https://*.clarity.ms https://8x8.vc",
              // Live class sessions frame video: YouTube for webcast mode,
              // 8x8.vc for the embedded JaaS conference room. Without these the
              // browser refuses the iframe ("This content is blocked").
              "frame-src 'self' https://googleads.g.doubleclick.net https://www.google.com https://tpc.googlesyndication.com https://ep2.adtrafficquality.google https://www.youtube-nocookie.com https://www.youtube.com https://8x8.vc",
              // Excalidraw (live-session whiteboards) spawns same-origin/blob
              // web workers; without this they fall back to default-src.
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join('; ')
          },
        ],
      },
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8'
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ads.txt',
        destination: '/ads.txt',
      },
    ]
  },
  async redirects() {
    // Legacy AP Calculus micro-lesson topics → consolidated standard parent topics.
    // Each pair below redirects both /topics/{micro} and /topics/{micro}/interactive
    // to the corresponding parent standard topic, which has a hand-crafted 7-part
    // interactive lesson and entrance quiz (AP Chemistry standard).
    const microLessonRedirects: Record<string, string> = {
      // AB: Limits & Continuity
      // The 11 canonical Limits topics (what-is-a-limit, estimating-limits-tables,
      // estimating-limits-graphs, one-sided-limits, direct-substitution-method,
      // factoring-method-limits, rationalizing-technique-limits, limits-at-infinity,
      // infinite-limits-vertical-asymptotes, continuity-introduction,
      // types-of-discontinuity) live as standalone topics with their own
      // interactive lessons + entrance quizzes — DO NOT redirect them.
      // Only the 7 deleted-duplicate slugs forward to the hub.
      'limit-notation-terminology': 'limits-continuity-calcab',
      'one-sided-limits-in-detail': 'limits-continuity-calcab',
      'introduction-to-limits': 'limits-continuity-calcab',
      'evaluating-limits-graphically': 'limits-continuity-calcab',
      'evaluating-limits-algebraically': 'limits-continuity-calcab',
      'indeterminate-forms-factoring': 'limits-continuity-calcab',
      'rationalizing-techniques': 'limits-continuity-calcab',
      // AB: Derivatives
      'what-is-a-derivative': 'definition-of-derivative-calcab',
      'derivative-notation': 'definition-of-derivative-calcab',
      'derivative-as-slope': 'definition-of-derivative-calcab',
      'derivative-as-rate-of-change': 'definition-of-derivative-calcab',
      'power-rule-basics': 'basic-differentiation-rules-calcab',
      'constant-multiple-sum-rules': 'basic-differentiation-rules-calcab',
      'product-rule': 'basic-differentiation-rules-calcab',
      'quotient-rule': 'basic-differentiation-rules-calcab',
      'chain-rule': 'chain-rule-calcab',
      'derivatives-of-trig-functions': 'derivatives-exp-log-calcab',
      'derivatives-of-exponential-functions': 'derivatives-exp-log-calcab',
      'derivatives-of-logarithmic-functions': 'derivatives-exp-log-calcab',
      'implicit-differentiation': 'implicit-differentiation-calcab',
      'related-rates': 'related-rates-calcab',
      'higher-order-derivatives': 'concavity-inflection-points-calcab',
      'logarithmic-differentiation-technique': 'derivatives-exp-log-calcab',
      // AB: Applications of Derivatives
      'critical-points-and-extrema': 'applications-of-derivatives-calcab',
      'first-derivative-test': 'applications-of-derivatives-calcab',
      'second-derivative-test': 'applications-of-derivatives-calcab',
      'curve-sketching': 'applications-of-derivatives-calcab',
      'lhopitals-rule': 'applications-of-derivatives-calcab',
      'linear-approximation': 'linearization-differentials-calcab',
      'newtons-method': 'applications-of-derivatives-calcab',
      'mean-value-theorem': 'theorem-applications-calcab',
      'optimization-problems': 'optimization-calcab',
      'absolute-extrema': 'optimization-calcab',
      // AB: Integration
      'antiderivatives-intro': 'antiderivatives-indefinite-integrals-calcab',
      'indefinite-integrals': 'antiderivatives-indefinite-integrals-calcab',
      'u-substitution': 'u-substitution-calcab',
      'riemann-sums': 'definite-integrals-calcab',
      'definite-integrals': 'definite-integrals-calcab',
      'area-between-curves': 'area-between-curves-calcab',
      'volumes-disk-method': 'volumes-of-revolution-calcab',
      'volumes-washer-method': 'volumes-of-revolution-calcab',
      'volumes-shell-method': 'volumes-of-revolution-calcab',
      // BC: Advanced Integration
      'integration-by-parts': 'integration-by-parts-calcbc',
      'trig-substitution': 'advanced-integration-calcbc',
      'partial-fractions': 'partial-fractions-calcbc',
      // BC: Parametric & Polar
      'parametric-equations-intro': 'parametric-curves-calculus-calcbc',
      'parametric-calculus': 'parametric-curves-calculus-calcbc',
      'polar-coordinates-intro': 'polar-calculus-calcbc',
      'polar-calculus': 'polar-calculus-calcbc',
      // BC: Sequences & Series
      'sequences-intro': 'infinite-sequences-calcbc',
      'series-intro': 'infinite-series-calcbc',
      'integral-test': 'convergence-tests-summary-calcbc',
      'comparison-tests': 'convergence-tests-summary-calcbc',
      'alternating-series-test': 'alternating-series-calcbc',
      'ratio-root-tests': 'convergence-tests-summary-calcbc',
      // BC: Power & Taylor Series
      'power-series-intro': 'power-series-calcbc',
      'radius-interval-convergence': 'power-series-calcbc',
      'taylor-maclaurin-series': 'taylor-maclaurin-series-calcbc',
      'common-taylor-series': 'taylor-maclaurin-series-calcbc',
    }

    const redirects: { source: string; destination: string; permanent: true }[] = []
    for (const [micro, parent] of Object.entries(microLessonRedirects)) {
      redirects.push(
        { source: `/topics/${micro}`, destination: `/topics/${parent}`, permanent: true },
        { source: `/topics/${micro}/interactive`, destination: `/topics/${parent}/interactive`, permanent: true },
      )
    }

    // Search Console 404 cleanup (May 2026): legacy topic slugs that were
    // deleted or renamed. Targets verified to exist in the database.
    const renamedTopicRedirects: Record<string, string> = {
      'subject-verb-agreement': 'sat-subject-verb-agreement',
      'conditional-probability-stats': 'conditional-probability',
      'measures-of-center-stats': 'measures-of-center',
      'function-notation-transformations': 'transformations-functions-precalc',
      'pronoun-usage': 'sat-pronoun-agreement',
      'analyzing-arguments': 'englang-argument-structure',
      'data-representation-science': 'act-data-representation',
      'sentence-structure-formation': 'sat-sentence-structure',
      'statistical-claims-studies': 'bias-sampling-surveys',
    }
    for (const [from, to] of Object.entries(renamedTopicRedirects)) {
      redirects.push(
        { source: `/topics/${from}`, destination: `/topics/${to}`, permanent: true },
        { source: `/topics/${from}/interactive`, destination: `/topics/${to}/interactive`, permanent: true },
      )
    }

    // Topics with no 1:1 replacement -> closest live category page.
    redirects.push(
      { source: '/topics/act-modeling-problem-solving', destination: '/categories/act-math', permanent: true },
      { source: '/topics/act-modeling-problem-solving/interactive', destination: '/categories/act-math', permanent: true },
    )

    // Deleted category slugs.
    redirects.push(
      { source: '/categories/probability-stats', destination: '/categories/intro-statistics', permanent: true },
      { source: '/categories/linear-equations', destination: '/categories/algebra1-quadratics', permanent: true },
    )

    // Deleted course slug (legacy combined AB/BC landing).
    redirects.push(
      { source: '/courses/ap-calculus-ab-bc', destination: '/ap-calculus-ab', permanent: true },
    )

    // AP CS Principles: hub route uses /ap-cs-principles but DB course slug is
    // ap-computer-science-principles. Redirect any external/cached links.
    redirects.push(
      { source: '/courses/ap-cs-principles', destination: '/courses/ap-computer-science-principles', permanent: true },
      { source: '/courses/ap-csp', destination: '/courses/ap-computer-science-principles', permanent: true },
    )

    // Duplicate-content cleanup: the /ap-calc{ab,bc}-diagnostic routes only
    // re-export the canonical /calc{ab,bc}-diagnostic pages, so collapse the
    // aliases into the canonical URLs instead of serving identical content twice.
    redirects.push(
      { source: '/ap-calcab-diagnostic', destination: '/calcab-diagnostic', permanent: true },
      { source: '/ap-calcbc-diagnostic', destination: '/calcbc-diagnostic', permanent: true },
    )

    // Duplicate-content cleanup: /ap-precalc-score-predictor duplicates
    // /ap-precalculus-score-predictor (with a conflicting score scale). The
    // -precalculus- route is canonical; redirect the abbreviated alias to it.
    redirects.push(
      { source: '/ap-precalc-score-predictor', destination: '/ap-precalculus-score-predictor', permanent: true },
    )

    return redirects
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkFrontmatter must run first so the YAML frontmatter block is parsed
    // and removed from the rendered output (otherwise it shows up as body text).
    // remarkGfm enables GitHub-flavored markdown (tables, strikethrough, etc.).
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

const baseConfig = analyzeBundles(withMDX(nextConfig))
const shouldEnableSentry = Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)

const sentryWebpackOptions = {
  // Sentry options
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
}

export default shouldEnableSentry
  ? withSentryConfig(baseConfig, sentryWebpackOptions)
  : baseConfig
