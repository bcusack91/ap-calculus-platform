export const precalcParametricPart1Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📈 Introduction to Parametric Equations

**Part 1 of 7**

### What Are Parametric Equations?

Instead of $y = f(x)$, we describe curves using a **parameter** $t$:

$$x = f(t), \\quad y = g(t)$$

As $t$ varies, the point $(x, y)$ traces a curve in the plane.

### Why Use Parameters?

- **Direction & timing**: parametric curves have a built-in direction (as $t$ increases)
- **Multiple $y$ values**: can describe curves that fail the vertical line test (circles, loops)
- **Physical meaning**: $t$ often represents **time** — the curve shows an object's path

### Example: A Circle

$x = \\cos t, \\quad y = \\sin t, \\quad 0 \\leq t \\leq 2\\pi$

Traces the unit circle counterclockwise starting at $(1, 0)$.

At $t = 0$: $(1, 0)$. At $t = \\frac{\\pi}{2}$: $(0, 1)$. At $t = \\pi$: $(-1, 0)$.
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 Common Parametric Representations

### Lines
$$x = x_0 + at, \\quad y = y_0 + bt$$
Direction: $(a, b)$. Passes through $(x_0, y_0)$ at $t = 0$.

### Parabolas
$$x = t, \\quad y = t^2$$
This is just $y = x^2$ parametrized with $t = x$.

### Ellipses
$$x = a\\cos t, \\quad y = b\\sin t, \\quad 0 \\leq t \\leq 2\\pi$$
Semi-axes $a$ and $b$. Since $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = \\cos^2 t + \\sin^2 t = 1$.

### Eliminating the Parameter

To find the rectangular (Cartesian) equation:
1. Solve one equation for $t$
2. Substitute into the other

**Example**: $x = 2t + 1, \\; y = t - 3$.
From $x$: $t = \\frac{x-1}{2}$. Then $y = \\frac{x-1}{2} - 3 = \\frac{x-7}{2}$ → a line.
      `
    },
    {
      id: 'p1-orientation',
      type: 'text' as const,
      content: `
## 🔄 Orientation and Domain

### Direction Matters

The same curve can have different orientations:

- $x = t, \\; y = t^2$ for $t \\in [0, 2]$ → traces left to right
- $x = 2-t, \\; y = (2-t)^2$ for $t \\in [0, 2]$ → traces right to left

Same parabolic arc, **opposite** direction!

### Restricting the Parameter

The domain of $t$ controls which **portion** of the curve is drawn:

- $x = \\cos t, \\; y = \\sin t$ for $0 \\leq t \\leq \\pi$ → upper semicircle only
- $x = \\cos t, \\; y = \\sin t$ for $0 \\leq t \\leq 4\\pi$ → circle traced **twice**

> 💡 **Key Insight**: Different parametrizations can produce the same geometric curve but with different starting points, speeds, and directions.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Parametric Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What curve does $x = 3\\cos t, \\; y = 3\\sin t$ trace?',
            options: ['A circle of radius 3', 'An ellipse', 'A line', 'A parabola'],
            correctAnswer: 0,
            explanation: '$x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9$. Circle of radius 3.'
          },
          {
            question: 'For $x = t^2, \\; y = t^3$, at $t = -1$ the point is:',
            options: ['$(1, 1)$', '$(1, -1)$', '$(-1, 1)$', '$(-1, -1)$'],
            correctAnswer: 1,
            explanation: '$x = (-1)^2 = 1$, $y = (-1)^3 = -1$. Point: $(1, -1)$.'
          },
          {
            question: 'Eliminating $t$ from $x = e^t, \\; y = e^{2t}$ gives:',
            options: ['$y = x^2$ for $x > 0$', '$y = 2x$', '$y = \\ln(x^2)$', '$y = x^2$ for all $x$'],
            correctAnswer: 0,
            explanation: '$y = e^{2t} = (e^t)^2 = x^2$. Since $x = e^t > 0$, the curve is $y = x^2$ for $x > 0$ only.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate & Eliminate** 🧮

**1)** $x = 2t + 1, \\; y = 3t - 2$. At $t = 3$: the $x$-coordinate is?

**2)** $x = \\cos t, \\; y = \\sin t$. At $t = \\frac{\\pi}{3}$: $x$ = ? (Enter as a fraction like "1/2")

**3)** Eliminate $t$ from $x = t + 1, \\; y = t^2 + 2t$. Express $y$ in terms of $x$: $y = x^2 +$ ?$x +$ ? (Enter the constant term, like "-1")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '1/2', '-1'],
        hint1: '$x = 2(3)+1 = 7$.',
        hint2: '$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.',
        hint3: '$t = x - 1$, so $y = (x-1)^2 + 2(x-1) = x^2 - 2x + 1 + 2x - 2 = x^2 - 1$. Constant is $-1$.',
        explanation: '1) $x = 7$. 2) $x = \\frac{1}{2}$. 3) $y = x^2 - 1$, constant term is $-1$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Curve** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x = 5\\cos t, \\; y = 2\\sin t$ traces:',
            options: ['A circle', 'An ellipse', 'A hyperbola', 'A line'],
            correctAnswer: 1
          },
          {
            label: 'The direction of $x = 1-t, \\; y = 2t$ as $t$ increases is:',
            options: ['Left and up', 'Right and down', 'Right and up', 'Left and down'],
            correctAnswer: 0
          },
          {
            label: '$x = \\sec t, \\; y = \\tan t$. Eliminating $t$ gives:',
            options: ['$x^2 - y^2 = 1$', '$x^2 + y^2 = 1$', '$y = x^2 - 1$'],
            correctAnswer: 0
          },
          {
            label: 'The parameter $t$ in physics most often represents:',
            options: ['Temperature', 'Time', 'Distance', 'Angle'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['An ellipse', 'Left and up', '$x^2 - y^2 = 1$', 'Time'],
        hint1: '$\\frac{x^2}{25}+\\frac{y^2}{4} = 1$: ellipse.',
        hint2: 'As $t$ increases: $x = 1-t$ decreases (left), $y = 2t$ increases (up).',
        hint3: '$\\sec^2 t - \\tan^2 t = 1 \\implies x^2 - y^2 = 1$.',
        explanation: 'Ellipse by Pythagorean identity. Direction: left and up. Hyperbola from $\\sec^2-\\tan^2=1$. $t$ = time.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which parametrization traces the line $y = 2x + 1$ from right to left?',
            options: ['$x = t, \\; y = 2t + 1$', '$x = -t, \\; y = -2t + 1$', '$x = 3 - t, \\; y = 7 - 2t$', 'Both B and C'],
            correctAnswer: 3,
            explanation: 'B: as $t$ increases, $x$ decreases (right to left), $y = 2(-t)+1 = -2t+1$ ✓. C: $y = 7-2t = 2(3-t)+1$ ✓, $x$ decreases. Both trace right to left.'
          },
          {
            question: 'The curve $x = t^2 - 1, \\; y = t$ passes the vertical line test:',
            options: ['True', 'False'],
            correctAnswer: 1,
            explanation: 'At $t = 1$: $(0, 1)$. At $t = -1$: $(0, -1)$. Same $x$, different $y$ — fails the vertical line test.'
          }
        ]
      }
    }
  ]
};
