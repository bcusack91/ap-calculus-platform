export const calcabDiffEqPart7Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de7-intro',
      type: 'text' as const,
      content: `# Differential Equations \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**`
    },
    {
      id: 'de7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = 2xy^2$ with $y(0) = 1$.',
            options: ['$y = \\frac{1}{1-x^2}$', '$y = e^{x^2}$', '$y = \\frac{1}{1+x^2}$', '$y = (1+x^2)^2$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y^2} = 2x\\,dx$. $-\\frac{1}{y} = x^2 + C$. $y(0)=1$: $C = -1$. $y = \\frac{1}{1-x^2}$.'
          },
          {
            question: 'A bacteria population grows at rate $\\frac{dP}{dt} = 0.05P$. Starting at 500, when does it reach 2000?',
            options: ['$\\frac{\\ln 4}{0.05}$ hours', '$\\frac{\\ln 2}{0.05}$ hours', '$80$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: '$P = 500e^{0.05t} = 2000$. $e^{0.05t} = 4$. $t = \\frac{\\ln 4}{0.05}$.'
          }
        ]
      }
    },
    {
      id: 'de7-summary',
      type: 'text' as const,
      content: `### Differential Equations \u2014 Complete! \u2705`
    }
  ]
};
