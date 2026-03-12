export const calcabExpModelsPart5Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp5-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 5 of 7 — Logistic Growth Preview**

### The Logistic Model

$$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$$

where $L$ is the **carrying capacity**.

### Key Features

- Grows exponentially when $P \\ll L$
- Fastest growth at $P = L/2$ (inflection point)
- Solution approaches $L$ as $t \\to \\infty$`
    },
    {
      id: 'exp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Growth** 🎯\n\n$\\frac{dP}{dt} = 0.5P(1 - P/1000)$',
      exercise: {
        questions: [
          {
            question: 'What is the carrying capacity?',
            options: ['$1000$', '$500$', '$0.5$', '$2000$'],
            correctAnswer: 0,
            explanation: 'The carrying capacity $L = 1000$ appears in the factor $(1 - P/L)$.'
          },
          {
            question: 'At what population is growth fastest?',
            options: ['$P = 500$', '$P = 1000$', '$P = 250$', '$P = 0$'],
            correctAnswer: 0,
            explanation: 'Maximum growth rate at $P = L/2 = 500$.'
          }
        ]
      }
    },
    {
      id: 'exp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Logistic growth has a carrying capacity
2. Fastest growth at half the carrying capacity`
    }
  ]
};
