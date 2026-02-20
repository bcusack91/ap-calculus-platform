export const calcabAntiderivativesPart5Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti5-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 5 of 7 — Inverse Trig Antiderivatives**

### Three Key Formulas

$$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\,dx = \\arcsin\\left(\\frac{x}{a}\\right) + C$$

$$\\int \\frac{1}{a^2 + x^2}\\,dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$$

$$\\int \\frac{1}{x\\sqrt{x^2 - a^2}}\\,dx = \\frac{1}{a}\\text{arcsec}\\left(\\frac{|x|}{a}\\right) + C$$

### Recognition is Key

The AP Exam tests whether you can **recognize** these forms:

- Square root of $a^2 - x^2$ in denominator → $\\arcsin$
- Sum of squares $a^2 + x^2$ in denominator → $\\arctan$`
    },
    {
      id: 'anti5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{1}{\\sqrt{9 - x^2}}\\,dx$.',
            options: ['$\\arcsin\\left(\\frac{x}{3}\\right) + C$', '$\\arcsin(3x) + C$', '$3\\arcsin(x) + C$', '$\\arctan\\left(\\frac{x}{3}\\right) + C$'],
            correctAnswer: 0,
            explanation: '$a = 3$: $\\int \\frac{1}{\\sqrt{9-x^2}}\\,dx = \\arcsin(x/3) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{4 + x^2}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$', '$\\arctan\\left(\\frac{x}{2}\\right) + C$', '$\\frac{1}{4}\\arctan(x) + C$', '$\\ln|4+x^2| + C$'],
            correctAnswer: 0,
            explanation: '$a = 2$: $\\int \\frac{1}{4+x^2}\\,dx = \\frac{1}{2}\\arctan(x/2) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{3}{\\sqrt{1 - 4x^2}}\\,dx$.',
            options: ['$3\\arcsin(2x) + C$', '$\\frac{3}{2}\\arcsin(2x) + C$', '$3\\arcsin(4x) + C$', '$\\frac{3}{4}\\arcsin(2x) + C$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $\\frac{3}{\\sqrt{1-(2x)^2}}$. Let $u = 2x$, $du = 2\\,dx$. $\\frac{3}{2}\\int \\frac{du}{\\sqrt{1-u^2}} = \\frac{3}{2}\\arcsin(u) = \\frac{3}{2}\\arcsin(2x) + C$.'
          }
        ]
      }
    },
    {
      id: 'anti5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. $\\sqrt{a^2 - x^2}$ in denominator → $\\arcsin(x/a)$
2. $a^2 + x^2$ in denominator → $\\frac{1}{a}\\arctan(x/a)$
3. Often need u-sub to get into the standard form first`
    }
  ]
};
