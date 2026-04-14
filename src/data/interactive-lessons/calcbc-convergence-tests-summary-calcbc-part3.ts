export const calcbcConvergencePart3Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct3-intro',
      type: 'text' as const,
      content: `# Integral Test & Special Series

**Part 3 of 7 — When Other Tests Fail**

### The Integral Test

If $f(x)$ is positive, continuous, and decreasing for $x \\ge N$, and $a_n = f(n)$, then:

$$\\boxed{\\sum_{n=N}^{\\infty} a_n \\text{ and } \\int_N^{\\infty} f(x)\\,dx \\text{ converge or diverge together}}$$

### When to Use the Integral Test

- $a_n = 1/(n \\ln n)$ → $\\int dx/(x \\ln x)$, easy substitution
- $a_n = 1/(n(\\ln n)^2)$ → converges
- $a_n = ne^{-n^2}$ → $\\int xe^{-x^2}\\,dx$, substitution
- **Any series where you can anti-differentiate $f(x)$ easily**

### Important: The Test Does NOT Give the Sum

The integral gives the same convergence/divergence behavior, but:

$$\\sum a_n \\neq \\int f(x)\\,dx$$

The integral provides bounds, not the exact sum.

> **Key Fact:** The Integral Test is the "test of last resort" for positive series that don't match other patterns. It's also how we PROVE the $p$-Series Test.`
    },
    {
      id: 'ct3-examples',
      type: 'text' as const,
      content: `### Example 1: $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$

$f(x) = 1/(x \\ln x)$: positive, decreasing for $x \\ge 2$.

$\\int_2^{\\infty} \\frac{dx}{x \\ln x}$: let $u = \\ln x$, $du = dx/x$:

$$\\int \\frac{du}{u} = \\ln u \\Big|_{\\ln 2}^{\\infty} = \\infty$$

Diverges. So $\\sum 1/(n \\ln n)$ **diverges**.

### Example 2: $\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}$

$$\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2}: \\quad \\int \\frac{du}{u^2} = -\\frac{1}{u}\\Big|_{\\ln 2}^{\\infty} = \\frac{1}{\\ln 2}$$

Converges. So $\\sum 1/(n(\\ln n)^2)$ **converges**.

### General Pattern

$$\\sum \\frac{1}{n(\\ln n)^p}: \\quad \\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\le 1 \\end{cases}$$

This is like a "log-$p$-series."

> **AP Tip:** Integral Test problems on the AP exam usually involve $\\ln n$ in the denominator where other tests fail.`
    },
    {
      id: 'ct3-mc1',
      type: 'multiple-choice' as const,
      content: '**Integral Test Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} ne^{-n}$. Using the Integral Test with $\\int xe^{-x}\\,dx$:',
            options: ['Converges (integration by parts gives a finite value)', 'Diverges', 'Integral Test does not apply', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\int_1^{\\infty} xe^{-x}\\,dx = [-xe^{-x} - e^{-x}]_1^{\\infty} = 0 - (-e^{-1} - e^{-1}) = 2/e < \\infty$. Converges.'
          },
          {
            question: 'The Integral Test requires $f$ to be:',
            options: ['Positive, continuous, and decreasing (eventually)', 'Positive only', 'Decreasing only', 'Integrable on $[1, \\infty)$'],
            correctAnswer: 0,
            explanation: 'All three conditions are required for the Integral Test to apply.'
          },
          {
            question: '$\\sum 1/(n(\\ln n)^{0.5})$:',
            options: ['Diverges ($p = 0.5 \\le 1$ in the log-$p$-series)', 'Converges', 'Ratio Test needed', 'AST applies'],
            correctAnswer: 0,
            explanation: 'Log-$p$-series with $p = 1/2 \\le 1$. Diverges by Integral Test.'
          }
        ]
      }
    },
    {
      id: 'ct3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Integral Test Decisions**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 4}$. Can use:',
            options: ['LCT with $1/n^2$ (converges) OR Integral Test ($\\arctan$ integral converges)', 'Only Integral Test', 'Only Ratio Test', 'Divergence Test'],
            correctAnswers: ['LCT with $1/n^2$ (converges) OR Integral Test ($\\arctan$ integral converges)'],
            hints: ['$1/(n^2+4) \\approx 1/n^2$ for large $n$. Both approaches work.'],
            explanation: 'LCT: $\\lim n^2/(n^2+4) = 1$. Same behavior as $\\sum 1/n^2$: converges.'
          },
          {
            label: '$\\sum_{n=3}^{\\infty} \\frac{1}{n \\ln n \\ln(\\ln n)}$:',
            options: ['Diverges (Integral Test: $\\int du/(u \\ln u) = \\ln(\\ln u) \\to \\infty$)', 'Converges', 'Cannot determine', '$p$-Series'],
            correctAnswers: ['Diverges (Integral Test: $\\int du/(u \\ln u) = \\ln(\\ln u) \\to \\infty$)'],
            hints: ['Substitution: $u = \\ln x$, then $v = \\ln u$.'],
            explanation: 'Triple substitution yields $\\int dv/v = \\ln v \\to \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'ct3-input',
      type: 'input-box' as const,
      content: '**Integral Test Evaluation**',
      exercise: {
        question: 'Evaluate $\\int_1^{\\infty} xe^{-x^2}\\,dx$. (This determines convergence of $\\sum ne^{-n^2}$.) Give answer as a fraction.',
        correctAnswer: '1/(2e)',
        acceptableAnswers: ['1/(2e)', '1/2e', '0.184'],
        hints: ['Let $u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int_1^{\\infty} e^{-u}\\,du$.'],
        explanation: '$\\frac{1}{2}[-e^{-u}]_1^{\\infty} = \\frac{1}{2}(0 + e^{-1}) = 1/(2e)$. Finite → converges.'
      }
    },
    {
      id: 'ct3-summary',
      type: 'text' as const,
      content: `### Summary

- Integral Test: same convergence behavior as the improper integral
- Use when other tests fail, especially for series with $\\ln n$
- Log-$p$-series: $\\sum 1/(n(\\ln n)^p)$ converges iff $p > 1$
- The integral gives bounds, not the sum

> **Next:** Part 4 — Absolute vs. Conditional Convergence.`
    }
  ]
};
