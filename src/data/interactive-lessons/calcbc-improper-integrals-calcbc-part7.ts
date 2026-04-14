export const calcbcImproperPart7Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp7-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 7 of 7 \u2014 Comprehensive Review**

This final part reviews every concept from the improper integrals unit. Treat it as an AP exam simulation.`
    },
    {
      id: 'imp7-reference',
      type: 'text' as const,
      content: `### Complete Reference Table

| Concept | Key Formula | Convergence Condition |
|:---:|:---:|:---:|
| Type I | $\\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx$ | Limit exists and is finite |
| Type II (endpoint) | $\\lim_{t \\to b^-} \\int_a^t f(x)\\,dx$ | Limit exists and is finite |
| Type II (interior) | Split at discontinuity | Both halves converge |
| $p$-test (Type I) | $\\int_1^{\\infty} x^{-p}\\,dx = \\frac{1}{p-1}$ | $p > 1$ |
| $p$-test (Type II) | $\\int_0^1 x^{-p}\\,dx = \\frac{1}{1-p}$ | $p < 1$ |
| Direct Comparison | $0 \\le f \\le g$ | Converges if $g$ converges |
| Limit Comparison | $\\lim f/g = L \\in (0,\\infty)$ | Same behavior as $g$ |
| Exponential | $\\int_0^{\\infty} e^{-kx}\\,dx = 1/k$ | Always ($k > 0$) |

$$\\boxed{\\text{Type I: } p > 1 \\text{ converges} \\qquad \\text{Type II: } p < 1 \\text{ converges}}$$`
    },
    {
      id: 'imp7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Problem Set**',
      exercise: {
        questions: [
          {
            question: '$\\int_{-\\infty}^{0} e^{3x}\\,dx =$',
            options: ['$\\frac{1}{3}$', '$3$', '$-\\frac{1}{3}$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to -\\infty} [\\frac{1}{3}e^{3x}]_t^0 = \\frac{1}{3} - \\lim_{t \\to -\\infty} \\frac{1}{3}e^{3t} = \\frac{1}{3} - 0 = \\frac{1}{3}$.'
          },
          {
            question: 'Which statement about $\\int_{-1}^{1} \\frac{1}{x}\\,dx$ is correct?',
            options: [
              'It diverges because $\\frac{1}{x}$ has a discontinuity at $x = 0$',
              'It equals $0$ by symmetry',
              'It equals $\\ln 1 - \\ln(-1)$',
              'It converges to $2$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x}$ is discontinuous at $x = 0 \\in (-1,1)$. Split: $\\int_{-1}^0 \\frac{1}{x}\\,dx + \\int_0^1 \\frac{1}{x}\\,dx$. Both diverge. You cannot cancel $+\\infty$ and $-\\infty$.'
          },
          {
            question: '$\\int_0^{\\infty} \\frac{x^2}{x^4 + 1}\\,dx$ converges because:',
            options: [
              'LCT with $1/x^2$ gives finite $L$; $p = 2 > 1$',
              'DCT with $1/x$ gives convergence',
              'The integrand is bounded by $1$',
              'The antiderivative is $\\arctan(x^2)$'
            ],
            correctAnswer: 0,
            explanation: 'For large $x$: $\\frac{x^2}{x^4+1} \\approx \\frac{1}{x^2}$. LCT: $\\lim \\frac{x^2/(x^4+1)}{1/x^2} = \\lim \\frac{x^4}{x^4+1} = 1$. Since $\\int 1/x^2$ converges, so does the original.'
          }
        ]
      }
    },
    {
      id: 'imp7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classification Review**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_0^3 \\frac{dx}{(x-1)^{1/3}}$: Type and result?',
            options: ['Type II, converges (split at $x=1$, $p=1/3<1$)', 'Type II, diverges', 'Type I, converges', 'Not improper'],
            correctAnswers: ['Type II, converges (split at $x=1$, $p=1/3<1$)'],
            hints: ['$(x-1)^{1/3} = 0$ at $x = 1$. This is like $\\int |u|^{-1/3}\\,du$ with $p = 1/3 < 1$.'],
            explanation: 'Discontinuity at $x = 1$ (interior). Split and evaluate each half. Since the exponent $1/3 < 1$, both halves converge.'
          },
          {
            label: '$\\int_1^{\\infty} \\frac{x+\\sin x}{x^3}\\,dx$: Convergence?',
            options: ['Converges (dominant term $\\sim 1/x^2$)', 'Diverges', 'Cannot determine', 'Converges to $\\pi$'],
            correctAnswers: ['Converges (dominant term $\\sim 1/x^2$)'],
            hints: ['$\\frac{x + \\sin x}{x^3} = \\frac{1}{x^2} + \\frac{\\sin x}{x^3}$. Both converge.'],
            explanation: '$\\frac{1}{x^2}$ converges ($p=2>1$). $|\\frac{\\sin x}{x^3}| \\le \\frac{1}{x^3}$ converges by DCT. Sum converges.'
          },
          {
            label: '$\\int_0^{\\infty} \\frac{1}{\\sqrt{x}\\,e^x}\\,dx$: Convergence?',
            options: ['Converges (both halves converge)', 'Diverges at $x = 0$', 'Diverges at infinity', 'Cannot determine'],
            correctAnswers: ['Converges (both halves converge)'],
            hints: ['Split at $1$. Near $0$: like $1/\\sqrt{x}$ ($p=1/2<1$, converges). Near $\\infty$: $e^{-x}$ dominates.'],
            explanation: '$\\int_0^1$: $\\frac{1}{\\sqrt{x}e^x} \\le \\frac{1}{\\sqrt{x}}$, converges. $\\int_1^{\\infty}$: $\\frac{1}{\\sqrt{x}e^x} \\le e^{-x}$, converges by DCT.'
          }
        ]
      }
    },
    {
      id: 'imp7-frq',
      type: 'text' as const,
      content: `### AP FRQ Practice

**Problem:** The region $R$ is bounded by $y = \\frac{1}{x^2}$, the $x$-axis, and $x = 1$.

**(a)** Show the area of $R$ is finite:
$$A = \\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\lim_{t \\to \\infty} [-\\frac{1}{x}]_1^t = 0 + 1 = 1$$

**(b)** Volume revolved about the $x$-axis:
$$V = \\pi\\int_1^{\\infty} \\frac{1}{x^4}\\,dx = \\pi \\cdot \\frac{1}{3} = \\frac{\\pi}{3}$$

**(c)** Compare: $y = 1/x$ (Gabriel\u2019s Horn) has finite volume ($\\pi$) but infinite surface area. The $y = 1/x^2$ version has finite everything.

> **Key Insight:** Whether area/volume/surface area is finite depends on the power of $x$ in the denominator.`
    },
    {
      id: 'imp7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'Compute $\\int_0^{\\infty} 3e^{-3x}\\,dx$. This is the integral of an exponential probability density function. What is the exact value?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0', '1.00'],
        hints: ['$3 \\int_0^{\\infty} e^{-3x}\\,dx = 3 \\cdot \\frac{1}{3}$.', 'The exponential distribution integrates to $1$.'],
        explanation: '$3[-\\frac{1}{3}e^{-3x}]_0^{\\infty} = 3(0 + \\frac{1}{3}) = 1$. This confirms $f(x) = 3e^{-3x}$ is a valid pdf on $[0,\\infty)$.'
      }
    },
    {
      id: 'imp7-summary',
      type: 'text' as const,
      content: `### Unit Summary \u2014 Improper Integrals

**The Big Picture:**
- Type I: infinite bounds \u2192 replace with limit
- Type II: discontinuous integrand \u2192 one-sided limit
- $p$-test: the fundamental convergence criterion
- Comparison tests: extend $p$-test to harder integrals
- Key results: $e^{-kx}$, $\\arctan$, Gabriel\u2019s Horn

**AP Exam Checklist:**
- Can you identify improper integrals?
- Can you set up and evaluate both types?
- Do you know both $p$-test directions?
- Can you apply DCT and LCT?
- Can you handle FRQ area/volume problems?

> **Congratulations!** You have mastered improper integrals for AP Calculus BC.`
    }
  ]
};
