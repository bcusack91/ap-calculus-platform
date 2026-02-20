export const calcbcPartialFracPart7Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf7-intro',
      type: 'text' as const,
      content: `# Partial Fractions — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'pf7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x+5}{x^2+4x+3}\\,dx = $',
            options: ['$2\\ln|x+1| - \\ln|x+3| + C$', '$\\ln|x^2+4x+3| + C$', '$\\ln|x+1| + \\ln|x+3| + C$', '$\\frac{1}{2}\\ln|x^2+4x+3| + C$'],
            correctAnswer: 0,
            explanation: '$x^2+4x+3 = (x+1)(x+3)$. $\\frac{A}{x+1} + \\frac{B}{x+3}$. $x+5 = A(x+3) + B(x+1)$. $x=-1$: $4 = 2A$, $A=2$. $x=-3$: $2 = -2B$, $B=-1$.'
          }
        ]
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Partial Fractions — Complete! ✅`
    }
  ]
};
