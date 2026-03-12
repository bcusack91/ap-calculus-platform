export const calcabUSubPart3Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub3-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 3 of 7 — u-Substitution with Definite Integrals**

### Two Approaches

**Method 1: Change the limits** (recommended)
When you substitute $u = g(x)$, change the limits: if $x = a$ then $u = g(a)$, if $x = b$ then $u = g(b)$.

**Method 2: Back-substitute** 
Find the antiderivative in terms of $x$, then evaluate at the original limits.

### Worked Example — Method 1

$$\\int_0^2 x(x^2+1)^3\\,dx$$

Let $u = x^2 + 1$, $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$.

Change limits: $x=0 \\Rightarrow u=1$, $x=2 \\Rightarrow u=5$.

$$\\frac{1}{2}\\int_1^5 u^3\\,du = \\frac{1}{2} \\cdot \\frac{u^4}{4}\\bigg|_1^5 = \\frac{1}{8}(625 - 1) = \\frac{624}{8} = 78$$`
    },
    {
      id: 'usub3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Definite Integrals with u-Sub** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi/2} \\sin x \\cos x\\,dx$.',
            options: ['$1$', '$\\frac{1}{2}$', '$0$', '$\\frac{\\pi}{4}$'],
            correctAnswer: 1,
            explanation: 'Let $u = \\sin x$, $du = \\cos x\\,dx$. Limits: $x=0 \\Rightarrow u=0$, $x=\\pi/2 \\Rightarrow u=1$. $\\int_0^1 u\\,du = \\frac{u^2}{2}\\Big|_0^1 = \\frac{1}{2}$.'
          },
          {
            question: 'Evaluate $\\int_0^1 \\frac{2x}{(x^2+1)^2}\\,dx$.',
            options: ['$\\frac{1}{2}$', '$1$', '$\\frac{1}{4}$', '$\\ln 2$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$. Limits: $u=1$ to $u=2$. $\\int_1^2 u^{-2}\\,du = [-u^{-1}]_1^2 = -\\frac{1}{2} + 1 = \\frac{1}{2}$.'
          },
          {
            question: 'Evaluate $\\int_1^e \\frac{\\ln x}{x}\\,dx$.',
            options: ['$1$', '$\\frac{1}{2}$', '$e-1$', '$\\frac{1}{e}$'],
            correctAnswer: 1,
            explanation: 'Let $u = \\ln x$, $du = \\frac{1}{x}\\,dx$. Limits: $x=1 \\Rightarrow u=0$, $x=e \\Rightarrow u=1$. $\\int_0^1 u\\,du = \\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'usub3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. For definite integrals, **change the limits** to $u$-values to avoid back-substituting
2. If $u = g(x)$: new lower = $g(a)$, new upper = $g(b)$
3. After changing limits, evaluate entirely in $u$ — never mix $u$ and $x$`
    }
  ]
};
