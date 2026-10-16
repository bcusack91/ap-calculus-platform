export const precalcPolarPart2Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🌹 Polar Curves — Basic Shapes

**Part 2 of 7**

Polar equations define curves using $r$ as a function of $\\theta$. The shapes are often strikingly beautiful.

### Lines & Circles in Polar

| Equation | Shape |
|:---------|:------|
| $\\theta = c$ | Line through origin at angle $c$ |
| $r = c$ | Circle centered at origin, radius $|c|$ |
| $r = a\\cos\\theta$ | Circle of diameter $|a|$, centered at $(\\frac{a}{2}, 0)$ |
| $r = a\\sin\\theta$ | Circle of diameter $|a|$, centered at $(0, \\frac{a}{2})$ |

### Example: $r = 4\\cos\\theta$

This is a circle with diameter $4$, centered at $(2, 0)$ in rectangular coordinates.

To check, plot a few input-output pairs and convert each point with $x = r\\cos\\theta$, $y = r\\sin\\theta$:

| $\\theta$ | $r = 4\\cos\\theta$ | Point $(x, y)$ |
|:---|:---|:---|
| $0$ | $4$ | $(4, 0)$ |
| $\\frac{\\pi}{4}$ | $2\\sqrt{2}$ | $(2, 2)$ |
| $\\frac{\\pi}{2}$ | $0$ | $(0, 0)$, the pole |
| $-\\frac{\\pi}{4}$ | $2\\sqrt{2}$ | $(2, -2)$ |

Each point is $2$ units from $(2, 0)$, so the curve is the circle with center $(2, 0)$ and radius $2$. ✓
      `
    },
    {
      id: 'p2-roses',
      type: 'text' as const,
      content: `
## 🌹 Rose Curves

### Standard Forms

$$r = a\\cos(n\\theta) \\quad \\text{or} \\quad r = a\\sin(n\\theta)$$

| $n$ | # of Petals |
|:----|:-----------|
| Odd $n$ | $n$ petals |
| Even $n$ | $2n$ petals |

**Petal length** = $|a|$

### Examples

| Equation | Petals | Petal Length |
|:---------|:-------|:------------|
| $r = 3\\cos(2\\theta)$ | $4$ petals | $3$ |
| $r = 5\\sin(3\\theta)$ | $3$ petals | $5$ |
| $r = 2\\cos(4\\theta)$ | $8$ petals | $2$ |

### Why the Odd/Even Rule?

For **odd** $n$: each petal is traced once as $\\theta$ goes from $0$ to $\\pi$.

For **even** $n$: petals in each "half" are traced, and the curve also traces petals when $r$ is negative, doubling the count.
      `
    },
    {
      id: 'p2-limacons',
      type: 'text' as const,
      content: `
## 🐌 Limaçons

### The Form

$$r = a + b\\cos\\theta \\quad \\text{or} \\quad r = a + b\\sin\\theta$$

You do not need a classification chart. Find the **smallest and largest values of $r$** (where $\\cos\\theta$ or $\\sin\\theta$ equals $\\pm 1$) and read the shape from the sign of $r$:

| What $r$ does | What the graph does |
|:------|:------|
| $r$ becomes negative for some $\\theta$ | Those points plot on the opposite ray, tracing an **inner loop** |
| $r$ reaches $0$ but never goes negative | The curve touches the pole once: a **cardioid** |
| $r$ stays positive | The curve never reaches the pole |

### Example: $r = 2 + 3\\cos\\theta$ (Inner Loop)

- Maximum $r$: when $\\cos\\theta = 1$, $r = 5$
- Minimum $r$: when $\\cos\\theta = -1$, $r = -1$

Because $r$ is negative near $\\theta = \\pi$, those points land on the opposite ray, near the positive $x$-axis, and form the **inner loop**.

### Example: $r = 3 + 3\\sin\\theta$ (Cardioid)

$r$ runs from $0$ to $6$ and is never negative. It equals $0$ only when $\\sin\\theta = -1$, i.e., $\\theta = \\frac{3\\pi}{2}$, so the curve touches the pole once: a **cardioid**.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Polar Curves Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$r = 4\\sin(3\\theta)$ is a rose with how many petals?',
            options: ['$3$', '$4$', '$6$', '$12$'],
            correctAnswer: 0,
            explanation: '$n=3$ is odd, so there are $n = 3$ petals, each of length $4$.'
          },
          {
            question: '$r = 2 + 2\\cos\\theta$ is a:',
            options: ['Limaçon with inner loop', 'Cardioid', 'Circle through the pole', 'Rose curve'],
            correctAnswer: 1,
            explanation: '$r$ runs from $0$ (at $\\theta = \\pi$) to $4$ and is never negative, so the curve touches the pole once without looping: a cardioid. An inner loop needs negative values of $r$, and a circle through the pole has the form $r = a\\cos\\theta$.'
          },
          {
            question: 'The polar equation $r = 5$ represents:',
            options: ['A line', 'A circle of radius 5 at the origin', 'A spiral', 'A point'],
            correctAnswer: 1,
            explanation: '$r = 5$ means every point is distance 5 from the origin — a circle of radius 5.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Polar Curve Analysis** 🧮

**1)** $r = 6\\cos(2\\theta)$: how many petals? (e.g., $r = a\\cos(3\\theta)$ has 3 petals since 3 is odd)

**2)** $r = 1 + 3\\sin\\theta$: what is the minimum value of $r$ (a signed value, which can be negative)? (e.g., for $r = 2 + 4\\cos\\theta$ the minimum value is $2 - 4 = -2$)

**3)** $r = 4\\sin\\theta$ is a circle with what diameter? (e.g., $r = 6\\cos\\theta$ is a circle with diameter 6)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '-2', '4'],
        hint1: '$n = 2$ is even, so the number of petals is $2n$.',
        hint2: 'The smallest value occurs when $\\sin\\theta = -1$: $1 + 3(-1)$.',
        hint3: '$r = a\\sin\\theta$ has diameter $|a| = 4$.',
        explanation: '1) $n = 2$ is even, so $2(2) = 4$ petals. 2) $1 - 3 = -2$; because $r$ goes negative, the graph has an inner loop. 3) Diameter $= 4$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Curve Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $r = 3 + 5\\cos\\theta$, the minimum (signed) value of $r$ is',
            options: ['$-2$', '$3$', '$8$', '$0$']
          },
          {
            label: '$\\theta = \\frac{\\pi}{4}$ is a',
            options: ['Circle', 'Line through origin', 'Spiral', 'Rose curve']
          },
          {
            label: '$r = 2\\sin(5\\theta)$ has how many petals?',
            options: ['2', '5', '10', '15']
          },
          {
            label: 'The graph of $r = 4 + 2\\cos\\theta$ passes through the pole',
            options: ['Never', 'Once', 'Twice', 'Four times']
          }
        ],
        correctAnswers: ['$-2$', 'Line through origin', '5', 'Never'],
        hint1: 'The smallest value occurs when $\\cos\\theta = -1$: $3 - 5$.',
        hint2: 'Constant $\\theta$ = fixed direction = line through origin.',
        hint3: '$n = 5$ is odd → $5$ petals.',
        explanation: '$3 - 5 = -2$, so $r$ goes negative and the graph has an inner loop. $\\theta = c$: line. Odd $n=5$: 5 petals. $r = 4 + 2\\cos\\theta$ is always between $2$ and $6$, so it never reaches the pole.'
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
            question: 'On the circle $r = 6\\cos\\theta$, which point in rectangular coordinates corresponds to $\\theta = \\frac{\\pi}{3}$?',
            options: [
              '$\\left(\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$',
              '$\\left(\\frac{3\\sqrt{3}}{2}, \\frac{3}{2}\\right)$',
              '$\\left(3, \\frac{\\pi}{3}\\right)$',
              '$\\left(3, 3\\sqrt{3}\\right)$'
            ],
            correctAnswer: 0,
            explanation: '$r = 6\\cos\\frac{\\pi}{3} = 3$, so $x = 3\\cos\\frac{\\pi}{3} = \\frac{3}{2}$ and $y = 3\\sin\\frac{\\pi}{3} = \\frac{3\\sqrt{3}}{2}$. Swapping sine and cosine gives the second point, $\\left(3, \\frac{\\pi}{3}\\right)$ is the polar pair itself, and $(3, 3\\sqrt{3})$ uses $r = 6$ instead of $3$.'
          },
          {
            question: 'A rose curve $r = a\\cos(4\\theta)$ has:',
            options: ['4 petals', '8 petals', '2 petals', '16 petals'],
            correctAnswer: 1,
            explanation: '$n = 4$ is even, so the number of petals is $2n = 8$.'
          }
        ]
      }
    }
  ]
};
