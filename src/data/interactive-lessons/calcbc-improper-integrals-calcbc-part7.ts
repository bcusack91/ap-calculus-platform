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
| Two-sided | Split at a point | Both halves converge |
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
              'It diverges, since $\\int_0^1 \\frac{dx}{x}$ diverges',
              'It equals $0$, because $\\frac{1}{x}$ is an odd function',
              'It equals $\\ln|1| - \\ln|-1| = 0$ by the Fundamental Theorem',
              'It converges, because each half is a $p = 1$ Type II integral'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x}$ is discontinuous at $x = 0 \\in (-1,1)$, so split: $\\int_{-1}^0 \\frac{1}{x}\\,dx + \\int_0^1 \\frac{1}{x}\\,dx$. Each half is a Type II integral with $p = 1$, and $p = 1$ diverges, so the whole integral diverges. Odd symmetry and the FTC both require the integral to exist first; you cannot cancel $+\\infty$ and $-\\infty$.'
          },
          {
            question: '$\\int_0^{\\infty} \\frac{x}{(1+x^2)^2}\\,dx = $',
            options: ['$\\frac{1}{2}$', '$1$', '$\\infty$', '$\\frac{1}{4}$'],
            correctAnswer: 0,
            explanation: 'With $u = 1 + x^2$, an antiderivative is $-\\frac{1}{2(1+x^2)}$, so the limit is $0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$. Dropping the $\\frac{1}{2}$ from $du = 2x\\,dx$ gives $1$, $\\frac{1}{4}$ halves twice, and the integrand decays like $\\frac{1}{x^3}$, so it converges.'
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
            options: ['Type II, converges', 'Type II, diverges', 'Type I, converges', 'Not improper'],
            correctAnswers: ['Type II, converges'],
            hints: ['$(x-1)^{1/3} = 0$ at $x = 1$. This is like $\\int |u|^{-1/3}\\,du$ with $p = 1/3 < 1$.'],
            explanation: 'Discontinuity at $x = 1$ (interior), so it is Type II. Split at $x = 1$ and evaluate each half. Since the exponent $p = 1/3 < 1$, both halves converge.'
          },
          {
            label: '$\\int_1^{\\infty} \\frac{x+1}{x^3}\\,dx$: Result?',
            options: ['Converges to $1$', 'Diverges (like $1/x$)', 'Converges to $\\frac{3}{2}$', 'Converges to $\\frac{1}{2}$'],
            correctAnswers: ['Converges to $\\frac{3}{2}$'],
            hints: ['$\\frac{x + 1}{x^3} = \\frac{1}{x^2} + \\frac{1}{x^3}$.'],
            explanation: 'Split into $\\int_1^{\\infty} x^{-2}\\,dx + \\int_1^{\\infty} x^{-3}\\,dx = 1 + \\frac{1}{2} = \\frac{3}{2}$. Keeping only one term gives $1$ or $\\frac{1}{2}$, and the integrand behaves like $\\frac{1}{x^2}$, not $\\frac{1}{x}$.'
          },
          {
            label: '$\\int_0^{\\infty} x e^{-x}\\,dx$: Result?',
            options: ['Diverges at infinity', 'Converges to $1$', 'Converges to $0$', 'Converges to $e$'],
            correctAnswers: ['Converges to $1$'],
            hints: ['Integration by parts: $u = x$, $dv = e^{-x}\\,dx$.'],
            explanation: 'An antiderivative is $-(x+1)e^{-x}$, and $(t+1)e^{-t} \\to 0$ as $t \\to \\infty$, so the integral is $0 - (-1) = 1$. Exponential decay beats the factor $x$, so it does not diverge; $0$ forgets the lower-limit term and $e$ is not a value of the antiderivative here.'
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

**(c)** Compare: for $y = 1/x$ the area $\\int_1^{\\infty} \\frac{1}{x}\\,dx$ diverges, but the volume $\\pi\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\pi$ is finite. For $y = 1/x^2$, both are finite.

> **Key Insight:** Whether an area or volume is finite depends on the power of $x$ in the denominator. Squaring the radius for disks raises that power, which is why a volume can be finite when the area is not.`
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
- Two-sided integrals: split, and both halves must converge
- Key results: $e^{-kx}$, $\\arctan$, finite volume from an infinite area ($y = 1/x$)

**AP Exam Checklist:**
- Can you identify improper integrals?
- Can you set up and evaluate both types?
- Do you know both $p$-test directions?
- Can you split two-sided integrals and substitute with limits?
- Can you handle FRQ area/volume problems?

> **Congratulations!** You have mastered improper integrals for AP Calculus BC.`
    }
  ]
};
