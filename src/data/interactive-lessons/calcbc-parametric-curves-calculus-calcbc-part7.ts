export const calcbcParametricPart7Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param7-intro',
      type: 'text' as const,
      content: `# Parametric Curves — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'param7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Given $x = 2\\cos t$, $y = 2\\sin t$. Find the arc length for $0 \\leq t \\leq \\pi$.',
            options: ['$2\\pi$', '$4\\pi$', '$\\pi$', '$4$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{4\\sin^2 t + 4\\cos^2 t} = 2$. $L = \\int_0^{\\pi} 2\\,dt = 2\\pi$. (Half the circumference of a circle of radius 2.)'
          },
          {
            question: 'The tangent line to $x = e^t$, $y = e^{-t}$ at $t = 0$ has slope:',
            options: ['$-1$', '$1$', '$0$', '$-e$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{-e^{-t}}{e^t} = -e^{-2t}$. At $t=0$: $-e^0 = -1$.'
          }
        ]
      }
    },
    {
      id: 'param7-summary',
      type: 'text' as const,
      content: `### Parametric Curves — Complete! ✅`
    }
  ]
};
