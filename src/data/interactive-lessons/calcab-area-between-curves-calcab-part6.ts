export const calcabAreaCurvesPart6Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area6-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'area6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Area Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The region $R$ is bounded by $y = e^x$, $y = 1$, and $x = 2$. Find the area of $R$.',
            options: ['$e^2 - 3$', '$e^2 - 1$', '$e^2 + 1$', '$e^2 - 2$'],
            correctAnswer: 0,
            explanation: '$e^x = 1$ at $x = 0$. For $x \\in [0,2]$, $e^x \\geq 1$. $A = \\int_0^2 (e^x - 1)\\,dx = [e^x - x]_0^2 = (e^2 - 2) - (1 - 0) = e^2 - 3$.'
          },
          {
            question: 'Find the area between $y = \\sqrt{x}$ and $y = x^2$ for $x \\geq 0$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $\\sqrt{x} = x^2$ at $x = 0$ and $x = 1$. $\\sqrt{x} \\geq x^2$ on $[0,1]$. $A = \\int_0^1 (x^{1/2} - x^2)\\,dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
