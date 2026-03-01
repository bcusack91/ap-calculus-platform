export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Exponential vs Linear

**Part 4 of 7 — Constant Ratio vs Constant Difference, Tables, Graphs & SAT Strategies**

The SAT frequently asks you to determine whether data follows a **linear** or **exponential** pattern.

| Property | Linear | Exponential |
|----------|--------|-------------|
| Defining feature | Constant **difference** | Constant **ratio** |
| General form | $f(x) = mx + b$ | $f(x) = a \\cdot b^x$ |
| Graph shape | Straight line | Curved (J-shape or decaying) |
| Rate of change | Constant (slope $m$) | Proportional to current value |

**Quick test from a table:**
1. Compute successive **differences**: $f(x+1) - f(x)$.
2. Compute successive **ratios**: $f(x+1) / f(x)$.
3. If differences are constant → **linear**. If ratios are constant → **exponential**.
      `
    },
    {
      id: 'sat-ef4-examples',
      type: 'text' as const,
      content: `
## Side-by-Side Comparison

**Linear data:**

| $x$ | $f(x)$ | Difference |
|-----|--------|------------|
| 0 | 3 | — |
| 1 | 7 | 4 |
| 2 | 11 | 4 |
| 3 | 15 | 4 |
| 4 | 19 | 4 |

Constant difference $= 4$, so $f(x) = 4x + 3$.

**Exponential data:**

| $x$ | $g(x)$ | Ratio |
|-----|--------|-------|
| 0 | 3 | — |
| 1 | 6 | 2 |
| 2 | 12 | 2 |
| 3 | 24 | 2 |
| 4 | 48 | 2 |

Constant ratio $= 2$, so $g(x) = 3 \\cdot 2^x$.

**Key observation:** At first the values may look similar, but exponential functions *eventually* outpace linear ones — always.

$$\\text{For large } x: \\quad a \\cdot b^x \\gg mx + b \\quad (b > 1)$$

**SAT Trap:** Some tables have only 2–3 rows. Both difference and ratio may *look* constant with limited data. Use $x = 0$ as your anchor and check at least 3 consecutive values.
      `
    },
    {
      id: 'sat-ef4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Linear or Exponential?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A function has values $f(0)=5$, $f(1)=10$, $f(2)=20$, $f(3)=40$. Is this linear or exponential, and what is the function?',
            options: ['Linear: $f(x) = 5x + 5$', 'Exponential: $f(x) = 5 \\cdot 2^x$', 'Linear: $f(x) = 10x - 5$', 'Exponential: $f(x) = 2 \\cdot 5^x$'],
            correctAnswer: 1,
            explanation: 'Ratios: $10/5=2, 20/10=2, 40/20=2$. Constant ratio $= 2$, initial value $= 5$, so $f(x) = 5 \\cdot 2^x$.'
          },
          {
            question: 'Which of the following tables shows exponential growth?\n\n(A) $2, 6, 10, 14$ (B) $2, 6, 18, 54$ (C) $2, 4, 8, 14$ (D) $2, 5, 10, 17$',
            options: ['Table A', 'Table B', 'Table C', 'Table D'],
            correctAnswer: 1,
            explanation: 'Table B: $6/2=3, 18/6=3, 54/18=3$ — constant ratio of 3. The others have non-constant ratios.'
          }
        ]
      }
    },
    {
      id: 'sat-ef4-graphs',
      type: 'text' as const,
      content: `
## Graphs: Linear vs Exponential

**Linear graph:**
- Straight line
- Constant slope
- Crosses the $y$-axis at $b$

**Exponential growth graph ($b > 1$):**
- J-shaped curve
- Starts slowly, then rises steeply
- Has a **horizontal asymptote** at $y = 0$
- Never touches the $x$-axis (always positive if $a > 0$)

**Exponential decay graph ($0 < b < 1$):**
- Starts high, decreases toward zero
- Also has a horizontal asymptote at $y = 0$
- Never reaches zero

**SAT Graph-Reading Strategy:**
1. Check if the graph is a straight line → linear.
2. If curved, check if it approaches a horizontal line → likely exponential.
3. Read two points and verify: is the ratio constant?

**Important:** A quadratic ($y = ax^2 + bx + c$) is also curved, but it's symmetric (U-shaped or inverted U). Exponential curves are *not* symmetric.
      `
    },
    {
      id: 'sat-ef4-input1',
      type: 'input-boxes' as const,
      content: `
**Classify and Model** 🧮

| $x$ | $h(x)$ |
|-----|--------|
| 0 | 2 |
| 1 | 8 |
| 2 | 32 |
| 3 | 128 |

1) What is the common ratio $b$?
2) What is the initial value $a$?
3) What is $h(5)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '2048'],
        hint1: '$b = h(1)/h(0) = 8/2$.',
        hint2: '$a = h(0) = 2$.',
        hint3: '$h(5) = 2 \\cdot 4^5 = 2 \\cdot 1024$.',
        explanation: '$b = 4$, $a = 2$, so $h(x) = 2 \\cdot 4^x$. Then $h(5) = 2 \\cdot 4^5 = 2 \\cdot 1024 = 2048$.'
      }
    },
    {
      id: 'sat-ef4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Key Distinctions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For large $x$, which type of function eventually grows faster?',
            options: ['Linear', 'Exponential (with $b > 1$)', 'They grow at the same rate', 'It depends on the coefficients']
          },
          {
            label: 'A table has constant differences of 5. The function is …',
            options: ['Exponential', 'Linear', 'Quadratic', 'Logarithmic']
          },
          {
            label: 'An exponential growth curve has a horizontal asymptote at …',
            options: ['$y = 1$', '$y = a$', '$y = 0$', 'There is no asymptote']
          }
        ],
        correctAnswers: ['Exponential (with $b > 1$)', 'Linear', '$y = 0$'],
        hint1: 'Exponential growth eventually outpaces any polynomial, including linear.',
        hint2: 'Constant differences = constant rate of change = linear.',
        hint3: 'For $f(x) = a \\cdot b^x$ with $b > 1$, as $x \\to -\\infty$, $f(x) \\to 0$.',
        explanation: 'Exponential always wins for large $x$. Constant differences → linear. The basic exponential has asymptote $y = 0$.'
      }
    },
    {
      id: 'sat-ef4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'At time $t=0$, Carlos has \$100. Each year the amount doubles. Elena also starts with \$100, but she adds \$100 each year. After how many years does Carlos first have strictly more money than Elena?',
            options: ['After 2 years', 'After 3 years', 'After 4 years', 'After 5 years'],
            correctAnswer: 0,
            explanation: 'Carlos: $100 \\cdot 2^t$. Elena: $100 + 100t$. At $t=1$: Carlos $= 200$, Elena $= 200$ (tied). At $t=2$: Carlos $= 400$, Elena $= 300$. Carlos first has strictly more after 2 years.'
          },
          {
            question: 'A scientist measures a quantity every hour: $10, 15, 22.5, 33.75, \\ldots$ Which model best fits this data?',
            options: ['$f(t) = 10 + 5t$', '$f(t) = 10 \\cdot (1.5)^t$', '$f(t) = 5t^2 + 10$', '$f(t) = 15^t$'],
            correctAnswer: 1,
            explanation: 'Ratios: $15/10 = 1.5$, $22.5/15 = 1.5$, $33.75/22.5 = 1.5$. Constant ratio of $1.5$ with initial value $10$, so $f(t) = 10(1.5)^t$.'
          }
        ]
      }
    }
  ]
};
