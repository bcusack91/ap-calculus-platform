export const calcbcLogisticPart5Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log5-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 5 of 7 — Logistic vs Exponential**

### Comparison

| Feature | Exponential | Logistic |
|---------|-------------|----------|
| DE | $dP/dt = kP$ | $dP/dt = kP(1-P/L)$ |
| Solution | $P = P_0 e^{kt}$ | $P = L/(1+Ae^{-kt})$ |
| $t \\to \infty$ | $P \\to \infty$ | $P \\to L$ |
| Shape | J-curve | S-curve |
| Realistic? | Short term | Long term |`
    },
    {
      id: 'log5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compare** 🎯',
      exercise: {
        questions: [
          {
            question: 'When $P \\ll L$, the logistic model behaves like:',
            options: ['Exponential growth', 'Exponential decay', 'Linear growth', 'No growth'],
            correctAnswer: 0,
            explanation: 'When $P \\ll L$: $(1 - P/L) \\approx 1$, so $dP/dt \\approx kP$ — exponential growth.'
          }
        ]
      }
    },
    {
      id: 'log5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Logistic starts exponential, then levels off at $L$. More realistic.`
    }
  ]
};
