export const precalcRationalPart4Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ✂️ Simplifying Rational Expressions

**Part 4 of 7 — Algebraic Simplification, Addition, & Division**

Before you can graph or analyze a rational function, you often need to simplify it first. This part covers the algebraic mechanics: factoring and canceling, adding/subtracting with common denominators, multiplying/dividing rational expressions, and rewriting via polynomial long division.
      `
    },
    {
      id: 'p4-cancel',
      type: 'text' as const,
      content: `
## 📖 Factoring & Canceling

The fundamental simplification technique:

$$\\boxed{\\frac{A \\cdot C}{B \\cdot C} = \\frac{A}{B}, \\quad C \\neq 0}$$

### Step-by-Step

| Step | Action | Example: $\\frac{x^2 + 5x + 6}{x^2 + 3x + 2}$ |
|:----:|--------|------------------------------------------------|
| 1 | Factor numerator | $(x+2)(x+3)$ |
| 2 | Factor denominator | $(x+1)(x+2)$ |
| 3 | Cancel common factors | $\\frac{\\cancel{(x+2)}(x+3)}{(x+1)\\cancel{(x+2)}}$ |
| 4 | Write simplified form + restriction | $\\frac{x+3}{x+1}, \\quad x \\neq -2$ |

> ⚠️ **Never cancel terms — only factors!** $\\frac{x + 3}{x + 5} \\neq \\frac{3}{5}$. You can only cancel something that multiplies the entire numerator and entire denominator.
      `
    },
    {
      id: 'p4-operations',
      type: 'text' as const,
      content: `
## 🔧 Operations with Rational Expressions

### Adding & Subtracting (LCD Method)

$$\\frac{A}{B} + \\frac{C}{D} = \\frac{AD + BC}{BD}$$

**Example:** $\\frac{2}{x-1} + \\frac{3}{x+4}$

LCD $= (x-1)(x+4)$

$$= \\frac{2(x+4) + 3(x-1)}{(x-1)(x+4)} = \\frac{2x + 8 + 3x - 3}{(x-1)(x+4)} = \\frac{5x + 5}{(x-1)(x+4)} = \\frac{5(x+1)}{(x-1)(x+4)}$$

---

### Multiplying & Dividing

| Operation | Rule | Example |
|:----------|:-----|:--------|
| Multiply | $\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}$ | $\\frac{x}{x+1} \\cdot \\frac{x+1}{x^2} = \\frac{1}{x}$ |
| Divide | $\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$ | $\\frac{x}{3} \\div \\frac{x}{6} = \\frac{x}{3} \\cdot \\frac{6}{x} = 2$ |

> 💡 **Always factor before multiplying** — it makes cancellation much easier.
      `
    },
    {
      id: 'p4-long-division',
      type: 'text' as const,
      content: `
## ✏️ Polynomial Long Division for Rationals

When $\\deg(p) \\geq \\deg(q)$, you can rewrite $\\frac{p(x)}{q(x)}$ as:

$$\\frac{p(x)}{q(x)} = \\text{quotient} + \\frac{\\text{remainder}}{q(x)}$$

This is essential for finding **slant asymptotes** and understanding **end behavior**.

### Worked Example

> **Rewrite $\\frac{2x^2 + 3x - 5}{x + 2}$ in quotient-remainder form.**

Dividing:
- $2x^2 \\div x = 2x$. Multiply: $2x(x+2) = 2x^2 + 4x$. Subtract: $(2x^2 + 3x) - (2x^2 + 4x) = -x$.
- Bring down: $-x - 5$. Divide: $-x \\div x = -1$. Multiply: $-1(x+2) = -x - 2$. Subtract: $(-x-5) - (-x-2) = -3$.

$$\\boxed{\\frac{2x^2 + 3x - 5}{x + 2} = 2x - 1 + \\frac{-3}{x + 2}}$$

As $x \\to \\pm\\infty$, $\\frac{-3}{x+2} \\to 0$, so the **slant asymptote** is $y = 2x - 1$.
      `
    },
    {
      id: 'p4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Simplification Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 - 16}{x^2 - x - 12}$',
            options: [
              '$\\frac{x + 4}{x + 3}$',
              '$\\frac{x - 4}{x - 3}$',
              '$\\frac{x + 4}{x - 3}$  (hole at $x = 4$)',
              '$\\frac{x + 4}{x + 3}$  (hole at $x = 4$)'
            ],
            correctAnswer: 0,
            explanation: 'Numerator: $(x-4)(x+4)$. Denominator: $(x-4)(x+3)$. Cancel $(x-4)$: $\\frac{x+4}{x+3}$ for $x \\neq 4$.'
          },
          {
            question: 'What is $\\frac{1}{x} + \\frac{1}{x+1}$?',
            options: [
              '$\\frac{2}{2x + 1}$',
              '$\\frac{2x + 1}{x(x+1)}$',
              '$\\frac{2x + 1}{x^2 + 1}$',
              '$\\frac{1}{x^2 + x}$'
            ],
            correctAnswer: 1,
            explanation: 'LCD $= x(x+1)$. $\\frac{x+1}{x(x+1)} + \\frac{x}{x(x+1)} = \\frac{2x+1}{x(x+1)}$.'
          },
          {
            question: 'When you rewrite $\\frac{x^2 + 1}{x - 3}$ via long division, the quotient is $x + 3$ with remainder $10$. The slant asymptote is:',
            options: [
              '$y = 10$',
              '$y = x + 3$',
              '$y = x - 3$',
              '$y = x + 3 + \\frac{10}{x-3}$'
            ],
            correctAnswer: 1,
            explanation: 'The slant asymptote is the quotient portion: $y = x + 3$. The remainder term $\\frac{10}{x-3} \\to 0$ as $x \\to \\pm\\infty$.'
          }
        ]
      }
    },
    {
      id: 'p4-input-drill',
      type: 'input-boxes' as const,
      content: `
**Simplification Drill** 🧮

**1)** Simplify $\\frac{x^2 - 25}{x + 5}$ and evaluate at $x = 3$. (e.g., $\\frac{x^2-4}{x+2} = x - 2$, so at $x = 3$: $3 - 2 = 1$)

**2)** What is $\\frac{2}{x} + \\frac{3}{x}$? Evaluate at $x = 5$. (e.g., $\\frac{1}{x} + \\frac{4}{x} = \\frac{5}{x}$, so at $x = 5$: $\\frac{5}{5} = 1$)

**3)** Divide: $\\frac{x^2 + 2x + 1}{x + 1}$. Evaluate at $x = 4$. (e.g., $\\frac{x^2+6x+9}{x+3} = x + 3$, so at $x = 4$: $7$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '1', '5'],
        hint1: '$x^2 - 25 = (x-5)(x+5)$. Cancel $(x+5)$. Then evaluate $x - 5$ at $x = 3$.',
        hint2: 'Same denominator: $\\frac{2+3}{x} = \\frac{5}{x}$. Then $\\frac{5}{5}$.',
        hint3: '$x^2 + 2x + 1 = (x+1)^2$. Cancel one $(x+1)$. Then $4 + 1 = 5$.',
        explanation: '1) $(x-5)(x+5)/(x+5) = x - 5$. At $x=3$: $-2$. 2) $\\frac{5}{x}$. At $x=5$: $1$. 3) $(x+1)^2/(x+1) = x+1$. At $x=4$: $5$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Simplification Rules — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You can cancel between numerator and denominator only when the expression is a',
            options: ['term (added/subtracted)', 'factor (multiplied)', 'coefficient', 'constant']
          },
          {
            label: 'To add $\\frac{A}{B} + \\frac{C}{D}$, you first need the',
            options: ['GCF of A and C', 'LCD (least common denominator)', 'sum $B + D$', 'product of numerators']
          },
          {
            label: 'To divide by a fraction, you multiply by its',
            options: ['numerator', 'denominator', 'reciprocal', 'square']
          },
          {
            label: 'Polynomial long division rewrites $\\frac{p(x)}{q(x)}$ as $Q(x) +$',
            options: ['$\\frac{q(x)}{r(x)}$', '$\\frac{r(x)}{q(x)}$', '$r(x) \\cdot q(x)$', '$p(x) - Q(x)$']
          }
        ],
        correctAnswers: ['factor (multiplied)', 'LCD (least common denominator)', 'reciprocal', '$\\frac{r(x)}{q(x)}$'],
        hint1: 'You can only cancel things connected by multiplication.',
        hint2: 'You need a common denominator before adding fractions.',
        hint3: '"Invert and multiply" — dividing by a fraction means multiplying by its flip.',
        explanation: 'Cancel factors only (not terms). Use LCD for addition. Divide by multiplying by the reciprocal. Long division gives quotient + remainder/divisor.'
      }
    },
    {
      id: 'p4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Simplification** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 - 4x + 3}{x^2 - 1} \\cdot \\frac{x + 1}{x - 3}$',
            options: [
              '$1$',
              '$\\frac{x-1}{x+1}$',
              '$\\frac{1}{x+1}$',
              '$\\frac{x-3}{x+1}$'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x-1)(x-3)}{(x-1)(x+1)} \\cdot \\frac{x+1}{x-3}$. Cancel $(x-1)$, $(x+1)$, and $(x-3)$: result is $1$ (with restrictions $x \\neq 1, -1, 3$).'
          },
          {
            question: 'A student simplifies $\\frac{x + 3}{x + 5}$ by canceling the $x$\'s to get $\\frac{3}{5}$. What is wrong?',
            options: [
              'Nothing — this is correct',
              'The $x$ is a term (added), not a factor (multiplied) — you cannot cancel terms',
              'They should have canceled the $3$ and $5$ instead',
              'The answer should be $\\frac{x}{x} = 1$'
            ],
            correctAnswer: 1,
            explanation: 'In $\\frac{x+3}{x+5}$, the $x$ is added to $3$ and $5$ — it is a term, not a factor. You can only cancel factors that multiply the entire numerator and denominator. This is one of the most common algebra errors.'
          }
        ]
      }
    }
  ]
};
