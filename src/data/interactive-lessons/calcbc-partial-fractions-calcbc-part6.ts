export const calcbcPartialFracPart6Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf6-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'pf6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{2x+3}{(x+1)(x+2)}\\,dx = $',
            options: ['$\\ln|x+1| + \\ln|x+2| + C$', '$\\ln|x+1| - \\ln|x+2| + C$', '$2\\ln|x+1| + C$', '$\\ln|(x+1)(x+2)| + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{A}{x+1} + \\frac{B}{x+2}$. $2x+3 = A(x+2) + B(x+1)$. $x=-1$: $1 = A$. $x=-2$: $-1 = -B$, $B = 1$. $\\int \\frac{1}{x+1} + \\frac{1}{x+2}\\,dx = \\ln|x+1| + \\ln|x+2| + C$.'
          }
        ]
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
