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
| $\\int_0^{\\infty} x^n e^{-x}\\,dx$ | $n!$ | IBP $n$ times (Gamma function) |
| $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ | $1$ | $p$-test, $p=2$ |
| $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ | $2$ | Type II, $p = 1/2 < 1$ |
| $\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2}\\,dx$ | $\\pi$ | $\\arctan$ |

$$\\boxed{\\int_0^{\\infty} xe^{-x}\\,dx = 1 \\quad \\text{and} \\quad \\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = \\pi}$$

> **AP Tip:** Memorize the arctan integral: $\\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx = \\frac{\\pi}{2}$. It appears in multiple-choice questions regularly.`
    },
    {
      id: 'imp5-gamma',
      type: 'text' as const,
      content: `### The Gamma Function Connection

$$\\Gamma(n+1) = \\int_0^{\\infty} x^n e^{-x}\\,dx = n!$$

| $n$ | $\\int_0^{\\infty} x^n e^{-x}\\,dx$ | Value |
|:---:|:---:|:---:|
| $0$ | $\\int_0^{\\infty} e^{-x}\\,dx$ | $0! = 1$ |
| $1$ | $\\int_0^{\\infty} xe^{-x}\\,dx$ | $1! = 1$ |
| $2$ | $\\int_0^{\\infty} x^2 e^{-x}\\,dx$ | $2! = 2$ |
| $3$ | $\\int_0^{\\infty} x^3 e^{-x}\\,dx$ | $3! = 6$ |

While $\\Gamma$ is beyond the AP exam, knowing $\\int_0^{\\infty} xe^{-x}\\,dx = 1$ via IBP is testable.

**Derivation:** $u = x$, $dv = e^{-x}dx$:
$$\\int_0^{\\infty} xe^{-x}\\,dx = [-xe^{-x}]_0^{\\infty} + \\int_0^{\\infty} e^{-x}\\,dx = 0 + 1 = 1$$`
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
              '$\\int_1^{\\infty} \\frac{1}{x \\ln^2 x}\\,dx$',
              '$\\int_1^{\\infty} \\frac{1}{x \\ln x}\\,dx$',
              '$\\int_1^{\\infty} \\frac{1}{x^2 \\ln x}\\,dx$',
              '$\\int_0^{\\infty} e^{-x^2}\\,dx$'
            ],
            correctAnswer: 1,
            explanation: '$\\int_1^{\\infty} \\frac{1}{x \\ln x}\\,dx$: substitute $u = \\ln x$, get $\\int_0^{\\infty} \\frac{1}{u}\\,du = \\infty$. The others converge: $\\frac{1}{x\\ln^2 x}$ gives $\\int u^{-2}\\,du$ (converges); $\\frac{1}{x^2 \\ln x}$ is dominated by $1/x^2$; $e^{-x^2}$ decays faster than any power.'
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
> *(c) Set up, but do not evaluate, the volume when $R$ is revolved about the $y$-axis.*

**Solutions:**
- (a) $A = \\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 1$ (finite area)
- (b) $V = \\pi \\int_1^{\\infty} \\frac{1}{x^4}\\,dx = \\pi \\cdot \\frac{1}{3}$ (finite volume)
- (c) $V = 2\\pi \\int_1^{\\infty} x \\cdot \\frac{1}{x^2}\\,dx = 2\\pi \\int_1^{\\infty} \\frac{1}{x}\\,dx$ (diverges!)

$$\\boxed{\\text{Gabriel\u2019s Horn: finite volume but infinite surface area!}}$$`
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
            label: 'Surface area of $y = 1/x$ for $x \\ge 1$ revolved about $x$-axis:',
            options: ['Infinite', 'Finite, equals $2\\pi$', 'Finite, equals $\\pi$', 'Equals the volume'],
            correctAnswers: ['Infinite'],
            hints: ['$SA \\ge 2\\pi \\int_1^{\\infty} \\frac{1}{x}\\,dx = \\infty$.'],
            explanation: 'The surface area integral involves $\\frac{1}{x}\\sqrt{1 + 1/x^4}$, which is $\\ge \\frac{1}{x}$ and therefore diverges. This is Gabriel\u2019s Horn paradox.'
          }
        ]
      }
    },
    {
      id: 'imp5-input',
      type: 'input-box' as const,
      content: '**Integration by Parts with Improper Integral**',
      exercise: {
        question: 'Compute $\\int_0^{\\infty} xe^{-2x}\\,dx$. Use IBP with $u = x$, $dv = e^{-2x}\\,dx$. The answer is a fraction $\\frac{a}{b}$ in lowest terms. Enter the numerator $a$.',
        correctAnswer: '1',
        acceptableAnswers: ['1'],
        hints: ['$u = x, dv = e^{-2x}dx \\Rightarrow du = dx, v = -\\frac{1}{2}e^{-2x}$.', '$[-\\frac{x}{2}e^{-2x}]_0^{\\infty} + \\frac{1}{2}\\int_0^{\\infty} e^{-2x}\\,dx = 0 + \\frac{1}{2} \\cdot \\frac{1}{2}$.'],
        explanation: 'IBP: $[-\\frac{x}{2}e^{-2x}]_0^{\\infty} + \\frac{1}{2}\\int_0^{\\infty} e^{-2x}\\,dx = 0 + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$. The fraction is $\\frac{1}{4}$, so the numerator is $1$.'
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

**Gabriel\u2019s Horn:** $y = 1/x$ for $x \\ge 1$ revolved about the $x$-axis has finite volume ($\\pi$) but infinite surface area.

> **Coming Up:** Part 6 is a **Problem-Solving Workshop** with mixed practice.`
    }
  ]
};
