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
      id: 'ef5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Linear: constant **differences** between consecutive y-values
- Exponential: constant **ratios** between consecutive y-values
- "Increases BY [amount]" → linear; "Increases BY [percent]" → exponential
- Exponential always overtakes linear eventually`
    }
  ]
};
