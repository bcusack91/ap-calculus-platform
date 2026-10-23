import { tfSinCos, sfSinBehavior } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart1Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf1-intro',
      type: 'text' as const,
      figure: tfSinCos,
      content: `
# 🌊 Sinusoidal Functions and Modeling

**Part 1 of 7 — Sine and Cosine Graphs**

### Topic Overview

| Part | Topic | CED |
|:---:|:---|:---:|
| **1** | **Sine and cosine graphs** | 3.4 |
| 2 | Amplitude, midline, period and frequency | 3.5 |
| 3 | Transformations and phase shift | 3.6 |
| 4 | Building a model from a graph, a table or a context | 3.7 |
| 5 | Using the model: predict, interpret and solve | 3.7 |
| 6 | The tangent function | 3.8 |
| 7 | FRQ Q3 workshop and review | 3.4–3.8 |

### From the Unit Circle to a Graph

Let a point move counterclockwise around the unit circle, starting at $(1, 0)$. Plot the angle $x$ it has turned through on the horizontal axis:

- its **$y$-coordinate** traces $y = \\sin x$ (blue above);
- its **$x$-coordinate** traces $y = \\cos x$ (red above).

One full turn is $2\\pi$, so both graphs repeat every $2\\pi$: they are **periodic with period $2\\pi$**.

| Feature on $[0, 2\\pi]$ | $y = \\sin x$ | $y = \\cos x$ |
|:--------|:-------------|:-------------|
| Value at $x = 0$ | $0$ (midline, rising) | $1$ (maximum) |
| Midline | $y = 0$ | $y = 0$ |
| Amplitude | $1$ | $1$ |
| Maximum $1$ at | $x = \\frac{\\pi}{2}$ | $x = 0$ and $x = 2\\pi$ |
| Minimum $-1$ at | $x = \\frac{3\\pi}{2}$ | $x = \\pi$ |
| Zeros | $0, \\pi, 2\\pi$ | $\\frac{\\pi}{2}, \\frac{3\\pi}{2}$ |
| Domain / range | all reals / $[-1, 1]$ | all reals / $[-1, 1]$ |

Beyond $[0, 2\\pi]$ every feature repeats: sine's maxima are at $\\frac{\\pi}{2} + 2\\pi k$, cosine's at $2\\pi k$, for every integer $k$.
      `
    },
    {
      id: 'sf1-behavior',
      type: 'text' as const,
      figure: sfSinBehavior,
      content: `
## 📈 How the Graphs Behave Over a Cycle

The AP exam asks where a sinusoid is **increasing or decreasing** and where it is **concave up or concave down**. Read it off one cycle of $y = \\sin x$ (above):

| Interval | $\\sin x$ is… | Why |
|:---------|:--------------|:----|
| $\\left(0, \\frac{\\pi}{2}\\right)$ | increasing, concave down | rising toward the maximum, bending over |
| $\\left(\\frac{\\pi}{2}, \\pi\\right)$ | decreasing, concave down | falling from the maximum to the midline |
| $\\left(\\pi, \\frac{3\\pi}{2}\\right)$ | decreasing, concave up | falling to the minimum, bending back |
| $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$ | increasing, concave up | rising from the minimum to the midline |

Two rules that hold for **every** sinusoid:

> **Direction changes at the maxima and minima.** Between a minimum and the next maximum the function increases; between a maximum and the next minimum it decreases.

> **Concavity changes at the midline.** Above the midline the graph is concave down; below the midline it is concave up. The midline crossings are the points of inflection, and they are also where the graph is **steepest**, so the function changes fastest there and most slowly near its maxima and minima.

For $y = \\cos x$ the same rules give: decreasing on $(0, \\pi)$, increasing on $(\\pi, 2\\pi)$, concave down on $\\left(0, \\frac{\\pi}{2}\\right)$ and $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$ (where it is positive), concave up on $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$.
      `
    },
    {
      id: 'sf1-shift',
      type: 'text' as const,
      content: `
## 🔁 Cosine Is a Shifted Sine

The red cosine curve is the blue sine curve moved $\\frac{\\pi}{2}$ to the **left**: cosine reaches its maximum at $x = 0$, a quarter period before sine does at $x = \\frac{\\pi}{2}$.

$$\\boxed{\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right) \\qquad\\qquad \\sin x = \\cos\\left(x - \\frac{\\pi}{2}\\right)}$$

So there is really only one shape, the **sinusoid**, and every function in this lesson is a stretched, reflected or slid copy of it. Two more symmetries worth remembering:

| Fact | Graphically |
|:-----|:------------|
| $\\sin(-x) = -\\sin x$ (odd) | the sine graph has point symmetry about the origin |
| $\\cos(-x) = \\cos x$ (even) | the cosine graph is symmetric about the $y$-axis |
| $\\sin(x + 2\\pi) = \\sin x$, $\\cos(x + 2\\pi) = \\cos x$ | shifting by a full period changes nothing |

> **Check yourself:** $\\sin\\left(\\frac{\\pi}{6} + \\frac{\\pi}{2}\\right) = \\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2} = \\cos\\frac{\\pi}{6}$. ✓
      `
    },
    {
      id: 'sf1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graph Behavior Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On which interval is $y = \\cos x$ increasing?',
            options: [
              '$(\\pi, 2\\pi)$',
              '$(0, \\pi)$',
              '$\\left(0, \\frac{\\pi}{2}\\right)$',
              '$\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'Cosine falls from its maximum at $x = 0$ to its minimum at $x = \\pi$, then rises back to $1$ at $x = 2\\pi$. So it is increasing on $(\\pi, 2\\pi)$ and decreasing on $(0, \\pi)$. The interval $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$ is where cosine is concave up, not where it increases.'
          },
          {
            question: 'At which value of $x$ in $[0, 2\\pi]$ does $y = \\sin x$ reach its minimum value?',
            options: [
              '$\\frac{3\\pi}{2}$',
              '$\\pi$',
              '$\\frac{\\pi}{2}$',
              '$2\\pi$'
            ],
            correctAnswer: 0,
            explanation: 'The point on the unit circle is lowest, $(0, -1)$, after three quarters of a turn, so $\\sin\\frac{3\\pi}{2} = -1$. At $\\pi$ and $2\\pi$ the sine is $0$, and at $\\frac{\\pi}{2}$ it is the maximum $1$.'
          },
          {
            question: 'On which interval is $y = \\cos x$ concave up?',
            options: [
              '$\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$',
              '$\\left(0, \\frac{\\pi}{2}\\right)$',
              '$(0, \\pi)$',
              '$\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'A sinusoid is concave up where it lies below its midline. Cosine is negative on $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$, the arch around its minimum at $\\pi$, so that is where it is concave up. On $(0, \\pi)$ cosine is decreasing, which is a different property, and on $\\left(0, \\frac{\\pi}{2}\\right)$ and $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$ it is above the midline and concave down.'
          }
        ]
      }
    },
    {
      id: 'sf1-input',
      type: 'input-boxes' as const,
      content: `
**Reading the Basic Graphs** 🧮

Write $\\pi$ as \`pi\` (e.g. \`3pi/2\`).

**1)** What is $\\sin\\dfrac{3\\pi}{2}$? (e.g., $\\sin\\dfrac{\\pi}{2} = 1$)

**2)** What is the smallest positive $x$ at which $\\cos x = 0$? (e.g., the smallest positive zero of $\\sin x$ is $\\pi$, so you would type \`pi\`)

**3)** How many zeros does $y = \\sin x$ have on the closed interval $[0, 2\\pi]$? (e.g., $y = \\cos x$ has $2$ zeros there)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', 'pi/2', '3'],
        hint1: 'After three quarters of a turn the unit-circle point is at the bottom, $(0, -1)$.',
        hint2: 'Cosine is the $x$-coordinate; it is $0$ where the point is on the $y$-axis.',
        hint3: 'Sine is $0$ where the point is on the $x$-axis: at the start, after a half turn, and after a full turn.',
        explanation: '1) $\\sin\\frac{3\\pi}{2} = -1$. 2) $\\cos x = 0$ first at $x = \\frac{\\pi}{2}$. 3) $\\sin x = 0$ at $x = 0, \\pi, 2\\pi$: three zeros.'
      }
    },
    {
      id: 'sf1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sine and Cosine Facts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The graph of $y = \\cos x$ is the graph of $y = \\sin x$ shifted',
            options: ['left by $\\frac{\\pi}{2}$', 'right by $\\frac{\\pi}{2}$', 'left by $\\pi$', 'up by $1$']
          },
          {
            label: 'On $\\left(\\frac{\\pi}{2}, \\pi\\right)$, the graph of $y = \\sin x$ is',
            options: ['decreasing and concave down', 'increasing and concave down', 'decreasing and concave up', 'increasing and concave up']
          },
          {
            label: 'The maximum value of $y = \\cos x$ occurs at $x =$',
            options: ['$2\\pi k$ for integers $k$', '$\\pi k$ for integers $k$', '$\\frac{\\pi}{2} + 2\\pi k$ for integers $k$', '$\\pi + 2\\pi k$ for integers $k$']
          }
        ],
        correctAnswers: ['left by $\\frac{\\pi}{2}$', 'decreasing and concave down', '$2\\pi k$ for integers $k$'],
        hint1: 'Cosine peaks at $x = 0$; sine peaks a quarter period later.',
        hint2: 'Between the maximum and the midline the graph falls while still bending over.',
        hint3: 'Cosine equals $1$ when the unit-circle point is back at $(1, 0)$.',
        explanation: '$\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$ is a shift left by $\\frac{\\pi}{2}$. On $\\left(\\frac{\\pi}{2}, \\pi\\right)$ sine falls from $1$ to $0$ and is above the midline, so it is decreasing and concave down. Cosine is $1$ at every whole number of turns, $x = 2\\pi k$.'
      }
    },
    {
      id: 'sf1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about $y = \\sin x$ on $[0, 2\\pi]$ is true?',
            options: [
              'It is concave down on $(0, \\pi)$',
              'It is increasing on $(0, \\pi)$',
              'Its maximum occurs at $x = \\pi$',
              'Its zeros are at $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$'
            ],
            correctAnswer: 0,
            explanation: 'On $(0, \\pi)$ the sine graph is the arch above the midline, which is concave down. It increases only on $\\left(0, \\frac{\\pi}{2}\\right)$ there, its maximum is at $\\frac{\\pi}{2}$, and $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$ are the zeros of cosine, not sine.'
          },
          {
            question: 'On which interval is $y = \\cos x$ both decreasing and concave up?',
            options: [
              '$\\left(\\frac{\\pi}{2}, \\pi\\right)$',
              '$\\left(0, \\frac{\\pi}{2}\\right)$',
              '$\\left(\\pi, \\frac{3\\pi}{2}\\right)$',
              '$\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'Cosine decreases on $(0, \\pi)$ and is concave up where it is below the midline, on $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$. Both are true on $\\left(\\frac{\\pi}{2}, \\pi\\right)$. On $\\left(0, \\frac{\\pi}{2}\\right)$ it is concave down, and on $\\left(\\pi, \\frac{3\\pi}{2}\\right)$ it is increasing.'
          }
        ]
      }
    }
  ]
}
