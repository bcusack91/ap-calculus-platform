export const calcabUSubPart2Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub2-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 2 of 7 — Adjusting for Missing Constants**

### When $du$ Doesn't Match Exactly

Often the coefficient doesn't match perfectly. You can **multiply and divide** by constants to fix this.

### Worked Example

$$\\int x^2 e^{x^3}\\,dx$$

Let $u = x^3$, then $du = 3x^2\\,dx$. We have $x^2\\,dx$ but need $3x^2\\,dx$.

$$\\int x^2 e^{x^3}\\,dx = \\frac{1}{3}\\int 3x^2 e^{x^3}\\,dx = \\frac{1}{3}\\int e^u\\,du = \\frac{e^{x^3}}{3} + C$$

### Common Patterns to Recognize

| Integral Pattern | Substitution | Result |
|-----------------|-------------|--------|
| $\\int f(ax+b)\\,dx$ | $u = ax+b$ | $\\frac{1}{a}F(ax+b) + C$ |
| $\\int x^{n-1}f(x^n)\\,dx$ | $u = x^n$ | $\\frac{1}{n}F(x^n) + C$ |
| $\\int f(\\sin x)\\cos x\\,dx$ | $u = \\sin x$ | $F(\\sin x) + C$ |
| $\\int \\frac{f'(x)}{f(x)}\\,dx$ | $u = f(x)$ | $\\ln|f(x)| + C$ |`
    },
    {
      id: 'usub2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Pattern Recognition** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x}{x^2 + 4}\\,dx$.',
            options: ['$\\ln(x^2+4) + C$', '$\\frac{1}{2}\\ln|x^2+4| + C$', '$\\frac{\\ln(x^2+4)}{2x} + C$', '$\\arctan(x/2) + C$'],
            correctAnswer: 1,
            explanation: 'Let $u = x^2+4$, $du = 2x\\,dx$. So $x\\,dx = \\frac{du}{2}$. $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| + C = \\frac{1}{2}\\ln|x^2+4| + C$.'
          },
          {
            question: 'Evaluate $\\int \\sin^4(x)\\cos(x)\\,dx$.',
            options: ['$\\frac{\\sin^5(x)}{5} + C$', '$-\\frac{\\cos^5(x)}{5} + C$', '$\\frac{\\sin^4(x)}{4} + C$', '$\\sin^5(x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\sin x$, $du = \\cos x\\,dx$. $\\int u^4\\,du = \\frac{u^5}{5} = \\frac{\\sin^5(x)}{5} + C$.'
          },
          {
            question: 'Evaluate $\\int \\tan x\\,dx$.',
            options: ['$\\sec^2 x + C$', '$-\\ln|\\cos x| + C$', '$\\ln|\\sin x| + C$', '$\\sec x + C$'],
            correctAnswer: 1,
            explanation: '$\\int \\frac{\\sin x}{\\cos x}\\,dx$. Let $u = \\cos x$, $du = -\\sin x\\,dx$. $-\\int \\frac{du}{u} = -\\ln|u| = -\\ln|\\cos x| + C$.'
          }
        ]
      }
    },
    {
      id: 'usub2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. You can adjust by **constant multiples** — multiply and divide to match $du$
2. Recognize patterns: $\\frac{f'}{f} \\to \\ln|f|$, power-of-trig times derivative-of-trig
3. You CANNOT move a variable ($x$) outside the integral — only constants`
    }
  ]
};
