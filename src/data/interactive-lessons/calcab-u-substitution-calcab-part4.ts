export const calcabUSubPart4Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub4-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 4 of 7 — Trickier Substitutions**

### Exponential and Logarithmic Substitutions

$$\\int \\frac{e^x}{1+e^x}\\,dx$$

Let $u = 1 + e^x$, $du = e^x\\,dx$.

$$\\int \\frac{du}{u} = \\ln|u| + C = \\ln(1 + e^x) + C$$

### Substitution with Square Roots

$$\\int \\frac{x}{\\sqrt{x+1}}\\,dx$$

Let $u = x + 1$, so $x = u - 1$ and $dx = du$.

$$\\int \\frac{u-1}{u^{1/2}}\\,du = \\int (u^{1/2} - u^{-1/2})\\,du = \\frac{2}{3}u^{3/2} - 2u^{1/2} + C$$

$$= \\frac{2}{3}(x+1)^{3/2} - 2\\sqrt{x+1} + C$$`
    },
    {
      id: 'usub4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Trickier u-Substitutions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{e^{2x}}{e^{2x}+1}\\,dx$.',
            options: ['$\\ln(e^{2x}+1) + C$', '$\\frac{1}{2}\\ln(e^{2x}+1) + C$', '$\\frac{e^{2x}}{2} + C$', '$\\arctan(e^x) + C$'],
            correctAnswer: 1,
            explanation: 'Let $u = e^{2x}+1$, $du = 2e^{2x}\\,dx$. So $e^{2x}\\,dx = \\frac{du}{2}$. $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| = \\frac{1}{2}\\ln(e^{2x}+1) + C$.'
          },
          {
            question: 'Evaluate $\\int \\sec^2(x) \\cdot \\tan^3(x)\\,dx$.',
            options: ['$\\frac{\\tan^4(x)}{4} + C$', '$\\frac{\\sec^4(x)}{4} + C$', '$\\frac{\\tan^3(x)}{3} + C$', '$\\sec^2(x)\\tan(x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\tan x$, $du = \\sec^2 x\\,dx$. $\\int u^3\\,du = \\frac{u^4}{4} = \\frac{\\tan^4(x)}{4} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. For $\\frac{f'}{f}$ patterns, use $u = f$ to get $\\ln|f| + C$
2. Sometimes you need to express $x$ in terms of $u$ (e.g., $x = u - 1$)
3. Trig powers: use $u = \\sin x$ or $u = \\tan x$ when the derivative appears`
    }
  ]
};
