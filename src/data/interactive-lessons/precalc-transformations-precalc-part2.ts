export const precalcTransformationsPart2Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔄 Reflections

**Part 2 of 7 — Reflections**

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
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5"><line x1="10" y1="110" x2="312" y2="110"/><line x1="160" y1="210" x2="160" y2="10"/></g><text x="306" y="126" font-size="12" fill="currentColor">x</text><text x="166" y="18" font-size="12" fill="currentColor">y</text><text x="216" y="124" font-size="11" fill="currentColor" text-anchor="middle">4</text><text x="104" y="124" font-size="11" fill="currentColor" text-anchor="middle">-4</text><text x="152" y="86" font-size="11" fill="currentColor" text-anchor="end">2</text><g class="fig-accent"><path d="M 160.0 110.0 L 167.0 100.1 L 174.0 96.0 L 181.0 92.9 L 188.0 90.2 L 195.0 87.9 L 202.0 85.8 L 209.0 83.8 L 216.0 82.0 L 223.0 80.3 L 230.0 78.7 L 237.0 77.2 L 244.0 75.7 L 251.0 74.3 L 258.0 73.0 L 265.0 71.7 L 272.0 70.4 L 279.0 69.2 L 286.0 68.0 L 293.0 66.8 L 300.0 65.7" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="216" cy="82" r="4" fill="currentColor"/></g><g class="fig-accent-2"><path d="M 160.0 110.0 L 167.0 119.9 L 174.0 124.0 L 181.0 127.1 L 188.0 129.8 L 195.0 132.1 L 202.0 134.2 L 209.0 136.2 L 216.0 138.0 L 223.0 139.7 L 230.0 141.3 L 237.0 142.8 L 244.0 144.3 L 251.0 145.7 L 258.0 147.0 L 265.0 148.3 L 272.0 149.6 L 279.0 150.8 L 286.0 152.0 L 293.0 153.2 L 300.0 154.3" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="216" cy="138" r="4" fill="currentColor"/></g><g><path d="M 160.0 110.0 L 153.0 100.1 L 146.0 96.0 L 139.0 92.9 L 132.0 90.2 L 125.0 87.9 L 118.0 85.8 L 111.0 83.8 L 104.0 82.0 L 97.0 80.3 L 90.0 78.7 L 83.0 77.2 L 76.0 75.7 L 69.0 74.3 L 62.0 73.0 L 55.0 71.7 L 48.0 70.4 L 41.0 69.2 L 34.0 68.0 L 27.0 66.8 L 20.0 65.7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/><circle cx="104" cy="82" r="4" fill="currentColor"/></g><text x="258" y="66.9" font-size="11" fill="currentColor" text-anchor="middle">y = √x</text><text x="258" y="161.1" font-size="11" fill="currentColor" text-anchor="middle">y = -√x</text><text x="62" y="66.9" font-size="11" fill="currentColor" text-anchor="middle">y = √(-x)</text></svg>',
        alt: 'Three curves on one set of axes. The parent y = square root of x rises from the origin into Quadrant I through (4, 2). Its reflection over the x-axis, y = negative square root of x, falls from the origin into Quadrant IV through (4, -2). Its reflection over the y-axis, y = square root of negative x, drawn dashed, rises from the origin into Quadrant II through (-4, 2).',
        caption: 'Figure 1. $y = \\sqrt{x}$ (solid), its reflection over the $x$-axis $y = -\\sqrt{x}$, and its reflection over the $y$-axis $y = \\sqrt{-x}$ (dashed).',
      },
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
