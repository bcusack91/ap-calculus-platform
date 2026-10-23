export const precalcFrqStrategiesPart3Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs3-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 3 of 7 — Question 2: Modeling a Non-Periodic Context**

### The Shape of Question 2

Question 2 (Part A, graphing calculator) gives **data from a real context**, usually a table, and asks you to build a **linear, quadratic, cubic, exponential or logarithmic model** with regression, then use it. The calculator does the regression; you do the choosing, the stating, the predicting and the interpreting.

| Part | Typical task | What earns the point |
|:---:|:---|:---|
| (A)(i) | Choose the model type and **justify** from the data | "first differences roughly constant" (linear), "second differences roughly constant" (quadratic), "**ratios** roughly constant" (exponential), "differences shrink as inputs grow by a constant factor" (logarithmic) |
| (A)(ii) | State the regression equation | Coefficients to **three decimal places**, with the model type named |
| (B)(i) | Predict a value | "**Approximately** $32.493$ thousand downloads", computed from the **stored** model |
| (B)(ii) | Average rate of change from the data or model | Value, **units of output per input**, and the **interval** |
| (C)(i) | Solve for an input: "when does $D$ reach $50$?" | Three-decimal answer with units, from the calculator |
| (C)(ii) | Name an **assumption** or **limitation** | The pattern the model assumes, and a reason it fails in context |

> **Key Fact:** The justification point in (A) is always about **the numbers in the table**: differences, second differences, or ratios. The words "it looks exponential" earn nothing.`
    },
    {
      id: 'pfs3-worked',
      type: 'text' as const,
      content: `## Worked Question 2

The table gives the number of downloads $D$, in thousands, of a new app during week $t$ after its release.

| $t$ (weeks) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $D$ (thousand downloads) | $4.0$ | $5.2$ | $6.8$ | $8.8$ | $11.4$ | $14.8$ |

### (A)(i) Explain why an exponential model is appropriate.

Ratios of consecutive values: $\\dfrac{5.2}{4.0} = 1.300$, $\\dfrac{6.8}{5.2} \\approx 1.308$, $\\dfrac{8.8}{6.8} \\approx 1.294$, $\\dfrac{11.4}{8.8} \\approx 1.295$, $\\dfrac{14.8}{11.4} \\approx 1.298$.

**Answer:** "Over equal one-week intervals, the output changes by a **roughly constant ratio** of about $1.30$, so the downloads grow proportionally and an exponential model is appropriate."

(By contrast, the first differences $1.2, 1.6, 2.0, 2.6, 3.4$ are not constant, so the model is not linear.)

### (A)(ii) Use exponential regression to find a model $D(t) = a \\cdot b^t$.

Calculator (ExpReg on $t$ and $D$):

$$D(t) = 3.087\\,(1.299)^t$$

Store the full-precision model in $Y_1$. State it to three decimal places; compute with the stored version.

### (B)(i) Use the model to predict the downloads in week $9$.

$Y_1(9) \\approx 32.493$. **Answer:** "The model predicts **approximately** $32.493$ thousand downloads in week $9$."

(The rounded coefficients give $3.087(1.299)^9 \\approx 32.510$: a different third decimal. This is why you compute with the stored model.)

### (B)(ii) Find and interpret the average rate of change of $D$ over $2 \\le t \\le 6$.

$$\\frac{D(6) - D(2)}{6 - 2} = \\frac{14.8 - 5.2}{4} = \\frac{9.6}{4} = 2.4$$

**Answer:** "Between week $2$ and week $6$, the number of downloads per week increased at an average rate of $2.4$ **thousand downloads per week**."

### (C)(i) According to the model, during which week does $D$ first reach $50$ thousand?

Solve $Y_1 = 50$ on the calculator (intersection with $Y_2 = 50$, or $\\ln$ algebra): $t \\approx 10.648$.

**Answer:** "$D(t) = 50$ when $t \\approx 10.648$, so weekly downloads first reach $50$ thousand during **week $11$**."

### (C)(ii) Give a limitation of the model.

**Answer:** "The model assumes downloads keep growing by about $30\\%$ every week. The number of people who could download the app is finite, so the growth must slow, and the model will **overpredict** for large $t$ (it gives about $71$ thousand in week $12$)."

### Scoring guide

| Part | Point | Earned by |
|:---:|:---:|:---|
| (A)(i) | 1 | ratios of consecutive outputs roughly constant |
| (A)(ii) | 1 | $D(t) = 3.087(1.299)^t$ (three decimals) |
| (B)(i) | 1 | approximately $32.493$ |
| (B)(ii) | 1 | $2.4$ thousand downloads per week, on $[2, 6]$ |
| (C)(i) | 1 | $t \\approx 10.648$ |
| (C)(ii) | 1 | assumption named with a contextual reason it fails |

> **Key Fact:** In (B)(ii), the rate is computed from **the data** when the question says "the table", and from **the model** when it says "the model". Read which.`
    },
    {
      id: 'pfs3-mc',
      type: 'multiple-choice' as const,
      content: '**Question 2 practice.** 🎯 Use the download data and the model $D(t) = 3.087(1.299)^t$.',
      exercise: {
        questions: [
          {
            question: 'Which statement earns the justification point for choosing an exponential model?',
            options: ['Consecutive outputs have a roughly constant ratio of about $1.30$', 'The outputs increase faster and faster as the week number increases', 'The graph of the data points curves upward like an exponential', 'The first differences $1.2, 1.6, 2.0, 2.6, 3.4$ are all positive'],
            correctAnswer: 0,
            explanation: 'Exponential growth means equal input steps multiply the output by the same factor, and the ratios show it. "Faster and faster" also describes quadratic data, a visual impression is not a justification, and positive first differences only say the data is increasing.'
          },
          {
            question: 'Which is the full-credit prediction for week $9$?',
            options: ['Approximately $32.493$ thousand downloads, from the stored model', 'Approximately $32.510$ thousand downloads, from the rounded coefficients', 'Exactly $32.493$ thousand downloads, since the model gives it', 'Approximately $32.5$ thousand downloads, since the data is rounded'],
            correctAnswer: 0,
            explanation: 'Predictions use the stored full-precision model and are reported as approximate to three decimal places. Recomputing with the rounded coefficients changes the third decimal, "exactly" misdescribes a model value, and one decimal place is not enough.'
          },
          {
            question: 'From the table, the average rate of change of $D$ over $2 \\le t \\le 6$ is $2.4$. Which interpretation is correct?',
            options: ['Downloads rose by an average of $2.4$ thousand per week from week $2$ to week $6$', 'Downloads rose by a total of $2.4$ thousand between week $2$ and week $6$', 'Downloads were $2.4$ thousand per week on average during weeks $2$ through $6$', 'Downloads rose by $2.4\\%$ per week on average from week $2$ to week $6$'],
            correctAnswer: 0,
            explanation: 'An average rate of change is output change per unit input, on the interval: thousand downloads per week, from week 2 to week 6. The total change was $9.6$ thousand, the average weekly download count is a different quantity, and a percent per week describes the exponential base, not a difference quotient.'
          }
        ]
      }
    },
    {
      id: 'pfs3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Reading the model.** 🔽 The regression model is $D(t) = 3.087(1.299)^t$ and $D(3) \\approx 6.765$.',
      exercise: {
        dropdowns: [
          {
            label: 'The base $1.299$ means that, according to the model, weekly downloads are:',
            options: ['about $29.9\\%$ more each week than the week before', 'about $1.299$ thousand more each week than the week before', 'about $29.9\\%$ more in week $6$ than in week $1$', 'about $12.99$ thousand more each week than the week before'],
            correctAnswer: 0
          },
          {
            label: 'The data value in week $3$ is $6.8$ and the model gives $6.765$, so the residual there is:',
            options: ['positive, and the model underpredicts in week $3$', 'negative, and the model overpredicts in week $3$', 'zero, since the model passes exactly through the data point', 'positive, and the model overpredicts in week $3$'],
            correctAnswer: 0
          },
          {
            label: 'Which limitation statement earns the point?',
            options: ['The model assumes $30\\%$ weekly growth, but the number of possible users is finite', 'The model is only an estimate, so any prediction it makes could be wrong', 'The calculator rounded the coefficients, so every prediction is inexact', 'Six data points are too few for any model to be trusted for predictions'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['about $29.9\\%$ more each week than the week before', 'positive, and the model underpredicts in week $3$', 'The model assumes $30\\%$ weekly growth, but the number of possible users is finite'],
        hint1: 'A base of $1 + r$ is a growth rate of $r$ per unit of $t$.',
        hint2: 'Residual $=$ actual $-$ predicted.',
        hint3: 'A limitation names the assumed pattern and a contextual reason it must fail.',
        explanation: 'The base $1.299 = 1 + 0.299$ is a $29.9\\%$ increase per week. The residual $6.8 - 6.765 = 0.035$ is positive, so the actual value is above the model: the model underpredicts there. The limitation point needs the assumption (constant percent growth) tied to the context (finite users).'
      }
    },
    {
      id: 'pfs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Justify the model type with **differences, second differences or ratios** from the table
- State the regression to **three decimals**; predict with the **stored** model and the word **approximately**
- A rate of change is reported with **units of output per input** and its **interval**
- A limitation names the **assumed pattern** and a **contextual reason** it fails; "the model is only an estimate" earns nothing`
    }
  ]
};
