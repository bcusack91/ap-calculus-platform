import { sfModelGraph } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart4Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf4-intro',
      type: 'text' as const,
      content: `
# 🛠️ Sinusoidal Functions and Modeling

**Part 4 of 7 — Building a Model From a Graph, a Table or a Context**

Tides, temperatures, Ferris wheels, daylight hours and springs all repeat, so a **sinusoidal model** fits them. FRQ 3 on the AP exam ("Modeling a Periodic Context") gives you a graph, a table or a description and asks for the model. The recipe is always the same:

| Step | Find | From |
|:-----|:-----|:-----|
| 1 | **max** and **min** values | the graph, the table, or the context |
| 2 | amplitude $\\lvert a \\rvert = \\frac{\\text{max} - \\text{min}}{2}$ | step 1 |
| 3 | midline $d = \\frac{\\text{max} + \\text{min}}{2}$ | step 1 |
| 4 | period $P$, then $b = \\frac{2\\pi}{P}$ | time between consecutive maxima, or $2\\times$ (max to next min), or $4\\times$ (max to next midline) |
| 5 | choose sine or cosine, the sign of $a$, and the shift $c$ | which feature happens at a known time |

### Choosing the function and the phase

| You know the time of… | Use |
|:----------------------|:----|
| a maximum, at $t = c$ | $a\\cos(b(t - c)) + d$, $a > 0$ |
| a minimum, at $t = c$ | $a\\cos(b(t - c)) + d$, $a < 0$ (or $+a\\cos$ with $c$ moved by half a period) |
| the midline, going up, at $t = c$ | $a\\sin(b(t - c)) + d$, $a > 0$ |
| the midline, going down, at $t = c$ | $a\\sin(b(t - c)) + d$, $a < 0$ |

> **Always check** the finished model at a known point before moving on.
      `
    },
    {
      id: 'sf4-graph',
      type: 'text' as const,
      figure: sfModelGraph,
      content: `
## 📝 Worked Example 1: From a Graph

The graph shows the water depth $h$ (feet) at a dock, $t$ hours after midnight, with maximum points $(3, 14)$, $(15, 14)$ and minimum points $(9, 2)$, $(21, 2)$.

| Step | Work | Result |
|:-----|:-----|:-------|
| Amplitude | $\\frac{14 - 2}{2}$ | $6$ |
| Midline | $\\frac{14 + 2}{2}$ | $d = 8$ |
| Period | maxima at $t = 3$ and $t = 15$ | $P = 12$, so $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$ |
| Function | a **maximum** is known, at $t = 3$ | positive cosine, $c = 3$ |

$$\\boxed{h(t) = 6\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right) + 8}$$

**Check:** $h(9) = 6\\cos\\left(\\frac{\\pi}{6} \\cdot 6\\right) + 8 = 6\\cos\\pi + 8 = 2$ ✓

Equivalent correct answers: $-6\\cos\\left(\\frac{\\pi}{6}(t - 9)\\right) + 8$ (started at the minimum) and $6\\sin\\left(\\frac{\\pi}{6}t\\right) + 8$ (the graph crosses the midline going up at $t = 0$, a quarter period before the maximum).
      `
    },
    {
      id: 'sf4-table',
      type: 'text' as const,
      content: `
## 📋 Worked Example 2: From a Table

A patient's blood pressure $B$ (mm Hg) is recorded every $0.3$ s:

| $t$ (s) | $0$ | $0.3$ | $0.6$ | $0.9$ | $1.2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $B(t)$ | $100$ | $80$ | $100$ | $120$ | $100$ |

| Step | Work | Result |
|:-----|:-----|:-------|
| Max / min | $120$ and $80$ | amplitude $20$, midline $d = 100$ |
| Period | the minimum at $t = 0.3$ and the maximum at $t = 0.9$ are half a period apart | $P = 2(0.9 - 0.3) = 1.2$, so $b = \\frac{2\\pi}{1.2} = \\frac{5\\pi}{3}$ |
| Function | at $t = 0$ the value is on the midline and the next value is **lower** | negative sine, $c = 0$ |

$$\\boxed{B(t) = -20\\sin\\left(\\frac{5\\pi}{3}t\\right) + 100}$$

**Check:** $B(0.3) = -20\\sin\\left(\\frac{5\\pi}{3} \\cdot 0.3\\right) + 100 = -20\\sin\\frac{\\pi}{2} + 100 = 80$ ✓

> 💡 A table of equally spaced values lets you read the period directly: the values return to $100$ at $t = 1.2$ after passing both the minimum and the maximum, so one full cycle is $1.2$ s. (A cosine form also works: $-20\\cos\\left(\\frac{5\\pi}{3}(t - 0.3)\\right) + 100$, started at the minimum.)
      `
    },
    {
      id: 'sf4-context',
      type: 'text' as const,
      content: `
## 🗣️ Worked Example 3: From a Verbal Context

> **A city's temperature varies sinusoidally over a day. The low is $40^\\circ$F at 4 a.m. and the high is $70^\\circ$F at 4 p.m. Model the temperature $T$, in degrees Fahrenheit, $t$ hours after midnight.**

| Step | Work | Result |
|:-----|:-----|:-------|
| Amplitude | $\\frac{70 - 40}{2}$ | $15$ |
| Midline | $\\frac{70 + 40}{2}$ | $55$ |
| Period | low to high is half a day: $16 - 4 = 12$ h, so $P = 24$ | $b = \\frac{2\\pi}{24} = \\frac{\\pi}{12}$ |
| Function | a **minimum** at $t = 4$ | negative cosine, $c = 4$ |

$$\\boxed{T(t) = -15\\cos\\left(\\frac{\\pi}{12}(t - 4)\\right) + 55}$$

**Check:** $T(16) = -15\\cos\\left(\\frac{\\pi}{12} \\cdot 12\\right) + 55 = -15(-1) + 55 = 70$ ✓

> ⚠️ **Do not drop the phase.** Writing $15\\sin\\left(\\frac{\\pi}{12}t\\right) + 55$ would put the midline at midnight and the high at 6 a.m. The context says where the extremes are; the model must put them there.

### A Ferris wheel in words

> **A wheel of radius $20$ m has its center $22$ m above the ground and turns once every $40$ s. A rider boards at the lowest point at $t = 0$.**

Lowest point $22 - 20 = 2$ m, highest $42$ m, midline $22$, amplitude $20$, period $40$ so $b = \\frac{\\pi}{20}$, minimum at $t = 0$:

$$h(t) = -20\\cos\\left(\\frac{\\pi}{20}t\\right) + 22$$

Here the parameters have meaning: $22$ m is the center height, $20$ m is the radius, and $40$ s is the time per rotation.
      `
    },
    {
      id: 'sf4-mcq',
      type: 'multiple-choice' as const,
      figure: sfModelGraph,
      content: `
**Use the graph above** (the dock from Worked Example 1). 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which function models the depth?',
            options: [
              '$h(t) = 6\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right) + 8$',
              '$h(t) = 6\\cos\\left(\\frac{\\pi}{12}(t - 3)\\right) + 8$',
              '$h(t) = 12\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right) + 8$',
              '$h(t) = 6\\cos\\left(\\frac{\\pi}{6}(t - 9)\\right) + 8$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $6$, midline $8$, period $12$ so $b = \\frac{\\pi}{6}$, and a positive cosine shifted right $3$ puts the maximum at $t = 3$. Using $\\frac{\\pi}{12}$ gives a period of $24$, $12$ is the full max-to-min height, and $t - 9$ with a positive $6$ puts a maximum at $t = 9$, where the graph has its minimum.'
          },
          {
            question: 'According to the graph, how much time passes between one high tide and the next?',
            options: [
              '$12$ hours',
              '$6$ hours',
              '$24$ hours',
              '$3$ hours'
            ],
            correctAnswer: 0,
            explanation: 'Consecutive maxima are at $t = 3$ and $t = 15$, so the period is $12$ hours. Six hours is the time from a high to the next low (half a period), and $3$ is just the time of the first high.'
          },
          {
            question: 'What is the depth at midnight, $t = 0$?',
            options: [
              '$8$ ft',
              '$14$ ft',
              '$2$ ft',
              '$11$ ft'
            ],
            correctAnswer: 0,
            explanation: 'Midnight is a quarter period ($3$ h) before the maximum at $t = 3$, so the water is on its midline, $8$ ft: $h(0) = 6\\cos\\left(-\\frac{\\pi}{2}\\right) + 8 = 8$. The values $14$ and $2$ are the extremes, and $11$ is halfway between the midline and the maximum, which happens at $t = 1$, not $t = 0$.'
          }
        ]
      }
    },
    {
      id: 'sf4-input',
      type: 'input-boxes' as const,
      content: `
**Build the Model** 🧮

A weight on a spring bobs between $10$ cm and $30$ cm above a table, completing one full cycle every $4$ seconds. At $t = 0$ it is at its **lowest** point. Model its height with $h(t) = a\\cos(bt) + d$. Write $\\pi$ as \`pi\` (e.g. \`pi/3\`).

**1)** What is the amplitude? (e.g., between $4$ and $16$ cm: amplitude $6$)

**2)** What is $b$? (e.g., a cycle of $6$ s gives $b = \\frac{2\\pi}{6}$, typed \`pi/3\`)

**3)** What is the height at $t = 1$ s? (e.g., for $-6\\cos\\left(\\frac{\\pi}{3}t\\right) + 10$ at $t = 1.5$: $-6\\cos\\frac{\\pi}{2} + 10 = 10$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', 'pi/2', '20'],
        hint1: 'Amplitude $= \\frac{30 - 10}{2}$.',
        hint2: '$b = \\frac{2\\pi}{P}$ with $P = 4$.',
        hint3: 'The model is $h(t) = -10\\cos\\left(\\frac{\\pi}{2}t\\right) + 20$ (negative cosine: it starts at the minimum). At $t = 1$ the inside is $\\frac{\\pi}{2}$.',
        explanation: '1) Amplitude $10$. 2) $b = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. 3) $h(1) = -10\\cos\\frac{\\pi}{2} + 20 = 20$ cm: one quarter period after the minimum the weight is at the midline.'
      }
    },
    {
      id: 'sf4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Modeling Decisions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A quantity is at its minimum at $t = 2$. The simplest model uses',
            options: ['a negative cosine shifted right $2$', 'a positive cosine shifted right $2$', 'a positive sine shifted right $2$', 'a negative sine with no shift']
          },
          {
            label: 'A quantity is at its average value and falling at $t = 0$. The simplest model uses',
            options: ['a negative sine with no shift', 'a positive sine with no shift', 'a positive cosine with no shift', 'a negative cosine with no shift']
          },
          {
            label: 'If a maximum occurs at $t = 1$ and the next minimum at $t = 6$, the period is',
            options: ['$10$', '$5$', '$7$', '$2.5$']
          }
        ],
        correctAnswers: ['a negative cosine shifted right $2$', 'a negative sine with no shift', '$10$'],
        hint1: 'Cosine starts at an extreme; a negative sign makes that extreme a minimum.',
        hint2: 'Sine starts on the midline; the sign of $a$ decides whether it goes up or down first.',
        hint3: 'Max to the next min is half a cycle.',
        explanation: 'A minimum at $t = 2$: $-\\lvert a \\rvert\\cos(b(t - 2)) + d$. Midline and falling at $t = 0$: $-\\lvert a \\rvert\\sin(bt) + d$. Max to next min is $5$ units, half a period, so $P = 10$.'
      }
    },
    {
      id: 'sf4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅

The table below is for the second question. A sinusoidal function $f$ has these values:

| $t$ | $0$ | $2$ | $4$ | $6$ | $8$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(t)$ | $5$ | $1$ | $5$ | $9$ | $5$ |
      `,
      exercise: {
        questions: [
          {
            question: 'A city has between $9$ and $15$ hours of daylight over a $365$-day year, with the most daylight on day $172$. Which function models the daylight $D$, in hours, on day $t$?',
            options: [
              '$D(t) = 3\\cos\\left(\\frac{2\\pi}{365}(t - 172)\\right) + 12$',
              '$D(t) = 3\\sin\\left(\\frac{2\\pi}{365}(t - 172)\\right) + 12$',
              '$D(t) = 6\\cos\\left(\\frac{2\\pi}{365}(t - 172)\\right) + 12$',
              '$D(t) = 3\\cos\\left(\\frac{\\pi}{365}(t - 172)\\right) + 12$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $\\frac{15 - 9}{2} = 3$, midline $12$, period $365$ so $b = \\frac{2\\pi}{365}$, and a maximum on day $172$ calls for a positive cosine shifted right $172$. The sine version is on its midline on day $172$, $6$ is the full range, and $\\frac{\\pi}{365}$ gives a period of $730$ days.'
          },
          {
            question: 'Using the table above, which equation could define $f$?',
            options: [
              '$f(t) = -4\\sin\\left(\\frac{\\pi}{4}t\\right) + 5$',
              '$f(t) = 4\\sin\\left(\\frac{\\pi}{4}t\\right) + 5$',
              '$f(t) = -4\\cos\\left(\\frac{\\pi}{4}t\\right) + 5$',
              '$f(t) = -4\\sin\\left(\\frac{\\pi}{8}t\\right) + 5$'
            ],
            correctAnswer: 0,
            explanation: 'Max $9$ and min $1$ give amplitude $4$ and midline $5$; the values return to $5$ at $t = 8$ after passing the minimum and the maximum, so the period is $8$ and $b = \\frac{\\pi}{4}$. At $t = 0$ the value is on the midline and then falls, which is a negative sine. A positive sine would rise first, a negative cosine would start at the minimum $1$, and $\\frac{\\pi}{8}$ gives period $16$.'
          }
        ]
      }
    }
  ]
}
