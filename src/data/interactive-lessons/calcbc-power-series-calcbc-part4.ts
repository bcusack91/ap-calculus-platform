export const calcbcPowerSeriesPart4Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow4-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 4 of 7 — Representing Functions as Power Series**

### Strategy: Start from Known Series

$\frac{1}{1-x} = \sum x^n$, then manipulate!

$\frac{1}{1+x^2} = \sum (-x^2)^n = \sum (-1)^n x^{2n}$

$\frac{x}{1-x^3} = x \sum (x^3)^n = \sum x^{3n+1}$

$\ln(1+x) = \int \frac{1}{1+x}\,dx = \sum \frac{(-1)^n x^{n+1}}{n+1}$`
    },
    {
      id: 'pow4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Building Power Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'Express $\\frac{1}{(1-x)^2}$ as a power series.',
            options: ['$\\sum_{n=0}^{\\infty} (n+1)x^n$', '$\\sum_{n=0}^{\\infty} x^{2n}$', '$\\sum_{n=0}^{\\infty} 2^n x^n$', '$\\sum_{n=1}^{\\infty} x^n/n$'],
            correctAnswer: 0,
            explanation: 'Differentiate $\\frac{1}{1-x} = \\sum x^n$: $\\frac{1}{(1-x)^2} = \\sum nx^{n-1} = \\sum (n+1)x^n$.'
          }
        ]
      }
    },
    {
      id: 'pow4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Start from $\\frac{1}{1-x}$ and use substitution, differentiation, integration.`
    }
  ]
};
