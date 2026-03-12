export const calcabInverseFunctionsPart5Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv5-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 5 of 7 — Integrals Leading to Inverse Trig**

### Key Antiderivatives

$$\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx = \\arcsin x + C$$

$$\\int \\frac{1}{1+x^2}\\,dx = \\arctan x + C$$

### General Forms

$$\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,dx = \\arcsin\\frac{x}{a} + C$$

$$\\int \\frac{1}{a^2+x^2}\\,dx = \\frac{1}{a}\\arctan\\frac{x}{a} + C$$`
    },
    {
      id: 'inv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^1 \\frac{1}{1+x^2}\\,dx$.',
            options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$1$', '$\\arctan 1$'],
            correctAnswer: 0,
            explanation: '$[\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{4+x^2}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\frac{x}{2} + C$', '$\\arctan\\frac{x}{2} + C$', '$\\frac{1}{4}\\arctan\\frac{x}{4} + C$', '$\\arctan 2x + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\frac{dx}{4+x^2} = \\frac{1}{2}\\arctan\\frac{x}{2} + C$ using the formula with $a = 2$.'
          }
        ]
      }
    },
    {
      id: 'inv5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Recognize when an integral leads to $\\arcsin$ or $\\arctan$
2. Use the general forms with parameter $a$`
    }
  ]
};
