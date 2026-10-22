export const calcbcImproperPart5Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp5-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 5 of 7 \u2014 Special Results & AP Exam Patterns**

This part consolidates key results that appear repeatedly on the AP Calculus BC exam and prepares you for free-response improper integral problems.`
    },
    {
      id: 'imp5-gallery',
      type: 'text' as const,
      content: `### Gallery of Important Improper Integrals

| Integral | Value | Method |
|:---:|:---:|:---:|
| $\\int_0^{\\infty} e^{-x}\\,dx$ | $1$ | Direct: $[-e^{-x}]_0^{\\infty}$ |
| $\\int_0^{\\infty} e^{-kx}\\,dx$ ($k>0$) | $\\frac{1}{k}$ | Direct |
| $\\int_0^{\\infty} xe^{-x}\\,dx$ | $1$ | Integration by parts |
| $\\int_0^{\\infty} x^2 e^{-x}\\,dx$ | $2$ | Integration by parts twice |
| $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ | $1$ | $p$-test, $p=2$ |
| $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ | $2$ | Type II, $p = 1/2 < 1$ |
| $\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2}\\,dx$ | $\\pi$ | $\\arctan$ |

$$\\boxed{\\int_0^{\\infty} xe^{-x}\\,dx = 1 \\quad \\text{and} \\quad \\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = \\pi}$$

> **AP Tip:** Memorize the arctan integral: $\\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx = \\frac{\\pi}{2}$. It appears in multiple-choice questions regularly.`
    },
    {
      id: 'imp5-ibp',
      type: 'text' as const,
      content: `### Integration by Parts on an Infinite Interval

Write the improper integral as a limit, integrate by parts, then take the limit.

**Example:** $\\int_0^{\\infty} xe^{-x}\\,dx$ with $u = x$, $dv = e^{-x}\\,dx$:

$$\\int_0^{b} xe^{-x}\\,dx = \\Big[-xe^{-x}\\Big]_0^{b} + \\int_0^{b} e^{-x}\\,dx = -be^{-b} - e^{-b} + 1$$

| Piece | Limit as $b \\to \\infty$ | Reason |
|:---:|:---:|:---:|
| $-be^{-b} = -\\frac{b}{e^b}$ | $0$ | L'Hospital's Rule on $\\frac{\\infty}{\\infty}$: $\\frac{1}{e^b} \\to 0$ |
| $-e^{-b}$ | $0$ | $e^b \\to \\infty$ |

So $\\int_0^{\\infty} xe^{-x}\\,dx = 1$. Applying parts twice the same way gives $\\int_0^{\\infty} x^2 e^{-x}\\,dx = 2$.`
    },
    {
      id: 'imp5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Quick Checks**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{\\infty} \\frac{2}{1+x^2}\\,dx =$',
            options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$2 \\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx = 2 \\cdot \\frac{\\pi}{2} = \\pi$.'
          },
          {
            question: 'Which integral diverges?',
            options: [
              '$\\int_e^{\\infty} \\frac{1}{x \\ln^2 x}\\,dx$',
              '$\\int_e^{\\infty} \\frac{1}{x \\ln x}\\,dx$',
              '$\\int_0^{\\infty} x e^{-x^2}\\,dx$',
              '$\\int_1^{\\infty} x^{-3/2}\\,dx$'
            ],
            correctAnswer: 1,
            explanation: '$\\int_e^{\\infty} \\frac{1}{x \\ln x}\\,dx$: substitute $u = \\ln x$ to get $\\int_1^{\\infty} \\frac{1}{u}\\,du = \\lim_{b \\to \\infty} \\ln b = \\infty$. Each of the others has an antiderivative with a finite limit: $\\frac{1}{x\\ln^2 x}$ becomes $\\int_1^{\\infty} u^{-2}\\,du = 1$; $u = x^2$ turns $\\int_0^{\\infty} xe^{-x^2}\\,dx$ into $\\frac{1}{2}\\int_0^{\\infty} e^{-u}\\,du = \\frac{1}{2}$; and $\\int_1^{\\infty} x^{-3/2}\\,dx = \\lim_{b \\to \\infty}\\left(2 - \\frac{2}{\\sqrt{b}}\\right) = 2$.'
          }
        ]
      }
    },
    {
      id: 'imp5-frq',
      type: 'text' as const,
      content: `### AP Free-Response Pattern

A typical AP FRQ might say:

> *Let $R$ be the unbounded region between $y = \\frac{1}{x^2}$ and the $x$-axis for $x \\ge 1$.*
> *(a) Find the area of $R$.*
> *(b) Find the volume when $R$ is revolved about the $x$-axis.*
> *(c) Find the volume when $R$ is revolved about the line $y = -1$.*

**Solutions:**
- (a) $A = \\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 1$ (finite area)
- (b) $V = \\pi \\int_1^{\\infty} \\frac{1}{x^4}\\,dx = \\pi \\cdot \\frac{1}{3}$ (finite volume)
- (c) Washers with outer radius $\\frac{1}{x^2} + 1$ and inner radius $1$: $V = \\pi \\int_1^{\\infty} \\left[\\left(\\frac{1}{x^2} + 1\\right)^2 - 1^2\\right]dx = \\pi \\int_1^{\\infty} \\left(\\frac{1}{x^4} + \\frac{2}{x^2}\\right)dx = \\pi\\left(\\frac{1}{3} + 2\\right) = \\frac{7\\pi}{3}$

$$\\boxed{\\text{Unbounded region} \\to \\text{improper integral} \\to \\text{evaluate as a limit}}$$`
    },
    {
      id: 'imp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ-Style Classification**',
      exercise: {
        dropdowns: [
          {
            label: 'Area under $y = e^{-x}$ for $x \\ge 0$:',
            options: ['Finite, equals $1$', 'Finite, equals $e$', 'Infinite', 'Finite, equals $1/e$'],
            correctAnswers: ['Finite, equals $1$'],
            hints: ['$\\int_0^{\\infty} e^{-x}\\,dx = [-e^{-x}]_0^{\\infty} = 0 - (-1)$.'],
            explanation: '$[-e^{-x}]_0^{\\infty} = 0 + 1 = 1$.'
          },
          {
            label: 'Volume of $y = 1/x$ for $x \\ge 1$ revolved about $x$-axis:',
            options: ['Finite, equals $\\pi$', 'Infinite', 'Finite, equals $2\\pi$', 'Finite, equals $\\pi/2$'],
            correctAnswers: ['Finite, equals $\\pi$'],
            hints: ['Disk method: $V = \\pi \\int_1^{\\infty} (1/x)^2\\,dx = \\pi \\int_1^{\\infty} 1/x^2\\,dx$.'],
            explanation: '$V = \\pi \\int_1^{\\infty} x^{-2}\\,dx = \\pi \\cdot 1 = \\pi$.'
          },
          {
            label: 'Area under $y = 1/x$ for $x \\ge 1$:',
            options: ['Infinite', 'Finite, equals $1$', 'Finite, equals $\\pi$', 'Finite, equals $\\ln 2$'],
            correctAnswers: ['Infinite'],
            hints: ['$\\int_1^{b} \\frac{1}{x}\\,dx = \\ln b$. What happens as $b \\to \\infty$?'],
            explanation: '$\\lim_{b \\to \\infty} \\ln b = \\infty$, so the area is infinite. Yet the volume from revolving this same region is finite ($\\pi$): squaring $\\frac{1}{x}$ for the disks makes the integrand shrink fast enough.'
          }
        ]
      }
    },
    {
      id: 'imp5-input',
      type: 'input-box' as const,
      content: '**Integration by Parts with Improper Integral**',
      exercise: {
        question: 'Compute $\\int_0^{\\infty} xe^{-2x}\\,dx$ using integration by parts with $u = x$, $dv = e^{-2x}\\,dx$. Give the exact value.',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25'],
        hints: ['$u = x, dv = e^{-2x}dx \\Rightarrow du = dx, v = -\\frac{1}{2}e^{-2x}$.', '$[-\\frac{x}{2}e^{-2x}]_0^{\\infty} + \\frac{1}{2}\\int_0^{\\infty} e^{-2x}\\,dx$; the boundary term is $0$.'],
        explanation: 'IBP: $[-\\frac{x}{2}e^{-2x}]_0^{\\infty} + \\frac{1}{2}\\int_0^{\\infty} e^{-2x}\\,dx = 0 + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.'
      }
    },
    {
      id: 'imp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

**Must-Know Integrals:**
- $\\int_0^{\\infty} e^{-kx}\\,dx = 1/k$
- $\\int_0^{\\infty} xe^{-x}\\,dx = 1$
- $\\int_0^{\\infty} \\frac{dx}{1+x^2} = \\pi/2$

**Area vs. volume:** the region under $y = 1/x$ for $x \\ge 1$ has infinite area, but revolving it about the $x$-axis gives the finite volume $\\pi$, because the disk integrand $\\frac{\\pi}{x^2}$ shrinks faster.

> **Coming Up:** Part 6 is a **Problem-Solving Workshop** with mixed practice.`
    }
  ]
};
