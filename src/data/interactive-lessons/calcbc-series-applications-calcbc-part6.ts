export const calcbcSeriesAppsPart6Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp6-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'sapp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use series to find $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.',
            options: ['$1/2$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$e^x - 1 - x = \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$. Divided by $x^2$: $\\frac{1}{2} + \\frac{x}{6} + \\cdots \\to 1/2$.'
          },
          {
            question: 'For $f(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$, what is $f$?',
            options: ['$\\cos x$', '$\\sin x$', '$e^{-x}$', '$\\cosh x$'],
            correctAnswer: 0,
            explanation: 'This is exactly the Maclaurin series for $\\cos x$.'
          }
        ]
      }
    },
    {
      id: 'sapp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
