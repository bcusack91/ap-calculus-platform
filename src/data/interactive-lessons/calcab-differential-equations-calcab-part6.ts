export const calcabDiffEqPart6Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de6-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'de6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style DE Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y(3-y)$, which values of $y$ are equilibrium solutions?',
            options: ['$y = 0$ and $y = 3$', '$y = 0$ only', '$y = 3$ only', '$y = -3$ and $y = 0$'],
            correctAnswer: 0,
            explanation: 'Equilibrium when $\\frac{dy}{dx} = 0$: $y(3-y) = 0$ gives $y = 0$ and $y = 3$.'
          },
          {
            question: 'Newton\'s Law of Cooling: $\\frac{dT}{dt} = -0.1(T - 70)$. If $T(0) = 200$, find $T(t)$.',
            options: ['$T = 70 + 130e^{-0.1t}$', '$T = 200e^{-0.1t}$', '$T = 70 + 200e^{-0.1t}$', '$T = 130e^{-0.1t}$'],
            correctAnswer: 0,
            explanation: 'Let $u = T - 70$. $\\frac{du}{dt} = -0.1u$, so $u = 130e^{-0.1t}$. $T = 70 + 130e^{-0.1t}$.'
          }
        ]
      }
    },
    {
      id: 'de6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
