export const calcbcLogisticPart3Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log3-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 3 of 7 — Inflection Point**

### The Inflection Point

The growth rate changes from increasing to decreasing at $P = L/2$.

To verify: $\\frac{d^2P}{dt^2} = 0$ when $P = L/2$.

$\\frac{dP}{dt} = kP - \\frac{kP^2}{L}$

$\\frac{d^2P}{dt^2} = k\\frac{dP}{dt} - \\frac{2kP}{L}\\frac{dP}{dt} = \\frac{dP}{dt}\left(k - \\frac{2kP}{L}\\right)$

Set to zero (with $dP/dt \\neq 0$): $k - 2kP/L = 0 \implies P = L/2$ ✓`
    },
    {
      id: 'log3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inflection** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $dP/dt = 0.5P(1 - P/800)$, the inflection point occurs at:',
            options: ['$P = 400$', '$P = 800$', '$P = 200$', '$P = 0$'],
            correctAnswer: 0,
            explanation: 'Inflection at $P = L/2 = 800/2 = 400$.'
          }
        ]
      }
    },
    {
      id: 'log3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Inflection at $P = L/2$: growth changes from accelerating to decelerating.`
    }
  ]
};
