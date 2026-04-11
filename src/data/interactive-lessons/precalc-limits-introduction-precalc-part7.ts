export const precalcLimitsPart7Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Limits — Complete Synthesis

**Part 7 of 7**

### The Limit Evaluation Decision Tree

\`\`\`
Given: Find lim f(x) as x→c
│
├─ Direct Substitution → works? → DONE
│
├─ 0/0 form? (Indeterminate)
│   ├─ Factor & cancel
│   ├─ Rationalize (conjugate)
│   ├─ Special trig limits
│   └─ L'Hôpital's Rule (calculus)
│
├─ k/0 form (k≠0)?
│   └─ Check signs → ±∞ or DNE
│
├─ x → ±∞?
│   ├─ Compare degrees
│   ├─ Divide by highest power of x
│   └─ Rationalize if radicals
│
└─ Piecewise / graph?
    └─ Check one-sided limits
\`\`\`
      `
    },
    {
      id: 'p7-techniques',
      type: 'text' as const,
      content: `
## Master Technique Reference

### Algebraic Techniques Summary

| Technique | When to Use | Example |
|:----------|:-----------|:--------|
| Direct Sub | Always try first | $\\lim_{x \\to 2}(3x) = 6$ |
| Factor/Cancel | $0/0$ with polynomials | $\\frac{x^2-4}{x-2} = x+2$ |
| Conjugate | $0/0$ with radicals | $\\frac{\\sqrt{x}-2}{x-4}$ |
| Trig Identity | $0/0$ with trig | $\\frac{\\sin x}{x} \\to 1$ |
| Degree Rules | $x \\to \\pm\\infty$ | $\\frac{3x^2}{5x^2+1} \\to 3/5$ |
| Squeeze | Bounded × vanishing | $x\\sin(1/x) \\to 0$ |

### One-sided vs Two-sided

$\\lim_{x \\to c} f(x) = L$ exists iff $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$.

### Key Special Limits

$$\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0}\\frac{1-\\cos x}{x} = 0, \\quad \\lim_{x \\to 0}\\frac{e^x - 1}{x} = 1$$
      `
    },
    {
      id: 'p7-calculus',
      type: 'text' as const,
      content: `
## Bridge to Calculus

### Limits → Derivatives

The derivative is DEFINED as a limit:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Every technique you've learned for evaluating limits directly applies to computing derivatives from the definition. The $0/0$ form is the essential challenge.

### Limits → Integrals

The definite integral is DEFINED as a limit of Riemann sums:

$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\Delta x$$

Limits at infinity power integral computation.

### IVT → MVT → FTC

The Intermediate Value Theorem (IVT) leads to the Mean Value Theorem (MVT), which leads to the Fundamental Theorem of Calculus (FTC) — the crown jewel linking derivatives and integrals.
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Master Limits Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 4}\\frac{x^2 - 16}{x - 4}$',
            options: ['$4$', '$8$', '$0$', 'DNE'],
            correctAnswer: 1,
            explanation: 'Factor: $\\frac{(x-4)(x+4)}{x-4} = x+4$. At $x=4$: $4+4=8$.'
          },
          {
            question: '$\\lim_{x \\to \\infty}\\frac{7x^3 + x}{2x^3 - 5}$',
            options: ['$7/2$', '$0$', '$\\infty$', '$7$'],
            correctAnswer: 0,
            explanation: 'Same degree (3): ratio of leading coefficients = $7/2$.'
          },
          {
            question: 'The derivative $f\'(a)$ is defined as:',
            options: ['$f(a+h)$', '$\\lim_{h \\to 0}\\frac{f(a+h)-f(a)}{h}$', '$f(a)/a$', '$\\lim_{x \\to \\infty} f(x)$'],
            correctAnswer: 1,
            explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Limit Evaluation:**

**1)** $\\lim_{x \\to 3}\\frac{x^2 - 9}{x - 3}$ = ?

**2)** $\\lim_{x \\to \\infty}\\frac{4x + 1}{2x - 3}$ = ?

**3)** $\\lim_{x \\to 0}\\frac{\\sin(5x)}{x}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '2', '5'],
        hint1: 'Factor: $x^2-9 = (x-3)(x+3)$.',
        hint2: 'Same degree → ratio of leading coefficients.',
        hint3: '$\\frac{\\sin(5x)}{x} = 5 \\cdot \\frac{\\sin(5x)}{5x}$ and use $\\sin(u)/u \\to 1$.',
        explanation: '(1) $(x+3)|_{x=3} = 6$. (2) $4/2 = 2$. (3) $5 \\cdot 1 = 5$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Synthesis** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 2}\\frac{x^2 - 4}{x^2 - 5x + 6}$:',
            options: ['$-4$', '$4$', '$0$', 'DNE'],
            correctAnswer: 0
          },
          {
            label: '$\\lim_{x \\to 0^+} \\ln x$:',
            options: ['$0$', '$1$', '$-\\infty$', '$\\infty$'],
            correctAnswer: 2
          },
          {
            label: '$\\lim_{x \\to \\infty}\\frac{x}{e^x}$:',
            options: ['$\\infty$', '$0$', '$1$', 'DNE'],
            correctAnswer: 1
          },
          {
            label: 'Which theorem guarantees a root when $f$ changes sign?',
            options: ['Mean Value', 'Intermediate Value', 'Extreme Value', 'Squeeze'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$-4$', '$-\\infty$', '$0$', 'Intermediate Value'],
        hint1: 'Factor both: $\\frac{(x-2)(x+2)}{(x-2)(x-3)} = \\frac{x+2}{x-3}$. At $x=2$: $\\frac{4}{-1}$.',
        hint2: 'As $x \\to 0^+$, $\\ln x$ goes to $-\\infty$.',
        hint3: 'Exponentials grow faster than polynomials.',
        explanation: '(1) $4/(-1) = -4$. (2) $\\ln x \\to -\\infty$. (3) $e^x$ dominates. (4) IVT.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 1}\\frac{\\sqrt{x}-1}{x-1}$',
            options: ['$1/2$', '$1$', '$0$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Rationalize: $\\frac{1}{\\sqrt{x}+1}$. At $x=1$: $\\frac{1}{2}$.'
          },
          {
            question: 'All of calculus is built on:',
            options: ['Algebra', 'Limits', 'Geometry', 'Trigonometry'],
            correctAnswer: 1,
            explanation: 'Derivatives, integrals, continuity — all defined using limits. Limits ARE the foundation of calculus.'
          }
        ]
      }
    }
  ]
};
