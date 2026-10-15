export const precalcRatesOfChangePart3Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🎯 Rate of Change at a Point

**Part 3 of 7 — Rate of Change at a Point**

### One Point, Not an Interval

An average rate of change needs an interval. The **rate of change at a point** describes how fast the output would change if the input changed right at that point.

You estimate it with what you already know: compute **average rates of change over small intervals containing the point**. The smaller the interval, the better the estimate (when such values exist).

> 💡 Calculus later gives this idea a formal definition. On the AP Precalculus exam you estimate it from numbers, tables, and graphs.

### What the Sign Tells You

- **Positive** rate at a point: as the input increases through that point, the output **increases**
- **Negative** rate at a point: as the input increases through that point, the output **decreases**
      `
    },
    {
      id: 'p3-shrink',
      type: 'text' as const,
      content: `
## Worked Example: $f(x) = x^2$ at $x = 3$

### Intervals Starting at 3

| Interval | Average rate of change |
|:---------|:-----------------------|
| $[3, 4]$ | $\\frac{16 - 9}{1} = 7$ |
| $[3, 3.1]$ | $\\frac{9.61 - 9}{0.1} = 6.1$ |
| $[3, 3.01]$ | $\\frac{9.0601 - 9}{0.01} = 6.01$ |

### Intervals Ending at 3

| Interval | Average rate of change |
|:---------|:-----------------------|
| $[2, 3]$ | $\\frac{9 - 4}{1} = 5$ |
| $[2.9, 3]$ | $\\frac{9 - 8.41}{0.1} = 5.9$ |
| $[2.99, 3]$ | $\\frac{9 - 8.9401}{0.01} = 5.99$ |

The values from the right sit just above $6$ and the values from the left sit just below $6$. An interval with $3$ in its middle lands right on it:

$$[2.9, 3.1]: \\quad \\frac{9.61 - 8.41}{0.2} = \\frac{1.2}{0.2} = 6$$

**Estimate:** the rate of change of $f$ at $x = 3$ is about $6$. Near $x = 3$, the output grows about $6$ units for each $1$ unit of input.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Rate at a Point Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which interval gives the best estimate of the rate of change of $f$ at $x = 5$?',
            options: ['$[4.9, 5.1]$', '$[4, 6.5]$', '$[5, 5.5]$', '$[2, 8]$'],
            correctAnswer: 0,
            explanation: 'The best estimate comes from the smallest interval that contains $x = 5$. The interval $[4.9, 5.1]$ has width $0.2$ and is centered on $5$; the others are wider or reach farther from the point.'
          },
          {
            question: 'A temperature $T(t)$ in °C has $T(2.9) = 18.4$, $T(3) = 18.8$, and $T(3.1) = 19.1$, with $t$ in hours. Using $[2.9, 3.1]$, the rate of change at $t = 3$ is about:',
            options: ['$3.5$ °C per hour', '$0.7$ °C per hour', '$4$ °C per hour', '$3$ °C per hour'],
            correctAnswer: 0,
            explanation: '$\\frac{19.1 - 18.4}{3.1 - 2.9} = \\frac{0.7}{0.2} = 3.5$ °C per hour. The value $0.7$ forgets to divide by the interval width, while $4$ and $3$ use only one side of the point.'
          },
          {
            question: 'The rate of change of $g$ at $x = 2$ is negative. What does this tell you?',
            options: [
              'As $x$ increases through $2$, $g(x)$ decreases',
              'As $x$ increases through $2$, $g(x)$ increases',
              'The output $g(x)$ is negative for $x$ near $2$',
              'The function $g$ has a minimum at $x = 2$'
            ],
            correctAnswer: 0,
            explanation: 'A negative rate of change means the two quantities move in opposite directions: as the input increases, the output decreases. The sign of the rate says nothing about the sign of the output itself.'
          }
        ]
      }
    },
    {
      id: 'p3-compare',
      type: 'text' as const,
      content: `
## Comparing Rates at Two Points

To compare the rates of change at two points, estimate each one with a small interval containing that point, then compare the estimates.

### Example: $f(x) = 2^x$ at $x = 1$ and $x = 3$

| Point | Interval | Average rate of change |
|:------|:---------|:-----------------------|
| $x = 1$ | $[0.9, 1.1]$ | $\\frac{2^{1.1} - 2^{0.9}}{0.2} \\approx 1.39$ |
| $x = 3$ | $[2.9, 3.1]$ | $\\frac{2^{3.1} - 2^{2.9}}{0.2} \\approx 5.55$ |

Both rates are positive, so $f$ is increasing at both points. The rate at $x = 3$ is about $4$ times the rate at $x = 1$, so the graph is much steeper at $x = 3$.

### Reading a Rate in Context

If the rate of change of $T$ at $t = 3$ hours is about $3.5$ °C per hour, then:

> "At $t = 3$ hours, the temperature is increasing at about $3.5$ degrees Celsius per hour."

Over the next $0.1$ hour, that predicts a rise of about $3.5 \\times 0.1 = 0.35$ °C.
      `
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Estimate the Rate** 🧮

For $f(x) = x^2$ near $x = 4$:

**1)** Average rate of change on $[4, 4.1]$:

**2)** Average rate of change on $[3.9, 4]$:

**3)** Your best estimate of the rate of change at $x = 4$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.1', '7.9', '8'],
        hint1: '$f(4.1) = 16.81$ and $f(4) = 16$. Divide the difference by $0.1$.',
        hint2: '$f(3.9) = 15.21$. Compute $\\frac{16 - 15.21}{0.1}$.',
        hint3: 'One estimate is just above and one is just below the same value.',
        explanation: '(1) $\\frac{0.81}{0.1} = 8.1$. (2) $\\frac{0.79}{0.1} = 7.9$. (3) The interval $[3.9, 4.1]$ gives $\\frac{16.81 - 15.21}{0.2} = 8$, between the one-sided values.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rate at a Point Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The rate of change at a point is estimated using:',
            options: ['Average rates on small intervals around it', 'The output value at that point', 'One average rate over the whole domain', 'The $y$-intercept of the graph'],
            correctAnswer: 0
          },
          {
            label: 'Average rates on $[3, 3.1]$, $[3, 3.01]$, $[3, 3.001]$ are $6.1$, $6.01$, $6.001$. The rate at $x = 3$ is about:',
            options: ['$6$', '$6.1$', '$0.001$', '$12$'],
            correctAnswer: 0
          },
          {
            label: 'A positive rate at a point means that as the input increases, the output:',
            options: ['Decreases', 'Increases', 'Stays the same', 'Becomes negative'],
            correctAnswer: 1
          },
          {
            label: 'At $t = 3$ the rate is $3.5$ °C per hour. Over the next $0.1$ hour the temperature rises by about:',
            options: ['$3.5$ °C', '$0.35$ °C', '$35$ °C', '$0.035$ °C'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Average rates on small intervals around it', '$6$', 'Increases', '$0.35$ °C'],
        hint1: 'Shrink the interval around the point.',
        hint2: 'The average rates are closing in on one value.',
        hint3: 'Change in output is about rate times change in input.',
        explanation: 'Rates at a point are estimated from average rates over small intervals containing the point. The values $6.1, 6.01, 6.001$ close in on $6$. A positive rate means the output increases with the input. $3.5 \\times 0.1 = 0.35$ °C.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $g(x) = x^3$, the average rate on $[0.9, 1.1]$ is $3.01$ and on $[1.9, 2.1]$ is $12.01$. How does the rate of change at $x = 2$ compare with the rate at $x = 1$?',
            options: ['About $4$ times as large', 'About $2$ times as large', 'About the same', 'About $8$ times as large'],
            correctAnswer: 0,
            explanation: '$12.01 \\div 3.01 \\approx 4$, so the rate at $x = 2$ is about $4$ times the rate at $x = 1$. Comparing the outputs $g(2) = 8$ and $g(1) = 1$ instead of the rates gives $8$.'
          },
          {
            question: 'A car\'s position is $s(t)$ miles at $t$ hours, with $s(0) = 0$, $s(1.95) = 97.2$, $s(2) = 100$, and $s(2.05) = 103.4$. The car\'s speed at $t = 2$ is about:',
            options: ['$62$ mph', '$6.2$ mph', '$50$ mph', '$100$ mph'],
            correctAnswer: 0,
            explanation: 'Use the small interval $[1.95, 2.05]$: $\\frac{103.4 - 97.2}{0.1} = \\frac{6.2}{0.1} = 62$ mph. The value $50$ mph is the average over the whole first $2$ hours, and $6.2$ forgets to divide by $0.1$.'
          }
        ]
      }
    }
  ]
};
