export const calcbcSeriesPart1Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser1-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 1 of 7 — Partial Sums & Geometric Series**

### Partial Sums

$$S_n = \sum_{k=1}^n a_k = a_1 + a_2 + \cdots + a_n$$

$\sum_{n=1}^{\infty} a_n = L$ means $\lim_{n \\to \infty} S_n = L$.

### Geometric Series

$$\sum_{n=0}^{\infty} ar^n = \\frac{a}{1-r} \quad \\text{if } |r| < 1$$

Diverges if $|r| \geq 1$.

### Example

$\sum_{n=0}^{\infty} \\frac{3}{4^n} = \\frac{3}{1 - 1/4} = 4$`
    },
    {
      id: 'ser1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Geometric Series** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{2}{3}\\right)^n = $',
            options: ['$2$', '$3$', '$2/3$', '$3/2$'],
            correctAnswer: 0,
            explanation: '$\\sum_{n=1}^{\\infty} (2/3)^n = \\frac{2/3}{1 - 2/3} = \\frac{2/3}{1/3} = 2$.'
          },
          {
            question: '$\\sum_{n=0}^{\\infty} (-1)^n \\cdot \\frac{1}{2^n} = $',
            options: ['$2/3$', '$1/2$', '$1$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'Geometric with $r = -1/2$: $\\frac{1}{1-(-1/2)} = \\frac{1}{3/2} = 2/3$.'
          }
        ]
      }
    },
    {
      id: 'ser1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Geometric: $\\frac{a}{1-r}$ when $|r| < 1$. First ratio, then answer!`
    }
  ]
};
