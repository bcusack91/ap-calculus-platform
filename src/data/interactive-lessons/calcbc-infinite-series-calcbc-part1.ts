export const calcbcSeriesPart1Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is1-intro',
      type: 'text' as const,
      content: `# Infinite Series — Convergence Tests

**Part 1 of 7 — The Integral Test**

### Review: Series Convergence

$\\sum_{n=1}^\\infty a_n$ converges if and only if $\\lim_{N \\to \\infty} S_N$ exists (finite).

We already know:
- Geometric series: $|r| < 1$
- $p$-series: $p > 1$
- $n$th term test: $a_n \\not\\to 0 \\implies$ divergence

Now we develop systematic convergence tests.

### The Integral Test

If $f(x)$ is continuous, positive, and decreasing for $x \\ge 1$, and $a_n = f(n)$, then:

$$\\boxed{\\sum_{n=1}^\\infty a_n \\text{ and } \\int_1^\\infty f(x)\\,dx \\text{ either both converge or both diverge.}}$$

> **Key Fact:** The integral test does NOT give the sum — only whether the series converges.`
    },
    {
      id: 'is1-examples',
      type: 'text' as const,
      content: `### Example 1 — Proving $p$-series

Show $\\sum 1/n^2$ converges using the integral test.

$f(x) = 1/x^2$: continuous, positive, decreasing for $x \\ge 1$. ✓

$$\\int_1^\\infty \\frac{1}{x^2}\\,dx = \\lim_{b \\to \\infty}\\left[-\\frac{1}{x}\\right]_1^b = 0 - (-1) = 1$$

Integral converges $\\implies$ series converges. ✓

### Example 2 — Harmonic series diverges

$f(x) = 1/x$: continuous, positive, decreasing.

$$\\int_1^\\infty \\frac{1}{x}\\,dx = \\lim_{b \\to \\infty} \\ln b = \\infty$$

Integral diverges $\\implies$ $\\sum 1/n$ diverges. ✓

### The Integral Is Not the Sum

In Example 1 the integral equals $1$, but $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\approx 1.645$. The integral test answers only "converges or diverges?" On the AP exam, error estimates for series come from the alternating series error bound and the Lagrange error bound, not from the integral.`
    },
    {
      id: 'is1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The integral test requires $f(x)$ to be:',
            options: ['Continuous, positive, and decreasing', 'Continuous, positive, and increasing', 'Differentiable, positive, and decreasing', 'Continuous, alternating, and decreasing'],
            correctAnswer: 0,
            explanation: 'All three conditions are needed: continuous (so the integral makes sense), positive (terms are comparable to area), and decreasing (monotonicity ensures the comparison works). Differentiability is not required, and alternating terms call for the AST instead.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{1}{n^2 + 1}$ converges because:',
            options: ['$\\int_1^\\infty \\frac{dx}{x^2+1}$ is finite', 'Its terms are smaller than $\\frac{1}{n}$', 'Its terms approach $0$ as $n \\to \\infty$', 'It is a $p$-series with $p = 2$'],
            correctAnswer: 0,
            explanation: '$f(x) = 1/(x^2+1)$ is continuous, positive, decreasing. $\\int_1^\\infty \\frac{dx}{x^2+1} = [\\arctan x]_1^\\infty = \\pi/2 - \\pi/4 = \\pi/4$, which is finite, so the series converges. Being smaller than the divergent $\\frac{1}{n}$ proves nothing, terms going to $0$ is not enough, and $\\frac{1}{n^2+1}$ is not itself a $p$-series.'
          }
        ]
      }
    },
    {
      id: 'is1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The integral test tells you the value of the series sum.',
            options: ['False — it only tells convergence or divergence', 'True — the integral\'s value equals the sum', 'True, but only for $p$-series like $\\sum 1/n^2$', 'Sometimes — only when the integral converges'],
            correctAnswers: ['False — it only tells convergence or divergence'],
            hints: ['$\\int_1^\\infty 1/x^2\\,dx = 1$, but $\\sum 1/n^2 = \\pi^2/6 \\ne 1$.'],
            explanation: 'The integral value is related to but not equal to the series sum. $\\sum 1/n^2 = \\pi^2/6 \\approx 1.645$, not $1$.'
          },
          {
            label: '$\\sum_{n=2}^\\infty \\frac{1}{n\\ln n}$:',
            options: ['Diverges (by the Integral Test)', 'Converges (terms shrink faster than $1/n$)', 'Inconclusive (Integral Test does not apply)', 'Converges (like a $p$-series with $p > 1$)'],
            correctAnswers: ['Diverges (by the Integral Test)'],
            hints: ['$\\int \\frac{dx}{x\\ln x} = \\ln(\\ln x) + C$.'],
            explanation: '$\\int_2^\\infty \\frac{dx}{x\\ln x} = [\\ln(\\ln x)]_2^\\infty = \\infty$. Diverges by integral test ($1/(x\\ln x)$ is positive, continuous and decreasing on $[2, \\infty)$, so the test applies). The terms do shrink faster than $1/n$, but not fast enough, and $n\\ln n$ is not $n^p$ for any $p > 1$.'
          }
        ]
      }
    },
    {
      id: 'is1-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Use the integral test to evaluate $\\int_1^\\infty e^{-x}\\,dx$. If it converges, $\\sum_{n=1}^\\infty e^{-n}$ also converges. What is $\\int_1^\\infty e^{-x}\\,dx$? (Give a decimal to 2 places.)',
        correctAnswer: '0.37',
        acceptableAnswers: ['0.37', '0.368', '1/e', 'e^{-1}'],
        hints: ['$\\int_1^\\infty e^{-x}\\,dx = [-e^{-x}]_1^\\infty = 0 - (-e^{-1}) = e^{-1}$.'],
        explanation: '$e^{-1} \\approx 0.3679 \\approx 0.37$. Since this is finite, $\\sum e^{-n}$ converges (it is also geometric with $r = e^{-1}$).'
      }
    },
    {
      id: 'is1-summary',
      type: 'text' as const,
      content: `### Summary

- Integral test: compare $\\sum a_n$ with $\\int f(x)\\,dx$ (same convergence behavior)
- Requires: continuous, positive, decreasing $f$
- Does NOT give the sum, only convergence/divergence
- Useful for proving $p$-series results and testing unfamiliar series

> **Next:** Part 2 — Comparison and Limit Comparison tests.`
    }
  ]
};
