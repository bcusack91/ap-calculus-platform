import { sfReadGraph } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart2Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf2-intro',
      type: 'text' as const,
      content: `
# 📏 Sinusoidal Functions and Modeling

**Part 2 of 7 — Amplitude, Midline, Period and Frequency**

A **sinusoidal function** is any function whose graph is a stretched, reflected or slid copy of $y = \\sin x$. Every sinusoid can be written as

$$f(x) = a\\sin\\bigl(b(x - c)\\bigr) + d \\qquad\\text{or}\\qquad f(x) = a\\cos\\bigl(b(x - c)\\bigr) + d.$$

Its shape is fixed by four measurements, all readable from a graph:

| Measurement | How to read it from a graph | In the formula |
|:------------|:----------------------------|:---------------|
| **Midline** $y = d$ | the horizontal line halfway between max and min: $d = \\frac{\\text{max} + \\text{min}}{2}$ | $d$ |
| **Amplitude** | half the vertical distance from min to max: $\\frac{\\text{max} - \\text{min}}{2}$ | $\\lvert a \\rvert$ |
| **Period** | the horizontal distance between consecutive maxima (or $2\\times$ the max-to-next-min distance, or $4\\times$ the max-to-next-midline distance) | $\\frac{2\\pi}{\\lvert b \\rvert}$ |
| **Frequency** | the number of cycles per unit of $x$ | $\\frac{1}{\\text{period}} = \\frac{\\lvert b \\rvert}{2\\pi}$ |

AP vocabulary for the parameters: $a$ is a **vertical dilation** by a factor of $\\lvert a \\rvert$ (with a reflection over the midline when $a < 0$), $b$ is a **horizontal dilation** by a factor of $\\frac{1}{\\lvert b \\rvert}$, $c$ is a **horizontal translation**, and $d$ is a **vertical translation**.

> **Range:** a sinusoid takes every value from $d - \\lvert a \\rvert$ to $d + \\lvert a \\rvert$, and no others.
      `
    },
    {
      id: 'sf2-read',
      type: 'text' as const,
      figure: sfReadGraph,
      content: `
## 📝 Worked Example: Reading a Graph

The graph above shows a sinusoidal function $f$ with maximum points $(1, 5)$ and $(9, 5)$ and minimum points $(-3, -1)$ and $(5, -1)$.

| Step | Work | Result |
|:-----|:-----|:-------|
| Midline | $\\frac{5 + (-1)}{2}$ | $d = 2$ |
| Amplitude | $\\frac{5 - (-1)}{2}$ | $\\lvert a \\rvert = 3$ |
| Period | consecutive maxima at $x = 1$ and $x = 9$ | $P = 8$ |
| Frequency | $\\frac{1}{P}$ | $\\frac{1}{8}$ cycle per unit |
| $b$ | $\\frac{2\\pi}{P} = \\frac{2\\pi}{8}$ | $b = \\frac{\\pi}{4}$ |

A **cosine** starts its cycle at a maximum, so use the maximum at $x = 1$ as the start of the cycle: $c = 1$ and $a = +3$.

$$\\boxed{f(x) = 3\\cos\\left(\\frac{\\pi}{4}(x - 1)\\right) + 2}$$

**Check:** $f(5) = 3\\cos\\left(\\frac{\\pi}{4} \\cdot 4\\right) + 2 = 3\\cos\\pi + 2 = -1$ ✓ (the minimum).

The same graph has other correct equations: the midline crossing going **up** is at $x = -1$, so $f(x) = 3\\sin\\left(\\frac{\\pi}{4}(x + 1)\\right) + 2$ also works, and so does $-3\\cos\\left(\\frac{\\pi}{4}(x - 5)\\right) + 2$ (a negative cosine started at the minimum). On the exam any correct form earns credit.
      `
    },
    {
      id: 'sf2-equation',
      type: 'text' as const,
      content: `
## 🔍 Reading Features From an Equation

> **$y = 4 - 2\\sin\\left(\\frac{\\pi}{3}x\\right)$. Find the amplitude, midline, period, frequency, range, and the first positive $x$ where the maximum occurs.**

Rewrite in standard order first: $y = -2\\sin\\left(\\frac{\\pi}{3}x\\right) + 4$.

| Feature | Work | Result |
|:--------|:-----|:-------|
| Amplitude | $\\lvert a \\rvert = \\lvert -2 \\rvert$ | $2$ (the sign reflects, it does not shrink) |
| Midline | $y = d$ | $y = 4$ |
| Period | $\\frac{2\\pi}{\\lvert b \\rvert} = \\frac{2\\pi}{\\pi/3}$ | $6$ |
| Frequency | $\\frac{1}{6}$ | $\\frac{1}{6}$ cycle per unit |
| Range | $[4 - 2, 4 + 2]$ | $[2, 6]$ |
| First maximum | $-2\\sin(\\ldots)$ is largest when $\\sin\\left(\\frac{\\pi}{3}x\\right) = -1$, i.e. $\\frac{\\pi}{3}x = \\frac{3\\pi}{2}$ | $x = \\frac{9}{2}$ |

> ⚠️ Because $a < 0$, the graph starts at the midline going **down**, so the first quarter-period point $x = \\frac{3}{2}$ is the **minimum** $y = 2$, not the maximum.
      `
    },
    {
      id: 'sf2-mcq',
      type: 'multiple-choice' as const,
      figure: sfReadGraph,
      content: `
**Use the graph above.** $f$ is the sinusoidal function from the worked example. 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the frequency of $f$?',
            options: [
              '$\\frac{1}{8}$ cycle per unit',
              '$8$ cycles per unit',
              '$\\frac{\\pi}{4}$ cycle per unit',
              '$\\frac{1}{4}$ cycle per unit'
            ],
            correctAnswer: 0,
            explanation: 'Consecutive maxima are $8$ units apart, so the period is $8$ and the frequency is $\\frac{1}{8}$ cycle per unit. The value $8$ is the period itself, $\\frac{\\pi}{4}$ is $b$, and $\\frac{1}{4}$ comes from using the max-to-min distance $4$ as the period.'
          },
          {
            question: 'Which equation could define $f$?',
            options: [
              '$f(x) = 3\\cos\\left(\\frac{\\pi}{4}(x - 1)\\right) + 2$',
              '$f(x) = 3\\cos\\left(\\frac{\\pi}{8}(x - 1)\\right) + 2$',
              '$f(x) = 6\\cos\\left(\\frac{\\pi}{4}(x - 1)\\right) + 2$',
              '$f(x) = 3\\cos\\left(\\frac{\\pi}{4}(x + 1)\\right) + 2$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $3$, midline $2$, period $8$ so $b = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$, and a cosine shifted right $1$ puts a maximum at $x = 1$. Using $\\frac{\\pi}{8}$ gives period $16$, $6$ is the full max-to-min height rather than the amplitude, and $x + 1$ puts the maximum at $x = -1$, where the graph is actually on its midline.'
          }
        ]
      }
    },
    {
      id: 'sf2-input',
      type: 'input-boxes' as const,
      content: `
**Features From an Equation** 🧮

For $y = 5\\sin(2x) - 3$, give each value exactly (write $\\pi$ as \`pi\`).

**1)** The amplitude. (e.g., $y = -3\\cos x + 1$ has amplitude $3$)

**2)** The period. (e.g., $y = \\sin(4x)$ has period $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$, typed \`pi/2\`)

**3)** The maximum value. (e.g., $y = 2\\cos x + 7$ has maximum $7 + 2 = 9$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', 'pi', '2'],
        hint1: 'Amplitude $= \\lvert a \\rvert$.',
        hint2: 'Period $= \\frac{2\\pi}{\\lvert b \\rvert}$ with $b = 2$.',
        hint3: 'Maximum $= d + \\lvert a \\rvert = -3 + 5$.',
        explanation: '1) $\\lvert 5 \\rvert = 5$. 2) $\\frac{2\\pi}{2} = \\pi$. 3) $-3 + 5 = 2$ (and the minimum is $-3 - 5 = -8$).'
      }
    },
    {
      id: 'sf2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Period and Frequency** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The frequency of $y = \\cos\\left(\\frac{\\pi}{3}x\\right)$ is',
            options: ['$\\frac{1}{6}$ cycle per unit', '$6$ cycles per unit', '$\\frac{\\pi}{3}$ cycle per unit', '$3$ cycles per unit']
          },
          {
            label: 'For a sinusoid with period $10$, the horizontal distance from a maximum to the next minimum is',
            options: ['$5$', '$10$', '$2.5$', '$20$']
          },
          {
            label: 'Replacing $b$ by $\\frac{b}{2}$ in $y = \\sin(bx)$',
            options: ['doubles the period', 'halves the period', 'doubles the amplitude', 'shifts the graph right']
          }
        ],
        correctAnswers: ['$\\frac{1}{6}$ cycle per unit', '$5$', 'doubles the period'],
        hint1: 'First find the period $\\frac{2\\pi}{b}$, then take its reciprocal.',
        hint2: 'Max to the next min is half a cycle.',
        hint3: 'Period $= \\frac{2\\pi}{b}$: a smaller $b$ means a longer period.',
        explanation: 'Period $= \\frac{2\\pi}{\\pi/3} = 6$, so the frequency is $\\frac{1}{6}$. Half of $10$ is $5$. Halving $b$ doubles $\\frac{2\\pi}{b}$, a horizontal stretch by a factor of $2$.'
      }
    },
    {
      id: 'sf2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A sinusoidal graph has a maximum at $(2, 11)$ and its next minimum at $(5, 3)$. What are its amplitude, midline and period?',
            options: [
              'Amplitude $4$, midline $y = 7$, period $6$',
              'Amplitude $8$, midline $y = 7$, period $6$',
              'Amplitude $4$, midline $y = 7$, period $3$',
              'Amplitude $4$, midline $y = 3$, period $6$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $\\frac{11 - 3}{2} = 4$, midline $\\frac{11 + 3}{2} = 7$, and max-to-next-min is half a period, so the period is $2(5 - 2) = 6$. An amplitude of $8$ forgets to halve, a period of $3$ forgets to double, and $y = 3$ is the minimum, not the midline.'
          },
          {
            question: 'Which function has midline $y = -1$, amplitude $3$, and period $4\\pi$?',
            options: [
              '$y = 3\\cos\\left(\\frac{x}{2}\\right) - 1$',
              '$y = 3\\cos(2x) - 1$',
              '$y = 3\\cos(4\\pi x) - 1$',
              '$y = -\\cos\\left(\\frac{x}{2}\\right) + 3$'
            ],
            correctAnswer: 0,
            explanation: 'A period of $4\\pi$ needs $b = \\frac{2\\pi}{4\\pi} = \\frac{1}{2}$; the amplitude $3$ is the coefficient and $-1$ is the vertical translation. With $b = 2$ the period is $\\pi$, with $b = 4\\pi$ it is $\\frac{1}{2}$, and $y = -\\cos\\left(\\frac{x}{2}\\right) + 3$ has amplitude $1$ and midline $y = 3$.'
          }
        ]
      }
    }
  ]
}
