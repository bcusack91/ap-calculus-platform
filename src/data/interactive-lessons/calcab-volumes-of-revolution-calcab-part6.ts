export const calcabVolumesPart6Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol6-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'vol6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Volume Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Region between $y = e^x$, $y = 1$, $x = 0$, $x = 1$ rotated about the $x$-axis.',
            options: ['$\\frac{\\pi(e^2 - 3)}{2}$', '$\\pi(e - 1)$', '$\\frac{\\pi(e^2-1)}{2}$', '$\\pi e^2$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1 (e^{2x} - 1)\\,dx = \\pi[\\frac{e^{2x}}{2} - x]_0^1 = \\pi(\\frac{e^2}{2} - 1 - \\frac{1}{2}) = \\frac{\\pi(e^2-3)}{2}$.'
          },
          {
            question: 'Base: region between $y = 1 - x^2$ and $y = 0$. Cross-sections perpendicular to the $x$-axis are semicircles. Set up the volume.',
            options: ['$\\int_{-1}^1 \\frac{\\pi(1-x^2)^2}{8}\\,dx$', '$\\int_{-1}^1 \\frac{\\pi(1-x^2)^2}{2}\\,dx$', '$\\int_{-1}^1 \\pi(1-x^2)^2\\,dx$', '$\\int_{-1}^1 \\frac{(1-x^2)^2}{4}\\,dx$'],
            correctAnswer: 0,
            explanation: 'Diameter $= 1-x^2$, so radius $= \\frac{1-x^2}{2}$. Area of semicircle $= \\frac{\\pi r^2}{2} = \\frac{\\pi(1-x^2)^2}{8}$.'
          }
        ]
      }
    },
    {
      id: 'vol6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
