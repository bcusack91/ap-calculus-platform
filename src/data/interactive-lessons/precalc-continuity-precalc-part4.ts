export const precalcContinuityPart4Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🎯 Continuity on Intervals

**Part 4 of 7**

### Continuous on an Interval

$f$ is **continuous on $(a, b)$** if it is continuous at every point in $(a, b)$.

$f$ is **continuous on $[a, b]$** if:
- Continuous on $(a, b)$
- $\\lim_{x \\to a^+} f(x) = f(a)$ (right-continuous at left endpoint)
- $\\lim_{x \\to b^-} f(x) = f(b)$ (left-continuous at right endpoint)

### Why Closed Intervals Matter

Many theorems (IVT, EVT, MVT) require continuity on a **closed** interval $[a,b]$. Endpoints must be included.

### Examples

- $f(x) = \\sqrt{x}$: continuous on $[0, \\infty)$
- $f(x) = \\ln x$: continuous on $(0, \\infty)$
- $f(x) = 1/x$: continuous on $(0, \\infty)$ and $(-\\infty, 0)$ but NOT on any interval containing $0$
      `
    },
    {
      id: 'p4-domain',
      type: 'text' as const,
      content: `
## Continuity and Domain

### Key Principle

A function is continuous **on its domain** if it has no discontinuities within that domain.

### Functions Continuous on Their Entire Domain

| Function | Domain | Continuous on domain? |
|:---------|:-------|:---------------------|
| $x^n$ | $\\mathbb{R}$ | Yes |
| $1/x$ | $x \\neq 0$ | Yes |
| $\\sqrt{x}$ | $x \\geq 0$ | Yes |
| $\\ln x$ | $x > 0$ | Yes |
| $\\tan x$ | $x \\neq \\pi/2 + n\\pi$ | Yes |

All of these are continuous **where they're defined**. The "discontinuities" are really just **domain restrictions**.

### Continuity Tests for Common Types

- **Polynomial**: Always continuous. No test needed.
- **Rational $p(x)/q(x)$**: Continuous everywhere except where $q(x) = 0$.
- **Composed**: If $f$ and $g$ are continuous, so is $f(g(x))$ (in domain).
      `
    },
    {
      id: 'p4-theorems',
      type: 'text' as const,
      content: `
## Theorems Requiring Continuity

### Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a,b]$, then $f$ takes every value between $f(a)$ and $f(b)$.

**Requires**: continuity on $[a,b]$.

### Extreme Value Theorem (EVT)

If $f$ is continuous on $[a,b]$, then $f$ has an **absolute maximum** and **absolute minimum** on $[a,b]$.

**Requires**: continuous + closed interval.

### Why These Fail Without Continuity

$f(x) = \\begin{cases} 1 & x = 0 \\\\ 0 & x \\neq 0 \\end{cases}$ on $[-1,1]$

- Discontinuous at $x=0$
- Never takes values between 0 and 1 (violates IVT spirit)
- Still has max/min, but pathological cases can fail EVT without continuity
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Interval Continuity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$f(x) = \\sqrt{4-x}$ is continuous on:',
            options: ['$(-\\infty, 4]$', '$(4, \\infty)$', '$[0, \\infty)$', '$(-\\infty, \\infty)$'],
            correctAnswer: 0,
            explanation: 'Domain: $4-x \\geq 0 \\Rightarrow x \\leq 4$. Continuous on $(-\\infty, 4]$.'
          },
          {
            question: 'EVT requires continuity on:',
            options: ['Open interval', 'Closed interval', 'Half-open interval', 'Any set'],
            correctAnswer: 1,
            explanation: 'EVT needs a closed interval $[a,b]$ and continuity throughout.'
          },
          {
            question: '$f(x)=\\frac{1}{x-3}$ is continuous on which interval?',
            options: ['$[0, 5]$', '$[0, 3]$', '$(3, \\infty)$', '$(-\\infty, \\infty)$'],
            correctAnswer: 2,
            explanation: 'Discontinuous at $x=3$. Continuous on $(3,\\infty)$ (and on $(-\\infty,3)$).'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Determine domains of continuity:**

**1)** $f(x) = \\sqrt{x-2}$. Continuous for $x \\geq$ ?

**2)** $f(x) = \\ln(x+5)$. Continuous for $x >$ ?

**3)** $f(x) = \\frac{1}{x^2-9}$. Discontinuous at $x = 3$ and $x =$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-5', '-3'],
        hint1: 'Need $x-2 \\geq 0$.',
        hint2: 'Need $x+5 > 0$.',
        hint3: '$x^2-9=(x-3)(x+3)=0$ at two values.',
        explanation: '(1) $x \\geq 2$. (2) $x > -5$. (3) $x = \\pm 3$, so the other is $-3$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interval Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Continuous on $[a,b]$ means endpoints need:',
            options: ['Nothing special', 'One-sided continuity', 'Two-sided continuity', 'Differentiability'],
            correctAnswer: 1
          },
          {
            label: '$\\tan x$ is continuous except at:',
            options: ['$x = n\\pi$', '$x = \\pi/2 + n\\pi$', '$x = 0$', 'All $x$'],
            correctAnswer: 1
          },
          {
            label: 'IVT guarantees:',
            options: ['Maximum exists', 'Intermediate values achieved', 'Function is differentiable', 'Limit exists'],
            correctAnswer: 1
          },
          {
            label: 'A polynomial on $[a,b]$ satisfies EVT because:',
            options: ['It is periodic', 'It is continuous on closed interval', 'It has degree > 0', 'It is monotonic'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['One-sided continuity', '$x = \\pi/2 + n\\pi$', 'Intermediate values achieved', 'It is continuous on closed interval'],
        hint1: 'Endpoints only have one side.',
        hint2: '$\\cos x = 0$ at odd multiples of $\\pi/2$.',
        hint3: 'IVT is about hitting intermediate $y$-values.',
        explanation: 'Endpoints: one-sided. $\\tan$ fails at $\\pi/2+n\\pi$. IVT: intermediate values. EVT: continuous + closed.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which function is continuous on $(-\\infty, \\infty)$?',
            options: ['$1/x$', '$\\ln x$', '$\\sqrt{x}$', '$e^x$'],
            correctAnswer: 3,
            explanation: '$e^x$ is defined and continuous for all real $x$. Others have restricted domains.'
          },
          {
            question: '$f(x) = x^3 - 2x$ on $[-1, 2]$. Does EVT apply?',
            options: ['Yes — polynomial, closed interval', 'No — not continuous', 'No — open interval', 'Cannot tell'],
            correctAnswer: 0,
            explanation: 'Polynomial = continuous everywhere. Closed interval. EVT applies: guaranteed max and min.'
          }
        ]
      }
    }
  ]
};
