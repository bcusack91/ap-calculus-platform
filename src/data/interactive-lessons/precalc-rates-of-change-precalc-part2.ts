export const precalcRatesOfChangePart2Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📏 Secant Lines

**Part 2 of 7 — Secant Lines**

### The Line Behind Every Average Rate

A **secant line** passes through two points on a graph. For a function $f$ on the closed interval $[a, b]$, the secant line joins $(a, f(a))$ and $(b, f(b))$, and its slope is the average rate of change:

$$\\text{slope of secant} = \\frac{f(b) - f(a)}{b - a}$$

### A Constant Rate That Does the Same Job

The average rate of change is the **constant rate of change that yields the same change in output** as the function produced on that interval.

Example: a tank holds $200$ liters at $t = 0$ minutes and $120$ liters at $t = 4$ minutes. The average rate of change is

$$\\frac{120 - 200}{4 - 0} = -20 \\text{ liters per minute}$$

The water may have drained unevenly, but a steady drain of $20$ liters per minute for $4$ minutes would produce exactly the same total change of $-80$ liters. The secant line is the graph of that steady drain.
      `
    },
    {
      id: 'p2-equation',
      type: 'text' as const,
      content: `
## Writing a Secant Line's Equation

Use the slope and either endpoint in point-slope form:

$$y = f(a) + \\frac{f(b)-f(a)}{b-a}\\,(x - a)$$

### Example 1: $f(x) = x^3$ on $[1, 2]$

- Endpoints: $(1, 1)$ and $(2, 8)$
- Slope: $\\frac{8 - 1}{2 - 1} = 7$
- Equation: $y = 1 + 7(x - 1)$, which simplifies to $y = 7x - 6$

Check the other endpoint: $7(2) - 6 = 8$. ✓

### Example 2: From a Table

| $t$ (years) | $0$ | $2$ | $5$ | $9$ |
|:--|:--|:--|:--|:--|
| $P(t)$ (thousand people) | $40$ | $46$ | $61$ | $70$ |

- On $[0, 5]$: $\\frac{61 - 40}{5 - 0} = 4.2$ thousand people per year
- On $[5, 9]$: $\\frac{70 - 61}{9 - 5} = 2.25$ thousand people per year

Each value is the slope of a different secant line, so each describes a different interval. Always name the interval when you report an average rate of change.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Secant Line Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the secant line of $f(x) = x^2$ on $[1, 3]$?',
            options: ['$y = 4x - 3$', '$y = 4x + 1$', '$y = 2x - 1$', '$y = 4x - 1$'],
            correctAnswer: 0,
            explanation: 'The endpoints are $(1, 1)$ and $(3, 9)$, so the slope is $\\frac{9-1}{3-1} = 4$. Then $y = 1 + 4(x - 1) = 4x - 3$, which also passes through $(3, 9)$. The other lines miss at least one endpoint.'
          },
          {
            question: 'The average rate of change of $g$ on $[2, 6]$ is $-3$. Which statement must be true?',
            options: ['$g(6)$ is $12$ less than $g(2)$', '$g$ is decreasing at every point of $[2, 6]$', '$g(6) = -3$', '$g(6)$ is $3$ less than $g(2)$'],
            correctAnswer: 0,
            explanation: 'The total change is the rate times the interval length: $-3 \\cdot (6 - 2) = -12$, so $g(6) = g(2) - 12$. An average says nothing about every point inside the interval, and $-3$ is a rate, not an output value.'
          },
          {
            question: 'Which description fits the secant line of $f$ on $[a, b]$?',
            options: [
              'A line giving the same change in output over $[a, b]$ as $f$',
              'A line that agrees with $f$ at every input in $[a, b]$',
              'A line that meets the graph of $f$ only at $(a, f(a))$',
              'A line through the highest and lowest points of $f$'
            ],
            correctAnswer: 0,
            explanation: 'The secant joins $(a, f(a))$ and $(b, f(b))$, so moving along it from $a$ to $b$ changes the output by $f(b) - f(a)$, the same total change as $f$. It meets the graph at both endpoints, and it matches $f$ everywhere only when $f$ is linear.'
          }
        ]
      }
    },
    {
      id: 'p2-compare',
      type: 'text' as const,
      content: `
## Comparing Secant Slopes

Secant slopes over different intervals reveal how a function's rate of change behaves.

### Same Function, Different Intervals

For $f(x) = \\sqrt{x}$:

| Interval | Endpoints | Secant slope |
|:---------|:----------|:-------------|
| $[0, 1]$ | $(0, 0)$, $(1, 1)$ | $1$ |
| $[1, 4]$ | $(1, 1)$, $(4, 2)$ | $\\frac{1}{3}$ |
| $[4, 9]$ | $(4, 2)$, $(9, 3)$ | $\\frac{1}{5}$ |

The function keeps increasing, but the secant slopes get smaller: $\\sqrt{x}$ rises more and more slowly.

### Sequences Have Average Rates Too

A sequence is a function of whole-number inputs, so it has average rates of change between any two terms. For $a_n$ with $a_2 = 11$ and $a_6 = 31$:

$$\\frac{a_6 - a_2}{6 - 2} = \\frac{20}{4} = 5 \\text{ per term}$$

### Sign of the Slope

- Positive secant slope: the output ended **higher** than it started
- Negative secant slope: the output ended **lower** than it started
- Zero secant slope: the output ended at the **same** value, $f(a) = f(b)$
      `
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Secant Slopes** 🧮

**1)** Slope of the secant line of $f(x) = \\sqrt{x}$ on $[1, 9]$ (enter a decimal):

**2)** The secant line of $f(x) = x^3$ on $[1, 2]$ is $y = 7x - 6$. What value does it give at $x = 1.5$?

**3)** A sequence has $a_3 = 4$ and $a_8 = 29$. Average rate of change from $n = 3$ to $n = 8$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '4.5', '5'],
        hint1: '$f(9) = 3$ and $f(1) = 1$, so the slope is $\\frac{3 - 1}{9 - 1}$.',
        hint2: 'Substitute $x = 1.5$ into $y = 7x - 6$.',
        hint3: 'Divide the change in terms, $29 - 4$, by the change in index, $8 - 3$.',
        explanation: '(1) $\\frac{2}{8} = 0.25$. (2) $7(1.5) - 6 = 4.5$, while $f(1.5) = 3.375$, so the secant runs above the curve there. (3) $\\frac{25}{5} = 5$ per term.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Secant Line Facts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The secant line of $f$ on $[a, b]$ passes through:',
            options: ['$(a, f(a))$ and $(b, f(b))$', '$(a, 0)$ and $(b, 0)$', '$(0, f(a))$ and $(0, f(b))$', '$(a, b)$ and $(f(a), f(b))$'],
            correctAnswer: 0
          },
          {
            label: 'For $\\sqrt{x}$, secant slopes on $[0, 1]$, $[1, 4]$, $[4, 9]$:',
            options: ['Stay equal', 'Grow larger', 'Decrease', 'Change sign'],
            correctAnswer: 2
          },
          {
            label: 'A zero secant slope on $[a, b]$ means:',
            options: ['$f$ is constant on $[a, b]$', '$f(a) = f(b)$', '$f(a) = 0$ and $f(b) = 0$', '$f$ has no zeros on $[a, b]$'],
            correctAnswer: 1
          },
          {
            label: 'If $P$ is in thousands of people and $t$ in years, secant slopes are in:',
            options: ['Thousand people', 'Thousand people times years', 'Thousand people per year', 'Years per thousand people'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$(a, f(a))$ and $(b, f(b))$', 'Decrease', '$f(a) = f(b)$', 'Thousand people per year'],
        hint1: 'A secant joins two points on the graph.',
        hint2: 'The slopes were $1$, $\\frac{1}{3}$, $\\frac{1}{5}$.',
        hint3: 'A zero numerator means the outputs match at the endpoints.',
        explanation: 'The secant joins the two endpoints of the graph. For $\\sqrt{x}$ the slopes $1, \\frac{1}{3}, \\frac{1}{5}$ decrease. A zero slope only means $f(a) = f(b)$. Rate units are output units per input unit.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Using the table $P(0) = 40$, $P(2) = 46$, $P(5) = 61$, $P(9) = 70$, the average rate of change of $P$ on $[2, 9]$ is about:',
            options: ['$3.43$', '$4.2$', '$7.78$', '$2.25$'],
            correctAnswer: 0,
            explanation: '$\\frac{70 - 46}{9 - 2} = \\frac{24}{7} \\approx 3.43$. The value $4.2$ belongs to $[0, 5]$ and $2.25$ to $[5, 9]$, while $7.78$ comes from dividing $70$ by $9$ without subtracting.'
          },
          {
            question: 'A secant line of $h$ on $[0, 4]$ has slope $2.5$ and $h(0) = 3$. What is $h(4)$?',
            options: ['$13$', '$10$', '$5.5$', '$0.5$'],
            correctAnswer: 0,
            explanation: 'The total change is $2.5 \\cdot 4 = 10$, so $h(4) = 3 + 10 = 13$. Reporting $10$ forgets the starting value, and $5.5$ adds the slope to $h(0)$ only once.'
          }
        ]
      }
    }
  ]
};
