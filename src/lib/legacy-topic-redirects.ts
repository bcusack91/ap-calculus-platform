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
      // implicit-differentiation, related-rates, derivatives-of-exponential-functions
      // and second-derivative-test are NOT redirected: their Topic rows exist in
      // production but the calcab-* suites they used to point at have no Topic row,
      // so the redirect 404'd. They now serve those suites through slugAliases
      // (interactive-lessons/registry.ts) and EXIT_QUIZ_ALIASES (exit-quizzes/index.ts).
      'derivatives-of-trig-functions': 'basic-differentiation-rules-calcab',
      'derivatives-of-logarithmic-functions': 'derivatives-of-exponential-functions',
      'higher-order-derivatives': 'basic-differentiation-rules-calcab',
      'logarithmic-differentiation-technique': 'derivatives-of-exponential-functions',
      // AB: Applications of Derivatives
      'critical-points-and-extrema': 'applications-of-derivatives-calcab',
      'first-derivative-test': 'applications-of-derivatives-calcab',
      'curve-sketching': 'applications-of-derivatives-calcab',
      'lhopitals-rule': 'applications-of-derivatives-calcab',
      'linear-approximation': 'linearization-differentials-calcab',
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
      // SAT topics retired 2026-09-28 because the digital SAT does not test
      // them: send old links to the tested skill of the same domain.
      'sat-conciseness-redundancy': 'sat-effective-language-use',
      'sat-complex-numbers': 'sat-quadratic-equations',
      // Phase 1 (Oct 2026): topics retired because the May 2027 exam does not test them.
      // List and CED reasons: src/data/retired-ap-topics.ts. Each target is an on-exam topic.
      'newtons-method': 'linearization-differentials-calcab',
      'csa-inheritance-polymorphism': 'csa-class-design',
      'englit-literary-criticism': 'englit-essay-writing',
      'density-and-pressure': 'fluids-density-and-pressure',
      'buoyancy-archimedes-principle': 'fluids-buoyancy',
      'fluid-dynamics-continuity': 'fluids-continuity',
      'fluid-dynamics': 'fluids-continuity',
      'bernoullis-equation': 'fluids-bernoulli',
      'phase-changes-latent-heat': 'heat-specific-heat',
      'physics-c-damped-driven-oscillations': 'physics-c-simple-harmonic-motion',
      'physics-c-electromagnetic-waves': 'physics-c-maxwell-equations',
      'circles-parabolas': 'function-transformations',
      'ellipses-hyperbolas': 'function-transformations',
      'conic-sections-precalc': 'transformations-precalc',
      'parametric-equations': 'polar-coordinates',
      'parametric-equations-precalc': 'polar-coordinates-precalc',
      'vectors-in-plane': 'polar-coordinates',
      'vectors-two-dimensions-precalc': 'polar-coordinates-precalc',
      'matrix-operations': 'function-transformations',
      'matrices-precalc': 'transformations-precalc',
      'law-of-sines-cosines': 'the-unit-circle',
      'law-of-sines-cosines-precalc': 'trigonometric-functions-precalc',
      'partial-fraction-decomposition': 'polynomial-division-remainder-theorem',
      'systems-of-equations': 'exponential-functions-precalc',
      'systems-of-equations-precalc': 'exponential-functions-precalc',
      'limits-introduction-precalc': 'rational-functions-precalc',
      'continuity-precalc': 'rational-functions-precalc',
      'arc-length-and-sector-area': 'degrees-and-radians',
      'transformations-linearity': 'residuals-residual-plots',
      'combining-random-variables': 'mean-sd-random-variables',
      'geometric-distribution': 'binomial-distribution',
      'inference-regression': 'least-squares-regression',
}

export function isLegacyTopicSlug(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(LEGACY_TOPIC_REDIRECTS, slug)
}
