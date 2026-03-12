export const calcbcIntByPartsPart6Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp6-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'ibp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed IBP Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int x^2 \\sin x\\,dx = $',
            options: ['$-x^2\\cos x + 2x\\sin x + 2\\cos x + C$', '$x^2\\cos x + 2x\\sin x + C$', '$-x^2\\cos x + 2\\sin x + C$', '$x^2\\sin x - 2x\\cos x + C$'],
            correctAnswer: 0,
            explanation: 'Tabular: $+x^2(-\\cos x) - 2x(-\\sin x) + 2(\\cos x) = -x^2\\cos x + 2x\\sin x + 2\\cos x + C$.'
          },
          {
            question: '$\\int x\\ln x\\,dx = $',
            options: ['$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$', '$\\frac{x^2}{2}\\ln x + C$', '$x\\ln x - x + C$', '$\\frac{x^2}{4}\\ln x + C$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $dv = x\\,dx$. $\\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
