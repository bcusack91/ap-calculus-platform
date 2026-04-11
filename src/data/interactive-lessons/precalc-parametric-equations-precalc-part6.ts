export const precalcParametricPart6Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🌀 Special Parametric Curves

**Part 6 of 7**

### Famous Curves with Parametric Equations

**Cycloid** — Point on rim of rolling circle (radius $a$):
$$x = a(t - \\sin t), \\quad y = a(1 - \\cos t)$$
Properties: arches from $(0,0)$ to $(2\\pi a, 0)$, max height $2a$.

**Astroid** — Point inside rolling circle:
$$x = a\\cos^3 t, \\quad y = a\\sin^3 t$$
Rectangular: $x^{2/3} + y^{2/3} = a^{2/3}$

**Involute of a Circle** — Unwinding string from circle:
$$x = a(\\cos t + t\\sin t), \\quad y = a(\\sin t - t\\cos t)$$
      `
    },
    {
      id: 'p6-cycloid',
      type: 'text' as const,
      content: `
## 📝 The Cycloid in Depth

The cycloid $x = a(t - \\sin t), \\; y = a(1 - \\cos t)$ has remarkable properties.

### Slope
$$\\frac{dy}{dx} = \\frac{a\\sin t}{a(1-\\cos t)} = \\frac{\\sin t}{1-\\cos t} = \\cot\\frac{t}{2}$$

At $t = \\pi$ (top of arch): slope = $\\cot\\frac{\\pi}{2} = 0$ → horizontal tangent ✓

At $t \\to 0^+$: slope $\\to \\infty$ → vertical tangent (cusp) ✓

### Arc Length of One Arch

$$L = \\int_0^{2\\pi}\\sqrt{a^2(1-\\cos t)^2 + a^2\\sin^2 t}\\,dt$$

Simplifies using $1-2\\cos t + \\cos^2 t + \\sin^2 t = 2(1-\\cos t) = 4\\sin^2\\frac{t}{2}$:

$$L = \\int_0^{2\\pi}2a\\sin\\frac{t}{2}\\,dt = \\left[-4a\\cos\\frac{t}{2}\\right]_0^{2\\pi} = -4a(-1-1) = 8a$$

> 🎯 One arch of the cycloid has length exactly **$8a$** — eight times the radius!
      `
    },
    {
      id: 'p6-Lissajous',
      type: 'text' as const,
      content: `
## 🎵 Lissajous Figures

$$x = A\\sin(at + \\delta), \\quad y = B\\sin(bt)$$

The frequency ratio $a:b$ determines the shape:

| Ratio $a:b$ | Shape |
|:-------------|:------|
| $1:1, \\delta = 0$ | Line segment (diagonal) |
| $1:1, \\delta = \\frac{\\pi}{2}$ | Ellipse |
| $1:2$ | Figure-eight (or bowtie) |
| $2:3$ | Pretzel-like curve |
| $3:4$ | Complex knotted pattern |

The number of lobes: up to $a$ lobes horizontally and $b$ lobes vertically.

### Visualization Tip

Set $A = B = 1, \\delta = \\frac{\\pi}{2}$, and increment the ratio $a:b$. The complexity increases — these patterns appear in oscilloscope traces and physics demonstrations.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Special Curves Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The cycloid has cusps at:',
            options: ['The top of each arch', 'The bottom where it touches the baseline', 'The midpoints', 'There are no cusps'],
            correctAnswer: 1,
            explanation: 'At $t = 0, 2\\pi, 4\\pi, ...$, the point touches the ground and both $dx/dt$ and $dy/dt$ equal $0$ — cusps.'
          },
          {
            question: 'The astroid $x = a\\cos^3 t, \\; y = a\\sin^3 t$ has the Cartesian equation:',
            options: ['$x^2 + y^2 = a^2$', '$x^{2/3} + y^{2/3} = a^{2/3}$', '$x^3 + y^3 = a^3$', '$\\sqrt{x} + \\sqrt{y} = \\sqrt{a}$'],
            correctAnswer: 1,
            explanation: '$\\left(\\frac{x}{a}\\right)^{2/3} + \\left(\\frac{y}{a}\\right)^{2/3} = \\cos^2 t + \\sin^2 t = 1$.'
          },
          {
            question: 'A Lissajous figure with $a:b = 1:1$ and $\\delta = \\frac{\\pi}{4}$ traces:',
            options: ['A circle', 'A line', 'A tilted ellipse', 'A figure-eight'],
            correctAnswer: 2,
            explanation: 'With $a = b$ and $0 < \\delta < \\frac{\\pi}{2}$, the result is a tilted ellipse.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Special Curve Calculations** 🧮

**1)** Cycloid with $a = 3$: arc length of one arch = $8a$ = ?

**2)** Cycloid with $a = 5$: maximum height above baseline = $2a$ = ?

**3)** Astroid with $a = 8$: at $t = 0$, the point is at $(x, y) = (?, 0)$. What is $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '10', '8'],
        hint1: '$8 \\times 3 = 24$.',
        hint2: '$2 \\times 5 = 10$.',
        hint3: 'At $t = 0$: $x = 8\\cos^3 0 = 8(1)^3 = 8$.',
        explanation: '1) Arc length = $24$. 2) Max height = $10$. 3) $x = 8$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Curve Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A rolling circle creates a:',
            options: ['Cycloid', 'Astroid', 'Lissajous figure', 'Spiral'],
            correctAnswer: 0
          },
          {
            label: 'The astroid is contained within:',
            options: ['A circle of radius $a$', 'A square of side $2a$', 'Both'],
            correctAnswer: 2
          },
          {
            label: 'Lissajous figures with irrational frequency ratio:',
            options: ['Close after one period', 'Never close (fill a region)', 'Are always circles'],
            correctAnswer: 1
          },
          {
            label: 'The cycloid is also known as the curve of:',
            options: ['Fastest descent (brachistochrone)', 'Equal time (tautochrone)', 'Both'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Cycloid', 'Both', 'Never close (fill a region)', 'Both'],
        hint1: 'Point on the rim of a rolling wheel → cycloid.',
        hint2: 'Astroid touches $x = \\pm a, y = \\pm a$, fitting in both.',
        hint3: 'Irrational ratio means the curve never exactly repeats.',
        explanation: 'Rolling circle → cycloid. Astroid fits in both circle and square. Irrational ratio → dense curve. Cycloid is both brachistochrone and tautochrone.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The cycloid $x = 2(t-\\sin t), y = 2(1-\\cos t)$ has its first cusp after $(0,0)$ at:',
            options: ['$(2\\pi, 0)$', '$(4\\pi, 0)$', '$(2, 2)$', '$(\\pi, 2)$'],
            correctAnswer: 1,
            explanation: 'At $t = 2\\pi$: $x = 2(2\\pi - 0) = 4\\pi$, $y = 2(1-1) = 0$. Point: $(4\\pi, 0)$.'
          },
          {
            question: 'The astroid has how many cusps?',
            options: ['$2$', '$3$', '$4$', '$6$'],
            correctAnswer: 2,
            explanation: 'Cusps at $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$: four cusps, one on each axis.'
          }
        ]
      }
    }
  ]
};
