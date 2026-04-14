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

### Remainder Estimate

If $\\sum a_n$ converges and $S$ denotes its sum, then:

$$\\int_{N+1}^\\infty f(x)\\,dx \\le S - S_N \\le \\int_N^\\infty f(x)\\,dx$$`
    },
    {
      id: 'is1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The integral test requires $f(x)$ to be:',
            options: ['Continuous, positive, and decreasing', 'Just continuous', 'Just positive', 'Differentiable'],
            correctAnswer: 0,
            explanation: 'All three conditions are needed: continuous (so the integral makes sense), positive (terms are comparable), and decreasing (monotonicity ensures the comparison works).'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{1}{n^2 + 1}$ converges because:',
            options: ['$\\int_1^\\infty \\frac{dx}{x^2+1} = \\pi/2 - \\pi/4 = \\pi/4$ (finite)', '$1/(n^2+1) < 1/n$', 'The terms alternate', 'It is geometric'],
            correctAnswer: 0,
            explanation: '$f(x) = 1/(x^2+1)$ is continuous, positive, decreasing. $\\int_1^\\infty \\frac{dx}{x^2+1} = [\\arctan x]_1^\\infty = \\pi/2 - \\pi/4 = \\pi/4$. Converges.'
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
            options: ['False — it only tells convergence or divergence', 'True', 'True for $p$-series only', 'Sometimes'],
            correctAnswers: ['False — it only tells convergence or divergence'],
            hints: ['$\\int_1^\\infty 1/x^2\\,dx = 1$, but $\\sum 1/n^2 = \\pi^2/6 \\ne 1$.'],
            explanation: 'The integral value is related to but not equal to the series sum. $\\sum 1/n^2 = \\pi^2/6 \\approx 1.645$, not $1$.'
          },
          {
            label: '$\\sum_{n=2}^\\infty \\frac{1}{n\\ln n}$:',
            options: ['Diverges ($\\int_2^\\infty \\frac{dx}{x\\ln x} = \\infty$)', 'Converges', 'Inconclusive', 'Is a $p$-series'],
            correctAnswers: ['Diverges ($\\int_2^\\infty \\frac{dx}{x\\ln x} = \\infty$)'],
            hints: ['$\\int \\frac{dx}{x\\ln x} = \\ln(\\ln x) + C$.'],
            explanation: '$\\int_2^\\infty \\frac{dx}{x\\ln x} = [\\ln(\\ln x)]_2^\\infty = \\infty$. Diverges by integral test.'
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
