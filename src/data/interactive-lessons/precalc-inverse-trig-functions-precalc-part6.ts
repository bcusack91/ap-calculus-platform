export const precalcInverseTrigPart6Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🎡 Inverse Trig in Periodic Models

**Part 6 of 7**

Tides, Ferris wheels, daylight and temperature are modeled by sinusoidal functions. Asking *"when does the quantity reach a given value?"* means solving a trig equation, and when the value is not special, the inverse trig function is the only way in.

### The Recipe

For a model $f(t) = a\\sin(b(t - c)) + d$ (or cosine):

1. **Set** $f(t)$ equal to the target value and **isolate** the sine or cosine: $\\sin(\\text{inner}) = k$.
2. **Apply the inverse** to get one value of the inner angle: $\\text{inner} = \\arcsin k$.
3. **Use symmetry** for the other inner angle in one period ($\\pi - \\arcsin k$ for sine, $2\\pi - \\arccos k$ for cosine) and add multiples of $2\\pi$ if the domain covers more than one cycle.
4. **Undo the inner expression** to get $t$, and keep only the times inside the context's domain.

> ⚠️ An inverse trig function gives **one** angle. A context almost always has a second (and third, …) answer. Check the domain before you stop.
      `
    },
    {
      id: 'p6-periodic',
      type: 'text' as const,
      content: `
## 📝 Worked Examples: A Ferris Wheel

A rider's height is $h(t) = 10\\sin\\!\\left(\\frac{\\pi}{20}t\\right) + 12$ meters, $t$ in seconds, for one 40-second turn ($0 \\le t \\le 40$).

### Example 1: A special value

When is the rider first $17$ m high?

$$10\\sin\\!\\left(\\frac{\\pi}{20}t\\right) + 12 = 17 \\implies \\sin\\!\\left(\\frac{\\pi}{20}t\\right) = 0.5$$

$$\\frac{\\pi}{20}t = \\arcsin(0.5) = \\frac{\\pi}{6} \\implies t = \\frac{20}{6} = \\frac{10}{3} \\approx 3.33 \\text{ s}$$

### Example 2: A calculator value, and the second solution

When is the rider $15$ m high?

$$\\sin\\!\\left(\\frac{\\pi}{20}t\\right) = 0.3 \\implies \\frac{\\pi}{20}t = \\arcsin(0.3) \\approx 0.3047 \\implies t \\approx 1.94 \\text{ s}$$

$\\arcsin$ only returns the angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Sine is also $0.3$ at $\\pi - 0.3047$, which gives the second time in the turn:

$$\\frac{\\pi}{20}t = \\pi - 0.3047 \\implies t \\approx 20 - 1.94 = 18.06 \\text{ s}$$

### Example 3: A value below the midline

When is the rider $7$ m high? Then $\\sin\\!\\left(\\frac{\\pi}{20}t\\right) = -0.5$. On $[0, 2\\pi)$ sine is $-\\frac{1}{2}$ at $\\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$ (the inverse gives $-\\frac{\\pi}{6}$; add $2\\pi$ and reflect), so

$$t = \\frac{7\\pi}{6}\\cdot\\frac{20}{\\pi} = \\frac{70}{3} \\approx 23.3 \\text{ s} \\qquad t = \\frac{11\\pi}{6}\\cdot\\frac{20}{\\pi} = \\frac{110}{3} \\approx 36.7 \\text{ s}$$

Both times are in $[0, 40]$, so both count. The rider is **below** $7$ m between them, for $\\frac{70}{3} < t < \\frac{110}{3}$.
      `
    },
    {
      id: 'p6-temperature',
      type: 'text' as const,
      content: `
## 🌡️ A Cosine Model

The temperature in a greenhouse is $T(t) = 6\\cos\\!\\left(\\frac{\\pi}{12}t\\right) + 70$ degrees, $t$ hours after noon, $0 \\le t < 24$.

### Example 4: When is the temperature $66$ degrees?

$$6\\cos\\!\\left(\\frac{\\pi}{12}t\\right) + 70 = 66 \\implies \\cos\\!\\left(\\frac{\\pi}{12}t\\right) = -\\frac{2}{3}$$

The inverse gives $\\arccos\\!\\left(-\\frac{2}{3}\\right) \\approx 2.300$, and the cosine symmetry gives the second inner angle $2\\pi - 2.300 \\approx 3.983$. Undo the inner expression (multiply by $\\frac{12}{\\pi}$):

$$t \\approx 2.300\\cdot\\frac{12}{\\pi} \\approx 8.79 \\text{ h} \\qquad t \\approx 3.983\\cdot\\frac{12}{\\pi} \\approx 15.21 \\text{ h}$$

So the temperature is $66$ degrees at about 8:47 p.m. and about 3:13 a.m., and it is **below** $66$ degrees between those times.

> 💡 With a cosine model the two inner angles are $\\theta_1$ and $2\\pi - \\theta_1$; with a sine model they are $\\theta_1$ and $\\pi - \\theta_1$. The symmetry comes from the unit circle, not from the context.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Modeling Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The depth of water at a dock is $D(t) = 3\\sin\\!\\left(\\frac{\\pi}{6}t\\right) + 8$ feet, $t$ hours after midnight. Which equation gives the **first** time the depth is $9$ feet?',
            options: [
              '$t = \\frac{6}{\\pi}\\arcsin\\!\\left(\\frac{1}{3}\\right)$',
              '$t = \\frac{\\pi}{6}\\arcsin\\!\\left(\\frac{1}{3}\\right)$',
              '$t = \\frac{6}{\\pi}\\arcsin(9)$',
              '$t = \\frac{6}{\\pi}\\sin\\!\\left(\\frac{1}{3}\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'Isolate: $\\sin\\!\\left(\\frac{\\pi}{6}t\\right) = \\frac{1}{3}$, so $\\frac{\\pi}{6}t = \\arcsin\\frac{1}{3}$ and $t = \\frac{6}{\\pi}\\arcsin\\frac{1}{3} \\approx 0.65$ h. Multiplying by $\\frac{\\pi}{6}$ instead of dividing undoes the inner expression the wrong way, $\\arcsin(9)$ is undefined (the sine was not isolated), and $\\sin\\frac{1}{3}$ applies the function instead of its inverse.'
          },
          {
            question: 'For the same dock, $\\frac{6}{\\pi}\\arcsin\\!\\left(\\frac{1}{3}\\right) \\approx 0.65$ hours. The **second** time in the first 12 hours that the depth is $9$ feet is approximately:',
            options: [
              '$6 - 0.65 = 5.35$ hours',
              '$12 - 0.65 = 11.35$ hours',
              '$6 + 0.65 = 6.65$ hours',
              '$0.65 + \\pi \\approx 3.79$ hours'
            ],
            correctAnswer: 0,
            explanation: 'The second inner angle is $\\pi - \\arcsin\\frac{1}{3}$, and multiplying by $\\frac{6}{\\pi}$ gives $6 - 0.65 = 5.35$ hours (half a period minus the first time). $12 - 0.65$ would use $2\\pi - \\theta_1$, the cosine pattern, $6.65$ is where the depth is $7$ feet, and adding $\\pi$ to a time mixes angle and time units.'
          },
          {
            question: 'A rider\'s height is $h(t) = 20 - 15\\cos\\!\\left(\\frac{\\pi}{10}t\\right)$ meters. For how many values of $t$ in $[0, 40]$ is $h(t) = 30$?',
            options: [
              '$2$',
              '$1$',
              '$4$',
              '$8$'
            ],
            correctAnswer: 2,
            explanation: '$\\cos\\!\\left(\\frac{\\pi}{10}t\\right) = -\\frac{2}{3}$ has two solutions per period, and the period is $\\frac{2\\pi}{\\pi/10} = 20$ s, so $[0, 40]$ holds two periods and four solutions. The inverse alone gives one of them.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Solve in Context** 🧮

A rider's height on a Ferris wheel is $h(t) = 10\\sin\\!\\left(\\frac{\\pi}{20}t\\right) + 12$ meters for $0 \\le t \\le 40$ seconds.

**1)** The first time the rider is $7$ m high is $t = \\,?$ seconds. Give the exact value as a fraction (type \`25/3\`) or a decimal.

**2)** The second time the rider is $7$ m high is $t = \\,?$ seconds (fraction or decimal).

**3)** The first time the rider is $20$ m high, to three decimal places: $t \\approx \\,?$ seconds. (e.g., for $18$ m: $\\sin(\\cdot) = 0.6$, $\\arcsin 0.6 \\approx 0.644$, $t \\approx 0.644\\cdot\\frac{20}{\\pi} \\approx 4.098$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70/3', '110/3', '5.903'],
        hint1: '$\\sin\\!\\left(\\frac{\\pi}{20}t\\right) = -\\frac{1}{2}$. The first inner angle in $[0, 2\\pi)$ with sine $-\\frac{1}{2}$ is $\\frac{7\\pi}{6}$.',
        hint2: 'The other inner angle is $\\frac{11\\pi}{6}$; multiply by $\\frac{20}{\\pi}$.',
        hint3: '$\\sin\\!\\left(\\frac{\\pi}{20}t\\right) = 0.8$, so $\\frac{\\pi}{20}t = \\arcsin 0.8 \\approx 0.9273$ and $t = 0.9273\\cdot\\frac{20}{\\pi}$.',
        explanation: '1) $\\frac{7\\pi}{6}\\cdot\\frac{20}{\\pi} = \\frac{70}{3} \\approx 23.33$ s. 2) $\\frac{11\\pi}{6}\\cdot\\frac{20}{\\pi} = \\frac{110}{3} \\approx 36.67$ s. 3) $t \\approx 0.9273 \\cdot 6.366 \\approx 5.903$ s (the second time is $20 - 5.903 \\approx 14.097$ s).'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Set Up the Solution** 🔽

Hours of daylight in a city are $L(t) = 2.5\\sin\\!\\left(\\frac{2\\pi}{365}(t - 80)\\right) + 12$, where $t$ is the day of the year. On which days are there exactly $13$ hours of daylight?
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After isolating, $\\sin\\!\\left(\\frac{2\\pi}{365}(t - 80)\\right) =$',
            options: ['$0.4$', '$2.5$', '$13$', '$0.52$']
          },
          {
            label: 'The first inner angle is $\\arcsin(0.4) \\approx$',
            options: ['$0.412$', '$1.159$', '$0.390$', '$23.6$']
          },
          {
            label: 'The second inner angle in one cycle is',
            options: ['$\\pi - 0.412 \\approx 2.730$', '$2\\pi - 0.412 \\approx 5.871$', '$0.412 + \\pi \\approx 3.554$', '$-0.412$']
          },
          {
            label: 'Undoing the inner expression, the first day is $t \\approx 80 + 0.412\\cdot\\frac{365}{2\\pi} \\approx$',
            options: ['$104$', '$24$', '$56$', '$127$']
          }
        ],
        correctAnswers: ['$0.4$', '$0.412$', '$\\pi - 0.412 \\approx 2.730$', '$104$'],
        hint1: '$2.5\\sin(\\cdot) + 12 = 13 \\Rightarrow 2.5\\sin(\\cdot) = 1 \\Rightarrow \\sin(\\cdot) = 0.4$.',
        hint2: '$\\arcsin$ returns a Quadrant I angle for a positive input; $1.159 = \\arccos 0.4$ is the wrong inverse.',
        hint3: 'Sine model: the second angle is $\\pi - \\theta_1$. Then $t = 80 + \\theta\\cdot\\frac{365}{2\\pi}$, and $0.412 \\cdot 58.1 \\approx 24$.',
        explanation: '$\\sin(\\cdot) = 0.4$; $\\arcsin 0.4 \\approx 0.412$; the sine partner is $\\pi - 0.412 \\approx 2.730$. Then $t \\approx 80 + 0.412 \\cdot 58.1 \\approx 104$ (about mid-April); the second day is $80 + 2.730 \\cdot 58.1 \\approx 239$ (late August).'
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
            question: 'The height of a piston is $y(t) = 4\\cos(3t) + 6$ cm, $t$ in seconds. Which expression gives the first positive time when $y = 7$?',
            options: [
              '$t = \\frac{1}{3}\\arccos\\!\\left(\\frac{1}{4}\\right)$',
              '$t = 3\\arccos\\!\\left(\\frac{1}{4}\\right)$',
              '$t = \\frac{1}{3}\\arccos(7)$',
              '$t = \\frac{1}{3}\\cos\\!\\left(\\frac{1}{4}\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'Isolate: $\\cos(3t) = \\frac{1}{4}$, so $3t = \\arccos\\frac{1}{4}$ and $t = \\frac{1}{3}\\arccos\\frac{1}{4} \\approx 0.439$ s. Multiplying by $3$ undoes the inner expression the wrong way, $\\arccos(7)$ is undefined, and $\\cos\\frac{1}{4}$ applies the function instead of its inverse.'
          },
          {
            question: 'Solve: $3\\arctan(x) = \\pi$',
            options: [
              '$x = \\sqrt{3}$',
              '$x = 1$',
              '$x = \\frac{\\pi}{3}$',
              '$x = \\frac{\\sqrt{3}}{3}$'
            ],
            correctAnswer: 0,
            explanation: '$\\arctan(x) = \\frac{\\pi}{3}$, so $x = \\tan\\frac{\\pi}{3} = \\sqrt{3}$. $\\frac{\\sqrt{3}}{3}$ is $\\tan\\frac{\\pi}{6}$, and $\\frac{\\pi}{3}$ is the angle rather than its tangent.'
          }
        ]
      }
    }
  ]
};
