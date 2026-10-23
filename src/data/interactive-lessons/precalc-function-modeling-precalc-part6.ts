export const precalcFunctionModelingPart6Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm6-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 6 of 7 — Assumptions, Limitations and Domain Restrictions**

### Every Model Assumes Something

Choosing a function type is a claim about the situation. Naming that claim is what the exam calls an **assumption**:

| Model type | What it assumes about the situation |
|:---|:---|
| Linear | The quantity changes by the **same amount** per unit of input (constant rate of change) |
| Quadratic | The rate of change itself changes at a constant rate; there is one turning point |
| Polynomial | The pattern of zeros and turning points continues as the formula says |
| Piecewise | The pattern **switches** at a known change point, and each interval follows its own rule |

### Where a Model Stops Being Valid

- **The observed domain.** A regression describes the data it was built from. Predicting **inside** that interval (interpolation) is usually reliable; predicting far **outside** it (extrapolation) assumes the pattern continues, which may not be true.
- **Domain restrictions from context.** Lengths, volumes, populations and costs cannot be negative; a model that produces a negative value there is no longer describing the situation.
- **Discrete versus continuous inputs.** The number of tickets sold is a whole number. A model may treat it as continuous for convenience, but $R(150.5)$ has no meaning in context.
- **Units and rounding.** A rate from the model must be stated as output units **per** input unit, and values that come from a rounded regression are **approximate**.

> **Key Fact:** A **limitation** names the assumption that could fail: "the model assumes the population keeps growing at a constant $550$ people per year, which may not hold $12$ years past the data."`
    },
    {
      id: 'fm6-example',
      type: 'text' as const,
      content: `## Worked Examples

### A population model

A town's population, in thousands, $t$ years after $2010$:

| $t$ | $0$ | $2$ | $4$ | $6$ | $8$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $P$ (thousands) | $12.0$ | $13.1$ | $14.2$ | $15.3$ | $16.4$ |

First differences: $1.1, 1.1, 1.1, 1.1$ thousand per $2$ years, so the rate of change is constant at $0.55$ thousand people per year and a **linear** model is appropriate:

$$P(t) = 12.0 + 0.55t$$

**Prediction.** For $2030$, $t = 20$: $P(20) = 12.0 + 11.0 = 23.0$. The model predicts a population of approximately $23{,}000$ in $2030$.

**Limitation.** The data end at $t = 8$. The prediction assumes the town keeps growing by exactly $550$ people per year for $12$ more years, which housing, jobs or policy could change.

### A candle: the context ends the domain

A candle $25$ cm long burns at a steady $1.5$ cm per hour: $L(t) = 25 - 1.5t$.

The formula gives $L(20) = -5$, but a length cannot be negative. The candle is gone when $L(t) = 0$, at $t = \\frac{25}{1.5} \\approx 16.667$ hours. The **domain in context is $0 \\le t \\le 16.667$**, and the model says nothing after that.

### Choosing between two models

A delivery van's distance from the depot, in miles: $0, 30, 60, 90, 120$ at $t = 0, 1, 2, 3, 4$ hours.

- A student proposes a **quadratic** because "distance is growing." But the first differences are $30, 30, 30, 30$: **constant**.
- A **linear** model, $d(t) = 30t$, matches the pattern: the van travels at a steady $30$ miles per hour.

The quadratic is not wrong because it is more complicated; it is wrong because its signature (changing rate of change) is **not** in the data.

### When a piecewise model is needed

If the next readings were $120, 120, 120$ at $t = 5, 6, 7$, one line could no longer describe the trip: the van stopped. The pattern **changed** at $t = 4$, so a piecewise model, $30t$ for $0 \\le t \\le 4$ and $120$ for $t > 4$, is appropriate.`
    },
    {
      id: 'fm6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Write the justification.** 🔽 Choose the sentence that correctly justifies or limits each model.',
      exercise: {
        dropdowns: [
          {
            label: 'Equally spaced data: $4.0, 7.1, 9.9, 13.0, 16.1$. The best justification for a linear model is:',
            options: [
              'The first differences are roughly constant, about $3$, so the rate of change is roughly constant',
              'The second differences are roughly constant, so the rate of change changes at a constant rate',
              'The values are all positive and increasing, so a line with positive slope must fit',
              'The data have exactly one maximum and are symmetric about it, so the model is linear'
            ],
            correctAnswer: 0
          },
          {
            label: 'Equally spaced data: $5, 8, 13, 20, 29$. The best justification for a quadratic model is:',
            options: [
              'The first differences $3, 5, 7, 9$ grow by the same amount each step, so the second differences are constant',
              'The first differences $3, 5, 7, 9$ are roughly constant, so the rate of change is roughly constant',
              'The values are increasing faster and faster, so the degree of the polynomial model must be at least three',
              'The data include five points, and five points are enough to determine a quadratic model'
            ],
            correctAnswer: 0
          },
          {
            label: 'The candle model $L(t) = 25 - 1.5t$ gives $L(20) = -5$. The correct statement is:',
            options: [
              'Not valid at $t = 20$: a length cannot be negative; the candle burned out at about $16.667$ hours',
              'The candle is $5$ cm below its holder at $t = 20$ hours, because the model is linear and continues forever',
              'The model is valid at $t = 20$ because a linear function is defined for every real number input',
              'The model should be replaced with a quadratic because the first differences become negative'
            ],
            correctAnswer: 0
          },
          {
            label: 'A regression on data from $2010$ to $2020$ is used to predict $2040$. The key limitation is:',
            options: [
              'The prediction assumes the observed pattern continues for $20$ years past the data, which may not hold',
              'The prediction is unreliable because regression models can only be used for the exact data points',
              'The prediction is invalid because a model built from eleven years of data must have eleven parameters',
              'The prediction requires a piecewise model because every prediction outside the data needs a new rule'
            ],
            correctAnswer: 0
          }
        ],
        correctAnswers: [
          'The first differences are roughly constant, about $3$, so the rate of change is roughly constant',
          'The first differences $3, 5, 7, 9$ grow by the same amount each step, so the second differences are constant',
          'Not valid at $t = 20$: a length cannot be negative; the candle burned out at about $16.667$ hours',
          'The prediction assumes the observed pattern continues for $20$ years past the data, which may not hold'
        ],
        hint1: 'Compute the first differences: $3.1, 2.8, 3.1, 3.1$.',
        hint2: 'Compute first differences, then second differences.',
        hint3: 'What does a negative length mean? And how far past the data is $2040$?',
        explanation: 'A linear justification names roughly constant first differences; a quadratic justification names constant second differences (first differences $3, 5, 7, 9$ grow by $2$). A negative length means the context has ended: the candle is gone at $t = 25/1.5 \\approx 16.667$ h, so the domain in context stops there. Extrapolating $20$ years beyond the data assumes the same pattern persists, which is the limitation to state.'
      }
    },
    {
      id: 'fm6-mc',
      type: 'multiple-choice' as const,
      content: '**Assumptions and restrictions.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A model gives the revenue in dollars from selling $n$ concert tickets as $R(n) = 12n - 0.02n^2$. Which statement is a limitation of the model in context?',
            options: ['Tickets come in whole numbers, so $R(150.5)$ has no meaning in context', 'The model cannot be used for any number of tickets larger than $12$', 'Revenue cannot be modeled by a quadratic because revenue is always linear in the number of tickets', 'The model is valid in context only when $R(n)$ is negative'],
            correctAnswer: 0,
            explanation: 'Tickets are counted in whole numbers: the model treats $n$ as continuous, so non-integer inputs are not meaningful. Nothing restricts $n$ to $12$, quadratics often model revenue when price depends on quantity, and negative revenue is where the model stops making sense, not where it is valid.'
          },
          {
            question: 'A van\'s distance from the depot is $0, 30, 60, 90, 120$ miles at $t = 0, 1, 2, 3, 4$ hours. A student proposes a quadratic model. Which reason best refutes that choice?',
            options: ['The first differences are constant, so the pattern is linear', 'The distance values are too small for a quadratic model to apply', 'A quadratic model requires at least six data points to be valid', 'Distance can never be modeled by a quadratic function of time'],
            correctAnswer: 0,
            explanation: 'Each hour adds exactly $30$ miles: a constant rate of change is the signature of a linear model. Size of the values and number of points are not reasons, and distance can be quadratic when speed changes steadily.'
          },
          {
            question: 'A town\'s population is modeled by the linear function $P(t) = 12.0 + 0.55t$ (thousands, $t$ years after $2010$). Which assumption does this model make?',
            options: ['The population changes by the same amount each year', 'The population doubles after a fixed number of years', 'The population rises to a maximum and then declines again', 'The population stays exactly the same from year to year'],
            correctAnswer: 0,
            explanation: 'A linear model has a constant rate of change: $550$ people added every year. Doubling is a different (non-polynomial) pattern, a maximum would need a concave-down model, and a constant population would have slope $0$.'
          }
        ]
      }
    },
    {
      id: 'fm6-input',
      type: 'input-boxes' as const,
      content: `**Domain from context.** ✍️

A candle $25$ cm long burns steadily: $L(t) = 25 - 1.5t$ (centimeters, hours). A town's population is $P(t) = 12.0 + 0.55t$ (thousands, years after $2010$).

**1)** $L(4)$, in centimeters:

**2)** The time, in hours, at which the candle is completely burned (the right endpoint of the domain in context):

**3)** The population, in thousands, the model predicts for $2030$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '50/3', '23'],
        hint1: '$25 - 1.5(4)$.',
        hint2: 'Solve $25 - 1.5t = 0$.',
        hint3: '$2030$ is $t = 20$.',
        explanation: '(1) $L(4) = 25 - 6 = 19$ cm. (2) $1.5t = 25$ gives $t = \\frac{25}{1.5} = \\frac{50}{3} \\approx 16.667$ hours, so the domain in context is $0 \\le t \\le 16.667$. (3) $P(20) = 12.0 + 0.55(20) = 12.0 + 11.0 = 23.0$ thousand people.'
      }
    },
    {
      id: 'fm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Every model type **assumes a pattern**: constant rate (linear), constant second differences (quadratic), a switch at a change point (piecewise)
- A model is trusted on the **observed domain**; extrapolation assumes the pattern continues, and that is the **limitation** to state
- The **domain in context** ends where the output stops making sense (negative length, negative volume)
- Some inputs are **discrete**; the model's non-integer inputs may have no meaning
- Choose between two models by **which signature the data show**, not by which formula is fancier
- Values from a model are **approximate**, with **units**

> **Up Next:** Part 7 — a full FRQ-style problem, then the mastery check.`
    }
  ]
};
