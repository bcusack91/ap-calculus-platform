export const precalcTransformationsPart3Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📏 Stretches & Compressions

**Part 3 of 7 — Stretches & Compressions**

The CED calls these **vertical and horizontal dilations**; "stretch" and "compression" describe which way the dilation goes.

### Vertical Dilation (Stretch/Compression)

$$y = a \\cdot f(x)$$

| $\\lvert a \\rvert > 1$ | Vertical **stretch** by factor $\\lvert a \\rvert$ |
|:----------|:------------------------------------|
| $0 < \\lvert a \\rvert < 1$ | Vertical **compression** by factor $\\lvert a \\rvert$ |
| $a < 0$ | Also reflects over $x$-axis |

### Horizontal Dilation (Stretch/Compression)

$$y = f(bx)$$

| $\\lvert b \\rvert > 1$ | Horizontal **compression** by factor $\\frac{1}{\\lvert b \\rvert}$ |
|:----------|:-----------------------------------------------------|
| $0 < \\lvert b \\rvert < 1$ | Horizontal **stretch** by factor $\\frac{1}{\\lvert b \\rvert}$ |

> ⚠️ Horizontal scaling is **reciprocal**: $f(2x)$ compresses by half, not stretches by 2!
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Examples

### Example 1: $y = 3\\sqrt{x}$

Vertical dilation by $3$: every $y$-coordinate is tripled.

Points: $(4, 2) \\to (4, 6)$, $(9, 3) \\to (9, 9)$.

### Example 2: $y = \\sqrt{2x}$

Horizontal dilation by $\\tfrac{1}{2}$: every $x$-coordinate is halved.

Points: $(4, 2) \\to (2, 2)$, $(16, 4) \\to (8, 4)$.

### Example 3: $y = \\frac{1}{2}x^2$

Vertical compression by $1/2$. The parabola is "wider."

Points: $(2, 4) \\to (2, 2)$, $(4, 16) \\to (4, 8)$.

### Key Insight

Vertical changes multiply $y$-values.

Horizontal changes divide $x$-values by $b$ (or multiply by $1/b$).
      `
    },
    {
      id: 'p3-period',
      type: 'text' as const,
      content: `
## 🔄 Dilations and Key Features

For $y = a\\,f(bx)$: every $y$-coordinate is multiplied by $a$, every $x$-coordinate by $\\frac{1}{b}$.

**Example:** $f$ has zeros at $x = -4$ and $x = 8$. Then $f(2x)$ has zeros at $-2$ and $4$, while $3f(x)$ keeps the zeros at $-4$ and $8$ and triples the $y$-intercept.

### For General Functions

| Original Feature | After $y = af(bx)$ |
|:-----------------|:-------------------|
| Point $(x, y)$ | $(x/b, ay)$ |
| Width of a feature $w$ | $w/\\lvert b \\rvert$ |
| Height $h$ | $\\lvert a \\rvert \\cdot h$ |
| $x$-intercepts | Divide by $b$ |
| $y$-intercept | Multiply by $a$ |
| Domain $[c, d]$ | $[c/b, d/b]$ (for $b > 0$) |
| Range $[m, M]$ | $[am, aM]$ (for $a > 0$) |
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Stretches Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$y = f(3x)$ does what to the graph?',
            options: ['Stretches horizontally by 3', 'Compresses horizontally by 1/3', 'Stretches vertically by 3', 'Compresses vertically by 1/3'],
            correctAnswer: 1,
            explanation: '$f(bx)$ with $b=3$: horizontal compression by $1/3$.'
          },
          {
            question: 'The graph of $y = -5f(x)$ compared with $y = f(x)$ is:',
            options: ['reflected over the $x$-axis and stretched vertically by 5', 'reflected over the $y$-axis and stretched vertically by 5', 'shifted down 5', 'compressed vertically by $1/5$'],
            correctAnswer: 0,
            explanation: 'Multiplying the output by $-5$ multiplies every $y$-coordinate by $5$ (a vertical dilation by $5$) and flips the sign, a reflection over the $x$-axis. Nothing inside the function changed, so there is no horizontal effect.'
          },
          {
            question: 'If $f$ has $x$-intercepts at $x = 2$ and $x = 6$, the $x$-intercepts of $y = f(\\tfrac{1}{2}x)$ are:',
            options: ['$x = 4$ and $x = 12$', '$x = 1$ and $x = 3$', '$x = 2$ and $x = 6$', '$x = 4$ and $x = 8$'],
            correctAnswer: 0,
            explanation: 'With $b = \\tfrac{1}{2}$, every $x$-coordinate is divided by $\\tfrac{1}{2}$, that is, doubled: a horizontal dilation by $2$. Halving the intercepts is the reciprocal error, and the $y$-coordinates (zero here) are untouched.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Stretch Calculations** 🧮

**1)** $y = 2f(x)$: the point $(3, 5)$ becomes $(3, $ ?$)$

**2)** $y = f(4x)$: the point $(8, 5)$ becomes $($?$, 5)$

**3)** $y = f(4x)$: the $x$-intercept $(8, 0)$ of $f$ becomes $(?, 0)$. Enter the $x$-coordinate.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '2'],
        hint1: 'Vertical stretch by 2: $y$-values double.',
        hint2: 'Horizontal compress by $1/4$: $x$-values divided by $4$.',
        hint3: 'Divide the $x$-coordinate by 4.',
        explanation: '1) $(3, 10)$. 2) $(2, 5)$. 3) $8 \\div 4 = 2$, so $(2, 0)$: horizontal dilations move the $x$-intercepts.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Stretch Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = \\frac{1}{3}f(x)$ is a vertical:',
            options: ['Stretch by 3', 'Compression by 1/3', 'Shift down 3'],
            correctAnswer: 1
          },
          {
            label: '$y = f(x/2)$ is a horizontal:',
            options: ['Compression by 1/2', 'Stretch by 2', 'Shift right 2'],
            correctAnswer: 1
          },
          {
            label: 'Vertical stretches affect:',
            options: ['$x$-intercepts', '$y$-intercepts', 'Neither'],
            correctAnswer: 1
          },
          {
            label: 'Horizontal compressions affect:',
            options: ['$x$-intercepts', '$y$-intercepts', 'Neither'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Compression by 1/3', 'Stretch by 2', '$y$-intercepts', '$x$-intercepts'],
        hint1: '$|a| = 1/3 < 1$: compression.',
        hint2: '$b = 1/2$: reciprocal is $2$: stretch.',
        hint3: 'Multiplying $y$ changes where the graph crosses the $y$-axis.',
        explanation: 'Multiply $y$ by $1/3$: compression. $f(x/2)$: stretch by 2. Vertical changes affect $y$-intercept. Horizontal changes affect $x$-intercepts.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$y = 3f(2x)$ transforms $(4, 5)$ to:',
            options: ['$(2, 15)$', '$(8, 15)$', '$(2, 5/3)$', '$(12, 10)$'],
            correctAnswer: 0,
            explanation: 'Horizontal: $4/2 = 2$. Vertical: $5 \\times 3 = 15$. Point: $(2, 15)$.'
          },
          {
            question: 'Which makes the graph wider?',
            options: ['$y = f(2x)$', '$y = f(x/2)$', '$y = 2f(x)$', '$y = f(x)+2$'],
            correctAnswer: 1,
            explanation: '$f(x/2)$: horizontal stretch by 2 → wider graph.'
          }
        ]
      }
    }
  ]
};
