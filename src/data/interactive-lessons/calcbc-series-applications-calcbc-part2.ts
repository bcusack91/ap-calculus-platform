export const calcbcSeriesAppsPart2Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp2-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 2 of 7 — Series Solutions to DEs**

### Solving $y' = y$ via Power Series

Assume $y = \sum c_n x^n$. Then $y' = \sum nc_n x^{n-1}$.

$y' = y$: $\sum nc_n x^{n-1} = \sum c_n x^n$

Matching coefficients: $c_{n+1} = c_n/(n+1)$

With $c_0 = 1$: $c_n = 1/n!$, giving $y = e^x$ ✓`
    },
    {
      id: 'sapp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series & DEs** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y\' = -y$ and $y(0) = 1$, the power series solution is:',
            options: ['$e^{-x}$', '$e^x$', '$\\cos x$', '$1 - x$'],
            correctAnswer: 0,
            explanation: '$c_{n+1} = -c_n/(n+1)$. $c_n = (-1)^n/n!$. This gives $y = e^{-x}$.'
          }
        ]
      }
    },
    {
      id: 'sapp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Power series methods solve DEs by matching coefficients.`
    }
  ]
};
