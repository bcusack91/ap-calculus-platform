export const precalcRatesOfChangePart2Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔬 The Difference Quotient

**Part 2 of 7**

### From AROC to Instant Rate

The **difference quotient** uses a variable step size $h$:

$$\\frac{f(x+h) - f(x)}{h}$$

This represents the AROC over the interval $[x, x+h]$.

As $h \\to 0$, the secant line approaches the **tangent line** — giving the **instantaneous rate of change**.

### The Big Idea

$$\\text{IROC} = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}$$

This limit IS the derivative $f'(x)$. But in precalculus, we focus on **computing the difference quotient** and understanding what happens as $h$ shrinks.
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: $f(x) = x^2$

$$\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^2 - x^2}{h}$$

Expand: $(x+h)^2 = x^2 + 2xh + h^2$

$$= \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h$$

As $h \\to 0$: difference quotient $\\to 2x$. So the slope at any point is $2x$.

### Example 2: $f(x) = 3x + 5$

$$\\frac{(3(x+h)+5) - (3x+5)}{h} = \\frac{3h}{h} = 3$$

Constant! The "derivative" of a linear function is its slope.

### Example 3: $f(x) = 1/x$

$$\\frac{\\frac{1}{x+h} - \\frac{1}{x}}{h} = \\frac{\\frac{x - (x+h)}{x(x+h)}}{h} = \\frac{-h}{hx(x+h)} = \\frac{-1}{x(x+h)}$$

As $h \\to 0$: $\\frac{-1}{x^2}$. The slope at $x$ is $-1/x^2$.
      `
    },
    {
      id: 'p2-simplify',
      type: 'text' as const,
      content: `
## Simplification Strategies

### Step-by-Step Process

1. **Write** $f(x+h)$ — replace every $x$ with $(x+h)$
2. **Subtract** $f(x)$
3. **Expand** all terms
4. **Cancel** — the $f(x)$ terms must vanish
5. **Factor out** $h$ from the numerator
6. **Cancel** the $h$ in numerator and denominator
7. **Let $h \\to 0$** (for the limit / IROC)

### Common Expansion Patterns

- $(x+h)^2 = x^2 + 2xh + h^2$
- $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$
- $\\sqrt{x+h}$: rationalize with conjugate

### Key Insight

After simplifying, $h$ **must** cancel from the denominator. If it doesn't, you made an algebra error.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Difference Quotient Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Difference quotient of $f(x) = x^2$ simplifies to:',
            options: ['$2x$', '$2x + h$', '$x^2 + h$', '$2xh$'],
            correctAnswer: 1,
            explanation: '$\\frac{(x+h)^2-x^2}{h} = \\frac{2xh+h^2}{h} = 2x+h$.'
          },
          {
            question: 'As $h \\to 0$ in the difference quotient of $x^2$, we get:',
            options: ['$0$', '$2x$', '$x^2$', '$2$'],
            correctAnswer: 1,
            explanation: '$2x + h \\to 2x + 0 = 2x$.'
          },
          {
            question: 'Difference quotient of $f(x) = 5x - 1$:',
            options: ['$5$', '$5 + h$', '$5x$', '$5h$'],
            correctAnswer: 0,
            explanation: '$\\frac{5(x+h)-1-(5x-1)}{h} = \\frac{5h}{h} = 5$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Simplify each difference quotient:**

**1)** $f(x) = x^2 + 3x$. Simplified DQ = $2x + h + ?$ (fill in the number)

**2)** $f(x) = 4x^2$. Simplified DQ = $?x + 4h$ (fill the coefficient)

**3)** Limit as $h \\to 0$ of DQ for $f(x) = x^3$ at $x = 2$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '8', '12'],
        hint1: 'DQ = $\\frac{(x+h)^2+3(x+h)-x^2-3x}{h}$. Expand and simplify.',
        hint2: 'DQ = $\\frac{4(x+h)^2 - 4x^2}{h} = \\frac{4(2xh+h^2)}{h} = 8x + 4h$.',
        hint3: 'DQ of $x^3$ simplifies to $3x^2 + 3xh + h^2$. At $x=2, h=0$: $3(4) = 12$.',
        explanation: '(1) DQ = $2x+h+3$. (2) $8x+4h$. (3) $3(2)^2 = 12$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**DQ Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first step in computing a DQ is:',
            options: ['Take the limit', 'Find $f(x+h)$', 'Factor', 'Set $h=0$'],
            correctAnswer: 1
          },
          {
            label: 'If $h$ doesn\'t cancel, you should:',
            options: ['Set $h=0$', 'Check algebra for errors', 'Conclude limit DNE', 'Skip the problem'],
            correctAnswer: 1
          },
          {
            label: 'DQ of a constant function $f(x) = 7$:',
            options: ['$7$', '$1$', '$0$', '$7/h$'],
            correctAnswer: 2
          },
          {
            label: 'The limit of the DQ as $h \\to 0$ gives:',
            options: ['Average velocity', 'Instantaneous rate of change', 'Total change', 'Acceleration'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Find $f(x+h)$', 'Check algebra for errors', '$0$', 'Instantaneous rate of change'],
        hint1: 'Replace $x$ with $x+h$ in the function.',
        hint2: 'The $h$ MUST cancel — algebra error otherwise.',
        hint3: '$\\frac{7-7}{h} = 0$.',
        explanation: 'Start with $f(x+h)$. $h$ must cancel. Constant DQ = 0. $h \\to 0$ gives IROC (the derivative).'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Difference quotient of $f(x) = x^2 - 4x$:',
            options: ['$2x + h - 4$', '$2x - 4$', '$2x + h$', '$x^2 + h - 4$'],
            correctAnswer: 0,
            explanation: 'Expand: $(x+h)^2-4(x+h)-x^2+4x = 2xh+h^2-4h$. Divide by $h$: $2x+h-4$.'
          },
          {
            question: 'The difference quotient is the slope of a:',
            options: ['Tangent line', 'Secant line', 'Horizontal line', 'Vertical line'],
            correctAnswer: 1,
            explanation: 'DQ = slope of secant through $(x,f(x))$ and $(x+h,f(x+h))$. The LIMIT gives the tangent.'
          }
        ]
      }
    }
  ]
};
