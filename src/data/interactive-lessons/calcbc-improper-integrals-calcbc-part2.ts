export const calcbcImproperPart2Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp2-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 2 of 7 \u2014 Discontinuous Integrands (Type II)**

Type II improper integrals have a vertical asymptote or discontinuity within $[a,b]$. The integrand \u201cblows up\u201d at one or more points.`
    },
    {
      id: 'imp2-definition',
      type: 'text' as const,
      content: `### Type II Definitions

**Discontinuity at $x = b$ (right endpoint):**
$$\\int_a^b f(x)\\,dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\,dx$$

**Discontinuity at $x = a$ (left endpoint):**
$$\\int_a^b f(x)\\,dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\,dx$$

**Discontinuity at $x = c$ inside $(a,b)$:**
$$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$$

> **Key Fact:** If the discontinuity is INSIDE the interval, you MUST split the integral. Computing the antiderivative across the discontinuity gives a wrong answer. This is a classic AP exam trap.`
    },
    {
      id: 'imp2-example',
      type: 'text' as const,
      content: `### Worked Example: $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$

The integrand $\\frac{1}{\\sqrt{x}}$ is undefined at $x = 0$ (left endpoint).

| Step | Work |
|------|------|
| Replace $0$ with $t \\to 0^+$ | $\\lim_{t \\to 0^+} \\int_t^1 x^{-1/2}\\,dx$ |
| Antiderivative | $\\lim_{t \\to 0^+} [2\\sqrt{x}]_t^1$ |
| Evaluate | $\\lim_{t \\to 0^+} (2 - 2\\sqrt{t})$ |
| Take limit | $2 - 0 = 2$ |

$$\\boxed{\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx = 2 \\quad (\\text{converges})}$$

### Contrast: $\\int_0^1 \\frac{1}{x}\\,dx$

$\\lim_{t \\to 0^+} [\\ln x]_t^1 = 0 - \\ln t = -\\lim_{t \\to 0^+} \\ln t = \\infty$

$$\\int_0^1 \\frac{1}{x}\\,dx \\quad \\text{diverges}$$`
    },
    {
      id: 'imp2-interior',
      type: 'text' as const,
      content: `### Interior Discontinuity: $\\int_{-1}^{1} \\frac{1}{x^2}\\,dx$

$\\frac{1}{x^2}$ has a vertical asymptote at $x = 0$, which is INSIDE $[-1, 1]$.

**Wrong approach:** Ignoring the discontinuity gives $[-\\frac{1}{x}]_{-1}^1 = -1 - 1 = -2$. This is negative, but $\\frac{1}{x^2} > 0$ everywhere \u2014 clearly wrong!

**Correct approach:** Split at $x = 0$:
$$\\int_{-1}^{0} \\frac{1}{x^2}\\,dx + \\int_0^1 \\frac{1}{x^2}\\,dx$$

Both halves diverge ($\\lim_{t \\to 0} \\frac{1}{t} = \\infty$), so the integral **diverges**.

> **AP Tip:** Always scan for discontinuities before integrating. If $f(x) \\to \\infty$ anywhere in $[a,b]$, the integral is improper.`
    },
    {
      id: 'imp2-mc1',
      type: 'multiple-choice' as const,
      content: '**Type II Practice**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^4 \\frac{1}{\\sqrt{4-x}}\\,dx$ is:',
            options: [
              'Convergent, equal to $4$',
              'Divergent',
              'Convergent, equal to $2$',
              'Not improper'
            ],
            correctAnswer: 0,
            explanation: 'Discontinuity at $x = 4$: $\\lim_{t \\to 4^-} [-2\\sqrt{4-x}]_0^t = \\lim_{t \\to 4^-}(-2\\sqrt{4-t} + 2\\sqrt{4}) = 0 + 4 = 4$.'
          },
          {
            question: '$\\int_0^1 \\frac{1}{x^2}\\,dx$ is:',
            options: ['Divergent', 'Convergent to $1$', 'Convergent to $-1$', 'Not improper'],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to 0^+} [-\\frac{1}{x}]_t^1 = -1 + \\frac{1}{t} \\to \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'imp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Type**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_0^{\\infty} \\frac{1}{x^2}\\,dx$ is:',
            options: ['Type I only', 'Type II only', 'Both Type I and Type II', 'Not improper'],
            correctAnswers: ['Both Type I and Type II'],
            hints: ['Upper limit is $\\infty$ (Type I). And $\\frac{1}{x^2}$ is undefined at $x = 0$ (Type II).'],
            explanation: 'Both issues: infinite limit AND discontinuity at $x=0$. Split at $x=1$: $\\int_0^1 + \\int_1^{\\infty}$. The first part diverges, so the whole integral diverges.'
          },
          {
            label: '$\\int_0^3 \\frac{1}{(x-1)^{2/3}}\\,dx$ has a discontinuity at:',
            options: ['$x = 1$ (interior point)', '$x = 0$ (left endpoint)', '$x = 3$ (right endpoint)', 'No discontinuity'],
            correctAnswers: ['$x = 1$ (interior point)'],
            hints: ['$(x-1)^{2/3} = 0$ when $x = 1$. Since $1 \\in (0,3)$, it\u2019s an interior discontinuity.'],
            explanation: 'At $x = 1$ the integrand is undefined. Split: $\\int_0^1 + \\int_1^3$. Each is evaluated with a one-sided limit at $x=1$.'
          }
        ]
      }
    },
    {
      id: 'imp2-input',
      type: 'input-box' as const,
      content: '**Type II Computation**',
      exercise: {
        question: 'Evaluate $\\int_0^9 \\frac{1}{\\sqrt{x}}\\,dx$. The integrand is discontinuous at $x = 0$. Compute $\\lim_{t \\to 0^+} [2\\sqrt{x}]_t^9$. What is the exact value?',
        correctAnswer: '6',
        acceptableAnswers: ['6', '6.0'],
        hints: ['$[2\\sqrt{x}]_t^9 = 2\\sqrt{9} - 2\\sqrt{t} = 6 - 2\\sqrt{t}$.', 'As $t \\to 0^+$: $6 - 0 = 6$.'],
        explanation: '$\\lim_{t \\to 0^+} (2\\sqrt{9} - 2\\sqrt{t}) = 6 - 0 = 6$.'
      }
    },
    {
      id: 'imp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Type | Where the Problem Is | How to Handle |
|------|---------------------|---------------|
| Type I | Infinite limit ($\\pm\\infty$) | $\\lim_{t \\to \\pm\\infty}$ |
| Type II (endpoint) | $f$ undefined at $a$ or $b$ | One-sided limit |
| Type II (interior) | $f$ undefined at $c \\in (a,b)$ | Split and use two limits |
| Both | $\\int_0^{\\infty} \\frac{1}{x^p}\\,dx$ | Split at convenient point |

> **Coming Up:** Part 3 develops **convergence vs. divergence criteria** \u2014 when can you tell without computing?`
    }
  ]
};
