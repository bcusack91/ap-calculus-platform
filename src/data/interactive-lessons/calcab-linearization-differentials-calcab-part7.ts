export const calcabLinearizationPart7Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin7-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'lin7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $e^{0.1}$ using linearization at $a = 0$.',
            options: ['$1.1$', '$1.01$', '$0.1$', '$e$'],
            correctAnswer: 0,
            explanation: '$f(0) = 1$, $f\'(0) = 1$. $L(0.1) = 1 + 1(0.1) = 1.1$. (Actual: $1.10517...$)'
          }
        ]
      }
    },
    {
      id: 'lin7-summary',
      type: 'text' as const,
      content: `### Linearization & Differentials — Complete! ✅`
    }
  ]
};
