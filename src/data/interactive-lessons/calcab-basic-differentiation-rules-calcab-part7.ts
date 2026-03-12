export const calcabBasicDiffPart7Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff7-intro',
      type: 'text' as const,
      content: `# 📐 Review & Applications

**Part 7 of 7 — Comprehensive Review**

### Complete Derivative Reference

| Rule | Formula |
|------|---------|
| Power | $\\frac{d}{dx}x^n = nx^{n-1}$ |
| Constant Multiple | $\\frac{d}{dx}[cf] = cf'$ |
| Sum/Difference | $\\frac{d}{dx}[f \\pm g] = f' \\pm g'$ |
| Product | $(fg)' = f'g + fg'$ |
| Quotient | $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ |
| Chain | $\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$ |

### Special Derivatives

| Function | Derivative |
|----------|-----------|
| $e^x$ | $e^x$ |
| $\\ln x$ | $\\frac{1}{x}$ |
| $a^x$ | $a^x \\ln a$ |
| $\\log_a x$ | $\\frac{1}{x \\ln a}$ |`
    },
    {
      id: 'diff7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(x^2 e^x \\sin x)$ at $x = 0$.',
            options: ['$0$', '$1$', '$2$', 'undefined'],
            correctAnswer: 0,
            explanation: 'At $x=0$: $f(0) = 0$. Using product rule with three functions or just noting that $x^2$ makes the whole expression and its derivative zero at $x=0$, since $f(x) = x^2 \\cdot (e^x \\sin x)$ and $f\'(0) = 2(0)e^0\\sin 0 + 0 \\cdot [\\text{stuff}] = 0$.'
          },
          {
            question: 'If $f(x) = \\frac{x^2+1}{x^2-1}$, where is $f\'(x) = 0$?',
            options: ['$x = 0$', '$x = 1$', 'Nowhere — $f\'(x)$ is never zero', '$x = \\pm 1$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\frac{2x(x^2-1) - (x^2+1)(2x)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$. This equals 0 when $x = 0$.'
          },
          {
            question: 'Find the 50th derivative of $\\cos x$.',
            options: ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'],
            correctAnswer: 1,
            explanation: 'The cycle repeats every 4: $\\cos x, -\\sin x, -\\cos x, \\sin x, \\cos x, ...$. $50 = 4(12) + 2$, so the 50th derivative matches the 2nd: $-\\cos x$.'
          }
        ]
      }
    },
    {
      id: 'diff7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A function $f$ satisfies $f(1) = 3$, $f\'(1) = -2$. If $g(x) = x^2 f(x)$, find $g\'(1)$.',
            options: ['$-2$', '$4$', '$6$', '$2$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = 2xf(x) + x^2f\'(x)$. At $x=1$: $g\'(1) = 2(1)(3) + (1)(-2) = 6 - 2 = 4$.'
          },
          {
            question: 'Find the equation of the tangent line to $y = x^3 - 4x$ at $x = 2$.',
            options: ['$y = 8x - 16$', '$y = 8x - 8$', '$y = 8(x-2)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$y(2) = 8-8 = 0$. $y\'(x) = 3x^2-4$, $y\'(2) = 12-4 = 8$. Tangent: $y - 0 = 8(x-2)$, i.e., $y = 8x - 16$. Both A and C are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff7-summary',
      type: 'text' as const,
      content: `### Basic Differentiation Rules — Complete! ✅

You have mastered:
- ✅ Power Rule (including negative/fractional exponents)
- ✅ Product Rule
- ✅ Quotient Rule
- ✅ All six trig derivatives
- ✅ Higher-order derivatives and their applications
- ✅ Combining multiple rules

**Ready to move on to the Chain Rule!**`
    }
  ]
};
