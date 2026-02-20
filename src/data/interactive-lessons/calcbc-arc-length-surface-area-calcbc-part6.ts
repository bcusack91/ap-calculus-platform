export const calcbcArcLengthPart6Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc6-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'arc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $y = \\ln(\\cos x)$ from $0$ to $\\pi/4$:',
            options: ['$\\ln(1 + \\sqrt{2})$', '$\\pi/4$', '$1$', '$\\sqrt{2} - 1$'],
            correctAnswer: 0,
            explanation: '$y\' = -\\tan x$. $L = \\int_0^{\\pi/4}\\sqrt{1+\\tan^2 x}\\,dx = \\int_0^{\\pi/4}\\sec x\\,dx = [\\ln|\\sec x + \\tan x|]_0^{\\pi/4} = \\ln(\\sqrt{2}+1)$.'
          }
        ]
      }
    },
    {
      id: 'arc6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
