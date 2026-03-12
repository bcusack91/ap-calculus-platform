export const calcabInverseFunctionsPart6Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv6-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'inv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $g(x) = x^5 + x^3 + x$, find $(g^{-1})\'(3)$.',
            options: ['$\\frac{1}{9}$', '$\\frac{1}{3}$', '$9$', '$3$'],
            correctAnswer: 0,
            explanation: '$g(1) = 1+1+1 = 3$, so $g^{-1}(3) = 1$. $g\'(x) = 5x^4+3x^2+1$, $g\'(1) = 9$. $(g^{-1})\'(3) = \\frac{1}{9}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[x \\cdot \\arctan x]$.',
            options: ['$\\arctan x + \\frac{x}{1+x^2}$', '$\\frac{x}{1+x^2}$', '$\\arctan x$', '$\\frac{1}{1+x^2}$'],
            correctAnswer: 0,
            explanation: 'Product rule: $\\arctan x + x \\cdot \\frac{1}{1+x^2}$.'
          }
        ]
      }
    },
    {
      id: 'inv6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
