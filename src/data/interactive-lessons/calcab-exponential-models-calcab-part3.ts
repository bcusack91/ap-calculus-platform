export const calcabExpModelsPart3Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp3-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 3 of 7 — Compound Interest & Continuous Growth**

### Compound Interest

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

### Continuous Compounding

$$A = Pe^{rt}$$

### Connection

As $n \\to \\infty$: $P(1 + r/n)^{nt} \\to Pe^{rt}$`
    },
    {
      id: 'exp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compound Interest** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\$1000$ invested at $5\\%$ compounded continuously. How long to double?',
            options: ['$\\frac{\\ln 2}{0.05} \\approx 13.86$ years', '$20$ years', '$10$ years', '$\\frac{2}{0.05} = 40$ years'],
            correctAnswer: 0,
            explanation: '$2000 = 1000e^{0.05t}$. $2 = e^{0.05t}$. $t = \\frac{\\ln 2}{0.05} \\approx 13.86$ years.'
          }
        ]
      }
    },
    {
      id: 'exp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Continuous compounding: $A = Pe^{rt}$
2. Doubling time = $\\frac{\\ln 2}{r}$`
    }
  ]
};
