export const precalcExpLogModelingPart7Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm7-intro',
      type: 'text' as const,
      content: `
# 🏆 Modeling Synthesis — FRQ Question 2 Skills

**Part 7 of 7 — Modeling Synthesis (FRQ Question 2 Skills)**

Free-response **Question 2** ("Modeling a Non-Periodic Context", calculator allowed) hands you a table or a description, asks for a model, a prediction, an interpretation, and often a judgment about the model. This part walks one such problem end to end.

### Your Modeling Toolkit

| Skill (Part) | Key idea |
|:-------------|:---------|
| Build from two points (1) | $b = (y_2/y_1)^{1/(x_2 - x_1)}$, $a = y_1/b^{x_1}$; match the exponent to the input spacing |
| Regression (2) | \`ExpReg\` / \`LnReg\` give $a$ and $b$; interpret them in context with units; interpolate, extrapolate with care |
| Residuals (3) | residual $=$ actual $-$ predicted; positive = underestimate |
| Choose and validate (4) | differences → linear, second differences → quadratic, ratios → exponential; a patternless residual plot validates |
| Logarithmic models (5) | equal input ratios give equal output differences; $y = a + b\\log x$ |
| Semi-log plots (6) | exponential data are linear; slope $= \\log b$, intercept $= \\log a$ |
      `
    },
    {
      id: 'elm7-walkthrough',
      type: 'text' as const,
      content: `
## 📋 Worked FRQ-Style Problem

> **The number $N$ of households in a town with rooftop solar panels was recorded each year. Let $t$ be the number of years since 2018.**
>
> | $t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
> |:--|:--|:--|:--|:--|:--|:--|:--|
> | $N$ | $40$ | $52$ | $70$ | $91$ | $118$ | $155$ | $200$ |

### (a) Use exponential regression to write a model $N(t) = ab^t$.

The ratios $1.30, 1.35, 1.30, 1.30, 1.31, 1.29$ are nearly constant, so an exponential model is appropriate. \`ExpReg\` gives $a \\approx 40.22$ and $b \\approx 1.309$:

$$N(t) = 40.22(1.309)^t$$

**Interpretation:** the model's count in 2018 is about $40$ households, and the number of solar households grows by about $30.9\\%$ per year.

### (b) Predict the number of solar households in 2026.

$t = 8$: $N(8) = 40.22(1.309)^8 \\approx 347$ households. This is an **extrapolation** two years past the data, so it assumes the $30.9\\%$ yearly growth continues.

### (c) Find the residual at $t = 3$ and interpret it.

Predicted: $N(3) = 40.22(1.309)^3 \\approx 90.2$. Residual $= 91 - 90.2 = +0.8$: the model **underestimates** the 2021 count by about $1$ household.

### (d) Average rate of change from $t = 2$ to $t = 5$.

$\\dfrac{N(5) - N(2)}{5 - 2} = \\dfrac{155 - 70}{3} \\approx 28.3$ households per year (using the data). Because the model is exponential, the average rate of change over later intervals is larger.

### (e) On a semi-log plot of $\\log N$ against $t$, describe the data.

The points lie approximately on a line with slope $\\log 1.309 \\approx 0.117$ and vertical intercept $\\log 40.22 \\approx 1.60$ — the linear pattern on semi-log axes confirms the exponential model.

### (f) State a limitation of the model.

The town has a finite number of households, so the model cannot remain valid indefinitely; growth must eventually slow as the remaining households without panels run out. The model is reasonable for $0 \\leq t \\leq 6$ and nearby years only.
      `
    },
    {
      id: 'elm7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯 (solar-panel data: $N(2) = 70$, $N(5) = 155$; model $N(t) = 40.22(1.309)^t$)
      `,
      exercise: {
        questions: [
          {
            question: 'The solar-panel data give $N(2) = 70$ and $N(5) = 155$. Which expression gives the average rate of change of $N$ over $2 \\leq t \\leq 5$, in households per year?',
            options: [
              '$\\dfrac{155 - 70}{5 - 2}$',
              '$\\dfrac{155}{70}$',
              '$\\dfrac{155 - 70}{5}$',
              '$\\dfrac{5 - 2}{155 - 70}$'
            ],
            correctAnswer: 0,
            explanation: 'Average rate of change is the change in output over the change in input: $\\frac{155 - 70}{3} \\approx 28.3$ households per year. The ratio $\\frac{155}{70}$ is a growth factor, not a rate, and dividing by $5$ uses the wrong interval length.'
          },
          {
            question: 'A different data set has outputs that increase by the same amount each time the input is multiplied by $4$. Which type of model fits?',
            options: [
              'Logarithmic',
              'Exponential',
              'Linear',
              'Quadratic'
            ],
            correctAnswer: 0,
            explanation: 'Equal output differences for equal input **ratios** is the logarithmic pattern: $y = a + b\\log_4 x$. Exponential data give equal output ratios for equal input differences, and linear data give equal output differences for equal input differences.'
          },
          {
            question: 'The residual plot for the model $N(t) = 40.22(1.309)^t$ shows residuals of $-0.2, -0.7, 1.1, 0.8, -0.1, 0.4, -2.3$ with no pattern. What does this indicate?',
            options: [
              'The exponential model is appropriate for the data',
              'A linear model would fit the data better',
              'The model overestimates every data value',
              'The model is wrong because some residuals are negative'
            ],
            correctAnswer: 0,
            explanation: 'Residuals that are small and scattered without a pattern mean the model captures the trend. Negative residuals are expected (the model is above some points and below others); only a pattern would signal a problem.'
          }
        ]
      }
    },
    {
      id: 'elm7-input',
      type: 'input-boxes' as const,
      content: `
**Model Calculations** 🧮 (model $N(t) = 40.22(1.309)^t$)

**1)** Predict $N(8)$, rounded to the nearest whole number. (e.g., $N(7) = 40.22(1.309)^7 \\approx 265$)

**2)** The actual count at $t = 3$ is $91$ and the model gives $90.2$. What is the residual, to one decimal place?

**3)** On a semi-log plot of $\\log N$ against $t$, what is the slope of the line, rounded to three decimals? (e.g., for $b = 2$, the slope is $\\log 2 \\approx 0.301$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['347', '0.8', '0.117'],
        hint1: '$1.309^8 \\approx 8.62$, then multiply by $40.22$.',
        hint2: 'Residual $=$ actual $-$ predicted $= 91 - 90.2$.',
        hint3: 'Slope $= \\log b = \\log 1.309$.',
        explanation: '1) $40.22(8.62) \\approx 347$ households. 2) $91 - 90.2 = 0.8$: the model underestimates slightly. 3) $\\log 1.309 \\approx 0.117$.'
      }
    },
    {
      id: 'elm7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Modeling Decision Map** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Outputs with constant ratios over equal input steps call for a model that is',
            options: ['exponential', 'linear', 'logarithmic', 'quadratic']
          },
          {
            label: 'Outputs that increase by a constant amount when the input is multiplied by a constant call for a model that is',
            options: ['exponential', 'linear', 'logarithmic', 'quadratic']
          },
          {
            label: 'A residual is defined as',
            options: ['actual $-$ predicted', 'predicted $-$ actual', 'actual $\\div$ predicted', 'the slope of the model']
          },
          {
            label: 'Predicting far beyond the last data value is',
            options: ['extrapolation, and the assumption of continued growth must be stated', 'interpolation, and always reliable', 'a residual check', 'regression']
          }
        ],
        correctAnswers: ['exponential', 'logarithmic', 'actual $-$ predicted', 'extrapolation, and the assumption of continued growth must be stated'],
        hint1: 'Multiply by the same factor each step.',
        hint2: 'Input ratio → output difference.',
        hint3: 'Positive residual means the data point is above the model. Far beyond the data is extrapolation.',
        explanation: 'Constant ratios: exponential. Input ratios giving output differences: logarithmic. Residual $=$ actual $-$ predicted. Predictions beyond the data are extrapolations that assume the pattern continues.'
      }
    },
    {
      id: 'elm7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Data Modeling** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Exponential regression on a data set gives $y = 3.1(0.88)^x$. Which interpretation of $b$ is correct?',
            options: [
              'The quantity decreases by about $12\\%$ for each unit increase in $x$',
              'The quantity decreases by $0.88$ for each unit increase in $x$',
              'The quantity decreases by about $88\\%$ for each unit increase in $x$',
              'The quantity is $0.88$ when $x = 0$'
            ],
            correctAnswer: 0,
            explanation: 'Multiplying by $0.88$ each unit keeps $88\\%$ and removes $12\\%$. A decrease of $0.88$ units would be linear, and the value at $x = 0$ is $a = 3.1$.'
          },
          {
            question: 'On a semi-log plot ($\\log y$ against $x$), a data set lies on a horizontal line. What does this say about the original data?',
            options: [
              '$y$ is constant: $b = 1$, so there is no exponential growth or decay',
              '$y$ grows exponentially with $b = 10$',
              '$y$ is linear with slope $0$ on ordinary axes as well, so it is both linear and exponential',
              '$y$ decays exponentially toward $0$'
            ],
            correctAnswer: 0,
            explanation: 'A horizontal semi-log line has slope $0 = \\log b$, so $b = 1$ and $y = a \\cdot 1^x = a$ is constant. A constant function is a (degenerate) linear function but not an exponential one, since an exponential base must differ from $1$.'
          }
        ]
      }
    }
  ]
};
