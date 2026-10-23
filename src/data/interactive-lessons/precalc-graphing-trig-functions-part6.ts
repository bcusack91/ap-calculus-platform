import { sfTanBasic, tfTangent2x } from '@/data/lesson-figures/precalc-trig'

export const precalcGraphingTrigPart6Data = {
  topicSlug: 'graphing-trig-functions',
  sections: [
    {
      id: 'sf6-intro',
      type: 'text' as const,
      figure: sfTanBasic,
      content: `
# 📈 Sinusoidal Functions and Modeling

**Part 6 of 7 — The Tangent Function**

$$\\boxed{\\tan x = \\frac{\\sin x}{\\cos x}}$$

Geometrically, $\\tan x$ is the **slope of the terminal ray** of the angle $x$: the ray passes through $(0, 0)$ and $(\\cos x, \\sin x)$, so its slope is $\\frac{\\sin x}{\\cos x}$. That one fact explains the whole graph above.

| Feature | Value | Why |
|:--------|:------|:----|
| Zeros | $x = n\\pi$ | the ray is horizontal (slope $0$) where $\\sin x = 0$ |
| Vertical asymptotes | $x = \\frac{\\pi}{2} + n\\pi$ | the ray is vertical (no slope) where $\\cos x = 0$ |
| Period | $\\pi$ | the ray at $x + \\pi$ points the opposite way along the **same line**, so it has the same slope |
| Range | all real numbers | a line can have any slope |
| Amplitude, maximum, minimum | none | the graph is unbounded on every branch |
| Behavior on each branch | **increasing** from $-\\infty$ to $+\\infty$ | as the ray turns counterclockwise from pointing down to pointing up, its slope rises through every real number |
| Concavity | concave down where $\\tan x < 0$, concave up where $\\tan x > 0$ | on $\\left(-\\frac{\\pi}{2}, 0\\right)$ the branch flattens toward $0$; on $\\left(0, \\frac{\\pi}{2}\\right)$ it steepens |
| Symmetry | odd: $\\tan(-x) = -\\tan x$ | reflecting the ray over the $x$-axis negates its slope |

Values to know: $\\tan 0 = 0$, $\\tan\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{3}$, $\\tan\\frac{\\pi}{4} = 1$, $\\tan\\frac{\\pi}{3} = \\sqrt{3}$, and $\\tan\\frac{\\pi}{2}$ is undefined.
      `
    },
    {
      id: 'sf6-transform',
      type: 'text' as const,
      figure: tfTangent2x,
      content: `
## 🔧 Transformations of Tangent

$$y = a\\tan\\bigl(b(x - c)\\bigr) + d$$

| Parameter | Effect |
|:----------|:-------|
| $a$ | vertical dilation by $\\lvert a \\rvert$; if $a < 0$ each branch **decreases** instead |
| $b$ | period becomes $\\frac{\\pi}{\\lvert b \\rvert}$ (not $\\frac{2\\pi}{\\lvert b \\rvert}$) |
| $c$ | phase shift: zeros move to $x = c + \\frac{n\\pi}{b}$ |
| $d$ | the center of each branch moves to height $d$ |

**Asymptotes:** set the inside equal to $\\frac{\\pi}{2} + n\\pi$ and solve for $x$. **Zeros (midline crossings):** set the inside equal to $n\\pi$.

### Example 1: $y = \\tan(2x)$ (graphed above)

Period $\\frac{\\pi}{2}$. Asymptotes where $2x = \\frac{\\pi}{2} + n\\pi$, so $x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$: at $\\ldots, -\\frac{\\pi}{4}, \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\ldots$. Zeros at $x = \\frac{n\\pi}{2}$. Each branch passes through the points one quarter period from its zero with height $\\pm 1$: $\\left(\\frac{\\pi}{8}, 1\\right)$ and $\\left(\\frac{3\\pi}{8}, -1\\right)$.

### Example 2: $y = 2\\tan\\left(x - \\frac{\\pi}{4}\\right) + 1$

Period $\\pi$. Asymptotes where $x - \\frac{\\pi}{4} = \\frac{\\pi}{2} + n\\pi$, so $x = \\frac{3\\pi}{4} + n\\pi$. The branch between $x = -\\frac{\\pi}{4}$ and $x = \\frac{3\\pi}{4}$ has its center at $\\left(\\frac{\\pi}{4}, 1\\right)$, where the inside is $0$, and rises twice as steeply as $\\tan x$.

### When a tangent model fits

A rotating beam sweeping across a straight wall produces a spot whose distance from the nearest point is $D\\tan\\theta$, where $D$ is the distance to the wall and $\\theta$ the beam's angle. The position is **unbounded** and has a vertical asymptote when the beam is parallel to the wall, so tangent, not sine, is the right model. With the beam turning at a constant rate, $\\theta = kt$ and the spot's position is $D\\tan(kt)$.
      `
    },
    {
      id: 'sf6-mcq',
      type: 'multiple-choice' as const,
      figure: tfTangent2x,
      content: `
**Use the graph of $y = \\tan(2x)$ above.** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the period of $y = \\tan(2x)$?',
            options: [
              '$\\frac{\\pi}{2}$',
              '$\\pi$',
              '$2\\pi$',
              '$\\frac{\\pi}{4}$'
            ],
            correctAnswer: 0,
            explanation: 'The period of $\\tan(bx)$ is $\\frac{\\pi}{\\lvert b \\rvert} = \\frac{\\pi}{2}$: consecutive asymptotes on the graph are $\\frac{\\pi}{2}$ apart. A period of $\\pi$ uses the formula for sine and cosine, and $\\frac{\\pi}{4}$ is the distance from a zero to the next asymptote.'
          },
          {
            question: 'Which line is a vertical asymptote of $y = \\tan(2x)$?',
            options: [
              '$x = \\frac{3\\pi}{4}$',
              '$x = \\frac{\\pi}{2}$',
              '$x = 0$',
              '$x = \\pi$'
            ],
            correctAnswer: 0,
            explanation: 'Asymptotes occur where $2x = \\frac{\\pi}{2} + n\\pi$, that is $x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$: $\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\ldots$ The lines $x = 0$, $x = \\frac{\\pi}{2}$ and $x = \\pi$ pass through zeros of the function.'
          },
          {
            question: 'On the interval $\\left(0, \\frac{\\pi}{4}\\right)$, the graph of $y = \\tan(2x)$ is',
            options: [
              'increasing and concave up',
              'increasing and concave down',
              'decreasing and concave up',
              'decreasing and concave down'
            ],
            correctAnswer: 0,
            explanation: 'Every branch of a tangent graph with $a > 0$ is increasing. On $\\left(0, \\frac{\\pi}{4}\\right)$ the function is positive and steepening toward the asymptote at $x = \\frac{\\pi}{4}$, so it is concave up. The branch is concave down on $\\left(-\\frac{\\pi}{4}, 0\\right)$, where the function is negative.'
          }
        ]
      }
    },
    {
      id: 'sf6-input',
      type: 'input-boxes' as const,
      content: `
**Tangent Features** 🧮

Write $\\pi$ as \`pi\` (e.g. \`2pi\`, \`pi/3\`).

**1)** What is the period of $y = \\tan\\left(\\dfrac{x}{2}\\right)$? (e.g., $y = \\tan(3x)$ has period \`pi/3\`)

**2)** What is the smallest positive $x$ at which $y = \\tan\\left(\\dfrac{x}{2}\\right)$ has a vertical asymptote? (e.g., for $\\tan(3x)$: $3x = \\frac{\\pi}{2}$ gives \`pi/6\`)

**3)** What is $\\tan\\dfrac{5\\pi}{4}$? (e.g., $\\tan\\frac{3\\pi}{4} = \\frac{\\sin(3\\pi/4)}{\\cos(3\\pi/4)} = \\frac{\\sqrt{2}/2}{-\\sqrt{2}/2} = -1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2pi', 'pi', '1'],
        hint1: 'Period $= \\frac{\\pi}{\\lvert b \\rvert}$ with $b = \\frac{1}{2}$.',
        hint2: 'Set the inside equal to $\\frac{\\pi}{2}$: $\\frac{x}{2} = \\frac{\\pi}{2}$.',
        hint3: '$\\frac{5\\pi}{4}$ is in Quadrant III, where sine and cosine are both negative, so their ratio is positive; the reference angle is $\\frac{\\pi}{4}$.',
        explanation: '1) $\\frac{\\pi}{1/2} = 2\\pi$. 2) $\\frac{x}{2} = \\frac{\\pi}{2}$ gives $x = \\pi$. 3) $\\tan\\frac{5\\pi}{4} = \\frac{-\\sqrt{2}/2}{-\\sqrt{2}/2} = 1$, the same as $\\tan\\frac{\\pi}{4}$ because the period is $\\pi$.'
      }
    },
    {
      id: 'sf6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Tangent Facts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For an angle $\\theta$ in standard position, $\\tan\\theta$ equals the',
            options: ['slope of the terminal ray', '$y$-coordinate of the terminal point', 'length of the terminal ray', 'arc length cut off by $\\theta$']
          },
          {
            label: 'The graph of $y = \\tan(3x)$ has vertical asymptotes every',
            options: ['$\\frac{\\pi}{3}$ units', '$\\frac{2\\pi}{3}$ units', '$3\\pi$ units', '$\\pi$ units']
          },
          {
            label: 'Between two consecutive asymptotes, $y = \\tan x$',
            options: ['increases from $-\\infty$ to $+\\infty$', 'decreases from $+\\infty$ to $-\\infty$', 'rises to a maximum then falls', 'stays between $-1$ and $1$']
          }
        ],
        correctAnswers: ['slope of the terminal ray', '$\\frac{\\pi}{3}$ units', 'increases from $-\\infty$ to $+\\infty$'],
        hint1: 'The ray goes through $(0, 0)$ and $(\\cos\\theta, \\sin\\theta)$; compute rise over run.',
        hint2: 'Asymptotes are one period apart, and the period is $\\frac{\\pi}{\\lvert b \\rvert}$.',
        hint3: 'As the ray turns from pointing straight down to straight up, its slope runs through every real number, upward.',
        explanation: '$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ is rise over run for the terminal ray. $\\tan(3x)$ has period $\\frac{\\pi}{3}$, so its asymptotes are $\\frac{\\pi}{3}$ apart. Each branch of $\\tan x$ increases without bound in both directions; it has no maximum or minimum.'
      }
    },
    {
      id: 'sf6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which line is a vertical asymptote of $y = 4\\tan\\left(\\dfrac{\\pi}{2}(x - 1)\\right)$?',
            options: [
              '$x = 4$',
              '$x = 1$',
              '$x = 3$',
              '$x = \\frac{1}{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Asymptotes occur where $\\frac{\\pi}{2}(x - 1) = \\frac{\\pi}{2} + n\\pi$, so $x - 1 = 1 + 2n$ and $x = 2 + 2n$: the even integers $\\ldots, 0, 2, 4, \\ldots$ The lines $x = 1$ and $x = 3$ pass through zeros (where the inside is $0$ and $\\pi$), and $\\frac{1}{2}$ is not of the form $2 + 2n$.'
          },
          {
            question: 'A lighthouse beam turns at a constant rate, once every $10$ s, and its spot on a straight wall $200$ m away is $x(t) = 200\\tan\\left(\\dfrac{\\pi}{5}t\\right)$ meters from the closest point. When is the spot first $200$ m from the closest point?',
            options: [
              '$t = 1.25$ s',
              '$t = 2.5$ s',
              '$t = 5$ s',
              '$t = 1$ s'
            ],
            correctAnswer: 0,
            explanation: '$200\\tan\\left(\\frac{\\pi}{5}t\\right) = 200$ means $\\tan\\left(\\frac{\\pi}{5}t\\right) = 1$, so $\\frac{\\pi}{5}t = \\frac{\\pi}{4}$ and $t = \\frac{5}{4} = 1.25$ s. At $t = 2.5$ s the beam is parallel to the wall (the asymptote), and at $t = 5$ s it points directly away from the wall.'
          }
        ]
      }
    }
  ]
}
