export const calcabAccumulationPart6Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc6-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 6 of 7 \u2014 Practice Workshop**`
    },
    {
      id: 'acc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Accumulation Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $F(x) = \\int_2^x (t^2 - 5t + 6)\\,dt$, find the values of $x$ where $F$ has local extrema.',
            options: ['$x = 2$ and $x = 3$', '$x = 3$ only', '$x = 2$ only', '$x = 1$ and $x = 6$'],
            correctAnswer: 0,
            explanation: '$F\'(x) = x^2 - 5x + 6 = (x-2)(x-3) = 0$ at $x = 2$ and $x = 3$. Check sign changes: $F\'$ goes $+ \\to - \\to +$ at these points, so local max at $x=2$, local min at $x=3$. Actually $F\'$ is $(x-2)(x-3)$: positive for $x<2$, negative for $2<x<3$, positive for $x>3$. So local max at $x=2$ and local min at $x=3$.'
          }
        ]
      }
    },
    {
      id: 'acc6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
