export const calcbcIntByPartsPart2Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp2-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts

**Part 2 of 7 \u2014 Tabular (Column) Method**

The tabular method is a shortcut for integrating products of the form **(polynomial) \u00d7 (easy-to-integrate function)**. Instead of repeatedly applying IBP, you organize everything in a table.`
    },
    {
      id: 'ibp2-method',
      type: 'text' as const,
      content: `### How the Tabular Method Works

1. Place the polynomial in the \u201cDifferentiate\u201d column (it eventually reaches 0)
2. Place the other factor in the \u201cIntegrate\u201d column
3. Alternate signs: $+, -, +, -, \\ldots$
4. Multiply diagonally and sum

### Example: $\\int x^2 e^x\\,dx$

| Sign | Differentiate | Integrate |
|------|--------------|-----------|
| $+$ | $x^2$ | $e^x$ |
| $-$ | $2x$ | $e^x$ |
| $+$ | $2$ | $e^x$ |
| $-$ | $0$ | $e^x$ |

Reading diagonally: $+x^2 e^x - 2xe^x + 2e^x + C$

$$\\boxed{\\int x^2 e^x\\,dx = e^x(x^2 - 2x + 2) + C}$$

> **Key Fact:** The tabular method works whenever one factor differentiates to zero (polynomials). It saves enormous time on the AP exam.`
    },
    {
      id: 'ibp2-trig',
      type: 'text' as const,
      content: `### Tabular Method with Trig

**Example:** $\\int x^3 \\cos x\\,dx$

| Sign | Differentiate | Integrate |
|------|--------------|-----------|
| $+$ | $x^3$ | $\\cos x$ |
| $-$ | $3x^2$ | $\\sin x$ |
| $+$ | $6x$ | $-\\cos x$ |
| $-$ | $6$ | $-\\sin x$ |
| $+$ | $0$ | $\\cos x$ |

$$\\int x^3\\cos x\\,dx = x^3\\sin x + 3x^2\\cos x - 6x\\sin x - 6\\cos x + C$$

### When Does Tabular NOT Work?

| Works \u2714 | Doesn\u2019t work \u2718 |
|-----------|-------------------|
| $\\int x^n e^{ax}\\,dx$ | $\\int e^x \\sin x\\,dx$ (neither goes to 0) |
| $\\int x^n \\sin(ax)\\,dx$ | $\\int \\ln x \\cdot \\arctan x\\,dx$ |
| $\\int x^n \\cos(ax)\\,dx$ | $\\int \\frac{\\ln x}{x^2}\\,dx$ (use standard IBP) |`
    },
    {
      id: 'ibp2-mc1',
      type: 'multiple-choice' as const,
      content: '**Tabular Method Practice**',
      exercise: {
        questions: [
          {
            question: 'Use the tabular method for $\\int x^3 e^{2x}\\,dx$. What is the coefficient of $e^{2x}$ in the final answer?',
            options: [
              '$\\frac{x^3}{2} - \\frac{3x^2}{4} + \\frac{3x}{4} - \\frac{3}{8}$',
              '$x^3 - 3x^2 + 6x - 6$',
              '$\\frac{x^3}{2} - \\frac{3x^2}{2} + 3x - 3$',
              '$x^3 - x^2 + x - 1$'
            ],
            correctAnswer: 0,
            explanation: 'Each integration of $e^{2x}$ divides by 2: $e^{2x}, \\frac{e^{2x}}{2}, \\frac{e^{2x}}{4}, \\frac{e^{2x}}{8}$. Multiplying diagonally with signs: $\\frac{x^3}{2} - \\frac{3x^2}{4} + \\frac{3x}{4} - \\frac{3}{8}$.'
          },
          {
            question: 'How many rows does the tabular method need for $\\int x^4 \\sin x\\,dx$?',
            options: ['5 rows', '4 rows', '6 rows', '3 rows'],
            correctAnswer: 0,
            explanation: 'A degree-$n$ polynomial needs $n+1$ rows (differentiating until 0): $x^4, 4x^3, 12x^2, 24x, 24, 0$. That\u2019s 5 differentiation rows plus the terminal 0.'
          }
        ]
      }
    },
    {
      id: 'ibp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Method**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\int x^2 \\cos(3x)\\,dx$, the best approach is:',
            options: ['Standard IBP (twice)', 'Tabular method', 'u-substitution', 'Partial fractions'],
            correctAnswers: ['Tabular method'],
            hints: ['$x^2$ is a polynomial that differentiates to 0. This is ideal for tabular.'],
            explanation: 'Polynomial \u00d7 trig is perfect for tabular. You\u2019d need 3 rows: $x^2, 2x, 2, 0$.'
          },
          {
            label: 'For $\\int e^x \\cos x\\,dx$, the best approach is:',
            options: ['Standard IBP (cycling)', 'Tabular method', 'u-substitution', 'Direct integration'],
            correctAnswers: ['Standard IBP (cycling)'],
            hints: ['Neither $e^x$ nor $\\cos x$ differentiates to 0, so tabular doesn\u2019t terminate.'],
            explanation: 'Neither factor goes to 0. This is a cycling/boomerang problem (Part 3).'
          }
        ]
      }
    },
    {
      id: 'ibp2-input',
      type: 'input-box' as const,
      content: '**Tabular Computation**',
      exercise: {
        question: 'Use the tabular method to evaluate $\\int_0^1 x^2 e^x\\,dx$. The antiderivative is $e^x(x^2 - 2x + 2)$. Compute $[e^x(x^2-2x+2)]_0^1$. Give the exact answer in the form $ae - b$ where $a$ and $b$ are integers. What is $a + b$?',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: ['At $x=1$: $e(1-2+2) = e$. At $x=0$: $1(0-0+2) = 2$. So the answer is $e - 2$.', '$a = 1$, $b = 2$, so $a + b = 3$.'],
        explanation: '$[e^x(x^2-2x+2)]_0^1 = e(1) - 1(2) = e - 2$. So $a = 1$, $b = 2$, and $a + b = 3$.'
      }
    },
    {
      id: 'ibp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Concept | Details |
|---------|---------|
| Tabular method | Organize IBP in columns: Sign, Differentiate, Integrate |
| When to use | Polynomial \u00d7 exponential or polynomial \u00d7 trig |
| Sign pattern | $+, -, +, -, \\ldots$ alternating |
| Reading | Multiply diagonally across columns, then sum |

> **Coming Up:** Part 3 covers **cycling problems** \u2014 what happens when IBP brings the original integral back (the boomerang technique).`
    }
  ]
};
