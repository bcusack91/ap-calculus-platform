export const precalcTrigFunctionsPart6Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Trigonometric Functions — Applied Problems & Modeling

**Part 6 of 7**

Real-world phenomena — tides, temperature, sound, rotation — follow sinusoidal patterns. This part focuses on translating word problems into trig equations.

### Modeling Workflow

| Step | Action |
|:-----|:-------|
| 1 | Identify the **maximum** and **minimum** values |
| 2 | Compute amplitude: $a = \\frac{\\text{max} - \\text{min}}{2}$ |
| 3 | Compute midline: $d = \\frac{\\text{max} + \\text{min}}{2}$ |
| 4 | Determine the **period** $T$, then $b = \\frac{2\\pi}{T}$ |
| 5 | Determine phase shift $c$ from when the cycle starts |
| 6 | Choose sine or cosine based on the starting behavior |
      `
    },
    {
      id: 'p6-example1',
      type: 'text' as const,
      content: `
## 🌊 Example 1: Tidal Height

> **The tide at a harbor has a high of $12$ ft at 6:00 AM and a low of $4$ ft at 12:00 PM. Model the height $h(t)$ where $t$ is hours after midnight.**

| Parameter | Calculation | Value |
|:----------|:------------|:------|
| Amplitude | $\\frac{12 - 4}{2}$ | $a = 4$ |
| Midline | $\\frac{12 + 4}{2}$ | $d = 8$ |
| Period | High to low is half-period: $12 - 6 = 6$ hrs, so $T = 12$ | $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$ |
| Phase shift | Maximum at $t = 6$ | Use cosine starting at max: $c = 6$ |

$$\\boxed{h(t) = 4\\cos\\left(\\frac{\\pi}{6}(t - 6)\\right) + 8}$$

**Check:** $h(6) = 4\\cos(0) + 8 = 12$ ✓ &emsp; $h(12) = 4\\cos(\\pi) + 8 = 4$ ✓
      `
    },
    {
      id: 'p6-example2',
      type: 'text' as const,
      content: `
## 🌡️ Example 2: Monthly Temperature

> **A city's average monthly temperature ranges from $28°F$ in January ($t = 1$) to $82°F$ in July ($t = 7$). Write a model $T(t)$.**

| Parameter | Calculation | Value |
|:----------|:------------|:------|
| Amplitude | $\\frac{82 - 28}{2}$ | $a = 27$ |
| Midline | $\\frac{82 + 28}{2}$ | $d = 55$ |
| Period | $12$ months | $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$ |
| Phase shift | Minimum at $t = 1$, use negative cosine | $c = 1$ |

$$\\boxed{T(t) = -27\\cos\\left(\\frac{\\pi}{6}(t - 1)\\right) + 55}$$

**Why negative cosine?** Cosine normally starts at a maximum. We need it to start at a minimum, so we negate it.

## 🎡 Example 3: Ferris Wheel

> **A Ferris wheel of radius $20$ m has its center $25$ m above ground and takes $3$ minutes per revolution. A rider boards at the bottom.**

Bottom height $= 25 - 20 = 5$ m. &emsp; Top height $= 25 + 20 = 45$ m.

Starting at the bottom (minimum) with period $T = 3$:

$$\\boxed{h(t) = -20\\cos\\left(\\frac{2\\pi}{3}t\\right) + 25}$$

**Check:** $h(0) = -20(1) + 25 = 5$ m ✓ (bottom) &emsp; $h(1.5) = -20(-1) + 25 = 45$ m ✓ (top)
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Modeling Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A pendulum swings from $-15°$ to $15°$ with a period of $2$ seconds. The amplitude is:',
            options: [
              '$30°$',
              '$15°$',
              '$7.5°$',
              '$2°$'
            ],
            correctAnswer: 1,
            explanation: 'Amplitude $= \\frac{15 - (-15)}{2} = \\frac{30}{2} = 15°$.'
          },
          {
            question: 'If a sinusoidal model has period $8$ hours, what is $b$?',
            options: [
              '$\\frac{\\pi}{8}$',
              '$\\frac{\\pi}{4}$',
              '$\\frac{2\\pi}{8} = \\frac{\\pi}{4}$',
              '$8\\pi$'
            ],
            correctAnswer: 2,
            explanation: '$b = \\frac{2\\pi}{T} = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$.'
          },
          {
            question: 'You want a cosine model that starts at a minimum. You should use:',
            options: [
              'Positive cosine',
              'Negative cosine',
              'Positive sine',
              'Negative sine'
            ],
            correctAnswer: 1,
            explanation: '$\\cos(0) = 1$ (maximum). To start at a minimum, negate: $-\\cos(0) = -1$ (minimum).'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Modeling Practice** 🧮

**1)** A sound wave oscillates between $+3$ and $-3$ with a period of $0.01$ seconds. What is $b$ (the angular frequency)? Write as a multiple of $\\pi$ — give just the coefficient (e.g., if $b = 5\\pi$, write $5$). (e.g., period $= 0.5$ s: $b = 2\\pi/0.5 = 4\\pi$, answer: $4$)

**2)** A spring oscillates between heights $2$ cm and $14$ cm. What is the midline (in cm)? Write as an integer. (e.g., min $= 5$, max $= 11$: midline $= (5+11)/2 = 8$)

**3)** A Ferris wheel has radius $30$ m, center $35$ m high, period $4$ min, rider starts at the bottom. What is the rider's height at $t = 1$ min? Write as an integer. (e.g., $h(t) = -20\\cos(\\frac{2\\pi}{3}t) + 25$: $h(0.75) = -20\\cos(\\pi/2) + 25 = 25$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '8', '35'],
        hint1: '$b = \\frac{2\\pi}{0.01} = 200\\pi$.',
        hint2: 'Midline $= \\frac{2 + 14}{2}$.',
        hint3: '$h(t) = -30\\cos(\\frac{2\\pi}{4}t) + 35 = -30\\cos(\\frac{\\pi}{2}t) + 35$. At $t = 1$: $\\cos(\\frac{\\pi}{2}) = 0$.',
        explanation: '1) $b = 2\\pi/0.01 = 200\\pi$, coefficient is $200$. 2) Midline $= (2+14)/2 = 8$ cm. 3) $h(1) = -30\\cos(\\frac{\\pi}{2}) + 35 = -30(0) + 35 = 35$ m.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Modeling Strategy** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find amplitude from data, calculate',
            options: ['$\\text{max} + \\text{min}$', '$\\frac{\\text{max} - \\text{min}}{2}$', '$\\frac{\\text{max} + \\text{min}}{2}$', '$\\text{max} - \\text{min}$']
          },
          {
            label: 'If a cycle takes $T$ units, then $b =$',
            options: ['$T$', '$\\frac{T}{2\\pi}$', '$\\frac{2\\pi}{T}$', '$2\\pi T$']
          },
          {
            label: 'Use cosine when the cycle starts at a',
            options: ['midline', 'maximum or minimum', 'zero crossing', 'random point']
          },
          {
            label: 'A Ferris wheel rider who boards at the bottom needs',
            options: ['positive cosine', 'negative cosine', 'positive sine', 'tangent']
          }
        ],
        correctAnswers: ['$\\frac{\\text{max} - \\text{min}}{2}$', '$\\frac{2\\pi}{T}$', 'maximum or minimum', 'negative cosine'],
        hint1: 'Amplitude is half the total oscillation height.',
        hint2: '$b$ and $T$ are inversely related through $2\\pi$.',
        hint3: 'Cosine starts at its extreme value. Sine starts at the midline.',
        explanation: 'Amplitude $= (\\text{max} - \\text{min})/2$. $b = 2\\pi/T$. Cosine starts at max/min (with sign). Bottom start = minimum = negative cosine.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Ocean depth at a dock ranges from $6$ ft (low tide) to $18$ ft (high tide) with a period of $12.4$ hours. High tide is at $t = 2$. Which model is correct?',
            options: [
              '$d(t) = 6\\cos\\left(\\frac{2\\pi}{12.4}(t-2)\\right) + 12$',
              '$d(t) = 12\\cos\\left(\\frac{2\\pi}{12.4}(t-2)\\right) + 6$',
              '$d(t) = 6\\cos\\left(\\frac{\\pi}{12.4}(t-2)\\right) + 12$',
              '$d(t) = 6\\sin\\left(\\frac{2\\pi}{12.4}(t-2)\\right) + 12$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $= (18-6)/2 = 6$, midline $= (18+6)/2 = 12$. Period $= 12.4$, so $b = 2\\pi/12.4$. High tide (max) at $t = 2$: cosine with phase shift $2$.'
          },
          {
            question: 'A spring\'s height is modeled by $h(t) = 5\\sin(4\\pi t) + 10$. The spring returns to its midline height every ____ seconds.',
            options: [
              '$0.25$',
              '$0.5$',
              '$1$',
              '$2$'
            ],
            correctAnswer: 0,
            explanation: 'Period $= \\frac{2\\pi}{4\\pi} = 0.5$ s. Sine crosses the midline twice per period (going up and going down), so every $0.5/2 = 0.25$ s.'
          }
        ]
      }
    }
  ]
}
