export const calcbcSeriesPart5Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser5-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 5 of 7 — Ratio & Root Tests**

### Ratio Test

$$L = \lim_{n \\to \infty} \left|\\frac{a_{n+1}}{a_n}\\right|$$

- $L < 1$: converges absolutely
- $L > 1$ (or $\infty$): diverges
- $L = 1$: inconclusive

### Root Test

$$L = \lim_{n \\to \infty} \sqrt[n]{|a_n|}$$

Same conclusions as ratio test.

**Best for**: factorials (ratio), $n$th powers (root).`
    },
    {
      id: 'ser5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Ratio & Root** 🎯',
      exercise: {
        questions: [
          {
            question: 'Test $\\sum \\frac{n!}{3^n}$ using the ratio test.',
            options: ['Diverges ($L = \\infty$)', 'Converges ($L < 1$)', 'Inconclusive', 'Converges ($L = 1/3$)'],
            correctAnswer: 0,
            explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\frac{n+1}{3} \\to \\infty$. Diverges.'
          },
          {
            question: 'Test $\\sum \\left(\\frac{n}{2n+1}\\right)^n$ using the root test.',
            options: ['Converges ($L = 1/2$)', 'Diverges', 'Inconclusive', 'Converges ($L = 0$)'],
            correctAnswer: 0,
            explanation: '$\\sqrt[n]{|a_n|} = \\frac{n}{2n+1} \\to \\frac{1}{2} < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'ser5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Ratio test for factorials; root test for $n$th powers. Both inconclusive at $L = 1$.`
    }
  ]
};
