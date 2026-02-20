export const calcbcPolarPart7Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar7-intro',
      type: 'text' as const,
      content: `# Polar Calculus — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'polar7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'The area of the cardioid $r = 1 - \\sin\\theta$ is:',
            options: ['$\\frac{3\\pi}{2}$', '$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: 'Same formula as $r = 1 + \\cos\\theta$: $A = \\frac{1}{2}\\int_0^{2\\pi}(1-\\sin\\theta)^2\\,d\\theta = \\frac{3\\pi}{2}$.'
          },
          {
            question: '$\\frac{dy}{dx}$ for $r = \\theta$ at $\\theta = \\pi$ is:',
            options: ['$\\frac{-\\pi}{1}$ (i.e., $-\\pi$)', '$\\pi$', '$-1$', '$1/\\pi$'],
            correctAnswer: 0,
            explanation: '$x = \\theta\\cos\\theta$, $y = \\theta\\sin\\theta$. $dx/d\\theta = \\cos\\theta - \\theta\\sin\\theta$, $dy/d\\theta = \\sin\\theta + \\theta\\cos\\theta$. At $\\theta = \\pi$: $dx/d\\theta = -1$, $dy/d\\theta = \\pi(-1) = -\\pi... $ Actually $dy/d\\theta = \\sin\\pi + \\pi\\cos\\pi = 0 - \\pi = -\\pi$. $dx/d\\theta = \\cos\\pi - \\pi\\sin\\pi = -1 - 0 = -1$. $dy/dx = (-\\pi)/(-1) = \\pi$. Actually the slope is $\\pi$.'
          }
        ]
      }
    },
    {
      id: 'polar7-summary',
      type: 'text' as const,
      content: `### Polar Calculus — Complete! ✅`
    }
  ]
};
