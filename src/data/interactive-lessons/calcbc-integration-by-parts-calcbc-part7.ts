export const calcbcIntByPartsPart7Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp7-intro',
      type: 'text' as const,
      content: `# Integration by Parts — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'ibp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 x^2 e^x\\,dx = $',
            options: ['$e - 2$', '$e$', '$e - 1$', '$2e - 2$'],
            correctAnswer: 0,
            explanation: 'Tabular: $[x^2 e^x - 2xe^x + 2e^x]_0^1 = (e - 2e + 2e) - (0 - 0 + 2) = e - 2$.'
          },
          {
            question: '$\\int e^{2x}\\sin x\\,dx = $',
            options: ['$\\frac{e^{2x}(2\\sin x - \\cos x)}{5} + C$', '$\\frac{e^{2x}(\\sin x - \\cos x)}{2} + C$', '$e^{2x}\\sin x + C$', '$\\frac{e^{2x}\\cos x}{5} + C$'],
            correctAnswer: 0,
            explanation: 'Cycling IBP with $e^{2x}$: after two applications, $5I = e^{2x}(2\\sin x - \\cos x)$.'
          }
        ]
      }
    },
    {
      id: 'ibp7-summary',
      type: 'text' as const,
      content: `### Integration by Parts — Complete! ✅`
    }
  ]
};
