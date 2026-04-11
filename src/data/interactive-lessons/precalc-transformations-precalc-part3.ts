export const precalcTransformationsPart3Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📏 Stretches & Compressions

**Part 3 of 7**

### Vertical Stretch/Compression

$$y = a \\cdot f(x)$$

| $|a| > 1$ | Vertical **stretch** by factor $|a|$ |
|:----------|:------------------------------------|
| $0 < |a| < 1$ | Vertical **compression** by factor $|a|$ |
| $a < 0$ | Also reflects over $x$-axis |

### Horizontal Stretch/Compression

$$y = f(bx)$$

| $|b| > 1$ | Horizontal **compression** by factor $\\frac{1}{|b|}$ |
|:----------|:-----------------------------------------------------|
| $0 < |b| < 1$ | Horizontal **stretch** by factor $\\frac{1}{|b|}$ |

> ⚠️ Horizontal scaling is **reciprocal**: $f(2x)$ compresses by half, not stretches by 2!
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Examples

### Example 1: $y = 3\\sin x$

Vertical stretch by 3. Amplitude changes from 1 to 3.

Points: $(\\pi/2, 1) \\to (\\pi/2, 3)$.

### Example 2: $y = \\sin(2x)$

Horizontal compression by $1/2$. Period changes from $2\\pi$ to $\\pi$.

Points: $(\\pi/2, 1) \\to (\\pi/4, 1)$.

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
## 🔄 Effect on Period & Amplitude

For trig functions $y = A\\sin(Bx)$:

- **Amplitude** $= |A|$ (vertical stretch)
- **Period** $= \\frac{2\\pi}{|B|}$ (horizontal compression)

### Example: $y = 4\\cos(3x)$

Amplitude: $4$, Period: $\\frac{2\\pi}{3}$

### For General Functions

| Original Feature | After $y = af(bx)$ |
|:-----------------|:-------------------|
| Point $(x, y)$ | $(x/b, ay)$ |
| Width/period $T$ | $T/|b|$ |
| Height $h$ | $|a| \\cdot h$ |
| $x$-intercepts | Divide by $b$ |
| $y$-intercept | Multiply by $a$ |
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
            question: 'The amplitude of $y = -5\\sin x$ is:',
            options: ['$5$', '$-5$', '$1/5$', '$10$'],
            correctAnswer: 0,
            explanation: 'Amplitude $= |A| = |-5| = 5$. (The negative reflects but does not affect amplitude.)'
          },
          {
            question: 'The period of $y = \\cos(\\pi x)$ is:',
            options: ['$\\pi$', '$2\\pi$', '$2$', '$1/\\pi$'],
            correctAnswer: 2,
            explanation: 'Period $= 2\\pi/|\\pi| = 2$.'
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

**3)** The period of $y = \\sin(4x)$: $\\frac{2\\pi}{?}$. Enter the number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '4'],
        hint1: 'Vertical stretch by 2: $y$-values double.',
        hint2: 'Horizontal compress by $1/4$: $x$-values divided by $4$.',
        hint3: 'Period = $2\\pi / |B| = 2\\pi / 4$.',
        explanation: '1) $10$. 2) $2$. 3) $4$ (period $= \\pi/2$).'
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
