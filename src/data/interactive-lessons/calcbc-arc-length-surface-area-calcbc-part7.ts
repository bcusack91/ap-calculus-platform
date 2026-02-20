export const calcbcArcLengthPart7Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc7-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'arc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $r = 1$ from $\\theta = 0$ to $\\theta = 2\\pi$:',
            options: ['$2\\pi$', '$\\pi$', '$1$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = 0$. $L = \\int_0^{2\\pi}\\sqrt{1 + 0}\\,d\\theta = 2\\pi$. Circumference of unit circle!'
          },
          {
            question: 'Which arc length integral requires IBP or a table?',
            options: ['$\\int_0^1 \\sqrt{1 + 4x^2}\\,dx$', '$\\int_0^1 \\sqrt{1 + 9x}\\,dx$', '$\\int_0^{2\\pi} 3\\,dt$', '$\\int_0^1 1\\,dx$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{1 + 4x^2}$ requires trig substitution; the others are elementary or simple u-subs.'
          }
        ]
      }
    },
    {
      id: 'arc7-summary',
      type: 'text' as const,
      content: `### Arc Length & Surface Area — Complete! ✅`
    }
  ]
};
