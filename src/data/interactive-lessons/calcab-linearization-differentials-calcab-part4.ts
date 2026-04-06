export const calcabLinearizationPart4Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin4-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 4 of 7 — Percentage Error**

### Relative and Percentage Error

$$\\text{Relative error} = \\frac{dy}{y} = \\frac{f'(x)\,dx}{f(x)}$$

$$\\text{Percentage error} = \\frac{dy}{y} \\times 100\%$$`
    },
    {
      id: 'lin4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Estimation** 🎯',
      exercise: {
        questions: [
          {
            question: 'A sphere has radius $r = 10$ cm with error $dr = \pm 0.05$ cm. Estimate the percentage error in the volume.',
            options: ['$\pm 1.5\%$', '$\pm 0.5\%$', '$\pm 3\%$', '$\pm 0.15\%$'],
            correctAnswer: 0,
            explanation: '$V = \\frac{4}{3}\\pi r^3$. $\\frac{dV}{V} = \\frac{4\\pi r^2\\,dr}{\\frac{4}{3}\\pi r^3} = \\frac{3\\,dr}{r} = \\frac{3(0.05)}{10} = 0.015 = 1.5\\%$.'
          }
        ]
      }
    },
    {
      id: 'lin4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Relative error = $dy/y$
2. For $V = \\frac{4}{3}\\pi r^3$: percentage error in $V$ = $3 \\times$ percentage error in $r$`
    }
  ]
};
