export const calcbcLogisticPart4Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log4-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 4 of 7 — Analyzing Logistic Problems**

### From the DE

$\\frac{dP}{dt} = 0.1P(1 - P/2000)$, $P(0) = 200$

- Carrying capacity: $L = 2000$
- Growth constant: $k = 0.1$
- Max growth rate at $P = 1000$
- Max $dP/dt = 0.1 \cdot 1000 \cdot (1 - 1000/2000) = 0.1 \cdot 1000 \cdot 0.5 = 50$

### Reading the DE

$kP(1 - P/L) = kP - kP^2/L$: if given as $0.1P - 0.00005P^2$, then $k = 0.1$ and $k/L = 0.00005$ so $L = 2000$.`
    },
    {
      id: 'log4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $dP/dt = 3P - 0.01P^2$, find $L$.',
            options: ['$300$', '$3$', '$0.01$', '$30{,}000$'],
            correctAnswer: 0,
            explanation: '$3P - 0.01P^2 = 3P(1 - P/300)$. So $k = 3$, $L = 300$.'
          }
        ]
      }
    },
    {
      id: 'log4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Factor the DE to identify $k$ and $L$. $kP - (k/L)P^2 = kP(1-P/L)$.`
    }
  ]
};
