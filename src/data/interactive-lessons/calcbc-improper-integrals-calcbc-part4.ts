export const calcbcImproperPart4Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp4-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 4 of 7 — Comparison Test**

### Direct Comparison Test

For $0 \leq f(x) \leq g(x)$ on $[a, \infty)$:

- If $\int_a^{\infty} g\\,dx$ converges → $\int_a^{\infty} f\\,dx$ converges
- If $\int_a^{\infty} f\\,dx$ diverges → $\int_a^{\infty} g\\,dx$ diverges

**Bigger converges → smaller converges**
**Smaller diverges → bigger diverges**`
    },
    {
      id: 'imp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comparison Test** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx$ converge?',
            options: ['Yes, by comparison with $1/x^2$', 'No', 'Cannot determine', 'Yes, equals $\\pi/4$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x^2+1} < \\frac{1}{x^2}$ and $\\int_1^{\\infty} 1/x^2\\,dx$ converges. By comparison, our integral converges.'
          }
        ]
      }
    },
    {
      id: 'imp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Comparison test: bound by a known convergent/divergent integral.`
    }
  ]
};
