export const calcbcAdvIntegrationPart4Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv4-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 4 of 7 — Improper Integrals Revisited**

### Type I: Infinite Limits

$\int_1^{\infty} \frac{1}{x^p}\,dx$ converges iff $p > 1$

### Type II: Discontinuities

$\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{a \to 0^+}\int_a^1 x^{-1/2}\,dx = \lim_{a \to 0^+} [2\sqrt{x}]_a^1 = 2$

### Comparison Test for Integrals

If $0 \leq f(x) \leq g(x)$:
- $\int g$ converges $\implies$ $\int f$ converges
- $\int f$ diverges $\implies$ $\int g$ diverges`
    },
    {
      id: 'adv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Improper** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx$ converge?',
            options: ['Yes (compare to $1/x^2$, or just compute: $\\arctan(\\infty) - \\arctan(1) = \\pi/4$)', 'No', 'Cannot determine', 'Depends on bounds'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x^2+1} \\leq \\frac{1}{x^2}$ and $\\int_1^{\\infty} 1/x^2$ converges. So this converges. Value: $\\pi/2 - \\pi/4 = \\pi/4$.'
          }
        ]
      }
    },
    {
      id: 'adv4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
$p$-test: $\\int_1^{\\infty} 1/x^p$ converges iff $p > 1$. Use comparison for harder integrals.`
    }
  ]
};
