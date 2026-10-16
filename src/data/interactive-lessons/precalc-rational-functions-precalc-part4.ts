export const precalcRationalPart4Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ✂️ Simplifying Rational Expressions

**Part 4 of 7 — Simplifying & Rewriting Rational Functions**

Before you can graph or analyze a rational function, you often need to rewrite it first. This part covers factoring and canceling (and what canceling does to the domain), choosing the equivalent form that shows the feature you need, and rewriting via polynomial long division.
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
      id: 'p4-forms',
      type: 'text' as const,
      content: `
## 🔧 Choosing an Equivalent Form

The same rational function can be written several ways, and each form shows different features of the graph.

| Form | Example | What it reveals |
|:-----|:--------|:----------------|
| Factored | $\\frac{(x-1)(x+3)}{(x-1)(x-2)}$ | Zeros, vertical asymptotes, holes |
| Simplified + restriction | $\\frac{x+3}{x-2}, \\; x \\neq 1$ | The hole's height: at $x = 1$, $\\frac{1+3}{1-2} = -4$, so the hole is at $(1, -4)$ |
| Quotient + remainder | $1 + \\frac{5}{x-2}$ | End behavior: $\\frac{5}{x-2} \\to 0$, so the horizontal asymptote is $y = 1$ |

**Check the last form:** $1 + \\frac{5}{x-2} = \\frac{(x-2) + 5}{x-2} = \\frac{x+3}{x-2}$ ✔

> 💡 **Canceling changes the formula, not the function's domain.** The simplified formula $\\frac{x+3}{x-2}$ is defined at $x = 1$, but the original function is not, which is exactly why the graph has a hole there.
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
              '$\\frac{x + 4}{x + 3}$, hole at $x = 4$',
              '$\\frac{x - 4}{x - 3}$, hole at $x = -4$',
              '$\\frac{x + 4}{x - 3}$, hole at $x = 4$',
              '$\\frac{x + 4}{x + 3}$, hole at $x = -3$'
            ],
            correctAnswer: 0,
            explanation: 'Numerator: $(x-4)(x+4)$. Denominator: $(x-4)(x+3)$. Cancel $(x-4)$: $\\frac{x+4}{x+3}$ for $x \\neq 4$, so the hole is at $x = 4$. The factor $(x + 3)$ does not cancel, so $x = -3$ is a vertical asymptote, not a hole.'
          },
          {
            question: 'Which expression is equal to $\\frac{x+4}{x-1}$ for $x \\neq 1$?',
            options: [
              '$1 + \\frac{3}{x-1}$',
              '$1 + \\frac{5}{x-1}$',
              '$x + \\frac{5}{x-1}$',
              '$1 - \\frac{5}{x-1}$'
            ],
            correctAnswer: 1,
            explanation: 'Write the numerator as $(x - 1) + 5$, so $\\frac{x+4}{x-1} = 1 + \\frac{5}{x-1}$. Check: $\\frac{(x-1)+5}{x-1} = \\frac{x+4}{x-1}$. Using $3$ subtracts $1$ instead of adding it, a quotient of $x$ forgets that the degrees are equal, and $-5$ flips the remainder\'s sign.'
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

**2)** Rewrite $\\frac{x+3}{x-2}$ as $1 + \\frac{k}{x-2}$. What is $k$? (e.g., $\\frac{x+1}{x-3} = 1 + \\frac{4}{x-3}$, so $k = 4$)

**3)** Divide: $\\frac{x^2 + 2x + 1}{x + 1}$. Evaluate at $x = 4$. (e.g., $\\frac{x^2+6x+9}{x+3} = x + 3$, so at $x = 4$: $7$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '5', '5'],
        hint1: '$x^2 - 25 = (x-5)(x+5)$. Cancel $(x+5)$. Then evaluate $x - 5$ at $x = 3$.',
        hint2: 'Write the numerator as $(x - 2) + k$. What must $k$ be so that $(x - 2) + k = x + 3$?',
        hint3: '$x^2 + 2x + 1 = (x+1)^2$. Cancel one $(x+1)$. Then $4 + 1 = 5$.',
        explanation: '1) $(x-5)(x+5)/(x+5) = x - 5$. At $x=3$: $-2$. 2) $x + 3 = (x - 2) + 5$, so $k = 5$. 3) $(x+1)^2/(x+1) = x+1$. At $x=4$: $5$.'
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
            label: 'After canceling a common factor $(x - c)$, the original function has a',
            options: ['vertical asymptote at $x = c$', 'hole at $x = c$', 'zero at $x = c$', 'horizontal asymptote']
          },
          {
            label: 'The quotient-plus-remainder form $Q(x) + \\frac{r(x)}{q(x)}$ shows the graph\'s',
            options: ['holes', 'end behavior', '$y$-intercept', 'zeros']
          },
          {
            label: 'Polynomial long division rewrites $\\frac{p(x)}{q(x)}$ as $Q(x) +$',
            options: ['$\\frac{q(x)}{r(x)}$', '$\\frac{r(x)}{q(x)}$', '$r(x) \\cdot q(x)$', '$p(x) - Q(x)$']
          }
        ],
        correctAnswers: ['factor (multiplied)', 'hole at $x = c$', 'end behavior', '$\\frac{r(x)}{q(x)}$'],
        hint1: 'You can only cancel things connected by multiplication.',
        hint2: 'The canceled value is still excluded from the domain of the original function.',
        hint3: 'As $x \\to \\pm\\infty$ the remainder term $\\frac{r(x)}{q(x)}$ shrinks to $0$.',
        explanation: 'Cancel factors only (not terms). A canceled factor leaves a hole. The quotient $Q(x)$ describes the end behavior because the remainder term goes to $0$. Long division gives quotient + remainder/divisor.'
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
            question: 'Simplify $f(x) = \\frac{x^2 - 4x + 3}{x^2 - 1}$. Which describes the graph at $x = 1$?',
            options: [
              'A hole at $(1, -1)$',
              'A hole at $(1, 0)$',
              'A zero at $x = 1$',
              'An asymptote at $x = 1$'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x-1)(x-3)}{(x-1)(x+1)} = \\frac{x-3}{x+1}$ for $x \\neq 1$. The canceled factor gives a hole, and its height is $\\frac{1-3}{1+1} = -1$. The point $(1, 0)$ uses the canceled numerator factor, and $x = 1$ is neither a zero nor an asymptote because the factor cancels.'
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
