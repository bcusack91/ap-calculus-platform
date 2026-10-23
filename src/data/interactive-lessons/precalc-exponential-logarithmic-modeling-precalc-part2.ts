export const precalcExpLogModelingPart2Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm2-intro',
      type: 'text' as const,
      content: `
# 🧮 Exponential Regression on the Calculator

**Part 2 of 7 — Exponential Regression on the Calculator**

Real data rarely give **exactly** constant ratios. When the ratios are only approximately constant, a graphing calculator's **exponential regression** finds the single model $y = ab^x$ that best fits **all** the points at once.

### What the Calculator Does for You

| Step | On a TI-84 family calculator | What you get |
|:-----|:-----------------------------|:-------------|
| 1 | Enter the inputs in \`L1\` and the outputs in \`L2\` | the data set |
| 2 | \`STAT\` → \`CALC\` → \`ExpReg\` | the values of $a$ and $b$ in $y = a \\cdot b^x$ |
| 3 | Store the equation in \`Y1\` (optional) | a graph of the model over the scatter plot |

> On the AP exam you are **never** asked to compute a regression by hand. Part B of the multiple-choice section and Questions 1–2 of the free-response section allow a graphing calculator; you run the regression, then **interpret** $a$ and $b$ and **use** the model. Keep every decimal the calculator shows while you work, and round only the final answer (usually to three decimal places).

### Worked Example — Yearly Sales

| $t$ (years since 2020) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:--|:--|:--|:--|:--|:--|:--|
| $S$ (thousands of units) | $12.0$ | $14.1$ | $17.3$ | $20.0$ | $24.4$ | $28.6$ |

The ratios are $1.18, 1.23, 1.16, 1.22, 1.17$ — close to constant, so an exponential model is appropriate. \`ExpReg\` returns

$$a \\approx 11.98, \\qquad b \\approx 1.192 \\qquad \\Longrightarrow \\qquad S(t) = 11.98(1.192)^t$$
      `
    },
    {
      id: 'elm2-interpret',
      type: 'text' as const,
      content: `
## 🗣️ Interpreting and Using the Output

### Interpret $a$ and $b$ in context

- $a \\approx 11.98$: the model's sales in $2020$ ($t = 0$) are about $11{,}980$ units. (This is the **model's** value, not the recorded $12.0$ — regression does not have to pass through any data point.)
- $b \\approx 1.192$: each year, sales are multiplied by about $1.192$, an increase of about $19.2\\%$ per year.

### Predict

- $S(7) = 11.98(1.192)^7 \\approx 41.0$ thousand units in $2027$.
- $S(2.5) = 11.98(1.192)^{2.5} \\approx 18.6$ thousand units halfway through $2022$.

### Interpolation vs. Extrapolation

| Prediction | Input relative to the data | Reliability |
|:-----------|:---------------------------|:------------|
| $S(2.5)$ | **inside** the data range $0 \\leq t \\leq 5$ | **interpolation** — usually reasonable |
| $S(7)$ | just **outside** the range | **extrapolation** — plausible but less certain |
| $S(30)$ | far outside the range | extrapolation — the model's assumption of unlimited $19\\%$ growth almost surely fails |

> **Units matter.** Say "about $41.0$ thousand units," not "$41.0$." A model is only as meaningful as the units of its inputs and outputs.

### When the model is "good enough"

The regression always produces *some* exponential curve. Whether that curve is an **appropriate** model is a separate question, answered by the **residual plot** in Part 3.
      `
    },
    {
      id: 'elm2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Regression Output Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Exponential regression on a data set returns $a = 50.2$ and $b = 0.934$. Which statement is correct?',
            options: [
              'The model predicts a decrease of about $6.6\\%$ per unit of input',
              'The model predicts a decrease of about $93.4\\%$ per unit of input',
              'The model predicts an increase of about $6.6\\%$ per unit of input',
              'The model predicts a decrease of $0.934$ units per unit of input'
            ],
            correctAnswer: 0,
            explanation: 'The model is $y = 50.2(0.934)^x$. Each unit of input multiplies the output by $0.934$, which keeps $93.4\\%$ and so loses about $6.6\\%$. A subtraction of $0.934$ per unit would describe a linear model.'
          },
          {
            question: 'Using the model $S(t) = 11.98(1.192)^t$, which is the best prediction for $t = 7$?',
            options: [
              'About $41.0$ thousand units',
              'About $100.0$ thousand units',
              'About $28.6$ thousand units',
              'About $14.3$ thousand units'
            ],
            correctAnswer: 0,
            explanation: '$11.98(1.192)^7 \\approx 11.98(3.419) \\approx 41.0$. Multiplying $11.98 \\cdot 1.192 \\cdot 7$ (treating the growth as linear) gives $100.0$; $28.6$ is the last data value, and $14.3$ is $S(1)$.'
          },
          {
            question: 'The sales data cover $0 \\leq t \\leq 5$. Which prediction is an extrapolation?',
            options: [
              '$S(12)$',
              '$S(0.5)$',
              '$S(3.75)$',
              '$S(5)$'
            ],
            correctAnswer: 0,
            explanation: 'Extrapolation means predicting outside the range of the data, and $t = 12$ is well beyond $t = 5$. The other three inputs lie inside $[0, 5]$, so those predictions are interpolations.'
          }
        ]
      }
    },
    {
      id: 'elm2-input',
      type: 'input-boxes' as const,
      content: `
**Use the Model** 🧮

**1)** A regression gives $y = 3.2(1.25)^x$. Find $y$ when $x = 3$. (e.g., $y = 2(1.5)^2 = 4.5$)

**2)** A regression gives $b = 1.072$. By what percent does the model grow per unit of input? Enter the number only. (e.g., $b = 1.03$ means $3$)

**3)** A regression gives $y = 80(0.9)^x$. Find $y$ when $x = 4$, rounded to one decimal place.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.25', '7.2', '52.5'],
        hint1: '$1.25^3 = 1.953125$.',
        hint2: '$b - 1 = 0.072$, written as a percent.',
        hint3: '$0.9^4 = 0.6561$, then multiply by $80$.',
        explanation: '1) $3.2(1.953125) = 6.25$. 2) $1.072 - 1 = 0.072 = 7.2\\%$. 3) $80(0.6561) = 52.488 \\approx 52.5$.'
      }
    },
    {
      id: 'elm2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Reading Regression Output** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the regression model $y = ab^x$, the value $a$ is the model\'s',
            options: ['predicted output at $x = 0$', 'growth rate per unit', 'first data value exactly', 'largest output']
          },
          {
            label: 'A regression value $b = 1.192$ means the output grows about',
            options: ['$19.2\\%$ per unit of input', '$1.192\\%$ per unit of input', '$119.2\\%$ per unit of input', '$1.192$ units per unit of input']
          },
          {
            label: 'While computing with regression values, you should',
            options: ['keep full calculator precision and round only the final answer', 'round $a$ and $b$ to one decimal first', 'round every intermediate step to the nearest whole number', 'replace $b$ with the nearest simple fraction']
          },
          {
            label: 'A prediction for an input far beyond the data is called',
            options: ['extrapolation, and it is less reliable', 'interpolation, and it is very reliable', 'a residual', 'regression']
          }
        ],
        correctAnswers: ['predicted output at $x = 0$', '$19.2\\%$ per unit of input', 'keep full calculator precision and round only the final answer', 'extrapolation, and it is less reliable'],
        hint1: 'Substitute $x = 0$ into $ab^x$.',
        hint2: '$b - 1 = 0.191$.',
        hint3: 'Early rounding compounds through the exponent. Predicting outside the data range is extrapolation.',
        explanation: '$a$ is the model\'s value at $x = 0$ (not necessarily a data point). $b = 1.192$ is $19.2\\%$ growth per unit. Keep full precision until the end. Far-outside-the-data predictions are extrapolations.'
      }
    },
    {
      id: 'elm2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Exponential regression gives $a = 2.45$ and $b = 1.38$. What does the model predict when $x = 4$?',
            options: [
              'About $8.9$',
              'About $13.5$',
              'About $6.4$',
              'About $3.8$'
            ],
            correctAnswer: 0,
            explanation: '$2.45(1.38)^4 \\approx 2.45(3.627) \\approx 8.9$. The value $13.5$ comes from $2.45 \\cdot 1.38 \\cdot 4$, treating the growth as linear; $6.4$ multiplies by $1.38$ only three times; $3.8$ adds $1.38$ to $2.45$ instead of multiplying.'
          },
          {
            question: 'A regression model has $b = 0.82$. Which statement about the model is correct?',
            options: [
              'For each unit increase in $x$, the predicted output is multiplied by $0.82$, an $18\\%$ decrease',
              'For each unit increase in $x$, the predicted output decreases by $0.82$',
              'For each unit increase in $x$, the predicted output decreases by $82\\%$',
              'The predicted output at $x = 0$ is $0.82$'
            ],
            correctAnswer: 0,
            explanation: 'In $y = ab^x$ the base $b$ is the factor applied per unit of input: multiplying by $0.82$ keeps $82\\%$ and removes $18\\%$. A fixed decrease of $0.82$ would be linear, and the output at $x = 0$ is $a$, not $b$.'
          }
        ]
      }
    }
  ]
};
