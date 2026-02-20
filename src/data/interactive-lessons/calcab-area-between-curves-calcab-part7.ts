export const calcabAreaCurvesPart7Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area7-intro',
      type: 'text' as const,
      content: `# Area Between Curves \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**`
    },
    {
      id: 'area7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $y = x^3 - x$ and $y = 0$.',
            options: ['$\\frac{1}{2}$', '$0$', '$\\frac{1}{4}$', '$1$'],
            correctAnswer: 0,
            explanation: 'Roots: $x(x-1)(x+1) = 0$ at $x = -1, 0, 1$. Total area = $\\int_{-1}^0 (x^3-x)\\,dx + \\int_0^1 (x-x^3)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$ (using symmetry).'
          },
          {
            question: 'Set up (but evaluate) the area between $y = \\ln x$, $y = 0$, and $x = e$ using $dy$.',
            options: ['$\\int_0^1 (e - e^y)\\,dy$', '$\\int_0^e \\ln x\\,dx$', '$\\int_1^e (e - x)\\,dx$', '$\\int_0^1 e^y\\,dy$'],
            correctAnswer: 0,
            explanation: 'In terms of $y$: $x = e^y$ is the left boundary. Right boundary: $x = e$. $y$ goes from $0$ to $1$ (since $\\ln e = 1$). $A = \\int_0^1 (e - e^y)\\,dy$.'
          }
        ]
      }
    },
    {
      id: 'area7-summary',
      type: 'text' as const,
      content: `### Area Between Curves \u2014 Complete! \u2705

You have mastered:
- \u2705 Area between two curves ($dx$ and $dy$)
- \u2705 When curves cross (splitting integrals)
- \u2705 Multiple regions and absolute value
- \u2705 Choosing $dx$ vs $dy$ integration`
    }
  ]
};
