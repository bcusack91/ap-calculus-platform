export const calcabFRQPart1Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq1-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 1 of 7 — The AP FRQ Format**

### Structure of the FRQ Section

- **6 questions** in 90 minutes
- Questions 1-2: **Calculator allowed** (30 min)
- Questions 3-6: **No calculator** (60 min)

### Common FRQ Types

1. **Rate/Accumulation** (graph or table of rate, find accumulation)
2. **Particle Motion** (position, velocity, acceleration)
3. **Area/Volume** (between curves, disk/washer)
4. **Differential Equations** (slope field, separation of variables)
5. **Table Analysis** (Riemann sums, MVT, IVT)
6. **Connected Rates/Related Rates**`
    },
    {
      id: 'frq1-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Format** 🎯',
      exercise: {
        questions: [
          {
            question: 'On the AP exam, how should you present work for full credit?',
            options: ['Show all mathematical steps and justify conclusions', 'Write just the final answer', 'Explain in full sentences only', 'Draw diagrams only'],
            correctAnswer: 0,
            explanation: 'Show your setup (integral, equation), work (solving steps), and answer. Justify with theorem names when needed.'
          }
        ]
      }
    },
    {
      id: 'frq1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Know the 6 common FRQ types
2. Show all work for full credit
3. Practice pacing: ~15 min per question`
    }
  ]
};
