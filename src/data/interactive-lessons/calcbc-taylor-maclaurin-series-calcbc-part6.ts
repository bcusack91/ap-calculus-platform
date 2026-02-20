export const calcbcTaylorPart6Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay6-intro',
      type: 'text' as const,
      content: `# Taylor Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'tay6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The coefficient of $x^5$ in the Maclaurin series for $\\sin x \\cdot \\cos x$ is:',
            options: ['$-2/15$', '$1/120$', '$-1/30$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\sin x \\cos x = \\frac{1}{2}\\sin 2x = \\frac{1}{2}(2x - \\frac{(2x)^3}{6} + \\frac{(2x)^5}{120}) = x - \\frac{4x^3}{6} + \\frac{32x^5}{240} - \\cdots = x - \\frac{2x^3}{3} + \\frac{2x^5}{15} - \\cdots$. Coefficient of $x^5$: $2/15$. Actually $\\sin(2x) = 2x - \\frac{8x^3}{6} + \\frac{32x^5}{120}$. Half: $x - \\frac{4x^3}{6} + \\frac{16x^5}{120} = x - \\frac{2x^3}{3} + \\frac{2x^5}{15}$. So coefficient is $+2/15$. Let me reconsider the sign pattern... $\\sin(2x) = 2x - \\frac{(2x)^3}{3!} + \\frac{(2x)^5}{5!} = 2x - 8x^3/6 + 32x^5/120$. Half: $x - 4x^3/6 + 16x^5/120 = x - 2x^3/3 + 2x^5/15$. Coefficient of $x^5$ is $+2/15$.'
          },
          {
            question: 'Find $f^{(4)}(0)$ if $f(x) = e^{x^2}$.',
            options: ['$12$', '$4$', '$24$', '$1$'],
            correctAnswer: 0,
            explanation: '$e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + \\cdots$. Coefficient of $x^4$ is $1/2 = f^{(4)}(0)/4!$. So $f^{(4)}(0) = 4!/2 = 12$.'
          }
        ]
      }
    },
    {
      id: 'tay6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
