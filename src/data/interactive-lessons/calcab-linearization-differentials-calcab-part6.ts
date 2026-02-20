export const calcabLinearizationPart6Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin6-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'lin6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use the linearization of $f(x) = \\sqrt[3]{x}$ at $a = 8$ to approximate $\\sqrt[3]{8.1}$.',
            options: ['$2.00833$', '$2.025$', '$2.1$', '$2.01$'],
            correctAnswer: 0,
            explanation: '$f(8) = 2$, $f\'(x) = \\frac{1}{3}x^{-2/3}$, $f\'(8) = \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{12}$. $L(8.1) = 2 + \\frac{1}{12}(0.1) = 2.00833...$'
          },
          {
            question: 'If $y = \\tan x$ and $x = \\pi/4$, $dx = 0.01$, find $dy$.',
            options: ['$0.02$', '$0.01$', '$0.04$', '$0.005$'],
            correctAnswer: 0,
            explanation: '$dy = \\sec^2(x)\\,dx = \\sec^2(\\pi/4) \\cdot 0.01 = 2(0.01) = 0.02$.'
          }
        ]
      }
    },
    {
      id: 'lin6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
