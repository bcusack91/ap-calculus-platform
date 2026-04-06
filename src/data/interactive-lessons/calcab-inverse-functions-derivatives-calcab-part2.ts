export const calcabInverseFunctionsPart2Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv2-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 2 of 7 — Inverse Trigonometric Derivatives**

### Essential Formulas

$$\\frac{d}{dx}[\arcsin x] = \\frac{1}{\sqrt{1-x^2}}$$

$$\\frac{d}{dx}[\arccos x] = -\\frac{1}{\sqrt{1-x^2}}$$

$$\\frac{d}{dx}[\arctan x] = \\frac{1}{1+x^2}$$

### With Chain Rule

$$\\frac{d}{dx}[\arctan(g(x))] = \\frac{g'(x)}{1+(g(x))^2}$$`
    },
    {
      id: 'inv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[\\arctan(3x)]$.',
            options: ['$\\frac{3}{1+9x^2}$', '$\\frac{1}{1+9x^2}$', '$\\frac{3}{1+3x^2}$', '$\\frac{1}{\\sqrt{1-9x^2}}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\arctan(3x)] = \\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\arcsin(x^2)]$.',
            options: ['$\\frac{2x}{\\sqrt{1-x^4}}$', '$\\frac{1}{\\sqrt{1-x^4}}$', '$\\frac{2x}{\\sqrt{1-x^2}}$', '$\\frac{x}{\\sqrt{1-x^4}}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\arcsin(x^2)] = \\frac{2x}{\\sqrt{1-(x^2)^2}} = \\frac{2x}{\\sqrt{1-x^4}}$.'
          }
        ]
      }
    },
    {
      id: 'inv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Memorize the three inverse trig derivatives
2. Always apply chain rule with composite functions`
    }
  ]
};
