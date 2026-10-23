import { sfShiftCompare } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart3Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf3-intro',
      type: 'text' as const,
      content: `
# 🔀 Sinusoidal Functions and Modeling

**Part 3 of 7 — Transformations and Phase Shift**

Every sinusoid is built from $y = \\sin x$ or $y = \\cos x$ by the four transformations of Unit 1:

$$\\boxed{y = a\\sin\\bigl(b(x - c)\\bigr) + d}$$

| Parameter | Transformation | Effect on the graph |
|:----------|:---------------|:--------------------|
| $a$ | vertical dilation by $\\lvert a \\rvert$; reflection over the midline if $a < 0$ | amplitude $\\lvert a \\rvert$ |
| $b$ | horizontal dilation by $\\frac{1}{\\lvert b \\rvert}$ | period $\\frac{2\\pi}{\\lvert b \\rvert}$ |
| $c$ | horizontal translation by $c$ | **phase shift**: right if $c > 0$, left if $c < 0$ |
| $d$ | vertical translation by $d$ | midline $y = d$ |

### The Factor-First Rule

The phase shift is only visible when the inside is written as $b(x - c)$. If the inside is $bx + k$, **factor out $b$**:

$$\\sin(bx + k) = \\sin\\!\\left(b\\left(x + \\tfrac{k}{b}\\right)\\right) \\quad\\Rightarrow\\quad \\text{shift } = -\\tfrac{k}{b}.$$

> **Example.** $y = 2\\sin\\left(2x - \\frac{\\pi}{2}\\right) = 2\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right)$. The shift is $\\frac{\\pi}{4}$ to the right, **not** $\\frac{\\pi}{2}$. Reading the shift straight off the unfactored form is the most common phase-shift error on the exam.
      `
    },
    {
      id: 'sf3-figure',
      type: 'text' as const,
      figure: sfShiftCompare,
      content: `
## 📝 Worked Example: A Shift With $b \\ne 1$

The dashed curve is $f(x) = 2\\sin(2x)$: amplitude $2$, period $\\pi$, starting on the midline at $(0, 0)$ and peaking at $\\left(\\frac{\\pi}{4}, 2\\right)$.

The solid curve is $g(x) = 2\\sin\\left(2x - \\frac{\\pi}{2}\\right) = 2\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right)$.

| Feature | $f(x) = 2\\sin(2x)$ | $g(x) = 2\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right)$ |
|:--------|:-------------------|:--------------------------------|
| Midline crossing (rising) | $x = 0$ | $x = \\frac{\\pi}{4}$ |
| First maximum | $x = \\frac{\\pi}{4}$ | $x = \\frac{\\pi}{2}$ |
| Period | $\\pi$ | $\\pi$ (unchanged by a shift) |

Every feature of $f$ moved **right by $\\frac{\\pi}{4}$**, exactly the factored-out $c$. Notice that $g$ peaks where $2\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\pi}{2}$, i.e. at $x = \\frac{\\pi}{2}$: to locate a maximum, set the **whole inside** equal to the angle where the parent function peaks.

> **Interval trick:** one cycle of $a\\sin(b(x - c)) + d$ runs from $x = c$ (where the inside is $0$) to $x = c + \\frac{2\\pi}{b}$ (where the inside is $2\\pi$). Quarter points are $c + \\frac{P}{4}$, $c + \\frac{P}{2}$, $c + \\frac{3P}{4}$.
      `
    },
    {
      id: 'sf3-reflect',
      type: 'text' as const,
      content: `
## 🔄 Reflections and Choosing Sine or Cosine

**Negative $a$** reflects the graph over its midline: maxima become minima. So $y = -\\cos x$ has a **minimum** at $x = 0$, and $y = -\\sin x$ starts on the midline going **down**.

**Negative $b$** can always be removed: $\\sin(-x) = -\\sin x$ and $\\cos(-x) = \\cos x$, so $y = \\sin(-2x) = -\\sin(2x)$ and $y = \\cos(-2x) = \\cos(2x)$.

### One graph, several equations

Because $\\cos\\theta = \\sin\\left(\\theta + \\frac{\\pi}{2}\\right)$, any sinusoid can be written with either function. For the graph from Part 2, with maximum at $x = 1$ and period $8$:

$$3\\cos\\left(\\tfrac{\\pi}{4}(x - 1)\\right) + 2 \\;=\\; 3\\sin\\left(\\tfrac{\\pi}{4}(x - 1) + \\tfrac{\\pi}{2}\\right) + 2 \\;=\\; 3\\sin\\left(\\tfrac{\\pi}{4}(x + 1)\\right) + 2,$$

since $\\frac{\\pi}{4}(x - 1) + \\frac{\\pi}{2} = \\frac{\\pi}{4}(x - 1 + 2)$. The cosine form uses the maximum as its reference point; the sine form uses the rising midline crossing one quarter period earlier.

| Known starting feature | Natural choice |
|:-----------------------|:---------------|
| a maximum at $x = c$ | $a\\cos(b(x - c)) + d$ with $a > 0$ |
| a minimum at $x = c$ | $a\\cos(b(x - c)) + d$ with $a < 0$ |
| midline crossing going up at $x = c$ | $a\\sin(b(x - c)) + d$ with $a > 0$ |
| midline crossing going down at $x = c$ | $a\\sin(b(x - c)) + d$ with $a < 0$ |
      `
    },
    {
      id: 'sf3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Transformation Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the phase shift of $y = 3\\cos(4x + \\pi) + 1$?',
            options: [
              'Left $\\frac{\\pi}{4}$',
              'Left $\\pi$',
              'Right $\\frac{\\pi}{4}$',
              'Right $\\pi$'
            ],
            correctAnswer: 0,
            explanation: 'Factor out $4$: $4x + \\pi = 4\\left(x + \\frac{\\pi}{4}\\right)$, so $c = -\\frac{\\pi}{4}$, a shift left by $\\frac{\\pi}{4}$. Reading $\\pi$ directly forgets to divide by $b$, and $x + \\frac{\\pi}{4}$ means left, not right.'
          },
          {
            question: 'Which equation describes the graph of $y = \\sin x$ shifted right $\\frac{\\pi}{3}$ and reflected over the $x$-axis?',
            options: [
              '$y = -\\sin\\left(x - \\frac{\\pi}{3}\\right)$',
              '$y = -\\sin\\left(x + \\frac{\\pi}{3}\\right)$',
              '$y = \\sin\\left(-x - \\frac{\\pi}{3}\\right)$',
              '$y = \\sin\\left(x - \\frac{\\pi}{3}\\right) - 1$'
            ],
            correctAnswer: 0,
            explanation: 'A shift right by $\\frac{\\pi}{3}$ replaces $x$ with $x - \\frac{\\pi}{3}$, and a reflection over the $x$-axis (the midline here) multiplies the output by $-1$. $y = -\\sin\\left(x + \\frac{\\pi}{3}\\right)$ shifts left, $y = \\sin\\left(-x - \\frac{\\pi}{3}\\right)$ reflects the input instead and equals $-\\sin\\left(x + \\frac{\\pi}{3}\\right)$, and subtracting $1$ is a vertical translation.'
          },
          {
            question: 'At what value of $x$ does $y = 2\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right)$ first reach its maximum for $x > 0$?',
            options: [
              '$x = \\frac{\\pi}{2}$',
              '$x = \\frac{\\pi}{4}$',
              '$x = \\frac{3\\pi}{4}$',
              '$x = \\pi$'
            ],
            correctAnswer: 0,
            explanation: 'Sine is largest when its input is $\\frac{\\pi}{2}$: $2\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\pi}{2}$ gives $x = \\frac{\\pi}{2}$. At $x = \\frac{\\pi}{4}$ the graph is on its midline (the shifted start), at $\\frac{3\\pi}{4}$ it is back on the midline, and at $\\pi$ it is at its minimum.'
          }
        ]
      }
    },
    {
      id: 'sf3-input',
      type: 'input-boxes' as const,
      content: `
**Factor and Read** 🧮

For $y = -4\\cos(3x - \\pi) + 2$, give each value exactly (write $\\pi$ as \`pi\`, e.g. \`2pi/3\`).

**1)** The phase shift (positive means right). (e.g., for $\\cos(2x - \\pi)$: $2x - \\pi = 2\\left(x - \\frac{\\pi}{2}\\right)$, shift \`pi/2\`)

**2)** The period. (e.g., $\\cos(5x)$ has period \`2pi/5\`)

**3)** The value of $y$ at $x = \\dfrac{\\pi}{3}$. (e.g., $y = 2\\cos(x - \\pi) + 1$ at $x = \\pi$ is $2\\cos 0 + 1 = 3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['pi/3', '2pi/3', '-2'],
        hint1: '$3x - \\pi = 3\\left(x - \\frac{\\pi}{3}\\right)$.',
        hint2: 'Period $= \\frac{2\\pi}{\\lvert b \\rvert}$ with $b = 3$.',
        hint3: 'At $x = \\frac{\\pi}{3}$ the inside is $3 \\cdot \\frac{\\pi}{3} - \\pi = 0$, and $\\cos 0 = 1$.',
        explanation: '1) Shift right $\\frac{\\pi}{3}$ (not $\\pi$). 2) Period $\\frac{2\\pi}{3}$. 3) $y = -4\\cos(0) + 2 = -4 + 2 = -2$: because $a < 0$, the shifted start $x = \\frac{\\pi}{3}$ is a minimum.'
      }
    },
    {
      id: 'sf3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Transformation Vocabulary** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The graph of $y = \\sin\\left(x + \\frac{\\pi}{2}\\right)$ is the same as the graph of',
            options: ['$y = \\cos x$', '$y = -\\cos x$', '$y = -\\sin x$', '$y = \\cos x + \\frac{\\pi}{2}$']
          },
          {
            label: 'Replacing $x$ by $3x$ in $y = \\sin x$ is a horizontal dilation by a factor of',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{2\\pi}{3}$', '$6\\pi$']
          },
          {
            label: 'The graph of $y = -\\cos x$ has a',
            options: ['minimum at $x = 0$', 'maximum at $x = 0$', 'midline crossing at $x = 0$', 'vertical asymptote at $x = 0$']
          }
        ],
        correctAnswers: ['$y = \\cos x$', '$\\frac{1}{3}$', 'minimum at $x = 0$'],
        hint1: 'Shifting sine left by a quarter period lines it up with cosine.',
        hint2: 'The period shrinks from $2\\pi$ to $\\frac{2\\pi}{3}$; the graph is compressed toward the $y$-axis.',
        hint3: '$-\\cos 0 = -1$, the lowest value the function takes.',
        explanation: '$\\sin\\left(x + \\frac{\\pi}{2}\\right) = \\cos x$. Multiplying the input by $3$ compresses the graph horizontally by a factor of $\\frac{1}{3}$ (the period becomes $\\frac{2\\pi}{3}$). Reflecting cosine over the midline turns its maximum at $0$ into a minimum.'
      }
    },
    {
      id: 'sf3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which function has a maximum at $x = \\dfrac{\\pi}{6}$?',
            options: [
              '$y = 2\\cos\\left(3\\left(x - \\frac{\\pi}{6}\\right)\\right) + 1$',
              '$y = 2\\cos\\left(3x - \\frac{\\pi}{6}\\right) + 1$',
              '$y = 2\\sin\\left(3\\left(x - \\frac{\\pi}{6}\\right)\\right) + 1$',
              '$y = 2\\cos\\left(3\\left(x + \\frac{\\pi}{6}\\right)\\right) + 1$'
            ],
            correctAnswer: 0,
            explanation: 'A positive cosine has its maximum where the inside is $0$: $3\\left(x - \\frac{\\pi}{6}\\right) = 0$ at $x = \\frac{\\pi}{6}$. The unfactored $3x - \\frac{\\pi}{6}$ is $0$ at $x = \\frac{\\pi}{18}$, the sine version is on its midline at $x = \\frac{\\pi}{6}$, and $x + \\frac{\\pi}{6}$ puts the maximum at $x = -\\frac{\\pi}{6}$.'
          },
          {
            question: 'The graph of $y = 5\\sin\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{4}\\right)$ is the graph of $y = 5\\sin\\left(\\dfrac{x}{2}\\right)$ shifted',
            options: [
              'left $\\frac{\\pi}{2}$',
              'left $\\frac{\\pi}{4}$',
              'right $\\frac{\\pi}{2}$',
              'left $\\frac{\\pi}{8}$'
            ],
            correctAnswer: 0,
            explanation: 'Factor out $\\frac{1}{2}$: $\\frac{x}{2} + \\frac{\\pi}{4} = \\frac{1}{2}\\left(x + \\frac{\\pi}{2}\\right)$, so the shift is $\\frac{\\pi}{2}$ to the left. Reading $\\frac{\\pi}{4}$ directly forgets to divide by $b = \\frac{1}{2}$ (which doubles the shift), and $\\frac{\\pi}{8}$ multiplies by $\\frac{1}{2}$ instead of dividing.'
          }
        ]
      }
    }
  ]
}
