export const calcabDiffEqPart3Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de3-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 3 of 7 \u2014 Slope Fields**

### What is a Slope Field?

A **slope field** (direction field) is a visual representation of a DE. At each point $(x, y)$, a small line segment shows the slope $\\frac{dy}{dx}$.

### Reading Slope Fields

| Observation | Meaning |
|------------|---------|
| All slopes horizontal where $y = 2$ | $\\frac{dy}{dx} = 0$ when $y = 2$ |
| Slopes steeper as $x$ increases | DE depends on $x$ |
| Slopes same along horizontal lines | DE depends only on $y$ |
| Slopes same along vertical lines | DE depends only on $x$ |

### Matching Slope Fields to DEs

To match a slope field to a DE:
1. Check specific points: what's the slope at $(0,0)$, $(1,1)$, etc.?
2. Look for where slopes are zero (horizontal segments)
3. Look for patterns (same slopes on lines, etc.)`
    },
    {
      id: 'de3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Slope Field Analysis** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y - 1$, where are the slopes zero?',
            options: ['$y = 0$', '$y = 1$', '$x = 0$', '$x = 1$'],
            correctAnswer: 1,
            explanation: '$\\frac{dy}{dx} = y - 1 = 0$ when $y = 1$. All points on $y = 1$ have horizontal slopes.'
          },
          {
            question: 'For $\\frac{dy}{dx} = x + y$, what is the slope at $(1, -1)$?',
            options: ['$0$', '$2$', '$-2$', '$1$'],
            correctAnswer: 0,
            explanation: 'At $(1, -1)$: slope $= 1 + (-1) = 0$.'
          }
        ]
      }
    },
    {
      id: 'de3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3
1. Slope fields visualize the behavior of solutions
2. Solutions follow the slope field like flowing water
3. Check where slopes are 0, positive, or negative to match DEs`
    }
  ]
};
