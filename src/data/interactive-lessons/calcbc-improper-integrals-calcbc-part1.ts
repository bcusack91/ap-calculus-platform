export const calcbcImproperPart1Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp1-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 1 of 7 — Infinite Limits of Integration**

### Type 1: Infinite Bounds

$$\int_a^{\infty} f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$$

- If the limit exists → the integral **converges**
- If the limit is $\pm\infty$ or DNE → the integral **diverges**

### Classic Example

$$\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty}\left(-\frac{1}{b} + 1\right) = 1$$

Converges! The infinite area under $1/x^2$ is exactly $1$.`
    },
    {
      id: 'imp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Infinite Bounds** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x}\\,dx$ converge or diverge?',
            options: ['Diverges', 'Converges to $1$', 'Converges to $0$', 'Converges to $\\ln 2$'],
            correctAnswer: 0,
            explanation: '$\\lim_{b \\to \\infty} [\\ln x]_1^b = \\lim_{b \\to \\infty} \\ln b = \\infty$. Diverges!'
          },
          {
            question: 'Evaluate $\\int_0^{\\infty} e^{-x}\\,dx$.',
            options: ['$1$', '$0$', '$\\infty$', '$e$'],
            correctAnswer: 0,
            explanation: '$\\lim_{b \\to \\infty}[-e^{-x}]_0^b = \\lim_{b \\to \\infty}(-e^{-b} + 1) = 0 + 1 = 1$.'
          }
        ]
      }
    },
    {
      id: 'imp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Replace $\\infty$ with a limit variable
2. Evaluate, then take the limit
3. $\\int_1^{\\infty} 1/x\\,dx$ diverges but $\\int_1^{\\infty} 1/x^2\\,dx$ converges`
    }
  ]
};
