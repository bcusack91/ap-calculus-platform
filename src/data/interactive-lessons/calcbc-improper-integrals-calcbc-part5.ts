export const calcbcImproperPart5Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp5-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 5 of 7 — Both-Sided Improper Integrals**

### Integrals from $-\infty$ to $\infty$

$$\int_{-\infty}^{\infty} f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^{\infty} f(x)\,dx$$

**Both** must converge independently!`
    },
    {
      id: 'imp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Full Line Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2}\\,dx$.',
            options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = [\\arctan x]_{-\\infty}^{\\infty} = \\frac{\\pi}{2} - (-\\frac{\\pi}{2}) = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'imp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Split at any point $c$ (usually 0) and evaluate each half.`
    }
  ]
};
