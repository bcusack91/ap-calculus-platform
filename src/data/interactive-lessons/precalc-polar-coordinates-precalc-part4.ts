export const precalcPolarPart4Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📊 Graphing Polar Equations by Hand

**Part 4 of 7**

Graphing polar equations by hand requires building a table of $(r, \\theta)$ values and plotting points.

### Step-by-Step Process

1. **Make a table** of $\\theta$ values (usually multiples of $\\frac{\\pi}{6}$ or $\\frac{\\pi}{4}$)
2. **Compute** $r$ for each $\\theta$
3. **Plot** each $(r, \\theta)$ point on polar grid
4. **Connect** points with a smooth curve
5. **Check symmetry** to reduce work

### Symmetry Tests

| Symmetry | Test | Replace |
|:---------|:-----|:--------|
| Polar axis ($x$-axis) | Replace $\\theta$ with $-\\theta$ | If same equation: symmetric |
| Line $\\theta = \\frac{\\pi}{2}$ ($y$-axis) | Replace $\\theta$ with $\\pi - \\theta$ | If same equation: symmetric |
| Pole (origin) | Replace $r$ with $-r$ | If same equation: symmetric |
      `
    },
    {
      id: 'p4-example',
      type: 'text' as const,
      content: `
## 📝 Graphing $r = 2 + 2\\cos\\theta$ (Cardioid)

### Step 1: Table of Values

| $\\theta$ | $\\cos\\theta$ | $r = 2 + 2\\cos\\theta$ |
|:---------|:-------------|:----------------------|
| $0$ | $1$ | $4$ |
| $\\frac{\\pi}{3}$ | $\\frac{1}{2}$ | $3$ |
| $\\frac{\\pi}{2}$ | $0$ | $2$ |
| $\\frac{2\\pi}{3}$ | $-\\frac{1}{2}$ | $1$ |
| $\\pi$ | $-1$ | $0$ |
| $\\frac{4\\pi}{3}$ | $-\\frac{1}{2}$ | $1$ |
| $\\frac{3\\pi}{2}$ | $0$ | $2$ |
| $\\frac{5\\pi}{3}$ | $\\frac{1}{2}$ | $3$ |
| $2\\pi$ | $1$ | $4$ |

### Step 2: Symmetry Check

Replace $\\theta$ with $-\\theta$: $r = 2 + 2\\cos(-\\theta) = 2 + 2\\cos\\theta$ ✓

Symmetric about the polar axis! Only need to plot $[0, \\pi]$ and reflect.

### Key Feature

Passes through origin at $\\theta = \\pi$ (where $r = 0$).
      `
    },
    {
      id: 'p4-rose-graph',
      type: 'text' as const,
      content: `
## 🌹 Graphing a Rose: $r = 3\\cos(2\\theta)$

### Finding the Petals

Set $r = 0$: $\\cos(2\\theta) = 0 \\implies 2\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\ldots$

$\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$

These are the "zeros" between petals.

### Petal Locations

Maximum $r = 3$ when $\\cos(2\\theta) = 1$:

$2\\theta = 0, 2\\pi, 4\\pi \\implies \\theta = 0, \\pi$ (petals along $x$-axis)

Also $r = -3$ when $\\cos(2\\theta) = -1$:

$2\\theta = \\pi, 3\\pi \\implies \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ (petals along $y$-axis, traced with negative $r$)

### Result

4 petals along the axes, each of length 3. The curve has **both** $x$-axis and $y$-axis symmetry, plus origin symmetry.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graphing Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $r = 1 + \\sin\\theta$, when does the curve pass through the origin?',
            options: ['$\\theta = 0$', '$\\theta = \\frac{\\pi}{2}$', '$\\theta = \\pi$', '$\\theta = \\frac{3\\pi}{2}$'],
            correctAnswer: 3,
            explanation: '$r = 0$ when $\\sin\\theta = -1$, i.e., $\\theta = \\frac{3\\pi}{2}$.'
          },
          {
            question: '$r = 4\\cos\\theta$ has symmetry about:',
            options: ['The polar axis only', 'The line $\\theta = \\frac{\\pi}{2}$ only', 'Both axes', 'The origin'],
            correctAnswer: 0,
            explanation: 'Replace $\\theta$ with $-\\theta$: $\\cos(-\\theta) = \\cos\\theta$ ✓. Polar axis symmetry.'
          },
          {
            question: 'For the rose $r = 5\\sin(3\\theta)$, the maximum distance from the origin is:',
            options: ['$3$', '$5$', '$8$', '$15$'],
            correctAnswer: 1,
            explanation: 'Maximum $|r| = 5$ (the coefficient $a = 5$), achieved when $\\sin(3\\theta) = \\pm 1$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Compute $r$ Values** 🧮

For $r = 3 - 3\\sin\\theta$:

**1)** At $\\theta = 0$: $r$ = ? (e.g., for $r = 2 + 2\\cos\\theta$ at $\\theta = 0$: $r = 2+2(1) = 4$)

**2)** At $\\theta = \\frac{\\pi}{2}$: $r$ = ? (e.g., at $\\theta = \\frac{\\pi}{2}$: $r = 2+2(0) = 2$)

**3)** At $\\theta = \\frac{3\\pi}{2}$: $r$ = ? (e.g., at $\\theta = \\pi$: $r = 2+2(-1) = 0$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '0', '6'],
        hint1: '$r = 3 - 3\\sin 0 = 3 - 0 = 3$.',
        hint2: '$r = 3 - 3\\sin\\frac{\\pi}{2} = 3 - 3 = 0$.',
        hint3: '$r = 3 - 3\\sin\\frac{3\\pi}{2} = 3 - 3(-1) = 6$.',
        explanation: '1) $r = 3$. 2) $r = 0$. 3) $r = 6$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify Features** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$r = 4 - 2\\cos\\theta$: maximum $r$ occurs at',
            options: ['$\\theta = 0$', '$\\theta = \\pi$', '$\\theta = \\frac{\\pi}{2}$'],
            correctAnswer: 1
          },
          {
            label: 'A curve symmetric about the polar axis uses which test?',
            options: ['Replace $\\theta$ with $-\\theta$', 'Replace $\\theta$ with $\\pi - \\theta$', 'Replace $r$ with $-r$']
          },
          {
            label: '$r = 2\\sin(4\\theta)$: zeros between petals occur at $\\theta =$',
            options: ['$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, ...$', '$0, \\frac{\\pi}{2}, \\pi, ...$', '$\\frac{\\pi}{8}, \\frac{3\\pi}{8}, ...$']
          },
          {
            label: 'The largest value of $r$ for $r = 5 + 3\\cos\\theta$ is',
            options: ['$5$', '$8$', '$3$', '$2$']
          }
        ],
        correctAnswers: ['$\\theta = \\pi$', 'Replace $\\theta$ with $-\\theta$', '$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, ...$', '$8$'],
        hint1: '$r = 4 - 2\\cos\\theta$ is largest when $\\cos\\theta = -1$, i.e., $\\theta = \\pi$.',
        hint2: 'Polar axis = $x$-axis symmetry → test $-\\theta$.',
        hint3: '$\\sin(4\\theta) = 0$ when $4\\theta = 0, \\pi, 2\\pi, ...$, so $\\theta = 0, \\frac{\\pi}{4}, ...$.',
        explanation: 'Max $r$ when $\\cos\\theta = -1$ ($\\theta = \\pi$). Polar axis: test $-\\theta$. Zeros at multiples of $\\frac{\\pi}{4}$. Max $r = 5+3 = 8$.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The cardioid $r = 1 - \\cos\\theta$ is symmetric about:',
            options: ['The polar axis ($x$-axis)', 'The line $\\theta = \\frac{\\pi}{2}$ ($y$-axis)', 'The origin', 'No symmetry'],
            correctAnswer: 0,
            explanation: '$\\cos(-\\theta) = \\cos\\theta$, so replacing $\\theta$ with $-\\theta$ gives the same equation. Polar axis symmetry.'
          },
          {
            question: 'How many times does $r = 3\\sin(2\\theta)$ pass through the origin as $\\theta$ goes from $0$ to $2\\pi$?',
            options: ['2', '4', '6', '8'],
            correctAnswer: 1,
            explanation: '$r = 0$ when $\\sin(2\\theta) = 0$, i.e., $2\\theta = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$, giving $\\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$. That\'s 4 distinct passes through the origin (0 and $2\\pi$ are the same).'
          }
        ]
      }
    }
  ]
};
