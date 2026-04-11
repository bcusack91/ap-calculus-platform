export const precalcTransformationsPart2Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔄 Reflections

**Part 2 of 7**

### Reflection Over the $x$-axis

$$y = -f(x)$$

Negate the **output**: flip the graph upside down.

### Reflection Over the $y$-axis

$$y = f(-x)$$

Negate the **input**: flip the graph left-right.

### Quick Reference

| Transformation | Effect | Example |
|:---------------|:-------|:--------|
| $-f(x)$ | Reflect over $x$-axis | $-x^2$: opens down |
| $f(-x)$ | Reflect over $y$-axis | $(-x)^3 = -x^3$ |
| $-f(-x)$ | Reflect over both (= rotate $180°$) | Origin symmetry |
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## 📝 Examples

### Example 1: $y = -\\sqrt{x}$

Start with $y = \\sqrt{x}$ (half-parabola in Q1).

$-f(x)$: reflect over $x$-axis → now in Q4.

Points: $(0,0) \\to (0,0)$, $(4,2) \\to (4,-2)$, $(9,3) \\to (9,-3)$.

### Example 2: $y = \\sqrt{-x}$

$f(-x)$: reflect over $y$-axis → now in Q2.

Points: $(0,0)\\to(0,0)$, $(4,2)\\to(-4,2)$.

### Even and Odd Functions

- **Even**: $f(-x) = f(x)$ → symmetric about $y$-axis (e.g., $x^2, \\cos x$)
- **Odd**: $f(-x) = -f(x)$ → symmetric about origin (e.g., $x^3, \\sin x$)

> 💡 Reflecting an even function over the $y$-axis gives the same graph!
      `
    },
    {
      id: 'p2-combined',
      type: 'text' as const,
      content: `
## 🔀 Combining Reflections with Shifts

Order matters! Apply transformations in the correct sequence.

### Example: $y = -|x-2|+3$

1. Start with $y = |x|$
2. Shift right 2: $y = |x-2|$
3. Reflect over $x$-axis: $y = -|x-2|$
4. Shift up 3: $y = -|x-2|+3$

Vertex: $(2, 3)$, opening downward.

### Example: $y = (-x)^3 + 1 = -x^3+1$

1. Start with $y = x^3$
2. Reflect over $y$-axis: $y = (-x)^3 = -x^3$
3. Shift up 1: $y = -x^3+1$

> 💡 For odd functions, reflecting over the $y$-axis is the same as reflecting over the $x$-axis!
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Reflections Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which reflects $y=x^2$ over the $x$-axis?',
            options: ['$y = x^2+1$', '$y = (-x)^2$', '$y = -x^2$', '$y = x^{-2}$'],
            correctAnswer: 2,
            explanation: '$-f(x) = -x^2$ reflects over the $x$-axis.'
          },
          {
            question: '$f(x)=x^3$ is:',
            options: ['Even', 'Odd', 'Neither', 'Both'],
            correctAnswer: 1,
            explanation: '$f(-x) = (-x)^3 = -x^3 = -f(x)$ → odd.'
          },
          {
            question: 'The point $(3, -5)$ on $f$ becomes what point on $-f(-x)$?',
            options: ['$(-3, 5)$', '$(3, 5)$', '$(-3, -5)$', '$(5, -3)$'],
            correctAnswer: 0,
            explanation: '$-f(-x)$: negate both coordinates: $(3,-5) \\to (-3, 5)$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Reflections Practice** 🧮

The point $(4, 7)$ is on $y = f(x)$.

**1)** On $y = -f(x)$, this becomes $(4,$ ?$)$

**2)** On $y = f(-x)$, this becomes $($?$, 7)$

**3)** Is $f(x) = x^4 + x^2$ even, odd, or neither? (Type "even", "odd", or "neither")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-7', '-4', 'even'],
        hint1: '$-f(x)$ negates the $y$-value.',
        hint2: '$f(-x)$ negates the $x$-value.',
        hint3: '$f(-x) = (-x)^4+(-x)^2 = x^4+x^2 = f(x)$.',
        explanation: '1) $-7$. 2) $-4$. 3) Even (all even powers).'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Reflection Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$-f(x)$ reflects over:',
            options: ['$x$-axis', '$y$-axis', 'Origin', 'Line $y=x$'],
            correctAnswer: 0
          },
          {
            label: '$f(-x)$ reflects over:',
            options: ['$x$-axis', '$y$-axis', 'Origin', 'Line $y=x$'],
            correctAnswer: 1
          },
          {
            label: 'If $f$ is even, its graph is symmetric about:',
            options: ['$x$-axis', '$y$-axis', 'Origin', 'No symmetry'],
            correctAnswer: 1
          },
          {
            label: 'If $f$ is odd, its graph is symmetric about:',
            options: ['$x$-axis', '$y$-axis', 'Origin', 'No symmetry'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$x$-axis', '$y$-axis', '$y$-axis', 'Origin'],
        hint1: 'Negating outputs flips vertically.',
        hint2: 'Negating inputs flips horizontally.',
        hint3: 'Even: $f(-x) = f(x)$ → $y$-axis symmetry.',
        explanation: '$-f(x)$: $x$-axis reflection. $f(-x)$: $y$-axis reflection. Even: $y$-axis symmetry. Odd: origin symmetry.'
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
            question: '$f(x)=x^3-x$ is:',
            options: ['Even', 'Odd', 'Neither'],
            correctAnswer: 1,
            explanation: '$f(-x) = -x^3+x = -(x^3-x) = -f(x)$ → odd.'
          },
          {
            question: 'Reflecting $y = 2^x$ over the $y$-axis gives:',
            options: ['$y = -2^x$', '$y = 2^{-x}$', '$y = -2^{-x}$', '$y = \\log_2 x$'],
            correctAnswer: 1,
            explanation: '$f(-x) = 2^{-x} = (1/2)^x$.'
          }
        ]
      }
    }
  ]
};
