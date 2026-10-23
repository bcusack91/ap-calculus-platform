export const precalcExponentialPart3Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# ⏱️ Changing the Time Unit & the Natural Base $e$

**Part 3 of 7 — Changing the Time Unit & the Natural Base e**

An exponential model can be written with **any time unit**. The key property is

$$\\boxed{b^{mn} = (b^m)^n}$$

### Changing the Time Unit

An account grows $6\\%$ per year: $A(t) = P(1.06)^t$ with $t$ in years.

- **Years → months.** Per month the factor is $1.06^{1/12} \\approx 1.00487$, so $A = P(1.00487)^{m}$ with $m$ in months. (Check: $12$ months multiply by $1.00487^{12} = 1.06$.)
- **Months → years.** A monthly factor of $1.005$ is a yearly factor of $1.005^{12} \\approx 1.0617$, i.e. about $6.17\\%$ per year — a little more than $12 \\times 0.5\\% = 6\\%$, because each month's growth is applied to a slightly larger amount.

| Statement | Model (one unit of time per step) | Equivalent form |
|:----------|:----------------------------------|:----------------|
| doubles every $3$ hours | $P = P_0 \\cdot 2^{t/3}$ ($t$ in hours) | $P = P_0(2^{1/3})^t \\approx P_0(1.26)^t$ |
| grows $12\\%$ per year | $P = P_0(1.12)^t$ ($t$ in years) | $P = P_0(1.12)^{m/12}$ ($m$ in months) |
| multiplied by $1.2$ every $5$ years | $P = P_0(1.2)^{t/5}$ | $P = P_0(1.2^{1/5})^t \\approx P_0(1.037)^t$ |

> **Key insight:** $b^{t/3} = (b^{1/3})^t$. Dividing the exponent by $3$ is the same as taking the cube root of the base. The model is the same function either way — only the unit of $t$ changes.
      `
    },
    {
      id: 'p3-worked-examples',
      type: 'text' as const,
      content: `
## 📊 Worked Examples

### Example 1: Rewriting a Yearly Rate per Quarter

> **A balance grows $6\\%$ per year, credited as $1.5\\%$ at the end of each quarter. Write the balance after $t$ years, and find the actual yearly growth factor.**

Each quarter multiplies by $1.015$, and there are $4t$ quarters in $t$ years:

$$A = P(1.015)^{4t} = P\\left(1.015^4\\right)^t \\approx P(1.0614)^t$$

So the balance really grows about $6.14\\%$ per year, slightly more than the stated $6\\%$.

### Example 2: From a Multi-Year Statement to a Yearly Factor

> **A population is multiplied by $1.44$ every $2$ years. By what factor does it grow each year?**

$1.44 = b^2$, so the yearly factor is $b = 1.44^{1/2} = 1.2$: the population grows $20\\%$ per year, and $P = P_0(1.2)^t$.

### Example 3: Doubling Time to a Daily Factor

> **A colony doubles every $6$ days. Write the model with $t$ in days and give the daily growth factor.**

$P = P_0 \\cdot 2^{t/6} = P_0\\left(2^{1/6}\\right)^t \\approx P_0(1.122)^t$ — about $12.2\\%$ growth per day.

> ⚠️ **Common error:** "$6\\%$ per year" is **not** "$0.5\\%$ per month." The monthly factor is $1.06^{1/12} \\approx 1.00487$, about $0.487\\%$, because twelve $0.5\\%$ steps compound to $6.17\\%$.
      `
    },
    {
      id: 'p3-continuous',
      type: 'text' as const,
      content: `
## ♾️ The Natural Base $e$

Start with $1$ and grow $100\\%$ in one year. Apply the growth once: $2$. Apply it as $\\tfrac{1}{12}$ per month, $12$ times: $\\left(1 + \\tfrac{1}{12}\\right)^{12} \\approx 2.613$. Apply it daily: $\\left(1 + \\tfrac{1}{365}\\right)^{365} \\approx 2.715$. The values creep up toward

$$e \\approx 2.71828\\ldots$$

and never pass it. That is why $e$ is the base of choice for models of **continuous** growth or decay:

$$\\boxed{A(t) = Pe^{rt}}$$

### $e^{rt}$ Is Still an Exponential Function

By the same property $b^{mn} = (b^m)^n$:

$$Pe^{rt} = P\\left(e^{r}\\right)^t$$

so a continuous model is just $P \\cdot b^t$ with base $b = e^r$. The two forms describe the **same function**.

### Converting Between Forms

To convert $A = Pe^{rt}$ to $A = P \\cdot b^t$: $b = e^r$. To convert $A = P \\cdot b^t$ to $A = Pe^{rt}$: $r = \\ln(b)$.

| Periodic Form | Continuous Equivalent |
|:--------------|:---------------------|
| $1000(1.06)^t$ | $1000e^{0.0583t}$ because $\\ln(1.06) \\approx 0.0583$ |
| $500(0.92)^t$ | $500e^{-0.0834t}$ because $\\ln(0.92) \\approx -0.0834$ |

> **Worked example:** A population of $2{,}000$ grows continuously at $5\\%$ per year: $P(10) = 2000e^{0.05 \\cdot 10} = 2000e^{0.5} \\approx 2000(1.6487) \\approx 3297$. Its yearly growth factor is $e^{0.05} \\approx 1.0513$, about $5.13\\%$ per year.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Time Unit Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An account earns $4\\%$ per year, credited as $2\\%$ at the end of every half-year. Starting from $8{,}000$, which expression gives the balance after $6$ years?',
            options: [
              '$8000(1.04)^6$',
              '$8000(1.02)^{12}$',
              '$8000(1.04)^{12}$',
              '$8000(1.02)^{6}$'
            ],
            correctAnswer: 1,
            explanation: 'Each half-year multiplies by $1.02$, and $6$ years contain $12$ half-years, so $A = 8000(1.02)^{12}$. Using $1.04$ with $12$ periods doubles the rate, and $(1.02)^6$ counts only $6$ half-years.'
          },
          {
            question: 'A population grows $12\\%$ per year. Which model gives the population after $m$ months?',
            options: [
              '$P_0(1.12)^{m/12}$',
              '$P_0(1.12)^{12m}$',
              '$P_0(1.01)^{m}$',
              '$P_0(0.12)^{m/12}$'
            ],
            correctAnswer: 0,
            explanation: 'A year is $12$ months, so $t = m/12$ and $1.12^{m/12} = (1.12^{1/12})^m \\approx (1.0095)^m$; $1.01^m$ would be $12.68\\%$ per year, and $0.12$ as a base means a $88\\%$ loss each year.'
          },
          {
            question: 'If $A = 1000e^{0.07t}$, what is the equivalent yearly growth factor $b$?',
            options: [
              '$0.07$',
              '$e^{0.07} \\approx 1.0725$',
              '$1.07$',
              '$e \\approx 2.718$'
            ],
            correctAnswer: 1,
            explanation: '$A = 1000(e^{0.07})^t = 1000b^t$ where $b = e^{0.07} \\approx 1.0725$. This is slightly more than $1.07$ because the $7\\%$ is applied continuously.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Time Unit Drill** 🧮

**1)** A population of $1{,}000$ grows $10\\%$ per year. What is it after $2$ years? (e.g., $500$ growing $8\\%$ for $1$ year: $500(1.08) = 540$)

**2)** A quantity is multiplied by $1.2$ every $5$ years. By what factor is it multiplied every year? Round to three decimals. (e.g., multiplied by $1.44$ every $2$ years: $1.44^{1/2} = 1.2$ per year)

**3)** Evaluate $e^1$ rounded to two decimal places. (e.g., $e^0 = 1.00$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1210', '1.037', '2.72'],
        hint1: '$A = 1000(1.10)^2$. Compute $(1.10)^2 = 1.21$ first.',
        hint2: '$b^5 = 1.2$, so $b = 1.2^{1/5}$.',
        hint3: '$e \\approx 2.71828...$',
        explanation: '1) $1000(1.10)^2 = 1000(1.21) = 1210$. 2) $1.2^{1/5} \\approx 1.037$, about $3.7\\%$ per year. 3) $e^1 \\approx 2.72$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rewrite the Model** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$2^{x+3}$ equals',
            options: ['$8 \\cdot 2^x$', '$2^x + 8$', '$3 \\cdot 2^x$', '$6^x$']
          },
          {
            label: 'The formula $A = Pe^{rt}$ is used when growth is',
            options: ['yearly', 'quarterly', 'daily', 'continuous']
          },
          {
            label: 'A yearly growth factor of $1.44$ is a half-yearly factor of',
            options: ['$1.2$', '$0.72$', '$1.22$', '$2.88$']
          },
          {
            label: 'To convert $b^t$ form to $e^{kt}$ form, use $k =$',
            options: ['$b$', '$\\ln(b)$', '$e^b$', '$\\frac{1}{b}$']
          }
        ],
        correctAnswers: ['$8 \\cdot 2^x$', 'continuous', '$1.2$', '$\\ln(b)$'],
        hint1: '$b^{x+k} = b^k \\cdot b^x$.',
        hint2: '$e^{rt}$ is the limiting case as the growth is applied more and more often.',
        hint3: 'Two half-years make a year: $b^2 = 1.44$.',
        explanation: '$2^{x+3} = 2^3 \\cdot 2^x = 8 \\cdot 2^x$. $Pe^{rt}$ is continuous growth. $b^2 = 1.44 \\implies b = 1.2$ per half-year. Convert: $b = e^k \\implies k = \\ln(b)$.'
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
            question: 'A quantity doubles every $6$ hours. Which expression gives its hourly growth factor?',
            options: [
              '$2^{1/6}$',
              '$\\frac{2}{6}$',
              '$6^{1/2}$',
              '$2^6$'
            ],
            correctAnswer: 0,
            explanation: '$P = P_0 \\cdot 2^{t/6} = P_0(2^{1/6})^t$, so each hour multiplies by $2^{1/6} \\approx 1.122$. Dividing $2$ by $6$ treats the growth as linear, and $2^6 = 64$ is the factor for $36$ hours.'
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
            explanation: 'Set $250e^{0.03t} = 500$: $e^{0.03t} = 2$, so $0.03t = \\ln 2$, giving $t = \\frac{\\ln 2}{0.03} \\approx 23.1$ years. This is the **doubling time**.'
          }
        ]
      }
    }
  ]
};
