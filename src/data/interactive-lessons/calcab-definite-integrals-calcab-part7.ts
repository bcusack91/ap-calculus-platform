export const calcabDefiniteIntegralsPart7Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int7-intro',
      type: 'text' as const,
      content: `# \u222B Review & Applications

**Part 7 of 7 \u2014 Comprehensive Review**

### Complete Integration Summary

| Concept | Key Formula |
|---------|------------|
| Riemann Sum | $\\sum f(x_i^*) \\Delta x$ |
| Definite Integral | $\\lim_{n\\to\\infty} \\sum f(x_i^*) \\Delta x$ |
| FTC Part 1 | $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ |
| FTC Part 2 | $\\int_a^b f(x)\\,dx = F(b) - F(a)$ |
| Net Change | $\\int_a^b f'(x)\\,dx = f(b) - f(a)$ |`
    },
    {
      id: 'int7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^9 \\sqrt{x}\\,dx$.',
            options: ['$9$', '$18$', '$27$', '$6$'],
            correctAnswer: 1,
            explanation: '$\\int x^{1/2}\\,dx = \\frac{2}{3}x^{3/2}$. $[\\frac{2}{3}x^{3/2}]_0^9 = \\frac{2}{3}(27) = 18$.'
          },
          {
            question: 'If $F(x) = \\int_2^x (3t + 1)\\,dt$, find $F\'(5)$.',
            options: ['$16$', '$15$', '$14$', '$32$'],
            correctAnswer: 0,
            explanation: 'FTC Part 1: $F\'(x) = 3x + 1$. $F\'(5) = 16$.'
          },
          {
            question: 'Evaluate $\\int_0^{2\\pi} \\cos x\\,dx$.',
            options: ['$0$', '$2$', '$2\\pi$', '$-2$'],
            correctAnswer: 0,
            explanation: '$[\\sin x]_0^{2\\pi} = \\sin(2\\pi) - \\sin(0) = 0 - 0 = 0$. One full period of cosine!'
          }
        ]
      }
    },
    {
      id: 'int7-summary',
      type: 'text' as const,
      content: `### Definite Integrals \u2014 Complete! \u2705

You have mastered:
- \u2705 Riemann Sums (left, right, midpoint, trapezoidal)
- \u2705 Definite integral as a limit
- \u2705 Properties of definite integrals
- \u2705 FTC Part 1 (with and without Chain Rule)
- \u2705 FTC Part 2 (evaluation)
- \u2705 Net Change Theorem and applications`
    }
  ]
};
