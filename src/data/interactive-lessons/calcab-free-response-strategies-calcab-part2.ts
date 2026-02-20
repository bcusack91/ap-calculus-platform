export const calcabFRQPart2Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq2-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 2 of 7 — Rate/Graph Problems**

### The Rate Problem Template

Given a graph of rate $R(t)$:

1. "Total amount" → $\int_a^b R(t)\,dt$ (area under curve)
2. "Rate of change at $t = c$" → read $R(c)$ from graph
3. "Is amount increasing or decreasing?" → sign of rate
4. "When is amount maximum?" → where rate changes from $+$ to $-$`
    },
    {
      id: 'frq2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate Problem Strategies** 🎯\n\n$R(t)$ is the rate of water flow (gal/hr). $R(t) > 0$ for $0 < t < 3$, $R(t) < 0$ for $3 < t < 7$, $R(3) = 0$.',
      exercise: {
        questions: [
          {
            question: 'At what time is the amount of water in the tank greatest?',
            options: ['$t = 3$', '$t = 0$', '$t = 7$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Water accumulates when $R > 0$ (before $t=3$) and decreases when $R < 0$ (after $t=3$). Maximum at $t = 3$.'
          }
        ]
      }
    },
    {
      id: 'frq2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Accumulation max where rate changes sign
2. Total = integral of rate`
    }
  ]
};
