export const calcbcAdvIntegrationPart6Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv6-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'adv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x+1}{x^2+2x+5}\\,dx$',
            options: ['$\\frac{1}{2}\\ln(x^2+2x+5) + C$', '$\\arctan\\left(\\frac{x+1}{2}\\right) + C$', '$\\ln(x^2+2x+5) + C$', 'Partial fractions needed'],
            correctAnswer: 0,
            explanation: 'Numerator is half the derivative of denominator: $d(x^2+2x+5)/dx = 2x+2 = 2(x+1)$. So $\\int = \\frac{1}{2}\\ln|x^2+2x+5| + C$.'
          }
        ]
      }
    },
    {
      id: 'adv6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
