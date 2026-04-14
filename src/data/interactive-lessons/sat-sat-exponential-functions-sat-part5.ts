export const satExponentialFnPart5Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef5-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 5 of 7 — Exponential vs. Linear**

### How to Tell the Difference

| Feature | Linear | Exponential |
|---------|--------|-------------|
| Pattern | Add constant | Multiply by constant |
| Formula | $y = mx + b$ | $y = ab^x$ |
| Table | Constant differences | Constant ratios |
| Graph | Straight line | Curve |

### From a Table

| $x$ | $y$ (linear) | $y$ (exponential) |
|-----|-------------|-------------------|
| 0 | 3 | 3 |
| 1 | 7 | 6 |
| 2 | 11 | 12 |
| 3 | 15 | 24 |

Linear: differences are all $+4$.
Exponential: ratios are all $\\times 2$.

### SAT Question Type

"Which type of function best models the data?"

Check: are the **differences** constant (linear) or are the **ratios** constant (exponential)?

### The Key Difference for Word Problems

- "Increases by 50 each year" → linear: $y = 50t + b$
- "Increases by 50% each year" → exponential: $y = a(1.5)^t$`
    },
    {
      id: 'ef5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Linear vs. Exponential** 🎯',
      exercise: {
        questions: [
          {
            question: 'Data: $(0, 100), (1, 80), (2, 64), (3, 51.2)$. This data is best modeled by:',
            options: ['An exponential function with $b = 0.8$', 'A linear function with slope $-20$', 'A quadratic function', 'An exponential function with $b = 1.2$'],
            correctAnswer: 0,
            explanation: 'Check ratios: $80/100 = 0.8$, $64/80 = 0.8$, $51.2/64 = 0.8$. Constant ratio → exponential with $b = 0.8$.'
          },
          {
            question: '"A town\'s population increases by 2,000 people per year." This is best modeled by:',
            options: ['A linear function', 'An exponential function', 'A quadratic function', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '"Increases by 2,000" = constant addition → linear. If it said "increases by 2%," that would be exponential.'
          },
          {
            question: 'Which grows faster for large $x$: $f(x) = 1000x$ or $g(x) = 2^x$?',
            options: ['$g(x) = 2^x$', '$f(x) = 1000x$', 'They grow at the same rate', 'Depends on $x$'],
            correctAnswer: 0,
            explanation: 'Exponential ALWAYS eventually outpaces linear, no matter how large the linear coefficient. By $x = 20$: $f = 20{,}000$ but $g = 1{,}048{,}576$.'
          }
        ]
      }
    },
    {
      id: 'ef5-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Table Analysis

**Determine if this data is linear, exponential, or neither:**

| $x$ | $y$ | Difference | Ratio |
|-----|-----|-----------|-------|
| 0 | 4 | — | — |
| 1 | 12 | $+8$ | $3$ |
| 2 | 36 | $+24$ | $3$ |
| 3 | 108 | $+72$ | $3$ |

Differences are NOT constant → not linear. Ratios ARE constant ($\\times 3$) → **exponential**: $y = 4(3)^x$.

### Worked Example 2 — SAT Word Problem

**"A tank starts with 200 gallons and loses 25 gallons per hour." Linear or exponential?**

| Clue | Interpretation |
|------|---------------|
| "Loses 25 gallons" | Fixed amount → linear |
| Model | $y = 200 - 25t$ |

**Compare:** "A tank starts with 200 gallons and loses 25% per hour" → exponential: $y = 200(0.75)^t$.

### When They Cross

Linear and exponential functions may be equal at certain points, but exponential always wins for large $t$:

| $t$ | $L(t) = 100 + 50t$ | $E(t) = 10(1.5)^t$ |
|-----|--------------------|--------------------|
| 0 | 100 | 10 |
| 5 | 350 | 75.9 |
| 10 | 600 | 576.7 |
| 15 | 850 | 4,379 |
| 20 | 1,100 | 33,252 |`
    },
    {
      id: 'ef5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Model Identification** 🎯',
      exercise: {
        questions: [
          {
            question: 'Data: $(0, 80), (1, 60), (2, 45), (3, 33.75)$. The model that fits is:',
            options: ['$y = 80(0.75)^x$', '$y = 80 - 20x$', '$y = -20x + 80$', '$y = 80(1.25)^x$'],
            correctAnswer: 0,
            explanation: 'Ratios: $60/80 = 0.75$, $45/60 = 0.75$, $33.75/45 = 0.75$. Constant ratio → exponential with $a = 80$, $b = 0.75$.'
          },
          {
            question: '"A city adds 500 new residents each year." Choose the model:',
            options: ['$P = P_0 + 500t$ (linear)', '$P = P_0(1.05)^t$ (exponential)', '$P = 500^t$ (exponential)', '$P = P_0(500)^t$ (exponential)'],
            correctAnswer: 0,
            explanation: '"Adds 500" = constant addition → linear. If it said "grows by 5%," that would be exponential.'
          },
          {
            question: 'For very large $x$, which function has the largest output?',
            options: ['$f(x) = 2^x$', '$g(x) = x^{100}$', '$h(x) = 10{,}000x$', '$k(x) = x^2 + 1{,}000{,}000$'],
            correctAnswer: 0,
            explanation: 'Exponential growth ($2^x$) eventually beats any polynomial ($x^{100}$, $x^2$) or linear function, no matter how large their coefficients.'
          }
        ]
      }
    },
    {
      id: 'ef5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Linear or Exponential?** 🔍\n\nClassify each scenario.',
      exercise: {
        dropdowns: [
          { label: '"Your savings increase by $200 every month"', options: ['Linear', 'Exponential', 'Neither', 'Both'] },
          { label: '"The virus spreads to 3× as many people each week"', options: ['Exponential', 'Linear', 'Neither', 'Quadratic'] },
          { label: '"The temperature drops by 2°F each hour"', options: ['Linear', 'Exponential', 'Neither', 'Quadratic'] },
          { label: '"Each bounce reaches 60% of the previous height"', options: ['Exponential', 'Linear', 'Neither', 'Quadratic'] }
        ],
        correctAnswers: ['Linear', 'Exponential', 'Linear', 'Exponential'],
        hint1: 'Fixed dollar amount added → linear.',
        hint2: '"3× as many" = constant multiplier → exponential.',
        hint3: 'Fixed degrees dropped → linear. Fixed percentage of previous → exponential.',
        explanation: 'Add constant → linear. Multiply by constant → exponential. $+200$/mo → linear. $\\times 3$/wk → exponential. $-2$°F/hr → linear. $\\times 0.6$/bounce → exponential.'
      }
    },
    {
      id: 'ef5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Feature | Linear | Exponential |
|---------|--------|-------------|
| Key word | "by [amount]" | "by [percent]" or "times" |
| Table test | Constant differences | Constant ratios |
| Formula | $y = mx + b$ | $y = ab^x$ |
| Graph | Straight line | Curve with asymptote |
| Long-term | Steady growth | Explosive growth |

- For SAT data tables: check ratios first (divide consecutive $y$-values)
- If ratios are constant → exponential; if differences are constant → linear
- Exponential ALWAYS beats linear for large enough $x$`
    }
  ]
};
