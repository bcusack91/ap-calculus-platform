/**
 * Whole page routes that were retired and permanently redirect (308) to the
 * page that replaced them.
 *
 * Shared by next.config.ts (which emits the redirects) and the guard test
 * tests/lib/retired-route-redirects.test.ts (every source is gone from
 * src/app and the sitemap; every target is a live page, never another
 * redirect). Legacy TOPIC slugs live in legacy-topic-redirects.ts instead.
 *
 * Non-AP Precalculus (Oct 2026, precalc-final owner decision O1): the site has
 * one precalc course, `ap-precalculus`. The parallel "regular Precalculus"
 * track (/precalculus hub + six /precalc-* tools, own 48-item diagnostic,
 * 40-MCQ practice test, six unit tests over the whole bank incl. Unit 4
 * vectors/matrices/parametric) had no Course row, no prod attempts ever and
 * carried off-exam content, so each tool now points at its AP twin.
 */
export const RETIRED_ROUTE_REDIRECTS: Record<string, string> = {
  '/precalculus': '/ap-precalculus',
  '/precalc-diagnostic': '/ap-precalculus-diagnostic',
  '/precalc-practice': '/ap-precalc-practice',
  '/precalc-unit-tests': '/ap-precalc-unit-tests',
  '/precalc-study-plans': '/ap-precalc-study-plans',
  // /ap-precalc-score-predictor is itself a redirect; point at its final target.
  '/precalc-score-predictor': '/ap-precalculus-score-predictor',
  '/precalc-daily-question': '/ap-precalculus-daily-question',
}
