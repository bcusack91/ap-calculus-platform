export const precalcRatesOfChangePart4Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🌀 Concavity and Changing Rates

**Part 4 of 7 — Concavity and Changing Rates**

### Rates Can Change Too

Compute average rates of change over **consecutive equal-length intervals** and watch how those rates behave.

### Linear Functions: Rates Change at a Rate of Zero

$f(x) = 3x + 2$ at $x = 0, 1, 2, 3$ gives $2, 5, 8, 11$.

| Interval | $[0, 1]$ | $[1, 2]$ | $[2, 3]$ |
|:--|:--|:--|:--|
| Average rate | $3$ | $3$ | $3$ |

The average rates form a **constant** pattern, so they are changing at a rate of **zero**.

### Quadratic Functions: Rates Change at a Constant Rate

$f(x) = x^2 - 4x + 1$ at $x = 0, 1, 2, 3, 4$ gives $1, -2, -3, -2, 1$.

| Interval | $[0, 1]$ | $[1, 2]$ | $[2, 3]$ | $[3, 4]$ |
|:--|:--|:--|:--|:--|
| Average rate | $-3$ | $-1$ | $1$ | $3$ |

The average rates go up by $2$ every interval. They form a **linear** pattern, so they are changing at a **constant** rate.

> 💡 For $f(x) = ax^2 + bx + c$ with intervals of length $h$, consecutive average rates differ by exactly $2ah$. Here $a = 1$ and $h = 1$, so they differ by $2$.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Changing Rates Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A function has values $5, 8, 11, 14, 17$ at $x = 0, 1, 2, 3, 4$. Its average rates over consecutive unit intervals are changing at a rate of:',
            options: ['$0$', '$3$', '$5$', '$1$'],
            correctAnswer: 0,
            explanation: 'Every unit interval has average rate $3$, so the average rates do not change at all: they change at a rate of $0$. The value $3$ is the rate of change of the function itself, which is what makes it linear.'
          },
          {
            question: 'For $f(x) = 2x^2$, the average rates on $[0, 1]$, $[1, 2]$, $[2, 3]$ are $2$, $6$, $10$. From one interval to the next they change by:',
            options: ['$4$ each interval', '$2$ each interval', '$0$ each interval', 'A different amount each time'],
            correctAnswer: 0,
            explanation: '$6 - 2 = 4$ and $10 - 6 = 4$. A quadratic has average rates that change at a constant rate, here $2ah = 2(2)(1) = 4$.'
          },
          {
            question: 'An increasing function has average rates $9, 6, 4, 3$ over consecutive equal intervals. Its graph on that span is:',
            options: ['Increasing and concave down', 'Increasing and concave up', 'Increasing and linear', 'Decreasing and concave up'],
            correctAnswer: 0,
            explanation: 'All the rates are positive, so the function increases. The rates are getting smaller, so the graph bends downward: concave down. It is increasing at a decreasing rate.'
          }
        ]
      }
    },
    {
      id: 'p4-concavity',
      type: 'text' as const,
      content: `
## Concavity from Changing Rates

When the average rate of change over small equal-length intervals is:

- **increasing**, the graph is **concave up** (it bends upward)
- **decreasing**, the graph is **concave down** (it bends downward)

Read the **signed** rates, not their sizes:

| Average rates over equal intervals | Function | Concavity |
|:-----------------------------------|:---------|:----------|
| $2, 5, 9$ (rates increasing) | increasing | concave up |
| $9, 5, 2$ (rates decreasing) | increasing | concave down |
| $-8, -5, -3$ (rates increasing) | decreasing | concave up |
| $-3, -5, -8$ (rates decreasing) | decreasing | concave down |

> ⚠️ For a decreasing function, $-8, -5, -3$ are **increasing** rates even though the drops get smaller. Say "$f$ is decreasing and its rate of change is increasing" to avoid confusion.

## Points of Inflection

A **point of inflection** occurs where the rate of change switches from increasing to decreasing, or from decreasing to increasing. That is where the graph changes concavity.

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:--|:--|:--|:--|:--|:--|:--|:--|
| $g(x)$ | $0$ | $6$ | $10$ | $12$ | $14$ | $18$ | $24$ |

Unit-interval average rates: $6, 4, 2, 2, 4, 6$. The rates decrease until about $x = 3$ and then increase, so the graph is concave down and then concave up, with a point of inflection near $x = 3$.
      `
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Track the Rates** 🧮

For $f(x) = 3x^2$:

**1)** Average rate of change on $[1, 2]$:

**2)** Average rate of change on $[2, 3]$:

**3)** How much do consecutive unit-interval average rates of $f$ differ by?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '15', '6'],
        hint1: '$f(2) = 12$ and $f(1) = 3$.',
        hint2: '$f(3) = 27$ and $f(2) = 12$.',
        hint3: 'Subtract the two rates, or use $2ah$ with $a = 3$ and $h = 1$.',
        explanation: '(1) $12 - 3 = 9$. (2) $27 - 12 = 15$. (3) $15 - 9 = 6 = 2(3)(1)$, a constant change, as expected for a quadratic.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concavity Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a linear function, average rates over consecutive equal intervals are:',
            options: ['Constant', 'Increasing', 'Decreasing', 'Alternating'],
            correctAnswer: 0
          },
          {
            label: 'For a quadratic function, those average rates change at:',
            options: ['A constant rate', 'A rate of exactly zero', 'An increasing rate', 'An unpredictable rate'],
            correctAnswer: 0
          },
          {
            label: 'If average rates increase over all small equal intervals, the graph is:',
            options: ['Concave down', 'Concave up', 'Linear', 'Decreasing'],
            correctAnswer: 1
          },
          {
            label: 'At a point of inflection, the rate of change switches between:',
            options: ['Positive and negative values', 'Increasing and decreasing', 'Being defined and undefined', 'Zero and nonzero'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Constant', 'A constant rate', 'Concave up', 'Increasing and decreasing'],
        hint1: 'A line has the same slope everywhere.',
        hint2: 'Quadratic rates form a linear pattern.',
        hint3: 'Increasing rates bend the graph upward.',
        explanation: 'Linear: constant average rates. Quadratic: average rates change at a constant rate. Increasing rates mean concave up. At a point of inflection the rate of change switches between increasing and decreasing; a switch between positive and negative marks an extremum instead.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A function has unit-interval average rates $6, 4, 2, 2, 4, 6$ on $[0, 6]$. A point of inflection is closest to:',
            options: ['$x = 3$', '$x = 0$', '$x = 6$', '$x = 1$'],
            correctAnswer: 0,
            explanation: 'The rates decrease up to about $x = 3$ and increase after it, so the concavity changes from down to up near $x = 3$. The rates are smallest there, not zero, so it is not a turning point of the function.'
          },
          {
            question: 'A medicine\'s concentration falls, with average rates $-8, -5, -3, -2$ over successive hours. The concentration graph is:',
            options: ['Decreasing and concave up', 'Decreasing and concave down', 'Decreasing and linear throughout', 'Increasing and concave down'],
            correctAnswer: 0,
            explanation: 'The rates are negative, so the concentration decreases. As signed numbers they increase ($-8 < -5 < -3 < -2$), so the graph is concave up: the concentration is dropping more and more slowly.'
          }
        ]
      }
    }
  ]
};
