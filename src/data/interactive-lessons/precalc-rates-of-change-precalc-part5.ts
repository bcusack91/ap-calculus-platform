export const precalcRatesOfChangePart5Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🚗 Rates in Context

**Part 5 of 7 — Applications**

### Say What the Number Means

A rate of change in context needs three things:

1. **Value**: the number
2. **Units**: output units per input unit
3. **Interval or point**: where the rate applies

**Good:** "From $t = 2$ to $t = 6$ minutes, the volume of water decreased at an average rate of $15$ liters per minute."

**Incomplete:** "The rate is $-15$." (no units, no interval, no meaning)

### Motion Along a Line

For an object with position $s(t)$:

| Quantity | How to find it |
|:---------|:---------------|
| Average velocity on $[a, b]$ | $\\frac{s(b) - s(a)}{b - a}$, the average rate of change of position |
| Velocity at an instant | Estimate with average velocities over small intervals |
| Speed | The size of the velocity, ignoring direction |

Positive velocity means the position is increasing; negative velocity means it is decreasing.
      `
    },
    {
      id: 'p5-example',
      type: 'text' as const,
      content: `
## Worked Example: A Ball Thrown Upward

$s(t) = -16t^2 + 64t + 80$ feet, $t$ in seconds.

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:--|:--|:--|:--|:--|:--|:--|
| $s(t)$ | $80$ | $128$ | $144$ | $128$ | $80$ | $0$ |

**Average velocities over each second:** $48, 16, -16, -48, -80$ ft/s. They drop by $32$ every second, a constant change, because $s$ is quadratic.

**Highest point:** a quadratic's global maximum is at its vertex, $t = -\\frac{64}{2(-16)} = 2$. The maximum height is $s(2) = 144$ feet. The average velocities switch from positive to negative across $t = 2$.

**Velocity at $t = 1$:** use $[0.9, 1.1]$:

$$\\frac{s(1.1) - s(0.9)}{0.2} = \\frac{131.04 - 124.64}{0.2} = 32 \\text{ ft/s}$$

At $t = 1$ second the ball is rising at about $32$ feet per second.

**Whole flight:** the ball lands at $t = 5$. Average velocity on $[0, 5]$ is $\\frac{0 - 80}{5} = -16$ ft/s: on average it lost $16$ feet of height per second.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Rates in Context Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $s(t) = -16t^2 + 64t + 80$, the average velocity on $[1, 3]$ is:',
            options: ['$0$ ft/s', '$16$ ft/s', '$32$ ft/s', '$-16$ ft/s'],
            correctAnswer: 0,
            explanation: '$s(3) = 128$ and $s(1) = 128$, so $\\frac{128 - 128}{2} = 0$. The ball rose and then fell back to the same height, so its average velocity over that interval is zero.'
          },
          {
            question: 'Water volume $V(t)$ is in liters and $t$ in minutes. The average rate of change of $V$ on $[2, 6]$ is $-15$. Which interpretation is correct?',
            options: [
              'From minute $2$ to minute $6$, the volume fell by $15$ liters per minute on average',
              'From minute $2$ to minute $6$, the volume fell by a total of $15$ liters',
              'From minute $2$ to minute $6$, exactly $15$ liters drained in every single minute',
              'At minute $6$, the average volume in the tank was $15$ liters'
            ],
            correctAnswer: 0,
            explanation: 'An average rate is a per-minute average over the interval, so the total drop was $15 \\cdot 4 = 60$ liters. It does not promise the same drop each minute, and it is not a volume.'
          },
          {
            question: 'A population is $P(t) = 200(1.05)^t$. The average rate of change from $t = 0$ to $t = 2$ years is:',
            options: ['$10.25$ per year', '$20.50$ per year', '$10$ per year', '$110.25$ per year'],
            correctAnswer: 0,
            explanation: '$P(0) = 200$ and $P(2) = 200(1.1025) = 220.5$, so $\\frac{20.5}{2} = 10.25$ per year. Taking $5\\%$ of $200$ gives $10$, which ignores compounding, and $20.50$ forgets to divide by $2$.'
          }
        ]
      }
    },
    {
      id: 'p5-distance',
      type: 'text' as const,
      content: `
## Displacement vs. Total Distance

**Displacement** on $[a, b]$ is the change in position, $s(b) - s(a)$. It can be positive, negative, or zero.

**Total distance** adds up every stretch of movement regardless of direction.

### Example

A particle starts at $s(0) = 2$, moves right to $s(1) = 7$, then left to $s(3) = 1$.

- Displacement: $s(3) - s(0) = 1 - 2 = -1$ (net $1$ unit left)
- Total distance: $5 + 6 = 11$ units
- Average velocity on $[0, 3]$: $\\frac{-1}{3} \\approx -0.33$ units per second

Average velocity uses displacement, so it can be zero even when the object moved a lot.
      `
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
For $s(t) = -16t^2 + 48t$ feet, $t$ in seconds:

**1)** Average velocity on $[0, 1]$ (ft/s):

**2)** Average velocity on $[1, 2]$ (ft/s):

**3)** Maximum height (feet), found at the vertex:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '0', '36'],
        hint1: '$s(1) = -16 + 48 = 32$ and $s(0) = 0$.',
        hint2: '$s(2) = -64 + 96 = 32$, the same height as at $t = 1$.',
        hint3: 'The vertex is at $t = -\\frac{48}{2(-16)} = 1.5$. Evaluate $s(1.5)$.',
        explanation: '(1) $\\frac{32 - 0}{1} = 32$ ft/s. (2) $\\frac{32 - 32}{1} = 0$ ft/s. (3) $s(1.5) = -36 + 72 = 36$ feet.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Motion Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average velocity on $[a, b]$ is the average rate of change of:',
            options: ['Speed', 'Position', 'Acceleration', 'Time'],
            correctAnswer: 1
          },
          {
            label: 'Displacement can be:',
            options: ['Positive, or zero, but never negative', 'Positive or negative, never zero', 'Positive, negative, or zero', 'Negative or zero only'],
            correctAnswer: 2
          },
          {
            label: 'An object moves right, then left the same distance:',
            options: ['Displacement $0$, distance $> 0$', 'Displacement $0$, distance $0$', 'Displacement $> 0$, distance $> 0$', 'Displacement $> 0$, distance $0$'],
            correctAnswer: 0
          },
          {
            label: 'A quadratic position has average velocities $48, 16, -16, -48$ over consecutive seconds. They change by:',
            options: ['$-16$ per second', '$-32$ each second', '$0$ each second', '$32$ each second'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Position', 'Positive, negative, or zero', 'Displacement $0$, distance $> 0$', '$-32$ each second'],
        hint1: 'Velocity measures how position changes.',
        hint2: 'You can end ahead of, behind, or exactly at your start.',
        hint3: 'Subtract consecutive average velocities.',
        explanation: 'Average velocity is the average rate of change of position. Displacement can have any sign. A round trip has zero displacement but positive distance. $16 - 48 = -32$, and the change is the same every second because the position is quadratic.'
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
            question: 'A car\'s odometer reads $12{,}040$ miles at 1:00 PM and $12{,}190$ miles at 3:30 PM. Its average speed was:',
            options: ['$60$ mph', '$75$ mph', '$150$ mph', '$50$ mph'],
            correctAnswer: 0,
            explanation: 'The car traveled $150$ miles in $2.5$ hours, and $\\frac{150}{2.5} = 60$ mph. Using $2$ hours gives $75$ and using $3$ hours gives $50$.'
          },
          {
            question: 'For $s(t) = -16t^2 + 64t + 80$ feet, the average rate of change on $[0.9, 1.1]$ is $32$ ft/s. The best interpretation is:',
            options: [
              'At $t = 1$ s the ball is rising at about $32$ feet per second',
              'At $t = 1$ s the ball falls at about $32$ feet per second',
              'At $t = 1$ s the ball is about $32$ feet above the ground',
              'During the first second the ball rose a total of $32$ feet'
            ],
            correctAnswer: 0,
            explanation: 'A small interval around $t = 1$ estimates the velocity at that instant, and a positive value means the height is increasing. The height at $t = 1$ is $128$ feet, and the rise over the first second is $48$ feet.'
          }
        ]
      }
    }
  ]
};
