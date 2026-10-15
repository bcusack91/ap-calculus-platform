export const calcbcImproperPart6Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp6-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 6 of 7 \u2014 Problem-Solving Workshop**

This part is a mixed-practice workshop. Every problem integrates concepts from Parts 1\u20135. Work through each carefully before checking answers.`
    },
    {
      id: 'imp6-warmup',
      type: 'text' as const,
      content: `### Warm-Up: Quick Classification

Classify each integral before computing:

| Integral | Type | Issue |
|:---:|:---:|:---:|
| $\\int_2^{\\infty} \\frac{dx}{x^2 - 1}$ | Both I & II? | $\\infty$ limit AND $x=1$ discontinuity \u2014 but $1 \\notin [2,\\infty)$, so Type I only |
| $\\int_0^1 \\frac{dx}{x^2 - 1}$ | Type II | Discontinuity at $x = 1$ (right endpoint) |
| $\\int_0^{\\infty} \\frac{dx}{x^2 - 1}$ | Both | Infinite limit AND discontinuity at $x = 1$ |

> **Key Lesson:** Always check the interval boundaries carefully. A function can be discontinuous at a point, but if that point isn\u2019t in $[a,b]$, the integral is proper (at least regarding that point).`
    },
    {
      id: 'imp6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problem Set 1**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{\\infty} \\frac{x}{(1+x^2)^2}\\,dx =$',
            options: ['$\\frac{1}{2}$', '$1$', '$\\frac{\\pi}{4}$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'Let $u = 1+x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int_1^{\\infty} u^{-2}\\,du = \\frac{1}{2}[-u^{-1}]_1^{\\infty} = \\frac{1}{2}(0+1) = \\frac{1}{2}$.'
          },
          {
            question: '$\\int_1^{\\infty} \\frac{\\ln x}{x^2}\\,dx$ converges to:',
            options: ['$1$', '$\\ln 2$', '$2$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'IBP: $u = \\ln x$, $dv = x^{-2}dx$. $[-\\frac{\\ln x}{x}]_1^{\\infty} + \\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 0 + 1 = 1$. (The boundary term: $\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$ by L\u2019H\u00f4pital.)'
          },
          {
            question: '$\\int_0^{\\pi/2} \\tan x\\,dx =$',
            options: ['Diverges', '$1$', '$\\pi/4$', '$\\ln 2$'],
            correctAnswer: 0,
            explanation: '$\\tan x \\to \\infty$ as $x \\to (\\pi/2)^-$. Type II: $\\lim_{t \\to (\\pi/2)^-} [-\\ln|\\cos x|]_0^t = \\lim_{t \\to (\\pi/2)^-} -\\ln|\\cos t| = \\infty$.'
          }
        ]
      }
    },
    {
      id: 'imp6-strategy',
      type: 'text' as const,
      content: `### Decision Flowchart

$$\\text{Is the interval infinite?} \\xrightarrow{\\text{Yes}} \\text{Type I}$$
$$\\text{Is }f\\text{ undefined at any point in }[a,b]\\text{?} \\xrightarrow{\\text{Yes}} \\text{Type II}$$
$$\\text{Infinite on both ends?} \\xrightarrow{\\text{Yes}} \\text{Split; both halves must converge}$$
$$\\text{Then: find the antiderivative and take the limit}$$

**Direct Computation Steps:**
1. Replace the problematic bound with a limit variable
2. Compute the definite integral
3. Evaluate the limit
4. State convergent (with value) or divergent`
    },
    {
      id: 'imp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Workshop Problem Set 2**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_0^{\\infty} \\frac{e^{-x}}{1 + e^{-x}}\\,dx$:',
            options: ['Converges to $1$', 'Diverges', 'Converges to $\\ln 2$', 'Converges to $\\frac{1}{2}$'],
            correctAnswers: ['Converges to $\\ln 2$'],
            hints: ['Let $u = 1 + e^{-x}$, so $du = -e^{-x}\\,dx$.', 'An antiderivative is $-\\ln(1 + e^{-x})$.'],
            explanation: '$\\lim_{t \\to \\infty}\\left[-\\ln(1 + e^{-x})\\right]_0^t = -\\ln 1 + \\ln 2 = \\ln 2$. The value $1$ is $\\int_0^{\\infty} e^{-x}\\,dx$, which ignores the denominator; $\\frac{1}{2}$ is the integrand at $x = 0$; and the integrand decays like $e^{-x}$, so it does not diverge.'
          },
          {
            label: '$\\int_0^{\\infty} \\frac{\\arctan x}{1+x^2}\\,dx$:',
            options: ['Converges to $\\frac{\\pi^2}{8}$', 'Diverges', 'Converges to $\\frac{\\pi}{4}$', 'Converges to $\\frac{\\pi^2}{4}$'],
            correctAnswers: ['Converges to $\\frac{\\pi^2}{8}$'],
            hints: ['Let $u = \\arctan x$, then $du = \\frac{1}{1+x^2}dx$.', 'Bounds: $x=0 \\Rightarrow u=0$, $x \\to \\infty \\Rightarrow u = \\pi/2$.'],
            explanation: '$\\int_0^{\\pi/2} u\\,du = [\\frac{u^2}{2}]_0^{\\pi/2} = \\frac{\\pi^2}{8}$.'
          },
          {
            label: '$\\int_1^{\\infty} \\left(\\frac{1}{x^2} + \\frac{1}{x^3}\\right)dx$:',
            options: ['Converges to $\\frac{3}{2}$', 'Diverges', 'Converges to $1$', 'Converges to $\\frac{1}{2}$'],
            correctAnswers: ['Converges to $\\frac{3}{2}$'],
            hints: ['Integrate each term: $\\int_1^{\\infty} x^{-p}\\,dx = \\frac{1}{p-1}$ for $p > 1$.'],
            explanation: '$\\int_1^{\\infty} x^{-2}\\,dx = 1$ and $\\int_1^{\\infty} x^{-3}\\,dx = \\frac{1}{2}$, so the total is $\\frac{3}{2}$. Each answer of $1$ or $\\frac{1}{2}$ keeps only one term, and both exponents exceed $1$, so nothing diverges.'
          }
        ]
      }
    },
    {
      id: 'imp6-challenge',
      type: 'text' as const,
      content: `### Challenge: Mixed Type

$$\\int_0^{\\infty} \\frac{1}{\\sqrt{x}(1+x)}\\,dx$$

This has BOTH issues: discontinuity at $x=0$ (Type II) and $\\infty$ upper limit (Type I).

**Split at $x = 1$:**

**Part A:** $\\int_0^1 \\frac{1}{\\sqrt{x}(1+x)}\\,dx$ \u2014 Type II at $x=0$

Near $x = 0$: $\\frac{1}{\\sqrt{x}(1+x)} \\approx \\frac{1}{\\sqrt{x}}$. Since $\\int_0^1 x^{-1/2}\\,dx$ converges ($p = 1/2 < 1$), Part A converges.

**Part B:** $\\int_1^{\\infty} \\frac{1}{\\sqrt{x}(1+x)}\\,dx$ \u2014 Type I

For large $x$: $\\frac{1}{\\sqrt{x}(1+x)} \\approx \\frac{1}{x^{3/2}}$. Since $\\int_1^{\\infty} x^{-3/2}\\,dx$ converges ($p = 3/2 > 1$), Part B converges.

Full integral converges. (Its exact value is $\\pi$, via the substitution $u = \\sqrt{x}$.)`
    },
    {
      id: 'imp6-input',
      type: 'input-box' as const,
      content: '**Workshop Computation**',
      exercise: {
        question: 'Evaluate $\\int_1^{\\infty} \\frac{2}{x^3}\\,dx$. Write the exact numerical answer.',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['$2\\int_1^{\\infty} x^{-3}\\,dx = 2 \\cdot [-\\frac{1}{2}x^{-2}]_1^{\\infty}$.', '$= 2 \\cdot (0 + \\frac{1}{2}) = 1$.'],
        explanation: '$2 \\cdot [-\\frac{1}{2x^2}]_1^{\\infty} = 2(0 + \\frac{1}{2}) = 1$.'
      }
    },
    {
      id: 'imp6-summary',
      type: 'text' as const,
      content: `### Workshop Recap

**Common Mistakes to Avoid:**
1. Forgetting to check for interior discontinuities before integrating
2. Confusing Type I and Type II $p$-test directions
3. Letting the two halves of $\\int_{-\\infty}^{\\infty}$ cancel instead of checking each one
4. Not splitting integrals that have both Type I and Type II issues

> **Coming Up:** Part 7 is a **Comprehensive Review** covering all improper integral concepts.`
    }
  ]
};
