export const calcbcExamStrategyPart3Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str3-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 3 of 7 — FRQ Strategies**

### The 6 FRQs Usually Cover

1. Rate/accumulation (with table or graph)
2. Particle motion or related rates
3. Area/volume
4. Differential equation (often Euler + separation)
5. **Series** (Taylor polynomial, error bound, interval)
6. Parametric/polar or mixed topic

### Earning Points

- Show setup AND answer separately
- Label all integrals/derivatives
- Include units when given
- "Since..." justification format`
    },
    {
      id: 'str3-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Tips** 🎯',
      exercise: {
        questions: [
          {
            question: 'On an FRQ, you set up an integral correctly but make an arithmetic error. You typically:',
            options: ['Earn most points (setup points + partial credit)', 'Earn zero points', 'Earn full credit', 'Lose all subsequent part credit'],
            correctAnswer: 0,
            explanation: 'AP scoring separates setup from computation. Correct setup earns points even with arithmetic errors.'
          }
        ]
      }
    },
    {
      id: 'str3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Show ALL work. Setup and answer are scored separately.`
    }
  ]
};
