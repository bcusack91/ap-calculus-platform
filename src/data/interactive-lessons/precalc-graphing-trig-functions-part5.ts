import { sfUsingModel } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart5Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf5-intro',
      type: 'text' as const,
      figure: sfUsingModel,
      content: `
# 🎯 Sinusoidal Functions and Modeling

**Part 5 of 7 — Using the Model: Predict, Interpret and Solve**

Once a model is built, FRQ 3 asks you to **use** it: predict a value, interpret a parameter in context (with units), describe how the quantity is changing, and find when the quantity is above or below some level.

The graph above shows a Ferris-wheel rider's height

$$h(t) = 22 - 20\\cos\\left(\\frac{\\pi}{10}t\\right) \\qquad (h \\text{ in meters}, t \\text{ in seconds}, 0 \\le t \\le 40).$$

### Interpreting the parameters

| Parameter | Value | Meaning in context |
|:----------|:------|:-------------------|
| midline $d = 22$ | $22$ m | the height of the wheel's center above the ground |
| amplitude $\\lvert a \\rvert = 20$ | $20$ m | the radius of the wheel |
| period $\\frac{2\\pi}{\\pi/10} = 20$ | $20$ s | the time for one full rotation |
| $a = -20 < 0$ | — | the ride starts at the **bottom**, $h(0) = 2$ m |

### Predicting values

| Question | Work | Answer |
|:---------|:-----|:-------|
| Height at $t = 5$ s | $22 - 20\\cos\\frac{\\pi}{2} = 22 - 0$ | $22$ m (midline, rising) |
| Height at $t = 10$ s | $22 - 20\\cos\\pi = 22 + 20$ | $42$ m (the top) |
| Height at $t = 35$ s | $22 - 20\\cos\\frac{7\\pi}{2} = 22 - 20 \\cdot 0$ | $22$ m (midline, falling) |
      `
    },
    {
      id: 'sf5-rate',
      type: 'text' as const,
      content: `
## 📉 How Fast Is It Changing?

The **average rate of change** of $h$ over an interval is the slope of the secant line, exactly as in Unit 1:

$$\\text{AROC on } [t_1, t_2] = \\frac{h(t_2) - h(t_1)}{t_2 - t_1}$$

| Interval | Work | AROC | Meaning |
|:---------|:-----|:-----|:--------|
| $[0, 5]$ | $\\frac{22 - 2}{5}$ | $4$ m/s | rising, from the bottom to the midline |
| $[5, 10]$ | $\\frac{42 - 22}{5}$ | $4$ m/s | rising, from the midline to the top |
| $[10, 20]$ | $\\frac{2 - 42}{10}$ | $-4$ m/s | falling, top to bottom |
| $[0, 20]$ | $\\frac{2 - 2}{20}$ | $0$ m/s | one full period: back where it started |

Over a whole period the average rate of change is always $0$. Within a period, the model tells you more than the average:

> **Where is the change fastest?** At the **midline crossings** ($t = 5$ and $t = 15$), where the graph is steepest. At the maximum and minimum ($t = 10$, $t = 0$, $t = 20$) the rider is momentarily moving neither up nor down.

> **"Increasing at a decreasing rate."** On $(5, 10)$ the height is increasing (toward the top) but the graph is concave down, so the rise slows as the rider approaches the top. On $(0, 5)$ it is increasing at an increasing rate (concave up).
      `
    },
    {
      id: 'sf5-solve',
      type: 'text' as const,
      content: `
## ⏱️ When Is the Quantity Above (or Below) a Value?

> **During the first rotation, when is the rider higher than $32$ m?**

Set up the inequality and isolate the trig function:

$$22 - 20\\cos\\left(\\tfrac{\\pi}{10}t\\right) > 32 \\;\\Rightarrow\\; -20\\cos\\left(\\tfrac{\\pi}{10}t\\right) > 10 \\;\\Rightarrow\\; \\cos\\left(\\tfrac{\\pi}{10}t\\right) < -\\tfrac{1}{2}$$

| Step | Work |
|:-----|:-----|
| Solve the **equality** first | $\\cos\\theta = -\\frac{1}{2}$ at $\\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$ (Quadrants II and III) |
| Where is $\\cos\\theta$ **below** $-\\frac{1}{2}$? | between those two angles: $\\frac{2\\pi}{3} < \\theta < \\frac{4\\pi}{3}$ |
| Translate back to $t$ | $\\frac{2\\pi}{3} < \\frac{\\pi}{10}t < \\frac{4\\pi}{3} \\;\\Rightarrow\\; \\frac{20}{3} < t < \\frac{40}{3}$ |

So the rider is above $32$ m for $\\frac{20}{3} < t < \\frac{40}{3}$ seconds (about $6.7$ s to $13.3$ s), the shaded stretch on the graph, and again one period later, $\\frac{80}{3} < t < \\frac{100}{3}$.

> **Method:** solve the equation at the boundary, use the unit circle (or the graph's symmetry about a maximum) to get **both** boundary times in one cycle, decide which side of the boundary satisfies the inequality, then add the period for later cycles. If the value is not a special angle, the first boundary comes from an inverse function ($\\theta = \\arccos(\\ldots)$) and the second from symmetry; see the inverse-trig lesson.
      `
    },
    {
      id: 'sf5-mcq',
      type: 'multiple-choice' as const,
      figure: sfUsingModel,
      content: `
**Use the graph and the model above**, $h(t) = 22 - 20\\cos\\left(\\frac{\\pi}{10}t\\right)$. 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For how many seconds during the first rotation ($0 \\le t \\le 20$) is the rider higher than $32$ m?',
            options: [
              '$\\frac{20}{3}$ s',
              '$\\frac{40}{3}$ s',
              '$10$ s',
              '$\\frac{10}{3}$ s'
            ],
            correctAnswer: 0,
            explanation: 'The rider is above $32$ m for $\\frac{20}{3} < t < \\frac{40}{3}$, an interval of length $\\frac{40}{3} - \\frac{20}{3} = \\frac{20}{3}$ s. The value $\\frac{40}{3}$ is the time the rider drops back below $32$ m, $10$ s is the time above the midline, and $\\frac{10}{3}$ is half the correct interval.'
          },
          {
            question: 'What is the average rate of change of $h$ on $[10, 20]$?',
            options: [
              '$-4$ m/s',
              '$4$ m/s',
              '$-2$ m/s',
              '$0$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$h(10) = 42$ and $h(20) = 2$, so the average rate of change is $\\frac{2 - 42}{10} = -4$ m/s: the rider descends from the top to the bottom. A positive $4$ is the rate on $[0, 10]$, and $0$ would be the average over a full period.'
          },
          {
            question: 'At which time in $[0, 20]$ is the height increasing most rapidly?',
            options: [
              '$t = 5$',
              '$t = 0$',
              '$t = 10$',
              '$t = 15$'
            ],
            correctAnswer: 0,
            explanation: 'A sinusoid changes fastest at its midline crossings. At $t = 5$ the rider passes the midline on the way up. At $t = 0$ and $t = 10$ the rider is at the bottom and the top, where the height momentarily stops changing, and at $t = 15$ the rider crosses the midline going down (decreasing most rapidly).'
          }
        ]
      }
    },
    {
      id: 'sf5-input',
      type: 'input-boxes' as const,
      content: `
**Use a Tide Model** 🧮

The depth of water at a dock is $D(t) = 7 + 3\\sin\\left(\\dfrac{\\pi}{6}(t - 2)\\right)$ feet, $t$ hours after midnight.

**1)** What is the maximum depth, in feet? (e.g., $5 + 2\\sin(\\ldots)$ has maximum $7$)

**2)** At what time $t$ after midnight does the depth **first** reach its maximum? (e.g., for $4\\sin\\left(\\frac{\\pi}{4}(t - 1)\\right) + 9$: $\\frac{\\pi}{4}(t - 1) = \\frac{\\pi}{2}$ gives $t = 3$)

**3)** What is the depth at $t = 8$? (e.g., at $t = 11$ the inside is $\\frac{\\pi}{6} \\cdot 9 = \\frac{3\\pi}{2}$, so $D(11) = 7 + 3(-1) = 4$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '5', '7'],
        hint1: 'Maximum $= d + \\lvert a \\rvert = 7 + 3$.',
        hint2: 'Sine is largest when its input is $\\frac{\\pi}{2}$: solve $\\frac{\\pi}{6}(t - 2) = \\frac{\\pi}{2}$.',
        hint3: 'At $t = 8$ the inside is $\\frac{\\pi}{6} \\cdot 6 = \\pi$, and $\\sin\\pi = 0$.',
        explanation: '1) $7 + 3 = 10$ ft. 2) $\\frac{\\pi}{6}(t - 2) = \\frac{\\pi}{2}$ gives $t - 2 = 3$, so $t = 5$ (5 a.m.). 3) $D(8) = 7 + 3\\sin\\pi = 7$ ft, the midline, half a period after $t = 2$.'
      }
    },
    {
      id: 'sf5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpreting a Model** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $h(t) = 22 - 20\\cos\\left(\\frac{\\pi}{10}t\\right)$, the number $22$ represents',
            options: ['the height of the wheel\'s center, in meters', 'the radius of the wheel, in meters', 'the time for one rotation, in seconds', 'the starting height of the rider, in meters']
          },
          {
            label: 'The average rate of change of a sinusoidal function over one full period is',
            options: ['$0$', 'its amplitude', 'its frequency', 'twice its amplitude']
          },
          {
            label: 'A sinusoidal quantity is changing most rapidly when it is',
            options: ['crossing its midline', 'at its maximum', 'at its minimum', 'halfway between the midline and the maximum']
          }
        ],
        correctAnswers: ['the height of the wheel\'s center, in meters', '$0$', 'crossing its midline'],
        hint1: 'The midline is the average height, and the rider circles around the center.',
        hint2: 'After one period the function returns to its starting value.',
        hint3: 'The graph is steepest at its points of inflection.',
        explanation: 'The midline $22$ is the center height; the amplitude $20$ is the radius; the period $20$ s is the rotation time; and the starting height is $h(0) = 2$ m. Over a full period $f(t + P) = f(t)$, so the average rate of change is $0$. The steepest points of a sinusoid are its midline crossings.'
      }
    },
    {
      id: 'sf5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅

Both questions use the temperature model from Part 4: $T(t) = 55 - 15\\cos\\left(\\dfrac{\\pi}{12}(t - 4)\\right)$ degrees Fahrenheit, $t$ hours after midnight, $0 \\le t \\le 24$.
      `,
      exercise: {
        questions: [
          {
            question: 'For which values of $t$ is the temperature above $62.5^\\circ$F?',
            options: [
              '$12 < t < 20$',
              '$8 < t < 16$',
              '$4 < t < 16$',
              '$10 < t < 22$'
            ],
            correctAnswer: 0,
            explanation: '$55 - 15\\cos(\\ldots) > 62.5$ means $\\cos\\left(\\frac{\\pi}{12}(t - 4)\\right) < -\\frac{1}{2}$, which holds for $\\frac{2\\pi}{3} < \\frac{\\pi}{12}(t - 4) < \\frac{4\\pi}{3}$, i.e. $8 < t - 4 < 16$, so $12 < t < 20$. The interval $8 < t < 16$ forgets to add back the shift of $4$, $4 < t < 16$ is where the temperature is rising, and $10 < t < 22$ is where it is above the midline $55$.'
          },
          {
            question: 'What is the average rate of change of $T$ on $[4, 10]$?',
            options: [
              '$2.5^\\circ$F per hour',
              '$5^\\circ$F per hour',
              '$15^\\circ$F per hour',
              '$-2.5^\\circ$F per hour'
            ],
            correctAnswer: 0,
            explanation: '$T(4) = 55 - 15 = 40$ and $T(10) = 55 - 15\\cos\\frac{\\pi}{2} = 55$, so the average rate of change is $\\frac{55 - 40}{6} = 2.5$ degrees per hour. The value $5$ divides by $3$ instead of $6$, $15$ is the change without dividing by the time, and the sign is positive because the temperature is rising from its 4 a.m. low.'
          }
        ]
      }
    }
  ]
}
