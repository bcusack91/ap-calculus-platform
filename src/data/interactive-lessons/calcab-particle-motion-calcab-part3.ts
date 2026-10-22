import { pmVelocity } from '@/data/lesson-figures/calcab'

export const calcabParticleMotionPart3Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 3 of 5 — Motion from Graphs and Tables**

AP questions often give the motion as a **graph of velocity** or a **table of positions** instead of a formula. The derivative ideas from Parts 1 and 2 still decide everything.

The next screen shows the velocity graph used throughout this part.`
    },
    {
      id: 'pm3-graph',
      type: 'text' as const,
      figure: pmVelocity,
      content: `### Reading the Velocity Graph Above

| What you want | What to look at | For this graph |
|:---|:---|:---|
| Direction | Is the graph above or below the $t$-axis? | Right on $(0, 2)$ and $(6, 8)$; left on $(2, 6)$ |
| Direction changes | Where $v$ **changes sign** (crosses the axis) | $t = 2$ and $t = 6$ |
| Acceleration $a(t) = v'(t)$ | The **slope** of the velocity graph | $a = -2$ on $(0, 3)$, $0$ on $(3, 5)$, $2$ on $(5, 7)$, $0$ on $(7, 8)$ |
| Speed | The **distance** of the graph from the $t$-axis | Speed $2$ on $(3, 5)$, even though $v = -2$ there |

> **Key Fact:** At the corners $t = 3, 5, 7$ the velocity graph has no single slope, so $a(t)$ does not exist there.`
    },
    {
      id: 'pm3-speed',
      type: 'text' as const,
      content: `### Speeding Up and Slowing Down on a Graph

Speed is $|v(t)|$, the distance from the graph to the $t$-axis.

- **Speeding up** when the graph moves **away** from the axis: on $(2, 3)$ ($v < 0$, $a < 0$) and on $(6, 7)$ ($v > 0$, $a > 0$).
- **Slowing down** when the graph moves **toward** the axis: on $(0, 2)$ ($v > 0$, $a < 0$) and on $(5, 6)$ ($v < 0$, $a > 0$).
- **Constant speed** where the graph is flat: $(3, 5)$ and $(7, 8)$.

This is the same sign rule as Part 2: same signs of $v$ and $a$ means speeding up.

### Estimating Velocity from a Table of Positions

| $t$ (seconds) | $0$ | $2$ | $5$ | $9$ |
|:---:|:---:|:---:|:---:|:---:|
| $s(t)$ (meters) | $1$ | $7$ | $10$ | $4$ |

Estimate $v(3.5)$ with the interval that brackets $t = 3.5$:

$$v(3.5) \\approx \\frac{s(5) - s(2)}{5 - 2} = \\frac{10 - 7}{3} = 1 \\text{ meter per second}$$

**Interpretation:** at $t = 3.5$ seconds the particle's position is increasing at about $1$ meter per second.

> **AP Tip:** Name the units in an interpretation: position in meters, velocity in meters per second, acceleration in meters per second per second.`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      figure: pmVelocity,
      content: `**Use the velocity graph** 🎯

`,
      exercise: {
        questions: [
          {
            question: 'On which interval is the particle moving left?',
            options: ['$(2, 6)$', '$(0, 2)$', '$(3, 5)$ only', '$(6, 8)$'],
            correctAnswer: 0,
            explanation: 'The particle moves left where $v(t) < 0$, which is where the graph is below the $t$-axis: $(2, 6)$. On $(0, 2)$ and $(6, 8)$ the velocity is positive, and $(3, 5)$ is only part of the leftward interval.'
          },
          {
            question: 'What is the acceleration at $t = 1$?',
            options: ['$-2$', '$2$', '$4$', '$0$'],
            correctAnswer: 0,
            explanation: 'Acceleration is the slope of the velocity graph. On $(0, 3)$ the graph falls from $4$ to $-2$, a slope of $\\frac{-2 - 4}{3} = -2$. The height $v(1) = 2$ is the velocity, not the acceleration.'
          },
          {
            question: 'On which interval is the speed increasing?',
            options: ['$(2, 3)$', '$(0, 2)$', '$(5, 6)$', '$(3, 5)$'],
            correctAnswer: 0,
            explanation: 'On $(2, 3)$, $v < 0$ and $a < 0$: same signs, so the graph moves away from the axis and the speed increases. On $(0, 2)$ and $(5, 6)$ the signs differ (slowing down), and on $(3, 5)$ the speed is constant.'
          }
        ]
      }
    },
    {
      id: 'pm3-dropdown',
      type: 'dropdown-select' as const,
      figure: pmVelocity,
      content: `**Read the same velocity graph** 🔍

`,
      exercise: {
        dropdowns: [
          {
            label: 'At $t = 4$, the acceleration is',
            options: ['$0$', '$-2$', '$2$', 'undefined'],
            correctAnswers: ['$0$'],
            hints: ['On $(3, 5)$ the velocity graph is flat.'],
            explanation: 'The graph is horizontal on $(3, 5)$, so its slope, the acceleration, is $0$ at $t = 4$. The particle moves left at a constant speed of $2$.'
          },
          {
            label: 'The particle changes direction at',
            options: ['$t = 2$ and $t = 6$', '$t = 3$ and $t = 5$', '$t = 2$ only', '$t = 7$ only'],
            correctAnswers: ['$t = 2$ and $t = 6$'],
            hints: ['Look for where $v$ changes sign.'],
            explanation: '$v$ changes from positive to negative at $t = 2$ and from negative to positive at $t = 6$. The corners at $t = 3, 5, 7$ change the acceleration, not the direction.'
          },
          {
            label: 'On $(5, 6)$ the particle is',
            options: ['slowing down', 'speeding up', 'at rest', 'moving right'],
            correctAnswers: ['slowing down'],
            hints: ['Compare the signs of $v$ and $a$ on $(5, 6)$.'],
            explanation: 'On $(5, 6)$, $v < 0$ but the graph rises, so $a = 2 > 0$. Opposite signs mean the particle is slowing down as it heads toward rest at $t = 6$.'
          }
        ]
      }
    },
    {
      id: 'pm3-input',
      type: 'input-box' as const,
      content: `**Estimate from a table.** ✍️

| $t$ (seconds) | $0$ | $2$ | $5$ | $9$ |
|:---:|:---:|:---:|:---:|:---:|
| $s(t)$ (meters) | $1$ | $7$ | $10$ | $4$ |`,
      exercise: {
        question: 'Use the table to estimate $v(7)$ in meters per second. (Decimal or fraction.)',
        correctAnswer: '-1.5',
        acceptableAnswers: ['-1.5', '-3/2'],
        hints: [
          'Use the two table times that bracket $t = 7$: $t = 5$ and $t = 9$.',
          '$\\frac{s(9) - s(5)}{9 - 5}$.'
        ],
        explanation: '$v(7) \\approx \\frac{s(9) - s(5)}{9 - 5} = \\frac{4 - 10}{4} = -1.5$ meters per second: near $t = 7$ the position is decreasing, so the particle is moving left.'
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- On a velocity graph: sign gives direction, slope gives acceleration, distance from the axis gives speed
- Direction changes only where $v$ changes sign
- From a position table, estimate $v$ with the difference quotient over the bracketing interval
- Interpret rates with units: meters per second, meters per second per second

> **Up Next:** Part 4 — AP-Style Workshop.`
    }
  ]
};
