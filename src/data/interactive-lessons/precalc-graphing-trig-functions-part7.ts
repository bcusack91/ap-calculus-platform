import { sfFrqGraph, sfScatterTable } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart7Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf7-intro',
      type: 'text' as const,
      content: `
# 🏆 Sinusoidal Functions and Modeling

**Part 7 of 7 — FRQ Q3 Workshop and Review**

Free-response question 3, **Modeling a Periodic Context**, is answered **without a calculator**. It gives a periodic situation as a graph, a table or a description and typically asks you to:

| Part | Task | Skills |
|:----:|:-----|:-------|
| (A) | write a sinusoidal model | amplitude, midline, period, sine vs cosine, phase |
| (B) | use the model: find a value, or the times when the quantity equals or exceeds a level | special-angle values, symmetry, the period |
| (C) | describe how the quantity is changing over an interval, or interpret a parameter with units | increasing/decreasing, concavity, average rate of change |

### What earns the points

- **Show the measurements** ($\\text{max}$, $\\text{min}$, amplitude, midline, period) before writing the model.
- **Give a reason** for sine vs cosine and for the sign of $a$: "a maximum occurs at $t = 2$, so use a positive cosine shifted right $2$."
- **Check** one known point in the finished model.
- Use **exact values** ($\\frac{\\pi}{4}$, $\\frac{2}{3}$) and **units** in interpretations ("feet per hour").
- When asked for an interval, give **both** endpoints and say whether the quantity is above or below the level there.
      `
    },
    {
      id: 'sf7-frq',
      type: 'text' as const,
      figure: sfFrqGraph,
      content: `
## 📝 Worked FRQ: From a Graph

> The graph shows a sinusoidal function $g$ with maximum points $(2, 9)$ and $(10, 9)$ and a minimum point $(6, 1)$.
>
> **(A)** Write an equation for $g(t)$.
> **(B)** Find $g(4)$.
> **(C)** Find all $t$ in $[0, 8]$ for which $g(t) > 7$.
> **(D)** Find the average rate of change of $g$ on $[2, 6]$ and describe how $g$ changes on that interval.

**(A)** Amplitude $\\frac{9 - 1}{2} = 4$; midline $\\frac{9 + 1}{2} = 5$; period $10 - 2 = 8$, so $b = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$. A maximum occurs at $t = 2$, so use a positive cosine shifted right $2$:

$$g(t) = 4\\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) + 5 \\qquad \\text{Check: } g(6) = 4\\cos\\pi + 5 = 1 \\;✓$$

**(B)** $g(4) = 4\\cos\\left(\\frac{\\pi}{4} \\cdot 2\\right) + 5 = 4\\cos\\frac{\\pi}{2} + 5 = 5$ (the midline, a quarter period after the maximum).

**(C)** $4\\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) + 5 > 7 \\iff \\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) > \\frac{1}{2}$. Cosine exceeds $\\frac{1}{2}$ for angles within $\\frac{\\pi}{3}$ of $0$: $-\\frac{\\pi}{3} < \\frac{\\pi}{4}(t - 2) < \\frac{\\pi}{3}$, so $-\\frac{4}{3} < t - 2 < \\frac{4}{3}$ and

$$\\frac{2}{3} < t < \\frac{10}{3}.$$

(The next such interval, $\\frac{26}{3} < t < \\frac{34}{3}$, lies outside $[0, 8]$.)

**(D)** $\\dfrac{g(6) - g(2)}{6 - 2} = \\dfrac{1 - 9}{4} = -2$ units per unit of $t$. On $[2, 6]$, $g$ is **decreasing** throughout, from its maximum to its minimum: it is concave down on $(2, 4)$ (above the midline) and concave up on $(4, 6)$ (below the midline), so it falls fastest at $t = 4$.
      `
    },
    {
      id: 'sf7-data',
      type: 'text' as const,
      figure: sfScatterTable,
      content: `
## 📊 From Data: Average Monthly Temperature

| Month $m$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ ($^\\circ$F) | 32 | 35 | 44 | 56 | 68 | 77 | 80 | 77 | 68 | 56 | 44 | 35 |

Real data are never a perfect sinusoid, but the recipe is the same, using the **extreme values** in the table:

| Step | Work | Result |
|:-----|:-----|:-------|
| Amplitude | $\\frac{80 - 32}{2}$ | $24$ |
| Midline | $\\frac{80 + 32}{2}$ | $56$ |
| Period | one year, and the min (month 1) to the max (month 7) is half a cycle: $2 \\cdot 6 = 12$ | $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$ |
| Function | a maximum in month $7$ | positive cosine, $c = 7$ |

$$T(m) = 24\\cos\\left(\\frac{\\pi}{6}(m - 7)\\right) + 56$$

**Check against the data:** $T(4) = 24\\cos\\left(-\\frac{\\pi}{2}\\right) + 56 = 56$ ✓ and $T(3) = 24\\cos\\left(-\\frac{2\\pi}{3}\\right) + 56 = 24\\left(-\\frac{1}{2}\\right) + 56 = 44$ ✓. The curve in the figure is this model; it passes within a degree of every point.

> On the calculator section of the exam a **sinusoidal regression** finds $a, b, c, d$ that best fit all the points at once; its output is close to the values above. On the no-calculator FRQ, the max/min method is what is expected.
      `
    },
    {
      id: 'sf7-mcq',
      type: 'multiple-choice' as const,
      figure: sfFrqGraph,
      content: `
**Use the graph of $g$ above.** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation defines $g$?',
            options: [
              '$g(t) = 4\\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) + 5$',
              '$g(t) = 4\\sin\\left(\\frac{\\pi}{4}(t - 2)\\right) + 5$',
              '$g(t) = 4\\cos\\left(\\frac{\\pi}{8}(t - 2)\\right) + 5$',
              '$g(t) = 8\\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) + 1$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $4$, midline $5$, period $8$ (maxima at $t = 2$ and $t = 10$) so $b = \\frac{\\pi}{4}$, and a positive cosine shifted right $2$ puts the maximum at $t = 2$. The sine version is on its midline at $t = 2$, $\\frac{\\pi}{8}$ gives period $16$, and $8\\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) + 1$ has amplitude $8$ with midline $1$.'
          },
          {
            question: 'What is $g(14)$?',
            options: [
              '$1$',
              '$9$',
              '$5$',
              '$7$'
            ],
            correctAnswer: 0,
            explanation: 'The period is $8$, so $g(14) = g(14 - 8) = g(6) = 1$, the minimum. The value $9$ is the maximum (at $t = 2, 10, 18$), $5$ is the midline (at $t = 4, 8, 12$), and $7$ occurs between them.'
          },
          {
            question: 'Which statement describes $g$ on the interval $(2, 6)$?',
            options: [
              'Decreasing on the whole interval',
              'Increasing on the whole interval',
              'Decreasing, then increasing',
              'Increasing, then decreasing'
            ],
            correctAnswer: 0,
            explanation: 'From the maximum at $t = 2$ to the minimum at $t = 6$ the graph only goes down. It is concave down and then concave up, but the direction never changes; a change of direction happens only at a maximum or minimum.'
          }
        ]
      }
    },
    {
      id: 'sf7-input',
      type: 'input-boxes' as const,
      content: `
**Use the Temperature Model** 🧮

Use $T(m) = 24\\cos\\left(\\dfrac{\\pi}{6}(m - 7)\\right) + 56$ from the data example.

**1)** What is $T(10)$? (e.g., $T(1) = 24\\cos(-\\pi) + 56 = -24 + 56 = 32$)

**2)** What is the amplitude of the model, in degrees? (e.g., $5\\cos(\\ldots) + 20$ has amplitude $5$)

**3)** What is $T(3)$? (e.g., $T(5) = 24\\cos\\left(-\\frac{\\pi}{3}\\right) + 56 = 24 \\cdot \\frac{1}{2} + 56 = 68$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['56', '24', '44'],
        hint1: 'At $m = 10$ the inside is $\\frac{\\pi}{6} \\cdot 3 = \\frac{\\pi}{2}$, where cosine is $0$.',
        hint2: 'Amplitude $= \\lvert a \\rvert$.',
        hint3: 'At $m = 3$ the inside is $\\frac{\\pi}{6}(3 - 7) = -\\frac{2\\pi}{3}$, and $\\cos\\left(-\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$.',
        explanation: '1) $T(10) = 24\\cos\\frac{\\pi}{2} + 56 = 56$ (October is on the midline). 2) $24$ degrees. 3) $T(3) = 24\\left(-\\frac{1}{2}\\right) + 56 = 44$, matching the March data value.'
      }
    },
    {
      id: 'sf7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**FRQ Reasoning** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A model uses cosine rather than sine because',
            options: ['the known point is a maximum or minimum', 'the period is a whole number', 'the amplitude is positive', 'the midline is not zero']
          },
          {
            label: 'In a tide model, the midline value represents',
            options: ['the average water depth', 'the depth at high tide', 'half the tidal range', 'the time between high tides']
          },
          {
            label: 'A model has period $12$ and a maximum at $t = 3$. Its next minimum is at $t =$',
            options: ['$9$', '$15$', '$6$', '$12$']
          }
        ],
        correctAnswers: ['the known point is a maximum or minimum', 'the average water depth', '$9$'],
        hint1: 'Cosine starts its cycle at an extreme value; sine starts on the midline.',
        hint2: 'The midline is halfway between the maximum and the minimum.',
        hint3: 'A maximum and the next minimum are half a period apart.',
        explanation: 'Cosine is the natural choice when a maximum or minimum time is known. The midline $\\frac{\\text{max} + \\text{min}}{2}$ is the average level. Half of $12$ is $6$, so the minimum follows the maximum at $t = 3 + 6 = 9$.'
      }
    },
    {
      id: 'sf7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A sinusoidal function has consecutive maximum $(1, 20)$ and minimum $(4, 8)$. On which interval in $[1, 7]$ is the function increasing?',
            options: [
              '$(4, 7)$',
              '$(1, 4)$',
              '$(1, 7)$',
              '$(2.5, 5.5)$'
            ],
            correctAnswer: 0,
            explanation: 'Max to the next min is half a period, so the period is $6$ and the next maximum is at $t = 7$. The function decreases from the maximum at $1$ to the minimum at $4$, then increases from $4$ to the maximum at $7$. The interval $(2.5, 5.5)$ is where the graph is below its midline, which concerns concavity, not direction.'
          },
          {
            question: 'Let $g(t) = 4\\cos\\left(\\dfrac{\\pi}{4}(t - 2)\\right) + 5$. For which $t$ in $[0, 8]$ is $g(t) < 3$?',
            options: [
              '$\\frac{14}{3} < t < \\frac{22}{3}$',
              '$\\frac{2}{3} < t < \\frac{10}{3}$',
              '$6 < t < 8$',
              '$4 < t < 8$'
            ],
            correctAnswer: 0,
            explanation: '$g(t) < 3$ means $\\cos\\left(\\frac{\\pi}{4}(t - 2)\\right) < -\\frac{1}{2}$, which holds for $\\frac{2\\pi}{3} < \\frac{\\pi}{4}(t - 2) < \\frac{4\\pi}{3}$, so $\\frac{8}{3} < t - 2 < \\frac{16}{3}$ and $\\frac{14}{3} < t < \\frac{22}{3}$, centered on the minimum at $t = 6$. The interval $\\frac{2}{3} < t < \\frac{10}{3}$ is where $g > 7$, and $4 < t < 8$ is where $g$ is below its midline $5$.'
          }
        ]
      }
    },
    {
      id: 'sf7-completion',
      type: 'text' as const,
      content: `
### Sinusoidal Functions and Modeling — Complete! 🎓

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Sine and cosine graphs | ✅ |
| 2 | Amplitude, midline, period and frequency | ✅ |
| 3 | Transformations and phase shift | ✅ |
| 4 | Building a model from a graph, a table or a context | ✅ |
| 5 | Using the model: predict, interpret and solve | ✅ |
| 6 | The tangent function | ✅ |
| 7 | FRQ Q3 workshop and review | ✅ |

> **Key Fact:** max and min give the amplitude and midline, the time between them gives the period, and the feature you know at a given time decides sine or cosine, the sign of $a$, and the shift. Then check a point.
      `
    }
  ]
}
