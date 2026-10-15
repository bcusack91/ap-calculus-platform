export const precalcRatesOfChangePart7Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Rates of Change — Complete Synthesis

**Part 7 of 7 — Review & Applications**

### Everything Connected

\`\`\`
Rates of Change Master Map
│
├─ Average Rate of Change
│   ├─ Formula: [f(b)-f(a)]/(b-a)
│   ├─ Geometry: slope of the secant line
│   └─ Motion: average velocity
│
├─ Rate of Change at a Point
│   ├─ Estimate: average rates on small intervals containing the point
│   ├─ Sign: positive -> output increasing, negative -> decreasing
│   └─ Compare two points with matching small intervals
│
├─ Changing Rates
│   ├─ Linear: equal-interval rates are constant
│   ├─ Quadratic: equal-interval rates change at a constant rate
│   ├─ Rates increasing -> concave up
│   └─ Rates decreasing -> concave down
│
└─ Key Points
    ├─ Local max/min: function switches increasing <-> decreasing
    ├─ Point of inflection: rate switches increasing <-> decreasing
    └─ Always report units and the interval or point
\`\`\`
      `
    },
    {
      id: 'p7-review',
      type: 'text' as const,
      content: `
## Key Ideas Reference

| Task | Method |
|:-----|:-------|
| Average rate of change on $[a, b]$ | $\\frac{f(b) - f(a)}{b - a}$ |
| Secant line on $[a, b]$ | $y = f(a) + \\frac{f(b)-f(a)}{b-a}(x - a)$ |
| Rate of change at $x = c$ | Average rate on a small interval containing $c$, such as $[c - 0.1, c + 0.1]$ |
| Linear or quadratic? | Check consecutive equal-interval average rates: constant means linear; changing by a constant amount means quadratic |
| Concavity | Rates increasing: concave up. Rates decreasing: concave down |
| Local extremum | Rate of change switches sign |
| Point of inflection | Rate of change switches between increasing and decreasing |
| Global extremum of a quadratic | At the vertex |

> 💡 Derivatives, tangent-line equations and limit definitions of rate are calculus topics and are not on the AP Precalculus exam.

### Worked Example

$h(t)$ is a plant's height in cm after $t$ weeks:

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:--|:--|:--|:--|:--|:--|
| $h(t)$ | $2$ | $7$ | $10$ | $11$ | $10$ |

- Weekly average rates: $5, 3, 1, -1$ cm per week
- The rates decrease, so $h$ is concave down on $[0, 4]$
- The rates switch from positive to negative around $t = 3$, so $h$ has a local maximum near $t = 3$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Master Rates Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The average rate of change of $f(x) = x^2 + 5x$ on $[1, 3]$ is:',
            options: ['$9$', '$18$', '$12$', '$4.5$'],
            correctAnswer: 0,
            explanation: '$f(3) = 24$ and $f(1) = 6$, so $\\frac{24 - 6}{3 - 1} = 9$. Forgetting to divide by $2$ gives $18$, and dividing by $4$ instead gives $4.5$.'
          },
          {
            question: 'Using the plant table $h = 2, 7, 10, 11, 10$ at $t = 0, 1, 2, 3, 4$, which describes $h$ on $[0, 4]$?',
            options: [
              'Concave down, with a local maximum near $t = 3$',
              'Concave up, with a local maximum near $t = 3$',
              'Concave down, with a local minimum near $t = 3$',
              'Concave down, with no local extremum'
            ],
            correctAnswer: 0,
            explanation: 'The weekly rates $5, 3, 1, -1$ decrease, so the graph is concave down. The outputs rise to $11$ and then fall, so there is a local maximum near $t = 3$.'
          },
          {
            question: 'A ball\'s height is $s(t) = -16t^2 + 96t$ feet. Its maximum height occurs at:',
            options: ['$t = 2$', '$t = 3$', '$t = 4$', '$t = 6$'],
            correctAnswer: 1,
            explanation: 'A quadratic has its global maximum at the vertex, $t = -\\frac{96}{2(-16)} = 3$ seconds. The ball lands at $t = 6$, which is a zero, not the peak.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice:**

**1)** Average rate of change of $f(x) = x^2$ on $[1, 5]$:

**2)** Estimate the rate of change of $f(x) = x^2$ at $x = 3$ using $[2.9, 3.1]$:

**3)** A quadratic has average rates $4, 7, 10$ over consecutive equal intervals. What is the next one?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '6', '13'],
        hint1: '$\\frac{25 - 1}{5 - 1}$.',
        hint2: '$f(3.1) = 9.61$ and $f(2.9) = 8.41$. Divide the difference by $0.2$.',
        hint3: 'Quadratic rates change by the same amount every interval.',
        explanation: '(1) $\\frac{24}{4} = 6$. (2) $\\frac{9.61 - 8.41}{0.2} = 6$. (3) The rates rise by $3$ each time, so the next is $13$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Synthesis** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The rate of change at a point is estimated by:',
            options: ['The output value at that point', 'Average rates on small intervals around it', 'The average of all the outputs', 'The slope from the origin to the point'],
            correctAnswer: 1
          },
          {
            label: 'Equal average rates over consecutive equal intervals indicate a:',
            options: ['Quadratic function', 'Concave up graph', 'Linear function', 'Point of inflection'],
            correctAnswer: 2
          },
          {
            label: 'An increasing function whose rates keep shrinking has a graph that is:',
            options: ['Concave up', 'Concave down', 'Linear', 'Decreasing'],
            correctAnswer: 1
          },
          {
            label: 'The units of a rate of change are:',
            options: ['Input units per output unit', 'Output units times input units', 'Output units per input unit', 'Output units only'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Average rates on small intervals around it', 'Linear function', 'Concave down', 'Output units per input unit'],
        hint1: 'Shrink the interval around the point.',
        hint2: 'A constant rate of change means a line.',
        hint3: 'Rising but flattening out.',
        explanation: 'Rates at a point come from small-interval average rates. Constant equal-interval rates mean linear. Shrinking positive rates mean concave down. Rates are output units per input unit.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The average rate of change of $g(x) = x^3 - 3x$ on $[-1, 1]$ is:',
            options: ['$-2$', '$2$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: '$g(1) = -2$ and $g(-1) = 2$, so $\\frac{-2 - 2}{1 - (-1)} = \\frac{-4}{2} = -2$. Subtracting in mismatched order gives $2$.'
          },
          {
            question: 'An increasing quantity has average rates $12, 9, 6, 3$ over successive equal intervals and follows a quadratic model. The next average rate is:',
            options: ['$0$', '$-6$', '$-3$', '$1.5$'],
            correctAnswer: 0,
            explanation: 'Quadratic rates change by a constant amount, here $-3$ per interval, so the next rate is $3 - 3 = 0$. Halving each rate would describe a different model.'
          }
        ]
      }
    }
  ]
};
