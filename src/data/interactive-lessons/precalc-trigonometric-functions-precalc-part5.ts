import { tfSinCos, tfExample1, tfExample2, tfTangent2x, tfPeriodicGraph } from '@/data/lesson-figures/precalc-trig'

export const precalcTrigFunctionsPart5Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      figure: tfPeriodicGraph,
      content: `
# 📊 Trigonometric Functions — Periodic Functions & Graphing Sinusoids

**Part 5 of 7**

### Periodic Functions (CED 3.1)

A function $f$ is **periodic** if there is a positive number $P$ with

$$\\boxed{f(x + P) = f(x) \\text{ for every } x \\text{ in the domain}}$$

The smallest such $P$ is the **period**. One full **cycle** (any stretch of the graph of length $P$) determines the whole graph: the function just repeats it.

Because of that, you can **estimate values from one cycle** of a periodic graph or table:

| Question | Reasoning (the graph above has period $4$) |
|:---------|:-------------------------------------------|
| $f(14) = ?$ | Subtract whole periods: $f(14) = f(14 - 12) = f(2) = 5$ |
| $f(9) = ?$ | $f(9) = f(9 - 8) = f(1) = 3$ |
| Where is $f$ increasing? | On $(0, 2)$, $(4, 6)$, $(8, 10)$, … — every cycle has the same increasing stretch |

Over each cycle a periodic function can increase, decrease, and change concavity, and it does so in exactly the same way in every cycle.
      `
    },
    {
      id: 'p5-sincos',
      type: 'text' as const,
      figure: tfSinCos,
      content: `
## 🌊 The Graphs of Sine and Cosine (CED 3.4)

Let a point travel counterclockwise around the unit circle. Plotting its $y$-coordinate against the angle gives $y = \\sin x$; plotting its $x$-coordinate gives $y = \\cos x$. Both repeat every full turn, so both have **period $2\\pi$**.

| Feature | $y = \\sin x$ | $y = \\cos x$ |
|:--------|:-------------|:-------------|
| Midline | $y = 0$ | $y = 0$ |
| Amplitude | $1$ | $1$ |
| Maximum $1$ at | $x = \\frac{\\pi}{2} + 2\\pi k$ | $x = 2\\pi k$ |
| Minimum $-1$ at | $x = \\frac{3\\pi}{2} + 2\\pi k$ | $x = \\pi + 2\\pi k$ |
| Zeros at | $x = \\pi k$ | $x = \\frac{\\pi}{2} + \\pi k$ |
| On $[0, 2\\pi]$: increasing | $\\left(0, \\frac{\\pi}{2}\\right)$ and $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$ | $(\\pi, 2\\pi)$ |
| On $[0, 2\\pi]$: decreasing | $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$ | $(0, \\pi)$ |
| On $[0, 2\\pi]$: concave down | $(0, \\pi)$ (where the graph is above the midline) | $\\left(0, \\frac{\\pi}{2}\\right)$ and $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$ |
| On $[0, 2\\pi]$: concave up | $(\\pi, 2\\pi)$ (below the midline) | $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$ |

> **Key fact:** each graph is concave **down** where it lies above its midline and concave **up** where it lies below. The concavity changes exactly at the midline crossings.

> **Sine and cosine are shifts of each other.** The cosine graph is the sine graph moved $\\frac{\\pi}{2}$ to the **left**: $\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$, and $\\sin x = \\cos\\left(x - \\frac{\\pi}{2}\\right)$.
      `
    },
    {
      id: 'p5-params',
      type: 'text' as const,
      content: `
## 🎛️ The General Sinusoid (CED 3.5–3.6)

Stretching, reflecting and sliding $\\sin x$ or $\\cos x$ gives every **sinusoidal function**:

$$\\boxed{y = a\\sin\\bigl(b(x - c)\\bigr) + d \\qquad \\text{or} \\qquad y = a\\cos\\bigl(b(x - c)\\bigr) + d}$$

### Parameter Summary

| Parameter | Transformation | Formula / Effect |
|:----------|:---------------|:-----------------|
| $a$ | **Vertical dilation** | Amplitude $= \\lvert a \\rvert$ (half the height); if $a < 0$ the graph is reflected over the midline |
| $b$ | **Horizontal dilation** | Period $= \\frac{2\\pi}{\\lvert b \\rvert}$; frequency $= \\frac{\\lvert b \\rvert}{2\\pi}$ (cycles per unit of $x$) |
| $c$ | **Horizontal translation** (phase shift) | Shifts the graph **right** by $c$ (left if $c < 0$) — only when the inside is factored as $b(x - c)$ |
| $d$ | **Vertical translation** | Midline at $y = d$; range becomes $[d - \\lvert a \\rvert,\\; d + \\lvert a \\rvert]$ |

### Quick Reference

| Measurement | Formula |
|:------------|:--------|
| Period | $\\frac{2\\pi}{\\lvert b \\rvert}$ |
| Amplitude | $\\lvert a \\rvert$ |
| Maximum | $d + \\lvert a \\rvert$ |
| Minimum | $d - \\lvert a \\rvert$ |
| Midline | $y = d$ |

> ⚠️ If the inside is written $bx + k$, factor first: $\\sin(2x - \\pi) = \\sin\\bigl(2(x - \\tfrac{\\pi}{2})\\bigr)$, a shift of $\\frac{\\pi}{2}$, not $\\pi$.
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      figure: [tfExample1, tfExample2],
      content: `
## 📝 Worked Examples — Reading Parameters

### Example 1: $y = 3\\sin(2x) - 1$

| Parameter | Value | Meaning |
|:----------|:------|:--------|
| $a = 3$ | Amplitude $= 3$ | Height stretches by a factor of $3$ |
| $b = 2$ | Period $= \\frac{2\\pi}{2} = \\pi$ | Completes one cycle in $\\pi$ units |
| $c = 0$ | No phase shift | Cycle starts at $x = 0$ on the midline, at $(0, -1)$ |
| $d = -1$ | Midline at $y = -1$ | Range: $[-4, 2]$ |

### Example 2: $y = -2\\cos\\left(\\frac{\\pi}{3}(x - 1)\\right) + 5$

| Parameter | Value | Meaning |
|:----------|:------|:--------|
| $a = -2$ | Amplitude $= 2$, reflected | Cycle starts at a **minimum** instead of a maximum |
| $b = \\frac{\\pi}{3}$ | Period $= \\frac{2\\pi}{\\pi/3} = 6$ | One full cycle every $6$ units |
| $c = 1$ | Phase shift right $1$ | Cycle starts at $x = 1$, at the minimum $(1, 3)$ |
| $d = 5$ | Midline at $y = 5$ | Range: $[3, 7]$ |

### Key Difference: Sine vs Cosine Starting Points

| Function | Value at $x = 0$ | Next it goes… |
|:---------|:-----------------|:--------------|
| $\\sin(x)$ | Midline ($y = 0$) | Up to the maximum |
| $\\cos(x)$ | Maximum ($y = 1$) | Down toward the midline |

With $a > 0$ and no shift, $a\\sin(bx) + d$ starts its cycle on the midline going up and $a\\cos(bx) + d$ starts at a maximum; a negative $a$ flips each of these.
      `
    },
    {
      id: 'p5-tangent',
      type: 'text' as const,
      figure: tfTangent2x,
      content: `
## 📈 Graphing Tangent & Cotangent (CED 3.8)

Since $\\tan x = \\frac{\\sin x}{\\cos x}$, the tangent graph has a **vertical asymptote** wherever $\\cos x = 0$ and a zero wherever $\\sin x = 0$. It repeats every $\\pi$, not $2\\pi$.

### Tangent: $y = a\\tan\\bigl(b(x - c)\\bigr) + d$

| Feature | Value |
|:--------|:------|
| Period | $\\frac{\\pi}{\\lvert b \\rvert}$ (NOT $\\frac{2\\pi}{\\lvert b \\rvert}$) |
| Vertical asymptotes | where $b(x - c) = \\frac{\\pi}{2} + n\\pi$ |
| Zeros | where $b(x - c) = n\\pi$ |
| No amplitude | Range is $(-\\infty, \\infty)$; $a$ is a vertical dilation |
| Midline crossing | at the center of each branch, $y = d$ |

### Example: $y = \\tan(2x)$

Period $= \\frac{\\pi}{2}$. Asymptotes where $2x = \\frac{\\pi}{2} + n\\pi$, i.e. $x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$; zeros at $x = \\frac{n\\pi}{2}$. The graph above shows the branches between $x = -\\frac{\\pi}{4}$ and $x = \\frac{3\\pi}{4}$.

### Cotangent: $y = a\\cot\\bigl(b(x - c)\\bigr) + d$

Same period $\\frac{\\pi}{\\lvert b \\rvert}$, but asymptotes where $b(x - c) = n\\pi$ (where $\\sin = 0$).

> **Tangent** goes from $-\\infty$ to $+\\infty$ (increasing on each branch) between asymptotes when $a > 0$; reversed when $a < 0$.
> **Cotangent** goes from $+\\infty$ to $-\\infty$ (decreasing on each branch) between asymptotes when $a > 0$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graph Reading Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the period of $y = 4\\sin(3x) + 2$?',
            options: [
              '$3$',
              '$\\frac{2\\pi}{3}$',
              '$6\\pi$',
              '$\\frac{\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: 'Period $= \\frac{2\\pi}{\\lvert b \\rvert} = \\frac{2\\pi}{3}$. The amplitude ($4$) and vertical shift ($2$) do not affect the period.'
          },
          {
            question: 'For $y = -5\\cos(x - \\frac{\\pi}{4}) + 3$, the range is:',
            options: [
              '$[-2, 8]$',
              '$[-5, 5]$',
              '$[-8, 2]$',
              '$[3, 8]$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $= \\lvert -5 \\rvert = 5$, midline $y = 3$. Range $= [3 - 5, 3 + 5] = [-2, 8]$.'
          },
          {
            question: 'On which interval is $y = \\sin x$ both decreasing and concave down?',
            options: [
              '$\\left(\\frac{\\pi}{2}, \\pi\\right)$',
              '$\\left(0, \\frac{\\pi}{2}\\right)$',
              '$\\left(\\pi, \\frac{3\\pi}{2}\\right)$',
              '$\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'Sine decreases from its maximum at $\\frac{\\pi}{2}$ to its minimum at $\\frac{3\\pi}{2}$, and it is concave down where it is above the midline, on $(0, \\pi)$. Both hold on $\\left(\\frac{\\pi}{2}, \\pi\\right)$. On $\\left(0, \\frac{\\pi}{2}\\right)$ it is increasing, and on $\\left(\\pi, \\frac{3\\pi}{2}\\right)$ it is concave up.'
          }
        ]
      }
    },
    {
      id: 'p5-periodic-check',
      type: 'multiple-choice' as const,
      figure: tfPeriodicGraph,
      content: `
**Use the graph above.** The function $f$ is periodic and the graph shows its first three cycles. 📈
      `,
      exercise: {
        questions: [
          {
            question: 'What is the period of $f$?',
            options: [
              '$4$',
              '$2$',
              '$8$',
              '$5$'
            ],
            correctAnswer: 0,
            explanation: 'The pattern from one peak $(2, 5)$ to the next $(6, 5)$ takes $4$ units, so the period is $4$. The value $2$ is the time from a low to the next high (half a cycle), $8$ is two cycles, and $5$ is the maximum value, not a length.'
          },
          {
            question: 'What is $f(13)$?',
            options: [
              '$3$',
              '$5$',
              '$1$',
              '$13$'
            ],
            correctAnswer: 0,
            explanation: 'Subtract whole periods: $f(13) = f(13 - 12) = f(1)$. On the first cycle the graph rises in a straight line from $(0, 1)$ to $(2, 5)$, so $f(1) = 3$. The values $5$ and $1$ are the maximum and minimum, which occur at even inputs.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Graph Analysis** 🧮

**1)** Find the amplitude of $y = -7\\cos(4x) + 1$. Write a positive number. (e.g., $y = -3\\sin(x)$ has amplitude $\\lvert -3 \\rvert = 3$)

**2)** Find the period of $y = \\sin(\\frac{\\pi}{2}x)$. Write as an integer. (e.g., $y = \\sin(\\pi x)$: period $= 2\\pi / \\pi = 2$)

**3)** A sinusoid has maximum $10$ and minimum $2$. What is the midline? Write as an integer. (e.g., max $9$, min $1$: midline $= (9+1)/2 = 5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '4', '6'],
        hint1: 'Amplitude $= \\lvert a \\rvert$. The negative sign means reflection, not a change in amplitude.',
        hint2: 'Period $= \\frac{2\\pi}{\\lvert b \\rvert} = \\frac{2\\pi}{\\pi/2}$. Dividing by a fraction means multiplying by its reciprocal.',
        hint3: 'Midline $= \\frac{\\text{max} + \\text{min}}{2}$.',
        explanation: '1) Amplitude $= \\lvert -7 \\rvert = 7$. 2) Period $= \\frac{2\\pi}{\\pi/2} = \\frac{2\\pi \\cdot 2}{\\pi} = 4$. 3) Midline $= \\frac{10 + 2}{2} = 6$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graphing Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A negative $a$ value causes a',
            options: ['horizontal stretch', 'reflection over the midline', 'phase shift', 'period change']
          },
          {
            label: 'In $y = a\\sin(b(x - c)) + d$, the phase shift $c$ moves the graph',
            options: ['up or down', 'left or right', 'stretches vertically', 'changes the period']
          },
          {
            label: 'The period formula for tangent is',
            options: ['$\\frac{2\\pi}{\\lvert b \\rvert}$', '$\\frac{\\pi}{\\lvert b \\rvert}$', '$\\frac{\\pi}{2\\lvert b \\rvert}$', '$\\lvert b \\rvert\\pi$']
          },
          {
            label: 'The graph of $y = \\sin x$ is concave down exactly where it is',
            options: ['above the midline', 'below the midline', 'increasing', 'decreasing']
          }
        ],
        correctAnswers: ['reflection over the midline', 'left or right', '$\\frac{\\pi}{\\lvert b \\rvert}$', 'above the midline'],
        hint1: 'When $a < 0$, peaks become valleys and vice versa.',
        hint2: '$c$ appears in the horizontal part of the formula — it shifts along the $x$-axis.',
        hint3: 'Tangent has period $\\pi$ (not $2\\pi$), so the formula uses $\\pi$ in the numerator.',
        explanation: 'Negative $a$ reflects the graph. Phase shift $c$ is horizontal (left/right). Tangent period $= \\frac{\\pi}{\\lvert b \\rvert}$. A sinusoid bends downward (concave down) on the arches above its midline and upward on the arches below it.'
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
            question: 'Write the equation of a sinusoid with amplitude $3$, period $4\\pi$, phase shift right $\\frac{\\pi}{2}$, and midline $y = -1$.',
            options: [
              '$y = 3\\sin\\left(\\frac{1}{2}(x - \\frac{\\pi}{2})\\right) - 1$',
              '$y = 3\\sin\\left(2(x - \\frac{\\pi}{2})\\right) - 1$',
              '$y = 3\\sin\\left(\\frac{1}{2}x - \\frac{\\pi}{2}\\right) - 1$',
              '$y = \\frac{1}{2}\\sin\\left(3(x - \\frac{\\pi}{2})\\right) - 1$'
            ],
            correctAnswer: 0,
            explanation: 'Period $= 4\\pi = \\frac{2\\pi}{b}$, so $b = \\frac{1}{2}$. With $a = 3$, $c = \\frac{\\pi}{2}$, $d = -1$: $y = 3\\sin(\\frac{1}{2}(x - \\frac{\\pi}{2})) - 1$. The unfactored $\\frac{1}{2}x - \\frac{\\pi}{2}$ has shift $\\pi$, not $\\frac{\\pi}{2}$.'
          },
          {
            question: 'How many complete cycles does $y = \\sin(6x)$ make on $[0, 2\\pi]$?',
            options: [
              '$3$',
              '$6$',
              '$12$',
              '$1$'
            ],
            correctAnswer: 1,
            explanation: 'Period $= \\frac{2\\pi}{6} = \\frac{\\pi}{3}$. Interval length $= 2\\pi$. Cycles $= \\frac{2\\pi}{\\pi/3} = 6$.'
          }
        ]
      }
    }
  ]
}
