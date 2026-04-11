export const precalcExponentialPart6Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📊 Data Fitting & Exponential Regression

**Part 6 of 7**

How do you determine whether data is exponential — and if so, find the model $f(x) = ab^x$?

### The Ratio Test

If data is exponential, consecutive $y$-values have a **constant ratio.**

| $x$ | $y$ | Ratio $\\frac{y_{n+1}}{y_n}$ |
|:----|:----|:------|
| $0$ | $5$ | — |
| $1$ | $15$ | $3$ |
| $2$ | $45$ | $3$ |
| $3$ | $135$ | $3$ |

Constant ratio $= 3$ → exponential with $b = 3$.

> **Linear** data has constant **differences**. **Exponential** data has constant **ratios**.
      `
    },
    {
      id: 'p6-finding-model',
      type: 'text' as const,
      content: `
## 🔍 Finding $a$ and $b$ From Data

### Method 1: Two Points

Given two points $(x_1, y_1)$ and $(x_2, y_2)$ on $f(x) = ab^x$:

$$\\boxed{b = \\left(\\frac{y_2}{y_1}\\right)^{\\frac{1}{x_2 - x_1}}} \\qquad \\boxed{a = \\frac{y_1}{b^{x_1}}}$$

### Worked Example

> **Find the exponential function through $(2, 12)$ and $(5, 324)$.**

**Step 1 — Find $b$:**
$b = \\left(\\frac{324}{12}\\right)^{1/(5-2)} = 27^{1/3} = 3$

**Step 2 — Find $a$:**
$a = \\frac{12}{3^2} = \\frac{12}{9} = \\frac{4}{3}$

**Result:** $f(x) = \\frac{4}{3} \\cdot 3^x$

**Verify:** $f(5) = \\frac{4}{3} \\cdot 243 = 324$ ✔
      `
    },
    {
      id: 'p6-log-linearization',
      type: 'text' as const,
      content: `
## 📈 Log Linearization

Taking logarithms converts exponential data into linear data:

$$y = ab^x \\quad \\Longrightarrow \\quad \\ln y = \\ln a + x \\ln b$$

This is the form $Y = mx + c$ where:
- $Y = \\ln y$
- $m = \\ln b$ (slope)
- $c = \\ln a$ ($y$-intercept)

### Why This Matters

| Raw Data Plot | Log-Transformed Plot |
|:-------------|:--------------------|
| Curved (exponential shape) | Straight line |
| Hard to determine $a$ and $b$ visually | Slope gives $\\ln b$, intercept gives $\\ln a$ |

### Worked Example

> **Data: $(0, 2)$, $(1, 6)$, $(2, 18)$, $(3, 54)$. Verify exponential and find the model using logs.**

| $x$ | $y$ | $\\ln y$ |
|:----|:----|:--------|
| $0$ | $2$ | $0.693$ |
| $1$ | $6$ | $1.792$ |
| $2$ | $18$ | $2.890$ |
| $3$ | $54$ | $3.989$ |

$\\ln y$ values have constant spacing ($\\approx 1.099$) → confirms exponential.

Slope $= 1.099 = \\ln b \\implies b = e^{1.099} \\approx 3$

Intercept $= 0.693 = \\ln a \\implies a = e^{0.693} = 2$

**Model:** $f(x) = 2 \\cdot 3^x$
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Data Analysis Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Data points: $(0, 4)$, $(1, 12)$, $(2, 36)$, $(3, 108)$. The growth factor $b$ is:',
            options: [
              '$4$',
              '$8$',
              '$3$',
              '$12$'
            ],
            correctAnswer: 2,
            explanation: 'Ratio test: $12/4 = 3$, $36/12 = 3$, $108/36 = 3$. Constant ratio $= 3$, so $b = 3$.'
          },
          {
            question: 'If a $\\ln y$ vs $x$ plot is linear with slope $0.5$ and $y$-intercept $2$, the original model is:',
            options: [
              '$y = 2 \\cdot (0.5)^x$',
              '$y = e^2 \\cdot e^{0.5x}$',
              '$y = 2x + 0.5$',
              '$y = 0.5x + 2$'
            ],
            correctAnswer: 1,
            explanation: '$\\ln y = 0.5x + 2$ means $y = e^{0.5x + 2} = e^2 \\cdot e^{0.5x} \\approx 7.389 \\cdot (1.649)^x$.'
          },
          {
            question: 'Which data set is NOT exponential?',
            options: [
              '$y$: $2, 6, 18, 54$ (ratios: $3, 3, 3$)',
              '$y$: $5, 10, 20, 40$ (ratios: $2, 2, 2$)',
              '$y$: $3, 9, 18, 30$ (ratios: $3, 2, 1.67$)',
              '$y$: $100, 50, 25, 12.5$ (ratios: $0.5, 0.5, 0.5$)'
            ],
            correctAnswer: 2,
            explanation: 'Exponential requires constant ratios. Set C has ratios $3, 2, 1.67$ — not constant.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Data Fitting Drill** 🧮

**1)** Data: $(0, 10)$, $(1, 20)$, $(2, 40)$. What is $b$? (e.g., for data $5, 15, 45$: ratio $= 15/5 = 3$, so $b = 3$)

**2)** For the model $y = 5 \\cdot 2^x$, what is $\\ln(a)$? Round to two decimal places. (e.g., if $a = 3$: $\\ln 3 \\approx 1.10$)

**3)** An exponential function passes through $(0, 8)$ and $(3, 64)$. What is $b$? (e.g., through $(0, 5)$ and $(2, 45)$: $b = \\sqrt{45/5} = 3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1.61', '2'],
        hint1: 'Ratio: $20/10 = ?$',
        hint2: '$\\ln(5) \\approx ?$',
        hint3: '$b = (64/8)^{1/3} = 8^{1/3}$.',
        explanation: '1) $20/10 = 2$, constant ratio so $b = 2$. 2) $\\ln 5 \\approx 1.61$. 3) $b = (64/8)^{1/3} = 8^{1/3} = 2$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Data Interpretation** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If consecutive $y$-values have constant ratios, the data is',
            options: ['linear', 'quadratic', 'exponential', 'logarithmic']
          },
          {
            label: 'Log linearization transforms $y = ab^x$ into a plot of',
            options: ['$y$ vs $x$ (straight line)', '$\\ln y$ vs $x$ (straight line)', '$y^2$ vs $x$ (straight line)', '$y$ vs $\\ln x$ (straight line)']
          },
          {
            label: 'In the log-linear plot $\\ln y = mx + c$, the slope $m$ equals',
            options: ['$b$', '$\\ln b$', '$a$', '$\\ln a$']
          },
          {
            label: 'To find $a$ from two points, you first need to find',
            options: ['the slope of the line', 'the base $b$', 'the domain', 'the asymptote']
          }
        ],
        correctAnswers: ['exponential', '$\\ln y$ vs $x$ (straight line)', '$\\ln b$', 'the base $b$'],
        hint1: 'Constant differences = linear. Constant ratios = ...',
        hint2: 'Taking $\\ln$ of $y = ab^x$ puts $\\ln y$ on the vertical axis.',
        hint3: '$\\ln(ab^x) = \\ln a + x\\ln b$. Coefficient of $x$ is the slope.',
        explanation: 'Constant ratios → exponential. Log linearization: $\\ln y$ vs $x$. Slope = $\\ln b$. Find $b$ first, then $a = y_1/b^{x_1}$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Data: $(1, 6)$ and $(4, 48)$. The exponential model $y = ab^x$ has:',
            options: [
              '$b = 2$ and $a = 3$',
              '$b = 8$ and $a = \\frac{3}{4}$',
              '$b = 2$ and $a = 6$',
              '$b = 3$ and $a = 2$'
            ],
            correctAnswer: 0,
            explanation: '$b = (48/6)^{1/(4-1)} = 8^{1/3} = 2$. Then $a = 6/2^1 = 3$. So $y = 3 \\cdot 2^x$. Verify: $3 \\cdot 2^4 = 48$ ✔.'
          },
          {
            question: 'A student plots $\\ln y$ vs $x$ and gets a straight line with slope $-0.3$ and $y$-intercept $4.6$. The original model is approximately:',
            options: [
              '$y = 4.6 \\cdot (-0.3)^x$',
              '$y \\approx 99.5 \\cdot (0.741)^x$',
              '$y = -0.3x + 4.6$',
              '$y \\approx 4.6 \\cdot (0.741)^x$'
            ],
            correctAnswer: 1,
            explanation: '$\\ln y = -0.3x + 4.6$. So $a = e^{4.6} \\approx 99.5$ and $b = e^{-0.3} \\approx 0.741$. The model is $y \\approx 99.5(0.741)^x$.'
          }
        ]
      }
    }
  ]
};
