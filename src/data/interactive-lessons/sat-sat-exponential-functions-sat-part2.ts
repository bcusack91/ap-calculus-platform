export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 2 of 7 — Compound Interest**

### The Compound Interest Formula

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Principal (starting amount) |
| $r$ | Annual interest rate (as decimal) |
| $n$ | Number of times compounded per year |
| $t$ | Number of years |

### Common Compounding Periods

| $n$ | Compounding |
|-----|------------|
| 1 | Annually |
| 4 | Quarterly |
| 12 | Monthly |
| 365 | Daily |

### Example

\\$5,000 invested at 6% compounded monthly for 3 years:

$$A = 5000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\times 3} = 5000(1.005)^{36} \\approx \\$5{,}983.40$$

### Continuous Compounding (Rare on SAT)

$$A = Pe^{rt}$$`
    },
    {
      id: 'ef2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compound Interest** 🎯',
      exercise: {
        questions: [
          {
            question: '\\$2,000 is invested at 4% compounded annually. Which expression gives the value after 5 years?',
            options: ['$2000(1.04)^5$', '$2000(1.4)^5$', '$2000 + 2000(0.04)(5)$', '$2000 \\cdot 5 \\cdot 1.04$'],
            correctAnswer: 0,
            explanation: 'Compounded annually: $n = 1$. $A = 2000(1 + 0.04)^5 = 2000(1.04)^5$.'
          },
          {
            question: 'In the formula $A = 1000(1.02)^{4t}$, what is the annual interest rate?',
            options: ['$8\\%$ (approximately)', '$2\\%$', '$4\\%$', '$20\\%$'],
            correctAnswer: 0,
            explanation: 'The base $1.02$ with exponent $4t$ means quarterly compounding ($n = 4$) with rate $r/4 = 0.02$, so $r = 0.08 = 8\\%$.'
          },
          {
            question: 'Simple interest: $I = Prt$. Compound interest: $A = P(1+r)^t$. After 10 years at 10%, \\$1000 invested: compound interest exceeds simple interest by approximately:',
            options: ['\\$594', '\\$100', '\\$1000', '\\$259'],
            correctAnswer: 0,
            explanation: 'Simple: $1000 + 1000(0.10)(10) = \\$2{,}000$. Compound: $1000(1.10)^{10} ≈ \\$2{,}594$. Difference ≈ \\$594.'
          }
        ]
      }
    },
    {
      id: 'ef2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Compound interest formula: $A = P(1 + r/n)^{nt}$
- Identify $n$ from compounding frequency (annually, monthly, etc.)
- Compound interest grows faster than simple interest over time
- To find annual rate from the formula: $r = n \\times (\\text{base} - 1)$`
    }
  ]
};
