export const calcbcTaylorPart5Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay5-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 5 of 7 — Using Series to Evaluate Limits & Integrals**

### Limits via Taylor Series

$$\lim_{x \to 0}\frac{\sin x - x}{x^3} = \lim_{x \to 0}\frac{(x - x^3/6 + \cdots) - x}{x^3} = \lim_{x \to 0}\frac{-x^3/6 + \cdots}{x^3} = -\frac{1}{6}$$

### Integrals via Taylor Series

$\int_0^1 e^{-x^2}\,dx$: no elementary antiderivative!

$e^{-x^2} = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$

$\int_0^1 = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \cdots\right]_0^1 = 1 - 1/3 + 1/10 - 1/42 + \cdots$`
    },
    {
      id: 'tay5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series Applications** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2}$:',
            options: ['$1/2$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + \\cdots$. Divided by $x^2$: $\\frac{1}{2} - \\frac{x^2}{24} + \\cdots \\to 1/2$.'
          }
        ]
      }
    },
    {
      id: 'tay5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Taylor series elegantly evaluate limits and integrals that are otherwise difficult.`
    }
  ]
};
