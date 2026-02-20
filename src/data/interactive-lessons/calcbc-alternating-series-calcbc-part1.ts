export const calcbcAlternatingPart1Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt1-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 1 of 7 — The Alternating Series Test**

### Alternating Series Test (Leibniz Test)

$\sum_{n=1}^{\infty} (-1)^{n+1} b_n$ converges if:

1. $b_n > 0$ (terms are positive)
2. $b_{n+1} \leq b_n$ (decreasing)
3. $\lim_{n \to \infty} b_n = 0$

### Examples

$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots = \ln 2$

This is the **alternating harmonic series** — it converges!`
    },
    {
      id: 'alt1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Alternating Series Test** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$ converge?',
            options: ['Yes, by AST', 'No', 'Need ratio test', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$b_n = 1/\\sqrt{n}$: positive ✓, decreasing ✓, limit $0$ ✓. Converges by AST.'
          },
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n \\cdot n}{n+1}$ converge?',
            options: ['No, $b_n \\to 1 \\neq 0$', 'Yes by AST', 'Conditionally', 'Need more info'],
            correctAnswer: 0,
            explanation: '$b_n = n/(n+1) \\to 1 \\neq 0$. The terms do not go to zero. Diverges by the divergence test!'
          }
        ]
      }
    },
    {
      id: 'alt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
AST: decreasing positive terms going to zero → converges.`
    }
  ]
};
