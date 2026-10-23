const fmScatterFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="122" x2="300" y2="122"/><line x1="40" y1="54" x2="300" y2="54"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="190" x2="305" y2="190"/><line x1="40" y1="200" x2="40" y2="12"/></g><text x="302" y="206" font-size="12" fill="currentColor">x</text><text x="46" y="18" font-size="12" fill="currentColor">y</text><text x="96" y="205" font-size="11" fill="currentColor" text-anchor="middle">2</text><text x="152" y="205" font-size="11" fill="currentColor" text-anchor="middle">4</text><text x="208" y="205" font-size="11" fill="currentColor" text-anchor="middle">6</text><text x="264" y="205" font-size="11" fill="currentColor" text-anchor="middle">8</text><text x="34" y="126" font-size="11" fill="currentColor" text-anchor="end">10</text><text x="34" y="58" font-size="11" fill="currentColor" text-anchor="end">20</text><g class="fig-accent-2"><line x1="68" y1="189" x2="278" y2="46.5" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><line x1="56" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/></g><text x="86" y="34" font-size="11" fill="currentColor">Model A: a line</text><g class="fig-accent"><path d="M 54 177.6 Q 166 166.7 278 25.3" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="56" y1="46" x2="80" y2="46" stroke="currentColor" stroke-width="2.5"/></g><text x="86" y="50" font-size="11" fill="currentColor">Model B: a parabola</text><g fill="currentColor"><circle cx="68" cy="175.7" r="3.5"/><circle cx="96" cy="168.2" r="3.5"/><circle cx="124" cy="156.7" r="3.5"/><circle cx="152" cy="141.7" r="3.5"/><circle cx="180" cy="123.4" r="3.5"/><circle cx="208" cy="100.2" r="3.5"/><circle cx="236" cy="73.7" r="3.5"/><circle cx="264" cy="41.8" r="3.5"/></g></svg>',
  alt: 'Scatter plot of eight data points at x = 1 through 8 with y-values 2.1, 3.2, 4.9, 7.1, 9.8, 13.2, 17.1 and 21.8. The points curve upward: they rise slowly at first and faster later. A dashed straight line (Model A) passes below the first and last points and above the middle points. A solid parabola (Model B) passes through or very near every point.',
  caption: 'Figure 1. Eight data points with two candidate models: a line (dashed) and a parabola (solid).',
  size: 'md' as const,
}

export const precalcFunctionModelingPart1Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm1-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 1 of 7 — Choosing a Function Model**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Choosing a function model** |
| 2 | Linear and quadratic models from data |
| 3 | Polynomial models in context |
| 4 | Piecewise-defined functions: notation and evaluation |
| 5 | Building piecewise models |
| 6 | Assumptions, limitations and domain restrictions |
| 7 | FRQ workshop and mastery check |

### What a Model Is

A **function model** is a function chosen to describe how one quantity in a real situation depends on another. The model is never the situation itself: it captures the **pattern** in the data or the geometry, and we use it to **predict**, to **interpret** and to **compare**.

The first decision is always the **type** of function. Each type matches a different pattern in how the output changes:

| Pattern you observe | Model type |
|:---|:---|
| The rate of change is roughly **constant** (equal first differences) | **Linear** |
| The rate of change itself changes at a constant rate (equal second differences); one maximum or minimum with symmetry | **Quadratic** |
| Several zeros or several maxima/minima; a formula built by multiplying lengths (volume, area) | **Polynomial of degree $n$** |
| Different rules on different intervals (pricing tiers, filling then draining) | **Piecewise-defined** |
| Two quantities inversely proportional, or a quantity that is a ratio | **Rational** |

> **Key Fact:** On the AP exam you are asked to **justify** the type you choose. The justification names the pattern: "the first differences are roughly constant, so a linear model is appropriate."`
    },
    {
      id: 'fm1-differences',
      type: 'text' as const,
      content: `## Successive Differences on a Table

When the inputs in a table are equally spaced, subtract consecutive outputs.

### A linear pattern

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $7$ | $11$ | $15$ | $19$ | $23$ |

First differences: $4, 4, 4, 4$. The output rises by the same amount for every unit of input, so the **rate of change is constant** and a **linear** model fits.

### A quadratic pattern

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $3$ | $5$ | $9$ | $15$ | $23$ |

First differences: $2, 4, 6, 8$. These are **not** constant, so the model is not linear. But the first differences themselves grow by $2$ each time:

Second differences: $2, 2, 2$.

Constant second differences mean the **rate of change changes at a constant rate**: the graph is concave up and a **quadratic** model fits.

### In general

| Differences that are constant | Degree of the polynomial model |
|:---|:---:|
| First differences | $1$ (linear) |
| Second differences | $2$ (quadratic) |
| Third differences | $3$ (cubic) |
| $n$th differences | $n$ |

With real data the differences are only **roughly** constant. That is fine: say "roughly constant" in your justification.

> **Key Fact:** When two candidate models are drawn over the same data, the better one is the one whose **pattern of change** matches the data, not the one with the simpler formula. A line has one constant rate of change and cannot bend; if its errors follow a pattern (below the data at both ends, above in the middle), the data are curved.

### Reading a context instead of a table

- A car on cruise control: distance grows by the same amount each minute → **linear**.
- The height of a thrown ball: rises, reaches one maximum, falls symmetrically → **quadratic**.
- The volume of a box whose dimensions each depend on $x$: a product of three lengths → **cubic** polynomial.
- An electricity bill that charges one rate for the first $500$ kWh and a higher rate after that → **piecewise**.
- The time a trip takes at speed $v$ over a fixed distance $d$: $t = \\frac{d}{v}$, inversely proportional → **rational**.`
    },
    {
      id: 'fm1-figure-mc',
      type: 'multiple-choice' as const,
      figure: fmScatterFigure,
      content: `**Two candidate models.** 🎯

The eight data points above have first differences $1.1, 1.7, 2.2, 2.7, 3.4, 3.9, 4.7$. Model A is a line; Model B is a parabola.`,
      exercise: {
        questions: [
          {
            question: 'Which statement best justifies choosing Model B (the parabola) for these data?',
            options: [
              'The second differences are roughly constant, so the rate of change changes steadily',
              'The data values are all positive and increasing, so a quadratic model is required',
              'The first differences are roughly constant, so a quadratic model fits the data',
              'A parabola always fits data better than a line because it has one more parameter to adjust'
            ],
            correctAnswer: 0,
            explanation: 'Roughly constant second differences (the first differences grow by about $0.5$ to $0.8$ each step) are the signature of a quadratic. Positive values say nothing about shape, roughly constant first differences would point to a line, and extra parameters are not a justification: the pattern is.'
          },
          {
            question: 'The data in the figure are concave up. Which description of the first differences matches that shape?',
            options: ['They increase as $x$ increases', 'They decrease as $x$ grows', 'They are all equal', 'They alternate in sign'],
            correctAnswer: 0,
            explanation: 'Concave up means the rate of change is increasing, so each first difference is larger than the one before it. Decreasing differences would mean concave down, equal differences would mean linear.'
          }
        ]
      }
    },
    {
      id: 'fm1-mc',
      type: 'multiple-choice' as const,
      content: '**Choose the model type.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A table records a pool\'s water volume every hour: $12, 19, 26, 33, 40$ cubic meters. Which model type is appropriate, and why?',
            options: ['Linear, because the first differences are all equal', 'Quadratic, because the values are increasing', 'Cubic, because there are five data values', 'Piecewise, because the volume changes every hour'],
            correctAnswer: 0,
            explanation: 'The first differences are $7, 7, 7, 7$: the volume rises by $7$ cubic meters every hour, a constant rate of change. Increasing values alone do not make a quadratic, the number of data values is not a reason, and one rule describes all five hours.'
          },
          {
            question: 'A rectangle has a fixed perimeter of $40$ meters. Which type of function models its area $A$ as a function of its width $w$?',
            options: ['Quadratic', 'Linear', 'Rational', 'Cubic polynomial'],
            correctAnswer: 0,
            explanation: 'The length is $20 - w$, so $A(w) = w(20 - w) = 20w - w^2$, a degree-$2$ polynomial with one maximum at $w = 10$. A product of two lengths that both depend on $w$ is quadratic, not linear; nothing is divided, so it is not rational.'
          },
          {
            question: 'A phone plan charges a flat $20$ dollars for the first $5$ GB of data and $4$ dollars for each GB after that. The monthly cost as a function of data used is best modeled by which type?',
            options: ['A piecewise-defined function', 'A single linear function with slope $4$', 'A quadratic function with vertex at $5$ GB', 'A rational function of the data used'],
            correctAnswer: 0,
            explanation: 'The rule changes at $5$ GB: a constant cost below it and a linear cost above it. Two different rules on two intervals call for a piecewise-defined model. One line cannot be flat and then rise.'
          }
        ]
      }
    },
    {
      id: 'fm1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Work the differences.** 🔽

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $4$ | $7$ | $12$ | $19$ | $28$ |`,
      exercise: {
        dropdowns: [
          {
            label: 'The first differences are:',
            options: ['$3, 5, 7, 9$', '$3, 4, 5, 6$', '$4, 7, 12, 19$', '$2, 2, 2, 2$'],
            correctAnswer: 0
          },
          {
            label: 'The second differences are:',
            options: ['$2, 2, 2$', '$1, 1, 1$', '$3, 5, 7$', '$0, 0, 0$'],
            correctAnswer: 0
          },
          {
            label: 'An appropriate model type is:',
            options: ['Quadratic', 'Linear', 'Cubic', 'Piecewise-defined'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$3, 5, 7, 9$', '$2, 2, 2$', 'Quadratic'],
        hint1: 'Subtract consecutive $y$-values: $7 - 4$, $12 - 7$, and so on.',
        hint2: 'Now subtract consecutive first differences.',
        hint3: 'Constant second differences point to degree $2$.',
        explanation: '$7 - 4 = 3$, $12 - 7 = 5$, $19 - 12 = 7$, $28 - 19 = 9$. The first differences grow by $2$ each step, so the second differences are $2, 2, 2$, constant. A constant second difference means a quadratic model; in fact $y = x^2 + 3$.'
      }
    },
    {
      id: 'fm1-input',
      type: 'input-boxes' as const,
      content: `**A linear table.** ✍️

| $x$ | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|
| $y$ | $5$ | $11$ | $17$ | $23$ |

**1)** The common first difference (the change in $y$ for each step of $2$ in $x$):

**2)** The rate of change of $y$ per unit of $x$:

**3)** The value of $y$ the linear model predicts at $x = 8$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3', '29'],
        hint1: '$11 - 5 = 6$; check that the other steps agree.',
        hint2: 'Each step is $2$ units of $x$, so divide the difference by $2$.',
        hint3: 'Continue the pattern one more step from $23$.',
        explanation: '(1) $11 - 5 = 17 - 11 = 23 - 17 = 6$. (2) The inputs step by $2$, so the rate of change is $\\frac{6}{2} = 3$ per unit of $x$. (3) One more step adds $6$: $23 + 6 = 29$, the same as $y = 3x + 5$ at $x = 8$.'
      }
    },
    {
      id: 'fm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- A model is chosen for its **pattern of change**, and the justification names that pattern
- Constant first differences → **linear**; constant second differences → **quadratic**; constant $n$th differences → degree $n$
- Several zeros or extrema, or a product of lengths → **polynomial**; different rules on different intervals → **piecewise**; inverse proportion → **rational**
- Real data give **roughly** constant differences: say so

> **Up Next:** Part 2 — building linear and quadratic models from points, and letting the calculator find a regression.`
    }
  ]
};
