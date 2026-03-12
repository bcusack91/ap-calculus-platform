export const calcabLinearizationPart2Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin2-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 2 of 7 — Differentials**

### The Differential $dy$

$$dy = f'(x)\,dx$$

$dx$ is a small change in $x$, $dy$ is the corresponding estimated change in $y$.

### Differentials vs Actual Change

- $\Delta y = f(x + \Delta x) - f(x)$ — exact change
- $dy = f'(x) \cdot dx$ — estimated change (using tangent line)

For small $dx$: $\Delta y \approx dy$`
    },
    {
      id: 'lin2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differentials** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y = x^4$ and $x = 1$, $dx = 0.02$, find $dy$.',
            options: ['$0.08$', '$0.04$', '$0.02$', '$0.16$'],
            correctAnswer: 0,
            explanation: '$dy = 4x^3 \cdot dx = 4(1)^3(0.02) = 0.08$.'
          },
          {
            question: 'A cube has side $s = 5$ cm measured with error $ds = \pm 0.1$ cm. Estimate the error in volume $V = s^3$.',
            options: ['$\pm 7.5$ cm$^3$', '$\pm 0.3$ cm$^3$', '$\pm 15$ cm$^3$', '$\pm 0.001$ cm$^3$'],
            correctAnswer: 0,
            explanation: '$dV = 3s^2 \cdot ds = 3(25)(0.1) = 7.5$ cm$^3$.'
          }
        ]
      }
    },
    {
      id: 'lin2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. $dy = f'(x)\,dx$
2. Differentials estimate the change in output for a small change in input
3. Error propagation uses differentials`
    }
  ]
};
