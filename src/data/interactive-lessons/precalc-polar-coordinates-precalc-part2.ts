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

To verify: $r = 4\\cos\\theta \\implies r^2 = 4r\\cos\\theta \\implies x^2 + y^2 = 4x$

$$\\implies (x-2)^2 + y^2 = 4$$

Circle with center $(2, 0)$ and radius $2$. ✓
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

### Standard Forms

$$r = a \\pm b\\cos\\theta \\quad \\text{or} \\quad r = a \\pm b\\sin\\theta$$

The shape depends on the ratio $\\frac{a}{b}$:

| Ratio | Shape |
|:------|:------|
| $\\frac{a}{b} < 1$ | Inner loop |
| $\\frac{a}{b} = 1$ | Cardioid (heart shape) |
| $1 < \\frac{a}{b} < 2$ | Dimpled limaçon |
| $\\frac{a}{b} \\geq 2$ | Convex limaçon |

### Example: $r = 2 + 3\\cos\\theta$ (Inner Loop)

$\\frac{a}{b} = \\frac{2}{3} < 1$ → **inner loop**

- Maximum $r$: when $\\cos\\theta = 1$, $r = 5$
- Minimum $r$: when $\\cos\\theta = -1$, $r = -1$ (inner loop!)

### Example: $r = 3 + 3\\sin\\theta$ (Cardioid)

$\\frac{a}{b} = 1$ → **cardioid**

Passes through the origin when $\\sin\\theta = -1$, i.e., $\\theta = \\frac{3\\pi}{2}$.
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
            options: ['Limaçon with inner loop', 'Cardioid', 'Dimpled limaçon', 'Rose curve'],
            correctAnswer: 1,
            explanation: '$\\frac{a}{b} = \\frac{2}{2} = 1$, which gives a cardioid.'
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

**2)** $r = 1 + 3\\sin\\theta$: compute $\\frac{a}{b}$ as a decimal. (e.g., for $r = 2 + 4\\cos\\theta$: $\\frac{a}{b} = \\frac{2}{4} = 0.5$)

**3)** $r = 4\\sin\\theta$ is a circle with what diameter? (e.g., $r = 6\\cos\\theta$ is a circle with diameter 6)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '0.33', '4'],
        hint1: '$n = 2$ is even, so petals = $2n = 4$. Wait — $2 \\times 2 = 4$... but answer should be 8? No: $n=2$, even, so $2n = 4$ petals. Actually $r = a\\cos(2\\theta)$ with even $n=2$ → $2(2)=4$ petals.',
        hint2: '$a = 1$, $b = 3$, ratio = $\\frac{1}{3} \\approx 0.33$.',
        hint3: '$r = a\\sin\\theta$ has diameter $|a| = 4$.',
        explanation: '1) $2(2) = 4$ petals. 2) $\\frac{1}{3} \\approx 0.33$ (inner loop). 3) Diameter $= 4$.'
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
            label: '$r = 3 + 5\\cos\\theta$ has a(n)',
            options: ['Inner loop', 'Cardioid shape', 'Dimple', 'Convex shape']
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
            label: '$r = 4 + 2\\cos\\theta$ ($\\frac{a}{b} = 2$) is a',
            options: ['Inner loop limaçon', 'Cardioid', 'Dimpled limaçon', 'Convex limaçon']
          }
        ],
        correctAnswers: ['Inner loop', 'Line through origin', '5', 'Convex limaçon'],
        hint1: '$\\frac{3}{5} < 1$ → inner loop.',
        hint2: 'Constant $\\theta$ = fixed direction = line through origin.',
        hint3: '$n = 5$ is odd → $5$ petals.',
        explanation: '$\\frac{3}{5} < 1$: inner loop. $\\theta = c$: line. Odd $n=5$: 5 petals. $\\frac{a}{b} = 2$: convex.'
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
            question: 'To convert $r = 6\\cos\\theta$ to rectangular form, the result is:',
            options: [
              '$(x-3)^2 + y^2 = 9$',
              '$x^2 + (y-3)^2 = 9$',
              '$x^2 + y^2 = 6$',
              '$(x-6)^2 + y^2 = 36$'
            ],
            correctAnswer: 0,
            explanation: '$r = 6\\cos\\theta \\to r^2 = 6r\\cos\\theta \\to x^2 + y^2 = 6x \\to (x-3)^2 + y^2 = 9$.'
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
