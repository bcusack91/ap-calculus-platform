export const precalcExponentialPart3Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 💰 Compound Interest & Continuous Growth

**Part 3 of 7**

When interest is compounded periodically, we use:

$$\\boxed{A = P\\left(1 + \\frac{r}{n}\\right)^{nt}}$$

| Variable | Meaning |
|:---------|:--------|
| $A$ | Final amount |
| $P$ | Principal (initial investment) |
| $r$ | Annual interest rate (decimal) |
| $n$ | Number of compounding periods per year |
| $t$ | Time in years |

### Common Compounding Frequencies

| Frequency | $n$ |
|:----------|:----|
| Annually | $1$ |
| Semi-annually | $2$ |
| Quarterly | $4$ |
| Monthly | $12$ |
| Daily | $365$ |
| Continuously | Use $A = Pe^{rt}$ instead |
      `
    },
    {
      id: 'p3-worked-examples',
      type: 'text' as const,
      content: `
## 📊 Worked Examples

### Example 1: Quarterly Compounding

> **$\\$5{,}000$ is invested at $6\\%$ annual interest compounded quarterly. Find the balance after $3$ years.**

$$A = 5000\\left(1 + \\frac{0.06}{4}\\right)^{4 \\cdot 3} = 5000(1.015)^{12}$$

$(1.015)^{12} \\approx 1.19562$ → $A \\approx \\$5{,}978.09$

### Example 2: Comparing Frequencies

> **$\\$10{,}000$ at $8\\%$ for $5$ years. Compare annual vs monthly compounding.**

| Frequency | $n$ | Calculation | Final Amount |
|:----------|:----|:-----------|:-------------|
| Annual | $1$ | $10000(1.08)^5$ | $\\$14{,}693.28$ |
| Monthly | $12$ | $10000(1.00\\overline{6})^{60}$ | $\\$14{,}898.46$ |
| Difference | — | — | $\\$205.18$ more |

More frequent compounding always gives a **higher** return, but with diminishing marginal benefit.
      `
    },
    {
      id: 'p3-continuous',
      type: 'text' as const,
      content: `
## ♾️ Continuous Compounding & the Number $e$

As $n \\to \\infty$, the compound interest formula approaches:

$$\\boxed{A = Pe^{rt}}$$

where $e \\approx 2.71828...$

### Why $e$?

$$\\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^n = e$$

This limit is the foundation of continuous growth.

### Worked Example

> **$\\$2{,}000$ invested at $5\\%$ compounded continuously for $10$ years.**

$A = 2000e^{0.05 \\cdot 10} = 2000e^{0.5} = 2000(1.6487...) \\approx \\$3{,}297.44$

### Converting Between Forms

To convert $A = Pe^{rt}$ to $A = P \\cdot b^t$:

$$b = e^r$$

To convert $A = P \\cdot b^t$ to $A = Pe^{rt}$:

$$r = \\ln(b)$$

| Periodic Form | Continuous Equivalent |
|:--------------|:---------------------|
| $1000(1.06)^t$ | $1000e^{0.0583t}$ because $\\ln(1.06) \\approx 0.0583$ |
| $500(0.92)^t$ | $500e^{-0.0834t}$ because $\\ln(0.92) \\approx -0.0834$ |
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Compound Interest Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\$8{,}000$ is invested at $4\\%$ compounded semi-annually for $6$ years. Which expression gives the final amount?',
            options: [
              '$8000(1.04)^6$',
              '$8000(1.02)^{12}$',
              '$8000(1.04)^{12}$',
              '$8000e^{0.04 \\cdot 6}$'
            ],
            correctAnswer: 1,
            explanation: 'Semi-annually: $n = 2$. Rate per period: $\\frac{0.04}{2} = 0.02$. Total periods: $2 \\times 6 = 12$. So $A = 8000(1.02)^{12}$.'
          },
          {
            question: 'Which compounding frequency produces the LARGEST balance (same rate, same time)?',
            options: [
              'Annually',
              'Quarterly',
              'Daily',
              'Continuously'
            ],
            correctAnswer: 3,
            explanation: 'More compounding periods → larger balance. Continuous compounding ($n \\to \\infty$) is the theoretical maximum.'
          },
          {
            question: 'If $A = 1000e^{0.07t}$, what is the equivalent annual growth factor $b$?',
            options: [
              '$0.07$',
              '$e^{0.07} \\approx 1.0725$',
              '$1.07$',
              '$e \\approx 2.718$'
            ],
            correctAnswer: 1,
            explanation: '$A = 1000(e^{0.07})^t = 1000b^t$ where $b = e^{0.07} \\approx 1.0725$. Note: this is slightly more than $1.07$ because of the continuous effect.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Compound Interest Drill** 🧮

**1)** $\\$1{,}000$ at $10\\%$ compounded annually for $2$ years. What is $A$? (e.g., $\\$500$ at $8\\%$ annually for $1$ year: $500(1.08) = 540$)

**2)** How many compounding periods in $4$ years of monthly compounding? (e.g., quarterly for $3$ years: $4 \\times 3 = 12$ periods)

**3)** Evaluate $e^1$ rounded to two decimal places. (e.g., $e^0 = 1.00$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1210', '48', '2.72'],
        hint1: '$A = 1000(1.10)^2$. Compute $(1.10)^2 = 1.21$ first.',
        hint2: 'Monthly means $n = 12$. Total periods = $12 \\times 4$.',
        hint3: '$e \\approx 2.71828...$',
        explanation: '1) $1000(1.10)^2 = 1000(1.21) = 1210$. 2) $12 \\times 4 = 48$ periods. 3) $e^1 \\approx 2.72$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Scenario** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interest compounded $12$ times per year uses $n =$',
            options: ['$1$', '$4$', '$12$', '$365$']
          },
          {
            label: 'The formula $A = Pe^{rt}$ is used when compounding is',
            options: ['annual', 'quarterly', 'daily', 'continuous']
          },
          {
            label: 'Increasing compounding frequency with fixed $r$ and $t$ makes $A$',
            options: ['smaller', 'larger', 'unchanged', 'unpredictable']
          },
          {
            label: 'To convert $b^t$ form to $e^{kt}$ form, use $k =$',
            options: ['$b$', '$\\ln(b)$', '$e^b$', '$\\frac{1}{b}$']
          }
        ],
        correctAnswers: ['$12$', 'continuous', 'larger', '$\\ln(b)$'],
        hint1: 'Monthly = $12$ months per year.',
        hint2: '$e^{rt}$ is the limiting case as $n \\to \\infty$.',
        hint3: 'More compounding = more "interest on interest."',
        explanation: '$n = 12$ for monthly. $Pe^{rt}$ is continuous. More compounding → larger $A$. Convert: $b = e^k \\implies k = \\ln(b)$.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An account earns $6\\%$ compounded monthly. What is the effective annual rate (APY)?',
            options: [
              '$6\\%$',
              '$\\left(1 + \\frac{0.06}{12}\\right)^{12} - 1 \\approx 6.17\\%$',
              '$e^{0.06} - 1 \\approx 6.18\\%$',
              '$6.5\\%$'
            ],
            correctAnswer: 1,
            explanation: 'APY $= \\left(1 + \\frac{r}{n}\\right)^n - 1 = (1.005)^{12} - 1 \\approx 0.0617 = 6.17\\%$. This is slightly less than the continuous rate $e^{0.06} - 1 \\approx 6.18\\%$.'
          },
          {
            question: 'A population modeled by $P(t) = 250e^{0.03t}$ will double when:',
            options: [
              '$t = \\frac{\\ln 2}{0.03} \\approx 23.1$ years',
              '$t = \\frac{0.03}{\\ln 2} \\approx 0.043$ years',
              '$t = \\frac{2}{0.03} \\approx 66.7$ years',
              '$t = \\frac{250}{0.03}$ years'
            ],
            correctAnswer: 0,
            explanation: 'Set $250e^{0.03t} = 500$: $e^{0.03t} = 2$, so $0.03t = \\ln 2$, giving $t = \\frac{\\ln 2}{0.03} \\approx 23.1$ years. This is the **doubling time** formula.'
          }
        ]
      }
    }
  ]
};
