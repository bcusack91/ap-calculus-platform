export const calcabUSubPart7Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub7-intro',
      type: 'text' as const,
      content: `# u-Substitution Review

**Part 7 of 7 — Comprehensive Assessment**

### Quick Reference

| Pattern | Substitution |
|---------|-------------|
| $\\int f(g(x)) \\cdot g'(x)\\,dx$ | $u = g(x)$ |
| $\\int \\frac{f'(x)}{f(x)}\\,dx$ | $u = f(x) \\to \\ln|f|$ |
| $\\int f(ax+b)\\,dx$ | $u = ax+b$ |`
    },
    {
      id: 'usub7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi} x \\cos(x^2)\\,dx$.',
            options: ['$\\frac{\\sin(\\pi^2)}{2}$', '$\\sin(\\pi^2)$', '$0$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2$, $du = 2x\\,dx$. Limits: $u=0$ to $u=\\pi^2$. $\\frac{1}{2}\\int_0^{\\pi^2} \\cos u\\,du = \\frac{1}{2}[\\sin u]_0^{\\pi^2} = \\frac{\\sin(\\pi^2)}{2}$.'
          },
          {
            question: 'Evaluate $\\int e^x \\sin(e^x)\\,dx$.',
            options: ['$-\\cos(e^x) + C$', '$\\cos(e^x) + C$', '$e^x\\cos(e^x) + C$', '$\\sin(e^x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = e^x$, $du = e^x\\,dx$. $\\int \\sin(u)\\,du = -\\cos(u) + C = -\\cos(e^x) + C$.'
          },
          {
            question: 'Evaluate $\\int_0^1 x^2 e^{x^3+1}\\,dx$.',
            options: ['$\\frac{e^2-e}{3}$', '$e^2 - e$', '$\\frac{e^2}{3}$', '$e - 1$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^3+1$, $du = 3x^2\\,dx$. Limits: $u=1$ to $u=2$. $\\frac{1}{3}\\int_1^2 e^u\\,du = \\frac{1}{3}(e^2-e) = \\frac{e^2-e}{3}$.'
          }
        ]
      }
    },
    {
      id: 'usub7-summary',
      type: 'text' as const,
      content: `### u-Substitution — Complete! ✅

You have mastered:
- ✅ Basic u-substitution
- ✅ Adjusting for missing constants
- ✅ Definite integrals with changed limits
- ✅ Trickier substitutions (exponential, log, trig)
- ✅ Long division and completing the square
- ✅ Pattern recognition strategies`
    }
  ]
};
