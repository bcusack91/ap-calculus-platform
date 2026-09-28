export const satFunctionsPart6Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn6-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 6 of 7 — Exponential Functions and Their Graphs**

### The Form $f(x) = a \\cdot b^x$

- $a$ is the **initial value**: $f(0) = a \\cdot b^0 = a$, so the $y$-intercept is $(0, a)$
- $b$ is the **growth factor**: each time $x$ goes up by 1, the output is multiplied by $b$
- $b > 1$ → **growth**; $0 < b < 1$ → **decay**

### Reading the Percent from $b$

| Factor | Meaning |
|--------|---------|
| $b = 1 + r$ | Increases by $r$ (as a percent) each step: $1.06$ → up $6\\%$ |
| $b = 1 - r$ | Decreases by $r$ each step: $0.85$ → down $15\\%$ |

### Linear vs. Exponential

- **Linear**: the output **adds** the same amount each step (constant difference)
- **Exponential**: the output is **multiplied** by the same factor each step (constant ratio)

---

### Worked Example 1

**A function $f$ has $f(0) = 5$, $f(1) = 15$, $f(2) = 45$, $f(3) = 135$. Write $f(x)$.**

| Step | Work |
|------|------|
| Check differences | $10, 30, 90$ → not constant, so not linear |
| Check ratios | $15/5 = 45/15 = 135/45 = 3$ → constant ratio |
| Initial value | $f(0) = 5$ |
| Result | $f(x) = 5(3)^x$ |

### Worked Example 2

**For $f(x) = 800(0.75)^x$, describe the function and find $f(2)$.**

| Step | Work |
|------|------|
| Initial value | $800$ |
| Factor | $0.75 = 1 - 0.25$ → decreases by $25\\%$ per step |
| Evaluate | $f(2) = 800(0.75)^2 = 800(0.5625) = 450$ |`
    },
    {
      id: 'fn6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the $y$-intercept of the graph of $y = 250(1.04)^x$ in the $xy$-plane?',
            options: ['$(0, 250)$', '$(0, 1.04)$', '$(0, 260)$', '$(250, 0)$'],
            correctAnswer: 0,
            explanation: 'At $x = 0$, $(1.04)^0 = 1$, so $y = 250$. The point $(0, 260)$ is the value at $x = 1$, and $(250, 0)$ swaps the coordinates.'
          },
          {
            question: 'For which function does the value of $f(x)$ decrease by $20\\%$ each time $x$ increases by 1?',
            options: ['$f(x) = 50(0.8)^x$', '$f(x) = 50(0.2)^x$', '$f(x) = 50(1.2)^x$', '$f(x) = 50 - 0.2x$'],
            correctAnswer: 0,
            explanation: 'Losing $20\\%$ leaves $80\\%$, so the factor is $1 - 0.20 = 0.8$. A factor of $0.2$ would keep only $20\\%$ (an $80\\%$ drop), $1.2$ is $20\\%$ growth, and $50 - 0.2x$ subtracts a fixed amount, which is linear.'
          },
          {
            question: 'A function $f$ satisfies $f(0) = 6$, $f(1) = 12$, $f(2) = 24$, and $f(3) = 48$. Which equation could define $f$?',
            options: ['$f(x) = 6(2)^x$', '$f(x) = 2(6)^x$', '$f(x) = 6x + 6$', '$f(x) = 6(2x)$'],
            correctAnswer: 0,
            explanation: 'Each output is double the one before, and $f(0) = 6$, so $f(x) = 6(2)^x$. $2(6)^x$ gives $f(0) = 2$, $6x + 6$ gives $f(2) = 18$, and $6(2x)$ gives $f(0) = 0$.'
          }
        ]
      }
    },
    {
      id: 'fn6-text2',
      type: 'text' as const,
      content: `### Features of Exponential Graphs

For $f(x) = a \\cdot b^x + k$ with $a > 0$:

| Feature | How to find it |
|---------|----------------|
| $y$-intercept | $f(0) = a + k$ |
| Level it approaches | The graph gets closer and closer to $y = k$ but never reaches it |
| $x$-intercept | Set $f(x) = 0$ and solve; there is none if $k \\geq 0$ |

### Worked Example 3

**Find the intercepts of the graph of $y = 3(2)^x - 12$.**

| Step | Work |
|------|------|
| $y$-intercept | $3(1) - 12 = -9$ → $(0, -9)$ |
| $x$-intercept | $3(2)^x = 12$ → $2^x = 4$ → $x = 2$ → $(2, 0)$ |

### Worked Example 4 — Other Time Units

**A quantity starts at 40 and doubles every 3 years: $Q(t) = 40(2)^{t/3}$. Find $Q(9)$.**

$9$ years is $9/3 = 3$ doubling periods: $Q(9) = 40(2)^3 = 320$.

> **Key insight:** In $b^{t/n}$, the output is multiplied by $b$ once every $n$ units of $t$.

### Comparing Growth

$g(x) = 100 + 20x$ (linear) and $h(x) = 100(1.2)^x$ (exponential) both start at 100 and both equal 120 at $x = 1$. At $x = 5$: $g(5) = 200$ but $h(5) \\approx 248.8$. An increasing exponential eventually passes any linear function.`
    },
    {
      id: 'fn6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Exponential Graphs & Models** 🎯',
      exercise: {
        questions: [
          {
            question: 'At which point does the graph of $y = 3(2)^x - 12$ cross the $x$-axis?',
            options: ['$(2, 0)$', '$(4, 0)$', '$(0, -9)$', '$(0, -12)$'],
            correctAnswer: 0,
            explanation: 'Set $y = 0$: $3(2)^x = 12$, so $2^x = 4$ and $x = 2$. Stopping at $2^x = 4$ and reading $x = 4$ is the common slip, and $(0, -9)$ is the $y$-intercept, not the $x$-intercept.'
          },
          {
            question: 'A population is modeled by $P(t) = 500(2)^{t/4}$, where $t$ is the number of hours after the start. How often does the population double?',
            options: ['Every 4 hours', 'Every 2 hours', 'Every 8 hours', 'Every 0.25 hours'],
            correctAnswer: 0,
            explanation: 'The exponent $t/4$ goes up by 1 each time $t$ goes up by 4, and each such step multiplies $P$ by 2. So the population doubles every 4 hours.'
          },
          {
            question: 'Let $g(x) = 100 + 20x$ and $h(x) = 100(1.2)^x$. Which statement is true?',
            options: ['$h(x) > g(x)$ for all $x > 1$', '$g(x) > h(x)$ for all $x > 1$', '$h(x) = g(x)$ for all $x > 0$', '$g(x) > h(x)$ for all $x > 0$'],
            correctAnswer: 0,
            explanation: 'The two functions are equal at $x = 0$ and $x = 1$. After that the exponential pulls ahead: $g(2) = 140$ but $h(2) = 144$, and the gap keeps growing ($g(5) = 200$, $h(5) \\approx 248.8$). The last choice fails at $x = 2$.'
          }
        ]
      }
    },
    {
      id: 'fn6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Read the Exponential** 🔍\n\nChoose the correct description for each function.',
      exercise: {
        dropdowns: [
          { label: '$f(x) = 20(1.15)^x$', options: ['Growth, 15% per step', 'Decay, 15% per step', 'Growth, 115% per step', 'Decay, 85% per step'] },
          { label: '$f(x) = 20(0.9)^x$', options: ['Decay, 10% per step', 'Decay, 90% per step', 'Growth, 9% per step', 'Growth, 90% per step'] },
          { label: '$f(x) = 7(3)^x$: the y-intercept is at y =', options: ['7', '3', '21', '0'] },
          { label: '$f(x) = 5(2)^x + 3$: the graph levels off toward', options: ['y = 3', 'y = 5', 'y = 0', 'y = 8'] }
        ],
        correctAnswers: ['Growth, 15% per step', 'Decay, 10% per step', '7', 'y = 3'],
        hint1: 'A factor above 1 means growth; subtract 1 to get the percent.',
        hint2: 'A factor below 1 means decay; subtract it from 1 to get the percent lost.',
        hint3: 'As $x$ decreases, $5(2)^x$ shrinks toward 0, so only the $+3$ is left.',
        explanation: '$1.15 = 1 + 0.15$ → growth of 15% per step. $0.9 = 1 - 0.10$ → decay of 10% per step. $f(0) = 7(3)^0 = 7$. The term $5(2)^x$ approaches 0 as $x$ decreases, so the graph approaches $y = 3$.'
      }
    },
    {
      id: 'fn6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Concept | Rule |
|---------|------|
| $f(x) = a \\cdot b^x$ | $a$ = initial value ($y$-intercept); $b$ = factor per step |
| Growth vs. decay | $b > 1$ grows; $0 < b < 1$ decays |
| Percent change | $b = 1 + r$ (up $r$) or $b = 1 - r$ (down $r$) |
| Spotting exponential data | Constant **ratio** between outputs (linear has constant **difference**) |
| $a \\cdot b^x + k$ | Graph approaches $y = k$; $y$-intercept is $a + k$ |
| $b^{t/n}$ | Multiplies by $b$ once every $n$ units of $t$ |

- An increasing exponential function eventually exceeds any increasing linear function`
    }
  ]
};
