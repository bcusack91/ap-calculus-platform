export const calcbcRadConvPart1Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc1-intro',
      type: 'text' as const,
      content: `# Radius & Interval of Convergence

**Part 1 of 7 — Foundations**

### Power Series Review

A power series centered at $a$ has the form:

$$\\sum_{n=0}^{\\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots$$

Every power series converges in exactly one of three ways:

| Case | Convergence Set | $R$ |
|------|----------------|-----|
| 1 | Only at $x = a$ | $R = 0$ |
| 2 | For all $x$ | $R = \\infty$ |
| 3 | On an interval $(a - R, a + R)$ | $0 < R < \\infty$ |

### The Radius of Convergence

$$\\boxed{R = \\frac{1}{\\displaystyle\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right|}}$$

(with $R = \\infty$ if the limit is $0$, and $R = 0$ if the limit is $\\infty$)

The **interval of convergence** (IOC) is $(a - R, a + R)$ plus possibly one or both endpoints.

> **Key Fact:** The Ratio Test determines $R$ but says NOTHING about endpoints. You must test those separately.`
    },
    {
      id: 'rc1-examples',
      type: 'text' as const,
      content: `### Example 1: $\\sum_{n=0}^{\\infty} \\frac{x^n}{2^n}$

$c_n = 1/2^n$. $|c_{n+1}/c_n| = 1/2$. $R = 2$.

Open interval: $(-2, 2)$.

- $x = 2$: $\\sum 1$ diverges.
- $x = -2$: $\\sum (-1)^n$ diverges.

**IOC: $(-2, 2)$**

### Example 2: $\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n}$

$c_n = 1/n$. $|c_{n+1}/c_n| = n/(n+1) \\to 1$. $R = 1$.

Open interval: $(2, 4)$.

- $x = 4$: $\\sum 1/n$ (harmonic) diverges.
- $x = 2$: $\\sum (-1)^n/n$ converges (AST).

**IOC: $[2, 4)$**

### Example 3: $\\sum_{n=0}^{\\infty} n! x^n$

$|c_{n+1}/c_n| = (n+1) \\to \\infty$. $R = 0$.

**IOC: $\\{0\\}$ only**`
    },
    {
      id: 'rc1-mc1',
      type: 'multiple-choice' as const,
      content: '**Radius Basics**',
      exercise: {
        questions: [
          {
            question: 'For $\\sum x^n/n!$, the radius of convergence is:',
            options: ['$\\infty$', '$1$', '$0$', '$e$'],
            correctAnswer: 0,
            explanation: '$|c_{n+1}/c_n| = 1/(n+1) \\to 0$. $R = 1/0 = \\infty$. This is $e^x$.'
          },
          {
            question: 'The interval $(a - R, a + R)$ is called the:',
            options: ['Open interval of convergence (endpoints not yet checked)', 'Radius of convergence', 'Domain of the series', 'Divergence region'],
            correctAnswer: 0,
            explanation: 'The Ratio Test gives the open interval. Endpoints need separate testing to determine the full IOC.'
          },
          {
            question: 'A power series centered at $a = 5$ with $R = 3$ definitely converges for:',
            options: ['$x = 6$ (inside $(2, 8)$)', '$x = 2$ (left endpoint — need to check)', '$x = 8$ (right endpoint — need to check)', '$x = 10$ (outside interval)'],
            correctAnswer: 0,
            explanation: '$|6 - 5| = 1 < 3 = R$. Inside the interval → definitely converges.'
          }
        ]
      }
    },
    {
      id: 'rc1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Finding R**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{n^2 x^n}{3^n}$: $R =$',
            options: ['$3$', '$1/3$', '$9$', '$\\infty$'],
            correctAnswers: ['$3$'],
            hints: ['$c_n = n^2/3^n$. $|c_{n+1}/c_n| = ((n+1)/n)^2 (1/3) \\to 1/3$.'],
            explanation: '$\\lim |c_{n+1}/c_n| = 1/3$. $R = 1/(1/3) = 3$.'
          },
          {
            label: '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$: $R =$',
            options: ['$\\infty$ (this is $\\cos x$)', '$1$', '$2$', '$0$'],
            correctAnswers: ['$\\infty$ (this is $\\cos x$)'],
            hints: ['This is the Maclaurin series for $\\cos x$, which converges everywhere.'],
            explanation: 'Ratio of consecutive nonzero terms: $x^2/((2n+2)(2n+1)) \\to 0$. $R = \\infty$.'
          }
        ]
      }
    },
    {
      id: 'rc1-input',
      type: 'input-box' as const,
      content: '**Compute R**',
      exercise: {
        question: 'Find $R$ for $\\sum_{n=1}^{\\infty} \\frac{(x+2)^n}{n \\cdot 5^n}$.',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: ['$c_n = 1/(n \\cdot 5^n)$. $|c_{n+1}/c_n| = n/((n+1) \\cdot 5) \\to 1/5$.'],
        explanation: '$\\lim |c_{n+1}/c_n| = 1/5$. $R = 5$.'
      }
    },
    {
      id: 'rc1-summary',
      type: 'text' as const,
      content: `### Summary

- Every power series has a radius $R \\in [0, \\infty]$
- $R = 1/\\lim|c_{n+1}/c_n|$ via Ratio Test
- The open interval $(a-R, a+R)$ needs endpoint checks
- $R = 0$: converges only at center; $R = \\infty$: converges everywhere

> **Next:** Part 2 — Endpoint Testing Strategies.`
    }
  ]
};
