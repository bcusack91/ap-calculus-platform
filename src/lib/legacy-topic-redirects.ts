/**
 * Legacy topic slugs that permanently redirect to a consolidated parent topic.
 *
 * Shared by next.config.ts (which emits the 308s for /topics/{slug} and
 * /topics/{slug}/interactive) and src/app/sitemap.ts (which must NOT submit
 * them). The old micro-lesson Topic rows still exist in the database, so a
 * sitemap built from the Topic table alone listed 104 redirecting URLs —
 * Search Console's "Page with redirect" bucket.
 */
export const LEGACY_TOPIC_REDIRECTS: Record<string, string> = {
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

export function isLegacyTopicSlug(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(LEGACY_TOPIC_REDIRECTS, slug)
}
