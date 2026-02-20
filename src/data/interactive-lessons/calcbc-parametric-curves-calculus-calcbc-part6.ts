export const calcbcParametricPart6Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param6-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'param6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $x = \\sin t$, $y = \\cos 2t$, find $\\frac{dy}{dx}$ at $t = \\pi/6$.',
            options: ['$-2$', '$2$', '$-\\sqrt{3}$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{-2\\sin 2t}{\\cos t}$. At $t = \\pi/6$: $\\frac{-2\\sin(\\pi/3)}{\\cos(\\pi/6)} = \\frac{-2(\\sqrt{3}/2)}{\\sqrt{3}/2} = -2$.'
          },
          {
            question: 'At what $t$ does $x = t^2 - 4$, $y = t^3 - 3t$ have a horizontal tangent?',
            options: ['$t = \\pm 1$', '$t = 0$', '$t = 2$', '$t = \\pm 2$'],
            correctAnswer: 0,
            explanation: 'Horizontal tangent: $\\frac{dy}{dt} = 3t^2 - 3 = 0$, so $t = \\pm 1$. Check $\\frac{dx}{dt} = 2t \\neq 0$ at $t = \\pm 1$. ✓'
          }
        ]
      }
    },
    {
      id: 'param6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
