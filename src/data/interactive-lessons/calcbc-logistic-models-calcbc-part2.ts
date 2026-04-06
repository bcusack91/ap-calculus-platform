export const calcbcLogisticPart2Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log2-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 2 of 7 — The Solution**

### General Solution

$$P(t) = \\frac{L}{1 + Ae^{-kt}}$$

where $A = \\frac{L - P_0}{P_0}$.

### Behavior

- As $t \\to \infty$: $P \\to L$
- $P(t)$ is always between $P_0$ and $L$ (assuming $0 < P_0 < L$)
- S-shaped (sigmoid) curve`
    },
    {
      id: 'log2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Solution** 🎯',
      exercise: {
        questions: [
          {
            question: '$L = 1000$, $P_0 = 100$, $k = 0.2$. Find $A$.',
            options: ['$9$', '$10$', '$100$', '$0.1$'],
            correctAnswer: 0,
            explanation: '$A = (L - P_0)/P_0 = (1000-100)/100 = 900/100 = 9$.'
          }
        ]
      }
    },
    {
      id: 'log2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
$P(t) = L/(1 + Ae^{-kt})$ where $A = (L-P_0)/P_0$. Always approaches $L$.`
    }
  ]
};
