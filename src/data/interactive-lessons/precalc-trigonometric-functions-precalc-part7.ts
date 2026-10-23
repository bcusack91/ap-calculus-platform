import { tfLighthouse } from '@/data/lesson-figures/precalc-trig'

export const precalcTrigFunctionsPart7Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Trigonometric Functions — Full Synthesis & Review

**Part 7 of 7**

This final part ties together everything from Parts 1–6: radian measure, the unit circle, all six trig functions, graphing, and modeling.

### Master Decision Flowchart

| Task | Key Tool |
|:-----|:---------|
| Locate an angle | Compare with $\\frac{\\pi}{2} \\approx 1.57$, $\\pi$, $\\frac{3\\pi}{2} \\approx 4.71$; add or subtract $2\\pi$ for a coterminal angle |
| Evaluate trig at a standard angle | Unit circle + reference angle + ASTC signs |
| Find a missing trig value | Pythagorean identity ($\\sin^2 + \\cos^2 = 1$ family) |
| Read graph parameters | $a$ → amplitude, $b$ → period, $c$ → phase, $d$ → midline |
| Write an equation from data | Identify max/min → compute $a, d, b, c$ → choose sin or cos |
| Find arc length or angle | $s = r\\theta$, $\\theta = \\frac{s}{r}$ (radians only!) |
| Point on a circle of radius $r$ | $(r\\cos\\theta, r\\sin\\theta)$ |
      `
    },
    {
      id: 'p7-formulas',
      type: 'text' as const,
      content: `
## 📋 Complete Formula Reference

### Definitions & Identities

| Formula | Category |
|:--------|:---------|
| $\\cos\\theta = x$, $\\sin\\theta = y$ for the unit-circle point $(x, y)$ | Unit circle |
| $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$ | Right triangle |
| $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ = slope of the terminal ray, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ | Quotient |
| $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\csc\\theta = \\frac{1}{\\sin\\theta}$ | Reciprocal |
| $\\sin^2\\theta + \\cos^2\\theta = 1$ | Pythagorean |
| $\\tan^2\\theta + 1 = \\sec^2\\theta$ | Pythagorean |
| $1 + \\cot^2\\theta = \\csc^2\\theta$ | Pythagorean |
| $\\sin(-\\theta) = -\\sin\\theta$ | Odd function |
| $\\cos(-\\theta) = \\cos\\theta$ | Even function |
| $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$ | Cofunction |

### Graphing

| Form | Period |
|:-----|:-------|
| $y = a\\sin(b(x-c)) + d$ | $\\frac{2\\pi}{\\lvert b \\rvert}$ |
| $y = a\\cos(b(x-c)) + d$ | $\\frac{2\\pi}{\\lvert b \\rvert}$ |
| $y = a\\tan(b(x-c)) + d$ | $\\frac{\\pi}{\\lvert b \\rvert}$ |

### Measurement

| Quantity | Formula |
|:---------|:--------|
| Arc length | $s = r\\theta$ |
| Point on circle of radius $r$ | $(r\\cos\\theta, r\\sin\\theta)$ |
| Amplitude | $\\lvert a \\rvert = \\frac{\\text{max} - \\text{min}}{2}$ |
| Midline | $d = \\frac{\\text{max} + \\text{min}}{2}$ |
      `
    },
    {
      id: 'p7-multi-step',
      type: 'text' as const,
      figure: tfLighthouse,
      content: `
## 📝 Multi-Step Worked Problem

> **A lighthouse beam rotates once every $10$ seconds. A straight wall runs north–south $200$ m east of the lighthouse, and the closest point on the wall to the lighthouse is directly east. Model the position $x$ (in meters north of the closest point) of the beam's spot on the wall.**

**Setup:** Let $\\theta = \\frac{2\\pi}{10}t = \\frac{\\pi}{5}t$ be the beam's angle (measured from east) at time $t$.

The beam is the terminal ray of $\\theta$, whose slope is $\\tan\\theta$. Along the wall, $200$ m east of the lighthouse, the ray is $200\\tan\\theta$ m north of the closest point:

$$x = 200\\tan\\theta = 200\\tan\\left(\\frac{\\pi}{5}t\\right)$$

| Time $t$ | Angle $\\theta$ | $\\tan\\theta$ | Position $x$ |
|:----------|:-------|:------------|:-------------|
| $0$ s | $0$ | $0$ | $0$ m |
| $1.25$ s | $\\frac{\\pi}{4}$ | $1$ | $200$ m |
| $2.5$ s | $\\frac{\\pi}{2}$ | undefined | Beam parallel to the wall |

> **Key insight:** The model only describes the beam while it points toward the wall, $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$ (here $0 \\le t < 2.5$ and $7.5 < t \\le 10$). As $\\theta \\to \\frac{\\pi}{2}^-$ the spot races off along the wall without bound, which is why tangent (unbounded, with vertical asymptotes) fits and a bounded sinusoid does not.
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An arc of length $5\\pi$ lies on a circle of radius $6$. What is the central angle?',
            options: [
              '$\\frac{5\\pi}{6}$',
              '$30\\pi$',
              '$\\frac{6}{5\\pi}$',
              '$\\frac{6\\pi}{5}$'
            ],
            correctAnswer: 0,
            explanation: '$\\theta = \\frac{s}{r} = \\frac{5\\pi}{6}$. Multiplying gives $30\\pi$; the other two invert the ratio.'
          },
          {
            question: 'If $\\theta$ is in Q III with $\\tan\\theta = \\frac{5}{12}$, find $\\sin\\theta$.',
            options: [
              '$\\frac{5}{13}$',
              '$-\\frac{5}{13}$',
              '$\\frac{12}{13}$',
              '$-\\frac{12}{13}$'
            ],
            correctAnswer: 1,
            explanation: 'In Q III, $\\sin\\theta < 0$, $\\cos\\theta < 0$. $\\tan = 5/12$ means opp $= 5$, adj $= 12$, hyp $= 13$. So $\\sin\\theta = -5/13$.'
          },
          {
            question: 'A sinusoidal function has amplitude $4$, period $6$, phase shift right $1$, and midline $y = 3$. Which is correct?',
            options: [
              '$y = 4\\sin(\\frac{\\pi}{3}(x - 1)) + 3$',
              '$y = 4\\sin(6(x - 1)) + 3$',
              '$y = 3\\sin(\\frac{\\pi}{3}x - 1) + 4$',
              '$y = 4\\sin(12(x - 1)) + 3$'
            ],
            correctAnswer: 0,
            explanation: '$b = \\frac{2\\pi}{6} = \\frac{\\pi}{3}$. With $a = 4$, $c = 1$, $d = 3$: $y = 4\\sin(\\frac{\\pi}{3}(x-1)) + 3$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Cross-Topic Computations** 🧮

Give exact values; write $\\pi$ as \`pi\` and square roots with \`sqrt\` (e.g. \`100pi/3\`, \`sqrt(3)/2\`).

**1)** Evaluate $\\cos\\frac{11\\pi}{6}$. (e.g., $\\cos\\frac{7\\pi}{6}$: Q III, ref $\\frac{\\pi}{6}$, $\\cos\\frac{\\pi}{6} = \\sqrt{3}/2$, negative in Q III → \`-sqrt(3)/2\`)

**2)** Given $\\sec\\theta = -\\frac{5}{3}$ with $\\theta$ in Q II, find $\\tan\\theta$. Write as a fraction with sign. (e.g., $\\sec\\alpha = 13/5$ in Q I: $\\tan^2\\alpha = (13/5)^2 - 1 = 144/25$, so $\\tan\\alpha = 12/5$)

**3)** A wind turbine blade is $40$ m long and sweeps through an angle of $\\frac{5\\pi}{6}$. What arc length does the tip trace (in meters)? (e.g., $r = 10$, $\\theta = \\pi/3$: $s = 10 \\cdot \\pi/3 = 10\\pi/3$, answer: \`10pi/3\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sqrt(3)/2', '-4/3', '100pi/3'],
        hint1: '$\\frac{11\\pi}{6}$ is in Q IV, where cosine is positive; the reference angle is $\\frac{\\pi}{6}$.',
        hint2: '$\\tan^2\\theta = \\sec^2\\theta - 1 = \\frac{25}{9} - 1 = \\frac{16}{9}$. Tangent is negative in Q II.',
        hint3: '$s = r\\theta = 40 \\cdot \\frac{5\\pi}{6} = \\frac{200\\pi}{6}$. Simplify.',
        explanation: '1) $\\cos\\frac{11\\pi}{6} = \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ (Q IV, cosine positive). 2) $\\tan\\theta = \\pm\\frac{4}{3}$; Q II → negative: $-\\frac{4}{3}$. 3) $s = 40 \\cdot \\frac{5\\pi}{6} = \\frac{200\\pi}{6} = \\frac{100\\pi}{3}$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\cot^2\\theta + 1$ equals',
            options: ['$\\sec^2\\theta$', '$\\csc^2\\theta$', '$\\tan^2\\theta$', '$1$']
          },
          {
            label: 'The reference angle for $\\frac{7\\pi}{4}$ is',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{7\\pi}{4}$']
          },
          {
            label: 'The graph of $y = a\\cos(bx) + d$ with $b > 0$ has a maximum at $x = 0$ when',
            options: ['$a > 0$', '$a < 0$', 'Always', 'Never']
          },
          {
            label: 'Arc length $s = r\\theta$ requires the angle in',
            options: ['degrees', 'radians', 'revolutions', 'gradians']
          }
        ],
        correctAnswers: ['$\\csc^2\\theta$', '$\\frac{\\pi}{4}$', '$a > 0$', 'radians'],
        hint1: 'Divide $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$.',
        hint2: '$\\frac{7\\pi}{4}$ is in Q IV: $2\\pi - \\frac{7\\pi}{4} = ?$',
        hint3: '$\\cos(0) = 1$ is the largest value of cosine; multiplying by a negative $a$ turns it into the smallest value.',
        explanation: '$1 + \\cot^2\\theta = \\csc^2\\theta$. Ref angle of $\\frac{7\\pi}{4}$: $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$. At $x = 0$, $a\\cos(0) + d = a + d$, which is the maximum $d + \\lvert a \\rvert$ exactly when $a > 0$ (for $a < 0$ it is the minimum). Arc length needs radians.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A Ferris wheel of diameter $50$ m, center $30$ m high, period $8$ min, rider boards at bottom. Height at $t = 2$ min?',
            options: [
              '$30$ m',
              '$55$ m',
              '$5$ m',
              '$25$ m'
            ],
            correctAnswer: 0,
            explanation: 'Radius $= 25$. $h(t) = -25\\cos(\\frac{2\\pi}{8}t) + 30 = -25\\cos(\\frac{\\pi}{4}t) + 30$. At $t = 2$: $h = -25\\cos(\\frac{\\pi}{2}) + 30 = -25(0) + 30 = 30$ m (midline height).'
          },
          {
            question: 'Given $\\sin\\theta = -\\frac{\\sqrt{3}}{2}$ and $\\cos\\theta = \\frac{1}{2}$, what is $\\theta$ for $0 \\le \\theta < 2\\pi$?',
            options: [
              '$\\frac{\\pi}{3}$',
              '$\\frac{5\\pi}{3}$',
              '$\\frac{4\\pi}{3}$',
              '$\\frac{2\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin < 0$ and $\\cos > 0$ means Q IV. Reference angle with $\\sin = \\frac{\\sqrt{3}}{2}$ is $\\frac{\\pi}{3}$. In Q IV: $\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$.'
          }
        ]
      }
    }
  ]
}
