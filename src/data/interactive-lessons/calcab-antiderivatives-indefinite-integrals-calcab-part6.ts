export const calcabAntiderivativesPart6Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti6-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 6 of 7 — Mixed Practice**

Time to combine all antiderivative techniques.`
    },
    {
      id: 'anti6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Antiderivative Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (e^x + \\sec^2 x - x^3)\\,dx$.',
            options: ['$e^x + \\tan x - \\frac{x^4}{4} + C$', '$e^x + \\sec x - \\frac{x^4}{4} + C$', '$e^x + \\tan x - 3x^2 + C$', '$xe^x + \\tan x - \\frac{x^4}{4} + C$'],
            correctAnswer: 0,
            explanation: 'Integrate term by term: $e^x + \\tan x - \\frac{x^4}{4} + C$.'
          },
          {
            question: 'Find $f(x)$ if $f\'(x) = \\cos x + \\frac{1}{x}$ and $f(\\pi) = 0$.',
            options: ['$\\sin x + \\ln|x| - \\ln\\pi$', '$\\sin x + \\ln|x|$', '$-\\sin x + \\ln|x| - \\ln\\pi$', '$\\cos x + \\ln|x| - \\ln\\pi$'],
            correctAnswer: 0,
            explanation: '$f(x) = \\sin x + \\ln|x| + C$. $f(\\pi) = 0 + \\ln\\pi + C = 0$, so $C = -\\ln\\pi$. $f(x) = \\sin x + \\ln|x| - \\ln\\pi$.'
          }
        ]
      }
    },
    {
      id: 'anti6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

Practice makes perfect with antiderivatives. Always verify by differentiating your answer.`
    }
  ]
};
