export const precalcExponentialPart1Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Functions — Core Form & Growth vs Decay

**Part 1 of 7**

An **exponential function** has the form:

$$\\boxed{f(x) = a \\cdot b^x, \\quad a \\neq 0,\\; b > 0,\\; b \\neq 1}$$

| Parameter | Name | What It Controls |
|:----------|:-----|:-----------------|
| $a$ | Initial value | $y$-intercept: $f(0) = a$ |
| $b$ | Base (growth/decay factor) | Multiplicative rate per unit of $x$ |
| $b > 1$ | Growth | Output increases as $x$ increases |
| $0 < b < 1$ | Decay | Output decreases as $x$ increases |

> **Key insight:** Every time $x$ increases by $1$, the output is **multiplied** by $b$ — not added to. This is what separates exponential from linear.
      `
    },
    {
      id: 'p1-growth-decay',
      type: 'text' as const,
      content: `
## 🔍 Growth vs Decay — Side by Side

### Growth: $f(x) = 3 \\cdot 2^x$

| $x$ | $f(x)$ | Ratio $\\frac{f(x)}{f(x-1)}$ |
|:----|:-------|:-----|
| $0$ | $3$ | — |
| $1$ | $6$ | $2$ |
| $2$ | $12$ | $2$ |
| $3$ | $24$ | $2$ |

Consecutive outputs always have the **same ratio** ($b = 2$). This constant ratio is the hallmark of exponential behavior.

### Decay: $g(x) = 80 \\cdot (0.5)^x$

| $x$ | $g(x)$ | Ratio |
|:----|:-------|:------|
| $0$ | $80$ | — |
| $1$ | $40$ | $0.5$ |
| $2$ | $20$ | $0.5$ |
| $3$ | $10$ | $0.5$ |

Each step **halves** the output. The base $b = 0.5$ is between $0$ and $1$, so the function decays.

### 📐 Graph Features (Both Cases)

| Feature | Value |
|:--------|:------|
| Domain | All real numbers $(-\\infty, \\infty)$ |
| Range | $(0, \\infty)$ when $a > 0$ |
| $y$-intercept | $(0, a)$ |
| Horizontal asymptote | $y = 0$ (the $x$-axis) |
| Passes through | $(1, ab)$ always |
      `
    },
    {
      id: 'p1-percent-rate',
      type: 'text' as const,
      content: `
## 💹 Percent Growth & Decay Rate

In applications, the base $b$ is often written as:

$$\\boxed{b = 1 + r \\quad \\text{(growth)} \\qquad b = 1 - r \\quad \\text{(decay)}}$$

where $r$ is the **percent rate** (as a decimal).

### Worked Example

> **A town of $5{,}000$ people grows $6\\%$ per year. Write the model and find the population after $10$ years.**

$P(t) = 5000(1 + 0.06)^t = 5000(1.06)^t$

$P(10) = 5000(1.06)^{10} = 5000(1.7908...) \\approx 8{,}954$

### Quick Reference

| Scenario | $r$ | $b = 1 \\pm r$ | Growth or Decay? |
|:---------|:----|:-------------|:-----------------|
| $15\\%$ annual appreciation | $0.15$ | $1.15$ | Growth |
| $8\\%$ annual depreciation | $0.08$ | $0.92$ | Decay |
| $3.5\\%$ monthly increase | $0.035$ | $1.035$ | Growth |
| $20\\%$ hourly radioactive loss | $0.20$ | $0.80$ | Decay |
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which function represents exponential **decay**?',
            options: [
              '$f(x) = 4 \\cdot 3^x$',
              '$f(x) = 4 \\cdot 0.3^x$',
              '$f(x) = 4x + 3$',
              '$f(x) = 4 \\cdot (-3)^x$'
            ],
            correctAnswer: 1,
            explanation: 'Decay requires $0 < b < 1$. Only $b = 0.3$ satisfies this. $b = 3$ is growth, $4x + 3$ is linear, and $b = -3$ violates $b > 0$.'
          },
          {
            question: 'A car loses $18\\%$ of its value each year. If it starts at $\\$25{,}000$, which model is correct?',
            options: [
              '$V(t) = 25000(0.18)^t$',
              '$V(t) = 25000(1.18)^t$',
              '$V(t) = 25000(0.82)^t$',
              '$V(t) = 25000 - 0.18t$'
            ],
            correctAnswer: 2,
            explanation: 'Losing $18\\%$ means retaining $82\\%$, so $b = 1 - 0.18 = 0.82$. The model is $V(t) = 25000(0.82)^t$.'
          },
          {
            question: 'For $f(x) = 7 \\cdot 5^x$, what is $f(0)$?',
            options: [
              '$0$',
              '$5$',
              '$7$',
              '$35$'
            ],
            correctAnswer: 2,
            explanation: '$f(0) = 7 \\cdot 5^0 = 7 \\cdot 1 = 7$. The initial value $a$ is always the $y$-intercept.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Calculation Drill** 🧮

**1)** A bacteria culture starts with $200$ cells and triples every hour. How many cells after $4$ hours? (e.g., doubling: $50 \\cdot 2^3 = 400$)

**2)** An investment of $\\$1{,}000$ earns $5\\%$ annually. What is it worth after $1$ year? (e.g., $\\$800$ at $10\\%$: $800(1.10) = 880$)

**3)** Evaluate $6 \\cdot \\left(\\frac{1}{3}\\right)^2$. (e.g., $4 \\cdot \\left(\\frac{1}{2}\\right)^3 = 4 \\cdot \\frac{1}{8} = 0.5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16200', '1050', '0.667'],
        hint1: 'Triples each hour: $200 \\cdot 3^4$. Compute $3^4 = 81$ first.',
        hint2: '$1000 \\cdot 1.05 = ?$',
        hint3: '$\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$. Then multiply by $6$. Round to three decimal places.',
        explanation: '1) $200 \\cdot 3^4 = 200 \\cdot 81 = 16{,}200$. 2) $1000(1.05) = 1050$. 3) $6 \\cdot \\frac{1}{9} = \\frac{6}{9} = \\frac{2}{3} \\approx 0.667$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Scenario** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A population doubles every $5$ years. This is exponential',
            options: ['growth', 'decay', 'neither — it is linear', 'neither — it is quadratic']
          },
          {
            label: 'The $y$-intercept of $f(x) = a \\cdot b^x$ is',
            options: ['$b$', '$a$', '$ab$', '$0$']
          },
          {
            label: 'If $b = 0.95$, the function loses what percent per unit?',
            options: ['$95\\%$', '$5\\%$', '$0.95\\%$', '$0.05\\%$']
          },
          {
            label: 'The horizontal asymptote of $f(x) = 3 \\cdot 2^x$ is',
            options: ['$y = 3$', '$y = 2$', '$y = 0$', 'There is no asymptote']
          }
        ],
        correctAnswers: ['growth', '$a$', '$5\\%$', '$y = 0$'],
        hint1: 'Doubling means multiplying by $2 > 1$.',
        hint2: '$f(0) = a \\cdot b^0 = a \\cdot 1$.',
        hint3: '$b = 1 - r = 0.95$, so $r = 0.05 = 5\\%$.',
        explanation: 'Doubling is growth. $y$-intercept is $a$. $b = 0.95$ means $5\\%$ loss. Every basic exponential has HA $y = 0$.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A substance decays from $500\\text{ g}$ to $125\\text{ g}$ in $2$ hours at a constant hourly rate. What is the hourly decay factor $b$?',
            options: [
              '$0.25$',
              '$0.5$',
              '$0.75$',
              '$4$'
            ],
            correctAnswer: 1,
            explanation: '$500 \\cdot b^2 = 125 \\implies b^2 = 0.25 \\implies b = 0.5$. The substance halves each hour.'
          },
          {
            question: 'Which statement is TRUE about $f(x) = -2 \\cdot 3^x$?',
            options: [
              'It has range $(0, \\infty)$',
              'It has HA $y = -2$',
              'It has range $(-\\infty, 0)$ and HA $y = 0$',
              'It is exponential decay because the output is negative'
            ],
            correctAnswer: 2,
            explanation: 'Since $a = -2 < 0$, all outputs are negative (reflected across $x$-axis). Range is $(-\\infty, 0)$. The HA is still $y = 0$. The base $b = 3 > 1$ means the magnitude grows, so this is NOT decay.'
          }
        ]
      }
    }
  ]
};
