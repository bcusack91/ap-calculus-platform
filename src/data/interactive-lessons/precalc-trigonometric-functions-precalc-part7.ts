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
| Convert degrees ↔ radians | Multiply by $\\frac{\\pi}{180}$ or $\\frac{180}{\\pi}$ |
| Evaluate trig at standard angle | Unit circle + reference angle + ASTC signs |
| Find missing trig value | Pythagorean identity ($\\sin^2 + \\cos^2 = 1$ family) |
| Read graph parameters | $a$ → amplitude, $b$ → period, $c$ → phase, $d$ → midline |
| Write equation from data | Identify max/min → compute $a, d, b, c$ → choose sin or cos |
| Find arc length / sector area | $s = r\\theta$, $A = \\frac{1}{2}r^2\\theta$ (radians only!) |
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
| $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$ | Right triangle |
| $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ | Quotient |
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
| $y = a\\sin(b(x-c)) + d$ | $\\frac{2\\pi}{|b|}$ |
| $y = a\\cos(b(x-c)) + d$ | $\\frac{2\\pi}{|b|}$ |
| $y = a\\tan(bx-c) + d$ | $\\frac{\\pi}{|b|}$ |

### Measurement

| Quantity | Formula |
|:---------|:--------|
| Arc length | $s = r\\theta$ |
| Sector area | $A = \\frac{1}{2}r^2\\theta$ |
| Amplitude | $|a| = \\frac{\\text{max} - \\text{min}}{2}$ |
| Midline | $d = \\frac{\\text{max} + \\text{min}}{2}$ |
      `
    },
    {
      id: 'p7-multi-step',
      type: 'text' as const,
      content: `
## 📝 Multi-Step Worked Problem

> **A lighthouse beam rotates once every $10$ seconds. The beam hits a wall $200$ m away. The closest point on the wall to the lighthouse is directly east. Model the position $x$ (in meters north/south of the closest point) of the beam on the wall.**

**Setup:** Let $\\theta = \\frac{2\\pi}{10}t = \\frac{\\pi}{5}t$ be the angle at time $t$.

From trigonometry: $x = 200\\tan\\theta = 200\\tan\\left(\\frac{\\pi}{5}t\\right)$

| Time $t$ | Angle $\\theta$ | $\\tan\\theta$ | Position $x$ |
|:----------|:-------|:------------|:-------------|
| $0$ s | $0$ | $0$ | $0$ m |
| $1.25$ s | $\\frac{\\pi}{4}$ | $1$ | $200$ m |
| $2.5$ s | $\\frac{\\pi}{2}$ | undefined | Beam parallel to wall |

> **Key insight:** This is a tangent model because the position can grow to $\\pm\\infty$ (the beam sweeps past the wall's endpoint). Tangent is the right function when the output is unbounded.
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
            question: 'The arc length for a $\\frac{3\\pi}{4}$ radian angle on a circle of radius $8$ is:',
            options: [
              '$6\\pi$',
              '$3\\pi$',
              '$8\\pi$',
              '$\\frac{3\\pi}{32}$'
            ],
            correctAnswer: 0,
            explanation: '$s = r\\theta = 8 \\cdot \\frac{3\\pi}{4} = 6\\pi$.'
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
              '$y = 3\\sin(\\frac{\\pi}{3}(x - 1)) + 4$',
              '$y = 4\\sin(\\frac{2\\pi}{3}(x - 1)) + 3$'
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

**1)** Convert $\\frac{11\\pi}{6}$ to degrees. Write as an integer. (e.g., $\\frac{3\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{3 \\times 180}{4} = 135$)

**2)** Given $\\sec\\theta = -\\frac{5}{3}$ with $\\theta$ in Q II, find $\\tan\\theta$. Write as a fraction with sign. (e.g., $\\sec\\alpha = 13/5$ in Q I: $\\tan^2\\alpha = (13/5)^2 - 1 = 144/25$, so $\\tan\\alpha = 12/5$)

**3)** A wind turbine blade is $40$ m long and sweeps through $150°$. What arc length does the tip trace (in meters)? Write as a simplified fraction times $\\pi$ — give the coefficient as a fraction (e.g., if $s = \\frac{20}{3}\\pi$, write $20/3$). (e.g., $r = 10$, $\\theta = 60° = \\pi/3$: $s = 10 \\cdot \\pi/3 = 10\\pi/3$, answer: $10/3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['330', '-4/3', '100/3'],
        hint1: '$\\frac{11\\pi}{6} \\times \\frac{180}{\\pi} = \\frac{11 \\times 180}{6} = \\frac{1980}{6}$.',
        hint2: '$\\tan^2\\theta = \\sec^2\\theta - 1 = \\frac{25}{9} - 1 = \\frac{16}{9}$. Tangent is negative in Q II.',
        hint3: 'Convert $150°$ to radians: $\\frac{5\\pi}{6}$. Then $s = 40 \\cdot \\frac{5\\pi}{6} = \\frac{200\\pi}{6}$. Simplify.',
        explanation: '1) $\\frac{11 \\times 180}{6} = 330°$. 2) $\\tan\\theta = \\pm\\frac{4}{3}$; Q II → negative: $-\\frac{4}{3}$. 3) $s = 40 \\cdot \\frac{5\\pi}{6} = \\frac{200\\pi}{6} = \\frac{100\\pi}{3}$, coefficient $= 100/3$.'
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
            label: 'A cosine function starts at a maximum when',
            options: ['$a > 0$ and no phase shift', '$a < 0$', 'Always', 'Never']
          },
          {
            label: 'Arc length requires the angle in',
            options: ['degrees', 'radians', 'revolutions', 'gradians']
          }
        ],
        correctAnswers: ['$\\csc^2\\theta$', '$\\frac{\\pi}{4}$', '$a > 0$ and no phase shift', 'radians'],
        hint1: 'Divide $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$.',
        hint2: '$\\frac{7\\pi}{4}$ is in Q IV: $2\\pi - \\frac{7\\pi}{4} = ?$',
        hint3: '$\\cos(0) = 1$ (maximum) only when the leading coefficient is positive.',
        explanation: '$1 + \\cot^2\\theta = \\csc^2\\theta$. Ref angle of $\\frac{7\\pi}{4}$: $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$. Cosine starts at max when $a > 0$. Arc length formula $s = r\\theta$ requires radians.'
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
            question: 'Given $\\sin\\theta = -\\frac{\\sqrt{3}}{2}$ and $\\cos\\theta = \\frac{1}{2}$, what is $\\theta$?',
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
