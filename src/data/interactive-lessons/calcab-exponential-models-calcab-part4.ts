export const calcabExpModelsPart4Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp4-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 4 of 7 — Derivatives and Integrals of Exponentials**

### Key Rules

$$\\frac{d}{dx}[e^{kx}] = ke^{kx} \\qquad \\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C$$

$$\\frac{d}{dx}[a^x] = a^x \\ln a \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$$`
    },
    {
      id: 'exp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Calculus** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^1 3e^{2x}\\,dx$.',
            options: ['$\\frac{3}{2}(e^2 - 1)$', '$3(e^2 - 1)$', '$\\frac{3}{2}e^2$', '$3e^2$'],
            correctAnswer: 0,
            explanation: '$3 \\cdot \\frac{1}{2}[e^{2x}]_0^1 = \\frac{3}{2}(e^2 - 1)$.'
          },
          {
            question: 'Find $\\int 2^x\\,dx$.',
            options: ['$\\frac{2^x}{\\ln 2} + C$', '$2^x \\ln 2 + C$', '$\\frac{2^{x+1}}{x+1} + C$', '$2^x + C$'],
            correctAnswer: 0,
            explanation: '$\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. So $\\int 2^x\\,dx = \\frac{2^x}{\\ln 2} + C$.'
          }
        ]
      }
    },
    {
      id: 'exp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. $\\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C$
2. $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$`
    }
  ]
};
