export const calcabInverseFunctionsPart7Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv7-intro',
      type: 'text' as const,
      content: `# Inverse Functions — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'inv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(2) = 5$, $f\'(2) = 3$, $f(5) = 8$, $f\'(5) = 7$, find $(f^{-1})\'(5)$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{7}$', '$3$', '$7$'],
            correctAnswer: 0,
            explanation: '$f(2) = 5$ means $f^{-1}(5) = 2$. $(f^{-1})\'(5) = \\frac{1}{f\'(2)} = \\frac{1}{3}$.'
          },
          {
            question: 'Evaluate $\\int_0^{1/2} \\frac{dx}{\\sqrt{1-x^2}}$.',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: '$[\\arcsin x]_0^{1/2} = \\arcsin(1/2) - 0 = \\frac{\\pi}{6}$.'
          }
        ]
      }
    },
    {
      id: 'inv7-summary',
      type: 'text' as const,
      content: `### Inverse Functions — Complete! ✅`
    }
  ]
};
