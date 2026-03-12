export const calcabInverseFunctionsPart3Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv3-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 3 of 7 — $e^x$ and $\\ln x$ Review**

### Essential Derivatives

$$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$

$$\\frac{d}{dx}[a^x] = a^x \\ln a \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

### Logarithmic Differentiation

For complex products/quotients, take $\\ln$ of both sides first.

**Example:** $y = \\frac{x^2 \\sqrt{x+1}}{(x-3)^4}$

$\\ln y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(x-3)$

$\\frac{y'}{y} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{4}{x-3}$`
    },
    {
      id: 'inv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential & Log Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[e^{\\sin x}]$.',
            options: ['$e^{\\sin x} \\cos x$', '$e^{\\sin x}$', '$e^{\\cos x}$', '$\\cos x \\cdot e^x$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $e^{\\sin x} \\cdot \\cos x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\ln(x^2 + 1)]$.',
            options: ['$\\frac{2x}{x^2+1}$', '$\\frac{1}{x^2+1}$', '$\\frac{2x}{x}$', '$\\frac{1}{2x}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\ln(x^2+1)] = \\frac{2x}{x^2+1}$.'
          }
        ]
      }
    },
    {
      id: 'inv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. $e^x$ and $\\ln x$ are inverses with simple derivatives
2. Always apply chain rule with composite functions`
    }
  ]
};
