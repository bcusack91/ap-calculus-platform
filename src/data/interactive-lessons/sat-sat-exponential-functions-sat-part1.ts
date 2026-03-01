export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Functions Basics

**Part 1 of 7 — The Form $f(x)=a \\cdot b^x$, Growth vs Decay, Reading Tables**

An **exponential function** has the general form:

$$f(x) = a \\cdot b^x$$

| Parameter | Meaning |
|-----------|---------|
| $a$ | Initial value (the $y$-intercept when $x=0$) |
| $b$ | Base (growth/decay factor) |

**Key rules:**
- If $b > 1$ the function models **exponential growth**.
- If $0 < b < 1$ the function models **exponential decay**.
- $a$ is the value of $f(0)$ because $b^0 = 1$.
- The base $b$ must be **positive** and **not equal to 1**.

**SAT Tip:** On the SAT you'll often need to identify $a$ and $b$ from a table or context — nail down $a$ first by looking at $x = 0$.
      `
    },
    {
      id: 'sat-ef1-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Identify growth or decay:**

$f(x) = 5 \\cdot 2^x$

Here $a = 5$ and $b = 2$. Since $b = 2 > 1$, this is **exponential growth**. The function doubles every time $x$ increases by 1.

**Example 2 — Decay:**

$g(x) = 100 \\cdot (0.75)^x$

$a = 100$, $b = 0.75$. Since $0 < 0.75 < 1$, this is **exponential decay**. The function retains 75 % of its value with each unit increase in $x$.

**Example 3 — From a table:**

| $x$ | $f(x)$ |
|-----|--------|
| 0 | 8 |
| 1 | 24 |
| 2 | 72 |
| 3 | 216 |

$a = f(0) = 8$. The ratio $\\frac{24}{8} = 3$, $\\frac{72}{24} = 3$, $\\frac{216}{72} = 3$. So $b = 3$ and $f(x) = 8 \\cdot 3^x$.

**SAT Trap:** Students sometimes confuse the *ratio* with the *difference*. If the ratio between consecutive outputs is constant, the function is exponential — not linear.
      `
    },
    {
      id: 'sat-ef1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Growth or Decay?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which function represents exponential decay?',
            options: ['$f(x)=3 \\cdot 4^x$', '$f(x)=7 \\cdot (1.05)^x$', '$f(x)=10 \\cdot (0.6)^x$', '$f(x)=2 \\cdot 3^x$'],
            correctAnswer: 2,
            explanation: 'Decay requires $0 < b < 1$. Only $b = 0.6$ satisfies that condition.'
          },
          {
            question: 'For $f(x) = 12 \\cdot 5^x$, what is $f(0)$?',
            options: ['$0$', '$5$', '$12$', '$60$'],
            correctAnswer: 2,
            explanation: '$f(0) = 12 \\cdot 5^0 = 12 \\cdot 1 = 12$. The coefficient $a$ always equals $f(0)$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef1-tables',
      type: 'text' as const,
      content: `
## Identifying Exponential Functions from Tables

**Strategy:** Compute the ratio of consecutive outputs. If the ratio is constant, the data is exponential.

| $x$ | $f(x)$ | Ratio |
|-----|--------|-------|
| 0 | 4 | — |
| 1 | 12 | $12/4 = 3$ |
| 2 | 36 | $36/12 = 3$ |
| 3 | 108 | $108/36 = 3$ |

Constant ratio $= 3$, so $f(x) = 4 \\cdot 3^x$.

Compare with a **linear** table where the *difference* is constant:

| $x$ | $g(x)$ | Difference |
|-----|--------|------------|
| 0 | 4 | — |
| 1 | 7 | $+3$ |
| 2 | 10 | $+3$ |
| 3 | 13 | $+3$ |

Here $g(x) = 3x + 4$ — *linear*, not exponential.

**SAT Tip:** Always check ratios first. If the ratio isn't constant, check differences for linearity.
      `
    },
    {
      id: 'sat-ef1-input1',
      type: 'input-boxes' as const,
      content: `
**Finding $a$ and $b$** 🧮

Given the table below, find the exponential function $f(x) = a \\cdot b^x$.

| $x$ | $f(x)$ |
|-----|--------|
| 0 | 5 |
| 1 | 15 |
| 2 | 45 |
| 3 | 135 |

1) What is $a$ (the initial value)?
2) What is $b$ (the base / common ratio)?
3) What is $f(5)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '1215'],
        hint1: '$a = f(0)$.',
        hint2: '$b = f(1) / f(0) = 15/5$.',
        hint3: '$f(5) = 5 \\cdot 3^5 = 5 \\cdot 243$.',
        explanation: '$a = 5$, $b = 3$, so $f(x) = 5 \\cdot 3^x$. Then $f(5) = 5 \\cdot 3^5 = 5 \\cdot 243 = 1215$.'
      }
    },
    {
      id: 'sat-ef1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $f(x) = a \\cdot b^x$, the value of $a$ represents the …',
            options: ['growth rate', 'initial value (y-intercept)', 'exponent', 'slope']
          },
          {
            label: 'If $b = 0.85$, the function is …',
            options: ['growing by 85%', 'decaying by 15%', 'decaying by 85%', 'growing by 15%']
          },
          {
            label: 'To test if a table is exponential you check for a constant …',
            options: ['difference', 'ratio', 'sum', 'product']
          }
        ],
        correctAnswers: ['initial value (y-intercept)', 'decaying by 15%', 'ratio'],
        hint1: 'Plug in $x = 0$: $f(0) = a \\cdot b^0 = a$.',
        hint2: '$b = 0.85 = 1 - 0.15$, so the function loses 15 % each step.',
        hint3: 'Exponential → constant ratio between successive outputs.',
        explanation: '$a = f(0)$ is the initial value. $b = 0.85$ means 15 % decay per unit. Exponential data has a constant ratio.'
      }
    },
    {
      id: 'sat-ef1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A population of bacteria is modeled by $P(t) = 200 \\cdot 3^t$, where $t$ is measured in hours. How many bacteria are there after 4 hours?',
            options: ['$2{,}400$', '$16{,}200$', '$600$', '$5{,}400$'],
            correctAnswer: 1,
            explanation: '$P(4) = 200 \\cdot 3^4 = 200 \\cdot 81 = 16{,}200$.'
          },
          {
            question: 'The table below shows values of a function $h$. Which equation best models $h(x)$?\n\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $h(x)$ | 6 | 18 | 54 | 162 |',
            options: ['$h(x)=6+12x$', '$h(x)=6 \\cdot 3^x$', '$h(x)=3 \\cdot 6^x$', '$h(x)=18^x$'],
            correctAnswer: 1,
            explanation: '$h(0)=6$ so $a=6$. Ratio $= 18/6 = 3$, so $b=3$. Therefore $h(x)=6 \\cdot 3^x$.'
          }
        ]
      }
    }
  ]
};
