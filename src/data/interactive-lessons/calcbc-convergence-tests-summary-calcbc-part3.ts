export const calcbcConvergencePart3Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct3-intro',
      type: 'text' as const,
      content: `# The Integral Test: When and How to Write It

**Part 3 of 7 — When Other Tests Fail**

The Integral Test itself is taught in Infinite Series, Part 1. Here the focus is recognizing when it is the right tool and writing the justification.

### Signals That the Integral Test Is the Tool

- $a_n = f(n)$, where $f(x)$ has an antiderivative you can find, usually by $u$-substitution
- $\\ln n$ in the denominator, as in $\\frac{1}{n\\ln n}$ or $\\frac{1}{n(\\ln n)^2}$: the Ratio Test gives $L = 1$ and comparisons are awkward
- A numerator that is the derivative of the inside function, as in $n e^{-n^2}$ or $\\frac{n}{n^2+1}$

### What a Full-Credit Justification States

1. Define $f(x)$ with $f(n) = a_n$.
2. State that $f$ is **positive, continuous, and decreasing** on $[N, \\infty)$, with a reason for "decreasing" (for example, $f'(x) < 0$ there).
3. Evaluate the improper integral **as a limit**.
4. Conclude that the series converges or diverges **by the Integral Test**.

> **Key Fact:** The Integral Test tells you WHETHER the series converges, not what it converges to. In general $\\sum a_n \\neq \\int f(x)\\,dx$.`
    },
    {
      id: 'ct3-examples',
      type: 'text' as const,
      content: `### Model Write-Up: $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$

Let $f(x) = \\frac{1}{x \\ln x}$. For $x \\ge 2$, $f$ is positive and continuous, and it is decreasing because its denominator $x \\ln x$ is positive and increasing.

$$\\int_2^{\\infty} \\frac{dx}{x \\ln x} = \\lim_{b \\to \\infty} \\Big[\\ln(\\ln x)\\Big]_2^b = \\lim_{b \\to \\infty} \\big(\\ln(\\ln b) - \\ln(\\ln 2)\\big) = \\infty$$

The integral diverges, so $\\sum \\frac{1}{n \\ln n}$ **diverges** by the Integral Test.

### Same Write-Up, Opposite Conclusion: $\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}$

$f(x) = \\frac{1}{x(\\ln x)^2}$ is positive, continuous, and decreasing for $x \\ge 2$. With $u = \\ln x$:

$$\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2} = \\lim_{b \\to \\infty} \\Big[-\\frac{1}{\\ln x}\\Big]_2^b = \\frac{1}{\\ln 2}$$

The integral converges, so the series **converges** by the Integral Test. Its sum is NOT $\\frac{1}{\\ln 2}$.

### A Pattern Worth Recognizing

$$\\sum \\frac{1}{n(\\ln n)^p}: \\quad \\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\le 1 \\end{cases}$$

> **AP Tip:** The pattern tells you which way to argue, but it is not a justification. On a free-response question, show the integral as above.`
    },
    {
      id: 'ct3-mc1',
      type: 'multiple-choice' as const,
      content: '**Integral Test Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} ne^{-n}$. Using the Integral Test with $\\int xe^{-x}\\,dx$:',
            options: ['Converges, since the integral is finite', 'Diverges, since the integral is infinite', 'Does not apply, since $xe^{-x}$ is not decreasing', 'Inconclusive, since the integral is finite'],
            correctAnswer: 0,
            explanation: '$\\int_1^{\\infty} xe^{-x}\\,dx = [-xe^{-x} - e^{-x}]_1^{\\infty} = 0 - (-e^{-1} - e^{-1}) = 2/e < \\infty$, by integration by parts. $xe^{-x}$ is positive, continuous, and decreasing for $x \\ge 1$ (its derivative is $(1-x)e^{-x}$), so the test applies and the series converges.'
          },
          {
            question: 'The Integral Test requires $f$ to be:',
            options: ['Positive, continuous, and eventually decreasing', 'Positive, continuous, and increasing', 'Positive and differentiable only', 'Integrable on $[1, \\infty)$'],
            correctAnswer: 0,
            explanation: 'All three conditions are required for the Integral Test to apply: positive, continuous, and decreasing (at least for all $x$ past some point). Differentiability is not needed, and integrability alone does not justify the comparison.'
          },
          {
            question: '$\\sum 1/(n(\\ln n)^{0.5})$:',
            options: ['Diverges ($p = 0.5 \\le 1$ in the log-$p$-series)', 'Converges ($p = 0.5 < 1$ in the log-$p$-series)', 'Converges by the Ratio Test ($L < 1$)', 'Diverges by the Divergence Test'],
            correctAnswer: 0,
            explanation: 'Log-$p$-series $\\sum \\frac{1}{n(\\ln n)^p}$ with $p = 1/2 \\le 1$. Diverges by the Integral Test. The rule is the same as for $p$-series (converge only for $p > 1$), the Ratio Test gives $L = 1$, and the terms go to $0$, so the Divergence Test says nothing.'
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
            options: ['LCT with $1/n^2$ or the Integral Test', 'Only the Integral Test ($\\arctan$ form)', 'Only the Ratio Test ($L = 1$, converges)', 'The Divergence Test ($a_n \\to 0$, converges)'],
            correctAnswers: ['LCT with $1/n^2$ or the Integral Test'],
            hints: ['$1/(n^2+4) \\approx 1/n^2$ for large $n$. Both approaches work.'],
            explanation: 'LCT: $\\lim n^2/(n^2+4) = 1$. Same behavior as $\\sum 1/n^2$: converges. The Integral Test also works, since $\\int_1^\\infty \\frac{dx}{x^2+4} = \\frac{1}{2}\\left[\\arctan\\frac{x}{2}\\right]_1^\\infty$ is finite. The Ratio Test gives $L = 1$ (inconclusive), and $a_n \\to 0$ alone never proves convergence.'
          },
          {
            label: '$\\sum_{n=3}^{\\infty} \\frac{1}{n \\ln n \\ln(\\ln n)}$:',
            options: ['Diverges (Integral Test: $\\ln(\\ln(\\ln x)) \\to \\infty$)', 'Converges (its terms shrink faster than $1/(n\\ln n)$)', 'Converges (Integral Test gives a finite value)', 'Cannot determine (no standard test applies)'],
            correctAnswers: ['Diverges (Integral Test: $\\ln(\\ln(\\ln x)) \\to \\infty$)'],
            hints: ['Substitution: $u = \\ln x$, then $v = \\ln u$.'],
            explanation: 'With $u = \\ln x$, $\\int \\frac{dx}{x\\ln x\\ln(\\ln x)} = \\int \\frac{du}{u\\ln u} = \\ln(\\ln u) = \\ln(\\ln(\\ln x)) \\to \\infty$. Diverges. Shrinking faster than $1/(n\\ln n)$ is not enough on its own.'
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

- Reach for the Integral Test when $f(x)$ has an easy antiderivative, especially with $\\ln n$ in the denominator
- State positive, continuous, and decreasing, with a reason
- Evaluate the improper integral with a limit, then conclude "by the Integral Test"
- The integral's value is not the sum of the series

> **Next:** Part 4 — Classifying a series as absolutely convergent, conditionally convergent, or divergent.`
    }
  ]
};
