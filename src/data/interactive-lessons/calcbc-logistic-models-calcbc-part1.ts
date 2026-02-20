export const calcbcLogisticPart1Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log1-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 1 of 7 — The Logistic Differential Equation**

### The Model

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{L}\right)$$

where:
- $P$ = population (or quantity)
- $k$ = growth rate constant
- $L$ = carrying capacity

### Key Features

- When $P \ll L$: nearly exponential growth ($\approx kP$)
- When $P = L/2$: **fastest growth rate**
- When $P = L$: growth stops ($dP/dt = 0$)`
    },
    {
      id: 'log1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'In $dP/dt = 0.3P(1 - P/500)$, what is the carrying capacity?',
            options: ['$500$', '$0.3$', '$150$', '$1000$'],
            correctAnswer: 0,
            explanation: '$L = 500$ is the carrying capacity (appears as $P/L$).'
          },
          {
            question: 'At what population is the growth rate maximum?',
            options: ['$P = 250$ (half of $L$)', '$P = 500$', '$P = 0$', '$P = 100$'],
            correctAnswer: 0,
            explanation: 'Maximum growth at $P = L/2 = 250$.'
          }
        ]
      }
    },
    {
      id: 'log1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Logistic: $dP/dt = kP(1 - P/L)$. Max growth at $P = L/2$.`
    }
  ]
};
