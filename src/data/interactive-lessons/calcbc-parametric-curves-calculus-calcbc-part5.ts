export const calcbcParametricPart5Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param5-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 5 of 7 — Eliminating the Parameter**

### Converting to Rectangular

Sometimes useful for understanding the shape:

| Parametric | Rectangular |
|-----------|-------------|
| $x = t, y = t^2$ | $y = x^2$ |
| $x = \\cos t, y = \\sin t$ | $x^2 + y^2 = 1$ |
| $x = 2\\cos t, y = 3\\sin t$ | $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$ |`
    },
    {
      id: 'param5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Eliminating Parameter** 🎯',
      exercise: {
        questions: [
          {
            question: 'Eliminate $t$ from $x = t + 1$, $y = t^2 + 2t$.',
            options: ['$y = x^2 - 1$', '$y = x^2 + 1$', '$y = (x-1)^2$', '$y = x^2 - 2x$'],
            correctAnswer: 0,
            explanation: '$t = x - 1$. $y = (x-1)^2 + 2(x-1) = x^2 - 2x + 1 + 2x - 2 = x^2 - 1$.'
          }
        ]
      }
    },
    {
      id: 'param5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Eliminate $t$ by solving one equation for $t$ and substituting.`
    }
  ]
};
