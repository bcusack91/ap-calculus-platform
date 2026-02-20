export const calcabExpModelsPart7Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp7-intro',
      type: 'text' as const,
      content: `# Exponential Models — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'exp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Carbon-14 has a half-life of 5730 years. A sample has 25% of its original C-14. How old is it?',
            options: ['$11460$ years', '$5730$ years', '$17190$ years', '$2865$ years'],
            correctAnswer: 0,
            explanation: '25% = $(1/2)^2$, so 2 half-lives = $2 \\times 5730 = 11460$ years.'
          }
        ]
      }
    },
    {
      id: 'exp7-summary',
      type: 'text' as const,
      content: `### Exponential Models — Complete! ✅`
    }
  ]
};
