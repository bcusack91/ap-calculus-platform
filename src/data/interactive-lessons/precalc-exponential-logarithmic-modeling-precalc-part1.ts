export const precalcExpLogModelingPart1Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential and Logarithmic Data Modeling and Semi-log Plots

**Part 1 of 7 — Exponential Models from Two Points and Ratios**

### Topic Overview

| Part | Topic | CED |
|:---:|:---|:---:|
| **1** | **Exponential models from two points and ratios** | 2.5 |
| 2 | Exponential regression on the calculator | 2.5, 1.14 |
| 3 | Residuals and residual plots | 2.6 |
| 4 | Choosing and validating a model | 2.6, 1.13 |
| 5 | Logarithmic functions in context | 2.14 |
| 6 | Semi-log plots | 2.15 |
| 7 | Modeling synthesis (FRQ Question 2 skills) | 2.5–2.6, 2.14–2.15 |

### When Is a Data Set Exponential?

A function is exponential, $f(x) = ab^x$, exactly when **equal-length input intervals produce outputs in a constant ratio**. In a table with equally spaced inputs, divide each output by the one before it: if every ratio is (about) the same number $b$, the data are exponential.

| $t$ (years) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:--|:--|:--|:--|:--|:--|:--|
| $P$ (thousands) | $2.0$ | $3.1$ | $4.4$ | $6.8$ | $10.1$ | $15.2$ |
| Ratio to previous | — | $1.55$ | $1.42$ | $1.55$ | $1.49$ | $1.50$ |

The ratios hover around $1.5$, so an exponential model is reasonable. The differences ($1.1, 1.3, 2.4, 3.3, 5.1$) are clearly **not** constant, so a linear model is not.
      `
    },
    {
      id: 'elm1-two-points',
      type: 'text' as const,
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="155" x2="300" y2="155"/><line x1="40" y1="110" x2="300" y2="110"/><line x1="40" y1="65" x2="300" y2="65"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="305" y2="200"/><line x1="40" y1="210" x2="40" y2="12"/></g><text x="300" y="214" font-size="12" fill="currentColor">t</text><text x="46" y="18" font-size="12" fill="currentColor">P</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="214">0</text><text x="83" y="214">1</text><text x="126" y="214">2</text><text x="169" y="214">3</text><text x="212" y="214">4</text><text x="255" y="214">5</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="159">5</text><text x="34" y="114">10</text><text x="34" y="69">15</text></g><g class="fig-accent"><polyline points="40,182 61.5,178 83,173 104.5,166.9 126,159.5 147.5,150.4 169,139.3 190.5,125.6 212,108.9 233.5,88.4 255,63.3 276.5,32.6" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="262" y="60" font-size="12" fill="currentColor">model</text></g><g class="fig-accent-2"><circle cx="40" cy="182" r="4.5" fill="currentColor"/><circle cx="83" cy="172.1" r="4.5" fill="currentColor"/><circle cx="126" cy="160.4" r="4.5" fill="currentColor"/><circle cx="169" cy="138.8" r="4.5" fill="currentColor"/><circle cx="212" cy="109.1" r="4.5" fill="currentColor"/><circle cx="255" cy="63.2" r="4.5" fill="currentColor"/></g></svg>',
        alt: 'Scatter plot of six data points (0, 2.0), (1, 3.1), (2, 4.4), (3, 6.8), (4, 10.1) and (5, 15.2) in red, with the blue curve P = 2 times 1.5 to the t passing very close to every point. The curve bends upward (concave up).',
        caption: 'Figure 1. The population data (red) and the model $P = 2(1.5)^t$ (blue).',
      },
      content: `
## 🔍 Building the Model from Two Points

Pick two data points $(x_1, y_1)$ and $(x_2, y_2)$. Because $\\dfrac{y_2}{y_1} = \\dfrac{ab^{x_2}}{ab^{x_1}} = b^{\\,x_2 - x_1}$,

$$\\boxed{b = \\left(\\frac{y_2}{y_1}\\right)^{\\frac{1}{x_2 - x_1}}} \\qquad \\boxed{a = \\frac{y_1}{b^{x_1}}}$$

### Worked Example 1 — the data above

Use $(0, 2.0)$ and $(4, 10.1)$: $b = \\left(\\dfrac{10.1}{2.0}\\right)^{1/4} = 5.05^{0.25} \\approx 1.50$, and $a = 2.0$ because $x_1 = 0$.

**Model:** $P(t) = 2.0(1.5)^t$ — the population grows about $50\\%$ per year. Figure 1 shows the curve threading the points.

### Worked Example 2 — neither point at $x = 0$

> **Find the exponential function through $(1, 10)$ and $(4, 80)$.**

$b^{4-1} = \\dfrac{80}{10} = 8$, so $b = 2$. Then $a = \\dfrac{10}{2^1} = 5$. **Model:** $f(x) = 5 \\cdot 2^x$. Check: $f(4) = 5 \\cdot 16 = 80$ ✔

### Worked Example 3 — inputs spaced by more than $1$

| $x$ | $0$ | $2$ | $4$ | $6$ |
|:--|:--|:--|:--|:--|
| $y$ | $50$ | $45$ | $40.5$ | $36.45$ |

Every $2$ units the output is multiplied by $0.9$, so $y = 50(0.9)^{x/2}$. Per **one** unit the factor is $0.9^{1/2} \\approx 0.949$: $y \\approx 50(0.949)^x$. Both forms are the same function (CED 2.4: $b^{x/2} = (b^{1/2})^x$).

> ⚠️ Always divide the exponent by the **spacing** of the inputs, or take the matching root of the ratio. Writing $50(0.9)^x$ would make the quantity shrink twice as fast as the data show.
      `
    },
    {
      id: 'elm1-from-words',
      type: 'text' as const,
      content: `
## 🗣️ Building the Model from a Description

| The context says… | Growth factor per step | Model |
|:------------------|:-----------------------|:------|
| "grows $6\\%$ per year" from $P_0$ | $1.06$ per year | $P = P_0(1.06)^t$ |
| "loses $3\\%$ per year" from $8{,}000$ | $0.97$ per year | $P = 8000(0.97)^t$ |
| "triples every $4$ hours" from $500$ | $3$ per $4$ hours | $P = 500 \\cdot 3^{t/4}$ |
| "halves every $10$ days" from $A_0$ | $\\tfrac{1}{2}$ per $10$ days | $A = A_0\\left(\\tfrac{1}{2}\\right)^{t/10}$ |

### Reading the Parameters Back

For $f(x) = ab^x$ with $b > 0$:

- $a = f(0)$ is the **initial value** (the output when the input is $0$).
- $b$ is the **ratio** between outputs one input unit apart; $b - 1$ is the percent change per unit, written as a decimal.
- The output after $n$ units is the initial value multiplied by $b$ exactly $n$ times.

> **Justify (AP language):** "The data are modeled by an exponential function because over equal-length input intervals the output values change by a constant ratio of approximately $1.5$."
      `
    },
    {
      id: 'elm1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Model Construction Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A table gives $y = 640, 480, 360, 270$ at $x = 0, 1, 2, 3$. Which function models the data?',
            options: [
              '$y = 640(0.75)^x$',
              '$y = 640(0.25)^x$',
              '$y = 640 - 160x$',
              '$y = 480(0.75)^x$'
            ],
            correctAnswer: 0,
            explanation: 'Each output is $\\frac{480}{640} = \\frac{360}{480} = 0.75$ times the previous one, and the output at $x = 0$ is $640$. The differences ($-160, -120, -90$) are not constant, so the data are not linear; $0.25$ is the fraction lost, not the fraction kept.'
          },
          {
            question: 'An exponential function passes through $(3, 54)$ and $(5, 486)$. Which is the function?',
            options: [
              '$f(x) = 2 \\cdot 3^x$',
              '$f(x) = 54 \\cdot 3^x$',
              '$f(x) = 2 \\cdot 9^x$',
              '$f(x) = 6 \\cdot 3^x$'
            ],
            correctAnswer: 0,
            explanation: '$b^{5-3} = \\frac{486}{54} = 9$, so $b = 3$ (not $9$: the ratio covers two steps). Then $a = \\frac{54}{3^3} = 2$. Check: $2 \\cdot 3^5 = 486$ ✔.'
          },
          {
            question: 'A quantity starts at $300$ and grows $20\\%$ every $5$ years. Which model gives the quantity after $t$ years?',
            options: [
              '$Q(t) = 300(1.2)^{t/5}$',
              '$Q(t) = 300(1.2)^{5t}$',
              '$Q(t) = 300(1.2)^{t}$',
              '$Q(t) = 300(1.04)^{t/5}$'
            ],
            correctAnswer: 0,
            explanation: 'The factor $1.2$ is applied once per $5$ years, so the exponent counts $5$-year periods: $t/5$. Using $1.2^t$ applies $20\\%$ every year, and $1.04$ per $5$ years is far too slow.'
          }
        ]
      }
    },
    {
      id: 'elm1-input',
      type: 'input-boxes' as const,
      content: `
**Two-Point Drill** 🧮

**1)** An exponential function passes through $(0, 7)$ and $(2, 28)$. What is $b$? (e.g., through $(0, 5)$ and $(2, 45)$: $b = \\sqrt{45/5} = 3$)

**2)** An exponential function passes through $(1, 6)$ and $(3, 24)$. What is $a$? (e.g., through $(1, 10)$ and $(3, 40)$: $b = 2$, so $a = 10/2 = 5$)

**3)** A quantity is $100$ at $x = 0$ and $160$ at $x = 2$. Find the growth factor $b$ per unit, rounded to three decimals.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '3', '1.265'],
        hint1: '$b^2 = 28/7 = 4$.',
        hint2: '$b^2 = 24/6 = 4$, so $b = 2$; then $a = 6/2^1$.',
        hint3: '$b^2 = 1.6$, so $b = \\sqrt{1.6}$.',
        explanation: '1) $b^2 = 4$, so $b = 2$. 2) $b = 2$ and $a = 6/2 = 3$, giving $3 \\cdot 2^x$. 3) $b = 1.6^{1/2} \\approx 1.265$, about $26.5\\%$ growth per unit.'
      }
    },
    {
      id: 'elm1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Exponential Model Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Data with equally spaced inputs are exponential when consecutive outputs have constant',
            options: ['differences', 'ratios', 'sums', 'second differences']
          },
          {
            label: 'In $f(x) = ab^x$, the parameter $a$ is the',
            options: ['output at $x = 0$', 'growth rate per unit', 'output at $x = 1$', 'horizontal asymptote']
          },
          {
            label: 'A model with $b = 0.88$ describes a quantity that',
            options: ['decreases $12\\%$ per unit', 'decreases $88\\%$ per unit', 'increases $12\\%$ per unit', 'decreases by $0.88$ per unit']
          },
          {
            label: '"Halves every $10$ days" from $A_0$ is modeled by',
            options: ['$A_0(\\tfrac{1}{2})^{t/10}$', '$A_0(\\tfrac{1}{2})^{10t}$', '$A_0 - \\tfrac{t}{20}A_0$', '$A_0(10)^{-t/2}$']
          }
        ],
        correctAnswers: ['ratios', 'output at $x = 0$', 'decreases $12\\%$ per unit', '$A_0(\\tfrac{1}{2})^{t/10}$'],
        hint1: 'Exponential = multiply by the same factor each step.',
        hint2: '$f(0) = a \\cdot b^0 = a$.',
        hint3: 'Keeping $88\\%$ means losing $12\\%$. For the last item, the exponent counts $10$-day periods.',
        explanation: 'Constant ratios signal exponential data. $a = f(0)$. $b = 0.88 = 1 - 0.12$: a $12\\%$ decrease per unit. Halving every $10$ days: base $\\tfrac{1}{2}$, exponent $t/10$.'
      }
    },
    {
      id: 'elm1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An exponential function $f(x) = ab^x$ with $b > 0$ has $f(2) = 18$ and $f(4) = 40.5$. Which is $f$?',
            options: [
              '$f(x) = 8(1.5)^x$',
              '$f(x) = 18(1.5)^x$',
              '$f(x) = 8(2.25)^x$',
              '$f(x) = 12(1.5)^x$'
            ],
            correctAnswer: 0,
            explanation: '$b^2 = \\frac{40.5}{18} = 2.25$, so $b = 1.5$. Then $a = \\frac{18}{1.5^2} = \\frac{18}{2.25} = 8$. Using $2.25$ as the base forgets the square root, and $a = 18$ is $f(2)$, not $f(0)$.'
          },
          {
            question: 'A sample has mass $400$ g at $t = 0$, $300$ g at $t = 3$ hours, and $225$ g at $t = 6$ hours. Which model fits the data?',
            options: [
              '$M(t) = 400(0.75)^{t/3}$',
              '$M(t) = 400(0.75)^{t}$',
              '$M(t) = 400(0.25)^{t/3}$',
              '$M(t) = 400 - 33.3t$'
            ],
            correctAnswer: 0,
            explanation: 'Every $3$ hours the mass is multiplied by $\\frac{300}{400} = \\frac{225}{300} = 0.75$, so the exponent counts $3$-hour periods: $t/3$. The drops ($100$ g, then $75$ g) are not equal, so a linear model does not fit.'
          }
        ]
      }
    }
  ]
};
