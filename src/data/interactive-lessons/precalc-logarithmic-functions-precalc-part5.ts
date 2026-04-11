export const precalcLogarithmicPart5Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔀 Logarithmic Functions — Change of Base & Calculator Fluency

**Part 5 of 7**

Calculators only have **LOG** ($\\log_{10}$) and **LN** ($\\ln$) keys. To evaluate any other base, use the **Change of Base Formula**:

$$\\boxed{\\log_b x = \\frac{\\log x}{\\log b} = \\frac{\\ln x}{\\ln b}}$$

### Why It Works

Starting from $\\log_b x = y$:

$b^y = x \\implies \\ln(b^y) = \\ln x \\implies y \\ln b = \\ln x \\implies y = \\frac{\\ln x}{\\ln b}$
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      content: `
## 🧮 Evaluating with Change of Base

### Example 1: $\\log_7 50$

$$\\log_7 50 = \\frac{\\ln 50}{\\ln 7} = \\frac{3.912}{1.946} \\approx 2.011$$

**Sanity check:** $7^2 = 49 \\approx 50$ ✔ (answer should be slightly above $2$)

### Example 2: $\\log_3 100$

$$\\log_3 100 = \\frac{\\log 100}{\\log 3} = \\frac{2}{0.477} \\approx 4.192$$

**Sanity check:** $3^4 = 81$ and $3^5 = 243$, so answer is between $4$ and $5$ ✔

### Quick Reference for Common Calculations

| Expression | Calculator Entry | Result |
|:-----------|:----------------|:-------|
| $\\log_2 10$ | $\\ln(10)/\\ln(2)$ | $\\approx 3.322$ |
| $\\log_5 30$ | $\\ln(30)/\\ln(5)$ | $\\approx 2.113$ |
| $\\log_8 1000$ | $\\log(1000)/\\log(8)$ | $\\approx 3.322$ |
| $\\log_{0.5} 3$ | $\\ln(3)/\\ln(0.5)$ | $\\approx -1.585$ |
      `
    },
    {
      id: 'p5-special-relationships',
      type: 'text' as const,
      content: `
## 🔗 Useful Relationships from Change of Base

### Reciprocal Property

$$\\boxed{\\log_b a = \\frac{1}{\\log_a b}}$$

**Example:** $\\log_2 8 = 3$ and $\\log_8 2 = \\frac{1}{3}$. Product: $3 \\times \\frac{1}{3} = 1$ ✔

### Converting Between Bases

To convert $\\log_a x$ into $\\log_b x$:

$$\\log_a x = \\frac{\\log_b x}{\\log_b a}$$

### Change of Base in Equations

> **Solve $\\log_2 x = \\log_3 5$**

Convert right side: $\\log_3 5 = \\frac{\\ln 5}{\\ln 3} \\approx 1.465$

So $\\log_2 x = 1.465 \\implies x = 2^{1.465} \\approx 2.760$
      `
    },
    {
      id: 'p5-graphing',
      type: 'text' as const,
      content: `
## 📊 Graphing Any Log with Change of Base

To graph $y = \\log_b x$ on a calculator, enter:

$$y = \\frac{\\ln x}{\\ln b}$$

### Base Comparison Table

| Base | $y = \\log_b(10)$ | Growth Rate | Steepness |
|:-----|:------------------|:------------|:----------|
| $b = 2$ | $3.322$ | Fastest | Steepest |
| $b = e$ | $2.303$ | Middle | Medium |
| $b = 10$ | $1.000$ | Slower | Flatter |
| $b = 100$ | $0.500$ | Slowest | Flattest |

> **Key insight:** Larger base = slower growth = flatter curve. All pass through $(1, 0)$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Change of Base Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which calculator expression evaluates $\\log_6 42$?',
            options: [
              '$6 \\div 42$',
              '$\\ln(42) / \\ln(6)$',
              '$\\ln(6) / \\ln(42)$',
              '$42^{1/6}$'
            ],
            correctAnswer: 1,
            explanation: 'Change of base: $\\log_6 42 = \\frac{\\ln 42}{\\ln 6}$. The argument goes on top, the base goes on the bottom.'
          },
          {
            question: 'If $\\log_5 3 \\approx 0.683$, then $\\log_3 5 \\approx$',
            options: [
              '$0.317$',
              '$1.465$',
              '$-0.683$',
              '$0.683$'
            ],
            correctAnswer: 1,
            explanation: 'Reciprocal property: $\\log_3 5 = \\frac{1}{\\log_5 3} = \\frac{1}{0.683} \\approx 1.465$.'
          },
          {
            question: '$\\log_4 16 + \\log_{16} 4 = $',
            options: [
              '$\\frac{5}{2}$',
              '$3$',
              '$4$',
              '$\\frac{3}{2}$'
            ],
            correctAnswer: 0,
            explanation: '$\\log_4 16 = 2$ (since $4^2 = 16$) and $\\log_{16} 4 = \\frac{1}{2}$ (since $16^{1/2} = 4$). Sum: $2 + \\frac{1}{2} = \\frac{5}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Calculator Practice** 🧮

**1)** Evaluate $\\log_2 32$ using change of base: $\\frac{\\log 32}{\\log 2}$. (e.g., $\\log_3 27 = \\frac{\\log 27}{\\log 3} = \\frac{1.431}{0.477} = 3$)

**2)** If $\\log_4 7 \\approx 1.404$, find $\\log_7 4$ to three decimal places. (e.g., if $\\log_3 5 \\approx 1.465$, then $\\log_5 3 = 1/1.465 \\approx 0.683$)

**3)** Evaluate $\\log_9 27$ exactly. Hint: write both as powers of $3$. (e.g., $\\log_8 32$: $8 = 2^3$, $32 = 2^5$, so answer is $\\frac{5}{3}$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '0.712', '3/2'],
        hint1: '$\\log 32 / \\log 2 = \\log(2^5)/\\log 2 = 5\\log 2 / \\log 2$.',
        hint2: 'Reciprocal: $1/1.404 \\approx ?$.',
        hint3: '$9 = 3^2$ and $27 = 3^3$. $\\log_{3^2}(3^3) = \\frac{3}{2}$.',
        explanation: '1) $\\frac{\\log 32}{\\log 2} = \\frac{5\\log 2}{\\log 2} = 5$. 2) $\\frac{1}{1.404} \\approx 0.712$. 3) $\\log_9 27 = \\frac{\\log 3^3}{\\log 3^2} = \\frac{3}{2}$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Base Fluency** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{\\ln x}{\\ln 5}$ equals',
            options: ['$\\ln(x/5)$', '$\\log_5 x$', '$\\log_x 5$', '$5\\ln x$']
          },
          {
            label: '$\\log_b a \\cdot \\log_a b$ always equals',
            options: ['$0$', '$1$', '$a + b$', '$\\log(ab)$']
          },
          {
            label: 'The steepest log graph (for $x > 1$) among $\\log_2 x$, $\\log_{10} x$, $\\ln x$ is',
            options: ['$\\log_2 x$', '$\\ln x$', '$\\log_{10} x$', 'all identical']
          },
          {
            label: '$\\log_b 1$ equals ___ for any valid base',
            options: ['$1$', '$b$', '$0$', 'undefined']
          }
        ],
        correctAnswers: ['$\\log_5 x$', '$1$', '$\\log_2 x$', '$0$'],
        hint1: 'Change of base formula: numerator is $\\ln(\\text{argument})$, denominator is $\\ln(\\text{base})$.',
        hint2: 'Reciprocal property: $\\log_b a = 1/\\log_a b$.',
        hint3: 'Smallest base = steepest curve.',
        explanation: '$\\frac{\\ln x}{\\ln 5} = \\log_5 x$. Reciprocal property gives product $= 1$. Smaller base = steeper. $\\log_b 1 = 0$ always.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{\\log_3 8}{\\log_3 2}$',
            options: [
              '$\\log_3 4$',
              '$4$',
              '$3$',
              '$\\log_2 8$'
            ],
            correctAnswer: 2,
            explanation: 'By change of base (in reverse): $\\frac{\\log_3 8}{\\log_3 2} = \\log_2 8 = 3$. So both C and D are correct representations, but $3$ is the simplified value.'
          },
          {
            question: 'Solve $\\log_5 x = 2.5$ to the nearest integer.',
            options: [
              '$x \\approx 13$',
              '$x \\approx 56$',
              '$x \\approx 25$',
              '$x \\approx 12$'
            ],
            correctAnswer: 1,
            explanation: '$x = 5^{2.5} = 5^2 \\cdot 5^{0.5} = 25\\sqrt{5} \\approx 25(2.236) \\approx 55.9 \\approx 56$.'
          }
        ]
      }
    }
  ]
};
