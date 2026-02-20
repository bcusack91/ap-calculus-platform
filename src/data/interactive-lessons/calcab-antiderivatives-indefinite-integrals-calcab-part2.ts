export const calcabAntiderivativesPart2Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti2-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 2 of 7 — Essential Antiderivative Formulas**

### Complete Table of Basic Antiderivatives

| Function | Antiderivative |
|----------|---------------|
| $x^n$ $(n \\neq -1)$ | $\\frac{x^{n+1}}{n+1} + C$ |
| $\\frac{1}{x}$ | $\\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\\frac{a^x}{\\ln a} + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\sec^2 x$ | $\\tan x + C$ |
| $\\csc^2 x$ | $-\\cot x + C$ |
| $\\sec x \\tan x$ | $\\sec x + C$ |
| $\\csc x \\cot x$ | $-\\csc x + C$ |
| $\\frac{1}{\\sqrt{1-x^2}}$ | $\\arcsin x + C$ |
| $\\frac{1}{1+x^2}$ | $\\arctan x + C$ |

> **Memorize this table!** These are the building blocks of all integration.`
    },
    {
      id: 'anti2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Essential Antiderivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (3\\sin x + 2e^x)\\,dx$.',
            options: ['$-3\\cos x + 2e^x + C$', '$3\\cos x + 2e^x + C$', '$-3\\cos x + e^{2x} + C$', '$3\\sin x + 2e^x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 3\\sin x\\,dx + \\int 2e^x\\,dx = -3\\cos x + 2e^x + C$.'
          },
          {
            question: 'Evaluate $\\int \\left(\\frac{4}{x} + \\sec^2 x\\right)\\,dx$.',
            options: ['$4\\ln x + \\tan x + C$', '$4\\ln|x| + \\tan x + C$', '$\\frac{4}{x^2} + \\sec x + C$', '$4\\ln|x| + \\sec x + C$'],
            correctAnswer: 1,
            explanation: '$\\int \\frac{4}{x}\\,dx + \\int \\sec^2 x\\,dx = 4\\ln|x| + \\tan x + C$. Note the absolute value on $\\ln$!'
          },
          {
            question: 'Evaluate $\\int 5^x\\,dx$.',
            options: ['$5^x + C$', '$\\frac{5^{x+1}}{x+1} + C$', '$\\frac{5^x}{\\ln 5} + C$', '$x \\cdot 5^{x-1} + C$'],
            correctAnswer: 2,
            explanation: '$\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. So $\\int 5^x\\,dx = \\frac{5^x}{\\ln 5} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. Memorize the complete table of basic antiderivatives
2. $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ (absolute value matters!)
3. $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$ (not the power rule!)
4. Linearity: $\\int [af + bg]\\,dx = a\\int f\\,dx + b\\int g\\,dx$`
    }
  ]
};
