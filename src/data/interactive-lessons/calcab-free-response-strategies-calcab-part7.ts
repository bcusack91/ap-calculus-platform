export const calcabFRQPart7Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq7-intro',
      type: 'text' as const,
      content: `# Free Response Strategies — Review

**Part 7 of 7 — Final Practice**`
    },
    {
      id: 'frq7-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'On a no-calculator section, you need $\\int_1^4 (2x+1)\\,dx$. What do you write?',
            options: ['$\\int_1^4(2x+1)\\,dx = [x^2+x]_1^4 = 20 - 2 = 18$', 'Just $18$', '$x^2 + x = 18$', 'Use FnInt'],
            correctAnswer: 0,
            explanation: 'Show: integral → antiderivative → evaluate at bounds → final answer.'
          }
        ]
      }
    },
    {
      id: 'frq7-summary',
      type: 'text' as const,
      content: `### FRQ Strategies — Complete! ✅

You are ready to tackle AP FRQs with confidence!`
    }
  ]
};
