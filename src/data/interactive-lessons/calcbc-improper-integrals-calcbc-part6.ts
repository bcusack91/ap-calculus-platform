export const calcbcImproperPart6Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp6-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'imp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_1^{\\infty} \\frac{1}{x(x+1)}\\,dx = $',
            options: ['$\\ln 2$', '$1$', '$\\infty$', '$\\ln 3$'],
            correctAnswer: 0,
            explanation: 'Partial fractions: $\\frac{1}{x} - \\frac{1}{x+1}$. $[\\ln x - \\ln(x+1)]_1^{\\infty} = [\\ln\\frac{x}{x+1}]_1^{\\infty}$. As $x \\to \\infty$: $\\ln 1 = 0$. At $x=1$: $\\ln(1/2) = -\\ln 2$. Answer: $0 - (-\\ln 2) = \\ln 2$.'
          },
          {
            question: '$\\int_2^{\\infty} xe^{-x}\\,dx$ converges. True or false?',
            options: ['True', 'False'],
            correctAnswer: 0,
            explanation: 'Exponential decay dominates polynomial growth: $xe^{-x} \\to 0$ fast enough. IBP gives a finite answer.'
          }
        ]
      }
    },
    {
      id: 'imp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
