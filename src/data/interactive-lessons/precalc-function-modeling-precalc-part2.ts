export const precalcFunctionModelingPart2Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm2-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 2 of 7 — Linear and Quadratic Models from Data**

### A Linear Model from Two Points

A linear model $y = mx + b$ has two parameters, and each has a meaning in context:

| Parameter | Meaning in context |
|:---:|:---|
| $m$ | The **rate of change**: output units per input unit |
| $b$ | The **starting value**: the output when the input is $0$ |

**Example.** A plant is $8$ cm tall when it is planted ($t = 0$ days) and $20$ cm tall on day $6$.

$$m = \\frac{20 - 8}{6 - 0} = \\frac{12}{6} = 2 \\text{ cm per day}, \\qquad b = 8 \\text{ cm}$$

$$h(t) = 8 + 2t$$

In words: the plant **grows $2$ centimeters per day**, starting from $8$ centimeters.

**Example without a starting value.** A taxi ride of $3$ miles costs $50$ units and a ride of $8$ miles costs $85$ units. The slope is $\\frac{85 - 50}{8 - 3} = \\frac{35}{5} = 7$ units per mile. Using the point $(3, 50)$:

$$50 = 7(3) + b \\quad \\Rightarrow \\quad b = 29, \\qquad C(x) = 7x + 29$$

The intercept $29$ is the cost before any miles are driven: the base fare.

> **Key Fact:** Always attach **units** to a rate: "$7$ units **per mile**," not just "$7$."`
    },
    {
      id: 'fm2-quadratic',
      type: 'text' as const,
      content: `## A Quadratic Model from Its Features

### From the vertex

If you know the maximum or minimum point $(h, k)$, start from **vertex form** $y = a(x - h)^2 + k$ and use one more point to find $a$.

**Example.** A ball is launched from the ground ($h(0) = 0$) and reaches its maximum height of $36$ feet at $t = 1.5$ seconds.

$$h(t) = a(t - 1.5)^2 + 36$$

$$0 = a(0 - 1.5)^2 + 36 = 2.25a + 36 \\quad \\Rightarrow \\quad a = -16$$

$$h(t) = -16(t - 1.5)^2 + 36$$

The negative $a$ confirms the graph opens downward: the ball rises and then falls.

### From three points

Three points determine a quadratic $y = ax^2 + bx + c$. With $(0, 5)$, $(1, 8)$ and $(2, 15)$:

- $(0, 5)$: $c = 5$
- $(1, 8)$: $a + b + 5 = 8$, so $a + b = 3$
- $(2, 15)$: $4a + 2b + 5 = 15$, so $2a + b = 5$

Subtracting the second equation from the third: $a = 2$, then $b = 1$.

$$y = 2x^2 + x + 5$$

Check: at $x = 2$, $2(4) + 2 + 5 = 15$. ✓

### Interpreting the parameters

In $y = ax^2 + bx + c$ the constant $c$ is still the output at input $0$. The sign of $a$ tells you concave up ($a > 0$, a minimum) or concave down ($a < 0$, a maximum). The vertex is at $x = -\\frac{b}{2a}$.`
    },
    {
      id: 'fm2-calculator',
      type: 'text' as const,
      content: `## The Calculator Framing: Regression

Real data never sit exactly on a line or a parabola. On the exam, **Part B of the multiple-choice section and Part A of the free-response section allow a graphing calculator**, and the expected tool is **regression**: the calculator finds the linear, quadratic or cubic function that best fits the data.

### What you must write

1. **State the model type and why** (the pattern from Part 1).
2. **State the regression equation**, with coefficients **rounded to three decimal places**.
3. **Keep full precision inside the calculator** for every later computation. Round only the final answer.

### Worked Example

The height, in centimeters, of a seedling $t$ weeks after planting:

| $t$ (weeks) | $0$ | $1$ | $2$ | $3$ | $4$ |  $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $H$ (cm) | $2.0$ | $4.1$ | $5.8$ | $8.2$ | $9.9$ | $12.1$ |

First differences: $2.1, 1.7, 2.4, 1.7, 2.2$, roughly constant at about $2$. A **linear** model is appropriate.

The calculator's linear regression gives

$$H(t) = 2.009t + 1.995$$

**Interpretation.** The seedling grows at a rate of approximately $2.009$ centimeters per week, and the model gives an initial height of approximately $1.995$ cm.

**Prediction.** At $t = 8$ weeks, the stored full-precision model gives $H(8) \\approx 18.064$ cm. Using the rounded coefficients instead gives $2.009(8) + 1.995 = 18.067$: the third decimal is already different. Use the stored model.

> **Key Fact:** Write "**approximately**" whenever a value comes from a model or a rounded regression: "the model predicts the seedling will be approximately $18.064$ cm tall after $8$ weeks."`
    },
    {
      id: 'fm2-mc',
      type: 'multiple-choice' as const,
      content: '**Build and interpret.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A linear model passes through $(2, 11)$ and $(6, 23)$. Which equation is the model?',
            options: ['$y = 3x + 5$', '$y = 3x + 11$', '$y = 12x - 13$', '$y = 2.5x + 6$'],
            correctAnswer: 0,
            explanation: 'The slope is $\\frac{23 - 11}{6 - 2} = 3$, and $11 = 3(2) + b$ gives $b = 5$. The intercept is not the first $y$-value ($11$); the slope is not the change in $y$ alone ($12$); and $y = 2.5x + 6$ passes through $(2, 11)$ but gives $21$ at $x = 6$.'
          },
          {
            question: 'The cost in dollars of a repair lasting $n$ hours is $C(n) = 45n + 120$. What does the $45$ represent?',
            options: ['Each hour of work adds $45$ dollars', 'The cost in dollars before any work is done', 'The total cost in dollars of a one-hour repair', 'The number of hours a typical repair takes'],
            correctAnswer: 0,
            explanation: 'The slope is the rate of change: $45$ dollars per hour. The cost before any work is the intercept, $120$ dollars, and a one-hour repair costs $C(1) = 165$ dollars.'
          },
          {
            question: 'A projectile is launched from the ground, and its maximum height is $36$ feet at $t = 1.5$ seconds. Which quadratic models its height in feet?',
            options: ['$h(t) = -16(t - 1.5)^2 + 36$', '$h(t) = 16(t - 1.5)^2 + 36$', '$h(t) = -16(t + 1.5)^2 + 36$', '$h(t) = -36(t - 1.5)^2 + 16$'],
            correctAnswer: 0,
            explanation: 'Vertex form with vertex $(1.5, 36)$ is $a(t - 1.5)^2 + 36$, and $h(0) = 0$ forces $2.25a = -36$, so $a = -16$. A positive $a$ would open upward (no maximum), $(t + 1.5)$ puts the vertex at $t = -1.5$, and the last option swaps the vertex coordinates.'
          }
        ]
      }
    },
    {
      id: 'fm2-input',
      type: 'input-boxes' as const,
      content: `**Use a regression model.** ✍️

A calculator gives the quadratic regression $h(t) = -4.912t^2 + 19.835t + 1.502$ for the height of a ball in meters $t$ seconds after it is thrown. Use three decimal places.

**1)** The height, in meters, at the moment the ball is thrown:

**2)** The height, in meters, the model predicts at $t = 2$:

**3)** The average rate of change of height over the interval $[0, 2]$, in meters per second:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.502', '21.524', '10.011'],
        hint1: 'At $t = 0$ only the constant term survives.',
        hint2: '$-4.912(4) + 19.835(2) + 1.502$.',
        hint3: 'Average rate of change: $\\frac{h(2) - h(0)}{2 - 0}$.',
        explanation: '(1) $h(0) = 1.502$ m. (2) $h(2) = -19.648 + 39.670 + 1.502 = 21.524$ m. (3) $\\frac{21.524 - 1.502}{2} = \\frac{20.022}{2} = 10.011$ meters per second: over the first two seconds the height rose at an average rate of approximately $10.011$ m/s.'
      }
    },
    {
      id: 'fm2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Exam habits for regression models.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'When you state a regression equation on the free-response section, round each coefficient to:',
            options: ['three decimal places', 'the nearest integer', 'one decimal place', 'two decimal places'],
            correctAnswer: 0
          },
          {
            label: 'To predict a value later in the same problem, compute with:',
            options: ['the stored full-precision model', 'the coefficients as you rounded them', 'the original data table instead of the model', 'the nearest data point in the table'],
            correctAnswer: 0
          },
          {
            label: 'In the model $h(t) = 8 + 2t$ (centimeters, days), the $8$ represents:',
            options: ['the height when $t = 0$', 'the growth rate in cm per day', 'the height after $2$ days', 'the number of days observed'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['three decimal places', 'the stored full-precision model', 'the height when $t = 0$'],
        hint1: 'AP Precalculus answers are reported to three decimal places unless told otherwise.',
        hint2: 'Rounding early can change the third decimal of a later answer.',
        hint3: 'Substitute $t = 0$.',
        explanation: 'Coefficients are reported to three decimal places, but all later arithmetic uses the stored full-precision model so that rounding error does not accumulate. The constant term is the output at input $0$: the starting height.'
      }
    },
    {
      id: 'fm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Linear: slope is the **rate of change with units**, intercept is the **starting value**
- Quadratic: use **vertex form** when the maximum or minimum is known, or **three points** to solve for $a$, $b$, $c$
- On calculator sections, the model comes from **regression**: name the type, state the equation to **three decimal places**, keep **full precision** for later steps
- Say "**approximately**" for any value a model produces

> **Up Next:** Part 3 — cubic and quartic models from geometry, with domains that come from the context.`
    }
  ]
};
