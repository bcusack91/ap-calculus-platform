export const precalcInverseTrigPart5Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Solving Equations with Inverse Trig Functions

**Part 5 of 7**

The main job of an inverse trig function on the AP exam is to **solve** an equation such as $\\sin\\theta = 0.3$ when the value is not special. The inverse gives you **one** solution. The symmetry of the unit circle gives you the rest.

### One Solution From the Inverse, the Others From Symmetry

| Equation | The inverse gives | Second solution in $[0, 2\\pi)$ | All solutions |
|:---------|:------------------|:-------------------------------|:--------------|
| $\\sin\\theta = k$ | $\\theta_1 = \\arcsin k$ | $\\pi - \\theta_1$ | $\\theta_1 + 2\\pi n$, $\\ \\pi - \\theta_1 + 2\\pi n$ |
| $\\cos\\theta = k$ | $\\theta_1 = \\arccos k$ | $2\\pi - \\theta_1$ (equivalently $-\\theta_1$) | $\\pm\\theta_1 + 2\\pi n$ |
| $\\tan\\theta = k$ | $\\theta_1 = \\arctan k$ | $\\theta_1 + \\pi$ | $\\theta_1 + \\pi n$ |

If $\\arcsin k$ or $\\arctan k$ comes out negative, add $2\\pi$ to land it in $[0, 2\\pi)$.

> 📏 Keep the calculator in **radian** mode and round to **three decimal places** (the AP standard) unless told otherwise.
      `
    },
    {
      id: 'p5-worked',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Solve $\\cos\\theta = 0.6$ on $[0, 2\\pi)$

$\\theta_1 = \\arccos(0.6) \\approx 0.927$ (a Quadrant I angle). Cosine is also $0.6$ at the reflection across the $x$-axis:

$$\\theta_2 = 2\\pi - 0.927 \\approx 5.356$$

### Example 2: Solve $\\sin\\theta = -0.28$ on $[0, 2\\pi)$

$\\arcsin(-0.28) \\approx -0.284$, which is **not** in $[0, 2\\pi)$. Sine is negative in Quadrants III and IV, and the reference angle is $0.284$:

$$\\theta = \\pi + 0.284 \\approx 3.425 \\qquad \\theta = 2\\pi - 0.284 \\approx 5.999$$

(Equivalently, $-0.284 + 2\\pi \\approx 5.999$ and $\\pi - (-0.284) \\approx 3.425$.)

### Example 3: Solve $3\\tan\\theta = 4$ on $[0, 2\\pi)$

Isolate first: $\\tan\\theta = \\frac{4}{3}$, so $\\theta_1 = \\arctan\\frac{4}{3} \\approx 0.927$. Tangent repeats every $\\pi$:

$$\\theta_2 = 0.927 + \\pi \\approx 4.069$$

### Example 4: A non-special exact value

Solve $5\\sin\\theta - 1 = 0$. Then $\\sin\\theta = \\frac{1}{5}$, and the exact general solution is written with the inverse itself:

$$\\theta = \\arcsin\\tfrac{1}{5} + 2\\pi n \\quad\\text{or}\\quad \\theta = \\pi - \\arcsin\\tfrac{1}{5} + 2\\pi n$$

### Solving for the Input of an Inverse

If the unknown is **inside** the inverse, undo it by applying the trig function: $\\arccos(2x - 1) = \\frac{2\\pi}{3}$ means $2x - 1 = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, so $x = \\frac{1}{4}$. (This only makes sense when the right side is in the range of the inverse.)
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Solving Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A calculator gives $\\arcsin(0.7) \\approx 0.775$. What are all solutions of $\\sin\\theta = 0.7$ on $[0, 2\\pi)$?',
            options: [
              '$0.775$ only',
              '$0.775$ and $\\pi - 0.775 \\approx 2.367$',
              '$0.775$ and $0.775 + \\pi \\approx 3.917$',
              '$0.775$ and $2\\pi - 0.775 \\approx 5.508$'
            ],
            correctAnswer: 1,
            explanation: 'Sine is positive in Quadrants I and II, and the Quadrant II partner of $0.775$ is $\\pi - 0.775$. Adding $\\pi$ is the tangent pattern, and $2\\pi - 0.775$ is the cosine pattern (it has sine $-0.7$).'
          },
          {
            question: 'Which is an exact solution of $4\\cos\\theta + 1 = 0$?',
            options: [
              '$\\theta = \\arccos\\!\\left(-\\frac{1}{4}\\right)$',
              '$\\theta = \\arccos\\!\\left(\\frac{1}{4}\\right)$',
              '$\\theta = \\cos\\!\\left(-\\frac{1}{4}\\right)$',
              '$\\theta = -\\frac{1}{4}$'
            ],
            correctAnswer: 0,
            explanation: 'Isolating gives $\\cos\\theta = -\\frac{1}{4}$, so one solution is the angle whose cosine is $-\\frac{1}{4}$: $\\arccos(-\\frac{1}{4}) \\approx 1.823$. $\\arccos(\\frac{1}{4})$ drops the sign, $\\cos(-\\frac{1}{4})$ applies the wrong function, and $-\\frac{1}{4}$ is the cosine value, not the angle.'
          },
          {
            question: 'Solve $\\arctan(2x - 1) = \\frac{\\pi}{4}$.',
            options: [
              '$x = \\frac{\\pi + 4}{8}$',
              '$x = 1$',
              '$x = \\frac{1}{2}$',
              '$x = \\frac{\\sqrt{2} + 2}{4}$'
            ],
            correctAnswer: 1,
            explanation: 'Apply tangent to both sides: $2x - 1 = \\tan\\frac{\\pi}{4} = 1$, so $x = 1$. $\\frac{\\pi + 4}{8}$ sets $2x - 1$ equal to the angle itself, $x = \\frac{1}{2}$ forgets the $-1$, and $\\frac{\\sqrt{2} + 2}{4}$ uses $\\sin\\frac{\\pi}{4}$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Calculator Practice** 🧮

Give each angle in radians, rounded to **three decimal places** (calculator in radian mode).

**1)** The **larger** solution of $\\cos\\theta = 0.6$ on $[0, 2\\pi)$: $\\theta \\approx \\,?$ (e.g., for $\\cos\\theta = 0.4$: $\\arccos 0.4 \\approx 1.159$, so the larger solution is $2\\pi - 1.159 \\approx 5.124$)

**2)** The **smaller** solution of $\\sin\\theta = 0.28$ on $[0, 2\\pi)$: $\\theta \\approx \\,?$ (e.g., for $\\sin\\theta = 0.4$: $\\arcsin 0.4 \\approx 0.412$)

**3)** The **larger** solution of $\\tan\\theta = 0.75$ on $[0, 2\\pi)$: $\\theta \\approx \\,?$ (e.g., for $\\tan\\theta = 2$: $\\arctan 2 \\approx 1.107$, so the larger solution is $1.107 + \\pi \\approx 4.249$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.356', '0.284', '3.785'],
        hint1: '$\\arccos(0.6) \\approx 0.927$; the other solution is $2\\pi - 0.927$.',
        hint2: '$\\arcsin(0.28) \\approx 0.2838$ is already the Quadrant I solution; the other one is $\\pi - 0.284 \\approx 2.858$.',
        hint3: '$\\arctan(0.75) \\approx 0.6435$; add $\\pi$ for the Quadrant III solution.',
        explanation: '1) $2\\pi - 0.927 \\approx 5.356$. 2) $\\arcsin 0.28 \\approx 0.284$ (the larger one is $2.858$). 3) $0.644 + \\pi \\approx 3.785$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**From One Solution to All of Them** 🔽

You are solving $\\cos\\theta = -0.3$ and your calculator gives $\\arccos(-0.3) \\approx 1.875$.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The angle $1.875$ lies in Quadrant',
            options: ['I', 'II', 'III', 'IV']
          },
          {
            label: 'The other solution on $[0, 2\\pi)$ is',
            options: ['$2\\pi - 1.875 \\approx 4.408$', '$\\pi - 1.875 \\approx 1.267$', '$1.875 + \\pi \\approx 5.017$', '$-1.875$']
          },
          {
            label: 'All solutions are given by',
            options: ['$\\theta = \\pm 1.875 + 2\\pi n$', '$\\theta = 1.875 + \\pi n$', '$\\theta = 1.875 + 2\\pi n$ only', '$\\theta = \\pm 1.875 + \\pi n$']
          },
          {
            label: 'If the value had been $\\cos\\theta = -0.3$ with $\\theta$ required in $[\\pi, 2\\pi]$, the answer would be',
            options: ['$\\approx 4.408$', '$\\approx 1.875$', '$\\approx 1.267$', 'No solution']
          }
        ],
        correctAnswers: ['II', '$2\\pi - 1.875 \\approx 4.408$', '$\\theta = \\pm 1.875 + 2\\pi n$', '$\\approx 4.408$'],
        hint1: '$\\frac{\\pi}{2} \\approx 1.571 < 1.875 < 3.142 \\approx \\pi$.',
        hint2: 'Cosine is negative in Quadrants II and III; the Quadrant III partner is the reflection across the $x$-axis, $2\\pi - \\theta_1$.',
        hint3: 'Cosine repeats every $2\\pi$ and is even, so both $\\theta_1$ and $-\\theta_1$ generate solutions.',
        explanation: '$1.875$ is between $\\frac{\\pi}{2}$ and $\\pi$: Quadrant II. The reflection $2\\pi - 1.875 \\approx 4.408$ is the Quadrant III solution. All solutions: $\\pm 1.875 + 2\\pi n$. Only $4.408$ lies in $[\\pi, 2\\pi]$.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'To two decimal places, $\\arctan(-1.5) \\approx -0.98$. What are all solutions of $\\tan\\theta = -1.5$ on $[0, 2\\pi)$?',
            options: [
              '$\\theta \\approx 2.16$ and $5.30$',
              '$\\theta \\approx 0.98$ and $4.12$',
              '$\\theta \\approx 2.16$ only',
              '$\\theta \\approx 5.30$ and $0.98$'
            ],
            correctAnswer: 0,
            explanation: 'Add $\\pi$ to the calculator value to reach the interval: $-0.98 + \\pi \\approx 2.16$ (Quadrant II), then add $\\pi$ again: $5.30$ (Quadrant IV). Tangent is negative in exactly those quadrants. $0.98$ and $4.12$ solve $\\tan\\theta = +1.5$.'
          },
          {
            question: 'How many solutions does $\\sin\\theta = 0.95$ have on $[0, 4\\pi)$?',
            options: [
              '$1$',
              '$2$',
              '$4$',
              '$8$'
            ],
            correctAnswer: 2,
            explanation: 'On one turn, sine equals $0.95$ twice (in Quadrants I and II); the interval $[0, 4\\pi)$ holds two full turns, so there are $4$ solutions. The inverse gives only the first of them.'
          }
        ]
      }
    }
  ]
};
