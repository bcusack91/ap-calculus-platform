export const calcbcImproperPart2Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp2-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 2 of 7 — The $p$-Test**

### $p$-Integral Test

$$\int_1^{\infty} \\frac{1}{x^p}\,dx \\begin{cases} \\text{converges} & \\text{if } p > 1 \\ \\text{diverges} & \\text{if } p \leq 1 \end{cases}$$

### Key Examples

| Integral | $p$ | Result |
|----------|-----|--------|
| $\int_1^{\infty} 1/x^2\\,dx$ | $2$ | Converges (= $1$) |
| $\int_1^{\infty} 1/x\\,dx$ | $1$ | Diverges |
| $\int_1^{\infty} 1/\sqrt{x}\\,dx$ | $1/2$ | Diverges |
| $\int_1^{\infty} 1/x^3\\,dx$ | $3$ | Converges (= $1/2$) |`
    },
    {
      id: 'imp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**$p$-Test** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x^{3/2}}\\,dx$ converge or diverge?',
            options: ['Converges', 'Diverges', 'Cannot determine', 'Oscillates'],
            correctAnswer: 0,
            explanation: '$p = 3/2 > 1$, so it converges.'
          },
          {
            question: '$\\int_1^{\\infty} \\frac{1}{x^{0.99}}\\,dx$:',
            options: ['Diverges', 'Converges', 'Converges to $100$', 'Need more info'],
            correctAnswer: 0,
            explanation: '$p = 0.99 < 1$, so it diverges. Even though $0.99$ is close to $1$, the integral still diverges.'
          }
        ]
      }
    },
    {
      id: 'imp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. $p > 1$: converges. $p \\leq 1$: diverges.
2. The boundary $p = 1$ ($\\ln x$) is the dividing line`
    }
  ]
};
