export const calcabIntAppsPart5Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia5-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 5 of 7 — Rate Problems & Net Change**

### The Net Change Theorem

$$\int_a^b f'(x)\,dx = f(b) - f(a)$$

### Common Contexts

- **Water flow**: $\int R(t)\,dt$ = total water
- **Population**: $\int P'(t)\,dt$ = net change in population
- **Cost**: $\int C'(x)\,dx$ = total cost change
- **Velocity**: $\int v(t)\,dt$ = displacement`
    },
    {
      id: 'ia5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate Problems** 🎯\n\nWater flows into a tank at $R(t) = 10 + \\sin(t)$ gal/min.',
      exercise: {
        questions: [
          {
            question: 'How much water enters the tank from $t = 0$ to $t = \\pi$?',
            options: ['$10\\pi + 2$ gal', '$10\\pi$ gal', '$10\\pi - 2$ gal', '$2$ gal'],
            correctAnswer: 0,
            explanation: '$\\int_0^{\\pi}(10 + \\sin t)\\,dt = [10t - \\cos t]_0^{\\pi} = (10\\pi + 1) - (0 - 1) = 10\\pi + 2$.'
          }
        ]
      }
    },
    {
      id: 'ia5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Integrating a rate gives total accumulation
2. Include units in your answer on the AP exam`
    }
  ]
};
